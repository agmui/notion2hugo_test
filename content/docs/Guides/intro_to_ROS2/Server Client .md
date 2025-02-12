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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AN2RAMC%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBs%2Fws1yD0OyOhwNq3MeLv8W1jmCHtMJ%2BnMCrxtjPyrkAiBOTt8e6h%2Bc1yLMyIxosxCCbaLXbIFqVh93UHSk60AdMiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1hN9rrGRr9ctVfPvKtwDTOETumKEQiCeYX973GK9ZtTzP%2FubJEiVlIFwAmFkuR5QazZVS6x1BxLZfMIyEpkW4HMEryJZYbY5ixxsbFK5BA29Otsa1fp4oDveGOQJP57J396yhr4wgiurk2aPdc64gd5GAeAKYFn3r8lBHZHbcJM%2BKFHbqM3swOiyGth7Vjsi1nrftldfhDEEzNvl5LDoy722scHs32T1lrLwSGBEgVa%2FJSvIYDBIuGUy6b9KAdEwt0%2BWn5afateWIv6hqGZU673LSQrZCbKQt8nXmyrhrD02L5A03vyMNtMh8KIOnDa0xkmZVw0pz%2BQWN%2F311m50tUQxREl1FVy7Xz%2FRqbUgVUnzCTMK9Qmtu4%2F5nOBfCKY5wzYADrUHABLOfKt4q0fjGDUsHYhLNtqlbn0x47Fdj2Oci21k%2Bc7x9vjdx2FuO5VT0urQ%2BrjnbD3h%2FcTutNYGDKvJAMH0OrYVMTNozM1wUUUaMgBv5VUtL1kehJd3G3dwL%2FHXpt%2BVFImTaTZ4IG5sIUI%2B4M7zeH8s0SynU5ruirMhGI9L7g7AkC7soSkuP8dp8ey8Xgyp20KRXvUFDpayEJsU5Vs1exOuaVfIE8AIJLFT1S4QkvM5n2Q9cCdre25JtxnE6Ixh3NmFyyEwkK%2ByvQY6pgGfXgYy3uSrZ2iFbx03ZOBcHBs3nPvbuBFiSRYBrQu8YyxPt4NZbDb5c9XiC1z8GAC9zC0vfjRU%2FMghDaY%2F0K0q%2BiSkO3gP%2Bpvd1sQuxnEou0yuvsOas3uQhQVt7RKNfVQt%2FIoh%2BQfMZU7N0vOxmrAeZm3u57uMVDAglPP6Yt1QUBPmU5t9KIJ0B%2B5KsWB9z0bzTHt1pSKUzoZYYEOOTCw1jYXtN3zx&X-Amz-Signature=36d634fef0e53e524b82265ba5ba2f1a1cf0636319529f18f08749ddcc24f164&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AN2RAMC%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBs%2Fws1yD0OyOhwNq3MeLv8W1jmCHtMJ%2BnMCrxtjPyrkAiBOTt8e6h%2Bc1yLMyIxosxCCbaLXbIFqVh93UHSk60AdMiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1hN9rrGRr9ctVfPvKtwDTOETumKEQiCeYX973GK9ZtTzP%2FubJEiVlIFwAmFkuR5QazZVS6x1BxLZfMIyEpkW4HMEryJZYbY5ixxsbFK5BA29Otsa1fp4oDveGOQJP57J396yhr4wgiurk2aPdc64gd5GAeAKYFn3r8lBHZHbcJM%2BKFHbqM3swOiyGth7Vjsi1nrftldfhDEEzNvl5LDoy722scHs32T1lrLwSGBEgVa%2FJSvIYDBIuGUy6b9KAdEwt0%2BWn5afateWIv6hqGZU673LSQrZCbKQt8nXmyrhrD02L5A03vyMNtMh8KIOnDa0xkmZVw0pz%2BQWN%2F311m50tUQxREl1FVy7Xz%2FRqbUgVUnzCTMK9Qmtu4%2F5nOBfCKY5wzYADrUHABLOfKt4q0fjGDUsHYhLNtqlbn0x47Fdj2Oci21k%2Bc7x9vjdx2FuO5VT0urQ%2BrjnbD3h%2FcTutNYGDKvJAMH0OrYVMTNozM1wUUUaMgBv5VUtL1kehJd3G3dwL%2FHXpt%2BVFImTaTZ4IG5sIUI%2B4M7zeH8s0SynU5ruirMhGI9L7g7AkC7soSkuP8dp8ey8Xgyp20KRXvUFDpayEJsU5Vs1exOuaVfIE8AIJLFT1S4QkvM5n2Q9cCdre25JtxnE6Ixh3NmFyyEwkK%2ByvQY6pgGfXgYy3uSrZ2iFbx03ZOBcHBs3nPvbuBFiSRYBrQu8YyxPt4NZbDb5c9XiC1z8GAC9zC0vfjRU%2FMghDaY%2F0K0q%2BiSkO3gP%2Bpvd1sQuxnEou0yuvsOas3uQhQVt7RKNfVQt%2FIoh%2BQfMZU7N0vOxmrAeZm3u57uMVDAglPP6Yt1QUBPmU5t9KIJ0B%2B5KsWB9z0bzTHt1pSKUzoZYYEOOTCw1jYXtN3zx&X-Amz-Signature=07231a627163127e883b0e829b991d1ecec3f86cfd14299ea5d554867c94150d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AN2RAMC%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBs%2Fws1yD0OyOhwNq3MeLv8W1jmCHtMJ%2BnMCrxtjPyrkAiBOTt8e6h%2Bc1yLMyIxosxCCbaLXbIFqVh93UHSk60AdMiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1hN9rrGRr9ctVfPvKtwDTOETumKEQiCeYX973GK9ZtTzP%2FubJEiVlIFwAmFkuR5QazZVS6x1BxLZfMIyEpkW4HMEryJZYbY5ixxsbFK5BA29Otsa1fp4oDveGOQJP57J396yhr4wgiurk2aPdc64gd5GAeAKYFn3r8lBHZHbcJM%2BKFHbqM3swOiyGth7Vjsi1nrftldfhDEEzNvl5LDoy722scHs32T1lrLwSGBEgVa%2FJSvIYDBIuGUy6b9KAdEwt0%2BWn5afateWIv6hqGZU673LSQrZCbKQt8nXmyrhrD02L5A03vyMNtMh8KIOnDa0xkmZVw0pz%2BQWN%2F311m50tUQxREl1FVy7Xz%2FRqbUgVUnzCTMK9Qmtu4%2F5nOBfCKY5wzYADrUHABLOfKt4q0fjGDUsHYhLNtqlbn0x47Fdj2Oci21k%2Bc7x9vjdx2FuO5VT0urQ%2BrjnbD3h%2FcTutNYGDKvJAMH0OrYVMTNozM1wUUUaMgBv5VUtL1kehJd3G3dwL%2FHXpt%2BVFImTaTZ4IG5sIUI%2B4M7zeH8s0SynU5ruirMhGI9L7g7AkC7soSkuP8dp8ey8Xgyp20KRXvUFDpayEJsU5Vs1exOuaVfIE8AIJLFT1S4QkvM5n2Q9cCdre25JtxnE6Ixh3NmFyyEwkK%2ByvQY6pgGfXgYy3uSrZ2iFbx03ZOBcHBs3nPvbuBFiSRYBrQu8YyxPt4NZbDb5c9XiC1z8GAC9zC0vfjRU%2FMghDaY%2F0K0q%2BiSkO3gP%2Bpvd1sQuxnEou0yuvsOas3uQhQVt7RKNfVQt%2FIoh%2BQfMZU7N0vOxmrAeZm3u57uMVDAglPP6Yt1QUBPmU5t9KIJ0B%2B5KsWB9z0bzTHt1pSKUzoZYYEOOTCw1jYXtN3zx&X-Amz-Signature=48c722621f09110c75e16dda05ac5486a4ee5e0a943b6062347d67723a0e8dc3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AN2RAMC%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBs%2Fws1yD0OyOhwNq3MeLv8W1jmCHtMJ%2BnMCrxtjPyrkAiBOTt8e6h%2Bc1yLMyIxosxCCbaLXbIFqVh93UHSk60AdMiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1hN9rrGRr9ctVfPvKtwDTOETumKEQiCeYX973GK9ZtTzP%2FubJEiVlIFwAmFkuR5QazZVS6x1BxLZfMIyEpkW4HMEryJZYbY5ixxsbFK5BA29Otsa1fp4oDveGOQJP57J396yhr4wgiurk2aPdc64gd5GAeAKYFn3r8lBHZHbcJM%2BKFHbqM3swOiyGth7Vjsi1nrftldfhDEEzNvl5LDoy722scHs32T1lrLwSGBEgVa%2FJSvIYDBIuGUy6b9KAdEwt0%2BWn5afateWIv6hqGZU673LSQrZCbKQt8nXmyrhrD02L5A03vyMNtMh8KIOnDa0xkmZVw0pz%2BQWN%2F311m50tUQxREl1FVy7Xz%2FRqbUgVUnzCTMK9Qmtu4%2F5nOBfCKY5wzYADrUHABLOfKt4q0fjGDUsHYhLNtqlbn0x47Fdj2Oci21k%2Bc7x9vjdx2FuO5VT0urQ%2BrjnbD3h%2FcTutNYGDKvJAMH0OrYVMTNozM1wUUUaMgBv5VUtL1kehJd3G3dwL%2FHXpt%2BVFImTaTZ4IG5sIUI%2B4M7zeH8s0SynU5ruirMhGI9L7g7AkC7soSkuP8dp8ey8Xgyp20KRXvUFDpayEJsU5Vs1exOuaVfIE8AIJLFT1S4QkvM5n2Q9cCdre25JtxnE6Ixh3NmFyyEwkK%2ByvQY6pgGfXgYy3uSrZ2iFbx03ZOBcHBs3nPvbuBFiSRYBrQu8YyxPt4NZbDb5c9XiC1z8GAC9zC0vfjRU%2FMghDaY%2F0K0q%2BiSkO3gP%2Bpvd1sQuxnEou0yuvsOas3uQhQVt7RKNfVQt%2FIoh%2BQfMZU7N0vOxmrAeZm3u57uMVDAglPP6Yt1QUBPmU5t9KIJ0B%2B5KsWB9z0bzTHt1pSKUzoZYYEOOTCw1jYXtN3zx&X-Amz-Signature=ebdf0b4dbd330733244d1c73d135f311c1e5327e959d246eb26c1cc2654c8641&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AN2RAMC%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBs%2Fws1yD0OyOhwNq3MeLv8W1jmCHtMJ%2BnMCrxtjPyrkAiBOTt8e6h%2Bc1yLMyIxosxCCbaLXbIFqVh93UHSk60AdMiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1hN9rrGRr9ctVfPvKtwDTOETumKEQiCeYX973GK9ZtTzP%2FubJEiVlIFwAmFkuR5QazZVS6x1BxLZfMIyEpkW4HMEryJZYbY5ixxsbFK5BA29Otsa1fp4oDveGOQJP57J396yhr4wgiurk2aPdc64gd5GAeAKYFn3r8lBHZHbcJM%2BKFHbqM3swOiyGth7Vjsi1nrftldfhDEEzNvl5LDoy722scHs32T1lrLwSGBEgVa%2FJSvIYDBIuGUy6b9KAdEwt0%2BWn5afateWIv6hqGZU673LSQrZCbKQt8nXmyrhrD02L5A03vyMNtMh8KIOnDa0xkmZVw0pz%2BQWN%2F311m50tUQxREl1FVy7Xz%2FRqbUgVUnzCTMK9Qmtu4%2F5nOBfCKY5wzYADrUHABLOfKt4q0fjGDUsHYhLNtqlbn0x47Fdj2Oci21k%2Bc7x9vjdx2FuO5VT0urQ%2BrjnbD3h%2FcTutNYGDKvJAMH0OrYVMTNozM1wUUUaMgBv5VUtL1kehJd3G3dwL%2FHXpt%2BVFImTaTZ4IG5sIUI%2B4M7zeH8s0SynU5ruirMhGI9L7g7AkC7soSkuP8dp8ey8Xgyp20KRXvUFDpayEJsU5Vs1exOuaVfIE8AIJLFT1S4QkvM5n2Q9cCdre25JtxnE6Ixh3NmFyyEwkK%2ByvQY6pgGfXgYy3uSrZ2iFbx03ZOBcHBs3nPvbuBFiSRYBrQu8YyxPt4NZbDb5c9XiC1z8GAC9zC0vfjRU%2FMghDaY%2F0K0q%2BiSkO3gP%2Bpvd1sQuxnEou0yuvsOas3uQhQVt7RKNfVQt%2FIoh%2BQfMZU7N0vOxmrAeZm3u57uMVDAglPP6Yt1QUBPmU5t9KIJ0B%2B5KsWB9z0bzTHt1pSKUzoZYYEOOTCw1jYXtN3zx&X-Amz-Signature=0e7b07c4e55225c67e49e4b906a1e27b607dab8554ea384d80134b95a041fcb6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
