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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666374JQQ4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzkliySOEuGsOBz9sgCr%2Fs0ePN0TJm5AR2JJSUmWxgxAiAzIFhezInR%2BYJP3749dunMSR8t%2BoTa27P8ddC5K6q6iSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B8%2FTUpF3KgHat%2BaYKtwDbumG75KhZWZZHtv1N6gUgBeNZBRWUZgpE3nWpgh%2FD18J6GmJWc87X%2F8mHjfP2T6hTQE%2FR8poyju52s%2Bmsyblt09gAtmJSYJw57si0CjmO6PyJZG3x8t0u%2FsUzc%2Fau6lO0%2FJb%2FK7XNb4QWmGXCGOzdo7O8%2B0Q1YP1q%2BA2FVKWToXZq2jchm%2F7OFB8tAIW6dteZ5kUfyXeFG5xwfH51QeCiNmzV0htm6p1hAf6GHQo3kPVYoeYZhqziALCTlvUQBa0w%2BqOOh8HBHxRhyVX647DRpe6jlsrLKDH4IlzrmNOVQui4%2BAnZ8FeMtHc2A%2FHvl6yDi6uQj8cFVvFXbsQcsRryqtP1mOe74Kr%2FZXYPxPNkU5Tq%2BqC0JBlNGay%2FmuygK4XDf7Il6kXaxdqPxSKKciBaKVeNk%2BQst0NoEWcZBEuG6cfcnX0p034pDW8sABOXCztD8opyxR3DZV4hKgMcqHfE94V6tG40bRE2SG36z41X1%2FADFwQoQtC2ce6D8qSvDMwu93c5UBs5SL9aLolkny0ivx4A6huIEh6MGu6OQb42R64g8o475ZiOpLDn4PP%2FU6b7YF%2Bjwk0dBHv7kLTnOnOD9PjlOoTfeHAdNh5AqdCvHddNdIrEjvp1UeySrMwlpPSvgY6pgGoWbFwD0ZCMsBiL3WP%2Bsv3eiuMVcfmybADgnde1W16yksTAbxFP5jBGtkNmZIldnbh%2FX2puXuiFrWuoqwKqttCN5Owky%2B5rDSxUMFYwNQF0tCMOOSEvVTHEcAEWzU2%2B%2BFbjB2iu%2B1LoDKRj%2BnZjev2CtDBL6Tdb9ggxZb1d597PcnW6ULidBIi9gnxi6R6K%2BXO45ZBfUJW0KsIeQBlcBXo2mp5AM6u&X-Amz-Signature=80621b2db95ee6d9424771c6be5c0a40d6178ad4883b5c6946df9cdf1c2cd993&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666374JQQ4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzkliySOEuGsOBz9sgCr%2Fs0ePN0TJm5AR2JJSUmWxgxAiAzIFhezInR%2BYJP3749dunMSR8t%2BoTa27P8ddC5K6q6iSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B8%2FTUpF3KgHat%2BaYKtwDbumG75KhZWZZHtv1N6gUgBeNZBRWUZgpE3nWpgh%2FD18J6GmJWc87X%2F8mHjfP2T6hTQE%2FR8poyju52s%2Bmsyblt09gAtmJSYJw57si0CjmO6PyJZG3x8t0u%2FsUzc%2Fau6lO0%2FJb%2FK7XNb4QWmGXCGOzdo7O8%2B0Q1YP1q%2BA2FVKWToXZq2jchm%2F7OFB8tAIW6dteZ5kUfyXeFG5xwfH51QeCiNmzV0htm6p1hAf6GHQo3kPVYoeYZhqziALCTlvUQBa0w%2BqOOh8HBHxRhyVX647DRpe6jlsrLKDH4IlzrmNOVQui4%2BAnZ8FeMtHc2A%2FHvl6yDi6uQj8cFVvFXbsQcsRryqtP1mOe74Kr%2FZXYPxPNkU5Tq%2BqC0JBlNGay%2FmuygK4XDf7Il6kXaxdqPxSKKciBaKVeNk%2BQst0NoEWcZBEuG6cfcnX0p034pDW8sABOXCztD8opyxR3DZV4hKgMcqHfE94V6tG40bRE2SG36z41X1%2FADFwQoQtC2ce6D8qSvDMwu93c5UBs5SL9aLolkny0ivx4A6huIEh6MGu6OQb42R64g8o475ZiOpLDn4PP%2FU6b7YF%2Bjwk0dBHv7kLTnOnOD9PjlOoTfeHAdNh5AqdCvHddNdIrEjvp1UeySrMwlpPSvgY6pgGoWbFwD0ZCMsBiL3WP%2Bsv3eiuMVcfmybADgnde1W16yksTAbxFP5jBGtkNmZIldnbh%2FX2puXuiFrWuoqwKqttCN5Owky%2B5rDSxUMFYwNQF0tCMOOSEvVTHEcAEWzU2%2B%2BFbjB2iu%2B1LoDKRj%2BnZjev2CtDBL6Tdb9ggxZb1d597PcnW6ULidBIi9gnxi6R6K%2BXO45ZBfUJW0KsIeQBlcBXo2mp5AM6u&X-Amz-Signature=efc303db14db625d09ee149341554bbdaa30e8934997d73a10b34cf734a6bd57&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666374JQQ4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzkliySOEuGsOBz9sgCr%2Fs0ePN0TJm5AR2JJSUmWxgxAiAzIFhezInR%2BYJP3749dunMSR8t%2BoTa27P8ddC5K6q6iSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B8%2FTUpF3KgHat%2BaYKtwDbumG75KhZWZZHtv1N6gUgBeNZBRWUZgpE3nWpgh%2FD18J6GmJWc87X%2F8mHjfP2T6hTQE%2FR8poyju52s%2Bmsyblt09gAtmJSYJw57si0CjmO6PyJZG3x8t0u%2FsUzc%2Fau6lO0%2FJb%2FK7XNb4QWmGXCGOzdo7O8%2B0Q1YP1q%2BA2FVKWToXZq2jchm%2F7OFB8tAIW6dteZ5kUfyXeFG5xwfH51QeCiNmzV0htm6p1hAf6GHQo3kPVYoeYZhqziALCTlvUQBa0w%2BqOOh8HBHxRhyVX647DRpe6jlsrLKDH4IlzrmNOVQui4%2BAnZ8FeMtHc2A%2FHvl6yDi6uQj8cFVvFXbsQcsRryqtP1mOe74Kr%2FZXYPxPNkU5Tq%2BqC0JBlNGay%2FmuygK4XDf7Il6kXaxdqPxSKKciBaKVeNk%2BQst0NoEWcZBEuG6cfcnX0p034pDW8sABOXCztD8opyxR3DZV4hKgMcqHfE94V6tG40bRE2SG36z41X1%2FADFwQoQtC2ce6D8qSvDMwu93c5UBs5SL9aLolkny0ivx4A6huIEh6MGu6OQb42R64g8o475ZiOpLDn4PP%2FU6b7YF%2Bjwk0dBHv7kLTnOnOD9PjlOoTfeHAdNh5AqdCvHddNdIrEjvp1UeySrMwlpPSvgY6pgGoWbFwD0ZCMsBiL3WP%2Bsv3eiuMVcfmybADgnde1W16yksTAbxFP5jBGtkNmZIldnbh%2FX2puXuiFrWuoqwKqttCN5Owky%2B5rDSxUMFYwNQF0tCMOOSEvVTHEcAEWzU2%2B%2BFbjB2iu%2B1LoDKRj%2BnZjev2CtDBL6Tdb9ggxZb1d597PcnW6ULidBIi9gnxi6R6K%2BXO45ZBfUJW0KsIeQBlcBXo2mp5AM6u&X-Amz-Signature=6527a3a70c40e72f062f5d93c1ffe13ddc4d9b908fe77081c5a1acfba74fcb09&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666374JQQ4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzkliySOEuGsOBz9sgCr%2Fs0ePN0TJm5AR2JJSUmWxgxAiAzIFhezInR%2BYJP3749dunMSR8t%2BoTa27P8ddC5K6q6iSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B8%2FTUpF3KgHat%2BaYKtwDbumG75KhZWZZHtv1N6gUgBeNZBRWUZgpE3nWpgh%2FD18J6GmJWc87X%2F8mHjfP2T6hTQE%2FR8poyju52s%2Bmsyblt09gAtmJSYJw57si0CjmO6PyJZG3x8t0u%2FsUzc%2Fau6lO0%2FJb%2FK7XNb4QWmGXCGOzdo7O8%2B0Q1YP1q%2BA2FVKWToXZq2jchm%2F7OFB8tAIW6dteZ5kUfyXeFG5xwfH51QeCiNmzV0htm6p1hAf6GHQo3kPVYoeYZhqziALCTlvUQBa0w%2BqOOh8HBHxRhyVX647DRpe6jlsrLKDH4IlzrmNOVQui4%2BAnZ8FeMtHc2A%2FHvl6yDi6uQj8cFVvFXbsQcsRryqtP1mOe74Kr%2FZXYPxPNkU5Tq%2BqC0JBlNGay%2FmuygK4XDf7Il6kXaxdqPxSKKciBaKVeNk%2BQst0NoEWcZBEuG6cfcnX0p034pDW8sABOXCztD8opyxR3DZV4hKgMcqHfE94V6tG40bRE2SG36z41X1%2FADFwQoQtC2ce6D8qSvDMwu93c5UBs5SL9aLolkny0ivx4A6huIEh6MGu6OQb42R64g8o475ZiOpLDn4PP%2FU6b7YF%2Bjwk0dBHv7kLTnOnOD9PjlOoTfeHAdNh5AqdCvHddNdIrEjvp1UeySrMwlpPSvgY6pgGoWbFwD0ZCMsBiL3WP%2Bsv3eiuMVcfmybADgnde1W16yksTAbxFP5jBGtkNmZIldnbh%2FX2puXuiFrWuoqwKqttCN5Owky%2B5rDSxUMFYwNQF0tCMOOSEvVTHEcAEWzU2%2B%2BFbjB2iu%2B1LoDKRj%2BnZjev2CtDBL6Tdb9ggxZb1d597PcnW6ULidBIi9gnxi6R6K%2BXO45ZBfUJW0KsIeQBlcBXo2mp5AM6u&X-Amz-Signature=d92154a7f7d85229cf60de9b5f3085821ec3bd71fda87a5b3fe00b7ee40b66de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666374JQQ4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzkliySOEuGsOBz9sgCr%2Fs0ePN0TJm5AR2JJSUmWxgxAiAzIFhezInR%2BYJP3749dunMSR8t%2BoTa27P8ddC5K6q6iSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B8%2FTUpF3KgHat%2BaYKtwDbumG75KhZWZZHtv1N6gUgBeNZBRWUZgpE3nWpgh%2FD18J6GmJWc87X%2F8mHjfP2T6hTQE%2FR8poyju52s%2Bmsyblt09gAtmJSYJw57si0CjmO6PyJZG3x8t0u%2FsUzc%2Fau6lO0%2FJb%2FK7XNb4QWmGXCGOzdo7O8%2B0Q1YP1q%2BA2FVKWToXZq2jchm%2F7OFB8tAIW6dteZ5kUfyXeFG5xwfH51QeCiNmzV0htm6p1hAf6GHQo3kPVYoeYZhqziALCTlvUQBa0w%2BqOOh8HBHxRhyVX647DRpe6jlsrLKDH4IlzrmNOVQui4%2BAnZ8FeMtHc2A%2FHvl6yDi6uQj8cFVvFXbsQcsRryqtP1mOe74Kr%2FZXYPxPNkU5Tq%2BqC0JBlNGay%2FmuygK4XDf7Il6kXaxdqPxSKKciBaKVeNk%2BQst0NoEWcZBEuG6cfcnX0p034pDW8sABOXCztD8opyxR3DZV4hKgMcqHfE94V6tG40bRE2SG36z41X1%2FADFwQoQtC2ce6D8qSvDMwu93c5UBs5SL9aLolkny0ivx4A6huIEh6MGu6OQb42R64g8o475ZiOpLDn4PP%2FU6b7YF%2Bjwk0dBHv7kLTnOnOD9PjlOoTfeHAdNh5AqdCvHddNdIrEjvp1UeySrMwlpPSvgY6pgGoWbFwD0ZCMsBiL3WP%2Bsv3eiuMVcfmybADgnde1W16yksTAbxFP5jBGtkNmZIldnbh%2FX2puXuiFrWuoqwKqttCN5Owky%2B5rDSxUMFYwNQF0tCMOOSEvVTHEcAEWzU2%2B%2BFbjB2iu%2B1LoDKRj%2BnZjev2CtDBL6Tdb9ggxZb1d597PcnW6ULidBIi9gnxi6R6K%2BXO45ZBfUJW0KsIeQBlcBXo2mp5AM6u&X-Amz-Signature=e22baf2b069db7388bdf82eeff214ea2e32e1e9874cbc775523c447441f29830&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
