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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMJ2P7PJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC3YBB3AzCZhpQewKZpthB4xaqxjBupWHVePnlw5NoY0gIhAO%2FSiwlIebgAkSPD%2Femz%2BXTzJ590xAC6ycsyMzNyldbGKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQ9JAFQvoKNAabuF8q3AMH35LORu1n5MU%2FMRqklmTlxVdLqzzuVou87wo3pWxIB7MtsLnNca%2F1kfWMC%2By6HX6%2FXSmmY0t3zY88K6%2BATkStG85rGSGOd1EJdpnVCBUyjAvQnsrqkjCqRXl7XwminPwQvlmf2LUMm3lWdnUHAWekS7evzV42xlmIS2v7cY0y90OpcAIws0Mk01xA8Lp5A%2BqjFWqsu5hwXcK%2BqePgnCAaP71il4EIaCbdYqVfgEjPw3NeEEUWHvBUOOTFXJayJ6fr%2FWhdRX6fMb%2BL1KqqPeHjl8DaHDS6tRwuSU4rb3aKiv6ayFIhwAXVT36b1e1txP4HzxnOtrawPRyJn%2FsQW2JDPdVmZkHg8VL%2F2w3uxvG6T%2F0p3U7BM%2B3MMg%2Bmz5NFRyHkB5QbwcvettjPEAk3JgO%2FVOvziMhW%2Fr15ex2C6ydGfazwf%2FRt%2Fpgc8m9DGK5JY%2B3WBkTQh6keQyNc5r43VytkcoZJl7%2F6Ukwq9nKjY%2FnCX3L4VUxKqVCQgLsZMNdry6aqTrCbEjbse8dIXJUHvC9RaUPsy4RZII6pax2CHOU6KrKRd3el%2FeX%2BLWD%2FjMQK3xC0SJqslZC82ceA6iEgzioXwAta6WV9UfzjMYuZyfsIPxMMiU8nLASfLGyQLDDR1efDBjqkAZHoDNAAjncc407%2FAK4byiJzB0Nn%2FFaxuMl8Fyvv6A%2BKQpCLXIlswqQY3JCkhO8SSwUUhKXa3TkytE1hgxX0r1qvNHA90%2Fjxo7KixwbxqCAmT%2BpF4rDmi8luMeDLQICafXIvpDyvpYpuh3hBVknur1HmMzI7ZYMs3PmH0pLYCR%2FIlDZMr%2BEsGbPR59GbHrWKpUnovwItIYe2MP%2BCdl0ByLHIUZfd&X-Amz-Signature=2d9fc01e75947c892f3e002f2e2e4667345c6f5ec1426dfe2dca7f5612a32296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMJ2P7PJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC3YBB3AzCZhpQewKZpthB4xaqxjBupWHVePnlw5NoY0gIhAO%2FSiwlIebgAkSPD%2Femz%2BXTzJ590xAC6ycsyMzNyldbGKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQ9JAFQvoKNAabuF8q3AMH35LORu1n5MU%2FMRqklmTlxVdLqzzuVou87wo3pWxIB7MtsLnNca%2F1kfWMC%2By6HX6%2FXSmmY0t3zY88K6%2BATkStG85rGSGOd1EJdpnVCBUyjAvQnsrqkjCqRXl7XwminPwQvlmf2LUMm3lWdnUHAWekS7evzV42xlmIS2v7cY0y90OpcAIws0Mk01xA8Lp5A%2BqjFWqsu5hwXcK%2BqePgnCAaP71il4EIaCbdYqVfgEjPw3NeEEUWHvBUOOTFXJayJ6fr%2FWhdRX6fMb%2BL1KqqPeHjl8DaHDS6tRwuSU4rb3aKiv6ayFIhwAXVT36b1e1txP4HzxnOtrawPRyJn%2FsQW2JDPdVmZkHg8VL%2F2w3uxvG6T%2F0p3U7BM%2B3MMg%2Bmz5NFRyHkB5QbwcvettjPEAk3JgO%2FVOvziMhW%2Fr15ex2C6ydGfazwf%2FRt%2Fpgc8m9DGK5JY%2B3WBkTQh6keQyNc5r43VytkcoZJl7%2F6Ukwq9nKjY%2FnCX3L4VUxKqVCQgLsZMNdry6aqTrCbEjbse8dIXJUHvC9RaUPsy4RZII6pax2CHOU6KrKRd3el%2FeX%2BLWD%2FjMQK3xC0SJqslZC82ceA6iEgzioXwAta6WV9UfzjMYuZyfsIPxMMiU8nLASfLGyQLDDR1efDBjqkAZHoDNAAjncc407%2FAK4byiJzB0Nn%2FFaxuMl8Fyvv6A%2BKQpCLXIlswqQY3JCkhO8SSwUUhKXa3TkytE1hgxX0r1qvNHA90%2Fjxo7KixwbxqCAmT%2BpF4rDmi8luMeDLQICafXIvpDyvpYpuh3hBVknur1HmMzI7ZYMs3PmH0pLYCR%2FIlDZMr%2BEsGbPR59GbHrWKpUnovwItIYe2MP%2BCdl0ByLHIUZfd&X-Amz-Signature=311ab600b18d1f7c942433e95c4e97623d68c23ae6609cebad0da645c3afde5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMJ2P7PJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC3YBB3AzCZhpQewKZpthB4xaqxjBupWHVePnlw5NoY0gIhAO%2FSiwlIebgAkSPD%2Femz%2BXTzJ590xAC6ycsyMzNyldbGKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQ9JAFQvoKNAabuF8q3AMH35LORu1n5MU%2FMRqklmTlxVdLqzzuVou87wo3pWxIB7MtsLnNca%2F1kfWMC%2By6HX6%2FXSmmY0t3zY88K6%2BATkStG85rGSGOd1EJdpnVCBUyjAvQnsrqkjCqRXl7XwminPwQvlmf2LUMm3lWdnUHAWekS7evzV42xlmIS2v7cY0y90OpcAIws0Mk01xA8Lp5A%2BqjFWqsu5hwXcK%2BqePgnCAaP71il4EIaCbdYqVfgEjPw3NeEEUWHvBUOOTFXJayJ6fr%2FWhdRX6fMb%2BL1KqqPeHjl8DaHDS6tRwuSU4rb3aKiv6ayFIhwAXVT36b1e1txP4HzxnOtrawPRyJn%2FsQW2JDPdVmZkHg8VL%2F2w3uxvG6T%2F0p3U7BM%2B3MMg%2Bmz5NFRyHkB5QbwcvettjPEAk3JgO%2FVOvziMhW%2Fr15ex2C6ydGfazwf%2FRt%2Fpgc8m9DGK5JY%2B3WBkTQh6keQyNc5r43VytkcoZJl7%2F6Ukwq9nKjY%2FnCX3L4VUxKqVCQgLsZMNdry6aqTrCbEjbse8dIXJUHvC9RaUPsy4RZII6pax2CHOU6KrKRd3el%2FeX%2BLWD%2FjMQK3xC0SJqslZC82ceA6iEgzioXwAta6WV9UfzjMYuZyfsIPxMMiU8nLASfLGyQLDDR1efDBjqkAZHoDNAAjncc407%2FAK4byiJzB0Nn%2FFaxuMl8Fyvv6A%2BKQpCLXIlswqQY3JCkhO8SSwUUhKXa3TkytE1hgxX0r1qvNHA90%2Fjxo7KixwbxqCAmT%2BpF4rDmi8luMeDLQICafXIvpDyvpYpuh3hBVknur1HmMzI7ZYMs3PmH0pLYCR%2FIlDZMr%2BEsGbPR59GbHrWKpUnovwItIYe2MP%2BCdl0ByLHIUZfd&X-Amz-Signature=4253b47df43d4a6b21ffaf403955b3825b713fad25da5eaf482048aa192c7823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMJ2P7PJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC3YBB3AzCZhpQewKZpthB4xaqxjBupWHVePnlw5NoY0gIhAO%2FSiwlIebgAkSPD%2Femz%2BXTzJ590xAC6ycsyMzNyldbGKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQ9JAFQvoKNAabuF8q3AMH35LORu1n5MU%2FMRqklmTlxVdLqzzuVou87wo3pWxIB7MtsLnNca%2F1kfWMC%2By6HX6%2FXSmmY0t3zY88K6%2BATkStG85rGSGOd1EJdpnVCBUyjAvQnsrqkjCqRXl7XwminPwQvlmf2LUMm3lWdnUHAWekS7evzV42xlmIS2v7cY0y90OpcAIws0Mk01xA8Lp5A%2BqjFWqsu5hwXcK%2BqePgnCAaP71il4EIaCbdYqVfgEjPw3NeEEUWHvBUOOTFXJayJ6fr%2FWhdRX6fMb%2BL1KqqPeHjl8DaHDS6tRwuSU4rb3aKiv6ayFIhwAXVT36b1e1txP4HzxnOtrawPRyJn%2FsQW2JDPdVmZkHg8VL%2F2w3uxvG6T%2F0p3U7BM%2B3MMg%2Bmz5NFRyHkB5QbwcvettjPEAk3JgO%2FVOvziMhW%2Fr15ex2C6ydGfazwf%2FRt%2Fpgc8m9DGK5JY%2B3WBkTQh6keQyNc5r43VytkcoZJl7%2F6Ukwq9nKjY%2FnCX3L4VUxKqVCQgLsZMNdry6aqTrCbEjbse8dIXJUHvC9RaUPsy4RZII6pax2CHOU6KrKRd3el%2FeX%2BLWD%2FjMQK3xC0SJqslZC82ceA6iEgzioXwAta6WV9UfzjMYuZyfsIPxMMiU8nLASfLGyQLDDR1efDBjqkAZHoDNAAjncc407%2FAK4byiJzB0Nn%2FFaxuMl8Fyvv6A%2BKQpCLXIlswqQY3JCkhO8SSwUUhKXa3TkytE1hgxX0r1qvNHA90%2Fjxo7KixwbxqCAmT%2BpF4rDmi8luMeDLQICafXIvpDyvpYpuh3hBVknur1HmMzI7ZYMs3PmH0pLYCR%2FIlDZMr%2BEsGbPR59GbHrWKpUnovwItIYe2MP%2BCdl0ByLHIUZfd&X-Amz-Signature=f26c7a2832d880cb1df372e55e481e336d1da3c42d61344cc67d98ff3c74ddfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMJ2P7PJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC3YBB3AzCZhpQewKZpthB4xaqxjBupWHVePnlw5NoY0gIhAO%2FSiwlIebgAkSPD%2Femz%2BXTzJ590xAC6ycsyMzNyldbGKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQ9JAFQvoKNAabuF8q3AMH35LORu1n5MU%2FMRqklmTlxVdLqzzuVou87wo3pWxIB7MtsLnNca%2F1kfWMC%2By6HX6%2FXSmmY0t3zY88K6%2BATkStG85rGSGOd1EJdpnVCBUyjAvQnsrqkjCqRXl7XwminPwQvlmf2LUMm3lWdnUHAWekS7evzV42xlmIS2v7cY0y90OpcAIws0Mk01xA8Lp5A%2BqjFWqsu5hwXcK%2BqePgnCAaP71il4EIaCbdYqVfgEjPw3NeEEUWHvBUOOTFXJayJ6fr%2FWhdRX6fMb%2BL1KqqPeHjl8DaHDS6tRwuSU4rb3aKiv6ayFIhwAXVT36b1e1txP4HzxnOtrawPRyJn%2FsQW2JDPdVmZkHg8VL%2F2w3uxvG6T%2F0p3U7BM%2B3MMg%2Bmz5NFRyHkB5QbwcvettjPEAk3JgO%2FVOvziMhW%2Fr15ex2C6ydGfazwf%2FRt%2Fpgc8m9DGK5JY%2B3WBkTQh6keQyNc5r43VytkcoZJl7%2F6Ukwq9nKjY%2FnCX3L4VUxKqVCQgLsZMNdry6aqTrCbEjbse8dIXJUHvC9RaUPsy4RZII6pax2CHOU6KrKRd3el%2FeX%2BLWD%2FjMQK3xC0SJqslZC82ceA6iEgzioXwAta6WV9UfzjMYuZyfsIPxMMiU8nLASfLGyQLDDR1efDBjqkAZHoDNAAjncc407%2FAK4byiJzB0Nn%2FFaxuMl8Fyvv6A%2BKQpCLXIlswqQY3JCkhO8SSwUUhKXa3TkytE1hgxX0r1qvNHA90%2Fjxo7KixwbxqCAmT%2BpF4rDmi8luMeDLQICafXIvpDyvpYpuh3hBVknur1HmMzI7ZYMs3PmH0pLYCR%2FIlDZMr%2BEsGbPR59GbHrWKpUnovwItIYe2MP%2BCdl0ByLHIUZfd&X-Amz-Signature=075e48eec5f4c127675c9a937d9077c4d6701cb7fe8f78cbf8bd450d8fab356d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
