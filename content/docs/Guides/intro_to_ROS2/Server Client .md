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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DTZ2QWQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICxty3nlzJnNGEsgOv2uTdOlIVCrfSPZqktLuQ0StvIGAiAygJho7MnBTJzikkmGrMVIA3itdGcs5ZeHfSgBHSgH0Sr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM7l3Qt4j7BSkp%2B1OXKtwDNVBiLR2hzFVuy%2F9kwAiEItFkzDEGWEaMmbx2%2FKGlDzx9EuwngbuXjYkxWHEpzZ1bnCcUDSM%2BbE5b6k28GtpAcxmWMAZEOBtIklQubkS4MM%2BLLpevgfnDGhUDiithZHdx%2FwJqS7TUQ6Q74liCXqn9JUIQiKRg8%2Br7q3MMjPQVa4fc448gVhY6DRRzCvaB8Jxrq%2BjXULY%2FDFe1CMzL9m%2FlKKMlmqaisHMctItmhy43VsMR02PZzvsUlSUjvQiUrN3tV8dpfHyxh7rVJ%2Fwq4M8xrXNa1uncy5Ig%2BuPpGyqWxXfGdt5Xv3IC3U0nUq%2BHbDtBtA3wSLFwJh8YAqQPcDC9araVGm5ejHLilMQkjDT%2FxGYno%2BWiZ9P0LqZDZugLgSz5jYhHnaXkrZ%2Bz3MugtTJpwnjurGIhz63qK9ObwhdwY5tvrKDexXnp%2FAfqkfCcF9wBtZzqhAlLWaSO2H1oJZ8Jrx4eV5qDS1FAzyDhG9UJkFyh3rLhUmcG9FsjVNO8t2kWxQd2uljWPSknPpEWP0617QyyqM61t4AeBnk13lbadgjaphdXGI%2Fm9ALQsQ7%2BUuwy0kAr3lwA8jeHwWz62uvPSqqlRpfNzIq%2BrWKk0w5HKFll0tbrJ%2FwJyk3DkuUwptrGxAY6pgGj%2Fhy57ezth%2FnXCLPL8lSfgwD8OlbOX4xj0bqm%2F9nRv0Goh8Eq52IUNCJ6SU6TRh9dZWelkT4CxOLZga%2FQ0Acg1%2Fzjwf13tSJriOIDSJQ5KUeYiMyn6KkvxdhbD2lbCPBYBGF5XWQR9UYSrGqkoHHzR%2BI32gKCl1VHkUta22MfALfVpxzNGXrCXs%2FbXXPdPi0wijsixbbs3HD4oM%2FVRZcQh1PYnQbp&X-Amz-Signature=f4ebaec44ff21eb4ca732c48bc1793467e55c55633bce5de639dbe2a7bcd663f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DTZ2QWQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICxty3nlzJnNGEsgOv2uTdOlIVCrfSPZqktLuQ0StvIGAiAygJho7MnBTJzikkmGrMVIA3itdGcs5ZeHfSgBHSgH0Sr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM7l3Qt4j7BSkp%2B1OXKtwDNVBiLR2hzFVuy%2F9kwAiEItFkzDEGWEaMmbx2%2FKGlDzx9EuwngbuXjYkxWHEpzZ1bnCcUDSM%2BbE5b6k28GtpAcxmWMAZEOBtIklQubkS4MM%2BLLpevgfnDGhUDiithZHdx%2FwJqS7TUQ6Q74liCXqn9JUIQiKRg8%2Br7q3MMjPQVa4fc448gVhY6DRRzCvaB8Jxrq%2BjXULY%2FDFe1CMzL9m%2FlKKMlmqaisHMctItmhy43VsMR02PZzvsUlSUjvQiUrN3tV8dpfHyxh7rVJ%2Fwq4M8xrXNa1uncy5Ig%2BuPpGyqWxXfGdt5Xv3IC3U0nUq%2BHbDtBtA3wSLFwJh8YAqQPcDC9araVGm5ejHLilMQkjDT%2FxGYno%2BWiZ9P0LqZDZugLgSz5jYhHnaXkrZ%2Bz3MugtTJpwnjurGIhz63qK9ObwhdwY5tvrKDexXnp%2FAfqkfCcF9wBtZzqhAlLWaSO2H1oJZ8Jrx4eV5qDS1FAzyDhG9UJkFyh3rLhUmcG9FsjVNO8t2kWxQd2uljWPSknPpEWP0617QyyqM61t4AeBnk13lbadgjaphdXGI%2Fm9ALQsQ7%2BUuwy0kAr3lwA8jeHwWz62uvPSqqlRpfNzIq%2BrWKk0w5HKFll0tbrJ%2FwJyk3DkuUwptrGxAY6pgGj%2Fhy57ezth%2FnXCLPL8lSfgwD8OlbOX4xj0bqm%2F9nRv0Goh8Eq52IUNCJ6SU6TRh9dZWelkT4CxOLZga%2FQ0Acg1%2Fzjwf13tSJriOIDSJQ5KUeYiMyn6KkvxdhbD2lbCPBYBGF5XWQR9UYSrGqkoHHzR%2BI32gKCl1VHkUta22MfALfVpxzNGXrCXs%2FbXXPdPi0wijsixbbs3HD4oM%2FVRZcQh1PYnQbp&X-Amz-Signature=15f84419863b12700fe92166927341bc3e8577b956f8cb7f8ac304a9a0b22816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DTZ2QWQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICxty3nlzJnNGEsgOv2uTdOlIVCrfSPZqktLuQ0StvIGAiAygJho7MnBTJzikkmGrMVIA3itdGcs5ZeHfSgBHSgH0Sr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM7l3Qt4j7BSkp%2B1OXKtwDNVBiLR2hzFVuy%2F9kwAiEItFkzDEGWEaMmbx2%2FKGlDzx9EuwngbuXjYkxWHEpzZ1bnCcUDSM%2BbE5b6k28GtpAcxmWMAZEOBtIklQubkS4MM%2BLLpevgfnDGhUDiithZHdx%2FwJqS7TUQ6Q74liCXqn9JUIQiKRg8%2Br7q3MMjPQVa4fc448gVhY6DRRzCvaB8Jxrq%2BjXULY%2FDFe1CMzL9m%2FlKKMlmqaisHMctItmhy43VsMR02PZzvsUlSUjvQiUrN3tV8dpfHyxh7rVJ%2Fwq4M8xrXNa1uncy5Ig%2BuPpGyqWxXfGdt5Xv3IC3U0nUq%2BHbDtBtA3wSLFwJh8YAqQPcDC9araVGm5ejHLilMQkjDT%2FxGYno%2BWiZ9P0LqZDZugLgSz5jYhHnaXkrZ%2Bz3MugtTJpwnjurGIhz63qK9ObwhdwY5tvrKDexXnp%2FAfqkfCcF9wBtZzqhAlLWaSO2H1oJZ8Jrx4eV5qDS1FAzyDhG9UJkFyh3rLhUmcG9FsjVNO8t2kWxQd2uljWPSknPpEWP0617QyyqM61t4AeBnk13lbadgjaphdXGI%2Fm9ALQsQ7%2BUuwy0kAr3lwA8jeHwWz62uvPSqqlRpfNzIq%2BrWKk0w5HKFll0tbrJ%2FwJyk3DkuUwptrGxAY6pgGj%2Fhy57ezth%2FnXCLPL8lSfgwD8OlbOX4xj0bqm%2F9nRv0Goh8Eq52IUNCJ6SU6TRh9dZWelkT4CxOLZga%2FQ0Acg1%2Fzjwf13tSJriOIDSJQ5KUeYiMyn6KkvxdhbD2lbCPBYBGF5XWQR9UYSrGqkoHHzR%2BI32gKCl1VHkUta22MfALfVpxzNGXrCXs%2FbXXPdPi0wijsixbbs3HD4oM%2FVRZcQh1PYnQbp&X-Amz-Signature=75f10ac39be5a5ec98002a99d08467bed2721a009279978d4aa8f15e01e9ba85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DTZ2QWQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICxty3nlzJnNGEsgOv2uTdOlIVCrfSPZqktLuQ0StvIGAiAygJho7MnBTJzikkmGrMVIA3itdGcs5ZeHfSgBHSgH0Sr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM7l3Qt4j7BSkp%2B1OXKtwDNVBiLR2hzFVuy%2F9kwAiEItFkzDEGWEaMmbx2%2FKGlDzx9EuwngbuXjYkxWHEpzZ1bnCcUDSM%2BbE5b6k28GtpAcxmWMAZEOBtIklQubkS4MM%2BLLpevgfnDGhUDiithZHdx%2FwJqS7TUQ6Q74liCXqn9JUIQiKRg8%2Br7q3MMjPQVa4fc448gVhY6DRRzCvaB8Jxrq%2BjXULY%2FDFe1CMzL9m%2FlKKMlmqaisHMctItmhy43VsMR02PZzvsUlSUjvQiUrN3tV8dpfHyxh7rVJ%2Fwq4M8xrXNa1uncy5Ig%2BuPpGyqWxXfGdt5Xv3IC3U0nUq%2BHbDtBtA3wSLFwJh8YAqQPcDC9araVGm5ejHLilMQkjDT%2FxGYno%2BWiZ9P0LqZDZugLgSz5jYhHnaXkrZ%2Bz3MugtTJpwnjurGIhz63qK9ObwhdwY5tvrKDexXnp%2FAfqkfCcF9wBtZzqhAlLWaSO2H1oJZ8Jrx4eV5qDS1FAzyDhG9UJkFyh3rLhUmcG9FsjVNO8t2kWxQd2uljWPSknPpEWP0617QyyqM61t4AeBnk13lbadgjaphdXGI%2Fm9ALQsQ7%2BUuwy0kAr3lwA8jeHwWz62uvPSqqlRpfNzIq%2BrWKk0w5HKFll0tbrJ%2FwJyk3DkuUwptrGxAY6pgGj%2Fhy57ezth%2FnXCLPL8lSfgwD8OlbOX4xj0bqm%2F9nRv0Goh8Eq52IUNCJ6SU6TRh9dZWelkT4CxOLZga%2FQ0Acg1%2Fzjwf13tSJriOIDSJQ5KUeYiMyn6KkvxdhbD2lbCPBYBGF5XWQR9UYSrGqkoHHzR%2BI32gKCl1VHkUta22MfALfVpxzNGXrCXs%2FbXXPdPi0wijsixbbs3HD4oM%2FVRZcQh1PYnQbp&X-Amz-Signature=7ef18d24bf9a13f174cc93fcbfce774838402783ba3689e650031566310fab42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DTZ2QWQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICxty3nlzJnNGEsgOv2uTdOlIVCrfSPZqktLuQ0StvIGAiAygJho7MnBTJzikkmGrMVIA3itdGcs5ZeHfSgBHSgH0Sr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM7l3Qt4j7BSkp%2B1OXKtwDNVBiLR2hzFVuy%2F9kwAiEItFkzDEGWEaMmbx2%2FKGlDzx9EuwngbuXjYkxWHEpzZ1bnCcUDSM%2BbE5b6k28GtpAcxmWMAZEOBtIklQubkS4MM%2BLLpevgfnDGhUDiithZHdx%2FwJqS7TUQ6Q74liCXqn9JUIQiKRg8%2Br7q3MMjPQVa4fc448gVhY6DRRzCvaB8Jxrq%2BjXULY%2FDFe1CMzL9m%2FlKKMlmqaisHMctItmhy43VsMR02PZzvsUlSUjvQiUrN3tV8dpfHyxh7rVJ%2Fwq4M8xrXNa1uncy5Ig%2BuPpGyqWxXfGdt5Xv3IC3U0nUq%2BHbDtBtA3wSLFwJh8YAqQPcDC9araVGm5ejHLilMQkjDT%2FxGYno%2BWiZ9P0LqZDZugLgSz5jYhHnaXkrZ%2Bz3MugtTJpwnjurGIhz63qK9ObwhdwY5tvrKDexXnp%2FAfqkfCcF9wBtZzqhAlLWaSO2H1oJZ8Jrx4eV5qDS1FAzyDhG9UJkFyh3rLhUmcG9FsjVNO8t2kWxQd2uljWPSknPpEWP0617QyyqM61t4AeBnk13lbadgjaphdXGI%2Fm9ALQsQ7%2BUuwy0kAr3lwA8jeHwWz62uvPSqqlRpfNzIq%2BrWKk0w5HKFll0tbrJ%2FwJyk3DkuUwptrGxAY6pgGj%2Fhy57ezth%2FnXCLPL8lSfgwD8OlbOX4xj0bqm%2F9nRv0Goh8Eq52IUNCJ6SU6TRh9dZWelkT4CxOLZga%2FQ0Acg1%2Fzjwf13tSJriOIDSJQ5KUeYiMyn6KkvxdhbD2lbCPBYBGF5XWQR9UYSrGqkoHHzR%2BI32gKCl1VHkUta22MfALfVpxzNGXrCXs%2FbXXPdPi0wijsixbbs3HD4oM%2FVRZcQh1PYnQbp&X-Amz-Signature=d55975e0c46f2cb022ee17595b2137d39993402b8fef9fee4cb22458c955ae1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
