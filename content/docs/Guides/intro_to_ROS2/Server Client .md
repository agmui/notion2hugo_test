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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B4T7XG7%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHl3ju2skmP1VmO8Z7Ypo%2FpLBILFZi5NSggZvVzn5zzqAiBY2CaaKAvIlci4SmIyKrBXKUerJZLVr%2Bx1%2BuT6rqiCZSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMpKdJWqC%2FqHdlvNOrKtwDUGJ8uB87GhQMW2z%2F%2BorV1znLVoIl%2BRlsQeT6jZvD29TwSnnDt6w5P7hLLB6pmVYHF2Tp0fKeQls%2BuBNevP5n%2FI64fNWeqKsKSMcy6Xxrtg%2BrLV%2FUxtCNxNF%2BzVakdvtpFuY17o7TUx0TPK7ahJR8LuA6iunikRM6%2FHPwTJwLYdUN%2BSamxynkD16QFcmuHpUjCGVcAb%2BLkc3YwvM%2FCPRqZmUyAk%2Fn6iBCd1KknUi2UKx97XNv8SP0m2vooeCuO6vpF2r%2FzJO%2FWsnCb4H%2BMmMBD2CgJ0j%2FnmCHwuro2jBZp%2BXZtrzqFXPTamuCa%2Br6%2BtmqXz%2FNfXmtDOKnqvW6sEAnoGcxVZpzAuzcAv3EvB%2F0kpfqcnczAeMmHeI8Pt9G3EYRdBpZ7L%2FcyPxSopHyd89wVDh%2FFDdGgevUtq6d4Cs40BSPxN6NWUdOhb8o%2FLBUngraW9YserRwcL0o4M23LTKCs57vnc72w5rIAyPOI6pzzBoA%2BFa%2BSQzX3LxMgZ0k%2B0KeuNURkVFZyCiJ52EM8zWkp189%2BfYiIXiyQN6BEDcSI8YW7%2FgXT9stYZEuNQCDcluHXdrc%2BkPiO%2FdG0v5XURq%2FMXvVVtdlQJkVQvUEcGT3E7cHuwBDnkyVdZ3CGc4wk%2BqfvgY6pgHZWsU2gifYkSdbJcASaZfGTR3yb18FTHLZzIBLM7LIROejsbTZeczjtOm%2By9rmnQnna5r5QOwirthEXsI2cXVHK8fz6myMwRAgZMTAiRZmxBWTnGI5%2Fm1sujUKTXeiCEDTJ1xtT7pexw16%2BOCYijC9CbKhKiIZKRBpBC6v9X4sDuW24iWvwbGdhw1gjDAu2Z692enxQ8WkCP10yblhuo759Omlfj0i&X-Amz-Signature=b5a022482fa22580598761e1823affaa8f8611077f80844ebd3efd9c907d0933&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B4T7XG7%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHl3ju2skmP1VmO8Z7Ypo%2FpLBILFZi5NSggZvVzn5zzqAiBY2CaaKAvIlci4SmIyKrBXKUerJZLVr%2Bx1%2BuT6rqiCZSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMpKdJWqC%2FqHdlvNOrKtwDUGJ8uB87GhQMW2z%2F%2BorV1znLVoIl%2BRlsQeT6jZvD29TwSnnDt6w5P7hLLB6pmVYHF2Tp0fKeQls%2BuBNevP5n%2FI64fNWeqKsKSMcy6Xxrtg%2BrLV%2FUxtCNxNF%2BzVakdvtpFuY17o7TUx0TPK7ahJR8LuA6iunikRM6%2FHPwTJwLYdUN%2BSamxynkD16QFcmuHpUjCGVcAb%2BLkc3YwvM%2FCPRqZmUyAk%2Fn6iBCd1KknUi2UKx97XNv8SP0m2vooeCuO6vpF2r%2FzJO%2FWsnCb4H%2BMmMBD2CgJ0j%2FnmCHwuro2jBZp%2BXZtrzqFXPTamuCa%2Br6%2BtmqXz%2FNfXmtDOKnqvW6sEAnoGcxVZpzAuzcAv3EvB%2F0kpfqcnczAeMmHeI8Pt9G3EYRdBpZ7L%2FcyPxSopHyd89wVDh%2FFDdGgevUtq6d4Cs40BSPxN6NWUdOhb8o%2FLBUngraW9YserRwcL0o4M23LTKCs57vnc72w5rIAyPOI6pzzBoA%2BFa%2BSQzX3LxMgZ0k%2B0KeuNURkVFZyCiJ52EM8zWkp189%2BfYiIXiyQN6BEDcSI8YW7%2FgXT9stYZEuNQCDcluHXdrc%2BkPiO%2FdG0v5XURq%2FMXvVVtdlQJkVQvUEcGT3E7cHuwBDnkyVdZ3CGc4wk%2BqfvgY6pgHZWsU2gifYkSdbJcASaZfGTR3yb18FTHLZzIBLM7LIROejsbTZeczjtOm%2By9rmnQnna5r5QOwirthEXsI2cXVHK8fz6myMwRAgZMTAiRZmxBWTnGI5%2Fm1sujUKTXeiCEDTJ1xtT7pexw16%2BOCYijC9CbKhKiIZKRBpBC6v9X4sDuW24iWvwbGdhw1gjDAu2Z692enxQ8WkCP10yblhuo759Omlfj0i&X-Amz-Signature=4b40b7725edf4b5de451c759a6052e8f7fffccbfcee4427bd0db165c87bf4cf9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B4T7XG7%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHl3ju2skmP1VmO8Z7Ypo%2FpLBILFZi5NSggZvVzn5zzqAiBY2CaaKAvIlci4SmIyKrBXKUerJZLVr%2Bx1%2BuT6rqiCZSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMpKdJWqC%2FqHdlvNOrKtwDUGJ8uB87GhQMW2z%2F%2BorV1znLVoIl%2BRlsQeT6jZvD29TwSnnDt6w5P7hLLB6pmVYHF2Tp0fKeQls%2BuBNevP5n%2FI64fNWeqKsKSMcy6Xxrtg%2BrLV%2FUxtCNxNF%2BzVakdvtpFuY17o7TUx0TPK7ahJR8LuA6iunikRM6%2FHPwTJwLYdUN%2BSamxynkD16QFcmuHpUjCGVcAb%2BLkc3YwvM%2FCPRqZmUyAk%2Fn6iBCd1KknUi2UKx97XNv8SP0m2vooeCuO6vpF2r%2FzJO%2FWsnCb4H%2BMmMBD2CgJ0j%2FnmCHwuro2jBZp%2BXZtrzqFXPTamuCa%2Br6%2BtmqXz%2FNfXmtDOKnqvW6sEAnoGcxVZpzAuzcAv3EvB%2F0kpfqcnczAeMmHeI8Pt9G3EYRdBpZ7L%2FcyPxSopHyd89wVDh%2FFDdGgevUtq6d4Cs40BSPxN6NWUdOhb8o%2FLBUngraW9YserRwcL0o4M23LTKCs57vnc72w5rIAyPOI6pzzBoA%2BFa%2BSQzX3LxMgZ0k%2B0KeuNURkVFZyCiJ52EM8zWkp189%2BfYiIXiyQN6BEDcSI8YW7%2FgXT9stYZEuNQCDcluHXdrc%2BkPiO%2FdG0v5XURq%2FMXvVVtdlQJkVQvUEcGT3E7cHuwBDnkyVdZ3CGc4wk%2BqfvgY6pgHZWsU2gifYkSdbJcASaZfGTR3yb18FTHLZzIBLM7LIROejsbTZeczjtOm%2By9rmnQnna5r5QOwirthEXsI2cXVHK8fz6myMwRAgZMTAiRZmxBWTnGI5%2Fm1sujUKTXeiCEDTJ1xtT7pexw16%2BOCYijC9CbKhKiIZKRBpBC6v9X4sDuW24iWvwbGdhw1gjDAu2Z692enxQ8WkCP10yblhuo759Omlfj0i&X-Amz-Signature=a91605e86dc585a2fe8a5370e1254d1d1d05eea60bd7de8fcb146e593150625b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B4T7XG7%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHl3ju2skmP1VmO8Z7Ypo%2FpLBILFZi5NSggZvVzn5zzqAiBY2CaaKAvIlci4SmIyKrBXKUerJZLVr%2Bx1%2BuT6rqiCZSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMpKdJWqC%2FqHdlvNOrKtwDUGJ8uB87GhQMW2z%2F%2BorV1znLVoIl%2BRlsQeT6jZvD29TwSnnDt6w5P7hLLB6pmVYHF2Tp0fKeQls%2BuBNevP5n%2FI64fNWeqKsKSMcy6Xxrtg%2BrLV%2FUxtCNxNF%2BzVakdvtpFuY17o7TUx0TPK7ahJR8LuA6iunikRM6%2FHPwTJwLYdUN%2BSamxynkD16QFcmuHpUjCGVcAb%2BLkc3YwvM%2FCPRqZmUyAk%2Fn6iBCd1KknUi2UKx97XNv8SP0m2vooeCuO6vpF2r%2FzJO%2FWsnCb4H%2BMmMBD2CgJ0j%2FnmCHwuro2jBZp%2BXZtrzqFXPTamuCa%2Br6%2BtmqXz%2FNfXmtDOKnqvW6sEAnoGcxVZpzAuzcAv3EvB%2F0kpfqcnczAeMmHeI8Pt9G3EYRdBpZ7L%2FcyPxSopHyd89wVDh%2FFDdGgevUtq6d4Cs40BSPxN6NWUdOhb8o%2FLBUngraW9YserRwcL0o4M23LTKCs57vnc72w5rIAyPOI6pzzBoA%2BFa%2BSQzX3LxMgZ0k%2B0KeuNURkVFZyCiJ52EM8zWkp189%2BfYiIXiyQN6BEDcSI8YW7%2FgXT9stYZEuNQCDcluHXdrc%2BkPiO%2FdG0v5XURq%2FMXvVVtdlQJkVQvUEcGT3E7cHuwBDnkyVdZ3CGc4wk%2BqfvgY6pgHZWsU2gifYkSdbJcASaZfGTR3yb18FTHLZzIBLM7LIROejsbTZeczjtOm%2By9rmnQnna5r5QOwirthEXsI2cXVHK8fz6myMwRAgZMTAiRZmxBWTnGI5%2Fm1sujUKTXeiCEDTJ1xtT7pexw16%2BOCYijC9CbKhKiIZKRBpBC6v9X4sDuW24iWvwbGdhw1gjDAu2Z692enxQ8WkCP10yblhuo759Omlfj0i&X-Amz-Signature=bdad3acfecd293a69fa3d36d2e78ef98617beb39a82aef751d3f696f386e30b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B4T7XG7%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHl3ju2skmP1VmO8Z7Ypo%2FpLBILFZi5NSggZvVzn5zzqAiBY2CaaKAvIlci4SmIyKrBXKUerJZLVr%2Bx1%2BuT6rqiCZSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMpKdJWqC%2FqHdlvNOrKtwDUGJ8uB87GhQMW2z%2F%2BorV1znLVoIl%2BRlsQeT6jZvD29TwSnnDt6w5P7hLLB6pmVYHF2Tp0fKeQls%2BuBNevP5n%2FI64fNWeqKsKSMcy6Xxrtg%2BrLV%2FUxtCNxNF%2BzVakdvtpFuY17o7TUx0TPK7ahJR8LuA6iunikRM6%2FHPwTJwLYdUN%2BSamxynkD16QFcmuHpUjCGVcAb%2BLkc3YwvM%2FCPRqZmUyAk%2Fn6iBCd1KknUi2UKx97XNv8SP0m2vooeCuO6vpF2r%2FzJO%2FWsnCb4H%2BMmMBD2CgJ0j%2FnmCHwuro2jBZp%2BXZtrzqFXPTamuCa%2Br6%2BtmqXz%2FNfXmtDOKnqvW6sEAnoGcxVZpzAuzcAv3EvB%2F0kpfqcnczAeMmHeI8Pt9G3EYRdBpZ7L%2FcyPxSopHyd89wVDh%2FFDdGgevUtq6d4Cs40BSPxN6NWUdOhb8o%2FLBUngraW9YserRwcL0o4M23LTKCs57vnc72w5rIAyPOI6pzzBoA%2BFa%2BSQzX3LxMgZ0k%2B0KeuNURkVFZyCiJ52EM8zWkp189%2BfYiIXiyQN6BEDcSI8YW7%2FgXT9stYZEuNQCDcluHXdrc%2BkPiO%2FdG0v5XURq%2FMXvVVtdlQJkVQvUEcGT3E7cHuwBDnkyVdZ3CGc4wk%2BqfvgY6pgHZWsU2gifYkSdbJcASaZfGTR3yb18FTHLZzIBLM7LIROejsbTZeczjtOm%2By9rmnQnna5r5QOwirthEXsI2cXVHK8fz6myMwRAgZMTAiRZmxBWTnGI5%2Fm1sujUKTXeiCEDTJ1xtT7pexw16%2BOCYijC9CbKhKiIZKRBpBC6v9X4sDuW24iWvwbGdhw1gjDAu2Z692enxQ8WkCP10yblhuo759Omlfj0i&X-Amz-Signature=90675ba0966036fbe69cb1e18bcc8735a9982cf4ea8a8e4c709f3e5fabb3e272&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
