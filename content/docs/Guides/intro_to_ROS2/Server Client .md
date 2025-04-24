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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA5ZYBGT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDldR7K9HkQd0wjA6RpuxpD9Zv2YZrr6GjmkYeFWtF1FAIhAIG0olk3dVsoG03anSjgtG08fOZ68%2BbaxA8Udaq1KEEzKv8DCBsQABoMNjM3NDIzMTgzODA1IgxmDEhbTkxy54%2Bh%2FZ4q3ANsSKydvXtwshP1ojX2MXHDdb0MWxI9zxWYVV1LN22N3Rb5zaasVUEuvisNmEhNnNmQzx%2BBJ3Eo%2FUjUS6YEgiHISqckKTwNWNgvVGWw7npQrLypmafIqoAxRL6Zm6zfg2UIOnifM8gbyy4d0VFXMesIjBBttfEpijauHrT1%2Bq4WQBldNPHuYC%2FASrHiS2FMRrQWx8v5I3F1XrCnTvn9QUjkWwD7T1Aczr0s7%2BrMiL9MgGgrRJ5Ie%2FTAsb0fsxxTxbjhfqcyNWVUOR8Q8aWY7naFYlaIeK%2FCkpEurYIFN5IAbkTRlGmZOAbzX5vr9vL3j53kJUBvRKZvmz1r6EqnuynOW84Bjo1wzBCSZmSTGHjA8sdHjgxnoD88Ngea11jesAKVzJgYEB0QGFYZiakrIJIY9KhrnRqN%2FVTN70EobGV96q%2BYPStGSHKxUN9pArmzpcyEQEo%2BkceMJFYqsss2wWxoGtGClyDbJ8wwXJ1vm2lpLmesrUvYsTQdQQt8O9JPwHCuIr2ab2cFyDyzxEMQ15Jb%2ByDL6G%2FDYdL4XFj4XynRYqqE4m3qVwXZhNxcH%2FRyGvneIBnmlcsUZq2pv7J%2BOJCyFbEHvDKayHeMtah637GUtrrkm%2B2KbNAtQyLekzCf8anABjqkAS72g%2BIu%2FguHTck%2B0H5p2wNWkfqjz9Z3fkxX3zFiuF2Phjf3%2BjLufv2XCbGPeAy1AZpz7VUmDbVewyiaYwyJB8vJMzhjPuPv1gY2lDRdgUWlCGwzqOrghUJk4sxgjwqAzrywZwWQ3xC48bT44NyKNBDGfL5ktjRfwk0BDWmw1sBJ6ztU7G5cyydwGVspMZdYbtbNTqXHmGWmkczioxc4Khzc6fT7&X-Amz-Signature=ce1d841adfc94dcdd44487fda26ac0cc83bec9999e140876a5501074d48d5c58&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA5ZYBGT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDldR7K9HkQd0wjA6RpuxpD9Zv2YZrr6GjmkYeFWtF1FAIhAIG0olk3dVsoG03anSjgtG08fOZ68%2BbaxA8Udaq1KEEzKv8DCBsQABoMNjM3NDIzMTgzODA1IgxmDEhbTkxy54%2Bh%2FZ4q3ANsSKydvXtwshP1ojX2MXHDdb0MWxI9zxWYVV1LN22N3Rb5zaasVUEuvisNmEhNnNmQzx%2BBJ3Eo%2FUjUS6YEgiHISqckKTwNWNgvVGWw7npQrLypmafIqoAxRL6Zm6zfg2UIOnifM8gbyy4d0VFXMesIjBBttfEpijauHrT1%2Bq4WQBldNPHuYC%2FASrHiS2FMRrQWx8v5I3F1XrCnTvn9QUjkWwD7T1Aczr0s7%2BrMiL9MgGgrRJ5Ie%2FTAsb0fsxxTxbjhfqcyNWVUOR8Q8aWY7naFYlaIeK%2FCkpEurYIFN5IAbkTRlGmZOAbzX5vr9vL3j53kJUBvRKZvmz1r6EqnuynOW84Bjo1wzBCSZmSTGHjA8sdHjgxnoD88Ngea11jesAKVzJgYEB0QGFYZiakrIJIY9KhrnRqN%2FVTN70EobGV96q%2BYPStGSHKxUN9pArmzpcyEQEo%2BkceMJFYqsss2wWxoGtGClyDbJ8wwXJ1vm2lpLmesrUvYsTQdQQt8O9JPwHCuIr2ab2cFyDyzxEMQ15Jb%2ByDL6G%2FDYdL4XFj4XynRYqqE4m3qVwXZhNxcH%2FRyGvneIBnmlcsUZq2pv7J%2BOJCyFbEHvDKayHeMtah637GUtrrkm%2B2KbNAtQyLekzCf8anABjqkAS72g%2BIu%2FguHTck%2B0H5p2wNWkfqjz9Z3fkxX3zFiuF2Phjf3%2BjLufv2XCbGPeAy1AZpz7VUmDbVewyiaYwyJB8vJMzhjPuPv1gY2lDRdgUWlCGwzqOrghUJk4sxgjwqAzrywZwWQ3xC48bT44NyKNBDGfL5ktjRfwk0BDWmw1sBJ6ztU7G5cyydwGVspMZdYbtbNTqXHmGWmkczioxc4Khzc6fT7&X-Amz-Signature=240d2f63371b67e648f9ce79a0618b8f58ffd95dfdf4960c3bde0c8c8e725988&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA5ZYBGT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDldR7K9HkQd0wjA6RpuxpD9Zv2YZrr6GjmkYeFWtF1FAIhAIG0olk3dVsoG03anSjgtG08fOZ68%2BbaxA8Udaq1KEEzKv8DCBsQABoMNjM3NDIzMTgzODA1IgxmDEhbTkxy54%2Bh%2FZ4q3ANsSKydvXtwshP1ojX2MXHDdb0MWxI9zxWYVV1LN22N3Rb5zaasVUEuvisNmEhNnNmQzx%2BBJ3Eo%2FUjUS6YEgiHISqckKTwNWNgvVGWw7npQrLypmafIqoAxRL6Zm6zfg2UIOnifM8gbyy4d0VFXMesIjBBttfEpijauHrT1%2Bq4WQBldNPHuYC%2FASrHiS2FMRrQWx8v5I3F1XrCnTvn9QUjkWwD7T1Aczr0s7%2BrMiL9MgGgrRJ5Ie%2FTAsb0fsxxTxbjhfqcyNWVUOR8Q8aWY7naFYlaIeK%2FCkpEurYIFN5IAbkTRlGmZOAbzX5vr9vL3j53kJUBvRKZvmz1r6EqnuynOW84Bjo1wzBCSZmSTGHjA8sdHjgxnoD88Ngea11jesAKVzJgYEB0QGFYZiakrIJIY9KhrnRqN%2FVTN70EobGV96q%2BYPStGSHKxUN9pArmzpcyEQEo%2BkceMJFYqsss2wWxoGtGClyDbJ8wwXJ1vm2lpLmesrUvYsTQdQQt8O9JPwHCuIr2ab2cFyDyzxEMQ15Jb%2ByDL6G%2FDYdL4XFj4XynRYqqE4m3qVwXZhNxcH%2FRyGvneIBnmlcsUZq2pv7J%2BOJCyFbEHvDKayHeMtah637GUtrrkm%2B2KbNAtQyLekzCf8anABjqkAS72g%2BIu%2FguHTck%2B0H5p2wNWkfqjz9Z3fkxX3zFiuF2Phjf3%2BjLufv2XCbGPeAy1AZpz7VUmDbVewyiaYwyJB8vJMzhjPuPv1gY2lDRdgUWlCGwzqOrghUJk4sxgjwqAzrywZwWQ3xC48bT44NyKNBDGfL5ktjRfwk0BDWmw1sBJ6ztU7G5cyydwGVspMZdYbtbNTqXHmGWmkczioxc4Khzc6fT7&X-Amz-Signature=a3c1872294ea24f82b4bf3e59007bddd35eb983bb71668f018d7008fcb873a5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA5ZYBGT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDldR7K9HkQd0wjA6RpuxpD9Zv2YZrr6GjmkYeFWtF1FAIhAIG0olk3dVsoG03anSjgtG08fOZ68%2BbaxA8Udaq1KEEzKv8DCBsQABoMNjM3NDIzMTgzODA1IgxmDEhbTkxy54%2Bh%2FZ4q3ANsSKydvXtwshP1ojX2MXHDdb0MWxI9zxWYVV1LN22N3Rb5zaasVUEuvisNmEhNnNmQzx%2BBJ3Eo%2FUjUS6YEgiHISqckKTwNWNgvVGWw7npQrLypmafIqoAxRL6Zm6zfg2UIOnifM8gbyy4d0VFXMesIjBBttfEpijauHrT1%2Bq4WQBldNPHuYC%2FASrHiS2FMRrQWx8v5I3F1XrCnTvn9QUjkWwD7T1Aczr0s7%2BrMiL9MgGgrRJ5Ie%2FTAsb0fsxxTxbjhfqcyNWVUOR8Q8aWY7naFYlaIeK%2FCkpEurYIFN5IAbkTRlGmZOAbzX5vr9vL3j53kJUBvRKZvmz1r6EqnuynOW84Bjo1wzBCSZmSTGHjA8sdHjgxnoD88Ngea11jesAKVzJgYEB0QGFYZiakrIJIY9KhrnRqN%2FVTN70EobGV96q%2BYPStGSHKxUN9pArmzpcyEQEo%2BkceMJFYqsss2wWxoGtGClyDbJ8wwXJ1vm2lpLmesrUvYsTQdQQt8O9JPwHCuIr2ab2cFyDyzxEMQ15Jb%2ByDL6G%2FDYdL4XFj4XynRYqqE4m3qVwXZhNxcH%2FRyGvneIBnmlcsUZq2pv7J%2BOJCyFbEHvDKayHeMtah637GUtrrkm%2B2KbNAtQyLekzCf8anABjqkAS72g%2BIu%2FguHTck%2B0H5p2wNWkfqjz9Z3fkxX3zFiuF2Phjf3%2BjLufv2XCbGPeAy1AZpz7VUmDbVewyiaYwyJB8vJMzhjPuPv1gY2lDRdgUWlCGwzqOrghUJk4sxgjwqAzrywZwWQ3xC48bT44NyKNBDGfL5ktjRfwk0BDWmw1sBJ6ztU7G5cyydwGVspMZdYbtbNTqXHmGWmkczioxc4Khzc6fT7&X-Amz-Signature=eddf3a62c6a0875462f20e171590f0fdcecf88b859f4cfd9bb0236b29f45bde2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA5ZYBGT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDldR7K9HkQd0wjA6RpuxpD9Zv2YZrr6GjmkYeFWtF1FAIhAIG0olk3dVsoG03anSjgtG08fOZ68%2BbaxA8Udaq1KEEzKv8DCBsQABoMNjM3NDIzMTgzODA1IgxmDEhbTkxy54%2Bh%2FZ4q3ANsSKydvXtwshP1ojX2MXHDdb0MWxI9zxWYVV1LN22N3Rb5zaasVUEuvisNmEhNnNmQzx%2BBJ3Eo%2FUjUS6YEgiHISqckKTwNWNgvVGWw7npQrLypmafIqoAxRL6Zm6zfg2UIOnifM8gbyy4d0VFXMesIjBBttfEpijauHrT1%2Bq4WQBldNPHuYC%2FASrHiS2FMRrQWx8v5I3F1XrCnTvn9QUjkWwD7T1Aczr0s7%2BrMiL9MgGgrRJ5Ie%2FTAsb0fsxxTxbjhfqcyNWVUOR8Q8aWY7naFYlaIeK%2FCkpEurYIFN5IAbkTRlGmZOAbzX5vr9vL3j53kJUBvRKZvmz1r6EqnuynOW84Bjo1wzBCSZmSTGHjA8sdHjgxnoD88Ngea11jesAKVzJgYEB0QGFYZiakrIJIY9KhrnRqN%2FVTN70EobGV96q%2BYPStGSHKxUN9pArmzpcyEQEo%2BkceMJFYqsss2wWxoGtGClyDbJ8wwXJ1vm2lpLmesrUvYsTQdQQt8O9JPwHCuIr2ab2cFyDyzxEMQ15Jb%2ByDL6G%2FDYdL4XFj4XynRYqqE4m3qVwXZhNxcH%2FRyGvneIBnmlcsUZq2pv7J%2BOJCyFbEHvDKayHeMtah637GUtrrkm%2B2KbNAtQyLekzCf8anABjqkAS72g%2BIu%2FguHTck%2B0H5p2wNWkfqjz9Z3fkxX3zFiuF2Phjf3%2BjLufv2XCbGPeAy1AZpz7VUmDbVewyiaYwyJB8vJMzhjPuPv1gY2lDRdgUWlCGwzqOrghUJk4sxgjwqAzrywZwWQ3xC48bT44NyKNBDGfL5ktjRfwk0BDWmw1sBJ6ztU7G5cyydwGVspMZdYbtbNTqXHmGWmkczioxc4Khzc6fT7&X-Amz-Signature=2e6285ef1665b1d18aa3594f73f41c351388cacc9a8b4c82526322ae02cdc7a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
