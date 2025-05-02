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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRHGLVRF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDbT2FempnTj4uSiqPmgY9eU19yeFUx6FWsNUiz4wksxAIhAMu%2B7EpqvYkh%2BOC1VJLMVnqiaoPnKJh4NdpTv%2BXzPKWFKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHpmSE9%2BkcG1nKaXEq3AMrZ7x35Vier%2B%2B9hh6G7RG%2FqBXfL7P1Z8RM9NP9A6SztTb0KE5MzqtXqyYfo0dsOPfo1S%2Bu5ABTDd4YF%2Bwb7%2Fx2jpYibiVG8lz0qE9a9p9CjgzvkNTVSy%2Fx8DuQmKKhdtKFUofnAEIkAIUuJ7zyEUxL7g7JRaX93sgycNRCHyGjWO%2BiJKqelYjFPBBXhtQAyb9hVNRlnj85hdhYc7C0iYEUh2g%2FlGOem6YXASA0Kp86MI9%2FyxdJEGAQWw1DY8k5MNMPOm1OCaG619MMMsC1ZNsO%2FCwnGpb4lr2EuLDZWLvf%2BVZu5Mj8EXNFTbLunP64uoQmMGny85nu%2Bw3trdPg1ZbB6iPUHl9kkAMgMIMhsFSu0jyYyrate9Vx01xzx5bDMN96woPj1vehe1ONE3uETHN5f0sOzlBIDyGVFZGOmMuCJTnYIywS6HvRIU3mSa0Dr50QAWylocyA0KoRmzWtQ5TB6IiZEmKMINgwnbkohCuQF%2BwE4m5z89XxfcsYDFWfl6dt%2BFbguvPgVskuyp6dKn09lwa3EZ2HbgsHZsQzPtwKgMuDlzYUglBtYOV1jPgfjueJ7GmKaAgSGcxEm6fZLiW%2BgmRMQPbQU80HC7GMEHWn%2Bqc%2FKRDyANkq%2Blu3ZDC1ydPABjqkAbt8Z3TwR4SQpaPbEd5IkxStR6r9bKtSFMxaInL5F7qKGC9n1oFRGFPfpA8S2huOvEKAWqqs4kssWbdd5%2FPKuq8Fx6EWCtAYWt3fDrAx9IGdWSXcZSlDz3zFd4iPWxv2YFsEkIajCBnxr1hI8gVT47joAFP1r%2FHeT3Cy4AzTeGs69E8wRzzh7eQLXUE6DnxlA%2B2eM3GR%2BcAWdA%2BcIsnA%2FiIyYs1V&X-Amz-Signature=2dbba0f075405aa17277feae7598c7aad765d2dbbf9bb0f79499a6285d26e3c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRHGLVRF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDbT2FempnTj4uSiqPmgY9eU19yeFUx6FWsNUiz4wksxAIhAMu%2B7EpqvYkh%2BOC1VJLMVnqiaoPnKJh4NdpTv%2BXzPKWFKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHpmSE9%2BkcG1nKaXEq3AMrZ7x35Vier%2B%2B9hh6G7RG%2FqBXfL7P1Z8RM9NP9A6SztTb0KE5MzqtXqyYfo0dsOPfo1S%2Bu5ABTDd4YF%2Bwb7%2Fx2jpYibiVG8lz0qE9a9p9CjgzvkNTVSy%2Fx8DuQmKKhdtKFUofnAEIkAIUuJ7zyEUxL7g7JRaX93sgycNRCHyGjWO%2BiJKqelYjFPBBXhtQAyb9hVNRlnj85hdhYc7C0iYEUh2g%2FlGOem6YXASA0Kp86MI9%2FyxdJEGAQWw1DY8k5MNMPOm1OCaG619MMMsC1ZNsO%2FCwnGpb4lr2EuLDZWLvf%2BVZu5Mj8EXNFTbLunP64uoQmMGny85nu%2Bw3trdPg1ZbB6iPUHl9kkAMgMIMhsFSu0jyYyrate9Vx01xzx5bDMN96woPj1vehe1ONE3uETHN5f0sOzlBIDyGVFZGOmMuCJTnYIywS6HvRIU3mSa0Dr50QAWylocyA0KoRmzWtQ5TB6IiZEmKMINgwnbkohCuQF%2BwE4m5z89XxfcsYDFWfl6dt%2BFbguvPgVskuyp6dKn09lwa3EZ2HbgsHZsQzPtwKgMuDlzYUglBtYOV1jPgfjueJ7GmKaAgSGcxEm6fZLiW%2BgmRMQPbQU80HC7GMEHWn%2Bqc%2FKRDyANkq%2Blu3ZDC1ydPABjqkAbt8Z3TwR4SQpaPbEd5IkxStR6r9bKtSFMxaInL5F7qKGC9n1oFRGFPfpA8S2huOvEKAWqqs4kssWbdd5%2FPKuq8Fx6EWCtAYWt3fDrAx9IGdWSXcZSlDz3zFd4iPWxv2YFsEkIajCBnxr1hI8gVT47joAFP1r%2FHeT3Cy4AzTeGs69E8wRzzh7eQLXUE6DnxlA%2B2eM3GR%2BcAWdA%2BcIsnA%2FiIyYs1V&X-Amz-Signature=0daf950345dd97cf057feb012e3792c4dd9a03e5be9ee0c1b691bce43b4fa5c3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRHGLVRF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDbT2FempnTj4uSiqPmgY9eU19yeFUx6FWsNUiz4wksxAIhAMu%2B7EpqvYkh%2BOC1VJLMVnqiaoPnKJh4NdpTv%2BXzPKWFKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHpmSE9%2BkcG1nKaXEq3AMrZ7x35Vier%2B%2B9hh6G7RG%2FqBXfL7P1Z8RM9NP9A6SztTb0KE5MzqtXqyYfo0dsOPfo1S%2Bu5ABTDd4YF%2Bwb7%2Fx2jpYibiVG8lz0qE9a9p9CjgzvkNTVSy%2Fx8DuQmKKhdtKFUofnAEIkAIUuJ7zyEUxL7g7JRaX93sgycNRCHyGjWO%2BiJKqelYjFPBBXhtQAyb9hVNRlnj85hdhYc7C0iYEUh2g%2FlGOem6YXASA0Kp86MI9%2FyxdJEGAQWw1DY8k5MNMPOm1OCaG619MMMsC1ZNsO%2FCwnGpb4lr2EuLDZWLvf%2BVZu5Mj8EXNFTbLunP64uoQmMGny85nu%2Bw3trdPg1ZbB6iPUHl9kkAMgMIMhsFSu0jyYyrate9Vx01xzx5bDMN96woPj1vehe1ONE3uETHN5f0sOzlBIDyGVFZGOmMuCJTnYIywS6HvRIU3mSa0Dr50QAWylocyA0KoRmzWtQ5TB6IiZEmKMINgwnbkohCuQF%2BwE4m5z89XxfcsYDFWfl6dt%2BFbguvPgVskuyp6dKn09lwa3EZ2HbgsHZsQzPtwKgMuDlzYUglBtYOV1jPgfjueJ7GmKaAgSGcxEm6fZLiW%2BgmRMQPbQU80HC7GMEHWn%2Bqc%2FKRDyANkq%2Blu3ZDC1ydPABjqkAbt8Z3TwR4SQpaPbEd5IkxStR6r9bKtSFMxaInL5F7qKGC9n1oFRGFPfpA8S2huOvEKAWqqs4kssWbdd5%2FPKuq8Fx6EWCtAYWt3fDrAx9IGdWSXcZSlDz3zFd4iPWxv2YFsEkIajCBnxr1hI8gVT47joAFP1r%2FHeT3Cy4AzTeGs69E8wRzzh7eQLXUE6DnxlA%2B2eM3GR%2BcAWdA%2BcIsnA%2FiIyYs1V&X-Amz-Signature=ee29bef55c5794b802cd0335a3b20a1b467d38bd32b54567e087e2107638210a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRHGLVRF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDbT2FempnTj4uSiqPmgY9eU19yeFUx6FWsNUiz4wksxAIhAMu%2B7EpqvYkh%2BOC1VJLMVnqiaoPnKJh4NdpTv%2BXzPKWFKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHpmSE9%2BkcG1nKaXEq3AMrZ7x35Vier%2B%2B9hh6G7RG%2FqBXfL7P1Z8RM9NP9A6SztTb0KE5MzqtXqyYfo0dsOPfo1S%2Bu5ABTDd4YF%2Bwb7%2Fx2jpYibiVG8lz0qE9a9p9CjgzvkNTVSy%2Fx8DuQmKKhdtKFUofnAEIkAIUuJ7zyEUxL7g7JRaX93sgycNRCHyGjWO%2BiJKqelYjFPBBXhtQAyb9hVNRlnj85hdhYc7C0iYEUh2g%2FlGOem6YXASA0Kp86MI9%2FyxdJEGAQWw1DY8k5MNMPOm1OCaG619MMMsC1ZNsO%2FCwnGpb4lr2EuLDZWLvf%2BVZu5Mj8EXNFTbLunP64uoQmMGny85nu%2Bw3trdPg1ZbB6iPUHl9kkAMgMIMhsFSu0jyYyrate9Vx01xzx5bDMN96woPj1vehe1ONE3uETHN5f0sOzlBIDyGVFZGOmMuCJTnYIywS6HvRIU3mSa0Dr50QAWylocyA0KoRmzWtQ5TB6IiZEmKMINgwnbkohCuQF%2BwE4m5z89XxfcsYDFWfl6dt%2BFbguvPgVskuyp6dKn09lwa3EZ2HbgsHZsQzPtwKgMuDlzYUglBtYOV1jPgfjueJ7GmKaAgSGcxEm6fZLiW%2BgmRMQPbQU80HC7GMEHWn%2Bqc%2FKRDyANkq%2Blu3ZDC1ydPABjqkAbt8Z3TwR4SQpaPbEd5IkxStR6r9bKtSFMxaInL5F7qKGC9n1oFRGFPfpA8S2huOvEKAWqqs4kssWbdd5%2FPKuq8Fx6EWCtAYWt3fDrAx9IGdWSXcZSlDz3zFd4iPWxv2YFsEkIajCBnxr1hI8gVT47joAFP1r%2FHeT3Cy4AzTeGs69E8wRzzh7eQLXUE6DnxlA%2B2eM3GR%2BcAWdA%2BcIsnA%2FiIyYs1V&X-Amz-Signature=0e5a86b82a501669da24dec33d09fff5fd744fec7e0cb4cece3e11b8a1d5bbc0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRHGLVRF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDbT2FempnTj4uSiqPmgY9eU19yeFUx6FWsNUiz4wksxAIhAMu%2B7EpqvYkh%2BOC1VJLMVnqiaoPnKJh4NdpTv%2BXzPKWFKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHpmSE9%2BkcG1nKaXEq3AMrZ7x35Vier%2B%2B9hh6G7RG%2FqBXfL7P1Z8RM9NP9A6SztTb0KE5MzqtXqyYfo0dsOPfo1S%2Bu5ABTDd4YF%2Bwb7%2Fx2jpYibiVG8lz0qE9a9p9CjgzvkNTVSy%2Fx8DuQmKKhdtKFUofnAEIkAIUuJ7zyEUxL7g7JRaX93sgycNRCHyGjWO%2BiJKqelYjFPBBXhtQAyb9hVNRlnj85hdhYc7C0iYEUh2g%2FlGOem6YXASA0Kp86MI9%2FyxdJEGAQWw1DY8k5MNMPOm1OCaG619MMMsC1ZNsO%2FCwnGpb4lr2EuLDZWLvf%2BVZu5Mj8EXNFTbLunP64uoQmMGny85nu%2Bw3trdPg1ZbB6iPUHl9kkAMgMIMhsFSu0jyYyrate9Vx01xzx5bDMN96woPj1vehe1ONE3uETHN5f0sOzlBIDyGVFZGOmMuCJTnYIywS6HvRIU3mSa0Dr50QAWylocyA0KoRmzWtQ5TB6IiZEmKMINgwnbkohCuQF%2BwE4m5z89XxfcsYDFWfl6dt%2BFbguvPgVskuyp6dKn09lwa3EZ2HbgsHZsQzPtwKgMuDlzYUglBtYOV1jPgfjueJ7GmKaAgSGcxEm6fZLiW%2BgmRMQPbQU80HC7GMEHWn%2Bqc%2FKRDyANkq%2Blu3ZDC1ydPABjqkAbt8Z3TwR4SQpaPbEd5IkxStR6r9bKtSFMxaInL5F7qKGC9n1oFRGFPfpA8S2huOvEKAWqqs4kssWbdd5%2FPKuq8Fx6EWCtAYWt3fDrAx9IGdWSXcZSlDz3zFd4iPWxv2YFsEkIajCBnxr1hI8gVT47joAFP1r%2FHeT3Cy4AzTeGs69E8wRzzh7eQLXUE6DnxlA%2B2eM3GR%2BcAWdA%2BcIsnA%2FiIyYs1V&X-Amz-Signature=cb2b1f63aaa7f4ce1bb33d3f91b30cfeb1780aff8c08fbd010c03f289654d64d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
