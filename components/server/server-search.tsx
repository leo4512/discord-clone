"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { Search } from "lucide-react";

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";

interface ServerSearchProps {
	data: {
		label: string;
		type: "channel" | "member";
		data:
			| {
					icon: React.ReactNode;
					name: string;
					id: string;
			  }[]
			| undefined;
	}[];
}

export const ServerSearch = ({ data }: ServerSearchProps) => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const params = useParams();

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	const handleOnClick = ({
		id,
		type,
	}: {
		id: string;
		type: "channel" | "member";
	}) => {
		setOpen(false);

		if (type === "member") {
			return router.push(`/servers/${params?.serverId}/conversations/${id}`);
		}

		if (type === "channel") {
			return router.push(`/servers/${params?.serverId}/channels/${id}`);
		}
	};

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition"
			>
				<Search className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
				<p className="font-semibold text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition">
					Search
				</p>
				<kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto">
					<span className="text-xs">
						<svg
							width="10"
							height="10"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill="currentColor"
								d="M6.5 21q-1.45 0-2.475-1.025T3 17.5q0-1.45 1.025-2.475T6.5 14H8v-4H6.5q-1.45 0-2.475-1.025T3 6.5q0-1.45 1.025-2.475T6.5 3q1.45 0 2.475 1.025T10 6.5V8h4V6.5q0-1.45 1.025-2.475T17.5 3q1.45 0 2.475 1.025T21 6.5q0 1.45-1.025 2.475T17.5 10H16v4h1.5q1.45 0 2.475 1.025T21 17.5q0 1.45-1.025 2.475T17.5 21q-1.45 0-2.475-1.025T14 17.5V16h-4v1.5q0 1.45-1.025 2.475T6.5 21Zm0-2q.625 0 1.063-.438T8 17.5V16H6.5q-.625 0-1.063.438T5 17.5q0 .625.438 1.063T6.5 19Zm11 0q.625 0 1.063-.438T19 17.5q0-.625-.438-1.063T17.5 16H16v1.5q0 .625.438 1.063T17.5 19ZM10 14h4v-4h-4v4ZM6.5 8H8V6.5q0-.625-.438-1.063T6.5 5q-.625 0-1.063.438T5 6.5q0 .625.438 1.063T6.5 8ZM16 8h1.5q.625 0 1.063-.438T19 6.5q0-.625-.438-1.063T17.5 5q-.625 0-1.063.438T16 6.5V8Z"
							/>
						</svg>
					</span>
					K
				</kbd>
			</button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Search all channels and members" />
				<CommandList>
					<CommandEmpty>No results found</CommandEmpty>
					{data.map(({ label, type, data }) => {
						if (!data?.length) return null;

						return (
							<CommandGroup key={label} heading={label}>
								{data?.map(({ id, icon, name }) => {
									return (
										<CommandItem
											key={id}
											onSelect={() => handleOnClick({ id, type })}
										>
											{icon}
											<span>{name}</span>
										</CommandItem>
									);
								})}
							</CommandGroup>
						);
					})}
				</CommandList>
			</CommandDialog>
		</>
	);
};
