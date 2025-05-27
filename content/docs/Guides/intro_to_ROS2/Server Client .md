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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSCIW2V5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ5fFNEu8Y5uqV6BknwwJIeMUfP0EPRGIsSSrAtjKUgAiEArmNsaDXva7R7oJv%2BOUvBq1A2XF3UEYc7OpnuVJlddhsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNrx%2FAefSMxAaP6SHyrcA%2BgwZsDz1nqg3Csidgjk2ioxYXJNdhzpkaTIqUxglNN%2F%2BbGWhH7o9s3BbfnIbVKRwYwVv2Tbh5EaXa0WWJDbSLadUivCHqZiyX4FRC0D47u8VgFxejITRBjAAPnbT5hMKsDNc7iJ1y6U%2BfFGMFmIHdGxKS2U1Mqp5zBbtFPjmXCngntunXxRebhPGa3uJ0RzQUOEXQkok%2BxvMQNQoOZiq4NgDCdb9fEoo8%2F22aRcKzNDww6MYhSaaYCKRW2JsOy9z7QGPOUpJ3E6%2FaSDLX%2BGsFo537k%2B5y1fdLC7grty%2FRR0OVr9TZip2cpr%2Ftkp4DJCWQmVLogUYccn8H8ov8fMAyc9pHAfDICDew%2BOdeWYIMUkj0szzIAgPuWOxy9GA9OX5yGeiSLW5mo8GBewnwvKDKSlJQmu12ha40Wfmk8bmjpbVobGG3EreOipUuBG51qjDiIXKMwJEtmSn8qFyga8vuOoG8r7VOvh8Mr2nvrYBp%2FNIyWKRy5X0zL%2FOf0%2Bul9LQVVfitSgd1I%2F39tZmhJvl0drIOQtdiy%2B4JPHU16SL%2Ft9gpelAIxF67FXf0T0t4h%2FdjFZfz6PGdaGhqaxcL9tmN5LtcQ2MhjH73rwQeSmisRt%2BrTbv%2BZz4j0wh8XEMJCX1MEGOqUBt2QA3%2B02NfDNkgItA4gNgSehETF81PTz%2BD8%2BkG2svcrzANd9ErtPa7hWhoIBy61fEqZ41g%2FQ5YRpjd4XQD%2BEw5YyrAHxwUaY2Rk%2BgORNDYLDmfK%2F2hpVHSzSvxjTi63evTYXC8nkGfblxG4T0vXMmS421pxbAJylYyb6rGqdatCvcAQYyPTUSuM6%2BY0g8hOa6V5PdIXhCHehIX5NKIvJZBwQ1ZJi&X-Amz-Signature=6e6990bca4326e17e8ddae98d4bb2e7d8b66f8f8a5aca53e4463e663f1502238&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSCIW2V5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ5fFNEu8Y5uqV6BknwwJIeMUfP0EPRGIsSSrAtjKUgAiEArmNsaDXva7R7oJv%2BOUvBq1A2XF3UEYc7OpnuVJlddhsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNrx%2FAefSMxAaP6SHyrcA%2BgwZsDz1nqg3Csidgjk2ioxYXJNdhzpkaTIqUxglNN%2F%2BbGWhH7o9s3BbfnIbVKRwYwVv2Tbh5EaXa0WWJDbSLadUivCHqZiyX4FRC0D47u8VgFxejITRBjAAPnbT5hMKsDNc7iJ1y6U%2BfFGMFmIHdGxKS2U1Mqp5zBbtFPjmXCngntunXxRebhPGa3uJ0RzQUOEXQkok%2BxvMQNQoOZiq4NgDCdb9fEoo8%2F22aRcKzNDww6MYhSaaYCKRW2JsOy9z7QGPOUpJ3E6%2FaSDLX%2BGsFo537k%2B5y1fdLC7grty%2FRR0OVr9TZip2cpr%2Ftkp4DJCWQmVLogUYccn8H8ov8fMAyc9pHAfDICDew%2BOdeWYIMUkj0szzIAgPuWOxy9GA9OX5yGeiSLW5mo8GBewnwvKDKSlJQmu12ha40Wfmk8bmjpbVobGG3EreOipUuBG51qjDiIXKMwJEtmSn8qFyga8vuOoG8r7VOvh8Mr2nvrYBp%2FNIyWKRy5X0zL%2FOf0%2Bul9LQVVfitSgd1I%2F39tZmhJvl0drIOQtdiy%2B4JPHU16SL%2Ft9gpelAIxF67FXf0T0t4h%2FdjFZfz6PGdaGhqaxcL9tmN5LtcQ2MhjH73rwQeSmisRt%2BrTbv%2BZz4j0wh8XEMJCX1MEGOqUBt2QA3%2B02NfDNkgItA4gNgSehETF81PTz%2BD8%2BkG2svcrzANd9ErtPa7hWhoIBy61fEqZ41g%2FQ5YRpjd4XQD%2BEw5YyrAHxwUaY2Rk%2BgORNDYLDmfK%2F2hpVHSzSvxjTi63evTYXC8nkGfblxG4T0vXMmS421pxbAJylYyb6rGqdatCvcAQYyPTUSuM6%2BY0g8hOa6V5PdIXhCHehIX5NKIvJZBwQ1ZJi&X-Amz-Signature=fc0c888ad34d7b903a3ec174fa9ced17c825bea4ee8f3d790fac8bb71cb53f9c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSCIW2V5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ5fFNEu8Y5uqV6BknwwJIeMUfP0EPRGIsSSrAtjKUgAiEArmNsaDXva7R7oJv%2BOUvBq1A2XF3UEYc7OpnuVJlddhsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNrx%2FAefSMxAaP6SHyrcA%2BgwZsDz1nqg3Csidgjk2ioxYXJNdhzpkaTIqUxglNN%2F%2BbGWhH7o9s3BbfnIbVKRwYwVv2Tbh5EaXa0WWJDbSLadUivCHqZiyX4FRC0D47u8VgFxejITRBjAAPnbT5hMKsDNc7iJ1y6U%2BfFGMFmIHdGxKS2U1Mqp5zBbtFPjmXCngntunXxRebhPGa3uJ0RzQUOEXQkok%2BxvMQNQoOZiq4NgDCdb9fEoo8%2F22aRcKzNDww6MYhSaaYCKRW2JsOy9z7QGPOUpJ3E6%2FaSDLX%2BGsFo537k%2B5y1fdLC7grty%2FRR0OVr9TZip2cpr%2Ftkp4DJCWQmVLogUYccn8H8ov8fMAyc9pHAfDICDew%2BOdeWYIMUkj0szzIAgPuWOxy9GA9OX5yGeiSLW5mo8GBewnwvKDKSlJQmu12ha40Wfmk8bmjpbVobGG3EreOipUuBG51qjDiIXKMwJEtmSn8qFyga8vuOoG8r7VOvh8Mr2nvrYBp%2FNIyWKRy5X0zL%2FOf0%2Bul9LQVVfitSgd1I%2F39tZmhJvl0drIOQtdiy%2B4JPHU16SL%2Ft9gpelAIxF67FXf0T0t4h%2FdjFZfz6PGdaGhqaxcL9tmN5LtcQ2MhjH73rwQeSmisRt%2BrTbv%2BZz4j0wh8XEMJCX1MEGOqUBt2QA3%2B02NfDNkgItA4gNgSehETF81PTz%2BD8%2BkG2svcrzANd9ErtPa7hWhoIBy61fEqZ41g%2FQ5YRpjd4XQD%2BEw5YyrAHxwUaY2Rk%2BgORNDYLDmfK%2F2hpVHSzSvxjTi63evTYXC8nkGfblxG4T0vXMmS421pxbAJylYyb6rGqdatCvcAQYyPTUSuM6%2BY0g8hOa6V5PdIXhCHehIX5NKIvJZBwQ1ZJi&X-Amz-Signature=9cba2d8b0db302075a24b2d133601a7b966ce678b5bc5b9a2e352a74bd63c80c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSCIW2V5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ5fFNEu8Y5uqV6BknwwJIeMUfP0EPRGIsSSrAtjKUgAiEArmNsaDXva7R7oJv%2BOUvBq1A2XF3UEYc7OpnuVJlddhsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNrx%2FAefSMxAaP6SHyrcA%2BgwZsDz1nqg3Csidgjk2ioxYXJNdhzpkaTIqUxglNN%2F%2BbGWhH7o9s3BbfnIbVKRwYwVv2Tbh5EaXa0WWJDbSLadUivCHqZiyX4FRC0D47u8VgFxejITRBjAAPnbT5hMKsDNc7iJ1y6U%2BfFGMFmIHdGxKS2U1Mqp5zBbtFPjmXCngntunXxRebhPGa3uJ0RzQUOEXQkok%2BxvMQNQoOZiq4NgDCdb9fEoo8%2F22aRcKzNDww6MYhSaaYCKRW2JsOy9z7QGPOUpJ3E6%2FaSDLX%2BGsFo537k%2B5y1fdLC7grty%2FRR0OVr9TZip2cpr%2Ftkp4DJCWQmVLogUYccn8H8ov8fMAyc9pHAfDICDew%2BOdeWYIMUkj0szzIAgPuWOxy9GA9OX5yGeiSLW5mo8GBewnwvKDKSlJQmu12ha40Wfmk8bmjpbVobGG3EreOipUuBG51qjDiIXKMwJEtmSn8qFyga8vuOoG8r7VOvh8Mr2nvrYBp%2FNIyWKRy5X0zL%2FOf0%2Bul9LQVVfitSgd1I%2F39tZmhJvl0drIOQtdiy%2B4JPHU16SL%2Ft9gpelAIxF67FXf0T0t4h%2FdjFZfz6PGdaGhqaxcL9tmN5LtcQ2MhjH73rwQeSmisRt%2BrTbv%2BZz4j0wh8XEMJCX1MEGOqUBt2QA3%2B02NfDNkgItA4gNgSehETF81PTz%2BD8%2BkG2svcrzANd9ErtPa7hWhoIBy61fEqZ41g%2FQ5YRpjd4XQD%2BEw5YyrAHxwUaY2Rk%2BgORNDYLDmfK%2F2hpVHSzSvxjTi63evTYXC8nkGfblxG4T0vXMmS421pxbAJylYyb6rGqdatCvcAQYyPTUSuM6%2BY0g8hOa6V5PdIXhCHehIX5NKIvJZBwQ1ZJi&X-Amz-Signature=bd04d1fc90fd60fde85e5b6f6232ab20580a77dedc7be754382bae80a9197960&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSCIW2V5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ5fFNEu8Y5uqV6BknwwJIeMUfP0EPRGIsSSrAtjKUgAiEArmNsaDXva7R7oJv%2BOUvBq1A2XF3UEYc7OpnuVJlddhsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNrx%2FAefSMxAaP6SHyrcA%2BgwZsDz1nqg3Csidgjk2ioxYXJNdhzpkaTIqUxglNN%2F%2BbGWhH7o9s3BbfnIbVKRwYwVv2Tbh5EaXa0WWJDbSLadUivCHqZiyX4FRC0D47u8VgFxejITRBjAAPnbT5hMKsDNc7iJ1y6U%2BfFGMFmIHdGxKS2U1Mqp5zBbtFPjmXCngntunXxRebhPGa3uJ0RzQUOEXQkok%2BxvMQNQoOZiq4NgDCdb9fEoo8%2F22aRcKzNDww6MYhSaaYCKRW2JsOy9z7QGPOUpJ3E6%2FaSDLX%2BGsFo537k%2B5y1fdLC7grty%2FRR0OVr9TZip2cpr%2Ftkp4DJCWQmVLogUYccn8H8ov8fMAyc9pHAfDICDew%2BOdeWYIMUkj0szzIAgPuWOxy9GA9OX5yGeiSLW5mo8GBewnwvKDKSlJQmu12ha40Wfmk8bmjpbVobGG3EreOipUuBG51qjDiIXKMwJEtmSn8qFyga8vuOoG8r7VOvh8Mr2nvrYBp%2FNIyWKRy5X0zL%2FOf0%2Bul9LQVVfitSgd1I%2F39tZmhJvl0drIOQtdiy%2B4JPHU16SL%2Ft9gpelAIxF67FXf0T0t4h%2FdjFZfz6PGdaGhqaxcL9tmN5LtcQ2MhjH73rwQeSmisRt%2BrTbv%2BZz4j0wh8XEMJCX1MEGOqUBt2QA3%2B02NfDNkgItA4gNgSehETF81PTz%2BD8%2BkG2svcrzANd9ErtPa7hWhoIBy61fEqZ41g%2FQ5YRpjd4XQD%2BEw5YyrAHxwUaY2Rk%2BgORNDYLDmfK%2F2hpVHSzSvxjTi63evTYXC8nkGfblxG4T0vXMmS421pxbAJylYyb6rGqdatCvcAQYyPTUSuM6%2BY0g8hOa6V5PdIXhCHehIX5NKIvJZBwQ1ZJi&X-Amz-Signature=312b1d7ee737fa9487b1159e3699394fd33916e990ca24584ffda09f390d76bf&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
