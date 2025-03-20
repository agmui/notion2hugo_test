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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4B2XYK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEvXCfPr9aPSRqTSaqQFht8BDswjlbpnroaQ%2BcAWaWESAiAA4UcV2WcFcMmk%2Bxp0AVBv9LBZlJGKranZyqUZ4xzC8SqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCB7PLbECYdnynw3uKtwD3zxjYGJ%2FJqTpgY1t6GbyML23G6yZpSP14kzztwiOgIIjT5tbT7ewxSDeL0%2Bcjp4leEj2v9DXDXO5%2BAAcQii%2BvxP7WCMtu9ITWoOcG33ZkvU1%2FmMW4ThJadzXhMMBJpwgifYRyzdeS8wRjio%2BaMa0tzZHZyVF9BHVe53oTSyjcfZLTNkD3ErDhlX3Go1l4HDs8Sc9mChBARS%2FqiMfMMMAMGaeojF39RXFoemYpaBVTj2ovzA0fIiTGrcNryiM8j71AgDgrK9kzrZO4Tgq7aqmm%2F6ZjDHdMSwRTEyQjeU6OwPlD40pEpNzJmZK21caF1VZIPqs9xjQLHsn9SI2MKgLfGd4exFczUvQhJEX70ddMRN6%2FX7Tm7GztEJjWHu35u2uq%2FTrI9G3YTWIn%2BUPA90Y212nQDkNQcn%2B433Wi1SMIgMlP69SjiJrgGsZy0N77SLjtm%2FojlaYclHFKWOAqK89MHbNxWFbD6aGB9vKmbk%2F7xtZ9CQLwl%2BSjEHRjPtY6OSJOCL3KmfKRNaInrOD3yO3dfacO1yreY7yqf9qUqUmg4ZwCr7P0M31xoD2S0I1kXUXGmEvLlImL%2BfBWeai5vD9Q5lR5w7m2pzgCuXGp8EgxSs4YALnEBWj%2F3pT1iUw06buvgY6pgFRITltM2dQ%2BJuoBnktAJ6NYU0Uw3BjAmemN4Mz2cGg0Q3FIOasQ3TxHHhPiwdOxT%2FqHadoB4pfj4o4uQEZcmPmGQUP3XdkiBpjRe50ZodSKE7xahgmf1FyiCgIPwH5djCEdl%2B6MEF%2BTT87qtYIbuEcthXMuJkdhPlQMtjZxqZxSFBOL3y32xMQ6TDOKtoDCMRfgECFf4Bf1rFGczEDMJ2qD1cYpB%2FS&X-Amz-Signature=2900caf87927600d2752467b45dd12300247cabcc64337e546fb27d51893cac0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4B2XYK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEvXCfPr9aPSRqTSaqQFht8BDswjlbpnroaQ%2BcAWaWESAiAA4UcV2WcFcMmk%2Bxp0AVBv9LBZlJGKranZyqUZ4xzC8SqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCB7PLbECYdnynw3uKtwD3zxjYGJ%2FJqTpgY1t6GbyML23G6yZpSP14kzztwiOgIIjT5tbT7ewxSDeL0%2Bcjp4leEj2v9DXDXO5%2BAAcQii%2BvxP7WCMtu9ITWoOcG33ZkvU1%2FmMW4ThJadzXhMMBJpwgifYRyzdeS8wRjio%2BaMa0tzZHZyVF9BHVe53oTSyjcfZLTNkD3ErDhlX3Go1l4HDs8Sc9mChBARS%2FqiMfMMMAMGaeojF39RXFoemYpaBVTj2ovzA0fIiTGrcNryiM8j71AgDgrK9kzrZO4Tgq7aqmm%2F6ZjDHdMSwRTEyQjeU6OwPlD40pEpNzJmZK21caF1VZIPqs9xjQLHsn9SI2MKgLfGd4exFczUvQhJEX70ddMRN6%2FX7Tm7GztEJjWHu35u2uq%2FTrI9G3YTWIn%2BUPA90Y212nQDkNQcn%2B433Wi1SMIgMlP69SjiJrgGsZy0N77SLjtm%2FojlaYclHFKWOAqK89MHbNxWFbD6aGB9vKmbk%2F7xtZ9CQLwl%2BSjEHRjPtY6OSJOCL3KmfKRNaInrOD3yO3dfacO1yreY7yqf9qUqUmg4ZwCr7P0M31xoD2S0I1kXUXGmEvLlImL%2BfBWeai5vD9Q5lR5w7m2pzgCuXGp8EgxSs4YALnEBWj%2F3pT1iUw06buvgY6pgFRITltM2dQ%2BJuoBnktAJ6NYU0Uw3BjAmemN4Mz2cGg0Q3FIOasQ3TxHHhPiwdOxT%2FqHadoB4pfj4o4uQEZcmPmGQUP3XdkiBpjRe50ZodSKE7xahgmf1FyiCgIPwH5djCEdl%2B6MEF%2BTT87qtYIbuEcthXMuJkdhPlQMtjZxqZxSFBOL3y32xMQ6TDOKtoDCMRfgECFf4Bf1rFGczEDMJ2qD1cYpB%2FS&X-Amz-Signature=3ae495434a81ed1d5db7e8deb5e18afe4d8f4f0fd42d4a741f9809cac60faa1b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4B2XYK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEvXCfPr9aPSRqTSaqQFht8BDswjlbpnroaQ%2BcAWaWESAiAA4UcV2WcFcMmk%2Bxp0AVBv9LBZlJGKranZyqUZ4xzC8SqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCB7PLbECYdnynw3uKtwD3zxjYGJ%2FJqTpgY1t6GbyML23G6yZpSP14kzztwiOgIIjT5tbT7ewxSDeL0%2Bcjp4leEj2v9DXDXO5%2BAAcQii%2BvxP7WCMtu9ITWoOcG33ZkvU1%2FmMW4ThJadzXhMMBJpwgifYRyzdeS8wRjio%2BaMa0tzZHZyVF9BHVe53oTSyjcfZLTNkD3ErDhlX3Go1l4HDs8Sc9mChBARS%2FqiMfMMMAMGaeojF39RXFoemYpaBVTj2ovzA0fIiTGrcNryiM8j71AgDgrK9kzrZO4Tgq7aqmm%2F6ZjDHdMSwRTEyQjeU6OwPlD40pEpNzJmZK21caF1VZIPqs9xjQLHsn9SI2MKgLfGd4exFczUvQhJEX70ddMRN6%2FX7Tm7GztEJjWHu35u2uq%2FTrI9G3YTWIn%2BUPA90Y212nQDkNQcn%2B433Wi1SMIgMlP69SjiJrgGsZy0N77SLjtm%2FojlaYclHFKWOAqK89MHbNxWFbD6aGB9vKmbk%2F7xtZ9CQLwl%2BSjEHRjPtY6OSJOCL3KmfKRNaInrOD3yO3dfacO1yreY7yqf9qUqUmg4ZwCr7P0M31xoD2S0I1kXUXGmEvLlImL%2BfBWeai5vD9Q5lR5w7m2pzgCuXGp8EgxSs4YALnEBWj%2F3pT1iUw06buvgY6pgFRITltM2dQ%2BJuoBnktAJ6NYU0Uw3BjAmemN4Mz2cGg0Q3FIOasQ3TxHHhPiwdOxT%2FqHadoB4pfj4o4uQEZcmPmGQUP3XdkiBpjRe50ZodSKE7xahgmf1FyiCgIPwH5djCEdl%2B6MEF%2BTT87qtYIbuEcthXMuJkdhPlQMtjZxqZxSFBOL3y32xMQ6TDOKtoDCMRfgECFf4Bf1rFGczEDMJ2qD1cYpB%2FS&X-Amz-Signature=d427ad58adf73d292871674f1d0b38fed53f7c5dc407e7fad2bf0346a99c7aba&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4B2XYK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEvXCfPr9aPSRqTSaqQFht8BDswjlbpnroaQ%2BcAWaWESAiAA4UcV2WcFcMmk%2Bxp0AVBv9LBZlJGKranZyqUZ4xzC8SqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCB7PLbECYdnynw3uKtwD3zxjYGJ%2FJqTpgY1t6GbyML23G6yZpSP14kzztwiOgIIjT5tbT7ewxSDeL0%2Bcjp4leEj2v9DXDXO5%2BAAcQii%2BvxP7WCMtu9ITWoOcG33ZkvU1%2FmMW4ThJadzXhMMBJpwgifYRyzdeS8wRjio%2BaMa0tzZHZyVF9BHVe53oTSyjcfZLTNkD3ErDhlX3Go1l4HDs8Sc9mChBARS%2FqiMfMMMAMGaeojF39RXFoemYpaBVTj2ovzA0fIiTGrcNryiM8j71AgDgrK9kzrZO4Tgq7aqmm%2F6ZjDHdMSwRTEyQjeU6OwPlD40pEpNzJmZK21caF1VZIPqs9xjQLHsn9SI2MKgLfGd4exFczUvQhJEX70ddMRN6%2FX7Tm7GztEJjWHu35u2uq%2FTrI9G3YTWIn%2BUPA90Y212nQDkNQcn%2B433Wi1SMIgMlP69SjiJrgGsZy0N77SLjtm%2FojlaYclHFKWOAqK89MHbNxWFbD6aGB9vKmbk%2F7xtZ9CQLwl%2BSjEHRjPtY6OSJOCL3KmfKRNaInrOD3yO3dfacO1yreY7yqf9qUqUmg4ZwCr7P0M31xoD2S0I1kXUXGmEvLlImL%2BfBWeai5vD9Q5lR5w7m2pzgCuXGp8EgxSs4YALnEBWj%2F3pT1iUw06buvgY6pgFRITltM2dQ%2BJuoBnktAJ6NYU0Uw3BjAmemN4Mz2cGg0Q3FIOasQ3TxHHhPiwdOxT%2FqHadoB4pfj4o4uQEZcmPmGQUP3XdkiBpjRe50ZodSKE7xahgmf1FyiCgIPwH5djCEdl%2B6MEF%2BTT87qtYIbuEcthXMuJkdhPlQMtjZxqZxSFBOL3y32xMQ6TDOKtoDCMRfgECFf4Bf1rFGczEDMJ2qD1cYpB%2FS&X-Amz-Signature=72dbb099f5f3b7da2bc8bde611bc32c44fe02ed1675a62a64deaff6fc10df984&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4B2XYK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEvXCfPr9aPSRqTSaqQFht8BDswjlbpnroaQ%2BcAWaWESAiAA4UcV2WcFcMmk%2Bxp0AVBv9LBZlJGKranZyqUZ4xzC8SqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCB7PLbECYdnynw3uKtwD3zxjYGJ%2FJqTpgY1t6GbyML23G6yZpSP14kzztwiOgIIjT5tbT7ewxSDeL0%2Bcjp4leEj2v9DXDXO5%2BAAcQii%2BvxP7WCMtu9ITWoOcG33ZkvU1%2FmMW4ThJadzXhMMBJpwgifYRyzdeS8wRjio%2BaMa0tzZHZyVF9BHVe53oTSyjcfZLTNkD3ErDhlX3Go1l4HDs8Sc9mChBARS%2FqiMfMMMAMGaeojF39RXFoemYpaBVTj2ovzA0fIiTGrcNryiM8j71AgDgrK9kzrZO4Tgq7aqmm%2F6ZjDHdMSwRTEyQjeU6OwPlD40pEpNzJmZK21caF1VZIPqs9xjQLHsn9SI2MKgLfGd4exFczUvQhJEX70ddMRN6%2FX7Tm7GztEJjWHu35u2uq%2FTrI9G3YTWIn%2BUPA90Y212nQDkNQcn%2B433Wi1SMIgMlP69SjiJrgGsZy0N77SLjtm%2FojlaYclHFKWOAqK89MHbNxWFbD6aGB9vKmbk%2F7xtZ9CQLwl%2BSjEHRjPtY6OSJOCL3KmfKRNaInrOD3yO3dfacO1yreY7yqf9qUqUmg4ZwCr7P0M31xoD2S0I1kXUXGmEvLlImL%2BfBWeai5vD9Q5lR5w7m2pzgCuXGp8EgxSs4YALnEBWj%2F3pT1iUw06buvgY6pgFRITltM2dQ%2BJuoBnktAJ6NYU0Uw3BjAmemN4Mz2cGg0Q3FIOasQ3TxHHhPiwdOxT%2FqHadoB4pfj4o4uQEZcmPmGQUP3XdkiBpjRe50ZodSKE7xahgmf1FyiCgIPwH5djCEdl%2B6MEF%2BTT87qtYIbuEcthXMuJkdhPlQMtjZxqZxSFBOL3y32xMQ6TDOKtoDCMRfgECFf4Bf1rFGczEDMJ2qD1cYpB%2FS&X-Amz-Signature=5cef1fd0eb6c6d90b8b72a2f49c8ec1d1e5c22d8e51df1e3e902199e21ff475e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
