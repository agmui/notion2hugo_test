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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XA3VBR%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbNFtOMa0EzTiwEOL%2BUVTj2oZGWiDmfXNtjN%2BXnK7PMgIhAO%2FZF3ulXRmAKyg%2B9nOMaCZ%2FVR6nQ5lV5ErgqiXSnONVKv8DCGUQABoMNjM3NDIzMTgzODA1IgyeJaHXWQuDg7ZDtuQq3ANyA2yV%2ByjACADY1%2B%2BdFhEPsKPomJ2R%2BLE3EFCYBnZkVpP9OMEhD2oQl1t4wmuU8kbMkMmNK3bjUjRoOKX8Fat2gKKvCo%2BLXuANMF3r1U%2FLMWehmI%2BJVk62wptPOJsRAM4lpRSIfUqAFAODO7ZKwIIj4ALAwQDAMecXWkZlD6NJoFggapsxRXOTrLrBXZgj1VPhn%2FXv7TpBvo%2BMU43C6obY0hwQeHrfoZdP%2Fu%2BZYNGRvBiSBky3pes%2FxEpAjFR42vgW%2Fx8DDhTGod9C7byJXIIf%2BGjsUIA3893w10kb1YdWnsACjhZuCR6w%2B4M0DxIpgSXV7Gl6LOitlWi1PR%2Fc7hFkVTicN6Y81Kil8r0taE0Fhy1ZDj0%2FDYtTya%2FkFym7MaAVb2Y0WAzX6o0X4NOC9vdbwYT2tX%2BC35yHvvwrAQHStWOHJLq0bmtIjM%2BoMdsh%2BaVLJW2kUeSxK6joBP6x8q%2FPgEvuv6i%2BC9ylI8UxoGSNfkCNQda7256vl9%2FHOdqVaKeKMIwtHbydnQHvaCgj09j7m%2FrFTUFwOnZw6g3Z%2Ffx1hKqyOA98V0VewaxY4F5aSkjVdHX3nOauv49%2BPE1LXqUlOgfbPVDiCPhmJ%2Fzz%2Fmav%2B7sf2G0syiHUyeDrHjDj5dC%2FBjqkAaOCBGWJH89ecMPC%2BJ9fOW5ZfLF2H6ttmdU7%2BFFWtiryd8egmAXaLd5f%2Fy25W%2FUJUDzaTV1WEkyQMr5Lh8ndcej04MBMM0pW0bRkUThyKJuGH1wqbEZSs8SkwazO75EOYhl494X8eCvZ%2F4gUkd0lLQd%2FfAqQdHuwvi1PgHEe5rKCSIuaGyTBDoWLMxe%2BHmXX7k%2Bhc63Na69LtU4tnD2OpRHv53FZ&X-Amz-Signature=46aae9368e556018ca847159f7c205a192010c2c5235db00cd10909f0a1bb515&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XA3VBR%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbNFtOMa0EzTiwEOL%2BUVTj2oZGWiDmfXNtjN%2BXnK7PMgIhAO%2FZF3ulXRmAKyg%2B9nOMaCZ%2FVR6nQ5lV5ErgqiXSnONVKv8DCGUQABoMNjM3NDIzMTgzODA1IgyeJaHXWQuDg7ZDtuQq3ANyA2yV%2ByjACADY1%2B%2BdFhEPsKPomJ2R%2BLE3EFCYBnZkVpP9OMEhD2oQl1t4wmuU8kbMkMmNK3bjUjRoOKX8Fat2gKKvCo%2BLXuANMF3r1U%2FLMWehmI%2BJVk62wptPOJsRAM4lpRSIfUqAFAODO7ZKwIIj4ALAwQDAMecXWkZlD6NJoFggapsxRXOTrLrBXZgj1VPhn%2FXv7TpBvo%2BMU43C6obY0hwQeHrfoZdP%2Fu%2BZYNGRvBiSBky3pes%2FxEpAjFR42vgW%2Fx8DDhTGod9C7byJXIIf%2BGjsUIA3893w10kb1YdWnsACjhZuCR6w%2B4M0DxIpgSXV7Gl6LOitlWi1PR%2Fc7hFkVTicN6Y81Kil8r0taE0Fhy1ZDj0%2FDYtTya%2FkFym7MaAVb2Y0WAzX6o0X4NOC9vdbwYT2tX%2BC35yHvvwrAQHStWOHJLq0bmtIjM%2BoMdsh%2BaVLJW2kUeSxK6joBP6x8q%2FPgEvuv6i%2BC9ylI8UxoGSNfkCNQda7256vl9%2FHOdqVaKeKMIwtHbydnQHvaCgj09j7m%2FrFTUFwOnZw6g3Z%2Ffx1hKqyOA98V0VewaxY4F5aSkjVdHX3nOauv49%2BPE1LXqUlOgfbPVDiCPhmJ%2Fzz%2Fmav%2B7sf2G0syiHUyeDrHjDj5dC%2FBjqkAaOCBGWJH89ecMPC%2BJ9fOW5ZfLF2H6ttmdU7%2BFFWtiryd8egmAXaLd5f%2Fy25W%2FUJUDzaTV1WEkyQMr5Lh8ndcej04MBMM0pW0bRkUThyKJuGH1wqbEZSs8SkwazO75EOYhl494X8eCvZ%2F4gUkd0lLQd%2FfAqQdHuwvi1PgHEe5rKCSIuaGyTBDoWLMxe%2BHmXX7k%2Bhc63Na69LtU4tnD2OpRHv53FZ&X-Amz-Signature=0f8eb7eeef50d9113a92e5d5447a60aabcd20aa65ddd7bab12d69c5d7a4af001&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XA3VBR%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbNFtOMa0EzTiwEOL%2BUVTj2oZGWiDmfXNtjN%2BXnK7PMgIhAO%2FZF3ulXRmAKyg%2B9nOMaCZ%2FVR6nQ5lV5ErgqiXSnONVKv8DCGUQABoMNjM3NDIzMTgzODA1IgyeJaHXWQuDg7ZDtuQq3ANyA2yV%2ByjACADY1%2B%2BdFhEPsKPomJ2R%2BLE3EFCYBnZkVpP9OMEhD2oQl1t4wmuU8kbMkMmNK3bjUjRoOKX8Fat2gKKvCo%2BLXuANMF3r1U%2FLMWehmI%2BJVk62wptPOJsRAM4lpRSIfUqAFAODO7ZKwIIj4ALAwQDAMecXWkZlD6NJoFggapsxRXOTrLrBXZgj1VPhn%2FXv7TpBvo%2BMU43C6obY0hwQeHrfoZdP%2Fu%2BZYNGRvBiSBky3pes%2FxEpAjFR42vgW%2Fx8DDhTGod9C7byJXIIf%2BGjsUIA3893w10kb1YdWnsACjhZuCR6w%2B4M0DxIpgSXV7Gl6LOitlWi1PR%2Fc7hFkVTicN6Y81Kil8r0taE0Fhy1ZDj0%2FDYtTya%2FkFym7MaAVb2Y0WAzX6o0X4NOC9vdbwYT2tX%2BC35yHvvwrAQHStWOHJLq0bmtIjM%2BoMdsh%2BaVLJW2kUeSxK6joBP6x8q%2FPgEvuv6i%2BC9ylI8UxoGSNfkCNQda7256vl9%2FHOdqVaKeKMIwtHbydnQHvaCgj09j7m%2FrFTUFwOnZw6g3Z%2Ffx1hKqyOA98V0VewaxY4F5aSkjVdHX3nOauv49%2BPE1LXqUlOgfbPVDiCPhmJ%2Fzz%2Fmav%2B7sf2G0syiHUyeDrHjDj5dC%2FBjqkAaOCBGWJH89ecMPC%2BJ9fOW5ZfLF2H6ttmdU7%2BFFWtiryd8egmAXaLd5f%2Fy25W%2FUJUDzaTV1WEkyQMr5Lh8ndcej04MBMM0pW0bRkUThyKJuGH1wqbEZSs8SkwazO75EOYhl494X8eCvZ%2F4gUkd0lLQd%2FfAqQdHuwvi1PgHEe5rKCSIuaGyTBDoWLMxe%2BHmXX7k%2Bhc63Na69LtU4tnD2OpRHv53FZ&X-Amz-Signature=ffe349c93f27dab77e1272c6c922c9958448527c7718020d36f36b93531a246b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XA3VBR%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbNFtOMa0EzTiwEOL%2BUVTj2oZGWiDmfXNtjN%2BXnK7PMgIhAO%2FZF3ulXRmAKyg%2B9nOMaCZ%2FVR6nQ5lV5ErgqiXSnONVKv8DCGUQABoMNjM3NDIzMTgzODA1IgyeJaHXWQuDg7ZDtuQq3ANyA2yV%2ByjACADY1%2B%2BdFhEPsKPomJ2R%2BLE3EFCYBnZkVpP9OMEhD2oQl1t4wmuU8kbMkMmNK3bjUjRoOKX8Fat2gKKvCo%2BLXuANMF3r1U%2FLMWehmI%2BJVk62wptPOJsRAM4lpRSIfUqAFAODO7ZKwIIj4ALAwQDAMecXWkZlD6NJoFggapsxRXOTrLrBXZgj1VPhn%2FXv7TpBvo%2BMU43C6obY0hwQeHrfoZdP%2Fu%2BZYNGRvBiSBky3pes%2FxEpAjFR42vgW%2Fx8DDhTGod9C7byJXIIf%2BGjsUIA3893w10kb1YdWnsACjhZuCR6w%2B4M0DxIpgSXV7Gl6LOitlWi1PR%2Fc7hFkVTicN6Y81Kil8r0taE0Fhy1ZDj0%2FDYtTya%2FkFym7MaAVb2Y0WAzX6o0X4NOC9vdbwYT2tX%2BC35yHvvwrAQHStWOHJLq0bmtIjM%2BoMdsh%2BaVLJW2kUeSxK6joBP6x8q%2FPgEvuv6i%2BC9ylI8UxoGSNfkCNQda7256vl9%2FHOdqVaKeKMIwtHbydnQHvaCgj09j7m%2FrFTUFwOnZw6g3Z%2Ffx1hKqyOA98V0VewaxY4F5aSkjVdHX3nOauv49%2BPE1LXqUlOgfbPVDiCPhmJ%2Fzz%2Fmav%2B7sf2G0syiHUyeDrHjDj5dC%2FBjqkAaOCBGWJH89ecMPC%2BJ9fOW5ZfLF2H6ttmdU7%2BFFWtiryd8egmAXaLd5f%2Fy25W%2FUJUDzaTV1WEkyQMr5Lh8ndcej04MBMM0pW0bRkUThyKJuGH1wqbEZSs8SkwazO75EOYhl494X8eCvZ%2F4gUkd0lLQd%2FfAqQdHuwvi1PgHEe5rKCSIuaGyTBDoWLMxe%2BHmXX7k%2Bhc63Na69LtU4tnD2OpRHv53FZ&X-Amz-Signature=d25baf6c151020c4ae45f3ff48bb24a979116537bfaac6f783eafdd880162c1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XA3VBR%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbNFtOMa0EzTiwEOL%2BUVTj2oZGWiDmfXNtjN%2BXnK7PMgIhAO%2FZF3ulXRmAKyg%2B9nOMaCZ%2FVR6nQ5lV5ErgqiXSnONVKv8DCGUQABoMNjM3NDIzMTgzODA1IgyeJaHXWQuDg7ZDtuQq3ANyA2yV%2ByjACADY1%2B%2BdFhEPsKPomJ2R%2BLE3EFCYBnZkVpP9OMEhD2oQl1t4wmuU8kbMkMmNK3bjUjRoOKX8Fat2gKKvCo%2BLXuANMF3r1U%2FLMWehmI%2BJVk62wptPOJsRAM4lpRSIfUqAFAODO7ZKwIIj4ALAwQDAMecXWkZlD6NJoFggapsxRXOTrLrBXZgj1VPhn%2FXv7TpBvo%2BMU43C6obY0hwQeHrfoZdP%2Fu%2BZYNGRvBiSBky3pes%2FxEpAjFR42vgW%2Fx8DDhTGod9C7byJXIIf%2BGjsUIA3893w10kb1YdWnsACjhZuCR6w%2B4M0DxIpgSXV7Gl6LOitlWi1PR%2Fc7hFkVTicN6Y81Kil8r0taE0Fhy1ZDj0%2FDYtTya%2FkFym7MaAVb2Y0WAzX6o0X4NOC9vdbwYT2tX%2BC35yHvvwrAQHStWOHJLq0bmtIjM%2BoMdsh%2BaVLJW2kUeSxK6joBP6x8q%2FPgEvuv6i%2BC9ylI8UxoGSNfkCNQda7256vl9%2FHOdqVaKeKMIwtHbydnQHvaCgj09j7m%2FrFTUFwOnZw6g3Z%2Ffx1hKqyOA98V0VewaxY4F5aSkjVdHX3nOauv49%2BPE1LXqUlOgfbPVDiCPhmJ%2Fzz%2Fmav%2B7sf2G0syiHUyeDrHjDj5dC%2FBjqkAaOCBGWJH89ecMPC%2BJ9fOW5ZfLF2H6ttmdU7%2BFFWtiryd8egmAXaLd5f%2Fy25W%2FUJUDzaTV1WEkyQMr5Lh8ndcej04MBMM0pW0bRkUThyKJuGH1wqbEZSs8SkwazO75EOYhl494X8eCvZ%2F4gUkd0lLQd%2FfAqQdHuwvi1PgHEe5rKCSIuaGyTBDoWLMxe%2BHmXX7k%2Bhc63Na69LtU4tnD2OpRHv53FZ&X-Amz-Signature=497c51a7eb4d023129817e651c66aa5486f26ff1eee41ea5d0af04332a3a3878&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
