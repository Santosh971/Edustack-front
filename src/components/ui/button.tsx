// import * as React from "react";
// import { Slot } from "@radix-ui/react-slot";
// import { cva, type VariantProps } from "class-variance-authority";

// import { cn } from "@/lib/utils";

// const buttonVariants = cva(
//   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
//         destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//         outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//         secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//         gold: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5",
//         navy: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5",
//         "gold-outline": "border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
//         "navy-outline": "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 rounded-md px-3",
//         lg: "h-12 rounded-lg px-8 text-base",
//         xl: "h-14 rounded-xl px-10 text-lg",
//         icon: "h-10 w-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   },
// );

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//   VariantProps<typeof buttonVariants> {
//   asChild?: boolean;
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, asChild = false, ...props }, ref) => {
//     const Comp = asChild ? Slot : "button";
//     return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
//   },
// );
// Button.displayName = "Button";

// export { Button, buttonVariants };



// import * as React from "react";
// import { Slot } from "@radix-ui/react-slot";
// import { cva, type VariantProps } from "class-variance-authority";

// import { cn } from "@/lib/utils";

// const heartbeatStyle = `
//   @keyframes heartbeat {
//     0%, 100% { transform: scale(1); }
//     14% { transform: scale(1.12); }
//     28% { transform: scale(1); }
//     42% { transform: scale(1.08); }
//     56% { transform: scale(1); }
//   }
//   .btn-heartbeat-text {
//     display: inline-flex;
//     align-items: center;
//     gap: 8px;
//     animation: heartbeat 1.8s ease-in-out infinite;
//   }
// `;

// const buttonVariants = cva(
//   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
//         destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//         outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//         secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//         gold: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5",
//         navy: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5",
//         "gold-outline": "border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
//         "navy-outline": "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 rounded-md px-3",
//         lg: "h-12 rounded-lg px-8 text-base",
//         xl: "h-14 rounded-xl px-10 text-lg",
//         icon: "h-10 w-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   },
// );

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//   VariantProps<typeof buttonVariants> {
//   asChild?: boolean;
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, asChild = false, children, ...props }, ref) => {
//     const Comp = asChild ? Slot : "button";
//     return (
//       <>
//         <style>{heartbeatStyle}</style>
//         <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
//           {variant === "gold" ? (
//             <span className="btn-heartbeat-text">{children}</span>
//           ) : (
//             children
//           )}
//         </Comp>
//       </>
//     );
//   },
// );
// Button.displayName = "Button";

// export { Button, buttonVariants };


// import * as React from "react";
// import { Slot } from "@radix-ui/react-slot";
// import { cva, type VariantProps } from "class-variance-authority";

// import { cn } from "@/lib/utils";

// const heartbeatStyle = `
//   @keyframes heartbeat {
//     0%, 100% { transform: scale(1); }
//     14% { transform: scale(1.12); }
//     28% { transform: scale(1); }
//     42% { transform: scale(1.08); }
//     56% { transform: scale(1); }
//   }
//   .btn-heartbeat-text {
//     display: inline-flex;
//     align-items: center;
//     gap: 8px;
//     animation: heartbeat 1.8s ease-in-out infinite;
//   }
// `;

// const buttonVariants = cva(
//   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:scale-105 active:scale-95",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
//         destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//         outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//         secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//         gold: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg",
//         navy: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
//         "gold-outline": "border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
//         "navy-outline": "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 rounded-md px-3",
//         lg: "h-12 rounded-lg px-8 text-base",
//         xl: "h-14 rounded-xl px-10 text-lg",
//         icon: "h-10 w-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   },
// );

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//   VariantProps<typeof buttonVariants> {
//   asChild?: boolean;
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, asChild = false, children, ...props }, ref) => {
//     const Comp = asChild ? Slot : "button";
//     return (
//       <>
//         <style>{heartbeatStyle}</style>
//         <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
//           {variant === "gold" ? (
//             <span className="btn-heartbeat-text">{children}</span>
//           ) : (
//             children
//           )}
//         </Comp>
//       </>
//     );
//   },
// );
// Button.displayName = "Button";

// export { Button, buttonVariants };

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const heartbeatStyle = `
  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    14% { transform: scale(1.12); }
    28% { transform: scale(1); }
    42% { transform: scale(1.08); }
    56% { transform: scale(1); }
  }
  .btn-heartbeat-text {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    animation: heartbeat 1.8s ease-in-out infinite;
  }
`;

const buttonVariants = cva(
  // ✅ Smooth hover scale effect added here
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transform-gpu transition-transform duration-300 ease-out hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        // Custom variants
        gold:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg",
        navy:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
        "gold-outline":
          "border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
        "navy-outline":
          "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <>
        <style>{heartbeatStyle}</style>

        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {variant === "gold" ? (
            <span className="btn-heartbeat-text">{children}</span>
          ) : (
            children
          )}
        </Comp>
      </>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };