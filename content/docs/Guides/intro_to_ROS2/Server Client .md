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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVRBEDEW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIASdpOjXroXjQaDUVYXGwiUlplbntHjrOpmLTgYZhOmeAiEAnVDKitQRPCwsO4H9euLoS0jE5yGRx4skFm0sGPQpYv8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBGToEVE%2Bc4w22iFBircAzwfha7%2Ft%2BYfZZoNTDu7jGQUNmfYzsvKyq3R%2BCIzTDKd%2FiYDTr3RyOVADfy%2FBsVirZPp%2BbHQ2PeVKOjUnXTpQlsibignmnNqgLEv%2Fqp7BcMwX6nJQLoGCF4CpPfzpyXsQq%2FO80Q6srlACnmQIdXdua%2Fvn5YJpPhcZ%2FP3n7rSSAnKc1M0Xg%2Bmq15neH2udDxoOAhr%2BWxYgDLgDwznAu4zerB8erfOYNlX8gc%2Bju%2B4GzOiwUAk1UHkiD5mzlDZwV%2BjBIG4luIGF81yepzjqIH9Ifss64RKJj8YeDeaaAQ%2F0XeVy8tNg%2Br8miRqiSdiv%2FR1P4GpjSArrXw%2F2bkfWoUG7vY3xdHNai3wi6AAecXyXzxM2KwTbT6xH59lXn0VrArJWYiKL8K34HACCX8dC%2BkRg9rmvD3bGZS0p4vZtXrAuzBJEp59KOUvWX7D9diPWjLfty3nWvteSyEqppmJwkx%2Fhu183KzYngv3mGuMKYIVDgh3XVhkorboJ2hKjhSadylubo%2B%2BK9ZS1SOOPVnlt6K8i35uakTLP8EjVSJxQvnWvPQnG8w8e7lsrGVqpbeDrf7Yp7W3rmVZ6XWurirYxmmWbBZd0sNLKgWQ0ZTPRCTCCRyqqODLz8jZldUFPZ8GMJ%2BD9L0GOqUBpFrBd8c66V4XJ7HgToZbKiGZAxn2DUMwr7%2FnbaCalwrWsmNPRfldgp1sFVyGwceSxlgEPQp%2BubQVcOQGivgHsCI5methD%2BTcs1zoPJwYTeSd3nFz0z4KEofak2kAOk7B0d33R0KbxEiuMvmim2PYEwxngIZAmTvmiNZpyHqKPsM1gsgSBuyxMr%2FYRQxUCEoqym20hupzcnaQKwNRyT7yvtJlry12&X-Amz-Signature=546a9985c27e645240e6952b247361e51bc433135eeab5426d6d053acd05f5db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVRBEDEW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIASdpOjXroXjQaDUVYXGwiUlplbntHjrOpmLTgYZhOmeAiEAnVDKitQRPCwsO4H9euLoS0jE5yGRx4skFm0sGPQpYv8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBGToEVE%2Bc4w22iFBircAzwfha7%2Ft%2BYfZZoNTDu7jGQUNmfYzsvKyq3R%2BCIzTDKd%2FiYDTr3RyOVADfy%2FBsVirZPp%2BbHQ2PeVKOjUnXTpQlsibignmnNqgLEv%2Fqp7BcMwX6nJQLoGCF4CpPfzpyXsQq%2FO80Q6srlACnmQIdXdua%2Fvn5YJpPhcZ%2FP3n7rSSAnKc1M0Xg%2Bmq15neH2udDxoOAhr%2BWxYgDLgDwznAu4zerB8erfOYNlX8gc%2Bju%2B4GzOiwUAk1UHkiD5mzlDZwV%2BjBIG4luIGF81yepzjqIH9Ifss64RKJj8YeDeaaAQ%2F0XeVy8tNg%2Br8miRqiSdiv%2FR1P4GpjSArrXw%2F2bkfWoUG7vY3xdHNai3wi6AAecXyXzxM2KwTbT6xH59lXn0VrArJWYiKL8K34HACCX8dC%2BkRg9rmvD3bGZS0p4vZtXrAuzBJEp59KOUvWX7D9diPWjLfty3nWvteSyEqppmJwkx%2Fhu183KzYngv3mGuMKYIVDgh3XVhkorboJ2hKjhSadylubo%2B%2BK9ZS1SOOPVnlt6K8i35uakTLP8EjVSJxQvnWvPQnG8w8e7lsrGVqpbeDrf7Yp7W3rmVZ6XWurirYxmmWbBZd0sNLKgWQ0ZTPRCTCCRyqqODLz8jZldUFPZ8GMJ%2BD9L0GOqUBpFrBd8c66V4XJ7HgToZbKiGZAxn2DUMwr7%2FnbaCalwrWsmNPRfldgp1sFVyGwceSxlgEPQp%2BubQVcOQGivgHsCI5methD%2BTcs1zoPJwYTeSd3nFz0z4KEofak2kAOk7B0d33R0KbxEiuMvmim2PYEwxngIZAmTvmiNZpyHqKPsM1gsgSBuyxMr%2FYRQxUCEoqym20hupzcnaQKwNRyT7yvtJlry12&X-Amz-Signature=7c8c87d4e1f5a3baa9425972eb7c3e768c5cd2dc6d0d1321d4e8c9aa80c4eb10&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVRBEDEW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIASdpOjXroXjQaDUVYXGwiUlplbntHjrOpmLTgYZhOmeAiEAnVDKitQRPCwsO4H9euLoS0jE5yGRx4skFm0sGPQpYv8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBGToEVE%2Bc4w22iFBircAzwfha7%2Ft%2BYfZZoNTDu7jGQUNmfYzsvKyq3R%2BCIzTDKd%2FiYDTr3RyOVADfy%2FBsVirZPp%2BbHQ2PeVKOjUnXTpQlsibignmnNqgLEv%2Fqp7BcMwX6nJQLoGCF4CpPfzpyXsQq%2FO80Q6srlACnmQIdXdua%2Fvn5YJpPhcZ%2FP3n7rSSAnKc1M0Xg%2Bmq15neH2udDxoOAhr%2BWxYgDLgDwznAu4zerB8erfOYNlX8gc%2Bju%2B4GzOiwUAk1UHkiD5mzlDZwV%2BjBIG4luIGF81yepzjqIH9Ifss64RKJj8YeDeaaAQ%2F0XeVy8tNg%2Br8miRqiSdiv%2FR1P4GpjSArrXw%2F2bkfWoUG7vY3xdHNai3wi6AAecXyXzxM2KwTbT6xH59lXn0VrArJWYiKL8K34HACCX8dC%2BkRg9rmvD3bGZS0p4vZtXrAuzBJEp59KOUvWX7D9diPWjLfty3nWvteSyEqppmJwkx%2Fhu183KzYngv3mGuMKYIVDgh3XVhkorboJ2hKjhSadylubo%2B%2BK9ZS1SOOPVnlt6K8i35uakTLP8EjVSJxQvnWvPQnG8w8e7lsrGVqpbeDrf7Yp7W3rmVZ6XWurirYxmmWbBZd0sNLKgWQ0ZTPRCTCCRyqqODLz8jZldUFPZ8GMJ%2BD9L0GOqUBpFrBd8c66V4XJ7HgToZbKiGZAxn2DUMwr7%2FnbaCalwrWsmNPRfldgp1sFVyGwceSxlgEPQp%2BubQVcOQGivgHsCI5methD%2BTcs1zoPJwYTeSd3nFz0z4KEofak2kAOk7B0d33R0KbxEiuMvmim2PYEwxngIZAmTvmiNZpyHqKPsM1gsgSBuyxMr%2FYRQxUCEoqym20hupzcnaQKwNRyT7yvtJlry12&X-Amz-Signature=6fa9fcd30d2b7109cad22248d0988a477ee51c14efc2ed1427f848cf2cfe4ec2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVRBEDEW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIASdpOjXroXjQaDUVYXGwiUlplbntHjrOpmLTgYZhOmeAiEAnVDKitQRPCwsO4H9euLoS0jE5yGRx4skFm0sGPQpYv8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBGToEVE%2Bc4w22iFBircAzwfha7%2Ft%2BYfZZoNTDu7jGQUNmfYzsvKyq3R%2BCIzTDKd%2FiYDTr3RyOVADfy%2FBsVirZPp%2BbHQ2PeVKOjUnXTpQlsibignmnNqgLEv%2Fqp7BcMwX6nJQLoGCF4CpPfzpyXsQq%2FO80Q6srlACnmQIdXdua%2Fvn5YJpPhcZ%2FP3n7rSSAnKc1M0Xg%2Bmq15neH2udDxoOAhr%2BWxYgDLgDwznAu4zerB8erfOYNlX8gc%2Bju%2B4GzOiwUAk1UHkiD5mzlDZwV%2BjBIG4luIGF81yepzjqIH9Ifss64RKJj8YeDeaaAQ%2F0XeVy8tNg%2Br8miRqiSdiv%2FR1P4GpjSArrXw%2F2bkfWoUG7vY3xdHNai3wi6AAecXyXzxM2KwTbT6xH59lXn0VrArJWYiKL8K34HACCX8dC%2BkRg9rmvD3bGZS0p4vZtXrAuzBJEp59KOUvWX7D9diPWjLfty3nWvteSyEqppmJwkx%2Fhu183KzYngv3mGuMKYIVDgh3XVhkorboJ2hKjhSadylubo%2B%2BK9ZS1SOOPVnlt6K8i35uakTLP8EjVSJxQvnWvPQnG8w8e7lsrGVqpbeDrf7Yp7W3rmVZ6XWurirYxmmWbBZd0sNLKgWQ0ZTPRCTCCRyqqODLz8jZldUFPZ8GMJ%2BD9L0GOqUBpFrBd8c66V4XJ7HgToZbKiGZAxn2DUMwr7%2FnbaCalwrWsmNPRfldgp1sFVyGwceSxlgEPQp%2BubQVcOQGivgHsCI5methD%2BTcs1zoPJwYTeSd3nFz0z4KEofak2kAOk7B0d33R0KbxEiuMvmim2PYEwxngIZAmTvmiNZpyHqKPsM1gsgSBuyxMr%2FYRQxUCEoqym20hupzcnaQKwNRyT7yvtJlry12&X-Amz-Signature=dc53fca470955aa17e1ad0b1f7a18b482d894044a64b4acaad2e4b685a0f673a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVRBEDEW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIASdpOjXroXjQaDUVYXGwiUlplbntHjrOpmLTgYZhOmeAiEAnVDKitQRPCwsO4H9euLoS0jE5yGRx4skFm0sGPQpYv8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBGToEVE%2Bc4w22iFBircAzwfha7%2Ft%2BYfZZoNTDu7jGQUNmfYzsvKyq3R%2BCIzTDKd%2FiYDTr3RyOVADfy%2FBsVirZPp%2BbHQ2PeVKOjUnXTpQlsibignmnNqgLEv%2Fqp7BcMwX6nJQLoGCF4CpPfzpyXsQq%2FO80Q6srlACnmQIdXdua%2Fvn5YJpPhcZ%2FP3n7rSSAnKc1M0Xg%2Bmq15neH2udDxoOAhr%2BWxYgDLgDwznAu4zerB8erfOYNlX8gc%2Bju%2B4GzOiwUAk1UHkiD5mzlDZwV%2BjBIG4luIGF81yepzjqIH9Ifss64RKJj8YeDeaaAQ%2F0XeVy8tNg%2Br8miRqiSdiv%2FR1P4GpjSArrXw%2F2bkfWoUG7vY3xdHNai3wi6AAecXyXzxM2KwTbT6xH59lXn0VrArJWYiKL8K34HACCX8dC%2BkRg9rmvD3bGZS0p4vZtXrAuzBJEp59KOUvWX7D9diPWjLfty3nWvteSyEqppmJwkx%2Fhu183KzYngv3mGuMKYIVDgh3XVhkorboJ2hKjhSadylubo%2B%2BK9ZS1SOOPVnlt6K8i35uakTLP8EjVSJxQvnWvPQnG8w8e7lsrGVqpbeDrf7Yp7W3rmVZ6XWurirYxmmWbBZd0sNLKgWQ0ZTPRCTCCRyqqODLz8jZldUFPZ8GMJ%2BD9L0GOqUBpFrBd8c66V4XJ7HgToZbKiGZAxn2DUMwr7%2FnbaCalwrWsmNPRfldgp1sFVyGwceSxlgEPQp%2BubQVcOQGivgHsCI5methD%2BTcs1zoPJwYTeSd3nFz0z4KEofak2kAOk7B0d33R0KbxEiuMvmim2PYEwxngIZAmTvmiNZpyHqKPsM1gsgSBuyxMr%2FYRQxUCEoqym20hupzcnaQKwNRyT7yvtJlry12&X-Amz-Signature=a0ad3356d50a20fd369389a4901c2437df77dcaa1de0250b68bec5c336302c8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
