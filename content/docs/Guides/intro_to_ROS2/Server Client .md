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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W7U5M5C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCufZizbGGBkcHsdgetZ8Xhqg7rlv2Z0eq4ocDb5acQ%2FgIhAPwBFKvoJfMJbTqh5JhiWA05q3H4zKPaNNnJ%2BXVHF4ZqKv8DCHgQABoMNjM3NDIzMTgzODA1IgwtVLE8fEuQfwvqL90q3APVmXHTEzyqLPnEXHl3H7K1RGGUN23zkl2amum8gaMsxq6g7oeWftEBuCIq0MSP5KPB2vMOAC%2BUus9gNQBPnNExnT49jE6Bfpa9J%2B7Vi6bALfByKatmEABLpeXkdDRC99LqfXxQyuG7%2Ftr%2B%2BxiYlcY7IOl48IDLsvYH29FphdovC%2BadnSnX6Hi%2Fd9fmEiazAbYpD3mpXIMyBaEV5sA1f6E%2Fo5YxFxX9OxAszrLufs66Hssnd9ZmO48XDppUY7u2Z%2BXp%2Fi5zTBh5szVNq8CBHdSzdbwQkCe37oQ5TXmE%2BoYSTZlzWYYwonyqA8zeS4EvyDg6PZo76uJCFJ5TF6aqLKoZfk%2FmOZXGoAlQZdRQzlf1OLCoH0HoVcgt0eZ33ddelxql%2BaQA%2BSshCXIclPN%2FUjtofiZy4yAoNTUeJN%2Fj%2Bz6ssKIk6haeD5HrU6Yy5B5r%2Bn4jllk5rZTRDsvhMheb60RPefh6OQE1tUER%2BGMNdw1TRts1KCaSD7DXQBDmgEj%2BILkAUHMnkV4wTMklMza0y166b7FjtQdGQ5BI0J2vbqB0OWnY4GIcMOV9jNZWmhFpeqPQzf7vvWbKScwCSpNlkLn6aABPj89qVcU3ffZnii6dXda96hhfYhIRQYvv9DCj%2F5jEBjqkAeraIH0aSNeKMD26r3lwdvgKSczBEpzzRZIt%2FLpFb3CNmyvTBBZ5B2Gi4ylJUKiGujqltDQKxzwRN3kPuM24qdgot6hLjQPnnRwjBp93xlul%2FnTGQEB78HEwzA7XN7tFRDXAV7wahfO8nVgtduHUrY4gftDuZcOvICbZkAuNNTw8t3ZJV3mZ%2B8sISLRmbU0j39AwV4fBZdlUg7%2FWkepQ8WZvx75p&X-Amz-Signature=fb7d614d59078ab64e7a81e1adb4b31cd5d7267e78b13c9ab1368d5370a7623c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W7U5M5C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCufZizbGGBkcHsdgetZ8Xhqg7rlv2Z0eq4ocDb5acQ%2FgIhAPwBFKvoJfMJbTqh5JhiWA05q3H4zKPaNNnJ%2BXVHF4ZqKv8DCHgQABoMNjM3NDIzMTgzODA1IgwtVLE8fEuQfwvqL90q3APVmXHTEzyqLPnEXHl3H7K1RGGUN23zkl2amum8gaMsxq6g7oeWftEBuCIq0MSP5KPB2vMOAC%2BUus9gNQBPnNExnT49jE6Bfpa9J%2B7Vi6bALfByKatmEABLpeXkdDRC99LqfXxQyuG7%2Ftr%2B%2BxiYlcY7IOl48IDLsvYH29FphdovC%2BadnSnX6Hi%2Fd9fmEiazAbYpD3mpXIMyBaEV5sA1f6E%2Fo5YxFxX9OxAszrLufs66Hssnd9ZmO48XDppUY7u2Z%2BXp%2Fi5zTBh5szVNq8CBHdSzdbwQkCe37oQ5TXmE%2BoYSTZlzWYYwonyqA8zeS4EvyDg6PZo76uJCFJ5TF6aqLKoZfk%2FmOZXGoAlQZdRQzlf1OLCoH0HoVcgt0eZ33ddelxql%2BaQA%2BSshCXIclPN%2FUjtofiZy4yAoNTUeJN%2Fj%2Bz6ssKIk6haeD5HrU6Yy5B5r%2Bn4jllk5rZTRDsvhMheb60RPefh6OQE1tUER%2BGMNdw1TRts1KCaSD7DXQBDmgEj%2BILkAUHMnkV4wTMklMza0y166b7FjtQdGQ5BI0J2vbqB0OWnY4GIcMOV9jNZWmhFpeqPQzf7vvWbKScwCSpNlkLn6aABPj89qVcU3ffZnii6dXda96hhfYhIRQYvv9DCj%2F5jEBjqkAeraIH0aSNeKMD26r3lwdvgKSczBEpzzRZIt%2FLpFb3CNmyvTBBZ5B2Gi4ylJUKiGujqltDQKxzwRN3kPuM24qdgot6hLjQPnnRwjBp93xlul%2FnTGQEB78HEwzA7XN7tFRDXAV7wahfO8nVgtduHUrY4gftDuZcOvICbZkAuNNTw8t3ZJV3mZ%2B8sISLRmbU0j39AwV4fBZdlUg7%2FWkepQ8WZvx75p&X-Amz-Signature=2e8fc0bea02e25ce5265fb6c7b19989afef52bb0ad172518f34385205d11c680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W7U5M5C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCufZizbGGBkcHsdgetZ8Xhqg7rlv2Z0eq4ocDb5acQ%2FgIhAPwBFKvoJfMJbTqh5JhiWA05q3H4zKPaNNnJ%2BXVHF4ZqKv8DCHgQABoMNjM3NDIzMTgzODA1IgwtVLE8fEuQfwvqL90q3APVmXHTEzyqLPnEXHl3H7K1RGGUN23zkl2amum8gaMsxq6g7oeWftEBuCIq0MSP5KPB2vMOAC%2BUus9gNQBPnNExnT49jE6Bfpa9J%2B7Vi6bALfByKatmEABLpeXkdDRC99LqfXxQyuG7%2Ftr%2B%2BxiYlcY7IOl48IDLsvYH29FphdovC%2BadnSnX6Hi%2Fd9fmEiazAbYpD3mpXIMyBaEV5sA1f6E%2Fo5YxFxX9OxAszrLufs66Hssnd9ZmO48XDppUY7u2Z%2BXp%2Fi5zTBh5szVNq8CBHdSzdbwQkCe37oQ5TXmE%2BoYSTZlzWYYwonyqA8zeS4EvyDg6PZo76uJCFJ5TF6aqLKoZfk%2FmOZXGoAlQZdRQzlf1OLCoH0HoVcgt0eZ33ddelxql%2BaQA%2BSshCXIclPN%2FUjtofiZy4yAoNTUeJN%2Fj%2Bz6ssKIk6haeD5HrU6Yy5B5r%2Bn4jllk5rZTRDsvhMheb60RPefh6OQE1tUER%2BGMNdw1TRts1KCaSD7DXQBDmgEj%2BILkAUHMnkV4wTMklMza0y166b7FjtQdGQ5BI0J2vbqB0OWnY4GIcMOV9jNZWmhFpeqPQzf7vvWbKScwCSpNlkLn6aABPj89qVcU3ffZnii6dXda96hhfYhIRQYvv9DCj%2F5jEBjqkAeraIH0aSNeKMD26r3lwdvgKSczBEpzzRZIt%2FLpFb3CNmyvTBBZ5B2Gi4ylJUKiGujqltDQKxzwRN3kPuM24qdgot6hLjQPnnRwjBp93xlul%2FnTGQEB78HEwzA7XN7tFRDXAV7wahfO8nVgtduHUrY4gftDuZcOvICbZkAuNNTw8t3ZJV3mZ%2B8sISLRmbU0j39AwV4fBZdlUg7%2FWkepQ8WZvx75p&X-Amz-Signature=d6a2eafa02f49ad15d402a8686871822059dc12b6f45c1790f07465fe389e264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W7U5M5C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCufZizbGGBkcHsdgetZ8Xhqg7rlv2Z0eq4ocDb5acQ%2FgIhAPwBFKvoJfMJbTqh5JhiWA05q3H4zKPaNNnJ%2BXVHF4ZqKv8DCHgQABoMNjM3NDIzMTgzODA1IgwtVLE8fEuQfwvqL90q3APVmXHTEzyqLPnEXHl3H7K1RGGUN23zkl2amum8gaMsxq6g7oeWftEBuCIq0MSP5KPB2vMOAC%2BUus9gNQBPnNExnT49jE6Bfpa9J%2B7Vi6bALfByKatmEABLpeXkdDRC99LqfXxQyuG7%2Ftr%2B%2BxiYlcY7IOl48IDLsvYH29FphdovC%2BadnSnX6Hi%2Fd9fmEiazAbYpD3mpXIMyBaEV5sA1f6E%2Fo5YxFxX9OxAszrLufs66Hssnd9ZmO48XDppUY7u2Z%2BXp%2Fi5zTBh5szVNq8CBHdSzdbwQkCe37oQ5TXmE%2BoYSTZlzWYYwonyqA8zeS4EvyDg6PZo76uJCFJ5TF6aqLKoZfk%2FmOZXGoAlQZdRQzlf1OLCoH0HoVcgt0eZ33ddelxql%2BaQA%2BSshCXIclPN%2FUjtofiZy4yAoNTUeJN%2Fj%2Bz6ssKIk6haeD5HrU6Yy5B5r%2Bn4jllk5rZTRDsvhMheb60RPefh6OQE1tUER%2BGMNdw1TRts1KCaSD7DXQBDmgEj%2BILkAUHMnkV4wTMklMza0y166b7FjtQdGQ5BI0J2vbqB0OWnY4GIcMOV9jNZWmhFpeqPQzf7vvWbKScwCSpNlkLn6aABPj89qVcU3ffZnii6dXda96hhfYhIRQYvv9DCj%2F5jEBjqkAeraIH0aSNeKMD26r3lwdvgKSczBEpzzRZIt%2FLpFb3CNmyvTBBZ5B2Gi4ylJUKiGujqltDQKxzwRN3kPuM24qdgot6hLjQPnnRwjBp93xlul%2FnTGQEB78HEwzA7XN7tFRDXAV7wahfO8nVgtduHUrY4gftDuZcOvICbZkAuNNTw8t3ZJV3mZ%2B8sISLRmbU0j39AwV4fBZdlUg7%2FWkepQ8WZvx75p&X-Amz-Signature=468bff5d83d8fcb8e823b865485c0482ef13589cd4f4b80c8ff11845a67cad18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W7U5M5C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCufZizbGGBkcHsdgetZ8Xhqg7rlv2Z0eq4ocDb5acQ%2FgIhAPwBFKvoJfMJbTqh5JhiWA05q3H4zKPaNNnJ%2BXVHF4ZqKv8DCHgQABoMNjM3NDIzMTgzODA1IgwtVLE8fEuQfwvqL90q3APVmXHTEzyqLPnEXHl3H7K1RGGUN23zkl2amum8gaMsxq6g7oeWftEBuCIq0MSP5KPB2vMOAC%2BUus9gNQBPnNExnT49jE6Bfpa9J%2B7Vi6bALfByKatmEABLpeXkdDRC99LqfXxQyuG7%2Ftr%2B%2BxiYlcY7IOl48IDLsvYH29FphdovC%2BadnSnX6Hi%2Fd9fmEiazAbYpD3mpXIMyBaEV5sA1f6E%2Fo5YxFxX9OxAszrLufs66Hssnd9ZmO48XDppUY7u2Z%2BXp%2Fi5zTBh5szVNq8CBHdSzdbwQkCe37oQ5TXmE%2BoYSTZlzWYYwonyqA8zeS4EvyDg6PZo76uJCFJ5TF6aqLKoZfk%2FmOZXGoAlQZdRQzlf1OLCoH0HoVcgt0eZ33ddelxql%2BaQA%2BSshCXIclPN%2FUjtofiZy4yAoNTUeJN%2Fj%2Bz6ssKIk6haeD5HrU6Yy5B5r%2Bn4jllk5rZTRDsvhMheb60RPefh6OQE1tUER%2BGMNdw1TRts1KCaSD7DXQBDmgEj%2BILkAUHMnkV4wTMklMza0y166b7FjtQdGQ5BI0J2vbqB0OWnY4GIcMOV9jNZWmhFpeqPQzf7vvWbKScwCSpNlkLn6aABPj89qVcU3ffZnii6dXda96hhfYhIRQYvv9DCj%2F5jEBjqkAeraIH0aSNeKMD26r3lwdvgKSczBEpzzRZIt%2FLpFb3CNmyvTBBZ5B2Gi4ylJUKiGujqltDQKxzwRN3kPuM24qdgot6hLjQPnnRwjBp93xlul%2FnTGQEB78HEwzA7XN7tFRDXAV7wahfO8nVgtduHUrY4gftDuZcOvICbZkAuNNTw8t3ZJV3mZ%2B8sISLRmbU0j39AwV4fBZdlUg7%2FWkepQ8WZvx75p&X-Amz-Signature=da14dc033b87a54bd5e8b69409401a4bc2e203a0e134a8948d41b7fc22ff2e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
