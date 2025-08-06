---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CBXWXJM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIEvAKfzr9mNsus2jHXTdP%2F0T7GMO93dDlZ5m295jIeRHAiA9AJopa8t5JwrEJoinzWtWNbOgomI9x1iRF26MaaEQfCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMOJz8SbIU0q3GO%2FL6KtwDZ5c%2Bc7RAkVhKh5CAw0y7dZkaR%2FMWQ6Eb%2FuZRKHyz1r8CrPJhrIfEYVIWSNCMlfI7tuDCAErIw8a1SnSRY0RyxZ%2F1BSZm22NMhHdAZJ8yC%2FP1VpJe437ZOlKA%2FDJNo5C8On5cDwi7t4yv1bBT98bxyW9L%2BtNj4kZIf2K9xSVfKaTG7F12lvnkQFx7gmnOONtPqV6Im1FB0%2BwF8pret4E19g%2FzIIAkBNIxl3C80PnQEg6OZ9YTYd3yo55WU9l%2BW40gta6Xfe1px9VrczyxkPGPWYKh0RKeh8h%2BNV9xVmUUGoDJ9efY78lG%2Frc7Mho91w8ol%2BIK8hXYgLJ1kkiNMTMSsTfZ7MHUO1MOxZ96kmyJDSID3MYOaXvNchNG8bomgcMBEfFDzSops35GFykaVSHBiFS7ASSLcCp5JGQYpLtlWyyN21Qhb%2Fhe3FJILrr2VhphVVP5rq7zkR%2BzUOhk2xqtwH06k2K2ytjsilofmZXa%2Fg1JHcZbm%2FrZs0VXKQpqrP3YgBbdxygntPgNMqZ3Q4BgYr4UXX%2BUCmGz0wq3KV3zY2BtEM6mwZZrklyqsRyGT0VshAKOLlaw6pSZb9rq%2B06aOrTCgd4IZHtD1VSvVBdid4wd7cgJWBm0R1%2FWGSYwp5fMxAY6pgGEyi3ZjeH3Ckw7L4tXrgcuHuQ9KiClqs4V3K%2Bw1Yei3YBcTC3%2BBkqwQaOw4CsJ7dPTSjs33YCiYng69YmD2zD8177l0iO%2B0WAdpgm87MWbzqvlFlvEqz8TiODabCYKsK516irysnRubVMc%2BpeXay2g2wu%2BXnehcenVe4rwfgYEbJcXylunaIoPBLUraoQoVmtFanRbxXZ8nbz%2FaS826a%2BdachSfNp8&X-Amz-Signature=a5c383f1e2d2f116e7614418d54a29594286b1124e3e133287ac69921dbfc577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CBXWXJM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIEvAKfzr9mNsus2jHXTdP%2F0T7GMO93dDlZ5m295jIeRHAiA9AJopa8t5JwrEJoinzWtWNbOgomI9x1iRF26MaaEQfCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMOJz8SbIU0q3GO%2FL6KtwDZ5c%2Bc7RAkVhKh5CAw0y7dZkaR%2FMWQ6Eb%2FuZRKHyz1r8CrPJhrIfEYVIWSNCMlfI7tuDCAErIw8a1SnSRY0RyxZ%2F1BSZm22NMhHdAZJ8yC%2FP1VpJe437ZOlKA%2FDJNo5C8On5cDwi7t4yv1bBT98bxyW9L%2BtNj4kZIf2K9xSVfKaTG7F12lvnkQFx7gmnOONtPqV6Im1FB0%2BwF8pret4E19g%2FzIIAkBNIxl3C80PnQEg6OZ9YTYd3yo55WU9l%2BW40gta6Xfe1px9VrczyxkPGPWYKh0RKeh8h%2BNV9xVmUUGoDJ9efY78lG%2Frc7Mho91w8ol%2BIK8hXYgLJ1kkiNMTMSsTfZ7MHUO1MOxZ96kmyJDSID3MYOaXvNchNG8bomgcMBEfFDzSops35GFykaVSHBiFS7ASSLcCp5JGQYpLtlWyyN21Qhb%2Fhe3FJILrr2VhphVVP5rq7zkR%2BzUOhk2xqtwH06k2K2ytjsilofmZXa%2Fg1JHcZbm%2FrZs0VXKQpqrP3YgBbdxygntPgNMqZ3Q4BgYr4UXX%2BUCmGz0wq3KV3zY2BtEM6mwZZrklyqsRyGT0VshAKOLlaw6pSZb9rq%2B06aOrTCgd4IZHtD1VSvVBdid4wd7cgJWBm0R1%2FWGSYwp5fMxAY6pgGEyi3ZjeH3Ckw7L4tXrgcuHuQ9KiClqs4V3K%2Bw1Yei3YBcTC3%2BBkqwQaOw4CsJ7dPTSjs33YCiYng69YmD2zD8177l0iO%2B0WAdpgm87MWbzqvlFlvEqz8TiODabCYKsK516irysnRubVMc%2BpeXay2g2wu%2BXnehcenVe4rwfgYEbJcXylunaIoPBLUraoQoVmtFanRbxXZ8nbz%2FaS826a%2BdachSfNp8&X-Amz-Signature=0c1319b4a5e86ca63d13dd168fa85707379841e3a6612eda9c6fe9dd97822760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CBXWXJM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIEvAKfzr9mNsus2jHXTdP%2F0T7GMO93dDlZ5m295jIeRHAiA9AJopa8t5JwrEJoinzWtWNbOgomI9x1iRF26MaaEQfCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMOJz8SbIU0q3GO%2FL6KtwDZ5c%2Bc7RAkVhKh5CAw0y7dZkaR%2FMWQ6Eb%2FuZRKHyz1r8CrPJhrIfEYVIWSNCMlfI7tuDCAErIw8a1SnSRY0RyxZ%2F1BSZm22NMhHdAZJ8yC%2FP1VpJe437ZOlKA%2FDJNo5C8On5cDwi7t4yv1bBT98bxyW9L%2BtNj4kZIf2K9xSVfKaTG7F12lvnkQFx7gmnOONtPqV6Im1FB0%2BwF8pret4E19g%2FzIIAkBNIxl3C80PnQEg6OZ9YTYd3yo55WU9l%2BW40gta6Xfe1px9VrczyxkPGPWYKh0RKeh8h%2BNV9xVmUUGoDJ9efY78lG%2Frc7Mho91w8ol%2BIK8hXYgLJ1kkiNMTMSsTfZ7MHUO1MOxZ96kmyJDSID3MYOaXvNchNG8bomgcMBEfFDzSops35GFykaVSHBiFS7ASSLcCp5JGQYpLtlWyyN21Qhb%2Fhe3FJILrr2VhphVVP5rq7zkR%2BzUOhk2xqtwH06k2K2ytjsilofmZXa%2Fg1JHcZbm%2FrZs0VXKQpqrP3YgBbdxygntPgNMqZ3Q4BgYr4UXX%2BUCmGz0wq3KV3zY2BtEM6mwZZrklyqsRyGT0VshAKOLlaw6pSZb9rq%2B06aOrTCgd4IZHtD1VSvVBdid4wd7cgJWBm0R1%2FWGSYwp5fMxAY6pgGEyi3ZjeH3Ckw7L4tXrgcuHuQ9KiClqs4V3K%2Bw1Yei3YBcTC3%2BBkqwQaOw4CsJ7dPTSjs33YCiYng69YmD2zD8177l0iO%2B0WAdpgm87MWbzqvlFlvEqz8TiODabCYKsK516irysnRubVMc%2BpeXay2g2wu%2BXnehcenVe4rwfgYEbJcXylunaIoPBLUraoQoVmtFanRbxXZ8nbz%2FaS826a%2BdachSfNp8&X-Amz-Signature=8b5fdd49a8bbc9448f11ee0aa6fdd056468fe2048a4cf6c399826564e6758b89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CBXWXJM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIEvAKfzr9mNsus2jHXTdP%2F0T7GMO93dDlZ5m295jIeRHAiA9AJopa8t5JwrEJoinzWtWNbOgomI9x1iRF26MaaEQfCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMOJz8SbIU0q3GO%2FL6KtwDZ5c%2Bc7RAkVhKh5CAw0y7dZkaR%2FMWQ6Eb%2FuZRKHyz1r8CrPJhrIfEYVIWSNCMlfI7tuDCAErIw8a1SnSRY0RyxZ%2F1BSZm22NMhHdAZJ8yC%2FP1VpJe437ZOlKA%2FDJNo5C8On5cDwi7t4yv1bBT98bxyW9L%2BtNj4kZIf2K9xSVfKaTG7F12lvnkQFx7gmnOONtPqV6Im1FB0%2BwF8pret4E19g%2FzIIAkBNIxl3C80PnQEg6OZ9YTYd3yo55WU9l%2BW40gta6Xfe1px9VrczyxkPGPWYKh0RKeh8h%2BNV9xVmUUGoDJ9efY78lG%2Frc7Mho91w8ol%2BIK8hXYgLJ1kkiNMTMSsTfZ7MHUO1MOxZ96kmyJDSID3MYOaXvNchNG8bomgcMBEfFDzSops35GFykaVSHBiFS7ASSLcCp5JGQYpLtlWyyN21Qhb%2Fhe3FJILrr2VhphVVP5rq7zkR%2BzUOhk2xqtwH06k2K2ytjsilofmZXa%2Fg1JHcZbm%2FrZs0VXKQpqrP3YgBbdxygntPgNMqZ3Q4BgYr4UXX%2BUCmGz0wq3KV3zY2BtEM6mwZZrklyqsRyGT0VshAKOLlaw6pSZb9rq%2B06aOrTCgd4IZHtD1VSvVBdid4wd7cgJWBm0R1%2FWGSYwp5fMxAY6pgGEyi3ZjeH3Ckw7L4tXrgcuHuQ9KiClqs4V3K%2Bw1Yei3YBcTC3%2BBkqwQaOw4CsJ7dPTSjs33YCiYng69YmD2zD8177l0iO%2B0WAdpgm87MWbzqvlFlvEqz8TiODabCYKsK516irysnRubVMc%2BpeXay2g2wu%2BXnehcenVe4rwfgYEbJcXylunaIoPBLUraoQoVmtFanRbxXZ8nbz%2FaS826a%2BdachSfNp8&X-Amz-Signature=54be03c338d799d4e5544256de630c0f22458ae88a506af6be87322a22fe5b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CBXWXJM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIEvAKfzr9mNsus2jHXTdP%2F0T7GMO93dDlZ5m295jIeRHAiA9AJopa8t5JwrEJoinzWtWNbOgomI9x1iRF26MaaEQfCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMOJz8SbIU0q3GO%2FL6KtwDZ5c%2Bc7RAkVhKh5CAw0y7dZkaR%2FMWQ6Eb%2FuZRKHyz1r8CrPJhrIfEYVIWSNCMlfI7tuDCAErIw8a1SnSRY0RyxZ%2F1BSZm22NMhHdAZJ8yC%2FP1VpJe437ZOlKA%2FDJNo5C8On5cDwi7t4yv1bBT98bxyW9L%2BtNj4kZIf2K9xSVfKaTG7F12lvnkQFx7gmnOONtPqV6Im1FB0%2BwF8pret4E19g%2FzIIAkBNIxl3C80PnQEg6OZ9YTYd3yo55WU9l%2BW40gta6Xfe1px9VrczyxkPGPWYKh0RKeh8h%2BNV9xVmUUGoDJ9efY78lG%2Frc7Mho91w8ol%2BIK8hXYgLJ1kkiNMTMSsTfZ7MHUO1MOxZ96kmyJDSID3MYOaXvNchNG8bomgcMBEfFDzSops35GFykaVSHBiFS7ASSLcCp5JGQYpLtlWyyN21Qhb%2Fhe3FJILrr2VhphVVP5rq7zkR%2BzUOhk2xqtwH06k2K2ytjsilofmZXa%2Fg1JHcZbm%2FrZs0VXKQpqrP3YgBbdxygntPgNMqZ3Q4BgYr4UXX%2BUCmGz0wq3KV3zY2BtEM6mwZZrklyqsRyGT0VshAKOLlaw6pSZb9rq%2B06aOrTCgd4IZHtD1VSvVBdid4wd7cgJWBm0R1%2FWGSYwp5fMxAY6pgGEyi3ZjeH3Ckw7L4tXrgcuHuQ9KiClqs4V3K%2Bw1Yei3YBcTC3%2BBkqwQaOw4CsJ7dPTSjs33YCiYng69YmD2zD8177l0iO%2B0WAdpgm87MWbzqvlFlvEqz8TiODabCYKsK516irysnRubVMc%2BpeXay2g2wu%2BXnehcenVe4rwfgYEbJcXylunaIoPBLUraoQoVmtFanRbxXZ8nbz%2FaS826a%2BdachSfNp8&X-Amz-Signature=2b76fe0e02eae4d853d18171223b2859872b82becafcf2de02385882dc6d1af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
