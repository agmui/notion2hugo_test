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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKUYE3GP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGRI5euVMSCaz0%2BFoJCYL8aIdjimhg2XI3wZ1xmNE%2BprAiBtd3GEBBkK8Lpj0xH27HTbWH7E3yiTY3UoB6f4Mn4T6yqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ6aDw9C5n%2BWco3KTKtwDHmHkBZ0IOn2K%2FkGirrqly4724Xqz5t3dPzTa6rdO0QU7yCFU6KQHpMFPGRbzcyf4LbMd3q%2FTebrcSZhQuF8zMe75wWTFn0ZJCjGospCFrWILxuaJ1odd8eG2vNPrS9MA4IM0vxzFkfQ5lxHS66AwgNLzsAZ5PZ%2BRJJWOenwdb1NwY47SR8JYts%2Fkacj50ux6rdVdzJDIMLLF6AUNsK8tnZ5ZbhTIzV9sTYp8ND%2BPeqnDknwUME7EAch6YJ5LwMoIQC8A%2B62LzV7kYSUm8LYfIGK%2FG9gFuB7KUM9Txx6gM%2B5AAuptHRAUdkXuL7Xtdqw%2FJPWjl7M4Ci9N%2BKzZPzc23XzxeEYDb8e7YJNMXJ4rJjoZ7yAZQ9RDxHvUf3PVD6q%2B6AUUOwCPudzhTokpIKk5rnvY0W1tOiresQblT8398CaLwMUeHnSJXbnWDLRhmtolKSqzF%2BXPoGdHHi6fsCVxR0smuW7bnVRdS9IsyPYRjeN8LOqfncdl1KNIJoVcO61xm6sBZ48XUpIlvEHRZC4Pwv1LoDzP0roSaspNsubDigdDVCc4t0Co5xflMdPQ1SCy7gP%2Bukpm%2Fxmk1wQeVeZ14UW9Yyu%2B1AzyEWla5dct00tRH%2FDnXSbaROJVGdcwqIewvwY6pgHrp5sV4uac4Ct1oOPOu1dL4pEn%2Fh4RuwKT0Jo9QPU15jasIj3B6ptuth3if9zJgRm4qU2lUmhKLLcyixgAmE5G0nJ%2BNO2d72PzwswaJc5aEAmwZCBW0XtGq6xkPVpJqw0cpyU6pTKZjROkkM%2F%2BRq%2FKdQXXZl88Hug5x63MtvC8gva9GDuSUXNCJmPPmx3LTzoEGViOPf5jWMMLXPq5E09ZT4bsmowm&X-Amz-Signature=47deb2ae0f3a3485da6385a2eb4e88ead5ceca75622adc9b25081526f3159627&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKUYE3GP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGRI5euVMSCaz0%2BFoJCYL8aIdjimhg2XI3wZ1xmNE%2BprAiBtd3GEBBkK8Lpj0xH27HTbWH7E3yiTY3UoB6f4Mn4T6yqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ6aDw9C5n%2BWco3KTKtwDHmHkBZ0IOn2K%2FkGirrqly4724Xqz5t3dPzTa6rdO0QU7yCFU6KQHpMFPGRbzcyf4LbMd3q%2FTebrcSZhQuF8zMe75wWTFn0ZJCjGospCFrWILxuaJ1odd8eG2vNPrS9MA4IM0vxzFkfQ5lxHS66AwgNLzsAZ5PZ%2BRJJWOenwdb1NwY47SR8JYts%2Fkacj50ux6rdVdzJDIMLLF6AUNsK8tnZ5ZbhTIzV9sTYp8ND%2BPeqnDknwUME7EAch6YJ5LwMoIQC8A%2B62LzV7kYSUm8LYfIGK%2FG9gFuB7KUM9Txx6gM%2B5AAuptHRAUdkXuL7Xtdqw%2FJPWjl7M4Ci9N%2BKzZPzc23XzxeEYDb8e7YJNMXJ4rJjoZ7yAZQ9RDxHvUf3PVD6q%2B6AUUOwCPudzhTokpIKk5rnvY0W1tOiresQblT8398CaLwMUeHnSJXbnWDLRhmtolKSqzF%2BXPoGdHHi6fsCVxR0smuW7bnVRdS9IsyPYRjeN8LOqfncdl1KNIJoVcO61xm6sBZ48XUpIlvEHRZC4Pwv1LoDzP0roSaspNsubDigdDVCc4t0Co5xflMdPQ1SCy7gP%2Bukpm%2Fxmk1wQeVeZ14UW9Yyu%2B1AzyEWla5dct00tRH%2FDnXSbaROJVGdcwqIewvwY6pgHrp5sV4uac4Ct1oOPOu1dL4pEn%2Fh4RuwKT0Jo9QPU15jasIj3B6ptuth3if9zJgRm4qU2lUmhKLLcyixgAmE5G0nJ%2BNO2d72PzwswaJc5aEAmwZCBW0XtGq6xkPVpJqw0cpyU6pTKZjROkkM%2F%2BRq%2FKdQXXZl88Hug5x63MtvC8gva9GDuSUXNCJmPPmx3LTzoEGViOPf5jWMMLXPq5E09ZT4bsmowm&X-Amz-Signature=9e619ebe2d38a922eac598dfd655320eda239530152b4de21f105cf84b0d64f2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKUYE3GP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGRI5euVMSCaz0%2BFoJCYL8aIdjimhg2XI3wZ1xmNE%2BprAiBtd3GEBBkK8Lpj0xH27HTbWH7E3yiTY3UoB6f4Mn4T6yqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ6aDw9C5n%2BWco3KTKtwDHmHkBZ0IOn2K%2FkGirrqly4724Xqz5t3dPzTa6rdO0QU7yCFU6KQHpMFPGRbzcyf4LbMd3q%2FTebrcSZhQuF8zMe75wWTFn0ZJCjGospCFrWILxuaJ1odd8eG2vNPrS9MA4IM0vxzFkfQ5lxHS66AwgNLzsAZ5PZ%2BRJJWOenwdb1NwY47SR8JYts%2Fkacj50ux6rdVdzJDIMLLF6AUNsK8tnZ5ZbhTIzV9sTYp8ND%2BPeqnDknwUME7EAch6YJ5LwMoIQC8A%2B62LzV7kYSUm8LYfIGK%2FG9gFuB7KUM9Txx6gM%2B5AAuptHRAUdkXuL7Xtdqw%2FJPWjl7M4Ci9N%2BKzZPzc23XzxeEYDb8e7YJNMXJ4rJjoZ7yAZQ9RDxHvUf3PVD6q%2B6AUUOwCPudzhTokpIKk5rnvY0W1tOiresQblT8398CaLwMUeHnSJXbnWDLRhmtolKSqzF%2BXPoGdHHi6fsCVxR0smuW7bnVRdS9IsyPYRjeN8LOqfncdl1KNIJoVcO61xm6sBZ48XUpIlvEHRZC4Pwv1LoDzP0roSaspNsubDigdDVCc4t0Co5xflMdPQ1SCy7gP%2Bukpm%2Fxmk1wQeVeZ14UW9Yyu%2B1AzyEWla5dct00tRH%2FDnXSbaROJVGdcwqIewvwY6pgHrp5sV4uac4Ct1oOPOu1dL4pEn%2Fh4RuwKT0Jo9QPU15jasIj3B6ptuth3if9zJgRm4qU2lUmhKLLcyixgAmE5G0nJ%2BNO2d72PzwswaJc5aEAmwZCBW0XtGq6xkPVpJqw0cpyU6pTKZjROkkM%2F%2BRq%2FKdQXXZl88Hug5x63MtvC8gva9GDuSUXNCJmPPmx3LTzoEGViOPf5jWMMLXPq5E09ZT4bsmowm&X-Amz-Signature=129155ef3241d4df694f44cd3c66a15fb3baed9f2196c54162fded12a9032883&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKUYE3GP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGRI5euVMSCaz0%2BFoJCYL8aIdjimhg2XI3wZ1xmNE%2BprAiBtd3GEBBkK8Lpj0xH27HTbWH7E3yiTY3UoB6f4Mn4T6yqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ6aDw9C5n%2BWco3KTKtwDHmHkBZ0IOn2K%2FkGirrqly4724Xqz5t3dPzTa6rdO0QU7yCFU6KQHpMFPGRbzcyf4LbMd3q%2FTebrcSZhQuF8zMe75wWTFn0ZJCjGospCFrWILxuaJ1odd8eG2vNPrS9MA4IM0vxzFkfQ5lxHS66AwgNLzsAZ5PZ%2BRJJWOenwdb1NwY47SR8JYts%2Fkacj50ux6rdVdzJDIMLLF6AUNsK8tnZ5ZbhTIzV9sTYp8ND%2BPeqnDknwUME7EAch6YJ5LwMoIQC8A%2B62LzV7kYSUm8LYfIGK%2FG9gFuB7KUM9Txx6gM%2B5AAuptHRAUdkXuL7Xtdqw%2FJPWjl7M4Ci9N%2BKzZPzc23XzxeEYDb8e7YJNMXJ4rJjoZ7yAZQ9RDxHvUf3PVD6q%2B6AUUOwCPudzhTokpIKk5rnvY0W1tOiresQblT8398CaLwMUeHnSJXbnWDLRhmtolKSqzF%2BXPoGdHHi6fsCVxR0smuW7bnVRdS9IsyPYRjeN8LOqfncdl1KNIJoVcO61xm6sBZ48XUpIlvEHRZC4Pwv1LoDzP0roSaspNsubDigdDVCc4t0Co5xflMdPQ1SCy7gP%2Bukpm%2Fxmk1wQeVeZ14UW9Yyu%2B1AzyEWla5dct00tRH%2FDnXSbaROJVGdcwqIewvwY6pgHrp5sV4uac4Ct1oOPOu1dL4pEn%2Fh4RuwKT0Jo9QPU15jasIj3B6ptuth3if9zJgRm4qU2lUmhKLLcyixgAmE5G0nJ%2BNO2d72PzwswaJc5aEAmwZCBW0XtGq6xkPVpJqw0cpyU6pTKZjROkkM%2F%2BRq%2FKdQXXZl88Hug5x63MtvC8gva9GDuSUXNCJmPPmx3LTzoEGViOPf5jWMMLXPq5E09ZT4bsmowm&X-Amz-Signature=a753573b9bfdd42ec8d22e5aeeaaf3dd3f98d8ea72984054d48ea7274b414008&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKUYE3GP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGRI5euVMSCaz0%2BFoJCYL8aIdjimhg2XI3wZ1xmNE%2BprAiBtd3GEBBkK8Lpj0xH27HTbWH7E3yiTY3UoB6f4Mn4T6yqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ6aDw9C5n%2BWco3KTKtwDHmHkBZ0IOn2K%2FkGirrqly4724Xqz5t3dPzTa6rdO0QU7yCFU6KQHpMFPGRbzcyf4LbMd3q%2FTebrcSZhQuF8zMe75wWTFn0ZJCjGospCFrWILxuaJ1odd8eG2vNPrS9MA4IM0vxzFkfQ5lxHS66AwgNLzsAZ5PZ%2BRJJWOenwdb1NwY47SR8JYts%2Fkacj50ux6rdVdzJDIMLLF6AUNsK8tnZ5ZbhTIzV9sTYp8ND%2BPeqnDknwUME7EAch6YJ5LwMoIQC8A%2B62LzV7kYSUm8LYfIGK%2FG9gFuB7KUM9Txx6gM%2B5AAuptHRAUdkXuL7Xtdqw%2FJPWjl7M4Ci9N%2BKzZPzc23XzxeEYDb8e7YJNMXJ4rJjoZ7yAZQ9RDxHvUf3PVD6q%2B6AUUOwCPudzhTokpIKk5rnvY0W1tOiresQblT8398CaLwMUeHnSJXbnWDLRhmtolKSqzF%2BXPoGdHHi6fsCVxR0smuW7bnVRdS9IsyPYRjeN8LOqfncdl1KNIJoVcO61xm6sBZ48XUpIlvEHRZC4Pwv1LoDzP0roSaspNsubDigdDVCc4t0Co5xflMdPQ1SCy7gP%2Bukpm%2Fxmk1wQeVeZ14UW9Yyu%2B1AzyEWla5dct00tRH%2FDnXSbaROJVGdcwqIewvwY6pgHrp5sV4uac4Ct1oOPOu1dL4pEn%2Fh4RuwKT0Jo9QPU15jasIj3B6ptuth3if9zJgRm4qU2lUmhKLLcyixgAmE5G0nJ%2BNO2d72PzwswaJc5aEAmwZCBW0XtGq6xkPVpJqw0cpyU6pTKZjROkkM%2F%2BRq%2FKdQXXZl88Hug5x63MtvC8gva9GDuSUXNCJmPPmx3LTzoEGViOPf5jWMMLXPq5E09ZT4bsmowm&X-Amz-Signature=3e3d3c3a7042e9a281d5c92841b9451c15a34ba10c02a76a98f3f77631787e77&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
