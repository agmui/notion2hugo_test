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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NKCCRAW%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMsgO5OvDt2QwmWskiulP1KGUk37hdN4U9Uo%2FGHUVW%2BwIhAJeoBx2ufZPvS7sOIOQ0r839%2FXaC6mRO8tpBSBXGqzGuKv8DCFgQABoMNjM3NDIzMTgzODA1IgxTnUNp2Aok8yj8qY8q3AMTFpMqqWw57m1WU4bKA0WCvr7eVwZTXOiZVHcRm0yC9ZJbNQq0h5oD%2FedOIC1fJTeNYDFn7STVrb5eeYda3uohm6vVUKZPa8VuS%2BXDYUdB9obTgpCCRYx0JcGg99kG3hKXNgMqOTdzFlYdnOFmLeN1IY2k2RMcydj6uNIc10AV3G%2F1dRr8EJyaaGHZ55PQEu0VgA3L35UUlwxPXWI4prskkWaUOe15zuLhY18AGzadUKF%2BzD4yq5%2F9McMIQzmNylkxJp49n%2B6oKnYTIsum%2BBgxyP1qxRfKaoPf6Bxp6xdNy5ewG2gfJwJCOUdzJaiEVK9HqNdrF5UwbDbZYW1SaZLorLyZtL9%2FStXxDaU24A4OwGUsyYTCHAa7emelwxkj%2Ft4TZ8cB20Ztc54U0xVMxiQ5VT9t%2B4wbKrNjL1IlyYuHY3lUSzOhk44tbbLtRAISxoIzeETDKHQVrTMh8pcO9riwPPivmi9zf5WuCy1TVztqnhlGO2Xvv%2Bsc%2FO90840UCm%2B5rhcUe8Pb2x074zaYrR4JBHT8kTZa1uPbYv%2FbQhBGITb9teN3xC9FIkFTaxLOP1KLf8kTfHXDUhl0ElgmV5VJrQJk2dFzoDEJm1f8trlmu2j0YcCGvHR8Y4QzozCbh5m%2FBjqkAS7wUvlVspm05ptOW2Uv%2FRrMOBlRAdCE969Pn4CE9k0xRcRUZG8lKtmfzHRuuzdwSgn%2Bbj8%2F3Lu9loU6pmUgFzJu%2BbhVcxY9mghIq8hazbA%2B5s1sOjDbN1Fv4pJ4LPZtpyYok1WibgrXQFTHX7zVg7Js%2FSBU6RL77v7iVYI6sL7raI65UPJHBWEfJvYEpws2nspnCGr58qANPXyJaGmpJ8dy6nfe&X-Amz-Signature=eb1dd6453f34cca5d43d16273d6045d0e00e1c23ed3f93f37cc89dd9416d07e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NKCCRAW%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMsgO5OvDt2QwmWskiulP1KGUk37hdN4U9Uo%2FGHUVW%2BwIhAJeoBx2ufZPvS7sOIOQ0r839%2FXaC6mRO8tpBSBXGqzGuKv8DCFgQABoMNjM3NDIzMTgzODA1IgxTnUNp2Aok8yj8qY8q3AMTFpMqqWw57m1WU4bKA0WCvr7eVwZTXOiZVHcRm0yC9ZJbNQq0h5oD%2FedOIC1fJTeNYDFn7STVrb5eeYda3uohm6vVUKZPa8VuS%2BXDYUdB9obTgpCCRYx0JcGg99kG3hKXNgMqOTdzFlYdnOFmLeN1IY2k2RMcydj6uNIc10AV3G%2F1dRr8EJyaaGHZ55PQEu0VgA3L35UUlwxPXWI4prskkWaUOe15zuLhY18AGzadUKF%2BzD4yq5%2F9McMIQzmNylkxJp49n%2B6oKnYTIsum%2BBgxyP1qxRfKaoPf6Bxp6xdNy5ewG2gfJwJCOUdzJaiEVK9HqNdrF5UwbDbZYW1SaZLorLyZtL9%2FStXxDaU24A4OwGUsyYTCHAa7emelwxkj%2Ft4TZ8cB20Ztc54U0xVMxiQ5VT9t%2B4wbKrNjL1IlyYuHY3lUSzOhk44tbbLtRAISxoIzeETDKHQVrTMh8pcO9riwPPivmi9zf5WuCy1TVztqnhlGO2Xvv%2Bsc%2FO90840UCm%2B5rhcUe8Pb2x074zaYrR4JBHT8kTZa1uPbYv%2FbQhBGITb9teN3xC9FIkFTaxLOP1KLf8kTfHXDUhl0ElgmV5VJrQJk2dFzoDEJm1f8trlmu2j0YcCGvHR8Y4QzozCbh5m%2FBjqkAS7wUvlVspm05ptOW2Uv%2FRrMOBlRAdCE969Pn4CE9k0xRcRUZG8lKtmfzHRuuzdwSgn%2Bbj8%2F3Lu9loU6pmUgFzJu%2BbhVcxY9mghIq8hazbA%2B5s1sOjDbN1Fv4pJ4LPZtpyYok1WibgrXQFTHX7zVg7Js%2FSBU6RL77v7iVYI6sL7raI65UPJHBWEfJvYEpws2nspnCGr58qANPXyJaGmpJ8dy6nfe&X-Amz-Signature=d5c9645ed3504b6810126b57e4c460a1772ae354739aab9e2d59ff9911485b4a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NKCCRAW%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMsgO5OvDt2QwmWskiulP1KGUk37hdN4U9Uo%2FGHUVW%2BwIhAJeoBx2ufZPvS7sOIOQ0r839%2FXaC6mRO8tpBSBXGqzGuKv8DCFgQABoMNjM3NDIzMTgzODA1IgxTnUNp2Aok8yj8qY8q3AMTFpMqqWw57m1WU4bKA0WCvr7eVwZTXOiZVHcRm0yC9ZJbNQq0h5oD%2FedOIC1fJTeNYDFn7STVrb5eeYda3uohm6vVUKZPa8VuS%2BXDYUdB9obTgpCCRYx0JcGg99kG3hKXNgMqOTdzFlYdnOFmLeN1IY2k2RMcydj6uNIc10AV3G%2F1dRr8EJyaaGHZ55PQEu0VgA3L35UUlwxPXWI4prskkWaUOe15zuLhY18AGzadUKF%2BzD4yq5%2F9McMIQzmNylkxJp49n%2B6oKnYTIsum%2BBgxyP1qxRfKaoPf6Bxp6xdNy5ewG2gfJwJCOUdzJaiEVK9HqNdrF5UwbDbZYW1SaZLorLyZtL9%2FStXxDaU24A4OwGUsyYTCHAa7emelwxkj%2Ft4TZ8cB20Ztc54U0xVMxiQ5VT9t%2B4wbKrNjL1IlyYuHY3lUSzOhk44tbbLtRAISxoIzeETDKHQVrTMh8pcO9riwPPivmi9zf5WuCy1TVztqnhlGO2Xvv%2Bsc%2FO90840UCm%2B5rhcUe8Pb2x074zaYrR4JBHT8kTZa1uPbYv%2FbQhBGITb9teN3xC9FIkFTaxLOP1KLf8kTfHXDUhl0ElgmV5VJrQJk2dFzoDEJm1f8trlmu2j0YcCGvHR8Y4QzozCbh5m%2FBjqkAS7wUvlVspm05ptOW2Uv%2FRrMOBlRAdCE969Pn4CE9k0xRcRUZG8lKtmfzHRuuzdwSgn%2Bbj8%2F3Lu9loU6pmUgFzJu%2BbhVcxY9mghIq8hazbA%2B5s1sOjDbN1Fv4pJ4LPZtpyYok1WibgrXQFTHX7zVg7Js%2FSBU6RL77v7iVYI6sL7raI65UPJHBWEfJvYEpws2nspnCGr58qANPXyJaGmpJ8dy6nfe&X-Amz-Signature=0c637136c323d3f34bd889f97a4467ed642b54bef270dc0b88bbe6d7ee13bedf&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NKCCRAW%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMsgO5OvDt2QwmWskiulP1KGUk37hdN4U9Uo%2FGHUVW%2BwIhAJeoBx2ufZPvS7sOIOQ0r839%2FXaC6mRO8tpBSBXGqzGuKv8DCFgQABoMNjM3NDIzMTgzODA1IgxTnUNp2Aok8yj8qY8q3AMTFpMqqWw57m1WU4bKA0WCvr7eVwZTXOiZVHcRm0yC9ZJbNQq0h5oD%2FedOIC1fJTeNYDFn7STVrb5eeYda3uohm6vVUKZPa8VuS%2BXDYUdB9obTgpCCRYx0JcGg99kG3hKXNgMqOTdzFlYdnOFmLeN1IY2k2RMcydj6uNIc10AV3G%2F1dRr8EJyaaGHZ55PQEu0VgA3L35UUlwxPXWI4prskkWaUOe15zuLhY18AGzadUKF%2BzD4yq5%2F9McMIQzmNylkxJp49n%2B6oKnYTIsum%2BBgxyP1qxRfKaoPf6Bxp6xdNy5ewG2gfJwJCOUdzJaiEVK9HqNdrF5UwbDbZYW1SaZLorLyZtL9%2FStXxDaU24A4OwGUsyYTCHAa7emelwxkj%2Ft4TZ8cB20Ztc54U0xVMxiQ5VT9t%2B4wbKrNjL1IlyYuHY3lUSzOhk44tbbLtRAISxoIzeETDKHQVrTMh8pcO9riwPPivmi9zf5WuCy1TVztqnhlGO2Xvv%2Bsc%2FO90840UCm%2B5rhcUe8Pb2x074zaYrR4JBHT8kTZa1uPbYv%2FbQhBGITb9teN3xC9FIkFTaxLOP1KLf8kTfHXDUhl0ElgmV5VJrQJk2dFzoDEJm1f8trlmu2j0YcCGvHR8Y4QzozCbh5m%2FBjqkAS7wUvlVspm05ptOW2Uv%2FRrMOBlRAdCE969Pn4CE9k0xRcRUZG8lKtmfzHRuuzdwSgn%2Bbj8%2F3Lu9loU6pmUgFzJu%2BbhVcxY9mghIq8hazbA%2B5s1sOjDbN1Fv4pJ4LPZtpyYok1WibgrXQFTHX7zVg7Js%2FSBU6RL77v7iVYI6sL7raI65UPJHBWEfJvYEpws2nspnCGr58qANPXyJaGmpJ8dy6nfe&X-Amz-Signature=719a775f22c44de3b2afe19dd2ac59bf18c423f1ca72bb60d3e03591c9aa5a52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NKCCRAW%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMsgO5OvDt2QwmWskiulP1KGUk37hdN4U9Uo%2FGHUVW%2BwIhAJeoBx2ufZPvS7sOIOQ0r839%2FXaC6mRO8tpBSBXGqzGuKv8DCFgQABoMNjM3NDIzMTgzODA1IgxTnUNp2Aok8yj8qY8q3AMTFpMqqWw57m1WU4bKA0WCvr7eVwZTXOiZVHcRm0yC9ZJbNQq0h5oD%2FedOIC1fJTeNYDFn7STVrb5eeYda3uohm6vVUKZPa8VuS%2BXDYUdB9obTgpCCRYx0JcGg99kG3hKXNgMqOTdzFlYdnOFmLeN1IY2k2RMcydj6uNIc10AV3G%2F1dRr8EJyaaGHZ55PQEu0VgA3L35UUlwxPXWI4prskkWaUOe15zuLhY18AGzadUKF%2BzD4yq5%2F9McMIQzmNylkxJp49n%2B6oKnYTIsum%2BBgxyP1qxRfKaoPf6Bxp6xdNy5ewG2gfJwJCOUdzJaiEVK9HqNdrF5UwbDbZYW1SaZLorLyZtL9%2FStXxDaU24A4OwGUsyYTCHAa7emelwxkj%2Ft4TZ8cB20Ztc54U0xVMxiQ5VT9t%2B4wbKrNjL1IlyYuHY3lUSzOhk44tbbLtRAISxoIzeETDKHQVrTMh8pcO9riwPPivmi9zf5WuCy1TVztqnhlGO2Xvv%2Bsc%2FO90840UCm%2B5rhcUe8Pb2x074zaYrR4JBHT8kTZa1uPbYv%2FbQhBGITb9teN3xC9FIkFTaxLOP1KLf8kTfHXDUhl0ElgmV5VJrQJk2dFzoDEJm1f8trlmu2j0YcCGvHR8Y4QzozCbh5m%2FBjqkAS7wUvlVspm05ptOW2Uv%2FRrMOBlRAdCE969Pn4CE9k0xRcRUZG8lKtmfzHRuuzdwSgn%2Bbj8%2F3Lu9loU6pmUgFzJu%2BbhVcxY9mghIq8hazbA%2B5s1sOjDbN1Fv4pJ4LPZtpyYok1WibgrXQFTHX7zVg7Js%2FSBU6RL77v7iVYI6sL7raI65UPJHBWEfJvYEpws2nspnCGr58qANPXyJaGmpJ8dy6nfe&X-Amz-Signature=f61e1bef3c792aa77b3361eec007214eaaa9f88db16ca5607875dcac826b57d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
