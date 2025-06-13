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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFCRED2C%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCuRRgftnPRrrmobgjIU5lVlhSdeIbYzzejoVpLwx7%2B4QIhAIe9ZQm3G35ee443FXkRrV6kTsVOo3Ss3Uff8VmzkQCrKv8DCBsQABoMNjM3NDIzMTgzODA1Igw9HZrAM19hXE8zWf0q3AOHGTWlwFq4Hnr%2B3hmC5iBC4JJavnPL2G8LcFvrXGwDprr3eRI%2FXj87X2x1gCoyiOI%2FSlnV96n84yH5Fv8bhJDu81%2FFsRENNVEY4SKB8YM006YWhbfC4lbM3bgLFQ3DybeiizRC4OO8qP2L7zboc07aAd5HmSc0dM94mDxCJ96nH4HXl2VNT6PHTAvtDqhjFB9YaBO%2Fpxh%2FiPzPhZ5A%2B5IZONkA47Yz5CklTStplomXlabjPhqN4yP0STivvl%2BC4pohlIPu%2BHLhRf4EMLnNiiLR0fvc7IzUDcTShxB5k1KWuVszJyPNwUOC2GsDI3TWuquVWIUPR2G0ZR9DtneNWpAPTS1FgCbZJo5Q%2BdaX%2FAU1oLf9szPCOFzCBUVn2O6DpHk0bdZA%2BMURqHYQt4P1oZrhyMpwOr6kkljftp%2B82d0OGvWkpvr02WduWovrp5mW9RS1idWftTbw%2FEkeyMb1cZF9DJVTsH3W7tfiJmTXLLLlM89UrpNvcT5OtHT%2B1neFcGrjANca7p0JvXcLYjwVfS8B1goX3X8q6UraQF9mZeSQ1y1sTUGiHqtir2FPzjxKdw433tgQOBbT0g2hjqF6oXPXNYzQ%2Bjr7L3I5FJgL40DqJ0TeaOt7xFiRX%2F0H9zDE0rHCBjqkAT3FVGKFsGykB9nSP8JbQ5q7MQpJ3npaRcwmibtarLDTANpvcgAi9Cm8%2F8kZIhTuAzNLTTEO1KEpZDIKE49dMeVa%2BRrTiFTm4hghYY1LX5Ei6z2aTvGtJ4EUosMns9VPXkspkpQgXzrpx7IO5DjJfjTHMsSQRZfbpNLf%2BU%2F1kQgfGIVZvmJtbbase2UFLgOAGKIatWVHn78R5lU85tEXCgh96QBK&X-Amz-Signature=11998cf0b1f0b002ca4a1fd42f4a3fb44d58bc29a2b2312413519b88728d2629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFCRED2C%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCuRRgftnPRrrmobgjIU5lVlhSdeIbYzzejoVpLwx7%2B4QIhAIe9ZQm3G35ee443FXkRrV6kTsVOo3Ss3Uff8VmzkQCrKv8DCBsQABoMNjM3NDIzMTgzODA1Igw9HZrAM19hXE8zWf0q3AOHGTWlwFq4Hnr%2B3hmC5iBC4JJavnPL2G8LcFvrXGwDprr3eRI%2FXj87X2x1gCoyiOI%2FSlnV96n84yH5Fv8bhJDu81%2FFsRENNVEY4SKB8YM006YWhbfC4lbM3bgLFQ3DybeiizRC4OO8qP2L7zboc07aAd5HmSc0dM94mDxCJ96nH4HXl2VNT6PHTAvtDqhjFB9YaBO%2Fpxh%2FiPzPhZ5A%2B5IZONkA47Yz5CklTStplomXlabjPhqN4yP0STivvl%2BC4pohlIPu%2BHLhRf4EMLnNiiLR0fvc7IzUDcTShxB5k1KWuVszJyPNwUOC2GsDI3TWuquVWIUPR2G0ZR9DtneNWpAPTS1FgCbZJo5Q%2BdaX%2FAU1oLf9szPCOFzCBUVn2O6DpHk0bdZA%2BMURqHYQt4P1oZrhyMpwOr6kkljftp%2B82d0OGvWkpvr02WduWovrp5mW9RS1idWftTbw%2FEkeyMb1cZF9DJVTsH3W7tfiJmTXLLLlM89UrpNvcT5OtHT%2B1neFcGrjANca7p0JvXcLYjwVfS8B1goX3X8q6UraQF9mZeSQ1y1sTUGiHqtir2FPzjxKdw433tgQOBbT0g2hjqF6oXPXNYzQ%2Bjr7L3I5FJgL40DqJ0TeaOt7xFiRX%2F0H9zDE0rHCBjqkAT3FVGKFsGykB9nSP8JbQ5q7MQpJ3npaRcwmibtarLDTANpvcgAi9Cm8%2F8kZIhTuAzNLTTEO1KEpZDIKE49dMeVa%2BRrTiFTm4hghYY1LX5Ei6z2aTvGtJ4EUosMns9VPXkspkpQgXzrpx7IO5DjJfjTHMsSQRZfbpNLf%2BU%2F1kQgfGIVZvmJtbbase2UFLgOAGKIatWVHn78R5lU85tEXCgh96QBK&X-Amz-Signature=d65aa9bde5ee96e627c17c9e5edac9af38c1b492b3c66c90e89885fc27698930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFCRED2C%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCuRRgftnPRrrmobgjIU5lVlhSdeIbYzzejoVpLwx7%2B4QIhAIe9ZQm3G35ee443FXkRrV6kTsVOo3Ss3Uff8VmzkQCrKv8DCBsQABoMNjM3NDIzMTgzODA1Igw9HZrAM19hXE8zWf0q3AOHGTWlwFq4Hnr%2B3hmC5iBC4JJavnPL2G8LcFvrXGwDprr3eRI%2FXj87X2x1gCoyiOI%2FSlnV96n84yH5Fv8bhJDu81%2FFsRENNVEY4SKB8YM006YWhbfC4lbM3bgLFQ3DybeiizRC4OO8qP2L7zboc07aAd5HmSc0dM94mDxCJ96nH4HXl2VNT6PHTAvtDqhjFB9YaBO%2Fpxh%2FiPzPhZ5A%2B5IZONkA47Yz5CklTStplomXlabjPhqN4yP0STivvl%2BC4pohlIPu%2BHLhRf4EMLnNiiLR0fvc7IzUDcTShxB5k1KWuVszJyPNwUOC2GsDI3TWuquVWIUPR2G0ZR9DtneNWpAPTS1FgCbZJo5Q%2BdaX%2FAU1oLf9szPCOFzCBUVn2O6DpHk0bdZA%2BMURqHYQt4P1oZrhyMpwOr6kkljftp%2B82d0OGvWkpvr02WduWovrp5mW9RS1idWftTbw%2FEkeyMb1cZF9DJVTsH3W7tfiJmTXLLLlM89UrpNvcT5OtHT%2B1neFcGrjANca7p0JvXcLYjwVfS8B1goX3X8q6UraQF9mZeSQ1y1sTUGiHqtir2FPzjxKdw433tgQOBbT0g2hjqF6oXPXNYzQ%2Bjr7L3I5FJgL40DqJ0TeaOt7xFiRX%2F0H9zDE0rHCBjqkAT3FVGKFsGykB9nSP8JbQ5q7MQpJ3npaRcwmibtarLDTANpvcgAi9Cm8%2F8kZIhTuAzNLTTEO1KEpZDIKE49dMeVa%2BRrTiFTm4hghYY1LX5Ei6z2aTvGtJ4EUosMns9VPXkspkpQgXzrpx7IO5DjJfjTHMsSQRZfbpNLf%2BU%2F1kQgfGIVZvmJtbbase2UFLgOAGKIatWVHn78R5lU85tEXCgh96QBK&X-Amz-Signature=7f6507dbb1c791d4791daec3768c625792395813f9a59a5a9a2d9b8afa9a66cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFCRED2C%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCuRRgftnPRrrmobgjIU5lVlhSdeIbYzzejoVpLwx7%2B4QIhAIe9ZQm3G35ee443FXkRrV6kTsVOo3Ss3Uff8VmzkQCrKv8DCBsQABoMNjM3NDIzMTgzODA1Igw9HZrAM19hXE8zWf0q3AOHGTWlwFq4Hnr%2B3hmC5iBC4JJavnPL2G8LcFvrXGwDprr3eRI%2FXj87X2x1gCoyiOI%2FSlnV96n84yH5Fv8bhJDu81%2FFsRENNVEY4SKB8YM006YWhbfC4lbM3bgLFQ3DybeiizRC4OO8qP2L7zboc07aAd5HmSc0dM94mDxCJ96nH4HXl2VNT6PHTAvtDqhjFB9YaBO%2Fpxh%2FiPzPhZ5A%2B5IZONkA47Yz5CklTStplomXlabjPhqN4yP0STivvl%2BC4pohlIPu%2BHLhRf4EMLnNiiLR0fvc7IzUDcTShxB5k1KWuVszJyPNwUOC2GsDI3TWuquVWIUPR2G0ZR9DtneNWpAPTS1FgCbZJo5Q%2BdaX%2FAU1oLf9szPCOFzCBUVn2O6DpHk0bdZA%2BMURqHYQt4P1oZrhyMpwOr6kkljftp%2B82d0OGvWkpvr02WduWovrp5mW9RS1idWftTbw%2FEkeyMb1cZF9DJVTsH3W7tfiJmTXLLLlM89UrpNvcT5OtHT%2B1neFcGrjANca7p0JvXcLYjwVfS8B1goX3X8q6UraQF9mZeSQ1y1sTUGiHqtir2FPzjxKdw433tgQOBbT0g2hjqF6oXPXNYzQ%2Bjr7L3I5FJgL40DqJ0TeaOt7xFiRX%2F0H9zDE0rHCBjqkAT3FVGKFsGykB9nSP8JbQ5q7MQpJ3npaRcwmibtarLDTANpvcgAi9Cm8%2F8kZIhTuAzNLTTEO1KEpZDIKE49dMeVa%2BRrTiFTm4hghYY1LX5Ei6z2aTvGtJ4EUosMns9VPXkspkpQgXzrpx7IO5DjJfjTHMsSQRZfbpNLf%2BU%2F1kQgfGIVZvmJtbbase2UFLgOAGKIatWVHn78R5lU85tEXCgh96QBK&X-Amz-Signature=28e2eaa176a36c2fd411507d2b3fe513098e5107738907c8a68deb9982f73601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFCRED2C%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCuRRgftnPRrrmobgjIU5lVlhSdeIbYzzejoVpLwx7%2B4QIhAIe9ZQm3G35ee443FXkRrV6kTsVOo3Ss3Uff8VmzkQCrKv8DCBsQABoMNjM3NDIzMTgzODA1Igw9HZrAM19hXE8zWf0q3AOHGTWlwFq4Hnr%2B3hmC5iBC4JJavnPL2G8LcFvrXGwDprr3eRI%2FXj87X2x1gCoyiOI%2FSlnV96n84yH5Fv8bhJDu81%2FFsRENNVEY4SKB8YM006YWhbfC4lbM3bgLFQ3DybeiizRC4OO8qP2L7zboc07aAd5HmSc0dM94mDxCJ96nH4HXl2VNT6PHTAvtDqhjFB9YaBO%2Fpxh%2FiPzPhZ5A%2B5IZONkA47Yz5CklTStplomXlabjPhqN4yP0STivvl%2BC4pohlIPu%2BHLhRf4EMLnNiiLR0fvc7IzUDcTShxB5k1KWuVszJyPNwUOC2GsDI3TWuquVWIUPR2G0ZR9DtneNWpAPTS1FgCbZJo5Q%2BdaX%2FAU1oLf9szPCOFzCBUVn2O6DpHk0bdZA%2BMURqHYQt4P1oZrhyMpwOr6kkljftp%2B82d0OGvWkpvr02WduWovrp5mW9RS1idWftTbw%2FEkeyMb1cZF9DJVTsH3W7tfiJmTXLLLlM89UrpNvcT5OtHT%2B1neFcGrjANca7p0JvXcLYjwVfS8B1goX3X8q6UraQF9mZeSQ1y1sTUGiHqtir2FPzjxKdw433tgQOBbT0g2hjqF6oXPXNYzQ%2Bjr7L3I5FJgL40DqJ0TeaOt7xFiRX%2F0H9zDE0rHCBjqkAT3FVGKFsGykB9nSP8JbQ5q7MQpJ3npaRcwmibtarLDTANpvcgAi9Cm8%2F8kZIhTuAzNLTTEO1KEpZDIKE49dMeVa%2BRrTiFTm4hghYY1LX5Ei6z2aTvGtJ4EUosMns9VPXkspkpQgXzrpx7IO5DjJfjTHMsSQRZfbpNLf%2BU%2F1kQgfGIVZvmJtbbase2UFLgOAGKIatWVHn78R5lU85tEXCgh96QBK&X-Amz-Signature=02afa4549d551609bf280bde22253fa0dd7989e3bc1f827246ab6faca8e23ac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
