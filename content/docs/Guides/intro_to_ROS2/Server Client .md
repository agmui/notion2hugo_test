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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJFUEGKU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHLrG7Itkj5TfeRy%2FV5gbdwBpmdaVvUPCFL4JNa4h78eAiAPADjJ6AEPuUSOTp%2Fxd7CYeKNjCxZBtjgwAKjgC5ePjSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBlw4bkKhclFnVKf8KtwDlEw52vrK972mDV2M2yXXUj8ixeovUWlPU%2FxBddXzh44Sqv6JZaMHTwpv08nSrCGyjTsjeM4aUQKa3Nx0HsS%2FRzTR8rGA%2FOaU5uebkm8VpsYQWMHeKLE24yWmVQdDIOSvyO4LzqfAB%2FaoDVke8YmZBNQWDFb4dmrWz2d2ngQFRrilocBoBh%2F5jtMMZLitmG%2BV2DhVkxlo0bB%2FctkX%2FHPfe%2BAuEBAKeiIqJ8Jv%2BCziefJ7%2FFvceke24yJuYCqJeZXcfx%2FvUx%2FLBkTBdTb0iOTlq3D17gYuptX%2Bi1%2FJCBYTQ0jSKpc0ApkIj1HQ1WdWUp%2F%2BP4cUf0xLNFjr3Z3SvfphZXyYSY8h%2FV2T2emwwy3wfvieWlZthyMrpIre7T%2B%2FRQzwpX%2FBT9gEz1Ug%2F77pHp0dez0pYeUCPAMXT3aXgFPeXucRQvtROnjH%2F6wNAl7l0ulfWU6a1xp1H2AGMfMmesb34MQtDZ4VOxjYdGYZOv0pEu5BAPfatQbBcsn2PpF4DqmrwSjgT%2B4g08Nt98021xF9GOWgRPdQQHwsuGOVYj7bJsL0z47i3jUUOwXlWJfPFlTQ7uktjk%2FFb3DWtzmt8xm4volIagXu52PiDeTH%2BVFsU9GVFw14xp8u8NPANyIwzpuOwAY6pgE%2FAmhSN68w2LuUO7tOsl4LkWj0x9wrGoiT0S9q0MKm0zaJt5jA6BWVqPck3Xlmsf1KG36%2BnWb655N8ncS%2FQXSOlbM9yj4r2l7zyCdo1SAGiwX0BKcflovdprWLdMFCLFzICsUzHQ%2Fzpu9xBYW7ThBjVHuCWQZDlsf8XdkxGx96TrILc9RjmxfD2Jxo03H6jEerQ329IO8bB%2BE92js26djGwedzYzoC&X-Amz-Signature=388de2cee19058905cb21b3630f5ad029bb22ef5c96e15e521d32aee209adb1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJFUEGKU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHLrG7Itkj5TfeRy%2FV5gbdwBpmdaVvUPCFL4JNa4h78eAiAPADjJ6AEPuUSOTp%2Fxd7CYeKNjCxZBtjgwAKjgC5ePjSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBlw4bkKhclFnVKf8KtwDlEw52vrK972mDV2M2yXXUj8ixeovUWlPU%2FxBddXzh44Sqv6JZaMHTwpv08nSrCGyjTsjeM4aUQKa3Nx0HsS%2FRzTR8rGA%2FOaU5uebkm8VpsYQWMHeKLE24yWmVQdDIOSvyO4LzqfAB%2FaoDVke8YmZBNQWDFb4dmrWz2d2ngQFRrilocBoBh%2F5jtMMZLitmG%2BV2DhVkxlo0bB%2FctkX%2FHPfe%2BAuEBAKeiIqJ8Jv%2BCziefJ7%2FFvceke24yJuYCqJeZXcfx%2FvUx%2FLBkTBdTb0iOTlq3D17gYuptX%2Bi1%2FJCBYTQ0jSKpc0ApkIj1HQ1WdWUp%2F%2BP4cUf0xLNFjr3Z3SvfphZXyYSY8h%2FV2T2emwwy3wfvieWlZthyMrpIre7T%2B%2FRQzwpX%2FBT9gEz1Ug%2F77pHp0dez0pYeUCPAMXT3aXgFPeXucRQvtROnjH%2F6wNAl7l0ulfWU6a1xp1H2AGMfMmesb34MQtDZ4VOxjYdGYZOv0pEu5BAPfatQbBcsn2PpF4DqmrwSjgT%2B4g08Nt98021xF9GOWgRPdQQHwsuGOVYj7bJsL0z47i3jUUOwXlWJfPFlTQ7uktjk%2FFb3DWtzmt8xm4volIagXu52PiDeTH%2BVFsU9GVFw14xp8u8NPANyIwzpuOwAY6pgE%2FAmhSN68w2LuUO7tOsl4LkWj0x9wrGoiT0S9q0MKm0zaJt5jA6BWVqPck3Xlmsf1KG36%2BnWb655N8ncS%2FQXSOlbM9yj4r2l7zyCdo1SAGiwX0BKcflovdprWLdMFCLFzICsUzHQ%2Fzpu9xBYW7ThBjVHuCWQZDlsf8XdkxGx96TrILc9RjmxfD2Jxo03H6jEerQ329IO8bB%2BE92js26djGwedzYzoC&X-Amz-Signature=60d26a1c7b167d5512aad85ab748b5df1970339eb329e9632c54cfdb12923582&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJFUEGKU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHLrG7Itkj5TfeRy%2FV5gbdwBpmdaVvUPCFL4JNa4h78eAiAPADjJ6AEPuUSOTp%2Fxd7CYeKNjCxZBtjgwAKjgC5ePjSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBlw4bkKhclFnVKf8KtwDlEw52vrK972mDV2M2yXXUj8ixeovUWlPU%2FxBddXzh44Sqv6JZaMHTwpv08nSrCGyjTsjeM4aUQKa3Nx0HsS%2FRzTR8rGA%2FOaU5uebkm8VpsYQWMHeKLE24yWmVQdDIOSvyO4LzqfAB%2FaoDVke8YmZBNQWDFb4dmrWz2d2ngQFRrilocBoBh%2F5jtMMZLitmG%2BV2DhVkxlo0bB%2FctkX%2FHPfe%2BAuEBAKeiIqJ8Jv%2BCziefJ7%2FFvceke24yJuYCqJeZXcfx%2FvUx%2FLBkTBdTb0iOTlq3D17gYuptX%2Bi1%2FJCBYTQ0jSKpc0ApkIj1HQ1WdWUp%2F%2BP4cUf0xLNFjr3Z3SvfphZXyYSY8h%2FV2T2emwwy3wfvieWlZthyMrpIre7T%2B%2FRQzwpX%2FBT9gEz1Ug%2F77pHp0dez0pYeUCPAMXT3aXgFPeXucRQvtROnjH%2F6wNAl7l0ulfWU6a1xp1H2AGMfMmesb34MQtDZ4VOxjYdGYZOv0pEu5BAPfatQbBcsn2PpF4DqmrwSjgT%2B4g08Nt98021xF9GOWgRPdQQHwsuGOVYj7bJsL0z47i3jUUOwXlWJfPFlTQ7uktjk%2FFb3DWtzmt8xm4volIagXu52PiDeTH%2BVFsU9GVFw14xp8u8NPANyIwzpuOwAY6pgE%2FAmhSN68w2LuUO7tOsl4LkWj0x9wrGoiT0S9q0MKm0zaJt5jA6BWVqPck3Xlmsf1KG36%2BnWb655N8ncS%2FQXSOlbM9yj4r2l7zyCdo1SAGiwX0BKcflovdprWLdMFCLFzICsUzHQ%2Fzpu9xBYW7ThBjVHuCWQZDlsf8XdkxGx96TrILc9RjmxfD2Jxo03H6jEerQ329IO8bB%2BE92js26djGwedzYzoC&X-Amz-Signature=10bc41070da7e585668251bb71dfd6d465718a9786ce09c31d58035f772e12e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJFUEGKU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHLrG7Itkj5TfeRy%2FV5gbdwBpmdaVvUPCFL4JNa4h78eAiAPADjJ6AEPuUSOTp%2Fxd7CYeKNjCxZBtjgwAKjgC5ePjSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBlw4bkKhclFnVKf8KtwDlEw52vrK972mDV2M2yXXUj8ixeovUWlPU%2FxBddXzh44Sqv6JZaMHTwpv08nSrCGyjTsjeM4aUQKa3Nx0HsS%2FRzTR8rGA%2FOaU5uebkm8VpsYQWMHeKLE24yWmVQdDIOSvyO4LzqfAB%2FaoDVke8YmZBNQWDFb4dmrWz2d2ngQFRrilocBoBh%2F5jtMMZLitmG%2BV2DhVkxlo0bB%2FctkX%2FHPfe%2BAuEBAKeiIqJ8Jv%2BCziefJ7%2FFvceke24yJuYCqJeZXcfx%2FvUx%2FLBkTBdTb0iOTlq3D17gYuptX%2Bi1%2FJCBYTQ0jSKpc0ApkIj1HQ1WdWUp%2F%2BP4cUf0xLNFjr3Z3SvfphZXyYSY8h%2FV2T2emwwy3wfvieWlZthyMrpIre7T%2B%2FRQzwpX%2FBT9gEz1Ug%2F77pHp0dez0pYeUCPAMXT3aXgFPeXucRQvtROnjH%2F6wNAl7l0ulfWU6a1xp1H2AGMfMmesb34MQtDZ4VOxjYdGYZOv0pEu5BAPfatQbBcsn2PpF4DqmrwSjgT%2B4g08Nt98021xF9GOWgRPdQQHwsuGOVYj7bJsL0z47i3jUUOwXlWJfPFlTQ7uktjk%2FFb3DWtzmt8xm4volIagXu52PiDeTH%2BVFsU9GVFw14xp8u8NPANyIwzpuOwAY6pgE%2FAmhSN68w2LuUO7tOsl4LkWj0x9wrGoiT0S9q0MKm0zaJt5jA6BWVqPck3Xlmsf1KG36%2BnWb655N8ncS%2FQXSOlbM9yj4r2l7zyCdo1SAGiwX0BKcflovdprWLdMFCLFzICsUzHQ%2Fzpu9xBYW7ThBjVHuCWQZDlsf8XdkxGx96TrILc9RjmxfD2Jxo03H6jEerQ329IO8bB%2BE92js26djGwedzYzoC&X-Amz-Signature=1234c9b55ccde43029c76002aacf29f2ebe967e19b539b50b592d3fcc1a4f5cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJFUEGKU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHLrG7Itkj5TfeRy%2FV5gbdwBpmdaVvUPCFL4JNa4h78eAiAPADjJ6AEPuUSOTp%2Fxd7CYeKNjCxZBtjgwAKjgC5ePjSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBlw4bkKhclFnVKf8KtwDlEw52vrK972mDV2M2yXXUj8ixeovUWlPU%2FxBddXzh44Sqv6JZaMHTwpv08nSrCGyjTsjeM4aUQKa3Nx0HsS%2FRzTR8rGA%2FOaU5uebkm8VpsYQWMHeKLE24yWmVQdDIOSvyO4LzqfAB%2FaoDVke8YmZBNQWDFb4dmrWz2d2ngQFRrilocBoBh%2F5jtMMZLitmG%2BV2DhVkxlo0bB%2FctkX%2FHPfe%2BAuEBAKeiIqJ8Jv%2BCziefJ7%2FFvceke24yJuYCqJeZXcfx%2FvUx%2FLBkTBdTb0iOTlq3D17gYuptX%2Bi1%2FJCBYTQ0jSKpc0ApkIj1HQ1WdWUp%2F%2BP4cUf0xLNFjr3Z3SvfphZXyYSY8h%2FV2T2emwwy3wfvieWlZthyMrpIre7T%2B%2FRQzwpX%2FBT9gEz1Ug%2F77pHp0dez0pYeUCPAMXT3aXgFPeXucRQvtROnjH%2F6wNAl7l0ulfWU6a1xp1H2AGMfMmesb34MQtDZ4VOxjYdGYZOv0pEu5BAPfatQbBcsn2PpF4DqmrwSjgT%2B4g08Nt98021xF9GOWgRPdQQHwsuGOVYj7bJsL0z47i3jUUOwXlWJfPFlTQ7uktjk%2FFb3DWtzmt8xm4volIagXu52PiDeTH%2BVFsU9GVFw14xp8u8NPANyIwzpuOwAY6pgE%2FAmhSN68w2LuUO7tOsl4LkWj0x9wrGoiT0S9q0MKm0zaJt5jA6BWVqPck3Xlmsf1KG36%2BnWb655N8ncS%2FQXSOlbM9yj4r2l7zyCdo1SAGiwX0BKcflovdprWLdMFCLFzICsUzHQ%2Fzpu9xBYW7ThBjVHuCWQZDlsf8XdkxGx96TrILc9RjmxfD2Jxo03H6jEerQ329IO8bB%2BE92js26djGwedzYzoC&X-Amz-Signature=ae7ebee99cc0845dc2b1186193a854fe49ecb2be7fc6d6bf1eab955be936521f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
