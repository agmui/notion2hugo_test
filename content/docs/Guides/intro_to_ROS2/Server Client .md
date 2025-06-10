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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLHB5ZR%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6Gk47XcDmIa32NGJpeh8yXArHikv45Qzq%2BM%2B4QPzPmwIhAJRbakTI9PKLwU92IoSPtd7j5V7zfffAaYozzYrltl5DKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyko%2BMUzMa6i4p59bwq3AMaWkXeCBliN9snk8rs%2BeRy%2Br1bolEjBDqVaK8l2gv1w99vfFi3htedQ9hbKY50cuWMbLs6Usd%2BxKkOh0zViBBPf6im%2FmaOlkGgQT3CHC8wnNovNmS2LLS0gKj%2BjnU6T2AVo4eaVSctTs1ZYtXW7AfNt6k%2Fl1YQ6ZJURMfZfjtTyLQtygfBpXB5nuqHrXtOAOE0SUGTOzWmjhaZ2Tsq5exq3bW240OgFJdGmuKlUTVgwudMI5UspQqwXRAKwCxFn6WXXyE04QM9YgClYrON2Q%2BWp%2F3swXjf95BkRoC5t4ZBM3V9Y1Ejs%2F7WlDdh3CTPFyItt1mBagNS2cDQLm4KLy5Th8u5zwKqLHEIk%2Bg97AddnUtWtisVz%2FM48WD4rAHWNOyQDz5duoEo9Mn%2Fw3LicFQOrjU7iP4M6ZKikYV3X0PFLJJ9oXxLWS1Qrg%2FSNPax714CsUHJ41dpo1pXFfXoxVYeeKlSptdUF6QbyWk5QNKZl0b%2FmvFg4c7cFwAIbAYatbfRozmmW9sqWslFwJ1hQCcQa4iphkNNUyG7f4QmaJYDxNcZBvACU2WON78vQwI4H0uEuTUUTr4%2BfFCTaiQT5TuOVo7JF0IAQ9mWN%2B363sulAEaggEbgaXjVwF2emjDen57CBjqkAX%2Ff2Qxu%2B1FIsX3ZsYUK9MOxZ2yxLxxNtHfDF1gMjE5Txd1CIHLtVxVFefGWPNDS3l%2Bnd6B2U5jLLUQvMjWand7ok4CQhSUzbGA7gcOL%2FpbKSIgw040N4kCaaqVawIuOPRUa5Gd5gTKtMQcanqD%2F4luB5cPd2jO8MQ9cRJ4WXpPlAlszQEMfl6bvl3exKRCQM2VtItQrWMGdscjHxgpeBjqHDakL&X-Amz-Signature=b980f067ce3d2e2d4ecf846eab3e1fc2962b614c6c12afc741fe7caa2a7b97ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLHB5ZR%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6Gk47XcDmIa32NGJpeh8yXArHikv45Qzq%2BM%2B4QPzPmwIhAJRbakTI9PKLwU92IoSPtd7j5V7zfffAaYozzYrltl5DKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyko%2BMUzMa6i4p59bwq3AMaWkXeCBliN9snk8rs%2BeRy%2Br1bolEjBDqVaK8l2gv1w99vfFi3htedQ9hbKY50cuWMbLs6Usd%2BxKkOh0zViBBPf6im%2FmaOlkGgQT3CHC8wnNovNmS2LLS0gKj%2BjnU6T2AVo4eaVSctTs1ZYtXW7AfNt6k%2Fl1YQ6ZJURMfZfjtTyLQtygfBpXB5nuqHrXtOAOE0SUGTOzWmjhaZ2Tsq5exq3bW240OgFJdGmuKlUTVgwudMI5UspQqwXRAKwCxFn6WXXyE04QM9YgClYrON2Q%2BWp%2F3swXjf95BkRoC5t4ZBM3V9Y1Ejs%2F7WlDdh3CTPFyItt1mBagNS2cDQLm4KLy5Th8u5zwKqLHEIk%2Bg97AddnUtWtisVz%2FM48WD4rAHWNOyQDz5duoEo9Mn%2Fw3LicFQOrjU7iP4M6ZKikYV3X0PFLJJ9oXxLWS1Qrg%2FSNPax714CsUHJ41dpo1pXFfXoxVYeeKlSptdUF6QbyWk5QNKZl0b%2FmvFg4c7cFwAIbAYatbfRozmmW9sqWslFwJ1hQCcQa4iphkNNUyG7f4QmaJYDxNcZBvACU2WON78vQwI4H0uEuTUUTr4%2BfFCTaiQT5TuOVo7JF0IAQ9mWN%2B363sulAEaggEbgaXjVwF2emjDen57CBjqkAX%2Ff2Qxu%2B1FIsX3ZsYUK9MOxZ2yxLxxNtHfDF1gMjE5Txd1CIHLtVxVFefGWPNDS3l%2Bnd6B2U5jLLUQvMjWand7ok4CQhSUzbGA7gcOL%2FpbKSIgw040N4kCaaqVawIuOPRUa5Gd5gTKtMQcanqD%2F4luB5cPd2jO8MQ9cRJ4WXpPlAlszQEMfl6bvl3exKRCQM2VtItQrWMGdscjHxgpeBjqHDakL&X-Amz-Signature=2d8e0582cf8c5a390665251233c82e3c50113116879f405b50c265675241b356&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLHB5ZR%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6Gk47XcDmIa32NGJpeh8yXArHikv45Qzq%2BM%2B4QPzPmwIhAJRbakTI9PKLwU92IoSPtd7j5V7zfffAaYozzYrltl5DKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyko%2BMUzMa6i4p59bwq3AMaWkXeCBliN9snk8rs%2BeRy%2Br1bolEjBDqVaK8l2gv1w99vfFi3htedQ9hbKY50cuWMbLs6Usd%2BxKkOh0zViBBPf6im%2FmaOlkGgQT3CHC8wnNovNmS2LLS0gKj%2BjnU6T2AVo4eaVSctTs1ZYtXW7AfNt6k%2Fl1YQ6ZJURMfZfjtTyLQtygfBpXB5nuqHrXtOAOE0SUGTOzWmjhaZ2Tsq5exq3bW240OgFJdGmuKlUTVgwudMI5UspQqwXRAKwCxFn6WXXyE04QM9YgClYrON2Q%2BWp%2F3swXjf95BkRoC5t4ZBM3V9Y1Ejs%2F7WlDdh3CTPFyItt1mBagNS2cDQLm4KLy5Th8u5zwKqLHEIk%2Bg97AddnUtWtisVz%2FM48WD4rAHWNOyQDz5duoEo9Mn%2Fw3LicFQOrjU7iP4M6ZKikYV3X0PFLJJ9oXxLWS1Qrg%2FSNPax714CsUHJ41dpo1pXFfXoxVYeeKlSptdUF6QbyWk5QNKZl0b%2FmvFg4c7cFwAIbAYatbfRozmmW9sqWslFwJ1hQCcQa4iphkNNUyG7f4QmaJYDxNcZBvACU2WON78vQwI4H0uEuTUUTr4%2BfFCTaiQT5TuOVo7JF0IAQ9mWN%2B363sulAEaggEbgaXjVwF2emjDen57CBjqkAX%2Ff2Qxu%2B1FIsX3ZsYUK9MOxZ2yxLxxNtHfDF1gMjE5Txd1CIHLtVxVFefGWPNDS3l%2Bnd6B2U5jLLUQvMjWand7ok4CQhSUzbGA7gcOL%2FpbKSIgw040N4kCaaqVawIuOPRUa5Gd5gTKtMQcanqD%2F4luB5cPd2jO8MQ9cRJ4WXpPlAlszQEMfl6bvl3exKRCQM2VtItQrWMGdscjHxgpeBjqHDakL&X-Amz-Signature=87e33f52bb2ce3aa95da003befc1730cd0c4ba1dcf3a3fd8624edc3ef6c61efc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLHB5ZR%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6Gk47XcDmIa32NGJpeh8yXArHikv45Qzq%2BM%2B4QPzPmwIhAJRbakTI9PKLwU92IoSPtd7j5V7zfffAaYozzYrltl5DKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyko%2BMUzMa6i4p59bwq3AMaWkXeCBliN9snk8rs%2BeRy%2Br1bolEjBDqVaK8l2gv1w99vfFi3htedQ9hbKY50cuWMbLs6Usd%2BxKkOh0zViBBPf6im%2FmaOlkGgQT3CHC8wnNovNmS2LLS0gKj%2BjnU6T2AVo4eaVSctTs1ZYtXW7AfNt6k%2Fl1YQ6ZJURMfZfjtTyLQtygfBpXB5nuqHrXtOAOE0SUGTOzWmjhaZ2Tsq5exq3bW240OgFJdGmuKlUTVgwudMI5UspQqwXRAKwCxFn6WXXyE04QM9YgClYrON2Q%2BWp%2F3swXjf95BkRoC5t4ZBM3V9Y1Ejs%2F7WlDdh3CTPFyItt1mBagNS2cDQLm4KLy5Th8u5zwKqLHEIk%2Bg97AddnUtWtisVz%2FM48WD4rAHWNOyQDz5duoEo9Mn%2Fw3LicFQOrjU7iP4M6ZKikYV3X0PFLJJ9oXxLWS1Qrg%2FSNPax714CsUHJ41dpo1pXFfXoxVYeeKlSptdUF6QbyWk5QNKZl0b%2FmvFg4c7cFwAIbAYatbfRozmmW9sqWslFwJ1hQCcQa4iphkNNUyG7f4QmaJYDxNcZBvACU2WON78vQwI4H0uEuTUUTr4%2BfFCTaiQT5TuOVo7JF0IAQ9mWN%2B363sulAEaggEbgaXjVwF2emjDen57CBjqkAX%2Ff2Qxu%2B1FIsX3ZsYUK9MOxZ2yxLxxNtHfDF1gMjE5Txd1CIHLtVxVFefGWPNDS3l%2Bnd6B2U5jLLUQvMjWand7ok4CQhSUzbGA7gcOL%2FpbKSIgw040N4kCaaqVawIuOPRUa5Gd5gTKtMQcanqD%2F4luB5cPd2jO8MQ9cRJ4WXpPlAlszQEMfl6bvl3exKRCQM2VtItQrWMGdscjHxgpeBjqHDakL&X-Amz-Signature=9c71cc6bb0ab026479620e22cb1c8862d14d6c74b878a78350123b1742578ae1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLHB5ZR%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6Gk47XcDmIa32NGJpeh8yXArHikv45Qzq%2BM%2B4QPzPmwIhAJRbakTI9PKLwU92IoSPtd7j5V7zfffAaYozzYrltl5DKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyko%2BMUzMa6i4p59bwq3AMaWkXeCBliN9snk8rs%2BeRy%2Br1bolEjBDqVaK8l2gv1w99vfFi3htedQ9hbKY50cuWMbLs6Usd%2BxKkOh0zViBBPf6im%2FmaOlkGgQT3CHC8wnNovNmS2LLS0gKj%2BjnU6T2AVo4eaVSctTs1ZYtXW7AfNt6k%2Fl1YQ6ZJURMfZfjtTyLQtygfBpXB5nuqHrXtOAOE0SUGTOzWmjhaZ2Tsq5exq3bW240OgFJdGmuKlUTVgwudMI5UspQqwXRAKwCxFn6WXXyE04QM9YgClYrON2Q%2BWp%2F3swXjf95BkRoC5t4ZBM3V9Y1Ejs%2F7WlDdh3CTPFyItt1mBagNS2cDQLm4KLy5Th8u5zwKqLHEIk%2Bg97AddnUtWtisVz%2FM48WD4rAHWNOyQDz5duoEo9Mn%2Fw3LicFQOrjU7iP4M6ZKikYV3X0PFLJJ9oXxLWS1Qrg%2FSNPax714CsUHJ41dpo1pXFfXoxVYeeKlSptdUF6QbyWk5QNKZl0b%2FmvFg4c7cFwAIbAYatbfRozmmW9sqWslFwJ1hQCcQa4iphkNNUyG7f4QmaJYDxNcZBvACU2WON78vQwI4H0uEuTUUTr4%2BfFCTaiQT5TuOVo7JF0IAQ9mWN%2B363sulAEaggEbgaXjVwF2emjDen57CBjqkAX%2Ff2Qxu%2B1FIsX3ZsYUK9MOxZ2yxLxxNtHfDF1gMjE5Txd1CIHLtVxVFefGWPNDS3l%2Bnd6B2U5jLLUQvMjWand7ok4CQhSUzbGA7gcOL%2FpbKSIgw040N4kCaaqVawIuOPRUa5Gd5gTKtMQcanqD%2F4luB5cPd2jO8MQ9cRJ4WXpPlAlszQEMfl6bvl3exKRCQM2VtItQrWMGdscjHxgpeBjqHDakL&X-Amz-Signature=8b5859e1d39b27c2e1fe62ba075784cbc2a8850f10abebc3469465889954dda0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
