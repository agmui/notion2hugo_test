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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7PLOAO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDODWpMDLE2kePtSf9jgv6po8arokjzUgVzuQmp%2BcT7TwIhAOlj1IG%2B1NVuW96doXjsiHB0vzkeg%2Fxqu0mC7vqJRldiKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp%2FJk28df9I1%2FFjegq3AOT61ehF7idFZBRBLyC8oFZib%2BSJJoQtpHYsawny%2F9HEtHSsBixmzwGv6q4j9zJvKOQxpqfcjVTLIK9ib%2Bu4kjSS1t1zG1uvLLGmWobeQXogJrBixoQgZ8rmRVJA7XXcr%2Byel4Kfh7XxjeAgwKEv3b0rYzOO8X3e6zRTdZxZuGq3Q7VGX%2Ffm93NnmNp7qYmBDujEyYlmOGAB2L1HL%2Fgp7tB9twmWGznNI43tUcJ4FDbqcSFjJDjO1x%2BzuSjccvGz0zPgMVP0oBcnI%2FJWFfIFVV12XrKcwgb0da0axYpJ73EyXdKmFriIUPeKUbc3%2FZxGIFS%2F9cQ2Xoi%2BUgDg6JT6ueZIUAAbTrSoZ4OWmP3C6dhgt79Pfppl7BI%2FSpY8UEUqCIqcvTElXly9xPcXILyEP5NSYmHNYoM3XiYDApUQrv1nHH90kTmDrgtiF%2BTxA6NVuWh1FK9UPVeHso2%2BUM59MCZnnoXOU93pMTRkng817y72Euek8hvchpfZhC1suF5UDjYr%2Bh04f4PAbmB6xMg2osw0mVzdAiSUMVDaMLynob5fs7ztRjDEYIMmxSjPFNyi9gmTejw0USezuJ5g4%2FxwRTQrwNMqmCFifqqwnG9eAs1V3MwmG9oLOxDmlYvVjD2i4i%2BBjqkARw8lnbBygmK0Mc8x3f6vcazSJjq2IPpEX9bsYhBpqQnJD1KpohiuRPtgCr5nqVoD%2FUr%2FwVyXCiKccYhoHC20Dn28J%2BmAxJ6hvJAL%2B6OFPVR4is1NyquU9NiJPHMN5%2FQhZ%2F1AN8hDelE3Y9RQ9AmH7qqaxbWv1c%2FUguCVeHH%2FJZ1yViq0qoVwgQXiMG5yP49bcaoGBWk0ADnmwaAQZ5AYiNVQ71U&X-Amz-Signature=5ec793d0ce4c99847504935846baa171c7c23606c46dc68a5192d3bdcbe2c542&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7PLOAO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDODWpMDLE2kePtSf9jgv6po8arokjzUgVzuQmp%2BcT7TwIhAOlj1IG%2B1NVuW96doXjsiHB0vzkeg%2Fxqu0mC7vqJRldiKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp%2FJk28df9I1%2FFjegq3AOT61ehF7idFZBRBLyC8oFZib%2BSJJoQtpHYsawny%2F9HEtHSsBixmzwGv6q4j9zJvKOQxpqfcjVTLIK9ib%2Bu4kjSS1t1zG1uvLLGmWobeQXogJrBixoQgZ8rmRVJA7XXcr%2Byel4Kfh7XxjeAgwKEv3b0rYzOO8X3e6zRTdZxZuGq3Q7VGX%2Ffm93NnmNp7qYmBDujEyYlmOGAB2L1HL%2Fgp7tB9twmWGznNI43tUcJ4FDbqcSFjJDjO1x%2BzuSjccvGz0zPgMVP0oBcnI%2FJWFfIFVV12XrKcwgb0da0axYpJ73EyXdKmFriIUPeKUbc3%2FZxGIFS%2F9cQ2Xoi%2BUgDg6JT6ueZIUAAbTrSoZ4OWmP3C6dhgt79Pfppl7BI%2FSpY8UEUqCIqcvTElXly9xPcXILyEP5NSYmHNYoM3XiYDApUQrv1nHH90kTmDrgtiF%2BTxA6NVuWh1FK9UPVeHso2%2BUM59MCZnnoXOU93pMTRkng817y72Euek8hvchpfZhC1suF5UDjYr%2Bh04f4PAbmB6xMg2osw0mVzdAiSUMVDaMLynob5fs7ztRjDEYIMmxSjPFNyi9gmTejw0USezuJ5g4%2FxwRTQrwNMqmCFifqqwnG9eAs1V3MwmG9oLOxDmlYvVjD2i4i%2BBjqkARw8lnbBygmK0Mc8x3f6vcazSJjq2IPpEX9bsYhBpqQnJD1KpohiuRPtgCr5nqVoD%2FUr%2FwVyXCiKccYhoHC20Dn28J%2BmAxJ6hvJAL%2B6OFPVR4is1NyquU9NiJPHMN5%2FQhZ%2F1AN8hDelE3Y9RQ9AmH7qqaxbWv1c%2FUguCVeHH%2FJZ1yViq0qoVwgQXiMG5yP49bcaoGBWk0ADnmwaAQZ5AYiNVQ71U&X-Amz-Signature=9bf3ea8fcae210c08aa4844f7270afb8c7db932f8c3feae1ff22632b203d2483&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7PLOAO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDODWpMDLE2kePtSf9jgv6po8arokjzUgVzuQmp%2BcT7TwIhAOlj1IG%2B1NVuW96doXjsiHB0vzkeg%2Fxqu0mC7vqJRldiKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp%2FJk28df9I1%2FFjegq3AOT61ehF7idFZBRBLyC8oFZib%2BSJJoQtpHYsawny%2F9HEtHSsBixmzwGv6q4j9zJvKOQxpqfcjVTLIK9ib%2Bu4kjSS1t1zG1uvLLGmWobeQXogJrBixoQgZ8rmRVJA7XXcr%2Byel4Kfh7XxjeAgwKEv3b0rYzOO8X3e6zRTdZxZuGq3Q7VGX%2Ffm93NnmNp7qYmBDujEyYlmOGAB2L1HL%2Fgp7tB9twmWGznNI43tUcJ4FDbqcSFjJDjO1x%2BzuSjccvGz0zPgMVP0oBcnI%2FJWFfIFVV12XrKcwgb0da0axYpJ73EyXdKmFriIUPeKUbc3%2FZxGIFS%2F9cQ2Xoi%2BUgDg6JT6ueZIUAAbTrSoZ4OWmP3C6dhgt79Pfppl7BI%2FSpY8UEUqCIqcvTElXly9xPcXILyEP5NSYmHNYoM3XiYDApUQrv1nHH90kTmDrgtiF%2BTxA6NVuWh1FK9UPVeHso2%2BUM59MCZnnoXOU93pMTRkng817y72Euek8hvchpfZhC1suF5UDjYr%2Bh04f4PAbmB6xMg2osw0mVzdAiSUMVDaMLynob5fs7ztRjDEYIMmxSjPFNyi9gmTejw0USezuJ5g4%2FxwRTQrwNMqmCFifqqwnG9eAs1V3MwmG9oLOxDmlYvVjD2i4i%2BBjqkARw8lnbBygmK0Mc8x3f6vcazSJjq2IPpEX9bsYhBpqQnJD1KpohiuRPtgCr5nqVoD%2FUr%2FwVyXCiKccYhoHC20Dn28J%2BmAxJ6hvJAL%2B6OFPVR4is1NyquU9NiJPHMN5%2FQhZ%2F1AN8hDelE3Y9RQ9AmH7qqaxbWv1c%2FUguCVeHH%2FJZ1yViq0qoVwgQXiMG5yP49bcaoGBWk0ADnmwaAQZ5AYiNVQ71U&X-Amz-Signature=9ed4f6db6bd9d4693ca593557265764145303101bbaadcbe63bb6ee9553277de&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7PLOAO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDODWpMDLE2kePtSf9jgv6po8arokjzUgVzuQmp%2BcT7TwIhAOlj1IG%2B1NVuW96doXjsiHB0vzkeg%2Fxqu0mC7vqJRldiKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp%2FJk28df9I1%2FFjegq3AOT61ehF7idFZBRBLyC8oFZib%2BSJJoQtpHYsawny%2F9HEtHSsBixmzwGv6q4j9zJvKOQxpqfcjVTLIK9ib%2Bu4kjSS1t1zG1uvLLGmWobeQXogJrBixoQgZ8rmRVJA7XXcr%2Byel4Kfh7XxjeAgwKEv3b0rYzOO8X3e6zRTdZxZuGq3Q7VGX%2Ffm93NnmNp7qYmBDujEyYlmOGAB2L1HL%2Fgp7tB9twmWGznNI43tUcJ4FDbqcSFjJDjO1x%2BzuSjccvGz0zPgMVP0oBcnI%2FJWFfIFVV12XrKcwgb0da0axYpJ73EyXdKmFriIUPeKUbc3%2FZxGIFS%2F9cQ2Xoi%2BUgDg6JT6ueZIUAAbTrSoZ4OWmP3C6dhgt79Pfppl7BI%2FSpY8UEUqCIqcvTElXly9xPcXILyEP5NSYmHNYoM3XiYDApUQrv1nHH90kTmDrgtiF%2BTxA6NVuWh1FK9UPVeHso2%2BUM59MCZnnoXOU93pMTRkng817y72Euek8hvchpfZhC1suF5UDjYr%2Bh04f4PAbmB6xMg2osw0mVzdAiSUMVDaMLynob5fs7ztRjDEYIMmxSjPFNyi9gmTejw0USezuJ5g4%2FxwRTQrwNMqmCFifqqwnG9eAs1V3MwmG9oLOxDmlYvVjD2i4i%2BBjqkARw8lnbBygmK0Mc8x3f6vcazSJjq2IPpEX9bsYhBpqQnJD1KpohiuRPtgCr5nqVoD%2FUr%2FwVyXCiKccYhoHC20Dn28J%2BmAxJ6hvJAL%2B6OFPVR4is1NyquU9NiJPHMN5%2FQhZ%2F1AN8hDelE3Y9RQ9AmH7qqaxbWv1c%2FUguCVeHH%2FJZ1yViq0qoVwgQXiMG5yP49bcaoGBWk0ADnmwaAQZ5AYiNVQ71U&X-Amz-Signature=d935b892b9c680513a3e0dc58a7c7ae89b2a124d40b60aad02071c55a6e66834&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7PLOAO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDODWpMDLE2kePtSf9jgv6po8arokjzUgVzuQmp%2BcT7TwIhAOlj1IG%2B1NVuW96doXjsiHB0vzkeg%2Fxqu0mC7vqJRldiKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp%2FJk28df9I1%2FFjegq3AOT61ehF7idFZBRBLyC8oFZib%2BSJJoQtpHYsawny%2F9HEtHSsBixmzwGv6q4j9zJvKOQxpqfcjVTLIK9ib%2Bu4kjSS1t1zG1uvLLGmWobeQXogJrBixoQgZ8rmRVJA7XXcr%2Byel4Kfh7XxjeAgwKEv3b0rYzOO8X3e6zRTdZxZuGq3Q7VGX%2Ffm93NnmNp7qYmBDujEyYlmOGAB2L1HL%2Fgp7tB9twmWGznNI43tUcJ4FDbqcSFjJDjO1x%2BzuSjccvGz0zPgMVP0oBcnI%2FJWFfIFVV12XrKcwgb0da0axYpJ73EyXdKmFriIUPeKUbc3%2FZxGIFS%2F9cQ2Xoi%2BUgDg6JT6ueZIUAAbTrSoZ4OWmP3C6dhgt79Pfppl7BI%2FSpY8UEUqCIqcvTElXly9xPcXILyEP5NSYmHNYoM3XiYDApUQrv1nHH90kTmDrgtiF%2BTxA6NVuWh1FK9UPVeHso2%2BUM59MCZnnoXOU93pMTRkng817y72Euek8hvchpfZhC1suF5UDjYr%2Bh04f4PAbmB6xMg2osw0mVzdAiSUMVDaMLynob5fs7ztRjDEYIMmxSjPFNyi9gmTejw0USezuJ5g4%2FxwRTQrwNMqmCFifqqwnG9eAs1V3MwmG9oLOxDmlYvVjD2i4i%2BBjqkARw8lnbBygmK0Mc8x3f6vcazSJjq2IPpEX9bsYhBpqQnJD1KpohiuRPtgCr5nqVoD%2FUr%2FwVyXCiKccYhoHC20Dn28J%2BmAxJ6hvJAL%2B6OFPVR4is1NyquU9NiJPHMN5%2FQhZ%2F1AN8hDelE3Y9RQ9AmH7qqaxbWv1c%2FUguCVeHH%2FJZ1yViq0qoVwgQXiMG5yP49bcaoGBWk0ADnmwaAQZ5AYiNVQ71U&X-Amz-Signature=66b99f49ed4697d751d667af8f6da29a055a8bd47eb0a640067b0773c8380a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
