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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2TPO2VN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMG7G%2BuanAQ2t9A5NoaHD70Ttae%2BpBLhYras6O8IE4bAIhAMiZz4VaP7L6QIxNVMiocOG6xbe4wUNVIcjAM1Ln8HnvKv8DCCkQABoMNjM3NDIzMTgzODA1IgxbsCjuOjHvPXHCtAMq3AM7n0aF4dW05hCPVqx8P20Dn%2F4FKa%2BtTmwg1JvSHjahxdDbgETbvXfrP%2Fl2blTBq1wDCJD1Wi6OPMi8UCwISsUjIJIug8USCjZIkYUi3PZKwYO9oSSPJG7jepXxcp6zkfm0dlpTkqDKeVKQOu%2Be%2B4T8arm7ZLM8uG49zbn0J9btGe0VUXeFxpz1oHduo5CVVz71%2Fg02jb1SoriyVxc0%2FUfKz0mABeCIBhBmtZ9wEWj4Ms60V3urvfD0v4hVCkZehL1GkaX5UkK3ZwM1Kg%2FepdDRYtefGHdHrmPACOJW%2Bsr7hHIYjUFrAIhpLgc1Fi0OqRZK1sjyLb9DxKpSEbEvhxXY7CuUa1DN6aEAnWcZd03aMCPpqOREIW2n6iZfJQVcNrwdz5MX93IeN8li8y%2F5Cp9WCpFL7%2FAq84xv4mpdFHYwrBwwy3mG0thDVvH5T55qRj5PibX4SVgvTt7KXKFiuIzcfvrSg4J5iqHl3zgNTny4vfP2P7GSJ3MJi%2FLVmqlOtlASei3BS%2BNvefbg%2Bsk%2BynObppa7JiytJVG%2BPtRkaHln7q00XNmYCVE4eG0PS%2BJOWBJ7lh2ePW1%2FJrFzkO%2F6VksiODtJ6eQ5iS%2F4Eem%2FKTmyxdEoKhE1exrJQFffvDDIvMO%2FBjqkAerXeIswpcSQBzsLxSrtj7D7hcQHp7b8jziqvcygNcSnZRXP4N6dkWLAvpw8%2FGYFAwfvYnWblr%2FQzISSFwYehhulf6obnaaOZqrxtsVWz5jxhTyz2qI7%2FNu3C8K06e3ahcJWJqg3G7YdF9OFQ2%2BMXf2poeAQba6Z%2BW45rUWFPCRjvwssSmUWEXit6QYsZ3jOJiKItuMMbLcNx5DSfEGt31mJn1Yq&X-Amz-Signature=989a19ff72716a078624a957a53cdbe8c1d20293c9b618c574e39360f5751c8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2TPO2VN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMG7G%2BuanAQ2t9A5NoaHD70Ttae%2BpBLhYras6O8IE4bAIhAMiZz4VaP7L6QIxNVMiocOG6xbe4wUNVIcjAM1Ln8HnvKv8DCCkQABoMNjM3NDIzMTgzODA1IgxbsCjuOjHvPXHCtAMq3AM7n0aF4dW05hCPVqx8P20Dn%2F4FKa%2BtTmwg1JvSHjahxdDbgETbvXfrP%2Fl2blTBq1wDCJD1Wi6OPMi8UCwISsUjIJIug8USCjZIkYUi3PZKwYO9oSSPJG7jepXxcp6zkfm0dlpTkqDKeVKQOu%2Be%2B4T8arm7ZLM8uG49zbn0J9btGe0VUXeFxpz1oHduo5CVVz71%2Fg02jb1SoriyVxc0%2FUfKz0mABeCIBhBmtZ9wEWj4Ms60V3urvfD0v4hVCkZehL1GkaX5UkK3ZwM1Kg%2FepdDRYtefGHdHrmPACOJW%2Bsr7hHIYjUFrAIhpLgc1Fi0OqRZK1sjyLb9DxKpSEbEvhxXY7CuUa1DN6aEAnWcZd03aMCPpqOREIW2n6iZfJQVcNrwdz5MX93IeN8li8y%2F5Cp9WCpFL7%2FAq84xv4mpdFHYwrBwwy3mG0thDVvH5T55qRj5PibX4SVgvTt7KXKFiuIzcfvrSg4J5iqHl3zgNTny4vfP2P7GSJ3MJi%2FLVmqlOtlASei3BS%2BNvefbg%2Bsk%2BynObppa7JiytJVG%2BPtRkaHln7q00XNmYCVE4eG0PS%2BJOWBJ7lh2ePW1%2FJrFzkO%2F6VksiODtJ6eQ5iS%2F4Eem%2FKTmyxdEoKhE1exrJQFffvDDIvMO%2FBjqkAerXeIswpcSQBzsLxSrtj7D7hcQHp7b8jziqvcygNcSnZRXP4N6dkWLAvpw8%2FGYFAwfvYnWblr%2FQzISSFwYehhulf6obnaaOZqrxtsVWz5jxhTyz2qI7%2FNu3C8K06e3ahcJWJqg3G7YdF9OFQ2%2BMXf2poeAQba6Z%2BW45rUWFPCRjvwssSmUWEXit6QYsZ3jOJiKItuMMbLcNx5DSfEGt31mJn1Yq&X-Amz-Signature=700d21600dcfe3290657a5abd5bec8b182e12d15bce589351d5f8e727d876495&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2TPO2VN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMG7G%2BuanAQ2t9A5NoaHD70Ttae%2BpBLhYras6O8IE4bAIhAMiZz4VaP7L6QIxNVMiocOG6xbe4wUNVIcjAM1Ln8HnvKv8DCCkQABoMNjM3NDIzMTgzODA1IgxbsCjuOjHvPXHCtAMq3AM7n0aF4dW05hCPVqx8P20Dn%2F4FKa%2BtTmwg1JvSHjahxdDbgETbvXfrP%2Fl2blTBq1wDCJD1Wi6OPMi8UCwISsUjIJIug8USCjZIkYUi3PZKwYO9oSSPJG7jepXxcp6zkfm0dlpTkqDKeVKQOu%2Be%2B4T8arm7ZLM8uG49zbn0J9btGe0VUXeFxpz1oHduo5CVVz71%2Fg02jb1SoriyVxc0%2FUfKz0mABeCIBhBmtZ9wEWj4Ms60V3urvfD0v4hVCkZehL1GkaX5UkK3ZwM1Kg%2FepdDRYtefGHdHrmPACOJW%2Bsr7hHIYjUFrAIhpLgc1Fi0OqRZK1sjyLb9DxKpSEbEvhxXY7CuUa1DN6aEAnWcZd03aMCPpqOREIW2n6iZfJQVcNrwdz5MX93IeN8li8y%2F5Cp9WCpFL7%2FAq84xv4mpdFHYwrBwwy3mG0thDVvH5T55qRj5PibX4SVgvTt7KXKFiuIzcfvrSg4J5iqHl3zgNTny4vfP2P7GSJ3MJi%2FLVmqlOtlASei3BS%2BNvefbg%2Bsk%2BynObppa7JiytJVG%2BPtRkaHln7q00XNmYCVE4eG0PS%2BJOWBJ7lh2ePW1%2FJrFzkO%2F6VksiODtJ6eQ5iS%2F4Eem%2FKTmyxdEoKhE1exrJQFffvDDIvMO%2FBjqkAerXeIswpcSQBzsLxSrtj7D7hcQHp7b8jziqvcygNcSnZRXP4N6dkWLAvpw8%2FGYFAwfvYnWblr%2FQzISSFwYehhulf6obnaaOZqrxtsVWz5jxhTyz2qI7%2FNu3C8K06e3ahcJWJqg3G7YdF9OFQ2%2BMXf2poeAQba6Z%2BW45rUWFPCRjvwssSmUWEXit6QYsZ3jOJiKItuMMbLcNx5DSfEGt31mJn1Yq&X-Amz-Signature=8078932b12c8a94a6dd55888d2cd026884802bb5edb9ddfc87c77eed5890a674&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2TPO2VN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMG7G%2BuanAQ2t9A5NoaHD70Ttae%2BpBLhYras6O8IE4bAIhAMiZz4VaP7L6QIxNVMiocOG6xbe4wUNVIcjAM1Ln8HnvKv8DCCkQABoMNjM3NDIzMTgzODA1IgxbsCjuOjHvPXHCtAMq3AM7n0aF4dW05hCPVqx8P20Dn%2F4FKa%2BtTmwg1JvSHjahxdDbgETbvXfrP%2Fl2blTBq1wDCJD1Wi6OPMi8UCwISsUjIJIug8USCjZIkYUi3PZKwYO9oSSPJG7jepXxcp6zkfm0dlpTkqDKeVKQOu%2Be%2B4T8arm7ZLM8uG49zbn0J9btGe0VUXeFxpz1oHduo5CVVz71%2Fg02jb1SoriyVxc0%2FUfKz0mABeCIBhBmtZ9wEWj4Ms60V3urvfD0v4hVCkZehL1GkaX5UkK3ZwM1Kg%2FepdDRYtefGHdHrmPACOJW%2Bsr7hHIYjUFrAIhpLgc1Fi0OqRZK1sjyLb9DxKpSEbEvhxXY7CuUa1DN6aEAnWcZd03aMCPpqOREIW2n6iZfJQVcNrwdz5MX93IeN8li8y%2F5Cp9WCpFL7%2FAq84xv4mpdFHYwrBwwy3mG0thDVvH5T55qRj5PibX4SVgvTt7KXKFiuIzcfvrSg4J5iqHl3zgNTny4vfP2P7GSJ3MJi%2FLVmqlOtlASei3BS%2BNvefbg%2Bsk%2BynObppa7JiytJVG%2BPtRkaHln7q00XNmYCVE4eG0PS%2BJOWBJ7lh2ePW1%2FJrFzkO%2F6VksiODtJ6eQ5iS%2F4Eem%2FKTmyxdEoKhE1exrJQFffvDDIvMO%2FBjqkAerXeIswpcSQBzsLxSrtj7D7hcQHp7b8jziqvcygNcSnZRXP4N6dkWLAvpw8%2FGYFAwfvYnWblr%2FQzISSFwYehhulf6obnaaOZqrxtsVWz5jxhTyz2qI7%2FNu3C8K06e3ahcJWJqg3G7YdF9OFQ2%2BMXf2poeAQba6Z%2BW45rUWFPCRjvwssSmUWEXit6QYsZ3jOJiKItuMMbLcNx5DSfEGt31mJn1Yq&X-Amz-Signature=01b1222ef2c3a798817a2ba1e3b83204fb28f4d7cf28b37b9455bb9fc422548b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2TPO2VN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMG7G%2BuanAQ2t9A5NoaHD70Ttae%2BpBLhYras6O8IE4bAIhAMiZz4VaP7L6QIxNVMiocOG6xbe4wUNVIcjAM1Ln8HnvKv8DCCkQABoMNjM3NDIzMTgzODA1IgxbsCjuOjHvPXHCtAMq3AM7n0aF4dW05hCPVqx8P20Dn%2F4FKa%2BtTmwg1JvSHjahxdDbgETbvXfrP%2Fl2blTBq1wDCJD1Wi6OPMi8UCwISsUjIJIug8USCjZIkYUi3PZKwYO9oSSPJG7jepXxcp6zkfm0dlpTkqDKeVKQOu%2Be%2B4T8arm7ZLM8uG49zbn0J9btGe0VUXeFxpz1oHduo5CVVz71%2Fg02jb1SoriyVxc0%2FUfKz0mABeCIBhBmtZ9wEWj4Ms60V3urvfD0v4hVCkZehL1GkaX5UkK3ZwM1Kg%2FepdDRYtefGHdHrmPACOJW%2Bsr7hHIYjUFrAIhpLgc1Fi0OqRZK1sjyLb9DxKpSEbEvhxXY7CuUa1DN6aEAnWcZd03aMCPpqOREIW2n6iZfJQVcNrwdz5MX93IeN8li8y%2F5Cp9WCpFL7%2FAq84xv4mpdFHYwrBwwy3mG0thDVvH5T55qRj5PibX4SVgvTt7KXKFiuIzcfvrSg4J5iqHl3zgNTny4vfP2P7GSJ3MJi%2FLVmqlOtlASei3BS%2BNvefbg%2Bsk%2BynObppa7JiytJVG%2BPtRkaHln7q00XNmYCVE4eG0PS%2BJOWBJ7lh2ePW1%2FJrFzkO%2F6VksiODtJ6eQ5iS%2F4Eem%2FKTmyxdEoKhE1exrJQFffvDDIvMO%2FBjqkAerXeIswpcSQBzsLxSrtj7D7hcQHp7b8jziqvcygNcSnZRXP4N6dkWLAvpw8%2FGYFAwfvYnWblr%2FQzISSFwYehhulf6obnaaOZqrxtsVWz5jxhTyz2qI7%2FNu3C8K06e3ahcJWJqg3G7YdF9OFQ2%2BMXf2poeAQba6Z%2BW45rUWFPCRjvwssSmUWEXit6QYsZ3jOJiKItuMMbLcNx5DSfEGt31mJn1Yq&X-Amz-Signature=dace682f2062d954b12d1d93eac615f5ab9b456f68238fc21c08649d544f282d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
