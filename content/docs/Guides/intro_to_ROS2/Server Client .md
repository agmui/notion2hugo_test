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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FL3EBFD%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiSodNZxsQf0t2EB1YW%2BGH5uQ2U36T7C0QDvi2wyG%2BNAiAJrJvDErfL4u1MhtLKR1e0O1pTmNOcVB%2B%2F6CAdkDZAMyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbLfqIWxRWnGdea17KtwDIhX2GCgsb4Yllaxl8exaDlU3JSQcYgUvma9nsYRxv2Me9yFqtxA3jilz6w4rUpKXPVJIDpTRHBbohfRKzQrwLEWyNMpv2mei897v2AcJuM5A780gbjnUcGwiUMJb6Z6bTdrJ7V4a%2Bdbw%2FTLs%2F%2B5KuXcHKjEt7eP%2Bvy9A%2FXuw4CqfMTEPGkECJiQjwhn5EokMsHfyGubUYumuUGDyuNb7AxV%2BDeRIFIjjPgMroeI4LVyhlh5IgCyrZTjeqoju%2FFuZFrHoB3%2FhyfcTr19scm6FP%2FT8fw3Wy5sYkaSUj%2FAbN4FCOv%2Bck%2FmcAz5mBhFJGksuxKg8rLRBk9Qnr%2FMouUTkQ3QNUhNBPZwG8LnegVAXNx1jCNmw9MopN4eJCgHlKy4%2FVgOmo6N1SMMmFpduipWxZP8RbVb8ThzdqIgzUJfIrhPwP1V2nu0oz2%2F3GghZTS3saCfBg8wFeQ0Icb%2F8MQoq4rIVdmeB76g6y1RRJkgB1BG2LuNJ2UR26CRlsNoyLNKZVYBaRbR8eNH0w133X%2FGNFWswoxHlNxdI8qJY%2FZCFY6Z8wIWXoqUh6xz1lnVwit6brj%2BHlSSeT7ydRAObMX%2BRUZ4Q0jqF180aa%2BgBCYC79Le7pkTWLU1gp53j8hcwu7CCvwY6pgFcUCCbycR%2FTMw3Z49EnIa6AwJ8YbdnEjNFl9HsB9lTiJtqJS%2Bg32bYw%2F6lCR9CCsWo8pSK6Vxo7GrSCLmmTC%2BC1cxSF4KXGMqyT7qv9n%2FEdRg6MKAGd1X2basMdK7NLFlMYyh0IG1oLjT0M3plJF2%2F2RHoisUiyGFLFfcjUa1lRtlT006U%2FTJ3ffza4J9GM8%2BJkubY1iYUdf0GiWILkwOW0OjOMKup&X-Amz-Signature=b0ff8dae44f14377f724bb9ec575421cf3964150bc16a0c5f3e6d9531cfc52dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FL3EBFD%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiSodNZxsQf0t2EB1YW%2BGH5uQ2U36T7C0QDvi2wyG%2BNAiAJrJvDErfL4u1MhtLKR1e0O1pTmNOcVB%2B%2F6CAdkDZAMyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbLfqIWxRWnGdea17KtwDIhX2GCgsb4Yllaxl8exaDlU3JSQcYgUvma9nsYRxv2Me9yFqtxA3jilz6w4rUpKXPVJIDpTRHBbohfRKzQrwLEWyNMpv2mei897v2AcJuM5A780gbjnUcGwiUMJb6Z6bTdrJ7V4a%2Bdbw%2FTLs%2F%2B5KuXcHKjEt7eP%2Bvy9A%2FXuw4CqfMTEPGkECJiQjwhn5EokMsHfyGubUYumuUGDyuNb7AxV%2BDeRIFIjjPgMroeI4LVyhlh5IgCyrZTjeqoju%2FFuZFrHoB3%2FhyfcTr19scm6FP%2FT8fw3Wy5sYkaSUj%2FAbN4FCOv%2Bck%2FmcAz5mBhFJGksuxKg8rLRBk9Qnr%2FMouUTkQ3QNUhNBPZwG8LnegVAXNx1jCNmw9MopN4eJCgHlKy4%2FVgOmo6N1SMMmFpduipWxZP8RbVb8ThzdqIgzUJfIrhPwP1V2nu0oz2%2F3GghZTS3saCfBg8wFeQ0Icb%2F8MQoq4rIVdmeB76g6y1RRJkgB1BG2LuNJ2UR26CRlsNoyLNKZVYBaRbR8eNH0w133X%2FGNFWswoxHlNxdI8qJY%2FZCFY6Z8wIWXoqUh6xz1lnVwit6brj%2BHlSSeT7ydRAObMX%2BRUZ4Q0jqF180aa%2BgBCYC79Le7pkTWLU1gp53j8hcwu7CCvwY6pgFcUCCbycR%2FTMw3Z49EnIa6AwJ8YbdnEjNFl9HsB9lTiJtqJS%2Bg32bYw%2F6lCR9CCsWo8pSK6Vxo7GrSCLmmTC%2BC1cxSF4KXGMqyT7qv9n%2FEdRg6MKAGd1X2basMdK7NLFlMYyh0IG1oLjT0M3plJF2%2F2RHoisUiyGFLFfcjUa1lRtlT006U%2FTJ3ffza4J9GM8%2BJkubY1iYUdf0GiWILkwOW0OjOMKup&X-Amz-Signature=58c38bf37af3002a8aaec174052e25b97945d6d80780bed1cbd45e5c86d9a22f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FL3EBFD%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiSodNZxsQf0t2EB1YW%2BGH5uQ2U36T7C0QDvi2wyG%2BNAiAJrJvDErfL4u1MhtLKR1e0O1pTmNOcVB%2B%2F6CAdkDZAMyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbLfqIWxRWnGdea17KtwDIhX2GCgsb4Yllaxl8exaDlU3JSQcYgUvma9nsYRxv2Me9yFqtxA3jilz6w4rUpKXPVJIDpTRHBbohfRKzQrwLEWyNMpv2mei897v2AcJuM5A780gbjnUcGwiUMJb6Z6bTdrJ7V4a%2Bdbw%2FTLs%2F%2B5KuXcHKjEt7eP%2Bvy9A%2FXuw4CqfMTEPGkECJiQjwhn5EokMsHfyGubUYumuUGDyuNb7AxV%2BDeRIFIjjPgMroeI4LVyhlh5IgCyrZTjeqoju%2FFuZFrHoB3%2FhyfcTr19scm6FP%2FT8fw3Wy5sYkaSUj%2FAbN4FCOv%2Bck%2FmcAz5mBhFJGksuxKg8rLRBk9Qnr%2FMouUTkQ3QNUhNBPZwG8LnegVAXNx1jCNmw9MopN4eJCgHlKy4%2FVgOmo6N1SMMmFpduipWxZP8RbVb8ThzdqIgzUJfIrhPwP1V2nu0oz2%2F3GghZTS3saCfBg8wFeQ0Icb%2F8MQoq4rIVdmeB76g6y1RRJkgB1BG2LuNJ2UR26CRlsNoyLNKZVYBaRbR8eNH0w133X%2FGNFWswoxHlNxdI8qJY%2FZCFY6Z8wIWXoqUh6xz1lnVwit6brj%2BHlSSeT7ydRAObMX%2BRUZ4Q0jqF180aa%2BgBCYC79Le7pkTWLU1gp53j8hcwu7CCvwY6pgFcUCCbycR%2FTMw3Z49EnIa6AwJ8YbdnEjNFl9HsB9lTiJtqJS%2Bg32bYw%2F6lCR9CCsWo8pSK6Vxo7GrSCLmmTC%2BC1cxSF4KXGMqyT7qv9n%2FEdRg6MKAGd1X2basMdK7NLFlMYyh0IG1oLjT0M3plJF2%2F2RHoisUiyGFLFfcjUa1lRtlT006U%2FTJ3ffza4J9GM8%2BJkubY1iYUdf0GiWILkwOW0OjOMKup&X-Amz-Signature=9736832c21649a500c80d71d6c97f440fb39a7284326f1c6257e47e4bcf6b0a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FL3EBFD%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiSodNZxsQf0t2EB1YW%2BGH5uQ2U36T7C0QDvi2wyG%2BNAiAJrJvDErfL4u1MhtLKR1e0O1pTmNOcVB%2B%2F6CAdkDZAMyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbLfqIWxRWnGdea17KtwDIhX2GCgsb4Yllaxl8exaDlU3JSQcYgUvma9nsYRxv2Me9yFqtxA3jilz6w4rUpKXPVJIDpTRHBbohfRKzQrwLEWyNMpv2mei897v2AcJuM5A780gbjnUcGwiUMJb6Z6bTdrJ7V4a%2Bdbw%2FTLs%2F%2B5KuXcHKjEt7eP%2Bvy9A%2FXuw4CqfMTEPGkECJiQjwhn5EokMsHfyGubUYumuUGDyuNb7AxV%2BDeRIFIjjPgMroeI4LVyhlh5IgCyrZTjeqoju%2FFuZFrHoB3%2FhyfcTr19scm6FP%2FT8fw3Wy5sYkaSUj%2FAbN4FCOv%2Bck%2FmcAz5mBhFJGksuxKg8rLRBk9Qnr%2FMouUTkQ3QNUhNBPZwG8LnegVAXNx1jCNmw9MopN4eJCgHlKy4%2FVgOmo6N1SMMmFpduipWxZP8RbVb8ThzdqIgzUJfIrhPwP1V2nu0oz2%2F3GghZTS3saCfBg8wFeQ0Icb%2F8MQoq4rIVdmeB76g6y1RRJkgB1BG2LuNJ2UR26CRlsNoyLNKZVYBaRbR8eNH0w133X%2FGNFWswoxHlNxdI8qJY%2FZCFY6Z8wIWXoqUh6xz1lnVwit6brj%2BHlSSeT7ydRAObMX%2BRUZ4Q0jqF180aa%2BgBCYC79Le7pkTWLU1gp53j8hcwu7CCvwY6pgFcUCCbycR%2FTMw3Z49EnIa6AwJ8YbdnEjNFl9HsB9lTiJtqJS%2Bg32bYw%2F6lCR9CCsWo8pSK6Vxo7GrSCLmmTC%2BC1cxSF4KXGMqyT7qv9n%2FEdRg6MKAGd1X2basMdK7NLFlMYyh0IG1oLjT0M3plJF2%2F2RHoisUiyGFLFfcjUa1lRtlT006U%2FTJ3ffza4J9GM8%2BJkubY1iYUdf0GiWILkwOW0OjOMKup&X-Amz-Signature=e3a01bd62a878d828222307d6332c72fc3ef2193d2efae95aefa7a52f6363da4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FL3EBFD%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiSodNZxsQf0t2EB1YW%2BGH5uQ2U36T7C0QDvi2wyG%2BNAiAJrJvDErfL4u1MhtLKR1e0O1pTmNOcVB%2B%2F6CAdkDZAMyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbLfqIWxRWnGdea17KtwDIhX2GCgsb4Yllaxl8exaDlU3JSQcYgUvma9nsYRxv2Me9yFqtxA3jilz6w4rUpKXPVJIDpTRHBbohfRKzQrwLEWyNMpv2mei897v2AcJuM5A780gbjnUcGwiUMJb6Z6bTdrJ7V4a%2Bdbw%2FTLs%2F%2B5KuXcHKjEt7eP%2Bvy9A%2FXuw4CqfMTEPGkECJiQjwhn5EokMsHfyGubUYumuUGDyuNb7AxV%2BDeRIFIjjPgMroeI4LVyhlh5IgCyrZTjeqoju%2FFuZFrHoB3%2FhyfcTr19scm6FP%2FT8fw3Wy5sYkaSUj%2FAbN4FCOv%2Bck%2FmcAz5mBhFJGksuxKg8rLRBk9Qnr%2FMouUTkQ3QNUhNBPZwG8LnegVAXNx1jCNmw9MopN4eJCgHlKy4%2FVgOmo6N1SMMmFpduipWxZP8RbVb8ThzdqIgzUJfIrhPwP1V2nu0oz2%2F3GghZTS3saCfBg8wFeQ0Icb%2F8MQoq4rIVdmeB76g6y1RRJkgB1BG2LuNJ2UR26CRlsNoyLNKZVYBaRbR8eNH0w133X%2FGNFWswoxHlNxdI8qJY%2FZCFY6Z8wIWXoqUh6xz1lnVwit6brj%2BHlSSeT7ydRAObMX%2BRUZ4Q0jqF180aa%2BgBCYC79Le7pkTWLU1gp53j8hcwu7CCvwY6pgFcUCCbycR%2FTMw3Z49EnIa6AwJ8YbdnEjNFl9HsB9lTiJtqJS%2Bg32bYw%2F6lCR9CCsWo8pSK6Vxo7GrSCLmmTC%2BC1cxSF4KXGMqyT7qv9n%2FEdRg6MKAGd1X2basMdK7NLFlMYyh0IG1oLjT0M3plJF2%2F2RHoisUiyGFLFfcjUa1lRtlT006U%2FTJ3ffza4J9GM8%2BJkubY1iYUdf0GiWILkwOW0OjOMKup&X-Amz-Signature=5c06221290c7539c9a38274efde589b949050be48c07a5f6c0129914d47c2de6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
