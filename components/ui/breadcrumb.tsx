import * as React from "react"
import Link from "next/link"
import { FaChevronRight, FaHome } from "react-icons/fa"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ReactNode
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  showHome?: boolean
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, items, separator, showHome = true, ...props }, ref) => {
    const allItems = showHome
      ? [{ label: "首页", href: "/", icon: <FaHome /> }, ...items]
      : items

    return (
      <nav
        ref={ref}
        aria-label="breadcrumb"
        className={cn("flex items-center space-x-2 text-sm", className)}
        {...props}
      >
        <ol className="flex items-center flex-wrap gap-2">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1
            const ItemSeparator = separator || <FaChevronRight className="text-gray-500 text-xs" />

            return (
              <li key={index} className="flex items-center gap-2">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 text-gray-400 hover:text-primary-400 transition-colors group"
                  >
                    {item.icon && (
                      <span className="group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                    )}
                    <span className="hover:underline underline-offset-4">
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <span
                    className={cn(
                      "flex items-center gap-1.5",
                      isLast
                        ? "text-primary-300 font-semibold"
                        : "text-gray-400"
                    )}
                  >
                    {item.icon && <span>{item.icon}</span>}
                    <span>{item.label}</span>
                  </span>
                )}
                {!isLast && (
                  <span className="flex items-center" aria-hidden="true">
                    {ItemSeparator}
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    )
  }
)
Breadcrumb.displayName = "Breadcrumb"

export { Breadcrumb }
