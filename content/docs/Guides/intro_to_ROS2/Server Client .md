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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2EQEU7E%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FVWpq2xKzOjYePKdlnML9jaf%2BoxM%2FuFSsJfgY0vbZ4AiEAikxyFuUYFZBe8gZY%2BhS1Gs%2FJODz2MQrt7mnlXJ6xVwAq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDZEymhgQDbZd0KkAircA7l85Jjl9YYdflzERBDOgh7pTEwaO4SSHFJ%2BxyqPjOTlYGQEJBDhszAlXwEDEOP9s5znCAR8p8qZtn60EvEfscH0J%2Bi8eEn24JG7A93SHz6GAgFzUll5sMy6HpUB7e5KB9eLbz7uNZKrrf9lKJpR75555VpDROdXG6mlpJ6xIv6fxUG8O83WabEcj5fMWCPjL1nsXH%2BYURId2DRIxBwjBmx%2BgQSoPqYqL05t%2FXao3bp2B91nBQk%2FvfnpK4%2BF2qC9uVDnOi20Cu3ndS257K%2BJORRM7Kw%2Fg5sg5mcdj9Uo1fcpqcYbmM9DOqfFFT6av7khCimU1XTW6M5m4ZOKneByyywwTx7Ml7VnEyMIW93sUikGOc3RiTdc1s%2F4z3Skn%2Frd6P3Y7cHbhoEWUSx4Ys5lh0igq5uPlS6UYX%2FCq1tTJyphVUTNTOy0BfIzr%2FYFcmV6KSLNdHFDInf4jwqb%2B%2FcX8zOc7NU2BV3iEHrhPOvzeQsR6l7lfFZY%2FgftlDE2uLJyirbmjcbu53MVjLQsDs5jZs9EYc88JznzsVzvv6lkWQl3sBoREeUOT3%2FRZEg1zobX6hVIa2dbZUXifSfqDdCXP2weZq3FlDpfmjY4iZoqM7%2BgJHgV2Bld3Lwx5e7UMOedi8IGOqUBVBu3fk5WI7QKS%2Bryrh7gxp9QpdeOAGWqVNey3TFemwt%2BHqVhUALdt%2B5r1GdYtIq7GxkP65fSw5c7aiyhfM2VCsE%2Fo%2F2BprfVCxSQR7HvSVQRHIO3Gmo1Lh5zvPXklOjYAues1NghTph4dA%2B5%2F%2B8LsEwmRPg%2FWEzRmWgJbwfrGyNAaVdsnW1l7rrYS25aGZzndj5HywIUjYBlHYnsJFb7H9I6WGxF&X-Amz-Signature=d92bf2acaf4c12f3a5d6189ef4b554d1d26b341d82f5548d61d38f36efcbdbf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2EQEU7E%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FVWpq2xKzOjYePKdlnML9jaf%2BoxM%2FuFSsJfgY0vbZ4AiEAikxyFuUYFZBe8gZY%2BhS1Gs%2FJODz2MQrt7mnlXJ6xVwAq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDZEymhgQDbZd0KkAircA7l85Jjl9YYdflzERBDOgh7pTEwaO4SSHFJ%2BxyqPjOTlYGQEJBDhszAlXwEDEOP9s5znCAR8p8qZtn60EvEfscH0J%2Bi8eEn24JG7A93SHz6GAgFzUll5sMy6HpUB7e5KB9eLbz7uNZKrrf9lKJpR75555VpDROdXG6mlpJ6xIv6fxUG8O83WabEcj5fMWCPjL1nsXH%2BYURId2DRIxBwjBmx%2BgQSoPqYqL05t%2FXao3bp2B91nBQk%2FvfnpK4%2BF2qC9uVDnOi20Cu3ndS257K%2BJORRM7Kw%2Fg5sg5mcdj9Uo1fcpqcYbmM9DOqfFFT6av7khCimU1XTW6M5m4ZOKneByyywwTx7Ml7VnEyMIW93sUikGOc3RiTdc1s%2F4z3Skn%2Frd6P3Y7cHbhoEWUSx4Ys5lh0igq5uPlS6UYX%2FCq1tTJyphVUTNTOy0BfIzr%2FYFcmV6KSLNdHFDInf4jwqb%2B%2FcX8zOc7NU2BV3iEHrhPOvzeQsR6l7lfFZY%2FgftlDE2uLJyirbmjcbu53MVjLQsDs5jZs9EYc88JznzsVzvv6lkWQl3sBoREeUOT3%2FRZEg1zobX6hVIa2dbZUXifSfqDdCXP2weZq3FlDpfmjY4iZoqM7%2BgJHgV2Bld3Lwx5e7UMOedi8IGOqUBVBu3fk5WI7QKS%2Bryrh7gxp9QpdeOAGWqVNey3TFemwt%2BHqVhUALdt%2B5r1GdYtIq7GxkP65fSw5c7aiyhfM2VCsE%2Fo%2F2BprfVCxSQR7HvSVQRHIO3Gmo1Lh5zvPXklOjYAues1NghTph4dA%2B5%2F%2B8LsEwmRPg%2FWEzRmWgJbwfrGyNAaVdsnW1l7rrYS25aGZzndj5HywIUjYBlHYnsJFb7H9I6WGxF&X-Amz-Signature=4f51debaeaab4b8a28ffcc5b30cf192186d3073ddd450d82d14df81aa90c007e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2EQEU7E%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FVWpq2xKzOjYePKdlnML9jaf%2BoxM%2FuFSsJfgY0vbZ4AiEAikxyFuUYFZBe8gZY%2BhS1Gs%2FJODz2MQrt7mnlXJ6xVwAq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDZEymhgQDbZd0KkAircA7l85Jjl9YYdflzERBDOgh7pTEwaO4SSHFJ%2BxyqPjOTlYGQEJBDhszAlXwEDEOP9s5znCAR8p8qZtn60EvEfscH0J%2Bi8eEn24JG7A93SHz6GAgFzUll5sMy6HpUB7e5KB9eLbz7uNZKrrf9lKJpR75555VpDROdXG6mlpJ6xIv6fxUG8O83WabEcj5fMWCPjL1nsXH%2BYURId2DRIxBwjBmx%2BgQSoPqYqL05t%2FXao3bp2B91nBQk%2FvfnpK4%2BF2qC9uVDnOi20Cu3ndS257K%2BJORRM7Kw%2Fg5sg5mcdj9Uo1fcpqcYbmM9DOqfFFT6av7khCimU1XTW6M5m4ZOKneByyywwTx7Ml7VnEyMIW93sUikGOc3RiTdc1s%2F4z3Skn%2Frd6P3Y7cHbhoEWUSx4Ys5lh0igq5uPlS6UYX%2FCq1tTJyphVUTNTOy0BfIzr%2FYFcmV6KSLNdHFDInf4jwqb%2B%2FcX8zOc7NU2BV3iEHrhPOvzeQsR6l7lfFZY%2FgftlDE2uLJyirbmjcbu53MVjLQsDs5jZs9EYc88JznzsVzvv6lkWQl3sBoREeUOT3%2FRZEg1zobX6hVIa2dbZUXifSfqDdCXP2weZq3FlDpfmjY4iZoqM7%2BgJHgV2Bld3Lwx5e7UMOedi8IGOqUBVBu3fk5WI7QKS%2Bryrh7gxp9QpdeOAGWqVNey3TFemwt%2BHqVhUALdt%2B5r1GdYtIq7GxkP65fSw5c7aiyhfM2VCsE%2Fo%2F2BprfVCxSQR7HvSVQRHIO3Gmo1Lh5zvPXklOjYAues1NghTph4dA%2B5%2F%2B8LsEwmRPg%2FWEzRmWgJbwfrGyNAaVdsnW1l7rrYS25aGZzndj5HywIUjYBlHYnsJFb7H9I6WGxF&X-Amz-Signature=3d1d063155f6cd43cafe329386dad87899e8c12b2e48af3e54faa683b2267c91&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2EQEU7E%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FVWpq2xKzOjYePKdlnML9jaf%2BoxM%2FuFSsJfgY0vbZ4AiEAikxyFuUYFZBe8gZY%2BhS1Gs%2FJODz2MQrt7mnlXJ6xVwAq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDZEymhgQDbZd0KkAircA7l85Jjl9YYdflzERBDOgh7pTEwaO4SSHFJ%2BxyqPjOTlYGQEJBDhszAlXwEDEOP9s5znCAR8p8qZtn60EvEfscH0J%2Bi8eEn24JG7A93SHz6GAgFzUll5sMy6HpUB7e5KB9eLbz7uNZKrrf9lKJpR75555VpDROdXG6mlpJ6xIv6fxUG8O83WabEcj5fMWCPjL1nsXH%2BYURId2DRIxBwjBmx%2BgQSoPqYqL05t%2FXao3bp2B91nBQk%2FvfnpK4%2BF2qC9uVDnOi20Cu3ndS257K%2BJORRM7Kw%2Fg5sg5mcdj9Uo1fcpqcYbmM9DOqfFFT6av7khCimU1XTW6M5m4ZOKneByyywwTx7Ml7VnEyMIW93sUikGOc3RiTdc1s%2F4z3Skn%2Frd6P3Y7cHbhoEWUSx4Ys5lh0igq5uPlS6UYX%2FCq1tTJyphVUTNTOy0BfIzr%2FYFcmV6KSLNdHFDInf4jwqb%2B%2FcX8zOc7NU2BV3iEHrhPOvzeQsR6l7lfFZY%2FgftlDE2uLJyirbmjcbu53MVjLQsDs5jZs9EYc88JznzsVzvv6lkWQl3sBoREeUOT3%2FRZEg1zobX6hVIa2dbZUXifSfqDdCXP2weZq3FlDpfmjY4iZoqM7%2BgJHgV2Bld3Lwx5e7UMOedi8IGOqUBVBu3fk5WI7QKS%2Bryrh7gxp9QpdeOAGWqVNey3TFemwt%2BHqVhUALdt%2B5r1GdYtIq7GxkP65fSw5c7aiyhfM2VCsE%2Fo%2F2BprfVCxSQR7HvSVQRHIO3Gmo1Lh5zvPXklOjYAues1NghTph4dA%2B5%2F%2B8LsEwmRPg%2FWEzRmWgJbwfrGyNAaVdsnW1l7rrYS25aGZzndj5HywIUjYBlHYnsJFb7H9I6WGxF&X-Amz-Signature=08e2711f03de306c7b9f77318d2aacf835bfb5b092c129519b0b66b133bdc00a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2EQEU7E%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FVWpq2xKzOjYePKdlnML9jaf%2BoxM%2FuFSsJfgY0vbZ4AiEAikxyFuUYFZBe8gZY%2BhS1Gs%2FJODz2MQrt7mnlXJ6xVwAq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDZEymhgQDbZd0KkAircA7l85Jjl9YYdflzERBDOgh7pTEwaO4SSHFJ%2BxyqPjOTlYGQEJBDhszAlXwEDEOP9s5znCAR8p8qZtn60EvEfscH0J%2Bi8eEn24JG7A93SHz6GAgFzUll5sMy6HpUB7e5KB9eLbz7uNZKrrf9lKJpR75555VpDROdXG6mlpJ6xIv6fxUG8O83WabEcj5fMWCPjL1nsXH%2BYURId2DRIxBwjBmx%2BgQSoPqYqL05t%2FXao3bp2B91nBQk%2FvfnpK4%2BF2qC9uVDnOi20Cu3ndS257K%2BJORRM7Kw%2Fg5sg5mcdj9Uo1fcpqcYbmM9DOqfFFT6av7khCimU1XTW6M5m4ZOKneByyywwTx7Ml7VnEyMIW93sUikGOc3RiTdc1s%2F4z3Skn%2Frd6P3Y7cHbhoEWUSx4Ys5lh0igq5uPlS6UYX%2FCq1tTJyphVUTNTOy0BfIzr%2FYFcmV6KSLNdHFDInf4jwqb%2B%2FcX8zOc7NU2BV3iEHrhPOvzeQsR6l7lfFZY%2FgftlDE2uLJyirbmjcbu53MVjLQsDs5jZs9EYc88JznzsVzvv6lkWQl3sBoREeUOT3%2FRZEg1zobX6hVIa2dbZUXifSfqDdCXP2weZq3FlDpfmjY4iZoqM7%2BgJHgV2Bld3Lwx5e7UMOedi8IGOqUBVBu3fk5WI7QKS%2Bryrh7gxp9QpdeOAGWqVNey3TFemwt%2BHqVhUALdt%2B5r1GdYtIq7GxkP65fSw5c7aiyhfM2VCsE%2Fo%2F2BprfVCxSQR7HvSVQRHIO3Gmo1Lh5zvPXklOjYAues1NghTph4dA%2B5%2F%2B8LsEwmRPg%2FWEzRmWgJbwfrGyNAaVdsnW1l7rrYS25aGZzndj5HywIUjYBlHYnsJFb7H9I6WGxF&X-Amz-Signature=f4db1e67c3645da4cabbd50bf465e1d91843ef02f3d02f3a337a2d0a749c5fc1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
