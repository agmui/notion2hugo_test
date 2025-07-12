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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3D3NHX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9ZTDIjnOTw1lo2Ih5o9nUnpxytcyRyDX6dHYqbD%2FYXwIgJwxUHk10U4nA5O0YxPm6jt8jgrVQWpqQHx9ZmYkF%2F2wqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEygNliRv7VJYepcircA%2FT7RLKANtjfNEycSxwMNAzN1fTe4YRTXz3pKS0YQA1J3ei9PO7d8ljw1510MVoSZqgNwDK4gKgfGyMngp8Q%2BBOsZlECTc83le0ZlrnJC%2FsakIh7ff5Ge9i0GR7A8jxwyxijG%2BrUYuCQnp4zvnDOvxct4aNEcZhzSL6qnbNz79xljV1Qrl5XkDKDWg7aYxJhM9kuQK4CjeYuD5xU8oN1tQOvlRt7IswPBR0Cj%2BkEI9LKYmpRD0JYPUZ%2F4l9nk4xfMWltieS03mPNzX6ovMinCkfSeRYMinrnBCIqW%2FOLhiruwbka7ZtX%2BSVC3ozwpClZatVCtevvl%2BjTmVbf9yMKxjvaSi3%2BBviyEp9Ck3kAzcQOfNZL8l%2FN8%2Fm74yUHuZi9fWOZc3lmIuZNdS%2FmuOIENz0GvKwQq96gWTN3hExnnoXpmnmm2XdcHJ%2BWTl6dQdHi1yk7n6ElwcxQueNI%2FRtsRuccYSiy5c6LWOr2lE3QiJ%2FRv%2Bk%2BsTOs7qczyjj%2BH40y4jW%2Bm59fAE1GtHMzV%2BQx9QypbEzKWd5VybjnVDgfS%2FQbk18F6qeVg5ev0mHHa97lcTM4cAq%2FRFA1r7eFfY%2FNhBlhLKJP7YWQZCA9KWTnc6gYEWUYOsmTzrgg698HMIm1xsMGOqUBmviHCFSf0ZsyG7b%2F40twh1vLx%2BZ2E8QJ1sYeNcNJIBv6MA8w90TGD8PNN9XNh5kcGfWAu%2FCqgFXMq2dqI97AXKj6Ln9ZncXIVHcLQZ4Zfms0UXTTEKaUWKA8CmuXMAFbvZXryyayPtco0W15GkrvTZ6yncgfq6OJQopbW%2BW7W2QdLvrbWJ1Q64N3fWJG2lTKhxRa72UGqidYii%2FdR88f09NT1t7x&X-Amz-Signature=cb4a44795d2983a1a83eb79b7140d53db37ba21d3c82779164a7634b884efd8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3D3NHX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9ZTDIjnOTw1lo2Ih5o9nUnpxytcyRyDX6dHYqbD%2FYXwIgJwxUHk10U4nA5O0YxPm6jt8jgrVQWpqQHx9ZmYkF%2F2wqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEygNliRv7VJYepcircA%2FT7RLKANtjfNEycSxwMNAzN1fTe4YRTXz3pKS0YQA1J3ei9PO7d8ljw1510MVoSZqgNwDK4gKgfGyMngp8Q%2BBOsZlECTc83le0ZlrnJC%2FsakIh7ff5Ge9i0GR7A8jxwyxijG%2BrUYuCQnp4zvnDOvxct4aNEcZhzSL6qnbNz79xljV1Qrl5XkDKDWg7aYxJhM9kuQK4CjeYuD5xU8oN1tQOvlRt7IswPBR0Cj%2BkEI9LKYmpRD0JYPUZ%2F4l9nk4xfMWltieS03mPNzX6ovMinCkfSeRYMinrnBCIqW%2FOLhiruwbka7ZtX%2BSVC3ozwpClZatVCtevvl%2BjTmVbf9yMKxjvaSi3%2BBviyEp9Ck3kAzcQOfNZL8l%2FN8%2Fm74yUHuZi9fWOZc3lmIuZNdS%2FmuOIENz0GvKwQq96gWTN3hExnnoXpmnmm2XdcHJ%2BWTl6dQdHi1yk7n6ElwcxQueNI%2FRtsRuccYSiy5c6LWOr2lE3QiJ%2FRv%2Bk%2BsTOs7qczyjj%2BH40y4jW%2Bm59fAE1GtHMzV%2BQx9QypbEzKWd5VybjnVDgfS%2FQbk18F6qeVg5ev0mHHa97lcTM4cAq%2FRFA1r7eFfY%2FNhBlhLKJP7YWQZCA9KWTnc6gYEWUYOsmTzrgg698HMIm1xsMGOqUBmviHCFSf0ZsyG7b%2F40twh1vLx%2BZ2E8QJ1sYeNcNJIBv6MA8w90TGD8PNN9XNh5kcGfWAu%2FCqgFXMq2dqI97AXKj6Ln9ZncXIVHcLQZ4Zfms0UXTTEKaUWKA8CmuXMAFbvZXryyayPtco0W15GkrvTZ6yncgfq6OJQopbW%2BW7W2QdLvrbWJ1Q64N3fWJG2lTKhxRa72UGqidYii%2FdR88f09NT1t7x&X-Amz-Signature=e3f91bd31dc195574caeb8ef73918f2543edbb2ea13513639c1d514cf0f50fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3D3NHX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9ZTDIjnOTw1lo2Ih5o9nUnpxytcyRyDX6dHYqbD%2FYXwIgJwxUHk10U4nA5O0YxPm6jt8jgrVQWpqQHx9ZmYkF%2F2wqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEygNliRv7VJYepcircA%2FT7RLKANtjfNEycSxwMNAzN1fTe4YRTXz3pKS0YQA1J3ei9PO7d8ljw1510MVoSZqgNwDK4gKgfGyMngp8Q%2BBOsZlECTc83le0ZlrnJC%2FsakIh7ff5Ge9i0GR7A8jxwyxijG%2BrUYuCQnp4zvnDOvxct4aNEcZhzSL6qnbNz79xljV1Qrl5XkDKDWg7aYxJhM9kuQK4CjeYuD5xU8oN1tQOvlRt7IswPBR0Cj%2BkEI9LKYmpRD0JYPUZ%2F4l9nk4xfMWltieS03mPNzX6ovMinCkfSeRYMinrnBCIqW%2FOLhiruwbka7ZtX%2BSVC3ozwpClZatVCtevvl%2BjTmVbf9yMKxjvaSi3%2BBviyEp9Ck3kAzcQOfNZL8l%2FN8%2Fm74yUHuZi9fWOZc3lmIuZNdS%2FmuOIENz0GvKwQq96gWTN3hExnnoXpmnmm2XdcHJ%2BWTl6dQdHi1yk7n6ElwcxQueNI%2FRtsRuccYSiy5c6LWOr2lE3QiJ%2FRv%2Bk%2BsTOs7qczyjj%2BH40y4jW%2Bm59fAE1GtHMzV%2BQx9QypbEzKWd5VybjnVDgfS%2FQbk18F6qeVg5ev0mHHa97lcTM4cAq%2FRFA1r7eFfY%2FNhBlhLKJP7YWQZCA9KWTnc6gYEWUYOsmTzrgg698HMIm1xsMGOqUBmviHCFSf0ZsyG7b%2F40twh1vLx%2BZ2E8QJ1sYeNcNJIBv6MA8w90TGD8PNN9XNh5kcGfWAu%2FCqgFXMq2dqI97AXKj6Ln9ZncXIVHcLQZ4Zfms0UXTTEKaUWKA8CmuXMAFbvZXryyayPtco0W15GkrvTZ6yncgfq6OJQopbW%2BW7W2QdLvrbWJ1Q64N3fWJG2lTKhxRa72UGqidYii%2FdR88f09NT1t7x&X-Amz-Signature=c2cebd11cb2b7572b2a20a10fdda01a6a0bd11aa92bd2cc5348f717517ec1346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3D3NHX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9ZTDIjnOTw1lo2Ih5o9nUnpxytcyRyDX6dHYqbD%2FYXwIgJwxUHk10U4nA5O0YxPm6jt8jgrVQWpqQHx9ZmYkF%2F2wqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEygNliRv7VJYepcircA%2FT7RLKANtjfNEycSxwMNAzN1fTe4YRTXz3pKS0YQA1J3ei9PO7d8ljw1510MVoSZqgNwDK4gKgfGyMngp8Q%2BBOsZlECTc83le0ZlrnJC%2FsakIh7ff5Ge9i0GR7A8jxwyxijG%2BrUYuCQnp4zvnDOvxct4aNEcZhzSL6qnbNz79xljV1Qrl5XkDKDWg7aYxJhM9kuQK4CjeYuD5xU8oN1tQOvlRt7IswPBR0Cj%2BkEI9LKYmpRD0JYPUZ%2F4l9nk4xfMWltieS03mPNzX6ovMinCkfSeRYMinrnBCIqW%2FOLhiruwbka7ZtX%2BSVC3ozwpClZatVCtevvl%2BjTmVbf9yMKxjvaSi3%2BBviyEp9Ck3kAzcQOfNZL8l%2FN8%2Fm74yUHuZi9fWOZc3lmIuZNdS%2FmuOIENz0GvKwQq96gWTN3hExnnoXpmnmm2XdcHJ%2BWTl6dQdHi1yk7n6ElwcxQueNI%2FRtsRuccYSiy5c6LWOr2lE3QiJ%2FRv%2Bk%2BsTOs7qczyjj%2BH40y4jW%2Bm59fAE1GtHMzV%2BQx9QypbEzKWd5VybjnVDgfS%2FQbk18F6qeVg5ev0mHHa97lcTM4cAq%2FRFA1r7eFfY%2FNhBlhLKJP7YWQZCA9KWTnc6gYEWUYOsmTzrgg698HMIm1xsMGOqUBmviHCFSf0ZsyG7b%2F40twh1vLx%2BZ2E8QJ1sYeNcNJIBv6MA8w90TGD8PNN9XNh5kcGfWAu%2FCqgFXMq2dqI97AXKj6Ln9ZncXIVHcLQZ4Zfms0UXTTEKaUWKA8CmuXMAFbvZXryyayPtco0W15GkrvTZ6yncgfq6OJQopbW%2BW7W2QdLvrbWJ1Q64N3fWJG2lTKhxRa72UGqidYii%2FdR88f09NT1t7x&X-Amz-Signature=e351f130a55414ff87bca37492d1f5b839b113076f311bd3e6e5b140865b8f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3D3NHX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9ZTDIjnOTw1lo2Ih5o9nUnpxytcyRyDX6dHYqbD%2FYXwIgJwxUHk10U4nA5O0YxPm6jt8jgrVQWpqQHx9ZmYkF%2F2wqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEygNliRv7VJYepcircA%2FT7RLKANtjfNEycSxwMNAzN1fTe4YRTXz3pKS0YQA1J3ei9PO7d8ljw1510MVoSZqgNwDK4gKgfGyMngp8Q%2BBOsZlECTc83le0ZlrnJC%2FsakIh7ff5Ge9i0GR7A8jxwyxijG%2BrUYuCQnp4zvnDOvxct4aNEcZhzSL6qnbNz79xljV1Qrl5XkDKDWg7aYxJhM9kuQK4CjeYuD5xU8oN1tQOvlRt7IswPBR0Cj%2BkEI9LKYmpRD0JYPUZ%2F4l9nk4xfMWltieS03mPNzX6ovMinCkfSeRYMinrnBCIqW%2FOLhiruwbka7ZtX%2BSVC3ozwpClZatVCtevvl%2BjTmVbf9yMKxjvaSi3%2BBviyEp9Ck3kAzcQOfNZL8l%2FN8%2Fm74yUHuZi9fWOZc3lmIuZNdS%2FmuOIENz0GvKwQq96gWTN3hExnnoXpmnmm2XdcHJ%2BWTl6dQdHi1yk7n6ElwcxQueNI%2FRtsRuccYSiy5c6LWOr2lE3QiJ%2FRv%2Bk%2BsTOs7qczyjj%2BH40y4jW%2Bm59fAE1GtHMzV%2BQx9QypbEzKWd5VybjnVDgfS%2FQbk18F6qeVg5ev0mHHa97lcTM4cAq%2FRFA1r7eFfY%2FNhBlhLKJP7YWQZCA9KWTnc6gYEWUYOsmTzrgg698HMIm1xsMGOqUBmviHCFSf0ZsyG7b%2F40twh1vLx%2BZ2E8QJ1sYeNcNJIBv6MA8w90TGD8PNN9XNh5kcGfWAu%2FCqgFXMq2dqI97AXKj6Ln9ZncXIVHcLQZ4Zfms0UXTTEKaUWKA8CmuXMAFbvZXryyayPtco0W15GkrvTZ6yncgfq6OJQopbW%2BW7W2QdLvrbWJ1Q64N3fWJG2lTKhxRa72UGqidYii%2FdR88f09NT1t7x&X-Amz-Signature=42dd025fea9833e448fc5d25cfdd4b59f70146b3dfe82ebc3b8b3d3a9addcd8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
