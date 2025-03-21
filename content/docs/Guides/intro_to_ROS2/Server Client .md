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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLUWEGI3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAhzRImKlENH5fPsJucwjBeBaxNCJHN%2BDALpljnciaAsAiAq7dEouFV3gsT9kyjf9PKszQeVlt%2F6m%2FhDLp%2FK4rCvjyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7A5pwUhIe8K1szDgKtwD9bM%2BAN8yp8VYbVnty0nj0doBZBNZk6A%2B15GWCfnUncWWVi6uTfTYtT5EwQeNLi1nhWq6RqhNWl1ztuKt2b%2FIYec%2BE8BGO3ptPQeG86SPlVQb8x818aZ2t%2FyQY7hegZnSEaUMijXuJ4YMUlY0VU6MdMlAGh%2FWsHJIMeY%2BSRPpGxaqGL0U%2FSlFR9D1bVUl%2FWsG%2FMe0Fo8PWWaxYWRiAOKPq4FRyoUgpa2Gku2cfLetaWWepvs5AyAMiLn0q6Zo1koOC422ns54gCib4x9tm2kniIWKhkpJfyJoB3ahxQIiYSYhSYFCaxUDNoDlSHPDRcBABStzCF%2FMOwlM%2FTbBn1HTM0s7OfLd3Q8g9QwM3p4MvzYPpOgCsV2czEDEZ1qXFJ3Q%2FLR0Gje4HOx1kL0T%2Fg6hC424dT1GUuhpl1cJs9yHtEcqTGq0fF2ibBpP1IZ53tCyoaepsu2cbJ3ThvGaEnJo0AfHeYPZlZKXdKJmQ57eeNA7bHRu6L%2Fbqkd7eCksPSRmU1K%2FJuTBlomkSC9z0TeOGNRC%2FpoZJOeVXngHT7V8RTj4baT3i2rOrZIN4%2FlT5GfLU90dGI83k4GSMYG%2BoW5usgu0lVl57cniQx%2BZ5nPEdSfxrUk52EjFaRZDgyUwwtz2vgY6pgFa8YanzrtmtXKBUZY7dQuz%2BAbdoG%2F0ZokYkFpEmBZbxs1%2BD1pRHQ4%2FCRSxZ%2B2g%2FG9OKRMWsESLWElKwhENhPqZNND%2BhPuM%2BcjqK9HBPKTvA9jj0rvXjhVxtDs3b%2F%2Fx79EzszsMPqKl30EqlT42Cuid5kaaSMBATpv3%2FrmGWjdBgY22Ab%2FxhH7fSEuRdRD%2BJ3Lo5mGRRMZJ4S2koGYkmfd2Js6kC4uu&X-Amz-Signature=1b788e646fc47bda6aa01290bc289d1744de28c1581b3f79410b3064f0bc2a78&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLUWEGI3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAhzRImKlENH5fPsJucwjBeBaxNCJHN%2BDALpljnciaAsAiAq7dEouFV3gsT9kyjf9PKszQeVlt%2F6m%2FhDLp%2FK4rCvjyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7A5pwUhIe8K1szDgKtwD9bM%2BAN8yp8VYbVnty0nj0doBZBNZk6A%2B15GWCfnUncWWVi6uTfTYtT5EwQeNLi1nhWq6RqhNWl1ztuKt2b%2FIYec%2BE8BGO3ptPQeG86SPlVQb8x818aZ2t%2FyQY7hegZnSEaUMijXuJ4YMUlY0VU6MdMlAGh%2FWsHJIMeY%2BSRPpGxaqGL0U%2FSlFR9D1bVUl%2FWsG%2FMe0Fo8PWWaxYWRiAOKPq4FRyoUgpa2Gku2cfLetaWWepvs5AyAMiLn0q6Zo1koOC422ns54gCib4x9tm2kniIWKhkpJfyJoB3ahxQIiYSYhSYFCaxUDNoDlSHPDRcBABStzCF%2FMOwlM%2FTbBn1HTM0s7OfLd3Q8g9QwM3p4MvzYPpOgCsV2czEDEZ1qXFJ3Q%2FLR0Gje4HOx1kL0T%2Fg6hC424dT1GUuhpl1cJs9yHtEcqTGq0fF2ibBpP1IZ53tCyoaepsu2cbJ3ThvGaEnJo0AfHeYPZlZKXdKJmQ57eeNA7bHRu6L%2Fbqkd7eCksPSRmU1K%2FJuTBlomkSC9z0TeOGNRC%2FpoZJOeVXngHT7V8RTj4baT3i2rOrZIN4%2FlT5GfLU90dGI83k4GSMYG%2BoW5usgu0lVl57cniQx%2BZ5nPEdSfxrUk52EjFaRZDgyUwwtz2vgY6pgFa8YanzrtmtXKBUZY7dQuz%2BAbdoG%2F0ZokYkFpEmBZbxs1%2BD1pRHQ4%2FCRSxZ%2B2g%2FG9OKRMWsESLWElKwhENhPqZNND%2BhPuM%2BcjqK9HBPKTvA9jj0rvXjhVxtDs3b%2F%2Fx79EzszsMPqKl30EqlT42Cuid5kaaSMBATpv3%2FrmGWjdBgY22Ab%2FxhH7fSEuRdRD%2BJ3Lo5mGRRMZJ4S2koGYkmfd2Js6kC4uu&X-Amz-Signature=7eb3152ca7ce8a380560b055d20480b7bae9b8670bcb5427b69129ef8bf6ba42&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLUWEGI3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAhzRImKlENH5fPsJucwjBeBaxNCJHN%2BDALpljnciaAsAiAq7dEouFV3gsT9kyjf9PKszQeVlt%2F6m%2FhDLp%2FK4rCvjyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7A5pwUhIe8K1szDgKtwD9bM%2BAN8yp8VYbVnty0nj0doBZBNZk6A%2B15GWCfnUncWWVi6uTfTYtT5EwQeNLi1nhWq6RqhNWl1ztuKt2b%2FIYec%2BE8BGO3ptPQeG86SPlVQb8x818aZ2t%2FyQY7hegZnSEaUMijXuJ4YMUlY0VU6MdMlAGh%2FWsHJIMeY%2BSRPpGxaqGL0U%2FSlFR9D1bVUl%2FWsG%2FMe0Fo8PWWaxYWRiAOKPq4FRyoUgpa2Gku2cfLetaWWepvs5AyAMiLn0q6Zo1koOC422ns54gCib4x9tm2kniIWKhkpJfyJoB3ahxQIiYSYhSYFCaxUDNoDlSHPDRcBABStzCF%2FMOwlM%2FTbBn1HTM0s7OfLd3Q8g9QwM3p4MvzYPpOgCsV2czEDEZ1qXFJ3Q%2FLR0Gje4HOx1kL0T%2Fg6hC424dT1GUuhpl1cJs9yHtEcqTGq0fF2ibBpP1IZ53tCyoaepsu2cbJ3ThvGaEnJo0AfHeYPZlZKXdKJmQ57eeNA7bHRu6L%2Fbqkd7eCksPSRmU1K%2FJuTBlomkSC9z0TeOGNRC%2FpoZJOeVXngHT7V8RTj4baT3i2rOrZIN4%2FlT5GfLU90dGI83k4GSMYG%2BoW5usgu0lVl57cniQx%2BZ5nPEdSfxrUk52EjFaRZDgyUwwtz2vgY6pgFa8YanzrtmtXKBUZY7dQuz%2BAbdoG%2F0ZokYkFpEmBZbxs1%2BD1pRHQ4%2FCRSxZ%2B2g%2FG9OKRMWsESLWElKwhENhPqZNND%2BhPuM%2BcjqK9HBPKTvA9jj0rvXjhVxtDs3b%2F%2Fx79EzszsMPqKl30EqlT42Cuid5kaaSMBATpv3%2FrmGWjdBgY22Ab%2FxhH7fSEuRdRD%2BJ3Lo5mGRRMZJ4S2koGYkmfd2Js6kC4uu&X-Amz-Signature=1c5b99a50e8dcd4da63a02bf9f855e447d1e915dbcb7598afb5b37f24b1967db&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLUWEGI3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAhzRImKlENH5fPsJucwjBeBaxNCJHN%2BDALpljnciaAsAiAq7dEouFV3gsT9kyjf9PKszQeVlt%2F6m%2FhDLp%2FK4rCvjyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7A5pwUhIe8K1szDgKtwD9bM%2BAN8yp8VYbVnty0nj0doBZBNZk6A%2B15GWCfnUncWWVi6uTfTYtT5EwQeNLi1nhWq6RqhNWl1ztuKt2b%2FIYec%2BE8BGO3ptPQeG86SPlVQb8x818aZ2t%2FyQY7hegZnSEaUMijXuJ4YMUlY0VU6MdMlAGh%2FWsHJIMeY%2BSRPpGxaqGL0U%2FSlFR9D1bVUl%2FWsG%2FMe0Fo8PWWaxYWRiAOKPq4FRyoUgpa2Gku2cfLetaWWepvs5AyAMiLn0q6Zo1koOC422ns54gCib4x9tm2kniIWKhkpJfyJoB3ahxQIiYSYhSYFCaxUDNoDlSHPDRcBABStzCF%2FMOwlM%2FTbBn1HTM0s7OfLd3Q8g9QwM3p4MvzYPpOgCsV2czEDEZ1qXFJ3Q%2FLR0Gje4HOx1kL0T%2Fg6hC424dT1GUuhpl1cJs9yHtEcqTGq0fF2ibBpP1IZ53tCyoaepsu2cbJ3ThvGaEnJo0AfHeYPZlZKXdKJmQ57eeNA7bHRu6L%2Fbqkd7eCksPSRmU1K%2FJuTBlomkSC9z0TeOGNRC%2FpoZJOeVXngHT7V8RTj4baT3i2rOrZIN4%2FlT5GfLU90dGI83k4GSMYG%2BoW5usgu0lVl57cniQx%2BZ5nPEdSfxrUk52EjFaRZDgyUwwtz2vgY6pgFa8YanzrtmtXKBUZY7dQuz%2BAbdoG%2F0ZokYkFpEmBZbxs1%2BD1pRHQ4%2FCRSxZ%2B2g%2FG9OKRMWsESLWElKwhENhPqZNND%2BhPuM%2BcjqK9HBPKTvA9jj0rvXjhVxtDs3b%2F%2Fx79EzszsMPqKl30EqlT42Cuid5kaaSMBATpv3%2FrmGWjdBgY22Ab%2FxhH7fSEuRdRD%2BJ3Lo5mGRRMZJ4S2koGYkmfd2Js6kC4uu&X-Amz-Signature=730cd07f0595f14de9dfd9993722d7c050227513ec6cf627789a8a832af238a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLUWEGI3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAhzRImKlENH5fPsJucwjBeBaxNCJHN%2BDALpljnciaAsAiAq7dEouFV3gsT9kyjf9PKszQeVlt%2F6m%2FhDLp%2FK4rCvjyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7A5pwUhIe8K1szDgKtwD9bM%2BAN8yp8VYbVnty0nj0doBZBNZk6A%2B15GWCfnUncWWVi6uTfTYtT5EwQeNLi1nhWq6RqhNWl1ztuKt2b%2FIYec%2BE8BGO3ptPQeG86SPlVQb8x818aZ2t%2FyQY7hegZnSEaUMijXuJ4YMUlY0VU6MdMlAGh%2FWsHJIMeY%2BSRPpGxaqGL0U%2FSlFR9D1bVUl%2FWsG%2FMe0Fo8PWWaxYWRiAOKPq4FRyoUgpa2Gku2cfLetaWWepvs5AyAMiLn0q6Zo1koOC422ns54gCib4x9tm2kniIWKhkpJfyJoB3ahxQIiYSYhSYFCaxUDNoDlSHPDRcBABStzCF%2FMOwlM%2FTbBn1HTM0s7OfLd3Q8g9QwM3p4MvzYPpOgCsV2czEDEZ1qXFJ3Q%2FLR0Gje4HOx1kL0T%2Fg6hC424dT1GUuhpl1cJs9yHtEcqTGq0fF2ibBpP1IZ53tCyoaepsu2cbJ3ThvGaEnJo0AfHeYPZlZKXdKJmQ57eeNA7bHRu6L%2Fbqkd7eCksPSRmU1K%2FJuTBlomkSC9z0TeOGNRC%2FpoZJOeVXngHT7V8RTj4baT3i2rOrZIN4%2FlT5GfLU90dGI83k4GSMYG%2BoW5usgu0lVl57cniQx%2BZ5nPEdSfxrUk52EjFaRZDgyUwwtz2vgY6pgFa8YanzrtmtXKBUZY7dQuz%2BAbdoG%2F0ZokYkFpEmBZbxs1%2BD1pRHQ4%2FCRSxZ%2B2g%2FG9OKRMWsESLWElKwhENhPqZNND%2BhPuM%2BcjqK9HBPKTvA9jj0rvXjhVxtDs3b%2F%2Fx79EzszsMPqKl30EqlT42Cuid5kaaSMBATpv3%2FrmGWjdBgY22Ab%2FxhH7fSEuRdRD%2BJ3Lo5mGRRMZJ4S2koGYkmfd2Js6kC4uu&X-Amz-Signature=b886c0167e484a9ca817c71c26f6fdd646569513fb7af4821eb50b477a86edf4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
