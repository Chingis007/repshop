"use client"

import { useFormContext } from "react-hook-form"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { InputHTMLAttributes } from "react"
type Props<S> = {
  fieldTitle: string
  nameInSchema: keyof S & string
  message: string
  disabled?: boolean
}
export function CheckboxWithLabel<S>({
  fieldTitle,
  nameInSchema,
  message,
  disabled = false,
}: Props<S>) {
  const form = useFormContext()
  return (
    <FormField
      name={nameInSchema}
      render={({ field }) => (
        <FormItem className="w-full flex items-center gap-2">
          <FormLabel className="text-base w-1/3 mt-2" htmlFor={nameInSchema}>
            {fieldTitle}
          </FormLabel>
          <div className="flex items-center gap-2">
            <FormControl>
              <Checkbox
                id={nameInSchema}
                {...field}
                checked={field.value}
                onCheckedChange={field.onChange}
                disabled={disabled}
              />
            </FormControl>
            {message}
          </div>
          <FormMessage />
        </FormItem>
      )}
      control={form.control}
    />
  )
}
