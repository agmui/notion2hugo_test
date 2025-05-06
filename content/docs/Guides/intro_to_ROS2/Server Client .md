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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6FDMZ7M%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXtRCuUE6rx22Tb88cXYiBDVl7W7NFUAflaNSNYM2SnAiBFHb%2BYFZnho6kve8A7kwxiQa3gfOmd2barKlyBOLSqsir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMYvrFIIN6J3GG0WEHKtwDtKFI1C1nAgZh8Uf%2BK1XzVdmyF0dGlKv%2F0Mjv19fbmTwvoN%2BZlPhHth9Pnfe1FonBlQ1EQy0QjkGqkUZpLVvZU5FDQaAAIWAESK%2BzAI0n%2B8chBZoJWBZOJU3JbE7leMpEnaV3uofj0WBqpMxjaPITdM91a9hpOfWRvYu0D0LBPnE39GtfkO3g0vsaljTECKWbR8gM7afn66EfJVE5YVw3izXHo3xl%2FMgnkVk8pXoYAM5AzvKVGyeu3H%2FjSczXYzzZiFfBArBe91RjdiKnesuszw8qhZDNht54cL9We%2FEA6m2XEsT5E7NSbhoan5r4qPetsQX9bs8uMlseNDWHsGAJIb%2FlFYdsuzTYR4%2By%2FWuaQ3LJvkLz3iaWT1sq6kBxfWoMx0Gx5azAWmB2bwR8yOY5BNi%2FkCHcacRzuvf7J%2FNSzvYzREJFTXt041BSkYGaWmjVzVGJlz%2F8pUPSZliV5I3UMfx46SBch3Fk13MtKHT0m%2BunmV3VfTr9TjZFCqIXAZWgp4FhHctgNABKSOo2AMxY0Z1PnsIfdQ3eU78IMU%2FxbTOxPVTJrUa%2BJRC9vTJovouz1z4AUOUwi1%2BsifyxQ%2B6QZ4QtdG8aofzvb4MbPB8e6POqqeNy72bzah4YRCIw0%2FbnwAY6pgFGiwoercYWot3Nvvin26CvA0Ms4GnefDCGL1PAjCSQvjnkcYPNfs6swcZuNUqx3Aye1fs0CghYnLg2qSRrseB2Nomcuf9hmRdxXQgUfbYcwKMpRFIVG%2Fudof3mvWIFyZNuBkFs%2BKtAzM1NGBTTC%2BCLqxaOLh%2BttbbJ5InIK8H%2Fo91Hje07%2FRuYr6%2FxIgoMC38eO%2Fd2BIgZQmMtr%2F4EWZYVBsAi7wwN&X-Amz-Signature=949a6136a310eefd370545dec82bae3e68da40f1d2162e811c9cda91e60f2ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6FDMZ7M%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXtRCuUE6rx22Tb88cXYiBDVl7W7NFUAflaNSNYM2SnAiBFHb%2BYFZnho6kve8A7kwxiQa3gfOmd2barKlyBOLSqsir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMYvrFIIN6J3GG0WEHKtwDtKFI1C1nAgZh8Uf%2BK1XzVdmyF0dGlKv%2F0Mjv19fbmTwvoN%2BZlPhHth9Pnfe1FonBlQ1EQy0QjkGqkUZpLVvZU5FDQaAAIWAESK%2BzAI0n%2B8chBZoJWBZOJU3JbE7leMpEnaV3uofj0WBqpMxjaPITdM91a9hpOfWRvYu0D0LBPnE39GtfkO3g0vsaljTECKWbR8gM7afn66EfJVE5YVw3izXHo3xl%2FMgnkVk8pXoYAM5AzvKVGyeu3H%2FjSczXYzzZiFfBArBe91RjdiKnesuszw8qhZDNht54cL9We%2FEA6m2XEsT5E7NSbhoan5r4qPetsQX9bs8uMlseNDWHsGAJIb%2FlFYdsuzTYR4%2By%2FWuaQ3LJvkLz3iaWT1sq6kBxfWoMx0Gx5azAWmB2bwR8yOY5BNi%2FkCHcacRzuvf7J%2FNSzvYzREJFTXt041BSkYGaWmjVzVGJlz%2F8pUPSZliV5I3UMfx46SBch3Fk13MtKHT0m%2BunmV3VfTr9TjZFCqIXAZWgp4FhHctgNABKSOo2AMxY0Z1PnsIfdQ3eU78IMU%2FxbTOxPVTJrUa%2BJRC9vTJovouz1z4AUOUwi1%2BsifyxQ%2B6QZ4QtdG8aofzvb4MbPB8e6POqqeNy72bzah4YRCIw0%2FbnwAY6pgFGiwoercYWot3Nvvin26CvA0Ms4GnefDCGL1PAjCSQvjnkcYPNfs6swcZuNUqx3Aye1fs0CghYnLg2qSRrseB2Nomcuf9hmRdxXQgUfbYcwKMpRFIVG%2Fudof3mvWIFyZNuBkFs%2BKtAzM1NGBTTC%2BCLqxaOLh%2BttbbJ5InIK8H%2Fo91Hje07%2FRuYr6%2FxIgoMC38eO%2Fd2BIgZQmMtr%2F4EWZYVBsAi7wwN&X-Amz-Signature=29ecc56bd080ec89b49dda4e04028e749a9dd54f6303bf472cc079fb13f6024d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6FDMZ7M%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXtRCuUE6rx22Tb88cXYiBDVl7W7NFUAflaNSNYM2SnAiBFHb%2BYFZnho6kve8A7kwxiQa3gfOmd2barKlyBOLSqsir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMYvrFIIN6J3GG0WEHKtwDtKFI1C1nAgZh8Uf%2BK1XzVdmyF0dGlKv%2F0Mjv19fbmTwvoN%2BZlPhHth9Pnfe1FonBlQ1EQy0QjkGqkUZpLVvZU5FDQaAAIWAESK%2BzAI0n%2B8chBZoJWBZOJU3JbE7leMpEnaV3uofj0WBqpMxjaPITdM91a9hpOfWRvYu0D0LBPnE39GtfkO3g0vsaljTECKWbR8gM7afn66EfJVE5YVw3izXHo3xl%2FMgnkVk8pXoYAM5AzvKVGyeu3H%2FjSczXYzzZiFfBArBe91RjdiKnesuszw8qhZDNht54cL9We%2FEA6m2XEsT5E7NSbhoan5r4qPetsQX9bs8uMlseNDWHsGAJIb%2FlFYdsuzTYR4%2By%2FWuaQ3LJvkLz3iaWT1sq6kBxfWoMx0Gx5azAWmB2bwR8yOY5BNi%2FkCHcacRzuvf7J%2FNSzvYzREJFTXt041BSkYGaWmjVzVGJlz%2F8pUPSZliV5I3UMfx46SBch3Fk13MtKHT0m%2BunmV3VfTr9TjZFCqIXAZWgp4FhHctgNABKSOo2AMxY0Z1PnsIfdQ3eU78IMU%2FxbTOxPVTJrUa%2BJRC9vTJovouz1z4AUOUwi1%2BsifyxQ%2B6QZ4QtdG8aofzvb4MbPB8e6POqqeNy72bzah4YRCIw0%2FbnwAY6pgFGiwoercYWot3Nvvin26CvA0Ms4GnefDCGL1PAjCSQvjnkcYPNfs6swcZuNUqx3Aye1fs0CghYnLg2qSRrseB2Nomcuf9hmRdxXQgUfbYcwKMpRFIVG%2Fudof3mvWIFyZNuBkFs%2BKtAzM1NGBTTC%2BCLqxaOLh%2BttbbJ5InIK8H%2Fo91Hje07%2FRuYr6%2FxIgoMC38eO%2Fd2BIgZQmMtr%2F4EWZYVBsAi7wwN&X-Amz-Signature=7ff0e09500d03a0e9640f26fbdb390276b20b3b6eaf41a3e1e2d4f96c76cbe3a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6FDMZ7M%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXtRCuUE6rx22Tb88cXYiBDVl7W7NFUAflaNSNYM2SnAiBFHb%2BYFZnho6kve8A7kwxiQa3gfOmd2barKlyBOLSqsir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMYvrFIIN6J3GG0WEHKtwDtKFI1C1nAgZh8Uf%2BK1XzVdmyF0dGlKv%2F0Mjv19fbmTwvoN%2BZlPhHth9Pnfe1FonBlQ1EQy0QjkGqkUZpLVvZU5FDQaAAIWAESK%2BzAI0n%2B8chBZoJWBZOJU3JbE7leMpEnaV3uofj0WBqpMxjaPITdM91a9hpOfWRvYu0D0LBPnE39GtfkO3g0vsaljTECKWbR8gM7afn66EfJVE5YVw3izXHo3xl%2FMgnkVk8pXoYAM5AzvKVGyeu3H%2FjSczXYzzZiFfBArBe91RjdiKnesuszw8qhZDNht54cL9We%2FEA6m2XEsT5E7NSbhoan5r4qPetsQX9bs8uMlseNDWHsGAJIb%2FlFYdsuzTYR4%2By%2FWuaQ3LJvkLz3iaWT1sq6kBxfWoMx0Gx5azAWmB2bwR8yOY5BNi%2FkCHcacRzuvf7J%2FNSzvYzREJFTXt041BSkYGaWmjVzVGJlz%2F8pUPSZliV5I3UMfx46SBch3Fk13MtKHT0m%2BunmV3VfTr9TjZFCqIXAZWgp4FhHctgNABKSOo2AMxY0Z1PnsIfdQ3eU78IMU%2FxbTOxPVTJrUa%2BJRC9vTJovouz1z4AUOUwi1%2BsifyxQ%2B6QZ4QtdG8aofzvb4MbPB8e6POqqeNy72bzah4YRCIw0%2FbnwAY6pgFGiwoercYWot3Nvvin26CvA0Ms4GnefDCGL1PAjCSQvjnkcYPNfs6swcZuNUqx3Aye1fs0CghYnLg2qSRrseB2Nomcuf9hmRdxXQgUfbYcwKMpRFIVG%2Fudof3mvWIFyZNuBkFs%2BKtAzM1NGBTTC%2BCLqxaOLh%2BttbbJ5InIK8H%2Fo91Hje07%2FRuYr6%2FxIgoMC38eO%2Fd2BIgZQmMtr%2F4EWZYVBsAi7wwN&X-Amz-Signature=0777248b1a964105ae494890f5d81218f09268410d76ea3f3404de2591fc0d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6FDMZ7M%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXtRCuUE6rx22Tb88cXYiBDVl7W7NFUAflaNSNYM2SnAiBFHb%2BYFZnho6kve8A7kwxiQa3gfOmd2barKlyBOLSqsir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMYvrFIIN6J3GG0WEHKtwDtKFI1C1nAgZh8Uf%2BK1XzVdmyF0dGlKv%2F0Mjv19fbmTwvoN%2BZlPhHth9Pnfe1FonBlQ1EQy0QjkGqkUZpLVvZU5FDQaAAIWAESK%2BzAI0n%2B8chBZoJWBZOJU3JbE7leMpEnaV3uofj0WBqpMxjaPITdM91a9hpOfWRvYu0D0LBPnE39GtfkO3g0vsaljTECKWbR8gM7afn66EfJVE5YVw3izXHo3xl%2FMgnkVk8pXoYAM5AzvKVGyeu3H%2FjSczXYzzZiFfBArBe91RjdiKnesuszw8qhZDNht54cL9We%2FEA6m2XEsT5E7NSbhoan5r4qPetsQX9bs8uMlseNDWHsGAJIb%2FlFYdsuzTYR4%2By%2FWuaQ3LJvkLz3iaWT1sq6kBxfWoMx0Gx5azAWmB2bwR8yOY5BNi%2FkCHcacRzuvf7J%2FNSzvYzREJFTXt041BSkYGaWmjVzVGJlz%2F8pUPSZliV5I3UMfx46SBch3Fk13MtKHT0m%2BunmV3VfTr9TjZFCqIXAZWgp4FhHctgNABKSOo2AMxY0Z1PnsIfdQ3eU78IMU%2FxbTOxPVTJrUa%2BJRC9vTJovouz1z4AUOUwi1%2BsifyxQ%2B6QZ4QtdG8aofzvb4MbPB8e6POqqeNy72bzah4YRCIw0%2FbnwAY6pgFGiwoercYWot3Nvvin26CvA0Ms4GnefDCGL1PAjCSQvjnkcYPNfs6swcZuNUqx3Aye1fs0CghYnLg2qSRrseB2Nomcuf9hmRdxXQgUfbYcwKMpRFIVG%2Fudof3mvWIFyZNuBkFs%2BKtAzM1NGBTTC%2BCLqxaOLh%2BttbbJ5InIK8H%2Fo91Hje07%2FRuYr6%2FxIgoMC38eO%2Fd2BIgZQmMtr%2F4EWZYVBsAi7wwN&X-Amz-Signature=d155788157eaca06f6c86a882dbfa06161b809d2256bf745c3937ba3665e4930&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
