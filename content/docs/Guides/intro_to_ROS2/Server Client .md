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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466322CBO6P%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmyTRQeSlBQGgI36kpJtmbQoPPmHXxoHBqJBvj%2B1WDLwIgXErueD9xLyBb3wYWfMDLNUMBS8V2I8pOpAzcOf0SH%2FMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAFcu5Zbhe7%2Bn7tGPyrcA4ZBrrpekVfQS4p8nvFK1ge1eJ6ylT35PQcsWjgkE9KESjPq0tyNxIGeSHawQJprxonfWUx0InmqN7xNf40dMFePgVGOhKxD0bRu813%2B5d2mdwYUU4N0nC%2BG%2BoeLlGNFDi70akfw327cNjr3rAWbkeDDjQUJGyXEC6Vg%2B%2FqiieABrmARG23LAHWkPmIg5gLT6SKU4ctWTOjs6DAnCzf0RTne4B3RSHl7n1%2FYPRs9jbrMSk5vfFAFv9B8o3pmVb34fMq4MJ7A19uSORWuji0kv%2BY0acD8g7dsGukPA788ulj9QP5Zb4pWMMZOSOVfQCBhedWfbC1ir4nqiX1HSZAHqdT4X4MBEpbN6dGxiKrgwXSgcWF%2FdacICSdY5BxTSjq0ulPxJwqQ%2Fqrm0kmYnTV%2BCISC1Y5CQjORLFC%2BnMLtBw8Ku4hj5KK8mhmvgD2bjpy%2FneplygrjmG6fcG9Ui5P3Da76eePCStP%2FFxCgLK14AJjzBvL21XCN9en%2FwaerLJoGtQo0h%2B8v1bIGOSkh5T%2B07pOrKK%2BBuBrsmd8M1REb6S4Hx3zA1u0GVhICxCzgWGqjh8dKvNXhdUOgVbmn3B8DeDFBhh%2FbitiGoy9vBAys3Z63JfWGOfaYmYC4lhpuMOfeuL0GOqUBvreEI5VbYSL0Z5%2FrDt1%2BUGHcy8yC7NC9M5rSG9E1PwrvhQRsO8U%2Fa5s7PMDk9%2BIdtuDWHjp9HnFKFYzefl6Ki0LmSl4d3hqctSNYuGv0qx9TSAzQ3zSB17yPjyEfJOdPZ%2FTzei8K2XXoq%2Brz5o8immrHAYiAcdD8Lh1%2Bazj9NBZ0bAlYiEhRcIRaHzn1WKVNid4hyr00QatB%2BVQToSracJl%2FmpLJ&X-Amz-Signature=fe929dc2fb36eefff77c99f724f3335f9512fa47cec6468b59428ccce3c7b4ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466322CBO6P%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmyTRQeSlBQGgI36kpJtmbQoPPmHXxoHBqJBvj%2B1WDLwIgXErueD9xLyBb3wYWfMDLNUMBS8V2I8pOpAzcOf0SH%2FMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAFcu5Zbhe7%2Bn7tGPyrcA4ZBrrpekVfQS4p8nvFK1ge1eJ6ylT35PQcsWjgkE9KESjPq0tyNxIGeSHawQJprxonfWUx0InmqN7xNf40dMFePgVGOhKxD0bRu813%2B5d2mdwYUU4N0nC%2BG%2BoeLlGNFDi70akfw327cNjr3rAWbkeDDjQUJGyXEC6Vg%2B%2FqiieABrmARG23LAHWkPmIg5gLT6SKU4ctWTOjs6DAnCzf0RTne4B3RSHl7n1%2FYPRs9jbrMSk5vfFAFv9B8o3pmVb34fMq4MJ7A19uSORWuji0kv%2BY0acD8g7dsGukPA788ulj9QP5Zb4pWMMZOSOVfQCBhedWfbC1ir4nqiX1HSZAHqdT4X4MBEpbN6dGxiKrgwXSgcWF%2FdacICSdY5BxTSjq0ulPxJwqQ%2Fqrm0kmYnTV%2BCISC1Y5CQjORLFC%2BnMLtBw8Ku4hj5KK8mhmvgD2bjpy%2FneplygrjmG6fcG9Ui5P3Da76eePCStP%2FFxCgLK14AJjzBvL21XCN9en%2FwaerLJoGtQo0h%2B8v1bIGOSkh5T%2B07pOrKK%2BBuBrsmd8M1REb6S4Hx3zA1u0GVhICxCzgWGqjh8dKvNXhdUOgVbmn3B8DeDFBhh%2FbitiGoy9vBAys3Z63JfWGOfaYmYC4lhpuMOfeuL0GOqUBvreEI5VbYSL0Z5%2FrDt1%2BUGHcy8yC7NC9M5rSG9E1PwrvhQRsO8U%2Fa5s7PMDk9%2BIdtuDWHjp9HnFKFYzefl6Ki0LmSl4d3hqctSNYuGv0qx9TSAzQ3zSB17yPjyEfJOdPZ%2FTzei8K2XXoq%2Brz5o8immrHAYiAcdD8Lh1%2Bazj9NBZ0bAlYiEhRcIRaHzn1WKVNid4hyr00QatB%2BVQToSracJl%2FmpLJ&X-Amz-Signature=b5d08df49e4e8fe03fda4faa37b34402be754e4151f24dae81b84dadaa67ad37&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466322CBO6P%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmyTRQeSlBQGgI36kpJtmbQoPPmHXxoHBqJBvj%2B1WDLwIgXErueD9xLyBb3wYWfMDLNUMBS8V2I8pOpAzcOf0SH%2FMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAFcu5Zbhe7%2Bn7tGPyrcA4ZBrrpekVfQS4p8nvFK1ge1eJ6ylT35PQcsWjgkE9KESjPq0tyNxIGeSHawQJprxonfWUx0InmqN7xNf40dMFePgVGOhKxD0bRu813%2B5d2mdwYUU4N0nC%2BG%2BoeLlGNFDi70akfw327cNjr3rAWbkeDDjQUJGyXEC6Vg%2B%2FqiieABrmARG23LAHWkPmIg5gLT6SKU4ctWTOjs6DAnCzf0RTne4B3RSHl7n1%2FYPRs9jbrMSk5vfFAFv9B8o3pmVb34fMq4MJ7A19uSORWuji0kv%2BY0acD8g7dsGukPA788ulj9QP5Zb4pWMMZOSOVfQCBhedWfbC1ir4nqiX1HSZAHqdT4X4MBEpbN6dGxiKrgwXSgcWF%2FdacICSdY5BxTSjq0ulPxJwqQ%2Fqrm0kmYnTV%2BCISC1Y5CQjORLFC%2BnMLtBw8Ku4hj5KK8mhmvgD2bjpy%2FneplygrjmG6fcG9Ui5P3Da76eePCStP%2FFxCgLK14AJjzBvL21XCN9en%2FwaerLJoGtQo0h%2B8v1bIGOSkh5T%2B07pOrKK%2BBuBrsmd8M1REb6S4Hx3zA1u0GVhICxCzgWGqjh8dKvNXhdUOgVbmn3B8DeDFBhh%2FbitiGoy9vBAys3Z63JfWGOfaYmYC4lhpuMOfeuL0GOqUBvreEI5VbYSL0Z5%2FrDt1%2BUGHcy8yC7NC9M5rSG9E1PwrvhQRsO8U%2Fa5s7PMDk9%2BIdtuDWHjp9HnFKFYzefl6Ki0LmSl4d3hqctSNYuGv0qx9TSAzQ3zSB17yPjyEfJOdPZ%2FTzei8K2XXoq%2Brz5o8immrHAYiAcdD8Lh1%2Bazj9NBZ0bAlYiEhRcIRaHzn1WKVNid4hyr00QatB%2BVQToSracJl%2FmpLJ&X-Amz-Signature=ed097961f823a629d384b051f31133eb408e3d9073265c885423687d3787ad06&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466322CBO6P%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmyTRQeSlBQGgI36kpJtmbQoPPmHXxoHBqJBvj%2B1WDLwIgXErueD9xLyBb3wYWfMDLNUMBS8V2I8pOpAzcOf0SH%2FMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAFcu5Zbhe7%2Bn7tGPyrcA4ZBrrpekVfQS4p8nvFK1ge1eJ6ylT35PQcsWjgkE9KESjPq0tyNxIGeSHawQJprxonfWUx0InmqN7xNf40dMFePgVGOhKxD0bRu813%2B5d2mdwYUU4N0nC%2BG%2BoeLlGNFDi70akfw327cNjr3rAWbkeDDjQUJGyXEC6Vg%2B%2FqiieABrmARG23LAHWkPmIg5gLT6SKU4ctWTOjs6DAnCzf0RTne4B3RSHl7n1%2FYPRs9jbrMSk5vfFAFv9B8o3pmVb34fMq4MJ7A19uSORWuji0kv%2BY0acD8g7dsGukPA788ulj9QP5Zb4pWMMZOSOVfQCBhedWfbC1ir4nqiX1HSZAHqdT4X4MBEpbN6dGxiKrgwXSgcWF%2FdacICSdY5BxTSjq0ulPxJwqQ%2Fqrm0kmYnTV%2BCISC1Y5CQjORLFC%2BnMLtBw8Ku4hj5KK8mhmvgD2bjpy%2FneplygrjmG6fcG9Ui5P3Da76eePCStP%2FFxCgLK14AJjzBvL21XCN9en%2FwaerLJoGtQo0h%2B8v1bIGOSkh5T%2B07pOrKK%2BBuBrsmd8M1REb6S4Hx3zA1u0GVhICxCzgWGqjh8dKvNXhdUOgVbmn3B8DeDFBhh%2FbitiGoy9vBAys3Z63JfWGOfaYmYC4lhpuMOfeuL0GOqUBvreEI5VbYSL0Z5%2FrDt1%2BUGHcy8yC7NC9M5rSG9E1PwrvhQRsO8U%2Fa5s7PMDk9%2BIdtuDWHjp9HnFKFYzefl6Ki0LmSl4d3hqctSNYuGv0qx9TSAzQ3zSB17yPjyEfJOdPZ%2FTzei8K2XXoq%2Brz5o8immrHAYiAcdD8Lh1%2Bazj9NBZ0bAlYiEhRcIRaHzn1WKVNid4hyr00QatB%2BVQToSracJl%2FmpLJ&X-Amz-Signature=106eb0190fcb9779bac5d4a3a71ac04f5b8321fb3552dfacd6a03dac2f817581&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466322CBO6P%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmyTRQeSlBQGgI36kpJtmbQoPPmHXxoHBqJBvj%2B1WDLwIgXErueD9xLyBb3wYWfMDLNUMBS8V2I8pOpAzcOf0SH%2FMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAFcu5Zbhe7%2Bn7tGPyrcA4ZBrrpekVfQS4p8nvFK1ge1eJ6ylT35PQcsWjgkE9KESjPq0tyNxIGeSHawQJprxonfWUx0InmqN7xNf40dMFePgVGOhKxD0bRu813%2B5d2mdwYUU4N0nC%2BG%2BoeLlGNFDi70akfw327cNjr3rAWbkeDDjQUJGyXEC6Vg%2B%2FqiieABrmARG23LAHWkPmIg5gLT6SKU4ctWTOjs6DAnCzf0RTne4B3RSHl7n1%2FYPRs9jbrMSk5vfFAFv9B8o3pmVb34fMq4MJ7A19uSORWuji0kv%2BY0acD8g7dsGukPA788ulj9QP5Zb4pWMMZOSOVfQCBhedWfbC1ir4nqiX1HSZAHqdT4X4MBEpbN6dGxiKrgwXSgcWF%2FdacICSdY5BxTSjq0ulPxJwqQ%2Fqrm0kmYnTV%2BCISC1Y5CQjORLFC%2BnMLtBw8Ku4hj5KK8mhmvgD2bjpy%2FneplygrjmG6fcG9Ui5P3Da76eePCStP%2FFxCgLK14AJjzBvL21XCN9en%2FwaerLJoGtQo0h%2B8v1bIGOSkh5T%2B07pOrKK%2BBuBrsmd8M1REb6S4Hx3zA1u0GVhICxCzgWGqjh8dKvNXhdUOgVbmn3B8DeDFBhh%2FbitiGoy9vBAys3Z63JfWGOfaYmYC4lhpuMOfeuL0GOqUBvreEI5VbYSL0Z5%2FrDt1%2BUGHcy8yC7NC9M5rSG9E1PwrvhQRsO8U%2Fa5s7PMDk9%2BIdtuDWHjp9HnFKFYzefl6Ki0LmSl4d3hqctSNYuGv0qx9TSAzQ3zSB17yPjyEfJOdPZ%2FTzei8K2XXoq%2Brz5o8immrHAYiAcdD8Lh1%2Bazj9NBZ0bAlYiEhRcIRaHzn1WKVNid4hyr00QatB%2BVQToSracJl%2FmpLJ&X-Amz-Signature=f5c517feb1e64ff2816b62ecde3864e7530c33cb1c2434ebcbdace9662d0db9a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
