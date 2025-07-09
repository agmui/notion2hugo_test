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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUX3DHER%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzutCLYKlTEqJl%2FlMFpNdLRBwBr5NpID0r1usoi7zONAiB7DP53LaInJ31hFCdx0L4tRwZrnRDqVJ8nkw%2Fhl8DBBiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXzjU5ORkcVPvGX6KtwDJQAszLfrhxD7ZEqG9iwu8m170V2VO5ucU8catLVuCgF0oLiTibSfB8xP%2FR72vTt9iGw5Ici2d0c7T382DMdHp%2FOyaZqYInzKubvUm96DMVJgBpa2RPq2JkV2SPEIoYDckVsd5recJQnArxdUX3r7yl%2FW9F13FGTZa3%2BgdtToji1Y4xptH6vGeutiFq1A3bF%2BajxVKJF3LDLgs8F8JFHdT6OsorF200Baf9oINk5Z6cFYHJEaTFltJ0Zcd%2F2n4h70%2B6Dj4jvHOVNR9fZ%2Be%2BDOd0ZR9QvuJjv%2Ftrxapwkw1yqeERxxiwTr24tnrsOOyoiOTr16VRHk7LTshWaWFurqMJSWRmVQ2y9owv2C2wveGZAFSw9B4HQhtlc%2FxUdBINob0q1qXDKwYh6DczyOPXI%2F9YdnywyyyYecEkOuNQIgC4Vc25H42OFolSQSbZeHHm6mMX6RDmpz9%2FSXka%2Bk67nMdeYREfY7vDsOg%2Fm7oW86GmXCH5C35Z12vVFAPsqSxZ70aUYja8a3Kfhr2CEslxJ2L2LF0jFNPBmX264G0fWb8Ps1vIdCTsBIb38HbCns8ugVtYrM4URu62CITw1p17jnb9Ba5sT2tfUK1Z7dYWmjtiI84g12KHPSTA9flAIwvbO2wwY6pgH4YhSXxiL4RW0%2B3UQcUDU5V386Ic3d%2Fudx0ukm3lqWZFMWWYEUohMq%2FVD5UVER9MHB3JDNd2LAkIYNc2JXxt6XzORvpnaxuaAJAtKm%2FYc%2B%2BdMCOlMdly1dFy1kEeqr14H6PKyAw%2BxpEHJq7uKYAUjccw8wfWqy0nHy4TxcXnqmnklTNoLaxndq2J%2F0Go7RXstusevftLEcu8BH4%2Bz2SIHT9FDbPT7z&X-Amz-Signature=4f82c97ad191cf36aa0c507301c89f2d746884fa9a05cb2cfa0c25a6ea35e451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUX3DHER%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzutCLYKlTEqJl%2FlMFpNdLRBwBr5NpID0r1usoi7zONAiB7DP53LaInJ31hFCdx0L4tRwZrnRDqVJ8nkw%2Fhl8DBBiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXzjU5ORkcVPvGX6KtwDJQAszLfrhxD7ZEqG9iwu8m170V2VO5ucU8catLVuCgF0oLiTibSfB8xP%2FR72vTt9iGw5Ici2d0c7T382DMdHp%2FOyaZqYInzKubvUm96DMVJgBpa2RPq2JkV2SPEIoYDckVsd5recJQnArxdUX3r7yl%2FW9F13FGTZa3%2BgdtToji1Y4xptH6vGeutiFq1A3bF%2BajxVKJF3LDLgs8F8JFHdT6OsorF200Baf9oINk5Z6cFYHJEaTFltJ0Zcd%2F2n4h70%2B6Dj4jvHOVNR9fZ%2Be%2BDOd0ZR9QvuJjv%2Ftrxapwkw1yqeERxxiwTr24tnrsOOyoiOTr16VRHk7LTshWaWFurqMJSWRmVQ2y9owv2C2wveGZAFSw9B4HQhtlc%2FxUdBINob0q1qXDKwYh6DczyOPXI%2F9YdnywyyyYecEkOuNQIgC4Vc25H42OFolSQSbZeHHm6mMX6RDmpz9%2FSXka%2Bk67nMdeYREfY7vDsOg%2Fm7oW86GmXCH5C35Z12vVFAPsqSxZ70aUYja8a3Kfhr2CEslxJ2L2LF0jFNPBmX264G0fWb8Ps1vIdCTsBIb38HbCns8ugVtYrM4URu62CITw1p17jnb9Ba5sT2tfUK1Z7dYWmjtiI84g12KHPSTA9flAIwvbO2wwY6pgH4YhSXxiL4RW0%2B3UQcUDU5V386Ic3d%2Fudx0ukm3lqWZFMWWYEUohMq%2FVD5UVER9MHB3JDNd2LAkIYNc2JXxt6XzORvpnaxuaAJAtKm%2FYc%2B%2BdMCOlMdly1dFy1kEeqr14H6PKyAw%2BxpEHJq7uKYAUjccw8wfWqy0nHy4TxcXnqmnklTNoLaxndq2J%2F0Go7RXstusevftLEcu8BH4%2Bz2SIHT9FDbPT7z&X-Amz-Signature=58af295e2c6417fa3706fd9abcb0eaac6946b998d19a1ce81b2b07cb49d2158a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUX3DHER%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzutCLYKlTEqJl%2FlMFpNdLRBwBr5NpID0r1usoi7zONAiB7DP53LaInJ31hFCdx0L4tRwZrnRDqVJ8nkw%2Fhl8DBBiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXzjU5ORkcVPvGX6KtwDJQAszLfrhxD7ZEqG9iwu8m170V2VO5ucU8catLVuCgF0oLiTibSfB8xP%2FR72vTt9iGw5Ici2d0c7T382DMdHp%2FOyaZqYInzKubvUm96DMVJgBpa2RPq2JkV2SPEIoYDckVsd5recJQnArxdUX3r7yl%2FW9F13FGTZa3%2BgdtToji1Y4xptH6vGeutiFq1A3bF%2BajxVKJF3LDLgs8F8JFHdT6OsorF200Baf9oINk5Z6cFYHJEaTFltJ0Zcd%2F2n4h70%2B6Dj4jvHOVNR9fZ%2Be%2BDOd0ZR9QvuJjv%2Ftrxapwkw1yqeERxxiwTr24tnrsOOyoiOTr16VRHk7LTshWaWFurqMJSWRmVQ2y9owv2C2wveGZAFSw9B4HQhtlc%2FxUdBINob0q1qXDKwYh6DczyOPXI%2F9YdnywyyyYecEkOuNQIgC4Vc25H42OFolSQSbZeHHm6mMX6RDmpz9%2FSXka%2Bk67nMdeYREfY7vDsOg%2Fm7oW86GmXCH5C35Z12vVFAPsqSxZ70aUYja8a3Kfhr2CEslxJ2L2LF0jFNPBmX264G0fWb8Ps1vIdCTsBIb38HbCns8ugVtYrM4URu62CITw1p17jnb9Ba5sT2tfUK1Z7dYWmjtiI84g12KHPSTA9flAIwvbO2wwY6pgH4YhSXxiL4RW0%2B3UQcUDU5V386Ic3d%2Fudx0ukm3lqWZFMWWYEUohMq%2FVD5UVER9MHB3JDNd2LAkIYNc2JXxt6XzORvpnaxuaAJAtKm%2FYc%2B%2BdMCOlMdly1dFy1kEeqr14H6PKyAw%2BxpEHJq7uKYAUjccw8wfWqy0nHy4TxcXnqmnklTNoLaxndq2J%2F0Go7RXstusevftLEcu8BH4%2Bz2SIHT9FDbPT7z&X-Amz-Signature=f25b23e3781ecb7f86239fa0b6432d4fa73d410c914d2aa4ead834df03846ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUX3DHER%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzutCLYKlTEqJl%2FlMFpNdLRBwBr5NpID0r1usoi7zONAiB7DP53LaInJ31hFCdx0L4tRwZrnRDqVJ8nkw%2Fhl8DBBiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXzjU5ORkcVPvGX6KtwDJQAszLfrhxD7ZEqG9iwu8m170V2VO5ucU8catLVuCgF0oLiTibSfB8xP%2FR72vTt9iGw5Ici2d0c7T382DMdHp%2FOyaZqYInzKubvUm96DMVJgBpa2RPq2JkV2SPEIoYDckVsd5recJQnArxdUX3r7yl%2FW9F13FGTZa3%2BgdtToji1Y4xptH6vGeutiFq1A3bF%2BajxVKJF3LDLgs8F8JFHdT6OsorF200Baf9oINk5Z6cFYHJEaTFltJ0Zcd%2F2n4h70%2B6Dj4jvHOVNR9fZ%2Be%2BDOd0ZR9QvuJjv%2Ftrxapwkw1yqeERxxiwTr24tnrsOOyoiOTr16VRHk7LTshWaWFurqMJSWRmVQ2y9owv2C2wveGZAFSw9B4HQhtlc%2FxUdBINob0q1qXDKwYh6DczyOPXI%2F9YdnywyyyYecEkOuNQIgC4Vc25H42OFolSQSbZeHHm6mMX6RDmpz9%2FSXka%2Bk67nMdeYREfY7vDsOg%2Fm7oW86GmXCH5C35Z12vVFAPsqSxZ70aUYja8a3Kfhr2CEslxJ2L2LF0jFNPBmX264G0fWb8Ps1vIdCTsBIb38HbCns8ugVtYrM4URu62CITw1p17jnb9Ba5sT2tfUK1Z7dYWmjtiI84g12KHPSTA9flAIwvbO2wwY6pgH4YhSXxiL4RW0%2B3UQcUDU5V386Ic3d%2Fudx0ukm3lqWZFMWWYEUohMq%2FVD5UVER9MHB3JDNd2LAkIYNc2JXxt6XzORvpnaxuaAJAtKm%2FYc%2B%2BdMCOlMdly1dFy1kEeqr14H6PKyAw%2BxpEHJq7uKYAUjccw8wfWqy0nHy4TxcXnqmnklTNoLaxndq2J%2F0Go7RXstusevftLEcu8BH4%2Bz2SIHT9FDbPT7z&X-Amz-Signature=4eb77e94c1fa0eb5a37c1cccb1f24b0d011a6393967015db89ba46d8e4f357b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUX3DHER%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzutCLYKlTEqJl%2FlMFpNdLRBwBr5NpID0r1usoi7zONAiB7DP53LaInJ31hFCdx0L4tRwZrnRDqVJ8nkw%2Fhl8DBBiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXzjU5ORkcVPvGX6KtwDJQAszLfrhxD7ZEqG9iwu8m170V2VO5ucU8catLVuCgF0oLiTibSfB8xP%2FR72vTt9iGw5Ici2d0c7T382DMdHp%2FOyaZqYInzKubvUm96DMVJgBpa2RPq2JkV2SPEIoYDckVsd5recJQnArxdUX3r7yl%2FW9F13FGTZa3%2BgdtToji1Y4xptH6vGeutiFq1A3bF%2BajxVKJF3LDLgs8F8JFHdT6OsorF200Baf9oINk5Z6cFYHJEaTFltJ0Zcd%2F2n4h70%2B6Dj4jvHOVNR9fZ%2Be%2BDOd0ZR9QvuJjv%2Ftrxapwkw1yqeERxxiwTr24tnrsOOyoiOTr16VRHk7LTshWaWFurqMJSWRmVQ2y9owv2C2wveGZAFSw9B4HQhtlc%2FxUdBINob0q1qXDKwYh6DczyOPXI%2F9YdnywyyyYecEkOuNQIgC4Vc25H42OFolSQSbZeHHm6mMX6RDmpz9%2FSXka%2Bk67nMdeYREfY7vDsOg%2Fm7oW86GmXCH5C35Z12vVFAPsqSxZ70aUYja8a3Kfhr2CEslxJ2L2LF0jFNPBmX264G0fWb8Ps1vIdCTsBIb38HbCns8ugVtYrM4URu62CITw1p17jnb9Ba5sT2tfUK1Z7dYWmjtiI84g12KHPSTA9flAIwvbO2wwY6pgH4YhSXxiL4RW0%2B3UQcUDU5V386Ic3d%2Fudx0ukm3lqWZFMWWYEUohMq%2FVD5UVER9MHB3JDNd2LAkIYNc2JXxt6XzORvpnaxuaAJAtKm%2FYc%2B%2BdMCOlMdly1dFy1kEeqr14H6PKyAw%2BxpEHJq7uKYAUjccw8wfWqy0nHy4TxcXnqmnklTNoLaxndq2J%2F0Go7RXstusevftLEcu8BH4%2Bz2SIHT9FDbPT7z&X-Amz-Signature=a093bdcce01f263928bea7b456bf46f58ed1b14011c880acae9f2a58cd89019e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
