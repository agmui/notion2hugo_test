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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643IROXEB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIAdyyk9UuuSzjyAmy4660C3BjQvScjlCIw2d6WKfISu6AiEAjuO2oUdnRVBf%2BEi44KfPIQJ%2BGnpLjyKXFTleJ9DV0FIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJfGnE1C0Kh0vbWZyircA4xP2MuvLDFMN%2Fnzbj5uJfHCpY55nPbD5FGrVtPz3%2BtyRO3%2FaFTaRGVvC2CS5opganTa4PR64h0VOplShRQp68O7%2BCzLjRj512EJUkb2BLRWJaXSz4%2B5icKfgGmYR4gfE78lxbhj3V72hoYwuf0Mw%2FeFzgnwQe31Jttpe5LwhLxCz3Zn72a1004AW7o6bZ7kHySeE%2Bu7GZrai9hjlq2SX6oL3MUzrbDYAcNl95Shq%2B9lWv2r%2Febt4Rit6HPKt5q6xrMbHh8Vz%2FAQalble8OsuB%2FSX1A5uZ1at1NZX2iOOgxEEHJcfZpaoFb76gJA7Stimp%2FVY8tiiKiefIM3i6GVExRklnzfFJSaC%2BUz9MjGCjIPO2ws1G9GbMQ2QetkYxzlS3%2BuDIn%2FrLj%2BAYvY4tU5et2a8EGQcwKiNpm1bN031GTOM58KnL0E4%2BEVXadyaxSgYunQp1QNdmwd0MKcoSPwsFl0t32HgW5ne0%2FJo3AEIpeEUiew3iWmqP9uajdaeO5%2FxFdRoMuhaU8wjku%2FwmiOIf9wO1a2%2FJwQO4jJiqA1OnVr6T6U7Z0cAd%2BNCkIgB4z%2BATxA0%2FX4DKwZM92mzecWQ0Bl9vseVAyfgpse3YfiEY%2FRAMr8v5NTO9PonUa7MKiW9MIGOqUBWp6yF78n9%2BX8BqysRpBtO5cbQ4uD8YPMUkOoizYLetsSGk6803Dxb0XfYmm0%2BA3b92qSpanbVFEifZW00wXEDpmhAQGJJJgFNpLUJC8e7K03nOLkP8lnS3aJ5wodPE0qaDu%2FVY2dcSea%2FaS9MubAvIvZSOfvWJ9nstfVJiykm%2Bjv0OinARG69P1%2F9%2BtEdtU1EyoJ02vl2lXe7YD63k8JTKcTsxOW&X-Amz-Signature=bd3ffd604e9d75ab057eef7ad708f7b583b9d76e0ec3f810ebd30443e4842e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643IROXEB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIAdyyk9UuuSzjyAmy4660C3BjQvScjlCIw2d6WKfISu6AiEAjuO2oUdnRVBf%2BEi44KfPIQJ%2BGnpLjyKXFTleJ9DV0FIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJfGnE1C0Kh0vbWZyircA4xP2MuvLDFMN%2Fnzbj5uJfHCpY55nPbD5FGrVtPz3%2BtyRO3%2FaFTaRGVvC2CS5opganTa4PR64h0VOplShRQp68O7%2BCzLjRj512EJUkb2BLRWJaXSz4%2B5icKfgGmYR4gfE78lxbhj3V72hoYwuf0Mw%2FeFzgnwQe31Jttpe5LwhLxCz3Zn72a1004AW7o6bZ7kHySeE%2Bu7GZrai9hjlq2SX6oL3MUzrbDYAcNl95Shq%2B9lWv2r%2Febt4Rit6HPKt5q6xrMbHh8Vz%2FAQalble8OsuB%2FSX1A5uZ1at1NZX2iOOgxEEHJcfZpaoFb76gJA7Stimp%2FVY8tiiKiefIM3i6GVExRklnzfFJSaC%2BUz9MjGCjIPO2ws1G9GbMQ2QetkYxzlS3%2BuDIn%2FrLj%2BAYvY4tU5et2a8EGQcwKiNpm1bN031GTOM58KnL0E4%2BEVXadyaxSgYunQp1QNdmwd0MKcoSPwsFl0t32HgW5ne0%2FJo3AEIpeEUiew3iWmqP9uajdaeO5%2FxFdRoMuhaU8wjku%2FwmiOIf9wO1a2%2FJwQO4jJiqA1OnVr6T6U7Z0cAd%2BNCkIgB4z%2BATxA0%2FX4DKwZM92mzecWQ0Bl9vseVAyfgpse3YfiEY%2FRAMr8v5NTO9PonUa7MKiW9MIGOqUBWp6yF78n9%2BX8BqysRpBtO5cbQ4uD8YPMUkOoizYLetsSGk6803Dxb0XfYmm0%2BA3b92qSpanbVFEifZW00wXEDpmhAQGJJJgFNpLUJC8e7K03nOLkP8lnS3aJ5wodPE0qaDu%2FVY2dcSea%2FaS9MubAvIvZSOfvWJ9nstfVJiykm%2Bjv0OinARG69P1%2F9%2BtEdtU1EyoJ02vl2lXe7YD63k8JTKcTsxOW&X-Amz-Signature=4502e9c3fa0a957c8891c2ab7d41eb36ea7cae6f5a78bed071a61573c2b656e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643IROXEB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIAdyyk9UuuSzjyAmy4660C3BjQvScjlCIw2d6WKfISu6AiEAjuO2oUdnRVBf%2BEi44KfPIQJ%2BGnpLjyKXFTleJ9DV0FIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJfGnE1C0Kh0vbWZyircA4xP2MuvLDFMN%2Fnzbj5uJfHCpY55nPbD5FGrVtPz3%2BtyRO3%2FaFTaRGVvC2CS5opganTa4PR64h0VOplShRQp68O7%2BCzLjRj512EJUkb2BLRWJaXSz4%2B5icKfgGmYR4gfE78lxbhj3V72hoYwuf0Mw%2FeFzgnwQe31Jttpe5LwhLxCz3Zn72a1004AW7o6bZ7kHySeE%2Bu7GZrai9hjlq2SX6oL3MUzrbDYAcNl95Shq%2B9lWv2r%2Febt4Rit6HPKt5q6xrMbHh8Vz%2FAQalble8OsuB%2FSX1A5uZ1at1NZX2iOOgxEEHJcfZpaoFb76gJA7Stimp%2FVY8tiiKiefIM3i6GVExRklnzfFJSaC%2BUz9MjGCjIPO2ws1G9GbMQ2QetkYxzlS3%2BuDIn%2FrLj%2BAYvY4tU5et2a8EGQcwKiNpm1bN031GTOM58KnL0E4%2BEVXadyaxSgYunQp1QNdmwd0MKcoSPwsFl0t32HgW5ne0%2FJo3AEIpeEUiew3iWmqP9uajdaeO5%2FxFdRoMuhaU8wjku%2FwmiOIf9wO1a2%2FJwQO4jJiqA1OnVr6T6U7Z0cAd%2BNCkIgB4z%2BATxA0%2FX4DKwZM92mzecWQ0Bl9vseVAyfgpse3YfiEY%2FRAMr8v5NTO9PonUa7MKiW9MIGOqUBWp6yF78n9%2BX8BqysRpBtO5cbQ4uD8YPMUkOoizYLetsSGk6803Dxb0XfYmm0%2BA3b92qSpanbVFEifZW00wXEDpmhAQGJJJgFNpLUJC8e7K03nOLkP8lnS3aJ5wodPE0qaDu%2FVY2dcSea%2FaS9MubAvIvZSOfvWJ9nstfVJiykm%2Bjv0OinARG69P1%2F9%2BtEdtU1EyoJ02vl2lXe7YD63k8JTKcTsxOW&X-Amz-Signature=d5a590e480f9cd20bb8369b6b9775b24f387e0b189ce59982ad7b7254e8a2733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643IROXEB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIAdyyk9UuuSzjyAmy4660C3BjQvScjlCIw2d6WKfISu6AiEAjuO2oUdnRVBf%2BEi44KfPIQJ%2BGnpLjyKXFTleJ9DV0FIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJfGnE1C0Kh0vbWZyircA4xP2MuvLDFMN%2Fnzbj5uJfHCpY55nPbD5FGrVtPz3%2BtyRO3%2FaFTaRGVvC2CS5opganTa4PR64h0VOplShRQp68O7%2BCzLjRj512EJUkb2BLRWJaXSz4%2B5icKfgGmYR4gfE78lxbhj3V72hoYwuf0Mw%2FeFzgnwQe31Jttpe5LwhLxCz3Zn72a1004AW7o6bZ7kHySeE%2Bu7GZrai9hjlq2SX6oL3MUzrbDYAcNl95Shq%2B9lWv2r%2Febt4Rit6HPKt5q6xrMbHh8Vz%2FAQalble8OsuB%2FSX1A5uZ1at1NZX2iOOgxEEHJcfZpaoFb76gJA7Stimp%2FVY8tiiKiefIM3i6GVExRklnzfFJSaC%2BUz9MjGCjIPO2ws1G9GbMQ2QetkYxzlS3%2BuDIn%2FrLj%2BAYvY4tU5et2a8EGQcwKiNpm1bN031GTOM58KnL0E4%2BEVXadyaxSgYunQp1QNdmwd0MKcoSPwsFl0t32HgW5ne0%2FJo3AEIpeEUiew3iWmqP9uajdaeO5%2FxFdRoMuhaU8wjku%2FwmiOIf9wO1a2%2FJwQO4jJiqA1OnVr6T6U7Z0cAd%2BNCkIgB4z%2BATxA0%2FX4DKwZM92mzecWQ0Bl9vseVAyfgpse3YfiEY%2FRAMr8v5NTO9PonUa7MKiW9MIGOqUBWp6yF78n9%2BX8BqysRpBtO5cbQ4uD8YPMUkOoizYLetsSGk6803Dxb0XfYmm0%2BA3b92qSpanbVFEifZW00wXEDpmhAQGJJJgFNpLUJC8e7K03nOLkP8lnS3aJ5wodPE0qaDu%2FVY2dcSea%2FaS9MubAvIvZSOfvWJ9nstfVJiykm%2Bjv0OinARG69P1%2F9%2BtEdtU1EyoJ02vl2lXe7YD63k8JTKcTsxOW&X-Amz-Signature=a60245e7251552269fa27cd53b3dab63eb289ba0a5f2bc0e081ed85dd61f17c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643IROXEB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIAdyyk9UuuSzjyAmy4660C3BjQvScjlCIw2d6WKfISu6AiEAjuO2oUdnRVBf%2BEi44KfPIQJ%2BGnpLjyKXFTleJ9DV0FIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJfGnE1C0Kh0vbWZyircA4xP2MuvLDFMN%2Fnzbj5uJfHCpY55nPbD5FGrVtPz3%2BtyRO3%2FaFTaRGVvC2CS5opganTa4PR64h0VOplShRQp68O7%2BCzLjRj512EJUkb2BLRWJaXSz4%2B5icKfgGmYR4gfE78lxbhj3V72hoYwuf0Mw%2FeFzgnwQe31Jttpe5LwhLxCz3Zn72a1004AW7o6bZ7kHySeE%2Bu7GZrai9hjlq2SX6oL3MUzrbDYAcNl95Shq%2B9lWv2r%2Febt4Rit6HPKt5q6xrMbHh8Vz%2FAQalble8OsuB%2FSX1A5uZ1at1NZX2iOOgxEEHJcfZpaoFb76gJA7Stimp%2FVY8tiiKiefIM3i6GVExRklnzfFJSaC%2BUz9MjGCjIPO2ws1G9GbMQ2QetkYxzlS3%2BuDIn%2FrLj%2BAYvY4tU5et2a8EGQcwKiNpm1bN031GTOM58KnL0E4%2BEVXadyaxSgYunQp1QNdmwd0MKcoSPwsFl0t32HgW5ne0%2FJo3AEIpeEUiew3iWmqP9uajdaeO5%2FxFdRoMuhaU8wjku%2FwmiOIf9wO1a2%2FJwQO4jJiqA1OnVr6T6U7Z0cAd%2BNCkIgB4z%2BATxA0%2FX4DKwZM92mzecWQ0Bl9vseVAyfgpse3YfiEY%2FRAMr8v5NTO9PonUa7MKiW9MIGOqUBWp6yF78n9%2BX8BqysRpBtO5cbQ4uD8YPMUkOoizYLetsSGk6803Dxb0XfYmm0%2BA3b92qSpanbVFEifZW00wXEDpmhAQGJJJgFNpLUJC8e7K03nOLkP8lnS3aJ5wodPE0qaDu%2FVY2dcSea%2FaS9MubAvIvZSOfvWJ9nstfVJiykm%2Bjv0OinARG69P1%2F9%2BtEdtU1EyoJ02vl2lXe7YD63k8JTKcTsxOW&X-Amz-Signature=89c6efc14aa961b0013498b9e52adc8f6fdff03ad76afed667f9d7fa6f879ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
