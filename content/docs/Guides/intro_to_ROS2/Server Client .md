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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO2TR6L2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIGyodnYV71EJWiQ1rl4HKDOSM9zAOHyjHnbSf9PL%2Bf6OAiAfZ91kANHUYvHH8HmR0b1REo7KFseY3MktoBC%2FZQSfkir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7c4zvN%2BUWGhrSaL%2FKtwDkDWRV6mqqnDgCeiYxugNbRfKDYKoQq1Hfyqsc0tpT453M56End5xVMOfmKxvJJZkK6PODnn6yY8%2F4lthF%2B5HnktzTfvL3KPr5Tq%2BTh%2B8nPJOvDtqlwn4ThQrYRMnl3zvWR%2FGeIev5FC4qeBMmhttHIm7v2wgahzFho7KCPhMr7t4voV8J%2FnWXaO2YPoV00J4RRO1l5hxwd7AKrtEBvJO4rj9Vtdb%2Bx5%2F35XyJrnR5a5n6%2FO0EAnGpV8%2FkW9DZCyKge87wpnmw2CuzRFbMjqZe44yLg3hW9OJj4ZrgaQLNbBLgZMgA%2FzqZbdOV78bfChplaUAVNZHaLGZfPG3%2Bon7CYsr5wXAiq5N0V%2Bh%2BqffKdhiHFl3D7XVIXP3sEcV9Jgte87T%2Bog1%2BhyYgmF6i6uk6w2hRMdjbd98He7o9aWkE6W6SEos3j3hxETet1Ia7m3EA5Lk39Axp425kt23NQYp2msEuYhqtg6N2BqKCyArHxSC0kXfHOvhC1GLRM2v0%2BowlytRDdAxCRIcZkQwKjpuwbqBKBCT1gjNNfbDq97YbG792z8mgmaVBjPjwfhXmb29s7NKSsRsXl2%2F7B5%2FwqVW%2BuBOCl8Vig%2FILoIAgG%2FCJqr7h9uAaAC9MaxRMJQwlqOlwwY6pgHG%2BPXpGXjmj2ydTtFkWGDTExV0dQU8Bl4wj0esBJ3AwTgkSgk3l1hKVz7HoKnqTGaqX6b1lghrK6L0Q3TgViIwQ0a5OkK%2FkJASQmsfl3PLwod40AN8WoHV1noUoZ8BgegowiCndPyCxTsIY4AON3STA%2FCW9GqWXxSdjU52rWfpjGFR6d9gQodhmM%2FpliE6FyeeclknSe%2BxyfYkOFeVCW%2FZIU6ymCzh&X-Amz-Signature=922d2401d7c6edc1250e94360e950d6411e4c68c40850b384d8b0d5d2f08ca16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO2TR6L2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIGyodnYV71EJWiQ1rl4HKDOSM9zAOHyjHnbSf9PL%2Bf6OAiAfZ91kANHUYvHH8HmR0b1REo7KFseY3MktoBC%2FZQSfkir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7c4zvN%2BUWGhrSaL%2FKtwDkDWRV6mqqnDgCeiYxugNbRfKDYKoQq1Hfyqsc0tpT453M56End5xVMOfmKxvJJZkK6PODnn6yY8%2F4lthF%2B5HnktzTfvL3KPr5Tq%2BTh%2B8nPJOvDtqlwn4ThQrYRMnl3zvWR%2FGeIev5FC4qeBMmhttHIm7v2wgahzFho7KCPhMr7t4voV8J%2FnWXaO2YPoV00J4RRO1l5hxwd7AKrtEBvJO4rj9Vtdb%2Bx5%2F35XyJrnR5a5n6%2FO0EAnGpV8%2FkW9DZCyKge87wpnmw2CuzRFbMjqZe44yLg3hW9OJj4ZrgaQLNbBLgZMgA%2FzqZbdOV78bfChplaUAVNZHaLGZfPG3%2Bon7CYsr5wXAiq5N0V%2Bh%2BqffKdhiHFl3D7XVIXP3sEcV9Jgte87T%2Bog1%2BhyYgmF6i6uk6w2hRMdjbd98He7o9aWkE6W6SEos3j3hxETet1Ia7m3EA5Lk39Axp425kt23NQYp2msEuYhqtg6N2BqKCyArHxSC0kXfHOvhC1GLRM2v0%2BowlytRDdAxCRIcZkQwKjpuwbqBKBCT1gjNNfbDq97YbG792z8mgmaVBjPjwfhXmb29s7NKSsRsXl2%2F7B5%2FwqVW%2BuBOCl8Vig%2FILoIAgG%2FCJqr7h9uAaAC9MaxRMJQwlqOlwwY6pgHG%2BPXpGXjmj2ydTtFkWGDTExV0dQU8Bl4wj0esBJ3AwTgkSgk3l1hKVz7HoKnqTGaqX6b1lghrK6L0Q3TgViIwQ0a5OkK%2FkJASQmsfl3PLwod40AN8WoHV1noUoZ8BgegowiCndPyCxTsIY4AON3STA%2FCW9GqWXxSdjU52rWfpjGFR6d9gQodhmM%2FpliE6FyeeclknSe%2BxyfYkOFeVCW%2FZIU6ymCzh&X-Amz-Signature=c47d050e5144783a7eb923ee55951096bce63b9d7466d3b9058713d5a7b08c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO2TR6L2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIGyodnYV71EJWiQ1rl4HKDOSM9zAOHyjHnbSf9PL%2Bf6OAiAfZ91kANHUYvHH8HmR0b1REo7KFseY3MktoBC%2FZQSfkir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7c4zvN%2BUWGhrSaL%2FKtwDkDWRV6mqqnDgCeiYxugNbRfKDYKoQq1Hfyqsc0tpT453M56End5xVMOfmKxvJJZkK6PODnn6yY8%2F4lthF%2B5HnktzTfvL3KPr5Tq%2BTh%2B8nPJOvDtqlwn4ThQrYRMnl3zvWR%2FGeIev5FC4qeBMmhttHIm7v2wgahzFho7KCPhMr7t4voV8J%2FnWXaO2YPoV00J4RRO1l5hxwd7AKrtEBvJO4rj9Vtdb%2Bx5%2F35XyJrnR5a5n6%2FO0EAnGpV8%2FkW9DZCyKge87wpnmw2CuzRFbMjqZe44yLg3hW9OJj4ZrgaQLNbBLgZMgA%2FzqZbdOV78bfChplaUAVNZHaLGZfPG3%2Bon7CYsr5wXAiq5N0V%2Bh%2BqffKdhiHFl3D7XVIXP3sEcV9Jgte87T%2Bog1%2BhyYgmF6i6uk6w2hRMdjbd98He7o9aWkE6W6SEos3j3hxETet1Ia7m3EA5Lk39Axp425kt23NQYp2msEuYhqtg6N2BqKCyArHxSC0kXfHOvhC1GLRM2v0%2BowlytRDdAxCRIcZkQwKjpuwbqBKBCT1gjNNfbDq97YbG792z8mgmaVBjPjwfhXmb29s7NKSsRsXl2%2F7B5%2FwqVW%2BuBOCl8Vig%2FILoIAgG%2FCJqr7h9uAaAC9MaxRMJQwlqOlwwY6pgHG%2BPXpGXjmj2ydTtFkWGDTExV0dQU8Bl4wj0esBJ3AwTgkSgk3l1hKVz7HoKnqTGaqX6b1lghrK6L0Q3TgViIwQ0a5OkK%2FkJASQmsfl3PLwod40AN8WoHV1noUoZ8BgegowiCndPyCxTsIY4AON3STA%2FCW9GqWXxSdjU52rWfpjGFR6d9gQodhmM%2FpliE6FyeeclknSe%2BxyfYkOFeVCW%2FZIU6ymCzh&X-Amz-Signature=2337c573d363847c068715aea41d066a23488d9274856ffbed5ca8100b6be7c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO2TR6L2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIGyodnYV71EJWiQ1rl4HKDOSM9zAOHyjHnbSf9PL%2Bf6OAiAfZ91kANHUYvHH8HmR0b1REo7KFseY3MktoBC%2FZQSfkir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7c4zvN%2BUWGhrSaL%2FKtwDkDWRV6mqqnDgCeiYxugNbRfKDYKoQq1Hfyqsc0tpT453M56End5xVMOfmKxvJJZkK6PODnn6yY8%2F4lthF%2B5HnktzTfvL3KPr5Tq%2BTh%2B8nPJOvDtqlwn4ThQrYRMnl3zvWR%2FGeIev5FC4qeBMmhttHIm7v2wgahzFho7KCPhMr7t4voV8J%2FnWXaO2YPoV00J4RRO1l5hxwd7AKrtEBvJO4rj9Vtdb%2Bx5%2F35XyJrnR5a5n6%2FO0EAnGpV8%2FkW9DZCyKge87wpnmw2CuzRFbMjqZe44yLg3hW9OJj4ZrgaQLNbBLgZMgA%2FzqZbdOV78bfChplaUAVNZHaLGZfPG3%2Bon7CYsr5wXAiq5N0V%2Bh%2BqffKdhiHFl3D7XVIXP3sEcV9Jgte87T%2Bog1%2BhyYgmF6i6uk6w2hRMdjbd98He7o9aWkE6W6SEos3j3hxETet1Ia7m3EA5Lk39Axp425kt23NQYp2msEuYhqtg6N2BqKCyArHxSC0kXfHOvhC1GLRM2v0%2BowlytRDdAxCRIcZkQwKjpuwbqBKBCT1gjNNfbDq97YbG792z8mgmaVBjPjwfhXmb29s7NKSsRsXl2%2F7B5%2FwqVW%2BuBOCl8Vig%2FILoIAgG%2FCJqr7h9uAaAC9MaxRMJQwlqOlwwY6pgHG%2BPXpGXjmj2ydTtFkWGDTExV0dQU8Bl4wj0esBJ3AwTgkSgk3l1hKVz7HoKnqTGaqX6b1lghrK6L0Q3TgViIwQ0a5OkK%2FkJASQmsfl3PLwod40AN8WoHV1noUoZ8BgegowiCndPyCxTsIY4AON3STA%2FCW9GqWXxSdjU52rWfpjGFR6d9gQodhmM%2FpliE6FyeeclknSe%2BxyfYkOFeVCW%2FZIU6ymCzh&X-Amz-Signature=cd1128df66059cd8b52b6921d3432379007cb3d3fba4f2710f48d8762740dc86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO2TR6L2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIGyodnYV71EJWiQ1rl4HKDOSM9zAOHyjHnbSf9PL%2Bf6OAiAfZ91kANHUYvHH8HmR0b1REo7KFseY3MktoBC%2FZQSfkir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7c4zvN%2BUWGhrSaL%2FKtwDkDWRV6mqqnDgCeiYxugNbRfKDYKoQq1Hfyqsc0tpT453M56End5xVMOfmKxvJJZkK6PODnn6yY8%2F4lthF%2B5HnktzTfvL3KPr5Tq%2BTh%2B8nPJOvDtqlwn4ThQrYRMnl3zvWR%2FGeIev5FC4qeBMmhttHIm7v2wgahzFho7KCPhMr7t4voV8J%2FnWXaO2YPoV00J4RRO1l5hxwd7AKrtEBvJO4rj9Vtdb%2Bx5%2F35XyJrnR5a5n6%2FO0EAnGpV8%2FkW9DZCyKge87wpnmw2CuzRFbMjqZe44yLg3hW9OJj4ZrgaQLNbBLgZMgA%2FzqZbdOV78bfChplaUAVNZHaLGZfPG3%2Bon7CYsr5wXAiq5N0V%2Bh%2BqffKdhiHFl3D7XVIXP3sEcV9Jgte87T%2Bog1%2BhyYgmF6i6uk6w2hRMdjbd98He7o9aWkE6W6SEos3j3hxETet1Ia7m3EA5Lk39Axp425kt23NQYp2msEuYhqtg6N2BqKCyArHxSC0kXfHOvhC1GLRM2v0%2BowlytRDdAxCRIcZkQwKjpuwbqBKBCT1gjNNfbDq97YbG792z8mgmaVBjPjwfhXmb29s7NKSsRsXl2%2F7B5%2FwqVW%2BuBOCl8Vig%2FILoIAgG%2FCJqr7h9uAaAC9MaxRMJQwlqOlwwY6pgHG%2BPXpGXjmj2ydTtFkWGDTExV0dQU8Bl4wj0esBJ3AwTgkSgk3l1hKVz7HoKnqTGaqX6b1lghrK6L0Q3TgViIwQ0a5OkK%2FkJASQmsfl3PLwod40AN8WoHV1noUoZ8BgegowiCndPyCxTsIY4AON3STA%2FCW9GqWXxSdjU52rWfpjGFR6d9gQodhmM%2FpliE6FyeeclknSe%2BxyfYkOFeVCW%2FZIU6ymCzh&X-Amz-Signature=41aa56702fb86dc8194f4e7055e22e4f95e7dfbd4a7f269c5b8359614a5a4b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
