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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLLPGM2U%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCzZ%2FzFn09NYTnsdORU4mVJwjv13rxIMa9%2FakV6vTrEAwIhAPIqlxqvobE%2FooF5Lu6OOHA2Y6nIQx33fCuImYpPgZwdKv8DCGYQABoMNjM3NDIzMTgzODA1Igzo6tzYclh8sbmpcTQq3AOFvR7PIGgT8BzBaO97ozAVBYGUJOFee57nStQ4eoIQVdd%2FTOfgJhCGLmdcEiJYjvn4izrSpjRWsmNCsr9xGN4e6Z2oPA9z5MtRDltyerROZThKOYNvoqmldPwyWOI8F%2Bnoiw1%2FLyqE9WGTKwo9Q1spVXvoS7PeauQR%2FDcRJVRKb2KTB0CUuUyJee4Aa58WzdqtVKP7Ie3yXY7MhbZaIVkbSj19g2ceKEmCK%2Fhem5hT6mSVvLPvMDtPjm%2FPVEtHxa0YlCUsV2ZivPyVOnieq99vamS0mvqeN2WFDgr9q85uMQONG25PRlhCQlz4rGOCjw3Aefh3s3TqXeU6G7z0EME8Kvviexg4ZsR1HO2uJCEMjyswBU8I%2F4P1VT1vSmQup5IGypALoO5nDoJT6pzWZJHMBcagsZeBCrnIppmcDMXtTcyUoUlVlLruDlusIYSayMLp0%2FCP8CyTMIM654rVBDDqla29dJ%2BS4ZSxEG4PRKpDx7G1eo97gnv3u%2F42mGwfyH%2F%2FK4QVOxRkUlYJAO468pNjidk%2Fx8nvtCiPRvBqV3m9l6IB3tqmZ1gDmgWLpaRK%2BKlUG5vYVLDZ7q1xKjMoDX%2BqUBJ8gY7Iw7CPp0f3vuXoUDkNh%2Bf%2BHwM3IuAY7DDZsOe%2BBjqkAfdfV1rCiTIWX0VdZ67KlfWcBqP7NMv16DzdzYU0RJC6dC8JezG60vP2VRFaJIPUViwQQzHMpKXUgsOMyLmHmijHTqFrjCca9KcnylzF%2ByiRIn8OnvUIfLlKz%2F1zJO7HxBKrtpS%2BQcG9INaGTmM37tkQv%2FIHiGd6y1zdKIpQZEl06%2F1GlfDc%2BuR2Ac1UEW6Okp%2FXUZ07%2FesPAxgzv0r2cwU2EoGh&X-Amz-Signature=a241119524aef5b7fbaf99a2d7f723eb46a76604dd52436498572abd80819068&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLLPGM2U%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCzZ%2FzFn09NYTnsdORU4mVJwjv13rxIMa9%2FakV6vTrEAwIhAPIqlxqvobE%2FooF5Lu6OOHA2Y6nIQx33fCuImYpPgZwdKv8DCGYQABoMNjM3NDIzMTgzODA1Igzo6tzYclh8sbmpcTQq3AOFvR7PIGgT8BzBaO97ozAVBYGUJOFee57nStQ4eoIQVdd%2FTOfgJhCGLmdcEiJYjvn4izrSpjRWsmNCsr9xGN4e6Z2oPA9z5MtRDltyerROZThKOYNvoqmldPwyWOI8F%2Bnoiw1%2FLyqE9WGTKwo9Q1spVXvoS7PeauQR%2FDcRJVRKb2KTB0CUuUyJee4Aa58WzdqtVKP7Ie3yXY7MhbZaIVkbSj19g2ceKEmCK%2Fhem5hT6mSVvLPvMDtPjm%2FPVEtHxa0YlCUsV2ZivPyVOnieq99vamS0mvqeN2WFDgr9q85uMQONG25PRlhCQlz4rGOCjw3Aefh3s3TqXeU6G7z0EME8Kvviexg4ZsR1HO2uJCEMjyswBU8I%2F4P1VT1vSmQup5IGypALoO5nDoJT6pzWZJHMBcagsZeBCrnIppmcDMXtTcyUoUlVlLruDlusIYSayMLp0%2FCP8CyTMIM654rVBDDqla29dJ%2BS4ZSxEG4PRKpDx7G1eo97gnv3u%2F42mGwfyH%2F%2FK4QVOxRkUlYJAO468pNjidk%2Fx8nvtCiPRvBqV3m9l6IB3tqmZ1gDmgWLpaRK%2BKlUG5vYVLDZ7q1xKjMoDX%2BqUBJ8gY7Iw7CPp0f3vuXoUDkNh%2Bf%2BHwM3IuAY7DDZsOe%2BBjqkAfdfV1rCiTIWX0VdZ67KlfWcBqP7NMv16DzdzYU0RJC6dC8JezG60vP2VRFaJIPUViwQQzHMpKXUgsOMyLmHmijHTqFrjCca9KcnylzF%2ByiRIn8OnvUIfLlKz%2F1zJO7HxBKrtpS%2BQcG9INaGTmM37tkQv%2FIHiGd6y1zdKIpQZEl06%2F1GlfDc%2BuR2Ac1UEW6Okp%2FXUZ07%2FesPAxgzv0r2cwU2EoGh&X-Amz-Signature=39c9e1265759fba9e52762b996ff7e90cfdc930a7486ced5854b60c4ed0152f0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLLPGM2U%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCzZ%2FzFn09NYTnsdORU4mVJwjv13rxIMa9%2FakV6vTrEAwIhAPIqlxqvobE%2FooF5Lu6OOHA2Y6nIQx33fCuImYpPgZwdKv8DCGYQABoMNjM3NDIzMTgzODA1Igzo6tzYclh8sbmpcTQq3AOFvR7PIGgT8BzBaO97ozAVBYGUJOFee57nStQ4eoIQVdd%2FTOfgJhCGLmdcEiJYjvn4izrSpjRWsmNCsr9xGN4e6Z2oPA9z5MtRDltyerROZThKOYNvoqmldPwyWOI8F%2Bnoiw1%2FLyqE9WGTKwo9Q1spVXvoS7PeauQR%2FDcRJVRKb2KTB0CUuUyJee4Aa58WzdqtVKP7Ie3yXY7MhbZaIVkbSj19g2ceKEmCK%2Fhem5hT6mSVvLPvMDtPjm%2FPVEtHxa0YlCUsV2ZivPyVOnieq99vamS0mvqeN2WFDgr9q85uMQONG25PRlhCQlz4rGOCjw3Aefh3s3TqXeU6G7z0EME8Kvviexg4ZsR1HO2uJCEMjyswBU8I%2F4P1VT1vSmQup5IGypALoO5nDoJT6pzWZJHMBcagsZeBCrnIppmcDMXtTcyUoUlVlLruDlusIYSayMLp0%2FCP8CyTMIM654rVBDDqla29dJ%2BS4ZSxEG4PRKpDx7G1eo97gnv3u%2F42mGwfyH%2F%2FK4QVOxRkUlYJAO468pNjidk%2Fx8nvtCiPRvBqV3m9l6IB3tqmZ1gDmgWLpaRK%2BKlUG5vYVLDZ7q1xKjMoDX%2BqUBJ8gY7Iw7CPp0f3vuXoUDkNh%2Bf%2BHwM3IuAY7DDZsOe%2BBjqkAfdfV1rCiTIWX0VdZ67KlfWcBqP7NMv16DzdzYU0RJC6dC8JezG60vP2VRFaJIPUViwQQzHMpKXUgsOMyLmHmijHTqFrjCca9KcnylzF%2ByiRIn8OnvUIfLlKz%2F1zJO7HxBKrtpS%2BQcG9INaGTmM37tkQv%2FIHiGd6y1zdKIpQZEl06%2F1GlfDc%2BuR2Ac1UEW6Okp%2FXUZ07%2FesPAxgzv0r2cwU2EoGh&X-Amz-Signature=16b1769024c0813e500786603f521817af920b4dde0ac0d7a03c2d75aacf318a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLLPGM2U%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCzZ%2FzFn09NYTnsdORU4mVJwjv13rxIMa9%2FakV6vTrEAwIhAPIqlxqvobE%2FooF5Lu6OOHA2Y6nIQx33fCuImYpPgZwdKv8DCGYQABoMNjM3NDIzMTgzODA1Igzo6tzYclh8sbmpcTQq3AOFvR7PIGgT8BzBaO97ozAVBYGUJOFee57nStQ4eoIQVdd%2FTOfgJhCGLmdcEiJYjvn4izrSpjRWsmNCsr9xGN4e6Z2oPA9z5MtRDltyerROZThKOYNvoqmldPwyWOI8F%2Bnoiw1%2FLyqE9WGTKwo9Q1spVXvoS7PeauQR%2FDcRJVRKb2KTB0CUuUyJee4Aa58WzdqtVKP7Ie3yXY7MhbZaIVkbSj19g2ceKEmCK%2Fhem5hT6mSVvLPvMDtPjm%2FPVEtHxa0YlCUsV2ZivPyVOnieq99vamS0mvqeN2WFDgr9q85uMQONG25PRlhCQlz4rGOCjw3Aefh3s3TqXeU6G7z0EME8Kvviexg4ZsR1HO2uJCEMjyswBU8I%2F4P1VT1vSmQup5IGypALoO5nDoJT6pzWZJHMBcagsZeBCrnIppmcDMXtTcyUoUlVlLruDlusIYSayMLp0%2FCP8CyTMIM654rVBDDqla29dJ%2BS4ZSxEG4PRKpDx7G1eo97gnv3u%2F42mGwfyH%2F%2FK4QVOxRkUlYJAO468pNjidk%2Fx8nvtCiPRvBqV3m9l6IB3tqmZ1gDmgWLpaRK%2BKlUG5vYVLDZ7q1xKjMoDX%2BqUBJ8gY7Iw7CPp0f3vuXoUDkNh%2Bf%2BHwM3IuAY7DDZsOe%2BBjqkAfdfV1rCiTIWX0VdZ67KlfWcBqP7NMv16DzdzYU0RJC6dC8JezG60vP2VRFaJIPUViwQQzHMpKXUgsOMyLmHmijHTqFrjCca9KcnylzF%2ByiRIn8OnvUIfLlKz%2F1zJO7HxBKrtpS%2BQcG9INaGTmM37tkQv%2FIHiGd6y1zdKIpQZEl06%2F1GlfDc%2BuR2Ac1UEW6Okp%2FXUZ07%2FesPAxgzv0r2cwU2EoGh&X-Amz-Signature=129dff40d25aa8c800c673040780adddd3d57531ff7d4d4fcdc24895c4a0e5cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLLPGM2U%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCzZ%2FzFn09NYTnsdORU4mVJwjv13rxIMa9%2FakV6vTrEAwIhAPIqlxqvobE%2FooF5Lu6OOHA2Y6nIQx33fCuImYpPgZwdKv8DCGYQABoMNjM3NDIzMTgzODA1Igzo6tzYclh8sbmpcTQq3AOFvR7PIGgT8BzBaO97ozAVBYGUJOFee57nStQ4eoIQVdd%2FTOfgJhCGLmdcEiJYjvn4izrSpjRWsmNCsr9xGN4e6Z2oPA9z5MtRDltyerROZThKOYNvoqmldPwyWOI8F%2Bnoiw1%2FLyqE9WGTKwo9Q1spVXvoS7PeauQR%2FDcRJVRKb2KTB0CUuUyJee4Aa58WzdqtVKP7Ie3yXY7MhbZaIVkbSj19g2ceKEmCK%2Fhem5hT6mSVvLPvMDtPjm%2FPVEtHxa0YlCUsV2ZivPyVOnieq99vamS0mvqeN2WFDgr9q85uMQONG25PRlhCQlz4rGOCjw3Aefh3s3TqXeU6G7z0EME8Kvviexg4ZsR1HO2uJCEMjyswBU8I%2F4P1VT1vSmQup5IGypALoO5nDoJT6pzWZJHMBcagsZeBCrnIppmcDMXtTcyUoUlVlLruDlusIYSayMLp0%2FCP8CyTMIM654rVBDDqla29dJ%2BS4ZSxEG4PRKpDx7G1eo97gnv3u%2F42mGwfyH%2F%2FK4QVOxRkUlYJAO468pNjidk%2Fx8nvtCiPRvBqV3m9l6IB3tqmZ1gDmgWLpaRK%2BKlUG5vYVLDZ7q1xKjMoDX%2BqUBJ8gY7Iw7CPp0f3vuXoUDkNh%2Bf%2BHwM3IuAY7DDZsOe%2BBjqkAfdfV1rCiTIWX0VdZ67KlfWcBqP7NMv16DzdzYU0RJC6dC8JezG60vP2VRFaJIPUViwQQzHMpKXUgsOMyLmHmijHTqFrjCca9KcnylzF%2ByiRIn8OnvUIfLlKz%2F1zJO7HxBKrtpS%2BQcG9INaGTmM37tkQv%2FIHiGd6y1zdKIpQZEl06%2F1GlfDc%2BuR2Ac1UEW6Okp%2FXUZ07%2FesPAxgzv0r2cwU2EoGh&X-Amz-Signature=de802c69b519eeb75c38092fd7af4c6b7a35ca1ba5c9d824985eec15b127e5da&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
