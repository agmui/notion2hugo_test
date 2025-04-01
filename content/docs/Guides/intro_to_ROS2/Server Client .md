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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRI5WX22%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEVXETECm2m84GBPW2a8ZneYKfcP4OCWKAg9jPsag1eRAiBtawjW0tfZ3n3mIJe9CQKYObX66mzDVtQ7sZqoPOSqEiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLeyJiixS9nWH%2Bf%2FtKtwDMXQQcoQBeqFh7W%2FhIBvFhu9caMt7FcPckV1rMRJTzyLVvd4fa75ix2c3MQD7KJZTXQF5a6vk10bMLuFy19jqCE96pEDW1gRHS3mh8wGIQ7Je5oYtKUdoG6uEv3xy8JreijoLrKcmp9sTn9b0ScUfdgaqKYjsBYWW62%2BIjGJbj7Qbps57t2%2FpLKpKCgJlC%2FtuzwJ1ZjhkH3o9WHLQgqj04qKCPLrhXMWx7nOCMz2AxfQ3wuK7xf4RB5tWWdRnnaZAosDGY4AbzEZYK3Hb%2FvyC2rewWJpWZv%2B4GC57%2Fi%2FdhRswVb4LCY9X3Rc5P9WPjBjzmSv7qGdS%2FwWIQX7JzjgP8fDooGry9eAa9WmGB3b0S7DXM6dJrGmLYTd6RJj7wg1tI8sXE2MwkypQEpPYEj0JUZS6QXutTp%2Fhnnn6kjjwHCoIxIQsKP7btQ3Y3cI9Ytfv2TPeiflqj1VPy1MMOiAuBRQ0PXKgvPhvYMTF3VNFff9%2BOZI3edLzjh7Uj2qOZG2fgNtpYAZ16WR962PSkm5avgcTPYtDx51cjf7xKODD355xZTXaFQYb7v6B38Cq%2FyTulwRYn8t4pP2HPNM5IZotbS26TtNknK4yBgY7wlbjlcRH67m%2FjEmIreaH2tsw39ysvwY6pgEGLXOI6%2BVvxnmVKJOy10fy2XIIe9QZuqrX5MV25Ma3fUEUkQ9pi8V1XpKQ9dyEhQFr4jmzyqjxA3iSq3rPbUorivegW53EdEhrNwdiyAjDB0lEOr6Ax%2FoIi2bF3EbmfD9hq3GsKBYbyL2DuD8yN1h1h80TSMXl5ynxuR%2Bs%2FfpToSUaW9qdIBWJ9Jy8mvURLXqBTE88Gcgv5ta0%2FdyPeW%2FfvBd6m0GF&X-Amz-Signature=ab1a3a5c3c40fb1b43b8f91eea97c97af33fafd210827f1cd0c7663cc83ecc7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRI5WX22%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEVXETECm2m84GBPW2a8ZneYKfcP4OCWKAg9jPsag1eRAiBtawjW0tfZ3n3mIJe9CQKYObX66mzDVtQ7sZqoPOSqEiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLeyJiixS9nWH%2Bf%2FtKtwDMXQQcoQBeqFh7W%2FhIBvFhu9caMt7FcPckV1rMRJTzyLVvd4fa75ix2c3MQD7KJZTXQF5a6vk10bMLuFy19jqCE96pEDW1gRHS3mh8wGIQ7Je5oYtKUdoG6uEv3xy8JreijoLrKcmp9sTn9b0ScUfdgaqKYjsBYWW62%2BIjGJbj7Qbps57t2%2FpLKpKCgJlC%2FtuzwJ1ZjhkH3o9WHLQgqj04qKCPLrhXMWx7nOCMz2AxfQ3wuK7xf4RB5tWWdRnnaZAosDGY4AbzEZYK3Hb%2FvyC2rewWJpWZv%2B4GC57%2Fi%2FdhRswVb4LCY9X3Rc5P9WPjBjzmSv7qGdS%2FwWIQX7JzjgP8fDooGry9eAa9WmGB3b0S7DXM6dJrGmLYTd6RJj7wg1tI8sXE2MwkypQEpPYEj0JUZS6QXutTp%2Fhnnn6kjjwHCoIxIQsKP7btQ3Y3cI9Ytfv2TPeiflqj1VPy1MMOiAuBRQ0PXKgvPhvYMTF3VNFff9%2BOZI3edLzjh7Uj2qOZG2fgNtpYAZ16WR962PSkm5avgcTPYtDx51cjf7xKODD355xZTXaFQYb7v6B38Cq%2FyTulwRYn8t4pP2HPNM5IZotbS26TtNknK4yBgY7wlbjlcRH67m%2FjEmIreaH2tsw39ysvwY6pgEGLXOI6%2BVvxnmVKJOy10fy2XIIe9QZuqrX5MV25Ma3fUEUkQ9pi8V1XpKQ9dyEhQFr4jmzyqjxA3iSq3rPbUorivegW53EdEhrNwdiyAjDB0lEOr6Ax%2FoIi2bF3EbmfD9hq3GsKBYbyL2DuD8yN1h1h80TSMXl5ynxuR%2Bs%2FfpToSUaW9qdIBWJ9Jy8mvURLXqBTE88Gcgv5ta0%2FdyPeW%2FfvBd6m0GF&X-Amz-Signature=ecd15ef6767155203c3710bf9ee1c49e5ed343fd96645ec9cc7ef0e9925f57ac&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRI5WX22%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEVXETECm2m84GBPW2a8ZneYKfcP4OCWKAg9jPsag1eRAiBtawjW0tfZ3n3mIJe9CQKYObX66mzDVtQ7sZqoPOSqEiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLeyJiixS9nWH%2Bf%2FtKtwDMXQQcoQBeqFh7W%2FhIBvFhu9caMt7FcPckV1rMRJTzyLVvd4fa75ix2c3MQD7KJZTXQF5a6vk10bMLuFy19jqCE96pEDW1gRHS3mh8wGIQ7Je5oYtKUdoG6uEv3xy8JreijoLrKcmp9sTn9b0ScUfdgaqKYjsBYWW62%2BIjGJbj7Qbps57t2%2FpLKpKCgJlC%2FtuzwJ1ZjhkH3o9WHLQgqj04qKCPLrhXMWx7nOCMz2AxfQ3wuK7xf4RB5tWWdRnnaZAosDGY4AbzEZYK3Hb%2FvyC2rewWJpWZv%2B4GC57%2Fi%2FdhRswVb4LCY9X3Rc5P9WPjBjzmSv7qGdS%2FwWIQX7JzjgP8fDooGry9eAa9WmGB3b0S7DXM6dJrGmLYTd6RJj7wg1tI8sXE2MwkypQEpPYEj0JUZS6QXutTp%2Fhnnn6kjjwHCoIxIQsKP7btQ3Y3cI9Ytfv2TPeiflqj1VPy1MMOiAuBRQ0PXKgvPhvYMTF3VNFff9%2BOZI3edLzjh7Uj2qOZG2fgNtpYAZ16WR962PSkm5avgcTPYtDx51cjf7xKODD355xZTXaFQYb7v6B38Cq%2FyTulwRYn8t4pP2HPNM5IZotbS26TtNknK4yBgY7wlbjlcRH67m%2FjEmIreaH2tsw39ysvwY6pgEGLXOI6%2BVvxnmVKJOy10fy2XIIe9QZuqrX5MV25Ma3fUEUkQ9pi8V1XpKQ9dyEhQFr4jmzyqjxA3iSq3rPbUorivegW53EdEhrNwdiyAjDB0lEOr6Ax%2FoIi2bF3EbmfD9hq3GsKBYbyL2DuD8yN1h1h80TSMXl5ynxuR%2Bs%2FfpToSUaW9qdIBWJ9Jy8mvURLXqBTE88Gcgv5ta0%2FdyPeW%2FfvBd6m0GF&X-Amz-Signature=b893daee926bfd2e959daed294e540b0688638e98b0cd093cee12968641ad353&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRI5WX22%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEVXETECm2m84GBPW2a8ZneYKfcP4OCWKAg9jPsag1eRAiBtawjW0tfZ3n3mIJe9CQKYObX66mzDVtQ7sZqoPOSqEiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLeyJiixS9nWH%2Bf%2FtKtwDMXQQcoQBeqFh7W%2FhIBvFhu9caMt7FcPckV1rMRJTzyLVvd4fa75ix2c3MQD7KJZTXQF5a6vk10bMLuFy19jqCE96pEDW1gRHS3mh8wGIQ7Je5oYtKUdoG6uEv3xy8JreijoLrKcmp9sTn9b0ScUfdgaqKYjsBYWW62%2BIjGJbj7Qbps57t2%2FpLKpKCgJlC%2FtuzwJ1ZjhkH3o9WHLQgqj04qKCPLrhXMWx7nOCMz2AxfQ3wuK7xf4RB5tWWdRnnaZAosDGY4AbzEZYK3Hb%2FvyC2rewWJpWZv%2B4GC57%2Fi%2FdhRswVb4LCY9X3Rc5P9WPjBjzmSv7qGdS%2FwWIQX7JzjgP8fDooGry9eAa9WmGB3b0S7DXM6dJrGmLYTd6RJj7wg1tI8sXE2MwkypQEpPYEj0JUZS6QXutTp%2Fhnnn6kjjwHCoIxIQsKP7btQ3Y3cI9Ytfv2TPeiflqj1VPy1MMOiAuBRQ0PXKgvPhvYMTF3VNFff9%2BOZI3edLzjh7Uj2qOZG2fgNtpYAZ16WR962PSkm5avgcTPYtDx51cjf7xKODD355xZTXaFQYb7v6B38Cq%2FyTulwRYn8t4pP2HPNM5IZotbS26TtNknK4yBgY7wlbjlcRH67m%2FjEmIreaH2tsw39ysvwY6pgEGLXOI6%2BVvxnmVKJOy10fy2XIIe9QZuqrX5MV25Ma3fUEUkQ9pi8V1XpKQ9dyEhQFr4jmzyqjxA3iSq3rPbUorivegW53EdEhrNwdiyAjDB0lEOr6Ax%2FoIi2bF3EbmfD9hq3GsKBYbyL2DuD8yN1h1h80TSMXl5ynxuR%2Bs%2FfpToSUaW9qdIBWJ9Jy8mvURLXqBTE88Gcgv5ta0%2FdyPeW%2FfvBd6m0GF&X-Amz-Signature=b04b3c3dddb2ff5d5afded09e50115ef382620e7f434dfaf78bd1788e475626e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRI5WX22%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEVXETECm2m84GBPW2a8ZneYKfcP4OCWKAg9jPsag1eRAiBtawjW0tfZ3n3mIJe9CQKYObX66mzDVtQ7sZqoPOSqEiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLeyJiixS9nWH%2Bf%2FtKtwDMXQQcoQBeqFh7W%2FhIBvFhu9caMt7FcPckV1rMRJTzyLVvd4fa75ix2c3MQD7KJZTXQF5a6vk10bMLuFy19jqCE96pEDW1gRHS3mh8wGIQ7Je5oYtKUdoG6uEv3xy8JreijoLrKcmp9sTn9b0ScUfdgaqKYjsBYWW62%2BIjGJbj7Qbps57t2%2FpLKpKCgJlC%2FtuzwJ1ZjhkH3o9WHLQgqj04qKCPLrhXMWx7nOCMz2AxfQ3wuK7xf4RB5tWWdRnnaZAosDGY4AbzEZYK3Hb%2FvyC2rewWJpWZv%2B4GC57%2Fi%2FdhRswVb4LCY9X3Rc5P9WPjBjzmSv7qGdS%2FwWIQX7JzjgP8fDooGry9eAa9WmGB3b0S7DXM6dJrGmLYTd6RJj7wg1tI8sXE2MwkypQEpPYEj0JUZS6QXutTp%2Fhnnn6kjjwHCoIxIQsKP7btQ3Y3cI9Ytfv2TPeiflqj1VPy1MMOiAuBRQ0PXKgvPhvYMTF3VNFff9%2BOZI3edLzjh7Uj2qOZG2fgNtpYAZ16WR962PSkm5avgcTPYtDx51cjf7xKODD355xZTXaFQYb7v6B38Cq%2FyTulwRYn8t4pP2HPNM5IZotbS26TtNknK4yBgY7wlbjlcRH67m%2FjEmIreaH2tsw39ysvwY6pgEGLXOI6%2BVvxnmVKJOy10fy2XIIe9QZuqrX5MV25Ma3fUEUkQ9pi8V1XpKQ9dyEhQFr4jmzyqjxA3iSq3rPbUorivegW53EdEhrNwdiyAjDB0lEOr6Ax%2FoIi2bF3EbmfD9hq3GsKBYbyL2DuD8yN1h1h80TSMXl5ynxuR%2Bs%2FfpToSUaW9qdIBWJ9Jy8mvURLXqBTE88Gcgv5ta0%2FdyPeW%2FfvBd6m0GF&X-Amz-Signature=a738a1e36688115abce74605e82c718c2dda687cd7dd91bb459d5cb7c5aeef6b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
