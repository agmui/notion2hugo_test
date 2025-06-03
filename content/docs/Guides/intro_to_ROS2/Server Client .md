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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URPP74I6%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCSXMb%2FElWNCfUAY5ULTfC%2FsW4Obq4GU9avGwhr%2BJrrgwIhAM6a7HeVvHmLKwxaeBdmYQRFZoH72x696d9WQJjOb%2BdXKv8DCBAQABoMNjM3NDIzMTgzODA1IgxxTxf3idp8YIDohLkq3AOM9EPSibWInSX4aUPfMcLUKACMKQbDxXddoImQ5Q07J85Ez1auXBWJCYGBkpBj0jjO2Lk1SNL7lzWknTPoTX1%2Be5vMFgfsbYxPCfRN82ruadSYnId5zsF5%2ByxwMQGfRrXtooG4Zo9jwX1ftUyq%2B9DygBJoPzCPT%2FphK9L0me2s8hK1HfpqG3sOVhePjMVFoDdhZpX2zmD1vR1oJQPRJv9eSPRPaCa%2BunKBf9NAN6GkGMU16%2B4L5HrqvqrHYpVRz%2FCNwdMMS0wv0Ck%2B%2FzkR3fIgOoySRYL4Dl3PF7OI40OoYDOfCvZzi6LP4peRD39JaooWKKRQFTmFYMiDNogHelveMPiHHf%2FcoLVzQXvdCedEaMY7wNrP9NkaLxCYs7zQWqykn5yjgzZVvHpEx2LH%2FLEsMJ5CKARIqs%2Bvia7R6clzROqOecKjrqe180UZzGzrWZEj%2FZgeKZtJqkTVk4r6xV97jrM3Ee0i7rlf8shfrTdTdspqjSkNK6zL9lAQIKqLsjF8GPNOVT6X%2FoI5nn9CeycG%2FJsxP0Xqk4vR8oKWvVwNaW1C1GDKC9lG0rIJPu4BfNXAn5NmVllO0UEvd87HIAlO4%2FN7oJphahg0L8OP3Mj8qjyu3rOIQoM0SpcZWTCWxfrBBjqkARLP9xIjV6D7Ahs8pZP7BXAiNNmlyUYKu9mAh9su2ga%2FzC05Gcr1BmVpZQtMc8tz7OunyQNPe3DkNEMXTPW%2BmpHmT%2FYuIawSxYqHesNqYjEFUi1m5ktfDzjqvwTsEwCR%2ByN6oJd7HxYEQNGqou5%2B45zNxjF8GZI274XEvuvXX8JCyPRHK6lv8wUXW%2Bvlcy3EX2oab5ZND2hoEIx1izKorh9HQ3am&X-Amz-Signature=502a59fabff5f290fd80304b23103f9a0709b921ac92043b1b147cc719b8cc21&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URPP74I6%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCSXMb%2FElWNCfUAY5ULTfC%2FsW4Obq4GU9avGwhr%2BJrrgwIhAM6a7HeVvHmLKwxaeBdmYQRFZoH72x696d9WQJjOb%2BdXKv8DCBAQABoMNjM3NDIzMTgzODA1IgxxTxf3idp8YIDohLkq3AOM9EPSibWInSX4aUPfMcLUKACMKQbDxXddoImQ5Q07J85Ez1auXBWJCYGBkpBj0jjO2Lk1SNL7lzWknTPoTX1%2Be5vMFgfsbYxPCfRN82ruadSYnId5zsF5%2ByxwMQGfRrXtooG4Zo9jwX1ftUyq%2B9DygBJoPzCPT%2FphK9L0me2s8hK1HfpqG3sOVhePjMVFoDdhZpX2zmD1vR1oJQPRJv9eSPRPaCa%2BunKBf9NAN6GkGMU16%2B4L5HrqvqrHYpVRz%2FCNwdMMS0wv0Ck%2B%2FzkR3fIgOoySRYL4Dl3PF7OI40OoYDOfCvZzi6LP4peRD39JaooWKKRQFTmFYMiDNogHelveMPiHHf%2FcoLVzQXvdCedEaMY7wNrP9NkaLxCYs7zQWqykn5yjgzZVvHpEx2LH%2FLEsMJ5CKARIqs%2Bvia7R6clzROqOecKjrqe180UZzGzrWZEj%2FZgeKZtJqkTVk4r6xV97jrM3Ee0i7rlf8shfrTdTdspqjSkNK6zL9lAQIKqLsjF8GPNOVT6X%2FoI5nn9CeycG%2FJsxP0Xqk4vR8oKWvVwNaW1C1GDKC9lG0rIJPu4BfNXAn5NmVllO0UEvd87HIAlO4%2FN7oJphahg0L8OP3Mj8qjyu3rOIQoM0SpcZWTCWxfrBBjqkARLP9xIjV6D7Ahs8pZP7BXAiNNmlyUYKu9mAh9su2ga%2FzC05Gcr1BmVpZQtMc8tz7OunyQNPe3DkNEMXTPW%2BmpHmT%2FYuIawSxYqHesNqYjEFUi1m5ktfDzjqvwTsEwCR%2ByN6oJd7HxYEQNGqou5%2B45zNxjF8GZI274XEvuvXX8JCyPRHK6lv8wUXW%2Bvlcy3EX2oab5ZND2hoEIx1izKorh9HQ3am&X-Amz-Signature=381332f3c788d6af99586fa1869afef96e4182fa16788b317b73b0a0d49e38da&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URPP74I6%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCSXMb%2FElWNCfUAY5ULTfC%2FsW4Obq4GU9avGwhr%2BJrrgwIhAM6a7HeVvHmLKwxaeBdmYQRFZoH72x696d9WQJjOb%2BdXKv8DCBAQABoMNjM3NDIzMTgzODA1IgxxTxf3idp8YIDohLkq3AOM9EPSibWInSX4aUPfMcLUKACMKQbDxXddoImQ5Q07J85Ez1auXBWJCYGBkpBj0jjO2Lk1SNL7lzWknTPoTX1%2Be5vMFgfsbYxPCfRN82ruadSYnId5zsF5%2ByxwMQGfRrXtooG4Zo9jwX1ftUyq%2B9DygBJoPzCPT%2FphK9L0me2s8hK1HfpqG3sOVhePjMVFoDdhZpX2zmD1vR1oJQPRJv9eSPRPaCa%2BunKBf9NAN6GkGMU16%2B4L5HrqvqrHYpVRz%2FCNwdMMS0wv0Ck%2B%2FzkR3fIgOoySRYL4Dl3PF7OI40OoYDOfCvZzi6LP4peRD39JaooWKKRQFTmFYMiDNogHelveMPiHHf%2FcoLVzQXvdCedEaMY7wNrP9NkaLxCYs7zQWqykn5yjgzZVvHpEx2LH%2FLEsMJ5CKARIqs%2Bvia7R6clzROqOecKjrqe180UZzGzrWZEj%2FZgeKZtJqkTVk4r6xV97jrM3Ee0i7rlf8shfrTdTdspqjSkNK6zL9lAQIKqLsjF8GPNOVT6X%2FoI5nn9CeycG%2FJsxP0Xqk4vR8oKWvVwNaW1C1GDKC9lG0rIJPu4BfNXAn5NmVllO0UEvd87HIAlO4%2FN7oJphahg0L8OP3Mj8qjyu3rOIQoM0SpcZWTCWxfrBBjqkARLP9xIjV6D7Ahs8pZP7BXAiNNmlyUYKu9mAh9su2ga%2FzC05Gcr1BmVpZQtMc8tz7OunyQNPe3DkNEMXTPW%2BmpHmT%2FYuIawSxYqHesNqYjEFUi1m5ktfDzjqvwTsEwCR%2ByN6oJd7HxYEQNGqou5%2B45zNxjF8GZI274XEvuvXX8JCyPRHK6lv8wUXW%2Bvlcy3EX2oab5ZND2hoEIx1izKorh9HQ3am&X-Amz-Signature=bf181d3a1fdae68522f01a1274b6e954470754fae98abefa0a542e507f36c561&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URPP74I6%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCSXMb%2FElWNCfUAY5ULTfC%2FsW4Obq4GU9avGwhr%2BJrrgwIhAM6a7HeVvHmLKwxaeBdmYQRFZoH72x696d9WQJjOb%2BdXKv8DCBAQABoMNjM3NDIzMTgzODA1IgxxTxf3idp8YIDohLkq3AOM9EPSibWInSX4aUPfMcLUKACMKQbDxXddoImQ5Q07J85Ez1auXBWJCYGBkpBj0jjO2Lk1SNL7lzWknTPoTX1%2Be5vMFgfsbYxPCfRN82ruadSYnId5zsF5%2ByxwMQGfRrXtooG4Zo9jwX1ftUyq%2B9DygBJoPzCPT%2FphK9L0me2s8hK1HfpqG3sOVhePjMVFoDdhZpX2zmD1vR1oJQPRJv9eSPRPaCa%2BunKBf9NAN6GkGMU16%2B4L5HrqvqrHYpVRz%2FCNwdMMS0wv0Ck%2B%2FzkR3fIgOoySRYL4Dl3PF7OI40OoYDOfCvZzi6LP4peRD39JaooWKKRQFTmFYMiDNogHelveMPiHHf%2FcoLVzQXvdCedEaMY7wNrP9NkaLxCYs7zQWqykn5yjgzZVvHpEx2LH%2FLEsMJ5CKARIqs%2Bvia7R6clzROqOecKjrqe180UZzGzrWZEj%2FZgeKZtJqkTVk4r6xV97jrM3Ee0i7rlf8shfrTdTdspqjSkNK6zL9lAQIKqLsjF8GPNOVT6X%2FoI5nn9CeycG%2FJsxP0Xqk4vR8oKWvVwNaW1C1GDKC9lG0rIJPu4BfNXAn5NmVllO0UEvd87HIAlO4%2FN7oJphahg0L8OP3Mj8qjyu3rOIQoM0SpcZWTCWxfrBBjqkARLP9xIjV6D7Ahs8pZP7BXAiNNmlyUYKu9mAh9su2ga%2FzC05Gcr1BmVpZQtMc8tz7OunyQNPe3DkNEMXTPW%2BmpHmT%2FYuIawSxYqHesNqYjEFUi1m5ktfDzjqvwTsEwCR%2ByN6oJd7HxYEQNGqou5%2B45zNxjF8GZI274XEvuvXX8JCyPRHK6lv8wUXW%2Bvlcy3EX2oab5ZND2hoEIx1izKorh9HQ3am&X-Amz-Signature=b010b57027697f4e135891d702ab957de46985ff91244bd8979809a8c4003010&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URPP74I6%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCSXMb%2FElWNCfUAY5ULTfC%2FsW4Obq4GU9avGwhr%2BJrrgwIhAM6a7HeVvHmLKwxaeBdmYQRFZoH72x696d9WQJjOb%2BdXKv8DCBAQABoMNjM3NDIzMTgzODA1IgxxTxf3idp8YIDohLkq3AOM9EPSibWInSX4aUPfMcLUKACMKQbDxXddoImQ5Q07J85Ez1auXBWJCYGBkpBj0jjO2Lk1SNL7lzWknTPoTX1%2Be5vMFgfsbYxPCfRN82ruadSYnId5zsF5%2ByxwMQGfRrXtooG4Zo9jwX1ftUyq%2B9DygBJoPzCPT%2FphK9L0me2s8hK1HfpqG3sOVhePjMVFoDdhZpX2zmD1vR1oJQPRJv9eSPRPaCa%2BunKBf9NAN6GkGMU16%2B4L5HrqvqrHYpVRz%2FCNwdMMS0wv0Ck%2B%2FzkR3fIgOoySRYL4Dl3PF7OI40OoYDOfCvZzi6LP4peRD39JaooWKKRQFTmFYMiDNogHelveMPiHHf%2FcoLVzQXvdCedEaMY7wNrP9NkaLxCYs7zQWqykn5yjgzZVvHpEx2LH%2FLEsMJ5CKARIqs%2Bvia7R6clzROqOecKjrqe180UZzGzrWZEj%2FZgeKZtJqkTVk4r6xV97jrM3Ee0i7rlf8shfrTdTdspqjSkNK6zL9lAQIKqLsjF8GPNOVT6X%2FoI5nn9CeycG%2FJsxP0Xqk4vR8oKWvVwNaW1C1GDKC9lG0rIJPu4BfNXAn5NmVllO0UEvd87HIAlO4%2FN7oJphahg0L8OP3Mj8qjyu3rOIQoM0SpcZWTCWxfrBBjqkARLP9xIjV6D7Ahs8pZP7BXAiNNmlyUYKu9mAh9su2ga%2FzC05Gcr1BmVpZQtMc8tz7OunyQNPe3DkNEMXTPW%2BmpHmT%2FYuIawSxYqHesNqYjEFUi1m5ktfDzjqvwTsEwCR%2ByN6oJd7HxYEQNGqou5%2B45zNxjF8GZI274XEvuvXX8JCyPRHK6lv8wUXW%2Bvlcy3EX2oab5ZND2hoEIx1izKorh9HQ3am&X-Amz-Signature=4f3816e7815650df619a5a29beccd69115fa0c9d0d5d2ce4b6c9c48ecfe9c3db&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
