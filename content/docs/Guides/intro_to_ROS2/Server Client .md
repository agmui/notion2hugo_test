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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37MVAMW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLsUUmAojWHqRW1x9qmZ8B%2FECtimpmrMKTfvetr7NpQgIhAM0IKb8doq4WCA4N2pepEd%2BvY9%2FYeAi72nz0KhC%2FzH2LKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIO2%2FXVw7XvJhdI0kq3AMrf6WNO0h4chbFgjPe7pTCfFXAqrJeMYqbZeGHB4QLsIGrIGnilL5pMomHLtogPckMAj1B0f2yZGKPbHVPRTnuf91Q%2Buv0d4A0l4laqzRIHhL%2FCNIvvRQ0XRGMxDbY93Gvrau4DpC1hczNJZoMNTDgEb5W7rBXwkdTAmTUhHWeO0geDk25d2ohFAJrYuYyn3bEFK%2BzEBKBIItl%2Ba4U0Zcw22rAlIMYGnCuyxZ1Du3G%2FQzD%2BKrvpcJoZKFj%2B2pTR8Q44eJSddMJ9mtTsN6HTeTPN5c8m0P%2FlouXf1fh%2BIF%2FL%2Fodo4OBRIY32DN1XFMye36jPRZFDszJXEMaeO3pgUQ17s37KTN5p1MPSUbJCJBARVVEA%2BmIsEBnT9ImxtQZFdtlrRc%2Fv8bBEKBAgkfYda9MAWm15d6W6%2F2excERvCSERHxo3uYa%2FWxm0reRzICWK5Nm3poD7BVhDtBlkEGGN2yYrvyIFK31jlPicD8oERTsaNKz61F80iO%2BD83pHHQ1oIgBJVZYS4r4yS1TM8TrSNE6ujlZhSOMbFv639UsOmLoZIy11mdbW65nBcMJv6KKSQJz%2Fk5A1LdThUUgnbFjIMI9bgL4F%2FZdfrVw7JPx3gGYUbIpBxuAxiAg03qtwjCh3uC9BjqkAcL8s7J24cO8ZPvDrx4BgTgYyWnCeUr7DJ2s7rPAFm0D1nZWu6J0ScCY0885AvuYX3U15c%2FQ4pX5FiSe4j%2Beer6dCCI4gTsIX6NMW0VyVL7HU%2B4D1cG4p9DnlE0hn%2FHikfxlwa3la%2Bkk3X3nHXgTUd2q8wwdy4XnHv6lBSkGipAExKagMFKzfAce9sWlmcLIxAVwlChB9rTC9XBtdzwifske2krc&X-Amz-Signature=546668b7b86b70dfb0812eabb35d1e3e62cb02da3036d99dc89fbd5fd4279d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37MVAMW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLsUUmAojWHqRW1x9qmZ8B%2FECtimpmrMKTfvetr7NpQgIhAM0IKb8doq4WCA4N2pepEd%2BvY9%2FYeAi72nz0KhC%2FzH2LKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIO2%2FXVw7XvJhdI0kq3AMrf6WNO0h4chbFgjPe7pTCfFXAqrJeMYqbZeGHB4QLsIGrIGnilL5pMomHLtogPckMAj1B0f2yZGKPbHVPRTnuf91Q%2Buv0d4A0l4laqzRIHhL%2FCNIvvRQ0XRGMxDbY93Gvrau4DpC1hczNJZoMNTDgEb5W7rBXwkdTAmTUhHWeO0geDk25d2ohFAJrYuYyn3bEFK%2BzEBKBIItl%2Ba4U0Zcw22rAlIMYGnCuyxZ1Du3G%2FQzD%2BKrvpcJoZKFj%2B2pTR8Q44eJSddMJ9mtTsN6HTeTPN5c8m0P%2FlouXf1fh%2BIF%2FL%2Fodo4OBRIY32DN1XFMye36jPRZFDszJXEMaeO3pgUQ17s37KTN5p1MPSUbJCJBARVVEA%2BmIsEBnT9ImxtQZFdtlrRc%2Fv8bBEKBAgkfYda9MAWm15d6W6%2F2excERvCSERHxo3uYa%2FWxm0reRzICWK5Nm3poD7BVhDtBlkEGGN2yYrvyIFK31jlPicD8oERTsaNKz61F80iO%2BD83pHHQ1oIgBJVZYS4r4yS1TM8TrSNE6ujlZhSOMbFv639UsOmLoZIy11mdbW65nBcMJv6KKSQJz%2Fk5A1LdThUUgnbFjIMI9bgL4F%2FZdfrVw7JPx3gGYUbIpBxuAxiAg03qtwjCh3uC9BjqkAcL8s7J24cO8ZPvDrx4BgTgYyWnCeUr7DJ2s7rPAFm0D1nZWu6J0ScCY0885AvuYX3U15c%2FQ4pX5FiSe4j%2Beer6dCCI4gTsIX6NMW0VyVL7HU%2B4D1cG4p9DnlE0hn%2FHikfxlwa3la%2Bkk3X3nHXgTUd2q8wwdy4XnHv6lBSkGipAExKagMFKzfAce9sWlmcLIxAVwlChB9rTC9XBtdzwifske2krc&X-Amz-Signature=202a1b96bb0556e5018964fabbd4dd23fc79b7139ccb76ef9b7ad7fd30cdb8c4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37MVAMW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLsUUmAojWHqRW1x9qmZ8B%2FECtimpmrMKTfvetr7NpQgIhAM0IKb8doq4WCA4N2pepEd%2BvY9%2FYeAi72nz0KhC%2FzH2LKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIO2%2FXVw7XvJhdI0kq3AMrf6WNO0h4chbFgjPe7pTCfFXAqrJeMYqbZeGHB4QLsIGrIGnilL5pMomHLtogPckMAj1B0f2yZGKPbHVPRTnuf91Q%2Buv0d4A0l4laqzRIHhL%2FCNIvvRQ0XRGMxDbY93Gvrau4DpC1hczNJZoMNTDgEb5W7rBXwkdTAmTUhHWeO0geDk25d2ohFAJrYuYyn3bEFK%2BzEBKBIItl%2Ba4U0Zcw22rAlIMYGnCuyxZ1Du3G%2FQzD%2BKrvpcJoZKFj%2B2pTR8Q44eJSddMJ9mtTsN6HTeTPN5c8m0P%2FlouXf1fh%2BIF%2FL%2Fodo4OBRIY32DN1XFMye36jPRZFDszJXEMaeO3pgUQ17s37KTN5p1MPSUbJCJBARVVEA%2BmIsEBnT9ImxtQZFdtlrRc%2Fv8bBEKBAgkfYda9MAWm15d6W6%2F2excERvCSERHxo3uYa%2FWxm0reRzICWK5Nm3poD7BVhDtBlkEGGN2yYrvyIFK31jlPicD8oERTsaNKz61F80iO%2BD83pHHQ1oIgBJVZYS4r4yS1TM8TrSNE6ujlZhSOMbFv639UsOmLoZIy11mdbW65nBcMJv6KKSQJz%2Fk5A1LdThUUgnbFjIMI9bgL4F%2FZdfrVw7JPx3gGYUbIpBxuAxiAg03qtwjCh3uC9BjqkAcL8s7J24cO8ZPvDrx4BgTgYyWnCeUr7DJ2s7rPAFm0D1nZWu6J0ScCY0885AvuYX3U15c%2FQ4pX5FiSe4j%2Beer6dCCI4gTsIX6NMW0VyVL7HU%2B4D1cG4p9DnlE0hn%2FHikfxlwa3la%2Bkk3X3nHXgTUd2q8wwdy4XnHv6lBSkGipAExKagMFKzfAce9sWlmcLIxAVwlChB9rTC9XBtdzwifske2krc&X-Amz-Signature=8735821d55c8306c0cdd619cd30de9db0ac2623f88c95d184146dc5529b2108d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37MVAMW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLsUUmAojWHqRW1x9qmZ8B%2FECtimpmrMKTfvetr7NpQgIhAM0IKb8doq4WCA4N2pepEd%2BvY9%2FYeAi72nz0KhC%2FzH2LKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIO2%2FXVw7XvJhdI0kq3AMrf6WNO0h4chbFgjPe7pTCfFXAqrJeMYqbZeGHB4QLsIGrIGnilL5pMomHLtogPckMAj1B0f2yZGKPbHVPRTnuf91Q%2Buv0d4A0l4laqzRIHhL%2FCNIvvRQ0XRGMxDbY93Gvrau4DpC1hczNJZoMNTDgEb5W7rBXwkdTAmTUhHWeO0geDk25d2ohFAJrYuYyn3bEFK%2BzEBKBIItl%2Ba4U0Zcw22rAlIMYGnCuyxZ1Du3G%2FQzD%2BKrvpcJoZKFj%2B2pTR8Q44eJSddMJ9mtTsN6HTeTPN5c8m0P%2FlouXf1fh%2BIF%2FL%2Fodo4OBRIY32DN1XFMye36jPRZFDszJXEMaeO3pgUQ17s37KTN5p1MPSUbJCJBARVVEA%2BmIsEBnT9ImxtQZFdtlrRc%2Fv8bBEKBAgkfYda9MAWm15d6W6%2F2excERvCSERHxo3uYa%2FWxm0reRzICWK5Nm3poD7BVhDtBlkEGGN2yYrvyIFK31jlPicD8oERTsaNKz61F80iO%2BD83pHHQ1oIgBJVZYS4r4yS1TM8TrSNE6ujlZhSOMbFv639UsOmLoZIy11mdbW65nBcMJv6KKSQJz%2Fk5A1LdThUUgnbFjIMI9bgL4F%2FZdfrVw7JPx3gGYUbIpBxuAxiAg03qtwjCh3uC9BjqkAcL8s7J24cO8ZPvDrx4BgTgYyWnCeUr7DJ2s7rPAFm0D1nZWu6J0ScCY0885AvuYX3U15c%2FQ4pX5FiSe4j%2Beer6dCCI4gTsIX6NMW0VyVL7HU%2B4D1cG4p9DnlE0hn%2FHikfxlwa3la%2Bkk3X3nHXgTUd2q8wwdy4XnHv6lBSkGipAExKagMFKzfAce9sWlmcLIxAVwlChB9rTC9XBtdzwifske2krc&X-Amz-Signature=e5a01116571d976bf2b257524f84e7089dff477d9cfef0a2b3d085694db471b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37MVAMW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLsUUmAojWHqRW1x9qmZ8B%2FECtimpmrMKTfvetr7NpQgIhAM0IKb8doq4WCA4N2pepEd%2BvY9%2FYeAi72nz0KhC%2FzH2LKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIO2%2FXVw7XvJhdI0kq3AMrf6WNO0h4chbFgjPe7pTCfFXAqrJeMYqbZeGHB4QLsIGrIGnilL5pMomHLtogPckMAj1B0f2yZGKPbHVPRTnuf91Q%2Buv0d4A0l4laqzRIHhL%2FCNIvvRQ0XRGMxDbY93Gvrau4DpC1hczNJZoMNTDgEb5W7rBXwkdTAmTUhHWeO0geDk25d2ohFAJrYuYyn3bEFK%2BzEBKBIItl%2Ba4U0Zcw22rAlIMYGnCuyxZ1Du3G%2FQzD%2BKrvpcJoZKFj%2B2pTR8Q44eJSddMJ9mtTsN6HTeTPN5c8m0P%2FlouXf1fh%2BIF%2FL%2Fodo4OBRIY32DN1XFMye36jPRZFDszJXEMaeO3pgUQ17s37KTN5p1MPSUbJCJBARVVEA%2BmIsEBnT9ImxtQZFdtlrRc%2Fv8bBEKBAgkfYda9MAWm15d6W6%2F2excERvCSERHxo3uYa%2FWxm0reRzICWK5Nm3poD7BVhDtBlkEGGN2yYrvyIFK31jlPicD8oERTsaNKz61F80iO%2BD83pHHQ1oIgBJVZYS4r4yS1TM8TrSNE6ujlZhSOMbFv639UsOmLoZIy11mdbW65nBcMJv6KKSQJz%2Fk5A1LdThUUgnbFjIMI9bgL4F%2FZdfrVw7JPx3gGYUbIpBxuAxiAg03qtwjCh3uC9BjqkAcL8s7J24cO8ZPvDrx4BgTgYyWnCeUr7DJ2s7rPAFm0D1nZWu6J0ScCY0885AvuYX3U15c%2FQ4pX5FiSe4j%2Beer6dCCI4gTsIX6NMW0VyVL7HU%2B4D1cG4p9DnlE0hn%2FHikfxlwa3la%2Bkk3X3nHXgTUd2q8wwdy4XnHv6lBSkGipAExKagMFKzfAce9sWlmcLIxAVwlChB9rTC9XBtdzwifske2krc&X-Amz-Signature=b90a21cf1f30ea9595a7ef3a9bf0ca23f4703cbd26ae7897f45879b5940f73f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
