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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHQYWTR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAtYxa5Nhrt58JWBGyK60YVhmBV2sH0KyJTIVXnNPsRgIhAJIO0Jni4LHZUrzfiZwoGKTpuSbjz%2FjXmzjT6hEMdkz6Kv8DCCoQABoMNjM3NDIzMTgzODA1Igwy9oXR6fCgDESlBkIq3AM%2Fo%2FuKkTf4POGNq8nD9AM5JFw%2BlJbl27Y03Na5VFuMTIADkSxbaYfAgqCOKZDm0Iak%2Ft%2BIjepcnV4YJYSuxmfxYOXti7oB65fOjalaF4a6keWS5oMN5u3wXWWwIaKeS%2Bdgjlcv5WojQ7Tl3HJRfFjjvP1qNwwnhSy1wC7I5X2dKkrzOv19HN2SYOuwDqF3YsNCnk%2F3CdRCjROdqYb0WtxVur9hzVMNVupE%2FkaYbssZ9%2FQPzhAua39L%2FFGDHO5%2FEmL21RNAJS9fzDyK%2BzmO9GKmDf7jUHFoK3XsT7G63ELigL%2Bx1UqhwZHvDzOkuWtyoQ07tprc13rg1hYceLr%2BIfwXPDB%2FTOLkToECj5B9l9b2suMFlvpvPix7Zqy6qaPZaYLgGqIGKZTDpKxFMaLgZrRpXF7hy0F4t%2BB%2FFbDtJMVVKOmfNDqwdneMlnNcbd4a0tbL0knNc%2BuS%2Bn3pg167PIP7U2Z3AeoGTGwM85UgzEa48Y2FQIUnL51pCt%2FUr3g2MI8YAVC9aDjZl19N4hJ%2FZ%2FZ3Q8y6yeFtozma65iH%2Bhg3X5%2B17spM9YV9lYvlzFkhRcF8qhkDfjzheduclXjxpBh%2BCfcghNjCyyxfI43aj8z6KNweJPsAdOQl91%2F%2ByDDL6%2FC9BjqkAaCSPAfJfeVKGFcG9H9H6zhs97m5i%2BmclOmyzGvA2qMvLoBhuz0nnuzIzYBAxA%2FFJOjbaboTN0yQcTRYek8F2ziBDputPveDWF7aL5xY6nAzwR8Jft17YNR6dxuyZvUorHz%2FQ20Iog4jhKPp6NJtl%2FTUGosgQiqkdlG10d6inQlLW4iXe1OxZ%2BOdagbu%2BYEdRCWdPO3vD9Gii1pifHQ96sI0vvn5&X-Amz-Signature=09b2aed3c9dc0f60e192a8454c95d262416e19763755df03fa81ca9bf7645e89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHQYWTR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAtYxa5Nhrt58JWBGyK60YVhmBV2sH0KyJTIVXnNPsRgIhAJIO0Jni4LHZUrzfiZwoGKTpuSbjz%2FjXmzjT6hEMdkz6Kv8DCCoQABoMNjM3NDIzMTgzODA1Igwy9oXR6fCgDESlBkIq3AM%2Fo%2FuKkTf4POGNq8nD9AM5JFw%2BlJbl27Y03Na5VFuMTIADkSxbaYfAgqCOKZDm0Iak%2Ft%2BIjepcnV4YJYSuxmfxYOXti7oB65fOjalaF4a6keWS5oMN5u3wXWWwIaKeS%2Bdgjlcv5WojQ7Tl3HJRfFjjvP1qNwwnhSy1wC7I5X2dKkrzOv19HN2SYOuwDqF3YsNCnk%2F3CdRCjROdqYb0WtxVur9hzVMNVupE%2FkaYbssZ9%2FQPzhAua39L%2FFGDHO5%2FEmL21RNAJS9fzDyK%2BzmO9GKmDf7jUHFoK3XsT7G63ELigL%2Bx1UqhwZHvDzOkuWtyoQ07tprc13rg1hYceLr%2BIfwXPDB%2FTOLkToECj5B9l9b2suMFlvpvPix7Zqy6qaPZaYLgGqIGKZTDpKxFMaLgZrRpXF7hy0F4t%2BB%2FFbDtJMVVKOmfNDqwdneMlnNcbd4a0tbL0knNc%2BuS%2Bn3pg167PIP7U2Z3AeoGTGwM85UgzEa48Y2FQIUnL51pCt%2FUr3g2MI8YAVC9aDjZl19N4hJ%2FZ%2FZ3Q8y6yeFtozma65iH%2Bhg3X5%2B17spM9YV9lYvlzFkhRcF8qhkDfjzheduclXjxpBh%2BCfcghNjCyyxfI43aj8z6KNweJPsAdOQl91%2F%2ByDDL6%2FC9BjqkAaCSPAfJfeVKGFcG9H9H6zhs97m5i%2BmclOmyzGvA2qMvLoBhuz0nnuzIzYBAxA%2FFJOjbaboTN0yQcTRYek8F2ziBDputPveDWF7aL5xY6nAzwR8Jft17YNR6dxuyZvUorHz%2FQ20Iog4jhKPp6NJtl%2FTUGosgQiqkdlG10d6inQlLW4iXe1OxZ%2BOdagbu%2BYEdRCWdPO3vD9Gii1pifHQ96sI0vvn5&X-Amz-Signature=ce6c4bb34f3e8a2aedb9036b9bcfc3b6dc260df116d8bc1ba881cac8fc092ab8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHQYWTR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAtYxa5Nhrt58JWBGyK60YVhmBV2sH0KyJTIVXnNPsRgIhAJIO0Jni4LHZUrzfiZwoGKTpuSbjz%2FjXmzjT6hEMdkz6Kv8DCCoQABoMNjM3NDIzMTgzODA1Igwy9oXR6fCgDESlBkIq3AM%2Fo%2FuKkTf4POGNq8nD9AM5JFw%2BlJbl27Y03Na5VFuMTIADkSxbaYfAgqCOKZDm0Iak%2Ft%2BIjepcnV4YJYSuxmfxYOXti7oB65fOjalaF4a6keWS5oMN5u3wXWWwIaKeS%2Bdgjlcv5WojQ7Tl3HJRfFjjvP1qNwwnhSy1wC7I5X2dKkrzOv19HN2SYOuwDqF3YsNCnk%2F3CdRCjROdqYb0WtxVur9hzVMNVupE%2FkaYbssZ9%2FQPzhAua39L%2FFGDHO5%2FEmL21RNAJS9fzDyK%2BzmO9GKmDf7jUHFoK3XsT7G63ELigL%2Bx1UqhwZHvDzOkuWtyoQ07tprc13rg1hYceLr%2BIfwXPDB%2FTOLkToECj5B9l9b2suMFlvpvPix7Zqy6qaPZaYLgGqIGKZTDpKxFMaLgZrRpXF7hy0F4t%2BB%2FFbDtJMVVKOmfNDqwdneMlnNcbd4a0tbL0knNc%2BuS%2Bn3pg167PIP7U2Z3AeoGTGwM85UgzEa48Y2FQIUnL51pCt%2FUr3g2MI8YAVC9aDjZl19N4hJ%2FZ%2FZ3Q8y6yeFtozma65iH%2Bhg3X5%2B17spM9YV9lYvlzFkhRcF8qhkDfjzheduclXjxpBh%2BCfcghNjCyyxfI43aj8z6KNweJPsAdOQl91%2F%2ByDDL6%2FC9BjqkAaCSPAfJfeVKGFcG9H9H6zhs97m5i%2BmclOmyzGvA2qMvLoBhuz0nnuzIzYBAxA%2FFJOjbaboTN0yQcTRYek8F2ziBDputPveDWF7aL5xY6nAzwR8Jft17YNR6dxuyZvUorHz%2FQ20Iog4jhKPp6NJtl%2FTUGosgQiqkdlG10d6inQlLW4iXe1OxZ%2BOdagbu%2BYEdRCWdPO3vD9Gii1pifHQ96sI0vvn5&X-Amz-Signature=79fd62621a4323eae20473b4117dd90153ff5f936756a80370e7d1e914c03771&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHQYWTR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAtYxa5Nhrt58JWBGyK60YVhmBV2sH0KyJTIVXnNPsRgIhAJIO0Jni4LHZUrzfiZwoGKTpuSbjz%2FjXmzjT6hEMdkz6Kv8DCCoQABoMNjM3NDIzMTgzODA1Igwy9oXR6fCgDESlBkIq3AM%2Fo%2FuKkTf4POGNq8nD9AM5JFw%2BlJbl27Y03Na5VFuMTIADkSxbaYfAgqCOKZDm0Iak%2Ft%2BIjepcnV4YJYSuxmfxYOXti7oB65fOjalaF4a6keWS5oMN5u3wXWWwIaKeS%2Bdgjlcv5WojQ7Tl3HJRfFjjvP1qNwwnhSy1wC7I5X2dKkrzOv19HN2SYOuwDqF3YsNCnk%2F3CdRCjROdqYb0WtxVur9hzVMNVupE%2FkaYbssZ9%2FQPzhAua39L%2FFGDHO5%2FEmL21RNAJS9fzDyK%2BzmO9GKmDf7jUHFoK3XsT7G63ELigL%2Bx1UqhwZHvDzOkuWtyoQ07tprc13rg1hYceLr%2BIfwXPDB%2FTOLkToECj5B9l9b2suMFlvpvPix7Zqy6qaPZaYLgGqIGKZTDpKxFMaLgZrRpXF7hy0F4t%2BB%2FFbDtJMVVKOmfNDqwdneMlnNcbd4a0tbL0knNc%2BuS%2Bn3pg167PIP7U2Z3AeoGTGwM85UgzEa48Y2FQIUnL51pCt%2FUr3g2MI8YAVC9aDjZl19N4hJ%2FZ%2FZ3Q8y6yeFtozma65iH%2Bhg3X5%2B17spM9YV9lYvlzFkhRcF8qhkDfjzheduclXjxpBh%2BCfcghNjCyyxfI43aj8z6KNweJPsAdOQl91%2F%2ByDDL6%2FC9BjqkAaCSPAfJfeVKGFcG9H9H6zhs97m5i%2BmclOmyzGvA2qMvLoBhuz0nnuzIzYBAxA%2FFJOjbaboTN0yQcTRYek8F2ziBDputPveDWF7aL5xY6nAzwR8Jft17YNR6dxuyZvUorHz%2FQ20Iog4jhKPp6NJtl%2FTUGosgQiqkdlG10d6inQlLW4iXe1OxZ%2BOdagbu%2BYEdRCWdPO3vD9Gii1pifHQ96sI0vvn5&X-Amz-Signature=ec8788def4e898fa3f8b3a67e656e86e07c672a605f2950bb6d430ac3acaf93f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHQYWTR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAtYxa5Nhrt58JWBGyK60YVhmBV2sH0KyJTIVXnNPsRgIhAJIO0Jni4LHZUrzfiZwoGKTpuSbjz%2FjXmzjT6hEMdkz6Kv8DCCoQABoMNjM3NDIzMTgzODA1Igwy9oXR6fCgDESlBkIq3AM%2Fo%2FuKkTf4POGNq8nD9AM5JFw%2BlJbl27Y03Na5VFuMTIADkSxbaYfAgqCOKZDm0Iak%2Ft%2BIjepcnV4YJYSuxmfxYOXti7oB65fOjalaF4a6keWS5oMN5u3wXWWwIaKeS%2Bdgjlcv5WojQ7Tl3HJRfFjjvP1qNwwnhSy1wC7I5X2dKkrzOv19HN2SYOuwDqF3YsNCnk%2F3CdRCjROdqYb0WtxVur9hzVMNVupE%2FkaYbssZ9%2FQPzhAua39L%2FFGDHO5%2FEmL21RNAJS9fzDyK%2BzmO9GKmDf7jUHFoK3XsT7G63ELigL%2Bx1UqhwZHvDzOkuWtyoQ07tprc13rg1hYceLr%2BIfwXPDB%2FTOLkToECj5B9l9b2suMFlvpvPix7Zqy6qaPZaYLgGqIGKZTDpKxFMaLgZrRpXF7hy0F4t%2BB%2FFbDtJMVVKOmfNDqwdneMlnNcbd4a0tbL0knNc%2BuS%2Bn3pg167PIP7U2Z3AeoGTGwM85UgzEa48Y2FQIUnL51pCt%2FUr3g2MI8YAVC9aDjZl19N4hJ%2FZ%2FZ3Q8y6yeFtozma65iH%2Bhg3X5%2B17spM9YV9lYvlzFkhRcF8qhkDfjzheduclXjxpBh%2BCfcghNjCyyxfI43aj8z6KNweJPsAdOQl91%2F%2ByDDL6%2FC9BjqkAaCSPAfJfeVKGFcG9H9H6zhs97m5i%2BmclOmyzGvA2qMvLoBhuz0nnuzIzYBAxA%2FFJOjbaboTN0yQcTRYek8F2ziBDputPveDWF7aL5xY6nAzwR8Jft17YNR6dxuyZvUorHz%2FQ20Iog4jhKPp6NJtl%2FTUGosgQiqkdlG10d6inQlLW4iXe1OxZ%2BOdagbu%2BYEdRCWdPO3vD9Gii1pifHQ96sI0vvn5&X-Amz-Signature=cba5d33b0436ce0ab9e2489797d5ac69c8b9f690f06808b86d3aaedd086a612c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
