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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ3X4NJW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDh81EaxdpHurXubAKI4Bl03iu%2B7gW6eFois1VXK1m1SAiEA6gJ63vCqwboUn5WRGGfh2mHEsyfNnYsTpVj2GIM5DdMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIF6ZnbUgSQvzAbxByrcA0vrcpH8c%2BFbef9qDB9QUa5cqlc1U214QK3MDSZR8cC6O9ycCHo0L8GsylCjxBIZnpdbgA07aW6U8LHb%2Fq%2B%2BwUCtyztv5EioFFgJhy2ISl8mIThbGwW7CRyhfI8z8C%2B5zrSIXxNvx%2FYirqxKQU3UW5yoTDTqq0g9h04Yg846T8aA6Gbz5FhL0yDw8fkl1GNyocQlejV1ZhxaBM4Q%2F6MQGHOD1LTNsoM8aVXLu2MHbp5D2A8x2w9MTqQmf3cm5ldRAdm%2FzBYF4Ek5wRF8SUngNfJZoJa10N2%2FtuUQ%2Bg2soTB9X2pqekBoSPbWa%2Bn6CDHp611dtg4Q2NxVbCIM8D3TkL1wmPUNuaFfW%2FEiDbeoxty%2FhQBALm8GWB%2FdPRokEPU2PcLXCmOhVnlR9kz7vyRflH%2FE3eN80Qap33iwlFVUR8iO7VtIPQWSp0mXNLSeV7PT3orVt327vHqq9DdURwHjIhHUznyU5NTLw5a47gupNPOnUhQ72a%2B6lpEGEcm4Gv7cVhG9ht%2BTmSI5UDeas16fqrFe7UckVpP5uMQOOvIQgjpS7azyRRpyLNIkR5pz1WEFGf8Tx%2BQ8TPCvLYPGSpVKNedncXDPAw8Fd1yg6Q4dVhumn098pBu%2BDoGrmvHFMPv1hb4GOqUB%2F%2BsG7wejRLLKnuL78%2F14d1xATnE4t%2F43kWyf7%2FurkTOWS8WbdkcRqDYqoDG8i6dSF2MRGCtr1VHXeTywsMq7I3ozXhiqUQv7twvA%2FHuRwq4xHOAsV17Ro%2B8rt7V31%2FxJFHDjHsDqI4B0kK5f%2BbXkhb3OiE1n8C8DsAzYd6kjXJ9y98qUh%2FsRjw%2B70cvSlGPXKZKD6p8s0LonhUNq7DB1MsQ6LJ7h&X-Amz-Signature=eb78dbc20036ba8c735b2b4cb282df2bd138d82470612200b396363ecd585dd0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ3X4NJW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDh81EaxdpHurXubAKI4Bl03iu%2B7gW6eFois1VXK1m1SAiEA6gJ63vCqwboUn5WRGGfh2mHEsyfNnYsTpVj2GIM5DdMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIF6ZnbUgSQvzAbxByrcA0vrcpH8c%2BFbef9qDB9QUa5cqlc1U214QK3MDSZR8cC6O9ycCHo0L8GsylCjxBIZnpdbgA07aW6U8LHb%2Fq%2B%2BwUCtyztv5EioFFgJhy2ISl8mIThbGwW7CRyhfI8z8C%2B5zrSIXxNvx%2FYirqxKQU3UW5yoTDTqq0g9h04Yg846T8aA6Gbz5FhL0yDw8fkl1GNyocQlejV1ZhxaBM4Q%2F6MQGHOD1LTNsoM8aVXLu2MHbp5D2A8x2w9MTqQmf3cm5ldRAdm%2FzBYF4Ek5wRF8SUngNfJZoJa10N2%2FtuUQ%2Bg2soTB9X2pqekBoSPbWa%2Bn6CDHp611dtg4Q2NxVbCIM8D3TkL1wmPUNuaFfW%2FEiDbeoxty%2FhQBALm8GWB%2FdPRokEPU2PcLXCmOhVnlR9kz7vyRflH%2FE3eN80Qap33iwlFVUR8iO7VtIPQWSp0mXNLSeV7PT3orVt327vHqq9DdURwHjIhHUznyU5NTLw5a47gupNPOnUhQ72a%2B6lpEGEcm4Gv7cVhG9ht%2BTmSI5UDeas16fqrFe7UckVpP5uMQOOvIQgjpS7azyRRpyLNIkR5pz1WEFGf8Tx%2BQ8TPCvLYPGSpVKNedncXDPAw8Fd1yg6Q4dVhumn098pBu%2BDoGrmvHFMPv1hb4GOqUB%2F%2BsG7wejRLLKnuL78%2F14d1xATnE4t%2F43kWyf7%2FurkTOWS8WbdkcRqDYqoDG8i6dSF2MRGCtr1VHXeTywsMq7I3ozXhiqUQv7twvA%2FHuRwq4xHOAsV17Ro%2B8rt7V31%2FxJFHDjHsDqI4B0kK5f%2BbXkhb3OiE1n8C8DsAzYd6kjXJ9y98qUh%2FsRjw%2B70cvSlGPXKZKD6p8s0LonhUNq7DB1MsQ6LJ7h&X-Amz-Signature=c4ced0deb04b52d487746b4f6ac3d9eec738155ad44bf63859665417a23093a4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ3X4NJW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDh81EaxdpHurXubAKI4Bl03iu%2B7gW6eFois1VXK1m1SAiEA6gJ63vCqwboUn5WRGGfh2mHEsyfNnYsTpVj2GIM5DdMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIF6ZnbUgSQvzAbxByrcA0vrcpH8c%2BFbef9qDB9QUa5cqlc1U214QK3MDSZR8cC6O9ycCHo0L8GsylCjxBIZnpdbgA07aW6U8LHb%2Fq%2B%2BwUCtyztv5EioFFgJhy2ISl8mIThbGwW7CRyhfI8z8C%2B5zrSIXxNvx%2FYirqxKQU3UW5yoTDTqq0g9h04Yg846T8aA6Gbz5FhL0yDw8fkl1GNyocQlejV1ZhxaBM4Q%2F6MQGHOD1LTNsoM8aVXLu2MHbp5D2A8x2w9MTqQmf3cm5ldRAdm%2FzBYF4Ek5wRF8SUngNfJZoJa10N2%2FtuUQ%2Bg2soTB9X2pqekBoSPbWa%2Bn6CDHp611dtg4Q2NxVbCIM8D3TkL1wmPUNuaFfW%2FEiDbeoxty%2FhQBALm8GWB%2FdPRokEPU2PcLXCmOhVnlR9kz7vyRflH%2FE3eN80Qap33iwlFVUR8iO7VtIPQWSp0mXNLSeV7PT3orVt327vHqq9DdURwHjIhHUznyU5NTLw5a47gupNPOnUhQ72a%2B6lpEGEcm4Gv7cVhG9ht%2BTmSI5UDeas16fqrFe7UckVpP5uMQOOvIQgjpS7azyRRpyLNIkR5pz1WEFGf8Tx%2BQ8TPCvLYPGSpVKNedncXDPAw8Fd1yg6Q4dVhumn098pBu%2BDoGrmvHFMPv1hb4GOqUB%2F%2BsG7wejRLLKnuL78%2F14d1xATnE4t%2F43kWyf7%2FurkTOWS8WbdkcRqDYqoDG8i6dSF2MRGCtr1VHXeTywsMq7I3ozXhiqUQv7twvA%2FHuRwq4xHOAsV17Ro%2B8rt7V31%2FxJFHDjHsDqI4B0kK5f%2BbXkhb3OiE1n8C8DsAzYd6kjXJ9y98qUh%2FsRjw%2B70cvSlGPXKZKD6p8s0LonhUNq7DB1MsQ6LJ7h&X-Amz-Signature=f8272d1d505eaf14bcc599d82ca45c5be576e352e89e51767eeb31abda526fd6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ3X4NJW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDh81EaxdpHurXubAKI4Bl03iu%2B7gW6eFois1VXK1m1SAiEA6gJ63vCqwboUn5WRGGfh2mHEsyfNnYsTpVj2GIM5DdMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIF6ZnbUgSQvzAbxByrcA0vrcpH8c%2BFbef9qDB9QUa5cqlc1U214QK3MDSZR8cC6O9ycCHo0L8GsylCjxBIZnpdbgA07aW6U8LHb%2Fq%2B%2BwUCtyztv5EioFFgJhy2ISl8mIThbGwW7CRyhfI8z8C%2B5zrSIXxNvx%2FYirqxKQU3UW5yoTDTqq0g9h04Yg846T8aA6Gbz5FhL0yDw8fkl1GNyocQlejV1ZhxaBM4Q%2F6MQGHOD1LTNsoM8aVXLu2MHbp5D2A8x2w9MTqQmf3cm5ldRAdm%2FzBYF4Ek5wRF8SUngNfJZoJa10N2%2FtuUQ%2Bg2soTB9X2pqekBoSPbWa%2Bn6CDHp611dtg4Q2NxVbCIM8D3TkL1wmPUNuaFfW%2FEiDbeoxty%2FhQBALm8GWB%2FdPRokEPU2PcLXCmOhVnlR9kz7vyRflH%2FE3eN80Qap33iwlFVUR8iO7VtIPQWSp0mXNLSeV7PT3orVt327vHqq9DdURwHjIhHUznyU5NTLw5a47gupNPOnUhQ72a%2B6lpEGEcm4Gv7cVhG9ht%2BTmSI5UDeas16fqrFe7UckVpP5uMQOOvIQgjpS7azyRRpyLNIkR5pz1WEFGf8Tx%2BQ8TPCvLYPGSpVKNedncXDPAw8Fd1yg6Q4dVhumn098pBu%2BDoGrmvHFMPv1hb4GOqUB%2F%2BsG7wejRLLKnuL78%2F14d1xATnE4t%2F43kWyf7%2FurkTOWS8WbdkcRqDYqoDG8i6dSF2MRGCtr1VHXeTywsMq7I3ozXhiqUQv7twvA%2FHuRwq4xHOAsV17Ro%2B8rt7V31%2FxJFHDjHsDqI4B0kK5f%2BbXkhb3OiE1n8C8DsAzYd6kjXJ9y98qUh%2FsRjw%2B70cvSlGPXKZKD6p8s0LonhUNq7DB1MsQ6LJ7h&X-Amz-Signature=e5b40e0083902eccc31f1a891bea8b480bd00bd2a971d6a4031e684aa9e8f147&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ3X4NJW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDh81EaxdpHurXubAKI4Bl03iu%2B7gW6eFois1VXK1m1SAiEA6gJ63vCqwboUn5WRGGfh2mHEsyfNnYsTpVj2GIM5DdMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIF6ZnbUgSQvzAbxByrcA0vrcpH8c%2BFbef9qDB9QUa5cqlc1U214QK3MDSZR8cC6O9ycCHo0L8GsylCjxBIZnpdbgA07aW6U8LHb%2Fq%2B%2BwUCtyztv5EioFFgJhy2ISl8mIThbGwW7CRyhfI8z8C%2B5zrSIXxNvx%2FYirqxKQU3UW5yoTDTqq0g9h04Yg846T8aA6Gbz5FhL0yDw8fkl1GNyocQlejV1ZhxaBM4Q%2F6MQGHOD1LTNsoM8aVXLu2MHbp5D2A8x2w9MTqQmf3cm5ldRAdm%2FzBYF4Ek5wRF8SUngNfJZoJa10N2%2FtuUQ%2Bg2soTB9X2pqekBoSPbWa%2Bn6CDHp611dtg4Q2NxVbCIM8D3TkL1wmPUNuaFfW%2FEiDbeoxty%2FhQBALm8GWB%2FdPRokEPU2PcLXCmOhVnlR9kz7vyRflH%2FE3eN80Qap33iwlFVUR8iO7VtIPQWSp0mXNLSeV7PT3orVt327vHqq9DdURwHjIhHUznyU5NTLw5a47gupNPOnUhQ72a%2B6lpEGEcm4Gv7cVhG9ht%2BTmSI5UDeas16fqrFe7UckVpP5uMQOOvIQgjpS7azyRRpyLNIkR5pz1WEFGf8Tx%2BQ8TPCvLYPGSpVKNedncXDPAw8Fd1yg6Q4dVhumn098pBu%2BDoGrmvHFMPv1hb4GOqUB%2F%2BsG7wejRLLKnuL78%2F14d1xATnE4t%2F43kWyf7%2FurkTOWS8WbdkcRqDYqoDG8i6dSF2MRGCtr1VHXeTywsMq7I3ozXhiqUQv7twvA%2FHuRwq4xHOAsV17Ro%2B8rt7V31%2FxJFHDjHsDqI4B0kK5f%2BbXkhb3OiE1n8C8DsAzYd6kjXJ9y98qUh%2FsRjw%2B70cvSlGPXKZKD6p8s0LonhUNq7DB1MsQ6LJ7h&X-Amz-Signature=f2fd6ecadbea9e99d23fcfa1f78a833a1c6f6bb265f655a446e2a9bde09126d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
