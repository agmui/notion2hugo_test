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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673OUJ2TN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDs9lNCkfBykkv%2FliLe2fqFM38hS5VWSPwEiA4L1K9ARQIgB%2FmJT2ctwIln8u3ZJOEJH4xXXIimwi%2FqFavx8Ddgj8YqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbdxR9Oy0qXnKW1IyrcA1kPXWBaYZnDgeprANqE8OXJZgSg%2FbWS5aROuE8zpWLgfeGOfv1uzZkggnX4OSMaaRZb%2FBe%2Bzb5zf8rg4ycKdrx3kMfas5f%2BaCy3Y%2Fp4nuzGMxCU8s5NEc8Mz6IsM9dSpICUkW4ZXxgdNtUTR4Hv6XI1mVXInYSY6T3Nj4UMJ5cX3tfv2BNUfpyLWvrnDEynubIFCwPJuTFpgLbE66z9c25sVUvryl1jdZ1zWm%2BaEDoGH1ybEbBE%2B1w%2BnlUd24IOG4IXHVAKCPscVnqQFnFA8WNI6%2FAU8POgVc8dpRNgS2n%2BExuxJbMFWRlW2SqCBxWNqzmeDecvueWS9dMSybEX4BbXiJ3o11ULi1D05SUNLztyPWwFQaYTfTzraYXojBYbmwXv4W0Jt1KQf7TeQ8MdFhO23QOsvGK0eWjIjKWdIqv%2BL2s3azzEphXvookOd1Owegyij43cX2iQeSA%2FkN8ZHS7pfl4h3F26xnjXdrf1lsIHc0id8BnOdFPV3%2BEEa6DIClBA2ThggxvYRnkS50n26SShDEXqYZnV7CT7LF8o6GRYR%2BoOdnCFLuv2lVxUlXpfzy5EH05ACaax4OUN0yoLhxJeD39Z0HBtosS3PUpOw5qsQJ6mCjU9%2FLrluJSGMPCUqL8GOqUBGxbupGwifQsB9bPPuuQuIPyBLDex3t1bMjcO5BRTt7iaU9aZmpc1YRId%2FOyXSkHhsKJxsfMTGLS5EKGTRDKlbC9CsSQVfDIjXMjhPT29xsb0IynRBRoyyTHVOnCwJL38q%2FuLzdJwH3Zl3wa9gTtTBpwDRlWIDs%2BIejt05LqVuNnxlQ4k6vv%2FgPXDufuVh45Hfy7kHo8c54%2BrRyHr4G9wulqxu7q%2F&X-Amz-Signature=92d33c7ca8921d0ca6efcc1c862ff2ec35612eae1bacadbb09f42d7c8d5ea458&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673OUJ2TN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDs9lNCkfBykkv%2FliLe2fqFM38hS5VWSPwEiA4L1K9ARQIgB%2FmJT2ctwIln8u3ZJOEJH4xXXIimwi%2FqFavx8Ddgj8YqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbdxR9Oy0qXnKW1IyrcA1kPXWBaYZnDgeprANqE8OXJZgSg%2FbWS5aROuE8zpWLgfeGOfv1uzZkggnX4OSMaaRZb%2FBe%2Bzb5zf8rg4ycKdrx3kMfas5f%2BaCy3Y%2Fp4nuzGMxCU8s5NEc8Mz6IsM9dSpICUkW4ZXxgdNtUTR4Hv6XI1mVXInYSY6T3Nj4UMJ5cX3tfv2BNUfpyLWvrnDEynubIFCwPJuTFpgLbE66z9c25sVUvryl1jdZ1zWm%2BaEDoGH1ybEbBE%2B1w%2BnlUd24IOG4IXHVAKCPscVnqQFnFA8WNI6%2FAU8POgVc8dpRNgS2n%2BExuxJbMFWRlW2SqCBxWNqzmeDecvueWS9dMSybEX4BbXiJ3o11ULi1D05SUNLztyPWwFQaYTfTzraYXojBYbmwXv4W0Jt1KQf7TeQ8MdFhO23QOsvGK0eWjIjKWdIqv%2BL2s3azzEphXvookOd1Owegyij43cX2iQeSA%2FkN8ZHS7pfl4h3F26xnjXdrf1lsIHc0id8BnOdFPV3%2BEEa6DIClBA2ThggxvYRnkS50n26SShDEXqYZnV7CT7LF8o6GRYR%2BoOdnCFLuv2lVxUlXpfzy5EH05ACaax4OUN0yoLhxJeD39Z0HBtosS3PUpOw5qsQJ6mCjU9%2FLrluJSGMPCUqL8GOqUBGxbupGwifQsB9bPPuuQuIPyBLDex3t1bMjcO5BRTt7iaU9aZmpc1YRId%2FOyXSkHhsKJxsfMTGLS5EKGTRDKlbC9CsSQVfDIjXMjhPT29xsb0IynRBRoyyTHVOnCwJL38q%2FuLzdJwH3Zl3wa9gTtTBpwDRlWIDs%2BIejt05LqVuNnxlQ4k6vv%2FgPXDufuVh45Hfy7kHo8c54%2BrRyHr4G9wulqxu7q%2F&X-Amz-Signature=bec229cd38680e97579e201603ded4e6c062769d16b42a552bfe3ca222643807&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673OUJ2TN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDs9lNCkfBykkv%2FliLe2fqFM38hS5VWSPwEiA4L1K9ARQIgB%2FmJT2ctwIln8u3ZJOEJH4xXXIimwi%2FqFavx8Ddgj8YqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbdxR9Oy0qXnKW1IyrcA1kPXWBaYZnDgeprANqE8OXJZgSg%2FbWS5aROuE8zpWLgfeGOfv1uzZkggnX4OSMaaRZb%2FBe%2Bzb5zf8rg4ycKdrx3kMfas5f%2BaCy3Y%2Fp4nuzGMxCU8s5NEc8Mz6IsM9dSpICUkW4ZXxgdNtUTR4Hv6XI1mVXInYSY6T3Nj4UMJ5cX3tfv2BNUfpyLWvrnDEynubIFCwPJuTFpgLbE66z9c25sVUvryl1jdZ1zWm%2BaEDoGH1ybEbBE%2B1w%2BnlUd24IOG4IXHVAKCPscVnqQFnFA8WNI6%2FAU8POgVc8dpRNgS2n%2BExuxJbMFWRlW2SqCBxWNqzmeDecvueWS9dMSybEX4BbXiJ3o11ULi1D05SUNLztyPWwFQaYTfTzraYXojBYbmwXv4W0Jt1KQf7TeQ8MdFhO23QOsvGK0eWjIjKWdIqv%2BL2s3azzEphXvookOd1Owegyij43cX2iQeSA%2FkN8ZHS7pfl4h3F26xnjXdrf1lsIHc0id8BnOdFPV3%2BEEa6DIClBA2ThggxvYRnkS50n26SShDEXqYZnV7CT7LF8o6GRYR%2BoOdnCFLuv2lVxUlXpfzy5EH05ACaax4OUN0yoLhxJeD39Z0HBtosS3PUpOw5qsQJ6mCjU9%2FLrluJSGMPCUqL8GOqUBGxbupGwifQsB9bPPuuQuIPyBLDex3t1bMjcO5BRTt7iaU9aZmpc1YRId%2FOyXSkHhsKJxsfMTGLS5EKGTRDKlbC9CsSQVfDIjXMjhPT29xsb0IynRBRoyyTHVOnCwJL38q%2FuLzdJwH3Zl3wa9gTtTBpwDRlWIDs%2BIejt05LqVuNnxlQ4k6vv%2FgPXDufuVh45Hfy7kHo8c54%2BrRyHr4G9wulqxu7q%2F&X-Amz-Signature=3d5fbaf4d72cf1bdb7f6d925c011951d26e844f19aa3d2bb0f126f7933bf0f71&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673OUJ2TN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDs9lNCkfBykkv%2FliLe2fqFM38hS5VWSPwEiA4L1K9ARQIgB%2FmJT2ctwIln8u3ZJOEJH4xXXIimwi%2FqFavx8Ddgj8YqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbdxR9Oy0qXnKW1IyrcA1kPXWBaYZnDgeprANqE8OXJZgSg%2FbWS5aROuE8zpWLgfeGOfv1uzZkggnX4OSMaaRZb%2FBe%2Bzb5zf8rg4ycKdrx3kMfas5f%2BaCy3Y%2Fp4nuzGMxCU8s5NEc8Mz6IsM9dSpICUkW4ZXxgdNtUTR4Hv6XI1mVXInYSY6T3Nj4UMJ5cX3tfv2BNUfpyLWvrnDEynubIFCwPJuTFpgLbE66z9c25sVUvryl1jdZ1zWm%2BaEDoGH1ybEbBE%2B1w%2BnlUd24IOG4IXHVAKCPscVnqQFnFA8WNI6%2FAU8POgVc8dpRNgS2n%2BExuxJbMFWRlW2SqCBxWNqzmeDecvueWS9dMSybEX4BbXiJ3o11ULi1D05SUNLztyPWwFQaYTfTzraYXojBYbmwXv4W0Jt1KQf7TeQ8MdFhO23QOsvGK0eWjIjKWdIqv%2BL2s3azzEphXvookOd1Owegyij43cX2iQeSA%2FkN8ZHS7pfl4h3F26xnjXdrf1lsIHc0id8BnOdFPV3%2BEEa6DIClBA2ThggxvYRnkS50n26SShDEXqYZnV7CT7LF8o6GRYR%2BoOdnCFLuv2lVxUlXpfzy5EH05ACaax4OUN0yoLhxJeD39Z0HBtosS3PUpOw5qsQJ6mCjU9%2FLrluJSGMPCUqL8GOqUBGxbupGwifQsB9bPPuuQuIPyBLDex3t1bMjcO5BRTt7iaU9aZmpc1YRId%2FOyXSkHhsKJxsfMTGLS5EKGTRDKlbC9CsSQVfDIjXMjhPT29xsb0IynRBRoyyTHVOnCwJL38q%2FuLzdJwH3Zl3wa9gTtTBpwDRlWIDs%2BIejt05LqVuNnxlQ4k6vv%2FgPXDufuVh45Hfy7kHo8c54%2BrRyHr4G9wulqxu7q%2F&X-Amz-Signature=a2173bf57a581a578ee1bd0482c8894f7b5d55452261a69066d3e9a229a109be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673OUJ2TN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDs9lNCkfBykkv%2FliLe2fqFM38hS5VWSPwEiA4L1K9ARQIgB%2FmJT2ctwIln8u3ZJOEJH4xXXIimwi%2FqFavx8Ddgj8YqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbdxR9Oy0qXnKW1IyrcA1kPXWBaYZnDgeprANqE8OXJZgSg%2FbWS5aROuE8zpWLgfeGOfv1uzZkggnX4OSMaaRZb%2FBe%2Bzb5zf8rg4ycKdrx3kMfas5f%2BaCy3Y%2Fp4nuzGMxCU8s5NEc8Mz6IsM9dSpICUkW4ZXxgdNtUTR4Hv6XI1mVXInYSY6T3Nj4UMJ5cX3tfv2BNUfpyLWvrnDEynubIFCwPJuTFpgLbE66z9c25sVUvryl1jdZ1zWm%2BaEDoGH1ybEbBE%2B1w%2BnlUd24IOG4IXHVAKCPscVnqQFnFA8WNI6%2FAU8POgVc8dpRNgS2n%2BExuxJbMFWRlW2SqCBxWNqzmeDecvueWS9dMSybEX4BbXiJ3o11ULi1D05SUNLztyPWwFQaYTfTzraYXojBYbmwXv4W0Jt1KQf7TeQ8MdFhO23QOsvGK0eWjIjKWdIqv%2BL2s3azzEphXvookOd1Owegyij43cX2iQeSA%2FkN8ZHS7pfl4h3F26xnjXdrf1lsIHc0id8BnOdFPV3%2BEEa6DIClBA2ThggxvYRnkS50n26SShDEXqYZnV7CT7LF8o6GRYR%2BoOdnCFLuv2lVxUlXpfzy5EH05ACaax4OUN0yoLhxJeD39Z0HBtosS3PUpOw5qsQJ6mCjU9%2FLrluJSGMPCUqL8GOqUBGxbupGwifQsB9bPPuuQuIPyBLDex3t1bMjcO5BRTt7iaU9aZmpc1YRId%2FOyXSkHhsKJxsfMTGLS5EKGTRDKlbC9CsSQVfDIjXMjhPT29xsb0IynRBRoyyTHVOnCwJL38q%2FuLzdJwH3Zl3wa9gTtTBpwDRlWIDs%2BIejt05LqVuNnxlQ4k6vv%2FgPXDufuVh45Hfy7kHo8c54%2BrRyHr4G9wulqxu7q%2F&X-Amz-Signature=3b5c14aa92d78e03b909e432f67e866188b14b5bbc0ecb0edf4f88bef5e220bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
