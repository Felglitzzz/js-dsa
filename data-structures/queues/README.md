# Queues
FIFO - First in first out

## Real life examples

- People on a queue in an event
- Waitlist

## Operations

| Operations | Time Complexity       | Space Complexity      |
|------------|-----------------------|-----------------------|
| Enqueue     | o(1)  | -                     |
| Dequeue     | o(1)  | -                     |
| Peek        | o(1)  | -                     |
| Lookup      | o(n)  | -                     |
|            |                       |                       |

- Dequeue takes the first item in list because it is FIFO
- Enqueue is like push
- Peek - Tells us the first item in the array

## Why you shouldn't use array to implement Queues

You don't want to use array to implement arrays because if you unshift or remove first item of the array, you would have to shift the remaining indexes

## Strenghts

- Fast Operations
- Fast Peek
- Ordered


## Weaknesses
- Slow lookup but then they are not to be used for lookup or search