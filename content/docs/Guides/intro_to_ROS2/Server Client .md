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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634R5ZDH4%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRLX19dJC7POw1TYTLG5sYc2j2xnw%2Fb%2B3pVCCZGcY%2FRQIhALYtCCQW8ZC%2BE7o7Dgs%2BpzB%2BLocAwMOx%2FLG9pmpOv6jxKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw38xrHC7lE%2BxEX8Agq3AOvN3xjDDBke1T9CrSubVLHzVblPY%2Bca1t5HFFVjW0qz3ASeO086X1thl7Zb%2FFw9nChVjqbRaiE8eUpRV%2FjuG5lTWrSg9G31%2FzytqrvTG691KgSpMF8auE2yWE6ECFCZeL21bbowjM%2B7oxca1mosdjD1sKGOoedieqfVhSQeFbLfW0hkTz%2B7USRWNcb8QgzP7xxbxiUaU7Z5RYwPk2vjJNa8ZTjUtFGHWp4Y3LKuv0LPAARIhjys2OM%2F4RuPJyRx%2F9GP0qF8cfv4g8UzgbaoJU%2FvwMuLGrf1fdvFgb%2FiU7vB5JeKu%2FsBkhd3wWi0eHS2YZUuC4vzgQ5AEsSREXhOVcfMy5tHH1QyoG%2BZ2PmxNH4y9%2BzUcvbjpgkxZBYEzEGN4K6hqtbS3M0fgpool%2F9S6YqsAihFyx%2BFMUtBfcQSVyOIyxyGpYvzVQr9M%2BS0F5HxWBDCmd55Sd6ELWwx8RrfLxUhXgAoEnZELBX2%2FJq0a%2BaHUhI0CT1dsPeYzZ10G%2FicZgMTZhiw2b92daPTRmP6sXbDonNpSUoaWfUzI8HFa1j0HOMsxsh2cvrwSWpzUDP8%2FSyljTPeDyDB7bsvL3gumC3TnYneukwD5FnicZ%2FG3731CeD%2FaCD4zw%2BIvPLfTC4%2F7zDBjqkAYCHRE7CkkAXMZn97ptO0u8PJwNetD9%2BoOUOO0toIwAAiAiI8IlUyZA6YEmhAE57By%2BmXanF5ZJWEXGlX1sntXf9u1mjjlmtQkMOGTbL2nZkHV13Y21cyCejL9aUVADTGRjPMFAgIT2NJ%2BtwDLxhNNWJIg4drcCsRBm0hxFxYfpYMeDHrKbYnoK7NxfElfxF0yVUiNrk0umONan2gXM72ViHbUv2&X-Amz-Signature=a89eaec19806f62e9c7f844a5cd445c34363d355cb8363930816eb9aaded61ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634R5ZDH4%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRLX19dJC7POw1TYTLG5sYc2j2xnw%2Fb%2B3pVCCZGcY%2FRQIhALYtCCQW8ZC%2BE7o7Dgs%2BpzB%2BLocAwMOx%2FLG9pmpOv6jxKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw38xrHC7lE%2BxEX8Agq3AOvN3xjDDBke1T9CrSubVLHzVblPY%2Bca1t5HFFVjW0qz3ASeO086X1thl7Zb%2FFw9nChVjqbRaiE8eUpRV%2FjuG5lTWrSg9G31%2FzytqrvTG691KgSpMF8auE2yWE6ECFCZeL21bbowjM%2B7oxca1mosdjD1sKGOoedieqfVhSQeFbLfW0hkTz%2B7USRWNcb8QgzP7xxbxiUaU7Z5RYwPk2vjJNa8ZTjUtFGHWp4Y3LKuv0LPAARIhjys2OM%2F4RuPJyRx%2F9GP0qF8cfv4g8UzgbaoJU%2FvwMuLGrf1fdvFgb%2FiU7vB5JeKu%2FsBkhd3wWi0eHS2YZUuC4vzgQ5AEsSREXhOVcfMy5tHH1QyoG%2BZ2PmxNH4y9%2BzUcvbjpgkxZBYEzEGN4K6hqtbS3M0fgpool%2F9S6YqsAihFyx%2BFMUtBfcQSVyOIyxyGpYvzVQr9M%2BS0F5HxWBDCmd55Sd6ELWwx8RrfLxUhXgAoEnZELBX2%2FJq0a%2BaHUhI0CT1dsPeYzZ10G%2FicZgMTZhiw2b92daPTRmP6sXbDonNpSUoaWfUzI8HFa1j0HOMsxsh2cvrwSWpzUDP8%2FSyljTPeDyDB7bsvL3gumC3TnYneukwD5FnicZ%2FG3731CeD%2FaCD4zw%2BIvPLfTC4%2F7zDBjqkAYCHRE7CkkAXMZn97ptO0u8PJwNetD9%2BoOUOO0toIwAAiAiI8IlUyZA6YEmhAE57By%2BmXanF5ZJWEXGlX1sntXf9u1mjjlmtQkMOGTbL2nZkHV13Y21cyCejL9aUVADTGRjPMFAgIT2NJ%2BtwDLxhNNWJIg4drcCsRBm0hxFxYfpYMeDHrKbYnoK7NxfElfxF0yVUiNrk0umONan2gXM72ViHbUv2&X-Amz-Signature=bbdbf31f9f2c9a7be9eec5ceaccc54fa48fbcae063d32cecd6b59e730bc0d974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634R5ZDH4%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRLX19dJC7POw1TYTLG5sYc2j2xnw%2Fb%2B3pVCCZGcY%2FRQIhALYtCCQW8ZC%2BE7o7Dgs%2BpzB%2BLocAwMOx%2FLG9pmpOv6jxKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw38xrHC7lE%2BxEX8Agq3AOvN3xjDDBke1T9CrSubVLHzVblPY%2Bca1t5HFFVjW0qz3ASeO086X1thl7Zb%2FFw9nChVjqbRaiE8eUpRV%2FjuG5lTWrSg9G31%2FzytqrvTG691KgSpMF8auE2yWE6ECFCZeL21bbowjM%2B7oxca1mosdjD1sKGOoedieqfVhSQeFbLfW0hkTz%2B7USRWNcb8QgzP7xxbxiUaU7Z5RYwPk2vjJNa8ZTjUtFGHWp4Y3LKuv0LPAARIhjys2OM%2F4RuPJyRx%2F9GP0qF8cfv4g8UzgbaoJU%2FvwMuLGrf1fdvFgb%2FiU7vB5JeKu%2FsBkhd3wWi0eHS2YZUuC4vzgQ5AEsSREXhOVcfMy5tHH1QyoG%2BZ2PmxNH4y9%2BzUcvbjpgkxZBYEzEGN4K6hqtbS3M0fgpool%2F9S6YqsAihFyx%2BFMUtBfcQSVyOIyxyGpYvzVQr9M%2BS0F5HxWBDCmd55Sd6ELWwx8RrfLxUhXgAoEnZELBX2%2FJq0a%2BaHUhI0CT1dsPeYzZ10G%2FicZgMTZhiw2b92daPTRmP6sXbDonNpSUoaWfUzI8HFa1j0HOMsxsh2cvrwSWpzUDP8%2FSyljTPeDyDB7bsvL3gumC3TnYneukwD5FnicZ%2FG3731CeD%2FaCD4zw%2BIvPLfTC4%2F7zDBjqkAYCHRE7CkkAXMZn97ptO0u8PJwNetD9%2BoOUOO0toIwAAiAiI8IlUyZA6YEmhAE57By%2BmXanF5ZJWEXGlX1sntXf9u1mjjlmtQkMOGTbL2nZkHV13Y21cyCejL9aUVADTGRjPMFAgIT2NJ%2BtwDLxhNNWJIg4drcCsRBm0hxFxYfpYMeDHrKbYnoK7NxfElfxF0yVUiNrk0umONan2gXM72ViHbUv2&X-Amz-Signature=17f0701cc6d46ae0dd81e4183a91abd70e9da9cb188ed3134f98f13d042ec651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634R5ZDH4%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRLX19dJC7POw1TYTLG5sYc2j2xnw%2Fb%2B3pVCCZGcY%2FRQIhALYtCCQW8ZC%2BE7o7Dgs%2BpzB%2BLocAwMOx%2FLG9pmpOv6jxKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw38xrHC7lE%2BxEX8Agq3AOvN3xjDDBke1T9CrSubVLHzVblPY%2Bca1t5HFFVjW0qz3ASeO086X1thl7Zb%2FFw9nChVjqbRaiE8eUpRV%2FjuG5lTWrSg9G31%2FzytqrvTG691KgSpMF8auE2yWE6ECFCZeL21bbowjM%2B7oxca1mosdjD1sKGOoedieqfVhSQeFbLfW0hkTz%2B7USRWNcb8QgzP7xxbxiUaU7Z5RYwPk2vjJNa8ZTjUtFGHWp4Y3LKuv0LPAARIhjys2OM%2F4RuPJyRx%2F9GP0qF8cfv4g8UzgbaoJU%2FvwMuLGrf1fdvFgb%2FiU7vB5JeKu%2FsBkhd3wWi0eHS2YZUuC4vzgQ5AEsSREXhOVcfMy5tHH1QyoG%2BZ2PmxNH4y9%2BzUcvbjpgkxZBYEzEGN4K6hqtbS3M0fgpool%2F9S6YqsAihFyx%2BFMUtBfcQSVyOIyxyGpYvzVQr9M%2BS0F5HxWBDCmd55Sd6ELWwx8RrfLxUhXgAoEnZELBX2%2FJq0a%2BaHUhI0CT1dsPeYzZ10G%2FicZgMTZhiw2b92daPTRmP6sXbDonNpSUoaWfUzI8HFa1j0HOMsxsh2cvrwSWpzUDP8%2FSyljTPeDyDB7bsvL3gumC3TnYneukwD5FnicZ%2FG3731CeD%2FaCD4zw%2BIvPLfTC4%2F7zDBjqkAYCHRE7CkkAXMZn97ptO0u8PJwNetD9%2BoOUOO0toIwAAiAiI8IlUyZA6YEmhAE57By%2BmXanF5ZJWEXGlX1sntXf9u1mjjlmtQkMOGTbL2nZkHV13Y21cyCejL9aUVADTGRjPMFAgIT2NJ%2BtwDLxhNNWJIg4drcCsRBm0hxFxYfpYMeDHrKbYnoK7NxfElfxF0yVUiNrk0umONan2gXM72ViHbUv2&X-Amz-Signature=84ea6fd4456ba4174270594231f25044f221382d0f7c6c0b6d7ebdf240a0983e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634R5ZDH4%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRLX19dJC7POw1TYTLG5sYc2j2xnw%2Fb%2B3pVCCZGcY%2FRQIhALYtCCQW8ZC%2BE7o7Dgs%2BpzB%2BLocAwMOx%2FLG9pmpOv6jxKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw38xrHC7lE%2BxEX8Agq3AOvN3xjDDBke1T9CrSubVLHzVblPY%2Bca1t5HFFVjW0qz3ASeO086X1thl7Zb%2FFw9nChVjqbRaiE8eUpRV%2FjuG5lTWrSg9G31%2FzytqrvTG691KgSpMF8auE2yWE6ECFCZeL21bbowjM%2B7oxca1mosdjD1sKGOoedieqfVhSQeFbLfW0hkTz%2B7USRWNcb8QgzP7xxbxiUaU7Z5RYwPk2vjJNa8ZTjUtFGHWp4Y3LKuv0LPAARIhjys2OM%2F4RuPJyRx%2F9GP0qF8cfv4g8UzgbaoJU%2FvwMuLGrf1fdvFgb%2FiU7vB5JeKu%2FsBkhd3wWi0eHS2YZUuC4vzgQ5AEsSREXhOVcfMy5tHH1QyoG%2BZ2PmxNH4y9%2BzUcvbjpgkxZBYEzEGN4K6hqtbS3M0fgpool%2F9S6YqsAihFyx%2BFMUtBfcQSVyOIyxyGpYvzVQr9M%2BS0F5HxWBDCmd55Sd6ELWwx8RrfLxUhXgAoEnZELBX2%2FJq0a%2BaHUhI0CT1dsPeYzZ10G%2FicZgMTZhiw2b92daPTRmP6sXbDonNpSUoaWfUzI8HFa1j0HOMsxsh2cvrwSWpzUDP8%2FSyljTPeDyDB7bsvL3gumC3TnYneukwD5FnicZ%2FG3731CeD%2FaCD4zw%2BIvPLfTC4%2F7zDBjqkAYCHRE7CkkAXMZn97ptO0u8PJwNetD9%2BoOUOO0toIwAAiAiI8IlUyZA6YEmhAE57By%2BmXanF5ZJWEXGlX1sntXf9u1mjjlmtQkMOGTbL2nZkHV13Y21cyCejL9aUVADTGRjPMFAgIT2NJ%2BtwDLxhNNWJIg4drcCsRBm0hxFxYfpYMeDHrKbYnoK7NxfElfxF0yVUiNrk0umONan2gXM72ViHbUv2&X-Amz-Signature=84ca65c2e388e27858bee8beebdb76fa3b6bb379d749f7be49a891a243351c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
