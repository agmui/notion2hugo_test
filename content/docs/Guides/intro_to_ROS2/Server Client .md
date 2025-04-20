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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K36W6ZB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBvOyN6MEeHUPsUugKqLFiT4uMbBKHx396fDDd7d%2B2PXAiEArub%2F5ilYraZ6rGIrN6YaloBmqeUK6aAnJ4WPIUm9RAoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXRpwBCJteBG5f6IircA5J5SBw%2FUWOi6xV1QkBUim%2FXVjqm0Ceo7PyHUVYtoiyf%2B4ZnilzPbAMD7zW36mdNS6T7GWqggfy6KjieSpPb2I6wyvt044SKz4ZUtu%2FDd4T9yozbBxAdCrR6N4xEZR20xBuDRblMx5uVk4kV2U2Atu2bAUwt%2FI5NEc4H2pq4h0uzDZZSXuOjX1gWlhWmmxA1v8u%2FnvrtfzOEDRAjTwrS4vBa3gcThfJ%2F8MbV0GSmjamv3uPNx5hogNzPaG1kLJWZtOBB8q4SB2UWhVbJgyfXWnSFItBvJSUQK4nDvTWCMOGMaIZbwk%2B8kvvxtAVVpSLNzokncnY7rvGbnTr%2F4IJYLCHD6c%2FU6KNnK5WrP%2FdMMDFnuuxr92l3y5Sd4le51htMeZAfsBgqetxDcANO5HEeIDCavhYGAdqrwyooQ3hPQTDAIdk9a5msLiK1hw1h0BRTC7%2BEgPvGel%2FBx%2Fruki5Peu%2B73Au%2B3VoHBm4Uoa13ANY75Gbdf0i9ZMx1pUHBhqVpqVlpmqEMhseylqzTMZqok8T6qXMJOf1QISNK1dOB0usRlKMC9J82U5vENjc7tXITUOogEAz1hIWrxx6j8o80DHiNZbWQpZiukg2BHX0OjA8ivFoZKohwyHaC3yHqMIyAksAGOqUB9YPDpwisqdlqnsb8Y7qKCgYsFa%2BWTXrb8vQaBOIBshf59j4%2BKq6nMtUEAM%2FsUJIY5OSW24gnPgHkv0C0RXW692Aejzsm7oAWEsvKSrCvCldTiZ2TMA%2Fax4yUyGZacmvnrEnxeXguJ6snWMUPD%2Fr4f5Hszk3Ac%2BFGPAsKvPmUumT2sxZeIj7TpxGKUpEcy3BUpy17DUKAuRtUZx9UHSWC64H%2FsaTH&X-Amz-Signature=2961d66b9b2ba4d8e5d2cf00dc7c89758392579b4a083f22753a479af645e63b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K36W6ZB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBvOyN6MEeHUPsUugKqLFiT4uMbBKHx396fDDd7d%2B2PXAiEArub%2F5ilYraZ6rGIrN6YaloBmqeUK6aAnJ4WPIUm9RAoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXRpwBCJteBG5f6IircA5J5SBw%2FUWOi6xV1QkBUim%2FXVjqm0Ceo7PyHUVYtoiyf%2B4ZnilzPbAMD7zW36mdNS6T7GWqggfy6KjieSpPb2I6wyvt044SKz4ZUtu%2FDd4T9yozbBxAdCrR6N4xEZR20xBuDRblMx5uVk4kV2U2Atu2bAUwt%2FI5NEc4H2pq4h0uzDZZSXuOjX1gWlhWmmxA1v8u%2FnvrtfzOEDRAjTwrS4vBa3gcThfJ%2F8MbV0GSmjamv3uPNx5hogNzPaG1kLJWZtOBB8q4SB2UWhVbJgyfXWnSFItBvJSUQK4nDvTWCMOGMaIZbwk%2B8kvvxtAVVpSLNzokncnY7rvGbnTr%2F4IJYLCHD6c%2FU6KNnK5WrP%2FdMMDFnuuxr92l3y5Sd4le51htMeZAfsBgqetxDcANO5HEeIDCavhYGAdqrwyooQ3hPQTDAIdk9a5msLiK1hw1h0BRTC7%2BEgPvGel%2FBx%2Fruki5Peu%2B73Au%2B3VoHBm4Uoa13ANY75Gbdf0i9ZMx1pUHBhqVpqVlpmqEMhseylqzTMZqok8T6qXMJOf1QISNK1dOB0usRlKMC9J82U5vENjc7tXITUOogEAz1hIWrxx6j8o80DHiNZbWQpZiukg2BHX0OjA8ivFoZKohwyHaC3yHqMIyAksAGOqUB9YPDpwisqdlqnsb8Y7qKCgYsFa%2BWTXrb8vQaBOIBshf59j4%2BKq6nMtUEAM%2FsUJIY5OSW24gnPgHkv0C0RXW692Aejzsm7oAWEsvKSrCvCldTiZ2TMA%2Fax4yUyGZacmvnrEnxeXguJ6snWMUPD%2Fr4f5Hszk3Ac%2BFGPAsKvPmUumT2sxZeIj7TpxGKUpEcy3BUpy17DUKAuRtUZx9UHSWC64H%2FsaTH&X-Amz-Signature=b2f9de66e5ce93bb8572553fc788bf593c2e9ecc59aef3050a8bdce381439880&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K36W6ZB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBvOyN6MEeHUPsUugKqLFiT4uMbBKHx396fDDd7d%2B2PXAiEArub%2F5ilYraZ6rGIrN6YaloBmqeUK6aAnJ4WPIUm9RAoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXRpwBCJteBG5f6IircA5J5SBw%2FUWOi6xV1QkBUim%2FXVjqm0Ceo7PyHUVYtoiyf%2B4ZnilzPbAMD7zW36mdNS6T7GWqggfy6KjieSpPb2I6wyvt044SKz4ZUtu%2FDd4T9yozbBxAdCrR6N4xEZR20xBuDRblMx5uVk4kV2U2Atu2bAUwt%2FI5NEc4H2pq4h0uzDZZSXuOjX1gWlhWmmxA1v8u%2FnvrtfzOEDRAjTwrS4vBa3gcThfJ%2F8MbV0GSmjamv3uPNx5hogNzPaG1kLJWZtOBB8q4SB2UWhVbJgyfXWnSFItBvJSUQK4nDvTWCMOGMaIZbwk%2B8kvvxtAVVpSLNzokncnY7rvGbnTr%2F4IJYLCHD6c%2FU6KNnK5WrP%2FdMMDFnuuxr92l3y5Sd4le51htMeZAfsBgqetxDcANO5HEeIDCavhYGAdqrwyooQ3hPQTDAIdk9a5msLiK1hw1h0BRTC7%2BEgPvGel%2FBx%2Fruki5Peu%2B73Au%2B3VoHBm4Uoa13ANY75Gbdf0i9ZMx1pUHBhqVpqVlpmqEMhseylqzTMZqok8T6qXMJOf1QISNK1dOB0usRlKMC9J82U5vENjc7tXITUOogEAz1hIWrxx6j8o80DHiNZbWQpZiukg2BHX0OjA8ivFoZKohwyHaC3yHqMIyAksAGOqUB9YPDpwisqdlqnsb8Y7qKCgYsFa%2BWTXrb8vQaBOIBshf59j4%2BKq6nMtUEAM%2FsUJIY5OSW24gnPgHkv0C0RXW692Aejzsm7oAWEsvKSrCvCldTiZ2TMA%2Fax4yUyGZacmvnrEnxeXguJ6snWMUPD%2Fr4f5Hszk3Ac%2BFGPAsKvPmUumT2sxZeIj7TpxGKUpEcy3BUpy17DUKAuRtUZx9UHSWC64H%2FsaTH&X-Amz-Signature=cb219c403dea3dd11f945bc51792d30184af6c8210429d2a85185707ea0aea42&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K36W6ZB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBvOyN6MEeHUPsUugKqLFiT4uMbBKHx396fDDd7d%2B2PXAiEArub%2F5ilYraZ6rGIrN6YaloBmqeUK6aAnJ4WPIUm9RAoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXRpwBCJteBG5f6IircA5J5SBw%2FUWOi6xV1QkBUim%2FXVjqm0Ceo7PyHUVYtoiyf%2B4ZnilzPbAMD7zW36mdNS6T7GWqggfy6KjieSpPb2I6wyvt044SKz4ZUtu%2FDd4T9yozbBxAdCrR6N4xEZR20xBuDRblMx5uVk4kV2U2Atu2bAUwt%2FI5NEc4H2pq4h0uzDZZSXuOjX1gWlhWmmxA1v8u%2FnvrtfzOEDRAjTwrS4vBa3gcThfJ%2F8MbV0GSmjamv3uPNx5hogNzPaG1kLJWZtOBB8q4SB2UWhVbJgyfXWnSFItBvJSUQK4nDvTWCMOGMaIZbwk%2B8kvvxtAVVpSLNzokncnY7rvGbnTr%2F4IJYLCHD6c%2FU6KNnK5WrP%2FdMMDFnuuxr92l3y5Sd4le51htMeZAfsBgqetxDcANO5HEeIDCavhYGAdqrwyooQ3hPQTDAIdk9a5msLiK1hw1h0BRTC7%2BEgPvGel%2FBx%2Fruki5Peu%2B73Au%2B3VoHBm4Uoa13ANY75Gbdf0i9ZMx1pUHBhqVpqVlpmqEMhseylqzTMZqok8T6qXMJOf1QISNK1dOB0usRlKMC9J82U5vENjc7tXITUOogEAz1hIWrxx6j8o80DHiNZbWQpZiukg2BHX0OjA8ivFoZKohwyHaC3yHqMIyAksAGOqUB9YPDpwisqdlqnsb8Y7qKCgYsFa%2BWTXrb8vQaBOIBshf59j4%2BKq6nMtUEAM%2FsUJIY5OSW24gnPgHkv0C0RXW692Aejzsm7oAWEsvKSrCvCldTiZ2TMA%2Fax4yUyGZacmvnrEnxeXguJ6snWMUPD%2Fr4f5Hszk3Ac%2BFGPAsKvPmUumT2sxZeIj7TpxGKUpEcy3BUpy17DUKAuRtUZx9UHSWC64H%2FsaTH&X-Amz-Signature=f97252791e2b5f8585c12a6825cc67530b883e5b492ac0a8943b16d39bc721f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K36W6ZB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBvOyN6MEeHUPsUugKqLFiT4uMbBKHx396fDDd7d%2B2PXAiEArub%2F5ilYraZ6rGIrN6YaloBmqeUK6aAnJ4WPIUm9RAoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXRpwBCJteBG5f6IircA5J5SBw%2FUWOi6xV1QkBUim%2FXVjqm0Ceo7PyHUVYtoiyf%2B4ZnilzPbAMD7zW36mdNS6T7GWqggfy6KjieSpPb2I6wyvt044SKz4ZUtu%2FDd4T9yozbBxAdCrR6N4xEZR20xBuDRblMx5uVk4kV2U2Atu2bAUwt%2FI5NEc4H2pq4h0uzDZZSXuOjX1gWlhWmmxA1v8u%2FnvrtfzOEDRAjTwrS4vBa3gcThfJ%2F8MbV0GSmjamv3uPNx5hogNzPaG1kLJWZtOBB8q4SB2UWhVbJgyfXWnSFItBvJSUQK4nDvTWCMOGMaIZbwk%2B8kvvxtAVVpSLNzokncnY7rvGbnTr%2F4IJYLCHD6c%2FU6KNnK5WrP%2FdMMDFnuuxr92l3y5Sd4le51htMeZAfsBgqetxDcANO5HEeIDCavhYGAdqrwyooQ3hPQTDAIdk9a5msLiK1hw1h0BRTC7%2BEgPvGel%2FBx%2Fruki5Peu%2B73Au%2B3VoHBm4Uoa13ANY75Gbdf0i9ZMx1pUHBhqVpqVlpmqEMhseylqzTMZqok8T6qXMJOf1QISNK1dOB0usRlKMC9J82U5vENjc7tXITUOogEAz1hIWrxx6j8o80DHiNZbWQpZiukg2BHX0OjA8ivFoZKohwyHaC3yHqMIyAksAGOqUB9YPDpwisqdlqnsb8Y7qKCgYsFa%2BWTXrb8vQaBOIBshf59j4%2BKq6nMtUEAM%2FsUJIY5OSW24gnPgHkv0C0RXW692Aejzsm7oAWEsvKSrCvCldTiZ2TMA%2Fax4yUyGZacmvnrEnxeXguJ6snWMUPD%2Fr4f5Hszk3Ac%2BFGPAsKvPmUumT2sxZeIj7TpxGKUpEcy3BUpy17DUKAuRtUZx9UHSWC64H%2FsaTH&X-Amz-Signature=8f16fcac0941021a5027e57f1ed7c0eb8c3cdc51f77ba8418f4a509b5129fa53&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
