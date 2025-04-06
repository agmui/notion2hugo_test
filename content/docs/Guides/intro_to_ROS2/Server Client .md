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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBOZNUIQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL6elnNYMhAJQ8edX1GuEJeFRTdyNeP4islGnNkvcadAiASwgIZvs%2BpinNI8qm%2BrebW1HGUM7qJUV1ibGrSiucnKSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMqX%2BIfFgQ1tQ5kNm6KtwDaxkbVVO0sE28H3tZc9Dv9rU5t5wJdrC29EWMBqDCD0HQfKwTjh6ODNDQmIY3Zs9r%2BGi60PIdqd%2FlCJSt2d5slOkM2%2B28X%2FQUAIBsu1yUWkBANgkeorjpJ34fJdxXgaCoSOue%2B0SGiTWbwVhe5RwG6MJ4XaUzuSq3e85jaoWrL5GdT2mNiRx1MMiHDqAEzgQsguNEnS%2FFelKxgJPVlEoNRhVeNiBYZWx1d%2BstXNJU366yLDZJsPq6AphcYhoDLtRg8tVI5%2Ba%2FjiiqNBLTf7%2BmBTGY3uCDzYy17WzcokSPIoRB4N5ETFxBocOMEP5PCf0t49bHir5AkIdLVP4MlRQ776EnpqC3Jd%2Fxvvm04JR8tiC8FeO3X02J4w2QAXTWI6C2QXWba7dJpe8utvHapFSiT1jm%2FY94JGsq%2BKunmPmYnaOBAQ4e8W%2B4x6w9C0Cs7zS%2FJF6iWxY4yipUJHGydr819QsJcdtKi4MBUe%2BPos3i6u4DCHS1LSbdOLot9GVrwHHyJEcw0qZW38hUxzcksOMefLqOw%2F88FuUoHxxGxH6BqBUNW0U51f%2BiADKR9kGTweRd0svoi5%2BB282BGEgMAUwyxwj3xi52MWDNc1bwGmmgpDgGYfjiSiWusbSFZggwtJ3LvwY6pgGH7nEEhahX6m4ABmyhieC%2FY2LZDBPrXhnyjQnmjttpgmdTn64GSNGWqU63UPyWzAiHXgsTOHrB6FYAx9bmuQO6yCIFn1qOllRCUPpEupNlE0LpYj5gwVHzP2ymuKlgpXvlL1aLK74KADpzDGhPq8dkdqSxXNo8VV1TyKMCYceIobaWft3k5aQqld4paC%2F%2Bc%2FlPOWDpDzNCr0gY1ljZvX%2B%2Fqr7RGNWS&X-Amz-Signature=cdbc636f2087c974b036fbff7dfff16804debb7cd6432c520efcbb5079bf97d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBOZNUIQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL6elnNYMhAJQ8edX1GuEJeFRTdyNeP4islGnNkvcadAiASwgIZvs%2BpinNI8qm%2BrebW1HGUM7qJUV1ibGrSiucnKSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMqX%2BIfFgQ1tQ5kNm6KtwDaxkbVVO0sE28H3tZc9Dv9rU5t5wJdrC29EWMBqDCD0HQfKwTjh6ODNDQmIY3Zs9r%2BGi60PIdqd%2FlCJSt2d5slOkM2%2B28X%2FQUAIBsu1yUWkBANgkeorjpJ34fJdxXgaCoSOue%2B0SGiTWbwVhe5RwG6MJ4XaUzuSq3e85jaoWrL5GdT2mNiRx1MMiHDqAEzgQsguNEnS%2FFelKxgJPVlEoNRhVeNiBYZWx1d%2BstXNJU366yLDZJsPq6AphcYhoDLtRg8tVI5%2Ba%2FjiiqNBLTf7%2BmBTGY3uCDzYy17WzcokSPIoRB4N5ETFxBocOMEP5PCf0t49bHir5AkIdLVP4MlRQ776EnpqC3Jd%2Fxvvm04JR8tiC8FeO3X02J4w2QAXTWI6C2QXWba7dJpe8utvHapFSiT1jm%2FY94JGsq%2BKunmPmYnaOBAQ4e8W%2B4x6w9C0Cs7zS%2FJF6iWxY4yipUJHGydr819QsJcdtKi4MBUe%2BPos3i6u4DCHS1LSbdOLot9GVrwHHyJEcw0qZW38hUxzcksOMefLqOw%2F88FuUoHxxGxH6BqBUNW0U51f%2BiADKR9kGTweRd0svoi5%2BB282BGEgMAUwyxwj3xi52MWDNc1bwGmmgpDgGYfjiSiWusbSFZggwtJ3LvwY6pgGH7nEEhahX6m4ABmyhieC%2FY2LZDBPrXhnyjQnmjttpgmdTn64GSNGWqU63UPyWzAiHXgsTOHrB6FYAx9bmuQO6yCIFn1qOllRCUPpEupNlE0LpYj5gwVHzP2ymuKlgpXvlL1aLK74KADpzDGhPq8dkdqSxXNo8VV1TyKMCYceIobaWft3k5aQqld4paC%2F%2Bc%2FlPOWDpDzNCr0gY1ljZvX%2B%2Fqr7RGNWS&X-Amz-Signature=ed2e3ecb0650b5873d74c4ec79a98053bbe91ce120adf0b850f5567753c55335&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBOZNUIQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL6elnNYMhAJQ8edX1GuEJeFRTdyNeP4islGnNkvcadAiASwgIZvs%2BpinNI8qm%2BrebW1HGUM7qJUV1ibGrSiucnKSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMqX%2BIfFgQ1tQ5kNm6KtwDaxkbVVO0sE28H3tZc9Dv9rU5t5wJdrC29EWMBqDCD0HQfKwTjh6ODNDQmIY3Zs9r%2BGi60PIdqd%2FlCJSt2d5slOkM2%2B28X%2FQUAIBsu1yUWkBANgkeorjpJ34fJdxXgaCoSOue%2B0SGiTWbwVhe5RwG6MJ4XaUzuSq3e85jaoWrL5GdT2mNiRx1MMiHDqAEzgQsguNEnS%2FFelKxgJPVlEoNRhVeNiBYZWx1d%2BstXNJU366yLDZJsPq6AphcYhoDLtRg8tVI5%2Ba%2FjiiqNBLTf7%2BmBTGY3uCDzYy17WzcokSPIoRB4N5ETFxBocOMEP5PCf0t49bHir5AkIdLVP4MlRQ776EnpqC3Jd%2Fxvvm04JR8tiC8FeO3X02J4w2QAXTWI6C2QXWba7dJpe8utvHapFSiT1jm%2FY94JGsq%2BKunmPmYnaOBAQ4e8W%2B4x6w9C0Cs7zS%2FJF6iWxY4yipUJHGydr819QsJcdtKi4MBUe%2BPos3i6u4DCHS1LSbdOLot9GVrwHHyJEcw0qZW38hUxzcksOMefLqOw%2F88FuUoHxxGxH6BqBUNW0U51f%2BiADKR9kGTweRd0svoi5%2BB282BGEgMAUwyxwj3xi52MWDNc1bwGmmgpDgGYfjiSiWusbSFZggwtJ3LvwY6pgGH7nEEhahX6m4ABmyhieC%2FY2LZDBPrXhnyjQnmjttpgmdTn64GSNGWqU63UPyWzAiHXgsTOHrB6FYAx9bmuQO6yCIFn1qOllRCUPpEupNlE0LpYj5gwVHzP2ymuKlgpXvlL1aLK74KADpzDGhPq8dkdqSxXNo8VV1TyKMCYceIobaWft3k5aQqld4paC%2F%2Bc%2FlPOWDpDzNCr0gY1ljZvX%2B%2Fqr7RGNWS&X-Amz-Signature=b60ca41fd7ca4197c7a4f3e4174d8160b197d35c5beb8d76229e01dbb1944559&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBOZNUIQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL6elnNYMhAJQ8edX1GuEJeFRTdyNeP4islGnNkvcadAiASwgIZvs%2BpinNI8qm%2BrebW1HGUM7qJUV1ibGrSiucnKSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMqX%2BIfFgQ1tQ5kNm6KtwDaxkbVVO0sE28H3tZc9Dv9rU5t5wJdrC29EWMBqDCD0HQfKwTjh6ODNDQmIY3Zs9r%2BGi60PIdqd%2FlCJSt2d5slOkM2%2B28X%2FQUAIBsu1yUWkBANgkeorjpJ34fJdxXgaCoSOue%2B0SGiTWbwVhe5RwG6MJ4XaUzuSq3e85jaoWrL5GdT2mNiRx1MMiHDqAEzgQsguNEnS%2FFelKxgJPVlEoNRhVeNiBYZWx1d%2BstXNJU366yLDZJsPq6AphcYhoDLtRg8tVI5%2Ba%2FjiiqNBLTf7%2BmBTGY3uCDzYy17WzcokSPIoRB4N5ETFxBocOMEP5PCf0t49bHir5AkIdLVP4MlRQ776EnpqC3Jd%2Fxvvm04JR8tiC8FeO3X02J4w2QAXTWI6C2QXWba7dJpe8utvHapFSiT1jm%2FY94JGsq%2BKunmPmYnaOBAQ4e8W%2B4x6w9C0Cs7zS%2FJF6iWxY4yipUJHGydr819QsJcdtKi4MBUe%2BPos3i6u4DCHS1LSbdOLot9GVrwHHyJEcw0qZW38hUxzcksOMefLqOw%2F88FuUoHxxGxH6BqBUNW0U51f%2BiADKR9kGTweRd0svoi5%2BB282BGEgMAUwyxwj3xi52MWDNc1bwGmmgpDgGYfjiSiWusbSFZggwtJ3LvwY6pgGH7nEEhahX6m4ABmyhieC%2FY2LZDBPrXhnyjQnmjttpgmdTn64GSNGWqU63UPyWzAiHXgsTOHrB6FYAx9bmuQO6yCIFn1qOllRCUPpEupNlE0LpYj5gwVHzP2ymuKlgpXvlL1aLK74KADpzDGhPq8dkdqSxXNo8VV1TyKMCYceIobaWft3k5aQqld4paC%2F%2Bc%2FlPOWDpDzNCr0gY1ljZvX%2B%2Fqr7RGNWS&X-Amz-Signature=cdb636e9fe21b7480152af8d6c7f10fdab51bd2116b7011c974a7164aeaa6f30&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBOZNUIQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL6elnNYMhAJQ8edX1GuEJeFRTdyNeP4islGnNkvcadAiASwgIZvs%2BpinNI8qm%2BrebW1HGUM7qJUV1ibGrSiucnKSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMqX%2BIfFgQ1tQ5kNm6KtwDaxkbVVO0sE28H3tZc9Dv9rU5t5wJdrC29EWMBqDCD0HQfKwTjh6ODNDQmIY3Zs9r%2BGi60PIdqd%2FlCJSt2d5slOkM2%2B28X%2FQUAIBsu1yUWkBANgkeorjpJ34fJdxXgaCoSOue%2B0SGiTWbwVhe5RwG6MJ4XaUzuSq3e85jaoWrL5GdT2mNiRx1MMiHDqAEzgQsguNEnS%2FFelKxgJPVlEoNRhVeNiBYZWx1d%2BstXNJU366yLDZJsPq6AphcYhoDLtRg8tVI5%2Ba%2FjiiqNBLTf7%2BmBTGY3uCDzYy17WzcokSPIoRB4N5ETFxBocOMEP5PCf0t49bHir5AkIdLVP4MlRQ776EnpqC3Jd%2Fxvvm04JR8tiC8FeO3X02J4w2QAXTWI6C2QXWba7dJpe8utvHapFSiT1jm%2FY94JGsq%2BKunmPmYnaOBAQ4e8W%2B4x6w9C0Cs7zS%2FJF6iWxY4yipUJHGydr819QsJcdtKi4MBUe%2BPos3i6u4DCHS1LSbdOLot9GVrwHHyJEcw0qZW38hUxzcksOMefLqOw%2F88FuUoHxxGxH6BqBUNW0U51f%2BiADKR9kGTweRd0svoi5%2BB282BGEgMAUwyxwj3xi52MWDNc1bwGmmgpDgGYfjiSiWusbSFZggwtJ3LvwY6pgGH7nEEhahX6m4ABmyhieC%2FY2LZDBPrXhnyjQnmjttpgmdTn64GSNGWqU63UPyWzAiHXgsTOHrB6FYAx9bmuQO6yCIFn1qOllRCUPpEupNlE0LpYj5gwVHzP2ymuKlgpXvlL1aLK74KADpzDGhPq8dkdqSxXNo8VV1TyKMCYceIobaWft3k5aQqld4paC%2F%2Bc%2FlPOWDpDzNCr0gY1ljZvX%2B%2Fqr7RGNWS&X-Amz-Signature=b6b8c0aa309e8da12f246a02fba9e61e0b6b48eb727bfb8d06eea300e039f053&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
