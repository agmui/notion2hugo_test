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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6YUJMTX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC7s1qy9MySHVaxx4C1TeK7md4MRUV%2B8NaXeutLKr%2BizgIhAIF%2F0CfrWL7M7bKJ6QVenW3Gm5KELFkYVGXcA9i4yhiMKv8DCEwQABoMNjM3NDIzMTgzODA1IgwVBHxL1Fzg6Xze06Iq3AOpfFJnGuYdXw%2BWb1pSInF6%2Bn9pKTewyQHKxffs26ApnpI2N43rlkArptIyC63eNO5wou%2BIiGUj%2Fz%2FLSnav5NxfvJURCYV4N3iYAzzgz3TuF2t0mkO%2B2HA44jh%2FTlTFlm67soyV%2FLNvUI57pYbAs6u7GMzrV5y2fNJ9P%2FYhUA4EiPnq5m6pSTOWeZBpQbXUL7YWWDOzTbhRaDJCmxU2fKTii7ZH2o0XD2KQaAHvVtwxJggXn0ITTPn9zIDBwYmvB%2FLycfNb3dRVnVu1iRDarYHknb9UzKYnLiOhk%2FcedOA%2B8RgpBq4KFUUfm5xw1EVGyhIkvI7EmGGiwF7mO1ptT9NgJVql0yLoLVGZ%2BcVw6iXULDeq9Tg8oksF%2BbmYKgZBcr8k2dKVg%2B8FjpXmbkXK0GuQjiV9FTrW9Yp3rTTUuXhF7aJvS6GJk98HhZamj40ma6p3%2FXonZ8w0HD8j%2FkfQomg8661jruBXLxm975KjDASOXCvzYj4Ih0Jah%2B3eh3%2BED1hb3H1v1g7RyNL8lfvCqapeOXDMywDo6nC6B%2Ba6qnjA9k63%2BLKk3j3o%2FKvPMdBV4AiPSTf%2FhdhQLOPuX%2F9PvFZGoyk5Vs9tdQEjCXv20fZ7cseFH2EuzXiEElDtvzD28aXDBjqkAackdezOmnHOFglLrM3zhMFlZfTstMDgHTpETjZ0ffcseiqZg%2FigoYYHZA7ytXHhrLQV6f1rvEyfHXm8tFAqMi8Y%2FETM572m5MKzqVE82vI1XVICqiABQAr%2F9mEJw11gCaiDkiximmXIt%2FqnZHs1l%2BR2beqevQ9iNZAgmVV1pd%2FLwyDHunBpWcGr%2BWnscpPyLIIG7Admnr%2B%2F0kjcBdDq%2Fs3jLa3i&X-Amz-Signature=e3ec028a2cb33ca48242a0c26a88934b159a984ea64aceb3058760bd72100a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6YUJMTX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC7s1qy9MySHVaxx4C1TeK7md4MRUV%2B8NaXeutLKr%2BizgIhAIF%2F0CfrWL7M7bKJ6QVenW3Gm5KELFkYVGXcA9i4yhiMKv8DCEwQABoMNjM3NDIzMTgzODA1IgwVBHxL1Fzg6Xze06Iq3AOpfFJnGuYdXw%2BWb1pSInF6%2Bn9pKTewyQHKxffs26ApnpI2N43rlkArptIyC63eNO5wou%2BIiGUj%2Fz%2FLSnav5NxfvJURCYV4N3iYAzzgz3TuF2t0mkO%2B2HA44jh%2FTlTFlm67soyV%2FLNvUI57pYbAs6u7GMzrV5y2fNJ9P%2FYhUA4EiPnq5m6pSTOWeZBpQbXUL7YWWDOzTbhRaDJCmxU2fKTii7ZH2o0XD2KQaAHvVtwxJggXn0ITTPn9zIDBwYmvB%2FLycfNb3dRVnVu1iRDarYHknb9UzKYnLiOhk%2FcedOA%2B8RgpBq4KFUUfm5xw1EVGyhIkvI7EmGGiwF7mO1ptT9NgJVql0yLoLVGZ%2BcVw6iXULDeq9Tg8oksF%2BbmYKgZBcr8k2dKVg%2B8FjpXmbkXK0GuQjiV9FTrW9Yp3rTTUuXhF7aJvS6GJk98HhZamj40ma6p3%2FXonZ8w0HD8j%2FkfQomg8661jruBXLxm975KjDASOXCvzYj4Ih0Jah%2B3eh3%2BED1hb3H1v1g7RyNL8lfvCqapeOXDMywDo6nC6B%2Ba6qnjA9k63%2BLKk3j3o%2FKvPMdBV4AiPSTf%2FhdhQLOPuX%2F9PvFZGoyk5Vs9tdQEjCXv20fZ7cseFH2EuzXiEElDtvzD28aXDBjqkAackdezOmnHOFglLrM3zhMFlZfTstMDgHTpETjZ0ffcseiqZg%2FigoYYHZA7ytXHhrLQV6f1rvEyfHXm8tFAqMi8Y%2FETM572m5MKzqVE82vI1XVICqiABQAr%2F9mEJw11gCaiDkiximmXIt%2FqnZHs1l%2BR2beqevQ9iNZAgmVV1pd%2FLwyDHunBpWcGr%2BWnscpPyLIIG7Admnr%2B%2F0kjcBdDq%2Fs3jLa3i&X-Amz-Signature=6909835d6f540e56bcf78eacdb36b81944cc1b95ba1cb2ae42777ab16ea8d3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6YUJMTX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC7s1qy9MySHVaxx4C1TeK7md4MRUV%2B8NaXeutLKr%2BizgIhAIF%2F0CfrWL7M7bKJ6QVenW3Gm5KELFkYVGXcA9i4yhiMKv8DCEwQABoMNjM3NDIzMTgzODA1IgwVBHxL1Fzg6Xze06Iq3AOpfFJnGuYdXw%2BWb1pSInF6%2Bn9pKTewyQHKxffs26ApnpI2N43rlkArptIyC63eNO5wou%2BIiGUj%2Fz%2FLSnav5NxfvJURCYV4N3iYAzzgz3TuF2t0mkO%2B2HA44jh%2FTlTFlm67soyV%2FLNvUI57pYbAs6u7GMzrV5y2fNJ9P%2FYhUA4EiPnq5m6pSTOWeZBpQbXUL7YWWDOzTbhRaDJCmxU2fKTii7ZH2o0XD2KQaAHvVtwxJggXn0ITTPn9zIDBwYmvB%2FLycfNb3dRVnVu1iRDarYHknb9UzKYnLiOhk%2FcedOA%2B8RgpBq4KFUUfm5xw1EVGyhIkvI7EmGGiwF7mO1ptT9NgJVql0yLoLVGZ%2BcVw6iXULDeq9Tg8oksF%2BbmYKgZBcr8k2dKVg%2B8FjpXmbkXK0GuQjiV9FTrW9Yp3rTTUuXhF7aJvS6GJk98HhZamj40ma6p3%2FXonZ8w0HD8j%2FkfQomg8661jruBXLxm975KjDASOXCvzYj4Ih0Jah%2B3eh3%2BED1hb3H1v1g7RyNL8lfvCqapeOXDMywDo6nC6B%2Ba6qnjA9k63%2BLKk3j3o%2FKvPMdBV4AiPSTf%2FhdhQLOPuX%2F9PvFZGoyk5Vs9tdQEjCXv20fZ7cseFH2EuzXiEElDtvzD28aXDBjqkAackdezOmnHOFglLrM3zhMFlZfTstMDgHTpETjZ0ffcseiqZg%2FigoYYHZA7ytXHhrLQV6f1rvEyfHXm8tFAqMi8Y%2FETM572m5MKzqVE82vI1XVICqiABQAr%2F9mEJw11gCaiDkiximmXIt%2FqnZHs1l%2BR2beqevQ9iNZAgmVV1pd%2FLwyDHunBpWcGr%2BWnscpPyLIIG7Admnr%2B%2F0kjcBdDq%2Fs3jLa3i&X-Amz-Signature=56b856d841308283d4e8d01302fa5e7b06394d9685ce7924dbc0292f2bec418d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6YUJMTX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC7s1qy9MySHVaxx4C1TeK7md4MRUV%2B8NaXeutLKr%2BizgIhAIF%2F0CfrWL7M7bKJ6QVenW3Gm5KELFkYVGXcA9i4yhiMKv8DCEwQABoMNjM3NDIzMTgzODA1IgwVBHxL1Fzg6Xze06Iq3AOpfFJnGuYdXw%2BWb1pSInF6%2Bn9pKTewyQHKxffs26ApnpI2N43rlkArptIyC63eNO5wou%2BIiGUj%2Fz%2FLSnav5NxfvJURCYV4N3iYAzzgz3TuF2t0mkO%2B2HA44jh%2FTlTFlm67soyV%2FLNvUI57pYbAs6u7GMzrV5y2fNJ9P%2FYhUA4EiPnq5m6pSTOWeZBpQbXUL7YWWDOzTbhRaDJCmxU2fKTii7ZH2o0XD2KQaAHvVtwxJggXn0ITTPn9zIDBwYmvB%2FLycfNb3dRVnVu1iRDarYHknb9UzKYnLiOhk%2FcedOA%2B8RgpBq4KFUUfm5xw1EVGyhIkvI7EmGGiwF7mO1ptT9NgJVql0yLoLVGZ%2BcVw6iXULDeq9Tg8oksF%2BbmYKgZBcr8k2dKVg%2B8FjpXmbkXK0GuQjiV9FTrW9Yp3rTTUuXhF7aJvS6GJk98HhZamj40ma6p3%2FXonZ8w0HD8j%2FkfQomg8661jruBXLxm975KjDASOXCvzYj4Ih0Jah%2B3eh3%2BED1hb3H1v1g7RyNL8lfvCqapeOXDMywDo6nC6B%2Ba6qnjA9k63%2BLKk3j3o%2FKvPMdBV4AiPSTf%2FhdhQLOPuX%2F9PvFZGoyk5Vs9tdQEjCXv20fZ7cseFH2EuzXiEElDtvzD28aXDBjqkAackdezOmnHOFglLrM3zhMFlZfTstMDgHTpETjZ0ffcseiqZg%2FigoYYHZA7ytXHhrLQV6f1rvEyfHXm8tFAqMi8Y%2FETM572m5MKzqVE82vI1XVICqiABQAr%2F9mEJw11gCaiDkiximmXIt%2FqnZHs1l%2BR2beqevQ9iNZAgmVV1pd%2FLwyDHunBpWcGr%2BWnscpPyLIIG7Admnr%2B%2F0kjcBdDq%2Fs3jLa3i&X-Amz-Signature=29cf60ee4a69d0e8be9f481f863ecdb0ba12651a4638a11cbbd89da70911baa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6YUJMTX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC7s1qy9MySHVaxx4C1TeK7md4MRUV%2B8NaXeutLKr%2BizgIhAIF%2F0CfrWL7M7bKJ6QVenW3Gm5KELFkYVGXcA9i4yhiMKv8DCEwQABoMNjM3NDIzMTgzODA1IgwVBHxL1Fzg6Xze06Iq3AOpfFJnGuYdXw%2BWb1pSInF6%2Bn9pKTewyQHKxffs26ApnpI2N43rlkArptIyC63eNO5wou%2BIiGUj%2Fz%2FLSnav5NxfvJURCYV4N3iYAzzgz3TuF2t0mkO%2B2HA44jh%2FTlTFlm67soyV%2FLNvUI57pYbAs6u7GMzrV5y2fNJ9P%2FYhUA4EiPnq5m6pSTOWeZBpQbXUL7YWWDOzTbhRaDJCmxU2fKTii7ZH2o0XD2KQaAHvVtwxJggXn0ITTPn9zIDBwYmvB%2FLycfNb3dRVnVu1iRDarYHknb9UzKYnLiOhk%2FcedOA%2B8RgpBq4KFUUfm5xw1EVGyhIkvI7EmGGiwF7mO1ptT9NgJVql0yLoLVGZ%2BcVw6iXULDeq9Tg8oksF%2BbmYKgZBcr8k2dKVg%2B8FjpXmbkXK0GuQjiV9FTrW9Yp3rTTUuXhF7aJvS6GJk98HhZamj40ma6p3%2FXonZ8w0HD8j%2FkfQomg8661jruBXLxm975KjDASOXCvzYj4Ih0Jah%2B3eh3%2BED1hb3H1v1g7RyNL8lfvCqapeOXDMywDo6nC6B%2Ba6qnjA9k63%2BLKk3j3o%2FKvPMdBV4AiPSTf%2FhdhQLOPuX%2F9PvFZGoyk5Vs9tdQEjCXv20fZ7cseFH2EuzXiEElDtvzD28aXDBjqkAackdezOmnHOFglLrM3zhMFlZfTstMDgHTpETjZ0ffcseiqZg%2FigoYYHZA7ytXHhrLQV6f1rvEyfHXm8tFAqMi8Y%2FETM572m5MKzqVE82vI1XVICqiABQAr%2F9mEJw11gCaiDkiximmXIt%2FqnZHs1l%2BR2beqevQ9iNZAgmVV1pd%2FLwyDHunBpWcGr%2BWnscpPyLIIG7Admnr%2B%2F0kjcBdDq%2Fs3jLa3i&X-Amz-Signature=6144d300e174b6db8771fe587e2857ebb449b6345bd19237883732e76e7ce055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
