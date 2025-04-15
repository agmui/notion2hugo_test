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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654B7JLDP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP0JpGp1OrGagRcH%2FGhipcyu1LajXKh%2FSkwNUdHQdxTwIgSTP7lSMjxkNVktoADYxp%2BXSxfmSDMXxpn%2FfZRGsr0P4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCho2XiSmMjd50i7ySrcA7C5vWAJPJLY6TQHBwCcha71%2FeQNWoHZ7FHi7lTlLW3FtPWEpZHjmXCf3q33%2B%2FFM4ylMj9y1imYvC4tFnR7FNCeB0pWE1s1nlJoT80zir7b2ldmOhYicvJv628gn2brxiXEPaiq0phiI6CjCjkRQlhUJJTtCHsTe53JJF3VdlUtxxvoNhD%2FXhduF0bPjve0gvU%2BS2z7W5nwlWjc8b1ny6UnhGndljPpi2HofdDHAxc8a3P6RKd0xG5B6pp03hY8%2BrddVbOHnklWuiOmmZS%2Fm4rhEppX%2BtPAnOOLfJtSRbbK5E%2Frr%2F2P9hEaYMAKHO%2Bw7eQkmaa9pp3vTUQmtd2F1QdVdND1WopT10HwJ1VUr17Jc%2F9bYBExkJA8xaqXHbyWwVgZUFv0vcrio4uuU6docITEf86Zs8ZEZtJcPMnFc6%2F4QcqYSpu4Az8kHjUoZphtPJ5zrD3%2Fbr2ZrP%2F6tTnvyW%2Bs5Fu8EdtUhym6BJPdaF%2FZt03zwIf3RIsAWNzUlAnDlPU7ja9CkMIA4rWd1F%2B6x8jocYO4C9A5dXEkHmywuQTryIAHtD0ljBee9Kyxxx40HMvWt%2F5GCHsrrxUwM2%2F3lUz2LGNziR%2FmRbKqvcptzVv%2ByhL1B1N4jxcQ%2B1w8RMIKe978GOqUBEN786Ds%2FEF317Td5Eu%2FUUehr7IhwfkeWZFOQE2GUgWbdZCjQsm1d2aQMs6gFsQ5HNMupRZ%2BNC6Ig2khqpLMSLSw1JCQjIz2IiaFXw4CId5AheXszJLb3OIX2QaF%2BdaMQ61uUEAJj4F29eRry5TCZtkkkfsdcr40mOrlfmZ0Xoaf1EF7yLynHfzAAu6GaXsUtBAJ8%2BTw%2FeyKHr8QxAMMJm39824Lg&X-Amz-Signature=9b2534d03debd22e9d7a90f7ab1d6bbbf19d1c3ffecd187ec6021fb3ac237176&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654B7JLDP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP0JpGp1OrGagRcH%2FGhipcyu1LajXKh%2FSkwNUdHQdxTwIgSTP7lSMjxkNVktoADYxp%2BXSxfmSDMXxpn%2FfZRGsr0P4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCho2XiSmMjd50i7ySrcA7C5vWAJPJLY6TQHBwCcha71%2FeQNWoHZ7FHi7lTlLW3FtPWEpZHjmXCf3q33%2B%2FFM4ylMj9y1imYvC4tFnR7FNCeB0pWE1s1nlJoT80zir7b2ldmOhYicvJv628gn2brxiXEPaiq0phiI6CjCjkRQlhUJJTtCHsTe53JJF3VdlUtxxvoNhD%2FXhduF0bPjve0gvU%2BS2z7W5nwlWjc8b1ny6UnhGndljPpi2HofdDHAxc8a3P6RKd0xG5B6pp03hY8%2BrddVbOHnklWuiOmmZS%2Fm4rhEppX%2BtPAnOOLfJtSRbbK5E%2Frr%2F2P9hEaYMAKHO%2Bw7eQkmaa9pp3vTUQmtd2F1QdVdND1WopT10HwJ1VUr17Jc%2F9bYBExkJA8xaqXHbyWwVgZUFv0vcrio4uuU6docITEf86Zs8ZEZtJcPMnFc6%2F4QcqYSpu4Az8kHjUoZphtPJ5zrD3%2Fbr2ZrP%2F6tTnvyW%2Bs5Fu8EdtUhym6BJPdaF%2FZt03zwIf3RIsAWNzUlAnDlPU7ja9CkMIA4rWd1F%2B6x8jocYO4C9A5dXEkHmywuQTryIAHtD0ljBee9Kyxxx40HMvWt%2F5GCHsrrxUwM2%2F3lUz2LGNziR%2FmRbKqvcptzVv%2ByhL1B1N4jxcQ%2B1w8RMIKe978GOqUBEN786Ds%2FEF317Td5Eu%2FUUehr7IhwfkeWZFOQE2GUgWbdZCjQsm1d2aQMs6gFsQ5HNMupRZ%2BNC6Ig2khqpLMSLSw1JCQjIz2IiaFXw4CId5AheXszJLb3OIX2QaF%2BdaMQ61uUEAJj4F29eRry5TCZtkkkfsdcr40mOrlfmZ0Xoaf1EF7yLynHfzAAu6GaXsUtBAJ8%2BTw%2FeyKHr8QxAMMJm39824Lg&X-Amz-Signature=af92a1800e310e4e4c9f5f983e3c68eb60664680af68db9e39577566ba079b6d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654B7JLDP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP0JpGp1OrGagRcH%2FGhipcyu1LajXKh%2FSkwNUdHQdxTwIgSTP7lSMjxkNVktoADYxp%2BXSxfmSDMXxpn%2FfZRGsr0P4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCho2XiSmMjd50i7ySrcA7C5vWAJPJLY6TQHBwCcha71%2FeQNWoHZ7FHi7lTlLW3FtPWEpZHjmXCf3q33%2B%2FFM4ylMj9y1imYvC4tFnR7FNCeB0pWE1s1nlJoT80zir7b2ldmOhYicvJv628gn2brxiXEPaiq0phiI6CjCjkRQlhUJJTtCHsTe53JJF3VdlUtxxvoNhD%2FXhduF0bPjve0gvU%2BS2z7W5nwlWjc8b1ny6UnhGndljPpi2HofdDHAxc8a3P6RKd0xG5B6pp03hY8%2BrddVbOHnklWuiOmmZS%2Fm4rhEppX%2BtPAnOOLfJtSRbbK5E%2Frr%2F2P9hEaYMAKHO%2Bw7eQkmaa9pp3vTUQmtd2F1QdVdND1WopT10HwJ1VUr17Jc%2F9bYBExkJA8xaqXHbyWwVgZUFv0vcrio4uuU6docITEf86Zs8ZEZtJcPMnFc6%2F4QcqYSpu4Az8kHjUoZphtPJ5zrD3%2Fbr2ZrP%2F6tTnvyW%2Bs5Fu8EdtUhym6BJPdaF%2FZt03zwIf3RIsAWNzUlAnDlPU7ja9CkMIA4rWd1F%2B6x8jocYO4C9A5dXEkHmywuQTryIAHtD0ljBee9Kyxxx40HMvWt%2F5GCHsrrxUwM2%2F3lUz2LGNziR%2FmRbKqvcptzVv%2ByhL1B1N4jxcQ%2B1w8RMIKe978GOqUBEN786Ds%2FEF317Td5Eu%2FUUehr7IhwfkeWZFOQE2GUgWbdZCjQsm1d2aQMs6gFsQ5HNMupRZ%2BNC6Ig2khqpLMSLSw1JCQjIz2IiaFXw4CId5AheXszJLb3OIX2QaF%2BdaMQ61uUEAJj4F29eRry5TCZtkkkfsdcr40mOrlfmZ0Xoaf1EF7yLynHfzAAu6GaXsUtBAJ8%2BTw%2FeyKHr8QxAMMJm39824Lg&X-Amz-Signature=17c4e424b7ca8a2939b48b388616e475ab6eae197f9f23a7c7d0705b3ed97c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654B7JLDP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP0JpGp1OrGagRcH%2FGhipcyu1LajXKh%2FSkwNUdHQdxTwIgSTP7lSMjxkNVktoADYxp%2BXSxfmSDMXxpn%2FfZRGsr0P4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCho2XiSmMjd50i7ySrcA7C5vWAJPJLY6TQHBwCcha71%2FeQNWoHZ7FHi7lTlLW3FtPWEpZHjmXCf3q33%2B%2FFM4ylMj9y1imYvC4tFnR7FNCeB0pWE1s1nlJoT80zir7b2ldmOhYicvJv628gn2brxiXEPaiq0phiI6CjCjkRQlhUJJTtCHsTe53JJF3VdlUtxxvoNhD%2FXhduF0bPjve0gvU%2BS2z7W5nwlWjc8b1ny6UnhGndljPpi2HofdDHAxc8a3P6RKd0xG5B6pp03hY8%2BrddVbOHnklWuiOmmZS%2Fm4rhEppX%2BtPAnOOLfJtSRbbK5E%2Frr%2F2P9hEaYMAKHO%2Bw7eQkmaa9pp3vTUQmtd2F1QdVdND1WopT10HwJ1VUr17Jc%2F9bYBExkJA8xaqXHbyWwVgZUFv0vcrio4uuU6docITEf86Zs8ZEZtJcPMnFc6%2F4QcqYSpu4Az8kHjUoZphtPJ5zrD3%2Fbr2ZrP%2F6tTnvyW%2Bs5Fu8EdtUhym6BJPdaF%2FZt03zwIf3RIsAWNzUlAnDlPU7ja9CkMIA4rWd1F%2B6x8jocYO4C9A5dXEkHmywuQTryIAHtD0ljBee9Kyxxx40HMvWt%2F5GCHsrrxUwM2%2F3lUz2LGNziR%2FmRbKqvcptzVv%2ByhL1B1N4jxcQ%2B1w8RMIKe978GOqUBEN786Ds%2FEF317Td5Eu%2FUUehr7IhwfkeWZFOQE2GUgWbdZCjQsm1d2aQMs6gFsQ5HNMupRZ%2BNC6Ig2khqpLMSLSw1JCQjIz2IiaFXw4CId5AheXszJLb3OIX2QaF%2BdaMQ61uUEAJj4F29eRry5TCZtkkkfsdcr40mOrlfmZ0Xoaf1EF7yLynHfzAAu6GaXsUtBAJ8%2BTw%2FeyKHr8QxAMMJm39824Lg&X-Amz-Signature=9ba2cba8c56a948f3812b54c744315754dc4c4e38ca8e3f19235c5af0db5518c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654B7JLDP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP0JpGp1OrGagRcH%2FGhipcyu1LajXKh%2FSkwNUdHQdxTwIgSTP7lSMjxkNVktoADYxp%2BXSxfmSDMXxpn%2FfZRGsr0P4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCho2XiSmMjd50i7ySrcA7C5vWAJPJLY6TQHBwCcha71%2FeQNWoHZ7FHi7lTlLW3FtPWEpZHjmXCf3q33%2B%2FFM4ylMj9y1imYvC4tFnR7FNCeB0pWE1s1nlJoT80zir7b2ldmOhYicvJv628gn2brxiXEPaiq0phiI6CjCjkRQlhUJJTtCHsTe53JJF3VdlUtxxvoNhD%2FXhduF0bPjve0gvU%2BS2z7W5nwlWjc8b1ny6UnhGndljPpi2HofdDHAxc8a3P6RKd0xG5B6pp03hY8%2BrddVbOHnklWuiOmmZS%2Fm4rhEppX%2BtPAnOOLfJtSRbbK5E%2Frr%2F2P9hEaYMAKHO%2Bw7eQkmaa9pp3vTUQmtd2F1QdVdND1WopT10HwJ1VUr17Jc%2F9bYBExkJA8xaqXHbyWwVgZUFv0vcrio4uuU6docITEf86Zs8ZEZtJcPMnFc6%2F4QcqYSpu4Az8kHjUoZphtPJ5zrD3%2Fbr2ZrP%2F6tTnvyW%2Bs5Fu8EdtUhym6BJPdaF%2FZt03zwIf3RIsAWNzUlAnDlPU7ja9CkMIA4rWd1F%2B6x8jocYO4C9A5dXEkHmywuQTryIAHtD0ljBee9Kyxxx40HMvWt%2F5GCHsrrxUwM2%2F3lUz2LGNziR%2FmRbKqvcptzVv%2ByhL1B1N4jxcQ%2B1w8RMIKe978GOqUBEN786Ds%2FEF317Td5Eu%2FUUehr7IhwfkeWZFOQE2GUgWbdZCjQsm1d2aQMs6gFsQ5HNMupRZ%2BNC6Ig2khqpLMSLSw1JCQjIz2IiaFXw4CId5AheXszJLb3OIX2QaF%2BdaMQ61uUEAJj4F29eRry5TCZtkkkfsdcr40mOrlfmZ0Xoaf1EF7yLynHfzAAu6GaXsUtBAJ8%2BTw%2FeyKHr8QxAMMJm39824Lg&X-Amz-Signature=f9b395501c50d144e022d234ee40235e431476641574db9ca5a03e60072d4654&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
