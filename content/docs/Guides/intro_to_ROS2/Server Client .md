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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TJEL7MU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5WTA8eSBBo0oJIXFRUd0D7xMAREFc4XYyNmCREI2QBAiARnjWkaZHYNSIFPX3suIzpupW5s4aRjKN0v3FMaL4rzir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM7jQH67RipdQelj89KtwDR%2B8FGsCciCJDUXNiqEgzRdTT2HThRC9HWsfHBO6TvaLGEVSQCeVWRuT6r2t6nrt3sml4oXsHTsURWbjlLbKvOgm0K4jH8O4eAgEHfzJdoO3txzNQ42bxQh%2BJ11fwLrhnwrh%2BplK92GCjurh4ONUQl1i2RCkh7dr8%2B6RcVStC2rhgLFYeLRlxvlzc5rZ6feuuKQclca78AvlnqhAIN6YAl2GeVmbAL8n6Hvqj0sBGfnCTP5x5e5Lx0hEmR0Ra531YvsN3A5q8luxL%2FZmMyolMqzwR94vJ8eGaD7T6mYkg%2BfOJoe2wUwSLhCgdEhvakrfEMMCKD4lWjx4JTSQjUqmRCTrUruUAKzDrBm9GEITBVckX%2FzG88Yf%2FQojz1ANCQ%2F6a5SkeDt%2BES6tpTietkin5Vnko%2FLbPAhPqlFqPxlXfug00W3%2B7c5gUCMoLaQhFT%2FjECu8E%2BlmjCChe2RxMWX9XR9nARmXhPyMyvHhw5L3B0PNXKbz4tf44I5FMp9IFRlnHrq%2B%2ByGN5INrDFj7nlmJ9LZuYyu8BxqT%2B1xqkw3e2roBhpMNUp9zIlpxEeS84RliQGxAlSnoZOMm6lqX0qgmd%2BchZmQWPhRZl2ahcRPzcA0hmrmy5Rfv9QhSaGiMw14abwQY6pgFPRu5zIHZNDd0VBvao6BsinDwCW6CHB7MkHJopdp%2FXZFOd83n%2F2jvoeDM%2F78xEM%2FRjqlfs3lTyLX7%2FyijAV8vtSj6H7MmSSIvjgx0hm43ZTfsmexIRqBvijlVOl9b2Km5ZsSvCtqMdKC%2BDuiqx6bald%2Bd86QD8Y6yaXQnX5m%2BuA33C7SQQrHZqZhc0%2FXuTjTVKebeUbuWpvmC2AGR66ox7ppC4C6Kw&X-Amz-Signature=120df3813c6df2d968830089738be998086f686577bc3e79df6040ba5ac947ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TJEL7MU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5WTA8eSBBo0oJIXFRUd0D7xMAREFc4XYyNmCREI2QBAiARnjWkaZHYNSIFPX3suIzpupW5s4aRjKN0v3FMaL4rzir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM7jQH67RipdQelj89KtwDR%2B8FGsCciCJDUXNiqEgzRdTT2HThRC9HWsfHBO6TvaLGEVSQCeVWRuT6r2t6nrt3sml4oXsHTsURWbjlLbKvOgm0K4jH8O4eAgEHfzJdoO3txzNQ42bxQh%2BJ11fwLrhnwrh%2BplK92GCjurh4ONUQl1i2RCkh7dr8%2B6RcVStC2rhgLFYeLRlxvlzc5rZ6feuuKQclca78AvlnqhAIN6YAl2GeVmbAL8n6Hvqj0sBGfnCTP5x5e5Lx0hEmR0Ra531YvsN3A5q8luxL%2FZmMyolMqzwR94vJ8eGaD7T6mYkg%2BfOJoe2wUwSLhCgdEhvakrfEMMCKD4lWjx4JTSQjUqmRCTrUruUAKzDrBm9GEITBVckX%2FzG88Yf%2FQojz1ANCQ%2F6a5SkeDt%2BES6tpTietkin5Vnko%2FLbPAhPqlFqPxlXfug00W3%2B7c5gUCMoLaQhFT%2FjECu8E%2BlmjCChe2RxMWX9XR9nARmXhPyMyvHhw5L3B0PNXKbz4tf44I5FMp9IFRlnHrq%2B%2ByGN5INrDFj7nlmJ9LZuYyu8BxqT%2B1xqkw3e2roBhpMNUp9zIlpxEeS84RliQGxAlSnoZOMm6lqX0qgmd%2BchZmQWPhRZl2ahcRPzcA0hmrmy5Rfv9QhSaGiMw14abwQY6pgFPRu5zIHZNDd0VBvao6BsinDwCW6CHB7MkHJopdp%2FXZFOd83n%2F2jvoeDM%2F78xEM%2FRjqlfs3lTyLX7%2FyijAV8vtSj6H7MmSSIvjgx0hm43ZTfsmexIRqBvijlVOl9b2Km5ZsSvCtqMdKC%2BDuiqx6bald%2Bd86QD8Y6yaXQnX5m%2BuA33C7SQQrHZqZhc0%2FXuTjTVKebeUbuWpvmC2AGR66ox7ppC4C6Kw&X-Amz-Signature=6373ac65523b3be5a1768c426d314faed2c95e0e6fe8b3f2e477a41b438cb2f6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TJEL7MU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5WTA8eSBBo0oJIXFRUd0D7xMAREFc4XYyNmCREI2QBAiARnjWkaZHYNSIFPX3suIzpupW5s4aRjKN0v3FMaL4rzir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM7jQH67RipdQelj89KtwDR%2B8FGsCciCJDUXNiqEgzRdTT2HThRC9HWsfHBO6TvaLGEVSQCeVWRuT6r2t6nrt3sml4oXsHTsURWbjlLbKvOgm0K4jH8O4eAgEHfzJdoO3txzNQ42bxQh%2BJ11fwLrhnwrh%2BplK92GCjurh4ONUQl1i2RCkh7dr8%2B6RcVStC2rhgLFYeLRlxvlzc5rZ6feuuKQclca78AvlnqhAIN6YAl2GeVmbAL8n6Hvqj0sBGfnCTP5x5e5Lx0hEmR0Ra531YvsN3A5q8luxL%2FZmMyolMqzwR94vJ8eGaD7T6mYkg%2BfOJoe2wUwSLhCgdEhvakrfEMMCKD4lWjx4JTSQjUqmRCTrUruUAKzDrBm9GEITBVckX%2FzG88Yf%2FQojz1ANCQ%2F6a5SkeDt%2BES6tpTietkin5Vnko%2FLbPAhPqlFqPxlXfug00W3%2B7c5gUCMoLaQhFT%2FjECu8E%2BlmjCChe2RxMWX9XR9nARmXhPyMyvHhw5L3B0PNXKbz4tf44I5FMp9IFRlnHrq%2B%2ByGN5INrDFj7nlmJ9LZuYyu8BxqT%2B1xqkw3e2roBhpMNUp9zIlpxEeS84RliQGxAlSnoZOMm6lqX0qgmd%2BchZmQWPhRZl2ahcRPzcA0hmrmy5Rfv9QhSaGiMw14abwQY6pgFPRu5zIHZNDd0VBvao6BsinDwCW6CHB7MkHJopdp%2FXZFOd83n%2F2jvoeDM%2F78xEM%2FRjqlfs3lTyLX7%2FyijAV8vtSj6H7MmSSIvjgx0hm43ZTfsmexIRqBvijlVOl9b2Km5ZsSvCtqMdKC%2BDuiqx6bald%2Bd86QD8Y6yaXQnX5m%2BuA33C7SQQrHZqZhc0%2FXuTjTVKebeUbuWpvmC2AGR66ox7ppC4C6Kw&X-Amz-Signature=191f557d04705d53a972dc174ae07c1bb3743d775ce868ebb42a6b9342ab8977&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TJEL7MU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5WTA8eSBBo0oJIXFRUd0D7xMAREFc4XYyNmCREI2QBAiARnjWkaZHYNSIFPX3suIzpupW5s4aRjKN0v3FMaL4rzir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM7jQH67RipdQelj89KtwDR%2B8FGsCciCJDUXNiqEgzRdTT2HThRC9HWsfHBO6TvaLGEVSQCeVWRuT6r2t6nrt3sml4oXsHTsURWbjlLbKvOgm0K4jH8O4eAgEHfzJdoO3txzNQ42bxQh%2BJ11fwLrhnwrh%2BplK92GCjurh4ONUQl1i2RCkh7dr8%2B6RcVStC2rhgLFYeLRlxvlzc5rZ6feuuKQclca78AvlnqhAIN6YAl2GeVmbAL8n6Hvqj0sBGfnCTP5x5e5Lx0hEmR0Ra531YvsN3A5q8luxL%2FZmMyolMqzwR94vJ8eGaD7T6mYkg%2BfOJoe2wUwSLhCgdEhvakrfEMMCKD4lWjx4JTSQjUqmRCTrUruUAKzDrBm9GEITBVckX%2FzG88Yf%2FQojz1ANCQ%2F6a5SkeDt%2BES6tpTietkin5Vnko%2FLbPAhPqlFqPxlXfug00W3%2B7c5gUCMoLaQhFT%2FjECu8E%2BlmjCChe2RxMWX9XR9nARmXhPyMyvHhw5L3B0PNXKbz4tf44I5FMp9IFRlnHrq%2B%2ByGN5INrDFj7nlmJ9LZuYyu8BxqT%2B1xqkw3e2roBhpMNUp9zIlpxEeS84RliQGxAlSnoZOMm6lqX0qgmd%2BchZmQWPhRZl2ahcRPzcA0hmrmy5Rfv9QhSaGiMw14abwQY6pgFPRu5zIHZNDd0VBvao6BsinDwCW6CHB7MkHJopdp%2FXZFOd83n%2F2jvoeDM%2F78xEM%2FRjqlfs3lTyLX7%2FyijAV8vtSj6H7MmSSIvjgx0hm43ZTfsmexIRqBvijlVOl9b2Km5ZsSvCtqMdKC%2BDuiqx6bald%2Bd86QD8Y6yaXQnX5m%2BuA33C7SQQrHZqZhc0%2FXuTjTVKebeUbuWpvmC2AGR66ox7ppC4C6Kw&X-Amz-Signature=b568067bdccb1c41ee2990af1c9370a575ca012b272948a4228398845103c0b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TJEL7MU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5WTA8eSBBo0oJIXFRUd0D7xMAREFc4XYyNmCREI2QBAiARnjWkaZHYNSIFPX3suIzpupW5s4aRjKN0v3FMaL4rzir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM7jQH67RipdQelj89KtwDR%2B8FGsCciCJDUXNiqEgzRdTT2HThRC9HWsfHBO6TvaLGEVSQCeVWRuT6r2t6nrt3sml4oXsHTsURWbjlLbKvOgm0K4jH8O4eAgEHfzJdoO3txzNQ42bxQh%2BJ11fwLrhnwrh%2BplK92GCjurh4ONUQl1i2RCkh7dr8%2B6RcVStC2rhgLFYeLRlxvlzc5rZ6feuuKQclca78AvlnqhAIN6YAl2GeVmbAL8n6Hvqj0sBGfnCTP5x5e5Lx0hEmR0Ra531YvsN3A5q8luxL%2FZmMyolMqzwR94vJ8eGaD7T6mYkg%2BfOJoe2wUwSLhCgdEhvakrfEMMCKD4lWjx4JTSQjUqmRCTrUruUAKzDrBm9GEITBVckX%2FzG88Yf%2FQojz1ANCQ%2F6a5SkeDt%2BES6tpTietkin5Vnko%2FLbPAhPqlFqPxlXfug00W3%2B7c5gUCMoLaQhFT%2FjECu8E%2BlmjCChe2RxMWX9XR9nARmXhPyMyvHhw5L3B0PNXKbz4tf44I5FMp9IFRlnHrq%2B%2ByGN5INrDFj7nlmJ9LZuYyu8BxqT%2B1xqkw3e2roBhpMNUp9zIlpxEeS84RliQGxAlSnoZOMm6lqX0qgmd%2BchZmQWPhRZl2ahcRPzcA0hmrmy5Rfv9QhSaGiMw14abwQY6pgFPRu5zIHZNDd0VBvao6BsinDwCW6CHB7MkHJopdp%2FXZFOd83n%2F2jvoeDM%2F78xEM%2FRjqlfs3lTyLX7%2FyijAV8vtSj6H7MmSSIvjgx0hm43ZTfsmexIRqBvijlVOl9b2Km5ZsSvCtqMdKC%2BDuiqx6bald%2Bd86QD8Y6yaXQnX5m%2BuA33C7SQQrHZqZhc0%2FXuTjTVKebeUbuWpvmC2AGR66ox7ppC4C6Kw&X-Amz-Signature=603b211a07a295cc15b1b030d7cc9c55b8a00ae406d5429659e28424870e3764&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
