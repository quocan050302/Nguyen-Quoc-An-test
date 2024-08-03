import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [statusFilter, setStatusFilter] = useState<string>('all')

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <Tabs.Root
          className="pt-10"
          defaultValue="all"
          onValueChange={(value) => setStatusFilter(value)}
        >
          <Tabs.List className="flex items-center gap-2">
            <Tabs.Trigger
              value="all"
              className={`rounded-lg rounded-[9999px] border border-[#E2E8F0] px-6 py-3 
              text-[14px] font-bold  transition-all duration-300 ease-in-out 
              hover:bg-[#334155] hover:text-white ${
                statusFilter === 'all'
                  ? 'bg-[#334155] text-white'
                  : 'bg-white text-[#334155]'
              }`}
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger
              value="pending"
              className={`rounded-lg rounded-[9999px] border border-[#E2E8F0] px-6 py-3 
              text-[14px] font-bold  transition-all duration-300 ease-in-out 
              hover:bg-[#334155] hover:text-white ${
                statusFilter === 'pending'
                  ? 'bg-[#334155] text-white'
                  : 'bg-white text-[#334155]'
              }`}
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              value="completed"
              className={`rounded-lg rounded-[9999px] border border-[#E2E8F0] px-6 py-3 
              text-[14px] font-bold  transition-all duration-300 ease-in-out 
              hover:bg-[#334155] hover:text-white ${
                statusFilter === 'completed'
                  ? 'bg-[#334155] text-white'
                  : 'bg-white text-[#334155]'
              }`}
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
        <div className="pt-10">
          <TodoList statusFilter={statusFilter} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
