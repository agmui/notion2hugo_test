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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5UNOS4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqS7RBrKjVk1YAByYDcwB7H%2B8aFjQvrf5uRUkleM3OogIhANU%2FkEhJSPnhAdIzIRhvXt%2BEUzF15cjfz5Gu5%2BhOesd%2BKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIvMBK9ljVPCalHkoq3ANyYpOYnY2XtIuDWxklT1thkSiznCcqGG3CkBwMZHbxtzRUtDXGhO5JorxaK4BrLtf0kwND%2BL0jINITcsbQx4IJJWMdeh3Ncuw4i0uF5nlfs9vRB5LgRedGAWh0UqH3ZthsWX9WWu%2BanQtOda2x35XwtMdIt%2BRILGrc%2F9cmMjsCzKkC2xjGNr5Z4RQAO%2FloRalKbpPO0tWX2QKxyl8%2BXok9Qusk12I2BsaoLVr7LAVnoz0GWQ%2BeBHToZLuIP1x%2BX5BaDWZz6fwv0qV%2FCk8NbYm0h5wskjh6u92NFdfc9QVcAw3eesREm93pw%2FbuIUGOXJpndtBbxGw0I1V0ZxezSeYwbxmtXU41UJnyWWzPQYlgNqmwpwGtouev4llYKzJtQC9I0wB1F0M%2FK8WLytpo1M6T%2FmQuNikXxrNuuoaCQUBg%2F76eXzeicde4fHGK9KTjx%2BeuEltJv9cP9w92gfR5QpRAH4VeQ%2FAPJR%2B05C3VZjj9fGdVQuzUZOrSqur0Si1numD%2F%2FhIuiz1ACsnAJhdNWO7UqO0yGDkbkUi7gJa0zCu%2F7%2BN3KYewtaT2gDC9ma%2Bh2idhtvfKm1ZPjLcNwyG5kQyGBrx9rSAuMTayVSMsKAFjKimb4e0CiHVGA6jP%2FDCakc%2FCBjqkAfIr%2B4qmbDO%2B4quIb%2FT5gWWADtxiPeQ7wetI8Z0VbfsDABQuXaeBJVGRc%2B%2Bx%2FNIg0%2Fvkz0D1L0xPFkd3SVaenPW24c0FQc5F7UkgZdpt6M0FkfgDC5iOAm9hlAY0vKvbyMmstyCNNx4ykzHV270Ec1BqcoIacEemU30CMT2lwwRMoVsJ5JF%2BtivceBaK0oN%2BlYeC%2FNEaceN8N3SBo3wYtgABKWtw&X-Amz-Signature=8d3371ee85230bccb7ae825fdb969ff996ebdea3f79dfa5171951536bd96aeb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5UNOS4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqS7RBrKjVk1YAByYDcwB7H%2B8aFjQvrf5uRUkleM3OogIhANU%2FkEhJSPnhAdIzIRhvXt%2BEUzF15cjfz5Gu5%2BhOesd%2BKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIvMBK9ljVPCalHkoq3ANyYpOYnY2XtIuDWxklT1thkSiznCcqGG3CkBwMZHbxtzRUtDXGhO5JorxaK4BrLtf0kwND%2BL0jINITcsbQx4IJJWMdeh3Ncuw4i0uF5nlfs9vRB5LgRedGAWh0UqH3ZthsWX9WWu%2BanQtOda2x35XwtMdIt%2BRILGrc%2F9cmMjsCzKkC2xjGNr5Z4RQAO%2FloRalKbpPO0tWX2QKxyl8%2BXok9Qusk12I2BsaoLVr7LAVnoz0GWQ%2BeBHToZLuIP1x%2BX5BaDWZz6fwv0qV%2FCk8NbYm0h5wskjh6u92NFdfc9QVcAw3eesREm93pw%2FbuIUGOXJpndtBbxGw0I1V0ZxezSeYwbxmtXU41UJnyWWzPQYlgNqmwpwGtouev4llYKzJtQC9I0wB1F0M%2FK8WLytpo1M6T%2FmQuNikXxrNuuoaCQUBg%2F76eXzeicde4fHGK9KTjx%2BeuEltJv9cP9w92gfR5QpRAH4VeQ%2FAPJR%2B05C3VZjj9fGdVQuzUZOrSqur0Si1numD%2F%2FhIuiz1ACsnAJhdNWO7UqO0yGDkbkUi7gJa0zCu%2F7%2BN3KYewtaT2gDC9ma%2Bh2idhtvfKm1ZPjLcNwyG5kQyGBrx9rSAuMTayVSMsKAFjKimb4e0CiHVGA6jP%2FDCakc%2FCBjqkAfIr%2B4qmbDO%2B4quIb%2FT5gWWADtxiPeQ7wetI8Z0VbfsDABQuXaeBJVGRc%2B%2Bx%2FNIg0%2Fvkz0D1L0xPFkd3SVaenPW24c0FQc5F7UkgZdpt6M0FkfgDC5iOAm9hlAY0vKvbyMmstyCNNx4ykzHV270Ec1BqcoIacEemU30CMT2lwwRMoVsJ5JF%2BtivceBaK0oN%2BlYeC%2FNEaceN8N3SBo3wYtgABKWtw&X-Amz-Signature=2cc1bf5c7e88ebf85ce2dd50b1cce1f33e4288f0a6e61bb37bfd517287b86665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5UNOS4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqS7RBrKjVk1YAByYDcwB7H%2B8aFjQvrf5uRUkleM3OogIhANU%2FkEhJSPnhAdIzIRhvXt%2BEUzF15cjfz5Gu5%2BhOesd%2BKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIvMBK9ljVPCalHkoq3ANyYpOYnY2XtIuDWxklT1thkSiznCcqGG3CkBwMZHbxtzRUtDXGhO5JorxaK4BrLtf0kwND%2BL0jINITcsbQx4IJJWMdeh3Ncuw4i0uF5nlfs9vRB5LgRedGAWh0UqH3ZthsWX9WWu%2BanQtOda2x35XwtMdIt%2BRILGrc%2F9cmMjsCzKkC2xjGNr5Z4RQAO%2FloRalKbpPO0tWX2QKxyl8%2BXok9Qusk12I2BsaoLVr7LAVnoz0GWQ%2BeBHToZLuIP1x%2BX5BaDWZz6fwv0qV%2FCk8NbYm0h5wskjh6u92NFdfc9QVcAw3eesREm93pw%2FbuIUGOXJpndtBbxGw0I1V0ZxezSeYwbxmtXU41UJnyWWzPQYlgNqmwpwGtouev4llYKzJtQC9I0wB1F0M%2FK8WLytpo1M6T%2FmQuNikXxrNuuoaCQUBg%2F76eXzeicde4fHGK9KTjx%2BeuEltJv9cP9w92gfR5QpRAH4VeQ%2FAPJR%2B05C3VZjj9fGdVQuzUZOrSqur0Si1numD%2F%2FhIuiz1ACsnAJhdNWO7UqO0yGDkbkUi7gJa0zCu%2F7%2BN3KYewtaT2gDC9ma%2Bh2idhtvfKm1ZPjLcNwyG5kQyGBrx9rSAuMTayVSMsKAFjKimb4e0CiHVGA6jP%2FDCakc%2FCBjqkAfIr%2B4qmbDO%2B4quIb%2FT5gWWADtxiPeQ7wetI8Z0VbfsDABQuXaeBJVGRc%2B%2Bx%2FNIg0%2Fvkz0D1L0xPFkd3SVaenPW24c0FQc5F7UkgZdpt6M0FkfgDC5iOAm9hlAY0vKvbyMmstyCNNx4ykzHV270Ec1BqcoIacEemU30CMT2lwwRMoVsJ5JF%2BtivceBaK0oN%2BlYeC%2FNEaceN8N3SBo3wYtgABKWtw&X-Amz-Signature=2266da8d063c66d364636067430cc5605e7b43718819cfc23d15ba0abbb4c38c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5UNOS4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqS7RBrKjVk1YAByYDcwB7H%2B8aFjQvrf5uRUkleM3OogIhANU%2FkEhJSPnhAdIzIRhvXt%2BEUzF15cjfz5Gu5%2BhOesd%2BKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIvMBK9ljVPCalHkoq3ANyYpOYnY2XtIuDWxklT1thkSiznCcqGG3CkBwMZHbxtzRUtDXGhO5JorxaK4BrLtf0kwND%2BL0jINITcsbQx4IJJWMdeh3Ncuw4i0uF5nlfs9vRB5LgRedGAWh0UqH3ZthsWX9WWu%2BanQtOda2x35XwtMdIt%2BRILGrc%2F9cmMjsCzKkC2xjGNr5Z4RQAO%2FloRalKbpPO0tWX2QKxyl8%2BXok9Qusk12I2BsaoLVr7LAVnoz0GWQ%2BeBHToZLuIP1x%2BX5BaDWZz6fwv0qV%2FCk8NbYm0h5wskjh6u92NFdfc9QVcAw3eesREm93pw%2FbuIUGOXJpndtBbxGw0I1V0ZxezSeYwbxmtXU41UJnyWWzPQYlgNqmwpwGtouev4llYKzJtQC9I0wB1F0M%2FK8WLytpo1M6T%2FmQuNikXxrNuuoaCQUBg%2F76eXzeicde4fHGK9KTjx%2BeuEltJv9cP9w92gfR5QpRAH4VeQ%2FAPJR%2B05C3VZjj9fGdVQuzUZOrSqur0Si1numD%2F%2FhIuiz1ACsnAJhdNWO7UqO0yGDkbkUi7gJa0zCu%2F7%2BN3KYewtaT2gDC9ma%2Bh2idhtvfKm1ZPjLcNwyG5kQyGBrx9rSAuMTayVSMsKAFjKimb4e0CiHVGA6jP%2FDCakc%2FCBjqkAfIr%2B4qmbDO%2B4quIb%2FT5gWWADtxiPeQ7wetI8Z0VbfsDABQuXaeBJVGRc%2B%2Bx%2FNIg0%2Fvkz0D1L0xPFkd3SVaenPW24c0FQc5F7UkgZdpt6M0FkfgDC5iOAm9hlAY0vKvbyMmstyCNNx4ykzHV270Ec1BqcoIacEemU30CMT2lwwRMoVsJ5JF%2BtivceBaK0oN%2BlYeC%2FNEaceN8N3SBo3wYtgABKWtw&X-Amz-Signature=b08d73715ad381ae33fde345c8c768f1e83f6d9906806f9cc53b5f3a0e079388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5UNOS4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqS7RBrKjVk1YAByYDcwB7H%2B8aFjQvrf5uRUkleM3OogIhANU%2FkEhJSPnhAdIzIRhvXt%2BEUzF15cjfz5Gu5%2BhOesd%2BKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIvMBK9ljVPCalHkoq3ANyYpOYnY2XtIuDWxklT1thkSiznCcqGG3CkBwMZHbxtzRUtDXGhO5JorxaK4BrLtf0kwND%2BL0jINITcsbQx4IJJWMdeh3Ncuw4i0uF5nlfs9vRB5LgRedGAWh0UqH3ZthsWX9WWu%2BanQtOda2x35XwtMdIt%2BRILGrc%2F9cmMjsCzKkC2xjGNr5Z4RQAO%2FloRalKbpPO0tWX2QKxyl8%2BXok9Qusk12I2BsaoLVr7LAVnoz0GWQ%2BeBHToZLuIP1x%2BX5BaDWZz6fwv0qV%2FCk8NbYm0h5wskjh6u92NFdfc9QVcAw3eesREm93pw%2FbuIUGOXJpndtBbxGw0I1V0ZxezSeYwbxmtXU41UJnyWWzPQYlgNqmwpwGtouev4llYKzJtQC9I0wB1F0M%2FK8WLytpo1M6T%2FmQuNikXxrNuuoaCQUBg%2F76eXzeicde4fHGK9KTjx%2BeuEltJv9cP9w92gfR5QpRAH4VeQ%2FAPJR%2B05C3VZjj9fGdVQuzUZOrSqur0Si1numD%2F%2FhIuiz1ACsnAJhdNWO7UqO0yGDkbkUi7gJa0zCu%2F7%2BN3KYewtaT2gDC9ma%2Bh2idhtvfKm1ZPjLcNwyG5kQyGBrx9rSAuMTayVSMsKAFjKimb4e0CiHVGA6jP%2FDCakc%2FCBjqkAfIr%2B4qmbDO%2B4quIb%2FT5gWWADtxiPeQ7wetI8Z0VbfsDABQuXaeBJVGRc%2B%2Bx%2FNIg0%2Fvkz0D1L0xPFkd3SVaenPW24c0FQc5F7UkgZdpt6M0FkfgDC5iOAm9hlAY0vKvbyMmstyCNNx4ykzHV270Ec1BqcoIacEemU30CMT2lwwRMoVsJ5JF%2BtivceBaK0oN%2BlYeC%2FNEaceN8N3SBo3wYtgABKWtw&X-Amz-Signature=8bfa4afabb24e35df515c51a7d7767425f6d5595329c0131c32813d8415b60d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
