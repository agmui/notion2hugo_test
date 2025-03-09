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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UYO6ZGN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIFdSzGHQ68ANmk8CHk0iSIh8n8s2l8R56ETRgoP%2FsbNZAiEA6Rsf%2FHabYx9ScByMI2pWV%2BaU%2FZ66vPF2%2BAuS%2B3B1T5wq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOPyvJoWAIlV%2BwJ1OCrcA2pah8bHIv59aVkJCHq5mB4b2i2gpxscNXuSM%2Biijov32Pw6VsPn91luJJFlyfnp6EU5F6dEv8YUIp0bes6x2PL1lGZXsz2aqHscSBpP7cRXGtSOKCyYKVsx2xieZ%2FTTUqpfSSGkKYthh9tu8GdaULNGN0RbXMtqDi8LXyQIIsrE5xC6BljVNQj3SRrMVPaDRkJnV3h%2BKcdENj4hSDcWyuFjK5Or1yq8p2HQEC011htD0nYNqFq0rb%2Bs85kkn6k139AnDpV9u5iSttkx%2FKEDZRWKPadLNqx%2B3HIPG5Q0AoYXaqYBrpA0gFOSD43IEd7PiIuHP%2FbD%2FiV%2BbHad2usLY5W5M%2BSswG7%2FXbAO6SoM3gw8k9Kbfe0GFeNOfahhVvOyJUWjxGElMwuAfnp3%2FKhuGIIfuHXN69BgmyU5TacFtzaQqLDKeEstqOr2DhEHgfF2yx0%2FpRUeAEx2qGCF0biJjr8mt15BwUA30f9cjFSkTiGknWzZPDqxJL72GkmzkoGSw7WN9wUBmYE6agSKiBa%2Bdd2ZFRbqWcpUSfhRExKY5suyNYf5JeVuY5ZQQkwIA%2BFggsYCo7mE13T1Vg1iZEpBJPdDJjsAX%2BPDRBE02Rbw6qYUe6Xpg%2FVZNrJ56HvXMMXrtL4GOqUBN3ZcSdIT2vbpu7KjESlMr6eodQNviOrZoAAYvsfGURNYFeEOmJJya83fZjokG6qNEUAbk1XbcK9KyWW8rkrMGpBcFtvmlvgMisb26R0PfdCHtvCyRHpJq0RrXXf3Jt66pCojHFPXo489IrIYxivZLUQAAyBXKrqcrAjoKj0Ze5XnJKyvnYp%2FeGjnN5ajGgXejy%2FwteHu1vtzNHr%2Fl5fTsiO%2BYdTK&X-Amz-Signature=db77f16ce9e2bf4801448b1fec60964b0c20f72cb70bc20f1bfcf582a610f3be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UYO6ZGN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIFdSzGHQ68ANmk8CHk0iSIh8n8s2l8R56ETRgoP%2FsbNZAiEA6Rsf%2FHabYx9ScByMI2pWV%2BaU%2FZ66vPF2%2BAuS%2B3B1T5wq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOPyvJoWAIlV%2BwJ1OCrcA2pah8bHIv59aVkJCHq5mB4b2i2gpxscNXuSM%2Biijov32Pw6VsPn91luJJFlyfnp6EU5F6dEv8YUIp0bes6x2PL1lGZXsz2aqHscSBpP7cRXGtSOKCyYKVsx2xieZ%2FTTUqpfSSGkKYthh9tu8GdaULNGN0RbXMtqDi8LXyQIIsrE5xC6BljVNQj3SRrMVPaDRkJnV3h%2BKcdENj4hSDcWyuFjK5Or1yq8p2HQEC011htD0nYNqFq0rb%2Bs85kkn6k139AnDpV9u5iSttkx%2FKEDZRWKPadLNqx%2B3HIPG5Q0AoYXaqYBrpA0gFOSD43IEd7PiIuHP%2FbD%2FiV%2BbHad2usLY5W5M%2BSswG7%2FXbAO6SoM3gw8k9Kbfe0GFeNOfahhVvOyJUWjxGElMwuAfnp3%2FKhuGIIfuHXN69BgmyU5TacFtzaQqLDKeEstqOr2DhEHgfF2yx0%2FpRUeAEx2qGCF0biJjr8mt15BwUA30f9cjFSkTiGknWzZPDqxJL72GkmzkoGSw7WN9wUBmYE6agSKiBa%2Bdd2ZFRbqWcpUSfhRExKY5suyNYf5JeVuY5ZQQkwIA%2BFggsYCo7mE13T1Vg1iZEpBJPdDJjsAX%2BPDRBE02Rbw6qYUe6Xpg%2FVZNrJ56HvXMMXrtL4GOqUBN3ZcSdIT2vbpu7KjESlMr6eodQNviOrZoAAYvsfGURNYFeEOmJJya83fZjokG6qNEUAbk1XbcK9KyWW8rkrMGpBcFtvmlvgMisb26R0PfdCHtvCyRHpJq0RrXXf3Jt66pCojHFPXo489IrIYxivZLUQAAyBXKrqcrAjoKj0Ze5XnJKyvnYp%2FeGjnN5ajGgXejy%2FwteHu1vtzNHr%2Fl5fTsiO%2BYdTK&X-Amz-Signature=b358d95594182a4e97ebf5c9d6c92b13f43137388aba555dde0987b45f916617&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UYO6ZGN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIFdSzGHQ68ANmk8CHk0iSIh8n8s2l8R56ETRgoP%2FsbNZAiEA6Rsf%2FHabYx9ScByMI2pWV%2BaU%2FZ66vPF2%2BAuS%2B3B1T5wq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOPyvJoWAIlV%2BwJ1OCrcA2pah8bHIv59aVkJCHq5mB4b2i2gpxscNXuSM%2Biijov32Pw6VsPn91luJJFlyfnp6EU5F6dEv8YUIp0bes6x2PL1lGZXsz2aqHscSBpP7cRXGtSOKCyYKVsx2xieZ%2FTTUqpfSSGkKYthh9tu8GdaULNGN0RbXMtqDi8LXyQIIsrE5xC6BljVNQj3SRrMVPaDRkJnV3h%2BKcdENj4hSDcWyuFjK5Or1yq8p2HQEC011htD0nYNqFq0rb%2Bs85kkn6k139AnDpV9u5iSttkx%2FKEDZRWKPadLNqx%2B3HIPG5Q0AoYXaqYBrpA0gFOSD43IEd7PiIuHP%2FbD%2FiV%2BbHad2usLY5W5M%2BSswG7%2FXbAO6SoM3gw8k9Kbfe0GFeNOfahhVvOyJUWjxGElMwuAfnp3%2FKhuGIIfuHXN69BgmyU5TacFtzaQqLDKeEstqOr2DhEHgfF2yx0%2FpRUeAEx2qGCF0biJjr8mt15BwUA30f9cjFSkTiGknWzZPDqxJL72GkmzkoGSw7WN9wUBmYE6agSKiBa%2Bdd2ZFRbqWcpUSfhRExKY5suyNYf5JeVuY5ZQQkwIA%2BFggsYCo7mE13T1Vg1iZEpBJPdDJjsAX%2BPDRBE02Rbw6qYUe6Xpg%2FVZNrJ56HvXMMXrtL4GOqUBN3ZcSdIT2vbpu7KjESlMr6eodQNviOrZoAAYvsfGURNYFeEOmJJya83fZjokG6qNEUAbk1XbcK9KyWW8rkrMGpBcFtvmlvgMisb26R0PfdCHtvCyRHpJq0RrXXf3Jt66pCojHFPXo489IrIYxivZLUQAAyBXKrqcrAjoKj0Ze5XnJKyvnYp%2FeGjnN5ajGgXejy%2FwteHu1vtzNHr%2Fl5fTsiO%2BYdTK&X-Amz-Signature=bf7efc7e7a9a8a19c3023e42c894759fa296d168307e263566c5e08c71cee738&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UYO6ZGN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIFdSzGHQ68ANmk8CHk0iSIh8n8s2l8R56ETRgoP%2FsbNZAiEA6Rsf%2FHabYx9ScByMI2pWV%2BaU%2FZ66vPF2%2BAuS%2B3B1T5wq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOPyvJoWAIlV%2BwJ1OCrcA2pah8bHIv59aVkJCHq5mB4b2i2gpxscNXuSM%2Biijov32Pw6VsPn91luJJFlyfnp6EU5F6dEv8YUIp0bes6x2PL1lGZXsz2aqHscSBpP7cRXGtSOKCyYKVsx2xieZ%2FTTUqpfSSGkKYthh9tu8GdaULNGN0RbXMtqDi8LXyQIIsrE5xC6BljVNQj3SRrMVPaDRkJnV3h%2BKcdENj4hSDcWyuFjK5Or1yq8p2HQEC011htD0nYNqFq0rb%2Bs85kkn6k139AnDpV9u5iSttkx%2FKEDZRWKPadLNqx%2B3HIPG5Q0AoYXaqYBrpA0gFOSD43IEd7PiIuHP%2FbD%2FiV%2BbHad2usLY5W5M%2BSswG7%2FXbAO6SoM3gw8k9Kbfe0GFeNOfahhVvOyJUWjxGElMwuAfnp3%2FKhuGIIfuHXN69BgmyU5TacFtzaQqLDKeEstqOr2DhEHgfF2yx0%2FpRUeAEx2qGCF0biJjr8mt15BwUA30f9cjFSkTiGknWzZPDqxJL72GkmzkoGSw7WN9wUBmYE6agSKiBa%2Bdd2ZFRbqWcpUSfhRExKY5suyNYf5JeVuY5ZQQkwIA%2BFggsYCo7mE13T1Vg1iZEpBJPdDJjsAX%2BPDRBE02Rbw6qYUe6Xpg%2FVZNrJ56HvXMMXrtL4GOqUBN3ZcSdIT2vbpu7KjESlMr6eodQNviOrZoAAYvsfGURNYFeEOmJJya83fZjokG6qNEUAbk1XbcK9KyWW8rkrMGpBcFtvmlvgMisb26R0PfdCHtvCyRHpJq0RrXXf3Jt66pCojHFPXo489IrIYxivZLUQAAyBXKrqcrAjoKj0Ze5XnJKyvnYp%2FeGjnN5ajGgXejy%2FwteHu1vtzNHr%2Fl5fTsiO%2BYdTK&X-Amz-Signature=35c9e1e49ad5183c6be0b4c1b6c44ea6c9b07794bc37f9ffdc0498c69b38fb2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UYO6ZGN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIFdSzGHQ68ANmk8CHk0iSIh8n8s2l8R56ETRgoP%2FsbNZAiEA6Rsf%2FHabYx9ScByMI2pWV%2BaU%2FZ66vPF2%2BAuS%2B3B1T5wq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOPyvJoWAIlV%2BwJ1OCrcA2pah8bHIv59aVkJCHq5mB4b2i2gpxscNXuSM%2Biijov32Pw6VsPn91luJJFlyfnp6EU5F6dEv8YUIp0bes6x2PL1lGZXsz2aqHscSBpP7cRXGtSOKCyYKVsx2xieZ%2FTTUqpfSSGkKYthh9tu8GdaULNGN0RbXMtqDi8LXyQIIsrE5xC6BljVNQj3SRrMVPaDRkJnV3h%2BKcdENj4hSDcWyuFjK5Or1yq8p2HQEC011htD0nYNqFq0rb%2Bs85kkn6k139AnDpV9u5iSttkx%2FKEDZRWKPadLNqx%2B3HIPG5Q0AoYXaqYBrpA0gFOSD43IEd7PiIuHP%2FbD%2FiV%2BbHad2usLY5W5M%2BSswG7%2FXbAO6SoM3gw8k9Kbfe0GFeNOfahhVvOyJUWjxGElMwuAfnp3%2FKhuGIIfuHXN69BgmyU5TacFtzaQqLDKeEstqOr2DhEHgfF2yx0%2FpRUeAEx2qGCF0biJjr8mt15BwUA30f9cjFSkTiGknWzZPDqxJL72GkmzkoGSw7WN9wUBmYE6agSKiBa%2Bdd2ZFRbqWcpUSfhRExKY5suyNYf5JeVuY5ZQQkwIA%2BFggsYCo7mE13T1Vg1iZEpBJPdDJjsAX%2BPDRBE02Rbw6qYUe6Xpg%2FVZNrJ56HvXMMXrtL4GOqUBN3ZcSdIT2vbpu7KjESlMr6eodQNviOrZoAAYvsfGURNYFeEOmJJya83fZjokG6qNEUAbk1XbcK9KyWW8rkrMGpBcFtvmlvgMisb26R0PfdCHtvCyRHpJq0RrXXf3Jt66pCojHFPXo489IrIYxivZLUQAAyBXKrqcrAjoKj0Ze5XnJKyvnYp%2FeGjnN5ajGgXejy%2FwteHu1vtzNHr%2Fl5fTsiO%2BYdTK&X-Amz-Signature=5d62780a872d650b39c180998a9cfd762d682b1baf98ae9a95939ff5f87dbade&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
