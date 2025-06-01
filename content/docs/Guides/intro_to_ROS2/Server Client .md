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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCB5YN5F%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDV2hj0nIug4%2F9ga4iBy0rxCe3gt9E0YJEHmTJBt6aZuAiBuVakow7Y9Mj%2BL%2F%2BnUrPU7TddHMuZ%2BdYVPorUNSIoVoCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTVnOWPiIy5tatm%2F0KtwDuZWcCZ5eFer49k9ZFdngT3oYAZjcpO9C%2BIukouVyzdamS2RcBTgjWG8lqUDVcf7bqXW91dPwsJ5L5Fwj77Xl0SpwkHraUg9xPP89LlBm%2FrMwyL3P6mlygjvWpEkaNX540ftRhwfBjM8lNcontdi35XoL%2Fa%2FEolqMdAewEN5aDga8JuwKXzvyGc2EdehkVoT6JvIS0jkE3Z1ZzEHiCNkVZzMsj3XDIaxNKI1XIqm6%2FkqKuLgJ5YNzvTVbSaGBAsoT%2FlbCFXYkm2lkPJB0zxu%2FDqKZy9hJiVb%2BNARs4YcVcpn2d%2FymbHbdyTuk6GIdx8Js1bdUUGduFsPE5ybUPNUFyOsX4r1M3xeck%2BmsGq4Urn34jqlB3DpB2EQxBesFj%2F7NDufeFq6xNa6q%2Bsyencx46nOh%2FG2wtfw3WwY0uM0ZllbLPd5IyOX90s%2Bu9c4kzph%2BjiwQF2UGkow2A216an1677Ei7TH5EvqGyS%2Bwpl4niz8Rq1nx5rDcB%2BlQ63%2BVTN%2BRTgniFM1vIwo%2B5Rnfgt01ei6tKjdoy844ataa3Hr5k5Sd1W1xouN%2BQLSwcP%2FGCMg%2B8c4AeAuYSXxBFGf9zdSzM4DRIgTnc%2FFW3EDwTc%2FBZJtHMeifbJ2zzLCyr5Mwkp%2FwwQY6pgFmRYpAyoFhfDK3HIoHV9KzZ9TLfS9w%2F4Dn%2FPt5IMuJJippkQsl7LBgrbS350%2F3f5Icj9N6eNLWyJM641nfDHduzGTQEnhyd32u0vPn4%2FOFRaNFr%2FchXv0YQige6cbv9VNtDV5JFOXP2R%2FVH5C%2FsZYVl16QoD1a%2Bar68HG9%2BVGQ5KcTnH0yIV1mQBz1mLLH2sHNomzeKl3FTPEeLTF3b6pdcOG1O%2B2P&X-Amz-Signature=c8fe580c378147cb9ee83e1cfc47461621f7c2777c99a826a14afc14e4abebe2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCB5YN5F%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDV2hj0nIug4%2F9ga4iBy0rxCe3gt9E0YJEHmTJBt6aZuAiBuVakow7Y9Mj%2BL%2F%2BnUrPU7TddHMuZ%2BdYVPorUNSIoVoCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTVnOWPiIy5tatm%2F0KtwDuZWcCZ5eFer49k9ZFdngT3oYAZjcpO9C%2BIukouVyzdamS2RcBTgjWG8lqUDVcf7bqXW91dPwsJ5L5Fwj77Xl0SpwkHraUg9xPP89LlBm%2FrMwyL3P6mlygjvWpEkaNX540ftRhwfBjM8lNcontdi35XoL%2Fa%2FEolqMdAewEN5aDga8JuwKXzvyGc2EdehkVoT6JvIS0jkE3Z1ZzEHiCNkVZzMsj3XDIaxNKI1XIqm6%2FkqKuLgJ5YNzvTVbSaGBAsoT%2FlbCFXYkm2lkPJB0zxu%2FDqKZy9hJiVb%2BNARs4YcVcpn2d%2FymbHbdyTuk6GIdx8Js1bdUUGduFsPE5ybUPNUFyOsX4r1M3xeck%2BmsGq4Urn34jqlB3DpB2EQxBesFj%2F7NDufeFq6xNa6q%2Bsyencx46nOh%2FG2wtfw3WwY0uM0ZllbLPd5IyOX90s%2Bu9c4kzph%2BjiwQF2UGkow2A216an1677Ei7TH5EvqGyS%2Bwpl4niz8Rq1nx5rDcB%2BlQ63%2BVTN%2BRTgniFM1vIwo%2B5Rnfgt01ei6tKjdoy844ataa3Hr5k5Sd1W1xouN%2BQLSwcP%2FGCMg%2B8c4AeAuYSXxBFGf9zdSzM4DRIgTnc%2FFW3EDwTc%2FBZJtHMeifbJ2zzLCyr5Mwkp%2FwwQY6pgFmRYpAyoFhfDK3HIoHV9KzZ9TLfS9w%2F4Dn%2FPt5IMuJJippkQsl7LBgrbS350%2F3f5Icj9N6eNLWyJM641nfDHduzGTQEnhyd32u0vPn4%2FOFRaNFr%2FchXv0YQige6cbv9VNtDV5JFOXP2R%2FVH5C%2FsZYVl16QoD1a%2Bar68HG9%2BVGQ5KcTnH0yIV1mQBz1mLLH2sHNomzeKl3FTPEeLTF3b6pdcOG1O%2B2P&X-Amz-Signature=b82d219c9d01064f834c9c264a0ada733a51006c07812ab5ea978c91b5bff3cc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCB5YN5F%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDV2hj0nIug4%2F9ga4iBy0rxCe3gt9E0YJEHmTJBt6aZuAiBuVakow7Y9Mj%2BL%2F%2BnUrPU7TddHMuZ%2BdYVPorUNSIoVoCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTVnOWPiIy5tatm%2F0KtwDuZWcCZ5eFer49k9ZFdngT3oYAZjcpO9C%2BIukouVyzdamS2RcBTgjWG8lqUDVcf7bqXW91dPwsJ5L5Fwj77Xl0SpwkHraUg9xPP89LlBm%2FrMwyL3P6mlygjvWpEkaNX540ftRhwfBjM8lNcontdi35XoL%2Fa%2FEolqMdAewEN5aDga8JuwKXzvyGc2EdehkVoT6JvIS0jkE3Z1ZzEHiCNkVZzMsj3XDIaxNKI1XIqm6%2FkqKuLgJ5YNzvTVbSaGBAsoT%2FlbCFXYkm2lkPJB0zxu%2FDqKZy9hJiVb%2BNARs4YcVcpn2d%2FymbHbdyTuk6GIdx8Js1bdUUGduFsPE5ybUPNUFyOsX4r1M3xeck%2BmsGq4Urn34jqlB3DpB2EQxBesFj%2F7NDufeFq6xNa6q%2Bsyencx46nOh%2FG2wtfw3WwY0uM0ZllbLPd5IyOX90s%2Bu9c4kzph%2BjiwQF2UGkow2A216an1677Ei7TH5EvqGyS%2Bwpl4niz8Rq1nx5rDcB%2BlQ63%2BVTN%2BRTgniFM1vIwo%2B5Rnfgt01ei6tKjdoy844ataa3Hr5k5Sd1W1xouN%2BQLSwcP%2FGCMg%2B8c4AeAuYSXxBFGf9zdSzM4DRIgTnc%2FFW3EDwTc%2FBZJtHMeifbJ2zzLCyr5Mwkp%2FwwQY6pgFmRYpAyoFhfDK3HIoHV9KzZ9TLfS9w%2F4Dn%2FPt5IMuJJippkQsl7LBgrbS350%2F3f5Icj9N6eNLWyJM641nfDHduzGTQEnhyd32u0vPn4%2FOFRaNFr%2FchXv0YQige6cbv9VNtDV5JFOXP2R%2FVH5C%2FsZYVl16QoD1a%2Bar68HG9%2BVGQ5KcTnH0yIV1mQBz1mLLH2sHNomzeKl3FTPEeLTF3b6pdcOG1O%2B2P&X-Amz-Signature=d961f9578a1e53c65b0cecfcb8595ba013f9c89ce8e5458cd7e9c9457561c418&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCB5YN5F%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDV2hj0nIug4%2F9ga4iBy0rxCe3gt9E0YJEHmTJBt6aZuAiBuVakow7Y9Mj%2BL%2F%2BnUrPU7TddHMuZ%2BdYVPorUNSIoVoCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTVnOWPiIy5tatm%2F0KtwDuZWcCZ5eFer49k9ZFdngT3oYAZjcpO9C%2BIukouVyzdamS2RcBTgjWG8lqUDVcf7bqXW91dPwsJ5L5Fwj77Xl0SpwkHraUg9xPP89LlBm%2FrMwyL3P6mlygjvWpEkaNX540ftRhwfBjM8lNcontdi35XoL%2Fa%2FEolqMdAewEN5aDga8JuwKXzvyGc2EdehkVoT6JvIS0jkE3Z1ZzEHiCNkVZzMsj3XDIaxNKI1XIqm6%2FkqKuLgJ5YNzvTVbSaGBAsoT%2FlbCFXYkm2lkPJB0zxu%2FDqKZy9hJiVb%2BNARs4YcVcpn2d%2FymbHbdyTuk6GIdx8Js1bdUUGduFsPE5ybUPNUFyOsX4r1M3xeck%2BmsGq4Urn34jqlB3DpB2EQxBesFj%2F7NDufeFq6xNa6q%2Bsyencx46nOh%2FG2wtfw3WwY0uM0ZllbLPd5IyOX90s%2Bu9c4kzph%2BjiwQF2UGkow2A216an1677Ei7TH5EvqGyS%2Bwpl4niz8Rq1nx5rDcB%2BlQ63%2BVTN%2BRTgniFM1vIwo%2B5Rnfgt01ei6tKjdoy844ataa3Hr5k5Sd1W1xouN%2BQLSwcP%2FGCMg%2B8c4AeAuYSXxBFGf9zdSzM4DRIgTnc%2FFW3EDwTc%2FBZJtHMeifbJ2zzLCyr5Mwkp%2FwwQY6pgFmRYpAyoFhfDK3HIoHV9KzZ9TLfS9w%2F4Dn%2FPt5IMuJJippkQsl7LBgrbS350%2F3f5Icj9N6eNLWyJM641nfDHduzGTQEnhyd32u0vPn4%2FOFRaNFr%2FchXv0YQige6cbv9VNtDV5JFOXP2R%2FVH5C%2FsZYVl16QoD1a%2Bar68HG9%2BVGQ5KcTnH0yIV1mQBz1mLLH2sHNomzeKl3FTPEeLTF3b6pdcOG1O%2B2P&X-Amz-Signature=5f4e2b80ae0292d5f8cdfa1f601b2120fe660a57fe85605dd6937cc11ac1eb81&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCB5YN5F%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDV2hj0nIug4%2F9ga4iBy0rxCe3gt9E0YJEHmTJBt6aZuAiBuVakow7Y9Mj%2BL%2F%2BnUrPU7TddHMuZ%2BdYVPorUNSIoVoCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTVnOWPiIy5tatm%2F0KtwDuZWcCZ5eFer49k9ZFdngT3oYAZjcpO9C%2BIukouVyzdamS2RcBTgjWG8lqUDVcf7bqXW91dPwsJ5L5Fwj77Xl0SpwkHraUg9xPP89LlBm%2FrMwyL3P6mlygjvWpEkaNX540ftRhwfBjM8lNcontdi35XoL%2Fa%2FEolqMdAewEN5aDga8JuwKXzvyGc2EdehkVoT6JvIS0jkE3Z1ZzEHiCNkVZzMsj3XDIaxNKI1XIqm6%2FkqKuLgJ5YNzvTVbSaGBAsoT%2FlbCFXYkm2lkPJB0zxu%2FDqKZy9hJiVb%2BNARs4YcVcpn2d%2FymbHbdyTuk6GIdx8Js1bdUUGduFsPE5ybUPNUFyOsX4r1M3xeck%2BmsGq4Urn34jqlB3DpB2EQxBesFj%2F7NDufeFq6xNa6q%2Bsyencx46nOh%2FG2wtfw3WwY0uM0ZllbLPd5IyOX90s%2Bu9c4kzph%2BjiwQF2UGkow2A216an1677Ei7TH5EvqGyS%2Bwpl4niz8Rq1nx5rDcB%2BlQ63%2BVTN%2BRTgniFM1vIwo%2B5Rnfgt01ei6tKjdoy844ataa3Hr5k5Sd1W1xouN%2BQLSwcP%2FGCMg%2B8c4AeAuYSXxBFGf9zdSzM4DRIgTnc%2FFW3EDwTc%2FBZJtHMeifbJ2zzLCyr5Mwkp%2FwwQY6pgFmRYpAyoFhfDK3HIoHV9KzZ9TLfS9w%2F4Dn%2FPt5IMuJJippkQsl7LBgrbS350%2F3f5Icj9N6eNLWyJM641nfDHduzGTQEnhyd32u0vPn4%2FOFRaNFr%2FchXv0YQige6cbv9VNtDV5JFOXP2R%2FVH5C%2FsZYVl16QoD1a%2Bar68HG9%2BVGQ5KcTnH0yIV1mQBz1mLLH2sHNomzeKl3FTPEeLTF3b6pdcOG1O%2B2P&X-Amz-Signature=75e6d0173f9e01fb12c6b0c455053dfa2c891cd951117e324184d7ef0bceb3cc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
