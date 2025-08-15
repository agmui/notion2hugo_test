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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAF5FZFD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCUTSuX0YSas8otN550fK%2BqZ8rPuiuExC6iPDnLlvNMewIgc9qoMvmGtX8kH5U5PZZGgppKVTYgBU634ZljhIxlaK4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOtcH81S9Y9APX4MnircAwtLGfHzJO%2FxRW4CWsR8E4xyOd8bGbkR1D4AGgzy2WvBL1ChYosRshQccguYZeKXZKWvvS1xRCgIiyKurWeb53Hr70I%2FCaZfGQJw3npVsCPwFJfKuoV3aehYHqN0PhkjpAHW%2FhNO7qBmhLVc%2FtjoXWNkQET%2BlDwm992VKF7VrmRQ%2Fy2TgopvR%2FMfTC3NggUzSvXYdy1B0Xi48wtMRyB%2FcNarI%2BgG%2BbgaW4w%2BklxnA0fh0aLub3LO1jcW3ZQTg6U3djcBwPjY8YuYBzlIGbJ9ohSDARgCpNUUrvPn2Hvf%2BXjriqWAasYpNT7ZbHk2zrvE0bBMb3pAECr03UM9Yz5hx02HZG8Ia%2FVvtrWSzM%2FpPiTSDuKpBRD%2BP0h9u%2B0R2Pf%2Ff32DTN64bH%2F9lSID43G%2BSqRHaFwDHeh1qXnPm%2FUEWAjlk30bURRnkYqLPTSjxTXHB79ahTBKAPFvlD5YdArhrdA0wWYWs8AOFvcTgrA%2BQ1ktUosA6OjX53yTwvOq2ojivqP0BXbvNxeqIORKAZWyXF55aImeL%2FYAHI1q5NNPwc3MyydlwHNGtymSKb7ISQsJoxna%2F7zWSzOSUFS8GzCQv0vSMrO9ayaMP90RozVdtJC75nNMbKYTpIzA26T6MJDb%2FcQGOqUB%2FLypSpD5YSxp6DWOUWxAXcg7fkseedR%2F%2FLKAOCWY3pLx%2FqpeenQkIi5nfrVX9IGPIQshU2bTsl%2BuWu%2BcEzXRtYBlUNPKv9RRPVd4uWNIK7vdxkq%2FccTpKQxETYS3JFT1xh1eQk0hUR1A%2Fjn4GHW1LsUrg8KdgJ2%2FitZfZhHXZF1%2FWgLn01cLNEDiO9U9GMtvYxM2S40J9jAj24mLFrVJ5M6Aw0kE&X-Amz-Signature=85040d3c43e7d2596c3b2567c4442ed2b8c2de6f5be15a6b3646201d1c17b6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAF5FZFD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCUTSuX0YSas8otN550fK%2BqZ8rPuiuExC6iPDnLlvNMewIgc9qoMvmGtX8kH5U5PZZGgppKVTYgBU634ZljhIxlaK4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOtcH81S9Y9APX4MnircAwtLGfHzJO%2FxRW4CWsR8E4xyOd8bGbkR1D4AGgzy2WvBL1ChYosRshQccguYZeKXZKWvvS1xRCgIiyKurWeb53Hr70I%2FCaZfGQJw3npVsCPwFJfKuoV3aehYHqN0PhkjpAHW%2FhNO7qBmhLVc%2FtjoXWNkQET%2BlDwm992VKF7VrmRQ%2Fy2TgopvR%2FMfTC3NggUzSvXYdy1B0Xi48wtMRyB%2FcNarI%2BgG%2BbgaW4w%2BklxnA0fh0aLub3LO1jcW3ZQTg6U3djcBwPjY8YuYBzlIGbJ9ohSDARgCpNUUrvPn2Hvf%2BXjriqWAasYpNT7ZbHk2zrvE0bBMb3pAECr03UM9Yz5hx02HZG8Ia%2FVvtrWSzM%2FpPiTSDuKpBRD%2BP0h9u%2B0R2Pf%2Ff32DTN64bH%2F9lSID43G%2BSqRHaFwDHeh1qXnPm%2FUEWAjlk30bURRnkYqLPTSjxTXHB79ahTBKAPFvlD5YdArhrdA0wWYWs8AOFvcTgrA%2BQ1ktUosA6OjX53yTwvOq2ojivqP0BXbvNxeqIORKAZWyXF55aImeL%2FYAHI1q5NNPwc3MyydlwHNGtymSKb7ISQsJoxna%2F7zWSzOSUFS8GzCQv0vSMrO9ayaMP90RozVdtJC75nNMbKYTpIzA26T6MJDb%2FcQGOqUB%2FLypSpD5YSxp6DWOUWxAXcg7fkseedR%2F%2FLKAOCWY3pLx%2FqpeenQkIi5nfrVX9IGPIQshU2bTsl%2BuWu%2BcEzXRtYBlUNPKv9RRPVd4uWNIK7vdxkq%2FccTpKQxETYS3JFT1xh1eQk0hUR1A%2Fjn4GHW1LsUrg8KdgJ2%2FitZfZhHXZF1%2FWgLn01cLNEDiO9U9GMtvYxM2S40J9jAj24mLFrVJ5M6Aw0kE&X-Amz-Signature=a359f282ae958cfd7f0299ce914c5e86483b41d1aad055b07d9278f921d791c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAF5FZFD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCUTSuX0YSas8otN550fK%2BqZ8rPuiuExC6iPDnLlvNMewIgc9qoMvmGtX8kH5U5PZZGgppKVTYgBU634ZljhIxlaK4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOtcH81S9Y9APX4MnircAwtLGfHzJO%2FxRW4CWsR8E4xyOd8bGbkR1D4AGgzy2WvBL1ChYosRshQccguYZeKXZKWvvS1xRCgIiyKurWeb53Hr70I%2FCaZfGQJw3npVsCPwFJfKuoV3aehYHqN0PhkjpAHW%2FhNO7qBmhLVc%2FtjoXWNkQET%2BlDwm992VKF7VrmRQ%2Fy2TgopvR%2FMfTC3NggUzSvXYdy1B0Xi48wtMRyB%2FcNarI%2BgG%2BbgaW4w%2BklxnA0fh0aLub3LO1jcW3ZQTg6U3djcBwPjY8YuYBzlIGbJ9ohSDARgCpNUUrvPn2Hvf%2BXjriqWAasYpNT7ZbHk2zrvE0bBMb3pAECr03UM9Yz5hx02HZG8Ia%2FVvtrWSzM%2FpPiTSDuKpBRD%2BP0h9u%2B0R2Pf%2Ff32DTN64bH%2F9lSID43G%2BSqRHaFwDHeh1qXnPm%2FUEWAjlk30bURRnkYqLPTSjxTXHB79ahTBKAPFvlD5YdArhrdA0wWYWs8AOFvcTgrA%2BQ1ktUosA6OjX53yTwvOq2ojivqP0BXbvNxeqIORKAZWyXF55aImeL%2FYAHI1q5NNPwc3MyydlwHNGtymSKb7ISQsJoxna%2F7zWSzOSUFS8GzCQv0vSMrO9ayaMP90RozVdtJC75nNMbKYTpIzA26T6MJDb%2FcQGOqUB%2FLypSpD5YSxp6DWOUWxAXcg7fkseedR%2F%2FLKAOCWY3pLx%2FqpeenQkIi5nfrVX9IGPIQshU2bTsl%2BuWu%2BcEzXRtYBlUNPKv9RRPVd4uWNIK7vdxkq%2FccTpKQxETYS3JFT1xh1eQk0hUR1A%2Fjn4GHW1LsUrg8KdgJ2%2FitZfZhHXZF1%2FWgLn01cLNEDiO9U9GMtvYxM2S40J9jAj24mLFrVJ5M6Aw0kE&X-Amz-Signature=cb7ac31a0dfbf5fdb1999100b3c3b231308bc26c112314bdefb52209345a829a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAF5FZFD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCUTSuX0YSas8otN550fK%2BqZ8rPuiuExC6iPDnLlvNMewIgc9qoMvmGtX8kH5U5PZZGgppKVTYgBU634ZljhIxlaK4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOtcH81S9Y9APX4MnircAwtLGfHzJO%2FxRW4CWsR8E4xyOd8bGbkR1D4AGgzy2WvBL1ChYosRshQccguYZeKXZKWvvS1xRCgIiyKurWeb53Hr70I%2FCaZfGQJw3npVsCPwFJfKuoV3aehYHqN0PhkjpAHW%2FhNO7qBmhLVc%2FtjoXWNkQET%2BlDwm992VKF7VrmRQ%2Fy2TgopvR%2FMfTC3NggUzSvXYdy1B0Xi48wtMRyB%2FcNarI%2BgG%2BbgaW4w%2BklxnA0fh0aLub3LO1jcW3ZQTg6U3djcBwPjY8YuYBzlIGbJ9ohSDARgCpNUUrvPn2Hvf%2BXjriqWAasYpNT7ZbHk2zrvE0bBMb3pAECr03UM9Yz5hx02HZG8Ia%2FVvtrWSzM%2FpPiTSDuKpBRD%2BP0h9u%2B0R2Pf%2Ff32DTN64bH%2F9lSID43G%2BSqRHaFwDHeh1qXnPm%2FUEWAjlk30bURRnkYqLPTSjxTXHB79ahTBKAPFvlD5YdArhrdA0wWYWs8AOFvcTgrA%2BQ1ktUosA6OjX53yTwvOq2ojivqP0BXbvNxeqIORKAZWyXF55aImeL%2FYAHI1q5NNPwc3MyydlwHNGtymSKb7ISQsJoxna%2F7zWSzOSUFS8GzCQv0vSMrO9ayaMP90RozVdtJC75nNMbKYTpIzA26T6MJDb%2FcQGOqUB%2FLypSpD5YSxp6DWOUWxAXcg7fkseedR%2F%2FLKAOCWY3pLx%2FqpeenQkIi5nfrVX9IGPIQshU2bTsl%2BuWu%2BcEzXRtYBlUNPKv9RRPVd4uWNIK7vdxkq%2FccTpKQxETYS3JFT1xh1eQk0hUR1A%2Fjn4GHW1LsUrg8KdgJ2%2FitZfZhHXZF1%2FWgLn01cLNEDiO9U9GMtvYxM2S40J9jAj24mLFrVJ5M6Aw0kE&X-Amz-Signature=ddef8d135f988a5c3984c788188bfbc32e8f0357a201768ea115b85caab01ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAF5FZFD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCUTSuX0YSas8otN550fK%2BqZ8rPuiuExC6iPDnLlvNMewIgc9qoMvmGtX8kH5U5PZZGgppKVTYgBU634ZljhIxlaK4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOtcH81S9Y9APX4MnircAwtLGfHzJO%2FxRW4CWsR8E4xyOd8bGbkR1D4AGgzy2WvBL1ChYosRshQccguYZeKXZKWvvS1xRCgIiyKurWeb53Hr70I%2FCaZfGQJw3npVsCPwFJfKuoV3aehYHqN0PhkjpAHW%2FhNO7qBmhLVc%2FtjoXWNkQET%2BlDwm992VKF7VrmRQ%2Fy2TgopvR%2FMfTC3NggUzSvXYdy1B0Xi48wtMRyB%2FcNarI%2BgG%2BbgaW4w%2BklxnA0fh0aLub3LO1jcW3ZQTg6U3djcBwPjY8YuYBzlIGbJ9ohSDARgCpNUUrvPn2Hvf%2BXjriqWAasYpNT7ZbHk2zrvE0bBMb3pAECr03UM9Yz5hx02HZG8Ia%2FVvtrWSzM%2FpPiTSDuKpBRD%2BP0h9u%2B0R2Pf%2Ff32DTN64bH%2F9lSID43G%2BSqRHaFwDHeh1qXnPm%2FUEWAjlk30bURRnkYqLPTSjxTXHB79ahTBKAPFvlD5YdArhrdA0wWYWs8AOFvcTgrA%2BQ1ktUosA6OjX53yTwvOq2ojivqP0BXbvNxeqIORKAZWyXF55aImeL%2FYAHI1q5NNPwc3MyydlwHNGtymSKb7ISQsJoxna%2F7zWSzOSUFS8GzCQv0vSMrO9ayaMP90RozVdtJC75nNMbKYTpIzA26T6MJDb%2FcQGOqUB%2FLypSpD5YSxp6DWOUWxAXcg7fkseedR%2F%2FLKAOCWY3pLx%2FqpeenQkIi5nfrVX9IGPIQshU2bTsl%2BuWu%2BcEzXRtYBlUNPKv9RRPVd4uWNIK7vdxkq%2FccTpKQxETYS3JFT1xh1eQk0hUR1A%2Fjn4GHW1LsUrg8KdgJ2%2FitZfZhHXZF1%2FWgLn01cLNEDiO9U9GMtvYxM2S40J9jAj24mLFrVJ5M6Aw0kE&X-Amz-Signature=f2f139434265b55d76c7a0ee464d692b25b98c82614c8e0715ad31b56b2c0bd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
