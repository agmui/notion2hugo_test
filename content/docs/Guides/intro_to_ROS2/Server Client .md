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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUB6VGAP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhfbTrWXMecHjNvYYBxXaMx0%2BNOWtmi8VRCAa2UL9spAiA3MKAjl1tXWNdBFVxfPbVVUxo5fuuVmtoOA5zCatm%2FACqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM54%2BNiorFnNxz%2BMlcKtwDReYI25Y3U45P3GiP9vYM1yh5F2bG4CalYSFrK764zTtfb%2B8Z6rDe8NK%2BHa6jcNTA8R3o9prN8q7YpnmdYS9u600beMFyPzxOFROVmNbdojoME7PjKAt7iySmco6ZY6jcF8ByOQlMla39USU4MM%2FW%2BC8cy3V28qr72zw0TsaN2LYC2YCMwMnJ10kwtkACGfWys5EOOQW1db1HTmXywBvbINzuAvGZrqlL1EOax5oBGMEjhbejcnRk%2FMLfrgsAfx1cwt087qlh7DiMe3c0mpJvSEIpcYEQYj4MNFQU2AEKQb7VNxJOInFRZlZhGbqkBWdH32dNmCVN6juMzWcDQ0Xz%2BSPK7AWPWs8K5zv4bXBcz9sMoeMacfVmewdVCPAebN3MJ8yESy1VCSCGfqUC4wqFtPPN56zPenRCdDKI0PGCZQW4S5Z6jgI3g7PGDBfqAj1ciFnsJSD%2FqEXV3ea3rHgqxEdDi%2B33nkwY981lngKj1PbGNik22AWF%2BMIuB6qSKJ1Fhwp%2BlVfVbOUrRWPxaT%2FQxqKCKZHWMxfOr44%2BTJ2Gn4%2FoLxp%2BD4yKE1TgiaA7ybwoxUMqdMiDFSCrQABOcEU3Yv933QP8wnCpoh%2FBh%2B%2Bax3n0wY7k38KVlTAefKEw5oG%2BwwY6pgE7MAmotpou0KzFsG89QaSIuoxIuonBAnPBmAsOXl%2BSYJAVfUfI9zHtoDoJBacyVp8XqDWLedtCgnUnwSL2Ve9lXQOWB3MdRnRq4efYeZzzvqYyWvOdgpJmbzv1HJVg62U7XwlRoLJs%2Fc00qQ1ZRLRE%2FFNPyETX8dqq5utvM9jlcptzKULzlV3xVMIw%2BUHwlFNyLw%2BtS1Myi%2BNEfbwAThixlM4oDoVT&X-Amz-Signature=c0bafcb00dee5dcc1f375a1f6f954f6498309bcc9789bc68519d3b5c06ef5af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUB6VGAP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhfbTrWXMecHjNvYYBxXaMx0%2BNOWtmi8VRCAa2UL9spAiA3MKAjl1tXWNdBFVxfPbVVUxo5fuuVmtoOA5zCatm%2FACqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM54%2BNiorFnNxz%2BMlcKtwDReYI25Y3U45P3GiP9vYM1yh5F2bG4CalYSFrK764zTtfb%2B8Z6rDe8NK%2BHa6jcNTA8R3o9prN8q7YpnmdYS9u600beMFyPzxOFROVmNbdojoME7PjKAt7iySmco6ZY6jcF8ByOQlMla39USU4MM%2FW%2BC8cy3V28qr72zw0TsaN2LYC2YCMwMnJ10kwtkACGfWys5EOOQW1db1HTmXywBvbINzuAvGZrqlL1EOax5oBGMEjhbejcnRk%2FMLfrgsAfx1cwt087qlh7DiMe3c0mpJvSEIpcYEQYj4MNFQU2AEKQb7VNxJOInFRZlZhGbqkBWdH32dNmCVN6juMzWcDQ0Xz%2BSPK7AWPWs8K5zv4bXBcz9sMoeMacfVmewdVCPAebN3MJ8yESy1VCSCGfqUC4wqFtPPN56zPenRCdDKI0PGCZQW4S5Z6jgI3g7PGDBfqAj1ciFnsJSD%2FqEXV3ea3rHgqxEdDi%2B33nkwY981lngKj1PbGNik22AWF%2BMIuB6qSKJ1Fhwp%2BlVfVbOUrRWPxaT%2FQxqKCKZHWMxfOr44%2BTJ2Gn4%2FoLxp%2BD4yKE1TgiaA7ybwoxUMqdMiDFSCrQABOcEU3Yv933QP8wnCpoh%2FBh%2B%2Bax3n0wY7k38KVlTAefKEw5oG%2BwwY6pgE7MAmotpou0KzFsG89QaSIuoxIuonBAnPBmAsOXl%2BSYJAVfUfI9zHtoDoJBacyVp8XqDWLedtCgnUnwSL2Ve9lXQOWB3MdRnRq4efYeZzzvqYyWvOdgpJmbzv1HJVg62U7XwlRoLJs%2Fc00qQ1ZRLRE%2FFNPyETX8dqq5utvM9jlcptzKULzlV3xVMIw%2BUHwlFNyLw%2BtS1Myi%2BNEfbwAThixlM4oDoVT&X-Amz-Signature=760bab648e2a7ddc0f6e7f00267d4d6f4c01227680ff4257e3b575d1aba06572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUB6VGAP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhfbTrWXMecHjNvYYBxXaMx0%2BNOWtmi8VRCAa2UL9spAiA3MKAjl1tXWNdBFVxfPbVVUxo5fuuVmtoOA5zCatm%2FACqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM54%2BNiorFnNxz%2BMlcKtwDReYI25Y3U45P3GiP9vYM1yh5F2bG4CalYSFrK764zTtfb%2B8Z6rDe8NK%2BHa6jcNTA8R3o9prN8q7YpnmdYS9u600beMFyPzxOFROVmNbdojoME7PjKAt7iySmco6ZY6jcF8ByOQlMla39USU4MM%2FW%2BC8cy3V28qr72zw0TsaN2LYC2YCMwMnJ10kwtkACGfWys5EOOQW1db1HTmXywBvbINzuAvGZrqlL1EOax5oBGMEjhbejcnRk%2FMLfrgsAfx1cwt087qlh7DiMe3c0mpJvSEIpcYEQYj4MNFQU2AEKQb7VNxJOInFRZlZhGbqkBWdH32dNmCVN6juMzWcDQ0Xz%2BSPK7AWPWs8K5zv4bXBcz9sMoeMacfVmewdVCPAebN3MJ8yESy1VCSCGfqUC4wqFtPPN56zPenRCdDKI0PGCZQW4S5Z6jgI3g7PGDBfqAj1ciFnsJSD%2FqEXV3ea3rHgqxEdDi%2B33nkwY981lngKj1PbGNik22AWF%2BMIuB6qSKJ1Fhwp%2BlVfVbOUrRWPxaT%2FQxqKCKZHWMxfOr44%2BTJ2Gn4%2FoLxp%2BD4yKE1TgiaA7ybwoxUMqdMiDFSCrQABOcEU3Yv933QP8wnCpoh%2FBh%2B%2Bax3n0wY7k38KVlTAefKEw5oG%2BwwY6pgE7MAmotpou0KzFsG89QaSIuoxIuonBAnPBmAsOXl%2BSYJAVfUfI9zHtoDoJBacyVp8XqDWLedtCgnUnwSL2Ve9lXQOWB3MdRnRq4efYeZzzvqYyWvOdgpJmbzv1HJVg62U7XwlRoLJs%2Fc00qQ1ZRLRE%2FFNPyETX8dqq5utvM9jlcptzKULzlV3xVMIw%2BUHwlFNyLw%2BtS1Myi%2BNEfbwAThixlM4oDoVT&X-Amz-Signature=6cbbb11aa7179512919397947668b0aa7d8707bd1a25a8ec5847165ecba20508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUB6VGAP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhfbTrWXMecHjNvYYBxXaMx0%2BNOWtmi8VRCAa2UL9spAiA3MKAjl1tXWNdBFVxfPbVVUxo5fuuVmtoOA5zCatm%2FACqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM54%2BNiorFnNxz%2BMlcKtwDReYI25Y3U45P3GiP9vYM1yh5F2bG4CalYSFrK764zTtfb%2B8Z6rDe8NK%2BHa6jcNTA8R3o9prN8q7YpnmdYS9u600beMFyPzxOFROVmNbdojoME7PjKAt7iySmco6ZY6jcF8ByOQlMla39USU4MM%2FW%2BC8cy3V28qr72zw0TsaN2LYC2YCMwMnJ10kwtkACGfWys5EOOQW1db1HTmXywBvbINzuAvGZrqlL1EOax5oBGMEjhbejcnRk%2FMLfrgsAfx1cwt087qlh7DiMe3c0mpJvSEIpcYEQYj4MNFQU2AEKQb7VNxJOInFRZlZhGbqkBWdH32dNmCVN6juMzWcDQ0Xz%2BSPK7AWPWs8K5zv4bXBcz9sMoeMacfVmewdVCPAebN3MJ8yESy1VCSCGfqUC4wqFtPPN56zPenRCdDKI0PGCZQW4S5Z6jgI3g7PGDBfqAj1ciFnsJSD%2FqEXV3ea3rHgqxEdDi%2B33nkwY981lngKj1PbGNik22AWF%2BMIuB6qSKJ1Fhwp%2BlVfVbOUrRWPxaT%2FQxqKCKZHWMxfOr44%2BTJ2Gn4%2FoLxp%2BD4yKE1TgiaA7ybwoxUMqdMiDFSCrQABOcEU3Yv933QP8wnCpoh%2FBh%2B%2Bax3n0wY7k38KVlTAefKEw5oG%2BwwY6pgE7MAmotpou0KzFsG89QaSIuoxIuonBAnPBmAsOXl%2BSYJAVfUfI9zHtoDoJBacyVp8XqDWLedtCgnUnwSL2Ve9lXQOWB3MdRnRq4efYeZzzvqYyWvOdgpJmbzv1HJVg62U7XwlRoLJs%2Fc00qQ1ZRLRE%2FFNPyETX8dqq5utvM9jlcptzKULzlV3xVMIw%2BUHwlFNyLw%2BtS1Myi%2BNEfbwAThixlM4oDoVT&X-Amz-Signature=870f29394760e86a7b858f11116015b4f878e553873e0e0fcb9de51c68ff69e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUB6VGAP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhfbTrWXMecHjNvYYBxXaMx0%2BNOWtmi8VRCAa2UL9spAiA3MKAjl1tXWNdBFVxfPbVVUxo5fuuVmtoOA5zCatm%2FACqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM54%2BNiorFnNxz%2BMlcKtwDReYI25Y3U45P3GiP9vYM1yh5F2bG4CalYSFrK764zTtfb%2B8Z6rDe8NK%2BHa6jcNTA8R3o9prN8q7YpnmdYS9u600beMFyPzxOFROVmNbdojoME7PjKAt7iySmco6ZY6jcF8ByOQlMla39USU4MM%2FW%2BC8cy3V28qr72zw0TsaN2LYC2YCMwMnJ10kwtkACGfWys5EOOQW1db1HTmXywBvbINzuAvGZrqlL1EOax5oBGMEjhbejcnRk%2FMLfrgsAfx1cwt087qlh7DiMe3c0mpJvSEIpcYEQYj4MNFQU2AEKQb7VNxJOInFRZlZhGbqkBWdH32dNmCVN6juMzWcDQ0Xz%2BSPK7AWPWs8K5zv4bXBcz9sMoeMacfVmewdVCPAebN3MJ8yESy1VCSCGfqUC4wqFtPPN56zPenRCdDKI0PGCZQW4S5Z6jgI3g7PGDBfqAj1ciFnsJSD%2FqEXV3ea3rHgqxEdDi%2B33nkwY981lngKj1PbGNik22AWF%2BMIuB6qSKJ1Fhwp%2BlVfVbOUrRWPxaT%2FQxqKCKZHWMxfOr44%2BTJ2Gn4%2FoLxp%2BD4yKE1TgiaA7ybwoxUMqdMiDFSCrQABOcEU3Yv933QP8wnCpoh%2FBh%2B%2Bax3n0wY7k38KVlTAefKEw5oG%2BwwY6pgE7MAmotpou0KzFsG89QaSIuoxIuonBAnPBmAsOXl%2BSYJAVfUfI9zHtoDoJBacyVp8XqDWLedtCgnUnwSL2Ve9lXQOWB3MdRnRq4efYeZzzvqYyWvOdgpJmbzv1HJVg62U7XwlRoLJs%2Fc00qQ1ZRLRE%2FFNPyETX8dqq5utvM9jlcptzKULzlV3xVMIw%2BUHwlFNyLw%2BtS1Myi%2BNEfbwAThixlM4oDoVT&X-Amz-Signature=30b36ccdd5474e3fba290a21b241ac81072c934a7784d46da690fa6278250d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
