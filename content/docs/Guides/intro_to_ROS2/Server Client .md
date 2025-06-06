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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJNMJHRA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCDw4VxUoMvzacMSOVZNoIahmTyEUpMhUUG70h0hDIlJAIhAIqbW%2B65vmKrp3Mgz4oCdGfxpLUOPGJh%2FjBOwXpEO3YhKv8DCFcQABoMNjM3NDIzMTgzODA1IgxHs2vmirvxZY5mP5Yq3APSb9TSsyR%2FQsQ24zExac6L%2Fdfrg4goxicUUHB6mIj4W%2F%2FxzU9RkHTCfUQ9tzMzuUd3zRnQKwKd%2Fif9LBTGLIQsgaKNXV%2BrYnUr5nxVoXV%2BnZVvqqKUeTr4SOsfU4vFpVytoDX%2BT%2B81lAVq3NvjOIEDsYAb54skgzeNnyPciV%2Bqx7ZTBGt8ykLr3VBZMUGMpJmKM7DmIbYADDkaUTZiLnp12FKGBlfCaZV9lIhEoyHIVaGccFCn6YOVYuyWTqAA4LmXoRG9iBJydndZ3Tx1osIAJM5wwUsEqpxtzrCgJ9H%2B3jnyUC%2F%2FaqxDoVvLSPTNzOHQSyXG85KSq0sW5fyNS0SU6PiExPZVBk%2FyL9ttkMQ%2FJ%2FkcdlqFiIiKA2qyydzqjfBAZ0QLkzgsUsfi17pINH7AzemT1KzFSPYD67ETTf22TH%2B01AFGjmBCzX3s8HWl%2BIc2lCo5rCqAKoVVWbbnlKFwEIi%2FANZNNQu13LDIhyQZpxlEXd2STy29wCIxNuFgWoCmCPbGBGikZ8VGiNHQE8XtQNslJZ8DFk74BdYSASD7Bi0BzYG1Vzd1MkedjE%2F3OvLkRDWrz9%2B9ZdckkoubQYj%2BUz7Pn9gHybbgbmWK9YoOmyB73goOnAxgvQ9LJjDvhIrCBjqkAUQT6t8cJwYjGISisyZC4pxw8XCQ%2BCEizFUb%2Ba0oFCxDXkIm9wiflOBLFM%2BW58s%2FHONQ3vrYS3aqZWxOT9Xpxt8xB1KCQyZM8qGtx4VvC2JNGQSAJBosAw3GDw8%2Bn1L7MdSti5HVgnAO6uj4%2F6v4ahlklvoomxm3sJYtKZmBY4eyJYXPU8suzUPn%2Fqm6mo6SY6dkyMEex6osZMzba458hbjKLo04&X-Amz-Signature=5fde96fd0d01d8d02bc889360344a21eb644474c3c6187d3fa49c93c50cebeb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJNMJHRA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCDw4VxUoMvzacMSOVZNoIahmTyEUpMhUUG70h0hDIlJAIhAIqbW%2B65vmKrp3Mgz4oCdGfxpLUOPGJh%2FjBOwXpEO3YhKv8DCFcQABoMNjM3NDIzMTgzODA1IgxHs2vmirvxZY5mP5Yq3APSb9TSsyR%2FQsQ24zExac6L%2Fdfrg4goxicUUHB6mIj4W%2F%2FxzU9RkHTCfUQ9tzMzuUd3zRnQKwKd%2Fif9LBTGLIQsgaKNXV%2BrYnUr5nxVoXV%2BnZVvqqKUeTr4SOsfU4vFpVytoDX%2BT%2B81lAVq3NvjOIEDsYAb54skgzeNnyPciV%2Bqx7ZTBGt8ykLr3VBZMUGMpJmKM7DmIbYADDkaUTZiLnp12FKGBlfCaZV9lIhEoyHIVaGccFCn6YOVYuyWTqAA4LmXoRG9iBJydndZ3Tx1osIAJM5wwUsEqpxtzrCgJ9H%2B3jnyUC%2F%2FaqxDoVvLSPTNzOHQSyXG85KSq0sW5fyNS0SU6PiExPZVBk%2FyL9ttkMQ%2FJ%2FkcdlqFiIiKA2qyydzqjfBAZ0QLkzgsUsfi17pINH7AzemT1KzFSPYD67ETTf22TH%2B01AFGjmBCzX3s8HWl%2BIc2lCo5rCqAKoVVWbbnlKFwEIi%2FANZNNQu13LDIhyQZpxlEXd2STy29wCIxNuFgWoCmCPbGBGikZ8VGiNHQE8XtQNslJZ8DFk74BdYSASD7Bi0BzYG1Vzd1MkedjE%2F3OvLkRDWrz9%2B9ZdckkoubQYj%2BUz7Pn9gHybbgbmWK9YoOmyB73goOnAxgvQ9LJjDvhIrCBjqkAUQT6t8cJwYjGISisyZC4pxw8XCQ%2BCEizFUb%2Ba0oFCxDXkIm9wiflOBLFM%2BW58s%2FHONQ3vrYS3aqZWxOT9Xpxt8xB1KCQyZM8qGtx4VvC2JNGQSAJBosAw3GDw8%2Bn1L7MdSti5HVgnAO6uj4%2F6v4ahlklvoomxm3sJYtKZmBY4eyJYXPU8suzUPn%2Fqm6mo6SY6dkyMEex6osZMzba458hbjKLo04&X-Amz-Signature=f58450ef6a0a97796a6d094008cbe2c9f180f6f546d83b22cfb0d3c65af38269&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJNMJHRA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCDw4VxUoMvzacMSOVZNoIahmTyEUpMhUUG70h0hDIlJAIhAIqbW%2B65vmKrp3Mgz4oCdGfxpLUOPGJh%2FjBOwXpEO3YhKv8DCFcQABoMNjM3NDIzMTgzODA1IgxHs2vmirvxZY5mP5Yq3APSb9TSsyR%2FQsQ24zExac6L%2Fdfrg4goxicUUHB6mIj4W%2F%2FxzU9RkHTCfUQ9tzMzuUd3zRnQKwKd%2Fif9LBTGLIQsgaKNXV%2BrYnUr5nxVoXV%2BnZVvqqKUeTr4SOsfU4vFpVytoDX%2BT%2B81lAVq3NvjOIEDsYAb54skgzeNnyPciV%2Bqx7ZTBGt8ykLr3VBZMUGMpJmKM7DmIbYADDkaUTZiLnp12FKGBlfCaZV9lIhEoyHIVaGccFCn6YOVYuyWTqAA4LmXoRG9iBJydndZ3Tx1osIAJM5wwUsEqpxtzrCgJ9H%2B3jnyUC%2F%2FaqxDoVvLSPTNzOHQSyXG85KSq0sW5fyNS0SU6PiExPZVBk%2FyL9ttkMQ%2FJ%2FkcdlqFiIiKA2qyydzqjfBAZ0QLkzgsUsfi17pINH7AzemT1KzFSPYD67ETTf22TH%2B01AFGjmBCzX3s8HWl%2BIc2lCo5rCqAKoVVWbbnlKFwEIi%2FANZNNQu13LDIhyQZpxlEXd2STy29wCIxNuFgWoCmCPbGBGikZ8VGiNHQE8XtQNslJZ8DFk74BdYSASD7Bi0BzYG1Vzd1MkedjE%2F3OvLkRDWrz9%2B9ZdckkoubQYj%2BUz7Pn9gHybbgbmWK9YoOmyB73goOnAxgvQ9LJjDvhIrCBjqkAUQT6t8cJwYjGISisyZC4pxw8XCQ%2BCEizFUb%2Ba0oFCxDXkIm9wiflOBLFM%2BW58s%2FHONQ3vrYS3aqZWxOT9Xpxt8xB1KCQyZM8qGtx4VvC2JNGQSAJBosAw3GDw8%2Bn1L7MdSti5HVgnAO6uj4%2F6v4ahlklvoomxm3sJYtKZmBY4eyJYXPU8suzUPn%2Fqm6mo6SY6dkyMEex6osZMzba458hbjKLo04&X-Amz-Signature=9c742d919825991e4fb9401ee54d0b0b0d1956dec874d255e4141a1e3459836b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJNMJHRA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCDw4VxUoMvzacMSOVZNoIahmTyEUpMhUUG70h0hDIlJAIhAIqbW%2B65vmKrp3Mgz4oCdGfxpLUOPGJh%2FjBOwXpEO3YhKv8DCFcQABoMNjM3NDIzMTgzODA1IgxHs2vmirvxZY5mP5Yq3APSb9TSsyR%2FQsQ24zExac6L%2Fdfrg4goxicUUHB6mIj4W%2F%2FxzU9RkHTCfUQ9tzMzuUd3zRnQKwKd%2Fif9LBTGLIQsgaKNXV%2BrYnUr5nxVoXV%2BnZVvqqKUeTr4SOsfU4vFpVytoDX%2BT%2B81lAVq3NvjOIEDsYAb54skgzeNnyPciV%2Bqx7ZTBGt8ykLr3VBZMUGMpJmKM7DmIbYADDkaUTZiLnp12FKGBlfCaZV9lIhEoyHIVaGccFCn6YOVYuyWTqAA4LmXoRG9iBJydndZ3Tx1osIAJM5wwUsEqpxtzrCgJ9H%2B3jnyUC%2F%2FaqxDoVvLSPTNzOHQSyXG85KSq0sW5fyNS0SU6PiExPZVBk%2FyL9ttkMQ%2FJ%2FkcdlqFiIiKA2qyydzqjfBAZ0QLkzgsUsfi17pINH7AzemT1KzFSPYD67ETTf22TH%2B01AFGjmBCzX3s8HWl%2BIc2lCo5rCqAKoVVWbbnlKFwEIi%2FANZNNQu13LDIhyQZpxlEXd2STy29wCIxNuFgWoCmCPbGBGikZ8VGiNHQE8XtQNslJZ8DFk74BdYSASD7Bi0BzYG1Vzd1MkedjE%2F3OvLkRDWrz9%2B9ZdckkoubQYj%2BUz7Pn9gHybbgbmWK9YoOmyB73goOnAxgvQ9LJjDvhIrCBjqkAUQT6t8cJwYjGISisyZC4pxw8XCQ%2BCEizFUb%2Ba0oFCxDXkIm9wiflOBLFM%2BW58s%2FHONQ3vrYS3aqZWxOT9Xpxt8xB1KCQyZM8qGtx4VvC2JNGQSAJBosAw3GDw8%2Bn1L7MdSti5HVgnAO6uj4%2F6v4ahlklvoomxm3sJYtKZmBY4eyJYXPU8suzUPn%2Fqm6mo6SY6dkyMEex6osZMzba458hbjKLo04&X-Amz-Signature=8894bf9d103e8346aa80b8308b5a39fc253906e127982852702003706b356569&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJNMJHRA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCDw4VxUoMvzacMSOVZNoIahmTyEUpMhUUG70h0hDIlJAIhAIqbW%2B65vmKrp3Mgz4oCdGfxpLUOPGJh%2FjBOwXpEO3YhKv8DCFcQABoMNjM3NDIzMTgzODA1IgxHs2vmirvxZY5mP5Yq3APSb9TSsyR%2FQsQ24zExac6L%2Fdfrg4goxicUUHB6mIj4W%2F%2FxzU9RkHTCfUQ9tzMzuUd3zRnQKwKd%2Fif9LBTGLIQsgaKNXV%2BrYnUr5nxVoXV%2BnZVvqqKUeTr4SOsfU4vFpVytoDX%2BT%2B81lAVq3NvjOIEDsYAb54skgzeNnyPciV%2Bqx7ZTBGt8ykLr3VBZMUGMpJmKM7DmIbYADDkaUTZiLnp12FKGBlfCaZV9lIhEoyHIVaGccFCn6YOVYuyWTqAA4LmXoRG9iBJydndZ3Tx1osIAJM5wwUsEqpxtzrCgJ9H%2B3jnyUC%2F%2FaqxDoVvLSPTNzOHQSyXG85KSq0sW5fyNS0SU6PiExPZVBk%2FyL9ttkMQ%2FJ%2FkcdlqFiIiKA2qyydzqjfBAZ0QLkzgsUsfi17pINH7AzemT1KzFSPYD67ETTf22TH%2B01AFGjmBCzX3s8HWl%2BIc2lCo5rCqAKoVVWbbnlKFwEIi%2FANZNNQu13LDIhyQZpxlEXd2STy29wCIxNuFgWoCmCPbGBGikZ8VGiNHQE8XtQNslJZ8DFk74BdYSASD7Bi0BzYG1Vzd1MkedjE%2F3OvLkRDWrz9%2B9ZdckkoubQYj%2BUz7Pn9gHybbgbmWK9YoOmyB73goOnAxgvQ9LJjDvhIrCBjqkAUQT6t8cJwYjGISisyZC4pxw8XCQ%2BCEizFUb%2Ba0oFCxDXkIm9wiflOBLFM%2BW58s%2FHONQ3vrYS3aqZWxOT9Xpxt8xB1KCQyZM8qGtx4VvC2JNGQSAJBosAw3GDw8%2Bn1L7MdSti5HVgnAO6uj4%2F6v4ahlklvoomxm3sJYtKZmBY4eyJYXPU8suzUPn%2Fqm6mo6SY6dkyMEex6osZMzba458hbjKLo04&X-Amz-Signature=c9e93ea04033e8d16995da32c526bb629f440bb6798879c06ea878421aeacc2c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
