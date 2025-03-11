---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 143
toc: false
icon: ""
---

Publishers and Subscribers are good but what if you want a two-way style of communication between nodes?

Server and Clients are similar to Publisher and Subscribers where they have a `Service` and Nodes can communicate through those services.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7NBOWD%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIEOekD%2B8YP1rNkBWxVlRWuqHuSLFLpyH4TxHf2EFsPCVAiEArgAp5QQqHimXFybREdISmM0U0pBqDG3Coz8wm78v0xIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONiHXqtdKnQGD0EGSrcA00gnyPbQ1bzkNver%2BR4%2BViwZzmvSsE7XUOuLmXzjz5a%2BQzU3DYtunkZn4u5ss8D4EUhjJAzn%2Fvqh2XZsf7dARAsdPykbqqt9lkJUG8X3j%2BMH4ZqmArBd7JUMQ7nuk%2Fy5%2FnURmuY8VzCOymsXh4w8TmvbWzMa8szd8wgP%2ForepUln9lUOejWuJDY6kR%2B3xT6oJqbuEosB%2B2iAElt7AcdoQP5Cy%2BsfeC0tvlZ%2BKVJ259RY%2B%2Fpr0DzV57D8oxM9Ll7q7qeiHOLrF6vwcBnFxVCXpX%2BA3T720GOtAQkSN74E3yhpcczpuDMnQHbMamG%2BBiWuYi7KeOIaUTk3b4coF5iTP0FDaIkiKPJEVylkMr1W5LZfS73VE1KW4eaewiLeteQfTexOsVgG1meDMRlCzPL9SjrsS%2B%2BnPh%2FTEbD%2BD1DyJy4ce4zMfmNRZWt5b%2B%2Fe03qRvvAMKW3tA3xcV%2FEWfCKabCZTsrPIs64NbDqaAhvsjBHdI95soWeKHNozOXB6UyrwUkO%2FjTqXdZ5fUUV811Ceq%2F5Rop916YnxW4v%2FHFX%2FVkXrkwWfUFoJph3FJdhCkMK7XJymE%2BOO%2FZ8c4EL5SzhL2EDNoG02rk7WWqfiuKRQYvNykFd33NOZe9Un3cuMKiPv74GOqUBn41HHKKZgTQXje5S4t6jq5H%2F1G0CRSVMQwQJFHaaNi0Y%2BOJS1hUtNDQwnc0m9TvbX6TkTekBMx%2F4p3SWwFrVr6AA1DyHVDNy8wBbmyFPh8mJ00wJLsl1koS8CniivHsCGCAhuxezgzjS%2BrZwElt2%2F%2Fz8hEz1%2BCaFYiOjPny0c69RdJHmeKRgnJIvJ%2Bp%2BAhCHay%2FGAgGsAcg4XmFgOC%2BK%2BkL1dyA4&X-Amz-Signature=65ca3e74a6a03262a27a5a1c53cc199ec561dfcd7f902d6bd5bf3ff130284664&X-Amz-SignedHeaders=host&x-id=GetObject)

