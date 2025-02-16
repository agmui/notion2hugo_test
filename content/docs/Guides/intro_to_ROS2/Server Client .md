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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKVBTHX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFosM3Gr67sZkNt7n7gmyxh0NKQqRjXzNFFo8Q8%2FsWIhAiEAhSW50AGAUmt0Yr9zoNQV4uU5wODmnfCwGCEQLp%2BA3xcq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMrvS6UZ6WiFoT%2FA4SrcA%2F95874K31js8G7EU7%2BvOtxgBlsyAP78Kh4hqUHUtNgxxEbxPFTVlZr5woO7ADQICzHEEeuvIiU2p4i61ew1YU1vuqDPBjTrYoto3zPqWl3QYBqv6C%2FxLpZSdcmWY9U%2BsKKOirO5dgoVOs3SYhgkeNcOppCwkrJg0smWir1pWn%2Brsp1B8m45MgfDJT2MI9VzUvhfXxEZN%2B69%2BaKyjTKKp32%2BzPX8UZv7egxzt0SOfYWe4dsi6vEDK0lOIzNLDbYMPgWwvOgjTwbGOedKad2yIWWK8nA%2BT3Bqt19iGhRc247t1KOSU%2BxvhpSkAoMdInp4xylHmEg%2Fg1MxP%2BRC9Blqv6pMLewPwhe39MdCX8xdQwRdEUG9kYxZMDj3qt3hKKGQ39Q811w1wuS4OZEp1D9a%2FVb5JWFjAQljVDeyVF5jzqOa%2BqI1N44qbjAg1orPOBt6lVHavKPsCAWt%2B0qTsq79Jj9lzo5RGoB41jT6LG4GrFt7DXWoCzYJZKd%2BWcd4c1huZ%2Bzb3vOlhJ1BfprltsE2cBV6SW%2FKqiQGR%2FlC5TOJfKgPBf5s2ov9kU3Z8gIRI13d6dB9KihXSlLn2i5mKUGk1TX3nYKcCgICs54%2Fjoo3L6EsqZfmBC0%2FuftA7Va%2FMJSqxb0GOqUBe0LylmJp3VqYBYOnc9WzU3x%2FX7l8GcPiZyTy5zAHIvDip9iQd6fhukVMVd%2Bt8ypd69P0PgPkabjryVgeui52tFSMgx%2FAbUQICplyooiPatyRfyV5GmoJzYW9gEtUMo6xb8iG9krAFd04KFs9nJVctr91R3zVTwYU38Pb4IL38eLfWwPkBrvyGKnptH2%2BKPj32Goo1SiTM6%2BE%2Bo4eza9X8pQK%2BnB%2F&X-Amz-Signature=542decd4753f6eab42325289722bf1f606c4ad0f27252aa7ab7d906998887d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKVBTHX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFosM3Gr67sZkNt7n7gmyxh0NKQqRjXzNFFo8Q8%2FsWIhAiEAhSW50AGAUmt0Yr9zoNQV4uU5wODmnfCwGCEQLp%2BA3xcq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMrvS6UZ6WiFoT%2FA4SrcA%2F95874K31js8G7EU7%2BvOtxgBlsyAP78Kh4hqUHUtNgxxEbxPFTVlZr5woO7ADQICzHEEeuvIiU2p4i61ew1YU1vuqDPBjTrYoto3zPqWl3QYBqv6C%2FxLpZSdcmWY9U%2BsKKOirO5dgoVOs3SYhgkeNcOppCwkrJg0smWir1pWn%2Brsp1B8m45MgfDJT2MI9VzUvhfXxEZN%2B69%2BaKyjTKKp32%2BzPX8UZv7egxzt0SOfYWe4dsi6vEDK0lOIzNLDbYMPgWwvOgjTwbGOedKad2yIWWK8nA%2BT3Bqt19iGhRc247t1KOSU%2BxvhpSkAoMdInp4xylHmEg%2Fg1MxP%2BRC9Blqv6pMLewPwhe39MdCX8xdQwRdEUG9kYxZMDj3qt3hKKGQ39Q811w1wuS4OZEp1D9a%2FVb5JWFjAQljVDeyVF5jzqOa%2BqI1N44qbjAg1orPOBt6lVHavKPsCAWt%2B0qTsq79Jj9lzo5RGoB41jT6LG4GrFt7DXWoCzYJZKd%2BWcd4c1huZ%2Bzb3vOlhJ1BfprltsE2cBV6SW%2FKqiQGR%2FlC5TOJfKgPBf5s2ov9kU3Z8gIRI13d6dB9KihXSlLn2i5mKUGk1TX3nYKcCgICs54%2Fjoo3L6EsqZfmBC0%2FuftA7Va%2FMJSqxb0GOqUBe0LylmJp3VqYBYOnc9WzU3x%2FX7l8GcPiZyTy5zAHIvDip9iQd6fhukVMVd%2Bt8ypd69P0PgPkabjryVgeui52tFSMgx%2FAbUQICplyooiPatyRfyV5GmoJzYW9gEtUMo6xb8iG9krAFd04KFs9nJVctr91R3zVTwYU38Pb4IL38eLfWwPkBrvyGKnptH2%2BKPj32Goo1SiTM6%2BE%2Bo4eza9X8pQK%2BnB%2F&X-Amz-Signature=77d68c89099afb5129cbc03057cad94ead347b51cb3530593ba650c43fcc094d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKVBTHX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFosM3Gr67sZkNt7n7gmyxh0NKQqRjXzNFFo8Q8%2FsWIhAiEAhSW50AGAUmt0Yr9zoNQV4uU5wODmnfCwGCEQLp%2BA3xcq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMrvS6UZ6WiFoT%2FA4SrcA%2F95874K31js8G7EU7%2BvOtxgBlsyAP78Kh4hqUHUtNgxxEbxPFTVlZr5woO7ADQICzHEEeuvIiU2p4i61ew1YU1vuqDPBjTrYoto3zPqWl3QYBqv6C%2FxLpZSdcmWY9U%2BsKKOirO5dgoVOs3SYhgkeNcOppCwkrJg0smWir1pWn%2Brsp1B8m45MgfDJT2MI9VzUvhfXxEZN%2B69%2BaKyjTKKp32%2BzPX8UZv7egxzt0SOfYWe4dsi6vEDK0lOIzNLDbYMPgWwvOgjTwbGOedKad2yIWWK8nA%2BT3Bqt19iGhRc247t1KOSU%2BxvhpSkAoMdInp4xylHmEg%2Fg1MxP%2BRC9Blqv6pMLewPwhe39MdCX8xdQwRdEUG9kYxZMDj3qt3hKKGQ39Q811w1wuS4OZEp1D9a%2FVb5JWFjAQljVDeyVF5jzqOa%2BqI1N44qbjAg1orPOBt6lVHavKPsCAWt%2B0qTsq79Jj9lzo5RGoB41jT6LG4GrFt7DXWoCzYJZKd%2BWcd4c1huZ%2Bzb3vOlhJ1BfprltsE2cBV6SW%2FKqiQGR%2FlC5TOJfKgPBf5s2ov9kU3Z8gIRI13d6dB9KihXSlLn2i5mKUGk1TX3nYKcCgICs54%2Fjoo3L6EsqZfmBC0%2FuftA7Va%2FMJSqxb0GOqUBe0LylmJp3VqYBYOnc9WzU3x%2FX7l8GcPiZyTy5zAHIvDip9iQd6fhukVMVd%2Bt8ypd69P0PgPkabjryVgeui52tFSMgx%2FAbUQICplyooiPatyRfyV5GmoJzYW9gEtUMo6xb8iG9krAFd04KFs9nJVctr91R3zVTwYU38Pb4IL38eLfWwPkBrvyGKnptH2%2BKPj32Goo1SiTM6%2BE%2Bo4eza9X8pQK%2BnB%2F&X-Amz-Signature=bdafc39988c65dec4abe2f50fa57cd2d7535d9fe0b2bc9b5212c2f04fe7f384a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKVBTHX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFosM3Gr67sZkNt7n7gmyxh0NKQqRjXzNFFo8Q8%2FsWIhAiEAhSW50AGAUmt0Yr9zoNQV4uU5wODmnfCwGCEQLp%2BA3xcq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMrvS6UZ6WiFoT%2FA4SrcA%2F95874K31js8G7EU7%2BvOtxgBlsyAP78Kh4hqUHUtNgxxEbxPFTVlZr5woO7ADQICzHEEeuvIiU2p4i61ew1YU1vuqDPBjTrYoto3zPqWl3QYBqv6C%2FxLpZSdcmWY9U%2BsKKOirO5dgoVOs3SYhgkeNcOppCwkrJg0smWir1pWn%2Brsp1B8m45MgfDJT2MI9VzUvhfXxEZN%2B69%2BaKyjTKKp32%2BzPX8UZv7egxzt0SOfYWe4dsi6vEDK0lOIzNLDbYMPgWwvOgjTwbGOedKad2yIWWK8nA%2BT3Bqt19iGhRc247t1KOSU%2BxvhpSkAoMdInp4xylHmEg%2Fg1MxP%2BRC9Blqv6pMLewPwhe39MdCX8xdQwRdEUG9kYxZMDj3qt3hKKGQ39Q811w1wuS4OZEp1D9a%2FVb5JWFjAQljVDeyVF5jzqOa%2BqI1N44qbjAg1orPOBt6lVHavKPsCAWt%2B0qTsq79Jj9lzo5RGoB41jT6LG4GrFt7DXWoCzYJZKd%2BWcd4c1huZ%2Bzb3vOlhJ1BfprltsE2cBV6SW%2FKqiQGR%2FlC5TOJfKgPBf5s2ov9kU3Z8gIRI13d6dB9KihXSlLn2i5mKUGk1TX3nYKcCgICs54%2Fjoo3L6EsqZfmBC0%2FuftA7Va%2FMJSqxb0GOqUBe0LylmJp3VqYBYOnc9WzU3x%2FX7l8GcPiZyTy5zAHIvDip9iQd6fhukVMVd%2Bt8ypd69P0PgPkabjryVgeui52tFSMgx%2FAbUQICplyooiPatyRfyV5GmoJzYW9gEtUMo6xb8iG9krAFd04KFs9nJVctr91R3zVTwYU38Pb4IL38eLfWwPkBrvyGKnptH2%2BKPj32Goo1SiTM6%2BE%2Bo4eza9X8pQK%2BnB%2F&X-Amz-Signature=fa11553a75671aab71595fe8fd14256dee01fc35df4f7095ca1cc1639baa3148&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKVBTHX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFosM3Gr67sZkNt7n7gmyxh0NKQqRjXzNFFo8Q8%2FsWIhAiEAhSW50AGAUmt0Yr9zoNQV4uU5wODmnfCwGCEQLp%2BA3xcq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMrvS6UZ6WiFoT%2FA4SrcA%2F95874K31js8G7EU7%2BvOtxgBlsyAP78Kh4hqUHUtNgxxEbxPFTVlZr5woO7ADQICzHEEeuvIiU2p4i61ew1YU1vuqDPBjTrYoto3zPqWl3QYBqv6C%2FxLpZSdcmWY9U%2BsKKOirO5dgoVOs3SYhgkeNcOppCwkrJg0smWir1pWn%2Brsp1B8m45MgfDJT2MI9VzUvhfXxEZN%2B69%2BaKyjTKKp32%2BzPX8UZv7egxzt0SOfYWe4dsi6vEDK0lOIzNLDbYMPgWwvOgjTwbGOedKad2yIWWK8nA%2BT3Bqt19iGhRc247t1KOSU%2BxvhpSkAoMdInp4xylHmEg%2Fg1MxP%2BRC9Blqv6pMLewPwhe39MdCX8xdQwRdEUG9kYxZMDj3qt3hKKGQ39Q811w1wuS4OZEp1D9a%2FVb5JWFjAQljVDeyVF5jzqOa%2BqI1N44qbjAg1orPOBt6lVHavKPsCAWt%2B0qTsq79Jj9lzo5RGoB41jT6LG4GrFt7DXWoCzYJZKd%2BWcd4c1huZ%2Bzb3vOlhJ1BfprltsE2cBV6SW%2FKqiQGR%2FlC5TOJfKgPBf5s2ov9kU3Z8gIRI13d6dB9KihXSlLn2i5mKUGk1TX3nYKcCgICs54%2Fjoo3L6EsqZfmBC0%2FuftA7Va%2FMJSqxb0GOqUBe0LylmJp3VqYBYOnc9WzU3x%2FX7l8GcPiZyTy5zAHIvDip9iQd6fhukVMVd%2Bt8ypd69P0PgPkabjryVgeui52tFSMgx%2FAbUQICplyooiPatyRfyV5GmoJzYW9gEtUMo6xb8iG9krAFd04KFs9nJVctr91R3zVTwYU38Pb4IL38eLfWwPkBrvyGKnptH2%2BKPj32Goo1SiTM6%2BE%2Bo4eza9X8pQK%2BnB%2F&X-Amz-Signature=d1dd6d41f52db136f07b2bdf2691e86fb61ccde96ed6a332a4a956248f6e982f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
