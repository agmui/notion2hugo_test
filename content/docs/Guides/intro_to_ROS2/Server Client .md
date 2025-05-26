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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKWYIGM%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsonVO0fjCQk0Q5XO4ZZ37qMtBtXyLtoOFCDkSgy2LbgIhAIjsYGx9rFF5T40jJQx3N6lj6mjIifI2jf3xcq0M0QOWKv8DCE4QABoMNjM3NDIzMTgzODA1IgzeEAxfMsgEtOHOb5Mq3AO1HnGjwMEq%2BOB4pb649fGeJS8h%2FfOtpmdXksv9UtC0a6JoHy7Kykx52UkeiASk7WxMgcrQfhNvyLVici9kQIzK7Yg%2BCnZNe5iPvNrIb90cwkqmleORD82ppgV2QZmFiofqkeTn6htjS5wZw7oT9MhPI6fCm4q9G0dpuRhI%2FL%2F6OYxlSRfSE8Pn2vknlVDyZPshbHFDCLy1yD6bopmGwbwyvtfKhqgRtpjaGPIUHPoyAq5opwkDNlbvHzTolzBiAzFFyuH8%2FGnDTYOin6K1w954%2FhFvAg27Zcc7C4IjqHmTSvEUmfuSNOwf8ttl2dBKoOJEhsdjbrHdYf3WdOakHRP%2F58ga%2BkLkuASeDL3cRwdO8G%2B%2BIU7qqVImzLMVlZGQ0NY64X5C9WitrPh3XZTj7dUEFqfzrZUF2ZkWlCbVS1tn9mfrzLYyCXDcPSMr%2Fa%2FMW3Ou0%2Bv58cJGgFWbTAtx%2B%2BsT9tQzV069X5EeB8livxNAGKkR5LYjXGrtZbC1Qc4UddfjROsCmxXdehUK6x7wya8CIUB4e4hYVyVHTW1%2BuffSkZM27Mj2zROPJh4dbw4rePjxnU67Q7%2BwkSoOT4vAWyN2rehIfEOWPw%2FgmpEvqfutiJ5GvkHdC9JW9sZrrjDdq9PBBjqkAbJMkUUHzhFAibVbtpwYUyRS5CWQ44ePZcE%2BJkclB%2FS6mCoTSDjnmqJT5ne8TPTobia0YQG3HCy6P%2Bdrmgu1ermhCFRbSMR3pl0zFqbOZMS%2BVbL9YHdXjntIXGASmIwkTzmJY0mnjV4wK00Q%2F%2FuYVgzAtple249ebrqzhcY29MPT5HzXlnr%2BEwO7H9DBrLwJ5gyuBPa%2BMa6LQXcB%2Fh8go5kEeiq9&X-Amz-Signature=940754acebd13b0f129a88874ba5e46d52c9ddf831812409aaee626e5ac8d891&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKWYIGM%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsonVO0fjCQk0Q5XO4ZZ37qMtBtXyLtoOFCDkSgy2LbgIhAIjsYGx9rFF5T40jJQx3N6lj6mjIifI2jf3xcq0M0QOWKv8DCE4QABoMNjM3NDIzMTgzODA1IgzeEAxfMsgEtOHOb5Mq3AO1HnGjwMEq%2BOB4pb649fGeJS8h%2FfOtpmdXksv9UtC0a6JoHy7Kykx52UkeiASk7WxMgcrQfhNvyLVici9kQIzK7Yg%2BCnZNe5iPvNrIb90cwkqmleORD82ppgV2QZmFiofqkeTn6htjS5wZw7oT9MhPI6fCm4q9G0dpuRhI%2FL%2F6OYxlSRfSE8Pn2vknlVDyZPshbHFDCLy1yD6bopmGwbwyvtfKhqgRtpjaGPIUHPoyAq5opwkDNlbvHzTolzBiAzFFyuH8%2FGnDTYOin6K1w954%2FhFvAg27Zcc7C4IjqHmTSvEUmfuSNOwf8ttl2dBKoOJEhsdjbrHdYf3WdOakHRP%2F58ga%2BkLkuASeDL3cRwdO8G%2B%2BIU7qqVImzLMVlZGQ0NY64X5C9WitrPh3XZTj7dUEFqfzrZUF2ZkWlCbVS1tn9mfrzLYyCXDcPSMr%2Fa%2FMW3Ou0%2Bv58cJGgFWbTAtx%2B%2BsT9tQzV069X5EeB8livxNAGKkR5LYjXGrtZbC1Qc4UddfjROsCmxXdehUK6x7wya8CIUB4e4hYVyVHTW1%2BuffSkZM27Mj2zROPJh4dbw4rePjxnU67Q7%2BwkSoOT4vAWyN2rehIfEOWPw%2FgmpEvqfutiJ5GvkHdC9JW9sZrrjDdq9PBBjqkAbJMkUUHzhFAibVbtpwYUyRS5CWQ44ePZcE%2BJkclB%2FS6mCoTSDjnmqJT5ne8TPTobia0YQG3HCy6P%2Bdrmgu1ermhCFRbSMR3pl0zFqbOZMS%2BVbL9YHdXjntIXGASmIwkTzmJY0mnjV4wK00Q%2F%2FuYVgzAtple249ebrqzhcY29MPT5HzXlnr%2BEwO7H9DBrLwJ5gyuBPa%2BMa6LQXcB%2Fh8go5kEeiq9&X-Amz-Signature=9f27905b85bbcbd1d7e7117cad6a10dee378b04ed4992a015d546735a78591e6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKWYIGM%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsonVO0fjCQk0Q5XO4ZZ37qMtBtXyLtoOFCDkSgy2LbgIhAIjsYGx9rFF5T40jJQx3N6lj6mjIifI2jf3xcq0M0QOWKv8DCE4QABoMNjM3NDIzMTgzODA1IgzeEAxfMsgEtOHOb5Mq3AO1HnGjwMEq%2BOB4pb649fGeJS8h%2FfOtpmdXksv9UtC0a6JoHy7Kykx52UkeiASk7WxMgcrQfhNvyLVici9kQIzK7Yg%2BCnZNe5iPvNrIb90cwkqmleORD82ppgV2QZmFiofqkeTn6htjS5wZw7oT9MhPI6fCm4q9G0dpuRhI%2FL%2F6OYxlSRfSE8Pn2vknlVDyZPshbHFDCLy1yD6bopmGwbwyvtfKhqgRtpjaGPIUHPoyAq5opwkDNlbvHzTolzBiAzFFyuH8%2FGnDTYOin6K1w954%2FhFvAg27Zcc7C4IjqHmTSvEUmfuSNOwf8ttl2dBKoOJEhsdjbrHdYf3WdOakHRP%2F58ga%2BkLkuASeDL3cRwdO8G%2B%2BIU7qqVImzLMVlZGQ0NY64X5C9WitrPh3XZTj7dUEFqfzrZUF2ZkWlCbVS1tn9mfrzLYyCXDcPSMr%2Fa%2FMW3Ou0%2Bv58cJGgFWbTAtx%2B%2BsT9tQzV069X5EeB8livxNAGKkR5LYjXGrtZbC1Qc4UddfjROsCmxXdehUK6x7wya8CIUB4e4hYVyVHTW1%2BuffSkZM27Mj2zROPJh4dbw4rePjxnU67Q7%2BwkSoOT4vAWyN2rehIfEOWPw%2FgmpEvqfutiJ5GvkHdC9JW9sZrrjDdq9PBBjqkAbJMkUUHzhFAibVbtpwYUyRS5CWQ44ePZcE%2BJkclB%2FS6mCoTSDjnmqJT5ne8TPTobia0YQG3HCy6P%2Bdrmgu1ermhCFRbSMR3pl0zFqbOZMS%2BVbL9YHdXjntIXGASmIwkTzmJY0mnjV4wK00Q%2F%2FuYVgzAtple249ebrqzhcY29MPT5HzXlnr%2BEwO7H9DBrLwJ5gyuBPa%2BMa6LQXcB%2Fh8go5kEeiq9&X-Amz-Signature=76557718bd4d5ca4dafc8246f57792aadd50f497d55c1cc92406f30a4dfeac9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKWYIGM%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsonVO0fjCQk0Q5XO4ZZ37qMtBtXyLtoOFCDkSgy2LbgIhAIjsYGx9rFF5T40jJQx3N6lj6mjIifI2jf3xcq0M0QOWKv8DCE4QABoMNjM3NDIzMTgzODA1IgzeEAxfMsgEtOHOb5Mq3AO1HnGjwMEq%2BOB4pb649fGeJS8h%2FfOtpmdXksv9UtC0a6JoHy7Kykx52UkeiASk7WxMgcrQfhNvyLVici9kQIzK7Yg%2BCnZNe5iPvNrIb90cwkqmleORD82ppgV2QZmFiofqkeTn6htjS5wZw7oT9MhPI6fCm4q9G0dpuRhI%2FL%2F6OYxlSRfSE8Pn2vknlVDyZPshbHFDCLy1yD6bopmGwbwyvtfKhqgRtpjaGPIUHPoyAq5opwkDNlbvHzTolzBiAzFFyuH8%2FGnDTYOin6K1w954%2FhFvAg27Zcc7C4IjqHmTSvEUmfuSNOwf8ttl2dBKoOJEhsdjbrHdYf3WdOakHRP%2F58ga%2BkLkuASeDL3cRwdO8G%2B%2BIU7qqVImzLMVlZGQ0NY64X5C9WitrPh3XZTj7dUEFqfzrZUF2ZkWlCbVS1tn9mfrzLYyCXDcPSMr%2Fa%2FMW3Ou0%2Bv58cJGgFWbTAtx%2B%2BsT9tQzV069X5EeB8livxNAGKkR5LYjXGrtZbC1Qc4UddfjROsCmxXdehUK6x7wya8CIUB4e4hYVyVHTW1%2BuffSkZM27Mj2zROPJh4dbw4rePjxnU67Q7%2BwkSoOT4vAWyN2rehIfEOWPw%2FgmpEvqfutiJ5GvkHdC9JW9sZrrjDdq9PBBjqkAbJMkUUHzhFAibVbtpwYUyRS5CWQ44ePZcE%2BJkclB%2FS6mCoTSDjnmqJT5ne8TPTobia0YQG3HCy6P%2Bdrmgu1ermhCFRbSMR3pl0zFqbOZMS%2BVbL9YHdXjntIXGASmIwkTzmJY0mnjV4wK00Q%2F%2FuYVgzAtple249ebrqzhcY29MPT5HzXlnr%2BEwO7H9DBrLwJ5gyuBPa%2BMa6LQXcB%2Fh8go5kEeiq9&X-Amz-Signature=ace7e066afee34d43e2b5462b7a1921f36eb3509701d791086cfd616a0c4d204&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKWYIGM%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsonVO0fjCQk0Q5XO4ZZ37qMtBtXyLtoOFCDkSgy2LbgIhAIjsYGx9rFF5T40jJQx3N6lj6mjIifI2jf3xcq0M0QOWKv8DCE4QABoMNjM3NDIzMTgzODA1IgzeEAxfMsgEtOHOb5Mq3AO1HnGjwMEq%2BOB4pb649fGeJS8h%2FfOtpmdXksv9UtC0a6JoHy7Kykx52UkeiASk7WxMgcrQfhNvyLVici9kQIzK7Yg%2BCnZNe5iPvNrIb90cwkqmleORD82ppgV2QZmFiofqkeTn6htjS5wZw7oT9MhPI6fCm4q9G0dpuRhI%2FL%2F6OYxlSRfSE8Pn2vknlVDyZPshbHFDCLy1yD6bopmGwbwyvtfKhqgRtpjaGPIUHPoyAq5opwkDNlbvHzTolzBiAzFFyuH8%2FGnDTYOin6K1w954%2FhFvAg27Zcc7C4IjqHmTSvEUmfuSNOwf8ttl2dBKoOJEhsdjbrHdYf3WdOakHRP%2F58ga%2BkLkuASeDL3cRwdO8G%2B%2BIU7qqVImzLMVlZGQ0NY64X5C9WitrPh3XZTj7dUEFqfzrZUF2ZkWlCbVS1tn9mfrzLYyCXDcPSMr%2Fa%2FMW3Ou0%2Bv58cJGgFWbTAtx%2B%2BsT9tQzV069X5EeB8livxNAGKkR5LYjXGrtZbC1Qc4UddfjROsCmxXdehUK6x7wya8CIUB4e4hYVyVHTW1%2BuffSkZM27Mj2zROPJh4dbw4rePjxnU67Q7%2BwkSoOT4vAWyN2rehIfEOWPw%2FgmpEvqfutiJ5GvkHdC9JW9sZrrjDdq9PBBjqkAbJMkUUHzhFAibVbtpwYUyRS5CWQ44ePZcE%2BJkclB%2FS6mCoTSDjnmqJT5ne8TPTobia0YQG3HCy6P%2Bdrmgu1ermhCFRbSMR3pl0zFqbOZMS%2BVbL9YHdXjntIXGASmIwkTzmJY0mnjV4wK00Q%2F%2FuYVgzAtple249ebrqzhcY29MPT5HzXlnr%2BEwO7H9DBrLwJ5gyuBPa%2BMa6LQXcB%2Fh8go5kEeiq9&X-Amz-Signature=d6e921ad7e350c281645ebf862fd840fa00a77e8a3f630a72ca112dc0ab61511&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
