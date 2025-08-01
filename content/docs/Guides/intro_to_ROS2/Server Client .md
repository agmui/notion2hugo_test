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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZA6J2DH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpu%2BcxjG2tMRkhv3eK0CxHrhPo8YMsn%2FAHnZOY4CFLPAiEAl7FWYRcAJ8fWzhm5BEznLAu4I%2F7L9YYFsFT2PQtOwrsqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh7l%2Fuc7Yha5j9qYSrcA%2BFElFHnwBD%2BsyYaWaLS5nGOdd517mIy%2F7iNwqb5%2FraMM8kCO2OfTV7MTEeYJjBFDvzOzFoH05PlLzQs9NFees3JSlmckyDDGnQA5uQNh%2BIc9HdAA4mbAWp0XTRtbEhAPOQkCCkD8m8WcPMcGHD86z9lvRAXHAV%2BEWE6aLoV4lRJkpLZS0dv7BvpHjtJyvaPwnIS%2FytEAgPMqYdLMb2hfnIY1LV9IYsT05cJAYagJrquzun0hCKVjPWWSF59%2BGZ5ZOkJnHNey09RqQrl0KUMrKG9qI93ktCTxnnh2SC8WEynBJGi9cYJFb1MQCAfRnJ54eln36VEbrVumcfapWzZgMyo69gsDklv%2FcuSbMwWdTi7SEqGFsiTl3rl20ro7kpbdU%2Bsl6HQwlmzfrmtmfGfifm0hE81XXKwN0uKVT59cKxPBPQ5YrNtFWjaDApOtAjoaqp0Tb%2F5z98FXbThDxZRDzKrcrZuKHc14BTyaj5OeD7uARoif6k44yzBra6ZOwmLTBW07e6jjMOQv7d8QAkq1dkZoIku%2FXD%2FnyTsrRJ9msYvbrl%2BaHWYqNc3h%2B7Plua6vxiI90nxncfktRpV8ZpjmQrWV1bg0LTGERVIL4aluqYvupxYc3GK5GaoCagYMOnttMQGOqUB7IvRXas27RN1seIqKq3jz04zrHtawQ7xVCNXXngpCbb3ur9WIxDGY8FE8MGrVuktlvQp7QshTeGH2ZtCcaczRfuQmi%2B%2BnguYgiU4CFdo6QpyleDvss6EIRd8Y95Mt%2B0F6U4sMXPL4nQHqtbHwF6fl0J95HLlfxQbipkzWD3siItmBbH0l2Zw%2BjGF4OQo%2B1szo9mFvZuWUQ1utF7hZpnqmn%2F1NEqj&X-Amz-Signature=ef2d508117da474876799a12b64840951e7c4befc3d820aaa2d77cc22aadf4e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZA6J2DH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpu%2BcxjG2tMRkhv3eK0CxHrhPo8YMsn%2FAHnZOY4CFLPAiEAl7FWYRcAJ8fWzhm5BEznLAu4I%2F7L9YYFsFT2PQtOwrsqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh7l%2Fuc7Yha5j9qYSrcA%2BFElFHnwBD%2BsyYaWaLS5nGOdd517mIy%2F7iNwqb5%2FraMM8kCO2OfTV7MTEeYJjBFDvzOzFoH05PlLzQs9NFees3JSlmckyDDGnQA5uQNh%2BIc9HdAA4mbAWp0XTRtbEhAPOQkCCkD8m8WcPMcGHD86z9lvRAXHAV%2BEWE6aLoV4lRJkpLZS0dv7BvpHjtJyvaPwnIS%2FytEAgPMqYdLMb2hfnIY1LV9IYsT05cJAYagJrquzun0hCKVjPWWSF59%2BGZ5ZOkJnHNey09RqQrl0KUMrKG9qI93ktCTxnnh2SC8WEynBJGi9cYJFb1MQCAfRnJ54eln36VEbrVumcfapWzZgMyo69gsDklv%2FcuSbMwWdTi7SEqGFsiTl3rl20ro7kpbdU%2Bsl6HQwlmzfrmtmfGfifm0hE81XXKwN0uKVT59cKxPBPQ5YrNtFWjaDApOtAjoaqp0Tb%2F5z98FXbThDxZRDzKrcrZuKHc14BTyaj5OeD7uARoif6k44yzBra6ZOwmLTBW07e6jjMOQv7d8QAkq1dkZoIku%2FXD%2FnyTsrRJ9msYvbrl%2BaHWYqNc3h%2B7Plua6vxiI90nxncfktRpV8ZpjmQrWV1bg0LTGERVIL4aluqYvupxYc3GK5GaoCagYMOnttMQGOqUB7IvRXas27RN1seIqKq3jz04zrHtawQ7xVCNXXngpCbb3ur9WIxDGY8FE8MGrVuktlvQp7QshTeGH2ZtCcaczRfuQmi%2B%2BnguYgiU4CFdo6QpyleDvss6EIRd8Y95Mt%2B0F6U4sMXPL4nQHqtbHwF6fl0J95HLlfxQbipkzWD3siItmBbH0l2Zw%2BjGF4OQo%2B1szo9mFvZuWUQ1utF7hZpnqmn%2F1NEqj&X-Amz-Signature=8937c4511a37907cb8c1afd86b65c385c620e3f84dd0d5938868fae1f9f2d2fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZA6J2DH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpu%2BcxjG2tMRkhv3eK0CxHrhPo8YMsn%2FAHnZOY4CFLPAiEAl7FWYRcAJ8fWzhm5BEznLAu4I%2F7L9YYFsFT2PQtOwrsqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh7l%2Fuc7Yha5j9qYSrcA%2BFElFHnwBD%2BsyYaWaLS5nGOdd517mIy%2F7iNwqb5%2FraMM8kCO2OfTV7MTEeYJjBFDvzOzFoH05PlLzQs9NFees3JSlmckyDDGnQA5uQNh%2BIc9HdAA4mbAWp0XTRtbEhAPOQkCCkD8m8WcPMcGHD86z9lvRAXHAV%2BEWE6aLoV4lRJkpLZS0dv7BvpHjtJyvaPwnIS%2FytEAgPMqYdLMb2hfnIY1LV9IYsT05cJAYagJrquzun0hCKVjPWWSF59%2BGZ5ZOkJnHNey09RqQrl0KUMrKG9qI93ktCTxnnh2SC8WEynBJGi9cYJFb1MQCAfRnJ54eln36VEbrVumcfapWzZgMyo69gsDklv%2FcuSbMwWdTi7SEqGFsiTl3rl20ro7kpbdU%2Bsl6HQwlmzfrmtmfGfifm0hE81XXKwN0uKVT59cKxPBPQ5YrNtFWjaDApOtAjoaqp0Tb%2F5z98FXbThDxZRDzKrcrZuKHc14BTyaj5OeD7uARoif6k44yzBra6ZOwmLTBW07e6jjMOQv7d8QAkq1dkZoIku%2FXD%2FnyTsrRJ9msYvbrl%2BaHWYqNc3h%2B7Plua6vxiI90nxncfktRpV8ZpjmQrWV1bg0LTGERVIL4aluqYvupxYc3GK5GaoCagYMOnttMQGOqUB7IvRXas27RN1seIqKq3jz04zrHtawQ7xVCNXXngpCbb3ur9WIxDGY8FE8MGrVuktlvQp7QshTeGH2ZtCcaczRfuQmi%2B%2BnguYgiU4CFdo6QpyleDvss6EIRd8Y95Mt%2B0F6U4sMXPL4nQHqtbHwF6fl0J95HLlfxQbipkzWD3siItmBbH0l2Zw%2BjGF4OQo%2B1szo9mFvZuWUQ1utF7hZpnqmn%2F1NEqj&X-Amz-Signature=2bcb48e3ca2f5b3b6b608a932937c8833c8a357ef095bdb6358f5da88bc695c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZA6J2DH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpu%2BcxjG2tMRkhv3eK0CxHrhPo8YMsn%2FAHnZOY4CFLPAiEAl7FWYRcAJ8fWzhm5BEznLAu4I%2F7L9YYFsFT2PQtOwrsqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh7l%2Fuc7Yha5j9qYSrcA%2BFElFHnwBD%2BsyYaWaLS5nGOdd517mIy%2F7iNwqb5%2FraMM8kCO2OfTV7MTEeYJjBFDvzOzFoH05PlLzQs9NFees3JSlmckyDDGnQA5uQNh%2BIc9HdAA4mbAWp0XTRtbEhAPOQkCCkD8m8WcPMcGHD86z9lvRAXHAV%2BEWE6aLoV4lRJkpLZS0dv7BvpHjtJyvaPwnIS%2FytEAgPMqYdLMb2hfnIY1LV9IYsT05cJAYagJrquzun0hCKVjPWWSF59%2BGZ5ZOkJnHNey09RqQrl0KUMrKG9qI93ktCTxnnh2SC8WEynBJGi9cYJFb1MQCAfRnJ54eln36VEbrVumcfapWzZgMyo69gsDklv%2FcuSbMwWdTi7SEqGFsiTl3rl20ro7kpbdU%2Bsl6HQwlmzfrmtmfGfifm0hE81XXKwN0uKVT59cKxPBPQ5YrNtFWjaDApOtAjoaqp0Tb%2F5z98FXbThDxZRDzKrcrZuKHc14BTyaj5OeD7uARoif6k44yzBra6ZOwmLTBW07e6jjMOQv7d8QAkq1dkZoIku%2FXD%2FnyTsrRJ9msYvbrl%2BaHWYqNc3h%2B7Plua6vxiI90nxncfktRpV8ZpjmQrWV1bg0LTGERVIL4aluqYvupxYc3GK5GaoCagYMOnttMQGOqUB7IvRXas27RN1seIqKq3jz04zrHtawQ7xVCNXXngpCbb3ur9WIxDGY8FE8MGrVuktlvQp7QshTeGH2ZtCcaczRfuQmi%2B%2BnguYgiU4CFdo6QpyleDvss6EIRd8Y95Mt%2B0F6U4sMXPL4nQHqtbHwF6fl0J95HLlfxQbipkzWD3siItmBbH0l2Zw%2BjGF4OQo%2B1szo9mFvZuWUQ1utF7hZpnqmn%2F1NEqj&X-Amz-Signature=e304a49445eb0b77e0d876445308025549df290df2a75ae6cec07923e664849a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZA6J2DH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpu%2BcxjG2tMRkhv3eK0CxHrhPo8YMsn%2FAHnZOY4CFLPAiEAl7FWYRcAJ8fWzhm5BEznLAu4I%2F7L9YYFsFT2PQtOwrsqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh7l%2Fuc7Yha5j9qYSrcA%2BFElFHnwBD%2BsyYaWaLS5nGOdd517mIy%2F7iNwqb5%2FraMM8kCO2OfTV7MTEeYJjBFDvzOzFoH05PlLzQs9NFees3JSlmckyDDGnQA5uQNh%2BIc9HdAA4mbAWp0XTRtbEhAPOQkCCkD8m8WcPMcGHD86z9lvRAXHAV%2BEWE6aLoV4lRJkpLZS0dv7BvpHjtJyvaPwnIS%2FytEAgPMqYdLMb2hfnIY1LV9IYsT05cJAYagJrquzun0hCKVjPWWSF59%2BGZ5ZOkJnHNey09RqQrl0KUMrKG9qI93ktCTxnnh2SC8WEynBJGi9cYJFb1MQCAfRnJ54eln36VEbrVumcfapWzZgMyo69gsDklv%2FcuSbMwWdTi7SEqGFsiTl3rl20ro7kpbdU%2Bsl6HQwlmzfrmtmfGfifm0hE81XXKwN0uKVT59cKxPBPQ5YrNtFWjaDApOtAjoaqp0Tb%2F5z98FXbThDxZRDzKrcrZuKHc14BTyaj5OeD7uARoif6k44yzBra6ZOwmLTBW07e6jjMOQv7d8QAkq1dkZoIku%2FXD%2FnyTsrRJ9msYvbrl%2BaHWYqNc3h%2B7Plua6vxiI90nxncfktRpV8ZpjmQrWV1bg0LTGERVIL4aluqYvupxYc3GK5GaoCagYMOnttMQGOqUB7IvRXas27RN1seIqKq3jz04zrHtawQ7xVCNXXngpCbb3ur9WIxDGY8FE8MGrVuktlvQp7QshTeGH2ZtCcaczRfuQmi%2B%2BnguYgiU4CFdo6QpyleDvss6EIRd8Y95Mt%2B0F6U4sMXPL4nQHqtbHwF6fl0J95HLlfxQbipkzWD3siItmBbH0l2Zw%2BjGF4OQo%2B1szo9mFvZuWUQ1utF7hZpnqmn%2F1NEqj&X-Amz-Signature=6fee9d18692236d976ecea43089ae56e23728fe2f268b62463fbc0faf4ac1ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
