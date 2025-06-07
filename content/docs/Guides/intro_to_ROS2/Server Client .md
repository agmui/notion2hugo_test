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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMYUYBU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWtnjqy%2FUO6X9YoWp8ik8re3kKwLFbkP%2BtZ1ly%2B%2Ff%2BOgIgL5qUsWvJHPNcQJdj6xWVyIEH0ODDVKPkh7pu%2BpQhGbEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKLZj0Z2OmvMQR%2FhASrcA%2FPqpG7pn9Inwuc6P2hkBjkKFLLTZhhCU9L1Ed7QZEpuPt6%2B3QCq3uxi%2B31Jv6B9juYn7ccnmxnmLAlG5zK0zt5FkzsdesG5EQ54eKGXg0DdxFFrJVIkt%2F1Z0GiuIvCjwNEsd%2F75%2Fsd6YGMnUWj7bBPZQOBtjIi6rRzYXb85GPh%2F7mN8b4NvkI5%2BBkhxbrXqvmh3nOwn1Dlsj6R%2Fb8aq7zSIsh76%2B9t74hLlnduaRMNP12NNdISUICaQwutW4Qp1euy8teNJ%2BqVt5KujEXB81EBMsPLV4xkG5h8LX%2BTX19DsYNShTumhiu0Vy5FzSr5jsLPFiJYqLwZRvUcIyz%2FdpiRPsyB9YW6SCJrQ30h2haK%2FWecwAD0ShBberNjtTppGbHVSdtnCWS%2BSgsYhGKPZvgAk0SBAcU8lhyv6BK0%2FrOk1ambIUjoKHKpnmNc4mkv%2F53L8kWvl4DhPr%2FUhj1jOBk9C2sf%2F4DbQGHWfBlAQnhjRDmlGFkAwFviuyz9IzEIwAdIdqu1QqHsAXcQyTJZuKIXICaKD%2Fg9B9n0FfVG3eQ4zeq2rcymbVIJ0KrF5xy7dURHObqaCnKrEHH6haznPhewcPjQpwT0x7IW0iqdLzkv6AV6LzEWDue3pADmkMNTDkMIGOqUBklR0xFiyveYxDFttkZz7Ypa8UDIVoxF1gcD4hiZ6rRwXqiy%2FK%2FJyMxRvqcKqAnHdd7OFD0a7WvQiQWR4SkZ%2F9%2FXXJ7TGcHPf787%2B%2F8oGPnBVatu6gPSrJbg0J7WhofOxKZA7GaN6XepNiK9gC5ncIE64%2FXGSqA1%2B2Vsq9%2BkrAClbn4wPmFdhPGNXVUUkw2Rd4sGBX1nggBxarMfKi%2FwuiHBtRL6K&X-Amz-Signature=77c70b34e001824853ce4a8c69f51ea3dfbe5b2cd9eef27307121458cb20319f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMYUYBU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWtnjqy%2FUO6X9YoWp8ik8re3kKwLFbkP%2BtZ1ly%2B%2Ff%2BOgIgL5qUsWvJHPNcQJdj6xWVyIEH0ODDVKPkh7pu%2BpQhGbEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKLZj0Z2OmvMQR%2FhASrcA%2FPqpG7pn9Inwuc6P2hkBjkKFLLTZhhCU9L1Ed7QZEpuPt6%2B3QCq3uxi%2B31Jv6B9juYn7ccnmxnmLAlG5zK0zt5FkzsdesG5EQ54eKGXg0DdxFFrJVIkt%2F1Z0GiuIvCjwNEsd%2F75%2Fsd6YGMnUWj7bBPZQOBtjIi6rRzYXb85GPh%2F7mN8b4NvkI5%2BBkhxbrXqvmh3nOwn1Dlsj6R%2Fb8aq7zSIsh76%2B9t74hLlnduaRMNP12NNdISUICaQwutW4Qp1euy8teNJ%2BqVt5KujEXB81EBMsPLV4xkG5h8LX%2BTX19DsYNShTumhiu0Vy5FzSr5jsLPFiJYqLwZRvUcIyz%2FdpiRPsyB9YW6SCJrQ30h2haK%2FWecwAD0ShBberNjtTppGbHVSdtnCWS%2BSgsYhGKPZvgAk0SBAcU8lhyv6BK0%2FrOk1ambIUjoKHKpnmNc4mkv%2F53L8kWvl4DhPr%2FUhj1jOBk9C2sf%2F4DbQGHWfBlAQnhjRDmlGFkAwFviuyz9IzEIwAdIdqu1QqHsAXcQyTJZuKIXICaKD%2Fg9B9n0FfVG3eQ4zeq2rcymbVIJ0KrF5xy7dURHObqaCnKrEHH6haznPhewcPjQpwT0x7IW0iqdLzkv6AV6LzEWDue3pADmkMNTDkMIGOqUBklR0xFiyveYxDFttkZz7Ypa8UDIVoxF1gcD4hiZ6rRwXqiy%2FK%2FJyMxRvqcKqAnHdd7OFD0a7WvQiQWR4SkZ%2F9%2FXXJ7TGcHPf787%2B%2F8oGPnBVatu6gPSrJbg0J7WhofOxKZA7GaN6XepNiK9gC5ncIE64%2FXGSqA1%2B2Vsq9%2BkrAClbn4wPmFdhPGNXVUUkw2Rd4sGBX1nggBxarMfKi%2FwuiHBtRL6K&X-Amz-Signature=388059bf0e3d59f898d684e0fd80cccadc60c08237ffd00facc32cff8e9ee5ef&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMYUYBU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWtnjqy%2FUO6X9YoWp8ik8re3kKwLFbkP%2BtZ1ly%2B%2Ff%2BOgIgL5qUsWvJHPNcQJdj6xWVyIEH0ODDVKPkh7pu%2BpQhGbEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKLZj0Z2OmvMQR%2FhASrcA%2FPqpG7pn9Inwuc6P2hkBjkKFLLTZhhCU9L1Ed7QZEpuPt6%2B3QCq3uxi%2B31Jv6B9juYn7ccnmxnmLAlG5zK0zt5FkzsdesG5EQ54eKGXg0DdxFFrJVIkt%2F1Z0GiuIvCjwNEsd%2F75%2Fsd6YGMnUWj7bBPZQOBtjIi6rRzYXb85GPh%2F7mN8b4NvkI5%2BBkhxbrXqvmh3nOwn1Dlsj6R%2Fb8aq7zSIsh76%2B9t74hLlnduaRMNP12NNdISUICaQwutW4Qp1euy8teNJ%2BqVt5KujEXB81EBMsPLV4xkG5h8LX%2BTX19DsYNShTumhiu0Vy5FzSr5jsLPFiJYqLwZRvUcIyz%2FdpiRPsyB9YW6SCJrQ30h2haK%2FWecwAD0ShBberNjtTppGbHVSdtnCWS%2BSgsYhGKPZvgAk0SBAcU8lhyv6BK0%2FrOk1ambIUjoKHKpnmNc4mkv%2F53L8kWvl4DhPr%2FUhj1jOBk9C2sf%2F4DbQGHWfBlAQnhjRDmlGFkAwFviuyz9IzEIwAdIdqu1QqHsAXcQyTJZuKIXICaKD%2Fg9B9n0FfVG3eQ4zeq2rcymbVIJ0KrF5xy7dURHObqaCnKrEHH6haznPhewcPjQpwT0x7IW0iqdLzkv6AV6LzEWDue3pADmkMNTDkMIGOqUBklR0xFiyveYxDFttkZz7Ypa8UDIVoxF1gcD4hiZ6rRwXqiy%2FK%2FJyMxRvqcKqAnHdd7OFD0a7WvQiQWR4SkZ%2F9%2FXXJ7TGcHPf787%2B%2F8oGPnBVatu6gPSrJbg0J7WhofOxKZA7GaN6XepNiK9gC5ncIE64%2FXGSqA1%2B2Vsq9%2BkrAClbn4wPmFdhPGNXVUUkw2Rd4sGBX1nggBxarMfKi%2FwuiHBtRL6K&X-Amz-Signature=8639546aa3888958cddfde48a934537304ed14ecf0e91f92f7d4542655c6ade9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMYUYBU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWtnjqy%2FUO6X9YoWp8ik8re3kKwLFbkP%2BtZ1ly%2B%2Ff%2BOgIgL5qUsWvJHPNcQJdj6xWVyIEH0ODDVKPkh7pu%2BpQhGbEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKLZj0Z2OmvMQR%2FhASrcA%2FPqpG7pn9Inwuc6P2hkBjkKFLLTZhhCU9L1Ed7QZEpuPt6%2B3QCq3uxi%2B31Jv6B9juYn7ccnmxnmLAlG5zK0zt5FkzsdesG5EQ54eKGXg0DdxFFrJVIkt%2F1Z0GiuIvCjwNEsd%2F75%2Fsd6YGMnUWj7bBPZQOBtjIi6rRzYXb85GPh%2F7mN8b4NvkI5%2BBkhxbrXqvmh3nOwn1Dlsj6R%2Fb8aq7zSIsh76%2B9t74hLlnduaRMNP12NNdISUICaQwutW4Qp1euy8teNJ%2BqVt5KujEXB81EBMsPLV4xkG5h8LX%2BTX19DsYNShTumhiu0Vy5FzSr5jsLPFiJYqLwZRvUcIyz%2FdpiRPsyB9YW6SCJrQ30h2haK%2FWecwAD0ShBberNjtTppGbHVSdtnCWS%2BSgsYhGKPZvgAk0SBAcU8lhyv6BK0%2FrOk1ambIUjoKHKpnmNc4mkv%2F53L8kWvl4DhPr%2FUhj1jOBk9C2sf%2F4DbQGHWfBlAQnhjRDmlGFkAwFviuyz9IzEIwAdIdqu1QqHsAXcQyTJZuKIXICaKD%2Fg9B9n0FfVG3eQ4zeq2rcymbVIJ0KrF5xy7dURHObqaCnKrEHH6haznPhewcPjQpwT0x7IW0iqdLzkv6AV6LzEWDue3pADmkMNTDkMIGOqUBklR0xFiyveYxDFttkZz7Ypa8UDIVoxF1gcD4hiZ6rRwXqiy%2FK%2FJyMxRvqcKqAnHdd7OFD0a7WvQiQWR4SkZ%2F9%2FXXJ7TGcHPf787%2B%2F8oGPnBVatu6gPSrJbg0J7WhofOxKZA7GaN6XepNiK9gC5ncIE64%2FXGSqA1%2B2Vsq9%2BkrAClbn4wPmFdhPGNXVUUkw2Rd4sGBX1nggBxarMfKi%2FwuiHBtRL6K&X-Amz-Signature=2f8bd8289c08988c9804a25debfbf417c99fa9d3e8bb32f12fb9b1e59db43996&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMYUYBU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWtnjqy%2FUO6X9YoWp8ik8re3kKwLFbkP%2BtZ1ly%2B%2Ff%2BOgIgL5qUsWvJHPNcQJdj6xWVyIEH0ODDVKPkh7pu%2BpQhGbEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKLZj0Z2OmvMQR%2FhASrcA%2FPqpG7pn9Inwuc6P2hkBjkKFLLTZhhCU9L1Ed7QZEpuPt6%2B3QCq3uxi%2B31Jv6B9juYn7ccnmxnmLAlG5zK0zt5FkzsdesG5EQ54eKGXg0DdxFFrJVIkt%2F1Z0GiuIvCjwNEsd%2F75%2Fsd6YGMnUWj7bBPZQOBtjIi6rRzYXb85GPh%2F7mN8b4NvkI5%2BBkhxbrXqvmh3nOwn1Dlsj6R%2Fb8aq7zSIsh76%2B9t74hLlnduaRMNP12NNdISUICaQwutW4Qp1euy8teNJ%2BqVt5KujEXB81EBMsPLV4xkG5h8LX%2BTX19DsYNShTumhiu0Vy5FzSr5jsLPFiJYqLwZRvUcIyz%2FdpiRPsyB9YW6SCJrQ30h2haK%2FWecwAD0ShBberNjtTppGbHVSdtnCWS%2BSgsYhGKPZvgAk0SBAcU8lhyv6BK0%2FrOk1ambIUjoKHKpnmNc4mkv%2F53L8kWvl4DhPr%2FUhj1jOBk9C2sf%2F4DbQGHWfBlAQnhjRDmlGFkAwFviuyz9IzEIwAdIdqu1QqHsAXcQyTJZuKIXICaKD%2Fg9B9n0FfVG3eQ4zeq2rcymbVIJ0KrF5xy7dURHObqaCnKrEHH6haznPhewcPjQpwT0x7IW0iqdLzkv6AV6LzEWDue3pADmkMNTDkMIGOqUBklR0xFiyveYxDFttkZz7Ypa8UDIVoxF1gcD4hiZ6rRwXqiy%2FK%2FJyMxRvqcKqAnHdd7OFD0a7WvQiQWR4SkZ%2F9%2FXXJ7TGcHPf787%2B%2F8oGPnBVatu6gPSrJbg0J7WhofOxKZA7GaN6XepNiK9gC5ncIE64%2FXGSqA1%2B2Vsq9%2BkrAClbn4wPmFdhPGNXVUUkw2Rd4sGBX1nggBxarMfKi%2FwuiHBtRL6K&X-Amz-Signature=b7343809c3cfc8d0d74eb4c63a8d93a737223f894e432ae33ffb448750d1a8e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
