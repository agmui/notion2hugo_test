---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHYKV6A2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDzGAm1imUZjKe2OT65c5CVpRLTMhlLiXvUSzMFRNVqZAiEAwoddVaZV3QgotxhVGggzlQVW%2F2kdC9C6U%2Bd4eSn8X3Iq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDF2cZmT8Ujld6RBEyircAzCj8c7TFqaHqN438Z4SKtm8Gq3QSR1Ru03vShadyYBg6ApCsc81PykRdH6097%2Fma1t6u%2Fm%2FmNXqmIqUIELHVBgAZDZVGXCg1SM9TXrppNE52lqJvCh1q1u%2Fcg5%2BoVOEY41hXMKtO78PiaaXCKvPsgyl%2BrexDUb8tlXW9%2Bd%2BVJ%2FzQl67VVuU89iifRdppjKalKS9lbVFbY%2FndXHcaC8CLivpSzmfKczNyHR3QZ07gt0ccD4%2BsHbB2sP8Dzg8EC1yy1DOIcc55QuWtycRj6FLWiBpq0cYJ3l1LiYWBEemnR%2FkgAtwOet4TMUuG1R8JqZUCpQ2b51SWzwB9KZdYYYI23g%2F6hiNeLyNIW0tmV3AzfNYvOrmrld2J2%2FsEclB8E7eljHJJM4pzFGWOW02MxRneVh%2BpJSbzsbXZMXZeKjonfwb9qj2jUyRdAOqDrvIb3wMbaUWrH%2BTuKeZnFTQQ8Z8AqYPiM8PIgFbnuqcdSXrzThyj9d%2Fee4qD%2BJSsOx%2B856MUZ4hxVnDd8z7CKiK%2FPA0TNTFiMq7ZpzLWOmHMmQfUFfCjfww59uCVxwV424%2BXfsPyL8Si4vISNdMg8imINzGL7WIcyInqV3Nb9mBUC%2BfsI3DhxujDFFBV%2FKjGUJMMITSgr4GOqUBNz9W5E726jhzekR3hmLWCoA67GOBnI7%2BWNH%2F%2FCE65Hmy10Nz2YmHl%2B3b9b7b2wmUyZYHTCDcV6q9LSu9u8FFddFsCFonLPciH1dPxQryTX8dz4rUm5wK8Y8XTmG%2FalLxpUR0oc5t9N4VM8cm7V246zlSUMxLx%2B8Iz3kneuctx%2F49ai4gSl1j%2BsGmcZL1kcg1LPN47Nt%2B%2Fb7XRWZCDCsY7OiPGDjb&X-Amz-Signature=66a1eed908f79953f46158b9c1f4eb2ceda5e9ab875f184baa9bf70d2895f538&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHYKV6A2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDzGAm1imUZjKe2OT65c5CVpRLTMhlLiXvUSzMFRNVqZAiEAwoddVaZV3QgotxhVGggzlQVW%2F2kdC9C6U%2Bd4eSn8X3Iq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDF2cZmT8Ujld6RBEyircAzCj8c7TFqaHqN438Z4SKtm8Gq3QSR1Ru03vShadyYBg6ApCsc81PykRdH6097%2Fma1t6u%2Fm%2FmNXqmIqUIELHVBgAZDZVGXCg1SM9TXrppNE52lqJvCh1q1u%2Fcg5%2BoVOEY41hXMKtO78PiaaXCKvPsgyl%2BrexDUb8tlXW9%2Bd%2BVJ%2FzQl67VVuU89iifRdppjKalKS9lbVFbY%2FndXHcaC8CLivpSzmfKczNyHR3QZ07gt0ccD4%2BsHbB2sP8Dzg8EC1yy1DOIcc55QuWtycRj6FLWiBpq0cYJ3l1LiYWBEemnR%2FkgAtwOet4TMUuG1R8JqZUCpQ2b51SWzwB9KZdYYYI23g%2F6hiNeLyNIW0tmV3AzfNYvOrmrld2J2%2FsEclB8E7eljHJJM4pzFGWOW02MxRneVh%2BpJSbzsbXZMXZeKjonfwb9qj2jUyRdAOqDrvIb3wMbaUWrH%2BTuKeZnFTQQ8Z8AqYPiM8PIgFbnuqcdSXrzThyj9d%2Fee4qD%2BJSsOx%2B856MUZ4hxVnDd8z7CKiK%2FPA0TNTFiMq7ZpzLWOmHMmQfUFfCjfww59uCVxwV424%2BXfsPyL8Si4vISNdMg8imINzGL7WIcyInqV3Nb9mBUC%2BfsI3DhxujDFFBV%2FKjGUJMMITSgr4GOqUBNz9W5E726jhzekR3hmLWCoA67GOBnI7%2BWNH%2F%2FCE65Hmy10Nz2YmHl%2B3b9b7b2wmUyZYHTCDcV6q9LSu9u8FFddFsCFonLPciH1dPxQryTX8dz4rUm5wK8Y8XTmG%2FalLxpUR0oc5t9N4VM8cm7V246zlSUMxLx%2B8Iz3kneuctx%2F49ai4gSl1j%2BsGmcZL1kcg1LPN47Nt%2B%2Fb7XRWZCDCsY7OiPGDjb&X-Amz-Signature=26339eb04e76a7ccf82f4a0e004ef6b906fc6ee439e3234edae6dbefbb2d7ff4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHYKV6A2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDzGAm1imUZjKe2OT65c5CVpRLTMhlLiXvUSzMFRNVqZAiEAwoddVaZV3QgotxhVGggzlQVW%2F2kdC9C6U%2Bd4eSn8X3Iq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDF2cZmT8Ujld6RBEyircAzCj8c7TFqaHqN438Z4SKtm8Gq3QSR1Ru03vShadyYBg6ApCsc81PykRdH6097%2Fma1t6u%2Fm%2FmNXqmIqUIELHVBgAZDZVGXCg1SM9TXrppNE52lqJvCh1q1u%2Fcg5%2BoVOEY41hXMKtO78PiaaXCKvPsgyl%2BrexDUb8tlXW9%2Bd%2BVJ%2FzQl67VVuU89iifRdppjKalKS9lbVFbY%2FndXHcaC8CLivpSzmfKczNyHR3QZ07gt0ccD4%2BsHbB2sP8Dzg8EC1yy1DOIcc55QuWtycRj6FLWiBpq0cYJ3l1LiYWBEemnR%2FkgAtwOet4TMUuG1R8JqZUCpQ2b51SWzwB9KZdYYYI23g%2F6hiNeLyNIW0tmV3AzfNYvOrmrld2J2%2FsEclB8E7eljHJJM4pzFGWOW02MxRneVh%2BpJSbzsbXZMXZeKjonfwb9qj2jUyRdAOqDrvIb3wMbaUWrH%2BTuKeZnFTQQ8Z8AqYPiM8PIgFbnuqcdSXrzThyj9d%2Fee4qD%2BJSsOx%2B856MUZ4hxVnDd8z7CKiK%2FPA0TNTFiMq7ZpzLWOmHMmQfUFfCjfww59uCVxwV424%2BXfsPyL8Si4vISNdMg8imINzGL7WIcyInqV3Nb9mBUC%2BfsI3DhxujDFFBV%2FKjGUJMMITSgr4GOqUBNz9W5E726jhzekR3hmLWCoA67GOBnI7%2BWNH%2F%2FCE65Hmy10Nz2YmHl%2B3b9b7b2wmUyZYHTCDcV6q9LSu9u8FFddFsCFonLPciH1dPxQryTX8dz4rUm5wK8Y8XTmG%2FalLxpUR0oc5t9N4VM8cm7V246zlSUMxLx%2B8Iz3kneuctx%2F49ai4gSl1j%2BsGmcZL1kcg1LPN47Nt%2B%2Fb7XRWZCDCsY7OiPGDjb&X-Amz-Signature=b02b31c96f81c7393c6943e12ba42d081ce238e82ae23e1f50cfec6071231e5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHYKV6A2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDzGAm1imUZjKe2OT65c5CVpRLTMhlLiXvUSzMFRNVqZAiEAwoddVaZV3QgotxhVGggzlQVW%2F2kdC9C6U%2Bd4eSn8X3Iq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDF2cZmT8Ujld6RBEyircAzCj8c7TFqaHqN438Z4SKtm8Gq3QSR1Ru03vShadyYBg6ApCsc81PykRdH6097%2Fma1t6u%2Fm%2FmNXqmIqUIELHVBgAZDZVGXCg1SM9TXrppNE52lqJvCh1q1u%2Fcg5%2BoVOEY41hXMKtO78PiaaXCKvPsgyl%2BrexDUb8tlXW9%2Bd%2BVJ%2FzQl67VVuU89iifRdppjKalKS9lbVFbY%2FndXHcaC8CLivpSzmfKczNyHR3QZ07gt0ccD4%2BsHbB2sP8Dzg8EC1yy1DOIcc55QuWtycRj6FLWiBpq0cYJ3l1LiYWBEemnR%2FkgAtwOet4TMUuG1R8JqZUCpQ2b51SWzwB9KZdYYYI23g%2F6hiNeLyNIW0tmV3AzfNYvOrmrld2J2%2FsEclB8E7eljHJJM4pzFGWOW02MxRneVh%2BpJSbzsbXZMXZeKjonfwb9qj2jUyRdAOqDrvIb3wMbaUWrH%2BTuKeZnFTQQ8Z8AqYPiM8PIgFbnuqcdSXrzThyj9d%2Fee4qD%2BJSsOx%2B856MUZ4hxVnDd8z7CKiK%2FPA0TNTFiMq7ZpzLWOmHMmQfUFfCjfww59uCVxwV424%2BXfsPyL8Si4vISNdMg8imINzGL7WIcyInqV3Nb9mBUC%2BfsI3DhxujDFFBV%2FKjGUJMMITSgr4GOqUBNz9W5E726jhzekR3hmLWCoA67GOBnI7%2BWNH%2F%2FCE65Hmy10Nz2YmHl%2B3b9b7b2wmUyZYHTCDcV6q9LSu9u8FFddFsCFonLPciH1dPxQryTX8dz4rUm5wK8Y8XTmG%2FalLxpUR0oc5t9N4VM8cm7V246zlSUMxLx%2B8Iz3kneuctx%2F49ai4gSl1j%2BsGmcZL1kcg1LPN47Nt%2B%2Fb7XRWZCDCsY7OiPGDjb&X-Amz-Signature=513bf36b0984665944252d7ad6adf820c367681023178762d3fabe1f64427776&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHYKV6A2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDzGAm1imUZjKe2OT65c5CVpRLTMhlLiXvUSzMFRNVqZAiEAwoddVaZV3QgotxhVGggzlQVW%2F2kdC9C6U%2Bd4eSn8X3Iq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDF2cZmT8Ujld6RBEyircAzCj8c7TFqaHqN438Z4SKtm8Gq3QSR1Ru03vShadyYBg6ApCsc81PykRdH6097%2Fma1t6u%2Fm%2FmNXqmIqUIELHVBgAZDZVGXCg1SM9TXrppNE52lqJvCh1q1u%2Fcg5%2BoVOEY41hXMKtO78PiaaXCKvPsgyl%2BrexDUb8tlXW9%2Bd%2BVJ%2FzQl67VVuU89iifRdppjKalKS9lbVFbY%2FndXHcaC8CLivpSzmfKczNyHR3QZ07gt0ccD4%2BsHbB2sP8Dzg8EC1yy1DOIcc55QuWtycRj6FLWiBpq0cYJ3l1LiYWBEemnR%2FkgAtwOet4TMUuG1R8JqZUCpQ2b51SWzwB9KZdYYYI23g%2F6hiNeLyNIW0tmV3AzfNYvOrmrld2J2%2FsEclB8E7eljHJJM4pzFGWOW02MxRneVh%2BpJSbzsbXZMXZeKjonfwb9qj2jUyRdAOqDrvIb3wMbaUWrH%2BTuKeZnFTQQ8Z8AqYPiM8PIgFbnuqcdSXrzThyj9d%2Fee4qD%2BJSsOx%2B856MUZ4hxVnDd8z7CKiK%2FPA0TNTFiMq7ZpzLWOmHMmQfUFfCjfww59uCVxwV424%2BXfsPyL8Si4vISNdMg8imINzGL7WIcyInqV3Nb9mBUC%2BfsI3DhxujDFFBV%2FKjGUJMMITSgr4GOqUBNz9W5E726jhzekR3hmLWCoA67GOBnI7%2BWNH%2F%2FCE65Hmy10Nz2YmHl%2B3b9b7b2wmUyZYHTCDcV6q9LSu9u8FFddFsCFonLPciH1dPxQryTX8dz4rUm5wK8Y8XTmG%2FalLxpUR0oc5t9N4VM8cm7V246zlSUMxLx%2B8Iz3kneuctx%2F49ai4gSl1j%2BsGmcZL1kcg1LPN47Nt%2B%2Fb7XRWZCDCsY7OiPGDjb&X-Amz-Signature=40bb942a2daf1513e45554dff2e3aec6403b3df75ac895a11145f9b82156a3b4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
