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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSGDEWPM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDwpVpixhCoxdg57GQVnm0KxKYWM%2FxN2nh67WgjMVrcFQIhAJ%2BXsH3BbURZIlIvt5oaxnvTH0JJ%2BmZkm2WxktiYFSakKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEraTcl7DOxkhvxBMq3ANlB3L9HR7zyNbavB8f4v%2FGWSjJF%2FLb4dJ%2F7HCHNroeAlj6%2Bv%2BQFz4q6j8DKfjaX6%2Bs7ZzJ2Alcv%2FEB0kIgYqfoi6r0D0nSJgKqSUYpBjjyxp3XdzkFRlevvgqBErlgLYjKNOnXixlVF14c%2FLtVTWdDsc2JvhV%2BxE7c8pGiDGOivNq36m8LQeo3lbmlyor4vFyoWf4cc0W%2F%2FLai2ApPZIOiknyaUM1DB7CXW0q%2FsAYkyhOY%2F1ft%2B8anOSVZWpND%2FB6yyCHehjqQqrU6UWchCYo7i2Sqb4n5dwIQKYCNSajMPDbAe6lSy9GYOhki6yx3O5ad%2F%2Fp69C1ccQwfI2ciTNwPA8Ec16WCmGp4ozGB7jAYt%2B0vo3%2FsSqGAIRuDfNebK8e75W3JyqwqAXq98d24cHE5JVLq38RkJ1yLsm4LSD9xRaJh5nrUQGNbavkIIdTKsP1FaUK6gLMZKl61HqGEPVYGEF3ovzsVV9XTXIhVUytZNq%2Febkd%2F2EFZRuHOav0cuz%2FBTLNg9wN%2BB65DOxpyB3JRqIdDCw66xTYnptQbhMS%2BzDWudEpC2EssvwTChdgVYbFzi4%2Fgri%2F9GPNqGsLUUfafPbSq%2B1xthxHMUUPH3mCDuaJSrnVn07zNn7tGuDCejsO%2BBjqkAZRnC%2B%2BHA1JclgBONTeKTs9ALgOMZX6T1oHFCCuvf3cIHV98J%2B0PdhK3bSuC6VDTbFv%2B6amHJ1xqGG10O1EBJ1D3VH1LPQCu1fQUvG6L%2BiUU1GA5ZOw5Fe4RboyLtehnNpKkP%2BlL17rjBDZlziVDiwTq%2BgD6AtlJIpBVcbjApzl2lZlLhTIICqJ7v35cn7iux14FEgXLZwR7AfDZM%2FDSyJXKRBM1&X-Amz-Signature=e239c1674c0b9083c84a01f73c6399a9a12f131fa44a89f8555db447cb10b547&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSGDEWPM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDwpVpixhCoxdg57GQVnm0KxKYWM%2FxN2nh67WgjMVrcFQIhAJ%2BXsH3BbURZIlIvt5oaxnvTH0JJ%2BmZkm2WxktiYFSakKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEraTcl7DOxkhvxBMq3ANlB3L9HR7zyNbavB8f4v%2FGWSjJF%2FLb4dJ%2F7HCHNroeAlj6%2Bv%2BQFz4q6j8DKfjaX6%2Bs7ZzJ2Alcv%2FEB0kIgYqfoi6r0D0nSJgKqSUYpBjjyxp3XdzkFRlevvgqBErlgLYjKNOnXixlVF14c%2FLtVTWdDsc2JvhV%2BxE7c8pGiDGOivNq36m8LQeo3lbmlyor4vFyoWf4cc0W%2F%2FLai2ApPZIOiknyaUM1DB7CXW0q%2FsAYkyhOY%2F1ft%2B8anOSVZWpND%2FB6yyCHehjqQqrU6UWchCYo7i2Sqb4n5dwIQKYCNSajMPDbAe6lSy9GYOhki6yx3O5ad%2F%2Fp69C1ccQwfI2ciTNwPA8Ec16WCmGp4ozGB7jAYt%2B0vo3%2FsSqGAIRuDfNebK8e75W3JyqwqAXq98d24cHE5JVLq38RkJ1yLsm4LSD9xRaJh5nrUQGNbavkIIdTKsP1FaUK6gLMZKl61HqGEPVYGEF3ovzsVV9XTXIhVUytZNq%2Febkd%2F2EFZRuHOav0cuz%2FBTLNg9wN%2BB65DOxpyB3JRqIdDCw66xTYnptQbhMS%2BzDWudEpC2EssvwTChdgVYbFzi4%2Fgri%2F9GPNqGsLUUfafPbSq%2B1xthxHMUUPH3mCDuaJSrnVn07zNn7tGuDCejsO%2BBjqkAZRnC%2B%2BHA1JclgBONTeKTs9ALgOMZX6T1oHFCCuvf3cIHV98J%2B0PdhK3bSuC6VDTbFv%2B6amHJ1xqGG10O1EBJ1D3VH1LPQCu1fQUvG6L%2BiUU1GA5ZOw5Fe4RboyLtehnNpKkP%2BlL17rjBDZlziVDiwTq%2BgD6AtlJIpBVcbjApzl2lZlLhTIICqJ7v35cn7iux14FEgXLZwR7AfDZM%2FDSyJXKRBM1&X-Amz-Signature=b96819aa92a23aa65e256ec35f7d4cf6c31a471865b67a1679214d2056a14db1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSGDEWPM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDwpVpixhCoxdg57GQVnm0KxKYWM%2FxN2nh67WgjMVrcFQIhAJ%2BXsH3BbURZIlIvt5oaxnvTH0JJ%2BmZkm2WxktiYFSakKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEraTcl7DOxkhvxBMq3ANlB3L9HR7zyNbavB8f4v%2FGWSjJF%2FLb4dJ%2F7HCHNroeAlj6%2Bv%2BQFz4q6j8DKfjaX6%2Bs7ZzJ2Alcv%2FEB0kIgYqfoi6r0D0nSJgKqSUYpBjjyxp3XdzkFRlevvgqBErlgLYjKNOnXixlVF14c%2FLtVTWdDsc2JvhV%2BxE7c8pGiDGOivNq36m8LQeo3lbmlyor4vFyoWf4cc0W%2F%2FLai2ApPZIOiknyaUM1DB7CXW0q%2FsAYkyhOY%2F1ft%2B8anOSVZWpND%2FB6yyCHehjqQqrU6UWchCYo7i2Sqb4n5dwIQKYCNSajMPDbAe6lSy9GYOhki6yx3O5ad%2F%2Fp69C1ccQwfI2ciTNwPA8Ec16WCmGp4ozGB7jAYt%2B0vo3%2FsSqGAIRuDfNebK8e75W3JyqwqAXq98d24cHE5JVLq38RkJ1yLsm4LSD9xRaJh5nrUQGNbavkIIdTKsP1FaUK6gLMZKl61HqGEPVYGEF3ovzsVV9XTXIhVUytZNq%2Febkd%2F2EFZRuHOav0cuz%2FBTLNg9wN%2BB65DOxpyB3JRqIdDCw66xTYnptQbhMS%2BzDWudEpC2EssvwTChdgVYbFzi4%2Fgri%2F9GPNqGsLUUfafPbSq%2B1xthxHMUUPH3mCDuaJSrnVn07zNn7tGuDCejsO%2BBjqkAZRnC%2B%2BHA1JclgBONTeKTs9ALgOMZX6T1oHFCCuvf3cIHV98J%2B0PdhK3bSuC6VDTbFv%2B6amHJ1xqGG10O1EBJ1D3VH1LPQCu1fQUvG6L%2BiUU1GA5ZOw5Fe4RboyLtehnNpKkP%2BlL17rjBDZlziVDiwTq%2BgD6AtlJIpBVcbjApzl2lZlLhTIICqJ7v35cn7iux14FEgXLZwR7AfDZM%2FDSyJXKRBM1&X-Amz-Signature=b1a9951be000ffe1c403069e20bd305090bd13d034fec7f90df3db100f8380f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSGDEWPM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDwpVpixhCoxdg57GQVnm0KxKYWM%2FxN2nh67WgjMVrcFQIhAJ%2BXsH3BbURZIlIvt5oaxnvTH0JJ%2BmZkm2WxktiYFSakKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEraTcl7DOxkhvxBMq3ANlB3L9HR7zyNbavB8f4v%2FGWSjJF%2FLb4dJ%2F7HCHNroeAlj6%2Bv%2BQFz4q6j8DKfjaX6%2Bs7ZzJ2Alcv%2FEB0kIgYqfoi6r0D0nSJgKqSUYpBjjyxp3XdzkFRlevvgqBErlgLYjKNOnXixlVF14c%2FLtVTWdDsc2JvhV%2BxE7c8pGiDGOivNq36m8LQeo3lbmlyor4vFyoWf4cc0W%2F%2FLai2ApPZIOiknyaUM1DB7CXW0q%2FsAYkyhOY%2F1ft%2B8anOSVZWpND%2FB6yyCHehjqQqrU6UWchCYo7i2Sqb4n5dwIQKYCNSajMPDbAe6lSy9GYOhki6yx3O5ad%2F%2Fp69C1ccQwfI2ciTNwPA8Ec16WCmGp4ozGB7jAYt%2B0vo3%2FsSqGAIRuDfNebK8e75W3JyqwqAXq98d24cHE5JVLq38RkJ1yLsm4LSD9xRaJh5nrUQGNbavkIIdTKsP1FaUK6gLMZKl61HqGEPVYGEF3ovzsVV9XTXIhVUytZNq%2Febkd%2F2EFZRuHOav0cuz%2FBTLNg9wN%2BB65DOxpyB3JRqIdDCw66xTYnptQbhMS%2BzDWudEpC2EssvwTChdgVYbFzi4%2Fgri%2F9GPNqGsLUUfafPbSq%2B1xthxHMUUPH3mCDuaJSrnVn07zNn7tGuDCejsO%2BBjqkAZRnC%2B%2BHA1JclgBONTeKTs9ALgOMZX6T1oHFCCuvf3cIHV98J%2B0PdhK3bSuC6VDTbFv%2B6amHJ1xqGG10O1EBJ1D3VH1LPQCu1fQUvG6L%2BiUU1GA5ZOw5Fe4RboyLtehnNpKkP%2BlL17rjBDZlziVDiwTq%2BgD6AtlJIpBVcbjApzl2lZlLhTIICqJ7v35cn7iux14FEgXLZwR7AfDZM%2FDSyJXKRBM1&X-Amz-Signature=ef9c541539961d0e6ce596693849fca5cbb6489d5cf3dd7d014943f0e7f34e53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSGDEWPM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDwpVpixhCoxdg57GQVnm0KxKYWM%2FxN2nh67WgjMVrcFQIhAJ%2BXsH3BbURZIlIvt5oaxnvTH0JJ%2BmZkm2WxktiYFSakKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEraTcl7DOxkhvxBMq3ANlB3L9HR7zyNbavB8f4v%2FGWSjJF%2FLb4dJ%2F7HCHNroeAlj6%2Bv%2BQFz4q6j8DKfjaX6%2Bs7ZzJ2Alcv%2FEB0kIgYqfoi6r0D0nSJgKqSUYpBjjyxp3XdzkFRlevvgqBErlgLYjKNOnXixlVF14c%2FLtVTWdDsc2JvhV%2BxE7c8pGiDGOivNq36m8LQeo3lbmlyor4vFyoWf4cc0W%2F%2FLai2ApPZIOiknyaUM1DB7CXW0q%2FsAYkyhOY%2F1ft%2B8anOSVZWpND%2FB6yyCHehjqQqrU6UWchCYo7i2Sqb4n5dwIQKYCNSajMPDbAe6lSy9GYOhki6yx3O5ad%2F%2Fp69C1ccQwfI2ciTNwPA8Ec16WCmGp4ozGB7jAYt%2B0vo3%2FsSqGAIRuDfNebK8e75W3JyqwqAXq98d24cHE5JVLq38RkJ1yLsm4LSD9xRaJh5nrUQGNbavkIIdTKsP1FaUK6gLMZKl61HqGEPVYGEF3ovzsVV9XTXIhVUytZNq%2Febkd%2F2EFZRuHOav0cuz%2FBTLNg9wN%2BB65DOxpyB3JRqIdDCw66xTYnptQbhMS%2BzDWudEpC2EssvwTChdgVYbFzi4%2Fgri%2F9GPNqGsLUUfafPbSq%2B1xthxHMUUPH3mCDuaJSrnVn07zNn7tGuDCejsO%2BBjqkAZRnC%2B%2BHA1JclgBONTeKTs9ALgOMZX6T1oHFCCuvf3cIHV98J%2B0PdhK3bSuC6VDTbFv%2B6amHJ1xqGG10O1EBJ1D3VH1LPQCu1fQUvG6L%2BiUU1GA5ZOw5Fe4RboyLtehnNpKkP%2BlL17rjBDZlziVDiwTq%2BgD6AtlJIpBVcbjApzl2lZlLhTIICqJ7v35cn7iux14FEgXLZwR7AfDZM%2FDSyJXKRBM1&X-Amz-Signature=07d5a50f2d87cdc9053f0db0557356ea3ea1fee78297e98bef6ef8d7f6c79afd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
