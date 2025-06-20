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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7SNDKCH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPczgOd8x3lYgRBspF%2BG4doKdemQjtJHilZLrT3pxNMAiEAhw9wK9t7LlrySmvlnJd353u9Y9a2F5QcUkiEBtsLJaAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTd1hOw%2Bh3TKoh8ayrcA6jeLAnEhhKp8jQAjJh6XJ41fhzDY0twMhEv683r2ewjY9Mg8eomfnX9TYjwGWB9pivMeeSltk5G9ADmcdV9wfTQ6C3Ym38LESXW7MaU7JyLfYkhLyD8qpBC7XvNMAV88erEAGDBrcL4RYQ0ek5QA4RC3w8Ts1HjF8IGQ2Pt1cADLp%2B74zJkLy1N7x27LkdxAimO20folBQWdPBwlgMamdi6dBbmE0M0gzv0mdALF7y%2FqDuRcJ%2FyTO764uBdYuYLkVUPplqMBuQ6JFKeMA1ee2uIxlFVDs5LKuktDE3xseIgZRUYwcYEFl4q4bHBjDI6uQlkQnv8VGTvrW9m4rgxmwUdh%2FYKhzk75TkCQa7GzM6GZadfmQtAr72xoptTNYW9l79FS%2BBXkSZV6TeqlNhi0BvS3p5gZ1jjz2BqXT%2FCQF1zXPyrntPCtF8EccbWmNVjx%2B%2B%2B9h54JRBqaxA9I6e9dTEEIsrz09YDT2FkbvT26Hr8aHZ1oNhfAX%2B4vcIILjomYx1N77vppRAZSm4lMD%2BPwjrN8hwsZZOBb9A4qrNRaApep0yTI%2FQeapEhFaF8kXwDzSyOJV8YCPnVLm8F1WwjfRAHcQMhN6aaJu1YnP0sLeKZGarbJ%2FMmSOUig%2FjUMJa908IGOqUByim7mRVfeqQ%2BX%2BLlLlyw1f7Gd0YJREqFE6XTXgw6b8VC1tK5dqAGKU449wUsSNlQ9%2BqYNKy8VcVCGneWzrnuxQEVaTN2MLj0gvwVPAtbP1LvgDhKj0gtlUgLFwyTuoD6AmLBsgeZwnXsvDtkxfhZPwt5mI3vKZPDK9%2FfmH%2BLfCrdDXidHoa3nHHf4hfO5DG68VQ0m7SkwkJu6dc0c%2BDhS3z8LBGv&X-Amz-Signature=2311de9b0c661a5b8f7ee59548db58dfdf3d680402820bc6254e3d5d48c62ae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7SNDKCH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPczgOd8x3lYgRBspF%2BG4doKdemQjtJHilZLrT3pxNMAiEAhw9wK9t7LlrySmvlnJd353u9Y9a2F5QcUkiEBtsLJaAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTd1hOw%2Bh3TKoh8ayrcA6jeLAnEhhKp8jQAjJh6XJ41fhzDY0twMhEv683r2ewjY9Mg8eomfnX9TYjwGWB9pivMeeSltk5G9ADmcdV9wfTQ6C3Ym38LESXW7MaU7JyLfYkhLyD8qpBC7XvNMAV88erEAGDBrcL4RYQ0ek5QA4RC3w8Ts1HjF8IGQ2Pt1cADLp%2B74zJkLy1N7x27LkdxAimO20folBQWdPBwlgMamdi6dBbmE0M0gzv0mdALF7y%2FqDuRcJ%2FyTO764uBdYuYLkVUPplqMBuQ6JFKeMA1ee2uIxlFVDs5LKuktDE3xseIgZRUYwcYEFl4q4bHBjDI6uQlkQnv8VGTvrW9m4rgxmwUdh%2FYKhzk75TkCQa7GzM6GZadfmQtAr72xoptTNYW9l79FS%2BBXkSZV6TeqlNhi0BvS3p5gZ1jjz2BqXT%2FCQF1zXPyrntPCtF8EccbWmNVjx%2B%2B%2B9h54JRBqaxA9I6e9dTEEIsrz09YDT2FkbvT26Hr8aHZ1oNhfAX%2B4vcIILjomYx1N77vppRAZSm4lMD%2BPwjrN8hwsZZOBb9A4qrNRaApep0yTI%2FQeapEhFaF8kXwDzSyOJV8YCPnVLm8F1WwjfRAHcQMhN6aaJu1YnP0sLeKZGarbJ%2FMmSOUig%2FjUMJa908IGOqUByim7mRVfeqQ%2BX%2BLlLlyw1f7Gd0YJREqFE6XTXgw6b8VC1tK5dqAGKU449wUsSNlQ9%2BqYNKy8VcVCGneWzrnuxQEVaTN2MLj0gvwVPAtbP1LvgDhKj0gtlUgLFwyTuoD6AmLBsgeZwnXsvDtkxfhZPwt5mI3vKZPDK9%2FfmH%2BLfCrdDXidHoa3nHHf4hfO5DG68VQ0m7SkwkJu6dc0c%2BDhS3z8LBGv&X-Amz-Signature=6f728f5d253a76a47116670adb1e53516ee2bb208b9cc2b6fc12285f19a20533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7SNDKCH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPczgOd8x3lYgRBspF%2BG4doKdemQjtJHilZLrT3pxNMAiEAhw9wK9t7LlrySmvlnJd353u9Y9a2F5QcUkiEBtsLJaAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTd1hOw%2Bh3TKoh8ayrcA6jeLAnEhhKp8jQAjJh6XJ41fhzDY0twMhEv683r2ewjY9Mg8eomfnX9TYjwGWB9pivMeeSltk5G9ADmcdV9wfTQ6C3Ym38LESXW7MaU7JyLfYkhLyD8qpBC7XvNMAV88erEAGDBrcL4RYQ0ek5QA4RC3w8Ts1HjF8IGQ2Pt1cADLp%2B74zJkLy1N7x27LkdxAimO20folBQWdPBwlgMamdi6dBbmE0M0gzv0mdALF7y%2FqDuRcJ%2FyTO764uBdYuYLkVUPplqMBuQ6JFKeMA1ee2uIxlFVDs5LKuktDE3xseIgZRUYwcYEFl4q4bHBjDI6uQlkQnv8VGTvrW9m4rgxmwUdh%2FYKhzk75TkCQa7GzM6GZadfmQtAr72xoptTNYW9l79FS%2BBXkSZV6TeqlNhi0BvS3p5gZ1jjz2BqXT%2FCQF1zXPyrntPCtF8EccbWmNVjx%2B%2B%2B9h54JRBqaxA9I6e9dTEEIsrz09YDT2FkbvT26Hr8aHZ1oNhfAX%2B4vcIILjomYx1N77vppRAZSm4lMD%2BPwjrN8hwsZZOBb9A4qrNRaApep0yTI%2FQeapEhFaF8kXwDzSyOJV8YCPnVLm8F1WwjfRAHcQMhN6aaJu1YnP0sLeKZGarbJ%2FMmSOUig%2FjUMJa908IGOqUByim7mRVfeqQ%2BX%2BLlLlyw1f7Gd0YJREqFE6XTXgw6b8VC1tK5dqAGKU449wUsSNlQ9%2BqYNKy8VcVCGneWzrnuxQEVaTN2MLj0gvwVPAtbP1LvgDhKj0gtlUgLFwyTuoD6AmLBsgeZwnXsvDtkxfhZPwt5mI3vKZPDK9%2FfmH%2BLfCrdDXidHoa3nHHf4hfO5DG68VQ0m7SkwkJu6dc0c%2BDhS3z8LBGv&X-Amz-Signature=ee922965dbe806163ca5484a394c7a2e42c8ff73a8f4fea186850b375dfa4d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7SNDKCH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPczgOd8x3lYgRBspF%2BG4doKdemQjtJHilZLrT3pxNMAiEAhw9wK9t7LlrySmvlnJd353u9Y9a2F5QcUkiEBtsLJaAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTd1hOw%2Bh3TKoh8ayrcA6jeLAnEhhKp8jQAjJh6XJ41fhzDY0twMhEv683r2ewjY9Mg8eomfnX9TYjwGWB9pivMeeSltk5G9ADmcdV9wfTQ6C3Ym38LESXW7MaU7JyLfYkhLyD8qpBC7XvNMAV88erEAGDBrcL4RYQ0ek5QA4RC3w8Ts1HjF8IGQ2Pt1cADLp%2B74zJkLy1N7x27LkdxAimO20folBQWdPBwlgMamdi6dBbmE0M0gzv0mdALF7y%2FqDuRcJ%2FyTO764uBdYuYLkVUPplqMBuQ6JFKeMA1ee2uIxlFVDs5LKuktDE3xseIgZRUYwcYEFl4q4bHBjDI6uQlkQnv8VGTvrW9m4rgxmwUdh%2FYKhzk75TkCQa7GzM6GZadfmQtAr72xoptTNYW9l79FS%2BBXkSZV6TeqlNhi0BvS3p5gZ1jjz2BqXT%2FCQF1zXPyrntPCtF8EccbWmNVjx%2B%2B%2B9h54JRBqaxA9I6e9dTEEIsrz09YDT2FkbvT26Hr8aHZ1oNhfAX%2B4vcIILjomYx1N77vppRAZSm4lMD%2BPwjrN8hwsZZOBb9A4qrNRaApep0yTI%2FQeapEhFaF8kXwDzSyOJV8YCPnVLm8F1WwjfRAHcQMhN6aaJu1YnP0sLeKZGarbJ%2FMmSOUig%2FjUMJa908IGOqUByim7mRVfeqQ%2BX%2BLlLlyw1f7Gd0YJREqFE6XTXgw6b8VC1tK5dqAGKU449wUsSNlQ9%2BqYNKy8VcVCGneWzrnuxQEVaTN2MLj0gvwVPAtbP1LvgDhKj0gtlUgLFwyTuoD6AmLBsgeZwnXsvDtkxfhZPwt5mI3vKZPDK9%2FfmH%2BLfCrdDXidHoa3nHHf4hfO5DG68VQ0m7SkwkJu6dc0c%2BDhS3z8LBGv&X-Amz-Signature=1a1349b953cfc05175d5e50175380a9dc947b9d470e774fa9880e22a8ad3ba85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7SNDKCH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPczgOd8x3lYgRBspF%2BG4doKdemQjtJHilZLrT3pxNMAiEAhw9wK9t7LlrySmvlnJd353u9Y9a2F5QcUkiEBtsLJaAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTd1hOw%2Bh3TKoh8ayrcA6jeLAnEhhKp8jQAjJh6XJ41fhzDY0twMhEv683r2ewjY9Mg8eomfnX9TYjwGWB9pivMeeSltk5G9ADmcdV9wfTQ6C3Ym38LESXW7MaU7JyLfYkhLyD8qpBC7XvNMAV88erEAGDBrcL4RYQ0ek5QA4RC3w8Ts1HjF8IGQ2Pt1cADLp%2B74zJkLy1N7x27LkdxAimO20folBQWdPBwlgMamdi6dBbmE0M0gzv0mdALF7y%2FqDuRcJ%2FyTO764uBdYuYLkVUPplqMBuQ6JFKeMA1ee2uIxlFVDs5LKuktDE3xseIgZRUYwcYEFl4q4bHBjDI6uQlkQnv8VGTvrW9m4rgxmwUdh%2FYKhzk75TkCQa7GzM6GZadfmQtAr72xoptTNYW9l79FS%2BBXkSZV6TeqlNhi0BvS3p5gZ1jjz2BqXT%2FCQF1zXPyrntPCtF8EccbWmNVjx%2B%2B%2B9h54JRBqaxA9I6e9dTEEIsrz09YDT2FkbvT26Hr8aHZ1oNhfAX%2B4vcIILjomYx1N77vppRAZSm4lMD%2BPwjrN8hwsZZOBb9A4qrNRaApep0yTI%2FQeapEhFaF8kXwDzSyOJV8YCPnVLm8F1WwjfRAHcQMhN6aaJu1YnP0sLeKZGarbJ%2FMmSOUig%2FjUMJa908IGOqUByim7mRVfeqQ%2BX%2BLlLlyw1f7Gd0YJREqFE6XTXgw6b8VC1tK5dqAGKU449wUsSNlQ9%2BqYNKy8VcVCGneWzrnuxQEVaTN2MLj0gvwVPAtbP1LvgDhKj0gtlUgLFwyTuoD6AmLBsgeZwnXsvDtkxfhZPwt5mI3vKZPDK9%2FfmH%2BLfCrdDXidHoa3nHHf4hfO5DG68VQ0m7SkwkJu6dc0c%2BDhS3z8LBGv&X-Amz-Signature=bc28809e112f7d96ebabd168a056b1b306c1754ef949b0427870a885890fc2fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
