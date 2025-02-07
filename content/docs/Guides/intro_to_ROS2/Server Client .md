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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIWZEPU7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHtqtMEsDAq8Dfa8hlmTPcmwNGLkD%2BtzkwUp38i8mZpDAiBV5WYx2ESK7JS8vE2svPt%2BAJfhgR76ndpqnBqHvRgACyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMcnc5KmYMbc15sWeDKtwDU2apFks1czuybg%2FS2Ry6ynf1MRO4z0Bn0aaH88Zjt8aJoNwBO8GtNt11aEwhHu35zKEcvsVHWmWEBu0s3%2F7V9Ajr%2BAxZ2l8XbmYuTL5jyIzC1ewfYI7N54FaBrRxDt1qNETRtwm%2F327aCFw7qeqYtdIPjAA60gfNpSCv49VbCpUPBXJkvwqySVMfRZS8vRfQESoVd9U7fPAeAKB5oF41NAaYiog3Hfp%2BZJ0CpaKRxMdxfZLCbtcNmY9e4FNDXYCIV5ufWY%2BLB%2FchCzE1FpXTQgix6x0OHHshiRBWU0Pcj4438UVOtDq%2FcSRzbr2qvoyb0KH1%2B3AKi19cAPTGBcM8bjawaOEBO4DQoO%2FFRMMdrgPHqNFVRLg2EphoMLa05UKUH9Eg4qq3K9VmtXZy5F8vCw5vLQMuf7c%2F9bd0entZIAi62%2FwRQsZje3BuRyPe6C0xNMCpDqedRxjF%2B1%2F9VbkF%2B9EzcQYoQtW3UfYyl8Ds%2BY6w2GaxRJpi6DMq8%2B9pFPSiKoiRNV1wdJmWOoabEREM4d4fkXm82vQKUphyjrK%2BQOj5zXjK1J0Cph9tRbdba403oWbokt7Gp8jqhL%2BwujYGxx9dyUL52bFFMc%2BogfnI7xXJtWGAFWOtA0wB%2FOIwrpuVvQY6pgGi4uEMUMVoOlEfF7BcU7m%2FELq9Xnc6UvuJrAjm10R%2B9BErveXVgIULjEK3ApCn9%2FpM8HTxgkPrKeri4xhB9on4%2BDryzaMIlhXFCfuuC4mNGf%2BpogAa9g4HebXCpmM7KQC1frGwPjPfANOTSn89hx1LS1LvUd0KNtOeBNLS8%2BiYgQwnBu%2BA2LwnRuXhPOhprlyNOQhr5fmzDuYef029zMjfRpr2n3ze&X-Amz-Signature=5aebe6f1953059ef24a0bb3f355d222a5a122f5b0445aa85683ae209198d2b1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIWZEPU7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHtqtMEsDAq8Dfa8hlmTPcmwNGLkD%2BtzkwUp38i8mZpDAiBV5WYx2ESK7JS8vE2svPt%2BAJfhgR76ndpqnBqHvRgACyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMcnc5KmYMbc15sWeDKtwDU2apFks1czuybg%2FS2Ry6ynf1MRO4z0Bn0aaH88Zjt8aJoNwBO8GtNt11aEwhHu35zKEcvsVHWmWEBu0s3%2F7V9Ajr%2BAxZ2l8XbmYuTL5jyIzC1ewfYI7N54FaBrRxDt1qNETRtwm%2F327aCFw7qeqYtdIPjAA60gfNpSCv49VbCpUPBXJkvwqySVMfRZS8vRfQESoVd9U7fPAeAKB5oF41NAaYiog3Hfp%2BZJ0CpaKRxMdxfZLCbtcNmY9e4FNDXYCIV5ufWY%2BLB%2FchCzE1FpXTQgix6x0OHHshiRBWU0Pcj4438UVOtDq%2FcSRzbr2qvoyb0KH1%2B3AKi19cAPTGBcM8bjawaOEBO4DQoO%2FFRMMdrgPHqNFVRLg2EphoMLa05UKUH9Eg4qq3K9VmtXZy5F8vCw5vLQMuf7c%2F9bd0entZIAi62%2FwRQsZje3BuRyPe6C0xNMCpDqedRxjF%2B1%2F9VbkF%2B9EzcQYoQtW3UfYyl8Ds%2BY6w2GaxRJpi6DMq8%2B9pFPSiKoiRNV1wdJmWOoabEREM4d4fkXm82vQKUphyjrK%2BQOj5zXjK1J0Cph9tRbdba403oWbokt7Gp8jqhL%2BwujYGxx9dyUL52bFFMc%2BogfnI7xXJtWGAFWOtA0wB%2FOIwrpuVvQY6pgGi4uEMUMVoOlEfF7BcU7m%2FELq9Xnc6UvuJrAjm10R%2B9BErveXVgIULjEK3ApCn9%2FpM8HTxgkPrKeri4xhB9on4%2BDryzaMIlhXFCfuuC4mNGf%2BpogAa9g4HebXCpmM7KQC1frGwPjPfANOTSn89hx1LS1LvUd0KNtOeBNLS8%2BiYgQwnBu%2BA2LwnRuXhPOhprlyNOQhr5fmzDuYef029zMjfRpr2n3ze&X-Amz-Signature=d1bddb32dd43a3436e4274309c622edbdf674f7e896fd4356aacfd1bf3d6f120&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIWZEPU7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHtqtMEsDAq8Dfa8hlmTPcmwNGLkD%2BtzkwUp38i8mZpDAiBV5WYx2ESK7JS8vE2svPt%2BAJfhgR76ndpqnBqHvRgACyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMcnc5KmYMbc15sWeDKtwDU2apFks1czuybg%2FS2Ry6ynf1MRO4z0Bn0aaH88Zjt8aJoNwBO8GtNt11aEwhHu35zKEcvsVHWmWEBu0s3%2F7V9Ajr%2BAxZ2l8XbmYuTL5jyIzC1ewfYI7N54FaBrRxDt1qNETRtwm%2F327aCFw7qeqYtdIPjAA60gfNpSCv49VbCpUPBXJkvwqySVMfRZS8vRfQESoVd9U7fPAeAKB5oF41NAaYiog3Hfp%2BZJ0CpaKRxMdxfZLCbtcNmY9e4FNDXYCIV5ufWY%2BLB%2FchCzE1FpXTQgix6x0OHHshiRBWU0Pcj4438UVOtDq%2FcSRzbr2qvoyb0KH1%2B3AKi19cAPTGBcM8bjawaOEBO4DQoO%2FFRMMdrgPHqNFVRLg2EphoMLa05UKUH9Eg4qq3K9VmtXZy5F8vCw5vLQMuf7c%2F9bd0entZIAi62%2FwRQsZje3BuRyPe6C0xNMCpDqedRxjF%2B1%2F9VbkF%2B9EzcQYoQtW3UfYyl8Ds%2BY6w2GaxRJpi6DMq8%2B9pFPSiKoiRNV1wdJmWOoabEREM4d4fkXm82vQKUphyjrK%2BQOj5zXjK1J0Cph9tRbdba403oWbokt7Gp8jqhL%2BwujYGxx9dyUL52bFFMc%2BogfnI7xXJtWGAFWOtA0wB%2FOIwrpuVvQY6pgGi4uEMUMVoOlEfF7BcU7m%2FELq9Xnc6UvuJrAjm10R%2B9BErveXVgIULjEK3ApCn9%2FpM8HTxgkPrKeri4xhB9on4%2BDryzaMIlhXFCfuuC4mNGf%2BpogAa9g4HebXCpmM7KQC1frGwPjPfANOTSn89hx1LS1LvUd0KNtOeBNLS8%2BiYgQwnBu%2BA2LwnRuXhPOhprlyNOQhr5fmzDuYef029zMjfRpr2n3ze&X-Amz-Signature=a5d31e80168f062e77f05fd1e3c668844123ec53a820c474af0d13efab97c446&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIWZEPU7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHtqtMEsDAq8Dfa8hlmTPcmwNGLkD%2BtzkwUp38i8mZpDAiBV5WYx2ESK7JS8vE2svPt%2BAJfhgR76ndpqnBqHvRgACyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMcnc5KmYMbc15sWeDKtwDU2apFks1czuybg%2FS2Ry6ynf1MRO4z0Bn0aaH88Zjt8aJoNwBO8GtNt11aEwhHu35zKEcvsVHWmWEBu0s3%2F7V9Ajr%2BAxZ2l8XbmYuTL5jyIzC1ewfYI7N54FaBrRxDt1qNETRtwm%2F327aCFw7qeqYtdIPjAA60gfNpSCv49VbCpUPBXJkvwqySVMfRZS8vRfQESoVd9U7fPAeAKB5oF41NAaYiog3Hfp%2BZJ0CpaKRxMdxfZLCbtcNmY9e4FNDXYCIV5ufWY%2BLB%2FchCzE1FpXTQgix6x0OHHshiRBWU0Pcj4438UVOtDq%2FcSRzbr2qvoyb0KH1%2B3AKi19cAPTGBcM8bjawaOEBO4DQoO%2FFRMMdrgPHqNFVRLg2EphoMLa05UKUH9Eg4qq3K9VmtXZy5F8vCw5vLQMuf7c%2F9bd0entZIAi62%2FwRQsZje3BuRyPe6C0xNMCpDqedRxjF%2B1%2F9VbkF%2B9EzcQYoQtW3UfYyl8Ds%2BY6w2GaxRJpi6DMq8%2B9pFPSiKoiRNV1wdJmWOoabEREM4d4fkXm82vQKUphyjrK%2BQOj5zXjK1J0Cph9tRbdba403oWbokt7Gp8jqhL%2BwujYGxx9dyUL52bFFMc%2BogfnI7xXJtWGAFWOtA0wB%2FOIwrpuVvQY6pgGi4uEMUMVoOlEfF7BcU7m%2FELq9Xnc6UvuJrAjm10R%2B9BErveXVgIULjEK3ApCn9%2FpM8HTxgkPrKeri4xhB9on4%2BDryzaMIlhXFCfuuC4mNGf%2BpogAa9g4HebXCpmM7KQC1frGwPjPfANOTSn89hx1LS1LvUd0KNtOeBNLS8%2BiYgQwnBu%2BA2LwnRuXhPOhprlyNOQhr5fmzDuYef029zMjfRpr2n3ze&X-Amz-Signature=9dc73bd32f52680d6b761802acc46a5fdf1031a02e41cf853c97514930867516&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIWZEPU7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHtqtMEsDAq8Dfa8hlmTPcmwNGLkD%2BtzkwUp38i8mZpDAiBV5WYx2ESK7JS8vE2svPt%2BAJfhgR76ndpqnBqHvRgACyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMcnc5KmYMbc15sWeDKtwDU2apFks1czuybg%2FS2Ry6ynf1MRO4z0Bn0aaH88Zjt8aJoNwBO8GtNt11aEwhHu35zKEcvsVHWmWEBu0s3%2F7V9Ajr%2BAxZ2l8XbmYuTL5jyIzC1ewfYI7N54FaBrRxDt1qNETRtwm%2F327aCFw7qeqYtdIPjAA60gfNpSCv49VbCpUPBXJkvwqySVMfRZS8vRfQESoVd9U7fPAeAKB5oF41NAaYiog3Hfp%2BZJ0CpaKRxMdxfZLCbtcNmY9e4FNDXYCIV5ufWY%2BLB%2FchCzE1FpXTQgix6x0OHHshiRBWU0Pcj4438UVOtDq%2FcSRzbr2qvoyb0KH1%2B3AKi19cAPTGBcM8bjawaOEBO4DQoO%2FFRMMdrgPHqNFVRLg2EphoMLa05UKUH9Eg4qq3K9VmtXZy5F8vCw5vLQMuf7c%2F9bd0entZIAi62%2FwRQsZje3BuRyPe6C0xNMCpDqedRxjF%2B1%2F9VbkF%2B9EzcQYoQtW3UfYyl8Ds%2BY6w2GaxRJpi6DMq8%2B9pFPSiKoiRNV1wdJmWOoabEREM4d4fkXm82vQKUphyjrK%2BQOj5zXjK1J0Cph9tRbdba403oWbokt7Gp8jqhL%2BwujYGxx9dyUL52bFFMc%2BogfnI7xXJtWGAFWOtA0wB%2FOIwrpuVvQY6pgGi4uEMUMVoOlEfF7BcU7m%2FELq9Xnc6UvuJrAjm10R%2B9BErveXVgIULjEK3ApCn9%2FpM8HTxgkPrKeri4xhB9on4%2BDryzaMIlhXFCfuuC4mNGf%2BpogAa9g4HebXCpmM7KQC1frGwPjPfANOTSn89hx1LS1LvUd0KNtOeBNLS8%2BiYgQwnBu%2BA2LwnRuXhPOhprlyNOQhr5fmzDuYef029zMjfRpr2n3ze&X-Amz-Signature=6ee81fb083d0ccc30fc35ed8fc71b4e63b062d23f10b74e3825a8f562d831bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
