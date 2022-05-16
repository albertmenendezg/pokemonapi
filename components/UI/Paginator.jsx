import Link from "next/link"

import { Pagination } from "@nextui-org/react";

export default function Paginator({ pages, currentPage }) {
  return <Pagination total={pages}/>;
}

