---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-04-05T22:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-04-05T22:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYXG2LYV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEpiAY58%2FyR0KnJESMj1t9Vw2wUhS%2BDfDK1NHnFAskDTAiEAiJcLDSUfVwNy%2BymtdhvqLkl0iwUHwk63uaDka%2FrsrasqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEH4YKMW%2BgP6TCUeyrcA%2FNRGSTBJ0fTzKqdFYBZizLGNK9q%2BGi22mPrTHitFjTqIUTaiZUIDPQ6wvPSZLjIkDTDwKCh3glZZ2rc9ZoxgyOFkbNuWe6XAJxNcMdw1Gfyn5cimwFQlVmnP4XHtZ0KZ9xoRG%2BHpKCvbBjerogwgD4W2X%2Bw6yIMFBLWc9XQBNAjW3JR%2FlOvtZgAZ8Os6j5sYzFsZqSH0cPnZU%2Bhv3CVGhWyY5dcarx0wNow69KGryQHAln8%2BDUcNFN9wYTkM8KZSPaD7MnGkfWaSf8HSxsB1PXDjoEUCkD%2BCoFYtsO7nw2uN7PwcGguMHE74r4Si9G%2BQPFtXDUbsD6TQ9Ytr5JreDI1M0%2BjBykhkI7Ej2WCmE%2FQlD3Q80T1NImO4oO%2B7KQBG4ybPFu6URvHuSZwqxz2W6%2FEJ761piSfREx8lLcA9AsVSV1O5TRETdWZu0x%2Fa54AevQlpqGsdiKwk9CNE8Fv8k7hY2ikAtIdEHOKqQsszIqh3JJQOPNUrWo%2FuJiscsUl%2BqcU0sgO7b33N0JwOeXopoPIDXBLBlvNEmft0lbN0bR2LSKMbnau9yEbFZuQVeo3inYQujvGK2Z4aLNSxrQbEswn0E%2B8Lb5zlwnqv5iLrv7NE8h0DXfJTTQ9y7aOMKqdycAGOqUBPLQNyGEjvlqxs%2FAE5T65x%2FfXPSK4qX%2Fzw8byvePl1rhb0V2ouG%2FO2kIodiQQkYx0Au4HkXY6vJ%2FP62FKgA1Oek5f0ZQSBq72hokfeaR5OtDaNckMeWuExdRQ5FxvgfjdDh7hAWsjm5AziRCqAdfTNH43mL1hKwgOfsTmXWk6yJhjfxmkCPd5NUmYGJCh2hF6NmMIc8%2FMC1lLXOnAnBGhAZeseRrC&X-Amz-Signature=fe8da5f83dc869e8032724ac6c3bbd033ff502d135d937b8796544d86f4582f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYXG2LYV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEpiAY58%2FyR0KnJESMj1t9Vw2wUhS%2BDfDK1NHnFAskDTAiEAiJcLDSUfVwNy%2BymtdhvqLkl0iwUHwk63uaDka%2FrsrasqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEH4YKMW%2BgP6TCUeyrcA%2FNRGSTBJ0fTzKqdFYBZizLGNK9q%2BGi22mPrTHitFjTqIUTaiZUIDPQ6wvPSZLjIkDTDwKCh3glZZ2rc9ZoxgyOFkbNuWe6XAJxNcMdw1Gfyn5cimwFQlVmnP4XHtZ0KZ9xoRG%2BHpKCvbBjerogwgD4W2X%2Bw6yIMFBLWc9XQBNAjW3JR%2FlOvtZgAZ8Os6j5sYzFsZqSH0cPnZU%2Bhv3CVGhWyY5dcarx0wNow69KGryQHAln8%2BDUcNFN9wYTkM8KZSPaD7MnGkfWaSf8HSxsB1PXDjoEUCkD%2BCoFYtsO7nw2uN7PwcGguMHE74r4Si9G%2BQPFtXDUbsD6TQ9Ytr5JreDI1M0%2BjBykhkI7Ej2WCmE%2FQlD3Q80T1NImO4oO%2B7KQBG4ybPFu6URvHuSZwqxz2W6%2FEJ761piSfREx8lLcA9AsVSV1O5TRETdWZu0x%2Fa54AevQlpqGsdiKwk9CNE8Fv8k7hY2ikAtIdEHOKqQsszIqh3JJQOPNUrWo%2FuJiscsUl%2BqcU0sgO7b33N0JwOeXopoPIDXBLBlvNEmft0lbN0bR2LSKMbnau9yEbFZuQVeo3inYQujvGK2Z4aLNSxrQbEswn0E%2B8Lb5zlwnqv5iLrv7NE8h0DXfJTTQ9y7aOMKqdycAGOqUBPLQNyGEjvlqxs%2FAE5T65x%2FfXPSK4qX%2Fzw8byvePl1rhb0V2ouG%2FO2kIodiQQkYx0Au4HkXY6vJ%2FP62FKgA1Oek5f0ZQSBq72hokfeaR5OtDaNckMeWuExdRQ5FxvgfjdDh7hAWsjm5AziRCqAdfTNH43mL1hKwgOfsTmXWk6yJhjfxmkCPd5NUmYGJCh2hF6NmMIc8%2FMC1lLXOnAnBGhAZeseRrC&X-Amz-Signature=237a6c8b93d4a4f4e6610e6d5fe0ff4bace2c6a996b2c4323d91ff5cc3f6c16e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYXG2LYV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEpiAY58%2FyR0KnJESMj1t9Vw2wUhS%2BDfDK1NHnFAskDTAiEAiJcLDSUfVwNy%2BymtdhvqLkl0iwUHwk63uaDka%2FrsrasqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEH4YKMW%2BgP6TCUeyrcA%2FNRGSTBJ0fTzKqdFYBZizLGNK9q%2BGi22mPrTHitFjTqIUTaiZUIDPQ6wvPSZLjIkDTDwKCh3glZZ2rc9ZoxgyOFkbNuWe6XAJxNcMdw1Gfyn5cimwFQlVmnP4XHtZ0KZ9xoRG%2BHpKCvbBjerogwgD4W2X%2Bw6yIMFBLWc9XQBNAjW3JR%2FlOvtZgAZ8Os6j5sYzFsZqSH0cPnZU%2Bhv3CVGhWyY5dcarx0wNow69KGryQHAln8%2BDUcNFN9wYTkM8KZSPaD7MnGkfWaSf8HSxsB1PXDjoEUCkD%2BCoFYtsO7nw2uN7PwcGguMHE74r4Si9G%2BQPFtXDUbsD6TQ9Ytr5JreDI1M0%2BjBykhkI7Ej2WCmE%2FQlD3Q80T1NImO4oO%2B7KQBG4ybPFu6URvHuSZwqxz2W6%2FEJ761piSfREx8lLcA9AsVSV1O5TRETdWZu0x%2Fa54AevQlpqGsdiKwk9CNE8Fv8k7hY2ikAtIdEHOKqQsszIqh3JJQOPNUrWo%2FuJiscsUl%2BqcU0sgO7b33N0JwOeXopoPIDXBLBlvNEmft0lbN0bR2LSKMbnau9yEbFZuQVeo3inYQujvGK2Z4aLNSxrQbEswn0E%2B8Lb5zlwnqv5iLrv7NE8h0DXfJTTQ9y7aOMKqdycAGOqUBPLQNyGEjvlqxs%2FAE5T65x%2FfXPSK4qX%2Fzw8byvePl1rhb0V2ouG%2FO2kIodiQQkYx0Au4HkXY6vJ%2FP62FKgA1Oek5f0ZQSBq72hokfeaR5OtDaNckMeWuExdRQ5FxvgfjdDh7hAWsjm5AziRCqAdfTNH43mL1hKwgOfsTmXWk6yJhjfxmkCPd5NUmYGJCh2hF6NmMIc8%2FMC1lLXOnAnBGhAZeseRrC&X-Amz-Signature=08383a9a25d3cee509ac1761e550a0fdf69b82e551899149f99c3437415eef75&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYXG2LYV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEpiAY58%2FyR0KnJESMj1t9Vw2wUhS%2BDfDK1NHnFAskDTAiEAiJcLDSUfVwNy%2BymtdhvqLkl0iwUHwk63uaDka%2FrsrasqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEH4YKMW%2BgP6TCUeyrcA%2FNRGSTBJ0fTzKqdFYBZizLGNK9q%2BGi22mPrTHitFjTqIUTaiZUIDPQ6wvPSZLjIkDTDwKCh3glZZ2rc9ZoxgyOFkbNuWe6XAJxNcMdw1Gfyn5cimwFQlVmnP4XHtZ0KZ9xoRG%2BHpKCvbBjerogwgD4W2X%2Bw6yIMFBLWc9XQBNAjW3JR%2FlOvtZgAZ8Os6j5sYzFsZqSH0cPnZU%2Bhv3CVGhWyY5dcarx0wNow69KGryQHAln8%2BDUcNFN9wYTkM8KZSPaD7MnGkfWaSf8HSxsB1PXDjoEUCkD%2BCoFYtsO7nw2uN7PwcGguMHE74r4Si9G%2BQPFtXDUbsD6TQ9Ytr5JreDI1M0%2BjBykhkI7Ej2WCmE%2FQlD3Q80T1NImO4oO%2B7KQBG4ybPFu6URvHuSZwqxz2W6%2FEJ761piSfREx8lLcA9AsVSV1O5TRETdWZu0x%2Fa54AevQlpqGsdiKwk9CNE8Fv8k7hY2ikAtIdEHOKqQsszIqh3JJQOPNUrWo%2FuJiscsUl%2BqcU0sgO7b33N0JwOeXopoPIDXBLBlvNEmft0lbN0bR2LSKMbnau9yEbFZuQVeo3inYQujvGK2Z4aLNSxrQbEswn0E%2B8Lb5zlwnqv5iLrv7NE8h0DXfJTTQ9y7aOMKqdycAGOqUBPLQNyGEjvlqxs%2FAE5T65x%2FfXPSK4qX%2Fzw8byvePl1rhb0V2ouG%2FO2kIodiQQkYx0Au4HkXY6vJ%2FP62FKgA1Oek5f0ZQSBq72hokfeaR5OtDaNckMeWuExdRQ5FxvgfjdDh7hAWsjm5AziRCqAdfTNH43mL1hKwgOfsTmXWk6yJhjfxmkCPd5NUmYGJCh2hF6NmMIc8%2FMC1lLXOnAnBGhAZeseRrC&X-Amz-Signature=b0afa3ed2e2651bf981c59cf965faf036beb696018e4999c30b40193c7ac5aa9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYXG2LYV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEpiAY58%2FyR0KnJESMj1t9Vw2wUhS%2BDfDK1NHnFAskDTAiEAiJcLDSUfVwNy%2BymtdhvqLkl0iwUHwk63uaDka%2FrsrasqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEH4YKMW%2BgP6TCUeyrcA%2FNRGSTBJ0fTzKqdFYBZizLGNK9q%2BGi22mPrTHitFjTqIUTaiZUIDPQ6wvPSZLjIkDTDwKCh3glZZ2rc9ZoxgyOFkbNuWe6XAJxNcMdw1Gfyn5cimwFQlVmnP4XHtZ0KZ9xoRG%2BHpKCvbBjerogwgD4W2X%2Bw6yIMFBLWc9XQBNAjW3JR%2FlOvtZgAZ8Os6j5sYzFsZqSH0cPnZU%2Bhv3CVGhWyY5dcarx0wNow69KGryQHAln8%2BDUcNFN9wYTkM8KZSPaD7MnGkfWaSf8HSxsB1PXDjoEUCkD%2BCoFYtsO7nw2uN7PwcGguMHE74r4Si9G%2BQPFtXDUbsD6TQ9Ytr5JreDI1M0%2BjBykhkI7Ej2WCmE%2FQlD3Q80T1NImO4oO%2B7KQBG4ybPFu6URvHuSZwqxz2W6%2FEJ761piSfREx8lLcA9AsVSV1O5TRETdWZu0x%2Fa54AevQlpqGsdiKwk9CNE8Fv8k7hY2ikAtIdEHOKqQsszIqh3JJQOPNUrWo%2FuJiscsUl%2BqcU0sgO7b33N0JwOeXopoPIDXBLBlvNEmft0lbN0bR2LSKMbnau9yEbFZuQVeo3inYQujvGK2Z4aLNSxrQbEswn0E%2B8Lb5zlwnqv5iLrv7NE8h0DXfJTTQ9y7aOMKqdycAGOqUBPLQNyGEjvlqxs%2FAE5T65x%2FfXPSK4qX%2Fzw8byvePl1rhb0V2ouG%2FO2kIodiQQkYx0Au4HkXY6vJ%2FP62FKgA1Oek5f0ZQSBq72hokfeaR5OtDaNckMeWuExdRQ5FxvgfjdDh7hAWsjm5AziRCqAdfTNH43mL1hKwgOfsTmXWk6yJhjfxmkCPd5NUmYGJCh2hF6NmMIc8%2FMC1lLXOnAnBGhAZeseRrC&X-Amz-Signature=1be68a2c7d35001131d4b67a9826d1f22913dd14ecfd8e6068620205a3d36e42&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
