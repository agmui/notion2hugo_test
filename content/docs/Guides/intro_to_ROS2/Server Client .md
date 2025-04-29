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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQPIINX%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtt8d7YLuc%2Bkee17IosWwpA3yV8yHe%2Bj0cjvABOnzoAwIhAJYtDz5vzy%2BCgXx8GI1EqyIdKuqM7GHeH4BmJPTgZc%2BtKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbrrDtlZxaPTugny4q3ANG20OglUNvPiT4WbI8UNCXqNZ7tVZe1Fo7R8x%2BcQi7zZKEYYqfB6PfRokoVInBqrSTJjC%2FsJKVIRllc5N84CxhcOrlfgIeXs2Y8wajpSHzkOCfzMPrtBfRDLpG%2Bz5y6oCUuXyfn04bC%2BEMj7GKsbQ9gaoqd7fTzKvk6YIwTFVD67T1CItK9OrpN7Y3erhkGcsAK2HYoANDty4q8og0RN%2Fz8HH0JtGoa5316Y7MX2%2F0Wpc9vX7euXSobDgxF1aSSYpURJxi%2FJVJiCf%2FyZkx6ggfG5TCdtluf5R%2BtcNPr8GiovymfOX5z%2B%2FbrdKnM47zj9JuuIapixSHpzELGHZLQsw68E2kpfHfc2FF98DHx%2FGkH9MKVEiXyVmpPg%2FybBg%2FLfZs%2B4RTuDwpiA5cwYvp1e9YU6cdd1K1ecWcoNT4AQbjqCaCfF1tiuhFOsqnpha00cQBmFbALzJWh6yx6KYZrhVBX4jwX%2Fgb0ZAm%2FI1NSyU8uAfoztVFejmW3LLz6qV65d0XuucSJa2s7KL819ySXp5XnQw1BcNDj5P90xzKr3AFabJT8RLw%2F1u9TZ2XCefqOjKRJbWBaKnPt3ysazyzS7rgBeK%2BzKAdQADUTEDr6QOgNuL%2Fbc6fOkBTGSkXBzCtxMLABjqkAbM7k8oxn3kAVUcc0yod4%2FYkWRJFNpC%2F8WalIuBvai9sVmLUYisjrRWSOl%2Bo9270ktJlS3k0f%2BEgmlPo4Q1RyANJOSaYXgsrU50xgvlRYt%2Fsy6zHqp1RreFZ6naux8ygxSW5K7QAoFVA8ufNqitqDRMLlxYFYQVNGD%2BfST4MnGTxa2kJw%2BRALyr4dDumd%2FZRkiOq%2BV61PMS%2FBzANeEuaG11X%2B6RV&X-Amz-Signature=b8dbd01cfc2f1ecca01890a6e78c8e1658c53a58d15e9a24b8b7473ad32a6196&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQPIINX%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtt8d7YLuc%2Bkee17IosWwpA3yV8yHe%2Bj0cjvABOnzoAwIhAJYtDz5vzy%2BCgXx8GI1EqyIdKuqM7GHeH4BmJPTgZc%2BtKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbrrDtlZxaPTugny4q3ANG20OglUNvPiT4WbI8UNCXqNZ7tVZe1Fo7R8x%2BcQi7zZKEYYqfB6PfRokoVInBqrSTJjC%2FsJKVIRllc5N84CxhcOrlfgIeXs2Y8wajpSHzkOCfzMPrtBfRDLpG%2Bz5y6oCUuXyfn04bC%2BEMj7GKsbQ9gaoqd7fTzKvk6YIwTFVD67T1CItK9OrpN7Y3erhkGcsAK2HYoANDty4q8og0RN%2Fz8HH0JtGoa5316Y7MX2%2F0Wpc9vX7euXSobDgxF1aSSYpURJxi%2FJVJiCf%2FyZkx6ggfG5TCdtluf5R%2BtcNPr8GiovymfOX5z%2B%2FbrdKnM47zj9JuuIapixSHpzELGHZLQsw68E2kpfHfc2FF98DHx%2FGkH9MKVEiXyVmpPg%2FybBg%2FLfZs%2B4RTuDwpiA5cwYvp1e9YU6cdd1K1ecWcoNT4AQbjqCaCfF1tiuhFOsqnpha00cQBmFbALzJWh6yx6KYZrhVBX4jwX%2Fgb0ZAm%2FI1NSyU8uAfoztVFejmW3LLz6qV65d0XuucSJa2s7KL819ySXp5XnQw1BcNDj5P90xzKr3AFabJT8RLw%2F1u9TZ2XCefqOjKRJbWBaKnPt3ysazyzS7rgBeK%2BzKAdQADUTEDr6QOgNuL%2Fbc6fOkBTGSkXBzCtxMLABjqkAbM7k8oxn3kAVUcc0yod4%2FYkWRJFNpC%2F8WalIuBvai9sVmLUYisjrRWSOl%2Bo9270ktJlS3k0f%2BEgmlPo4Q1RyANJOSaYXgsrU50xgvlRYt%2Fsy6zHqp1RreFZ6naux8ygxSW5K7QAoFVA8ufNqitqDRMLlxYFYQVNGD%2BfST4MnGTxa2kJw%2BRALyr4dDumd%2FZRkiOq%2BV61PMS%2FBzANeEuaG11X%2B6RV&X-Amz-Signature=ab6a321f25f3fe48f227256e945a1b02456a5df3783fcdb56d58f4c1c19fb083&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQPIINX%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtt8d7YLuc%2Bkee17IosWwpA3yV8yHe%2Bj0cjvABOnzoAwIhAJYtDz5vzy%2BCgXx8GI1EqyIdKuqM7GHeH4BmJPTgZc%2BtKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbrrDtlZxaPTugny4q3ANG20OglUNvPiT4WbI8UNCXqNZ7tVZe1Fo7R8x%2BcQi7zZKEYYqfB6PfRokoVInBqrSTJjC%2FsJKVIRllc5N84CxhcOrlfgIeXs2Y8wajpSHzkOCfzMPrtBfRDLpG%2Bz5y6oCUuXyfn04bC%2BEMj7GKsbQ9gaoqd7fTzKvk6YIwTFVD67T1CItK9OrpN7Y3erhkGcsAK2HYoANDty4q8og0RN%2Fz8HH0JtGoa5316Y7MX2%2F0Wpc9vX7euXSobDgxF1aSSYpURJxi%2FJVJiCf%2FyZkx6ggfG5TCdtluf5R%2BtcNPr8GiovymfOX5z%2B%2FbrdKnM47zj9JuuIapixSHpzELGHZLQsw68E2kpfHfc2FF98DHx%2FGkH9MKVEiXyVmpPg%2FybBg%2FLfZs%2B4RTuDwpiA5cwYvp1e9YU6cdd1K1ecWcoNT4AQbjqCaCfF1tiuhFOsqnpha00cQBmFbALzJWh6yx6KYZrhVBX4jwX%2Fgb0ZAm%2FI1NSyU8uAfoztVFejmW3LLz6qV65d0XuucSJa2s7KL819ySXp5XnQw1BcNDj5P90xzKr3AFabJT8RLw%2F1u9TZ2XCefqOjKRJbWBaKnPt3ysazyzS7rgBeK%2BzKAdQADUTEDr6QOgNuL%2Fbc6fOkBTGSkXBzCtxMLABjqkAbM7k8oxn3kAVUcc0yod4%2FYkWRJFNpC%2F8WalIuBvai9sVmLUYisjrRWSOl%2Bo9270ktJlS3k0f%2BEgmlPo4Q1RyANJOSaYXgsrU50xgvlRYt%2Fsy6zHqp1RreFZ6naux8ygxSW5K7QAoFVA8ufNqitqDRMLlxYFYQVNGD%2BfST4MnGTxa2kJw%2BRALyr4dDumd%2FZRkiOq%2BV61PMS%2FBzANeEuaG11X%2B6RV&X-Amz-Signature=2212107a9f76873460936fef74097cfe18342750b15dfed2da0e80aece9d1931&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQPIINX%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtt8d7YLuc%2Bkee17IosWwpA3yV8yHe%2Bj0cjvABOnzoAwIhAJYtDz5vzy%2BCgXx8GI1EqyIdKuqM7GHeH4BmJPTgZc%2BtKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbrrDtlZxaPTugny4q3ANG20OglUNvPiT4WbI8UNCXqNZ7tVZe1Fo7R8x%2BcQi7zZKEYYqfB6PfRokoVInBqrSTJjC%2FsJKVIRllc5N84CxhcOrlfgIeXs2Y8wajpSHzkOCfzMPrtBfRDLpG%2Bz5y6oCUuXyfn04bC%2BEMj7GKsbQ9gaoqd7fTzKvk6YIwTFVD67T1CItK9OrpN7Y3erhkGcsAK2HYoANDty4q8og0RN%2Fz8HH0JtGoa5316Y7MX2%2F0Wpc9vX7euXSobDgxF1aSSYpURJxi%2FJVJiCf%2FyZkx6ggfG5TCdtluf5R%2BtcNPr8GiovymfOX5z%2B%2FbrdKnM47zj9JuuIapixSHpzELGHZLQsw68E2kpfHfc2FF98DHx%2FGkH9MKVEiXyVmpPg%2FybBg%2FLfZs%2B4RTuDwpiA5cwYvp1e9YU6cdd1K1ecWcoNT4AQbjqCaCfF1tiuhFOsqnpha00cQBmFbALzJWh6yx6KYZrhVBX4jwX%2Fgb0ZAm%2FI1NSyU8uAfoztVFejmW3LLz6qV65d0XuucSJa2s7KL819ySXp5XnQw1BcNDj5P90xzKr3AFabJT8RLw%2F1u9TZ2XCefqOjKRJbWBaKnPt3ysazyzS7rgBeK%2BzKAdQADUTEDr6QOgNuL%2Fbc6fOkBTGSkXBzCtxMLABjqkAbM7k8oxn3kAVUcc0yod4%2FYkWRJFNpC%2F8WalIuBvai9sVmLUYisjrRWSOl%2Bo9270ktJlS3k0f%2BEgmlPo4Q1RyANJOSaYXgsrU50xgvlRYt%2Fsy6zHqp1RreFZ6naux8ygxSW5K7QAoFVA8ufNqitqDRMLlxYFYQVNGD%2BfST4MnGTxa2kJw%2BRALyr4dDumd%2FZRkiOq%2BV61PMS%2FBzANeEuaG11X%2B6RV&X-Amz-Signature=544ffd4a7928a3a39eea590b4d1cb941591a93033f1f79c3a1fd0255035a09e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQPIINX%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtt8d7YLuc%2Bkee17IosWwpA3yV8yHe%2Bj0cjvABOnzoAwIhAJYtDz5vzy%2BCgXx8GI1EqyIdKuqM7GHeH4BmJPTgZc%2BtKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbrrDtlZxaPTugny4q3ANG20OglUNvPiT4WbI8UNCXqNZ7tVZe1Fo7R8x%2BcQi7zZKEYYqfB6PfRokoVInBqrSTJjC%2FsJKVIRllc5N84CxhcOrlfgIeXs2Y8wajpSHzkOCfzMPrtBfRDLpG%2Bz5y6oCUuXyfn04bC%2BEMj7GKsbQ9gaoqd7fTzKvk6YIwTFVD67T1CItK9OrpN7Y3erhkGcsAK2HYoANDty4q8og0RN%2Fz8HH0JtGoa5316Y7MX2%2F0Wpc9vX7euXSobDgxF1aSSYpURJxi%2FJVJiCf%2FyZkx6ggfG5TCdtluf5R%2BtcNPr8GiovymfOX5z%2B%2FbrdKnM47zj9JuuIapixSHpzELGHZLQsw68E2kpfHfc2FF98DHx%2FGkH9MKVEiXyVmpPg%2FybBg%2FLfZs%2B4RTuDwpiA5cwYvp1e9YU6cdd1K1ecWcoNT4AQbjqCaCfF1tiuhFOsqnpha00cQBmFbALzJWh6yx6KYZrhVBX4jwX%2Fgb0ZAm%2FI1NSyU8uAfoztVFejmW3LLz6qV65d0XuucSJa2s7KL819ySXp5XnQw1BcNDj5P90xzKr3AFabJT8RLw%2F1u9TZ2XCefqOjKRJbWBaKnPt3ysazyzS7rgBeK%2BzKAdQADUTEDr6QOgNuL%2Fbc6fOkBTGSkXBzCtxMLABjqkAbM7k8oxn3kAVUcc0yod4%2FYkWRJFNpC%2F8WalIuBvai9sVmLUYisjrRWSOl%2Bo9270ktJlS3k0f%2BEgmlPo4Q1RyANJOSaYXgsrU50xgvlRYt%2Fsy6zHqp1RreFZ6naux8ygxSW5K7QAoFVA8ufNqitqDRMLlxYFYQVNGD%2BfST4MnGTxa2kJw%2BRALyr4dDumd%2FZRkiOq%2BV61PMS%2FBzANeEuaG11X%2B6RV&X-Amz-Signature=d01917c24e4b1f2f2f7b31e5bb9c40c020fa94ed9cb34ceab4db0a183e40ca15&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
