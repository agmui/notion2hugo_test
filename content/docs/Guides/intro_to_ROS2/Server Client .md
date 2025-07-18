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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZQTMCJB%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIECbXbtqvxO8EQvl8Ubl3uUeO2l%2BDfQsBM99jlqHaZxOAiEAto%2BdwuJmikqmKhvjz58e9SBi%2B%2FXYeB%2FldQ1SvmcqODAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVUMKg1tDInnBqn2ircA88ywDhdd7Qd6tISCqk6JMxh0quWEwt%2BbUrhtigSZ4CUukG3HZmgtpEhJhifS54YQDNsCAo4jYOPvC7my8Y%2BkLYiCOZHcaBs5KuDzxdzbLnabUR4cnQRlia970fCziqlnrVR0rM8GJIjX7iim3%2FLBqIsdZ0zBIUyUN7Dz0N%2FyyhhDh1H6Ob16FVU3wbIau1as81xgyp307JaIyJw695iNGnW8REh0ta007DAnzY06bVIxukwJCiAXfFt4xn7nyxMolys8bvEcqZ0FPExv0tO4xPZBE2OtIm7iYwBwLkZu4R3EhpoSGzsjjuQsygJNw1Ck5wZs5FFFxg625r0p2ueFCGShF8kbRmwXBUpOheA%2FVSyGxUf168XYnavn5MAIY5%2Bs1KEmIDa8C4YTap8IkWH5lFo96TX%2BanAVzBbCuV61B0TGyIFlbIT1kV3%2FCuEjmlXcVSjq0rl0gJfp7VGJDCZwcUdZ5DHlTEUNJNkve5ZDUuFiDQVq5s081cigLziAnhXVDiA%2Bz%2FbKzbsxQTZk6CZP1SuFXSpRm4MYpOSOQbQ%2FpXtdN7cDcQCa5uVCFLfk6BaMYe8lwxJ560tucHEmTldrr1Y9zm4a8Hj7Fp4FQDhmn8SZcxQaty9%2B0VfIGz9MPOK68MGOqUBta0l7mBrwor8Pny7%2Ba8Ha%2Fgcq%2B2zr9Tqa2LHhspR8ninYh6c56Wu4lE2gS81%2FMntAB2N2eTOzwnO8S%2BRUxCpnwPc2eM95hMg%2B3KV6yTTpaTtDeIEjMrAIdU%2FCKT8qx1jSZO1ddEYVxO%2FCKp2wk5xygdX0THIf%2Bni6hUQURdr0aK6nFsaOhhcGBEzy9cvWqVELAIXa8VE6tGkefEmFqp%2FWul50mOX&X-Amz-Signature=e179d42a885d2a92e150ac50bbda9a3ad19940c2f6eb7db847f71e6cdf642f81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZQTMCJB%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIECbXbtqvxO8EQvl8Ubl3uUeO2l%2BDfQsBM99jlqHaZxOAiEAto%2BdwuJmikqmKhvjz58e9SBi%2B%2FXYeB%2FldQ1SvmcqODAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVUMKg1tDInnBqn2ircA88ywDhdd7Qd6tISCqk6JMxh0quWEwt%2BbUrhtigSZ4CUukG3HZmgtpEhJhifS54YQDNsCAo4jYOPvC7my8Y%2BkLYiCOZHcaBs5KuDzxdzbLnabUR4cnQRlia970fCziqlnrVR0rM8GJIjX7iim3%2FLBqIsdZ0zBIUyUN7Dz0N%2FyyhhDh1H6Ob16FVU3wbIau1as81xgyp307JaIyJw695iNGnW8REh0ta007DAnzY06bVIxukwJCiAXfFt4xn7nyxMolys8bvEcqZ0FPExv0tO4xPZBE2OtIm7iYwBwLkZu4R3EhpoSGzsjjuQsygJNw1Ck5wZs5FFFxg625r0p2ueFCGShF8kbRmwXBUpOheA%2FVSyGxUf168XYnavn5MAIY5%2Bs1KEmIDa8C4YTap8IkWH5lFo96TX%2BanAVzBbCuV61B0TGyIFlbIT1kV3%2FCuEjmlXcVSjq0rl0gJfp7VGJDCZwcUdZ5DHlTEUNJNkve5ZDUuFiDQVq5s081cigLziAnhXVDiA%2Bz%2FbKzbsxQTZk6CZP1SuFXSpRm4MYpOSOQbQ%2FpXtdN7cDcQCa5uVCFLfk6BaMYe8lwxJ560tucHEmTldrr1Y9zm4a8Hj7Fp4FQDhmn8SZcxQaty9%2B0VfIGz9MPOK68MGOqUBta0l7mBrwor8Pny7%2Ba8Ha%2Fgcq%2B2zr9Tqa2LHhspR8ninYh6c56Wu4lE2gS81%2FMntAB2N2eTOzwnO8S%2BRUxCpnwPc2eM95hMg%2B3KV6yTTpaTtDeIEjMrAIdU%2FCKT8qx1jSZO1ddEYVxO%2FCKp2wk5xygdX0THIf%2Bni6hUQURdr0aK6nFsaOhhcGBEzy9cvWqVELAIXa8VE6tGkefEmFqp%2FWul50mOX&X-Amz-Signature=e3590636dd720f21351d67df89cd2fb65ec287003cc9c29d627c90cf75623859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZQTMCJB%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIECbXbtqvxO8EQvl8Ubl3uUeO2l%2BDfQsBM99jlqHaZxOAiEAto%2BdwuJmikqmKhvjz58e9SBi%2B%2FXYeB%2FldQ1SvmcqODAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVUMKg1tDInnBqn2ircA88ywDhdd7Qd6tISCqk6JMxh0quWEwt%2BbUrhtigSZ4CUukG3HZmgtpEhJhifS54YQDNsCAo4jYOPvC7my8Y%2BkLYiCOZHcaBs5KuDzxdzbLnabUR4cnQRlia970fCziqlnrVR0rM8GJIjX7iim3%2FLBqIsdZ0zBIUyUN7Dz0N%2FyyhhDh1H6Ob16FVU3wbIau1as81xgyp307JaIyJw695iNGnW8REh0ta007DAnzY06bVIxukwJCiAXfFt4xn7nyxMolys8bvEcqZ0FPExv0tO4xPZBE2OtIm7iYwBwLkZu4R3EhpoSGzsjjuQsygJNw1Ck5wZs5FFFxg625r0p2ueFCGShF8kbRmwXBUpOheA%2FVSyGxUf168XYnavn5MAIY5%2Bs1KEmIDa8C4YTap8IkWH5lFo96TX%2BanAVzBbCuV61B0TGyIFlbIT1kV3%2FCuEjmlXcVSjq0rl0gJfp7VGJDCZwcUdZ5DHlTEUNJNkve5ZDUuFiDQVq5s081cigLziAnhXVDiA%2Bz%2FbKzbsxQTZk6CZP1SuFXSpRm4MYpOSOQbQ%2FpXtdN7cDcQCa5uVCFLfk6BaMYe8lwxJ560tucHEmTldrr1Y9zm4a8Hj7Fp4FQDhmn8SZcxQaty9%2B0VfIGz9MPOK68MGOqUBta0l7mBrwor8Pny7%2Ba8Ha%2Fgcq%2B2zr9Tqa2LHhspR8ninYh6c56Wu4lE2gS81%2FMntAB2N2eTOzwnO8S%2BRUxCpnwPc2eM95hMg%2B3KV6yTTpaTtDeIEjMrAIdU%2FCKT8qx1jSZO1ddEYVxO%2FCKp2wk5xygdX0THIf%2Bni6hUQURdr0aK6nFsaOhhcGBEzy9cvWqVELAIXa8VE6tGkefEmFqp%2FWul50mOX&X-Amz-Signature=9f32e3213fac1dffa71ed195f1ba4dfcfcec9b4a0b7f38b09858fe481876560b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZQTMCJB%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIECbXbtqvxO8EQvl8Ubl3uUeO2l%2BDfQsBM99jlqHaZxOAiEAto%2BdwuJmikqmKhvjz58e9SBi%2B%2FXYeB%2FldQ1SvmcqODAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVUMKg1tDInnBqn2ircA88ywDhdd7Qd6tISCqk6JMxh0quWEwt%2BbUrhtigSZ4CUukG3HZmgtpEhJhifS54YQDNsCAo4jYOPvC7my8Y%2BkLYiCOZHcaBs5KuDzxdzbLnabUR4cnQRlia970fCziqlnrVR0rM8GJIjX7iim3%2FLBqIsdZ0zBIUyUN7Dz0N%2FyyhhDh1H6Ob16FVU3wbIau1as81xgyp307JaIyJw695iNGnW8REh0ta007DAnzY06bVIxukwJCiAXfFt4xn7nyxMolys8bvEcqZ0FPExv0tO4xPZBE2OtIm7iYwBwLkZu4R3EhpoSGzsjjuQsygJNw1Ck5wZs5FFFxg625r0p2ueFCGShF8kbRmwXBUpOheA%2FVSyGxUf168XYnavn5MAIY5%2Bs1KEmIDa8C4YTap8IkWH5lFo96TX%2BanAVzBbCuV61B0TGyIFlbIT1kV3%2FCuEjmlXcVSjq0rl0gJfp7VGJDCZwcUdZ5DHlTEUNJNkve5ZDUuFiDQVq5s081cigLziAnhXVDiA%2Bz%2FbKzbsxQTZk6CZP1SuFXSpRm4MYpOSOQbQ%2FpXtdN7cDcQCa5uVCFLfk6BaMYe8lwxJ560tucHEmTldrr1Y9zm4a8Hj7Fp4FQDhmn8SZcxQaty9%2B0VfIGz9MPOK68MGOqUBta0l7mBrwor8Pny7%2Ba8Ha%2Fgcq%2B2zr9Tqa2LHhspR8ninYh6c56Wu4lE2gS81%2FMntAB2N2eTOzwnO8S%2BRUxCpnwPc2eM95hMg%2B3KV6yTTpaTtDeIEjMrAIdU%2FCKT8qx1jSZO1ddEYVxO%2FCKp2wk5xygdX0THIf%2Bni6hUQURdr0aK6nFsaOhhcGBEzy9cvWqVELAIXa8VE6tGkefEmFqp%2FWul50mOX&X-Amz-Signature=59d3b4fbab47d8464df608966f36797f8d28afa640edb333b1de7ad1ee9dee3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZQTMCJB%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIECbXbtqvxO8EQvl8Ubl3uUeO2l%2BDfQsBM99jlqHaZxOAiEAto%2BdwuJmikqmKhvjz58e9SBi%2B%2FXYeB%2FldQ1SvmcqODAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVUMKg1tDInnBqn2ircA88ywDhdd7Qd6tISCqk6JMxh0quWEwt%2BbUrhtigSZ4CUukG3HZmgtpEhJhifS54YQDNsCAo4jYOPvC7my8Y%2BkLYiCOZHcaBs5KuDzxdzbLnabUR4cnQRlia970fCziqlnrVR0rM8GJIjX7iim3%2FLBqIsdZ0zBIUyUN7Dz0N%2FyyhhDh1H6Ob16FVU3wbIau1as81xgyp307JaIyJw695iNGnW8REh0ta007DAnzY06bVIxukwJCiAXfFt4xn7nyxMolys8bvEcqZ0FPExv0tO4xPZBE2OtIm7iYwBwLkZu4R3EhpoSGzsjjuQsygJNw1Ck5wZs5FFFxg625r0p2ueFCGShF8kbRmwXBUpOheA%2FVSyGxUf168XYnavn5MAIY5%2Bs1KEmIDa8C4YTap8IkWH5lFo96TX%2BanAVzBbCuV61B0TGyIFlbIT1kV3%2FCuEjmlXcVSjq0rl0gJfp7VGJDCZwcUdZ5DHlTEUNJNkve5ZDUuFiDQVq5s081cigLziAnhXVDiA%2Bz%2FbKzbsxQTZk6CZP1SuFXSpRm4MYpOSOQbQ%2FpXtdN7cDcQCa5uVCFLfk6BaMYe8lwxJ560tucHEmTldrr1Y9zm4a8Hj7Fp4FQDhmn8SZcxQaty9%2B0VfIGz9MPOK68MGOqUBta0l7mBrwor8Pny7%2Ba8Ha%2Fgcq%2B2zr9Tqa2LHhspR8ninYh6c56Wu4lE2gS81%2FMntAB2N2eTOzwnO8S%2BRUxCpnwPc2eM95hMg%2B3KV6yTTpaTtDeIEjMrAIdU%2FCKT8qx1jSZO1ddEYVxO%2FCKp2wk5xygdX0THIf%2Bni6hUQURdr0aK6nFsaOhhcGBEzy9cvWqVELAIXa8VE6tGkefEmFqp%2FWul50mOX&X-Amz-Signature=e8c1476139b7c953b8ebfecc1c03cca5378c66dc26d345509360b007ddad5d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
