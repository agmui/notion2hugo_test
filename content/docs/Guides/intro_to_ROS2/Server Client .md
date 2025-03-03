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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LLOR6DY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BgAVkW9bFxjcY9YQ5tDy4D%2Bs5AMOUr7eP33wks0BLKAIhAOBS%2Fj8wEQkD7s4cgHDVgYQw7CkcpWiNIK6Bdjcc1KuGKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyetpp9kWCeeVC2u50q3AOBv3Cwg%2B2IoVco%2BFqaeKBAcF%2BWO%2BS2f%2FJnFzdVv0ma5K2RuEdAxXaC19WCwKlLUZc1yuVUAal40UbJx%2BEQVL%2BL82uxlG7vvRySGrJpn1OREWbiv0mk2aEYnB7STgOGI1CNnxvhEckuREXmE8PuEmnRwTLKeiJ3XoT1PFc0l9u9flNQ6em6EU8YPJZHfpAPeExKl5GREwlQO%2BxZTHGvRb21ncDPJI0Byvm2bnjY5xXH4qtcf%2BFbCqmdd8%2BXb9VvMh023mgDG79smgaYcQbpbP%2BNNxwngevNXE00qbdMVt%2FERmVH4qfx9RS80T%2FadcvX9eNtbRwxucpLbXMt%2BFs4XPNa1OgrWKV1xw2ybHyJNh2vCw4YHWExBtK5lADXPVQv1m9%2B6KFFdU4g3RnYj07Szrs4I8G9bqu2NISZFiaflbsXFEuKyhh5D3BUEYUSY8KH8N2GNO4Wba10LsM8ZhjZHb58NhfhCywPfXYDApbbFxlqIi6z4z9cdjEPdWtQk6v%2FwpNKLFe6LAgeQxvkTmgzILhLLmhQjyrl2pUkxrh4gn%2FL8MS0Ao93pmhH%2Fz74kIhh%2FP5lQeVPhvyNezb3Bp6othIZuDxECBt6lvW27OtQnrQtnCRMXJfAYHj7eFrUXTCm2pi%2BBjqkAQdFEo%2BUg1V08oyZGOrEOqQ4%2B5Ph4TimhdqBn6fdl4zbaDeRQZ%2B7LqtO8pTZJEb8an2%2FYfVUu6CmEUX563eNjjGHzc9ncSYyzAtm0LehGdWKIXKEBpSViM8uUieOStoExgBgypIE9reyxOJQHohAcDMVnzrx0W%2BCL0LziGRbgEErUD6rp%2FHncz0zxz9xYOQLTSolvOdXI%2Ffo9T7ob5okWR1fPsdU&X-Amz-Signature=136849f6a1e6a5f675a4915d9f2b6fb2dd362e7f61e201f27599e86a8a040004&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LLOR6DY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BgAVkW9bFxjcY9YQ5tDy4D%2Bs5AMOUr7eP33wks0BLKAIhAOBS%2Fj8wEQkD7s4cgHDVgYQw7CkcpWiNIK6Bdjcc1KuGKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyetpp9kWCeeVC2u50q3AOBv3Cwg%2B2IoVco%2BFqaeKBAcF%2BWO%2BS2f%2FJnFzdVv0ma5K2RuEdAxXaC19WCwKlLUZc1yuVUAal40UbJx%2BEQVL%2BL82uxlG7vvRySGrJpn1OREWbiv0mk2aEYnB7STgOGI1CNnxvhEckuREXmE8PuEmnRwTLKeiJ3XoT1PFc0l9u9flNQ6em6EU8YPJZHfpAPeExKl5GREwlQO%2BxZTHGvRb21ncDPJI0Byvm2bnjY5xXH4qtcf%2BFbCqmdd8%2BXb9VvMh023mgDG79smgaYcQbpbP%2BNNxwngevNXE00qbdMVt%2FERmVH4qfx9RS80T%2FadcvX9eNtbRwxucpLbXMt%2BFs4XPNa1OgrWKV1xw2ybHyJNh2vCw4YHWExBtK5lADXPVQv1m9%2B6KFFdU4g3RnYj07Szrs4I8G9bqu2NISZFiaflbsXFEuKyhh5D3BUEYUSY8KH8N2GNO4Wba10LsM8ZhjZHb58NhfhCywPfXYDApbbFxlqIi6z4z9cdjEPdWtQk6v%2FwpNKLFe6LAgeQxvkTmgzILhLLmhQjyrl2pUkxrh4gn%2FL8MS0Ao93pmhH%2Fz74kIhh%2FP5lQeVPhvyNezb3Bp6othIZuDxECBt6lvW27OtQnrQtnCRMXJfAYHj7eFrUXTCm2pi%2BBjqkAQdFEo%2BUg1V08oyZGOrEOqQ4%2B5Ph4TimhdqBn6fdl4zbaDeRQZ%2B7LqtO8pTZJEb8an2%2FYfVUu6CmEUX563eNjjGHzc9ncSYyzAtm0LehGdWKIXKEBpSViM8uUieOStoExgBgypIE9reyxOJQHohAcDMVnzrx0W%2BCL0LziGRbgEErUD6rp%2FHncz0zxz9xYOQLTSolvOdXI%2Ffo9T7ob5okWR1fPsdU&X-Amz-Signature=7ff5298156be816e9fc5181a312702fb12e4e57155791b00cfd0808c00444828&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LLOR6DY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BgAVkW9bFxjcY9YQ5tDy4D%2Bs5AMOUr7eP33wks0BLKAIhAOBS%2Fj8wEQkD7s4cgHDVgYQw7CkcpWiNIK6Bdjcc1KuGKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyetpp9kWCeeVC2u50q3AOBv3Cwg%2B2IoVco%2BFqaeKBAcF%2BWO%2BS2f%2FJnFzdVv0ma5K2RuEdAxXaC19WCwKlLUZc1yuVUAal40UbJx%2BEQVL%2BL82uxlG7vvRySGrJpn1OREWbiv0mk2aEYnB7STgOGI1CNnxvhEckuREXmE8PuEmnRwTLKeiJ3XoT1PFc0l9u9flNQ6em6EU8YPJZHfpAPeExKl5GREwlQO%2BxZTHGvRb21ncDPJI0Byvm2bnjY5xXH4qtcf%2BFbCqmdd8%2BXb9VvMh023mgDG79smgaYcQbpbP%2BNNxwngevNXE00qbdMVt%2FERmVH4qfx9RS80T%2FadcvX9eNtbRwxucpLbXMt%2BFs4XPNa1OgrWKV1xw2ybHyJNh2vCw4YHWExBtK5lADXPVQv1m9%2B6KFFdU4g3RnYj07Szrs4I8G9bqu2NISZFiaflbsXFEuKyhh5D3BUEYUSY8KH8N2GNO4Wba10LsM8ZhjZHb58NhfhCywPfXYDApbbFxlqIi6z4z9cdjEPdWtQk6v%2FwpNKLFe6LAgeQxvkTmgzILhLLmhQjyrl2pUkxrh4gn%2FL8MS0Ao93pmhH%2Fz74kIhh%2FP5lQeVPhvyNezb3Bp6othIZuDxECBt6lvW27OtQnrQtnCRMXJfAYHj7eFrUXTCm2pi%2BBjqkAQdFEo%2BUg1V08oyZGOrEOqQ4%2B5Ph4TimhdqBn6fdl4zbaDeRQZ%2B7LqtO8pTZJEb8an2%2FYfVUu6CmEUX563eNjjGHzc9ncSYyzAtm0LehGdWKIXKEBpSViM8uUieOStoExgBgypIE9reyxOJQHohAcDMVnzrx0W%2BCL0LziGRbgEErUD6rp%2FHncz0zxz9xYOQLTSolvOdXI%2Ffo9T7ob5okWR1fPsdU&X-Amz-Signature=25601d7b69caf9df14e5a94f86c573c8c0848f02ec91f3db1c84ace694dc3dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LLOR6DY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BgAVkW9bFxjcY9YQ5tDy4D%2Bs5AMOUr7eP33wks0BLKAIhAOBS%2Fj8wEQkD7s4cgHDVgYQw7CkcpWiNIK6Bdjcc1KuGKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyetpp9kWCeeVC2u50q3AOBv3Cwg%2B2IoVco%2BFqaeKBAcF%2BWO%2BS2f%2FJnFzdVv0ma5K2RuEdAxXaC19WCwKlLUZc1yuVUAal40UbJx%2BEQVL%2BL82uxlG7vvRySGrJpn1OREWbiv0mk2aEYnB7STgOGI1CNnxvhEckuREXmE8PuEmnRwTLKeiJ3XoT1PFc0l9u9flNQ6em6EU8YPJZHfpAPeExKl5GREwlQO%2BxZTHGvRb21ncDPJI0Byvm2bnjY5xXH4qtcf%2BFbCqmdd8%2BXb9VvMh023mgDG79smgaYcQbpbP%2BNNxwngevNXE00qbdMVt%2FERmVH4qfx9RS80T%2FadcvX9eNtbRwxucpLbXMt%2BFs4XPNa1OgrWKV1xw2ybHyJNh2vCw4YHWExBtK5lADXPVQv1m9%2B6KFFdU4g3RnYj07Szrs4I8G9bqu2NISZFiaflbsXFEuKyhh5D3BUEYUSY8KH8N2GNO4Wba10LsM8ZhjZHb58NhfhCywPfXYDApbbFxlqIi6z4z9cdjEPdWtQk6v%2FwpNKLFe6LAgeQxvkTmgzILhLLmhQjyrl2pUkxrh4gn%2FL8MS0Ao93pmhH%2Fz74kIhh%2FP5lQeVPhvyNezb3Bp6othIZuDxECBt6lvW27OtQnrQtnCRMXJfAYHj7eFrUXTCm2pi%2BBjqkAQdFEo%2BUg1V08oyZGOrEOqQ4%2B5Ph4TimhdqBn6fdl4zbaDeRQZ%2B7LqtO8pTZJEb8an2%2FYfVUu6CmEUX563eNjjGHzc9ncSYyzAtm0LehGdWKIXKEBpSViM8uUieOStoExgBgypIE9reyxOJQHohAcDMVnzrx0W%2BCL0LziGRbgEErUD6rp%2FHncz0zxz9xYOQLTSolvOdXI%2Ffo9T7ob5okWR1fPsdU&X-Amz-Signature=58ed8c8fcb3c96bfdc8c7b7a1f946ea7fc7200d8109833e4866fe00277c99914&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LLOR6DY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BgAVkW9bFxjcY9YQ5tDy4D%2Bs5AMOUr7eP33wks0BLKAIhAOBS%2Fj8wEQkD7s4cgHDVgYQw7CkcpWiNIK6Bdjcc1KuGKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyetpp9kWCeeVC2u50q3AOBv3Cwg%2B2IoVco%2BFqaeKBAcF%2BWO%2BS2f%2FJnFzdVv0ma5K2RuEdAxXaC19WCwKlLUZc1yuVUAal40UbJx%2BEQVL%2BL82uxlG7vvRySGrJpn1OREWbiv0mk2aEYnB7STgOGI1CNnxvhEckuREXmE8PuEmnRwTLKeiJ3XoT1PFc0l9u9flNQ6em6EU8YPJZHfpAPeExKl5GREwlQO%2BxZTHGvRb21ncDPJI0Byvm2bnjY5xXH4qtcf%2BFbCqmdd8%2BXb9VvMh023mgDG79smgaYcQbpbP%2BNNxwngevNXE00qbdMVt%2FERmVH4qfx9RS80T%2FadcvX9eNtbRwxucpLbXMt%2BFs4XPNa1OgrWKV1xw2ybHyJNh2vCw4YHWExBtK5lADXPVQv1m9%2B6KFFdU4g3RnYj07Szrs4I8G9bqu2NISZFiaflbsXFEuKyhh5D3BUEYUSY8KH8N2GNO4Wba10LsM8ZhjZHb58NhfhCywPfXYDApbbFxlqIi6z4z9cdjEPdWtQk6v%2FwpNKLFe6LAgeQxvkTmgzILhLLmhQjyrl2pUkxrh4gn%2FL8MS0Ao93pmhH%2Fz74kIhh%2FP5lQeVPhvyNezb3Bp6othIZuDxECBt6lvW27OtQnrQtnCRMXJfAYHj7eFrUXTCm2pi%2BBjqkAQdFEo%2BUg1V08oyZGOrEOqQ4%2B5Ph4TimhdqBn6fdl4zbaDeRQZ%2B7LqtO8pTZJEb8an2%2FYfVUu6CmEUX563eNjjGHzc9ncSYyzAtm0LehGdWKIXKEBpSViM8uUieOStoExgBgypIE9reyxOJQHohAcDMVnzrx0W%2BCL0LziGRbgEErUD6rp%2FHncz0zxz9xYOQLTSolvOdXI%2Ffo9T7ob5okWR1fPsdU&X-Amz-Signature=dc9a6653f70f131c9416160324bc08aafc32e75c66448ee72d777633b4b28595&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
