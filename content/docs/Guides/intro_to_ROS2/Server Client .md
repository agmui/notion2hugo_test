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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJ7GJ6V%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFxudGsS50dpAg0jFi1Z2xoLE1ZQD49IfpmwUKJm82oyAiBsjHZ2ZdGjI0rrnQxaD2ENmF%2Fz90sGDDv59eRx5vSKmCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMJsdSAgK5ZXUBk1tLKtwDL5GmYuTUO9RflU16TRpXjM1sRZu7pi7gm6rGfKBxyrizJyHrqexpW7W21wbW6FM1XSi5keDb06u7QrZF2kuKBSeTPt3gXbavMrehMXD0mn1%2BTvq2rhF9w5uLA3vIJHu52%2BM86laHqlk4zyaA4wHzN2oaUDrFSkEbcyXp1OcSyE26i4RYALQ9W4kfuz350ozY3zBuee3ryZHW5KsbTqI1ON4lniLrtJkCwaUrCZDHErrerfG5VGGqdqWyL6bsl%2FeqfXb98JEbQu3fK0gf93X%2BR1zJvtwnAaPA2L2ZnsbjmcqdqjzzPKtiB93xtSbgL8cgbHcdQQ3rDMX2tGglvaS2ObqdCy9P6X%2FzHbayk4P%2BoRSrxlkqkD7xcHa%2BgXyawZVgapnxN0HcOyuh7s9RmxsX5j2WIJ%2BeCy%2BnPnNtyixMXG4O4dvJGqtdErKQAxn5dH%2Bv2%2Bhocc55Od7dWFY5pHj%2BuLkFAaTbMh8JIJ9f2pCMxMzSPNw%2FkYPKgUg26YXjsW5GQCkk%2BEGKbY%2BLEaAlKSVaasc%2Fod7DXtVwxPK7HhwFn1D2ivYCLLtV41KX4TipOw3WVlry%2BGH1e3d%2BSBSQEnbASuA4qJgB%2B9Q8%2FQGVpraEmr1b2A3dBRIFZPfFtCAwz4X9wQY6pgEcjyd89c4kMmjkpt%2FQYYLFYNdPxg0sFEwrTSBzXYyZMWW5LTdJT8Tu3I%2BabZ5NzKAChoXqcErlSz5q1VBhxVcykxMsHqa1Q3cAIUTsyXDls4mkckJtLv4B%2FSD7CR2ZzKUGVke%2B1y5pzmeQUiwS4NcqE49HEl7O2gZpBDQPaTIFBlLAbIVHhvnt65k7knoyLd7RbDnjFyyYycZ0s932zMR3iEzo1JvV&X-Amz-Signature=733d923daf0d7623084751b9f7cc9e5a92c507a9e0d30663055cfc3535026814&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJ7GJ6V%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFxudGsS50dpAg0jFi1Z2xoLE1ZQD49IfpmwUKJm82oyAiBsjHZ2ZdGjI0rrnQxaD2ENmF%2Fz90sGDDv59eRx5vSKmCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMJsdSAgK5ZXUBk1tLKtwDL5GmYuTUO9RflU16TRpXjM1sRZu7pi7gm6rGfKBxyrizJyHrqexpW7W21wbW6FM1XSi5keDb06u7QrZF2kuKBSeTPt3gXbavMrehMXD0mn1%2BTvq2rhF9w5uLA3vIJHu52%2BM86laHqlk4zyaA4wHzN2oaUDrFSkEbcyXp1OcSyE26i4RYALQ9W4kfuz350ozY3zBuee3ryZHW5KsbTqI1ON4lniLrtJkCwaUrCZDHErrerfG5VGGqdqWyL6bsl%2FeqfXb98JEbQu3fK0gf93X%2BR1zJvtwnAaPA2L2ZnsbjmcqdqjzzPKtiB93xtSbgL8cgbHcdQQ3rDMX2tGglvaS2ObqdCy9P6X%2FzHbayk4P%2BoRSrxlkqkD7xcHa%2BgXyawZVgapnxN0HcOyuh7s9RmxsX5j2WIJ%2BeCy%2BnPnNtyixMXG4O4dvJGqtdErKQAxn5dH%2Bv2%2Bhocc55Od7dWFY5pHj%2BuLkFAaTbMh8JIJ9f2pCMxMzSPNw%2FkYPKgUg26YXjsW5GQCkk%2BEGKbY%2BLEaAlKSVaasc%2Fod7DXtVwxPK7HhwFn1D2ivYCLLtV41KX4TipOw3WVlry%2BGH1e3d%2BSBSQEnbASuA4qJgB%2B9Q8%2FQGVpraEmr1b2A3dBRIFZPfFtCAwz4X9wQY6pgEcjyd89c4kMmjkpt%2FQYYLFYNdPxg0sFEwrTSBzXYyZMWW5LTdJT8Tu3I%2BabZ5NzKAChoXqcErlSz5q1VBhxVcykxMsHqa1Q3cAIUTsyXDls4mkckJtLv4B%2FSD7CR2ZzKUGVke%2B1y5pzmeQUiwS4NcqE49HEl7O2gZpBDQPaTIFBlLAbIVHhvnt65k7knoyLd7RbDnjFyyYycZ0s932zMR3iEzo1JvV&X-Amz-Signature=91cac983bf44a5607bfe05750b5b7896453d51a9545f5939a68a49d4dea765fc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJ7GJ6V%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFxudGsS50dpAg0jFi1Z2xoLE1ZQD49IfpmwUKJm82oyAiBsjHZ2ZdGjI0rrnQxaD2ENmF%2Fz90sGDDv59eRx5vSKmCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMJsdSAgK5ZXUBk1tLKtwDL5GmYuTUO9RflU16TRpXjM1sRZu7pi7gm6rGfKBxyrizJyHrqexpW7W21wbW6FM1XSi5keDb06u7QrZF2kuKBSeTPt3gXbavMrehMXD0mn1%2BTvq2rhF9w5uLA3vIJHu52%2BM86laHqlk4zyaA4wHzN2oaUDrFSkEbcyXp1OcSyE26i4RYALQ9W4kfuz350ozY3zBuee3ryZHW5KsbTqI1ON4lniLrtJkCwaUrCZDHErrerfG5VGGqdqWyL6bsl%2FeqfXb98JEbQu3fK0gf93X%2BR1zJvtwnAaPA2L2ZnsbjmcqdqjzzPKtiB93xtSbgL8cgbHcdQQ3rDMX2tGglvaS2ObqdCy9P6X%2FzHbayk4P%2BoRSrxlkqkD7xcHa%2BgXyawZVgapnxN0HcOyuh7s9RmxsX5j2WIJ%2BeCy%2BnPnNtyixMXG4O4dvJGqtdErKQAxn5dH%2Bv2%2Bhocc55Od7dWFY5pHj%2BuLkFAaTbMh8JIJ9f2pCMxMzSPNw%2FkYPKgUg26YXjsW5GQCkk%2BEGKbY%2BLEaAlKSVaasc%2Fod7DXtVwxPK7HhwFn1D2ivYCLLtV41KX4TipOw3WVlry%2BGH1e3d%2BSBSQEnbASuA4qJgB%2B9Q8%2FQGVpraEmr1b2A3dBRIFZPfFtCAwz4X9wQY6pgEcjyd89c4kMmjkpt%2FQYYLFYNdPxg0sFEwrTSBzXYyZMWW5LTdJT8Tu3I%2BabZ5NzKAChoXqcErlSz5q1VBhxVcykxMsHqa1Q3cAIUTsyXDls4mkckJtLv4B%2FSD7CR2ZzKUGVke%2B1y5pzmeQUiwS4NcqE49HEl7O2gZpBDQPaTIFBlLAbIVHhvnt65k7knoyLd7RbDnjFyyYycZ0s932zMR3iEzo1JvV&X-Amz-Signature=d6e5a4af71bef204c2d636375e4695fe6c5a137332398c0455f0778cb63ef93b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJ7GJ6V%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFxudGsS50dpAg0jFi1Z2xoLE1ZQD49IfpmwUKJm82oyAiBsjHZ2ZdGjI0rrnQxaD2ENmF%2Fz90sGDDv59eRx5vSKmCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMJsdSAgK5ZXUBk1tLKtwDL5GmYuTUO9RflU16TRpXjM1sRZu7pi7gm6rGfKBxyrizJyHrqexpW7W21wbW6FM1XSi5keDb06u7QrZF2kuKBSeTPt3gXbavMrehMXD0mn1%2BTvq2rhF9w5uLA3vIJHu52%2BM86laHqlk4zyaA4wHzN2oaUDrFSkEbcyXp1OcSyE26i4RYALQ9W4kfuz350ozY3zBuee3ryZHW5KsbTqI1ON4lniLrtJkCwaUrCZDHErrerfG5VGGqdqWyL6bsl%2FeqfXb98JEbQu3fK0gf93X%2BR1zJvtwnAaPA2L2ZnsbjmcqdqjzzPKtiB93xtSbgL8cgbHcdQQ3rDMX2tGglvaS2ObqdCy9P6X%2FzHbayk4P%2BoRSrxlkqkD7xcHa%2BgXyawZVgapnxN0HcOyuh7s9RmxsX5j2WIJ%2BeCy%2BnPnNtyixMXG4O4dvJGqtdErKQAxn5dH%2Bv2%2Bhocc55Od7dWFY5pHj%2BuLkFAaTbMh8JIJ9f2pCMxMzSPNw%2FkYPKgUg26YXjsW5GQCkk%2BEGKbY%2BLEaAlKSVaasc%2Fod7DXtVwxPK7HhwFn1D2ivYCLLtV41KX4TipOw3WVlry%2BGH1e3d%2BSBSQEnbASuA4qJgB%2B9Q8%2FQGVpraEmr1b2A3dBRIFZPfFtCAwz4X9wQY6pgEcjyd89c4kMmjkpt%2FQYYLFYNdPxg0sFEwrTSBzXYyZMWW5LTdJT8Tu3I%2BabZ5NzKAChoXqcErlSz5q1VBhxVcykxMsHqa1Q3cAIUTsyXDls4mkckJtLv4B%2FSD7CR2ZzKUGVke%2B1y5pzmeQUiwS4NcqE49HEl7O2gZpBDQPaTIFBlLAbIVHhvnt65k7knoyLd7RbDnjFyyYycZ0s932zMR3iEzo1JvV&X-Amz-Signature=415b17b052adc05b6ed406f2d706b884d461fc05997aafa8cfe98ff624493b8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJ7GJ6V%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFxudGsS50dpAg0jFi1Z2xoLE1ZQD49IfpmwUKJm82oyAiBsjHZ2ZdGjI0rrnQxaD2ENmF%2Fz90sGDDv59eRx5vSKmCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMJsdSAgK5ZXUBk1tLKtwDL5GmYuTUO9RflU16TRpXjM1sRZu7pi7gm6rGfKBxyrizJyHrqexpW7W21wbW6FM1XSi5keDb06u7QrZF2kuKBSeTPt3gXbavMrehMXD0mn1%2BTvq2rhF9w5uLA3vIJHu52%2BM86laHqlk4zyaA4wHzN2oaUDrFSkEbcyXp1OcSyE26i4RYALQ9W4kfuz350ozY3zBuee3ryZHW5KsbTqI1ON4lniLrtJkCwaUrCZDHErrerfG5VGGqdqWyL6bsl%2FeqfXb98JEbQu3fK0gf93X%2BR1zJvtwnAaPA2L2ZnsbjmcqdqjzzPKtiB93xtSbgL8cgbHcdQQ3rDMX2tGglvaS2ObqdCy9P6X%2FzHbayk4P%2BoRSrxlkqkD7xcHa%2BgXyawZVgapnxN0HcOyuh7s9RmxsX5j2WIJ%2BeCy%2BnPnNtyixMXG4O4dvJGqtdErKQAxn5dH%2Bv2%2Bhocc55Od7dWFY5pHj%2BuLkFAaTbMh8JIJ9f2pCMxMzSPNw%2FkYPKgUg26YXjsW5GQCkk%2BEGKbY%2BLEaAlKSVaasc%2Fod7DXtVwxPK7HhwFn1D2ivYCLLtV41KX4TipOw3WVlry%2BGH1e3d%2BSBSQEnbASuA4qJgB%2B9Q8%2FQGVpraEmr1b2A3dBRIFZPfFtCAwz4X9wQY6pgEcjyd89c4kMmjkpt%2FQYYLFYNdPxg0sFEwrTSBzXYyZMWW5LTdJT8Tu3I%2BabZ5NzKAChoXqcErlSz5q1VBhxVcykxMsHqa1Q3cAIUTsyXDls4mkckJtLv4B%2FSD7CR2ZzKUGVke%2B1y5pzmeQUiwS4NcqE49HEl7O2gZpBDQPaTIFBlLAbIVHhvnt65k7knoyLd7RbDnjFyyYycZ0s932zMR3iEzo1JvV&X-Amz-Signature=c356d383395aa42ec74e2732de960792f7230b48490c91163abdef073f39fc72&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
