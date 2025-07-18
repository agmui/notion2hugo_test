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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBUGFE3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCrGVECUVzNakr%2BF6HvTd22O6l2LW54VJP%2BLCdRCrmpCwIhANHTdbJ%2BNZG2p6mf2BHEz6InrVc6aVyG%2FWSn2PwZDjzeKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B%2B03w5IOJYmZu6%2Bcq3APShLdXt5jQ5p%2BB%2BbtVSVL03PvCf9VnKWR0E2DLxPewEYZDyVeNGo6y5p%2Fhxqg9Z%2B%2FztJeCooTqTrV3PcOkLBhD6snCSfTr7bU6DCJvXyGQdCyw6nsA2unVT%2FITjZ7wkJ69w2G556b24Eq2FnHxS8V5KQBsIGGjUYPP5HMQ0XgUxochj9omtqbCWDFPmwBwM4NJUygEr6FyIQhZueD5yyH99De%2Fh%2B5RDI%2ByEZZFYDxAuTZX%2BlFY7zRul0j8Xv%2BI5R8wuc1UMaeF0eyKltslhDlj2md8qrAzrR9P85nBbAtRoBSgF0l3pAxJtmBagCLYKJtkXwT%2B%2B%2FZsZhIY4rvZw%2Bb0o5O75f2sm6QxPeCrdLaFMS1%2FFNnxgadyJR%2FMLC5Bf2Nntp0YHOtl5g6lBtOnVLAmhMEWlisog4gkAkWZcOu8MYpxkXgWTjYGUe4NluokcqKODk4eL29GtKHv6EY%2FnoLdggMFLcgz69IvbTqBUiIrl3uhk4%2BwvDs3Ij6AOlNIrwz1a4fR8IAmN28ytDuSpNCw1SycAUhePSIR6Y8nuUs92%2Byd2duAnrYiiKOgSS5DE%2BL3%2FsCJwTroZecxK%2FkIUcHtSUIrhmAgvZwrAi12liXFlezWdc7A5sK8O05MGjDi%2FefDBjqkAZWNb7s25JofnzZ6ZOoHHCGT0pbcpBXfXPJepedzP%2BBbU0CC8MTO0uPfJQd6vet%2FxrcDHnuW0VnZsP%2Fi9b1ZgrHTBkwLHiari4IWc3dIE6z3u1FciQFVC01Ldz9vBwUbslsUAfYH%2FSVY0kVnFdkNk8G7IpOkPxxNqaCp2twi5zy5jmFgE2kp20euSpP0FxYZVW1QR8gJtjOWmVEJgJYCSaqUbOaN&X-Amz-Signature=2dd12157acc4540b3c3db1967be75ed034eb272864bbb79c19680642beedc30c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBUGFE3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCrGVECUVzNakr%2BF6HvTd22O6l2LW54VJP%2BLCdRCrmpCwIhANHTdbJ%2BNZG2p6mf2BHEz6InrVc6aVyG%2FWSn2PwZDjzeKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B%2B03w5IOJYmZu6%2Bcq3APShLdXt5jQ5p%2BB%2BbtVSVL03PvCf9VnKWR0E2DLxPewEYZDyVeNGo6y5p%2Fhxqg9Z%2B%2FztJeCooTqTrV3PcOkLBhD6snCSfTr7bU6DCJvXyGQdCyw6nsA2unVT%2FITjZ7wkJ69w2G556b24Eq2FnHxS8V5KQBsIGGjUYPP5HMQ0XgUxochj9omtqbCWDFPmwBwM4NJUygEr6FyIQhZueD5yyH99De%2Fh%2B5RDI%2ByEZZFYDxAuTZX%2BlFY7zRul0j8Xv%2BI5R8wuc1UMaeF0eyKltslhDlj2md8qrAzrR9P85nBbAtRoBSgF0l3pAxJtmBagCLYKJtkXwT%2B%2B%2FZsZhIY4rvZw%2Bb0o5O75f2sm6QxPeCrdLaFMS1%2FFNnxgadyJR%2FMLC5Bf2Nntp0YHOtl5g6lBtOnVLAmhMEWlisog4gkAkWZcOu8MYpxkXgWTjYGUe4NluokcqKODk4eL29GtKHv6EY%2FnoLdggMFLcgz69IvbTqBUiIrl3uhk4%2BwvDs3Ij6AOlNIrwz1a4fR8IAmN28ytDuSpNCw1SycAUhePSIR6Y8nuUs92%2Byd2duAnrYiiKOgSS5DE%2BL3%2FsCJwTroZecxK%2FkIUcHtSUIrhmAgvZwrAi12liXFlezWdc7A5sK8O05MGjDi%2FefDBjqkAZWNb7s25JofnzZ6ZOoHHCGT0pbcpBXfXPJepedzP%2BBbU0CC8MTO0uPfJQd6vet%2FxrcDHnuW0VnZsP%2Fi9b1ZgrHTBkwLHiari4IWc3dIE6z3u1FciQFVC01Ldz9vBwUbslsUAfYH%2FSVY0kVnFdkNk8G7IpOkPxxNqaCp2twi5zy5jmFgE2kp20euSpP0FxYZVW1QR8gJtjOWmVEJgJYCSaqUbOaN&X-Amz-Signature=8bf746dd6c29957c3fd48bba8ebce2c59b539163838f957468981f8b587e71ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBUGFE3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCrGVECUVzNakr%2BF6HvTd22O6l2LW54VJP%2BLCdRCrmpCwIhANHTdbJ%2BNZG2p6mf2BHEz6InrVc6aVyG%2FWSn2PwZDjzeKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B%2B03w5IOJYmZu6%2Bcq3APShLdXt5jQ5p%2BB%2BbtVSVL03PvCf9VnKWR0E2DLxPewEYZDyVeNGo6y5p%2Fhxqg9Z%2B%2FztJeCooTqTrV3PcOkLBhD6snCSfTr7bU6DCJvXyGQdCyw6nsA2unVT%2FITjZ7wkJ69w2G556b24Eq2FnHxS8V5KQBsIGGjUYPP5HMQ0XgUxochj9omtqbCWDFPmwBwM4NJUygEr6FyIQhZueD5yyH99De%2Fh%2B5RDI%2ByEZZFYDxAuTZX%2BlFY7zRul0j8Xv%2BI5R8wuc1UMaeF0eyKltslhDlj2md8qrAzrR9P85nBbAtRoBSgF0l3pAxJtmBagCLYKJtkXwT%2B%2B%2FZsZhIY4rvZw%2Bb0o5O75f2sm6QxPeCrdLaFMS1%2FFNnxgadyJR%2FMLC5Bf2Nntp0YHOtl5g6lBtOnVLAmhMEWlisog4gkAkWZcOu8MYpxkXgWTjYGUe4NluokcqKODk4eL29GtKHv6EY%2FnoLdggMFLcgz69IvbTqBUiIrl3uhk4%2BwvDs3Ij6AOlNIrwz1a4fR8IAmN28ytDuSpNCw1SycAUhePSIR6Y8nuUs92%2Byd2duAnrYiiKOgSS5DE%2BL3%2FsCJwTroZecxK%2FkIUcHtSUIrhmAgvZwrAi12liXFlezWdc7A5sK8O05MGjDi%2FefDBjqkAZWNb7s25JofnzZ6ZOoHHCGT0pbcpBXfXPJepedzP%2BBbU0CC8MTO0uPfJQd6vet%2FxrcDHnuW0VnZsP%2Fi9b1ZgrHTBkwLHiari4IWc3dIE6z3u1FciQFVC01Ldz9vBwUbslsUAfYH%2FSVY0kVnFdkNk8G7IpOkPxxNqaCp2twi5zy5jmFgE2kp20euSpP0FxYZVW1QR8gJtjOWmVEJgJYCSaqUbOaN&X-Amz-Signature=68d45c4683b49121b0a16b7d4919d8ddf18f2b1204bc617952b6558e38612524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBUGFE3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCrGVECUVzNakr%2BF6HvTd22O6l2LW54VJP%2BLCdRCrmpCwIhANHTdbJ%2BNZG2p6mf2BHEz6InrVc6aVyG%2FWSn2PwZDjzeKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B%2B03w5IOJYmZu6%2Bcq3APShLdXt5jQ5p%2BB%2BbtVSVL03PvCf9VnKWR0E2DLxPewEYZDyVeNGo6y5p%2Fhxqg9Z%2B%2FztJeCooTqTrV3PcOkLBhD6snCSfTr7bU6DCJvXyGQdCyw6nsA2unVT%2FITjZ7wkJ69w2G556b24Eq2FnHxS8V5KQBsIGGjUYPP5HMQ0XgUxochj9omtqbCWDFPmwBwM4NJUygEr6FyIQhZueD5yyH99De%2Fh%2B5RDI%2ByEZZFYDxAuTZX%2BlFY7zRul0j8Xv%2BI5R8wuc1UMaeF0eyKltslhDlj2md8qrAzrR9P85nBbAtRoBSgF0l3pAxJtmBagCLYKJtkXwT%2B%2B%2FZsZhIY4rvZw%2Bb0o5O75f2sm6QxPeCrdLaFMS1%2FFNnxgadyJR%2FMLC5Bf2Nntp0YHOtl5g6lBtOnVLAmhMEWlisog4gkAkWZcOu8MYpxkXgWTjYGUe4NluokcqKODk4eL29GtKHv6EY%2FnoLdggMFLcgz69IvbTqBUiIrl3uhk4%2BwvDs3Ij6AOlNIrwz1a4fR8IAmN28ytDuSpNCw1SycAUhePSIR6Y8nuUs92%2Byd2duAnrYiiKOgSS5DE%2BL3%2FsCJwTroZecxK%2FkIUcHtSUIrhmAgvZwrAi12liXFlezWdc7A5sK8O05MGjDi%2FefDBjqkAZWNb7s25JofnzZ6ZOoHHCGT0pbcpBXfXPJepedzP%2BBbU0CC8MTO0uPfJQd6vet%2FxrcDHnuW0VnZsP%2Fi9b1ZgrHTBkwLHiari4IWc3dIE6z3u1FciQFVC01Ldz9vBwUbslsUAfYH%2FSVY0kVnFdkNk8G7IpOkPxxNqaCp2twi5zy5jmFgE2kp20euSpP0FxYZVW1QR8gJtjOWmVEJgJYCSaqUbOaN&X-Amz-Signature=6193b163030a87dd7de78490f0ec96a838ffa90ef2ee5d4e9290ea88ba83fce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBUGFE3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCrGVECUVzNakr%2BF6HvTd22O6l2LW54VJP%2BLCdRCrmpCwIhANHTdbJ%2BNZG2p6mf2BHEz6InrVc6aVyG%2FWSn2PwZDjzeKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B%2B03w5IOJYmZu6%2Bcq3APShLdXt5jQ5p%2BB%2BbtVSVL03PvCf9VnKWR0E2DLxPewEYZDyVeNGo6y5p%2Fhxqg9Z%2B%2FztJeCooTqTrV3PcOkLBhD6snCSfTr7bU6DCJvXyGQdCyw6nsA2unVT%2FITjZ7wkJ69w2G556b24Eq2FnHxS8V5KQBsIGGjUYPP5HMQ0XgUxochj9omtqbCWDFPmwBwM4NJUygEr6FyIQhZueD5yyH99De%2Fh%2B5RDI%2ByEZZFYDxAuTZX%2BlFY7zRul0j8Xv%2BI5R8wuc1UMaeF0eyKltslhDlj2md8qrAzrR9P85nBbAtRoBSgF0l3pAxJtmBagCLYKJtkXwT%2B%2B%2FZsZhIY4rvZw%2Bb0o5O75f2sm6QxPeCrdLaFMS1%2FFNnxgadyJR%2FMLC5Bf2Nntp0YHOtl5g6lBtOnVLAmhMEWlisog4gkAkWZcOu8MYpxkXgWTjYGUe4NluokcqKODk4eL29GtKHv6EY%2FnoLdggMFLcgz69IvbTqBUiIrl3uhk4%2BwvDs3Ij6AOlNIrwz1a4fR8IAmN28ytDuSpNCw1SycAUhePSIR6Y8nuUs92%2Byd2duAnrYiiKOgSS5DE%2BL3%2FsCJwTroZecxK%2FkIUcHtSUIrhmAgvZwrAi12liXFlezWdc7A5sK8O05MGjDi%2FefDBjqkAZWNb7s25JofnzZ6ZOoHHCGT0pbcpBXfXPJepedzP%2BBbU0CC8MTO0uPfJQd6vet%2FxrcDHnuW0VnZsP%2Fi9b1ZgrHTBkwLHiari4IWc3dIE6z3u1FciQFVC01Ldz9vBwUbslsUAfYH%2FSVY0kVnFdkNk8G7IpOkPxxNqaCp2twi5zy5jmFgE2kp20euSpP0FxYZVW1QR8gJtjOWmVEJgJYCSaqUbOaN&X-Amz-Signature=bbf53ce46242f3510235575561f220a209d90338d4c6d336255082ba5ab68ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
