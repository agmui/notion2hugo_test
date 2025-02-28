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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZNLOZRQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDeOj0oN5Qpsb6Pa%2B6ywXBDCtRX6cYOb1%2FU3YzibXsFugIhANRj9XkffiZ56Mdek5bATbpOinpZLmQ5jorpsK9ZixoNKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVz5ME8BB00juzcwUq3APr5IZieQ8x%2FnVTui%2F%2Bfk%2BNCgeo72aYMNqozhaiafVpsYezl3mfIR0bqVJRb0n2VQaqSrwcE06I39fhnk0Xialru6Yin5FMM%2Bs2PGbjppPK0Lb56Uiw7ivjx1RpGfmwnOFMSZs%2BSaJEBnQ8bEJKEi3JfyMXoXhH5EoJFaHrCLOmMDBgfl1z%2Ftwjlw6N%2BNll2sG%2FDrN%2BFxs%2B0uv68gdxe0R7zha5wsg1G9QFrhi4uYj4O8zcQCUZsi7I9BaUYDPufHQGpT2WD1jFBy2bN93VGNFNZ0xeDtwrDNne34IW0pRcysSlX6jHjbvaEeyDecOZ7uE1qbEweG6qHkBkNBQHGr7Yr7WcLwQWq7okyK4nZ2XGqwpuirGf0DSEDSupFnPTBmkRtNh7mv593y27fc2AvwG%2FaOQJyT77%2BY7L1jSASKUQmR9setDK63ll5k5%2FCa8FOV%2FGrbGJ5NirvZ7eU8YqY7iKvSReCaj%2FLqtw4SY1JQWS3cKBuJfzwKWGjV3gBVE%2BgJ1HBIQ6spHZzGgNMLCmpMleOoyncrd%2B4of6nOSEiJZvxiAVEQVS3dUF7GhcyNjHVOR2440eEtlkYzgqMeVB8inj0o3LgX4KssG5oBMGkxpnMUUrUKa9N1Tz%2Fo80sTC184S%2BBjqkAdH%2FZN6MskxkUB5IidmeuMZKob2GRKfrT2JDbIUGAWyWx9Cw5QHqBtcoGb5FmtdIqKz5jgTlwl7EFlkTji%2FDjO2HS3A%2FCiwT1GndiUgH2Jacp9my2I9Te7IZuhxNoovv5t8SWBTtp04hDfMdLSIS5mSZDNdGStdFNGtoWNVO76DtWicNuZGwnYOPkaqj2BT%2B8TCgYCEcgB3tpHMDmYjX8SUQqxZM&X-Amz-Signature=5f9fc3f1e14d0c371b07d6003419571dc89ed719e60cae72fe45386d115655ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZNLOZRQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDeOj0oN5Qpsb6Pa%2B6ywXBDCtRX6cYOb1%2FU3YzibXsFugIhANRj9XkffiZ56Mdek5bATbpOinpZLmQ5jorpsK9ZixoNKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVz5ME8BB00juzcwUq3APr5IZieQ8x%2FnVTui%2F%2Bfk%2BNCgeo72aYMNqozhaiafVpsYezl3mfIR0bqVJRb0n2VQaqSrwcE06I39fhnk0Xialru6Yin5FMM%2Bs2PGbjppPK0Lb56Uiw7ivjx1RpGfmwnOFMSZs%2BSaJEBnQ8bEJKEi3JfyMXoXhH5EoJFaHrCLOmMDBgfl1z%2Ftwjlw6N%2BNll2sG%2FDrN%2BFxs%2B0uv68gdxe0R7zha5wsg1G9QFrhi4uYj4O8zcQCUZsi7I9BaUYDPufHQGpT2WD1jFBy2bN93VGNFNZ0xeDtwrDNne34IW0pRcysSlX6jHjbvaEeyDecOZ7uE1qbEweG6qHkBkNBQHGr7Yr7WcLwQWq7okyK4nZ2XGqwpuirGf0DSEDSupFnPTBmkRtNh7mv593y27fc2AvwG%2FaOQJyT77%2BY7L1jSASKUQmR9setDK63ll5k5%2FCa8FOV%2FGrbGJ5NirvZ7eU8YqY7iKvSReCaj%2FLqtw4SY1JQWS3cKBuJfzwKWGjV3gBVE%2BgJ1HBIQ6spHZzGgNMLCmpMleOoyncrd%2B4of6nOSEiJZvxiAVEQVS3dUF7GhcyNjHVOR2440eEtlkYzgqMeVB8inj0o3LgX4KssG5oBMGkxpnMUUrUKa9N1Tz%2Fo80sTC184S%2BBjqkAdH%2FZN6MskxkUB5IidmeuMZKob2GRKfrT2JDbIUGAWyWx9Cw5QHqBtcoGb5FmtdIqKz5jgTlwl7EFlkTji%2FDjO2HS3A%2FCiwT1GndiUgH2Jacp9my2I9Te7IZuhxNoovv5t8SWBTtp04hDfMdLSIS5mSZDNdGStdFNGtoWNVO76DtWicNuZGwnYOPkaqj2BT%2B8TCgYCEcgB3tpHMDmYjX8SUQqxZM&X-Amz-Signature=898f6c4a6bff3b9f461ec9b9774161ac4b6d393ebac5a7e3d420b7ed2ee51ace&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZNLOZRQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDeOj0oN5Qpsb6Pa%2B6ywXBDCtRX6cYOb1%2FU3YzibXsFugIhANRj9XkffiZ56Mdek5bATbpOinpZLmQ5jorpsK9ZixoNKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVz5ME8BB00juzcwUq3APr5IZieQ8x%2FnVTui%2F%2Bfk%2BNCgeo72aYMNqozhaiafVpsYezl3mfIR0bqVJRb0n2VQaqSrwcE06I39fhnk0Xialru6Yin5FMM%2Bs2PGbjppPK0Lb56Uiw7ivjx1RpGfmwnOFMSZs%2BSaJEBnQ8bEJKEi3JfyMXoXhH5EoJFaHrCLOmMDBgfl1z%2Ftwjlw6N%2BNll2sG%2FDrN%2BFxs%2B0uv68gdxe0R7zha5wsg1G9QFrhi4uYj4O8zcQCUZsi7I9BaUYDPufHQGpT2WD1jFBy2bN93VGNFNZ0xeDtwrDNne34IW0pRcysSlX6jHjbvaEeyDecOZ7uE1qbEweG6qHkBkNBQHGr7Yr7WcLwQWq7okyK4nZ2XGqwpuirGf0DSEDSupFnPTBmkRtNh7mv593y27fc2AvwG%2FaOQJyT77%2BY7L1jSASKUQmR9setDK63ll5k5%2FCa8FOV%2FGrbGJ5NirvZ7eU8YqY7iKvSReCaj%2FLqtw4SY1JQWS3cKBuJfzwKWGjV3gBVE%2BgJ1HBIQ6spHZzGgNMLCmpMleOoyncrd%2B4of6nOSEiJZvxiAVEQVS3dUF7GhcyNjHVOR2440eEtlkYzgqMeVB8inj0o3LgX4KssG5oBMGkxpnMUUrUKa9N1Tz%2Fo80sTC184S%2BBjqkAdH%2FZN6MskxkUB5IidmeuMZKob2GRKfrT2JDbIUGAWyWx9Cw5QHqBtcoGb5FmtdIqKz5jgTlwl7EFlkTji%2FDjO2HS3A%2FCiwT1GndiUgH2Jacp9my2I9Te7IZuhxNoovv5t8SWBTtp04hDfMdLSIS5mSZDNdGStdFNGtoWNVO76DtWicNuZGwnYOPkaqj2BT%2B8TCgYCEcgB3tpHMDmYjX8SUQqxZM&X-Amz-Signature=f95cdfe953ef18a78d4ac7f7c44997ddaef07b857a4c1d38a17c73b39f1d63eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZNLOZRQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDeOj0oN5Qpsb6Pa%2B6ywXBDCtRX6cYOb1%2FU3YzibXsFugIhANRj9XkffiZ56Mdek5bATbpOinpZLmQ5jorpsK9ZixoNKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVz5ME8BB00juzcwUq3APr5IZieQ8x%2FnVTui%2F%2Bfk%2BNCgeo72aYMNqozhaiafVpsYezl3mfIR0bqVJRb0n2VQaqSrwcE06I39fhnk0Xialru6Yin5FMM%2Bs2PGbjppPK0Lb56Uiw7ivjx1RpGfmwnOFMSZs%2BSaJEBnQ8bEJKEi3JfyMXoXhH5EoJFaHrCLOmMDBgfl1z%2Ftwjlw6N%2BNll2sG%2FDrN%2BFxs%2B0uv68gdxe0R7zha5wsg1G9QFrhi4uYj4O8zcQCUZsi7I9BaUYDPufHQGpT2WD1jFBy2bN93VGNFNZ0xeDtwrDNne34IW0pRcysSlX6jHjbvaEeyDecOZ7uE1qbEweG6qHkBkNBQHGr7Yr7WcLwQWq7okyK4nZ2XGqwpuirGf0DSEDSupFnPTBmkRtNh7mv593y27fc2AvwG%2FaOQJyT77%2BY7L1jSASKUQmR9setDK63ll5k5%2FCa8FOV%2FGrbGJ5NirvZ7eU8YqY7iKvSReCaj%2FLqtw4SY1JQWS3cKBuJfzwKWGjV3gBVE%2BgJ1HBIQ6spHZzGgNMLCmpMleOoyncrd%2B4of6nOSEiJZvxiAVEQVS3dUF7GhcyNjHVOR2440eEtlkYzgqMeVB8inj0o3LgX4KssG5oBMGkxpnMUUrUKa9N1Tz%2Fo80sTC184S%2BBjqkAdH%2FZN6MskxkUB5IidmeuMZKob2GRKfrT2JDbIUGAWyWx9Cw5QHqBtcoGb5FmtdIqKz5jgTlwl7EFlkTji%2FDjO2HS3A%2FCiwT1GndiUgH2Jacp9my2I9Te7IZuhxNoovv5t8SWBTtp04hDfMdLSIS5mSZDNdGStdFNGtoWNVO76DtWicNuZGwnYOPkaqj2BT%2B8TCgYCEcgB3tpHMDmYjX8SUQqxZM&X-Amz-Signature=e29c7fa90c23b884bd24c8214792fb7826a192d7035e1eb6237d093baedfdb67&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZNLOZRQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDeOj0oN5Qpsb6Pa%2B6ywXBDCtRX6cYOb1%2FU3YzibXsFugIhANRj9XkffiZ56Mdek5bATbpOinpZLmQ5jorpsK9ZixoNKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVz5ME8BB00juzcwUq3APr5IZieQ8x%2FnVTui%2F%2Bfk%2BNCgeo72aYMNqozhaiafVpsYezl3mfIR0bqVJRb0n2VQaqSrwcE06I39fhnk0Xialru6Yin5FMM%2Bs2PGbjppPK0Lb56Uiw7ivjx1RpGfmwnOFMSZs%2BSaJEBnQ8bEJKEi3JfyMXoXhH5EoJFaHrCLOmMDBgfl1z%2Ftwjlw6N%2BNll2sG%2FDrN%2BFxs%2B0uv68gdxe0R7zha5wsg1G9QFrhi4uYj4O8zcQCUZsi7I9BaUYDPufHQGpT2WD1jFBy2bN93VGNFNZ0xeDtwrDNne34IW0pRcysSlX6jHjbvaEeyDecOZ7uE1qbEweG6qHkBkNBQHGr7Yr7WcLwQWq7okyK4nZ2XGqwpuirGf0DSEDSupFnPTBmkRtNh7mv593y27fc2AvwG%2FaOQJyT77%2BY7L1jSASKUQmR9setDK63ll5k5%2FCa8FOV%2FGrbGJ5NirvZ7eU8YqY7iKvSReCaj%2FLqtw4SY1JQWS3cKBuJfzwKWGjV3gBVE%2BgJ1HBIQ6spHZzGgNMLCmpMleOoyncrd%2B4of6nOSEiJZvxiAVEQVS3dUF7GhcyNjHVOR2440eEtlkYzgqMeVB8inj0o3LgX4KssG5oBMGkxpnMUUrUKa9N1Tz%2Fo80sTC184S%2BBjqkAdH%2FZN6MskxkUB5IidmeuMZKob2GRKfrT2JDbIUGAWyWx9Cw5QHqBtcoGb5FmtdIqKz5jgTlwl7EFlkTji%2FDjO2HS3A%2FCiwT1GndiUgH2Jacp9my2I9Te7IZuhxNoovv5t8SWBTtp04hDfMdLSIS5mSZDNdGStdFNGtoWNVO76DtWicNuZGwnYOPkaqj2BT%2B8TCgYCEcgB3tpHMDmYjX8SUQqxZM&X-Amz-Signature=20a2e155f5cef73acb339fb19f690788040ea825294d13fa4b15fc58aabf2f07&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
