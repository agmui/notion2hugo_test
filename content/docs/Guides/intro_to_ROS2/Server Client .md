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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QKNDHJO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4xa%2BqjBtMyLzfPiFKeMmUZyWpBy9qLn%2B8xyvY8LHTvAiEAvwE%2BpNNMgHxYIqD5MKSxcpudEh0cj5%2FVL6oA9yEhNZMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5Eo%2FMxMmAnNP%2FeSircAzV1xNY3Opqq9xI75Pk1qShmRKNzHJyqGWLp%2BQuAg3hh6mFclmX%2Bot%2BS1ynYTIv6n36o4p%2FY4PRjm%2BRcOReFIyIZyh1HzHRGyDmAAT3%2BCggyN1HScXlQYEmN1qF1y4eYZjFN0CfZQq%2BwOJBcbCZ3XYjWJ%2B561qgyIhmM9pnmZ2FcYLTdll9KEkZPdlzDAgtAt3HsDgPpyfne%2FYvA6uhxwcKNzfaOh4OWLD1YhdMMfcoZbXFJklNcS1RDOdYxh5MdBI33NgciFii5KL5MS1ysmc8AIwxwBJwpFOBo%2FiRz6HeADWyveYLHKKSrPQC1WVZvxbEUCuKwXzDUL3twjJuR7Hv6o4nj9xp2V0cyh9m4wLc5jhvDjFdxq%2FUsIMESf3d%2Fh8c4SJjw%2Bmbe1Zk%2BxVMArvy0%2FXFebvFqL3yC62%2BG0gMHHnfeYwHCxlCChxU0oUkGC%2BMsfyGhpa0OrVsk7quGJLlwqTamXBtIl9%2FAM%2FgPzEfPU6PPOI73x22yL9JX6WO0E5X68FlgVWbO5oQgV01AHiDd%2BOKPLVjNQm9ZqwYS1wO2UmGweS%2BIkN5PZvr07zcQePvXX3DJ67BjNfCaD%2BNT97Xe8%2FdDXeBil2vZdHW1GkiF9ljUd%2Bdqt8nqBlwiMOON3r0GOqUBxqFWTQV%2BBPzayXHaa1ecGXKaU1RRcmXxaUzcaL1%2F4PX0NwVfujn%2Fy6KUqmvNzJ1B2bsE6PJSZWtkMbB0RnmbvI4nYQ4KHsjyGMuHjv%2FqLVFqtJ5BEl3ievcC61pNYZoJSpguNPPNhEIYuEuEYk19EnIWlD75ND14CwsFbJQ0c7IjNhhPF%2FdKweKuAanspO%2F53IjNmjIEtAbqi%2FmEC2RS6FQSghLT&X-Amz-Signature=4978c54fe9d444f8f0679c40b342efb5ccb39b8d963278be91e751b17d29a15a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QKNDHJO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4xa%2BqjBtMyLzfPiFKeMmUZyWpBy9qLn%2B8xyvY8LHTvAiEAvwE%2BpNNMgHxYIqD5MKSxcpudEh0cj5%2FVL6oA9yEhNZMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5Eo%2FMxMmAnNP%2FeSircAzV1xNY3Opqq9xI75Pk1qShmRKNzHJyqGWLp%2BQuAg3hh6mFclmX%2Bot%2BS1ynYTIv6n36o4p%2FY4PRjm%2BRcOReFIyIZyh1HzHRGyDmAAT3%2BCggyN1HScXlQYEmN1qF1y4eYZjFN0CfZQq%2BwOJBcbCZ3XYjWJ%2B561qgyIhmM9pnmZ2FcYLTdll9KEkZPdlzDAgtAt3HsDgPpyfne%2FYvA6uhxwcKNzfaOh4OWLD1YhdMMfcoZbXFJklNcS1RDOdYxh5MdBI33NgciFii5KL5MS1ysmc8AIwxwBJwpFOBo%2FiRz6HeADWyveYLHKKSrPQC1WVZvxbEUCuKwXzDUL3twjJuR7Hv6o4nj9xp2V0cyh9m4wLc5jhvDjFdxq%2FUsIMESf3d%2Fh8c4SJjw%2Bmbe1Zk%2BxVMArvy0%2FXFebvFqL3yC62%2BG0gMHHnfeYwHCxlCChxU0oUkGC%2BMsfyGhpa0OrVsk7quGJLlwqTamXBtIl9%2FAM%2FgPzEfPU6PPOI73x22yL9JX6WO0E5X68FlgVWbO5oQgV01AHiDd%2BOKPLVjNQm9ZqwYS1wO2UmGweS%2BIkN5PZvr07zcQePvXX3DJ67BjNfCaD%2BNT97Xe8%2FdDXeBil2vZdHW1GkiF9ljUd%2Bdqt8nqBlwiMOON3r0GOqUBxqFWTQV%2BBPzayXHaa1ecGXKaU1RRcmXxaUzcaL1%2F4PX0NwVfujn%2Fy6KUqmvNzJ1B2bsE6PJSZWtkMbB0RnmbvI4nYQ4KHsjyGMuHjv%2FqLVFqtJ5BEl3ievcC61pNYZoJSpguNPPNhEIYuEuEYk19EnIWlD75ND14CwsFbJQ0c7IjNhhPF%2FdKweKuAanspO%2F53IjNmjIEtAbqi%2FmEC2RS6FQSghLT&X-Amz-Signature=5a38bfcd1c056f435576c735c664328b81584315edded5db04fbcd8105feb517&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QKNDHJO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4xa%2BqjBtMyLzfPiFKeMmUZyWpBy9qLn%2B8xyvY8LHTvAiEAvwE%2BpNNMgHxYIqD5MKSxcpudEh0cj5%2FVL6oA9yEhNZMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5Eo%2FMxMmAnNP%2FeSircAzV1xNY3Opqq9xI75Pk1qShmRKNzHJyqGWLp%2BQuAg3hh6mFclmX%2Bot%2BS1ynYTIv6n36o4p%2FY4PRjm%2BRcOReFIyIZyh1HzHRGyDmAAT3%2BCggyN1HScXlQYEmN1qF1y4eYZjFN0CfZQq%2BwOJBcbCZ3XYjWJ%2B561qgyIhmM9pnmZ2FcYLTdll9KEkZPdlzDAgtAt3HsDgPpyfne%2FYvA6uhxwcKNzfaOh4OWLD1YhdMMfcoZbXFJklNcS1RDOdYxh5MdBI33NgciFii5KL5MS1ysmc8AIwxwBJwpFOBo%2FiRz6HeADWyveYLHKKSrPQC1WVZvxbEUCuKwXzDUL3twjJuR7Hv6o4nj9xp2V0cyh9m4wLc5jhvDjFdxq%2FUsIMESf3d%2Fh8c4SJjw%2Bmbe1Zk%2BxVMArvy0%2FXFebvFqL3yC62%2BG0gMHHnfeYwHCxlCChxU0oUkGC%2BMsfyGhpa0OrVsk7quGJLlwqTamXBtIl9%2FAM%2FgPzEfPU6PPOI73x22yL9JX6WO0E5X68FlgVWbO5oQgV01AHiDd%2BOKPLVjNQm9ZqwYS1wO2UmGweS%2BIkN5PZvr07zcQePvXX3DJ67BjNfCaD%2BNT97Xe8%2FdDXeBil2vZdHW1GkiF9ljUd%2Bdqt8nqBlwiMOON3r0GOqUBxqFWTQV%2BBPzayXHaa1ecGXKaU1RRcmXxaUzcaL1%2F4PX0NwVfujn%2Fy6KUqmvNzJ1B2bsE6PJSZWtkMbB0RnmbvI4nYQ4KHsjyGMuHjv%2FqLVFqtJ5BEl3ievcC61pNYZoJSpguNPPNhEIYuEuEYk19EnIWlD75ND14CwsFbJQ0c7IjNhhPF%2FdKweKuAanspO%2F53IjNmjIEtAbqi%2FmEC2RS6FQSghLT&X-Amz-Signature=75bd28ea12c7780a0a8f099497f0304ca9e18c80d43731d9d649ecedb7c263c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QKNDHJO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4xa%2BqjBtMyLzfPiFKeMmUZyWpBy9qLn%2B8xyvY8LHTvAiEAvwE%2BpNNMgHxYIqD5MKSxcpudEh0cj5%2FVL6oA9yEhNZMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5Eo%2FMxMmAnNP%2FeSircAzV1xNY3Opqq9xI75Pk1qShmRKNzHJyqGWLp%2BQuAg3hh6mFclmX%2Bot%2BS1ynYTIv6n36o4p%2FY4PRjm%2BRcOReFIyIZyh1HzHRGyDmAAT3%2BCggyN1HScXlQYEmN1qF1y4eYZjFN0CfZQq%2BwOJBcbCZ3XYjWJ%2B561qgyIhmM9pnmZ2FcYLTdll9KEkZPdlzDAgtAt3HsDgPpyfne%2FYvA6uhxwcKNzfaOh4OWLD1YhdMMfcoZbXFJklNcS1RDOdYxh5MdBI33NgciFii5KL5MS1ysmc8AIwxwBJwpFOBo%2FiRz6HeADWyveYLHKKSrPQC1WVZvxbEUCuKwXzDUL3twjJuR7Hv6o4nj9xp2V0cyh9m4wLc5jhvDjFdxq%2FUsIMESf3d%2Fh8c4SJjw%2Bmbe1Zk%2BxVMArvy0%2FXFebvFqL3yC62%2BG0gMHHnfeYwHCxlCChxU0oUkGC%2BMsfyGhpa0OrVsk7quGJLlwqTamXBtIl9%2FAM%2FgPzEfPU6PPOI73x22yL9JX6WO0E5X68FlgVWbO5oQgV01AHiDd%2BOKPLVjNQm9ZqwYS1wO2UmGweS%2BIkN5PZvr07zcQePvXX3DJ67BjNfCaD%2BNT97Xe8%2FdDXeBil2vZdHW1GkiF9ljUd%2Bdqt8nqBlwiMOON3r0GOqUBxqFWTQV%2BBPzayXHaa1ecGXKaU1RRcmXxaUzcaL1%2F4PX0NwVfujn%2Fy6KUqmvNzJ1B2bsE6PJSZWtkMbB0RnmbvI4nYQ4KHsjyGMuHjv%2FqLVFqtJ5BEl3ievcC61pNYZoJSpguNPPNhEIYuEuEYk19EnIWlD75ND14CwsFbJQ0c7IjNhhPF%2FdKweKuAanspO%2F53IjNmjIEtAbqi%2FmEC2RS6FQSghLT&X-Amz-Signature=5b8b60a2fa667b6801efd3b679ff0cebf2c1263288ac1e1aa772d720584b49c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QKNDHJO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4xa%2BqjBtMyLzfPiFKeMmUZyWpBy9qLn%2B8xyvY8LHTvAiEAvwE%2BpNNMgHxYIqD5MKSxcpudEh0cj5%2FVL6oA9yEhNZMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5Eo%2FMxMmAnNP%2FeSircAzV1xNY3Opqq9xI75Pk1qShmRKNzHJyqGWLp%2BQuAg3hh6mFclmX%2Bot%2BS1ynYTIv6n36o4p%2FY4PRjm%2BRcOReFIyIZyh1HzHRGyDmAAT3%2BCggyN1HScXlQYEmN1qF1y4eYZjFN0CfZQq%2BwOJBcbCZ3XYjWJ%2B561qgyIhmM9pnmZ2FcYLTdll9KEkZPdlzDAgtAt3HsDgPpyfne%2FYvA6uhxwcKNzfaOh4OWLD1YhdMMfcoZbXFJklNcS1RDOdYxh5MdBI33NgciFii5KL5MS1ysmc8AIwxwBJwpFOBo%2FiRz6HeADWyveYLHKKSrPQC1WVZvxbEUCuKwXzDUL3twjJuR7Hv6o4nj9xp2V0cyh9m4wLc5jhvDjFdxq%2FUsIMESf3d%2Fh8c4SJjw%2Bmbe1Zk%2BxVMArvy0%2FXFebvFqL3yC62%2BG0gMHHnfeYwHCxlCChxU0oUkGC%2BMsfyGhpa0OrVsk7quGJLlwqTamXBtIl9%2FAM%2FgPzEfPU6PPOI73x22yL9JX6WO0E5X68FlgVWbO5oQgV01AHiDd%2BOKPLVjNQm9ZqwYS1wO2UmGweS%2BIkN5PZvr07zcQePvXX3DJ67BjNfCaD%2BNT97Xe8%2FdDXeBil2vZdHW1GkiF9ljUd%2Bdqt8nqBlwiMOON3r0GOqUBxqFWTQV%2BBPzayXHaa1ecGXKaU1RRcmXxaUzcaL1%2F4PX0NwVfujn%2Fy6KUqmvNzJ1B2bsE6PJSZWtkMbB0RnmbvI4nYQ4KHsjyGMuHjv%2FqLVFqtJ5BEl3ievcC61pNYZoJSpguNPPNhEIYuEuEYk19EnIWlD75ND14CwsFbJQ0c7IjNhhPF%2FdKweKuAanspO%2F53IjNmjIEtAbqi%2FmEC2RS6FQSghLT&X-Amz-Signature=862651982a8ac0a3b41744f0e795ada9835fcb3c8acf41bea1421d6dce059d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
