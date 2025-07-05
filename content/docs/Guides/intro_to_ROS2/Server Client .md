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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SRJ7GDN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHW42kpeoknH4GsrqqkbK8FHBGJK6286%2BPG4wBFrSF%2B%2BAiEArnIgx1ZlM71mcAyXaQQhp2R82wNlpYd3WDS5shsd%2Ba4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEE%2FkYelFITLCKkYzircA1x49I7SHs%2BGKI3%2BkwGvp7r%2FMzqpfmEzFyXpmVGIngf04FV%2BLGKEQ2hsRq%2BxSqcf%2BOLm9SS36jiPM7umapLjRCJjVnAp%2BbFWQazREELhnxfEe3PtPoeWaOfdn1rLgFDwhoypAUCvjg5hDVDvNH%2FWmoJDGwLJYvBdB%2BjVU%2Bh8OfkBHweDrrD8IxwE9IXQMBjhAlR5C0ud9uB%2FW2Tz9ITaTeS4SgxV2NrikU6etoelprEUoGFK3oSDuc1ynu4GSpk5VIag0LQ%2Bgb2uaapQ70H1GluD9D57UaoDwIAGYrBlkiRw4Mo6tvPsPFYH9rIOEs2R1Bj4hEuUbS1IbZtkykbkcXPyNBqFVCr%2Fclh7YKOk7N%2BRQoOLLVKaQdwOxf26ZuBrbjA7d4d%2B%2Ft2cC9UElYcyKJTWmi1gNEysnVSNPnFELi%2BneMrfbpDNiB9Rh8tBZ%2B0mZW6W%2F%2F3QFRQI0IUc2syooI6Pe6NNCjyxaRWTxIbtXtdTxs363ma%2BqE0ThDLS4omXlVeK9Mu69HZU4CNk7vXT7hjN6elYXTjIw1fIDmyowMqTQ9qJAuQw5tjb4LYygL5upwrimsNBQwgu3swiUASYHHT9nN%2FFwGdFHyi9%2FxBEkcfSLoK%2F1joxMvQTfaMlMIP0pcMGOqUBukEVdVk4yBoKvmdkXxIkYquIDVmqNV1%2FBja9njma2DDWzxowY96GPUfmRRm1yGMdibWP%2FUiu0i4xwkd0DCD9M%2FPNLvwBZTWRvrLcXXDRzbSKVisjpwRSjNlcywnSjqtV8CgcJrxT9Xm%2BjAI05%2BwG%2Fnk6Vs7kiqrbygHRFHoZMqAbrmRtev7LHR2GxK0%2BhmtD83GsFxF%2BhVeizMEPbvN7SVibUQ9M&X-Amz-Signature=d675bbe350b85cf62bb02e8534a2621bf64e218797c58109e31685f784ea74b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SRJ7GDN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHW42kpeoknH4GsrqqkbK8FHBGJK6286%2BPG4wBFrSF%2B%2BAiEArnIgx1ZlM71mcAyXaQQhp2R82wNlpYd3WDS5shsd%2Ba4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEE%2FkYelFITLCKkYzircA1x49I7SHs%2BGKI3%2BkwGvp7r%2FMzqpfmEzFyXpmVGIngf04FV%2BLGKEQ2hsRq%2BxSqcf%2BOLm9SS36jiPM7umapLjRCJjVnAp%2BbFWQazREELhnxfEe3PtPoeWaOfdn1rLgFDwhoypAUCvjg5hDVDvNH%2FWmoJDGwLJYvBdB%2BjVU%2Bh8OfkBHweDrrD8IxwE9IXQMBjhAlR5C0ud9uB%2FW2Tz9ITaTeS4SgxV2NrikU6etoelprEUoGFK3oSDuc1ynu4GSpk5VIag0LQ%2Bgb2uaapQ70H1GluD9D57UaoDwIAGYrBlkiRw4Mo6tvPsPFYH9rIOEs2R1Bj4hEuUbS1IbZtkykbkcXPyNBqFVCr%2Fclh7YKOk7N%2BRQoOLLVKaQdwOxf26ZuBrbjA7d4d%2B%2Ft2cC9UElYcyKJTWmi1gNEysnVSNPnFELi%2BneMrfbpDNiB9Rh8tBZ%2B0mZW6W%2F%2F3QFRQI0IUc2syooI6Pe6NNCjyxaRWTxIbtXtdTxs363ma%2BqE0ThDLS4omXlVeK9Mu69HZU4CNk7vXT7hjN6elYXTjIw1fIDmyowMqTQ9qJAuQw5tjb4LYygL5upwrimsNBQwgu3swiUASYHHT9nN%2FFwGdFHyi9%2FxBEkcfSLoK%2F1joxMvQTfaMlMIP0pcMGOqUBukEVdVk4yBoKvmdkXxIkYquIDVmqNV1%2FBja9njma2DDWzxowY96GPUfmRRm1yGMdibWP%2FUiu0i4xwkd0DCD9M%2FPNLvwBZTWRvrLcXXDRzbSKVisjpwRSjNlcywnSjqtV8CgcJrxT9Xm%2BjAI05%2BwG%2Fnk6Vs7kiqrbygHRFHoZMqAbrmRtev7LHR2GxK0%2BhmtD83GsFxF%2BhVeizMEPbvN7SVibUQ9M&X-Amz-Signature=82bf2e49b3ca6f3233f2c8ca7ba75cebe4308760db1bcd9d6d100368a2772b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SRJ7GDN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHW42kpeoknH4GsrqqkbK8FHBGJK6286%2BPG4wBFrSF%2B%2BAiEArnIgx1ZlM71mcAyXaQQhp2R82wNlpYd3WDS5shsd%2Ba4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEE%2FkYelFITLCKkYzircA1x49I7SHs%2BGKI3%2BkwGvp7r%2FMzqpfmEzFyXpmVGIngf04FV%2BLGKEQ2hsRq%2BxSqcf%2BOLm9SS36jiPM7umapLjRCJjVnAp%2BbFWQazREELhnxfEe3PtPoeWaOfdn1rLgFDwhoypAUCvjg5hDVDvNH%2FWmoJDGwLJYvBdB%2BjVU%2Bh8OfkBHweDrrD8IxwE9IXQMBjhAlR5C0ud9uB%2FW2Tz9ITaTeS4SgxV2NrikU6etoelprEUoGFK3oSDuc1ynu4GSpk5VIag0LQ%2Bgb2uaapQ70H1GluD9D57UaoDwIAGYrBlkiRw4Mo6tvPsPFYH9rIOEs2R1Bj4hEuUbS1IbZtkykbkcXPyNBqFVCr%2Fclh7YKOk7N%2BRQoOLLVKaQdwOxf26ZuBrbjA7d4d%2B%2Ft2cC9UElYcyKJTWmi1gNEysnVSNPnFELi%2BneMrfbpDNiB9Rh8tBZ%2B0mZW6W%2F%2F3QFRQI0IUc2syooI6Pe6NNCjyxaRWTxIbtXtdTxs363ma%2BqE0ThDLS4omXlVeK9Mu69HZU4CNk7vXT7hjN6elYXTjIw1fIDmyowMqTQ9qJAuQw5tjb4LYygL5upwrimsNBQwgu3swiUASYHHT9nN%2FFwGdFHyi9%2FxBEkcfSLoK%2F1joxMvQTfaMlMIP0pcMGOqUBukEVdVk4yBoKvmdkXxIkYquIDVmqNV1%2FBja9njma2DDWzxowY96GPUfmRRm1yGMdibWP%2FUiu0i4xwkd0DCD9M%2FPNLvwBZTWRvrLcXXDRzbSKVisjpwRSjNlcywnSjqtV8CgcJrxT9Xm%2BjAI05%2BwG%2Fnk6Vs7kiqrbygHRFHoZMqAbrmRtev7LHR2GxK0%2BhmtD83GsFxF%2BhVeizMEPbvN7SVibUQ9M&X-Amz-Signature=1dd2b4fa9d3d079a952d090b198458055cd113c896ecb5e5e9e86f49f673da34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SRJ7GDN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHW42kpeoknH4GsrqqkbK8FHBGJK6286%2BPG4wBFrSF%2B%2BAiEArnIgx1ZlM71mcAyXaQQhp2R82wNlpYd3WDS5shsd%2Ba4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEE%2FkYelFITLCKkYzircA1x49I7SHs%2BGKI3%2BkwGvp7r%2FMzqpfmEzFyXpmVGIngf04FV%2BLGKEQ2hsRq%2BxSqcf%2BOLm9SS36jiPM7umapLjRCJjVnAp%2BbFWQazREELhnxfEe3PtPoeWaOfdn1rLgFDwhoypAUCvjg5hDVDvNH%2FWmoJDGwLJYvBdB%2BjVU%2Bh8OfkBHweDrrD8IxwE9IXQMBjhAlR5C0ud9uB%2FW2Tz9ITaTeS4SgxV2NrikU6etoelprEUoGFK3oSDuc1ynu4GSpk5VIag0LQ%2Bgb2uaapQ70H1GluD9D57UaoDwIAGYrBlkiRw4Mo6tvPsPFYH9rIOEs2R1Bj4hEuUbS1IbZtkykbkcXPyNBqFVCr%2Fclh7YKOk7N%2BRQoOLLVKaQdwOxf26ZuBrbjA7d4d%2B%2Ft2cC9UElYcyKJTWmi1gNEysnVSNPnFELi%2BneMrfbpDNiB9Rh8tBZ%2B0mZW6W%2F%2F3QFRQI0IUc2syooI6Pe6NNCjyxaRWTxIbtXtdTxs363ma%2BqE0ThDLS4omXlVeK9Mu69HZU4CNk7vXT7hjN6elYXTjIw1fIDmyowMqTQ9qJAuQw5tjb4LYygL5upwrimsNBQwgu3swiUASYHHT9nN%2FFwGdFHyi9%2FxBEkcfSLoK%2F1joxMvQTfaMlMIP0pcMGOqUBukEVdVk4yBoKvmdkXxIkYquIDVmqNV1%2FBja9njma2DDWzxowY96GPUfmRRm1yGMdibWP%2FUiu0i4xwkd0DCD9M%2FPNLvwBZTWRvrLcXXDRzbSKVisjpwRSjNlcywnSjqtV8CgcJrxT9Xm%2BjAI05%2BwG%2Fnk6Vs7kiqrbygHRFHoZMqAbrmRtev7LHR2GxK0%2BhmtD83GsFxF%2BhVeizMEPbvN7SVibUQ9M&X-Amz-Signature=e52cb3ce5aaf266fc64c40cc5e795c6295fd510c5c030f8336a576f4eef56e1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SRJ7GDN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHW42kpeoknH4GsrqqkbK8FHBGJK6286%2BPG4wBFrSF%2B%2BAiEArnIgx1ZlM71mcAyXaQQhp2R82wNlpYd3WDS5shsd%2Ba4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEE%2FkYelFITLCKkYzircA1x49I7SHs%2BGKI3%2BkwGvp7r%2FMzqpfmEzFyXpmVGIngf04FV%2BLGKEQ2hsRq%2BxSqcf%2BOLm9SS36jiPM7umapLjRCJjVnAp%2BbFWQazREELhnxfEe3PtPoeWaOfdn1rLgFDwhoypAUCvjg5hDVDvNH%2FWmoJDGwLJYvBdB%2BjVU%2Bh8OfkBHweDrrD8IxwE9IXQMBjhAlR5C0ud9uB%2FW2Tz9ITaTeS4SgxV2NrikU6etoelprEUoGFK3oSDuc1ynu4GSpk5VIag0LQ%2Bgb2uaapQ70H1GluD9D57UaoDwIAGYrBlkiRw4Mo6tvPsPFYH9rIOEs2R1Bj4hEuUbS1IbZtkykbkcXPyNBqFVCr%2Fclh7YKOk7N%2BRQoOLLVKaQdwOxf26ZuBrbjA7d4d%2B%2Ft2cC9UElYcyKJTWmi1gNEysnVSNPnFELi%2BneMrfbpDNiB9Rh8tBZ%2B0mZW6W%2F%2F3QFRQI0IUc2syooI6Pe6NNCjyxaRWTxIbtXtdTxs363ma%2BqE0ThDLS4omXlVeK9Mu69HZU4CNk7vXT7hjN6elYXTjIw1fIDmyowMqTQ9qJAuQw5tjb4LYygL5upwrimsNBQwgu3swiUASYHHT9nN%2FFwGdFHyi9%2FxBEkcfSLoK%2F1joxMvQTfaMlMIP0pcMGOqUBukEVdVk4yBoKvmdkXxIkYquIDVmqNV1%2FBja9njma2DDWzxowY96GPUfmRRm1yGMdibWP%2FUiu0i4xwkd0DCD9M%2FPNLvwBZTWRvrLcXXDRzbSKVisjpwRSjNlcywnSjqtV8CgcJrxT9Xm%2BjAI05%2BwG%2Fnk6Vs7kiqrbygHRFHoZMqAbrmRtev7LHR2GxK0%2BhmtD83GsFxF%2BhVeizMEPbvN7SVibUQ9M&X-Amz-Signature=f978295d0d084c12c2a5aee47e63c23804449eb9ab3bc381d92f5398d0632fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
