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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQMOMTBH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQrp336VIJgp%2F4YBXCkvcMxZl2lpj2JAIfpkUVKrKxBAIgJMCGbhh%2BC%2BZFUnkN5SD1c93GIXWIsxcH3yqLrv4EnHUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiad0OOvJHcYPmzhircAx745avihwabiRFhzRWqpmdFSxmtgQjMrFLQy6bq%2BWXf4OnMO5jstiTl3bxvvN7USZ8CWgwJKRuZsOPxAbaeFiBQXOyajHoRe9v5gWxyrcdyQ00%2BxsrIIwFTmiPpSlITani92xpbKMA9os9jV7aCt88pUYts4xbQSN4Lrj6kdFf03G9RBabrsBm7Kk8OecujtzevAt9L2FgRzPsYGr7EVOCANIH4T9zFu9R%2FTkZL1BvoMDxiVEGynKQwiV8nAYUS0ouI%2BocDg1WAVky0OCoyawCBk0mNEpV1ED1Cy%2FZZx9eg03UJvGTF86bZqL%2FiI%2B3FdTNG8OqL8k%2F7EBFOiORVH6FBCG41j4NppZx36aPdaRi%2BL16HFOgppS6DNpwzoRpFMlTcr%2BK%2F0vt5qxCp%2ByT9yMwbw9IKpi9GNuW3auH0snELiHgnD%2FGKrM9bVmd%2FNSg33cDGTyseuLrTUQqTvbvuALk8S%2BQ8zxBQDL1H0galP910%2BxQSaubDjwhkJqMr%2B1tjGDXHNJd6xe35lTYWZKffEFfxSwCjEmO6teJANzb%2F3NLCc0rvR9Yv%2BOnwYOsf8VVzTIKf%2BfTOUJV4aT6tTccltxOI0gr2jNLMXmHsJFxDQTJ8kkSOKcxGHAW8YoiQMPPC9rwGOqUBhiZbn5plpAWkj2szWIuO20EBaJrNFmI7%2F3eTKeXQAl3lsIvt9cS6XbQw%2F4w12zuMXPaglTpWwxULHenHExeTm1kfBVvBggsmJpK9IUAx0wYPUnIq%2BjNQJWkThRlzD1m0K7b9F7EbAhWmzwR4NMeT4xrtyTIYaPEoECex3kWsgH4wO4%2FhEfdE1A14XzfEqvJY3U9LeFQ3llxOGexSeDMWJUvO%2B0ST&X-Amz-Signature=b7e2742c90b8e1c4d5916ba19b600b74abfaf419b018c7ff32fdb69366eda83f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQMOMTBH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQrp336VIJgp%2F4YBXCkvcMxZl2lpj2JAIfpkUVKrKxBAIgJMCGbhh%2BC%2BZFUnkN5SD1c93GIXWIsxcH3yqLrv4EnHUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiad0OOvJHcYPmzhircAx745avihwabiRFhzRWqpmdFSxmtgQjMrFLQy6bq%2BWXf4OnMO5jstiTl3bxvvN7USZ8CWgwJKRuZsOPxAbaeFiBQXOyajHoRe9v5gWxyrcdyQ00%2BxsrIIwFTmiPpSlITani92xpbKMA9os9jV7aCt88pUYts4xbQSN4Lrj6kdFf03G9RBabrsBm7Kk8OecujtzevAt9L2FgRzPsYGr7EVOCANIH4T9zFu9R%2FTkZL1BvoMDxiVEGynKQwiV8nAYUS0ouI%2BocDg1WAVky0OCoyawCBk0mNEpV1ED1Cy%2FZZx9eg03UJvGTF86bZqL%2FiI%2B3FdTNG8OqL8k%2F7EBFOiORVH6FBCG41j4NppZx36aPdaRi%2BL16HFOgppS6DNpwzoRpFMlTcr%2BK%2F0vt5qxCp%2ByT9yMwbw9IKpi9GNuW3auH0snELiHgnD%2FGKrM9bVmd%2FNSg33cDGTyseuLrTUQqTvbvuALk8S%2BQ8zxBQDL1H0galP910%2BxQSaubDjwhkJqMr%2B1tjGDXHNJd6xe35lTYWZKffEFfxSwCjEmO6teJANzb%2F3NLCc0rvR9Yv%2BOnwYOsf8VVzTIKf%2BfTOUJV4aT6tTccltxOI0gr2jNLMXmHsJFxDQTJ8kkSOKcxGHAW8YoiQMPPC9rwGOqUBhiZbn5plpAWkj2szWIuO20EBaJrNFmI7%2F3eTKeXQAl3lsIvt9cS6XbQw%2F4w12zuMXPaglTpWwxULHenHExeTm1kfBVvBggsmJpK9IUAx0wYPUnIq%2BjNQJWkThRlzD1m0K7b9F7EbAhWmzwR4NMeT4xrtyTIYaPEoECex3kWsgH4wO4%2FhEfdE1A14XzfEqvJY3U9LeFQ3llxOGexSeDMWJUvO%2B0ST&X-Amz-Signature=5b95f280f87dc9233c6f8d650e2abb2d331a4140f5c9b29ac1e8869c430b818a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQMOMTBH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQrp336VIJgp%2F4YBXCkvcMxZl2lpj2JAIfpkUVKrKxBAIgJMCGbhh%2BC%2BZFUnkN5SD1c93GIXWIsxcH3yqLrv4EnHUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiad0OOvJHcYPmzhircAx745avihwabiRFhzRWqpmdFSxmtgQjMrFLQy6bq%2BWXf4OnMO5jstiTl3bxvvN7USZ8CWgwJKRuZsOPxAbaeFiBQXOyajHoRe9v5gWxyrcdyQ00%2BxsrIIwFTmiPpSlITani92xpbKMA9os9jV7aCt88pUYts4xbQSN4Lrj6kdFf03G9RBabrsBm7Kk8OecujtzevAt9L2FgRzPsYGr7EVOCANIH4T9zFu9R%2FTkZL1BvoMDxiVEGynKQwiV8nAYUS0ouI%2BocDg1WAVky0OCoyawCBk0mNEpV1ED1Cy%2FZZx9eg03UJvGTF86bZqL%2FiI%2B3FdTNG8OqL8k%2F7EBFOiORVH6FBCG41j4NppZx36aPdaRi%2BL16HFOgppS6DNpwzoRpFMlTcr%2BK%2F0vt5qxCp%2ByT9yMwbw9IKpi9GNuW3auH0snELiHgnD%2FGKrM9bVmd%2FNSg33cDGTyseuLrTUQqTvbvuALk8S%2BQ8zxBQDL1H0galP910%2BxQSaubDjwhkJqMr%2B1tjGDXHNJd6xe35lTYWZKffEFfxSwCjEmO6teJANzb%2F3NLCc0rvR9Yv%2BOnwYOsf8VVzTIKf%2BfTOUJV4aT6tTccltxOI0gr2jNLMXmHsJFxDQTJ8kkSOKcxGHAW8YoiQMPPC9rwGOqUBhiZbn5plpAWkj2szWIuO20EBaJrNFmI7%2F3eTKeXQAl3lsIvt9cS6XbQw%2F4w12zuMXPaglTpWwxULHenHExeTm1kfBVvBggsmJpK9IUAx0wYPUnIq%2BjNQJWkThRlzD1m0K7b9F7EbAhWmzwR4NMeT4xrtyTIYaPEoECex3kWsgH4wO4%2FhEfdE1A14XzfEqvJY3U9LeFQ3llxOGexSeDMWJUvO%2B0ST&X-Amz-Signature=8e9137aefb92ac9cf993127426352ba45249d1575e10f7c8a23d7418f4b766e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQMOMTBH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQrp336VIJgp%2F4YBXCkvcMxZl2lpj2JAIfpkUVKrKxBAIgJMCGbhh%2BC%2BZFUnkN5SD1c93GIXWIsxcH3yqLrv4EnHUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiad0OOvJHcYPmzhircAx745avihwabiRFhzRWqpmdFSxmtgQjMrFLQy6bq%2BWXf4OnMO5jstiTl3bxvvN7USZ8CWgwJKRuZsOPxAbaeFiBQXOyajHoRe9v5gWxyrcdyQ00%2BxsrIIwFTmiPpSlITani92xpbKMA9os9jV7aCt88pUYts4xbQSN4Lrj6kdFf03G9RBabrsBm7Kk8OecujtzevAt9L2FgRzPsYGr7EVOCANIH4T9zFu9R%2FTkZL1BvoMDxiVEGynKQwiV8nAYUS0ouI%2BocDg1WAVky0OCoyawCBk0mNEpV1ED1Cy%2FZZx9eg03UJvGTF86bZqL%2FiI%2B3FdTNG8OqL8k%2F7EBFOiORVH6FBCG41j4NppZx36aPdaRi%2BL16HFOgppS6DNpwzoRpFMlTcr%2BK%2F0vt5qxCp%2ByT9yMwbw9IKpi9GNuW3auH0snELiHgnD%2FGKrM9bVmd%2FNSg33cDGTyseuLrTUQqTvbvuALk8S%2BQ8zxBQDL1H0galP910%2BxQSaubDjwhkJqMr%2B1tjGDXHNJd6xe35lTYWZKffEFfxSwCjEmO6teJANzb%2F3NLCc0rvR9Yv%2BOnwYOsf8VVzTIKf%2BfTOUJV4aT6tTccltxOI0gr2jNLMXmHsJFxDQTJ8kkSOKcxGHAW8YoiQMPPC9rwGOqUBhiZbn5plpAWkj2szWIuO20EBaJrNFmI7%2F3eTKeXQAl3lsIvt9cS6XbQw%2F4w12zuMXPaglTpWwxULHenHExeTm1kfBVvBggsmJpK9IUAx0wYPUnIq%2BjNQJWkThRlzD1m0K7b9F7EbAhWmzwR4NMeT4xrtyTIYaPEoECex3kWsgH4wO4%2FhEfdE1A14XzfEqvJY3U9LeFQ3llxOGexSeDMWJUvO%2B0ST&X-Amz-Signature=61dbeb54be41356428d41f355c3e9c954c699ea26c2aad34c0bcea0dcb22f1b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQMOMTBH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQrp336VIJgp%2F4YBXCkvcMxZl2lpj2JAIfpkUVKrKxBAIgJMCGbhh%2BC%2BZFUnkN5SD1c93GIXWIsxcH3yqLrv4EnHUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiad0OOvJHcYPmzhircAx745avihwabiRFhzRWqpmdFSxmtgQjMrFLQy6bq%2BWXf4OnMO5jstiTl3bxvvN7USZ8CWgwJKRuZsOPxAbaeFiBQXOyajHoRe9v5gWxyrcdyQ00%2BxsrIIwFTmiPpSlITani92xpbKMA9os9jV7aCt88pUYts4xbQSN4Lrj6kdFf03G9RBabrsBm7Kk8OecujtzevAt9L2FgRzPsYGr7EVOCANIH4T9zFu9R%2FTkZL1BvoMDxiVEGynKQwiV8nAYUS0ouI%2BocDg1WAVky0OCoyawCBk0mNEpV1ED1Cy%2FZZx9eg03UJvGTF86bZqL%2FiI%2B3FdTNG8OqL8k%2F7EBFOiORVH6FBCG41j4NppZx36aPdaRi%2BL16HFOgppS6DNpwzoRpFMlTcr%2BK%2F0vt5qxCp%2ByT9yMwbw9IKpi9GNuW3auH0snELiHgnD%2FGKrM9bVmd%2FNSg33cDGTyseuLrTUQqTvbvuALk8S%2BQ8zxBQDL1H0galP910%2BxQSaubDjwhkJqMr%2B1tjGDXHNJd6xe35lTYWZKffEFfxSwCjEmO6teJANzb%2F3NLCc0rvR9Yv%2BOnwYOsf8VVzTIKf%2BfTOUJV4aT6tTccltxOI0gr2jNLMXmHsJFxDQTJ8kkSOKcxGHAW8YoiQMPPC9rwGOqUBhiZbn5plpAWkj2szWIuO20EBaJrNFmI7%2F3eTKeXQAl3lsIvt9cS6XbQw%2F4w12zuMXPaglTpWwxULHenHExeTm1kfBVvBggsmJpK9IUAx0wYPUnIq%2BjNQJWkThRlzD1m0K7b9F7EbAhWmzwR4NMeT4xrtyTIYaPEoECex3kWsgH4wO4%2FhEfdE1A14XzfEqvJY3U9LeFQ3llxOGexSeDMWJUvO%2B0ST&X-Amz-Signature=2a1db09da76eec8dcc4e66596445c1da4fca2fd6c4ccfbe779ce3771b51f5b30&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
