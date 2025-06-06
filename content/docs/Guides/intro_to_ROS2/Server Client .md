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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F2MLOXX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjN7tB9ZMWXaGYudYJJCJ5W%2B5dX0NBHHCmZmAG%2FBOhMAiBP0uEdu64zGrzs5ctWOU6r%2Bo4IhxV2UkKZMYZ3lxRUbSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMq2WT8ZwXj4%2Fx9Q3JKtwD63%2BwVyEoLex%2BweFesQMWYnPJN1PAgl5TeMX8ZXOMe0TiUt9R4gSpkACIEd8Fx8FwpTjkIqFEfEJ2P45AE%2Fjwe2hiUB39iZsi0BMjn5n8BwEFghGwHjk5NS00C4XDMAfQHKqVhNXuVJEEvhLGn44j5DCySCWFJCDrs20D9DxV0xQPvdBD0KuKnXJ8R3rBwrBNfPgjX5xfqcR5x9AHflPWx%2Fut%2B3CwiJoNQNH9Kx4Z73Qp312yVpQNo56cpWblKfip9a0l15Tr1wVI8O7O1cCydjF7n6CvH95j%2FhilTRJZ2FLXo5Dad29PwEKSC%2BjCWKNpOS5NW%2B07cxVITD2JdpjKwciSYFRqYXxiuWTSpmXiCsIrBv2H3pbSHCyoSP8m8ER5va4vlv6v%2FVPiMDI25aOba7Atu%2FCsmHJhDV6yAdQk3P2Ct609%2BMtmms%2FXhYc%2FGfM8tj6KrPIzoQSSY1QUu8WCquxqIQRW2j7ik6QX3v8RTo36ONTkEMrgGqNm11cFambQLl9mMA42vyguPLOqsp1SRzwlVxDA9jYGg6xWSTXQiFNf2xkGs4w9%2BOW4omYQwbvs4hhz72aDKlP1pMg%2B%2BZXZVgEiHUXFOy1jFbLloKGgbBzspXo%2FMeKN1COWXgwwx%2FCLwgY6pgHfrwrML8atXUXk%2Baz25XTX3zkvwS9PdKnPyA4BCF8UeV6CLtb0DseOu6aTbYuLBylUzbEEx0Q%2BQE1YCbI4MAUgrZ9mGomythZHUXv2MB%2BKrFswz0QJ98A9XpDTyxnKKZOTx%2FRzuU4LJPG1u5B72Zzn%2FDlA6nkl8hOBe6uMRkgiPJQ66kqHzcVMicop%2Bbx5bKmUBydbJqusuJXP5vBtsMgCocDepGkV&X-Amz-Signature=aeb70b3e42595fb143fac17cf4a23a0e530811b63052b18253cc9740704810be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F2MLOXX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjN7tB9ZMWXaGYudYJJCJ5W%2B5dX0NBHHCmZmAG%2FBOhMAiBP0uEdu64zGrzs5ctWOU6r%2Bo4IhxV2UkKZMYZ3lxRUbSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMq2WT8ZwXj4%2Fx9Q3JKtwD63%2BwVyEoLex%2BweFesQMWYnPJN1PAgl5TeMX8ZXOMe0TiUt9R4gSpkACIEd8Fx8FwpTjkIqFEfEJ2P45AE%2Fjwe2hiUB39iZsi0BMjn5n8BwEFghGwHjk5NS00C4XDMAfQHKqVhNXuVJEEvhLGn44j5DCySCWFJCDrs20D9DxV0xQPvdBD0KuKnXJ8R3rBwrBNfPgjX5xfqcR5x9AHflPWx%2Fut%2B3CwiJoNQNH9Kx4Z73Qp312yVpQNo56cpWblKfip9a0l15Tr1wVI8O7O1cCydjF7n6CvH95j%2FhilTRJZ2FLXo5Dad29PwEKSC%2BjCWKNpOS5NW%2B07cxVITD2JdpjKwciSYFRqYXxiuWTSpmXiCsIrBv2H3pbSHCyoSP8m8ER5va4vlv6v%2FVPiMDI25aOba7Atu%2FCsmHJhDV6yAdQk3P2Ct609%2BMtmms%2FXhYc%2FGfM8tj6KrPIzoQSSY1QUu8WCquxqIQRW2j7ik6QX3v8RTo36ONTkEMrgGqNm11cFambQLl9mMA42vyguPLOqsp1SRzwlVxDA9jYGg6xWSTXQiFNf2xkGs4w9%2BOW4omYQwbvs4hhz72aDKlP1pMg%2B%2BZXZVgEiHUXFOy1jFbLloKGgbBzspXo%2FMeKN1COWXgwwx%2FCLwgY6pgHfrwrML8atXUXk%2Baz25XTX3zkvwS9PdKnPyA4BCF8UeV6CLtb0DseOu6aTbYuLBylUzbEEx0Q%2BQE1YCbI4MAUgrZ9mGomythZHUXv2MB%2BKrFswz0QJ98A9XpDTyxnKKZOTx%2FRzuU4LJPG1u5B72Zzn%2FDlA6nkl8hOBe6uMRkgiPJQ66kqHzcVMicop%2Bbx5bKmUBydbJqusuJXP5vBtsMgCocDepGkV&X-Amz-Signature=c79b29cced449e37cf71a2253d69663cb4fe7bb34f34f9b921451a5569fe8376&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F2MLOXX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjN7tB9ZMWXaGYudYJJCJ5W%2B5dX0NBHHCmZmAG%2FBOhMAiBP0uEdu64zGrzs5ctWOU6r%2Bo4IhxV2UkKZMYZ3lxRUbSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMq2WT8ZwXj4%2Fx9Q3JKtwD63%2BwVyEoLex%2BweFesQMWYnPJN1PAgl5TeMX8ZXOMe0TiUt9R4gSpkACIEd8Fx8FwpTjkIqFEfEJ2P45AE%2Fjwe2hiUB39iZsi0BMjn5n8BwEFghGwHjk5NS00C4XDMAfQHKqVhNXuVJEEvhLGn44j5DCySCWFJCDrs20D9DxV0xQPvdBD0KuKnXJ8R3rBwrBNfPgjX5xfqcR5x9AHflPWx%2Fut%2B3CwiJoNQNH9Kx4Z73Qp312yVpQNo56cpWblKfip9a0l15Tr1wVI8O7O1cCydjF7n6CvH95j%2FhilTRJZ2FLXo5Dad29PwEKSC%2BjCWKNpOS5NW%2B07cxVITD2JdpjKwciSYFRqYXxiuWTSpmXiCsIrBv2H3pbSHCyoSP8m8ER5va4vlv6v%2FVPiMDI25aOba7Atu%2FCsmHJhDV6yAdQk3P2Ct609%2BMtmms%2FXhYc%2FGfM8tj6KrPIzoQSSY1QUu8WCquxqIQRW2j7ik6QX3v8RTo36ONTkEMrgGqNm11cFambQLl9mMA42vyguPLOqsp1SRzwlVxDA9jYGg6xWSTXQiFNf2xkGs4w9%2BOW4omYQwbvs4hhz72aDKlP1pMg%2B%2BZXZVgEiHUXFOy1jFbLloKGgbBzspXo%2FMeKN1COWXgwwx%2FCLwgY6pgHfrwrML8atXUXk%2Baz25XTX3zkvwS9PdKnPyA4BCF8UeV6CLtb0DseOu6aTbYuLBylUzbEEx0Q%2BQE1YCbI4MAUgrZ9mGomythZHUXv2MB%2BKrFswz0QJ98A9XpDTyxnKKZOTx%2FRzuU4LJPG1u5B72Zzn%2FDlA6nkl8hOBe6uMRkgiPJQ66kqHzcVMicop%2Bbx5bKmUBydbJqusuJXP5vBtsMgCocDepGkV&X-Amz-Signature=ba17e7bdc6d940296f0223988ab903c31c5e4812adcf86fdc1f1eb2cc7d47c10&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F2MLOXX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjN7tB9ZMWXaGYudYJJCJ5W%2B5dX0NBHHCmZmAG%2FBOhMAiBP0uEdu64zGrzs5ctWOU6r%2Bo4IhxV2UkKZMYZ3lxRUbSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMq2WT8ZwXj4%2Fx9Q3JKtwD63%2BwVyEoLex%2BweFesQMWYnPJN1PAgl5TeMX8ZXOMe0TiUt9R4gSpkACIEd8Fx8FwpTjkIqFEfEJ2P45AE%2Fjwe2hiUB39iZsi0BMjn5n8BwEFghGwHjk5NS00C4XDMAfQHKqVhNXuVJEEvhLGn44j5DCySCWFJCDrs20D9DxV0xQPvdBD0KuKnXJ8R3rBwrBNfPgjX5xfqcR5x9AHflPWx%2Fut%2B3CwiJoNQNH9Kx4Z73Qp312yVpQNo56cpWblKfip9a0l15Tr1wVI8O7O1cCydjF7n6CvH95j%2FhilTRJZ2FLXo5Dad29PwEKSC%2BjCWKNpOS5NW%2B07cxVITD2JdpjKwciSYFRqYXxiuWTSpmXiCsIrBv2H3pbSHCyoSP8m8ER5va4vlv6v%2FVPiMDI25aOba7Atu%2FCsmHJhDV6yAdQk3P2Ct609%2BMtmms%2FXhYc%2FGfM8tj6KrPIzoQSSY1QUu8WCquxqIQRW2j7ik6QX3v8RTo36ONTkEMrgGqNm11cFambQLl9mMA42vyguPLOqsp1SRzwlVxDA9jYGg6xWSTXQiFNf2xkGs4w9%2BOW4omYQwbvs4hhz72aDKlP1pMg%2B%2BZXZVgEiHUXFOy1jFbLloKGgbBzspXo%2FMeKN1COWXgwwx%2FCLwgY6pgHfrwrML8atXUXk%2Baz25XTX3zkvwS9PdKnPyA4BCF8UeV6CLtb0DseOu6aTbYuLBylUzbEEx0Q%2BQE1YCbI4MAUgrZ9mGomythZHUXv2MB%2BKrFswz0QJ98A9XpDTyxnKKZOTx%2FRzuU4LJPG1u5B72Zzn%2FDlA6nkl8hOBe6uMRkgiPJQ66kqHzcVMicop%2Bbx5bKmUBydbJqusuJXP5vBtsMgCocDepGkV&X-Amz-Signature=e2211b308f2a0d4b552df13091ae6260463cf1281360eb3505ce014f320b960f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F2MLOXX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjN7tB9ZMWXaGYudYJJCJ5W%2B5dX0NBHHCmZmAG%2FBOhMAiBP0uEdu64zGrzs5ctWOU6r%2Bo4IhxV2UkKZMYZ3lxRUbSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMq2WT8ZwXj4%2Fx9Q3JKtwD63%2BwVyEoLex%2BweFesQMWYnPJN1PAgl5TeMX8ZXOMe0TiUt9R4gSpkACIEd8Fx8FwpTjkIqFEfEJ2P45AE%2Fjwe2hiUB39iZsi0BMjn5n8BwEFghGwHjk5NS00C4XDMAfQHKqVhNXuVJEEvhLGn44j5DCySCWFJCDrs20D9DxV0xQPvdBD0KuKnXJ8R3rBwrBNfPgjX5xfqcR5x9AHflPWx%2Fut%2B3CwiJoNQNH9Kx4Z73Qp312yVpQNo56cpWblKfip9a0l15Tr1wVI8O7O1cCydjF7n6CvH95j%2FhilTRJZ2FLXo5Dad29PwEKSC%2BjCWKNpOS5NW%2B07cxVITD2JdpjKwciSYFRqYXxiuWTSpmXiCsIrBv2H3pbSHCyoSP8m8ER5va4vlv6v%2FVPiMDI25aOba7Atu%2FCsmHJhDV6yAdQk3P2Ct609%2BMtmms%2FXhYc%2FGfM8tj6KrPIzoQSSY1QUu8WCquxqIQRW2j7ik6QX3v8RTo36ONTkEMrgGqNm11cFambQLl9mMA42vyguPLOqsp1SRzwlVxDA9jYGg6xWSTXQiFNf2xkGs4w9%2BOW4omYQwbvs4hhz72aDKlP1pMg%2B%2BZXZVgEiHUXFOy1jFbLloKGgbBzspXo%2FMeKN1COWXgwwx%2FCLwgY6pgHfrwrML8atXUXk%2Baz25XTX3zkvwS9PdKnPyA4BCF8UeV6CLtb0DseOu6aTbYuLBylUzbEEx0Q%2BQE1YCbI4MAUgrZ9mGomythZHUXv2MB%2BKrFswz0QJ98A9XpDTyxnKKZOTx%2FRzuU4LJPG1u5B72Zzn%2FDlA6nkl8hOBe6uMRkgiPJQ66kqHzcVMicop%2Bbx5bKmUBydbJqusuJXP5vBtsMgCocDepGkV&X-Amz-Signature=67c82466b5daf652e364c7734c501e25e1083ceb20f611baf540eef57e99c921&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
