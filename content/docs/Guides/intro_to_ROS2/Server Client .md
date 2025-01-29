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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH5CRRYM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICox5J%2BOdwgpwqUalWM%2FFbk0ZctfDkX3EAjGGmBDhIF9AiAXSf%2FccOC%2Fd5GR4sLZ3zs1pRYMbCZUGBz1pBSzqDa2GiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9YbW7m%2FP1KEx4wSsKtwD6qoqH2HemA0LHkK8X3fa0pw5sGQTnNCxrFw4kBNpqBjFAi0i6WuIjkVhWmM41mUcc28PWaNwPrEftDmJPzQJdPHXb1X6MQ4FbEfpM%2F9w4GaPkonLoXdUqcegwJtr5QTxg4dqFvAY%2BW9iZA7qxcV4SYA2imAO%2BUol9sU8xvBvz3PZT9%2BqImZcu3Lfk1ptZ5wrjDDaSpKnfxX5I293Ih%2Bo5DtqDWXTCG8lKKUts9asm%2FrsWTMnNcovSwV9IA5V5sDwMAPu6X4ut%2Fqjh6fGvLcQ%2Fetm56B2NrmVzQCfhf9SbcUrjas%2FZkaX%2BR3AJ%2FitvnmKO2ziffgKTQ49H1XObPSm2X2Lc9srwAsMKECmd2ukQibRGVVOhOfwCvy%2BiRDG6VkRH2C1CBfBKeEInfLVdSPkN9tzpLVjWh3vaTX02rFlojc4ulvMQQZjSzJIx%2B1UHQpTBwWvjFMZ3GkxeX%2B%2BzWLS%2BYLMgCdSWD31vqJ2dJIts2Khp4jo%2BPk%2Fz0UP4hLrLKXEf%2BoxxX5uLvVpiuAj081rQGEHvvhMrR%2B2HxmQwzIl9mCNrodtsHqP8uIYSgt9hDXop6lFjdzMztuKkorOTEYBk40LWQD6G4Bso12Iwy3I7K8mnQo3EhfZe5pp3RIwjMzovAY6pgGtk1D3cQ8YM3Do%2BDqDu7cRFBvp4sMjE5a5l2k%2FaBqVrws4CUu64VH0SMyr%2Fs6nQya7RPpycnIlrCX2Fq1%2FaculmjWXMw7rFixdx9PfJRYCv6Wk0ivoySlr1GgobuSE9Skld%2Fi0h4SztUqEQ0PByCnWslydmX41kxUQlDi1rQ25Pkqzb%2B7TpRcdmqNX4dSe8JMmuobblsLTWUIXpzGKsi9sYy5W3QWF&X-Amz-Signature=ce3a4a1ac1764834c398d992fa5b183daeaee67471ba5eb40a133e727ae4d58b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH5CRRYM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICox5J%2BOdwgpwqUalWM%2FFbk0ZctfDkX3EAjGGmBDhIF9AiAXSf%2FccOC%2Fd5GR4sLZ3zs1pRYMbCZUGBz1pBSzqDa2GiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9YbW7m%2FP1KEx4wSsKtwD6qoqH2HemA0LHkK8X3fa0pw5sGQTnNCxrFw4kBNpqBjFAi0i6WuIjkVhWmM41mUcc28PWaNwPrEftDmJPzQJdPHXb1X6MQ4FbEfpM%2F9w4GaPkonLoXdUqcegwJtr5QTxg4dqFvAY%2BW9iZA7qxcV4SYA2imAO%2BUol9sU8xvBvz3PZT9%2BqImZcu3Lfk1ptZ5wrjDDaSpKnfxX5I293Ih%2Bo5DtqDWXTCG8lKKUts9asm%2FrsWTMnNcovSwV9IA5V5sDwMAPu6X4ut%2Fqjh6fGvLcQ%2Fetm56B2NrmVzQCfhf9SbcUrjas%2FZkaX%2BR3AJ%2FitvnmKO2ziffgKTQ49H1XObPSm2X2Lc9srwAsMKECmd2ukQibRGVVOhOfwCvy%2BiRDG6VkRH2C1CBfBKeEInfLVdSPkN9tzpLVjWh3vaTX02rFlojc4ulvMQQZjSzJIx%2B1UHQpTBwWvjFMZ3GkxeX%2B%2BzWLS%2BYLMgCdSWD31vqJ2dJIts2Khp4jo%2BPk%2Fz0UP4hLrLKXEf%2BoxxX5uLvVpiuAj081rQGEHvvhMrR%2B2HxmQwzIl9mCNrodtsHqP8uIYSgt9hDXop6lFjdzMztuKkorOTEYBk40LWQD6G4Bso12Iwy3I7K8mnQo3EhfZe5pp3RIwjMzovAY6pgGtk1D3cQ8YM3Do%2BDqDu7cRFBvp4sMjE5a5l2k%2FaBqVrws4CUu64VH0SMyr%2Fs6nQya7RPpycnIlrCX2Fq1%2FaculmjWXMw7rFixdx9PfJRYCv6Wk0ivoySlr1GgobuSE9Skld%2Fi0h4SztUqEQ0PByCnWslydmX41kxUQlDi1rQ25Pkqzb%2B7TpRcdmqNX4dSe8JMmuobblsLTWUIXpzGKsi9sYy5W3QWF&X-Amz-Signature=77890d1a43431ecc212559c9cd226a29852b9788d31e1ab3980e02b38972d750&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH5CRRYM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICox5J%2BOdwgpwqUalWM%2FFbk0ZctfDkX3EAjGGmBDhIF9AiAXSf%2FccOC%2Fd5GR4sLZ3zs1pRYMbCZUGBz1pBSzqDa2GiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9YbW7m%2FP1KEx4wSsKtwD6qoqH2HemA0LHkK8X3fa0pw5sGQTnNCxrFw4kBNpqBjFAi0i6WuIjkVhWmM41mUcc28PWaNwPrEftDmJPzQJdPHXb1X6MQ4FbEfpM%2F9w4GaPkonLoXdUqcegwJtr5QTxg4dqFvAY%2BW9iZA7qxcV4SYA2imAO%2BUol9sU8xvBvz3PZT9%2BqImZcu3Lfk1ptZ5wrjDDaSpKnfxX5I293Ih%2Bo5DtqDWXTCG8lKKUts9asm%2FrsWTMnNcovSwV9IA5V5sDwMAPu6X4ut%2Fqjh6fGvLcQ%2Fetm56B2NrmVzQCfhf9SbcUrjas%2FZkaX%2BR3AJ%2FitvnmKO2ziffgKTQ49H1XObPSm2X2Lc9srwAsMKECmd2ukQibRGVVOhOfwCvy%2BiRDG6VkRH2C1CBfBKeEInfLVdSPkN9tzpLVjWh3vaTX02rFlojc4ulvMQQZjSzJIx%2B1UHQpTBwWvjFMZ3GkxeX%2B%2BzWLS%2BYLMgCdSWD31vqJ2dJIts2Khp4jo%2BPk%2Fz0UP4hLrLKXEf%2BoxxX5uLvVpiuAj081rQGEHvvhMrR%2B2HxmQwzIl9mCNrodtsHqP8uIYSgt9hDXop6lFjdzMztuKkorOTEYBk40LWQD6G4Bso12Iwy3I7K8mnQo3EhfZe5pp3RIwjMzovAY6pgGtk1D3cQ8YM3Do%2BDqDu7cRFBvp4sMjE5a5l2k%2FaBqVrws4CUu64VH0SMyr%2Fs6nQya7RPpycnIlrCX2Fq1%2FaculmjWXMw7rFixdx9PfJRYCv6Wk0ivoySlr1GgobuSE9Skld%2Fi0h4SztUqEQ0PByCnWslydmX41kxUQlDi1rQ25Pkqzb%2B7TpRcdmqNX4dSe8JMmuobblsLTWUIXpzGKsi9sYy5W3QWF&X-Amz-Signature=f146a03aeceb64e15accbc66f5cf19c4d1a6d5e52d6787b7e5166163529afc1c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH5CRRYM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICox5J%2BOdwgpwqUalWM%2FFbk0ZctfDkX3EAjGGmBDhIF9AiAXSf%2FccOC%2Fd5GR4sLZ3zs1pRYMbCZUGBz1pBSzqDa2GiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9YbW7m%2FP1KEx4wSsKtwD6qoqH2HemA0LHkK8X3fa0pw5sGQTnNCxrFw4kBNpqBjFAi0i6WuIjkVhWmM41mUcc28PWaNwPrEftDmJPzQJdPHXb1X6MQ4FbEfpM%2F9w4GaPkonLoXdUqcegwJtr5QTxg4dqFvAY%2BW9iZA7qxcV4SYA2imAO%2BUol9sU8xvBvz3PZT9%2BqImZcu3Lfk1ptZ5wrjDDaSpKnfxX5I293Ih%2Bo5DtqDWXTCG8lKKUts9asm%2FrsWTMnNcovSwV9IA5V5sDwMAPu6X4ut%2Fqjh6fGvLcQ%2Fetm56B2NrmVzQCfhf9SbcUrjas%2FZkaX%2BR3AJ%2FitvnmKO2ziffgKTQ49H1XObPSm2X2Lc9srwAsMKECmd2ukQibRGVVOhOfwCvy%2BiRDG6VkRH2C1CBfBKeEInfLVdSPkN9tzpLVjWh3vaTX02rFlojc4ulvMQQZjSzJIx%2B1UHQpTBwWvjFMZ3GkxeX%2B%2BzWLS%2BYLMgCdSWD31vqJ2dJIts2Khp4jo%2BPk%2Fz0UP4hLrLKXEf%2BoxxX5uLvVpiuAj081rQGEHvvhMrR%2B2HxmQwzIl9mCNrodtsHqP8uIYSgt9hDXop6lFjdzMztuKkorOTEYBk40LWQD6G4Bso12Iwy3I7K8mnQo3EhfZe5pp3RIwjMzovAY6pgGtk1D3cQ8YM3Do%2BDqDu7cRFBvp4sMjE5a5l2k%2FaBqVrws4CUu64VH0SMyr%2Fs6nQya7RPpycnIlrCX2Fq1%2FaculmjWXMw7rFixdx9PfJRYCv6Wk0ivoySlr1GgobuSE9Skld%2Fi0h4SztUqEQ0PByCnWslydmX41kxUQlDi1rQ25Pkqzb%2B7TpRcdmqNX4dSe8JMmuobblsLTWUIXpzGKsi9sYy5W3QWF&X-Amz-Signature=5130734e34dbcb6f9f7ef22fb1b4c0cd69a3423ac9faf454e5b036f8c0feabaa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH5CRRYM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICox5J%2BOdwgpwqUalWM%2FFbk0ZctfDkX3EAjGGmBDhIF9AiAXSf%2FccOC%2Fd5GR4sLZ3zs1pRYMbCZUGBz1pBSzqDa2GiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9YbW7m%2FP1KEx4wSsKtwD6qoqH2HemA0LHkK8X3fa0pw5sGQTnNCxrFw4kBNpqBjFAi0i6WuIjkVhWmM41mUcc28PWaNwPrEftDmJPzQJdPHXb1X6MQ4FbEfpM%2F9w4GaPkonLoXdUqcegwJtr5QTxg4dqFvAY%2BW9iZA7qxcV4SYA2imAO%2BUol9sU8xvBvz3PZT9%2BqImZcu3Lfk1ptZ5wrjDDaSpKnfxX5I293Ih%2Bo5DtqDWXTCG8lKKUts9asm%2FrsWTMnNcovSwV9IA5V5sDwMAPu6X4ut%2Fqjh6fGvLcQ%2Fetm56B2NrmVzQCfhf9SbcUrjas%2FZkaX%2BR3AJ%2FitvnmKO2ziffgKTQ49H1XObPSm2X2Lc9srwAsMKECmd2ukQibRGVVOhOfwCvy%2BiRDG6VkRH2C1CBfBKeEInfLVdSPkN9tzpLVjWh3vaTX02rFlojc4ulvMQQZjSzJIx%2B1UHQpTBwWvjFMZ3GkxeX%2B%2BzWLS%2BYLMgCdSWD31vqJ2dJIts2Khp4jo%2BPk%2Fz0UP4hLrLKXEf%2BoxxX5uLvVpiuAj081rQGEHvvhMrR%2B2HxmQwzIl9mCNrodtsHqP8uIYSgt9hDXop6lFjdzMztuKkorOTEYBk40LWQD6G4Bso12Iwy3I7K8mnQo3EhfZe5pp3RIwjMzovAY6pgGtk1D3cQ8YM3Do%2BDqDu7cRFBvp4sMjE5a5l2k%2FaBqVrws4CUu64VH0SMyr%2Fs6nQya7RPpycnIlrCX2Fq1%2FaculmjWXMw7rFixdx9PfJRYCv6Wk0ivoySlr1GgobuSE9Skld%2Fi0h4SztUqEQ0PByCnWslydmX41kxUQlDi1rQ25Pkqzb%2B7TpRcdmqNX4dSe8JMmuobblsLTWUIXpzGKsi9sYy5W3QWF&X-Amz-Signature=65ce1ee176a84b7e1ccefd4e5c57aabc075dbbe8048e2d77d5d4bbce37102b41&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
