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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JW3BZH4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCThOd2ce2cCHB1eJXeVWmuPQcgbNinAEGX2fn5SfFmewIgP%2Fi1l0lUCUIYCwDdXNSHMmsTqnJObTrlVV9%2FCEUH4bkqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6LPoU7DkrfFtYIeCrcA57TMQqjZgh%2FT3Hyq%2Frwg7CCc9inm0t3fygjwdpTIyZiE8vUvLSssJEL24H%2FzWePqWTQv0i66lYWXt8zyUfo5DpNd6wZPLM5w2YC6Xzx%2B3tiRn1kL10NCRJSGaivD%2FRYBKpA0LJeZAlUc9lllOOwf7GbjL7IrnA0A94xfpijBNxH7e2P0GKxs16gOTiN1B0TG3oLYT7yezfzt0Tz%2BB%2FhYAH12DHuXURITU%2Fw40PDIBv8cMLqEQ8fZfVCOm7UUFguuqIu4Lrrmxp%2BY3cARK5oYPtLsMq1Q3ciNB6ktAHcrpWKdZ0otwukNEQf3HE3l8wq3HjyBO5feVGVB6KGv8dQ1er1BrbTFeY1jY2rP2g4l7oMykSH0s5CKzwAB4gyTgvtdYrg7OQJSrz%2B2fHBKeSd5eRfJFHWKx%2FLJZF4oolBQ87ttwY7M9T%2FpcoEfKgKcURvvIoObpJfsq3QAO9OSCujVm0dl87NQuYGueAx5uEbxco%2FJNnJtOsOxwlrC%2BRO0hkp8OHj5eETMzxGAWiFsZX4VX%2F22LjcAkBOx0aSqVnDeat2Pyx%2BwZ2lzLbCCT%2B00OlCBSRlsQZEIGBDFwPdyyeNKRqDaal8%2Bvb2IKhVyRDMwU0j1tKOyKj0BqIY9XnjMK%2BTq70GOqUBj%2BZDidkgkoqYqkRcefKQlJ3KQYQ8KuHEUI6Wa5sW4Xsapylvw7DAyqFPg2zW4%2FWsmwk7jHloizoh51aO4rWALICjgq%2BzBvLakkF5RULooBhFb520RCZhplQtxP4PnwZpT5C00x498e5u14n3mHv%2BE77GXe%2F9ff%2BpUsLJkY2zIk9kFwH%2FB01MfuFfG6i0p1n7WOELaRgUaY14CMzVXOuypoY0hxlI&X-Amz-Signature=cb4cea8638d848c5ba32fd55ab3ff415953ccd272a123bdf479165e6284aeefd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JW3BZH4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCThOd2ce2cCHB1eJXeVWmuPQcgbNinAEGX2fn5SfFmewIgP%2Fi1l0lUCUIYCwDdXNSHMmsTqnJObTrlVV9%2FCEUH4bkqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6LPoU7DkrfFtYIeCrcA57TMQqjZgh%2FT3Hyq%2Frwg7CCc9inm0t3fygjwdpTIyZiE8vUvLSssJEL24H%2FzWePqWTQv0i66lYWXt8zyUfo5DpNd6wZPLM5w2YC6Xzx%2B3tiRn1kL10NCRJSGaivD%2FRYBKpA0LJeZAlUc9lllOOwf7GbjL7IrnA0A94xfpijBNxH7e2P0GKxs16gOTiN1B0TG3oLYT7yezfzt0Tz%2BB%2FhYAH12DHuXURITU%2Fw40PDIBv8cMLqEQ8fZfVCOm7UUFguuqIu4Lrrmxp%2BY3cARK5oYPtLsMq1Q3ciNB6ktAHcrpWKdZ0otwukNEQf3HE3l8wq3HjyBO5feVGVB6KGv8dQ1er1BrbTFeY1jY2rP2g4l7oMykSH0s5CKzwAB4gyTgvtdYrg7OQJSrz%2B2fHBKeSd5eRfJFHWKx%2FLJZF4oolBQ87ttwY7M9T%2FpcoEfKgKcURvvIoObpJfsq3QAO9OSCujVm0dl87NQuYGueAx5uEbxco%2FJNnJtOsOxwlrC%2BRO0hkp8OHj5eETMzxGAWiFsZX4VX%2F22LjcAkBOx0aSqVnDeat2Pyx%2BwZ2lzLbCCT%2B00OlCBSRlsQZEIGBDFwPdyyeNKRqDaal8%2Bvb2IKhVyRDMwU0j1tKOyKj0BqIY9XnjMK%2BTq70GOqUBj%2BZDidkgkoqYqkRcefKQlJ3KQYQ8KuHEUI6Wa5sW4Xsapylvw7DAyqFPg2zW4%2FWsmwk7jHloizoh51aO4rWALICjgq%2BzBvLakkF5RULooBhFb520RCZhplQtxP4PnwZpT5C00x498e5u14n3mHv%2BE77GXe%2F9ff%2BpUsLJkY2zIk9kFwH%2FB01MfuFfG6i0p1n7WOELaRgUaY14CMzVXOuypoY0hxlI&X-Amz-Signature=35d2d7bfb7f3bca800477c70acdf9a1edd6a97936a5b876f0aecce266225003b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JW3BZH4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCThOd2ce2cCHB1eJXeVWmuPQcgbNinAEGX2fn5SfFmewIgP%2Fi1l0lUCUIYCwDdXNSHMmsTqnJObTrlVV9%2FCEUH4bkqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6LPoU7DkrfFtYIeCrcA57TMQqjZgh%2FT3Hyq%2Frwg7CCc9inm0t3fygjwdpTIyZiE8vUvLSssJEL24H%2FzWePqWTQv0i66lYWXt8zyUfo5DpNd6wZPLM5w2YC6Xzx%2B3tiRn1kL10NCRJSGaivD%2FRYBKpA0LJeZAlUc9lllOOwf7GbjL7IrnA0A94xfpijBNxH7e2P0GKxs16gOTiN1B0TG3oLYT7yezfzt0Tz%2BB%2FhYAH12DHuXURITU%2Fw40PDIBv8cMLqEQ8fZfVCOm7UUFguuqIu4Lrrmxp%2BY3cARK5oYPtLsMq1Q3ciNB6ktAHcrpWKdZ0otwukNEQf3HE3l8wq3HjyBO5feVGVB6KGv8dQ1er1BrbTFeY1jY2rP2g4l7oMykSH0s5CKzwAB4gyTgvtdYrg7OQJSrz%2B2fHBKeSd5eRfJFHWKx%2FLJZF4oolBQ87ttwY7M9T%2FpcoEfKgKcURvvIoObpJfsq3QAO9OSCujVm0dl87NQuYGueAx5uEbxco%2FJNnJtOsOxwlrC%2BRO0hkp8OHj5eETMzxGAWiFsZX4VX%2F22LjcAkBOx0aSqVnDeat2Pyx%2BwZ2lzLbCCT%2B00OlCBSRlsQZEIGBDFwPdyyeNKRqDaal8%2Bvb2IKhVyRDMwU0j1tKOyKj0BqIY9XnjMK%2BTq70GOqUBj%2BZDidkgkoqYqkRcefKQlJ3KQYQ8KuHEUI6Wa5sW4Xsapylvw7DAyqFPg2zW4%2FWsmwk7jHloizoh51aO4rWALICjgq%2BzBvLakkF5RULooBhFb520RCZhplQtxP4PnwZpT5C00x498e5u14n3mHv%2BE77GXe%2F9ff%2BpUsLJkY2zIk9kFwH%2FB01MfuFfG6i0p1n7WOELaRgUaY14CMzVXOuypoY0hxlI&X-Amz-Signature=9f5ccf5a13fde529adbfb53c73e98371f713afe822318f3e175c6b35792883fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JW3BZH4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCThOd2ce2cCHB1eJXeVWmuPQcgbNinAEGX2fn5SfFmewIgP%2Fi1l0lUCUIYCwDdXNSHMmsTqnJObTrlVV9%2FCEUH4bkqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6LPoU7DkrfFtYIeCrcA57TMQqjZgh%2FT3Hyq%2Frwg7CCc9inm0t3fygjwdpTIyZiE8vUvLSssJEL24H%2FzWePqWTQv0i66lYWXt8zyUfo5DpNd6wZPLM5w2YC6Xzx%2B3tiRn1kL10NCRJSGaivD%2FRYBKpA0LJeZAlUc9lllOOwf7GbjL7IrnA0A94xfpijBNxH7e2P0GKxs16gOTiN1B0TG3oLYT7yezfzt0Tz%2BB%2FhYAH12DHuXURITU%2Fw40PDIBv8cMLqEQ8fZfVCOm7UUFguuqIu4Lrrmxp%2BY3cARK5oYPtLsMq1Q3ciNB6ktAHcrpWKdZ0otwukNEQf3HE3l8wq3HjyBO5feVGVB6KGv8dQ1er1BrbTFeY1jY2rP2g4l7oMykSH0s5CKzwAB4gyTgvtdYrg7OQJSrz%2B2fHBKeSd5eRfJFHWKx%2FLJZF4oolBQ87ttwY7M9T%2FpcoEfKgKcURvvIoObpJfsq3QAO9OSCujVm0dl87NQuYGueAx5uEbxco%2FJNnJtOsOxwlrC%2BRO0hkp8OHj5eETMzxGAWiFsZX4VX%2F22LjcAkBOx0aSqVnDeat2Pyx%2BwZ2lzLbCCT%2B00OlCBSRlsQZEIGBDFwPdyyeNKRqDaal8%2Bvb2IKhVyRDMwU0j1tKOyKj0BqIY9XnjMK%2BTq70GOqUBj%2BZDidkgkoqYqkRcefKQlJ3KQYQ8KuHEUI6Wa5sW4Xsapylvw7DAyqFPg2zW4%2FWsmwk7jHloizoh51aO4rWALICjgq%2BzBvLakkF5RULooBhFb520RCZhplQtxP4PnwZpT5C00x498e5u14n3mHv%2BE77GXe%2F9ff%2BpUsLJkY2zIk9kFwH%2FB01MfuFfG6i0p1n7WOELaRgUaY14CMzVXOuypoY0hxlI&X-Amz-Signature=dfb68ca0d02411e0bc3dfd0603a70725582354938c84e9c3766fecccf253ab5e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JW3BZH4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCThOd2ce2cCHB1eJXeVWmuPQcgbNinAEGX2fn5SfFmewIgP%2Fi1l0lUCUIYCwDdXNSHMmsTqnJObTrlVV9%2FCEUH4bkqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6LPoU7DkrfFtYIeCrcA57TMQqjZgh%2FT3Hyq%2Frwg7CCc9inm0t3fygjwdpTIyZiE8vUvLSssJEL24H%2FzWePqWTQv0i66lYWXt8zyUfo5DpNd6wZPLM5w2YC6Xzx%2B3tiRn1kL10NCRJSGaivD%2FRYBKpA0LJeZAlUc9lllOOwf7GbjL7IrnA0A94xfpijBNxH7e2P0GKxs16gOTiN1B0TG3oLYT7yezfzt0Tz%2BB%2FhYAH12DHuXURITU%2Fw40PDIBv8cMLqEQ8fZfVCOm7UUFguuqIu4Lrrmxp%2BY3cARK5oYPtLsMq1Q3ciNB6ktAHcrpWKdZ0otwukNEQf3HE3l8wq3HjyBO5feVGVB6KGv8dQ1er1BrbTFeY1jY2rP2g4l7oMykSH0s5CKzwAB4gyTgvtdYrg7OQJSrz%2B2fHBKeSd5eRfJFHWKx%2FLJZF4oolBQ87ttwY7M9T%2FpcoEfKgKcURvvIoObpJfsq3QAO9OSCujVm0dl87NQuYGueAx5uEbxco%2FJNnJtOsOxwlrC%2BRO0hkp8OHj5eETMzxGAWiFsZX4VX%2F22LjcAkBOx0aSqVnDeat2Pyx%2BwZ2lzLbCCT%2B00OlCBSRlsQZEIGBDFwPdyyeNKRqDaal8%2Bvb2IKhVyRDMwU0j1tKOyKj0BqIY9XnjMK%2BTq70GOqUBj%2BZDidkgkoqYqkRcefKQlJ3KQYQ8KuHEUI6Wa5sW4Xsapylvw7DAyqFPg2zW4%2FWsmwk7jHloizoh51aO4rWALICjgq%2BzBvLakkF5RULooBhFb520RCZhplQtxP4PnwZpT5C00x498e5u14n3mHv%2BE77GXe%2F9ff%2BpUsLJkY2zIk9kFwH%2FB01MfuFfG6i0p1n7WOELaRgUaY14CMzVXOuypoY0hxlI&X-Amz-Signature=4762a28471db8b2452bb68361d00f459743b8f6fee06ffcaa75de31dfca0afa2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
