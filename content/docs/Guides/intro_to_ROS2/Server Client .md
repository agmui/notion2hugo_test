---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZOZBFN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzaQdyvdBbQBhTjHBmILqJicyzSdXmXVNjvmraFSzbUAiEA9BOd4Mt%2B7Rt4xiHFgz2GvdToW13w55tbU1nmR%2BhZ7uUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0unUSJY%2F3VmRP%2FACrcA4CJ%2BL48f83nDzYEXAY2pP%2BeXhVj0WmLw%2BffnTGI2NoyT35HHOuGDAxcKgzj0vg6LUZxIHX2g1Y45BBUpvCyU6uot6lOQAV43kBVMcC5skTQMo3reuErXQ557ns%2FOmXVks9GAXdCMUP%2BYVtzG0dKq5fdtYRZY0GHH8NBWl0vaRyvk76aV3Wch%2FrYDD1ia7hIAIK8QTX7G4y0df71NBEXdQOqQdxQfUjAy0RszmsMI5SV8n0LptkDqMf6ui6zpC2LQebZye6a8rOxi6dJHrO9sdqU3eXoLTCCWO1bL76N8kCxFHcRUBQ5wi%2FNPHjp1eQaWDvxvnFTdcw%2F5OdgTV5KbiA5DIcd4lJRFH0SBFm47yItwLzfNd7sx92Uld1aufbPxMszR2z65ge6S9mwms1G0mJEeeq19S0FEqJ2mUJKLJALrCILFAJR8xc2nBu7cnWfkkEFKD%2B4vpqhIuyi3VLiqGn%2BwKU2JWlczN%2FUWe8HTniql56%2FSiJA08pl2ujXr5bGckqFpl28j4%2Fo0k%2BN3UdyJtKKTBfZtKfsDXCNsKF2TPgW%2B1MYu%2BdhSCYH29AjAwB%2BmZXBEUxWwwPMm4dD2bLEHEo4Iyu%2Bz33JLCPFeX%2BGjpiwBMbdKKYqNC8xzSZIMJ3C3sQGOqUB8LBgMouTLFp2%2BmThZTylNtViY7LgXkoXUyZ148OX7Px0DoEA1XJ6oLsskScn769X%2B6WDIhLOQOTDQ99CeE8qUboGiA6FEJlZ6bKjqX1QV3brTghvJGDYFZNpmSBRKaASacKjscmNPWpfwcGnPvoswTEWUjN8WeO%2BRSYp2mQ56L4d9OJsJmbKZQtnCG3%2FjEAuQXOrVSOP%2FYccedmAaBp8kMjr6L2T&X-Amz-Signature=efb70ce9d840517721c1bad70e6164ef99d990c336a17901ae36d9040d281e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZOZBFN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzaQdyvdBbQBhTjHBmILqJicyzSdXmXVNjvmraFSzbUAiEA9BOd4Mt%2B7Rt4xiHFgz2GvdToW13w55tbU1nmR%2BhZ7uUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0unUSJY%2F3VmRP%2FACrcA4CJ%2BL48f83nDzYEXAY2pP%2BeXhVj0WmLw%2BffnTGI2NoyT35HHOuGDAxcKgzj0vg6LUZxIHX2g1Y45BBUpvCyU6uot6lOQAV43kBVMcC5skTQMo3reuErXQ557ns%2FOmXVks9GAXdCMUP%2BYVtzG0dKq5fdtYRZY0GHH8NBWl0vaRyvk76aV3Wch%2FrYDD1ia7hIAIK8QTX7G4y0df71NBEXdQOqQdxQfUjAy0RszmsMI5SV8n0LptkDqMf6ui6zpC2LQebZye6a8rOxi6dJHrO9sdqU3eXoLTCCWO1bL76N8kCxFHcRUBQ5wi%2FNPHjp1eQaWDvxvnFTdcw%2F5OdgTV5KbiA5DIcd4lJRFH0SBFm47yItwLzfNd7sx92Uld1aufbPxMszR2z65ge6S9mwms1G0mJEeeq19S0FEqJ2mUJKLJALrCILFAJR8xc2nBu7cnWfkkEFKD%2B4vpqhIuyi3VLiqGn%2BwKU2JWlczN%2FUWe8HTniql56%2FSiJA08pl2ujXr5bGckqFpl28j4%2Fo0k%2BN3UdyJtKKTBfZtKfsDXCNsKF2TPgW%2B1MYu%2BdhSCYH29AjAwB%2BmZXBEUxWwwPMm4dD2bLEHEo4Iyu%2Bz33JLCPFeX%2BGjpiwBMbdKKYqNC8xzSZIMJ3C3sQGOqUB8LBgMouTLFp2%2BmThZTylNtViY7LgXkoXUyZ148OX7Px0DoEA1XJ6oLsskScn769X%2B6WDIhLOQOTDQ99CeE8qUboGiA6FEJlZ6bKjqX1QV3brTghvJGDYFZNpmSBRKaASacKjscmNPWpfwcGnPvoswTEWUjN8WeO%2BRSYp2mQ56L4d9OJsJmbKZQtnCG3%2FjEAuQXOrVSOP%2FYccedmAaBp8kMjr6L2T&X-Amz-Signature=a5ecaf7da16baaaa4e92ad34d70bee17d3475439c18c73b3f67f3b443473eeb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZOZBFN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzaQdyvdBbQBhTjHBmILqJicyzSdXmXVNjvmraFSzbUAiEA9BOd4Mt%2B7Rt4xiHFgz2GvdToW13w55tbU1nmR%2BhZ7uUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0unUSJY%2F3VmRP%2FACrcA4CJ%2BL48f83nDzYEXAY2pP%2BeXhVj0WmLw%2BffnTGI2NoyT35HHOuGDAxcKgzj0vg6LUZxIHX2g1Y45BBUpvCyU6uot6lOQAV43kBVMcC5skTQMo3reuErXQ557ns%2FOmXVks9GAXdCMUP%2BYVtzG0dKq5fdtYRZY0GHH8NBWl0vaRyvk76aV3Wch%2FrYDD1ia7hIAIK8QTX7G4y0df71NBEXdQOqQdxQfUjAy0RszmsMI5SV8n0LptkDqMf6ui6zpC2LQebZye6a8rOxi6dJHrO9sdqU3eXoLTCCWO1bL76N8kCxFHcRUBQ5wi%2FNPHjp1eQaWDvxvnFTdcw%2F5OdgTV5KbiA5DIcd4lJRFH0SBFm47yItwLzfNd7sx92Uld1aufbPxMszR2z65ge6S9mwms1G0mJEeeq19S0FEqJ2mUJKLJALrCILFAJR8xc2nBu7cnWfkkEFKD%2B4vpqhIuyi3VLiqGn%2BwKU2JWlczN%2FUWe8HTniql56%2FSiJA08pl2ujXr5bGckqFpl28j4%2Fo0k%2BN3UdyJtKKTBfZtKfsDXCNsKF2TPgW%2B1MYu%2BdhSCYH29AjAwB%2BmZXBEUxWwwPMm4dD2bLEHEo4Iyu%2Bz33JLCPFeX%2BGjpiwBMbdKKYqNC8xzSZIMJ3C3sQGOqUB8LBgMouTLFp2%2BmThZTylNtViY7LgXkoXUyZ148OX7Px0DoEA1XJ6oLsskScn769X%2B6WDIhLOQOTDQ99CeE8qUboGiA6FEJlZ6bKjqX1QV3brTghvJGDYFZNpmSBRKaASacKjscmNPWpfwcGnPvoswTEWUjN8WeO%2BRSYp2mQ56L4d9OJsJmbKZQtnCG3%2FjEAuQXOrVSOP%2FYccedmAaBp8kMjr6L2T&X-Amz-Signature=2cd729b3f7b4a9437b45d238ab6b0ca0164629ee16269ed538b266a5213c0529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZOZBFN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzaQdyvdBbQBhTjHBmILqJicyzSdXmXVNjvmraFSzbUAiEA9BOd4Mt%2B7Rt4xiHFgz2GvdToW13w55tbU1nmR%2BhZ7uUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0unUSJY%2F3VmRP%2FACrcA4CJ%2BL48f83nDzYEXAY2pP%2BeXhVj0WmLw%2BffnTGI2NoyT35HHOuGDAxcKgzj0vg6LUZxIHX2g1Y45BBUpvCyU6uot6lOQAV43kBVMcC5skTQMo3reuErXQ557ns%2FOmXVks9GAXdCMUP%2BYVtzG0dKq5fdtYRZY0GHH8NBWl0vaRyvk76aV3Wch%2FrYDD1ia7hIAIK8QTX7G4y0df71NBEXdQOqQdxQfUjAy0RszmsMI5SV8n0LptkDqMf6ui6zpC2LQebZye6a8rOxi6dJHrO9sdqU3eXoLTCCWO1bL76N8kCxFHcRUBQ5wi%2FNPHjp1eQaWDvxvnFTdcw%2F5OdgTV5KbiA5DIcd4lJRFH0SBFm47yItwLzfNd7sx92Uld1aufbPxMszR2z65ge6S9mwms1G0mJEeeq19S0FEqJ2mUJKLJALrCILFAJR8xc2nBu7cnWfkkEFKD%2B4vpqhIuyi3VLiqGn%2BwKU2JWlczN%2FUWe8HTniql56%2FSiJA08pl2ujXr5bGckqFpl28j4%2Fo0k%2BN3UdyJtKKTBfZtKfsDXCNsKF2TPgW%2B1MYu%2BdhSCYH29AjAwB%2BmZXBEUxWwwPMm4dD2bLEHEo4Iyu%2Bz33JLCPFeX%2BGjpiwBMbdKKYqNC8xzSZIMJ3C3sQGOqUB8LBgMouTLFp2%2BmThZTylNtViY7LgXkoXUyZ148OX7Px0DoEA1XJ6oLsskScn769X%2B6WDIhLOQOTDQ99CeE8qUboGiA6FEJlZ6bKjqX1QV3brTghvJGDYFZNpmSBRKaASacKjscmNPWpfwcGnPvoswTEWUjN8WeO%2BRSYp2mQ56L4d9OJsJmbKZQtnCG3%2FjEAuQXOrVSOP%2FYccedmAaBp8kMjr6L2T&X-Amz-Signature=27fb751f7081cf347a9e54a7375b69d13b88d54a7aabd53e4dc50ed25829eebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZOZBFN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzaQdyvdBbQBhTjHBmILqJicyzSdXmXVNjvmraFSzbUAiEA9BOd4Mt%2B7Rt4xiHFgz2GvdToW13w55tbU1nmR%2BhZ7uUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0unUSJY%2F3VmRP%2FACrcA4CJ%2BL48f83nDzYEXAY2pP%2BeXhVj0WmLw%2BffnTGI2NoyT35HHOuGDAxcKgzj0vg6LUZxIHX2g1Y45BBUpvCyU6uot6lOQAV43kBVMcC5skTQMo3reuErXQ557ns%2FOmXVks9GAXdCMUP%2BYVtzG0dKq5fdtYRZY0GHH8NBWl0vaRyvk76aV3Wch%2FrYDD1ia7hIAIK8QTX7G4y0df71NBEXdQOqQdxQfUjAy0RszmsMI5SV8n0LptkDqMf6ui6zpC2LQebZye6a8rOxi6dJHrO9sdqU3eXoLTCCWO1bL76N8kCxFHcRUBQ5wi%2FNPHjp1eQaWDvxvnFTdcw%2F5OdgTV5KbiA5DIcd4lJRFH0SBFm47yItwLzfNd7sx92Uld1aufbPxMszR2z65ge6S9mwms1G0mJEeeq19S0FEqJ2mUJKLJALrCILFAJR8xc2nBu7cnWfkkEFKD%2B4vpqhIuyi3VLiqGn%2BwKU2JWlczN%2FUWe8HTniql56%2FSiJA08pl2ujXr5bGckqFpl28j4%2Fo0k%2BN3UdyJtKKTBfZtKfsDXCNsKF2TPgW%2B1MYu%2BdhSCYH29AjAwB%2BmZXBEUxWwwPMm4dD2bLEHEo4Iyu%2Bz33JLCPFeX%2BGjpiwBMbdKKYqNC8xzSZIMJ3C3sQGOqUB8LBgMouTLFp2%2BmThZTylNtViY7LgXkoXUyZ148OX7Px0DoEA1XJ6oLsskScn769X%2B6WDIhLOQOTDQ99CeE8qUboGiA6FEJlZ6bKjqX1QV3brTghvJGDYFZNpmSBRKaASacKjscmNPWpfwcGnPvoswTEWUjN8WeO%2BRSYp2mQ56L4d9OJsJmbKZQtnCG3%2FjEAuQXOrVSOP%2FYccedmAaBp8kMjr6L2T&X-Amz-Signature=1c83db8beec35de1d2953142bc62f46c9062b8ea8ab52202480c2cd05e941280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
