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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO676NEH%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDh8eOkYCAjjI1qkiTmo2kYE8AbGDIhRY2HGztPVnRFqgIhAPQNglnuzBcwIQT4bqSyqZO3Sl3tABb2leRNLHyWGakNKv8DCE0QABoMNjM3NDIzMTgzODA1Igx9%2BCyLmOMUWJCKaScq3APMINtQkbLGmtxObx6CNwio4EWV%2Fd%2F1ieaU9aaCHayTx0QClpN6NvJ4k5KeJxpzI8Zryty6R6oVq%2Fg2sBdTp4%2BlW0MTsgECLshwEdHhEybK60l%2BQKgDi2xfHJ4mhjJ4H0%2BdIOMYyyOkPK1dLTbrjMwCzB58npX8yiTKSIAXhFdxc67SKKazTlIyzGyBK%2Fzdk9ZrgmtrC%2FncN9fztxul7D5n9jGXlrXachy6DXeM%2FTA7AZxCnUJo3LeN94h9trgZ7M%2B5wPTjVwufJQw4P2JrMDBDrKcXv1nNOKe3tEE9eFBx%2FogoYK%2Bwf9g0gsX5qFZ3cUIFgFe0ONGOqicFV%2BGDvgrSku0xH8UMawqS5JtOudkml24VJYR6z%2Fk%2ByUpM5XH64I0BgyfvXGAu95q%2BwHHBqxFi8irU%2FVpH1bc%2BvzBOExBf3Qp8Xh403uAQa61kqGEjQiEaxt5qFC%2FwVYgCE2ijvW5gzg1ZxnTjnIEYYGsJlDJLlnBnZERH%2BttBckK0v1pgo9kFsy3TaEuZssy8Gc9MZkiAsdWu8U5rWEcM4HAONOUxr0yQAXfvZaSFBgxzYwo%2Bdvwaug6xRZ%2Fa8c970PehCimMMWCaaJeCK9iyT%2FsPCVU1%2BauOljCf%2Bv83bQeHizDF2cO9BjqkATH4bhBlcsUkxpJbITRyGREvaEU8n7Lqs15p%2FmKoNXgJ1fEa0wVVrM%2Bp3JlK07nFwCj%2FauqkB8%2Btxb9IaoYopnPlsBc9wK8VWLVme6esSegd%2FV5OezenwndipdoGlA2lwJ2Yd8kMexu%2B%2Fdv%2But2UpFUaYH3OpHkAh8zpaw4AktU%2BYJO1ckoDL0LoAWCDUU5VZNj%2BpFzWVR6zUwi42OGpzK5Pgsk7&X-Amz-Signature=a7e12a02bf98ebf4de8d62ba3c1fbf91c685654bd52088a8593ffacf9c82ce37&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO676NEH%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDh8eOkYCAjjI1qkiTmo2kYE8AbGDIhRY2HGztPVnRFqgIhAPQNglnuzBcwIQT4bqSyqZO3Sl3tABb2leRNLHyWGakNKv8DCE0QABoMNjM3NDIzMTgzODA1Igx9%2BCyLmOMUWJCKaScq3APMINtQkbLGmtxObx6CNwio4EWV%2Fd%2F1ieaU9aaCHayTx0QClpN6NvJ4k5KeJxpzI8Zryty6R6oVq%2Fg2sBdTp4%2BlW0MTsgECLshwEdHhEybK60l%2BQKgDi2xfHJ4mhjJ4H0%2BdIOMYyyOkPK1dLTbrjMwCzB58npX8yiTKSIAXhFdxc67SKKazTlIyzGyBK%2Fzdk9ZrgmtrC%2FncN9fztxul7D5n9jGXlrXachy6DXeM%2FTA7AZxCnUJo3LeN94h9trgZ7M%2B5wPTjVwufJQw4P2JrMDBDrKcXv1nNOKe3tEE9eFBx%2FogoYK%2Bwf9g0gsX5qFZ3cUIFgFe0ONGOqicFV%2BGDvgrSku0xH8UMawqS5JtOudkml24VJYR6z%2Fk%2ByUpM5XH64I0BgyfvXGAu95q%2BwHHBqxFi8irU%2FVpH1bc%2BvzBOExBf3Qp8Xh403uAQa61kqGEjQiEaxt5qFC%2FwVYgCE2ijvW5gzg1ZxnTjnIEYYGsJlDJLlnBnZERH%2BttBckK0v1pgo9kFsy3TaEuZssy8Gc9MZkiAsdWu8U5rWEcM4HAONOUxr0yQAXfvZaSFBgxzYwo%2Bdvwaug6xRZ%2Fa8c970PehCimMMWCaaJeCK9iyT%2FsPCVU1%2BauOljCf%2Bv83bQeHizDF2cO9BjqkATH4bhBlcsUkxpJbITRyGREvaEU8n7Lqs15p%2FmKoNXgJ1fEa0wVVrM%2Bp3JlK07nFwCj%2FauqkB8%2Btxb9IaoYopnPlsBc9wK8VWLVme6esSegd%2FV5OezenwndipdoGlA2lwJ2Yd8kMexu%2B%2Fdv%2But2UpFUaYH3OpHkAh8zpaw4AktU%2BYJO1ckoDL0LoAWCDUU5VZNj%2BpFzWVR6zUwi42OGpzK5Pgsk7&X-Amz-Signature=eec6300f5a3165570069b290e29aa8cea3172ba01c90e45a95345864f38ba5de&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO676NEH%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDh8eOkYCAjjI1qkiTmo2kYE8AbGDIhRY2HGztPVnRFqgIhAPQNglnuzBcwIQT4bqSyqZO3Sl3tABb2leRNLHyWGakNKv8DCE0QABoMNjM3NDIzMTgzODA1Igx9%2BCyLmOMUWJCKaScq3APMINtQkbLGmtxObx6CNwio4EWV%2Fd%2F1ieaU9aaCHayTx0QClpN6NvJ4k5KeJxpzI8Zryty6R6oVq%2Fg2sBdTp4%2BlW0MTsgECLshwEdHhEybK60l%2BQKgDi2xfHJ4mhjJ4H0%2BdIOMYyyOkPK1dLTbrjMwCzB58npX8yiTKSIAXhFdxc67SKKazTlIyzGyBK%2Fzdk9ZrgmtrC%2FncN9fztxul7D5n9jGXlrXachy6DXeM%2FTA7AZxCnUJo3LeN94h9trgZ7M%2B5wPTjVwufJQw4P2JrMDBDrKcXv1nNOKe3tEE9eFBx%2FogoYK%2Bwf9g0gsX5qFZ3cUIFgFe0ONGOqicFV%2BGDvgrSku0xH8UMawqS5JtOudkml24VJYR6z%2Fk%2ByUpM5XH64I0BgyfvXGAu95q%2BwHHBqxFi8irU%2FVpH1bc%2BvzBOExBf3Qp8Xh403uAQa61kqGEjQiEaxt5qFC%2FwVYgCE2ijvW5gzg1ZxnTjnIEYYGsJlDJLlnBnZERH%2BttBckK0v1pgo9kFsy3TaEuZssy8Gc9MZkiAsdWu8U5rWEcM4HAONOUxr0yQAXfvZaSFBgxzYwo%2Bdvwaug6xRZ%2Fa8c970PehCimMMWCaaJeCK9iyT%2FsPCVU1%2BauOljCf%2Bv83bQeHizDF2cO9BjqkATH4bhBlcsUkxpJbITRyGREvaEU8n7Lqs15p%2FmKoNXgJ1fEa0wVVrM%2Bp3JlK07nFwCj%2FauqkB8%2Btxb9IaoYopnPlsBc9wK8VWLVme6esSegd%2FV5OezenwndipdoGlA2lwJ2Yd8kMexu%2B%2Fdv%2But2UpFUaYH3OpHkAh8zpaw4AktU%2BYJO1ckoDL0LoAWCDUU5VZNj%2BpFzWVR6zUwi42OGpzK5Pgsk7&X-Amz-Signature=7833e08740266c1a7f4c9869845eeb20c796f6ed4972c47b0f512b4ecaf40025&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO676NEH%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDh8eOkYCAjjI1qkiTmo2kYE8AbGDIhRY2HGztPVnRFqgIhAPQNglnuzBcwIQT4bqSyqZO3Sl3tABb2leRNLHyWGakNKv8DCE0QABoMNjM3NDIzMTgzODA1Igx9%2BCyLmOMUWJCKaScq3APMINtQkbLGmtxObx6CNwio4EWV%2Fd%2F1ieaU9aaCHayTx0QClpN6NvJ4k5KeJxpzI8Zryty6R6oVq%2Fg2sBdTp4%2BlW0MTsgECLshwEdHhEybK60l%2BQKgDi2xfHJ4mhjJ4H0%2BdIOMYyyOkPK1dLTbrjMwCzB58npX8yiTKSIAXhFdxc67SKKazTlIyzGyBK%2Fzdk9ZrgmtrC%2FncN9fztxul7D5n9jGXlrXachy6DXeM%2FTA7AZxCnUJo3LeN94h9trgZ7M%2B5wPTjVwufJQw4P2JrMDBDrKcXv1nNOKe3tEE9eFBx%2FogoYK%2Bwf9g0gsX5qFZ3cUIFgFe0ONGOqicFV%2BGDvgrSku0xH8UMawqS5JtOudkml24VJYR6z%2Fk%2ByUpM5XH64I0BgyfvXGAu95q%2BwHHBqxFi8irU%2FVpH1bc%2BvzBOExBf3Qp8Xh403uAQa61kqGEjQiEaxt5qFC%2FwVYgCE2ijvW5gzg1ZxnTjnIEYYGsJlDJLlnBnZERH%2BttBckK0v1pgo9kFsy3TaEuZssy8Gc9MZkiAsdWu8U5rWEcM4HAONOUxr0yQAXfvZaSFBgxzYwo%2Bdvwaug6xRZ%2Fa8c970PehCimMMWCaaJeCK9iyT%2FsPCVU1%2BauOljCf%2Bv83bQeHizDF2cO9BjqkATH4bhBlcsUkxpJbITRyGREvaEU8n7Lqs15p%2FmKoNXgJ1fEa0wVVrM%2Bp3JlK07nFwCj%2FauqkB8%2Btxb9IaoYopnPlsBc9wK8VWLVme6esSegd%2FV5OezenwndipdoGlA2lwJ2Yd8kMexu%2B%2Fdv%2But2UpFUaYH3OpHkAh8zpaw4AktU%2BYJO1ckoDL0LoAWCDUU5VZNj%2BpFzWVR6zUwi42OGpzK5Pgsk7&X-Amz-Signature=9f3b5bd18cda9e55584e8bcc21d4542137478300553d5fd119ad514f42b10e1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO676NEH%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDh8eOkYCAjjI1qkiTmo2kYE8AbGDIhRY2HGztPVnRFqgIhAPQNglnuzBcwIQT4bqSyqZO3Sl3tABb2leRNLHyWGakNKv8DCE0QABoMNjM3NDIzMTgzODA1Igx9%2BCyLmOMUWJCKaScq3APMINtQkbLGmtxObx6CNwio4EWV%2Fd%2F1ieaU9aaCHayTx0QClpN6NvJ4k5KeJxpzI8Zryty6R6oVq%2Fg2sBdTp4%2BlW0MTsgECLshwEdHhEybK60l%2BQKgDi2xfHJ4mhjJ4H0%2BdIOMYyyOkPK1dLTbrjMwCzB58npX8yiTKSIAXhFdxc67SKKazTlIyzGyBK%2Fzdk9ZrgmtrC%2FncN9fztxul7D5n9jGXlrXachy6DXeM%2FTA7AZxCnUJo3LeN94h9trgZ7M%2B5wPTjVwufJQw4P2JrMDBDrKcXv1nNOKe3tEE9eFBx%2FogoYK%2Bwf9g0gsX5qFZ3cUIFgFe0ONGOqicFV%2BGDvgrSku0xH8UMawqS5JtOudkml24VJYR6z%2Fk%2ByUpM5XH64I0BgyfvXGAu95q%2BwHHBqxFi8irU%2FVpH1bc%2BvzBOExBf3Qp8Xh403uAQa61kqGEjQiEaxt5qFC%2FwVYgCE2ijvW5gzg1ZxnTjnIEYYGsJlDJLlnBnZERH%2BttBckK0v1pgo9kFsy3TaEuZssy8Gc9MZkiAsdWu8U5rWEcM4HAONOUxr0yQAXfvZaSFBgxzYwo%2Bdvwaug6xRZ%2Fa8c970PehCimMMWCaaJeCK9iyT%2FsPCVU1%2BauOljCf%2Bv83bQeHizDF2cO9BjqkATH4bhBlcsUkxpJbITRyGREvaEU8n7Lqs15p%2FmKoNXgJ1fEa0wVVrM%2Bp3JlK07nFwCj%2FauqkB8%2Btxb9IaoYopnPlsBc9wK8VWLVme6esSegd%2FV5OezenwndipdoGlA2lwJ2Yd8kMexu%2B%2Fdv%2But2UpFUaYH3OpHkAh8zpaw4AktU%2BYJO1ckoDL0LoAWCDUU5VZNj%2BpFzWVR6zUwi42OGpzK5Pgsk7&X-Amz-Signature=1c5128008125b6ca6031d8c62bb3107c9f5ae2932e9bdbe9c7fff0f63334d678&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
