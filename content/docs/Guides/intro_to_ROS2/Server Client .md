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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIHJY5EG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzpR0fgrO9dRxdHvVQaxBRQdgZFk%2BPaCXsWQXZG8faoAiAtzQiVrxjXBNfgl7sPQ4UTHRJ1pu9PC5SPBZcY7fKSzyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMddDS7cljnm5hXsA%2BKtwD7IkipDrhsV9IHobl8ixmy7XCf97i7EaNrV7YyEU4ztxoye0ol60oi08Gy9bM5a%2FaVkvegUO%2FBAl6T4CDr6VHFNfZureFfEMTKJ7xbeKs5dXNCdDXrMiNhbgzv9ZBwQs8Wg0vl3Jxu6oftMx4ax6wD1qf%2BlkyolHhsVy4VzvFtIrE%2B1OBaVXSu6J1wMBxiEJJAiu1lt20uHZUYRhngt1q9VhOg%2BecIqzvtpSlwSomD%2FaDYqhwpJOSL19pV3dztMIQy%2FoVmu9JHnAEK9rw8SGrn74KkxZMzu%2BIUews5bStLVGTaEmBM8ZpTo7e%2F9v5mgXa8m2HUrcVfqEKPK8XbyMpll47UwtbCuJ%2FBMZ9iPrDKxOfTiFHG7zziP6dxMfxHQhxbYccpX5Xhtxh8F41KbW71apQYTnHIMgKcMYclk7oJ6you5SlmlwZmBBxb563CEsDkW285TCLobAJIQxyVDjqptKs01pLQZAw%2BGC%2FkkhfxVSHkyaLG5Vs17TWTulV8D9QS2AiPVgcKvkH%2BsnHnEK6tPMWhQM%2BIvO0r4CVcyW3tqcMQqQaYzDuFMwGMggjETIGvvYY4DPIbvPOcfn%2BDNZ8NaUcws%2FvHd1q2zSM9xyOCBJVGFnpitDdR6Pfh8ow8%2Be%2FvwY6pgFKWEq8Yz92aYrQ4HUmkGA%2BzL0vIr14c21PmXnUDr9Qqzn6rUc%2BVlLvS1KvQEOdYVMnU9OgEGDyYh1o3snSEDJHsYkCFS6mgQdnfld3EyDobo0Hfy036gwlmr3hMbFZ9%2F%2BhVCyDqWkrtPannIz5BTkFMdC9A%2F9XBcyKIBf1QZF9IdaB8hctht%2BxgIGWYHTGyO1aPmyqyMr68IogyM2akeT%2Bz8BNjjBA&X-Amz-Signature=239737b36b59a58db1fadc9b5b3fd380cb7548f9898d01ab3bb07ee538e35617&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIHJY5EG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzpR0fgrO9dRxdHvVQaxBRQdgZFk%2BPaCXsWQXZG8faoAiAtzQiVrxjXBNfgl7sPQ4UTHRJ1pu9PC5SPBZcY7fKSzyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMddDS7cljnm5hXsA%2BKtwD7IkipDrhsV9IHobl8ixmy7XCf97i7EaNrV7YyEU4ztxoye0ol60oi08Gy9bM5a%2FaVkvegUO%2FBAl6T4CDr6VHFNfZureFfEMTKJ7xbeKs5dXNCdDXrMiNhbgzv9ZBwQs8Wg0vl3Jxu6oftMx4ax6wD1qf%2BlkyolHhsVy4VzvFtIrE%2B1OBaVXSu6J1wMBxiEJJAiu1lt20uHZUYRhngt1q9VhOg%2BecIqzvtpSlwSomD%2FaDYqhwpJOSL19pV3dztMIQy%2FoVmu9JHnAEK9rw8SGrn74KkxZMzu%2BIUews5bStLVGTaEmBM8ZpTo7e%2F9v5mgXa8m2HUrcVfqEKPK8XbyMpll47UwtbCuJ%2FBMZ9iPrDKxOfTiFHG7zziP6dxMfxHQhxbYccpX5Xhtxh8F41KbW71apQYTnHIMgKcMYclk7oJ6you5SlmlwZmBBxb563CEsDkW285TCLobAJIQxyVDjqptKs01pLQZAw%2BGC%2FkkhfxVSHkyaLG5Vs17TWTulV8D9QS2AiPVgcKvkH%2BsnHnEK6tPMWhQM%2BIvO0r4CVcyW3tqcMQqQaYzDuFMwGMggjETIGvvYY4DPIbvPOcfn%2BDNZ8NaUcws%2FvHd1q2zSM9xyOCBJVGFnpitDdR6Pfh8ow8%2Be%2FvwY6pgFKWEq8Yz92aYrQ4HUmkGA%2BzL0vIr14c21PmXnUDr9Qqzn6rUc%2BVlLvS1KvQEOdYVMnU9OgEGDyYh1o3snSEDJHsYkCFS6mgQdnfld3EyDobo0Hfy036gwlmr3hMbFZ9%2F%2BhVCyDqWkrtPannIz5BTkFMdC9A%2F9XBcyKIBf1QZF9IdaB8hctht%2BxgIGWYHTGyO1aPmyqyMr68IogyM2akeT%2Bz8BNjjBA&X-Amz-Signature=d254cf856b20b26ffc560ca97e0379ecf3a37c3e8bc9f1bded38c271dfc18b32&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIHJY5EG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzpR0fgrO9dRxdHvVQaxBRQdgZFk%2BPaCXsWQXZG8faoAiAtzQiVrxjXBNfgl7sPQ4UTHRJ1pu9PC5SPBZcY7fKSzyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMddDS7cljnm5hXsA%2BKtwD7IkipDrhsV9IHobl8ixmy7XCf97i7EaNrV7YyEU4ztxoye0ol60oi08Gy9bM5a%2FaVkvegUO%2FBAl6T4CDr6VHFNfZureFfEMTKJ7xbeKs5dXNCdDXrMiNhbgzv9ZBwQs8Wg0vl3Jxu6oftMx4ax6wD1qf%2BlkyolHhsVy4VzvFtIrE%2B1OBaVXSu6J1wMBxiEJJAiu1lt20uHZUYRhngt1q9VhOg%2BecIqzvtpSlwSomD%2FaDYqhwpJOSL19pV3dztMIQy%2FoVmu9JHnAEK9rw8SGrn74KkxZMzu%2BIUews5bStLVGTaEmBM8ZpTo7e%2F9v5mgXa8m2HUrcVfqEKPK8XbyMpll47UwtbCuJ%2FBMZ9iPrDKxOfTiFHG7zziP6dxMfxHQhxbYccpX5Xhtxh8F41KbW71apQYTnHIMgKcMYclk7oJ6you5SlmlwZmBBxb563CEsDkW285TCLobAJIQxyVDjqptKs01pLQZAw%2BGC%2FkkhfxVSHkyaLG5Vs17TWTulV8D9QS2AiPVgcKvkH%2BsnHnEK6tPMWhQM%2BIvO0r4CVcyW3tqcMQqQaYzDuFMwGMggjETIGvvYY4DPIbvPOcfn%2BDNZ8NaUcws%2FvHd1q2zSM9xyOCBJVGFnpitDdR6Pfh8ow8%2Be%2FvwY6pgFKWEq8Yz92aYrQ4HUmkGA%2BzL0vIr14c21PmXnUDr9Qqzn6rUc%2BVlLvS1KvQEOdYVMnU9OgEGDyYh1o3snSEDJHsYkCFS6mgQdnfld3EyDobo0Hfy036gwlmr3hMbFZ9%2F%2BhVCyDqWkrtPannIz5BTkFMdC9A%2F9XBcyKIBf1QZF9IdaB8hctht%2BxgIGWYHTGyO1aPmyqyMr68IogyM2akeT%2Bz8BNjjBA&X-Amz-Signature=d9f09bfd2e5445409efbf86b1bedfbd27a3d5bc461cca8ab5ab1fd4e48502f82&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIHJY5EG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzpR0fgrO9dRxdHvVQaxBRQdgZFk%2BPaCXsWQXZG8faoAiAtzQiVrxjXBNfgl7sPQ4UTHRJ1pu9PC5SPBZcY7fKSzyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMddDS7cljnm5hXsA%2BKtwD7IkipDrhsV9IHobl8ixmy7XCf97i7EaNrV7YyEU4ztxoye0ol60oi08Gy9bM5a%2FaVkvegUO%2FBAl6T4CDr6VHFNfZureFfEMTKJ7xbeKs5dXNCdDXrMiNhbgzv9ZBwQs8Wg0vl3Jxu6oftMx4ax6wD1qf%2BlkyolHhsVy4VzvFtIrE%2B1OBaVXSu6J1wMBxiEJJAiu1lt20uHZUYRhngt1q9VhOg%2BecIqzvtpSlwSomD%2FaDYqhwpJOSL19pV3dztMIQy%2FoVmu9JHnAEK9rw8SGrn74KkxZMzu%2BIUews5bStLVGTaEmBM8ZpTo7e%2F9v5mgXa8m2HUrcVfqEKPK8XbyMpll47UwtbCuJ%2FBMZ9iPrDKxOfTiFHG7zziP6dxMfxHQhxbYccpX5Xhtxh8F41KbW71apQYTnHIMgKcMYclk7oJ6you5SlmlwZmBBxb563CEsDkW285TCLobAJIQxyVDjqptKs01pLQZAw%2BGC%2FkkhfxVSHkyaLG5Vs17TWTulV8D9QS2AiPVgcKvkH%2BsnHnEK6tPMWhQM%2BIvO0r4CVcyW3tqcMQqQaYzDuFMwGMggjETIGvvYY4DPIbvPOcfn%2BDNZ8NaUcws%2FvHd1q2zSM9xyOCBJVGFnpitDdR6Pfh8ow8%2Be%2FvwY6pgFKWEq8Yz92aYrQ4HUmkGA%2BzL0vIr14c21PmXnUDr9Qqzn6rUc%2BVlLvS1KvQEOdYVMnU9OgEGDyYh1o3snSEDJHsYkCFS6mgQdnfld3EyDobo0Hfy036gwlmr3hMbFZ9%2F%2BhVCyDqWkrtPannIz5BTkFMdC9A%2F9XBcyKIBf1QZF9IdaB8hctht%2BxgIGWYHTGyO1aPmyqyMr68IogyM2akeT%2Bz8BNjjBA&X-Amz-Signature=9fe6b5cc41eb929c09206757f0791b7af41d410323d6348da6fb3b02b18eb751&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIHJY5EG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzpR0fgrO9dRxdHvVQaxBRQdgZFk%2BPaCXsWQXZG8faoAiAtzQiVrxjXBNfgl7sPQ4UTHRJ1pu9PC5SPBZcY7fKSzyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMddDS7cljnm5hXsA%2BKtwD7IkipDrhsV9IHobl8ixmy7XCf97i7EaNrV7YyEU4ztxoye0ol60oi08Gy9bM5a%2FaVkvegUO%2FBAl6T4CDr6VHFNfZureFfEMTKJ7xbeKs5dXNCdDXrMiNhbgzv9ZBwQs8Wg0vl3Jxu6oftMx4ax6wD1qf%2BlkyolHhsVy4VzvFtIrE%2B1OBaVXSu6J1wMBxiEJJAiu1lt20uHZUYRhngt1q9VhOg%2BecIqzvtpSlwSomD%2FaDYqhwpJOSL19pV3dztMIQy%2FoVmu9JHnAEK9rw8SGrn74KkxZMzu%2BIUews5bStLVGTaEmBM8ZpTo7e%2F9v5mgXa8m2HUrcVfqEKPK8XbyMpll47UwtbCuJ%2FBMZ9iPrDKxOfTiFHG7zziP6dxMfxHQhxbYccpX5Xhtxh8F41KbW71apQYTnHIMgKcMYclk7oJ6you5SlmlwZmBBxb563CEsDkW285TCLobAJIQxyVDjqptKs01pLQZAw%2BGC%2FkkhfxVSHkyaLG5Vs17TWTulV8D9QS2AiPVgcKvkH%2BsnHnEK6tPMWhQM%2BIvO0r4CVcyW3tqcMQqQaYzDuFMwGMggjETIGvvYY4DPIbvPOcfn%2BDNZ8NaUcws%2FvHd1q2zSM9xyOCBJVGFnpitDdR6Pfh8ow8%2Be%2FvwY6pgFKWEq8Yz92aYrQ4HUmkGA%2BzL0vIr14c21PmXnUDr9Qqzn6rUc%2BVlLvS1KvQEOdYVMnU9OgEGDyYh1o3snSEDJHsYkCFS6mgQdnfld3EyDobo0Hfy036gwlmr3hMbFZ9%2F%2BhVCyDqWkrtPannIz5BTkFMdC9A%2F9XBcyKIBf1QZF9IdaB8hctht%2BxgIGWYHTGyO1aPmyqyMr68IogyM2akeT%2Bz8BNjjBA&X-Amz-Signature=0befd978da839a0a407954b001255fe52f150466a053453cb3ee349963748171&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
