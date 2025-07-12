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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VFLNIPJ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMlju8o9dp9kr9%2B8bxQXSX%2FaXUMUN27x46Jokpr87DyAIgUhBAK%2BVh9MjQhTQkAMr9h5G8o8gy2oE4XAv67dIKqqIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTdIBUXRD%2F6qk6ZaSrcA5Ns9WYO%2BxbdPaKIYTr6bEBBRyUgk1KMRGvgYPbwRY7CjJS1fw%2BK2Gsx%2BuwOLhYyEBzCgU8MAWTedNlB%2FTHGTEaOBgntCfVbwMFa4YCjNKDYFKqaaen8CXC2lnoF4H1TwsvDkv9CcCw5LTg6JxTN9WW%2ByYcsRx2mpc0DazTR23ils0dNVuOopirubbD05X9rZgIC0thoQeZbcB%2BR%2BDxa14BbeBmT8N%2F9T702ajy4nNuQqQu8BVxoaLKrKBhBKXsNfZ82FAt%2B9GyIwKSrukX%2BOHbv6OVm9qC%2FzcGwsaZXMQzzDsj4qyehOIpyzLxgDFvVBD1WFLfHl5v7%2Bo9gu0Bu8rp7TrpP34vJ%2F97zfAThwCk20nWk%2FB4LmIICvfgFBoUegenCIOtE00zLQ83reszjIouSQFxg6HZjZd4aqMUWmgYsLS8G%2BZyT90Cr1YWqFuI0Uw12bD%2F2CLvzSjo20yF%2BE9z5eOBd79lTdNYjRLn0JYWAgBM0ZYc3yzDo0Pb6kMhteviiXCdFtcTVvw6JSl%2Bwt%2FVvonuU10EYqUBQAO4YcrDcnRKWzuR5NMuuCmP3TSWGIIXtQ8Z%2B55ix%2BpeR5SvxfTB7VweG%2FM%2B9uQFdUcA2zGCzr4MIrm178dxCAQ6HMO3ZysMGOqUBVLVnANtwbBeSbAcFtS%2FNLtKMNex9LD3tiEN0NO6Mn9kUVqU3TByYzKeg21q6oqN469JVRBXLh6X98IdqR9odbVWJV1nY%2BfdiNB9atYNnpoj7NovHELcqqfiFVJg7MmP2%2Fjr6S3wZkfe74EEXVjuu00nx6uV3OWN6Saov%2FujjQxRDuNHZP22agxt4y0m8FVfbUSErEa0AAtOLfegndETnaDXJU3Rn&X-Amz-Signature=5db0c9e6f7b95ba903ad9e64efa2d1cc5a5d4ee10d6c4dac905fe7c865259c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VFLNIPJ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMlju8o9dp9kr9%2B8bxQXSX%2FaXUMUN27x46Jokpr87DyAIgUhBAK%2BVh9MjQhTQkAMr9h5G8o8gy2oE4XAv67dIKqqIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTdIBUXRD%2F6qk6ZaSrcA5Ns9WYO%2BxbdPaKIYTr6bEBBRyUgk1KMRGvgYPbwRY7CjJS1fw%2BK2Gsx%2BuwOLhYyEBzCgU8MAWTedNlB%2FTHGTEaOBgntCfVbwMFa4YCjNKDYFKqaaen8CXC2lnoF4H1TwsvDkv9CcCw5LTg6JxTN9WW%2ByYcsRx2mpc0DazTR23ils0dNVuOopirubbD05X9rZgIC0thoQeZbcB%2BR%2BDxa14BbeBmT8N%2F9T702ajy4nNuQqQu8BVxoaLKrKBhBKXsNfZ82FAt%2B9GyIwKSrukX%2BOHbv6OVm9qC%2FzcGwsaZXMQzzDsj4qyehOIpyzLxgDFvVBD1WFLfHl5v7%2Bo9gu0Bu8rp7TrpP34vJ%2F97zfAThwCk20nWk%2FB4LmIICvfgFBoUegenCIOtE00zLQ83reszjIouSQFxg6HZjZd4aqMUWmgYsLS8G%2BZyT90Cr1YWqFuI0Uw12bD%2F2CLvzSjo20yF%2BE9z5eOBd79lTdNYjRLn0JYWAgBM0ZYc3yzDo0Pb6kMhteviiXCdFtcTVvw6JSl%2Bwt%2FVvonuU10EYqUBQAO4YcrDcnRKWzuR5NMuuCmP3TSWGIIXtQ8Z%2B55ix%2BpeR5SvxfTB7VweG%2FM%2B9uQFdUcA2zGCzr4MIrm178dxCAQ6HMO3ZysMGOqUBVLVnANtwbBeSbAcFtS%2FNLtKMNex9LD3tiEN0NO6Mn9kUVqU3TByYzKeg21q6oqN469JVRBXLh6X98IdqR9odbVWJV1nY%2BfdiNB9atYNnpoj7NovHELcqqfiFVJg7MmP2%2Fjr6S3wZkfe74EEXVjuu00nx6uV3OWN6Saov%2FujjQxRDuNHZP22agxt4y0m8FVfbUSErEa0AAtOLfegndETnaDXJU3Rn&X-Amz-Signature=c8a3a3f304598fba7ae155d0c53a68f68245260a5a239f29a7bb9e0cd106d502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VFLNIPJ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMlju8o9dp9kr9%2B8bxQXSX%2FaXUMUN27x46Jokpr87DyAIgUhBAK%2BVh9MjQhTQkAMr9h5G8o8gy2oE4XAv67dIKqqIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTdIBUXRD%2F6qk6ZaSrcA5Ns9WYO%2BxbdPaKIYTr6bEBBRyUgk1KMRGvgYPbwRY7CjJS1fw%2BK2Gsx%2BuwOLhYyEBzCgU8MAWTedNlB%2FTHGTEaOBgntCfVbwMFa4YCjNKDYFKqaaen8CXC2lnoF4H1TwsvDkv9CcCw5LTg6JxTN9WW%2ByYcsRx2mpc0DazTR23ils0dNVuOopirubbD05X9rZgIC0thoQeZbcB%2BR%2BDxa14BbeBmT8N%2F9T702ajy4nNuQqQu8BVxoaLKrKBhBKXsNfZ82FAt%2B9GyIwKSrukX%2BOHbv6OVm9qC%2FzcGwsaZXMQzzDsj4qyehOIpyzLxgDFvVBD1WFLfHl5v7%2Bo9gu0Bu8rp7TrpP34vJ%2F97zfAThwCk20nWk%2FB4LmIICvfgFBoUegenCIOtE00zLQ83reszjIouSQFxg6HZjZd4aqMUWmgYsLS8G%2BZyT90Cr1YWqFuI0Uw12bD%2F2CLvzSjo20yF%2BE9z5eOBd79lTdNYjRLn0JYWAgBM0ZYc3yzDo0Pb6kMhteviiXCdFtcTVvw6JSl%2Bwt%2FVvonuU10EYqUBQAO4YcrDcnRKWzuR5NMuuCmP3TSWGIIXtQ8Z%2B55ix%2BpeR5SvxfTB7VweG%2FM%2B9uQFdUcA2zGCzr4MIrm178dxCAQ6HMO3ZysMGOqUBVLVnANtwbBeSbAcFtS%2FNLtKMNex9LD3tiEN0NO6Mn9kUVqU3TByYzKeg21q6oqN469JVRBXLh6X98IdqR9odbVWJV1nY%2BfdiNB9atYNnpoj7NovHELcqqfiFVJg7MmP2%2Fjr6S3wZkfe74EEXVjuu00nx6uV3OWN6Saov%2FujjQxRDuNHZP22agxt4y0m8FVfbUSErEa0AAtOLfegndETnaDXJU3Rn&X-Amz-Signature=994aec0d4d49eb1c87112d42f4f7645e96b07d840ecf53870199bf88ae0b94df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VFLNIPJ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMlju8o9dp9kr9%2B8bxQXSX%2FaXUMUN27x46Jokpr87DyAIgUhBAK%2BVh9MjQhTQkAMr9h5G8o8gy2oE4XAv67dIKqqIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTdIBUXRD%2F6qk6ZaSrcA5Ns9WYO%2BxbdPaKIYTr6bEBBRyUgk1KMRGvgYPbwRY7CjJS1fw%2BK2Gsx%2BuwOLhYyEBzCgU8MAWTedNlB%2FTHGTEaOBgntCfVbwMFa4YCjNKDYFKqaaen8CXC2lnoF4H1TwsvDkv9CcCw5LTg6JxTN9WW%2ByYcsRx2mpc0DazTR23ils0dNVuOopirubbD05X9rZgIC0thoQeZbcB%2BR%2BDxa14BbeBmT8N%2F9T702ajy4nNuQqQu8BVxoaLKrKBhBKXsNfZ82FAt%2B9GyIwKSrukX%2BOHbv6OVm9qC%2FzcGwsaZXMQzzDsj4qyehOIpyzLxgDFvVBD1WFLfHl5v7%2Bo9gu0Bu8rp7TrpP34vJ%2F97zfAThwCk20nWk%2FB4LmIICvfgFBoUegenCIOtE00zLQ83reszjIouSQFxg6HZjZd4aqMUWmgYsLS8G%2BZyT90Cr1YWqFuI0Uw12bD%2F2CLvzSjo20yF%2BE9z5eOBd79lTdNYjRLn0JYWAgBM0ZYc3yzDo0Pb6kMhteviiXCdFtcTVvw6JSl%2Bwt%2FVvonuU10EYqUBQAO4YcrDcnRKWzuR5NMuuCmP3TSWGIIXtQ8Z%2B55ix%2BpeR5SvxfTB7VweG%2FM%2B9uQFdUcA2zGCzr4MIrm178dxCAQ6HMO3ZysMGOqUBVLVnANtwbBeSbAcFtS%2FNLtKMNex9LD3tiEN0NO6Mn9kUVqU3TByYzKeg21q6oqN469JVRBXLh6X98IdqR9odbVWJV1nY%2BfdiNB9atYNnpoj7NovHELcqqfiFVJg7MmP2%2Fjr6S3wZkfe74EEXVjuu00nx6uV3OWN6Saov%2FujjQxRDuNHZP22agxt4y0m8FVfbUSErEa0AAtOLfegndETnaDXJU3Rn&X-Amz-Signature=ebf4562316018b92ea3094fca6ad3d85933058c3c5feaac8b23a04e17c841892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VFLNIPJ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMlju8o9dp9kr9%2B8bxQXSX%2FaXUMUN27x46Jokpr87DyAIgUhBAK%2BVh9MjQhTQkAMr9h5G8o8gy2oE4XAv67dIKqqIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTdIBUXRD%2F6qk6ZaSrcA5Ns9WYO%2BxbdPaKIYTr6bEBBRyUgk1KMRGvgYPbwRY7CjJS1fw%2BK2Gsx%2BuwOLhYyEBzCgU8MAWTedNlB%2FTHGTEaOBgntCfVbwMFa4YCjNKDYFKqaaen8CXC2lnoF4H1TwsvDkv9CcCw5LTg6JxTN9WW%2ByYcsRx2mpc0DazTR23ils0dNVuOopirubbD05X9rZgIC0thoQeZbcB%2BR%2BDxa14BbeBmT8N%2F9T702ajy4nNuQqQu8BVxoaLKrKBhBKXsNfZ82FAt%2B9GyIwKSrukX%2BOHbv6OVm9qC%2FzcGwsaZXMQzzDsj4qyehOIpyzLxgDFvVBD1WFLfHl5v7%2Bo9gu0Bu8rp7TrpP34vJ%2F97zfAThwCk20nWk%2FB4LmIICvfgFBoUegenCIOtE00zLQ83reszjIouSQFxg6HZjZd4aqMUWmgYsLS8G%2BZyT90Cr1YWqFuI0Uw12bD%2F2CLvzSjo20yF%2BE9z5eOBd79lTdNYjRLn0JYWAgBM0ZYc3yzDo0Pb6kMhteviiXCdFtcTVvw6JSl%2Bwt%2FVvonuU10EYqUBQAO4YcrDcnRKWzuR5NMuuCmP3TSWGIIXtQ8Z%2B55ix%2BpeR5SvxfTB7VweG%2FM%2B9uQFdUcA2zGCzr4MIrm178dxCAQ6HMO3ZysMGOqUBVLVnANtwbBeSbAcFtS%2FNLtKMNex9LD3tiEN0NO6Mn9kUVqU3TByYzKeg21q6oqN469JVRBXLh6X98IdqR9odbVWJV1nY%2BfdiNB9atYNnpoj7NovHELcqqfiFVJg7MmP2%2Fjr6S3wZkfe74EEXVjuu00nx6uV3OWN6Saov%2FujjQxRDuNHZP22agxt4y0m8FVfbUSErEa0AAtOLfegndETnaDXJU3Rn&X-Amz-Signature=a230808240a3257359f1cbcb959bf947d444e0b2a328beabc47fb2a120c601ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
