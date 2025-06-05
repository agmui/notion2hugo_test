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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WU63Z5H%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDFHP%2BJIw7ua8dt%2Beg3ZDELi22TvrBKCKpDxk3Jk%2BKp7QIhANnShJTV3o3Ah5uIZjvAizv0M4dGDXImPladFUYLkAygKv8DCEsQABoMNjM3NDIzMTgzODA1Igwcza0Ps6wdFcXbFLAq3AM1Y1EwH9KH0gjrE6snLpQPpP9SuV3q1KBJrVmelGdhMGqnOfaU03aqeR43kAB9a%2F9gb7MbVu%2FogeKmKpPRsksZbg09BEDzRGJWm8Z3FCINF%2F6FFzEyY7DYxbZzZlYeGpnbjd5iW4rrlReluCQIvrJFX%2BBYXnrGlLtd7kpaHSVAZo8gihsMSDxjQnIuKGL5pS6YFp0eC%2B3o4L5JhdlsESQJfS1ecifd5l11GR2alIwp31ezhVMwaFqQ07TnaGhoEXMtyZhJThls74pJrf%2BlJds9692utvgSZPbnDF1A76Cp3oV8g5372BftvFDyKJEtKBGRUaEpiLT4PxiIHKBTIvLgYHYPwJM20Lc%2B2kHHUaS4ub6daRXS5RTnDBxxCDaimWZ9yLBDtUrir%2FacyIcAFzTuoKPTH%2FAjsd3iwqm6%2Bx2ibeSxFgbeu6Syk%2BzmNEAxme9%2BoJ236I5%2FDS4Ar2Rx3TJsOEh2PnPhYpqNFy%2BwLuHdmYMLrjXmd02rj8XnCyS7kRZsw5SKz7b5cN0HK%2FqlsdFJhJRO9190pzDdBywu4sCwadbHzYXIXxt4csG3H%2F79USxcWPnyeItUiLR6Ci2swSFsQSqvhTyRBCdVApfxuagdxG1PzQSBGstpAW87UzD7qIfCBjqkAQVpCl%2Bybax2wJESQ9FKMKS%2F%2FF1qtee3ysFBFu29ZEi1KsS3Hq0J1LAVHDuwujd0Q%2BPrUZlJYGVkYLQKAIEMpAo385hB6zbHdW1QGlW3yCv3VKS222AddCkyfrp4JgwM5nDXyG53%2BWDv4V13MuMS0iE7xpHss%2Fmb8QQf2ty0whmk2L3mrmC4k2L4o7DRHdPBVFY%2FRevmFAB%2Fpj%2FMenNsaG0uNPwA&X-Amz-Signature=9d621a44e578caf27c1f723bc98b984a3cb144f21d1d2c005a820eb9ec6bec58&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WU63Z5H%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDFHP%2BJIw7ua8dt%2Beg3ZDELi22TvrBKCKpDxk3Jk%2BKp7QIhANnShJTV3o3Ah5uIZjvAizv0M4dGDXImPladFUYLkAygKv8DCEsQABoMNjM3NDIzMTgzODA1Igwcza0Ps6wdFcXbFLAq3AM1Y1EwH9KH0gjrE6snLpQPpP9SuV3q1KBJrVmelGdhMGqnOfaU03aqeR43kAB9a%2F9gb7MbVu%2FogeKmKpPRsksZbg09BEDzRGJWm8Z3FCINF%2F6FFzEyY7DYxbZzZlYeGpnbjd5iW4rrlReluCQIvrJFX%2BBYXnrGlLtd7kpaHSVAZo8gihsMSDxjQnIuKGL5pS6YFp0eC%2B3o4L5JhdlsESQJfS1ecifd5l11GR2alIwp31ezhVMwaFqQ07TnaGhoEXMtyZhJThls74pJrf%2BlJds9692utvgSZPbnDF1A76Cp3oV8g5372BftvFDyKJEtKBGRUaEpiLT4PxiIHKBTIvLgYHYPwJM20Lc%2B2kHHUaS4ub6daRXS5RTnDBxxCDaimWZ9yLBDtUrir%2FacyIcAFzTuoKPTH%2FAjsd3iwqm6%2Bx2ibeSxFgbeu6Syk%2BzmNEAxme9%2BoJ236I5%2FDS4Ar2Rx3TJsOEh2PnPhYpqNFy%2BwLuHdmYMLrjXmd02rj8XnCyS7kRZsw5SKz7b5cN0HK%2FqlsdFJhJRO9190pzDdBywu4sCwadbHzYXIXxt4csG3H%2F79USxcWPnyeItUiLR6Ci2swSFsQSqvhTyRBCdVApfxuagdxG1PzQSBGstpAW87UzD7qIfCBjqkAQVpCl%2Bybax2wJESQ9FKMKS%2F%2FF1qtee3ysFBFu29ZEi1KsS3Hq0J1LAVHDuwujd0Q%2BPrUZlJYGVkYLQKAIEMpAo385hB6zbHdW1QGlW3yCv3VKS222AddCkyfrp4JgwM5nDXyG53%2BWDv4V13MuMS0iE7xpHss%2Fmb8QQf2ty0whmk2L3mrmC4k2L4o7DRHdPBVFY%2FRevmFAB%2Fpj%2FMenNsaG0uNPwA&X-Amz-Signature=89134c0dd8b15088fa2803c4e4a2a01cfa39de24f159aa5a33f20e06b8f5122c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WU63Z5H%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDFHP%2BJIw7ua8dt%2Beg3ZDELi22TvrBKCKpDxk3Jk%2BKp7QIhANnShJTV3o3Ah5uIZjvAizv0M4dGDXImPladFUYLkAygKv8DCEsQABoMNjM3NDIzMTgzODA1Igwcza0Ps6wdFcXbFLAq3AM1Y1EwH9KH0gjrE6snLpQPpP9SuV3q1KBJrVmelGdhMGqnOfaU03aqeR43kAB9a%2F9gb7MbVu%2FogeKmKpPRsksZbg09BEDzRGJWm8Z3FCINF%2F6FFzEyY7DYxbZzZlYeGpnbjd5iW4rrlReluCQIvrJFX%2BBYXnrGlLtd7kpaHSVAZo8gihsMSDxjQnIuKGL5pS6YFp0eC%2B3o4L5JhdlsESQJfS1ecifd5l11GR2alIwp31ezhVMwaFqQ07TnaGhoEXMtyZhJThls74pJrf%2BlJds9692utvgSZPbnDF1A76Cp3oV8g5372BftvFDyKJEtKBGRUaEpiLT4PxiIHKBTIvLgYHYPwJM20Lc%2B2kHHUaS4ub6daRXS5RTnDBxxCDaimWZ9yLBDtUrir%2FacyIcAFzTuoKPTH%2FAjsd3iwqm6%2Bx2ibeSxFgbeu6Syk%2BzmNEAxme9%2BoJ236I5%2FDS4Ar2Rx3TJsOEh2PnPhYpqNFy%2BwLuHdmYMLrjXmd02rj8XnCyS7kRZsw5SKz7b5cN0HK%2FqlsdFJhJRO9190pzDdBywu4sCwadbHzYXIXxt4csG3H%2F79USxcWPnyeItUiLR6Ci2swSFsQSqvhTyRBCdVApfxuagdxG1PzQSBGstpAW87UzD7qIfCBjqkAQVpCl%2Bybax2wJESQ9FKMKS%2F%2FF1qtee3ysFBFu29ZEi1KsS3Hq0J1LAVHDuwujd0Q%2BPrUZlJYGVkYLQKAIEMpAo385hB6zbHdW1QGlW3yCv3VKS222AddCkyfrp4JgwM5nDXyG53%2BWDv4V13MuMS0iE7xpHss%2Fmb8QQf2ty0whmk2L3mrmC4k2L4o7DRHdPBVFY%2FRevmFAB%2Fpj%2FMenNsaG0uNPwA&X-Amz-Signature=c643c9fce4d26f12ba0d8ecdd97239e32a80fa2be7cc2c550a647a2a9f4f9f64&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WU63Z5H%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDFHP%2BJIw7ua8dt%2Beg3ZDELi22TvrBKCKpDxk3Jk%2BKp7QIhANnShJTV3o3Ah5uIZjvAizv0M4dGDXImPladFUYLkAygKv8DCEsQABoMNjM3NDIzMTgzODA1Igwcza0Ps6wdFcXbFLAq3AM1Y1EwH9KH0gjrE6snLpQPpP9SuV3q1KBJrVmelGdhMGqnOfaU03aqeR43kAB9a%2F9gb7MbVu%2FogeKmKpPRsksZbg09BEDzRGJWm8Z3FCINF%2F6FFzEyY7DYxbZzZlYeGpnbjd5iW4rrlReluCQIvrJFX%2BBYXnrGlLtd7kpaHSVAZo8gihsMSDxjQnIuKGL5pS6YFp0eC%2B3o4L5JhdlsESQJfS1ecifd5l11GR2alIwp31ezhVMwaFqQ07TnaGhoEXMtyZhJThls74pJrf%2BlJds9692utvgSZPbnDF1A76Cp3oV8g5372BftvFDyKJEtKBGRUaEpiLT4PxiIHKBTIvLgYHYPwJM20Lc%2B2kHHUaS4ub6daRXS5RTnDBxxCDaimWZ9yLBDtUrir%2FacyIcAFzTuoKPTH%2FAjsd3iwqm6%2Bx2ibeSxFgbeu6Syk%2BzmNEAxme9%2BoJ236I5%2FDS4Ar2Rx3TJsOEh2PnPhYpqNFy%2BwLuHdmYMLrjXmd02rj8XnCyS7kRZsw5SKz7b5cN0HK%2FqlsdFJhJRO9190pzDdBywu4sCwadbHzYXIXxt4csG3H%2F79USxcWPnyeItUiLR6Ci2swSFsQSqvhTyRBCdVApfxuagdxG1PzQSBGstpAW87UzD7qIfCBjqkAQVpCl%2Bybax2wJESQ9FKMKS%2F%2FF1qtee3ysFBFu29ZEi1KsS3Hq0J1LAVHDuwujd0Q%2BPrUZlJYGVkYLQKAIEMpAo385hB6zbHdW1QGlW3yCv3VKS222AddCkyfrp4JgwM5nDXyG53%2BWDv4V13MuMS0iE7xpHss%2Fmb8QQf2ty0whmk2L3mrmC4k2L4o7DRHdPBVFY%2FRevmFAB%2Fpj%2FMenNsaG0uNPwA&X-Amz-Signature=f8c77bb62b830592e3c3c8876dcaa6033a45b49e9578f66e7152918b96335545&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WU63Z5H%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDFHP%2BJIw7ua8dt%2Beg3ZDELi22TvrBKCKpDxk3Jk%2BKp7QIhANnShJTV3o3Ah5uIZjvAizv0M4dGDXImPladFUYLkAygKv8DCEsQABoMNjM3NDIzMTgzODA1Igwcza0Ps6wdFcXbFLAq3AM1Y1EwH9KH0gjrE6snLpQPpP9SuV3q1KBJrVmelGdhMGqnOfaU03aqeR43kAB9a%2F9gb7MbVu%2FogeKmKpPRsksZbg09BEDzRGJWm8Z3FCINF%2F6FFzEyY7DYxbZzZlYeGpnbjd5iW4rrlReluCQIvrJFX%2BBYXnrGlLtd7kpaHSVAZo8gihsMSDxjQnIuKGL5pS6YFp0eC%2B3o4L5JhdlsESQJfS1ecifd5l11GR2alIwp31ezhVMwaFqQ07TnaGhoEXMtyZhJThls74pJrf%2BlJds9692utvgSZPbnDF1A76Cp3oV8g5372BftvFDyKJEtKBGRUaEpiLT4PxiIHKBTIvLgYHYPwJM20Lc%2B2kHHUaS4ub6daRXS5RTnDBxxCDaimWZ9yLBDtUrir%2FacyIcAFzTuoKPTH%2FAjsd3iwqm6%2Bx2ibeSxFgbeu6Syk%2BzmNEAxme9%2BoJ236I5%2FDS4Ar2Rx3TJsOEh2PnPhYpqNFy%2BwLuHdmYMLrjXmd02rj8XnCyS7kRZsw5SKz7b5cN0HK%2FqlsdFJhJRO9190pzDdBywu4sCwadbHzYXIXxt4csG3H%2F79USxcWPnyeItUiLR6Ci2swSFsQSqvhTyRBCdVApfxuagdxG1PzQSBGstpAW87UzD7qIfCBjqkAQVpCl%2Bybax2wJESQ9FKMKS%2F%2FF1qtee3ysFBFu29ZEi1KsS3Hq0J1LAVHDuwujd0Q%2BPrUZlJYGVkYLQKAIEMpAo385hB6zbHdW1QGlW3yCv3VKS222AddCkyfrp4JgwM5nDXyG53%2BWDv4V13MuMS0iE7xpHss%2Fmb8QQf2ty0whmk2L3mrmC4k2L4o7DRHdPBVFY%2FRevmFAB%2Fpj%2FMenNsaG0uNPwA&X-Amz-Signature=60e6964dd7a53ad4eccb323d52c1689ae35a8c15b87a469ae1ff3fa398b3a8b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
