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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MLA4KX3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDqJAck1WhWmjUGPdXjOHJa0f5xLgcLyiDlN%2FFk%2FYFpvAIgfDn7LjvlfO6mwreAXDwZNW1vArzoQKgIHac2%2BjHDADMqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7qU4fJwDyKneHXIircA1PJpTYiv90J8t0m8nEuexNQ%2FtIEIg95TLJXoswEEx6EOKOhiGdK9a9d4AGpdrNradfXl6Oj07%2Bd3Zg5ugJYI2Bf1WV7p05O9M8HfSz6Hr2Xr7NJhjXcyuHCKVlcv%2FzIp4qCreVuLSDEugdSlGgSknf5P%2FUcoZvglcymewmhRQwGIQ%2BjIhHUthT1ztUN05V2iuABRLoqxC%2Fobpww2oRdRkcOcmTr2EC%2BfH8XcBLokWffLiFLlj3tHryTw%2BuoNZM3Pyu356lQaD%2FgnnWQeHmkUS74H75BF%2BHVPuGo1GT9%2Bfwc7smffKxH8Df5pXJYP7QbonwIHDNmCdTplJHnndq9OpaTa0xlX4ZItGHf3s009%2F%2B1%2B38YsQdtp1s5l4rrvpiRdvq9PRie4ChTbEVhzgTRM77WkLSbcGTPB5WLF3EJWrJweuBAQoyw9ulCYUHkvbv65cEiFtSyzb0FC%2BhCkkyar9WNrzQeL1Q49%2BJ6EZ9mrbWM1MiEGHdgCjDklZC0NCjtDXDZ0%2FBTnQG2RR3%2FlNhh8o1ngAW8lbLYRnSfTDY7YISzn981kX1Q0Q%2F0nylj47v52GuNx34E1sFCkF5srBCGP4iOqLvjP3%2Ftce5u2YZpP8tauZCHpFnDJVf4dlh9MOzL478GOqUB1QNp5b3%2BxGIuqoEwf1I1dJjSp2ZaV3B6Vtc3uDP07AiBh1aiXn8%2F9EeSq%2FIqv753cqir56pc7CWNoSwIn0AAr3k1Mj04WRoirOtH4SsU2AUEmwWLkLrriqa9QZ21FIBwUKI7XV2GQbkIR457AGLKFMywQQVJO7sJGT1gN5K0Yn%2FSLFH17jScZy9r4MMXF47jFAmV%2FTiIye4EebY5sZNVDtkBhOar&X-Amz-Signature=07f15da05c5bed6734c6fa3be6840ca6b567026306d6c36d12d8999a3f67266b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MLA4KX3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDqJAck1WhWmjUGPdXjOHJa0f5xLgcLyiDlN%2FFk%2FYFpvAIgfDn7LjvlfO6mwreAXDwZNW1vArzoQKgIHac2%2BjHDADMqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7qU4fJwDyKneHXIircA1PJpTYiv90J8t0m8nEuexNQ%2FtIEIg95TLJXoswEEx6EOKOhiGdK9a9d4AGpdrNradfXl6Oj07%2Bd3Zg5ugJYI2Bf1WV7p05O9M8HfSz6Hr2Xr7NJhjXcyuHCKVlcv%2FzIp4qCreVuLSDEugdSlGgSknf5P%2FUcoZvglcymewmhRQwGIQ%2BjIhHUthT1ztUN05V2iuABRLoqxC%2Fobpww2oRdRkcOcmTr2EC%2BfH8XcBLokWffLiFLlj3tHryTw%2BuoNZM3Pyu356lQaD%2FgnnWQeHmkUS74H75BF%2BHVPuGo1GT9%2Bfwc7smffKxH8Df5pXJYP7QbonwIHDNmCdTplJHnndq9OpaTa0xlX4ZItGHf3s009%2F%2B1%2B38YsQdtp1s5l4rrvpiRdvq9PRie4ChTbEVhzgTRM77WkLSbcGTPB5WLF3EJWrJweuBAQoyw9ulCYUHkvbv65cEiFtSyzb0FC%2BhCkkyar9WNrzQeL1Q49%2BJ6EZ9mrbWM1MiEGHdgCjDklZC0NCjtDXDZ0%2FBTnQG2RR3%2FlNhh8o1ngAW8lbLYRnSfTDY7YISzn981kX1Q0Q%2F0nylj47v52GuNx34E1sFCkF5srBCGP4iOqLvjP3%2Ftce5u2YZpP8tauZCHpFnDJVf4dlh9MOzL478GOqUB1QNp5b3%2BxGIuqoEwf1I1dJjSp2ZaV3B6Vtc3uDP07AiBh1aiXn8%2F9EeSq%2FIqv753cqir56pc7CWNoSwIn0AAr3k1Mj04WRoirOtH4SsU2AUEmwWLkLrriqa9QZ21FIBwUKI7XV2GQbkIR457AGLKFMywQQVJO7sJGT1gN5K0Yn%2FSLFH17jScZy9r4MMXF47jFAmV%2FTiIye4EebY5sZNVDtkBhOar&X-Amz-Signature=41a516335d9be22abe02b5389675c44bb498e9d0d29b7af84c20ad6267c5f8bd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MLA4KX3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDqJAck1WhWmjUGPdXjOHJa0f5xLgcLyiDlN%2FFk%2FYFpvAIgfDn7LjvlfO6mwreAXDwZNW1vArzoQKgIHac2%2BjHDADMqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7qU4fJwDyKneHXIircA1PJpTYiv90J8t0m8nEuexNQ%2FtIEIg95TLJXoswEEx6EOKOhiGdK9a9d4AGpdrNradfXl6Oj07%2Bd3Zg5ugJYI2Bf1WV7p05O9M8HfSz6Hr2Xr7NJhjXcyuHCKVlcv%2FzIp4qCreVuLSDEugdSlGgSknf5P%2FUcoZvglcymewmhRQwGIQ%2BjIhHUthT1ztUN05V2iuABRLoqxC%2Fobpww2oRdRkcOcmTr2EC%2BfH8XcBLokWffLiFLlj3tHryTw%2BuoNZM3Pyu356lQaD%2FgnnWQeHmkUS74H75BF%2BHVPuGo1GT9%2Bfwc7smffKxH8Df5pXJYP7QbonwIHDNmCdTplJHnndq9OpaTa0xlX4ZItGHf3s009%2F%2B1%2B38YsQdtp1s5l4rrvpiRdvq9PRie4ChTbEVhzgTRM77WkLSbcGTPB5WLF3EJWrJweuBAQoyw9ulCYUHkvbv65cEiFtSyzb0FC%2BhCkkyar9WNrzQeL1Q49%2BJ6EZ9mrbWM1MiEGHdgCjDklZC0NCjtDXDZ0%2FBTnQG2RR3%2FlNhh8o1ngAW8lbLYRnSfTDY7YISzn981kX1Q0Q%2F0nylj47v52GuNx34E1sFCkF5srBCGP4iOqLvjP3%2Ftce5u2YZpP8tauZCHpFnDJVf4dlh9MOzL478GOqUB1QNp5b3%2BxGIuqoEwf1I1dJjSp2ZaV3B6Vtc3uDP07AiBh1aiXn8%2F9EeSq%2FIqv753cqir56pc7CWNoSwIn0AAr3k1Mj04WRoirOtH4SsU2AUEmwWLkLrriqa9QZ21FIBwUKI7XV2GQbkIR457AGLKFMywQQVJO7sJGT1gN5K0Yn%2FSLFH17jScZy9r4MMXF47jFAmV%2FTiIye4EebY5sZNVDtkBhOar&X-Amz-Signature=a34740d2a7a3867c7c00069e04b5a9f9b8ca8b2e656cd884f2174e57d5e3d3c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MLA4KX3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDqJAck1WhWmjUGPdXjOHJa0f5xLgcLyiDlN%2FFk%2FYFpvAIgfDn7LjvlfO6mwreAXDwZNW1vArzoQKgIHac2%2BjHDADMqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7qU4fJwDyKneHXIircA1PJpTYiv90J8t0m8nEuexNQ%2FtIEIg95TLJXoswEEx6EOKOhiGdK9a9d4AGpdrNradfXl6Oj07%2Bd3Zg5ugJYI2Bf1WV7p05O9M8HfSz6Hr2Xr7NJhjXcyuHCKVlcv%2FzIp4qCreVuLSDEugdSlGgSknf5P%2FUcoZvglcymewmhRQwGIQ%2BjIhHUthT1ztUN05V2iuABRLoqxC%2Fobpww2oRdRkcOcmTr2EC%2BfH8XcBLokWffLiFLlj3tHryTw%2BuoNZM3Pyu356lQaD%2FgnnWQeHmkUS74H75BF%2BHVPuGo1GT9%2Bfwc7smffKxH8Df5pXJYP7QbonwIHDNmCdTplJHnndq9OpaTa0xlX4ZItGHf3s009%2F%2B1%2B38YsQdtp1s5l4rrvpiRdvq9PRie4ChTbEVhzgTRM77WkLSbcGTPB5WLF3EJWrJweuBAQoyw9ulCYUHkvbv65cEiFtSyzb0FC%2BhCkkyar9WNrzQeL1Q49%2BJ6EZ9mrbWM1MiEGHdgCjDklZC0NCjtDXDZ0%2FBTnQG2RR3%2FlNhh8o1ngAW8lbLYRnSfTDY7YISzn981kX1Q0Q%2F0nylj47v52GuNx34E1sFCkF5srBCGP4iOqLvjP3%2Ftce5u2YZpP8tauZCHpFnDJVf4dlh9MOzL478GOqUB1QNp5b3%2BxGIuqoEwf1I1dJjSp2ZaV3B6Vtc3uDP07AiBh1aiXn8%2F9EeSq%2FIqv753cqir56pc7CWNoSwIn0AAr3k1Mj04WRoirOtH4SsU2AUEmwWLkLrriqa9QZ21FIBwUKI7XV2GQbkIR457AGLKFMywQQVJO7sJGT1gN5K0Yn%2FSLFH17jScZy9r4MMXF47jFAmV%2FTiIye4EebY5sZNVDtkBhOar&X-Amz-Signature=f0365930725d0ee050f3fa61bdf3277fcaa43efe081d0628528133da886142aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MLA4KX3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDqJAck1WhWmjUGPdXjOHJa0f5xLgcLyiDlN%2FFk%2FYFpvAIgfDn7LjvlfO6mwreAXDwZNW1vArzoQKgIHac2%2BjHDADMqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7qU4fJwDyKneHXIircA1PJpTYiv90J8t0m8nEuexNQ%2FtIEIg95TLJXoswEEx6EOKOhiGdK9a9d4AGpdrNradfXl6Oj07%2Bd3Zg5ugJYI2Bf1WV7p05O9M8HfSz6Hr2Xr7NJhjXcyuHCKVlcv%2FzIp4qCreVuLSDEugdSlGgSknf5P%2FUcoZvglcymewmhRQwGIQ%2BjIhHUthT1ztUN05V2iuABRLoqxC%2Fobpww2oRdRkcOcmTr2EC%2BfH8XcBLokWffLiFLlj3tHryTw%2BuoNZM3Pyu356lQaD%2FgnnWQeHmkUS74H75BF%2BHVPuGo1GT9%2Bfwc7smffKxH8Df5pXJYP7QbonwIHDNmCdTplJHnndq9OpaTa0xlX4ZItGHf3s009%2F%2B1%2B38YsQdtp1s5l4rrvpiRdvq9PRie4ChTbEVhzgTRM77WkLSbcGTPB5WLF3EJWrJweuBAQoyw9ulCYUHkvbv65cEiFtSyzb0FC%2BhCkkyar9WNrzQeL1Q49%2BJ6EZ9mrbWM1MiEGHdgCjDklZC0NCjtDXDZ0%2FBTnQG2RR3%2FlNhh8o1ngAW8lbLYRnSfTDY7YISzn981kX1Q0Q%2F0nylj47v52GuNx34E1sFCkF5srBCGP4iOqLvjP3%2Ftce5u2YZpP8tauZCHpFnDJVf4dlh9MOzL478GOqUB1QNp5b3%2BxGIuqoEwf1I1dJjSp2ZaV3B6Vtc3uDP07AiBh1aiXn8%2F9EeSq%2FIqv753cqir56pc7CWNoSwIn0AAr3k1Mj04WRoirOtH4SsU2AUEmwWLkLrriqa9QZ21FIBwUKI7XV2GQbkIR457AGLKFMywQQVJO7sJGT1gN5K0Yn%2FSLFH17jScZy9r4MMXF47jFAmV%2FTiIye4EebY5sZNVDtkBhOar&X-Amz-Signature=d2e032509b105526cb5f6d5fae6e0f425bf215aa56c089e71865f834e6508ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