![Service-MultipleServiceClient.gif](https://docs.ros.org/en/humble/_images/Service-MultipleServiceClient.gif)

Let's make a basic service where it just adds 2 numbers

# Server

create a file called `server.py` and import the `ROS` libraries:

```python
from example_interfaces.srv import AddTwoInts

import rclpy
from rclpy.node import Node
```

Then create a class `MinimalService` that implements `Node`

```python
class MinimalService(Node):
```

in the constructor run the parent constructor and create a service object:

```python
    def __init__(self):
        super().__init__("minimal_service")
        self.srv = self.create_service(AddTwoInts, "add_two_ints", self.add_two_ints_callback)
```

The service object takes the type it expects, the name, and the function to handle the request.

Next, create the function to handle the request and have it return the result of the sum.

```python
    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info("Incoming request\na: "+ str(request.a) +" b: " + str(request.b))
        return response
```

Then outside of the class, we want to start the node:

```python
def main():
    rclpy.init()                        # initializes the ROS library

    minimal_service = MinimalService()  # creates our MinimalService obj

    rclpy.spin(minimal_service)         # causes minimal_service to loop

    rclpy.shutdown()                    # deinits the ROS library


if __name__ == '__main__':
    main()
```

## Solution

```python
from example_interfaces.srv import AddTwoInts

import rclpy
from rclpy.node import Node


class MinimalService(Node):
    def __init__(self):
        super().__init__("minimal_service")
        self.srv = self.create_service(AddTwoInts, "add_two_ints", self.add_two_ints_callback)

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info("Incoming request\na: "+ str(request.a) +" b: " + str(request.b))
        return response


def main():
    rclpy.init()                        # initializes the ROS library

    minimal_service = MinimalService()  # creates our MinimalService obj

    rclpy.spin(minimal_service)         # causes minimal_service to loop

    rclpy.shutdown()                    # deinits the ROS library


if __name__ == '__main__':
    main()
```

# Client

For the client lets have it where it takes in the two numbers as input arguments before we run it: `python3 client.py 2 3`

create a file called client`.py` and import the `ROS` libraries:

```python
import sys

from example_interfaces.srv import AddTwoInts
import rclpy
from rclpy.node import Node
```

create a class called `MinimalClientAsync` and extend the `Node` class

```python
class MinimalClientAsync(Node):
```

in the constructor run the parent class’s constructor and create a client object and a request object.

Then we try to connect the client with the service by using `while`. This will search for 1 second for the service `"add_two_ints"` before it gives up. 

```python
    def __init__(self):
        super().__init__("minimal_client_async")
        self.cli = self.create_client(AddTwoInts, "add_two_ints")
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info("service not available, waiting again...")
        self.req = AddTwoInts.Request()

```

Next lets create a function, `send_request()` to take in two numbers and call the service:

```python
	def send_request(self, a, b):
		self.req.a = a
		self.req.b = b
		return self.cli.call_async(self.req) # uses client object to call the service
```

Then outside of the class we want to run our new Node so first init the `ROS` library with:

```python
rclpy.init()
```

Then create a `MinimalClientAsync()` object.

We are then going to take the two input arguments with `sys.argv[1]` and `sys.argv[2]` 

plug them into `send_request` and wait for the result

To wait for a response from the service we use `rclpy.spin_until_future_complete()`

It takes in 2 arguments, the Client Node and the variable that holds the result.

finally, we get our results with `future.result()` and print it out.

```python

minimal_client = MinimalClientAsync()
future = minimal_client.send_request(int(sys.argv[1]), int(sys.argv[2]))
rclpy.spin_until_future_complete(minimal_client, future)
response = future.result()
minimal_client.get_logger().info("Result of add_two_ints: for "+ sys.argv[1] + " + " + sys.argv[2] + " = " + str(response.sum))
```

Then we shut everything down:

```python
minimal_client.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import sys

from example_interfaces.srv import AddTwoInts
import rclpy
from rclpy.node import Node


class MinimalClientAsync(Node):
    def __init__(self):
        super().__init__("minimal_client_async")
        self.cli = self.create_client(AddTwoInts, "add_two_ints")
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info("service not available, waiting again...")
        self.req = AddTwoInts.Request()

    def send_request(self, a, b):
        self.req.a = a
        self.req.b = b
        return self.cli.call_async(self.req)


def main():
    rclpy.init()

    minimal_client = MinimalClientAsync()
    future = minimal_client.send_request(int(sys.argv[1]), int(sys.argv[2]))
    rclpy.spin_until_future_complete(minimal_client, future)
    response = future.result()
    minimal_client.get_logger().info("Result of add_two_ints: for "+ sys.argv[1] + " + " + sys.argv[2] + " = " + str(response.sum))

    minimal_client.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Now that we have created a Server and Client we can run them both to see them in action

In two different terminals run the Server first then the client

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7NBOWD%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIEOekD%2B8YP1rNkBWxVlRWuqHuSLFLpyH4TxHf2EFsPCVAiEArgAp5QQqHimXFybREdISmM0U0pBqDG3Coz8wm78v0xIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONiHXqtdKnQGD0EGSrcA00gnyPbQ1bzkNver%2BR4%2BViwZzmvSsE7XUOuLmXzjz5a%2BQzU3DYtunkZn4u5ss8D4EUhjJAzn%2Fvqh2XZsf7dARAsdPykbqqt9lkJUG8X3j%2BMH4ZqmArBd7JUMQ7nuk%2Fy5%2FnURmuY8VzCOymsXh4w8TmvbWzMa8szd8wgP%2ForepUln9lUOejWuJDY6kR%2B3xT6oJqbuEosB%2B2iAElt7AcdoQP5Cy%2BsfeC0tvlZ%2BKVJ259RY%2B%2Fpr0DzV57D8oxM9Ll7q7qeiHOLrF6vwcBnFxVCXpX%2BA3T720GOtAQkSN74E3yhpcczpuDMnQHbMamG%2BBiWuYi7KeOIaUTk3b4coF5iTP0FDaIkiKPJEVylkMr1W5LZfS73VE1KW4eaewiLeteQfTexOsVgG1meDMRlCzPL9SjrsS%2B%2BnPh%2FTEbD%2BD1DyJy4ce4zMfmNRZWt5b%2B%2Fe03qRvvAMKW3tA3xcV%2FEWfCKabCZTsrPIs64NbDqaAhvsjBHdI95soWeKHNozOXB6UyrwUkO%2FjTqXdZ5fUUV811Ceq%2F5Rop916YnxW4v%2FHFX%2FVkXrkwWfUFoJph3FJdhCkMK7XJymE%2BOO%2FZ8c4EL5SzhL2EDNoG02rk7WWqfiuKRQYvNykFd33NOZe9Un3cuMKiPv74GOqUBn41HHKKZgTQXje5S4t6jq5H%2F1G0CRSVMQwQJFHaaNi0Y%2BOJS1hUtNDQwnc0m9TvbX6TkTekBMx%2F4p3SWwFrVr6AA1DyHVDNy8wBbmyFPh8mJ00wJLsl1koS8CniivHsCGCAhuxezgzjS%2BrZwElt2%2F%2Fz8hEz1%2BCaFYiOjPny0c69RdJHmeKRgnJIvJ%2Bp%2BAhCHay%2FGAgGsAcg4XmFgOC%2BK%2BkL1dyA4&X-Amz-Signature=54885d575f657a3edaae1310f59fb2e9d4d25cb1117fe042126e5f56baba6175&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7NBOWD%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIEOekD%2B8YP1rNkBWxVlRWuqHuSLFLpyH4TxHf2EFsPCVAiEArgAp5QQqHimXFybREdISmM0U0pBqDG3Coz8wm78v0xIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONiHXqtdKnQGD0EGSrcA00gnyPbQ1bzkNver%2BR4%2BViwZzmvSsE7XUOuLmXzjz5a%2BQzU3DYtunkZn4u5ss8D4EUhjJAzn%2Fvqh2XZsf7dARAsdPykbqqt9lkJUG8X3j%2BMH4ZqmArBd7JUMQ7nuk%2Fy5%2FnURmuY8VzCOymsXh4w8TmvbWzMa8szd8wgP%2ForepUln9lUOejWuJDY6kR%2B3xT6oJqbuEosB%2B2iAElt7AcdoQP5Cy%2BsfeC0tvlZ%2BKVJ259RY%2B%2Fpr0DzV57D8oxM9Ll7q7qeiHOLrF6vwcBnFxVCXpX%2BA3T720GOtAQkSN74E3yhpcczpuDMnQHbMamG%2BBiWuYi7KeOIaUTk3b4coF5iTP0FDaIkiKPJEVylkMr1W5LZfS73VE1KW4eaewiLeteQfTexOsVgG1meDMRlCzPL9SjrsS%2B%2BnPh%2FTEbD%2BD1DyJy4ce4zMfmNRZWt5b%2B%2Fe03qRvvAMKW3tA3xcV%2FEWfCKabCZTsrPIs64NbDqaAhvsjBHdI95soWeKHNozOXB6UyrwUkO%2FjTqXdZ5fUUV811Ceq%2F5Rop916YnxW4v%2FHFX%2FVkXrkwWfUFoJph3FJdhCkMK7XJymE%2BOO%2FZ8c4EL5SzhL2EDNoG02rk7WWqfiuKRQYvNykFd33NOZe9Un3cuMKiPv74GOqUBn41HHKKZgTQXje5S4t6jq5H%2F1G0CRSVMQwQJFHaaNi0Y%2BOJS1hUtNDQwnc0m9TvbX6TkTekBMx%2F4p3SWwFrVr6AA1DyHVDNy8wBbmyFPh8mJ00wJLsl1koS8CniivHsCGCAhuxezgzjS%2BrZwElt2%2F%2Fz8hEz1%2BCaFYiOjPny0c69RdJHmeKRgnJIvJ%2Bp%2BAhCHay%2FGAgGsAcg4XmFgOC%2BK%2BkL1dyA4&X-Amz-Signature=44f500acd32b9869816832723b798d0f9019e7c891459a9f9b9342b542b4732f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7NBOWD%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIEOekD%2B8YP1rNkBWxVlRWuqHuSLFLpyH4TxHf2EFsPCVAiEArgAp5QQqHimXFybREdISmM0U0pBqDG3Coz8wm78v0xIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONiHXqtdKnQGD0EGSrcA00gnyPbQ1bzkNver%2BR4%2BViwZzmvSsE7XUOuLmXzjz5a%2BQzU3DYtunkZn4u5ss8D4EUhjJAzn%2Fvqh2XZsf7dARAsdPykbqqt9lkJUG8X3j%2BMH4ZqmArBd7JUMQ7nuk%2Fy5%2FnURmuY8VzCOymsXh4w8TmvbWzMa8szd8wgP%2ForepUln9lUOejWuJDY6kR%2B3xT6oJqbuEosB%2B2iAElt7AcdoQP5Cy%2BsfeC0tvlZ%2BKVJ259RY%2B%2Fpr0DzV57D8oxM9Ll7q7qeiHOLrF6vwcBnFxVCXpX%2BA3T720GOtAQkSN74E3yhpcczpuDMnQHbMamG%2BBiWuYi7KeOIaUTk3b4coF5iTP0FDaIkiKPJEVylkMr1W5LZfS73VE1KW4eaewiLeteQfTexOsVgG1meDMRlCzPL9SjrsS%2B%2BnPh%2FTEbD%2BD1DyJy4ce4zMfmNRZWt5b%2B%2Fe03qRvvAMKW3tA3xcV%2FEWfCKabCZTsrPIs64NbDqaAhvsjBHdI95soWeKHNozOXB6UyrwUkO%2FjTqXdZ5fUUV811Ceq%2F5Rop916YnxW4v%2FHFX%2FVkXrkwWfUFoJph3FJdhCkMK7XJymE%2BOO%2FZ8c4EL5SzhL2EDNoG02rk7WWqfiuKRQYvNykFd33NOZe9Un3cuMKiPv74GOqUBn41HHKKZgTQXje5S4t6jq5H%2F1G0CRSVMQwQJFHaaNi0Y%2BOJS1hUtNDQwnc0m9TvbX6TkTekBMx%2F4p3SWwFrVr6AA1DyHVDNy8wBbmyFPh8mJ00wJLsl1koS8CniivHsCGCAhuxezgzjS%2BrZwElt2%2F%2Fz8hEz1%2BCaFYiOjPny0c69RdJHmeKRgnJIvJ%2Bp%2BAhCHay%2FGAgGsAcg4XmFgOC%2BK%2BkL1dyA4&X-Amz-Signature=774b2c0c6464f01b2a201aaf2437555d7a297fe05e15cb7e03968bf45c043126&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7NBOWD%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIEOekD%2B8YP1rNkBWxVlRWuqHuSLFLpyH4TxHf2EFsPCVAiEArgAp5QQqHimXFybREdISmM0U0pBqDG3Coz8wm78v0xIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONiHXqtdKnQGD0EGSrcA00gnyPbQ1bzkNver%2BR4%2BViwZzmvSsE7XUOuLmXzjz5a%2BQzU3DYtunkZn4u5ss8D4EUhjJAzn%2Fvqh2XZsf7dARAsdPykbqqt9lkJUG8X3j%2BMH4ZqmArBd7JUMQ7nuk%2Fy5%2FnURmuY8VzCOymsXh4w8TmvbWzMa8szd8wgP%2ForepUln9lUOejWuJDY6kR%2B3xT6oJqbuEosB%2B2iAElt7AcdoQP5Cy%2BsfeC0tvlZ%2BKVJ259RY%2B%2Fpr0DzV57D8oxM9Ll7q7qeiHOLrF6vwcBnFxVCXpX%2BA3T720GOtAQkSN74E3yhpcczpuDMnQHbMamG%2BBiWuYi7KeOIaUTk3b4coF5iTP0FDaIkiKPJEVylkMr1W5LZfS73VE1KW4eaewiLeteQfTexOsVgG1meDMRlCzPL9SjrsS%2B%2BnPh%2FTEbD%2BD1DyJy4ce4zMfmNRZWt5b%2B%2Fe03qRvvAMKW3tA3xcV%2FEWfCKabCZTsrPIs64NbDqaAhvsjBHdI95soWeKHNozOXB6UyrwUkO%2FjTqXdZ5fUUV811Ceq%2F5Rop916YnxW4v%2FHFX%2FVkXrkwWfUFoJph3FJdhCkMK7XJymE%2BOO%2FZ8c4EL5SzhL2EDNoG02rk7WWqfiuKRQYvNykFd33NOZe9Un3cuMKiPv74GOqUBn41HHKKZgTQXje5S4t6jq5H%2F1G0CRSVMQwQJFHaaNi0Y%2BOJS1hUtNDQwnc0m9TvbX6TkTekBMx%2F4p3SWwFrVr6AA1DyHVDNy8wBbmyFPh8mJ00wJLsl1koS8CniivHsCGCAhuxezgzjS%2BrZwElt2%2F%2Fz8hEz1%2BCaFYiOjPny0c69RdJHmeKRgnJIvJ%2Bp%2BAhCHay%2FGAgGsAcg4XmFgOC%2BK%2BkL1dyA4&X-Amz-Signature=26bb35074d24051be0b01469b35b9fc368b23b047b4152052901dd1526fef662&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
