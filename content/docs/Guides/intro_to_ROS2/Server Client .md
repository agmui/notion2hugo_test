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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BXVGQN%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRG7ykpz512WX9U2ufsGKmTUjHrkmzNdJc8L8%2BJWhjCQIhAMOlrgjs8vOFxt7yA1HlfNlOdoxLgXVFfJa7lsNredHaKv8DCFgQABoMNjM3NDIzMTgzODA1Igxqnn%2BNUBRWQFXxg0sq3AO1tRHp69Vs4mCFB3a%2FR%2BSEIlFZHjtK%2FPY09h7w%2FuIVY%2BHS1kLRe2UvxP3vRj4NgaMYs3EB5YUjMsCzI1qrycrlK%2FN9XQKCh%2B%2Fy4cyrMxH1E5yuzes4Q%2BH52ZRRxfdxA57eGmdMrF%2BKkQn4yiF90BSDyLLSPtP%2F5p2LmmqnJjk87MynO1nEovd96TGyHNvI9paUTftOJebryhK%2Fz348jRgfDulm1MLAwQi9%2Fc6htdzXh%2BqvSOfVwV%2BUT8ugHosQ4Vq8PplrKSQRJsTqQOPWFWjVWyDdABC0Ix5zS%2FkEvbc9Pb0faERr3GVyMQ23Knf1i0L1CPudE5LbJeXpg4Lk2tItj5NWY8sl12CgDxeWfZoQryHenDLeR3WvD7lkiKYPu5K%2BTiFMQYh2lIqQEoP5RK%2F5YePoPcSl8mlepN1XfJwmRGU%2F1OuyzZiNKLFwEMTDl1LR35jC6QVbnrEo1VVlJ4eE%2BO0gdmIH7Wy2MINVJsExjJ8t91QnMUQ1iFwDMU0IRg2Q89w%2B7W1VnH6jM7IsSqR0iNFhAG5HiFY3qLGh%2F32VePSHCETpiYXhPycovdtsjtkTa%2FADIyfH%2FJzBH7vkyQsDSvm9fe5r2Q8wdTlRjy%2FRRhqrxZuBIAuuM0b%2B%2FjCF682%2FBjqkAaVZQrUDs0Q2HQ7V6jWmRdTLrhSmw0YPc5lEjQVHxNlxLHhR215RwqKx0LOtHDyci%2BLsw2abA92hsuTXShXgpS2EEGGBrpj5ZpUc9rcV3P5hqpSdJl1%2BlJCyZpSLBc0VdA9Ds5lA3Tum4%2BWBA8TGvMVRrPvvqJ%2FYW0mmr3QwCFf3k3Kc7U7zOnWhQa5RhgBz0Q7KSo2HQd4KBLuni2EFadl5v0Zo&X-Amz-Signature=e423e752d97e43f8589cead026da1cd375e90d5db57e09bef52e36cf61b667f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BXVGQN%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRG7ykpz512WX9U2ufsGKmTUjHrkmzNdJc8L8%2BJWhjCQIhAMOlrgjs8vOFxt7yA1HlfNlOdoxLgXVFfJa7lsNredHaKv8DCFgQABoMNjM3NDIzMTgzODA1Igxqnn%2BNUBRWQFXxg0sq3AO1tRHp69Vs4mCFB3a%2FR%2BSEIlFZHjtK%2FPY09h7w%2FuIVY%2BHS1kLRe2UvxP3vRj4NgaMYs3EB5YUjMsCzI1qrycrlK%2FN9XQKCh%2B%2Fy4cyrMxH1E5yuzes4Q%2BH52ZRRxfdxA57eGmdMrF%2BKkQn4yiF90BSDyLLSPtP%2F5p2LmmqnJjk87MynO1nEovd96TGyHNvI9paUTftOJebryhK%2Fz348jRgfDulm1MLAwQi9%2Fc6htdzXh%2BqvSOfVwV%2BUT8ugHosQ4Vq8PplrKSQRJsTqQOPWFWjVWyDdABC0Ix5zS%2FkEvbc9Pb0faERr3GVyMQ23Knf1i0L1CPudE5LbJeXpg4Lk2tItj5NWY8sl12CgDxeWfZoQryHenDLeR3WvD7lkiKYPu5K%2BTiFMQYh2lIqQEoP5RK%2F5YePoPcSl8mlepN1XfJwmRGU%2F1OuyzZiNKLFwEMTDl1LR35jC6QVbnrEo1VVlJ4eE%2BO0gdmIH7Wy2MINVJsExjJ8t91QnMUQ1iFwDMU0IRg2Q89w%2B7W1VnH6jM7IsSqR0iNFhAG5HiFY3qLGh%2F32VePSHCETpiYXhPycovdtsjtkTa%2FADIyfH%2FJzBH7vkyQsDSvm9fe5r2Q8wdTlRjy%2FRRhqrxZuBIAuuM0b%2B%2FjCF682%2FBjqkAaVZQrUDs0Q2HQ7V6jWmRdTLrhSmw0YPc5lEjQVHxNlxLHhR215RwqKx0LOtHDyci%2BLsw2abA92hsuTXShXgpS2EEGGBrpj5ZpUc9rcV3P5hqpSdJl1%2BlJCyZpSLBc0VdA9Ds5lA3Tum4%2BWBA8TGvMVRrPvvqJ%2FYW0mmr3QwCFf3k3Kc7U7zOnWhQa5RhgBz0Q7KSo2HQd4KBLuni2EFadl5v0Zo&X-Amz-Signature=73870f43f151f2a341f8938e062f799953760f30cbe8dbb8d181a2b2a39a1469&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BXVGQN%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRG7ykpz512WX9U2ufsGKmTUjHrkmzNdJc8L8%2BJWhjCQIhAMOlrgjs8vOFxt7yA1HlfNlOdoxLgXVFfJa7lsNredHaKv8DCFgQABoMNjM3NDIzMTgzODA1Igxqnn%2BNUBRWQFXxg0sq3AO1tRHp69Vs4mCFB3a%2FR%2BSEIlFZHjtK%2FPY09h7w%2FuIVY%2BHS1kLRe2UvxP3vRj4NgaMYs3EB5YUjMsCzI1qrycrlK%2FN9XQKCh%2B%2Fy4cyrMxH1E5yuzes4Q%2BH52ZRRxfdxA57eGmdMrF%2BKkQn4yiF90BSDyLLSPtP%2F5p2LmmqnJjk87MynO1nEovd96TGyHNvI9paUTftOJebryhK%2Fz348jRgfDulm1MLAwQi9%2Fc6htdzXh%2BqvSOfVwV%2BUT8ugHosQ4Vq8PplrKSQRJsTqQOPWFWjVWyDdABC0Ix5zS%2FkEvbc9Pb0faERr3GVyMQ23Knf1i0L1CPudE5LbJeXpg4Lk2tItj5NWY8sl12CgDxeWfZoQryHenDLeR3WvD7lkiKYPu5K%2BTiFMQYh2lIqQEoP5RK%2F5YePoPcSl8mlepN1XfJwmRGU%2F1OuyzZiNKLFwEMTDl1LR35jC6QVbnrEo1VVlJ4eE%2BO0gdmIH7Wy2MINVJsExjJ8t91QnMUQ1iFwDMU0IRg2Q89w%2B7W1VnH6jM7IsSqR0iNFhAG5HiFY3qLGh%2F32VePSHCETpiYXhPycovdtsjtkTa%2FADIyfH%2FJzBH7vkyQsDSvm9fe5r2Q8wdTlRjy%2FRRhqrxZuBIAuuM0b%2B%2FjCF682%2FBjqkAaVZQrUDs0Q2HQ7V6jWmRdTLrhSmw0YPc5lEjQVHxNlxLHhR215RwqKx0LOtHDyci%2BLsw2abA92hsuTXShXgpS2EEGGBrpj5ZpUc9rcV3P5hqpSdJl1%2BlJCyZpSLBc0VdA9Ds5lA3Tum4%2BWBA8TGvMVRrPvvqJ%2FYW0mmr3QwCFf3k3Kc7U7zOnWhQa5RhgBz0Q7KSo2HQd4KBLuni2EFadl5v0Zo&X-Amz-Signature=543c39eab81f5c9c2779c8441661cd204c30b53d9d29a3deeb0a7faaa0f84b82&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BXVGQN%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRG7ykpz512WX9U2ufsGKmTUjHrkmzNdJc8L8%2BJWhjCQIhAMOlrgjs8vOFxt7yA1HlfNlOdoxLgXVFfJa7lsNredHaKv8DCFgQABoMNjM3NDIzMTgzODA1Igxqnn%2BNUBRWQFXxg0sq3AO1tRHp69Vs4mCFB3a%2FR%2BSEIlFZHjtK%2FPY09h7w%2FuIVY%2BHS1kLRe2UvxP3vRj4NgaMYs3EB5YUjMsCzI1qrycrlK%2FN9XQKCh%2B%2Fy4cyrMxH1E5yuzes4Q%2BH52ZRRxfdxA57eGmdMrF%2BKkQn4yiF90BSDyLLSPtP%2F5p2LmmqnJjk87MynO1nEovd96TGyHNvI9paUTftOJebryhK%2Fz348jRgfDulm1MLAwQi9%2Fc6htdzXh%2BqvSOfVwV%2BUT8ugHosQ4Vq8PplrKSQRJsTqQOPWFWjVWyDdABC0Ix5zS%2FkEvbc9Pb0faERr3GVyMQ23Knf1i0L1CPudE5LbJeXpg4Lk2tItj5NWY8sl12CgDxeWfZoQryHenDLeR3WvD7lkiKYPu5K%2BTiFMQYh2lIqQEoP5RK%2F5YePoPcSl8mlepN1XfJwmRGU%2F1OuyzZiNKLFwEMTDl1LR35jC6QVbnrEo1VVlJ4eE%2BO0gdmIH7Wy2MINVJsExjJ8t91QnMUQ1iFwDMU0IRg2Q89w%2B7W1VnH6jM7IsSqR0iNFhAG5HiFY3qLGh%2F32VePSHCETpiYXhPycovdtsjtkTa%2FADIyfH%2FJzBH7vkyQsDSvm9fe5r2Q8wdTlRjy%2FRRhqrxZuBIAuuM0b%2B%2FjCF682%2FBjqkAaVZQrUDs0Q2HQ7V6jWmRdTLrhSmw0YPc5lEjQVHxNlxLHhR215RwqKx0LOtHDyci%2BLsw2abA92hsuTXShXgpS2EEGGBrpj5ZpUc9rcV3P5hqpSdJl1%2BlJCyZpSLBc0VdA9Ds5lA3Tum4%2BWBA8TGvMVRrPvvqJ%2FYW0mmr3QwCFf3k3Kc7U7zOnWhQa5RhgBz0Q7KSo2HQd4KBLuni2EFadl5v0Zo&X-Amz-Signature=140c9ef794c09f9cb228be8b8e9192f54e75157426c64c7314edb237d47d0c9f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BXVGQN%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRG7ykpz512WX9U2ufsGKmTUjHrkmzNdJc8L8%2BJWhjCQIhAMOlrgjs8vOFxt7yA1HlfNlOdoxLgXVFfJa7lsNredHaKv8DCFgQABoMNjM3NDIzMTgzODA1Igxqnn%2BNUBRWQFXxg0sq3AO1tRHp69Vs4mCFB3a%2FR%2BSEIlFZHjtK%2FPY09h7w%2FuIVY%2BHS1kLRe2UvxP3vRj4NgaMYs3EB5YUjMsCzI1qrycrlK%2FN9XQKCh%2B%2Fy4cyrMxH1E5yuzes4Q%2BH52ZRRxfdxA57eGmdMrF%2BKkQn4yiF90BSDyLLSPtP%2F5p2LmmqnJjk87MynO1nEovd96TGyHNvI9paUTftOJebryhK%2Fz348jRgfDulm1MLAwQi9%2Fc6htdzXh%2BqvSOfVwV%2BUT8ugHosQ4Vq8PplrKSQRJsTqQOPWFWjVWyDdABC0Ix5zS%2FkEvbc9Pb0faERr3GVyMQ23Knf1i0L1CPudE5LbJeXpg4Lk2tItj5NWY8sl12CgDxeWfZoQryHenDLeR3WvD7lkiKYPu5K%2BTiFMQYh2lIqQEoP5RK%2F5YePoPcSl8mlepN1XfJwmRGU%2F1OuyzZiNKLFwEMTDl1LR35jC6QVbnrEo1VVlJ4eE%2BO0gdmIH7Wy2MINVJsExjJ8t91QnMUQ1iFwDMU0IRg2Q89w%2B7W1VnH6jM7IsSqR0iNFhAG5HiFY3qLGh%2F32VePSHCETpiYXhPycovdtsjtkTa%2FADIyfH%2FJzBH7vkyQsDSvm9fe5r2Q8wdTlRjy%2FRRhqrxZuBIAuuM0b%2B%2FjCF682%2FBjqkAaVZQrUDs0Q2HQ7V6jWmRdTLrhSmw0YPc5lEjQVHxNlxLHhR215RwqKx0LOtHDyci%2BLsw2abA92hsuTXShXgpS2EEGGBrpj5ZpUc9rcV3P5hqpSdJl1%2BlJCyZpSLBc0VdA9Ds5lA3Tum4%2BWBA8TGvMVRrPvvqJ%2FYW0mmr3QwCFf3k3Kc7U7zOnWhQa5RhgBz0Q7KSo2HQd4KBLuni2EFadl5v0Zo&X-Amz-Signature=7cfc78847287706316336693805cd82a47428e56fa84456285d36b95c3c6abc6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
