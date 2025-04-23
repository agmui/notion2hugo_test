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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3P3KM74%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHS%2FLL%2B7MrY58Rrm5DEXo47mKftaYv0RIrkR%2FXFkTTcNAiAM4%2B8twf8XT1iBWXTu82EG4Gk1SIDXF%2FeC6LXeyaouxCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2QwludCUnb1HM5vKtwDG9B%2BUz1RXFzdS5A2Usvrg0F7Iw2qxRbXbYsrWMn8rffLxZ%2Bhv%2BmHzqMV%2F2nK9OxD62kO8fP6f5YNpoLfz%2FfivkqvgDUXG01eWKyEUBZXYVAy1nBsVXkVAnj025ITlDySWhcyE0xyYK3erRxpResxWAklRTgYsEBD7PZs16Tdm8HgJYDNMYr0xLRao7aOcsDM2nwtxOER3XEkZxJvBcTtZuOt3q2%2FLmdMBw%2B7blWL%2F%2FUeb3grQDsoaVqfq%2BW506LcSv%2BmhKTdiwtppb7dcoLe%2FaZ%2FKAm2MTpH33r%2BSIW%2FXmz%2FCcEXT2P5zegJwC4LFPyypjIZb41kEM7Cm%2BgsSwY%2BIxlSwo1xA%2Fhzq8lvvoY7RIxtMHpXw0PTQxyrNRV9S%2BB4omUAtPFa5Q8QrGXoAVSRWAxU0uSaEUXE8DaHKp9JDeYb6sRwsDX%2BYcr8W8Gq5UsHQnYXQkNRN5InDPqzq7lqH5Nx3P7AVlLF6EfrcppCorazXgQJ3nIDy2evMKYluMFBhXW%2FaJCQM%2Fq%2BTlPxTa%2BoAzuvnopgezT8c1CiVDbTLAi1THSbxHuaYKegVYVZWWszYfgQ0pc6UHGpm%2B0b51rcsJ6BGO5XHpySOlNcgZ%2FZKn87ToQ9%2BFAcDW1Md0Ew%2FPKgwAY6pgHkYNNV3zqCGYTD9PUcvGmrDXvtb09seDE7vRJ3KUik8CMnyQTjJpk1yf4SPbYU6lwi73vcv1aSRA0rPhiGGoP7kFtNqbp6nYMXA3tDW%2BCacEp1WLPi%2F%2BbeThezlusoTSVaGYfTR9V1Gx1mpPNfyiYQrNCMcyIvH2ytchH6%2B3Gxvf8giVvU3mcLaB4xOWDxiS%2FxNUA3KmBEOT1FQ7YTkBIAzIoXvy4s&X-Amz-Signature=406b053ffa87888dceddfcdda787f4624569ab98b15ae6b2dcc225c2e3bec969&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3P3KM74%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHS%2FLL%2B7MrY58Rrm5DEXo47mKftaYv0RIrkR%2FXFkTTcNAiAM4%2B8twf8XT1iBWXTu82EG4Gk1SIDXF%2FeC6LXeyaouxCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2QwludCUnb1HM5vKtwDG9B%2BUz1RXFzdS5A2Usvrg0F7Iw2qxRbXbYsrWMn8rffLxZ%2Bhv%2BmHzqMV%2F2nK9OxD62kO8fP6f5YNpoLfz%2FfivkqvgDUXG01eWKyEUBZXYVAy1nBsVXkVAnj025ITlDySWhcyE0xyYK3erRxpResxWAklRTgYsEBD7PZs16Tdm8HgJYDNMYr0xLRao7aOcsDM2nwtxOER3XEkZxJvBcTtZuOt3q2%2FLmdMBw%2B7blWL%2F%2FUeb3grQDsoaVqfq%2BW506LcSv%2BmhKTdiwtppb7dcoLe%2FaZ%2FKAm2MTpH33r%2BSIW%2FXmz%2FCcEXT2P5zegJwC4LFPyypjIZb41kEM7Cm%2BgsSwY%2BIxlSwo1xA%2Fhzq8lvvoY7RIxtMHpXw0PTQxyrNRV9S%2BB4omUAtPFa5Q8QrGXoAVSRWAxU0uSaEUXE8DaHKp9JDeYb6sRwsDX%2BYcr8W8Gq5UsHQnYXQkNRN5InDPqzq7lqH5Nx3P7AVlLF6EfrcppCorazXgQJ3nIDy2evMKYluMFBhXW%2FaJCQM%2Fq%2BTlPxTa%2BoAzuvnopgezT8c1CiVDbTLAi1THSbxHuaYKegVYVZWWszYfgQ0pc6UHGpm%2B0b51rcsJ6BGO5XHpySOlNcgZ%2FZKn87ToQ9%2BFAcDW1Md0Ew%2FPKgwAY6pgHkYNNV3zqCGYTD9PUcvGmrDXvtb09seDE7vRJ3KUik8CMnyQTjJpk1yf4SPbYU6lwi73vcv1aSRA0rPhiGGoP7kFtNqbp6nYMXA3tDW%2BCacEp1WLPi%2F%2BbeThezlusoTSVaGYfTR9V1Gx1mpPNfyiYQrNCMcyIvH2ytchH6%2B3Gxvf8giVvU3mcLaB4xOWDxiS%2FxNUA3KmBEOT1FQ7YTkBIAzIoXvy4s&X-Amz-Signature=5a1bd770073dd1f6ffffa8de9bc547702e41a5fed6abf5e6242bd1dd4fbda583&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3P3KM74%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHS%2FLL%2B7MrY58Rrm5DEXo47mKftaYv0RIrkR%2FXFkTTcNAiAM4%2B8twf8XT1iBWXTu82EG4Gk1SIDXF%2FeC6LXeyaouxCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2QwludCUnb1HM5vKtwDG9B%2BUz1RXFzdS5A2Usvrg0F7Iw2qxRbXbYsrWMn8rffLxZ%2Bhv%2BmHzqMV%2F2nK9OxD62kO8fP6f5YNpoLfz%2FfivkqvgDUXG01eWKyEUBZXYVAy1nBsVXkVAnj025ITlDySWhcyE0xyYK3erRxpResxWAklRTgYsEBD7PZs16Tdm8HgJYDNMYr0xLRao7aOcsDM2nwtxOER3XEkZxJvBcTtZuOt3q2%2FLmdMBw%2B7blWL%2F%2FUeb3grQDsoaVqfq%2BW506LcSv%2BmhKTdiwtppb7dcoLe%2FaZ%2FKAm2MTpH33r%2BSIW%2FXmz%2FCcEXT2P5zegJwC4LFPyypjIZb41kEM7Cm%2BgsSwY%2BIxlSwo1xA%2Fhzq8lvvoY7RIxtMHpXw0PTQxyrNRV9S%2BB4omUAtPFa5Q8QrGXoAVSRWAxU0uSaEUXE8DaHKp9JDeYb6sRwsDX%2BYcr8W8Gq5UsHQnYXQkNRN5InDPqzq7lqH5Nx3P7AVlLF6EfrcppCorazXgQJ3nIDy2evMKYluMFBhXW%2FaJCQM%2Fq%2BTlPxTa%2BoAzuvnopgezT8c1CiVDbTLAi1THSbxHuaYKegVYVZWWszYfgQ0pc6UHGpm%2B0b51rcsJ6BGO5XHpySOlNcgZ%2FZKn87ToQ9%2BFAcDW1Md0Ew%2FPKgwAY6pgHkYNNV3zqCGYTD9PUcvGmrDXvtb09seDE7vRJ3KUik8CMnyQTjJpk1yf4SPbYU6lwi73vcv1aSRA0rPhiGGoP7kFtNqbp6nYMXA3tDW%2BCacEp1WLPi%2F%2BbeThezlusoTSVaGYfTR9V1Gx1mpPNfyiYQrNCMcyIvH2ytchH6%2B3Gxvf8giVvU3mcLaB4xOWDxiS%2FxNUA3KmBEOT1FQ7YTkBIAzIoXvy4s&X-Amz-Signature=4fa2cb83253177f561dc2f32fc5da2e14983f03f7062d776bc85709c36541301&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3P3KM74%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHS%2FLL%2B7MrY58Rrm5DEXo47mKftaYv0RIrkR%2FXFkTTcNAiAM4%2B8twf8XT1iBWXTu82EG4Gk1SIDXF%2FeC6LXeyaouxCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2QwludCUnb1HM5vKtwDG9B%2BUz1RXFzdS5A2Usvrg0F7Iw2qxRbXbYsrWMn8rffLxZ%2Bhv%2BmHzqMV%2F2nK9OxD62kO8fP6f5YNpoLfz%2FfivkqvgDUXG01eWKyEUBZXYVAy1nBsVXkVAnj025ITlDySWhcyE0xyYK3erRxpResxWAklRTgYsEBD7PZs16Tdm8HgJYDNMYr0xLRao7aOcsDM2nwtxOER3XEkZxJvBcTtZuOt3q2%2FLmdMBw%2B7blWL%2F%2FUeb3grQDsoaVqfq%2BW506LcSv%2BmhKTdiwtppb7dcoLe%2FaZ%2FKAm2MTpH33r%2BSIW%2FXmz%2FCcEXT2P5zegJwC4LFPyypjIZb41kEM7Cm%2BgsSwY%2BIxlSwo1xA%2Fhzq8lvvoY7RIxtMHpXw0PTQxyrNRV9S%2BB4omUAtPFa5Q8QrGXoAVSRWAxU0uSaEUXE8DaHKp9JDeYb6sRwsDX%2BYcr8W8Gq5UsHQnYXQkNRN5InDPqzq7lqH5Nx3P7AVlLF6EfrcppCorazXgQJ3nIDy2evMKYluMFBhXW%2FaJCQM%2Fq%2BTlPxTa%2BoAzuvnopgezT8c1CiVDbTLAi1THSbxHuaYKegVYVZWWszYfgQ0pc6UHGpm%2B0b51rcsJ6BGO5XHpySOlNcgZ%2FZKn87ToQ9%2BFAcDW1Md0Ew%2FPKgwAY6pgHkYNNV3zqCGYTD9PUcvGmrDXvtb09seDE7vRJ3KUik8CMnyQTjJpk1yf4SPbYU6lwi73vcv1aSRA0rPhiGGoP7kFtNqbp6nYMXA3tDW%2BCacEp1WLPi%2F%2BbeThezlusoTSVaGYfTR9V1Gx1mpPNfyiYQrNCMcyIvH2ytchH6%2B3Gxvf8giVvU3mcLaB4xOWDxiS%2FxNUA3KmBEOT1FQ7YTkBIAzIoXvy4s&X-Amz-Signature=20aa956c4fbcc1595c04479eecbe6cbc78288110a4edaaab96f4476a6d77f572&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3P3KM74%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHS%2FLL%2B7MrY58Rrm5DEXo47mKftaYv0RIrkR%2FXFkTTcNAiAM4%2B8twf8XT1iBWXTu82EG4Gk1SIDXF%2FeC6LXeyaouxCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2QwludCUnb1HM5vKtwDG9B%2BUz1RXFzdS5A2Usvrg0F7Iw2qxRbXbYsrWMn8rffLxZ%2Bhv%2BmHzqMV%2F2nK9OxD62kO8fP6f5YNpoLfz%2FfivkqvgDUXG01eWKyEUBZXYVAy1nBsVXkVAnj025ITlDySWhcyE0xyYK3erRxpResxWAklRTgYsEBD7PZs16Tdm8HgJYDNMYr0xLRao7aOcsDM2nwtxOER3XEkZxJvBcTtZuOt3q2%2FLmdMBw%2B7blWL%2F%2FUeb3grQDsoaVqfq%2BW506LcSv%2BmhKTdiwtppb7dcoLe%2FaZ%2FKAm2MTpH33r%2BSIW%2FXmz%2FCcEXT2P5zegJwC4LFPyypjIZb41kEM7Cm%2BgsSwY%2BIxlSwo1xA%2Fhzq8lvvoY7RIxtMHpXw0PTQxyrNRV9S%2BB4omUAtPFa5Q8QrGXoAVSRWAxU0uSaEUXE8DaHKp9JDeYb6sRwsDX%2BYcr8W8Gq5UsHQnYXQkNRN5InDPqzq7lqH5Nx3P7AVlLF6EfrcppCorazXgQJ3nIDy2evMKYluMFBhXW%2FaJCQM%2Fq%2BTlPxTa%2BoAzuvnopgezT8c1CiVDbTLAi1THSbxHuaYKegVYVZWWszYfgQ0pc6UHGpm%2B0b51rcsJ6BGO5XHpySOlNcgZ%2FZKn87ToQ9%2BFAcDW1Md0Ew%2FPKgwAY6pgHkYNNV3zqCGYTD9PUcvGmrDXvtb09seDE7vRJ3KUik8CMnyQTjJpk1yf4SPbYU6lwi73vcv1aSRA0rPhiGGoP7kFtNqbp6nYMXA3tDW%2BCacEp1WLPi%2F%2BbeThezlusoTSVaGYfTR9V1Gx1mpPNfyiYQrNCMcyIvH2ytchH6%2B3Gxvf8giVvU3mcLaB4xOWDxiS%2FxNUA3KmBEOT1FQ7YTkBIAzIoXvy4s&X-Amz-Signature=bbc7262658ccb13cc29bf194dec543ea4fc7426d3577954eb426b15832e3218b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
