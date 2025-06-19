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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSI6WIY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpqIMc%2Bao0hw2oChK8CzKC8QahnIju222Ujspkiq49xAiBPXh0pAjXNADQeaWXaEX8c0J3njzvaIIJ4SAKnh%2Fw2JSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBdE%2Bqa97Z3S7rkhPKtwDK2rIyyhfO05Q5%2Fp0uw6h2G5fpPVOit%2F6gI4wbRsAu%2BOelrdana%2FRz2wmc%2Fl6sTlle74rizCagcGVQ77%2FlHbZTQxUreIyRmMKlfGO9x6EoPiUq4eTOn%2Bbyr%2BnOgXU1o3JrN7fADA1bs%2BrY45YXOuV58vN9J0UOEa71WdyfUKuLB3D9cc%2FcB%2BCDseHYBk6BUx1rNecvZMfbqkmYwYILhXFPZNVpydhyQatKiiFs4CtRX%2F9VyfVSAqTfaoerN4zW1EP5QFENjCrgcoHG6inA%2BI8g1x5iXvAJabuPGydhO6xr9D7tP7E0hGigqVHowqQ0eBMIFN7jjqT1Jg6I4km5UeuCVd4OmeIPFhTKiw4d04EfmTe0HDVP0S5phP9sVbVFYocNGRQ2Jgw%2Be9tWZ%2FYwVBNcGAME0K7nw3VzweuL%2Bp%2F4cbn7g223466bE3JqvfAYfU1%2BQQUBWqhoKipENznj5vf%2FyG3LsPNexx1StHEznVnM0NEicBB19QyA6KIsQZpqZ2yYghXoPut%2Bjqn%2B7Zan%2F3xz2DgLaAEOnC8JGwvFHBgZklGPfNav7WU9CuAU8eU3Nb2u4ghBIriRSnyMyh9MoM7jkVjnDF4pXHnwye5AGFf6xS58x3yvanYn3PGmsIws4TOwgY6pgEee%2BwNp8PwnockCd%2Ba6VgOoyIiwWxRxmKhkPiSGRybSyOcpg02jMNBikGdV9tE4fNa1nSstVAcTPr7OE52LlRgoqKS36P0srTp6D%2FdQfKZXPzlsylwSC9%2BAOCwSnq5N4Sd1y3BLgOV73vgRwQs1x%2F8%2Fnp9%2FVsRu1E4DiDlqmEDZiN7MOlx59nL14vsHAzdoBDmehguqan8DWHWGvI%2FXM6lXEz2S1ix&X-Amz-Signature=511db527d5b98f214679b887021b96184cc55cdd161beb4b4b98c5c2d61490a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSI6WIY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpqIMc%2Bao0hw2oChK8CzKC8QahnIju222Ujspkiq49xAiBPXh0pAjXNADQeaWXaEX8c0J3njzvaIIJ4SAKnh%2Fw2JSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBdE%2Bqa97Z3S7rkhPKtwDK2rIyyhfO05Q5%2Fp0uw6h2G5fpPVOit%2F6gI4wbRsAu%2BOelrdana%2FRz2wmc%2Fl6sTlle74rizCagcGVQ77%2FlHbZTQxUreIyRmMKlfGO9x6EoPiUq4eTOn%2Bbyr%2BnOgXU1o3JrN7fADA1bs%2BrY45YXOuV58vN9J0UOEa71WdyfUKuLB3D9cc%2FcB%2BCDseHYBk6BUx1rNecvZMfbqkmYwYILhXFPZNVpydhyQatKiiFs4CtRX%2F9VyfVSAqTfaoerN4zW1EP5QFENjCrgcoHG6inA%2BI8g1x5iXvAJabuPGydhO6xr9D7tP7E0hGigqVHowqQ0eBMIFN7jjqT1Jg6I4km5UeuCVd4OmeIPFhTKiw4d04EfmTe0HDVP0S5phP9sVbVFYocNGRQ2Jgw%2Be9tWZ%2FYwVBNcGAME0K7nw3VzweuL%2Bp%2F4cbn7g223466bE3JqvfAYfU1%2BQQUBWqhoKipENznj5vf%2FyG3LsPNexx1StHEznVnM0NEicBB19QyA6KIsQZpqZ2yYghXoPut%2Bjqn%2B7Zan%2F3xz2DgLaAEOnC8JGwvFHBgZklGPfNav7WU9CuAU8eU3Nb2u4ghBIriRSnyMyh9MoM7jkVjnDF4pXHnwye5AGFf6xS58x3yvanYn3PGmsIws4TOwgY6pgEee%2BwNp8PwnockCd%2Ba6VgOoyIiwWxRxmKhkPiSGRybSyOcpg02jMNBikGdV9tE4fNa1nSstVAcTPr7OE52LlRgoqKS36P0srTp6D%2FdQfKZXPzlsylwSC9%2BAOCwSnq5N4Sd1y3BLgOV73vgRwQs1x%2F8%2Fnp9%2FVsRu1E4DiDlqmEDZiN7MOlx59nL14vsHAzdoBDmehguqan8DWHWGvI%2FXM6lXEz2S1ix&X-Amz-Signature=19b36475111b11a1cc8e33d127b8530d2f422d83b7b0fffdc3d24357b44d77ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSI6WIY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpqIMc%2Bao0hw2oChK8CzKC8QahnIju222Ujspkiq49xAiBPXh0pAjXNADQeaWXaEX8c0J3njzvaIIJ4SAKnh%2Fw2JSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBdE%2Bqa97Z3S7rkhPKtwDK2rIyyhfO05Q5%2Fp0uw6h2G5fpPVOit%2F6gI4wbRsAu%2BOelrdana%2FRz2wmc%2Fl6sTlle74rizCagcGVQ77%2FlHbZTQxUreIyRmMKlfGO9x6EoPiUq4eTOn%2Bbyr%2BnOgXU1o3JrN7fADA1bs%2BrY45YXOuV58vN9J0UOEa71WdyfUKuLB3D9cc%2FcB%2BCDseHYBk6BUx1rNecvZMfbqkmYwYILhXFPZNVpydhyQatKiiFs4CtRX%2F9VyfVSAqTfaoerN4zW1EP5QFENjCrgcoHG6inA%2BI8g1x5iXvAJabuPGydhO6xr9D7tP7E0hGigqVHowqQ0eBMIFN7jjqT1Jg6I4km5UeuCVd4OmeIPFhTKiw4d04EfmTe0HDVP0S5phP9sVbVFYocNGRQ2Jgw%2Be9tWZ%2FYwVBNcGAME0K7nw3VzweuL%2Bp%2F4cbn7g223466bE3JqvfAYfU1%2BQQUBWqhoKipENznj5vf%2FyG3LsPNexx1StHEznVnM0NEicBB19QyA6KIsQZpqZ2yYghXoPut%2Bjqn%2B7Zan%2F3xz2DgLaAEOnC8JGwvFHBgZklGPfNav7WU9CuAU8eU3Nb2u4ghBIriRSnyMyh9MoM7jkVjnDF4pXHnwye5AGFf6xS58x3yvanYn3PGmsIws4TOwgY6pgEee%2BwNp8PwnockCd%2Ba6VgOoyIiwWxRxmKhkPiSGRybSyOcpg02jMNBikGdV9tE4fNa1nSstVAcTPr7OE52LlRgoqKS36P0srTp6D%2FdQfKZXPzlsylwSC9%2BAOCwSnq5N4Sd1y3BLgOV73vgRwQs1x%2F8%2Fnp9%2FVsRu1E4DiDlqmEDZiN7MOlx59nL14vsHAzdoBDmehguqan8DWHWGvI%2FXM6lXEz2S1ix&X-Amz-Signature=9233f2b17a16f178f6ce7fb4328722029c9a2f560edd9146ff7303f7a2073a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSI6WIY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpqIMc%2Bao0hw2oChK8CzKC8QahnIju222Ujspkiq49xAiBPXh0pAjXNADQeaWXaEX8c0J3njzvaIIJ4SAKnh%2Fw2JSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBdE%2Bqa97Z3S7rkhPKtwDK2rIyyhfO05Q5%2Fp0uw6h2G5fpPVOit%2F6gI4wbRsAu%2BOelrdana%2FRz2wmc%2Fl6sTlle74rizCagcGVQ77%2FlHbZTQxUreIyRmMKlfGO9x6EoPiUq4eTOn%2Bbyr%2BnOgXU1o3JrN7fADA1bs%2BrY45YXOuV58vN9J0UOEa71WdyfUKuLB3D9cc%2FcB%2BCDseHYBk6BUx1rNecvZMfbqkmYwYILhXFPZNVpydhyQatKiiFs4CtRX%2F9VyfVSAqTfaoerN4zW1EP5QFENjCrgcoHG6inA%2BI8g1x5iXvAJabuPGydhO6xr9D7tP7E0hGigqVHowqQ0eBMIFN7jjqT1Jg6I4km5UeuCVd4OmeIPFhTKiw4d04EfmTe0HDVP0S5phP9sVbVFYocNGRQ2Jgw%2Be9tWZ%2FYwVBNcGAME0K7nw3VzweuL%2Bp%2F4cbn7g223466bE3JqvfAYfU1%2BQQUBWqhoKipENznj5vf%2FyG3LsPNexx1StHEznVnM0NEicBB19QyA6KIsQZpqZ2yYghXoPut%2Bjqn%2B7Zan%2F3xz2DgLaAEOnC8JGwvFHBgZklGPfNav7WU9CuAU8eU3Nb2u4ghBIriRSnyMyh9MoM7jkVjnDF4pXHnwye5AGFf6xS58x3yvanYn3PGmsIws4TOwgY6pgEee%2BwNp8PwnockCd%2Ba6VgOoyIiwWxRxmKhkPiSGRybSyOcpg02jMNBikGdV9tE4fNa1nSstVAcTPr7OE52LlRgoqKS36P0srTp6D%2FdQfKZXPzlsylwSC9%2BAOCwSnq5N4Sd1y3BLgOV73vgRwQs1x%2F8%2Fnp9%2FVsRu1E4DiDlqmEDZiN7MOlx59nL14vsHAzdoBDmehguqan8DWHWGvI%2FXM6lXEz2S1ix&X-Amz-Signature=a327bee583dfd72144167ca73059774b461d9de91a0dac4a0d7a40cc1a45d939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSI6WIY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpqIMc%2Bao0hw2oChK8CzKC8QahnIju222Ujspkiq49xAiBPXh0pAjXNADQeaWXaEX8c0J3njzvaIIJ4SAKnh%2Fw2JSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBdE%2Bqa97Z3S7rkhPKtwDK2rIyyhfO05Q5%2Fp0uw6h2G5fpPVOit%2F6gI4wbRsAu%2BOelrdana%2FRz2wmc%2Fl6sTlle74rizCagcGVQ77%2FlHbZTQxUreIyRmMKlfGO9x6EoPiUq4eTOn%2Bbyr%2BnOgXU1o3JrN7fADA1bs%2BrY45YXOuV58vN9J0UOEa71WdyfUKuLB3D9cc%2FcB%2BCDseHYBk6BUx1rNecvZMfbqkmYwYILhXFPZNVpydhyQatKiiFs4CtRX%2F9VyfVSAqTfaoerN4zW1EP5QFENjCrgcoHG6inA%2BI8g1x5iXvAJabuPGydhO6xr9D7tP7E0hGigqVHowqQ0eBMIFN7jjqT1Jg6I4km5UeuCVd4OmeIPFhTKiw4d04EfmTe0HDVP0S5phP9sVbVFYocNGRQ2Jgw%2Be9tWZ%2FYwVBNcGAME0K7nw3VzweuL%2Bp%2F4cbn7g223466bE3JqvfAYfU1%2BQQUBWqhoKipENznj5vf%2FyG3LsPNexx1StHEznVnM0NEicBB19QyA6KIsQZpqZ2yYghXoPut%2Bjqn%2B7Zan%2F3xz2DgLaAEOnC8JGwvFHBgZklGPfNav7WU9CuAU8eU3Nb2u4ghBIriRSnyMyh9MoM7jkVjnDF4pXHnwye5AGFf6xS58x3yvanYn3PGmsIws4TOwgY6pgEee%2BwNp8PwnockCd%2Ba6VgOoyIiwWxRxmKhkPiSGRybSyOcpg02jMNBikGdV9tE4fNa1nSstVAcTPr7OE52LlRgoqKS36P0srTp6D%2FdQfKZXPzlsylwSC9%2BAOCwSnq5N4Sd1y3BLgOV73vgRwQs1x%2F8%2Fnp9%2FVsRu1E4DiDlqmEDZiN7MOlx59nL14vsHAzdoBDmehguqan8DWHWGvI%2FXM6lXEz2S1ix&X-Amz-Signature=646198f7a65a1b050ea66af524c334d40b7785750808afe1eb890175f9924650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
