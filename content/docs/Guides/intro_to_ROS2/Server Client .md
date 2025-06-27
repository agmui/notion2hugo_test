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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUCM3AEW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIWzx6z%2Btni%2FUhSGFG98gzjXJFb9WT%2F2tZG1vlmHbQuQIhAIRO540Xv6RIy6bpcIeLXVjbkoqBLGjK748Q1kM7m6fKKv8DCHwQABoMNjM3NDIzMTgzODA1IgxXKcxojHZh6kQxTCMq3APCRlnXlj%2FR%2FT005VGIjhCAHSoEsnrz0CQ1fk%2BUQeQ9U724s1y55MTKRxSxYTAhI%2F35omNiFvsiapd%2FoTKpmj750On3GQZCdbT5BHQlNtgqvcHphYetPsWNwrQiB7A1uKJC4uFjYUpCH1Ue8R51jOKDYF0wT6v6nL0rR1%2Fb11jmAniltoc%2BCiRTf9Grk8s6y3EiSw0FRrxrDGg1zdUhZGRC9vcO7aYWW76yyGZ40GwLLoY0jyaJWlzxbpDtwauogaymi%2BAmer7YQcejYfMbdGVQze1Lr6MUzDvoTEs4N4Eym41ImWYWjt%2BNGhRw6XzpX4Tf776VrWRRToZ3L%2F%2FQZ8Wf7cOJjDMvbmmQEeTcGw6h%2B1GAkZL7hm%2FIt9jNtr9Y57bHn3%2FhIQC13IO9gPCYGYaqoz2WQQC77uCUGKLF5rSfR%2FX0p6HIIgBiVCq%2FTDFgCVPvlO1fR1SnlDJJT%2B2Vl0boHWaqQBCBrHQh1SZ%2BLnYaze3wlEfzWemR8XAq1HlWw41oNYZIxkDPq9GYy%2BD7pd%2FGtr4m5CcN33lbQEQdW3bcobuE0o4r43CKp1JF9Ilbi8wpA25KK%2BzaKfTagFrmRsbV88eUWtuPl3Vms62cWwhVcXVG%2F0BKdJTTXixm7jC5yvvCBjqkAU3oAJ7kCf8yDWDbmYXHR1jBMUc1aIg5Vvgui6ahV7mld4CkYwysT8K5IEoqIwyAEG37dWM6UhHupvMJz6nUOerxK8as3RYi7nCrEzc42ntYhyvDvEPr7xMTL6464nf1qUFwxoShTqdk%2BeN0W8SXK0pVY25UzfipfGAdDx3rsi3eTIv43vMRWpHp%2FBQQchBrJ3v%2FR4Spi5g%2Fid5EvC2ZjSnSnqqu&X-Amz-Signature=c6c009c550c7b88bab97d810385410fbf8aebaacc74eea27ba21abf15491e3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUCM3AEW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIWzx6z%2Btni%2FUhSGFG98gzjXJFb9WT%2F2tZG1vlmHbQuQIhAIRO540Xv6RIy6bpcIeLXVjbkoqBLGjK748Q1kM7m6fKKv8DCHwQABoMNjM3NDIzMTgzODA1IgxXKcxojHZh6kQxTCMq3APCRlnXlj%2FR%2FT005VGIjhCAHSoEsnrz0CQ1fk%2BUQeQ9U724s1y55MTKRxSxYTAhI%2F35omNiFvsiapd%2FoTKpmj750On3GQZCdbT5BHQlNtgqvcHphYetPsWNwrQiB7A1uKJC4uFjYUpCH1Ue8R51jOKDYF0wT6v6nL0rR1%2Fb11jmAniltoc%2BCiRTf9Grk8s6y3EiSw0FRrxrDGg1zdUhZGRC9vcO7aYWW76yyGZ40GwLLoY0jyaJWlzxbpDtwauogaymi%2BAmer7YQcejYfMbdGVQze1Lr6MUzDvoTEs4N4Eym41ImWYWjt%2BNGhRw6XzpX4Tf776VrWRRToZ3L%2F%2FQZ8Wf7cOJjDMvbmmQEeTcGw6h%2B1GAkZL7hm%2FIt9jNtr9Y57bHn3%2FhIQC13IO9gPCYGYaqoz2WQQC77uCUGKLF5rSfR%2FX0p6HIIgBiVCq%2FTDFgCVPvlO1fR1SnlDJJT%2B2Vl0boHWaqQBCBrHQh1SZ%2BLnYaze3wlEfzWemR8XAq1HlWw41oNYZIxkDPq9GYy%2BD7pd%2FGtr4m5CcN33lbQEQdW3bcobuE0o4r43CKp1JF9Ilbi8wpA25KK%2BzaKfTagFrmRsbV88eUWtuPl3Vms62cWwhVcXVG%2F0BKdJTTXixm7jC5yvvCBjqkAU3oAJ7kCf8yDWDbmYXHR1jBMUc1aIg5Vvgui6ahV7mld4CkYwysT8K5IEoqIwyAEG37dWM6UhHupvMJz6nUOerxK8as3RYi7nCrEzc42ntYhyvDvEPr7xMTL6464nf1qUFwxoShTqdk%2BeN0W8SXK0pVY25UzfipfGAdDx3rsi3eTIv43vMRWpHp%2FBQQchBrJ3v%2FR4Spi5g%2Fid5EvC2ZjSnSnqqu&X-Amz-Signature=19bb375ad9d8edb561d9fa8c3c46055356d532822eea56ba3179755b04506c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUCM3AEW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIWzx6z%2Btni%2FUhSGFG98gzjXJFb9WT%2F2tZG1vlmHbQuQIhAIRO540Xv6RIy6bpcIeLXVjbkoqBLGjK748Q1kM7m6fKKv8DCHwQABoMNjM3NDIzMTgzODA1IgxXKcxojHZh6kQxTCMq3APCRlnXlj%2FR%2FT005VGIjhCAHSoEsnrz0CQ1fk%2BUQeQ9U724s1y55MTKRxSxYTAhI%2F35omNiFvsiapd%2FoTKpmj750On3GQZCdbT5BHQlNtgqvcHphYetPsWNwrQiB7A1uKJC4uFjYUpCH1Ue8R51jOKDYF0wT6v6nL0rR1%2Fb11jmAniltoc%2BCiRTf9Grk8s6y3EiSw0FRrxrDGg1zdUhZGRC9vcO7aYWW76yyGZ40GwLLoY0jyaJWlzxbpDtwauogaymi%2BAmer7YQcejYfMbdGVQze1Lr6MUzDvoTEs4N4Eym41ImWYWjt%2BNGhRw6XzpX4Tf776VrWRRToZ3L%2F%2FQZ8Wf7cOJjDMvbmmQEeTcGw6h%2B1GAkZL7hm%2FIt9jNtr9Y57bHn3%2FhIQC13IO9gPCYGYaqoz2WQQC77uCUGKLF5rSfR%2FX0p6HIIgBiVCq%2FTDFgCVPvlO1fR1SnlDJJT%2B2Vl0boHWaqQBCBrHQh1SZ%2BLnYaze3wlEfzWemR8XAq1HlWw41oNYZIxkDPq9GYy%2BD7pd%2FGtr4m5CcN33lbQEQdW3bcobuE0o4r43CKp1JF9Ilbi8wpA25KK%2BzaKfTagFrmRsbV88eUWtuPl3Vms62cWwhVcXVG%2F0BKdJTTXixm7jC5yvvCBjqkAU3oAJ7kCf8yDWDbmYXHR1jBMUc1aIg5Vvgui6ahV7mld4CkYwysT8K5IEoqIwyAEG37dWM6UhHupvMJz6nUOerxK8as3RYi7nCrEzc42ntYhyvDvEPr7xMTL6464nf1qUFwxoShTqdk%2BeN0W8SXK0pVY25UzfipfGAdDx3rsi3eTIv43vMRWpHp%2FBQQchBrJ3v%2FR4Spi5g%2Fid5EvC2ZjSnSnqqu&X-Amz-Signature=6e86c612f8f220a670d07c9df0efedbbf2b0abe83667504aba26302bc034aa45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUCM3AEW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIWzx6z%2Btni%2FUhSGFG98gzjXJFb9WT%2F2tZG1vlmHbQuQIhAIRO540Xv6RIy6bpcIeLXVjbkoqBLGjK748Q1kM7m6fKKv8DCHwQABoMNjM3NDIzMTgzODA1IgxXKcxojHZh6kQxTCMq3APCRlnXlj%2FR%2FT005VGIjhCAHSoEsnrz0CQ1fk%2BUQeQ9U724s1y55MTKRxSxYTAhI%2F35omNiFvsiapd%2FoTKpmj750On3GQZCdbT5BHQlNtgqvcHphYetPsWNwrQiB7A1uKJC4uFjYUpCH1Ue8R51jOKDYF0wT6v6nL0rR1%2Fb11jmAniltoc%2BCiRTf9Grk8s6y3EiSw0FRrxrDGg1zdUhZGRC9vcO7aYWW76yyGZ40GwLLoY0jyaJWlzxbpDtwauogaymi%2BAmer7YQcejYfMbdGVQze1Lr6MUzDvoTEs4N4Eym41ImWYWjt%2BNGhRw6XzpX4Tf776VrWRRToZ3L%2F%2FQZ8Wf7cOJjDMvbmmQEeTcGw6h%2B1GAkZL7hm%2FIt9jNtr9Y57bHn3%2FhIQC13IO9gPCYGYaqoz2WQQC77uCUGKLF5rSfR%2FX0p6HIIgBiVCq%2FTDFgCVPvlO1fR1SnlDJJT%2B2Vl0boHWaqQBCBrHQh1SZ%2BLnYaze3wlEfzWemR8XAq1HlWw41oNYZIxkDPq9GYy%2BD7pd%2FGtr4m5CcN33lbQEQdW3bcobuE0o4r43CKp1JF9Ilbi8wpA25KK%2BzaKfTagFrmRsbV88eUWtuPl3Vms62cWwhVcXVG%2F0BKdJTTXixm7jC5yvvCBjqkAU3oAJ7kCf8yDWDbmYXHR1jBMUc1aIg5Vvgui6ahV7mld4CkYwysT8K5IEoqIwyAEG37dWM6UhHupvMJz6nUOerxK8as3RYi7nCrEzc42ntYhyvDvEPr7xMTL6464nf1qUFwxoShTqdk%2BeN0W8SXK0pVY25UzfipfGAdDx3rsi3eTIv43vMRWpHp%2FBQQchBrJ3v%2FR4Spi5g%2Fid5EvC2ZjSnSnqqu&X-Amz-Signature=26fc87b36c03975a8226c0c4ac1fd339424f05063aa9146a87d583759897331f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUCM3AEW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIWzx6z%2Btni%2FUhSGFG98gzjXJFb9WT%2F2tZG1vlmHbQuQIhAIRO540Xv6RIy6bpcIeLXVjbkoqBLGjK748Q1kM7m6fKKv8DCHwQABoMNjM3NDIzMTgzODA1IgxXKcxojHZh6kQxTCMq3APCRlnXlj%2FR%2FT005VGIjhCAHSoEsnrz0CQ1fk%2BUQeQ9U724s1y55MTKRxSxYTAhI%2F35omNiFvsiapd%2FoTKpmj750On3GQZCdbT5BHQlNtgqvcHphYetPsWNwrQiB7A1uKJC4uFjYUpCH1Ue8R51jOKDYF0wT6v6nL0rR1%2Fb11jmAniltoc%2BCiRTf9Grk8s6y3EiSw0FRrxrDGg1zdUhZGRC9vcO7aYWW76yyGZ40GwLLoY0jyaJWlzxbpDtwauogaymi%2BAmer7YQcejYfMbdGVQze1Lr6MUzDvoTEs4N4Eym41ImWYWjt%2BNGhRw6XzpX4Tf776VrWRRToZ3L%2F%2FQZ8Wf7cOJjDMvbmmQEeTcGw6h%2B1GAkZL7hm%2FIt9jNtr9Y57bHn3%2FhIQC13IO9gPCYGYaqoz2WQQC77uCUGKLF5rSfR%2FX0p6HIIgBiVCq%2FTDFgCVPvlO1fR1SnlDJJT%2B2Vl0boHWaqQBCBrHQh1SZ%2BLnYaze3wlEfzWemR8XAq1HlWw41oNYZIxkDPq9GYy%2BD7pd%2FGtr4m5CcN33lbQEQdW3bcobuE0o4r43CKp1JF9Ilbi8wpA25KK%2BzaKfTagFrmRsbV88eUWtuPl3Vms62cWwhVcXVG%2F0BKdJTTXixm7jC5yvvCBjqkAU3oAJ7kCf8yDWDbmYXHR1jBMUc1aIg5Vvgui6ahV7mld4CkYwysT8K5IEoqIwyAEG37dWM6UhHupvMJz6nUOerxK8as3RYi7nCrEzc42ntYhyvDvEPr7xMTL6464nf1qUFwxoShTqdk%2BeN0W8SXK0pVY25UzfipfGAdDx3rsi3eTIv43vMRWpHp%2FBQQchBrJ3v%2FR4Spi5g%2Fid5EvC2ZjSnSnqqu&X-Amz-Signature=7c331b59a86ee7d27b09b422ebde0721095e05b9b5130b5ba307a3202365d511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
