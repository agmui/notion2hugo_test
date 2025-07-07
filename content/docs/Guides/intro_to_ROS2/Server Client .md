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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBO57NN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHZ0rhuvuVCA9lrAaxnLw2eb69oND0pISxnqadr505k2AiB76yG9HGBpPXdX1tsBIHpvQnaNn7ZQVfpEtvb8nt%2FqMSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMNbgJWLbK0XD2NBl4KtwDgvRBUroYmLJ%2BOs%2FGSqsGCFAID1QoiksVgzmF32b4Xx2Vg6hcrH6vyZ5ac1RmO56ILv6jCuhUY%2F%2B3iOFBBRSZcdK5fpI7DMEJN8xEjXUd1z88A0LOQKl2re4c74FMsdLngql8mutusDWp1jj49R2gAi8ybit29GrstSlmmB040EWjJ4T6kQi04OFGMRJH9HHmBouSerMUPDLGC0Hk3sv%2BwmKU07aqocUAeEt9SnRdZqIwh31ziZw0n8O0nicS%2BP0Z66ed%2B29lPexSzdzC06UwE44KD5Z69IOFYvvXpoCb%2FMMV175xMhhxr0SMrZZvJo%2FKR2VchIMxsujxEISkNfLLazw33hRZRPLuXBmIPP66kfnudT4R3178WU%2Fx6l8F8hBe7NjGMisZeLOtaUEzy6IdLJ8KJl6UlUgHay2NBjYBOQ7%2Fhae8EadFacoPEVf%2Bz%2BomusjRasUfjFzk4oo5Kk5uNEU274M1rGo5KhFHjS7osYVwJsMEq6ZhjTSLdjmLuUTH1B%2FJ6VbF85SI9b64X%2F5b90w6NlyulVOM6ReRmbkWT6oN1dZ2WWWzcHHK1FdWGCEgdObpsbT8zatjVV984Rmw8B00bSqlt99mAiUO8VZr7DjpEi9GxHumXmrfteMw25CswwY6pgEOSEL8ExqHoZhA9XfUE45sxZ65s0KlQmW0NxsNZs4zp6RRUNXShplm28l7olaQtO3UQiPG7UBq3ank73231bYAq5d6Qugp13US5jzWXzfKgz0%2BiNUKv7wg2Shly5gpNH5T66ZOynln4zbwF6k%2FGiX2M3BfnpIsQ9fSk4XxTG4FrQ60kJ7nGF0emOTpk2DZ9zZvNSkNZ34mmxFKvjcwJswgF9l9j4Up&X-Amz-Signature=9d0ceec9d161d62f1d74794d5b4b873ef6e4519eacc40615ac606f708ba2039c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBO57NN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHZ0rhuvuVCA9lrAaxnLw2eb69oND0pISxnqadr505k2AiB76yG9HGBpPXdX1tsBIHpvQnaNn7ZQVfpEtvb8nt%2FqMSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMNbgJWLbK0XD2NBl4KtwDgvRBUroYmLJ%2BOs%2FGSqsGCFAID1QoiksVgzmF32b4Xx2Vg6hcrH6vyZ5ac1RmO56ILv6jCuhUY%2F%2B3iOFBBRSZcdK5fpI7DMEJN8xEjXUd1z88A0LOQKl2re4c74FMsdLngql8mutusDWp1jj49R2gAi8ybit29GrstSlmmB040EWjJ4T6kQi04OFGMRJH9HHmBouSerMUPDLGC0Hk3sv%2BwmKU07aqocUAeEt9SnRdZqIwh31ziZw0n8O0nicS%2BP0Z66ed%2B29lPexSzdzC06UwE44KD5Z69IOFYvvXpoCb%2FMMV175xMhhxr0SMrZZvJo%2FKR2VchIMxsujxEISkNfLLazw33hRZRPLuXBmIPP66kfnudT4R3178WU%2Fx6l8F8hBe7NjGMisZeLOtaUEzy6IdLJ8KJl6UlUgHay2NBjYBOQ7%2Fhae8EadFacoPEVf%2Bz%2BomusjRasUfjFzk4oo5Kk5uNEU274M1rGo5KhFHjS7osYVwJsMEq6ZhjTSLdjmLuUTH1B%2FJ6VbF85SI9b64X%2F5b90w6NlyulVOM6ReRmbkWT6oN1dZ2WWWzcHHK1FdWGCEgdObpsbT8zatjVV984Rmw8B00bSqlt99mAiUO8VZr7DjpEi9GxHumXmrfteMw25CswwY6pgEOSEL8ExqHoZhA9XfUE45sxZ65s0KlQmW0NxsNZs4zp6RRUNXShplm28l7olaQtO3UQiPG7UBq3ank73231bYAq5d6Qugp13US5jzWXzfKgz0%2BiNUKv7wg2Shly5gpNH5T66ZOynln4zbwF6k%2FGiX2M3BfnpIsQ9fSk4XxTG4FrQ60kJ7nGF0emOTpk2DZ9zZvNSkNZ34mmxFKvjcwJswgF9l9j4Up&X-Amz-Signature=aa3b4df69414b71ce8ec6e78214805853f5332c2b7a006a95c808a17e2d98ab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBO57NN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHZ0rhuvuVCA9lrAaxnLw2eb69oND0pISxnqadr505k2AiB76yG9HGBpPXdX1tsBIHpvQnaNn7ZQVfpEtvb8nt%2FqMSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMNbgJWLbK0XD2NBl4KtwDgvRBUroYmLJ%2BOs%2FGSqsGCFAID1QoiksVgzmF32b4Xx2Vg6hcrH6vyZ5ac1RmO56ILv6jCuhUY%2F%2B3iOFBBRSZcdK5fpI7DMEJN8xEjXUd1z88A0LOQKl2re4c74FMsdLngql8mutusDWp1jj49R2gAi8ybit29GrstSlmmB040EWjJ4T6kQi04OFGMRJH9HHmBouSerMUPDLGC0Hk3sv%2BwmKU07aqocUAeEt9SnRdZqIwh31ziZw0n8O0nicS%2BP0Z66ed%2B29lPexSzdzC06UwE44KD5Z69IOFYvvXpoCb%2FMMV175xMhhxr0SMrZZvJo%2FKR2VchIMxsujxEISkNfLLazw33hRZRPLuXBmIPP66kfnudT4R3178WU%2Fx6l8F8hBe7NjGMisZeLOtaUEzy6IdLJ8KJl6UlUgHay2NBjYBOQ7%2Fhae8EadFacoPEVf%2Bz%2BomusjRasUfjFzk4oo5Kk5uNEU274M1rGo5KhFHjS7osYVwJsMEq6ZhjTSLdjmLuUTH1B%2FJ6VbF85SI9b64X%2F5b90w6NlyulVOM6ReRmbkWT6oN1dZ2WWWzcHHK1FdWGCEgdObpsbT8zatjVV984Rmw8B00bSqlt99mAiUO8VZr7DjpEi9GxHumXmrfteMw25CswwY6pgEOSEL8ExqHoZhA9XfUE45sxZ65s0KlQmW0NxsNZs4zp6RRUNXShplm28l7olaQtO3UQiPG7UBq3ank73231bYAq5d6Qugp13US5jzWXzfKgz0%2BiNUKv7wg2Shly5gpNH5T66ZOynln4zbwF6k%2FGiX2M3BfnpIsQ9fSk4XxTG4FrQ60kJ7nGF0emOTpk2DZ9zZvNSkNZ34mmxFKvjcwJswgF9l9j4Up&X-Amz-Signature=4564e14646c5d83bf2436802bbf5b3975c92ead324404d68ac61cfa92547f689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBO57NN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHZ0rhuvuVCA9lrAaxnLw2eb69oND0pISxnqadr505k2AiB76yG9HGBpPXdX1tsBIHpvQnaNn7ZQVfpEtvb8nt%2FqMSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMNbgJWLbK0XD2NBl4KtwDgvRBUroYmLJ%2BOs%2FGSqsGCFAID1QoiksVgzmF32b4Xx2Vg6hcrH6vyZ5ac1RmO56ILv6jCuhUY%2F%2B3iOFBBRSZcdK5fpI7DMEJN8xEjXUd1z88A0LOQKl2re4c74FMsdLngql8mutusDWp1jj49R2gAi8ybit29GrstSlmmB040EWjJ4T6kQi04OFGMRJH9HHmBouSerMUPDLGC0Hk3sv%2BwmKU07aqocUAeEt9SnRdZqIwh31ziZw0n8O0nicS%2BP0Z66ed%2B29lPexSzdzC06UwE44KD5Z69IOFYvvXpoCb%2FMMV175xMhhxr0SMrZZvJo%2FKR2VchIMxsujxEISkNfLLazw33hRZRPLuXBmIPP66kfnudT4R3178WU%2Fx6l8F8hBe7NjGMisZeLOtaUEzy6IdLJ8KJl6UlUgHay2NBjYBOQ7%2Fhae8EadFacoPEVf%2Bz%2BomusjRasUfjFzk4oo5Kk5uNEU274M1rGo5KhFHjS7osYVwJsMEq6ZhjTSLdjmLuUTH1B%2FJ6VbF85SI9b64X%2F5b90w6NlyulVOM6ReRmbkWT6oN1dZ2WWWzcHHK1FdWGCEgdObpsbT8zatjVV984Rmw8B00bSqlt99mAiUO8VZr7DjpEi9GxHumXmrfteMw25CswwY6pgEOSEL8ExqHoZhA9XfUE45sxZ65s0KlQmW0NxsNZs4zp6RRUNXShplm28l7olaQtO3UQiPG7UBq3ank73231bYAq5d6Qugp13US5jzWXzfKgz0%2BiNUKv7wg2Shly5gpNH5T66ZOynln4zbwF6k%2FGiX2M3BfnpIsQ9fSk4XxTG4FrQ60kJ7nGF0emOTpk2DZ9zZvNSkNZ34mmxFKvjcwJswgF9l9j4Up&X-Amz-Signature=5ca7758d680cb876ca55f6c142381a3556df69e5136e498d41fc2f342977cb2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBO57NN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHZ0rhuvuVCA9lrAaxnLw2eb69oND0pISxnqadr505k2AiB76yG9HGBpPXdX1tsBIHpvQnaNn7ZQVfpEtvb8nt%2FqMSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMNbgJWLbK0XD2NBl4KtwDgvRBUroYmLJ%2BOs%2FGSqsGCFAID1QoiksVgzmF32b4Xx2Vg6hcrH6vyZ5ac1RmO56ILv6jCuhUY%2F%2B3iOFBBRSZcdK5fpI7DMEJN8xEjXUd1z88A0LOQKl2re4c74FMsdLngql8mutusDWp1jj49R2gAi8ybit29GrstSlmmB040EWjJ4T6kQi04OFGMRJH9HHmBouSerMUPDLGC0Hk3sv%2BwmKU07aqocUAeEt9SnRdZqIwh31ziZw0n8O0nicS%2BP0Z66ed%2B29lPexSzdzC06UwE44KD5Z69IOFYvvXpoCb%2FMMV175xMhhxr0SMrZZvJo%2FKR2VchIMxsujxEISkNfLLazw33hRZRPLuXBmIPP66kfnudT4R3178WU%2Fx6l8F8hBe7NjGMisZeLOtaUEzy6IdLJ8KJl6UlUgHay2NBjYBOQ7%2Fhae8EadFacoPEVf%2Bz%2BomusjRasUfjFzk4oo5Kk5uNEU274M1rGo5KhFHjS7osYVwJsMEq6ZhjTSLdjmLuUTH1B%2FJ6VbF85SI9b64X%2F5b90w6NlyulVOM6ReRmbkWT6oN1dZ2WWWzcHHK1FdWGCEgdObpsbT8zatjVV984Rmw8B00bSqlt99mAiUO8VZr7DjpEi9GxHumXmrfteMw25CswwY6pgEOSEL8ExqHoZhA9XfUE45sxZ65s0KlQmW0NxsNZs4zp6RRUNXShplm28l7olaQtO3UQiPG7UBq3ank73231bYAq5d6Qugp13US5jzWXzfKgz0%2BiNUKv7wg2Shly5gpNH5T66ZOynln4zbwF6k%2FGiX2M3BfnpIsQ9fSk4XxTG4FrQ60kJ7nGF0emOTpk2DZ9zZvNSkNZ34mmxFKvjcwJswgF9l9j4Up&X-Amz-Signature=810bfdc283629dbd79f55a71f0c473c03ba888be6b5ce92f08bf1d53a5173e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
