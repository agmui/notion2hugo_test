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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEJA7BJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2F0A%2BOcFPIww4mPlp1aUDt5wtoT2iU9Xmu9BW5hYFpVAiBuuY3il1tn87y%2BK3UanGSXFr1yyu6yCskLP8me%2BihMMCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFTw5EWcGaShG94bKKtwD5VrDwmOAl3djxew%2FqBYSxi0iYIDsfiNKxK8f2S8sD570r44PcofNVp9AD0VSLySKICbbRhewmfyoOeF33bZJlhbuBpnoyEHVE9PIA2Nh7wmBGMbnDNRsqpkDye6J2%2FCIGtJqgw2EaWRoHk61%2BQKLnwq5ec2NlV%2B3%2F2Cb3jIeroO0Wf%2Be67yqAkXWozm9X61Qs8qNU46L%2F3larrFtGRUD4OpoSrHYpOUPefk%2BiNgEITDcOnOVdlW2B9CluUbkitZdFbVRva1V7VAH7riGqYHnKZrdFZRoSaHV8WlGLzl1somy8WA7L%2FVLcCrAIMNaJIbkotXlQN%2FmVtVtFV5HaUNyVkY%2FCTZbi2kySD%2FGB3aO4yTWpLjH0kxOwipMDecJDHmE3iXxHp4k%2FHgT0oM%2FflsYL2Ar0tCtUbL8sj%2BoFOmE5g%2B7Nb%2FFyQar62DZxUP5MImfdx87SCZjiRI4nSh9BZ7zUKHUw87h2j1i00SpmVAt0VEisHP3CJc8UNGNAE%2FKtQyW3FCQwXJxRYhMx%2FK7eWYzqjyfwrqpKJoCQE93%2FQ%2Bcv%2FvXBZHFxgCrX%2Fy2CteBzMUhpKls63oCbI0jRnaA%2FL2PzTMdGR1zxCGn14BtY%2BmsGRQlxvpa%2FfKSTpZOmTww0v71wAY6pgEPQzlCSWXNeVRO%2Fjt%2Fcl3I5NTKw79wC69TsB6%2FDzUN%2BaYmmuQg7NRm70ZYQKS%2BSeUUtUJu1pzSP8njNVUSCkGmP6R47eyj2Ow2tEnhed8onDZBIS9sHo2EnjPC%2Ffh%2BjL0qbNzt3BcUU%2FSQU4evg%2FxVNzUt807PuYj68FjIIeRbzcpcp9A7AnGmMiwAZOTveMA3XiWoZJxfGd7lNySYElF9ue%2FdA8cM&X-Amz-Signature=35195b6b0a19f1f398143c19ed8cc8134c4c301462632ff4f5010f27a68ce30b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEJA7BJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2F0A%2BOcFPIww4mPlp1aUDt5wtoT2iU9Xmu9BW5hYFpVAiBuuY3il1tn87y%2BK3UanGSXFr1yyu6yCskLP8me%2BihMMCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFTw5EWcGaShG94bKKtwD5VrDwmOAl3djxew%2FqBYSxi0iYIDsfiNKxK8f2S8sD570r44PcofNVp9AD0VSLySKICbbRhewmfyoOeF33bZJlhbuBpnoyEHVE9PIA2Nh7wmBGMbnDNRsqpkDye6J2%2FCIGtJqgw2EaWRoHk61%2BQKLnwq5ec2NlV%2B3%2F2Cb3jIeroO0Wf%2Be67yqAkXWozm9X61Qs8qNU46L%2F3larrFtGRUD4OpoSrHYpOUPefk%2BiNgEITDcOnOVdlW2B9CluUbkitZdFbVRva1V7VAH7riGqYHnKZrdFZRoSaHV8WlGLzl1somy8WA7L%2FVLcCrAIMNaJIbkotXlQN%2FmVtVtFV5HaUNyVkY%2FCTZbi2kySD%2FGB3aO4yTWpLjH0kxOwipMDecJDHmE3iXxHp4k%2FHgT0oM%2FflsYL2Ar0tCtUbL8sj%2BoFOmE5g%2B7Nb%2FFyQar62DZxUP5MImfdx87SCZjiRI4nSh9BZ7zUKHUw87h2j1i00SpmVAt0VEisHP3CJc8UNGNAE%2FKtQyW3FCQwXJxRYhMx%2FK7eWYzqjyfwrqpKJoCQE93%2FQ%2Bcv%2FvXBZHFxgCrX%2Fy2CteBzMUhpKls63oCbI0jRnaA%2FL2PzTMdGR1zxCGn14BtY%2BmsGRQlxvpa%2FfKSTpZOmTww0v71wAY6pgEPQzlCSWXNeVRO%2Fjt%2Fcl3I5NTKw79wC69TsB6%2FDzUN%2BaYmmuQg7NRm70ZYQKS%2BSeUUtUJu1pzSP8njNVUSCkGmP6R47eyj2Ow2tEnhed8onDZBIS9sHo2EnjPC%2Ffh%2BjL0qbNzt3BcUU%2FSQU4evg%2FxVNzUt807PuYj68FjIIeRbzcpcp9A7AnGmMiwAZOTveMA3XiWoZJxfGd7lNySYElF9ue%2FdA8cM&X-Amz-Signature=16eaf3ebc47fbc0c977d8663ab9da85313d0b5773a91ca5525ec6a2042f0fc68&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEJA7BJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2F0A%2BOcFPIww4mPlp1aUDt5wtoT2iU9Xmu9BW5hYFpVAiBuuY3il1tn87y%2BK3UanGSXFr1yyu6yCskLP8me%2BihMMCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFTw5EWcGaShG94bKKtwD5VrDwmOAl3djxew%2FqBYSxi0iYIDsfiNKxK8f2S8sD570r44PcofNVp9AD0VSLySKICbbRhewmfyoOeF33bZJlhbuBpnoyEHVE9PIA2Nh7wmBGMbnDNRsqpkDye6J2%2FCIGtJqgw2EaWRoHk61%2BQKLnwq5ec2NlV%2B3%2F2Cb3jIeroO0Wf%2Be67yqAkXWozm9X61Qs8qNU46L%2F3larrFtGRUD4OpoSrHYpOUPefk%2BiNgEITDcOnOVdlW2B9CluUbkitZdFbVRva1V7VAH7riGqYHnKZrdFZRoSaHV8WlGLzl1somy8WA7L%2FVLcCrAIMNaJIbkotXlQN%2FmVtVtFV5HaUNyVkY%2FCTZbi2kySD%2FGB3aO4yTWpLjH0kxOwipMDecJDHmE3iXxHp4k%2FHgT0oM%2FflsYL2Ar0tCtUbL8sj%2BoFOmE5g%2B7Nb%2FFyQar62DZxUP5MImfdx87SCZjiRI4nSh9BZ7zUKHUw87h2j1i00SpmVAt0VEisHP3CJc8UNGNAE%2FKtQyW3FCQwXJxRYhMx%2FK7eWYzqjyfwrqpKJoCQE93%2FQ%2Bcv%2FvXBZHFxgCrX%2Fy2CteBzMUhpKls63oCbI0jRnaA%2FL2PzTMdGR1zxCGn14BtY%2BmsGRQlxvpa%2FfKSTpZOmTww0v71wAY6pgEPQzlCSWXNeVRO%2Fjt%2Fcl3I5NTKw79wC69TsB6%2FDzUN%2BaYmmuQg7NRm70ZYQKS%2BSeUUtUJu1pzSP8njNVUSCkGmP6R47eyj2Ow2tEnhed8onDZBIS9sHo2EnjPC%2Ffh%2BjL0qbNzt3BcUU%2FSQU4evg%2FxVNzUt807PuYj68FjIIeRbzcpcp9A7AnGmMiwAZOTveMA3XiWoZJxfGd7lNySYElF9ue%2FdA8cM&X-Amz-Signature=550f9ddabd9e9b820e363185bccbf634f42102ed350f456bb40774e1c767d85a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEJA7BJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2F0A%2BOcFPIww4mPlp1aUDt5wtoT2iU9Xmu9BW5hYFpVAiBuuY3il1tn87y%2BK3UanGSXFr1yyu6yCskLP8me%2BihMMCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFTw5EWcGaShG94bKKtwD5VrDwmOAl3djxew%2FqBYSxi0iYIDsfiNKxK8f2S8sD570r44PcofNVp9AD0VSLySKICbbRhewmfyoOeF33bZJlhbuBpnoyEHVE9PIA2Nh7wmBGMbnDNRsqpkDye6J2%2FCIGtJqgw2EaWRoHk61%2BQKLnwq5ec2NlV%2B3%2F2Cb3jIeroO0Wf%2Be67yqAkXWozm9X61Qs8qNU46L%2F3larrFtGRUD4OpoSrHYpOUPefk%2BiNgEITDcOnOVdlW2B9CluUbkitZdFbVRva1V7VAH7riGqYHnKZrdFZRoSaHV8WlGLzl1somy8WA7L%2FVLcCrAIMNaJIbkotXlQN%2FmVtVtFV5HaUNyVkY%2FCTZbi2kySD%2FGB3aO4yTWpLjH0kxOwipMDecJDHmE3iXxHp4k%2FHgT0oM%2FflsYL2Ar0tCtUbL8sj%2BoFOmE5g%2B7Nb%2FFyQar62DZxUP5MImfdx87SCZjiRI4nSh9BZ7zUKHUw87h2j1i00SpmVAt0VEisHP3CJc8UNGNAE%2FKtQyW3FCQwXJxRYhMx%2FK7eWYzqjyfwrqpKJoCQE93%2FQ%2Bcv%2FvXBZHFxgCrX%2Fy2CteBzMUhpKls63oCbI0jRnaA%2FL2PzTMdGR1zxCGn14BtY%2BmsGRQlxvpa%2FfKSTpZOmTww0v71wAY6pgEPQzlCSWXNeVRO%2Fjt%2Fcl3I5NTKw79wC69TsB6%2FDzUN%2BaYmmuQg7NRm70ZYQKS%2BSeUUtUJu1pzSP8njNVUSCkGmP6R47eyj2Ow2tEnhed8onDZBIS9sHo2EnjPC%2Ffh%2BjL0qbNzt3BcUU%2FSQU4evg%2FxVNzUt807PuYj68FjIIeRbzcpcp9A7AnGmMiwAZOTveMA3XiWoZJxfGd7lNySYElF9ue%2FdA8cM&X-Amz-Signature=27c08552e0790bdc93ea0f7f5cbdb56e2d86c4a3d1353338bc3712dfa02ee706&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEJA7BJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2F0A%2BOcFPIww4mPlp1aUDt5wtoT2iU9Xmu9BW5hYFpVAiBuuY3il1tn87y%2BK3UanGSXFr1yyu6yCskLP8me%2BihMMCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFTw5EWcGaShG94bKKtwD5VrDwmOAl3djxew%2FqBYSxi0iYIDsfiNKxK8f2S8sD570r44PcofNVp9AD0VSLySKICbbRhewmfyoOeF33bZJlhbuBpnoyEHVE9PIA2Nh7wmBGMbnDNRsqpkDye6J2%2FCIGtJqgw2EaWRoHk61%2BQKLnwq5ec2NlV%2B3%2F2Cb3jIeroO0Wf%2Be67yqAkXWozm9X61Qs8qNU46L%2F3larrFtGRUD4OpoSrHYpOUPefk%2BiNgEITDcOnOVdlW2B9CluUbkitZdFbVRva1V7VAH7riGqYHnKZrdFZRoSaHV8WlGLzl1somy8WA7L%2FVLcCrAIMNaJIbkotXlQN%2FmVtVtFV5HaUNyVkY%2FCTZbi2kySD%2FGB3aO4yTWpLjH0kxOwipMDecJDHmE3iXxHp4k%2FHgT0oM%2FflsYL2Ar0tCtUbL8sj%2BoFOmE5g%2B7Nb%2FFyQar62DZxUP5MImfdx87SCZjiRI4nSh9BZ7zUKHUw87h2j1i00SpmVAt0VEisHP3CJc8UNGNAE%2FKtQyW3FCQwXJxRYhMx%2FK7eWYzqjyfwrqpKJoCQE93%2FQ%2Bcv%2FvXBZHFxgCrX%2Fy2CteBzMUhpKls63oCbI0jRnaA%2FL2PzTMdGR1zxCGn14BtY%2BmsGRQlxvpa%2FfKSTpZOmTww0v71wAY6pgEPQzlCSWXNeVRO%2Fjt%2Fcl3I5NTKw79wC69TsB6%2FDzUN%2BaYmmuQg7NRm70ZYQKS%2BSeUUtUJu1pzSP8njNVUSCkGmP6R47eyj2Ow2tEnhed8onDZBIS9sHo2EnjPC%2Ffh%2BjL0qbNzt3BcUU%2FSQU4evg%2FxVNzUt807PuYj68FjIIeRbzcpcp9A7AnGmMiwAZOTveMA3XiWoZJxfGd7lNySYElF9ue%2FdA8cM&X-Amz-Signature=69acee54c658f76f2b484d6aa4a66be3da0f090fee0f700aebbc70a770fd2efa&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
