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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635GAGCGU%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFR9%2BHfp5y1jsxjpKoSwvgzFWfyfpHCxYk6fXziRVoKiAiATeimrJ9SBsff0AHyG3eXmSlSsTW0dhq7dsOeXeLq%2BvyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxokCWMY6NWQ5jTHxKtwDarwfI1Ds%2BzfklYJ%2Bx%2FrmVyY2MXE1AsmnsmRp%2F6uyYD9q3%2B14tyzf2M5b4lBbBlYXuk%2B135rW%2F2Zc%2FEdmAhCPstlnbTj54HWHfj0ezt3GXnEQCZ7Kn6iYj0VRH3QgG5OZqAi7ub72QvWK8R3LSGOINUawdYNeoKaRLFx1xOodsv7hxbeDBBTiBlMLm%2Fn1XuIQk55mft9WoUFQX61vn1%2BMvbsJmWs6kwHPAU1EcoX14QHAFbjc30gZCjQj3B%2FCJrY19ET3QLe37y%2FiNlS1w4mzIIGM7%2F2wPcU%2FqfdkYEcfAF5vw16wcZfCpAl6uplNLyk%2B4%2FEqkpfdW75wscF7%2FUUVUl7yyGn0Mq7Zjb5yghi6yndn311Ja43l07yO0gbqP%2FLjwrJG6G7RpJRh2yXQKVNz9DhfC%2BCFq1uY0uTC0cpgfocsOu5R1u1VfRdia5UPiaiduiRHCOGFTWKlC%2FF1Db0771v4ZvjLAqCb4Qf2myc%2F4ViX3IhjDWxEc94%2BYo23%2BQsjCKeldJKgnS6eOpXYq3uAZxtCaJUxsuFvp%2BZcLpAX66IMGTQvsBqDFxuJ0ywFcMcE8rCx1Gyu3AwaU1HF9SsjguEPNjyAhGyLHUsZt91Nsnh%2F6Rm4GRKOmqm1PswwoL%2BgvQY6pgFWWF0gBj8zg0IzYve7cnSklj3CuAyiXFfIXCtgNIQSKsJrL3xVM7S1%2BOwxgOP1tQxyFkMVgU0MtLi%2FYpywWH5TgACDI9EvMZKJFnSFKPNWansp8AbAOHNDrtVXzQdxsXRuQroBeLuoVHPHUvjVrwKRUP9Q381wFBjd1e99ZKZ2LDKTvDd3K9VAEyftyu8UL9gZ4o84YJwccl1qJ8opXppcN6F1QHIs&X-Amz-Signature=ddba0c1da3ba9a66153b440b2af7cabacd48cf4fae59a4ee3456469fb8f75e23&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635GAGCGU%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFR9%2BHfp5y1jsxjpKoSwvgzFWfyfpHCxYk6fXziRVoKiAiATeimrJ9SBsff0AHyG3eXmSlSsTW0dhq7dsOeXeLq%2BvyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxokCWMY6NWQ5jTHxKtwDarwfI1Ds%2BzfklYJ%2Bx%2FrmVyY2MXE1AsmnsmRp%2F6uyYD9q3%2B14tyzf2M5b4lBbBlYXuk%2B135rW%2F2Zc%2FEdmAhCPstlnbTj54HWHfj0ezt3GXnEQCZ7Kn6iYj0VRH3QgG5OZqAi7ub72QvWK8R3LSGOINUawdYNeoKaRLFx1xOodsv7hxbeDBBTiBlMLm%2Fn1XuIQk55mft9WoUFQX61vn1%2BMvbsJmWs6kwHPAU1EcoX14QHAFbjc30gZCjQj3B%2FCJrY19ET3QLe37y%2FiNlS1w4mzIIGM7%2F2wPcU%2FqfdkYEcfAF5vw16wcZfCpAl6uplNLyk%2B4%2FEqkpfdW75wscF7%2FUUVUl7yyGn0Mq7Zjb5yghi6yndn311Ja43l07yO0gbqP%2FLjwrJG6G7RpJRh2yXQKVNz9DhfC%2BCFq1uY0uTC0cpgfocsOu5R1u1VfRdia5UPiaiduiRHCOGFTWKlC%2FF1Db0771v4ZvjLAqCb4Qf2myc%2F4ViX3IhjDWxEc94%2BYo23%2BQsjCKeldJKgnS6eOpXYq3uAZxtCaJUxsuFvp%2BZcLpAX66IMGTQvsBqDFxuJ0ywFcMcE8rCx1Gyu3AwaU1HF9SsjguEPNjyAhGyLHUsZt91Nsnh%2F6Rm4GRKOmqm1PswwoL%2BgvQY6pgFWWF0gBj8zg0IzYve7cnSklj3CuAyiXFfIXCtgNIQSKsJrL3xVM7S1%2BOwxgOP1tQxyFkMVgU0MtLi%2FYpywWH5TgACDI9EvMZKJFnSFKPNWansp8AbAOHNDrtVXzQdxsXRuQroBeLuoVHPHUvjVrwKRUP9Q381wFBjd1e99ZKZ2LDKTvDd3K9VAEyftyu8UL9gZ4o84YJwccl1qJ8opXppcN6F1QHIs&X-Amz-Signature=4f004437a998e4b27ddc72c48fbf9a4efb5a0655b8751b599055a4b76c01f143&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635GAGCGU%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFR9%2BHfp5y1jsxjpKoSwvgzFWfyfpHCxYk6fXziRVoKiAiATeimrJ9SBsff0AHyG3eXmSlSsTW0dhq7dsOeXeLq%2BvyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxokCWMY6NWQ5jTHxKtwDarwfI1Ds%2BzfklYJ%2Bx%2FrmVyY2MXE1AsmnsmRp%2F6uyYD9q3%2B14tyzf2M5b4lBbBlYXuk%2B135rW%2F2Zc%2FEdmAhCPstlnbTj54HWHfj0ezt3GXnEQCZ7Kn6iYj0VRH3QgG5OZqAi7ub72QvWK8R3LSGOINUawdYNeoKaRLFx1xOodsv7hxbeDBBTiBlMLm%2Fn1XuIQk55mft9WoUFQX61vn1%2BMvbsJmWs6kwHPAU1EcoX14QHAFbjc30gZCjQj3B%2FCJrY19ET3QLe37y%2FiNlS1w4mzIIGM7%2F2wPcU%2FqfdkYEcfAF5vw16wcZfCpAl6uplNLyk%2B4%2FEqkpfdW75wscF7%2FUUVUl7yyGn0Mq7Zjb5yghi6yndn311Ja43l07yO0gbqP%2FLjwrJG6G7RpJRh2yXQKVNz9DhfC%2BCFq1uY0uTC0cpgfocsOu5R1u1VfRdia5UPiaiduiRHCOGFTWKlC%2FF1Db0771v4ZvjLAqCb4Qf2myc%2F4ViX3IhjDWxEc94%2BYo23%2BQsjCKeldJKgnS6eOpXYq3uAZxtCaJUxsuFvp%2BZcLpAX66IMGTQvsBqDFxuJ0ywFcMcE8rCx1Gyu3AwaU1HF9SsjguEPNjyAhGyLHUsZt91Nsnh%2F6Rm4GRKOmqm1PswwoL%2BgvQY6pgFWWF0gBj8zg0IzYve7cnSklj3CuAyiXFfIXCtgNIQSKsJrL3xVM7S1%2BOwxgOP1tQxyFkMVgU0MtLi%2FYpywWH5TgACDI9EvMZKJFnSFKPNWansp8AbAOHNDrtVXzQdxsXRuQroBeLuoVHPHUvjVrwKRUP9Q381wFBjd1e99ZKZ2LDKTvDd3K9VAEyftyu8UL9gZ4o84YJwccl1qJ8opXppcN6F1QHIs&X-Amz-Signature=82efe6132ea46d2db8fb9c43c0e8aacc285b602cd3cea4bf6804c9926d2e758f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635GAGCGU%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFR9%2BHfp5y1jsxjpKoSwvgzFWfyfpHCxYk6fXziRVoKiAiATeimrJ9SBsff0AHyG3eXmSlSsTW0dhq7dsOeXeLq%2BvyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxokCWMY6NWQ5jTHxKtwDarwfI1Ds%2BzfklYJ%2Bx%2FrmVyY2MXE1AsmnsmRp%2F6uyYD9q3%2B14tyzf2M5b4lBbBlYXuk%2B135rW%2F2Zc%2FEdmAhCPstlnbTj54HWHfj0ezt3GXnEQCZ7Kn6iYj0VRH3QgG5OZqAi7ub72QvWK8R3LSGOINUawdYNeoKaRLFx1xOodsv7hxbeDBBTiBlMLm%2Fn1XuIQk55mft9WoUFQX61vn1%2BMvbsJmWs6kwHPAU1EcoX14QHAFbjc30gZCjQj3B%2FCJrY19ET3QLe37y%2FiNlS1w4mzIIGM7%2F2wPcU%2FqfdkYEcfAF5vw16wcZfCpAl6uplNLyk%2B4%2FEqkpfdW75wscF7%2FUUVUl7yyGn0Mq7Zjb5yghi6yndn311Ja43l07yO0gbqP%2FLjwrJG6G7RpJRh2yXQKVNz9DhfC%2BCFq1uY0uTC0cpgfocsOu5R1u1VfRdia5UPiaiduiRHCOGFTWKlC%2FF1Db0771v4ZvjLAqCb4Qf2myc%2F4ViX3IhjDWxEc94%2BYo23%2BQsjCKeldJKgnS6eOpXYq3uAZxtCaJUxsuFvp%2BZcLpAX66IMGTQvsBqDFxuJ0ywFcMcE8rCx1Gyu3AwaU1HF9SsjguEPNjyAhGyLHUsZt91Nsnh%2F6Rm4GRKOmqm1PswwoL%2BgvQY6pgFWWF0gBj8zg0IzYve7cnSklj3CuAyiXFfIXCtgNIQSKsJrL3xVM7S1%2BOwxgOP1tQxyFkMVgU0MtLi%2FYpywWH5TgACDI9EvMZKJFnSFKPNWansp8AbAOHNDrtVXzQdxsXRuQroBeLuoVHPHUvjVrwKRUP9Q381wFBjd1e99ZKZ2LDKTvDd3K9VAEyftyu8UL9gZ4o84YJwccl1qJ8opXppcN6F1QHIs&X-Amz-Signature=b7b7244966af1cc7441276acd173533d2f7d8c2a6b4a12b0837952caf9fcb647&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635GAGCGU%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFR9%2BHfp5y1jsxjpKoSwvgzFWfyfpHCxYk6fXziRVoKiAiATeimrJ9SBsff0AHyG3eXmSlSsTW0dhq7dsOeXeLq%2BvyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxokCWMY6NWQ5jTHxKtwDarwfI1Ds%2BzfklYJ%2Bx%2FrmVyY2MXE1AsmnsmRp%2F6uyYD9q3%2B14tyzf2M5b4lBbBlYXuk%2B135rW%2F2Zc%2FEdmAhCPstlnbTj54HWHfj0ezt3GXnEQCZ7Kn6iYj0VRH3QgG5OZqAi7ub72QvWK8R3LSGOINUawdYNeoKaRLFx1xOodsv7hxbeDBBTiBlMLm%2Fn1XuIQk55mft9WoUFQX61vn1%2BMvbsJmWs6kwHPAU1EcoX14QHAFbjc30gZCjQj3B%2FCJrY19ET3QLe37y%2FiNlS1w4mzIIGM7%2F2wPcU%2FqfdkYEcfAF5vw16wcZfCpAl6uplNLyk%2B4%2FEqkpfdW75wscF7%2FUUVUl7yyGn0Mq7Zjb5yghi6yndn311Ja43l07yO0gbqP%2FLjwrJG6G7RpJRh2yXQKVNz9DhfC%2BCFq1uY0uTC0cpgfocsOu5R1u1VfRdia5UPiaiduiRHCOGFTWKlC%2FF1Db0771v4ZvjLAqCb4Qf2myc%2F4ViX3IhjDWxEc94%2BYo23%2BQsjCKeldJKgnS6eOpXYq3uAZxtCaJUxsuFvp%2BZcLpAX66IMGTQvsBqDFxuJ0ywFcMcE8rCx1Gyu3AwaU1HF9SsjguEPNjyAhGyLHUsZt91Nsnh%2F6Rm4GRKOmqm1PswwoL%2BgvQY6pgFWWF0gBj8zg0IzYve7cnSklj3CuAyiXFfIXCtgNIQSKsJrL3xVM7S1%2BOwxgOP1tQxyFkMVgU0MtLi%2FYpywWH5TgACDI9EvMZKJFnSFKPNWansp8AbAOHNDrtVXzQdxsXRuQroBeLuoVHPHUvjVrwKRUP9Q381wFBjd1e99ZKZ2LDKTvDd3K9VAEyftyu8UL9gZ4o84YJwccl1qJ8opXppcN6F1QHIs&X-Amz-Signature=4759279db527aff10a790328db44edb1b6b76fa9b160230373dd8a8e5e7a3586&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
