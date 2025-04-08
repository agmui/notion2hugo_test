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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OGQL54R%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDcBQOiwogYrpP5K8TOg%2Fr87kUOGBTQTMbN2KcFGozEKAiBkokaXZzG7y5rL26XWWureaLsde8zfVrnvllAoC%2F%2B2Mir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMHiGH4HrbXv1hByHOKtwDr4%2BjTQhvkEL8UKrAyLYPz0PuW7xRWLoHtY1TWFUp7UnbEX2dAz0vaLQEGfCLro%2BQqXXE%2BRcV3xfRekn5BCtWolZ6Pt9jomPImqDwmor48%2BK56K9iApJ4jSBTEKW%2FP9bxdEDOV1t2KswzsUK6ClXInBL7ShG9hy3LJjP%2FDVdlUQuTEn59xEl1qltGTnViI8yqAZAP0SSinTKZVb6zGelFmsDr2Z7GIvEJ3afWnXUHSCSb7xrWuYCb2P2Rx%2Byaf1Uw26Vx3Gerw29q%2FQcJCtHeT52Bwn%2FVd8dgiu9AGfjxeBwKkVWlS9bd%2F6L%2Fg3o%2FFHmrF5YKgFH3lX7M%2FibJ2UWtDaF6qCWvRoFgUNfG87920g2qEOXcFDynPE%2FZjDOQ1FfCeeIAYK99wbl5rYtc8tiVq4Jni1CIMKpA7R3G8NsNQfosK9ka2cUOIsrHGfIZIiXmRL1uiKxp7eJshWumGfO1kb32R14gjbtJNrQb2xEO5kcPZ1VmP%2Fc24rq3Lp3kqI79i6C3kvZ5ilsYWU9Xsl3K%2BPCNy7M13PA98eadgV0JzpL%2BEoDraUvPOlvyYXE4za5LGMxVoMo6xsOd8PmtBT1v%2BMOUs%2FTp5P9feaZb0NBsnleGH%2Fld6uhygavtYT8wr9XVvwY6pgESoZMsF2EFJ0Xhp%2BqpCRgn3gQ%2FDJ4DebDkSkFx4MYzVcclYJP%2F4OBdYBwOSsaMSv87Guf12IFy6%2FQwd%2FzA5VTFbu9A68ovPjGsNpu4WwYW%2F%2F2lYkrHcjrUOQQtQCXPf6ms9bdscEcd5c1qhtOEjPsuwopg%2BNfUzKcR7NacUzZuHyX7J7PEJ0SOOdJ29EzldugMqlTKceRXHdZQf5vTkaY6tiJBCqIA&X-Amz-Signature=d87f31659274553b2c45d00313bca49e6b0f10c88c5272404712b828e6495f05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OGQL54R%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDcBQOiwogYrpP5K8TOg%2Fr87kUOGBTQTMbN2KcFGozEKAiBkokaXZzG7y5rL26XWWureaLsde8zfVrnvllAoC%2F%2B2Mir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMHiGH4HrbXv1hByHOKtwDr4%2BjTQhvkEL8UKrAyLYPz0PuW7xRWLoHtY1TWFUp7UnbEX2dAz0vaLQEGfCLro%2BQqXXE%2BRcV3xfRekn5BCtWolZ6Pt9jomPImqDwmor48%2BK56K9iApJ4jSBTEKW%2FP9bxdEDOV1t2KswzsUK6ClXInBL7ShG9hy3LJjP%2FDVdlUQuTEn59xEl1qltGTnViI8yqAZAP0SSinTKZVb6zGelFmsDr2Z7GIvEJ3afWnXUHSCSb7xrWuYCb2P2Rx%2Byaf1Uw26Vx3Gerw29q%2FQcJCtHeT52Bwn%2FVd8dgiu9AGfjxeBwKkVWlS9bd%2F6L%2Fg3o%2FFHmrF5YKgFH3lX7M%2FibJ2UWtDaF6qCWvRoFgUNfG87920g2qEOXcFDynPE%2FZjDOQ1FfCeeIAYK99wbl5rYtc8tiVq4Jni1CIMKpA7R3G8NsNQfosK9ka2cUOIsrHGfIZIiXmRL1uiKxp7eJshWumGfO1kb32R14gjbtJNrQb2xEO5kcPZ1VmP%2Fc24rq3Lp3kqI79i6C3kvZ5ilsYWU9Xsl3K%2BPCNy7M13PA98eadgV0JzpL%2BEoDraUvPOlvyYXE4za5LGMxVoMo6xsOd8PmtBT1v%2BMOUs%2FTp5P9feaZb0NBsnleGH%2Fld6uhygavtYT8wr9XVvwY6pgESoZMsF2EFJ0Xhp%2BqpCRgn3gQ%2FDJ4DebDkSkFx4MYzVcclYJP%2F4OBdYBwOSsaMSv87Guf12IFy6%2FQwd%2FzA5VTFbu9A68ovPjGsNpu4WwYW%2F%2F2lYkrHcjrUOQQtQCXPf6ms9bdscEcd5c1qhtOEjPsuwopg%2BNfUzKcR7NacUzZuHyX7J7PEJ0SOOdJ29EzldugMqlTKceRXHdZQf5vTkaY6tiJBCqIA&X-Amz-Signature=7263781a4a02bd304b2ccef297d69444a052e891254e652bf41699acfcc7dafa&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OGQL54R%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDcBQOiwogYrpP5K8TOg%2Fr87kUOGBTQTMbN2KcFGozEKAiBkokaXZzG7y5rL26XWWureaLsde8zfVrnvllAoC%2F%2B2Mir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMHiGH4HrbXv1hByHOKtwDr4%2BjTQhvkEL8UKrAyLYPz0PuW7xRWLoHtY1TWFUp7UnbEX2dAz0vaLQEGfCLro%2BQqXXE%2BRcV3xfRekn5BCtWolZ6Pt9jomPImqDwmor48%2BK56K9iApJ4jSBTEKW%2FP9bxdEDOV1t2KswzsUK6ClXInBL7ShG9hy3LJjP%2FDVdlUQuTEn59xEl1qltGTnViI8yqAZAP0SSinTKZVb6zGelFmsDr2Z7GIvEJ3afWnXUHSCSb7xrWuYCb2P2Rx%2Byaf1Uw26Vx3Gerw29q%2FQcJCtHeT52Bwn%2FVd8dgiu9AGfjxeBwKkVWlS9bd%2F6L%2Fg3o%2FFHmrF5YKgFH3lX7M%2FibJ2UWtDaF6qCWvRoFgUNfG87920g2qEOXcFDynPE%2FZjDOQ1FfCeeIAYK99wbl5rYtc8tiVq4Jni1CIMKpA7R3G8NsNQfosK9ka2cUOIsrHGfIZIiXmRL1uiKxp7eJshWumGfO1kb32R14gjbtJNrQb2xEO5kcPZ1VmP%2Fc24rq3Lp3kqI79i6C3kvZ5ilsYWU9Xsl3K%2BPCNy7M13PA98eadgV0JzpL%2BEoDraUvPOlvyYXE4za5LGMxVoMo6xsOd8PmtBT1v%2BMOUs%2FTp5P9feaZb0NBsnleGH%2Fld6uhygavtYT8wr9XVvwY6pgESoZMsF2EFJ0Xhp%2BqpCRgn3gQ%2FDJ4DebDkSkFx4MYzVcclYJP%2F4OBdYBwOSsaMSv87Guf12IFy6%2FQwd%2FzA5VTFbu9A68ovPjGsNpu4WwYW%2F%2F2lYkrHcjrUOQQtQCXPf6ms9bdscEcd5c1qhtOEjPsuwopg%2BNfUzKcR7NacUzZuHyX7J7PEJ0SOOdJ29EzldugMqlTKceRXHdZQf5vTkaY6tiJBCqIA&X-Amz-Signature=53b44dd930030773d0892ecac1b5bf77122458cac3e1dbc1e20a3bb3fd266578&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OGQL54R%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDcBQOiwogYrpP5K8TOg%2Fr87kUOGBTQTMbN2KcFGozEKAiBkokaXZzG7y5rL26XWWureaLsde8zfVrnvllAoC%2F%2B2Mir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMHiGH4HrbXv1hByHOKtwDr4%2BjTQhvkEL8UKrAyLYPz0PuW7xRWLoHtY1TWFUp7UnbEX2dAz0vaLQEGfCLro%2BQqXXE%2BRcV3xfRekn5BCtWolZ6Pt9jomPImqDwmor48%2BK56K9iApJ4jSBTEKW%2FP9bxdEDOV1t2KswzsUK6ClXInBL7ShG9hy3LJjP%2FDVdlUQuTEn59xEl1qltGTnViI8yqAZAP0SSinTKZVb6zGelFmsDr2Z7GIvEJ3afWnXUHSCSb7xrWuYCb2P2Rx%2Byaf1Uw26Vx3Gerw29q%2FQcJCtHeT52Bwn%2FVd8dgiu9AGfjxeBwKkVWlS9bd%2F6L%2Fg3o%2FFHmrF5YKgFH3lX7M%2FibJ2UWtDaF6qCWvRoFgUNfG87920g2qEOXcFDynPE%2FZjDOQ1FfCeeIAYK99wbl5rYtc8tiVq4Jni1CIMKpA7R3G8NsNQfosK9ka2cUOIsrHGfIZIiXmRL1uiKxp7eJshWumGfO1kb32R14gjbtJNrQb2xEO5kcPZ1VmP%2Fc24rq3Lp3kqI79i6C3kvZ5ilsYWU9Xsl3K%2BPCNy7M13PA98eadgV0JzpL%2BEoDraUvPOlvyYXE4za5LGMxVoMo6xsOd8PmtBT1v%2BMOUs%2FTp5P9feaZb0NBsnleGH%2Fld6uhygavtYT8wr9XVvwY6pgESoZMsF2EFJ0Xhp%2BqpCRgn3gQ%2FDJ4DebDkSkFx4MYzVcclYJP%2F4OBdYBwOSsaMSv87Guf12IFy6%2FQwd%2FzA5VTFbu9A68ovPjGsNpu4WwYW%2F%2F2lYkrHcjrUOQQtQCXPf6ms9bdscEcd5c1qhtOEjPsuwopg%2BNfUzKcR7NacUzZuHyX7J7PEJ0SOOdJ29EzldugMqlTKceRXHdZQf5vTkaY6tiJBCqIA&X-Amz-Signature=c4cb21b983f9f97a578372fccdc1e3259ed26edc478c8e37f7736380e6d20704&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OGQL54R%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDcBQOiwogYrpP5K8TOg%2Fr87kUOGBTQTMbN2KcFGozEKAiBkokaXZzG7y5rL26XWWureaLsde8zfVrnvllAoC%2F%2B2Mir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMHiGH4HrbXv1hByHOKtwDr4%2BjTQhvkEL8UKrAyLYPz0PuW7xRWLoHtY1TWFUp7UnbEX2dAz0vaLQEGfCLro%2BQqXXE%2BRcV3xfRekn5BCtWolZ6Pt9jomPImqDwmor48%2BK56K9iApJ4jSBTEKW%2FP9bxdEDOV1t2KswzsUK6ClXInBL7ShG9hy3LJjP%2FDVdlUQuTEn59xEl1qltGTnViI8yqAZAP0SSinTKZVb6zGelFmsDr2Z7GIvEJ3afWnXUHSCSb7xrWuYCb2P2Rx%2Byaf1Uw26Vx3Gerw29q%2FQcJCtHeT52Bwn%2FVd8dgiu9AGfjxeBwKkVWlS9bd%2F6L%2Fg3o%2FFHmrF5YKgFH3lX7M%2FibJ2UWtDaF6qCWvRoFgUNfG87920g2qEOXcFDynPE%2FZjDOQ1FfCeeIAYK99wbl5rYtc8tiVq4Jni1CIMKpA7R3G8NsNQfosK9ka2cUOIsrHGfIZIiXmRL1uiKxp7eJshWumGfO1kb32R14gjbtJNrQb2xEO5kcPZ1VmP%2Fc24rq3Lp3kqI79i6C3kvZ5ilsYWU9Xsl3K%2BPCNy7M13PA98eadgV0JzpL%2BEoDraUvPOlvyYXE4za5LGMxVoMo6xsOd8PmtBT1v%2BMOUs%2FTp5P9feaZb0NBsnleGH%2Fld6uhygavtYT8wr9XVvwY6pgESoZMsF2EFJ0Xhp%2BqpCRgn3gQ%2FDJ4DebDkSkFx4MYzVcclYJP%2F4OBdYBwOSsaMSv87Guf12IFy6%2FQwd%2FzA5VTFbu9A68ovPjGsNpu4WwYW%2F%2F2lYkrHcjrUOQQtQCXPf6ms9bdscEcd5c1qhtOEjPsuwopg%2BNfUzKcR7NacUzZuHyX7J7PEJ0SOOdJ29EzldugMqlTKceRXHdZQf5vTkaY6tiJBCqIA&X-Amz-Signature=9bf99011b4a5543f5bc4d3c7688b81ca5a57ec2a482c4b1024bf7d036ad0cae0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
