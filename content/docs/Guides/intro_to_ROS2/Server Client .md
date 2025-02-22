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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2XERGIV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBq3eCVLGo6m7Hk%2Bv80kFSq35rhcOWmuY%2FzMIr%2FV8gawAiEAi6rM0D2JbnoHJKr2LZWWsq4ojSIiRUbeO6pvdIqVO14qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV9FTf7c5kjISrzqyrcA2RI56CfZwklPatWGwe7AEP2zWXviYk4C2gHlolTH43zzNytnmtB6hJMVeyMjsQOxI%2Fk0k3udHgGdPGpwSeyj4fzxnZk5mJILmBGeJad%2BiJ7YE7JOtREC2%2BhcjMqSfUhqneudbfEomuIx2oM%2FE8pVH1tWAmcziPTXILWj%2FCj4wlG8Co6ytBgCmCMkelfpwvrPtq5x1UYfVHe8rSZ80Wk1g1T1rNTdZM6RiDZAN8hw8LIJW5vpNsMV%2ForeZ8dIClgmqprbbJzgqXyLQWSqPq%2Bc2WzzQ5wAH%2FfSxn%2Brd6BwsDj%2FLkH0Ytr8UT6vKPicnTgmpjt31Cd%2B%2BQ1eYmXQFtdMGMN8grsCusm8SSiRWVpul9UwcpFmWpRbADgU47BsKjcDwB%2FxqpSQKbI1%2FVHYvAcIKPi0FQ1nhDN1%2FfqaHXN36hOjEvBPjPqHQYIO8kv0Mp3ENV38Rs%2BiE0tUxVMjDU3vDa3GxvMENtQky8oh%2FxbU59ixWNVi2JfKbkHXdHIJ45xv9f4C3xwxw1GlHOpFSfiB8wTD8LjGF2xqE%2FBpdFC2es%2BWwjv2Y4I%2BDtv4N8WMHKgMmPkDHwJ6F5MtK9BLfiVeibck36EANGAXUKwUcACnzfVXUE%2FYfYoOBhKxjpLMNjo570GOqUBrJj%2BGe6a9kkFYajy77B4h6X3%2BSjpCDw6%2F%2BYuOZT3KtZd2Y%2FZxwiryYSpm1GWjwOZQdaT1GnZv625rwr2RBmNQWWJ7v5k7RwR7UiReO4YRbs1UlKcg6GRNTncARN3Bd6hI5zVTA7JMOr7s%2FY%2Fohkqbs7%2FFz%2B53dcomX26swU58L%2FtgLO2jc6ioY93xyqXDSMloH%2BzKSUK%2Fw7xpI6tsP1FDWe5oMVG&X-Amz-Signature=a35619faa67a64c7ad0a882be49db09f8366e621a25743269e78093c599c24a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2XERGIV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBq3eCVLGo6m7Hk%2Bv80kFSq35rhcOWmuY%2FzMIr%2FV8gawAiEAi6rM0D2JbnoHJKr2LZWWsq4ojSIiRUbeO6pvdIqVO14qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV9FTf7c5kjISrzqyrcA2RI56CfZwklPatWGwe7AEP2zWXviYk4C2gHlolTH43zzNytnmtB6hJMVeyMjsQOxI%2Fk0k3udHgGdPGpwSeyj4fzxnZk5mJILmBGeJad%2BiJ7YE7JOtREC2%2BhcjMqSfUhqneudbfEomuIx2oM%2FE8pVH1tWAmcziPTXILWj%2FCj4wlG8Co6ytBgCmCMkelfpwvrPtq5x1UYfVHe8rSZ80Wk1g1T1rNTdZM6RiDZAN8hw8LIJW5vpNsMV%2ForeZ8dIClgmqprbbJzgqXyLQWSqPq%2Bc2WzzQ5wAH%2FfSxn%2Brd6BwsDj%2FLkH0Ytr8UT6vKPicnTgmpjt31Cd%2B%2BQ1eYmXQFtdMGMN8grsCusm8SSiRWVpul9UwcpFmWpRbADgU47BsKjcDwB%2FxqpSQKbI1%2FVHYvAcIKPi0FQ1nhDN1%2FfqaHXN36hOjEvBPjPqHQYIO8kv0Mp3ENV38Rs%2BiE0tUxVMjDU3vDa3GxvMENtQky8oh%2FxbU59ixWNVi2JfKbkHXdHIJ45xv9f4C3xwxw1GlHOpFSfiB8wTD8LjGF2xqE%2FBpdFC2es%2BWwjv2Y4I%2BDtv4N8WMHKgMmPkDHwJ6F5MtK9BLfiVeibck36EANGAXUKwUcACnzfVXUE%2FYfYoOBhKxjpLMNjo570GOqUBrJj%2BGe6a9kkFYajy77B4h6X3%2BSjpCDw6%2F%2BYuOZT3KtZd2Y%2FZxwiryYSpm1GWjwOZQdaT1GnZv625rwr2RBmNQWWJ7v5k7RwR7UiReO4YRbs1UlKcg6GRNTncARN3Bd6hI5zVTA7JMOr7s%2FY%2Fohkqbs7%2FFz%2B53dcomX26swU58L%2FtgLO2jc6ioY93xyqXDSMloH%2BzKSUK%2Fw7xpI6tsP1FDWe5oMVG&X-Amz-Signature=d91a2bc316b111b83a93269d0195f73330ddedc8c26f989d805e0d733da4ac64&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2XERGIV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBq3eCVLGo6m7Hk%2Bv80kFSq35rhcOWmuY%2FzMIr%2FV8gawAiEAi6rM0D2JbnoHJKr2LZWWsq4ojSIiRUbeO6pvdIqVO14qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV9FTf7c5kjISrzqyrcA2RI56CfZwklPatWGwe7AEP2zWXviYk4C2gHlolTH43zzNytnmtB6hJMVeyMjsQOxI%2Fk0k3udHgGdPGpwSeyj4fzxnZk5mJILmBGeJad%2BiJ7YE7JOtREC2%2BhcjMqSfUhqneudbfEomuIx2oM%2FE8pVH1tWAmcziPTXILWj%2FCj4wlG8Co6ytBgCmCMkelfpwvrPtq5x1UYfVHe8rSZ80Wk1g1T1rNTdZM6RiDZAN8hw8LIJW5vpNsMV%2ForeZ8dIClgmqprbbJzgqXyLQWSqPq%2Bc2WzzQ5wAH%2FfSxn%2Brd6BwsDj%2FLkH0Ytr8UT6vKPicnTgmpjt31Cd%2B%2BQ1eYmXQFtdMGMN8grsCusm8SSiRWVpul9UwcpFmWpRbADgU47BsKjcDwB%2FxqpSQKbI1%2FVHYvAcIKPi0FQ1nhDN1%2FfqaHXN36hOjEvBPjPqHQYIO8kv0Mp3ENV38Rs%2BiE0tUxVMjDU3vDa3GxvMENtQky8oh%2FxbU59ixWNVi2JfKbkHXdHIJ45xv9f4C3xwxw1GlHOpFSfiB8wTD8LjGF2xqE%2FBpdFC2es%2BWwjv2Y4I%2BDtv4N8WMHKgMmPkDHwJ6F5MtK9BLfiVeibck36EANGAXUKwUcACnzfVXUE%2FYfYoOBhKxjpLMNjo570GOqUBrJj%2BGe6a9kkFYajy77B4h6X3%2BSjpCDw6%2F%2BYuOZT3KtZd2Y%2FZxwiryYSpm1GWjwOZQdaT1GnZv625rwr2RBmNQWWJ7v5k7RwR7UiReO4YRbs1UlKcg6GRNTncARN3Bd6hI5zVTA7JMOr7s%2FY%2Fohkqbs7%2FFz%2B53dcomX26swU58L%2FtgLO2jc6ioY93xyqXDSMloH%2BzKSUK%2Fw7xpI6tsP1FDWe5oMVG&X-Amz-Signature=dd6318038d8db40f62444e6f4a45354fccfb0d0b8d83ef245c27d7c3024b3ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2XERGIV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBq3eCVLGo6m7Hk%2Bv80kFSq35rhcOWmuY%2FzMIr%2FV8gawAiEAi6rM0D2JbnoHJKr2LZWWsq4ojSIiRUbeO6pvdIqVO14qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV9FTf7c5kjISrzqyrcA2RI56CfZwklPatWGwe7AEP2zWXviYk4C2gHlolTH43zzNytnmtB6hJMVeyMjsQOxI%2Fk0k3udHgGdPGpwSeyj4fzxnZk5mJILmBGeJad%2BiJ7YE7JOtREC2%2BhcjMqSfUhqneudbfEomuIx2oM%2FE8pVH1tWAmcziPTXILWj%2FCj4wlG8Co6ytBgCmCMkelfpwvrPtq5x1UYfVHe8rSZ80Wk1g1T1rNTdZM6RiDZAN8hw8LIJW5vpNsMV%2ForeZ8dIClgmqprbbJzgqXyLQWSqPq%2Bc2WzzQ5wAH%2FfSxn%2Brd6BwsDj%2FLkH0Ytr8UT6vKPicnTgmpjt31Cd%2B%2BQ1eYmXQFtdMGMN8grsCusm8SSiRWVpul9UwcpFmWpRbADgU47BsKjcDwB%2FxqpSQKbI1%2FVHYvAcIKPi0FQ1nhDN1%2FfqaHXN36hOjEvBPjPqHQYIO8kv0Mp3ENV38Rs%2BiE0tUxVMjDU3vDa3GxvMENtQky8oh%2FxbU59ixWNVi2JfKbkHXdHIJ45xv9f4C3xwxw1GlHOpFSfiB8wTD8LjGF2xqE%2FBpdFC2es%2BWwjv2Y4I%2BDtv4N8WMHKgMmPkDHwJ6F5MtK9BLfiVeibck36EANGAXUKwUcACnzfVXUE%2FYfYoOBhKxjpLMNjo570GOqUBrJj%2BGe6a9kkFYajy77B4h6X3%2BSjpCDw6%2F%2BYuOZT3KtZd2Y%2FZxwiryYSpm1GWjwOZQdaT1GnZv625rwr2RBmNQWWJ7v5k7RwR7UiReO4YRbs1UlKcg6GRNTncARN3Bd6hI5zVTA7JMOr7s%2FY%2Fohkqbs7%2FFz%2B53dcomX26swU58L%2FtgLO2jc6ioY93xyqXDSMloH%2BzKSUK%2Fw7xpI6tsP1FDWe5oMVG&X-Amz-Signature=231c0a321f05f822c956f5fc66f75fe00eac8b15ca0f03a44032c49fcecf84d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2XERGIV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBq3eCVLGo6m7Hk%2Bv80kFSq35rhcOWmuY%2FzMIr%2FV8gawAiEAi6rM0D2JbnoHJKr2LZWWsq4ojSIiRUbeO6pvdIqVO14qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV9FTf7c5kjISrzqyrcA2RI56CfZwklPatWGwe7AEP2zWXviYk4C2gHlolTH43zzNytnmtB6hJMVeyMjsQOxI%2Fk0k3udHgGdPGpwSeyj4fzxnZk5mJILmBGeJad%2BiJ7YE7JOtREC2%2BhcjMqSfUhqneudbfEomuIx2oM%2FE8pVH1tWAmcziPTXILWj%2FCj4wlG8Co6ytBgCmCMkelfpwvrPtq5x1UYfVHe8rSZ80Wk1g1T1rNTdZM6RiDZAN8hw8LIJW5vpNsMV%2ForeZ8dIClgmqprbbJzgqXyLQWSqPq%2Bc2WzzQ5wAH%2FfSxn%2Brd6BwsDj%2FLkH0Ytr8UT6vKPicnTgmpjt31Cd%2B%2BQ1eYmXQFtdMGMN8grsCusm8SSiRWVpul9UwcpFmWpRbADgU47BsKjcDwB%2FxqpSQKbI1%2FVHYvAcIKPi0FQ1nhDN1%2FfqaHXN36hOjEvBPjPqHQYIO8kv0Mp3ENV38Rs%2BiE0tUxVMjDU3vDa3GxvMENtQky8oh%2FxbU59ixWNVi2JfKbkHXdHIJ45xv9f4C3xwxw1GlHOpFSfiB8wTD8LjGF2xqE%2FBpdFC2es%2BWwjv2Y4I%2BDtv4N8WMHKgMmPkDHwJ6F5MtK9BLfiVeibck36EANGAXUKwUcACnzfVXUE%2FYfYoOBhKxjpLMNjo570GOqUBrJj%2BGe6a9kkFYajy77B4h6X3%2BSjpCDw6%2F%2BYuOZT3KtZd2Y%2FZxwiryYSpm1GWjwOZQdaT1GnZv625rwr2RBmNQWWJ7v5k7RwR7UiReO4YRbs1UlKcg6GRNTncARN3Bd6hI5zVTA7JMOr7s%2FY%2Fohkqbs7%2FFz%2B53dcomX26swU58L%2FtgLO2jc6ioY93xyqXDSMloH%2BzKSUK%2Fw7xpI6tsP1FDWe5oMVG&X-Amz-Signature=bd927e4aa8ea98a91e03ec21b54a270b2e43ce694455dcb684a171905ed6da94&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
