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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QOQ2GF7%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKDReJ9xM0J6X5eaUG5F0KJHbNMaXRwHRCYJzuNNuSdAiBOlo8MCecOxyic6r9P1lPM2Ce3oVlqFEQAbEeyDc3tXCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhFts%2FO4Q9eHIBnc8KtwDuxoGrHKtmnWDhE2C8mZTwg7Y%2FvAYRKDUkTgTJqIfFn%2Fvc4hl1BtByoau1l1GkSb5n8Q9OgpiLZfORyw2BLzfrqrcyXxyTCFmTTwbjdtrLBRQKumXbMcW3ltyGFGE36OGBINhu1cGhETpRKswFUTl1M7ti6MYXdixcI1ZuaOZWWV4cNMBAGz3hJJT%2FaKfp%2B6kJRsU6mpoEBZWvUjog5R%2FL0Ys%2BkoZ5tJ4dKhNayMZ0XeLmoeVVae7MZffoGZUZzKk3EewHCkQ9QSA0ntRWscEuJ62494REmgZJ3ia7Z0m%2B9Ai4BBEQ3YuIaDmQl4KjF3ssOMYz%2BpNgtIL1j70Y3aeZ4W12soj7AyW73pqmYvEsikURIBiGhVidD1zyvazanA%2Fct4MbspsFNze97b4JRw5kbXUmXJpYaOblZQMMdIfRdvMlmQJsrEaHkx4mjLjawIqjYlEGB9cCLYN%2BZc6K8fTh87qXVApNjm8wbMBgms7ia6FZ9NJTM2m7fg2HECaEpQhvs9P%2F11gGExdSPbg1LHWdu5nRh8jligMdf%2FZKgcYkxdph44dd%2FI2Uef7MtfjmlCHaBKGlR0yE%2Bx1plCUOcATKGuPlRrm6Cinyp%2FKKaZnjGDqziouTo4vvT2KipAwz5%2BUvgY6pgFob0PayGaHxetuPIcbGdIrgpAbD9ZrptPvlMrQX0TcFHU1kfcaGHqaZ9lmBX3bob06stZASY%2FTlWNyKkUNoWxGkhtwtJYnpn37hgY2VOJTtBU2Flzf3DiHnyaO88AN2XmLAOuA6VIef8jKvxhqtYV0C194xyKK4%2BINGbLODfDpZvvM2F0fVje67lLVFWsre%2BfF9sxf4eGyfPCEKY5Il36DLTxklZOU&X-Amz-Signature=f4e6d29d52276179561568d67aede3664521c6aa4b22c97a6a86976eb3163e5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QOQ2GF7%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKDReJ9xM0J6X5eaUG5F0KJHbNMaXRwHRCYJzuNNuSdAiBOlo8MCecOxyic6r9P1lPM2Ce3oVlqFEQAbEeyDc3tXCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhFts%2FO4Q9eHIBnc8KtwDuxoGrHKtmnWDhE2C8mZTwg7Y%2FvAYRKDUkTgTJqIfFn%2Fvc4hl1BtByoau1l1GkSb5n8Q9OgpiLZfORyw2BLzfrqrcyXxyTCFmTTwbjdtrLBRQKumXbMcW3ltyGFGE36OGBINhu1cGhETpRKswFUTl1M7ti6MYXdixcI1ZuaOZWWV4cNMBAGz3hJJT%2FaKfp%2B6kJRsU6mpoEBZWvUjog5R%2FL0Ys%2BkoZ5tJ4dKhNayMZ0XeLmoeVVae7MZffoGZUZzKk3EewHCkQ9QSA0ntRWscEuJ62494REmgZJ3ia7Z0m%2B9Ai4BBEQ3YuIaDmQl4KjF3ssOMYz%2BpNgtIL1j70Y3aeZ4W12soj7AyW73pqmYvEsikURIBiGhVidD1zyvazanA%2Fct4MbspsFNze97b4JRw5kbXUmXJpYaOblZQMMdIfRdvMlmQJsrEaHkx4mjLjawIqjYlEGB9cCLYN%2BZc6K8fTh87qXVApNjm8wbMBgms7ia6FZ9NJTM2m7fg2HECaEpQhvs9P%2F11gGExdSPbg1LHWdu5nRh8jligMdf%2FZKgcYkxdph44dd%2FI2Uef7MtfjmlCHaBKGlR0yE%2Bx1plCUOcATKGuPlRrm6Cinyp%2FKKaZnjGDqziouTo4vvT2KipAwz5%2BUvgY6pgFob0PayGaHxetuPIcbGdIrgpAbD9ZrptPvlMrQX0TcFHU1kfcaGHqaZ9lmBX3bob06stZASY%2FTlWNyKkUNoWxGkhtwtJYnpn37hgY2VOJTtBU2Flzf3DiHnyaO88AN2XmLAOuA6VIef8jKvxhqtYV0C194xyKK4%2BINGbLODfDpZvvM2F0fVje67lLVFWsre%2BfF9sxf4eGyfPCEKY5Il36DLTxklZOU&X-Amz-Signature=09e576fc103acd5b8e0424ba03de2fb861f51ee27821bf11239c017d2979e8b8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QOQ2GF7%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKDReJ9xM0J6X5eaUG5F0KJHbNMaXRwHRCYJzuNNuSdAiBOlo8MCecOxyic6r9P1lPM2Ce3oVlqFEQAbEeyDc3tXCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhFts%2FO4Q9eHIBnc8KtwDuxoGrHKtmnWDhE2C8mZTwg7Y%2FvAYRKDUkTgTJqIfFn%2Fvc4hl1BtByoau1l1GkSb5n8Q9OgpiLZfORyw2BLzfrqrcyXxyTCFmTTwbjdtrLBRQKumXbMcW3ltyGFGE36OGBINhu1cGhETpRKswFUTl1M7ti6MYXdixcI1ZuaOZWWV4cNMBAGz3hJJT%2FaKfp%2B6kJRsU6mpoEBZWvUjog5R%2FL0Ys%2BkoZ5tJ4dKhNayMZ0XeLmoeVVae7MZffoGZUZzKk3EewHCkQ9QSA0ntRWscEuJ62494REmgZJ3ia7Z0m%2B9Ai4BBEQ3YuIaDmQl4KjF3ssOMYz%2BpNgtIL1j70Y3aeZ4W12soj7AyW73pqmYvEsikURIBiGhVidD1zyvazanA%2Fct4MbspsFNze97b4JRw5kbXUmXJpYaOblZQMMdIfRdvMlmQJsrEaHkx4mjLjawIqjYlEGB9cCLYN%2BZc6K8fTh87qXVApNjm8wbMBgms7ia6FZ9NJTM2m7fg2HECaEpQhvs9P%2F11gGExdSPbg1LHWdu5nRh8jligMdf%2FZKgcYkxdph44dd%2FI2Uef7MtfjmlCHaBKGlR0yE%2Bx1plCUOcATKGuPlRrm6Cinyp%2FKKaZnjGDqziouTo4vvT2KipAwz5%2BUvgY6pgFob0PayGaHxetuPIcbGdIrgpAbD9ZrptPvlMrQX0TcFHU1kfcaGHqaZ9lmBX3bob06stZASY%2FTlWNyKkUNoWxGkhtwtJYnpn37hgY2VOJTtBU2Flzf3DiHnyaO88AN2XmLAOuA6VIef8jKvxhqtYV0C194xyKK4%2BINGbLODfDpZvvM2F0fVje67lLVFWsre%2BfF9sxf4eGyfPCEKY5Il36DLTxklZOU&X-Amz-Signature=d1d26c4db744e32cfd32e2fda8d49a49834c32c79ace6b74179790bd40473985&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QOQ2GF7%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKDReJ9xM0J6X5eaUG5F0KJHbNMaXRwHRCYJzuNNuSdAiBOlo8MCecOxyic6r9P1lPM2Ce3oVlqFEQAbEeyDc3tXCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhFts%2FO4Q9eHIBnc8KtwDuxoGrHKtmnWDhE2C8mZTwg7Y%2FvAYRKDUkTgTJqIfFn%2Fvc4hl1BtByoau1l1GkSb5n8Q9OgpiLZfORyw2BLzfrqrcyXxyTCFmTTwbjdtrLBRQKumXbMcW3ltyGFGE36OGBINhu1cGhETpRKswFUTl1M7ti6MYXdixcI1ZuaOZWWV4cNMBAGz3hJJT%2FaKfp%2B6kJRsU6mpoEBZWvUjog5R%2FL0Ys%2BkoZ5tJ4dKhNayMZ0XeLmoeVVae7MZffoGZUZzKk3EewHCkQ9QSA0ntRWscEuJ62494REmgZJ3ia7Z0m%2B9Ai4BBEQ3YuIaDmQl4KjF3ssOMYz%2BpNgtIL1j70Y3aeZ4W12soj7AyW73pqmYvEsikURIBiGhVidD1zyvazanA%2Fct4MbspsFNze97b4JRw5kbXUmXJpYaOblZQMMdIfRdvMlmQJsrEaHkx4mjLjawIqjYlEGB9cCLYN%2BZc6K8fTh87qXVApNjm8wbMBgms7ia6FZ9NJTM2m7fg2HECaEpQhvs9P%2F11gGExdSPbg1LHWdu5nRh8jligMdf%2FZKgcYkxdph44dd%2FI2Uef7MtfjmlCHaBKGlR0yE%2Bx1plCUOcATKGuPlRrm6Cinyp%2FKKaZnjGDqziouTo4vvT2KipAwz5%2BUvgY6pgFob0PayGaHxetuPIcbGdIrgpAbD9ZrptPvlMrQX0TcFHU1kfcaGHqaZ9lmBX3bob06stZASY%2FTlWNyKkUNoWxGkhtwtJYnpn37hgY2VOJTtBU2Flzf3DiHnyaO88AN2XmLAOuA6VIef8jKvxhqtYV0C194xyKK4%2BINGbLODfDpZvvM2F0fVje67lLVFWsre%2BfF9sxf4eGyfPCEKY5Il36DLTxklZOU&X-Amz-Signature=f36b80348df195ea4596beedf60dd216e7d97c58c7a7de2dea48db3ba8609445&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QOQ2GF7%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKDReJ9xM0J6X5eaUG5F0KJHbNMaXRwHRCYJzuNNuSdAiBOlo8MCecOxyic6r9P1lPM2Ce3oVlqFEQAbEeyDc3tXCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhFts%2FO4Q9eHIBnc8KtwDuxoGrHKtmnWDhE2C8mZTwg7Y%2FvAYRKDUkTgTJqIfFn%2Fvc4hl1BtByoau1l1GkSb5n8Q9OgpiLZfORyw2BLzfrqrcyXxyTCFmTTwbjdtrLBRQKumXbMcW3ltyGFGE36OGBINhu1cGhETpRKswFUTl1M7ti6MYXdixcI1ZuaOZWWV4cNMBAGz3hJJT%2FaKfp%2B6kJRsU6mpoEBZWvUjog5R%2FL0Ys%2BkoZ5tJ4dKhNayMZ0XeLmoeVVae7MZffoGZUZzKk3EewHCkQ9QSA0ntRWscEuJ62494REmgZJ3ia7Z0m%2B9Ai4BBEQ3YuIaDmQl4KjF3ssOMYz%2BpNgtIL1j70Y3aeZ4W12soj7AyW73pqmYvEsikURIBiGhVidD1zyvazanA%2Fct4MbspsFNze97b4JRw5kbXUmXJpYaOblZQMMdIfRdvMlmQJsrEaHkx4mjLjawIqjYlEGB9cCLYN%2BZc6K8fTh87qXVApNjm8wbMBgms7ia6FZ9NJTM2m7fg2HECaEpQhvs9P%2F11gGExdSPbg1LHWdu5nRh8jligMdf%2FZKgcYkxdph44dd%2FI2Uef7MtfjmlCHaBKGlR0yE%2Bx1plCUOcATKGuPlRrm6Cinyp%2FKKaZnjGDqziouTo4vvT2KipAwz5%2BUvgY6pgFob0PayGaHxetuPIcbGdIrgpAbD9ZrptPvlMrQX0TcFHU1kfcaGHqaZ9lmBX3bob06stZASY%2FTlWNyKkUNoWxGkhtwtJYnpn37hgY2VOJTtBU2Flzf3DiHnyaO88AN2XmLAOuA6VIef8jKvxhqtYV0C194xyKK4%2BINGbLODfDpZvvM2F0fVje67lLVFWsre%2BfF9sxf4eGyfPCEKY5Il36DLTxklZOU&X-Amz-Signature=f180ac66c15dbfb9cf15fd48fd8e1dbb4851ca5d615cb8e0c308c4a6f58b9b48&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
