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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T22N3G67%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOGQPhPqLYtsi2xObA9xIKrI1fo9JlUm5H3DY7dpmpPAiBlDj1PC0eYsMH9C7RD0B6EYTKbgJk7ScGZOmsTXej4ICr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMGqOi%2BYAk435xJRw%2FKtwDteRknioZUkuPOyiechsHb%2Ft3CIaOq%2BxjDREJlBCgvC%2Bjtli3v12DIRxPcA4dg0fF5Ycim0Ps6Rx1LtfwSfVgHpTajpgltZ%2F6IAs3%2BzJ4o0ZyLsxQWTIbyUONF9iG9vvqYFbtonkriESQyIzpk4SpPpXBjzMV6FNidXB%2BGvPibLxhOLJlwk8LkKHxSGXIkYQaqon9oOzeGUO2T%2FcKfWxBXZ3pIvfwE20t2aWRWH23BJ7R8KYqBCLL1506KF97eIivK6b5TpthhmAF5qC4ZwCKfawPlCaV6ieRo%2Ff74%2BOC38kwVygUQda3yKLtjAdXToOg7%2BIy51ir83m6eU6nOUKM2wYVIOLrwy1xzjWy8Wh5ESVIaPg1y58Gwr2vQkBnW%2BUFFbBEw4mArk4L%2BEeOQl7zF8Iqxeke9ni2MuHIwWigEm1xnaExkc%2FG4DFixEV5Rw0kcUfo58GxODreUYN4AzBbhRbCyfsHSzEBV2ibgiZ0UX%2FNp89m2ZKI5weGFnEAFUX2yQ0Mw%2Bcdtj5YKZexws74QZRtvnux31do4Ytq%2FdUnAvn%2F602VPH5uSxCNdlshboM4Y3A63RNth5UomZ1Q%2BRgY7EFkivlDuKCOgFqqBV3omlBagxunlo86i7torK4ws6u9wAY6pgE31f1%2BjMc9%2FMnQi6LVmcaJVkxXAtrF33%2BiKLfRnRjLS9ObvHMD0vTMioUodpglLLZzZ9ShTVnsHvrjstvlksMOEmTNqeRe%2FToQcwZYIlC9951sWy%2FNanPvYUhZCp514TbTrlLo0eHcDuuDm%2BjXOet%2FW3gLjezUtj0lNOqS1j%2FRefA%2B2Agibdl%2BIpZDKvYWh4rLfvELDwdo5ITBYFNjFUgoWr69Rz%2Bp&X-Amz-Signature=bf2db2c0a2670ccae1b6f5fbee4ec5dfec97f2f51563f884ca9b18fa2271e5a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T22N3G67%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOGQPhPqLYtsi2xObA9xIKrI1fo9JlUm5H3DY7dpmpPAiBlDj1PC0eYsMH9C7RD0B6EYTKbgJk7ScGZOmsTXej4ICr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMGqOi%2BYAk435xJRw%2FKtwDteRknioZUkuPOyiechsHb%2Ft3CIaOq%2BxjDREJlBCgvC%2Bjtli3v12DIRxPcA4dg0fF5Ycim0Ps6Rx1LtfwSfVgHpTajpgltZ%2F6IAs3%2BzJ4o0ZyLsxQWTIbyUONF9iG9vvqYFbtonkriESQyIzpk4SpPpXBjzMV6FNidXB%2BGvPibLxhOLJlwk8LkKHxSGXIkYQaqon9oOzeGUO2T%2FcKfWxBXZ3pIvfwE20t2aWRWH23BJ7R8KYqBCLL1506KF97eIivK6b5TpthhmAF5qC4ZwCKfawPlCaV6ieRo%2Ff74%2BOC38kwVygUQda3yKLtjAdXToOg7%2BIy51ir83m6eU6nOUKM2wYVIOLrwy1xzjWy8Wh5ESVIaPg1y58Gwr2vQkBnW%2BUFFbBEw4mArk4L%2BEeOQl7zF8Iqxeke9ni2MuHIwWigEm1xnaExkc%2FG4DFixEV5Rw0kcUfo58GxODreUYN4AzBbhRbCyfsHSzEBV2ibgiZ0UX%2FNp89m2ZKI5weGFnEAFUX2yQ0Mw%2Bcdtj5YKZexws74QZRtvnux31do4Ytq%2FdUnAvn%2F602VPH5uSxCNdlshboM4Y3A63RNth5UomZ1Q%2BRgY7EFkivlDuKCOgFqqBV3omlBagxunlo86i7torK4ws6u9wAY6pgE31f1%2BjMc9%2FMnQi6LVmcaJVkxXAtrF33%2BiKLfRnRjLS9ObvHMD0vTMioUodpglLLZzZ9ShTVnsHvrjstvlksMOEmTNqeRe%2FToQcwZYIlC9951sWy%2FNanPvYUhZCp514TbTrlLo0eHcDuuDm%2BjXOet%2FW3gLjezUtj0lNOqS1j%2FRefA%2B2Agibdl%2BIpZDKvYWh4rLfvELDwdo5ITBYFNjFUgoWr69Rz%2Bp&X-Amz-Signature=7e30711ff364194241dc1d07c78264235130de34db09419589a801e1437930aa&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T22N3G67%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOGQPhPqLYtsi2xObA9xIKrI1fo9JlUm5H3DY7dpmpPAiBlDj1PC0eYsMH9C7RD0B6EYTKbgJk7ScGZOmsTXej4ICr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMGqOi%2BYAk435xJRw%2FKtwDteRknioZUkuPOyiechsHb%2Ft3CIaOq%2BxjDREJlBCgvC%2Bjtli3v12DIRxPcA4dg0fF5Ycim0Ps6Rx1LtfwSfVgHpTajpgltZ%2F6IAs3%2BzJ4o0ZyLsxQWTIbyUONF9iG9vvqYFbtonkriESQyIzpk4SpPpXBjzMV6FNidXB%2BGvPibLxhOLJlwk8LkKHxSGXIkYQaqon9oOzeGUO2T%2FcKfWxBXZ3pIvfwE20t2aWRWH23BJ7R8KYqBCLL1506KF97eIivK6b5TpthhmAF5qC4ZwCKfawPlCaV6ieRo%2Ff74%2BOC38kwVygUQda3yKLtjAdXToOg7%2BIy51ir83m6eU6nOUKM2wYVIOLrwy1xzjWy8Wh5ESVIaPg1y58Gwr2vQkBnW%2BUFFbBEw4mArk4L%2BEeOQl7zF8Iqxeke9ni2MuHIwWigEm1xnaExkc%2FG4DFixEV5Rw0kcUfo58GxODreUYN4AzBbhRbCyfsHSzEBV2ibgiZ0UX%2FNp89m2ZKI5weGFnEAFUX2yQ0Mw%2Bcdtj5YKZexws74QZRtvnux31do4Ytq%2FdUnAvn%2F602VPH5uSxCNdlshboM4Y3A63RNth5UomZ1Q%2BRgY7EFkivlDuKCOgFqqBV3omlBagxunlo86i7torK4ws6u9wAY6pgE31f1%2BjMc9%2FMnQi6LVmcaJVkxXAtrF33%2BiKLfRnRjLS9ObvHMD0vTMioUodpglLLZzZ9ShTVnsHvrjstvlksMOEmTNqeRe%2FToQcwZYIlC9951sWy%2FNanPvYUhZCp514TbTrlLo0eHcDuuDm%2BjXOet%2FW3gLjezUtj0lNOqS1j%2FRefA%2B2Agibdl%2BIpZDKvYWh4rLfvELDwdo5ITBYFNjFUgoWr69Rz%2Bp&X-Amz-Signature=16af4cceaa5bb92a8b48052ff38cb87208a22ad2e8dfd2838c814e7017341577&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T22N3G67%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOGQPhPqLYtsi2xObA9xIKrI1fo9JlUm5H3DY7dpmpPAiBlDj1PC0eYsMH9C7RD0B6EYTKbgJk7ScGZOmsTXej4ICr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMGqOi%2BYAk435xJRw%2FKtwDteRknioZUkuPOyiechsHb%2Ft3CIaOq%2BxjDREJlBCgvC%2Bjtli3v12DIRxPcA4dg0fF5Ycim0Ps6Rx1LtfwSfVgHpTajpgltZ%2F6IAs3%2BzJ4o0ZyLsxQWTIbyUONF9iG9vvqYFbtonkriESQyIzpk4SpPpXBjzMV6FNidXB%2BGvPibLxhOLJlwk8LkKHxSGXIkYQaqon9oOzeGUO2T%2FcKfWxBXZ3pIvfwE20t2aWRWH23BJ7R8KYqBCLL1506KF97eIivK6b5TpthhmAF5qC4ZwCKfawPlCaV6ieRo%2Ff74%2BOC38kwVygUQda3yKLtjAdXToOg7%2BIy51ir83m6eU6nOUKM2wYVIOLrwy1xzjWy8Wh5ESVIaPg1y58Gwr2vQkBnW%2BUFFbBEw4mArk4L%2BEeOQl7zF8Iqxeke9ni2MuHIwWigEm1xnaExkc%2FG4DFixEV5Rw0kcUfo58GxODreUYN4AzBbhRbCyfsHSzEBV2ibgiZ0UX%2FNp89m2ZKI5weGFnEAFUX2yQ0Mw%2Bcdtj5YKZexws74QZRtvnux31do4Ytq%2FdUnAvn%2F602VPH5uSxCNdlshboM4Y3A63RNth5UomZ1Q%2BRgY7EFkivlDuKCOgFqqBV3omlBagxunlo86i7torK4ws6u9wAY6pgE31f1%2BjMc9%2FMnQi6LVmcaJVkxXAtrF33%2BiKLfRnRjLS9ObvHMD0vTMioUodpglLLZzZ9ShTVnsHvrjstvlksMOEmTNqeRe%2FToQcwZYIlC9951sWy%2FNanPvYUhZCp514TbTrlLo0eHcDuuDm%2BjXOet%2FW3gLjezUtj0lNOqS1j%2FRefA%2B2Agibdl%2BIpZDKvYWh4rLfvELDwdo5ITBYFNjFUgoWr69Rz%2Bp&X-Amz-Signature=229c8203ec6f39cf18b27058c523b52ee9183881083e88684c67831bb2d54d11&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T22N3G67%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOGQPhPqLYtsi2xObA9xIKrI1fo9JlUm5H3DY7dpmpPAiBlDj1PC0eYsMH9C7RD0B6EYTKbgJk7ScGZOmsTXej4ICr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMGqOi%2BYAk435xJRw%2FKtwDteRknioZUkuPOyiechsHb%2Ft3CIaOq%2BxjDREJlBCgvC%2Bjtli3v12DIRxPcA4dg0fF5Ycim0Ps6Rx1LtfwSfVgHpTajpgltZ%2F6IAs3%2BzJ4o0ZyLsxQWTIbyUONF9iG9vvqYFbtonkriESQyIzpk4SpPpXBjzMV6FNidXB%2BGvPibLxhOLJlwk8LkKHxSGXIkYQaqon9oOzeGUO2T%2FcKfWxBXZ3pIvfwE20t2aWRWH23BJ7R8KYqBCLL1506KF97eIivK6b5TpthhmAF5qC4ZwCKfawPlCaV6ieRo%2Ff74%2BOC38kwVygUQda3yKLtjAdXToOg7%2BIy51ir83m6eU6nOUKM2wYVIOLrwy1xzjWy8Wh5ESVIaPg1y58Gwr2vQkBnW%2BUFFbBEw4mArk4L%2BEeOQl7zF8Iqxeke9ni2MuHIwWigEm1xnaExkc%2FG4DFixEV5Rw0kcUfo58GxODreUYN4AzBbhRbCyfsHSzEBV2ibgiZ0UX%2FNp89m2ZKI5weGFnEAFUX2yQ0Mw%2Bcdtj5YKZexws74QZRtvnux31do4Ytq%2FdUnAvn%2F602VPH5uSxCNdlshboM4Y3A63RNth5UomZ1Q%2BRgY7EFkivlDuKCOgFqqBV3omlBagxunlo86i7torK4ws6u9wAY6pgE31f1%2BjMc9%2FMnQi6LVmcaJVkxXAtrF33%2BiKLfRnRjLS9ObvHMD0vTMioUodpglLLZzZ9ShTVnsHvrjstvlksMOEmTNqeRe%2FToQcwZYIlC9951sWy%2FNanPvYUhZCp514TbTrlLo0eHcDuuDm%2BjXOet%2FW3gLjezUtj0lNOqS1j%2FRefA%2B2Agibdl%2BIpZDKvYWh4rLfvELDwdo5ITBYFNjFUgoWr69Rz%2Bp&X-Amz-Signature=96aad74d5dacc941d55f3c29a5cf0ebee2c01f9b8c14c112b030b8b1b7e4b81d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
