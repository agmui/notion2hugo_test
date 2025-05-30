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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWRSRYRR%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQAyTJiKazPDKrLiYShtyij4XuMj9jZUNEPO2n5b1v0AiAXGt7KozQ3FpgI5cKzsDsgmrB4hjtP9rOYJpv%2FAaoXdiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSE2IK9yUnpbTAjCgKtwDC0e1lszgACsKq2m%2FjgfUPYxy%2BA6YjgRtk8p%2FoEarA0p8R23R9%2B11jVO7TYdz4suqAFEFIdJeLsNujl1wVGDOMTxIYmquiQTAo33xTzTJP2Q%2FDgpzQycsxcHp%2BKBCQuvlChceGC%2B2vb6c%2BjtFcS%2BPQS487cumTCwZWK16GUKrvGATgLFfrLnWSPysRbmQYhP%2B2%2F1XeEpKsXVsMJQbMN%2F9oH1ct%2FzmLGB4rFjH3hd0AV0eEHIFdlD05SZQY79IX5PyBZkn9biUut4Beu8muZ4wGWNpbQjQiwq1T%2Fwdes9alIaHAq70GMpIq0A3Y0x3LGY2%2FN%2BxMpz9pL83F3ju2wTFhJDr6GA8pdhApIHc0eXEL9nTEzBg5cmZBbP1JIOUD35YS2U1S%2BZXqCQlIZNuUymT%2F0kgtQszSgQktlCAcsHB980%2FzF70PZJHXl9sZ9DUz2BBuujCTuo9m25T%2BlPdhOv6ajaRMhj02AoRBZNURb9oWSaintGCtWjHpqEiqyYKW4HqIi5PfPzcAoQpJ9mXhBZR6O6hE3nzkUzIVHZsVqIpMPNh4PpBXUwsYzELHNFC5DKZYzXpgZ6HOLOc29EkMC%2F4EWdSXEILxePJi27fvROlahdruDXWxZl5s4DB0gAwzc%2FmwQY6pgFalgs9D%2F0nAJFvBlbGbeOrC2onUFs7w8DaVI2OAng1EpHTAvUQ4I12nvj4uXPGU1XhLFcXoLomB9UCq3WLw5tLzWJM6bqC5HhKdWZQrMXsQlAAEXRHIWuX4tPEXsQMgLofi0EKIQ829ozecIDf7Fxw27ptu6rFvhnXHQveWFDbW7iZ8aJ2WaOLI4mnsBiBKgDjeNks6m2%2FkC7tnKb5nzbglcfddx4%2B&X-Amz-Signature=72b1790d8af7bca96ea5abe8802730057bd9d5e97c6d51150dc4015498220940&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWRSRYRR%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQAyTJiKazPDKrLiYShtyij4XuMj9jZUNEPO2n5b1v0AiAXGt7KozQ3FpgI5cKzsDsgmrB4hjtP9rOYJpv%2FAaoXdiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSE2IK9yUnpbTAjCgKtwDC0e1lszgACsKq2m%2FjgfUPYxy%2BA6YjgRtk8p%2FoEarA0p8R23R9%2B11jVO7TYdz4suqAFEFIdJeLsNujl1wVGDOMTxIYmquiQTAo33xTzTJP2Q%2FDgpzQycsxcHp%2BKBCQuvlChceGC%2B2vb6c%2BjtFcS%2BPQS487cumTCwZWK16GUKrvGATgLFfrLnWSPysRbmQYhP%2B2%2F1XeEpKsXVsMJQbMN%2F9oH1ct%2FzmLGB4rFjH3hd0AV0eEHIFdlD05SZQY79IX5PyBZkn9biUut4Beu8muZ4wGWNpbQjQiwq1T%2Fwdes9alIaHAq70GMpIq0A3Y0x3LGY2%2FN%2BxMpz9pL83F3ju2wTFhJDr6GA8pdhApIHc0eXEL9nTEzBg5cmZBbP1JIOUD35YS2U1S%2BZXqCQlIZNuUymT%2F0kgtQszSgQktlCAcsHB980%2FzF70PZJHXl9sZ9DUz2BBuujCTuo9m25T%2BlPdhOv6ajaRMhj02AoRBZNURb9oWSaintGCtWjHpqEiqyYKW4HqIi5PfPzcAoQpJ9mXhBZR6O6hE3nzkUzIVHZsVqIpMPNh4PpBXUwsYzELHNFC5DKZYzXpgZ6HOLOc29EkMC%2F4EWdSXEILxePJi27fvROlahdruDXWxZl5s4DB0gAwzc%2FmwQY6pgFalgs9D%2F0nAJFvBlbGbeOrC2onUFs7w8DaVI2OAng1EpHTAvUQ4I12nvj4uXPGU1XhLFcXoLomB9UCq3WLw5tLzWJM6bqC5HhKdWZQrMXsQlAAEXRHIWuX4tPEXsQMgLofi0EKIQ829ozecIDf7Fxw27ptu6rFvhnXHQveWFDbW7iZ8aJ2WaOLI4mnsBiBKgDjeNks6m2%2FkC7tnKb5nzbglcfddx4%2B&X-Amz-Signature=6a1ed10e0f5f9e6325a32b96a29a2b9e2cd8722f8ecdab7f77ee88bdbc48a932&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWRSRYRR%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQAyTJiKazPDKrLiYShtyij4XuMj9jZUNEPO2n5b1v0AiAXGt7KozQ3FpgI5cKzsDsgmrB4hjtP9rOYJpv%2FAaoXdiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSE2IK9yUnpbTAjCgKtwDC0e1lszgACsKq2m%2FjgfUPYxy%2BA6YjgRtk8p%2FoEarA0p8R23R9%2B11jVO7TYdz4suqAFEFIdJeLsNujl1wVGDOMTxIYmquiQTAo33xTzTJP2Q%2FDgpzQycsxcHp%2BKBCQuvlChceGC%2B2vb6c%2BjtFcS%2BPQS487cumTCwZWK16GUKrvGATgLFfrLnWSPysRbmQYhP%2B2%2F1XeEpKsXVsMJQbMN%2F9oH1ct%2FzmLGB4rFjH3hd0AV0eEHIFdlD05SZQY79IX5PyBZkn9biUut4Beu8muZ4wGWNpbQjQiwq1T%2Fwdes9alIaHAq70GMpIq0A3Y0x3LGY2%2FN%2BxMpz9pL83F3ju2wTFhJDr6GA8pdhApIHc0eXEL9nTEzBg5cmZBbP1JIOUD35YS2U1S%2BZXqCQlIZNuUymT%2F0kgtQszSgQktlCAcsHB980%2FzF70PZJHXl9sZ9DUz2BBuujCTuo9m25T%2BlPdhOv6ajaRMhj02AoRBZNURb9oWSaintGCtWjHpqEiqyYKW4HqIi5PfPzcAoQpJ9mXhBZR6O6hE3nzkUzIVHZsVqIpMPNh4PpBXUwsYzELHNFC5DKZYzXpgZ6HOLOc29EkMC%2F4EWdSXEILxePJi27fvROlahdruDXWxZl5s4DB0gAwzc%2FmwQY6pgFalgs9D%2F0nAJFvBlbGbeOrC2onUFs7w8DaVI2OAng1EpHTAvUQ4I12nvj4uXPGU1XhLFcXoLomB9UCq3WLw5tLzWJM6bqC5HhKdWZQrMXsQlAAEXRHIWuX4tPEXsQMgLofi0EKIQ829ozecIDf7Fxw27ptu6rFvhnXHQveWFDbW7iZ8aJ2WaOLI4mnsBiBKgDjeNks6m2%2FkC7tnKb5nzbglcfddx4%2B&X-Amz-Signature=b7fc491469a5e2880ccb4936ec94b0a880c45502a3b8f3217d72c17ca297c821&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWRSRYRR%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQAyTJiKazPDKrLiYShtyij4XuMj9jZUNEPO2n5b1v0AiAXGt7KozQ3FpgI5cKzsDsgmrB4hjtP9rOYJpv%2FAaoXdiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSE2IK9yUnpbTAjCgKtwDC0e1lszgACsKq2m%2FjgfUPYxy%2BA6YjgRtk8p%2FoEarA0p8R23R9%2B11jVO7TYdz4suqAFEFIdJeLsNujl1wVGDOMTxIYmquiQTAo33xTzTJP2Q%2FDgpzQycsxcHp%2BKBCQuvlChceGC%2B2vb6c%2BjtFcS%2BPQS487cumTCwZWK16GUKrvGATgLFfrLnWSPysRbmQYhP%2B2%2F1XeEpKsXVsMJQbMN%2F9oH1ct%2FzmLGB4rFjH3hd0AV0eEHIFdlD05SZQY79IX5PyBZkn9biUut4Beu8muZ4wGWNpbQjQiwq1T%2Fwdes9alIaHAq70GMpIq0A3Y0x3LGY2%2FN%2BxMpz9pL83F3ju2wTFhJDr6GA8pdhApIHc0eXEL9nTEzBg5cmZBbP1JIOUD35YS2U1S%2BZXqCQlIZNuUymT%2F0kgtQszSgQktlCAcsHB980%2FzF70PZJHXl9sZ9DUz2BBuujCTuo9m25T%2BlPdhOv6ajaRMhj02AoRBZNURb9oWSaintGCtWjHpqEiqyYKW4HqIi5PfPzcAoQpJ9mXhBZR6O6hE3nzkUzIVHZsVqIpMPNh4PpBXUwsYzELHNFC5DKZYzXpgZ6HOLOc29EkMC%2F4EWdSXEILxePJi27fvROlahdruDXWxZl5s4DB0gAwzc%2FmwQY6pgFalgs9D%2F0nAJFvBlbGbeOrC2onUFs7w8DaVI2OAng1EpHTAvUQ4I12nvj4uXPGU1XhLFcXoLomB9UCq3WLw5tLzWJM6bqC5HhKdWZQrMXsQlAAEXRHIWuX4tPEXsQMgLofi0EKIQ829ozecIDf7Fxw27ptu6rFvhnXHQveWFDbW7iZ8aJ2WaOLI4mnsBiBKgDjeNks6m2%2FkC7tnKb5nzbglcfddx4%2B&X-Amz-Signature=aee4b9cab554c4a5a0e0d1fe75a871e1503211c4ba392997a0e427cf691fad09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWRSRYRR%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQAyTJiKazPDKrLiYShtyij4XuMj9jZUNEPO2n5b1v0AiAXGt7KozQ3FpgI5cKzsDsgmrB4hjtP9rOYJpv%2FAaoXdiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSE2IK9yUnpbTAjCgKtwDC0e1lszgACsKq2m%2FjgfUPYxy%2BA6YjgRtk8p%2FoEarA0p8R23R9%2B11jVO7TYdz4suqAFEFIdJeLsNujl1wVGDOMTxIYmquiQTAo33xTzTJP2Q%2FDgpzQycsxcHp%2BKBCQuvlChceGC%2B2vb6c%2BjtFcS%2BPQS487cumTCwZWK16GUKrvGATgLFfrLnWSPysRbmQYhP%2B2%2F1XeEpKsXVsMJQbMN%2F9oH1ct%2FzmLGB4rFjH3hd0AV0eEHIFdlD05SZQY79IX5PyBZkn9biUut4Beu8muZ4wGWNpbQjQiwq1T%2Fwdes9alIaHAq70GMpIq0A3Y0x3LGY2%2FN%2BxMpz9pL83F3ju2wTFhJDr6GA8pdhApIHc0eXEL9nTEzBg5cmZBbP1JIOUD35YS2U1S%2BZXqCQlIZNuUymT%2F0kgtQszSgQktlCAcsHB980%2FzF70PZJHXl9sZ9DUz2BBuujCTuo9m25T%2BlPdhOv6ajaRMhj02AoRBZNURb9oWSaintGCtWjHpqEiqyYKW4HqIi5PfPzcAoQpJ9mXhBZR6O6hE3nzkUzIVHZsVqIpMPNh4PpBXUwsYzELHNFC5DKZYzXpgZ6HOLOc29EkMC%2F4EWdSXEILxePJi27fvROlahdruDXWxZl5s4DB0gAwzc%2FmwQY6pgFalgs9D%2F0nAJFvBlbGbeOrC2onUFs7w8DaVI2OAng1EpHTAvUQ4I12nvj4uXPGU1XhLFcXoLomB9UCq3WLw5tLzWJM6bqC5HhKdWZQrMXsQlAAEXRHIWuX4tPEXsQMgLofi0EKIQ829ozecIDf7Fxw27ptu6rFvhnXHQveWFDbW7iZ8aJ2WaOLI4mnsBiBKgDjeNks6m2%2FkC7tnKb5nzbglcfddx4%2B&X-Amz-Signature=b6216d33788db3a4abeb1761f08465a8896d47804d18967bb4405f4cab760f54&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
