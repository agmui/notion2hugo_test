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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ3X2UGB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTfD25PK%2Fu20xE%2ByUafXPKuin8AaVlH6s0biFQlJX6rAiBtYSbXYAot1QxO%2FWXxKAYLcfePGQDUJvtTxp0P9VoOUyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBrrRgTKEuSvZ%2BHhhKtwDEjq703nt7%2F0EfO9bOnCYSDyzx41Gt53jUZlH9g7ltnh0ZcLMeb0%2F9rzvDtYGE1IyWPdNnWuu2RgNCtUaHR90JXEV30fJNak%2FGU%2BjpsBoRvBsEl4jrSMM015KavrnlEgw3tlty7H8RBOswBrjbOwn4MOO4CvN0RRpCedXE1XP%2F1RnzBoaTHaFGLyY6xG2BPvlUqnP4Eeh%2Bbskd9U2Civ19nutsZgbqVhRdc1Qv8P7Rngp7pMluKpYJNJ58o%2Fy9T82geJOjLj8FNYH5332iDmQHQ165ffK8gzenvN4A7vIDejKgOoRwDyOl%2FvYiN%2Bx55mzIN27nZhSnQVgUlDrx19p%2BTiQXmkJm73OSm3jT8wfrKdm%2FLhanvwAP101P4NhDieWwWGQN8nmpb9bK%2Fr6NRgtEXZPGEJ9sUWktyetreJVMtqsijHTOEUQc%2FLpNhyf9AZ8tyizjhH8Srp8ncdwAAwd3Lq%2BD%2F1bFNPfoNMDhyUwwAOtejtNW0t8ZadcXzRyghHV4jETTWYeop9jFmkMePUJKmF5e8S3IhU4O6DdmhxEyjgGwB07KYQSLtU5EkYTenRmZZkYgptBVUPOTc1tnOMsIvk2v3c%2B3247itMtfYFLnwWeQJs5ScfSQJLEg6cwkp38vAY6pgHjgJPAuya5A3kYsg8BqwPGfJd4I91pLQpjvc%2B6CFucMC5BJFYU%2F3pznQEPREfynaX98f7ucHweUZpVXYgcpVjcZXgtrBHsl1GtCV16ryn%2ByF%2BPMzADWDCGjUSvDQRWH19K1mJ19zS6zbGJcpzBRFI%2BCznVprsiBa3wkf2qcXSKklohz96aLAUFpJtl0LYxjUwuTVLRBLAKT9nXNkNW9s8pKyjtkUco&X-Amz-Signature=5e7151dc9eb1c35cb96847cd29c502ad5f80e5e5f48af53ab73d824c8c941688&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ3X2UGB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTfD25PK%2Fu20xE%2ByUafXPKuin8AaVlH6s0biFQlJX6rAiBtYSbXYAot1QxO%2FWXxKAYLcfePGQDUJvtTxp0P9VoOUyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBrrRgTKEuSvZ%2BHhhKtwDEjq703nt7%2F0EfO9bOnCYSDyzx41Gt53jUZlH9g7ltnh0ZcLMeb0%2F9rzvDtYGE1IyWPdNnWuu2RgNCtUaHR90JXEV30fJNak%2FGU%2BjpsBoRvBsEl4jrSMM015KavrnlEgw3tlty7H8RBOswBrjbOwn4MOO4CvN0RRpCedXE1XP%2F1RnzBoaTHaFGLyY6xG2BPvlUqnP4Eeh%2Bbskd9U2Civ19nutsZgbqVhRdc1Qv8P7Rngp7pMluKpYJNJ58o%2Fy9T82geJOjLj8FNYH5332iDmQHQ165ffK8gzenvN4A7vIDejKgOoRwDyOl%2FvYiN%2Bx55mzIN27nZhSnQVgUlDrx19p%2BTiQXmkJm73OSm3jT8wfrKdm%2FLhanvwAP101P4NhDieWwWGQN8nmpb9bK%2Fr6NRgtEXZPGEJ9sUWktyetreJVMtqsijHTOEUQc%2FLpNhyf9AZ8tyizjhH8Srp8ncdwAAwd3Lq%2BD%2F1bFNPfoNMDhyUwwAOtejtNW0t8ZadcXzRyghHV4jETTWYeop9jFmkMePUJKmF5e8S3IhU4O6DdmhxEyjgGwB07KYQSLtU5EkYTenRmZZkYgptBVUPOTc1tnOMsIvk2v3c%2B3247itMtfYFLnwWeQJs5ScfSQJLEg6cwkp38vAY6pgHjgJPAuya5A3kYsg8BqwPGfJd4I91pLQpjvc%2B6CFucMC5BJFYU%2F3pznQEPREfynaX98f7ucHweUZpVXYgcpVjcZXgtrBHsl1GtCV16ryn%2ByF%2BPMzADWDCGjUSvDQRWH19K1mJ19zS6zbGJcpzBRFI%2BCznVprsiBa3wkf2qcXSKklohz96aLAUFpJtl0LYxjUwuTVLRBLAKT9nXNkNW9s8pKyjtkUco&X-Amz-Signature=999f9a1d6ef6ecfeecff5171896dba916e191bf5576ad0db3c95b656c723ea2f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ3X2UGB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTfD25PK%2Fu20xE%2ByUafXPKuin8AaVlH6s0biFQlJX6rAiBtYSbXYAot1QxO%2FWXxKAYLcfePGQDUJvtTxp0P9VoOUyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBrrRgTKEuSvZ%2BHhhKtwDEjq703nt7%2F0EfO9bOnCYSDyzx41Gt53jUZlH9g7ltnh0ZcLMeb0%2F9rzvDtYGE1IyWPdNnWuu2RgNCtUaHR90JXEV30fJNak%2FGU%2BjpsBoRvBsEl4jrSMM015KavrnlEgw3tlty7H8RBOswBrjbOwn4MOO4CvN0RRpCedXE1XP%2F1RnzBoaTHaFGLyY6xG2BPvlUqnP4Eeh%2Bbskd9U2Civ19nutsZgbqVhRdc1Qv8P7Rngp7pMluKpYJNJ58o%2Fy9T82geJOjLj8FNYH5332iDmQHQ165ffK8gzenvN4A7vIDejKgOoRwDyOl%2FvYiN%2Bx55mzIN27nZhSnQVgUlDrx19p%2BTiQXmkJm73OSm3jT8wfrKdm%2FLhanvwAP101P4NhDieWwWGQN8nmpb9bK%2Fr6NRgtEXZPGEJ9sUWktyetreJVMtqsijHTOEUQc%2FLpNhyf9AZ8tyizjhH8Srp8ncdwAAwd3Lq%2BD%2F1bFNPfoNMDhyUwwAOtejtNW0t8ZadcXzRyghHV4jETTWYeop9jFmkMePUJKmF5e8S3IhU4O6DdmhxEyjgGwB07KYQSLtU5EkYTenRmZZkYgptBVUPOTc1tnOMsIvk2v3c%2B3247itMtfYFLnwWeQJs5ScfSQJLEg6cwkp38vAY6pgHjgJPAuya5A3kYsg8BqwPGfJd4I91pLQpjvc%2B6CFucMC5BJFYU%2F3pznQEPREfynaX98f7ucHweUZpVXYgcpVjcZXgtrBHsl1GtCV16ryn%2ByF%2BPMzADWDCGjUSvDQRWH19K1mJ19zS6zbGJcpzBRFI%2BCznVprsiBa3wkf2qcXSKklohz96aLAUFpJtl0LYxjUwuTVLRBLAKT9nXNkNW9s8pKyjtkUco&X-Amz-Signature=336cf934fe20fd1d278bb1b9a84441052dcb09c5038501c7525eff8c9c7a313b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ3X2UGB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTfD25PK%2Fu20xE%2ByUafXPKuin8AaVlH6s0biFQlJX6rAiBtYSbXYAot1QxO%2FWXxKAYLcfePGQDUJvtTxp0P9VoOUyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBrrRgTKEuSvZ%2BHhhKtwDEjq703nt7%2F0EfO9bOnCYSDyzx41Gt53jUZlH9g7ltnh0ZcLMeb0%2F9rzvDtYGE1IyWPdNnWuu2RgNCtUaHR90JXEV30fJNak%2FGU%2BjpsBoRvBsEl4jrSMM015KavrnlEgw3tlty7H8RBOswBrjbOwn4MOO4CvN0RRpCedXE1XP%2F1RnzBoaTHaFGLyY6xG2BPvlUqnP4Eeh%2Bbskd9U2Civ19nutsZgbqVhRdc1Qv8P7Rngp7pMluKpYJNJ58o%2Fy9T82geJOjLj8FNYH5332iDmQHQ165ffK8gzenvN4A7vIDejKgOoRwDyOl%2FvYiN%2Bx55mzIN27nZhSnQVgUlDrx19p%2BTiQXmkJm73OSm3jT8wfrKdm%2FLhanvwAP101P4NhDieWwWGQN8nmpb9bK%2Fr6NRgtEXZPGEJ9sUWktyetreJVMtqsijHTOEUQc%2FLpNhyf9AZ8tyizjhH8Srp8ncdwAAwd3Lq%2BD%2F1bFNPfoNMDhyUwwAOtejtNW0t8ZadcXzRyghHV4jETTWYeop9jFmkMePUJKmF5e8S3IhU4O6DdmhxEyjgGwB07KYQSLtU5EkYTenRmZZkYgptBVUPOTc1tnOMsIvk2v3c%2B3247itMtfYFLnwWeQJs5ScfSQJLEg6cwkp38vAY6pgHjgJPAuya5A3kYsg8BqwPGfJd4I91pLQpjvc%2B6CFucMC5BJFYU%2F3pznQEPREfynaX98f7ucHweUZpVXYgcpVjcZXgtrBHsl1GtCV16ryn%2ByF%2BPMzADWDCGjUSvDQRWH19K1mJ19zS6zbGJcpzBRFI%2BCznVprsiBa3wkf2qcXSKklohz96aLAUFpJtl0LYxjUwuTVLRBLAKT9nXNkNW9s8pKyjtkUco&X-Amz-Signature=c767cfc89b1e38b4ba95154a346e9069a91344a4652a17b3f190261a447a8dff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ3X2UGB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTfD25PK%2Fu20xE%2ByUafXPKuin8AaVlH6s0biFQlJX6rAiBtYSbXYAot1QxO%2FWXxKAYLcfePGQDUJvtTxp0P9VoOUyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBrrRgTKEuSvZ%2BHhhKtwDEjq703nt7%2F0EfO9bOnCYSDyzx41Gt53jUZlH9g7ltnh0ZcLMeb0%2F9rzvDtYGE1IyWPdNnWuu2RgNCtUaHR90JXEV30fJNak%2FGU%2BjpsBoRvBsEl4jrSMM015KavrnlEgw3tlty7H8RBOswBrjbOwn4MOO4CvN0RRpCedXE1XP%2F1RnzBoaTHaFGLyY6xG2BPvlUqnP4Eeh%2Bbskd9U2Civ19nutsZgbqVhRdc1Qv8P7Rngp7pMluKpYJNJ58o%2Fy9T82geJOjLj8FNYH5332iDmQHQ165ffK8gzenvN4A7vIDejKgOoRwDyOl%2FvYiN%2Bx55mzIN27nZhSnQVgUlDrx19p%2BTiQXmkJm73OSm3jT8wfrKdm%2FLhanvwAP101P4NhDieWwWGQN8nmpb9bK%2Fr6NRgtEXZPGEJ9sUWktyetreJVMtqsijHTOEUQc%2FLpNhyf9AZ8tyizjhH8Srp8ncdwAAwd3Lq%2BD%2F1bFNPfoNMDhyUwwAOtejtNW0t8ZadcXzRyghHV4jETTWYeop9jFmkMePUJKmF5e8S3IhU4O6DdmhxEyjgGwB07KYQSLtU5EkYTenRmZZkYgptBVUPOTc1tnOMsIvk2v3c%2B3247itMtfYFLnwWeQJs5ScfSQJLEg6cwkp38vAY6pgHjgJPAuya5A3kYsg8BqwPGfJd4I91pLQpjvc%2B6CFucMC5BJFYU%2F3pznQEPREfynaX98f7ucHweUZpVXYgcpVjcZXgtrBHsl1GtCV16ryn%2ByF%2BPMzADWDCGjUSvDQRWH19K1mJ19zS6zbGJcpzBRFI%2BCznVprsiBa3wkf2qcXSKklohz96aLAUFpJtl0LYxjUwuTVLRBLAKT9nXNkNW9s8pKyjtkUco&X-Amz-Signature=d847672a13df3ac6ce8ba3582b54769b0535d2ba94d2fcb5f6aca461372c5b71&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
