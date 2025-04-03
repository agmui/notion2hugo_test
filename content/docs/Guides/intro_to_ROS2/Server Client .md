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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CE7LB6N%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEmt59fAfAc4eMuE0c1UxVit72HkzYN8M3d4j0tr92uRAiADx6yIA6YXSYB2sOr8Xv6EWiMj8oinJXCDh83G8Q9xkCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhGNl1J3EPq4ewQWNKtwDjaVmosGDTw4pGABhWNHa7YGgNhQI5dPQ8F9L%2BXsuq73UEd9%2F25LXpj95O8e%2FHM4zEtVCxD%2B%2F6vHDvhad4o5gw3EifXZEFqcjhYbgS2ctfi0onUO%2B03kMHmBgBwxh%2FmiwQHMkXoccvOVCmlTnkb2%2BarXorw7uaBh5nuGgtZqK4HlzlgUXlCQGlmNCmRZJcSR6DcKiaX13hzBoCulun8T8TSkNoEUnRuA%2Ba%2FZ4vYFAi8SAm%2BG4%2Bbe2nlqO1NWBoQ03fNCkfVf7pW8N2AkGdsJeGfwe4f4MyrD2X9ZnOj251uB2fCVNo1GhiwM2i0IfSb02AnF3fcZ1dKH1Qz%2Fx2cboJ2%2Bqrtr%2FIMne1XQRuVcjDhgWondJFCKsJRMm9D9BZyhFxPGdfkxy9NEUA6aHQhgPije7aE69ZhDcYsxmXoXiMNALwNBMN20Ic2tZ23i1R%2BzVfpoYzEe%2BAU73rrykGH8TDUzYSHrzJnXG4hMEJL0DOPlqocYJibF3POrrGVMy0hFBwZ49V03ZaJXDpCPAkXBUos%2FKLYorWH9MehfHlQ%2Byp%2FW10kjva8BKfQH1dc4eyRjMdTaBut84aQeCnz3zi7aw3oxm4vRr9sA5rJwcL3obEUO73tBvivoLRB%2Bqhy4wr6%2B4vwY6pgH%2FqlP5LHf%2FJAMfbCesG3dNwS85V%2FaTddeoGN9dHtsry0wXv8WrPbaSOxbvQZI2fxZHfH%2FTWq8V3zV90CSz1sGx4eigYpBRZ%2B7kuwjKlLI8sQZfXf6BPXEQWR%2F7aFLkNL0UDgcta8hy%2F3vFuxNhlOfdvchJMB2pUYeUoJCD58mcQ%2B2XQSCkqnVlfWcRsQCwW7DJwmiViiBVXtCMCl8qSd0wAMs1bBOb&X-Amz-Signature=7c1340dc034cfb23e6729a0fb2a23afa29bed0bcedee97b3d21f6edef9429f44&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CE7LB6N%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEmt59fAfAc4eMuE0c1UxVit72HkzYN8M3d4j0tr92uRAiADx6yIA6YXSYB2sOr8Xv6EWiMj8oinJXCDh83G8Q9xkCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhGNl1J3EPq4ewQWNKtwDjaVmosGDTw4pGABhWNHa7YGgNhQI5dPQ8F9L%2BXsuq73UEd9%2F25LXpj95O8e%2FHM4zEtVCxD%2B%2F6vHDvhad4o5gw3EifXZEFqcjhYbgS2ctfi0onUO%2B03kMHmBgBwxh%2FmiwQHMkXoccvOVCmlTnkb2%2BarXorw7uaBh5nuGgtZqK4HlzlgUXlCQGlmNCmRZJcSR6DcKiaX13hzBoCulun8T8TSkNoEUnRuA%2Ba%2FZ4vYFAi8SAm%2BG4%2Bbe2nlqO1NWBoQ03fNCkfVf7pW8N2AkGdsJeGfwe4f4MyrD2X9ZnOj251uB2fCVNo1GhiwM2i0IfSb02AnF3fcZ1dKH1Qz%2Fx2cboJ2%2Bqrtr%2FIMne1XQRuVcjDhgWondJFCKsJRMm9D9BZyhFxPGdfkxy9NEUA6aHQhgPije7aE69ZhDcYsxmXoXiMNALwNBMN20Ic2tZ23i1R%2BzVfpoYzEe%2BAU73rrykGH8TDUzYSHrzJnXG4hMEJL0DOPlqocYJibF3POrrGVMy0hFBwZ49V03ZaJXDpCPAkXBUos%2FKLYorWH9MehfHlQ%2Byp%2FW10kjva8BKfQH1dc4eyRjMdTaBut84aQeCnz3zi7aw3oxm4vRr9sA5rJwcL3obEUO73tBvivoLRB%2Bqhy4wr6%2B4vwY6pgH%2FqlP5LHf%2FJAMfbCesG3dNwS85V%2FaTddeoGN9dHtsry0wXv8WrPbaSOxbvQZI2fxZHfH%2FTWq8V3zV90CSz1sGx4eigYpBRZ%2B7kuwjKlLI8sQZfXf6BPXEQWR%2F7aFLkNL0UDgcta8hy%2F3vFuxNhlOfdvchJMB2pUYeUoJCD58mcQ%2B2XQSCkqnVlfWcRsQCwW7DJwmiViiBVXtCMCl8qSd0wAMs1bBOb&X-Amz-Signature=afb31bae4ccec8d1674c3fd640f421e4562d811878dc89a3ab0974d98fd93a57&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CE7LB6N%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEmt59fAfAc4eMuE0c1UxVit72HkzYN8M3d4j0tr92uRAiADx6yIA6YXSYB2sOr8Xv6EWiMj8oinJXCDh83G8Q9xkCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhGNl1J3EPq4ewQWNKtwDjaVmosGDTw4pGABhWNHa7YGgNhQI5dPQ8F9L%2BXsuq73UEd9%2F25LXpj95O8e%2FHM4zEtVCxD%2B%2F6vHDvhad4o5gw3EifXZEFqcjhYbgS2ctfi0onUO%2B03kMHmBgBwxh%2FmiwQHMkXoccvOVCmlTnkb2%2BarXorw7uaBh5nuGgtZqK4HlzlgUXlCQGlmNCmRZJcSR6DcKiaX13hzBoCulun8T8TSkNoEUnRuA%2Ba%2FZ4vYFAi8SAm%2BG4%2Bbe2nlqO1NWBoQ03fNCkfVf7pW8N2AkGdsJeGfwe4f4MyrD2X9ZnOj251uB2fCVNo1GhiwM2i0IfSb02AnF3fcZ1dKH1Qz%2Fx2cboJ2%2Bqrtr%2FIMne1XQRuVcjDhgWondJFCKsJRMm9D9BZyhFxPGdfkxy9NEUA6aHQhgPije7aE69ZhDcYsxmXoXiMNALwNBMN20Ic2tZ23i1R%2BzVfpoYzEe%2BAU73rrykGH8TDUzYSHrzJnXG4hMEJL0DOPlqocYJibF3POrrGVMy0hFBwZ49V03ZaJXDpCPAkXBUos%2FKLYorWH9MehfHlQ%2Byp%2FW10kjva8BKfQH1dc4eyRjMdTaBut84aQeCnz3zi7aw3oxm4vRr9sA5rJwcL3obEUO73tBvivoLRB%2Bqhy4wr6%2B4vwY6pgH%2FqlP5LHf%2FJAMfbCesG3dNwS85V%2FaTddeoGN9dHtsry0wXv8WrPbaSOxbvQZI2fxZHfH%2FTWq8V3zV90CSz1sGx4eigYpBRZ%2B7kuwjKlLI8sQZfXf6BPXEQWR%2F7aFLkNL0UDgcta8hy%2F3vFuxNhlOfdvchJMB2pUYeUoJCD58mcQ%2B2XQSCkqnVlfWcRsQCwW7DJwmiViiBVXtCMCl8qSd0wAMs1bBOb&X-Amz-Signature=bb5b524d8a7021d28ec5d1bdf5b2c871ed6aa59f5aece175e605bb485b3dbaf7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CE7LB6N%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEmt59fAfAc4eMuE0c1UxVit72HkzYN8M3d4j0tr92uRAiADx6yIA6YXSYB2sOr8Xv6EWiMj8oinJXCDh83G8Q9xkCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhGNl1J3EPq4ewQWNKtwDjaVmosGDTw4pGABhWNHa7YGgNhQI5dPQ8F9L%2BXsuq73UEd9%2F25LXpj95O8e%2FHM4zEtVCxD%2B%2F6vHDvhad4o5gw3EifXZEFqcjhYbgS2ctfi0onUO%2B03kMHmBgBwxh%2FmiwQHMkXoccvOVCmlTnkb2%2BarXorw7uaBh5nuGgtZqK4HlzlgUXlCQGlmNCmRZJcSR6DcKiaX13hzBoCulun8T8TSkNoEUnRuA%2Ba%2FZ4vYFAi8SAm%2BG4%2Bbe2nlqO1NWBoQ03fNCkfVf7pW8N2AkGdsJeGfwe4f4MyrD2X9ZnOj251uB2fCVNo1GhiwM2i0IfSb02AnF3fcZ1dKH1Qz%2Fx2cboJ2%2Bqrtr%2FIMne1XQRuVcjDhgWondJFCKsJRMm9D9BZyhFxPGdfkxy9NEUA6aHQhgPije7aE69ZhDcYsxmXoXiMNALwNBMN20Ic2tZ23i1R%2BzVfpoYzEe%2BAU73rrykGH8TDUzYSHrzJnXG4hMEJL0DOPlqocYJibF3POrrGVMy0hFBwZ49V03ZaJXDpCPAkXBUos%2FKLYorWH9MehfHlQ%2Byp%2FW10kjva8BKfQH1dc4eyRjMdTaBut84aQeCnz3zi7aw3oxm4vRr9sA5rJwcL3obEUO73tBvivoLRB%2Bqhy4wr6%2B4vwY6pgH%2FqlP5LHf%2FJAMfbCesG3dNwS85V%2FaTddeoGN9dHtsry0wXv8WrPbaSOxbvQZI2fxZHfH%2FTWq8V3zV90CSz1sGx4eigYpBRZ%2B7kuwjKlLI8sQZfXf6BPXEQWR%2F7aFLkNL0UDgcta8hy%2F3vFuxNhlOfdvchJMB2pUYeUoJCD58mcQ%2B2XQSCkqnVlfWcRsQCwW7DJwmiViiBVXtCMCl8qSd0wAMs1bBOb&X-Amz-Signature=f053c7c6df2694ba1ecc6f6d408e410d44c7a7a46e30a71a989b5c7f327afe2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CE7LB6N%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEmt59fAfAc4eMuE0c1UxVit72HkzYN8M3d4j0tr92uRAiADx6yIA6YXSYB2sOr8Xv6EWiMj8oinJXCDh83G8Q9xkCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhGNl1J3EPq4ewQWNKtwDjaVmosGDTw4pGABhWNHa7YGgNhQI5dPQ8F9L%2BXsuq73UEd9%2F25LXpj95O8e%2FHM4zEtVCxD%2B%2F6vHDvhad4o5gw3EifXZEFqcjhYbgS2ctfi0onUO%2B03kMHmBgBwxh%2FmiwQHMkXoccvOVCmlTnkb2%2BarXorw7uaBh5nuGgtZqK4HlzlgUXlCQGlmNCmRZJcSR6DcKiaX13hzBoCulun8T8TSkNoEUnRuA%2Ba%2FZ4vYFAi8SAm%2BG4%2Bbe2nlqO1NWBoQ03fNCkfVf7pW8N2AkGdsJeGfwe4f4MyrD2X9ZnOj251uB2fCVNo1GhiwM2i0IfSb02AnF3fcZ1dKH1Qz%2Fx2cboJ2%2Bqrtr%2FIMne1XQRuVcjDhgWondJFCKsJRMm9D9BZyhFxPGdfkxy9NEUA6aHQhgPije7aE69ZhDcYsxmXoXiMNALwNBMN20Ic2tZ23i1R%2BzVfpoYzEe%2BAU73rrykGH8TDUzYSHrzJnXG4hMEJL0DOPlqocYJibF3POrrGVMy0hFBwZ49V03ZaJXDpCPAkXBUos%2FKLYorWH9MehfHlQ%2Byp%2FW10kjva8BKfQH1dc4eyRjMdTaBut84aQeCnz3zi7aw3oxm4vRr9sA5rJwcL3obEUO73tBvivoLRB%2Bqhy4wr6%2B4vwY6pgH%2FqlP5LHf%2FJAMfbCesG3dNwS85V%2FaTddeoGN9dHtsry0wXv8WrPbaSOxbvQZI2fxZHfH%2FTWq8V3zV90CSz1sGx4eigYpBRZ%2B7kuwjKlLI8sQZfXf6BPXEQWR%2F7aFLkNL0UDgcta8hy%2F3vFuxNhlOfdvchJMB2pUYeUoJCD58mcQ%2B2XQSCkqnVlfWcRsQCwW7DJwmiViiBVXtCMCl8qSd0wAMs1bBOb&X-Amz-Signature=5abae5181db9e6c7b38ead45fbe5882c0eb7bb3a78388dc315447f2e3039f908&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
