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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPUWRCB2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCICjItz0tejiHa3HuiIYbgtnHVo2w7pw5WkJcbNBmHmihAiADSvGsbXvho%2BSJyu%2F%2Bn6Rp94p%2B9wFJ4yg8q9d28DqW2yqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BYYJ8JTn60euio3MKtwDbFG9awsl7c2n6FCOBO%2FOXsyK2fE%2BmppIYHVTc94DorpLjfVGP3Q6rEoTP%2FCwyT2LcCn1DMg6f83jOoo94aY230A4vIHeyCOYLdeDmTsLqeKf%2FI2fBLL5s9g%2BMIxr%2Bv1wACJVaatqj6C7jEGrQ1w3sxelDGrorPU1nnUV7eUPfO827T1Xzmq4GFHksbx5Z%2B9W58UJvGCUbl%2Bz4BCFjVlSCeoqypBGYlQW2zhmrWc2cvGMgQcq5KTe3P2cs8ZME0xHAGZQFKqMl%2FvIEhtc%2BTPtBtqrrpRp4gYoO4KJFs1PFb0ZtLaDetC7ZaZ0Sn6Auwpg5oxxfJWjJdBjuKX9W%2FvnHbR5YDRpPgooPlBA2EVEUR88sP%2F5G3zwUmE5N6awme3VdUb4Jl1iEhE4rjG8LtzNoYIfEjWIJ8%2FQ915ZA9ZbgafbJvg0oN3AXDO0PkS6axVrQXk7nmPYEur3QyL75W1GbcyoFiNYuEOUZV01V5J7YsJKqj4W4KkynPAnHBrviTUXzuig3wHCn0qDFxV5z34clgfFrlu4K1XNZrvloMh%2FPfpIJUzekigvfilAj5E1iPnr4JEktku1JEf4snY4LBEYO%2BmGhyp0Ql26uCUUR%2FZCZpROztZrs47RZavJ54IwjofgvwY6pgFPqUWX01Oz4KHsvdjQi8oJe0e4HC6bm2JJwms5TN%2F45YMgxL5%2BolB18fr7iL6f4NcMPLc103uh19Ki2hjxDqX7x3oxeWPtklXwU5fKQ%2BCf%2BwJzaGDc5AfdwiVrVlKZLz166O5tb5rYfley7M71%2FUXlJZOwO3AMnKPCL7KxORmm7pcOX50YG9SfHXVCwN%2BwqX8Dj%2B6sVkAcf8m0RF8rYsdbKXFaJZJf&X-Amz-Signature=ca84ac6462b5051471b2bc8980b3eb5e034c94fec60032fa5d4c68d4f90d8d79&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPUWRCB2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCICjItz0tejiHa3HuiIYbgtnHVo2w7pw5WkJcbNBmHmihAiADSvGsbXvho%2BSJyu%2F%2Bn6Rp94p%2B9wFJ4yg8q9d28DqW2yqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BYYJ8JTn60euio3MKtwDbFG9awsl7c2n6FCOBO%2FOXsyK2fE%2BmppIYHVTc94DorpLjfVGP3Q6rEoTP%2FCwyT2LcCn1DMg6f83jOoo94aY230A4vIHeyCOYLdeDmTsLqeKf%2FI2fBLL5s9g%2BMIxr%2Bv1wACJVaatqj6C7jEGrQ1w3sxelDGrorPU1nnUV7eUPfO827T1Xzmq4GFHksbx5Z%2B9W58UJvGCUbl%2Bz4BCFjVlSCeoqypBGYlQW2zhmrWc2cvGMgQcq5KTe3P2cs8ZME0xHAGZQFKqMl%2FvIEhtc%2BTPtBtqrrpRp4gYoO4KJFs1PFb0ZtLaDetC7ZaZ0Sn6Auwpg5oxxfJWjJdBjuKX9W%2FvnHbR5YDRpPgooPlBA2EVEUR88sP%2F5G3zwUmE5N6awme3VdUb4Jl1iEhE4rjG8LtzNoYIfEjWIJ8%2FQ915ZA9ZbgafbJvg0oN3AXDO0PkS6axVrQXk7nmPYEur3QyL75W1GbcyoFiNYuEOUZV01V5J7YsJKqj4W4KkynPAnHBrviTUXzuig3wHCn0qDFxV5z34clgfFrlu4K1XNZrvloMh%2FPfpIJUzekigvfilAj5E1iPnr4JEktku1JEf4snY4LBEYO%2BmGhyp0Ql26uCUUR%2FZCZpROztZrs47RZavJ54IwjofgvwY6pgFPqUWX01Oz4KHsvdjQi8oJe0e4HC6bm2JJwms5TN%2F45YMgxL5%2BolB18fr7iL6f4NcMPLc103uh19Ki2hjxDqX7x3oxeWPtklXwU5fKQ%2BCf%2BwJzaGDc5AfdwiVrVlKZLz166O5tb5rYfley7M71%2FUXlJZOwO3AMnKPCL7KxORmm7pcOX50YG9SfHXVCwN%2BwqX8Dj%2B6sVkAcf8m0RF8rYsdbKXFaJZJf&X-Amz-Signature=9443be27f27d0c25d6dacb03918497c726a4636ba60711c7c38a294f82a0095e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPUWRCB2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCICjItz0tejiHa3HuiIYbgtnHVo2w7pw5WkJcbNBmHmihAiADSvGsbXvho%2BSJyu%2F%2Bn6Rp94p%2B9wFJ4yg8q9d28DqW2yqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BYYJ8JTn60euio3MKtwDbFG9awsl7c2n6FCOBO%2FOXsyK2fE%2BmppIYHVTc94DorpLjfVGP3Q6rEoTP%2FCwyT2LcCn1DMg6f83jOoo94aY230A4vIHeyCOYLdeDmTsLqeKf%2FI2fBLL5s9g%2BMIxr%2Bv1wACJVaatqj6C7jEGrQ1w3sxelDGrorPU1nnUV7eUPfO827T1Xzmq4GFHksbx5Z%2B9W58UJvGCUbl%2Bz4BCFjVlSCeoqypBGYlQW2zhmrWc2cvGMgQcq5KTe3P2cs8ZME0xHAGZQFKqMl%2FvIEhtc%2BTPtBtqrrpRp4gYoO4KJFs1PFb0ZtLaDetC7ZaZ0Sn6Auwpg5oxxfJWjJdBjuKX9W%2FvnHbR5YDRpPgooPlBA2EVEUR88sP%2F5G3zwUmE5N6awme3VdUb4Jl1iEhE4rjG8LtzNoYIfEjWIJ8%2FQ915ZA9ZbgafbJvg0oN3AXDO0PkS6axVrQXk7nmPYEur3QyL75W1GbcyoFiNYuEOUZV01V5J7YsJKqj4W4KkynPAnHBrviTUXzuig3wHCn0qDFxV5z34clgfFrlu4K1XNZrvloMh%2FPfpIJUzekigvfilAj5E1iPnr4JEktku1JEf4snY4LBEYO%2BmGhyp0Ql26uCUUR%2FZCZpROztZrs47RZavJ54IwjofgvwY6pgFPqUWX01Oz4KHsvdjQi8oJe0e4HC6bm2JJwms5TN%2F45YMgxL5%2BolB18fr7iL6f4NcMPLc103uh19Ki2hjxDqX7x3oxeWPtklXwU5fKQ%2BCf%2BwJzaGDc5AfdwiVrVlKZLz166O5tb5rYfley7M71%2FUXlJZOwO3AMnKPCL7KxORmm7pcOX50YG9SfHXVCwN%2BwqX8Dj%2B6sVkAcf8m0RF8rYsdbKXFaJZJf&X-Amz-Signature=8f93edc09b7b86286324f09f613136bd76bfce6388b8ecd2d3a2c0776e59faf7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPUWRCB2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCICjItz0tejiHa3HuiIYbgtnHVo2w7pw5WkJcbNBmHmihAiADSvGsbXvho%2BSJyu%2F%2Bn6Rp94p%2B9wFJ4yg8q9d28DqW2yqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BYYJ8JTn60euio3MKtwDbFG9awsl7c2n6FCOBO%2FOXsyK2fE%2BmppIYHVTc94DorpLjfVGP3Q6rEoTP%2FCwyT2LcCn1DMg6f83jOoo94aY230A4vIHeyCOYLdeDmTsLqeKf%2FI2fBLL5s9g%2BMIxr%2Bv1wACJVaatqj6C7jEGrQ1w3sxelDGrorPU1nnUV7eUPfO827T1Xzmq4GFHksbx5Z%2B9W58UJvGCUbl%2Bz4BCFjVlSCeoqypBGYlQW2zhmrWc2cvGMgQcq5KTe3P2cs8ZME0xHAGZQFKqMl%2FvIEhtc%2BTPtBtqrrpRp4gYoO4KJFs1PFb0ZtLaDetC7ZaZ0Sn6Auwpg5oxxfJWjJdBjuKX9W%2FvnHbR5YDRpPgooPlBA2EVEUR88sP%2F5G3zwUmE5N6awme3VdUb4Jl1iEhE4rjG8LtzNoYIfEjWIJ8%2FQ915ZA9ZbgafbJvg0oN3AXDO0PkS6axVrQXk7nmPYEur3QyL75W1GbcyoFiNYuEOUZV01V5J7YsJKqj4W4KkynPAnHBrviTUXzuig3wHCn0qDFxV5z34clgfFrlu4K1XNZrvloMh%2FPfpIJUzekigvfilAj5E1iPnr4JEktku1JEf4snY4LBEYO%2BmGhyp0Ql26uCUUR%2FZCZpROztZrs47RZavJ54IwjofgvwY6pgFPqUWX01Oz4KHsvdjQi8oJe0e4HC6bm2JJwms5TN%2F45YMgxL5%2BolB18fr7iL6f4NcMPLc103uh19Ki2hjxDqX7x3oxeWPtklXwU5fKQ%2BCf%2BwJzaGDc5AfdwiVrVlKZLz166O5tb5rYfley7M71%2FUXlJZOwO3AMnKPCL7KxORmm7pcOX50YG9SfHXVCwN%2BwqX8Dj%2B6sVkAcf8m0RF8rYsdbKXFaJZJf&X-Amz-Signature=1c4f42f27a6cfc89921d330bb7064f87db1751ea97400d40b651b0a47c953755&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPUWRCB2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCICjItz0tejiHa3HuiIYbgtnHVo2w7pw5WkJcbNBmHmihAiADSvGsbXvho%2BSJyu%2F%2Bn6Rp94p%2B9wFJ4yg8q9d28DqW2yqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BYYJ8JTn60euio3MKtwDbFG9awsl7c2n6FCOBO%2FOXsyK2fE%2BmppIYHVTc94DorpLjfVGP3Q6rEoTP%2FCwyT2LcCn1DMg6f83jOoo94aY230A4vIHeyCOYLdeDmTsLqeKf%2FI2fBLL5s9g%2BMIxr%2Bv1wACJVaatqj6C7jEGrQ1w3sxelDGrorPU1nnUV7eUPfO827T1Xzmq4GFHksbx5Z%2B9W58UJvGCUbl%2Bz4BCFjVlSCeoqypBGYlQW2zhmrWc2cvGMgQcq5KTe3P2cs8ZME0xHAGZQFKqMl%2FvIEhtc%2BTPtBtqrrpRp4gYoO4KJFs1PFb0ZtLaDetC7ZaZ0Sn6Auwpg5oxxfJWjJdBjuKX9W%2FvnHbR5YDRpPgooPlBA2EVEUR88sP%2F5G3zwUmE5N6awme3VdUb4Jl1iEhE4rjG8LtzNoYIfEjWIJ8%2FQ915ZA9ZbgafbJvg0oN3AXDO0PkS6axVrQXk7nmPYEur3QyL75W1GbcyoFiNYuEOUZV01V5J7YsJKqj4W4KkynPAnHBrviTUXzuig3wHCn0qDFxV5z34clgfFrlu4K1XNZrvloMh%2FPfpIJUzekigvfilAj5E1iPnr4JEktku1JEf4snY4LBEYO%2BmGhyp0Ql26uCUUR%2FZCZpROztZrs47RZavJ54IwjofgvwY6pgFPqUWX01Oz4KHsvdjQi8oJe0e4HC6bm2JJwms5TN%2F45YMgxL5%2BolB18fr7iL6f4NcMPLc103uh19Ki2hjxDqX7x3oxeWPtklXwU5fKQ%2BCf%2BwJzaGDc5AfdwiVrVlKZLz166O5tb5rYfley7M71%2FUXlJZOwO3AMnKPCL7KxORmm7pcOX50YG9SfHXVCwN%2BwqX8Dj%2B6sVkAcf8m0RF8rYsdbKXFaJZJf&X-Amz-Signature=95f42865ba7fb66b31aba35bab3f20d439e78f07592f197237c0aeb06c1aaac6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
