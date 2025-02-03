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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAWELRC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeuwGFPdlVxcS9k1xy7m2r2Gtg1nZv9xrnlio9N0JOhAiB4o0V4rrNfCIiRJ1r0MAry82SLR62CxKXiU2P1SnVBdCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMNVhs9ieO4iHFElfbKtwD4Zi7EsqQr5TuhO5SfZ0kPGbCQcLmHoCnYKjFhDyOR%2Fce2fv2XHDMmw88qpekIkvDUAWGWwzVslLtlub%2FoZFa%2FIgJS1iEkgwQKxYjd69QPOSwWKkbRgOni%2BSAm09OwFoVDsYqgkz66PGp7%2FE6D1rFaylAupg7Ww8XQDgIpv0io5FOVxbMbi6tGuZWnoM0NwoUMsHJXU3eBUThOlC2Xp%2BdfXwGSivO4rBpYRFot5KISjAnTVgAOXZBL35fZyIYqqem9JpRJiHY0pMRggLNKAefdKpXs9sBIXSYzAmGQ3ltMQlB9CJPLq9iC6p988a8ijubGWmEQzFcXYBzsu26gXT2kTpGS4H%2FG0QtpKFshdkvcnG3gwPmvO1gX12GetqHy%2BuClcZyAKNJ42mADy%2FLTY%2BGEtf1HJMo2oJsw2D3W2gtuiOJy2ceUAuFrmAhc3tTAXqN56hkfZfVSlY7wc14tnizhfceJGhnuMkKR215FSgytbw7jqBFZ9TLXdBgwz74YYyIQ1lTBGQi81y3MCeWghoq4OOvOctEd828dgXYzWHKyLFloX2QkdDcBJaBVwWSzJ1k5%2Bf%2Bs1fvDmv3Sx1ieJid5OgKW%2BYkbOZDoLFd7XDqOYIcDDepE1jsLleO4TMwwvWBvQY6pgFTKQ52zAvCmYK2Cd87mhZTt1MJgRSr4%2BtMKLTZd%2F2C30Ly%2BNA0GsvvLO6Aa7RPGP5xMF2IlBXCQ3dbKSZSMnFTQ%2BkHQRT1r2T3rCXgvFHZZ%2Bfi35i64TmNjuRfg0kYAnkCBho0qDOEhrSgRJ%2FKEo2M3edrY5F6uwUzmtGHO3AVPl8SM4weRDb4QBBAT6H0yLOqK00cg%2FaI5B6CQpJSZsq1ESyY95%2FI&X-Amz-Signature=8e64d90d859f5f06fef7c8cead649049f26d4c1466448df0ac3d457efc982b0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAWELRC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeuwGFPdlVxcS9k1xy7m2r2Gtg1nZv9xrnlio9N0JOhAiB4o0V4rrNfCIiRJ1r0MAry82SLR62CxKXiU2P1SnVBdCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMNVhs9ieO4iHFElfbKtwD4Zi7EsqQr5TuhO5SfZ0kPGbCQcLmHoCnYKjFhDyOR%2Fce2fv2XHDMmw88qpekIkvDUAWGWwzVslLtlub%2FoZFa%2FIgJS1iEkgwQKxYjd69QPOSwWKkbRgOni%2BSAm09OwFoVDsYqgkz66PGp7%2FE6D1rFaylAupg7Ww8XQDgIpv0io5FOVxbMbi6tGuZWnoM0NwoUMsHJXU3eBUThOlC2Xp%2BdfXwGSivO4rBpYRFot5KISjAnTVgAOXZBL35fZyIYqqem9JpRJiHY0pMRggLNKAefdKpXs9sBIXSYzAmGQ3ltMQlB9CJPLq9iC6p988a8ijubGWmEQzFcXYBzsu26gXT2kTpGS4H%2FG0QtpKFshdkvcnG3gwPmvO1gX12GetqHy%2BuClcZyAKNJ42mADy%2FLTY%2BGEtf1HJMo2oJsw2D3W2gtuiOJy2ceUAuFrmAhc3tTAXqN56hkfZfVSlY7wc14tnizhfceJGhnuMkKR215FSgytbw7jqBFZ9TLXdBgwz74YYyIQ1lTBGQi81y3MCeWghoq4OOvOctEd828dgXYzWHKyLFloX2QkdDcBJaBVwWSzJ1k5%2Bf%2Bs1fvDmv3Sx1ieJid5OgKW%2BYkbOZDoLFd7XDqOYIcDDepE1jsLleO4TMwwvWBvQY6pgFTKQ52zAvCmYK2Cd87mhZTt1MJgRSr4%2BtMKLTZd%2F2C30Ly%2BNA0GsvvLO6Aa7RPGP5xMF2IlBXCQ3dbKSZSMnFTQ%2BkHQRT1r2T3rCXgvFHZZ%2Bfi35i64TmNjuRfg0kYAnkCBho0qDOEhrSgRJ%2FKEo2M3edrY5F6uwUzmtGHO3AVPl8SM4weRDb4QBBAT6H0yLOqK00cg%2FaI5B6CQpJSZsq1ESyY95%2FI&X-Amz-Signature=1ee8e4496955d7d10dda3e9cb8492021cd2f9ce5d4df92f0d4a58ffa791dbf19&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAWELRC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeuwGFPdlVxcS9k1xy7m2r2Gtg1nZv9xrnlio9N0JOhAiB4o0V4rrNfCIiRJ1r0MAry82SLR62CxKXiU2P1SnVBdCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMNVhs9ieO4iHFElfbKtwD4Zi7EsqQr5TuhO5SfZ0kPGbCQcLmHoCnYKjFhDyOR%2Fce2fv2XHDMmw88qpekIkvDUAWGWwzVslLtlub%2FoZFa%2FIgJS1iEkgwQKxYjd69QPOSwWKkbRgOni%2BSAm09OwFoVDsYqgkz66PGp7%2FE6D1rFaylAupg7Ww8XQDgIpv0io5FOVxbMbi6tGuZWnoM0NwoUMsHJXU3eBUThOlC2Xp%2BdfXwGSivO4rBpYRFot5KISjAnTVgAOXZBL35fZyIYqqem9JpRJiHY0pMRggLNKAefdKpXs9sBIXSYzAmGQ3ltMQlB9CJPLq9iC6p988a8ijubGWmEQzFcXYBzsu26gXT2kTpGS4H%2FG0QtpKFshdkvcnG3gwPmvO1gX12GetqHy%2BuClcZyAKNJ42mADy%2FLTY%2BGEtf1HJMo2oJsw2D3W2gtuiOJy2ceUAuFrmAhc3tTAXqN56hkfZfVSlY7wc14tnizhfceJGhnuMkKR215FSgytbw7jqBFZ9TLXdBgwz74YYyIQ1lTBGQi81y3MCeWghoq4OOvOctEd828dgXYzWHKyLFloX2QkdDcBJaBVwWSzJ1k5%2Bf%2Bs1fvDmv3Sx1ieJid5OgKW%2BYkbOZDoLFd7XDqOYIcDDepE1jsLleO4TMwwvWBvQY6pgFTKQ52zAvCmYK2Cd87mhZTt1MJgRSr4%2BtMKLTZd%2F2C30Ly%2BNA0GsvvLO6Aa7RPGP5xMF2IlBXCQ3dbKSZSMnFTQ%2BkHQRT1r2T3rCXgvFHZZ%2Bfi35i64TmNjuRfg0kYAnkCBho0qDOEhrSgRJ%2FKEo2M3edrY5F6uwUzmtGHO3AVPl8SM4weRDb4QBBAT6H0yLOqK00cg%2FaI5B6CQpJSZsq1ESyY95%2FI&X-Amz-Signature=82207e8ac8728eb609cef95242b207cb0d4724358812049bfa1cc2d43d3d95df&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAWELRC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeuwGFPdlVxcS9k1xy7m2r2Gtg1nZv9xrnlio9N0JOhAiB4o0V4rrNfCIiRJ1r0MAry82SLR62CxKXiU2P1SnVBdCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMNVhs9ieO4iHFElfbKtwD4Zi7EsqQr5TuhO5SfZ0kPGbCQcLmHoCnYKjFhDyOR%2Fce2fv2XHDMmw88qpekIkvDUAWGWwzVslLtlub%2FoZFa%2FIgJS1iEkgwQKxYjd69QPOSwWKkbRgOni%2BSAm09OwFoVDsYqgkz66PGp7%2FE6D1rFaylAupg7Ww8XQDgIpv0io5FOVxbMbi6tGuZWnoM0NwoUMsHJXU3eBUThOlC2Xp%2BdfXwGSivO4rBpYRFot5KISjAnTVgAOXZBL35fZyIYqqem9JpRJiHY0pMRggLNKAefdKpXs9sBIXSYzAmGQ3ltMQlB9CJPLq9iC6p988a8ijubGWmEQzFcXYBzsu26gXT2kTpGS4H%2FG0QtpKFshdkvcnG3gwPmvO1gX12GetqHy%2BuClcZyAKNJ42mADy%2FLTY%2BGEtf1HJMo2oJsw2D3W2gtuiOJy2ceUAuFrmAhc3tTAXqN56hkfZfVSlY7wc14tnizhfceJGhnuMkKR215FSgytbw7jqBFZ9TLXdBgwz74YYyIQ1lTBGQi81y3MCeWghoq4OOvOctEd828dgXYzWHKyLFloX2QkdDcBJaBVwWSzJ1k5%2Bf%2Bs1fvDmv3Sx1ieJid5OgKW%2BYkbOZDoLFd7XDqOYIcDDepE1jsLleO4TMwwvWBvQY6pgFTKQ52zAvCmYK2Cd87mhZTt1MJgRSr4%2BtMKLTZd%2F2C30Ly%2BNA0GsvvLO6Aa7RPGP5xMF2IlBXCQ3dbKSZSMnFTQ%2BkHQRT1r2T3rCXgvFHZZ%2Bfi35i64TmNjuRfg0kYAnkCBho0qDOEhrSgRJ%2FKEo2M3edrY5F6uwUzmtGHO3AVPl8SM4weRDb4QBBAT6H0yLOqK00cg%2FaI5B6CQpJSZsq1ESyY95%2FI&X-Amz-Signature=2b8b99b573a282904091ec002d536f22acc4f760318b4a4f9bd17d68122dae90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAWELRC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeuwGFPdlVxcS9k1xy7m2r2Gtg1nZv9xrnlio9N0JOhAiB4o0V4rrNfCIiRJ1r0MAry82SLR62CxKXiU2P1SnVBdCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMNVhs9ieO4iHFElfbKtwD4Zi7EsqQr5TuhO5SfZ0kPGbCQcLmHoCnYKjFhDyOR%2Fce2fv2XHDMmw88qpekIkvDUAWGWwzVslLtlub%2FoZFa%2FIgJS1iEkgwQKxYjd69QPOSwWKkbRgOni%2BSAm09OwFoVDsYqgkz66PGp7%2FE6D1rFaylAupg7Ww8XQDgIpv0io5FOVxbMbi6tGuZWnoM0NwoUMsHJXU3eBUThOlC2Xp%2BdfXwGSivO4rBpYRFot5KISjAnTVgAOXZBL35fZyIYqqem9JpRJiHY0pMRggLNKAefdKpXs9sBIXSYzAmGQ3ltMQlB9CJPLq9iC6p988a8ijubGWmEQzFcXYBzsu26gXT2kTpGS4H%2FG0QtpKFshdkvcnG3gwPmvO1gX12GetqHy%2BuClcZyAKNJ42mADy%2FLTY%2BGEtf1HJMo2oJsw2D3W2gtuiOJy2ceUAuFrmAhc3tTAXqN56hkfZfVSlY7wc14tnizhfceJGhnuMkKR215FSgytbw7jqBFZ9TLXdBgwz74YYyIQ1lTBGQi81y3MCeWghoq4OOvOctEd828dgXYzWHKyLFloX2QkdDcBJaBVwWSzJ1k5%2Bf%2Bs1fvDmv3Sx1ieJid5OgKW%2BYkbOZDoLFd7XDqOYIcDDepE1jsLleO4TMwwvWBvQY6pgFTKQ52zAvCmYK2Cd87mhZTt1MJgRSr4%2BtMKLTZd%2F2C30Ly%2BNA0GsvvLO6Aa7RPGP5xMF2IlBXCQ3dbKSZSMnFTQ%2BkHQRT1r2T3rCXgvFHZZ%2Bfi35i64TmNjuRfg0kYAnkCBho0qDOEhrSgRJ%2FKEo2M3edrY5F6uwUzmtGHO3AVPl8SM4weRDb4QBBAT6H0yLOqK00cg%2FaI5B6CQpJSZsq1ESyY95%2FI&X-Amz-Signature=d2007b75ed628bc4d957d7bb738cc9ea5119caf78db9f2fb0b7d92ebb55d2b1d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
