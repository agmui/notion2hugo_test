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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZW7JHW%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHuETw4atyTJAfsHU%2Fx%2BzrNuzl5J0aLiLs1tjF82BtMAiEA0nkliUCjcDmkMp22hvzvAXlqTYGMcohc3MuUx6lPrSYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOonkmtwgUUtumvVxyrcA1MZdY66T7BT9QXO9d0bD9NinAimY%2FRW%2BhBkEgFGug0eBxTnH6GEkorcbCvEBXIa6LI3oUeS%2B4x0BKHez9mo%2FW3uQ%2FH7SV0vd169xbmUzdqz3qlPMcDFAS6u8mF60w3SgHNPKDoM8m6jfxTpLUBodnGp0ppxCypYFxSyeFk9Mvg2pKGM4MC48LlxQHo3CduVOsRMt8wV7PkQbNcq7fFLQfogTHYPDTdtfhAJPQXVD4vKGihqbKk31V1nBbf4RLepVoW8opz7NJC6zL2nRPm09Gd%2F%2FDu14e65SBfyqp4UBums5FEtNJpMaqQ7CMP5BaCN9r%2F5NKknsVaERG1Ma6GaR91cU%2BqawpxS4Q42%2FdEi%2FZmcQyNDB7Fykd19%2Fh4Y9sWKwvhsk68WU%2FVvphZizzBPpC36E8s7nt5UZGhR7DhuTss6hmZ5Ic%2BVxulU7qx59LhROvXXZsiZupQWGWD5VD906AxFMqCDm7j46O3NEJjT7HGc1f%2FJGPJ45upU7LHBqRz2%2BcMtWXzVja1VoZow7pEvW5ZIMwXTzruKoCGSSo1n1uwrCeFT2qZ3ZIDw0RFr40q9mZOHuqm7oyhRR%2B6CvuucOcczCt7b08lOgkoy3AQTiDk3let5AeVWHUsmE4XsMNO3wdIGOqUBzQrsL1M2Gk4YRchkWJQXG3ea65wQn2j%2FDEvbp48zIZM4jNpqg4KhSK%2FT0FEz5qdh1Ve8P5dh%2BUCd%2FVvqGouwAQtfgtQRPwApkmBrbAgCoNTzLZkuYx5rCOGRMsiI3OmRcTZ2IFKAoWrrC7GCvBcfIZqGSAv6dDmOcxTHTo8mrK8Rdwim88au4eEcWU2GpBZiYDU8ili0BdcaDZPvQsF8r7BQLewR&X-Amz-Signature=7e4da02ea164ab648d1bd2e069608cf3b6f3d91a35b527bb016d4ec7b8a3b0fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZW7JHW%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHuETw4atyTJAfsHU%2Fx%2BzrNuzl5J0aLiLs1tjF82BtMAiEA0nkliUCjcDmkMp22hvzvAXlqTYGMcohc3MuUx6lPrSYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOonkmtwgUUtumvVxyrcA1MZdY66T7BT9QXO9d0bD9NinAimY%2FRW%2BhBkEgFGug0eBxTnH6GEkorcbCvEBXIa6LI3oUeS%2B4x0BKHez9mo%2FW3uQ%2FH7SV0vd169xbmUzdqz3qlPMcDFAS6u8mF60w3SgHNPKDoM8m6jfxTpLUBodnGp0ppxCypYFxSyeFk9Mvg2pKGM4MC48LlxQHo3CduVOsRMt8wV7PkQbNcq7fFLQfogTHYPDTdtfhAJPQXVD4vKGihqbKk31V1nBbf4RLepVoW8opz7NJC6zL2nRPm09Gd%2F%2FDu14e65SBfyqp4UBums5FEtNJpMaqQ7CMP5BaCN9r%2F5NKknsVaERG1Ma6GaR91cU%2BqawpxS4Q42%2FdEi%2FZmcQyNDB7Fykd19%2Fh4Y9sWKwvhsk68WU%2FVvphZizzBPpC36E8s7nt5UZGhR7DhuTss6hmZ5Ic%2BVxulU7qx59LhROvXXZsiZupQWGWD5VD906AxFMqCDm7j46O3NEJjT7HGc1f%2FJGPJ45upU7LHBqRz2%2BcMtWXzVja1VoZow7pEvW5ZIMwXTzruKoCGSSo1n1uwrCeFT2qZ3ZIDw0RFr40q9mZOHuqm7oyhRR%2B6CvuucOcczCt7b08lOgkoy3AQTiDk3let5AeVWHUsmE4XsMNO3wdIGOqUBzQrsL1M2Gk4YRchkWJQXG3ea65wQn2j%2FDEvbp48zIZM4jNpqg4KhSK%2FT0FEz5qdh1Ve8P5dh%2BUCd%2FVvqGouwAQtfgtQRPwApkmBrbAgCoNTzLZkuYx5rCOGRMsiI3OmRcTZ2IFKAoWrrC7GCvBcfIZqGSAv6dDmOcxTHTo8mrK8Rdwim88au4eEcWU2GpBZiYDU8ili0BdcaDZPvQsF8r7BQLewR&X-Amz-Signature=a09df395a0cc57f9ccce8730214487ed326633d2fa1585316daf4abdf2fb9c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZW7JHW%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHuETw4atyTJAfsHU%2Fx%2BzrNuzl5J0aLiLs1tjF82BtMAiEA0nkliUCjcDmkMp22hvzvAXlqTYGMcohc3MuUx6lPrSYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOonkmtwgUUtumvVxyrcA1MZdY66T7BT9QXO9d0bD9NinAimY%2FRW%2BhBkEgFGug0eBxTnH6GEkorcbCvEBXIa6LI3oUeS%2B4x0BKHez9mo%2FW3uQ%2FH7SV0vd169xbmUzdqz3qlPMcDFAS6u8mF60w3SgHNPKDoM8m6jfxTpLUBodnGp0ppxCypYFxSyeFk9Mvg2pKGM4MC48LlxQHo3CduVOsRMt8wV7PkQbNcq7fFLQfogTHYPDTdtfhAJPQXVD4vKGihqbKk31V1nBbf4RLepVoW8opz7NJC6zL2nRPm09Gd%2F%2FDu14e65SBfyqp4UBums5FEtNJpMaqQ7CMP5BaCN9r%2F5NKknsVaERG1Ma6GaR91cU%2BqawpxS4Q42%2FdEi%2FZmcQyNDB7Fykd19%2Fh4Y9sWKwvhsk68WU%2FVvphZizzBPpC36E8s7nt5UZGhR7DhuTss6hmZ5Ic%2BVxulU7qx59LhROvXXZsiZupQWGWD5VD906AxFMqCDm7j46O3NEJjT7HGc1f%2FJGPJ45upU7LHBqRz2%2BcMtWXzVja1VoZow7pEvW5ZIMwXTzruKoCGSSo1n1uwrCeFT2qZ3ZIDw0RFr40q9mZOHuqm7oyhRR%2B6CvuucOcczCt7b08lOgkoy3AQTiDk3let5AeVWHUsmE4XsMNO3wdIGOqUBzQrsL1M2Gk4YRchkWJQXG3ea65wQn2j%2FDEvbp48zIZM4jNpqg4KhSK%2FT0FEz5qdh1Ve8P5dh%2BUCd%2FVvqGouwAQtfgtQRPwApkmBrbAgCoNTzLZkuYx5rCOGRMsiI3OmRcTZ2IFKAoWrrC7GCvBcfIZqGSAv6dDmOcxTHTo8mrK8Rdwim88au4eEcWU2GpBZiYDU8ili0BdcaDZPvQsF8r7BQLewR&X-Amz-Signature=24496e90a626ca16af2e684bc5d84bb3a08e463333d16216b474ff4767be036f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZW7JHW%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHuETw4atyTJAfsHU%2Fx%2BzrNuzl5J0aLiLs1tjF82BtMAiEA0nkliUCjcDmkMp22hvzvAXlqTYGMcohc3MuUx6lPrSYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOonkmtwgUUtumvVxyrcA1MZdY66T7BT9QXO9d0bD9NinAimY%2FRW%2BhBkEgFGug0eBxTnH6GEkorcbCvEBXIa6LI3oUeS%2B4x0BKHez9mo%2FW3uQ%2FH7SV0vd169xbmUzdqz3qlPMcDFAS6u8mF60w3SgHNPKDoM8m6jfxTpLUBodnGp0ppxCypYFxSyeFk9Mvg2pKGM4MC48LlxQHo3CduVOsRMt8wV7PkQbNcq7fFLQfogTHYPDTdtfhAJPQXVD4vKGihqbKk31V1nBbf4RLepVoW8opz7NJC6zL2nRPm09Gd%2F%2FDu14e65SBfyqp4UBums5FEtNJpMaqQ7CMP5BaCN9r%2F5NKknsVaERG1Ma6GaR91cU%2BqawpxS4Q42%2FdEi%2FZmcQyNDB7Fykd19%2Fh4Y9sWKwvhsk68WU%2FVvphZizzBPpC36E8s7nt5UZGhR7DhuTss6hmZ5Ic%2BVxulU7qx59LhROvXXZsiZupQWGWD5VD906AxFMqCDm7j46O3NEJjT7HGc1f%2FJGPJ45upU7LHBqRz2%2BcMtWXzVja1VoZow7pEvW5ZIMwXTzruKoCGSSo1n1uwrCeFT2qZ3ZIDw0RFr40q9mZOHuqm7oyhRR%2B6CvuucOcczCt7b08lOgkoy3AQTiDk3let5AeVWHUsmE4XsMNO3wdIGOqUBzQrsL1M2Gk4YRchkWJQXG3ea65wQn2j%2FDEvbp48zIZM4jNpqg4KhSK%2FT0FEz5qdh1Ve8P5dh%2BUCd%2FVvqGouwAQtfgtQRPwApkmBrbAgCoNTzLZkuYx5rCOGRMsiI3OmRcTZ2IFKAoWrrC7GCvBcfIZqGSAv6dDmOcxTHTo8mrK8Rdwim88au4eEcWU2GpBZiYDU8ili0BdcaDZPvQsF8r7BQLewR&X-Amz-Signature=6c6e19fa38c10e3df00d0a8a00dbdd19fca2509009aa71f03ec70bfefea984fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZW7JHW%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHuETw4atyTJAfsHU%2Fx%2BzrNuzl5J0aLiLs1tjF82BtMAiEA0nkliUCjcDmkMp22hvzvAXlqTYGMcohc3MuUx6lPrSYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOonkmtwgUUtumvVxyrcA1MZdY66T7BT9QXO9d0bD9NinAimY%2FRW%2BhBkEgFGug0eBxTnH6GEkorcbCvEBXIa6LI3oUeS%2B4x0BKHez9mo%2FW3uQ%2FH7SV0vd169xbmUzdqz3qlPMcDFAS6u8mF60w3SgHNPKDoM8m6jfxTpLUBodnGp0ppxCypYFxSyeFk9Mvg2pKGM4MC48LlxQHo3CduVOsRMt8wV7PkQbNcq7fFLQfogTHYPDTdtfhAJPQXVD4vKGihqbKk31V1nBbf4RLepVoW8opz7NJC6zL2nRPm09Gd%2F%2FDu14e65SBfyqp4UBums5FEtNJpMaqQ7CMP5BaCN9r%2F5NKknsVaERG1Ma6GaR91cU%2BqawpxS4Q42%2FdEi%2FZmcQyNDB7Fykd19%2Fh4Y9sWKwvhsk68WU%2FVvphZizzBPpC36E8s7nt5UZGhR7DhuTss6hmZ5Ic%2BVxulU7qx59LhROvXXZsiZupQWGWD5VD906AxFMqCDm7j46O3NEJjT7HGc1f%2FJGPJ45upU7LHBqRz2%2BcMtWXzVja1VoZow7pEvW5ZIMwXTzruKoCGSSo1n1uwrCeFT2qZ3ZIDw0RFr40q9mZOHuqm7oyhRR%2B6CvuucOcczCt7b08lOgkoy3AQTiDk3let5AeVWHUsmE4XsMNO3wdIGOqUBzQrsL1M2Gk4YRchkWJQXG3ea65wQn2j%2FDEvbp48zIZM4jNpqg4KhSK%2FT0FEz5qdh1Ve8P5dh%2BUCd%2FVvqGouwAQtfgtQRPwApkmBrbAgCoNTzLZkuYx5rCOGRMsiI3OmRcTZ2IFKAoWrrC7GCvBcfIZqGSAv6dDmOcxTHTo8mrK8Rdwim88au4eEcWU2GpBZiYDU8ili0BdcaDZPvQsF8r7BQLewR&X-Amz-Signature=2a9fa6a9fd7b7f1728cc21a29d3436976858dc7a46386ce0f537efacd0fd8b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
