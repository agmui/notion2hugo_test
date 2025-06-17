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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPL2LOQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb%2FfwUsUgg7LLXEgy1HypRtQ4Sj8ryQXiezs%2BqhjhybQIgBi09rr4He8x0KklbywM76EEIJSq5uSv9e1SLuptl0zoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDO30rKMXeiTuL8kLEircAzmArH0AmWfmUqLYsLyYUOPhGRhAZxVUUZVpA5Hr0X3UHWzju%2BKBxJjsD35hSxBYue2J8nfcn%2FsG90%2BnFIi0AZ3otVIFxkYwAOmGYYMpzuS8SDs5fL3h405RgyWADnIomrJkLd8ykOfaHzHN7aSoBBpbHJPHYS4XXIbFg%2BiZXTk1VwN5uJsSZGNawAl11C70UDMVTThfapqibWcEO%2FJtjTybHlzmEpyoigP%2FudnbRBBM192h1xJpOWrUmJqwH07I2I7ni%2FNz22Nr8L5UrvEAHBkjwu01%2Fkyqm76xPmFSzkeGckVIJzS1Jlb1ZYybHJvpMsd0JhjYmYCUB%2B62SwHUkn0Pf5vdOk4qa%2FABX%2F4Po4d0OxZWkFZIVIhgb1gCZLQVonn%2BqTc8vBGbMG1gtDrOD9n3iBW3cFpDcYxL%2B0oRG3rS0SJTZd4N2Emi51%2BzRoWhvcqBC27BJNKJ0ZHSPpt3bkxn76IVr5hgVdr8qpr4A8gI%2BKB25UAIntQbtX3u7aVKhU8soKUipn6HZZx0Kq5S1CcocgipZ%2FyfgAA3EYdySJyGr9dWN7fkeuVpQ8SIdQGn%2FOroVWopuItXWhSt53pKagLEvj%2FqWfXS%2F1o6xe%2Bj5lwuZ16%2BDS%2BPc4Ufe6YgMJO%2FxMIGOqUBws%2FBatJs%2Bm2ObWT7sDa7cijT7NwZe4emNm4Ky2vQ56E35C%2Fbr7pSSqfhiKYfXxA4iK%2B48cbvr7bu%2FtT13D5VfLcQZbjLvpuZLm5b%2FjgOVoWeVv7FEFgDyv7RdTvof3DzlpvT8%2F4dqvP0yo%2BlQeLDNpMmVAl0fbDil3a4j%2FaqgJCzevC5C45bkCPto%2FAt9RIQPi05f0RRcsWELKkj%2F9hkITeM54oe&X-Amz-Signature=8d9174b72a90ccbba22e9698cba152057ab8ce33b5e2f2d553e6b0ed9ff626ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPL2LOQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb%2FfwUsUgg7LLXEgy1HypRtQ4Sj8ryQXiezs%2BqhjhybQIgBi09rr4He8x0KklbywM76EEIJSq5uSv9e1SLuptl0zoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDO30rKMXeiTuL8kLEircAzmArH0AmWfmUqLYsLyYUOPhGRhAZxVUUZVpA5Hr0X3UHWzju%2BKBxJjsD35hSxBYue2J8nfcn%2FsG90%2BnFIi0AZ3otVIFxkYwAOmGYYMpzuS8SDs5fL3h405RgyWADnIomrJkLd8ykOfaHzHN7aSoBBpbHJPHYS4XXIbFg%2BiZXTk1VwN5uJsSZGNawAl11C70UDMVTThfapqibWcEO%2FJtjTybHlzmEpyoigP%2FudnbRBBM192h1xJpOWrUmJqwH07I2I7ni%2FNz22Nr8L5UrvEAHBkjwu01%2Fkyqm76xPmFSzkeGckVIJzS1Jlb1ZYybHJvpMsd0JhjYmYCUB%2B62SwHUkn0Pf5vdOk4qa%2FABX%2F4Po4d0OxZWkFZIVIhgb1gCZLQVonn%2BqTc8vBGbMG1gtDrOD9n3iBW3cFpDcYxL%2B0oRG3rS0SJTZd4N2Emi51%2BzRoWhvcqBC27BJNKJ0ZHSPpt3bkxn76IVr5hgVdr8qpr4A8gI%2BKB25UAIntQbtX3u7aVKhU8soKUipn6HZZx0Kq5S1CcocgipZ%2FyfgAA3EYdySJyGr9dWN7fkeuVpQ8SIdQGn%2FOroVWopuItXWhSt53pKagLEvj%2FqWfXS%2F1o6xe%2Bj5lwuZ16%2BDS%2BPc4Ufe6YgMJO%2FxMIGOqUBws%2FBatJs%2Bm2ObWT7sDa7cijT7NwZe4emNm4Ky2vQ56E35C%2Fbr7pSSqfhiKYfXxA4iK%2B48cbvr7bu%2FtT13D5VfLcQZbjLvpuZLm5b%2FjgOVoWeVv7FEFgDyv7RdTvof3DzlpvT8%2F4dqvP0yo%2BlQeLDNpMmVAl0fbDil3a4j%2FaqgJCzevC5C45bkCPto%2FAt9RIQPi05f0RRcsWELKkj%2F9hkITeM54oe&X-Amz-Signature=0f4a6d1d90ab10b7c61bc885faaa25a3cb08adeb827fefca6ae4d5465a7df2e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPL2LOQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb%2FfwUsUgg7LLXEgy1HypRtQ4Sj8ryQXiezs%2BqhjhybQIgBi09rr4He8x0KklbywM76EEIJSq5uSv9e1SLuptl0zoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDO30rKMXeiTuL8kLEircAzmArH0AmWfmUqLYsLyYUOPhGRhAZxVUUZVpA5Hr0X3UHWzju%2BKBxJjsD35hSxBYue2J8nfcn%2FsG90%2BnFIi0AZ3otVIFxkYwAOmGYYMpzuS8SDs5fL3h405RgyWADnIomrJkLd8ykOfaHzHN7aSoBBpbHJPHYS4XXIbFg%2BiZXTk1VwN5uJsSZGNawAl11C70UDMVTThfapqibWcEO%2FJtjTybHlzmEpyoigP%2FudnbRBBM192h1xJpOWrUmJqwH07I2I7ni%2FNz22Nr8L5UrvEAHBkjwu01%2Fkyqm76xPmFSzkeGckVIJzS1Jlb1ZYybHJvpMsd0JhjYmYCUB%2B62SwHUkn0Pf5vdOk4qa%2FABX%2F4Po4d0OxZWkFZIVIhgb1gCZLQVonn%2BqTc8vBGbMG1gtDrOD9n3iBW3cFpDcYxL%2B0oRG3rS0SJTZd4N2Emi51%2BzRoWhvcqBC27BJNKJ0ZHSPpt3bkxn76IVr5hgVdr8qpr4A8gI%2BKB25UAIntQbtX3u7aVKhU8soKUipn6HZZx0Kq5S1CcocgipZ%2FyfgAA3EYdySJyGr9dWN7fkeuVpQ8SIdQGn%2FOroVWopuItXWhSt53pKagLEvj%2FqWfXS%2F1o6xe%2Bj5lwuZ16%2BDS%2BPc4Ufe6YgMJO%2FxMIGOqUBws%2FBatJs%2Bm2ObWT7sDa7cijT7NwZe4emNm4Ky2vQ56E35C%2Fbr7pSSqfhiKYfXxA4iK%2B48cbvr7bu%2FtT13D5VfLcQZbjLvpuZLm5b%2FjgOVoWeVv7FEFgDyv7RdTvof3DzlpvT8%2F4dqvP0yo%2BlQeLDNpMmVAl0fbDil3a4j%2FaqgJCzevC5C45bkCPto%2FAt9RIQPi05f0RRcsWELKkj%2F9hkITeM54oe&X-Amz-Signature=1ed7b4a70233622c88fc6090d82ac53d23ac4b8577d70c7fe6d8ba9a1ab857f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPL2LOQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb%2FfwUsUgg7LLXEgy1HypRtQ4Sj8ryQXiezs%2BqhjhybQIgBi09rr4He8x0KklbywM76EEIJSq5uSv9e1SLuptl0zoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDO30rKMXeiTuL8kLEircAzmArH0AmWfmUqLYsLyYUOPhGRhAZxVUUZVpA5Hr0X3UHWzju%2BKBxJjsD35hSxBYue2J8nfcn%2FsG90%2BnFIi0AZ3otVIFxkYwAOmGYYMpzuS8SDs5fL3h405RgyWADnIomrJkLd8ykOfaHzHN7aSoBBpbHJPHYS4XXIbFg%2BiZXTk1VwN5uJsSZGNawAl11C70UDMVTThfapqibWcEO%2FJtjTybHlzmEpyoigP%2FudnbRBBM192h1xJpOWrUmJqwH07I2I7ni%2FNz22Nr8L5UrvEAHBkjwu01%2Fkyqm76xPmFSzkeGckVIJzS1Jlb1ZYybHJvpMsd0JhjYmYCUB%2B62SwHUkn0Pf5vdOk4qa%2FABX%2F4Po4d0OxZWkFZIVIhgb1gCZLQVonn%2BqTc8vBGbMG1gtDrOD9n3iBW3cFpDcYxL%2B0oRG3rS0SJTZd4N2Emi51%2BzRoWhvcqBC27BJNKJ0ZHSPpt3bkxn76IVr5hgVdr8qpr4A8gI%2BKB25UAIntQbtX3u7aVKhU8soKUipn6HZZx0Kq5S1CcocgipZ%2FyfgAA3EYdySJyGr9dWN7fkeuVpQ8SIdQGn%2FOroVWopuItXWhSt53pKagLEvj%2FqWfXS%2F1o6xe%2Bj5lwuZ16%2BDS%2BPc4Ufe6YgMJO%2FxMIGOqUBws%2FBatJs%2Bm2ObWT7sDa7cijT7NwZe4emNm4Ky2vQ56E35C%2Fbr7pSSqfhiKYfXxA4iK%2B48cbvr7bu%2FtT13D5VfLcQZbjLvpuZLm5b%2FjgOVoWeVv7FEFgDyv7RdTvof3DzlpvT8%2F4dqvP0yo%2BlQeLDNpMmVAl0fbDil3a4j%2FaqgJCzevC5C45bkCPto%2FAt9RIQPi05f0RRcsWELKkj%2F9hkITeM54oe&X-Amz-Signature=bf29f4ed628a92b45a488dcfa8da6410ba1d9090c1b7c1335421a537701a3932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPL2LOQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb%2FfwUsUgg7LLXEgy1HypRtQ4Sj8ryQXiezs%2BqhjhybQIgBi09rr4He8x0KklbywM76EEIJSq5uSv9e1SLuptl0zoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDO30rKMXeiTuL8kLEircAzmArH0AmWfmUqLYsLyYUOPhGRhAZxVUUZVpA5Hr0X3UHWzju%2BKBxJjsD35hSxBYue2J8nfcn%2FsG90%2BnFIi0AZ3otVIFxkYwAOmGYYMpzuS8SDs5fL3h405RgyWADnIomrJkLd8ykOfaHzHN7aSoBBpbHJPHYS4XXIbFg%2BiZXTk1VwN5uJsSZGNawAl11C70UDMVTThfapqibWcEO%2FJtjTybHlzmEpyoigP%2FudnbRBBM192h1xJpOWrUmJqwH07I2I7ni%2FNz22Nr8L5UrvEAHBkjwu01%2Fkyqm76xPmFSzkeGckVIJzS1Jlb1ZYybHJvpMsd0JhjYmYCUB%2B62SwHUkn0Pf5vdOk4qa%2FABX%2F4Po4d0OxZWkFZIVIhgb1gCZLQVonn%2BqTc8vBGbMG1gtDrOD9n3iBW3cFpDcYxL%2B0oRG3rS0SJTZd4N2Emi51%2BzRoWhvcqBC27BJNKJ0ZHSPpt3bkxn76IVr5hgVdr8qpr4A8gI%2BKB25UAIntQbtX3u7aVKhU8soKUipn6HZZx0Kq5S1CcocgipZ%2FyfgAA3EYdySJyGr9dWN7fkeuVpQ8SIdQGn%2FOroVWopuItXWhSt53pKagLEvj%2FqWfXS%2F1o6xe%2Bj5lwuZ16%2BDS%2BPc4Ufe6YgMJO%2FxMIGOqUBws%2FBatJs%2Bm2ObWT7sDa7cijT7NwZe4emNm4Ky2vQ56E35C%2Fbr7pSSqfhiKYfXxA4iK%2B48cbvr7bu%2FtT13D5VfLcQZbjLvpuZLm5b%2FjgOVoWeVv7FEFgDyv7RdTvof3DzlpvT8%2F4dqvP0yo%2BlQeLDNpMmVAl0fbDil3a4j%2FaqgJCzevC5C45bkCPto%2FAt9RIQPi05f0RRcsWELKkj%2F9hkITeM54oe&X-Amz-Signature=0b09a9d9798b8c55ae03912d053e9b57fdd2db51b3bb3c274afd60d6c4f3a51c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
