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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUFQRTT5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFNdOD6xKC2YocRr1KXns3tJRjBExaQ%2FTAOlW12KHe5AIgFbWw8ESsyIvvlQ3zsM053o76d%2FD5%2BFylmtOUiLzWVmEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOve629ds0kWgMWFhyrcAyMzN%2B9te3TxZ5bNhHNQdaIUHc8QL5SJrqVBzKTdXPkhdMf4r7iVBTXv4cHP2%2B4TRw6EO5SOybNjILACciHny4vajSZJA4wVrufcldmDb%2B0X9V7bL23AngU0yNElEeidgIIQr4oZld5vce5617iH8%2BdczkjiIsKxWQYV6MjFlSpqhvoYyDJkEP5JXsIKfOP0pb8j%2FOx6oDsb4f70P7tbc%2BJPxafwN15hsueEWXtQFB1OXVxz68TOBx%2B%2BXHYEByioncuxWcHhEDR9zmw2LxhuFd%2Blz0B244IIsZTOHjBdkpQlYaRz6A70RDvq35KNVtf36bzdPyRkZpeSVX1stkDx5DpGkSNmULGvrDlYrS3c4mcPFKcjo2c11se6kOw0AS3QyVmh2C8fbg00hs%2BWNdAcYvOAl59jtM%2BXGzNSNOBkmndKxPekrUD0P5qJIO9mcYIK5Gy8tx0BK%2BB7QUJtPMit8xI%2B4rOC7WRNAcfJZzy7%2F1P4vSkfGwo%2FdTJrwlV%2F2M1LiGo%2F69sFDgATN4fnjUGK8PyS45hYQ1Iq8MtYdKjocjQKCB2lbLyRqvqoht7raDGMks7AMWTlFo6EV0f1ndlPomGdX2bxFL1QvfIlYytPFj93pDqJr7wT%2BsBw551KMKX6gsMGOqUBG3SomKtzwu2BMJSkpD9LakhGogF7%2FPm3HED0Na285Xz9ORTnXnCFiL5WKU1gW1ci1R33%2F0Du0UyAX2CRMz4GCWWfgmR0kCoCvGIDTOHncP2%2F0F7w5BXMjAK4N7r%2FSqgcKWy3%2ByyOrR23AMr15I4Ix0n0x%2FXmEvu4hOirdILrkqzpYAGgFnMoIbWi%2BORicF%2FNmbSr%2F9S8qhSeXYAz2bZoN8uBVOch&X-Amz-Signature=95d76acd85d63ecfff9fc19e41e4929ccbc18fe70de525e79583600bff00a961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUFQRTT5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFNdOD6xKC2YocRr1KXns3tJRjBExaQ%2FTAOlW12KHe5AIgFbWw8ESsyIvvlQ3zsM053o76d%2FD5%2BFylmtOUiLzWVmEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOve629ds0kWgMWFhyrcAyMzN%2B9te3TxZ5bNhHNQdaIUHc8QL5SJrqVBzKTdXPkhdMf4r7iVBTXv4cHP2%2B4TRw6EO5SOybNjILACciHny4vajSZJA4wVrufcldmDb%2B0X9V7bL23AngU0yNElEeidgIIQr4oZld5vce5617iH8%2BdczkjiIsKxWQYV6MjFlSpqhvoYyDJkEP5JXsIKfOP0pb8j%2FOx6oDsb4f70P7tbc%2BJPxafwN15hsueEWXtQFB1OXVxz68TOBx%2B%2BXHYEByioncuxWcHhEDR9zmw2LxhuFd%2Blz0B244IIsZTOHjBdkpQlYaRz6A70RDvq35KNVtf36bzdPyRkZpeSVX1stkDx5DpGkSNmULGvrDlYrS3c4mcPFKcjo2c11se6kOw0AS3QyVmh2C8fbg00hs%2BWNdAcYvOAl59jtM%2BXGzNSNOBkmndKxPekrUD0P5qJIO9mcYIK5Gy8tx0BK%2BB7QUJtPMit8xI%2B4rOC7WRNAcfJZzy7%2F1P4vSkfGwo%2FdTJrwlV%2F2M1LiGo%2F69sFDgATN4fnjUGK8PyS45hYQ1Iq8MtYdKjocjQKCB2lbLyRqvqoht7raDGMks7AMWTlFo6EV0f1ndlPomGdX2bxFL1QvfIlYytPFj93pDqJr7wT%2BsBw551KMKX6gsMGOqUBG3SomKtzwu2BMJSkpD9LakhGogF7%2FPm3HED0Na285Xz9ORTnXnCFiL5WKU1gW1ci1R33%2F0Du0UyAX2CRMz4GCWWfgmR0kCoCvGIDTOHncP2%2F0F7w5BXMjAK4N7r%2FSqgcKWy3%2ByyOrR23AMr15I4Ix0n0x%2FXmEvu4hOirdILrkqzpYAGgFnMoIbWi%2BORicF%2FNmbSr%2F9S8qhSeXYAz2bZoN8uBVOch&X-Amz-Signature=9dcc6711984727901a551adaac4cb787d81c33a93284cfbc9322feb589214338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUFQRTT5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFNdOD6xKC2YocRr1KXns3tJRjBExaQ%2FTAOlW12KHe5AIgFbWw8ESsyIvvlQ3zsM053o76d%2FD5%2BFylmtOUiLzWVmEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOve629ds0kWgMWFhyrcAyMzN%2B9te3TxZ5bNhHNQdaIUHc8QL5SJrqVBzKTdXPkhdMf4r7iVBTXv4cHP2%2B4TRw6EO5SOybNjILACciHny4vajSZJA4wVrufcldmDb%2B0X9V7bL23AngU0yNElEeidgIIQr4oZld5vce5617iH8%2BdczkjiIsKxWQYV6MjFlSpqhvoYyDJkEP5JXsIKfOP0pb8j%2FOx6oDsb4f70P7tbc%2BJPxafwN15hsueEWXtQFB1OXVxz68TOBx%2B%2BXHYEByioncuxWcHhEDR9zmw2LxhuFd%2Blz0B244IIsZTOHjBdkpQlYaRz6A70RDvq35KNVtf36bzdPyRkZpeSVX1stkDx5DpGkSNmULGvrDlYrS3c4mcPFKcjo2c11se6kOw0AS3QyVmh2C8fbg00hs%2BWNdAcYvOAl59jtM%2BXGzNSNOBkmndKxPekrUD0P5qJIO9mcYIK5Gy8tx0BK%2BB7QUJtPMit8xI%2B4rOC7WRNAcfJZzy7%2F1P4vSkfGwo%2FdTJrwlV%2F2M1LiGo%2F69sFDgATN4fnjUGK8PyS45hYQ1Iq8MtYdKjocjQKCB2lbLyRqvqoht7raDGMks7AMWTlFo6EV0f1ndlPomGdX2bxFL1QvfIlYytPFj93pDqJr7wT%2BsBw551KMKX6gsMGOqUBG3SomKtzwu2BMJSkpD9LakhGogF7%2FPm3HED0Na285Xz9ORTnXnCFiL5WKU1gW1ci1R33%2F0Du0UyAX2CRMz4GCWWfgmR0kCoCvGIDTOHncP2%2F0F7w5BXMjAK4N7r%2FSqgcKWy3%2ByyOrR23AMr15I4Ix0n0x%2FXmEvu4hOirdILrkqzpYAGgFnMoIbWi%2BORicF%2FNmbSr%2F9S8qhSeXYAz2bZoN8uBVOch&X-Amz-Signature=c62c9d56dd300f1a427224324d176818fa32cade5111d645137903c5d8502804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUFQRTT5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFNdOD6xKC2YocRr1KXns3tJRjBExaQ%2FTAOlW12KHe5AIgFbWw8ESsyIvvlQ3zsM053o76d%2FD5%2BFylmtOUiLzWVmEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOve629ds0kWgMWFhyrcAyMzN%2B9te3TxZ5bNhHNQdaIUHc8QL5SJrqVBzKTdXPkhdMf4r7iVBTXv4cHP2%2B4TRw6EO5SOybNjILACciHny4vajSZJA4wVrufcldmDb%2B0X9V7bL23AngU0yNElEeidgIIQr4oZld5vce5617iH8%2BdczkjiIsKxWQYV6MjFlSpqhvoYyDJkEP5JXsIKfOP0pb8j%2FOx6oDsb4f70P7tbc%2BJPxafwN15hsueEWXtQFB1OXVxz68TOBx%2B%2BXHYEByioncuxWcHhEDR9zmw2LxhuFd%2Blz0B244IIsZTOHjBdkpQlYaRz6A70RDvq35KNVtf36bzdPyRkZpeSVX1stkDx5DpGkSNmULGvrDlYrS3c4mcPFKcjo2c11se6kOw0AS3QyVmh2C8fbg00hs%2BWNdAcYvOAl59jtM%2BXGzNSNOBkmndKxPekrUD0P5qJIO9mcYIK5Gy8tx0BK%2BB7QUJtPMit8xI%2B4rOC7WRNAcfJZzy7%2F1P4vSkfGwo%2FdTJrwlV%2F2M1LiGo%2F69sFDgATN4fnjUGK8PyS45hYQ1Iq8MtYdKjocjQKCB2lbLyRqvqoht7raDGMks7AMWTlFo6EV0f1ndlPomGdX2bxFL1QvfIlYytPFj93pDqJr7wT%2BsBw551KMKX6gsMGOqUBG3SomKtzwu2BMJSkpD9LakhGogF7%2FPm3HED0Na285Xz9ORTnXnCFiL5WKU1gW1ci1R33%2F0Du0UyAX2CRMz4GCWWfgmR0kCoCvGIDTOHncP2%2F0F7w5BXMjAK4N7r%2FSqgcKWy3%2ByyOrR23AMr15I4Ix0n0x%2FXmEvu4hOirdILrkqzpYAGgFnMoIbWi%2BORicF%2FNmbSr%2F9S8qhSeXYAz2bZoN8uBVOch&X-Amz-Signature=a51766766a989afb8705a18ff307f60729748c5e02547d62af69c0f3afd75106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUFQRTT5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFNdOD6xKC2YocRr1KXns3tJRjBExaQ%2FTAOlW12KHe5AIgFbWw8ESsyIvvlQ3zsM053o76d%2FD5%2BFylmtOUiLzWVmEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOve629ds0kWgMWFhyrcAyMzN%2B9te3TxZ5bNhHNQdaIUHc8QL5SJrqVBzKTdXPkhdMf4r7iVBTXv4cHP2%2B4TRw6EO5SOybNjILACciHny4vajSZJA4wVrufcldmDb%2B0X9V7bL23AngU0yNElEeidgIIQr4oZld5vce5617iH8%2BdczkjiIsKxWQYV6MjFlSpqhvoYyDJkEP5JXsIKfOP0pb8j%2FOx6oDsb4f70P7tbc%2BJPxafwN15hsueEWXtQFB1OXVxz68TOBx%2B%2BXHYEByioncuxWcHhEDR9zmw2LxhuFd%2Blz0B244IIsZTOHjBdkpQlYaRz6A70RDvq35KNVtf36bzdPyRkZpeSVX1stkDx5DpGkSNmULGvrDlYrS3c4mcPFKcjo2c11se6kOw0AS3QyVmh2C8fbg00hs%2BWNdAcYvOAl59jtM%2BXGzNSNOBkmndKxPekrUD0P5qJIO9mcYIK5Gy8tx0BK%2BB7QUJtPMit8xI%2B4rOC7WRNAcfJZzy7%2F1P4vSkfGwo%2FdTJrwlV%2F2M1LiGo%2F69sFDgATN4fnjUGK8PyS45hYQ1Iq8MtYdKjocjQKCB2lbLyRqvqoht7raDGMks7AMWTlFo6EV0f1ndlPomGdX2bxFL1QvfIlYytPFj93pDqJr7wT%2BsBw551KMKX6gsMGOqUBG3SomKtzwu2BMJSkpD9LakhGogF7%2FPm3HED0Na285Xz9ORTnXnCFiL5WKU1gW1ci1R33%2F0Du0UyAX2CRMz4GCWWfgmR0kCoCvGIDTOHncP2%2F0F7w5BXMjAK4N7r%2FSqgcKWy3%2ByyOrR23AMr15I4Ix0n0x%2FXmEvu4hOirdILrkqzpYAGgFnMoIbWi%2BORicF%2FNmbSr%2F9S8qhSeXYAz2bZoN8uBVOch&X-Amz-Signature=965cefb10002a6e1f68025d07504421aaef40a32a208ab6647270c064e30eaba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
