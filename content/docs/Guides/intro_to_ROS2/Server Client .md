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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EC6J6CE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSoJzyLHE%2B4AzXjeTiOMA1ab%2FeZ8LDqWygaCFpjoevrAIhALIfvE2jTNNdvgcOQPAFlBOdCThUkUH005wToyNH6%2FOnKv8DCBMQABoMNjM3NDIzMTgzODA1IgwbXftPBUJX6TATCPoq3ANKOmU7oEMHTZmPgINQHAz%2BynfWnSzFox6WfSYrqK7armPgGytZvugwaKUUTlmLDhwiZ%2BZvbLMF%2BNfEn6lGeCdErDmfB0J5tsFDeHIIawa3YD5IKJTNQQwK6DtG9JwB0P6j3thenov%2B0L483BoNTVQuw6B00z8cd1OJr25UuRo8TUQFyo22Su8luiAbSCUOX7Gny2vrukTRigUffSC%2BZurQyRW8UgJLIQaqWMPmRwqq6u78Tuoc0Yi%2BemkCkIcvd1QUXFoZV9Yw%2B5x9VBUAkXUDoNYI%2BXCGTu4uAoihTL7Htx7YhsHy7ZgvWJPzsptcE3chmvrk3Sgkn0HpfsnapBBvA4CHIiDWmcs1qi5vr2FbCPRK%2BwWk1p64Yu5P%2B9%2BiDQn3f7OIP8E66lazsWS%2FOAKdka%2Fo5p0GAotKjiHEO2bKVsGHxcioVEBUjeNmkIeRtohfBJyiQOQFxENccD6K3HhOyeClF4ikDkvQ9%2BB%2B0hDluaLt4rzbIEeQ7Bz6KvJkWq%2F%2F8LEFNkQZr7D%2BWc2u9aWN0H8d5OMS%2B45%2Fdb4x4W1jrWxMGlCJsyj%2BtOIP9ZeB%2FWuhVM3I%2FGq1n7udYKdLeYsZV9raXCxFTgLvMWb0DygB7JDyfxkM4iPUc6yqMjDd1eu9BjqkAZZwBcTcih8%2FslSf2rostRR1%2FNsE%2FqWMaKHOV0kw1utganUi0RsSSTuCyiELK%2BP0pP1gV1T%2FpPkLQ%2BunXia5E73mLMHPnZrk0ZYwUx6WKZodkcXrNvu%2B3fMv%2Be1fhIszYFBIhG6lybmQpEpKzJZYCcncYZ%2BQho59yB%2BhniBXWz2pb6zpmtBB61HbmZpbWFvA%2Bj5Yz%2BY8Xfv4Y2eiNHBQXxeTv3HN&X-Amz-Signature=74be733e6b8122d0b50bf78d19df67408f78a4e1ca91e0ab8703d6be8c0c677c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EC6J6CE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSoJzyLHE%2B4AzXjeTiOMA1ab%2FeZ8LDqWygaCFpjoevrAIhALIfvE2jTNNdvgcOQPAFlBOdCThUkUH005wToyNH6%2FOnKv8DCBMQABoMNjM3NDIzMTgzODA1IgwbXftPBUJX6TATCPoq3ANKOmU7oEMHTZmPgINQHAz%2BynfWnSzFox6WfSYrqK7armPgGytZvugwaKUUTlmLDhwiZ%2BZvbLMF%2BNfEn6lGeCdErDmfB0J5tsFDeHIIawa3YD5IKJTNQQwK6DtG9JwB0P6j3thenov%2B0L483BoNTVQuw6B00z8cd1OJr25UuRo8TUQFyo22Su8luiAbSCUOX7Gny2vrukTRigUffSC%2BZurQyRW8UgJLIQaqWMPmRwqq6u78Tuoc0Yi%2BemkCkIcvd1QUXFoZV9Yw%2B5x9VBUAkXUDoNYI%2BXCGTu4uAoihTL7Htx7YhsHy7ZgvWJPzsptcE3chmvrk3Sgkn0HpfsnapBBvA4CHIiDWmcs1qi5vr2FbCPRK%2BwWk1p64Yu5P%2B9%2BiDQn3f7OIP8E66lazsWS%2FOAKdka%2Fo5p0GAotKjiHEO2bKVsGHxcioVEBUjeNmkIeRtohfBJyiQOQFxENccD6K3HhOyeClF4ikDkvQ9%2BB%2B0hDluaLt4rzbIEeQ7Bz6KvJkWq%2F%2F8LEFNkQZr7D%2BWc2u9aWN0H8d5OMS%2B45%2Fdb4x4W1jrWxMGlCJsyj%2BtOIP9ZeB%2FWuhVM3I%2FGq1n7udYKdLeYsZV9raXCxFTgLvMWb0DygB7JDyfxkM4iPUc6yqMjDd1eu9BjqkAZZwBcTcih8%2FslSf2rostRR1%2FNsE%2FqWMaKHOV0kw1utganUi0RsSSTuCyiELK%2BP0pP1gV1T%2FpPkLQ%2BunXia5E73mLMHPnZrk0ZYwUx6WKZodkcXrNvu%2B3fMv%2Be1fhIszYFBIhG6lybmQpEpKzJZYCcncYZ%2BQho59yB%2BhniBXWz2pb6zpmtBB61HbmZpbWFvA%2Bj5Yz%2BY8Xfv4Y2eiNHBQXxeTv3HN&X-Amz-Signature=19793cae15c7bf20fb5b270628c4911e7f364f9d1681715f9c6773faea01d9c9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EC6J6CE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSoJzyLHE%2B4AzXjeTiOMA1ab%2FeZ8LDqWygaCFpjoevrAIhALIfvE2jTNNdvgcOQPAFlBOdCThUkUH005wToyNH6%2FOnKv8DCBMQABoMNjM3NDIzMTgzODA1IgwbXftPBUJX6TATCPoq3ANKOmU7oEMHTZmPgINQHAz%2BynfWnSzFox6WfSYrqK7armPgGytZvugwaKUUTlmLDhwiZ%2BZvbLMF%2BNfEn6lGeCdErDmfB0J5tsFDeHIIawa3YD5IKJTNQQwK6DtG9JwB0P6j3thenov%2B0L483BoNTVQuw6B00z8cd1OJr25UuRo8TUQFyo22Su8luiAbSCUOX7Gny2vrukTRigUffSC%2BZurQyRW8UgJLIQaqWMPmRwqq6u78Tuoc0Yi%2BemkCkIcvd1QUXFoZV9Yw%2B5x9VBUAkXUDoNYI%2BXCGTu4uAoihTL7Htx7YhsHy7ZgvWJPzsptcE3chmvrk3Sgkn0HpfsnapBBvA4CHIiDWmcs1qi5vr2FbCPRK%2BwWk1p64Yu5P%2B9%2BiDQn3f7OIP8E66lazsWS%2FOAKdka%2Fo5p0GAotKjiHEO2bKVsGHxcioVEBUjeNmkIeRtohfBJyiQOQFxENccD6K3HhOyeClF4ikDkvQ9%2BB%2B0hDluaLt4rzbIEeQ7Bz6KvJkWq%2F%2F8LEFNkQZr7D%2BWc2u9aWN0H8d5OMS%2B45%2Fdb4x4W1jrWxMGlCJsyj%2BtOIP9ZeB%2FWuhVM3I%2FGq1n7udYKdLeYsZV9raXCxFTgLvMWb0DygB7JDyfxkM4iPUc6yqMjDd1eu9BjqkAZZwBcTcih8%2FslSf2rostRR1%2FNsE%2FqWMaKHOV0kw1utganUi0RsSSTuCyiELK%2BP0pP1gV1T%2FpPkLQ%2BunXia5E73mLMHPnZrk0ZYwUx6WKZodkcXrNvu%2B3fMv%2Be1fhIszYFBIhG6lybmQpEpKzJZYCcncYZ%2BQho59yB%2BhniBXWz2pb6zpmtBB61HbmZpbWFvA%2Bj5Yz%2BY8Xfv4Y2eiNHBQXxeTv3HN&X-Amz-Signature=ec417959d9a775ecec583f78210114671b5062314b506637cea22c07297c5942&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EC6J6CE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSoJzyLHE%2B4AzXjeTiOMA1ab%2FeZ8LDqWygaCFpjoevrAIhALIfvE2jTNNdvgcOQPAFlBOdCThUkUH005wToyNH6%2FOnKv8DCBMQABoMNjM3NDIzMTgzODA1IgwbXftPBUJX6TATCPoq3ANKOmU7oEMHTZmPgINQHAz%2BynfWnSzFox6WfSYrqK7armPgGytZvugwaKUUTlmLDhwiZ%2BZvbLMF%2BNfEn6lGeCdErDmfB0J5tsFDeHIIawa3YD5IKJTNQQwK6DtG9JwB0P6j3thenov%2B0L483BoNTVQuw6B00z8cd1OJr25UuRo8TUQFyo22Su8luiAbSCUOX7Gny2vrukTRigUffSC%2BZurQyRW8UgJLIQaqWMPmRwqq6u78Tuoc0Yi%2BemkCkIcvd1QUXFoZV9Yw%2B5x9VBUAkXUDoNYI%2BXCGTu4uAoihTL7Htx7YhsHy7ZgvWJPzsptcE3chmvrk3Sgkn0HpfsnapBBvA4CHIiDWmcs1qi5vr2FbCPRK%2BwWk1p64Yu5P%2B9%2BiDQn3f7OIP8E66lazsWS%2FOAKdka%2Fo5p0GAotKjiHEO2bKVsGHxcioVEBUjeNmkIeRtohfBJyiQOQFxENccD6K3HhOyeClF4ikDkvQ9%2BB%2B0hDluaLt4rzbIEeQ7Bz6KvJkWq%2F%2F8LEFNkQZr7D%2BWc2u9aWN0H8d5OMS%2B45%2Fdb4x4W1jrWxMGlCJsyj%2BtOIP9ZeB%2FWuhVM3I%2FGq1n7udYKdLeYsZV9raXCxFTgLvMWb0DygB7JDyfxkM4iPUc6yqMjDd1eu9BjqkAZZwBcTcih8%2FslSf2rostRR1%2FNsE%2FqWMaKHOV0kw1utganUi0RsSSTuCyiELK%2BP0pP1gV1T%2FpPkLQ%2BunXia5E73mLMHPnZrk0ZYwUx6WKZodkcXrNvu%2B3fMv%2Be1fhIszYFBIhG6lybmQpEpKzJZYCcncYZ%2BQho59yB%2BhniBXWz2pb6zpmtBB61HbmZpbWFvA%2Bj5Yz%2BY8Xfv4Y2eiNHBQXxeTv3HN&X-Amz-Signature=bb8bbf51aec70d04710ffc7a6ca811b14f70acb9c8e5c314d35f9e849be4c6ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EC6J6CE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSoJzyLHE%2B4AzXjeTiOMA1ab%2FeZ8LDqWygaCFpjoevrAIhALIfvE2jTNNdvgcOQPAFlBOdCThUkUH005wToyNH6%2FOnKv8DCBMQABoMNjM3NDIzMTgzODA1IgwbXftPBUJX6TATCPoq3ANKOmU7oEMHTZmPgINQHAz%2BynfWnSzFox6WfSYrqK7armPgGytZvugwaKUUTlmLDhwiZ%2BZvbLMF%2BNfEn6lGeCdErDmfB0J5tsFDeHIIawa3YD5IKJTNQQwK6DtG9JwB0P6j3thenov%2B0L483BoNTVQuw6B00z8cd1OJr25UuRo8TUQFyo22Su8luiAbSCUOX7Gny2vrukTRigUffSC%2BZurQyRW8UgJLIQaqWMPmRwqq6u78Tuoc0Yi%2BemkCkIcvd1QUXFoZV9Yw%2B5x9VBUAkXUDoNYI%2BXCGTu4uAoihTL7Htx7YhsHy7ZgvWJPzsptcE3chmvrk3Sgkn0HpfsnapBBvA4CHIiDWmcs1qi5vr2FbCPRK%2BwWk1p64Yu5P%2B9%2BiDQn3f7OIP8E66lazsWS%2FOAKdka%2Fo5p0GAotKjiHEO2bKVsGHxcioVEBUjeNmkIeRtohfBJyiQOQFxENccD6K3HhOyeClF4ikDkvQ9%2BB%2B0hDluaLt4rzbIEeQ7Bz6KvJkWq%2F%2F8LEFNkQZr7D%2BWc2u9aWN0H8d5OMS%2B45%2Fdb4x4W1jrWxMGlCJsyj%2BtOIP9ZeB%2FWuhVM3I%2FGq1n7udYKdLeYsZV9raXCxFTgLvMWb0DygB7JDyfxkM4iPUc6yqMjDd1eu9BjqkAZZwBcTcih8%2FslSf2rostRR1%2FNsE%2FqWMaKHOV0kw1utganUi0RsSSTuCyiELK%2BP0pP1gV1T%2FpPkLQ%2BunXia5E73mLMHPnZrk0ZYwUx6WKZodkcXrNvu%2B3fMv%2Be1fhIszYFBIhG6lybmQpEpKzJZYCcncYZ%2BQho59yB%2BhniBXWz2pb6zpmtBB61HbmZpbWFvA%2Bj5Yz%2BY8Xfv4Y2eiNHBQXxeTv3HN&X-Amz-Signature=7fc71787bad0af388aaab3f83854da8708fabee1b9d07a0b6c1928917db8f07a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
