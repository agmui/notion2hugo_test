---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXWB752%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAp39mCg4jxnnA9LlQ%2FHjyWmXj7XcS%2BgZZ8OZ5mc9FKAiBGf6DaY0BaXrl4VH7yu3b5%2FfpZ4dTfOAiSxPqF52B3Rir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMat%2BDzLxmowTBRm6qKtwDUtiS60CMHLHKUpMxenUp5yPKoFf62k0mtFSRZe1Cd0PkQP5kukFGFz%2F%2FXvvWib%2FlcuhnUdTHE6eiue8jTDHkFz621Kj4OcDcB%2BVHrhO0%2F7tGy3fAiYotBZwp4BfJ31ADh7XuZ3oxuD%2FqHJ0hA0f2%2F9c0SU6uJTcsbJIz8y4%2F4OVMia2nzF%2BBT6TuEuDQG8S18gPBSwZ1kiFFDbL8CrS4fCz3AgAwJ%2BZDmEkfb5aNDXayiTVR8aWEsnv85tQfp5yDyw9MncynUPkWugRjrvQn2v6b0KKjfRWaqwX0yXdMHI8JAd3tfuHD%2BkeqdP7LAJu5kM3W4U3Hqd2ZvfZK%2BpejDl06umm8Cm31jfo%2BlsuDzHu5zV%2BkZ9ZTLhCi8BGxWggp7y1RtQb8Y1wUi7vql6fUailr62SRWmX113K5KgQQBtLHmT8XBDQyNCXGxUIRubLC8piSTUcNMy9YjDxzLUiXCn04CCJIgm82V3dnh%2Fvhci7P6MUsm19SYUgwlohQ8mQBDc%2BY8uyQCAXspMAmi6N1GfHPPHaAoIRKSyif31YK7R%2Fxx8eezRmIDe4KXKadDiyXf%2F7QQzEhP96%2FAp%2BVf5wF7mvf8f%2BXVztezXieMZ5zoosB6XvwllInFYR5jB4w0Z%2FrxwY6pgFLtJ%2FN1bOXDElIUh2jqppkSzhdxYuQV%2BTNgUp1bSiFeu6jhKSlc%2FpOKo0Yd8R6uPLLxtLOT3jxDJJIa9%2FRpJ536L2BXveA2mIY5hEtUTApu7NRi%2B%2FvxwuJBlJBZqGS60F%2BCxJXYGtN9stThMx6bTDNxCf3I%2FAHGufuIWZ8jqTQ7g0cdKMKWZ4%2FGKcNO4K4v68icV498eMrm9ll7oPzKDm3lfgQnNiJ&X-Amz-Signature=e8121e4e4f223227ccbd792edc41699ce64c60ca0e48b316ab86fb4c368395ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXWB752%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAp39mCg4jxnnA9LlQ%2FHjyWmXj7XcS%2BgZZ8OZ5mc9FKAiBGf6DaY0BaXrl4VH7yu3b5%2FfpZ4dTfOAiSxPqF52B3Rir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMat%2BDzLxmowTBRm6qKtwDUtiS60CMHLHKUpMxenUp5yPKoFf62k0mtFSRZe1Cd0PkQP5kukFGFz%2F%2FXvvWib%2FlcuhnUdTHE6eiue8jTDHkFz621Kj4OcDcB%2BVHrhO0%2F7tGy3fAiYotBZwp4BfJ31ADh7XuZ3oxuD%2FqHJ0hA0f2%2F9c0SU6uJTcsbJIz8y4%2F4OVMia2nzF%2BBT6TuEuDQG8S18gPBSwZ1kiFFDbL8CrS4fCz3AgAwJ%2BZDmEkfb5aNDXayiTVR8aWEsnv85tQfp5yDyw9MncynUPkWugRjrvQn2v6b0KKjfRWaqwX0yXdMHI8JAd3tfuHD%2BkeqdP7LAJu5kM3W4U3Hqd2ZvfZK%2BpejDl06umm8Cm31jfo%2BlsuDzHu5zV%2BkZ9ZTLhCi8BGxWggp7y1RtQb8Y1wUi7vql6fUailr62SRWmX113K5KgQQBtLHmT8XBDQyNCXGxUIRubLC8piSTUcNMy9YjDxzLUiXCn04CCJIgm82V3dnh%2Fvhci7P6MUsm19SYUgwlohQ8mQBDc%2BY8uyQCAXspMAmi6N1GfHPPHaAoIRKSyif31YK7R%2Fxx8eezRmIDe4KXKadDiyXf%2F7QQzEhP96%2FAp%2BVf5wF7mvf8f%2BXVztezXieMZ5zoosB6XvwllInFYR5jB4w0Z%2FrxwY6pgFLtJ%2FN1bOXDElIUh2jqppkSzhdxYuQV%2BTNgUp1bSiFeu6jhKSlc%2FpOKo0Yd8R6uPLLxtLOT3jxDJJIa9%2FRpJ536L2BXveA2mIY5hEtUTApu7NRi%2B%2FvxwuJBlJBZqGS60F%2BCxJXYGtN9stThMx6bTDNxCf3I%2FAHGufuIWZ8jqTQ7g0cdKMKWZ4%2FGKcNO4K4v68icV498eMrm9ll7oPzKDm3lfgQnNiJ&X-Amz-Signature=9aa279edecc6ad6a2bc7ba6d362bfc2dba191602c2052682053de21506df1cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXWB752%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAp39mCg4jxnnA9LlQ%2FHjyWmXj7XcS%2BgZZ8OZ5mc9FKAiBGf6DaY0BaXrl4VH7yu3b5%2FfpZ4dTfOAiSxPqF52B3Rir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMat%2BDzLxmowTBRm6qKtwDUtiS60CMHLHKUpMxenUp5yPKoFf62k0mtFSRZe1Cd0PkQP5kukFGFz%2F%2FXvvWib%2FlcuhnUdTHE6eiue8jTDHkFz621Kj4OcDcB%2BVHrhO0%2F7tGy3fAiYotBZwp4BfJ31ADh7XuZ3oxuD%2FqHJ0hA0f2%2F9c0SU6uJTcsbJIz8y4%2F4OVMia2nzF%2BBT6TuEuDQG8S18gPBSwZ1kiFFDbL8CrS4fCz3AgAwJ%2BZDmEkfb5aNDXayiTVR8aWEsnv85tQfp5yDyw9MncynUPkWugRjrvQn2v6b0KKjfRWaqwX0yXdMHI8JAd3tfuHD%2BkeqdP7LAJu5kM3W4U3Hqd2ZvfZK%2BpejDl06umm8Cm31jfo%2BlsuDzHu5zV%2BkZ9ZTLhCi8BGxWggp7y1RtQb8Y1wUi7vql6fUailr62SRWmX113K5KgQQBtLHmT8XBDQyNCXGxUIRubLC8piSTUcNMy9YjDxzLUiXCn04CCJIgm82V3dnh%2Fvhci7P6MUsm19SYUgwlohQ8mQBDc%2BY8uyQCAXspMAmi6N1GfHPPHaAoIRKSyif31YK7R%2Fxx8eezRmIDe4KXKadDiyXf%2F7QQzEhP96%2FAp%2BVf5wF7mvf8f%2BXVztezXieMZ5zoosB6XvwllInFYR5jB4w0Z%2FrxwY6pgFLtJ%2FN1bOXDElIUh2jqppkSzhdxYuQV%2BTNgUp1bSiFeu6jhKSlc%2FpOKo0Yd8R6uPLLxtLOT3jxDJJIa9%2FRpJ536L2BXveA2mIY5hEtUTApu7NRi%2B%2FvxwuJBlJBZqGS60F%2BCxJXYGtN9stThMx6bTDNxCf3I%2FAHGufuIWZ8jqTQ7g0cdKMKWZ4%2FGKcNO4K4v68icV498eMrm9ll7oPzKDm3lfgQnNiJ&X-Amz-Signature=89d8c9f7f09db2ed29a386eb2875aaca503ae9b2645b846c2164a8dc0725699b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXWB752%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAp39mCg4jxnnA9LlQ%2FHjyWmXj7XcS%2BgZZ8OZ5mc9FKAiBGf6DaY0BaXrl4VH7yu3b5%2FfpZ4dTfOAiSxPqF52B3Rir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMat%2BDzLxmowTBRm6qKtwDUtiS60CMHLHKUpMxenUp5yPKoFf62k0mtFSRZe1Cd0PkQP5kukFGFz%2F%2FXvvWib%2FlcuhnUdTHE6eiue8jTDHkFz621Kj4OcDcB%2BVHrhO0%2F7tGy3fAiYotBZwp4BfJ31ADh7XuZ3oxuD%2FqHJ0hA0f2%2F9c0SU6uJTcsbJIz8y4%2F4OVMia2nzF%2BBT6TuEuDQG8S18gPBSwZ1kiFFDbL8CrS4fCz3AgAwJ%2BZDmEkfb5aNDXayiTVR8aWEsnv85tQfp5yDyw9MncynUPkWugRjrvQn2v6b0KKjfRWaqwX0yXdMHI8JAd3tfuHD%2BkeqdP7LAJu5kM3W4U3Hqd2ZvfZK%2BpejDl06umm8Cm31jfo%2BlsuDzHu5zV%2BkZ9ZTLhCi8BGxWggp7y1RtQb8Y1wUi7vql6fUailr62SRWmX113K5KgQQBtLHmT8XBDQyNCXGxUIRubLC8piSTUcNMy9YjDxzLUiXCn04CCJIgm82V3dnh%2Fvhci7P6MUsm19SYUgwlohQ8mQBDc%2BY8uyQCAXspMAmi6N1GfHPPHaAoIRKSyif31YK7R%2Fxx8eezRmIDe4KXKadDiyXf%2F7QQzEhP96%2FAp%2BVf5wF7mvf8f%2BXVztezXieMZ5zoosB6XvwllInFYR5jB4w0Z%2FrxwY6pgFLtJ%2FN1bOXDElIUh2jqppkSzhdxYuQV%2BTNgUp1bSiFeu6jhKSlc%2FpOKo0Yd8R6uPLLxtLOT3jxDJJIa9%2FRpJ536L2BXveA2mIY5hEtUTApu7NRi%2B%2FvxwuJBlJBZqGS60F%2BCxJXYGtN9stThMx6bTDNxCf3I%2FAHGufuIWZ8jqTQ7g0cdKMKWZ4%2FGKcNO4K4v68icV498eMrm9ll7oPzKDm3lfgQnNiJ&X-Amz-Signature=702cc0da19ce62e3d2d315c3d43cb23de799a1660bf2c632fe18c10349641374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXWB752%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAp39mCg4jxnnA9LlQ%2FHjyWmXj7XcS%2BgZZ8OZ5mc9FKAiBGf6DaY0BaXrl4VH7yu3b5%2FfpZ4dTfOAiSxPqF52B3Rir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMat%2BDzLxmowTBRm6qKtwDUtiS60CMHLHKUpMxenUp5yPKoFf62k0mtFSRZe1Cd0PkQP5kukFGFz%2F%2FXvvWib%2FlcuhnUdTHE6eiue8jTDHkFz621Kj4OcDcB%2BVHrhO0%2F7tGy3fAiYotBZwp4BfJ31ADh7XuZ3oxuD%2FqHJ0hA0f2%2F9c0SU6uJTcsbJIz8y4%2F4OVMia2nzF%2BBT6TuEuDQG8S18gPBSwZ1kiFFDbL8CrS4fCz3AgAwJ%2BZDmEkfb5aNDXayiTVR8aWEsnv85tQfp5yDyw9MncynUPkWugRjrvQn2v6b0KKjfRWaqwX0yXdMHI8JAd3tfuHD%2BkeqdP7LAJu5kM3W4U3Hqd2ZvfZK%2BpejDl06umm8Cm31jfo%2BlsuDzHu5zV%2BkZ9ZTLhCi8BGxWggp7y1RtQb8Y1wUi7vql6fUailr62SRWmX113K5KgQQBtLHmT8XBDQyNCXGxUIRubLC8piSTUcNMy9YjDxzLUiXCn04CCJIgm82V3dnh%2Fvhci7P6MUsm19SYUgwlohQ8mQBDc%2BY8uyQCAXspMAmi6N1GfHPPHaAoIRKSyif31YK7R%2Fxx8eezRmIDe4KXKadDiyXf%2F7QQzEhP96%2FAp%2BVf5wF7mvf8f%2BXVztezXieMZ5zoosB6XvwllInFYR5jB4w0Z%2FrxwY6pgFLtJ%2FN1bOXDElIUh2jqppkSzhdxYuQV%2BTNgUp1bSiFeu6jhKSlc%2FpOKo0Yd8R6uPLLxtLOT3jxDJJIa9%2FRpJ536L2BXveA2mIY5hEtUTApu7NRi%2B%2FvxwuJBlJBZqGS60F%2BCxJXYGtN9stThMx6bTDNxCf3I%2FAHGufuIWZ8jqTQ7g0cdKMKWZ4%2FGKcNO4K4v68icV498eMrm9ll7oPzKDm3lfgQnNiJ&X-Amz-Signature=7017d0a6525d2c78d7b2e1b31343f6b4923b435b11968191dc1f138a8e81bf6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
