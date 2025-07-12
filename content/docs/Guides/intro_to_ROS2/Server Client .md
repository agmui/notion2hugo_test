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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDH4KJ24%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6wKcLxyewYQ3feXQNqXFQlEW4FuL138jdPlGayVeSiAiBtEBBNmZXHv9gr3%2FFJUk%2FpeZa4Bp9xJ4w6rUWj%2Bkr54CqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMChc4UiQGYm%2BGj6RuKtwDhRaa63G1D7pe11z0I%2BaCjAbfI6a3TwZ0z4CIEsDi7ROsLxsWpLE%2FW2gUA3U4JXKNyYF7N7CH1snIscDVCGbj5yKCWst%2BFenIjXbbmJMPiu%2BEiTxRZGqJCnWXxSL79poAIby%2B6%2FY%2BnoDshXhUAoGS8eBRVp5v1n%2FjKbdBJSSPW3bef9RBfTk0nj4BRtC8OWP3ei99l%2FTR4zg4mi%2Fjz3r4obSGu6mZQgEXRUYBigGzXe7NoNNo1eMi%2FdNYKLPBquz7rD%2FeqtzzHSpl%2BZdo7MkJx5S9iPAMoQ8E7WhRYVE8ZR97PyHIvRPp6OCg8llMUN%2BHqGJPO9IsKAvpL%2BPt1Qz%2FGzAobokXggyMScAYLBJ%2BkLL7sNSx%2Bm8jUr%2B64CFnCgzKpDo2RGiNouVXTp1e2bHfgnSSQ1EcMVylqX6kxkTIJvRekMga3%2Bj8Uib3514Q0jaQ%2F1tP9tbNmUPGKkhqgpggXmY0q5Tusemx6yoYehTa8kSgfZo3QNjq6glf1l9eNxY1cfFPxPQJh3eiuHCiIsJjrMxCHf3OJ3pU6yJkZvvkiLiLgG6MjbLn1sKU9LnjPogaYsIT8qRmXt4uJ3wWc5NqU2QHF0%2BKXZ6YOJOZxm20h5MX37FVv1CsqsQ48nMwu8%2FHwwY6pgHsivxe9jDeGCgv%2B4%2Byx6tZ9yjYSmRCgcJnhgE0yS1MdWNi1mYBKWRkOMsUfpQtAm%2By0VP8%2FE76YsHDhse82SH2xXZnMtMVuC37RNz3V9VP65GbYV5aJWlYZKHBVT1Q48XVjbjLFE5upglvvgyWdirZesSKOaeJ0fmhjVxRz1md5MSrK%2FXBgPvQ8iD7t1acXX7QCO9xPzAVInKCirDu2vY%2F3IfMr%2BIK&X-Amz-Signature=0d6bc1ab06be70056b6d34b88222ef50e251ead82dd22459680e558f3c0d35c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDH4KJ24%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6wKcLxyewYQ3feXQNqXFQlEW4FuL138jdPlGayVeSiAiBtEBBNmZXHv9gr3%2FFJUk%2FpeZa4Bp9xJ4w6rUWj%2Bkr54CqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMChc4UiQGYm%2BGj6RuKtwDhRaa63G1D7pe11z0I%2BaCjAbfI6a3TwZ0z4CIEsDi7ROsLxsWpLE%2FW2gUA3U4JXKNyYF7N7CH1snIscDVCGbj5yKCWst%2BFenIjXbbmJMPiu%2BEiTxRZGqJCnWXxSL79poAIby%2B6%2FY%2BnoDshXhUAoGS8eBRVp5v1n%2FjKbdBJSSPW3bef9RBfTk0nj4BRtC8OWP3ei99l%2FTR4zg4mi%2Fjz3r4obSGu6mZQgEXRUYBigGzXe7NoNNo1eMi%2FdNYKLPBquz7rD%2FeqtzzHSpl%2BZdo7MkJx5S9iPAMoQ8E7WhRYVE8ZR97PyHIvRPp6OCg8llMUN%2BHqGJPO9IsKAvpL%2BPt1Qz%2FGzAobokXggyMScAYLBJ%2BkLL7sNSx%2Bm8jUr%2B64CFnCgzKpDo2RGiNouVXTp1e2bHfgnSSQ1EcMVylqX6kxkTIJvRekMga3%2Bj8Uib3514Q0jaQ%2F1tP9tbNmUPGKkhqgpggXmY0q5Tusemx6yoYehTa8kSgfZo3QNjq6glf1l9eNxY1cfFPxPQJh3eiuHCiIsJjrMxCHf3OJ3pU6yJkZvvkiLiLgG6MjbLn1sKU9LnjPogaYsIT8qRmXt4uJ3wWc5NqU2QHF0%2BKXZ6YOJOZxm20h5MX37FVv1CsqsQ48nMwu8%2FHwwY6pgHsivxe9jDeGCgv%2B4%2Byx6tZ9yjYSmRCgcJnhgE0yS1MdWNi1mYBKWRkOMsUfpQtAm%2By0VP8%2FE76YsHDhse82SH2xXZnMtMVuC37RNz3V9VP65GbYV5aJWlYZKHBVT1Q48XVjbjLFE5upglvvgyWdirZesSKOaeJ0fmhjVxRz1md5MSrK%2FXBgPvQ8iD7t1acXX7QCO9xPzAVInKCirDu2vY%2F3IfMr%2BIK&X-Amz-Signature=491fba21da224f0e458dfc9b223b4ec308ee5deb8be6f7ce9f2784d9ee8f3b2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDH4KJ24%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6wKcLxyewYQ3feXQNqXFQlEW4FuL138jdPlGayVeSiAiBtEBBNmZXHv9gr3%2FFJUk%2FpeZa4Bp9xJ4w6rUWj%2Bkr54CqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMChc4UiQGYm%2BGj6RuKtwDhRaa63G1D7pe11z0I%2BaCjAbfI6a3TwZ0z4CIEsDi7ROsLxsWpLE%2FW2gUA3U4JXKNyYF7N7CH1snIscDVCGbj5yKCWst%2BFenIjXbbmJMPiu%2BEiTxRZGqJCnWXxSL79poAIby%2B6%2FY%2BnoDshXhUAoGS8eBRVp5v1n%2FjKbdBJSSPW3bef9RBfTk0nj4BRtC8OWP3ei99l%2FTR4zg4mi%2Fjz3r4obSGu6mZQgEXRUYBigGzXe7NoNNo1eMi%2FdNYKLPBquz7rD%2FeqtzzHSpl%2BZdo7MkJx5S9iPAMoQ8E7WhRYVE8ZR97PyHIvRPp6OCg8llMUN%2BHqGJPO9IsKAvpL%2BPt1Qz%2FGzAobokXggyMScAYLBJ%2BkLL7sNSx%2Bm8jUr%2B64CFnCgzKpDo2RGiNouVXTp1e2bHfgnSSQ1EcMVylqX6kxkTIJvRekMga3%2Bj8Uib3514Q0jaQ%2F1tP9tbNmUPGKkhqgpggXmY0q5Tusemx6yoYehTa8kSgfZo3QNjq6glf1l9eNxY1cfFPxPQJh3eiuHCiIsJjrMxCHf3OJ3pU6yJkZvvkiLiLgG6MjbLn1sKU9LnjPogaYsIT8qRmXt4uJ3wWc5NqU2QHF0%2BKXZ6YOJOZxm20h5MX37FVv1CsqsQ48nMwu8%2FHwwY6pgHsivxe9jDeGCgv%2B4%2Byx6tZ9yjYSmRCgcJnhgE0yS1MdWNi1mYBKWRkOMsUfpQtAm%2By0VP8%2FE76YsHDhse82SH2xXZnMtMVuC37RNz3V9VP65GbYV5aJWlYZKHBVT1Q48XVjbjLFE5upglvvgyWdirZesSKOaeJ0fmhjVxRz1md5MSrK%2FXBgPvQ8iD7t1acXX7QCO9xPzAVInKCirDu2vY%2F3IfMr%2BIK&X-Amz-Signature=73e579ba6205c426813e982857e275362fa6149c633ed6b8c255f4e252d734cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDH4KJ24%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6wKcLxyewYQ3feXQNqXFQlEW4FuL138jdPlGayVeSiAiBtEBBNmZXHv9gr3%2FFJUk%2FpeZa4Bp9xJ4w6rUWj%2Bkr54CqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMChc4UiQGYm%2BGj6RuKtwDhRaa63G1D7pe11z0I%2BaCjAbfI6a3TwZ0z4CIEsDi7ROsLxsWpLE%2FW2gUA3U4JXKNyYF7N7CH1snIscDVCGbj5yKCWst%2BFenIjXbbmJMPiu%2BEiTxRZGqJCnWXxSL79poAIby%2B6%2FY%2BnoDshXhUAoGS8eBRVp5v1n%2FjKbdBJSSPW3bef9RBfTk0nj4BRtC8OWP3ei99l%2FTR4zg4mi%2Fjz3r4obSGu6mZQgEXRUYBigGzXe7NoNNo1eMi%2FdNYKLPBquz7rD%2FeqtzzHSpl%2BZdo7MkJx5S9iPAMoQ8E7WhRYVE8ZR97PyHIvRPp6OCg8llMUN%2BHqGJPO9IsKAvpL%2BPt1Qz%2FGzAobokXggyMScAYLBJ%2BkLL7sNSx%2Bm8jUr%2B64CFnCgzKpDo2RGiNouVXTp1e2bHfgnSSQ1EcMVylqX6kxkTIJvRekMga3%2Bj8Uib3514Q0jaQ%2F1tP9tbNmUPGKkhqgpggXmY0q5Tusemx6yoYehTa8kSgfZo3QNjq6glf1l9eNxY1cfFPxPQJh3eiuHCiIsJjrMxCHf3OJ3pU6yJkZvvkiLiLgG6MjbLn1sKU9LnjPogaYsIT8qRmXt4uJ3wWc5NqU2QHF0%2BKXZ6YOJOZxm20h5MX37FVv1CsqsQ48nMwu8%2FHwwY6pgHsivxe9jDeGCgv%2B4%2Byx6tZ9yjYSmRCgcJnhgE0yS1MdWNi1mYBKWRkOMsUfpQtAm%2By0VP8%2FE76YsHDhse82SH2xXZnMtMVuC37RNz3V9VP65GbYV5aJWlYZKHBVT1Q48XVjbjLFE5upglvvgyWdirZesSKOaeJ0fmhjVxRz1md5MSrK%2FXBgPvQ8iD7t1acXX7QCO9xPzAVInKCirDu2vY%2F3IfMr%2BIK&X-Amz-Signature=94ddad667b355cd6c91d15918f2d45814599394cc923ee8adc6ade600bfbeb0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDH4KJ24%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6wKcLxyewYQ3feXQNqXFQlEW4FuL138jdPlGayVeSiAiBtEBBNmZXHv9gr3%2FFJUk%2FpeZa4Bp9xJ4w6rUWj%2Bkr54CqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMChc4UiQGYm%2BGj6RuKtwDhRaa63G1D7pe11z0I%2BaCjAbfI6a3TwZ0z4CIEsDi7ROsLxsWpLE%2FW2gUA3U4JXKNyYF7N7CH1snIscDVCGbj5yKCWst%2BFenIjXbbmJMPiu%2BEiTxRZGqJCnWXxSL79poAIby%2B6%2FY%2BnoDshXhUAoGS8eBRVp5v1n%2FjKbdBJSSPW3bef9RBfTk0nj4BRtC8OWP3ei99l%2FTR4zg4mi%2Fjz3r4obSGu6mZQgEXRUYBigGzXe7NoNNo1eMi%2FdNYKLPBquz7rD%2FeqtzzHSpl%2BZdo7MkJx5S9iPAMoQ8E7WhRYVE8ZR97PyHIvRPp6OCg8llMUN%2BHqGJPO9IsKAvpL%2BPt1Qz%2FGzAobokXggyMScAYLBJ%2BkLL7sNSx%2Bm8jUr%2B64CFnCgzKpDo2RGiNouVXTp1e2bHfgnSSQ1EcMVylqX6kxkTIJvRekMga3%2Bj8Uib3514Q0jaQ%2F1tP9tbNmUPGKkhqgpggXmY0q5Tusemx6yoYehTa8kSgfZo3QNjq6glf1l9eNxY1cfFPxPQJh3eiuHCiIsJjrMxCHf3OJ3pU6yJkZvvkiLiLgG6MjbLn1sKU9LnjPogaYsIT8qRmXt4uJ3wWc5NqU2QHF0%2BKXZ6YOJOZxm20h5MX37FVv1CsqsQ48nMwu8%2FHwwY6pgHsivxe9jDeGCgv%2B4%2Byx6tZ9yjYSmRCgcJnhgE0yS1MdWNi1mYBKWRkOMsUfpQtAm%2By0VP8%2FE76YsHDhse82SH2xXZnMtMVuC37RNz3V9VP65GbYV5aJWlYZKHBVT1Q48XVjbjLFE5upglvvgyWdirZesSKOaeJ0fmhjVxRz1md5MSrK%2FXBgPvQ8iD7t1acXX7QCO9xPzAVInKCirDu2vY%2F3IfMr%2BIK&X-Amz-Signature=789f46e7038a33cd5c4be7959b48d6e34f9a989f50e29414686b7de14ade284a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
