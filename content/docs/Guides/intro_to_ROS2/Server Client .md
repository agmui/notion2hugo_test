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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGTFHH2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD67V6%2BZdD4kd1dx1wJup%2FX2JODmcBF%2FLO1FFFjw%2FF6xgIhAMAnmCq5VipUFutV%2BrCaaHfPeT4n8LyQyN9Ng%2BuNJKviKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq4kg4o6suCqQ62wUq3APIomSUiK%2BinUQuIESlYg64aNETE5%2FVH8BhycEkkLX4TDfIbg5ZTh8GdFY3DTmhTdXpy6yuc1GLdrUO2U2%2BV7LXVSxdig3GB%2FSQsr1d3L6eSOBpX3WuqZxqWmJfI3s5cIbZCcUwzFvZq0%2FkbkzcKbCVyJqTn3Ychge5q3%2FaYqIjgZPRadvd%2FQ3KgCS6lAQ1HkcbWHHRmA3Q8Nkmgz8tA9feOEe2A5Z7QlmSkez7jXUj0th%2BXS%2BZArMV5e%2FeU3O%2Fkry%2BnhqNN%2B%2Bc7btvII0YGSjQUzO1BweKjDIeETRP1IDcJaz4fZr0lzxWzUcc7dY06Ft5IeoQ2WW6Z%2BQ%2Bh3BQrBaWd4jA%2F7XBDtrfyfhhRghXN2%2FD4anp99EAc7jOc8f%2B0s83IPNtOYsEmD9OoAm5u613M9457sacAfTUdkPKCmFPCxGXenUfzebhHMn7k6VhzBTBrrSvJDzgMOdrVBmCowFhdv10itGshgRQT%2FBKPpD%2FH42Mjr8oPQ98wLNa3xeSAEG%2F%2BpbQm4m1Y1Hc1sazbN1TQtruXycqgoTtRlEs5oN3mVO903qmQVkO0uT9BoBdWJk77OjNW40WdXx%2FT%2BoPinQriGAhBWO3NtQZaLX%2FFpf%2BfSlUF6QDh0zds1nvoDD53OXBBjqkAQD0it0WttHhaBAjP5kz8UT8aEgz1wgynQDnP3%2BhU9zuM8kTV2veU9Ah50srfBlzqc7EkGf9aFrS0V8u0PTp8uNG146VEhMdjQ%2BNORV1gzc9wrtwV2FFj4VIud8%2BTY6HzisYOhwppNd0AuFhVpzRyy6NQ9zR62aB5rkbcAjt5rNfjYzDusZkcSDPoUkaJ9h%2B%2BYoxUL2vyncSKXaHfqMT75UjkRy7&X-Amz-Signature=643cfeee0face96c8042433e91e53dc4e0e39e74a72a95192743e7dd0322eeeb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGTFHH2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD67V6%2BZdD4kd1dx1wJup%2FX2JODmcBF%2FLO1FFFjw%2FF6xgIhAMAnmCq5VipUFutV%2BrCaaHfPeT4n8LyQyN9Ng%2BuNJKviKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq4kg4o6suCqQ62wUq3APIomSUiK%2BinUQuIESlYg64aNETE5%2FVH8BhycEkkLX4TDfIbg5ZTh8GdFY3DTmhTdXpy6yuc1GLdrUO2U2%2BV7LXVSxdig3GB%2FSQsr1d3L6eSOBpX3WuqZxqWmJfI3s5cIbZCcUwzFvZq0%2FkbkzcKbCVyJqTn3Ychge5q3%2FaYqIjgZPRadvd%2FQ3KgCS6lAQ1HkcbWHHRmA3Q8Nkmgz8tA9feOEe2A5Z7QlmSkez7jXUj0th%2BXS%2BZArMV5e%2FeU3O%2Fkry%2BnhqNN%2B%2Bc7btvII0YGSjQUzO1BweKjDIeETRP1IDcJaz4fZr0lzxWzUcc7dY06Ft5IeoQ2WW6Z%2BQ%2Bh3BQrBaWd4jA%2F7XBDtrfyfhhRghXN2%2FD4anp99EAc7jOc8f%2B0s83IPNtOYsEmD9OoAm5u613M9457sacAfTUdkPKCmFPCxGXenUfzebhHMn7k6VhzBTBrrSvJDzgMOdrVBmCowFhdv10itGshgRQT%2FBKPpD%2FH42Mjr8oPQ98wLNa3xeSAEG%2F%2BpbQm4m1Y1Hc1sazbN1TQtruXycqgoTtRlEs5oN3mVO903qmQVkO0uT9BoBdWJk77OjNW40WdXx%2FT%2BoPinQriGAhBWO3NtQZaLX%2FFpf%2BfSlUF6QDh0zds1nvoDD53OXBBjqkAQD0it0WttHhaBAjP5kz8UT8aEgz1wgynQDnP3%2BhU9zuM8kTV2veU9Ah50srfBlzqc7EkGf9aFrS0V8u0PTp8uNG146VEhMdjQ%2BNORV1gzc9wrtwV2FFj4VIud8%2BTY6HzisYOhwppNd0AuFhVpzRyy6NQ9zR62aB5rkbcAjt5rNfjYzDusZkcSDPoUkaJ9h%2B%2BYoxUL2vyncSKXaHfqMT75UjkRy7&X-Amz-Signature=9f5c734fa93babfdc690eba803aacbf9c85ee1d37a973af5983d60804855e724&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGTFHH2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD67V6%2BZdD4kd1dx1wJup%2FX2JODmcBF%2FLO1FFFjw%2FF6xgIhAMAnmCq5VipUFutV%2BrCaaHfPeT4n8LyQyN9Ng%2BuNJKviKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq4kg4o6suCqQ62wUq3APIomSUiK%2BinUQuIESlYg64aNETE5%2FVH8BhycEkkLX4TDfIbg5ZTh8GdFY3DTmhTdXpy6yuc1GLdrUO2U2%2BV7LXVSxdig3GB%2FSQsr1d3L6eSOBpX3WuqZxqWmJfI3s5cIbZCcUwzFvZq0%2FkbkzcKbCVyJqTn3Ychge5q3%2FaYqIjgZPRadvd%2FQ3KgCS6lAQ1HkcbWHHRmA3Q8Nkmgz8tA9feOEe2A5Z7QlmSkez7jXUj0th%2BXS%2BZArMV5e%2FeU3O%2Fkry%2BnhqNN%2B%2Bc7btvII0YGSjQUzO1BweKjDIeETRP1IDcJaz4fZr0lzxWzUcc7dY06Ft5IeoQ2WW6Z%2BQ%2Bh3BQrBaWd4jA%2F7XBDtrfyfhhRghXN2%2FD4anp99EAc7jOc8f%2B0s83IPNtOYsEmD9OoAm5u613M9457sacAfTUdkPKCmFPCxGXenUfzebhHMn7k6VhzBTBrrSvJDzgMOdrVBmCowFhdv10itGshgRQT%2FBKPpD%2FH42Mjr8oPQ98wLNa3xeSAEG%2F%2BpbQm4m1Y1Hc1sazbN1TQtruXycqgoTtRlEs5oN3mVO903qmQVkO0uT9BoBdWJk77OjNW40WdXx%2FT%2BoPinQriGAhBWO3NtQZaLX%2FFpf%2BfSlUF6QDh0zds1nvoDD53OXBBjqkAQD0it0WttHhaBAjP5kz8UT8aEgz1wgynQDnP3%2BhU9zuM8kTV2veU9Ah50srfBlzqc7EkGf9aFrS0V8u0PTp8uNG146VEhMdjQ%2BNORV1gzc9wrtwV2FFj4VIud8%2BTY6HzisYOhwppNd0AuFhVpzRyy6NQ9zR62aB5rkbcAjt5rNfjYzDusZkcSDPoUkaJ9h%2B%2BYoxUL2vyncSKXaHfqMT75UjkRy7&X-Amz-Signature=9989ac982b3e0751910092e01f0ea1b089f124e63df2e310216cd9c47adf1358&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGTFHH2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD67V6%2BZdD4kd1dx1wJup%2FX2JODmcBF%2FLO1FFFjw%2FF6xgIhAMAnmCq5VipUFutV%2BrCaaHfPeT4n8LyQyN9Ng%2BuNJKviKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq4kg4o6suCqQ62wUq3APIomSUiK%2BinUQuIESlYg64aNETE5%2FVH8BhycEkkLX4TDfIbg5ZTh8GdFY3DTmhTdXpy6yuc1GLdrUO2U2%2BV7LXVSxdig3GB%2FSQsr1d3L6eSOBpX3WuqZxqWmJfI3s5cIbZCcUwzFvZq0%2FkbkzcKbCVyJqTn3Ychge5q3%2FaYqIjgZPRadvd%2FQ3KgCS6lAQ1HkcbWHHRmA3Q8Nkmgz8tA9feOEe2A5Z7QlmSkez7jXUj0th%2BXS%2BZArMV5e%2FeU3O%2Fkry%2BnhqNN%2B%2Bc7btvII0YGSjQUzO1BweKjDIeETRP1IDcJaz4fZr0lzxWzUcc7dY06Ft5IeoQ2WW6Z%2BQ%2Bh3BQrBaWd4jA%2F7XBDtrfyfhhRghXN2%2FD4anp99EAc7jOc8f%2B0s83IPNtOYsEmD9OoAm5u613M9457sacAfTUdkPKCmFPCxGXenUfzebhHMn7k6VhzBTBrrSvJDzgMOdrVBmCowFhdv10itGshgRQT%2FBKPpD%2FH42Mjr8oPQ98wLNa3xeSAEG%2F%2BpbQm4m1Y1Hc1sazbN1TQtruXycqgoTtRlEs5oN3mVO903qmQVkO0uT9BoBdWJk77OjNW40WdXx%2FT%2BoPinQriGAhBWO3NtQZaLX%2FFpf%2BfSlUF6QDh0zds1nvoDD53OXBBjqkAQD0it0WttHhaBAjP5kz8UT8aEgz1wgynQDnP3%2BhU9zuM8kTV2veU9Ah50srfBlzqc7EkGf9aFrS0V8u0PTp8uNG146VEhMdjQ%2BNORV1gzc9wrtwV2FFj4VIud8%2BTY6HzisYOhwppNd0AuFhVpzRyy6NQ9zR62aB5rkbcAjt5rNfjYzDusZkcSDPoUkaJ9h%2B%2BYoxUL2vyncSKXaHfqMT75UjkRy7&X-Amz-Signature=222d510cacc72f3d77d26752bc031262fc8b74dc7de835bdbe7654c939d700f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGTFHH2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD67V6%2BZdD4kd1dx1wJup%2FX2JODmcBF%2FLO1FFFjw%2FF6xgIhAMAnmCq5VipUFutV%2BrCaaHfPeT4n8LyQyN9Ng%2BuNJKviKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq4kg4o6suCqQ62wUq3APIomSUiK%2BinUQuIESlYg64aNETE5%2FVH8BhycEkkLX4TDfIbg5ZTh8GdFY3DTmhTdXpy6yuc1GLdrUO2U2%2BV7LXVSxdig3GB%2FSQsr1d3L6eSOBpX3WuqZxqWmJfI3s5cIbZCcUwzFvZq0%2FkbkzcKbCVyJqTn3Ychge5q3%2FaYqIjgZPRadvd%2FQ3KgCS6lAQ1HkcbWHHRmA3Q8Nkmgz8tA9feOEe2A5Z7QlmSkez7jXUj0th%2BXS%2BZArMV5e%2FeU3O%2Fkry%2BnhqNN%2B%2Bc7btvII0YGSjQUzO1BweKjDIeETRP1IDcJaz4fZr0lzxWzUcc7dY06Ft5IeoQ2WW6Z%2BQ%2Bh3BQrBaWd4jA%2F7XBDtrfyfhhRghXN2%2FD4anp99EAc7jOc8f%2B0s83IPNtOYsEmD9OoAm5u613M9457sacAfTUdkPKCmFPCxGXenUfzebhHMn7k6VhzBTBrrSvJDzgMOdrVBmCowFhdv10itGshgRQT%2FBKPpD%2FH42Mjr8oPQ98wLNa3xeSAEG%2F%2BpbQm4m1Y1Hc1sazbN1TQtruXycqgoTtRlEs5oN3mVO903qmQVkO0uT9BoBdWJk77OjNW40WdXx%2FT%2BoPinQriGAhBWO3NtQZaLX%2FFpf%2BfSlUF6QDh0zds1nvoDD53OXBBjqkAQD0it0WttHhaBAjP5kz8UT8aEgz1wgynQDnP3%2BhU9zuM8kTV2veU9Ah50srfBlzqc7EkGf9aFrS0V8u0PTp8uNG146VEhMdjQ%2BNORV1gzc9wrtwV2FFj4VIud8%2BTY6HzisYOhwppNd0AuFhVpzRyy6NQ9zR62aB5rkbcAjt5rNfjYzDusZkcSDPoUkaJ9h%2B%2BYoxUL2vyncSKXaHfqMT75UjkRy7&X-Amz-Signature=ca29c664b875f13c23b5cde051aca17145515fcb7fe7d3e060904bd9328b6e2c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
