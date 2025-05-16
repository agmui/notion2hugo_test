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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITTNPZC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApLH%2FHyteomie6PnH5ieGG1UBqYNDXKsNS8CRE9qTetAiEAsqjhVPAkzohPcZ3s1PAQeGP9exFjyH9BY7enY2OiLAYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHY8GJpAN5rLb7eWTCrcAycP%2BLbQAYF1MATfLTTy9F6IUiwjlfNMNSPkCq%2FXNhFUae11fo9CUlO6sm8HxtHdFsGfAiGLWlF1bLGY1ZsdqzGC%2Bz%2Bx1DpLg2r%2F%2FGKl1%2FS5z9AQ1O0UH7fKsPIzEdhfF%2F%2FuDomCepPRkor2F7Z9%2BRb6vxjo%2Fazo2PYLHb7ej%2B2SB3OPHtM%2B7JvDq2aZYvwzjV6sSj6g%2FFsi3k%2BthN5t4awTY%2FLjDylrW5fj%2BXUbIcdmqDtxkRz7pnKhl3G83bEkkfu0vENuaJl4Pj2zGsdZzE77UAM5Oo2h7vD%2FWTPpDSjB%2B7TRnvO82NJfXf5HOdYjWZZZpWcf1y31ySXGY%2F2ZytJ3V7hBKZtIFNyd9HiJ7IDu4Lw%2BpynoslZTN9vOQm5Q7%2B0f%2BfLIvJBzB7OAcIrNfhnx%2BM2wEJgu52CQhLnIqrtVsZqTMKQ%2FhzCzYJnQRn%2B9g8ucbNFdGSZelBR6GzbBrLYRtxhvi8KOdI%2BuNQsDmpMFLzHhEy1Gr%2BgiB1RRahblRohYHzaiG0H%2BOjoCH%2BUd%2Bp6On3cJU%2B44bn5dyZCqK6z2NXe8ysJcIhhLITCoJZNUMwvM7Ds0%2FK2Utc%2FrsKfcOovl%2BW5pJW8Z3TB7Z4PhAYAgjTA%2FdKctTykd9bmEMLWnnMEGOqUBPdBMbYQZtqEj%2FSI0OSBcmwXgelan9ghrB88rbILnuovab%2FCfV3Bgb0DrTC5ggvJDEXNgz6pBn%2F97ZLBnSWHo3lUc%2BqVXx0evCxxa7e1CeV6kfJPEpDU5hlb072KzJpxuhkJUtKsQozepsUVcIW8B5bMCFHpOQrrSQ8kq952IdfLd3jdCo23PD0Wdeum%2BSvuBQBcPqjs6xdqmWz0sWKSYHMbjR5I%2B&X-Amz-Signature=82c102cde26726ad17983a40dc14fdd76836cea8486c7d3f8113969972bc27c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITTNPZC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApLH%2FHyteomie6PnH5ieGG1UBqYNDXKsNS8CRE9qTetAiEAsqjhVPAkzohPcZ3s1PAQeGP9exFjyH9BY7enY2OiLAYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHY8GJpAN5rLb7eWTCrcAycP%2BLbQAYF1MATfLTTy9F6IUiwjlfNMNSPkCq%2FXNhFUae11fo9CUlO6sm8HxtHdFsGfAiGLWlF1bLGY1ZsdqzGC%2Bz%2Bx1DpLg2r%2F%2FGKl1%2FS5z9AQ1O0UH7fKsPIzEdhfF%2F%2FuDomCepPRkor2F7Z9%2BRb6vxjo%2Fazo2PYLHb7ej%2B2SB3OPHtM%2B7JvDq2aZYvwzjV6sSj6g%2FFsi3k%2BthN5t4awTY%2FLjDylrW5fj%2BXUbIcdmqDtxkRz7pnKhl3G83bEkkfu0vENuaJl4Pj2zGsdZzE77UAM5Oo2h7vD%2FWTPpDSjB%2B7TRnvO82NJfXf5HOdYjWZZZpWcf1y31ySXGY%2F2ZytJ3V7hBKZtIFNyd9HiJ7IDu4Lw%2BpynoslZTN9vOQm5Q7%2B0f%2BfLIvJBzB7OAcIrNfhnx%2BM2wEJgu52CQhLnIqrtVsZqTMKQ%2FhzCzYJnQRn%2B9g8ucbNFdGSZelBR6GzbBrLYRtxhvi8KOdI%2BuNQsDmpMFLzHhEy1Gr%2BgiB1RRahblRohYHzaiG0H%2BOjoCH%2BUd%2Bp6On3cJU%2B44bn5dyZCqK6z2NXe8ysJcIhhLITCoJZNUMwvM7Ds0%2FK2Utc%2FrsKfcOovl%2BW5pJW8Z3TB7Z4PhAYAgjTA%2FdKctTykd9bmEMLWnnMEGOqUBPdBMbYQZtqEj%2FSI0OSBcmwXgelan9ghrB88rbILnuovab%2FCfV3Bgb0DrTC5ggvJDEXNgz6pBn%2F97ZLBnSWHo3lUc%2BqVXx0evCxxa7e1CeV6kfJPEpDU5hlb072KzJpxuhkJUtKsQozepsUVcIW8B5bMCFHpOQrrSQ8kq952IdfLd3jdCo23PD0Wdeum%2BSvuBQBcPqjs6xdqmWz0sWKSYHMbjR5I%2B&X-Amz-Signature=71a22854d4c7b88c407cdccb916cf205860de215b9c96a5a1a5f0d04b0d77bc2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITTNPZC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApLH%2FHyteomie6PnH5ieGG1UBqYNDXKsNS8CRE9qTetAiEAsqjhVPAkzohPcZ3s1PAQeGP9exFjyH9BY7enY2OiLAYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHY8GJpAN5rLb7eWTCrcAycP%2BLbQAYF1MATfLTTy9F6IUiwjlfNMNSPkCq%2FXNhFUae11fo9CUlO6sm8HxtHdFsGfAiGLWlF1bLGY1ZsdqzGC%2Bz%2Bx1DpLg2r%2F%2FGKl1%2FS5z9AQ1O0UH7fKsPIzEdhfF%2F%2FuDomCepPRkor2F7Z9%2BRb6vxjo%2Fazo2PYLHb7ej%2B2SB3OPHtM%2B7JvDq2aZYvwzjV6sSj6g%2FFsi3k%2BthN5t4awTY%2FLjDylrW5fj%2BXUbIcdmqDtxkRz7pnKhl3G83bEkkfu0vENuaJl4Pj2zGsdZzE77UAM5Oo2h7vD%2FWTPpDSjB%2B7TRnvO82NJfXf5HOdYjWZZZpWcf1y31ySXGY%2F2ZytJ3V7hBKZtIFNyd9HiJ7IDu4Lw%2BpynoslZTN9vOQm5Q7%2B0f%2BfLIvJBzB7OAcIrNfhnx%2BM2wEJgu52CQhLnIqrtVsZqTMKQ%2FhzCzYJnQRn%2B9g8ucbNFdGSZelBR6GzbBrLYRtxhvi8KOdI%2BuNQsDmpMFLzHhEy1Gr%2BgiB1RRahblRohYHzaiG0H%2BOjoCH%2BUd%2Bp6On3cJU%2B44bn5dyZCqK6z2NXe8ysJcIhhLITCoJZNUMwvM7Ds0%2FK2Utc%2FrsKfcOovl%2BW5pJW8Z3TB7Z4PhAYAgjTA%2FdKctTykd9bmEMLWnnMEGOqUBPdBMbYQZtqEj%2FSI0OSBcmwXgelan9ghrB88rbILnuovab%2FCfV3Bgb0DrTC5ggvJDEXNgz6pBn%2F97ZLBnSWHo3lUc%2BqVXx0evCxxa7e1CeV6kfJPEpDU5hlb072KzJpxuhkJUtKsQozepsUVcIW8B5bMCFHpOQrrSQ8kq952IdfLd3jdCo23PD0Wdeum%2BSvuBQBcPqjs6xdqmWz0sWKSYHMbjR5I%2B&X-Amz-Signature=7e2e97dd464735653571c3bbb58725d23cd5f23abda80f4b6208cfc6eb85d9f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITTNPZC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApLH%2FHyteomie6PnH5ieGG1UBqYNDXKsNS8CRE9qTetAiEAsqjhVPAkzohPcZ3s1PAQeGP9exFjyH9BY7enY2OiLAYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHY8GJpAN5rLb7eWTCrcAycP%2BLbQAYF1MATfLTTy9F6IUiwjlfNMNSPkCq%2FXNhFUae11fo9CUlO6sm8HxtHdFsGfAiGLWlF1bLGY1ZsdqzGC%2Bz%2Bx1DpLg2r%2F%2FGKl1%2FS5z9AQ1O0UH7fKsPIzEdhfF%2F%2FuDomCepPRkor2F7Z9%2BRb6vxjo%2Fazo2PYLHb7ej%2B2SB3OPHtM%2B7JvDq2aZYvwzjV6sSj6g%2FFsi3k%2BthN5t4awTY%2FLjDylrW5fj%2BXUbIcdmqDtxkRz7pnKhl3G83bEkkfu0vENuaJl4Pj2zGsdZzE77UAM5Oo2h7vD%2FWTPpDSjB%2B7TRnvO82NJfXf5HOdYjWZZZpWcf1y31ySXGY%2F2ZytJ3V7hBKZtIFNyd9HiJ7IDu4Lw%2BpynoslZTN9vOQm5Q7%2B0f%2BfLIvJBzB7OAcIrNfhnx%2BM2wEJgu52CQhLnIqrtVsZqTMKQ%2FhzCzYJnQRn%2B9g8ucbNFdGSZelBR6GzbBrLYRtxhvi8KOdI%2BuNQsDmpMFLzHhEy1Gr%2BgiB1RRahblRohYHzaiG0H%2BOjoCH%2BUd%2Bp6On3cJU%2B44bn5dyZCqK6z2NXe8ysJcIhhLITCoJZNUMwvM7Ds0%2FK2Utc%2FrsKfcOovl%2BW5pJW8Z3TB7Z4PhAYAgjTA%2FdKctTykd9bmEMLWnnMEGOqUBPdBMbYQZtqEj%2FSI0OSBcmwXgelan9ghrB88rbILnuovab%2FCfV3Bgb0DrTC5ggvJDEXNgz6pBn%2F97ZLBnSWHo3lUc%2BqVXx0evCxxa7e1CeV6kfJPEpDU5hlb072KzJpxuhkJUtKsQozepsUVcIW8B5bMCFHpOQrrSQ8kq952IdfLd3jdCo23PD0Wdeum%2BSvuBQBcPqjs6xdqmWz0sWKSYHMbjR5I%2B&X-Amz-Signature=84f8ea14d51540139a78d12ba0635953c789b2eacb0226c79cbe3910cf9d3607&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITTNPZC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApLH%2FHyteomie6PnH5ieGG1UBqYNDXKsNS8CRE9qTetAiEAsqjhVPAkzohPcZ3s1PAQeGP9exFjyH9BY7enY2OiLAYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHY8GJpAN5rLb7eWTCrcAycP%2BLbQAYF1MATfLTTy9F6IUiwjlfNMNSPkCq%2FXNhFUae11fo9CUlO6sm8HxtHdFsGfAiGLWlF1bLGY1ZsdqzGC%2Bz%2Bx1DpLg2r%2F%2FGKl1%2FS5z9AQ1O0UH7fKsPIzEdhfF%2F%2FuDomCepPRkor2F7Z9%2BRb6vxjo%2Fazo2PYLHb7ej%2B2SB3OPHtM%2B7JvDq2aZYvwzjV6sSj6g%2FFsi3k%2BthN5t4awTY%2FLjDylrW5fj%2BXUbIcdmqDtxkRz7pnKhl3G83bEkkfu0vENuaJl4Pj2zGsdZzE77UAM5Oo2h7vD%2FWTPpDSjB%2B7TRnvO82NJfXf5HOdYjWZZZpWcf1y31ySXGY%2F2ZytJ3V7hBKZtIFNyd9HiJ7IDu4Lw%2BpynoslZTN9vOQm5Q7%2B0f%2BfLIvJBzB7OAcIrNfhnx%2BM2wEJgu52CQhLnIqrtVsZqTMKQ%2FhzCzYJnQRn%2B9g8ucbNFdGSZelBR6GzbBrLYRtxhvi8KOdI%2BuNQsDmpMFLzHhEy1Gr%2BgiB1RRahblRohYHzaiG0H%2BOjoCH%2BUd%2Bp6On3cJU%2B44bn5dyZCqK6z2NXe8ysJcIhhLITCoJZNUMwvM7Ds0%2FK2Utc%2FrsKfcOovl%2BW5pJW8Z3TB7Z4PhAYAgjTA%2FdKctTykd9bmEMLWnnMEGOqUBPdBMbYQZtqEj%2FSI0OSBcmwXgelan9ghrB88rbILnuovab%2FCfV3Bgb0DrTC5ggvJDEXNgz6pBn%2F97ZLBnSWHo3lUc%2BqVXx0evCxxa7e1CeV6kfJPEpDU5hlb072KzJpxuhkJUtKsQozepsUVcIW8B5bMCFHpOQrrSQ8kq952IdfLd3jdCo23PD0Wdeum%2BSvuBQBcPqjs6xdqmWz0sWKSYHMbjR5I%2B&X-Amz-Signature=7934647643eb1de62fe3afd9bab928db6f3049a670e86c4575cf6c602fae58ef&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
