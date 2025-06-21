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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZOOSMCL%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6jgZZc%2FcZkKmQSVSJs6koD4jtbiQ0OPEdrpBmEcHxEAIhAOO4F%2F1zA4henIHZQBUiy0S4vlMSp55hjPD5pf51sRjQKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFQNZ7i%2FwQSYHP8Asq3AOpuSWKGZXnNWr9mSd7RFvgaezx0Q6i%2FHTKzD4tsNabj6mCLvygbQFP21riNyVJ2YBYn6FbTVVzbx8Wgg3xfRwnooDAfVGA5D6jAhIZ7pUfESE3nHmfd9Yz0h6HdhxthcOjGqZI0dgZGsFFY8InSbwtt1dwib%2BSFSAexiAQifB4lHl9jkuZJ8oTeBDzVCDk4ouR%2Bs%2FqOkmro%2FAEKAj92tx4cCBDIBMFJdVwgS0bj4fnbwZB6qlx3PuNJT9OY36wlF2cZkCXC1m95XtKwK5kkmLQo9OoK%2FqZ%2Bz1XgihuqkWr3KlY%2Brk0wSeYqTi7C2Bz%2BSg9wwxCqs%2BjfwUe1M0CS36oKgyXjZ6qcZebJGDzyVKQdav7MaiKsGJk0FXBShO4h1OOFu3v1quCdIKKsL3p%2Fn5h%2BX7jR75U34WMGfj%2FcfVjL69JuopBSyKHX3K6oxfNEuIXRzJQ05AMA8DwUWzOOLfH6rdfp2a3%2FBfqd6W1oLYnfa9Yn86x1M%2BaWMmfzqgj%2B3visAMOgr2iUs9cZydSfmEcPCojUd5%2BERb0vCIEz0AllK%2FXXd01bwbUgVXFnBZMJjDWAb9aMGN5m5vVIxmtIPKNE7NUGbr2YpakH0ZNDiXQkraEpucylSRIE9IMNTD2jtvCBjqkAbBI7txruwsgKg0dIy86J3Qzmfp7Kh1z7VS8j8TNF8qNF%2BwY5mYt69042lyjRcfCS%2BDnkkGDRvvWm%2F%2FMMzVkKqpEypi2r%2FzdvK44esHCEm7iKf5%2FJF9iRJXFPbCdufxSzUyzZkeTsUp9ptMhZpG0Lt22RDcB%2Fl5PggD3uTOY9irCKML6TemWq2fBE7WyiNhkHGCzVfS%2FXD5NF1v%2BQ9lP3x3Bkcnt&X-Amz-Signature=617b894d5ee32a7b5153b89d6d1c360c26f216f80c6f177612a2ba5bce606b99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZOOSMCL%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6jgZZc%2FcZkKmQSVSJs6koD4jtbiQ0OPEdrpBmEcHxEAIhAOO4F%2F1zA4henIHZQBUiy0S4vlMSp55hjPD5pf51sRjQKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFQNZ7i%2FwQSYHP8Asq3AOpuSWKGZXnNWr9mSd7RFvgaezx0Q6i%2FHTKzD4tsNabj6mCLvygbQFP21riNyVJ2YBYn6FbTVVzbx8Wgg3xfRwnooDAfVGA5D6jAhIZ7pUfESE3nHmfd9Yz0h6HdhxthcOjGqZI0dgZGsFFY8InSbwtt1dwib%2BSFSAexiAQifB4lHl9jkuZJ8oTeBDzVCDk4ouR%2Bs%2FqOkmro%2FAEKAj92tx4cCBDIBMFJdVwgS0bj4fnbwZB6qlx3PuNJT9OY36wlF2cZkCXC1m95XtKwK5kkmLQo9OoK%2FqZ%2Bz1XgihuqkWr3KlY%2Brk0wSeYqTi7C2Bz%2BSg9wwxCqs%2BjfwUe1M0CS36oKgyXjZ6qcZebJGDzyVKQdav7MaiKsGJk0FXBShO4h1OOFu3v1quCdIKKsL3p%2Fn5h%2BX7jR75U34WMGfj%2FcfVjL69JuopBSyKHX3K6oxfNEuIXRzJQ05AMA8DwUWzOOLfH6rdfp2a3%2FBfqd6W1oLYnfa9Yn86x1M%2BaWMmfzqgj%2B3visAMOgr2iUs9cZydSfmEcPCojUd5%2BERb0vCIEz0AllK%2FXXd01bwbUgVXFnBZMJjDWAb9aMGN5m5vVIxmtIPKNE7NUGbr2YpakH0ZNDiXQkraEpucylSRIE9IMNTD2jtvCBjqkAbBI7txruwsgKg0dIy86J3Qzmfp7Kh1z7VS8j8TNF8qNF%2BwY5mYt69042lyjRcfCS%2BDnkkGDRvvWm%2F%2FMMzVkKqpEypi2r%2FzdvK44esHCEm7iKf5%2FJF9iRJXFPbCdufxSzUyzZkeTsUp9ptMhZpG0Lt22RDcB%2Fl5PggD3uTOY9irCKML6TemWq2fBE7WyiNhkHGCzVfS%2FXD5NF1v%2BQ9lP3x3Bkcnt&X-Amz-Signature=2cff617a8b928f1c2ccb46a185a223cb1c8c28ecdc31c32ec47ef1e75a39c570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZOOSMCL%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6jgZZc%2FcZkKmQSVSJs6koD4jtbiQ0OPEdrpBmEcHxEAIhAOO4F%2F1zA4henIHZQBUiy0S4vlMSp55hjPD5pf51sRjQKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFQNZ7i%2FwQSYHP8Asq3AOpuSWKGZXnNWr9mSd7RFvgaezx0Q6i%2FHTKzD4tsNabj6mCLvygbQFP21riNyVJ2YBYn6FbTVVzbx8Wgg3xfRwnooDAfVGA5D6jAhIZ7pUfESE3nHmfd9Yz0h6HdhxthcOjGqZI0dgZGsFFY8InSbwtt1dwib%2BSFSAexiAQifB4lHl9jkuZJ8oTeBDzVCDk4ouR%2Bs%2FqOkmro%2FAEKAj92tx4cCBDIBMFJdVwgS0bj4fnbwZB6qlx3PuNJT9OY36wlF2cZkCXC1m95XtKwK5kkmLQo9OoK%2FqZ%2Bz1XgihuqkWr3KlY%2Brk0wSeYqTi7C2Bz%2BSg9wwxCqs%2BjfwUe1M0CS36oKgyXjZ6qcZebJGDzyVKQdav7MaiKsGJk0FXBShO4h1OOFu3v1quCdIKKsL3p%2Fn5h%2BX7jR75U34WMGfj%2FcfVjL69JuopBSyKHX3K6oxfNEuIXRzJQ05AMA8DwUWzOOLfH6rdfp2a3%2FBfqd6W1oLYnfa9Yn86x1M%2BaWMmfzqgj%2B3visAMOgr2iUs9cZydSfmEcPCojUd5%2BERb0vCIEz0AllK%2FXXd01bwbUgVXFnBZMJjDWAb9aMGN5m5vVIxmtIPKNE7NUGbr2YpakH0ZNDiXQkraEpucylSRIE9IMNTD2jtvCBjqkAbBI7txruwsgKg0dIy86J3Qzmfp7Kh1z7VS8j8TNF8qNF%2BwY5mYt69042lyjRcfCS%2BDnkkGDRvvWm%2F%2FMMzVkKqpEypi2r%2FzdvK44esHCEm7iKf5%2FJF9iRJXFPbCdufxSzUyzZkeTsUp9ptMhZpG0Lt22RDcB%2Fl5PggD3uTOY9irCKML6TemWq2fBE7WyiNhkHGCzVfS%2FXD5NF1v%2BQ9lP3x3Bkcnt&X-Amz-Signature=65f9a83604e6340460889b97e3d0ee802b1ff184e0d06caa59bde2b4028819bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZOOSMCL%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6jgZZc%2FcZkKmQSVSJs6koD4jtbiQ0OPEdrpBmEcHxEAIhAOO4F%2F1zA4henIHZQBUiy0S4vlMSp55hjPD5pf51sRjQKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFQNZ7i%2FwQSYHP8Asq3AOpuSWKGZXnNWr9mSd7RFvgaezx0Q6i%2FHTKzD4tsNabj6mCLvygbQFP21riNyVJ2YBYn6FbTVVzbx8Wgg3xfRwnooDAfVGA5D6jAhIZ7pUfESE3nHmfd9Yz0h6HdhxthcOjGqZI0dgZGsFFY8InSbwtt1dwib%2BSFSAexiAQifB4lHl9jkuZJ8oTeBDzVCDk4ouR%2Bs%2FqOkmro%2FAEKAj92tx4cCBDIBMFJdVwgS0bj4fnbwZB6qlx3PuNJT9OY36wlF2cZkCXC1m95XtKwK5kkmLQo9OoK%2FqZ%2Bz1XgihuqkWr3KlY%2Brk0wSeYqTi7C2Bz%2BSg9wwxCqs%2BjfwUe1M0CS36oKgyXjZ6qcZebJGDzyVKQdav7MaiKsGJk0FXBShO4h1OOFu3v1quCdIKKsL3p%2Fn5h%2BX7jR75U34WMGfj%2FcfVjL69JuopBSyKHX3K6oxfNEuIXRzJQ05AMA8DwUWzOOLfH6rdfp2a3%2FBfqd6W1oLYnfa9Yn86x1M%2BaWMmfzqgj%2B3visAMOgr2iUs9cZydSfmEcPCojUd5%2BERb0vCIEz0AllK%2FXXd01bwbUgVXFnBZMJjDWAb9aMGN5m5vVIxmtIPKNE7NUGbr2YpakH0ZNDiXQkraEpucylSRIE9IMNTD2jtvCBjqkAbBI7txruwsgKg0dIy86J3Qzmfp7Kh1z7VS8j8TNF8qNF%2BwY5mYt69042lyjRcfCS%2BDnkkGDRvvWm%2F%2FMMzVkKqpEypi2r%2FzdvK44esHCEm7iKf5%2FJF9iRJXFPbCdufxSzUyzZkeTsUp9ptMhZpG0Lt22RDcB%2Fl5PggD3uTOY9irCKML6TemWq2fBE7WyiNhkHGCzVfS%2FXD5NF1v%2BQ9lP3x3Bkcnt&X-Amz-Signature=4b4ca28fda53aaf832602f6ed6f158f1cb0db75ef2bc50fb9dbcfeb31e2e605c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZOOSMCL%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6jgZZc%2FcZkKmQSVSJs6koD4jtbiQ0OPEdrpBmEcHxEAIhAOO4F%2F1zA4henIHZQBUiy0S4vlMSp55hjPD5pf51sRjQKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFQNZ7i%2FwQSYHP8Asq3AOpuSWKGZXnNWr9mSd7RFvgaezx0Q6i%2FHTKzD4tsNabj6mCLvygbQFP21riNyVJ2YBYn6FbTVVzbx8Wgg3xfRwnooDAfVGA5D6jAhIZ7pUfESE3nHmfd9Yz0h6HdhxthcOjGqZI0dgZGsFFY8InSbwtt1dwib%2BSFSAexiAQifB4lHl9jkuZJ8oTeBDzVCDk4ouR%2Bs%2FqOkmro%2FAEKAj92tx4cCBDIBMFJdVwgS0bj4fnbwZB6qlx3PuNJT9OY36wlF2cZkCXC1m95XtKwK5kkmLQo9OoK%2FqZ%2Bz1XgihuqkWr3KlY%2Brk0wSeYqTi7C2Bz%2BSg9wwxCqs%2BjfwUe1M0CS36oKgyXjZ6qcZebJGDzyVKQdav7MaiKsGJk0FXBShO4h1OOFu3v1quCdIKKsL3p%2Fn5h%2BX7jR75U34WMGfj%2FcfVjL69JuopBSyKHX3K6oxfNEuIXRzJQ05AMA8DwUWzOOLfH6rdfp2a3%2FBfqd6W1oLYnfa9Yn86x1M%2BaWMmfzqgj%2B3visAMOgr2iUs9cZydSfmEcPCojUd5%2BERb0vCIEz0AllK%2FXXd01bwbUgVXFnBZMJjDWAb9aMGN5m5vVIxmtIPKNE7NUGbr2YpakH0ZNDiXQkraEpucylSRIE9IMNTD2jtvCBjqkAbBI7txruwsgKg0dIy86J3Qzmfp7Kh1z7VS8j8TNF8qNF%2BwY5mYt69042lyjRcfCS%2BDnkkGDRvvWm%2F%2FMMzVkKqpEypi2r%2FzdvK44esHCEm7iKf5%2FJF9iRJXFPbCdufxSzUyzZkeTsUp9ptMhZpG0Lt22RDcB%2Fl5PggD3uTOY9irCKML6TemWq2fBE7WyiNhkHGCzVfS%2FXD5NF1v%2BQ9lP3x3Bkcnt&X-Amz-Signature=af79a3385924a4decf0bd2f1c93cd8ce90b7e4c4d95821625965845a8a808c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
