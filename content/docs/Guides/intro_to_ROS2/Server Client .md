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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QREGOMPO%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAOWTw0dCBWolo76FMFZTWi6Ly4hl45fo%2B%2F0gocm6NYNAiAXyZT%2F3qsUnjmYd3kzX%2FfBab7RYiM7043GQBkPKRgKHiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmv6mQ4rBPFfdcb%2ByKtwD9vBOwO29TV12Q0DMzZvDFs5AUwRAPPR5%2FvXTBEoHkIGm%2BfXwywXFQHtkpJ7V2xzUGEUjYLE%2B9VV02XEg5KWkC1b6aIexNRlugN6IhLeRlTq%2BXOaNdg%2Fkj52OkazaPfLiCYHH7oygQsfnRaADShwyIO4fscmI0z5fjYQLdbmY9paSM2sYuAECcU1tocEc1M%2BrDSMsD9CKsflA%2FxK3L3mwz5NpEweCsb8rUEiMAA50C4PmakiwERKU87FRtLTYZb%2BpnAr1vBSXcJlV3OrjCeyhsUizgwnt7lZLB4ysXQo64OXfezb7lUs%2FD33Wh%2BkvLjn41fgw254znb7PTEQ%2BgT8VKqzkCQ%2B%2BfsRDZES%2BIvydaGu7SOHqhrrsHBbGj5pyic6PAji64878gEX866Yko5zn7ctLdDZ%2FW7SvuRVsgBx1Tu5EVUdZEPgEX3ufW6h9u%2FnxM7rm2NXjH12tI4boeYzdmq5qlF%2BxdDxQ8c21nDkPvgH6NDpyi7DTkwOyvNCw%2BEVG6TOHkFxat7hGlJ7MZUny86VpAjeJDid1VbeH5w1bnOFhbvRzP010nScivFu3cJjOuM2gITIDWAsARicNIOZxaVYWnOB06AVbEAI%2FmF5YEK5AAie2NdAkDP%2FvacAwrp3JwAY6pgHgAVXc2Oa6zNbTBq1VCg5ousyu%2F10AClNvmPp76j35GWefuPo7Jw7BE6yeuRQHDSDzEsgMe7adUgz%2BtQtXgC6B1Ic%2BvG8WsO3%2FHPFh6d1YFw9U3vY753u2rXiU0K0M2xI62aA8RNPA1Otd8gIPDzU4O37zTKDQk0XHA2yLFnrpWF1NCCEGyqpPJCYyVjCL5qMgTl9YjBPJRXhR%2F7ByHR0M0qThISWs&X-Amz-Signature=5e3f780b0e07c706ce2ad58d0abdff4b822535e2a5921073eeaf3fe44c4324f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QREGOMPO%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAOWTw0dCBWolo76FMFZTWi6Ly4hl45fo%2B%2F0gocm6NYNAiAXyZT%2F3qsUnjmYd3kzX%2FfBab7RYiM7043GQBkPKRgKHiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmv6mQ4rBPFfdcb%2ByKtwD9vBOwO29TV12Q0DMzZvDFs5AUwRAPPR5%2FvXTBEoHkIGm%2BfXwywXFQHtkpJ7V2xzUGEUjYLE%2B9VV02XEg5KWkC1b6aIexNRlugN6IhLeRlTq%2BXOaNdg%2Fkj52OkazaPfLiCYHH7oygQsfnRaADShwyIO4fscmI0z5fjYQLdbmY9paSM2sYuAECcU1tocEc1M%2BrDSMsD9CKsflA%2FxK3L3mwz5NpEweCsb8rUEiMAA50C4PmakiwERKU87FRtLTYZb%2BpnAr1vBSXcJlV3OrjCeyhsUizgwnt7lZLB4ysXQo64OXfezb7lUs%2FD33Wh%2BkvLjn41fgw254znb7PTEQ%2BgT8VKqzkCQ%2B%2BfsRDZES%2BIvydaGu7SOHqhrrsHBbGj5pyic6PAji64878gEX866Yko5zn7ctLdDZ%2FW7SvuRVsgBx1Tu5EVUdZEPgEX3ufW6h9u%2FnxM7rm2NXjH12tI4boeYzdmq5qlF%2BxdDxQ8c21nDkPvgH6NDpyi7DTkwOyvNCw%2BEVG6TOHkFxat7hGlJ7MZUny86VpAjeJDid1VbeH5w1bnOFhbvRzP010nScivFu3cJjOuM2gITIDWAsARicNIOZxaVYWnOB06AVbEAI%2FmF5YEK5AAie2NdAkDP%2FvacAwrp3JwAY6pgHgAVXc2Oa6zNbTBq1VCg5ousyu%2F10AClNvmPp76j35GWefuPo7Jw7BE6yeuRQHDSDzEsgMe7adUgz%2BtQtXgC6B1Ic%2BvG8WsO3%2FHPFh6d1YFw9U3vY753u2rXiU0K0M2xI62aA8RNPA1Otd8gIPDzU4O37zTKDQk0XHA2yLFnrpWF1NCCEGyqpPJCYyVjCL5qMgTl9YjBPJRXhR%2F7ByHR0M0qThISWs&X-Amz-Signature=ad3b546e83e9bb8a94196f406e3df1efc8ae7d13d174fc05c49f3e51000b1bdb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QREGOMPO%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAOWTw0dCBWolo76FMFZTWi6Ly4hl45fo%2B%2F0gocm6NYNAiAXyZT%2F3qsUnjmYd3kzX%2FfBab7RYiM7043GQBkPKRgKHiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmv6mQ4rBPFfdcb%2ByKtwD9vBOwO29TV12Q0DMzZvDFs5AUwRAPPR5%2FvXTBEoHkIGm%2BfXwywXFQHtkpJ7V2xzUGEUjYLE%2B9VV02XEg5KWkC1b6aIexNRlugN6IhLeRlTq%2BXOaNdg%2Fkj52OkazaPfLiCYHH7oygQsfnRaADShwyIO4fscmI0z5fjYQLdbmY9paSM2sYuAECcU1tocEc1M%2BrDSMsD9CKsflA%2FxK3L3mwz5NpEweCsb8rUEiMAA50C4PmakiwERKU87FRtLTYZb%2BpnAr1vBSXcJlV3OrjCeyhsUizgwnt7lZLB4ysXQo64OXfezb7lUs%2FD33Wh%2BkvLjn41fgw254znb7PTEQ%2BgT8VKqzkCQ%2B%2BfsRDZES%2BIvydaGu7SOHqhrrsHBbGj5pyic6PAji64878gEX866Yko5zn7ctLdDZ%2FW7SvuRVsgBx1Tu5EVUdZEPgEX3ufW6h9u%2FnxM7rm2NXjH12tI4boeYzdmq5qlF%2BxdDxQ8c21nDkPvgH6NDpyi7DTkwOyvNCw%2BEVG6TOHkFxat7hGlJ7MZUny86VpAjeJDid1VbeH5w1bnOFhbvRzP010nScivFu3cJjOuM2gITIDWAsARicNIOZxaVYWnOB06AVbEAI%2FmF5YEK5AAie2NdAkDP%2FvacAwrp3JwAY6pgHgAVXc2Oa6zNbTBq1VCg5ousyu%2F10AClNvmPp76j35GWefuPo7Jw7BE6yeuRQHDSDzEsgMe7adUgz%2BtQtXgC6B1Ic%2BvG8WsO3%2FHPFh6d1YFw9U3vY753u2rXiU0K0M2xI62aA8RNPA1Otd8gIPDzU4O37zTKDQk0XHA2yLFnrpWF1NCCEGyqpPJCYyVjCL5qMgTl9YjBPJRXhR%2F7ByHR0M0qThISWs&X-Amz-Signature=a96a3fb32c5d469ca888ac063436d269bb931c96fb230f1169a92d94ccb6f30b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QREGOMPO%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAOWTw0dCBWolo76FMFZTWi6Ly4hl45fo%2B%2F0gocm6NYNAiAXyZT%2F3qsUnjmYd3kzX%2FfBab7RYiM7043GQBkPKRgKHiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmv6mQ4rBPFfdcb%2ByKtwD9vBOwO29TV12Q0DMzZvDFs5AUwRAPPR5%2FvXTBEoHkIGm%2BfXwywXFQHtkpJ7V2xzUGEUjYLE%2B9VV02XEg5KWkC1b6aIexNRlugN6IhLeRlTq%2BXOaNdg%2Fkj52OkazaPfLiCYHH7oygQsfnRaADShwyIO4fscmI0z5fjYQLdbmY9paSM2sYuAECcU1tocEc1M%2BrDSMsD9CKsflA%2FxK3L3mwz5NpEweCsb8rUEiMAA50C4PmakiwERKU87FRtLTYZb%2BpnAr1vBSXcJlV3OrjCeyhsUizgwnt7lZLB4ysXQo64OXfezb7lUs%2FD33Wh%2BkvLjn41fgw254znb7PTEQ%2BgT8VKqzkCQ%2B%2BfsRDZES%2BIvydaGu7SOHqhrrsHBbGj5pyic6PAji64878gEX866Yko5zn7ctLdDZ%2FW7SvuRVsgBx1Tu5EVUdZEPgEX3ufW6h9u%2FnxM7rm2NXjH12tI4boeYzdmq5qlF%2BxdDxQ8c21nDkPvgH6NDpyi7DTkwOyvNCw%2BEVG6TOHkFxat7hGlJ7MZUny86VpAjeJDid1VbeH5w1bnOFhbvRzP010nScivFu3cJjOuM2gITIDWAsARicNIOZxaVYWnOB06AVbEAI%2FmF5YEK5AAie2NdAkDP%2FvacAwrp3JwAY6pgHgAVXc2Oa6zNbTBq1VCg5ousyu%2F10AClNvmPp76j35GWefuPo7Jw7BE6yeuRQHDSDzEsgMe7adUgz%2BtQtXgC6B1Ic%2BvG8WsO3%2FHPFh6d1YFw9U3vY753u2rXiU0K0M2xI62aA8RNPA1Otd8gIPDzU4O37zTKDQk0XHA2yLFnrpWF1NCCEGyqpPJCYyVjCL5qMgTl9YjBPJRXhR%2F7ByHR0M0qThISWs&X-Amz-Signature=25d1e227b7b051b7abe7181e985c7c762e1a7b11613bcf84bbd54b9f3f3b571f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QREGOMPO%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAOWTw0dCBWolo76FMFZTWi6Ly4hl45fo%2B%2F0gocm6NYNAiAXyZT%2F3qsUnjmYd3kzX%2FfBab7RYiM7043GQBkPKRgKHiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmv6mQ4rBPFfdcb%2ByKtwD9vBOwO29TV12Q0DMzZvDFs5AUwRAPPR5%2FvXTBEoHkIGm%2BfXwywXFQHtkpJ7V2xzUGEUjYLE%2B9VV02XEg5KWkC1b6aIexNRlugN6IhLeRlTq%2BXOaNdg%2Fkj52OkazaPfLiCYHH7oygQsfnRaADShwyIO4fscmI0z5fjYQLdbmY9paSM2sYuAECcU1tocEc1M%2BrDSMsD9CKsflA%2FxK3L3mwz5NpEweCsb8rUEiMAA50C4PmakiwERKU87FRtLTYZb%2BpnAr1vBSXcJlV3OrjCeyhsUizgwnt7lZLB4ysXQo64OXfezb7lUs%2FD33Wh%2BkvLjn41fgw254znb7PTEQ%2BgT8VKqzkCQ%2B%2BfsRDZES%2BIvydaGu7SOHqhrrsHBbGj5pyic6PAji64878gEX866Yko5zn7ctLdDZ%2FW7SvuRVsgBx1Tu5EVUdZEPgEX3ufW6h9u%2FnxM7rm2NXjH12tI4boeYzdmq5qlF%2BxdDxQ8c21nDkPvgH6NDpyi7DTkwOyvNCw%2BEVG6TOHkFxat7hGlJ7MZUny86VpAjeJDid1VbeH5w1bnOFhbvRzP010nScivFu3cJjOuM2gITIDWAsARicNIOZxaVYWnOB06AVbEAI%2FmF5YEK5AAie2NdAkDP%2FvacAwrp3JwAY6pgHgAVXc2Oa6zNbTBq1VCg5ousyu%2F10AClNvmPp76j35GWefuPo7Jw7BE6yeuRQHDSDzEsgMe7adUgz%2BtQtXgC6B1Ic%2BvG8WsO3%2FHPFh6d1YFw9U3vY753u2rXiU0K0M2xI62aA8RNPA1Otd8gIPDzU4O37zTKDQk0XHA2yLFnrpWF1NCCEGyqpPJCYyVjCL5qMgTl9YjBPJRXhR%2F7ByHR0M0qThISWs&X-Amz-Signature=514671bb4ab1066afd81656fd7b284f4f61add785cba838eaf0cca1ac56e824c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
