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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6IC656%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU6ouVXuFujUOBnWhJ4Bz6A972%2FLOR8FHHaem%2BqnhpKgIgBOf35c0eGPgaCTSFBlgMAIRbFA8zNxZbiltf5aU%2FYXIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDF69pBYp1GfU5KZ0ZSrcA3HN7GABL5P322n9R6SgJE7XRfB10wE7IIov4GYcslwo7FVM0cdxsW9McVHY8zVduck%2BkTZAsyeBVrKiPUk2YB7k8HWbCMhgKCOMG3pBlLGtYcus88ciCzMP9JsmIDmGedl8EtmTTArcn8z7Ak0znPa4%2Bovhszr9qOJgmqTRRYTTIdAIqK606k%2BvpsiZxx1m4g4Gx%2BqIvduMpIiuWYNhPO11uWFrkoHWfsQI40WGsY%2BAEnOUTUBLOHkU6vySkQipHfjk2r%2FHsSJYeYqLWcaNTcst6KylgheLZQcNpzhizMfe1oVKLbo0BQhTc8bpVhQa9jGR214SJaskTQJUYvxfckBRnGoRciIQ%2F8zMXpHtDHck23kTmklEFV7MafZXmSxWbn1OTpEBvl5oCsPa%2FbFtlQkUSDPXZTQNDl1Xq%2F9s9wqQFxTEHEdl5%2FU81zvLFdCLiPvA7TMFp0pmAijl5CjMnWzMwCx1aRYRW9m9r9nBLwbWhHOp6Khgn4LeYhwdSZgv76prcIDvhC%2BgWjA5ZUVOObOOzuyE7BcSL5RY4EuaFsKB6VgQJd4B6rhAoXxm3Ql2mBUzxcDpofc0df7gzX8rNULDkhy1WBxp8Lt%2FLl%2FHgM18MDOESZ1%2F6%2BObX3heMJq3osEGOqUBVB2JcM50%2Bc6zCiKCbTfGx6mi2M3D416uAVndeZSdhzyyev9Lp54IuBQFfGVrHWJ2Lqa66ES%2FENdM7EPWbp%2F3mo0mnnSWSY8aA82go8NTZIYdkv5xMYKRqCBLCEu8nyx5mDdgPLmH%2BXBg0Pl9RtucYL%2BT9j%2FRZocvj5%2BkQj5iwwKBS%2FriP3T%2BufSc1FdEHIyHlRZSqjnTiSOeIKh3w0ttH7BgUF6G&X-Amz-Signature=9d7951d99a06ee131c365cc83f7e3181bfb4f1338fa99433294cf3184ed23db1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6IC656%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU6ouVXuFujUOBnWhJ4Bz6A972%2FLOR8FHHaem%2BqnhpKgIgBOf35c0eGPgaCTSFBlgMAIRbFA8zNxZbiltf5aU%2FYXIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDF69pBYp1GfU5KZ0ZSrcA3HN7GABL5P322n9R6SgJE7XRfB10wE7IIov4GYcslwo7FVM0cdxsW9McVHY8zVduck%2BkTZAsyeBVrKiPUk2YB7k8HWbCMhgKCOMG3pBlLGtYcus88ciCzMP9JsmIDmGedl8EtmTTArcn8z7Ak0znPa4%2Bovhszr9qOJgmqTRRYTTIdAIqK606k%2BvpsiZxx1m4g4Gx%2BqIvduMpIiuWYNhPO11uWFrkoHWfsQI40WGsY%2BAEnOUTUBLOHkU6vySkQipHfjk2r%2FHsSJYeYqLWcaNTcst6KylgheLZQcNpzhizMfe1oVKLbo0BQhTc8bpVhQa9jGR214SJaskTQJUYvxfckBRnGoRciIQ%2F8zMXpHtDHck23kTmklEFV7MafZXmSxWbn1OTpEBvl5oCsPa%2FbFtlQkUSDPXZTQNDl1Xq%2F9s9wqQFxTEHEdl5%2FU81zvLFdCLiPvA7TMFp0pmAijl5CjMnWzMwCx1aRYRW9m9r9nBLwbWhHOp6Khgn4LeYhwdSZgv76prcIDvhC%2BgWjA5ZUVOObOOzuyE7BcSL5RY4EuaFsKB6VgQJd4B6rhAoXxm3Ql2mBUzxcDpofc0df7gzX8rNULDkhy1WBxp8Lt%2FLl%2FHgM18MDOESZ1%2F6%2BObX3heMJq3osEGOqUBVB2JcM50%2Bc6zCiKCbTfGx6mi2M3D416uAVndeZSdhzyyev9Lp54IuBQFfGVrHWJ2Lqa66ES%2FENdM7EPWbp%2F3mo0mnnSWSY8aA82go8NTZIYdkv5xMYKRqCBLCEu8nyx5mDdgPLmH%2BXBg0Pl9RtucYL%2BT9j%2FRZocvj5%2BkQj5iwwKBS%2FriP3T%2BufSc1FdEHIyHlRZSqjnTiSOeIKh3w0ttH7BgUF6G&X-Amz-Signature=665e4edce97f5ea2610882e4107d74ed3e48557f638b954eee0438d6424b7330&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6IC656%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU6ouVXuFujUOBnWhJ4Bz6A972%2FLOR8FHHaem%2BqnhpKgIgBOf35c0eGPgaCTSFBlgMAIRbFA8zNxZbiltf5aU%2FYXIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDF69pBYp1GfU5KZ0ZSrcA3HN7GABL5P322n9R6SgJE7XRfB10wE7IIov4GYcslwo7FVM0cdxsW9McVHY8zVduck%2BkTZAsyeBVrKiPUk2YB7k8HWbCMhgKCOMG3pBlLGtYcus88ciCzMP9JsmIDmGedl8EtmTTArcn8z7Ak0znPa4%2Bovhszr9qOJgmqTRRYTTIdAIqK606k%2BvpsiZxx1m4g4Gx%2BqIvduMpIiuWYNhPO11uWFrkoHWfsQI40WGsY%2BAEnOUTUBLOHkU6vySkQipHfjk2r%2FHsSJYeYqLWcaNTcst6KylgheLZQcNpzhizMfe1oVKLbo0BQhTc8bpVhQa9jGR214SJaskTQJUYvxfckBRnGoRciIQ%2F8zMXpHtDHck23kTmklEFV7MafZXmSxWbn1OTpEBvl5oCsPa%2FbFtlQkUSDPXZTQNDl1Xq%2F9s9wqQFxTEHEdl5%2FU81zvLFdCLiPvA7TMFp0pmAijl5CjMnWzMwCx1aRYRW9m9r9nBLwbWhHOp6Khgn4LeYhwdSZgv76prcIDvhC%2BgWjA5ZUVOObOOzuyE7BcSL5RY4EuaFsKB6VgQJd4B6rhAoXxm3Ql2mBUzxcDpofc0df7gzX8rNULDkhy1WBxp8Lt%2FLl%2FHgM18MDOESZ1%2F6%2BObX3heMJq3osEGOqUBVB2JcM50%2Bc6zCiKCbTfGx6mi2M3D416uAVndeZSdhzyyev9Lp54IuBQFfGVrHWJ2Lqa66ES%2FENdM7EPWbp%2F3mo0mnnSWSY8aA82go8NTZIYdkv5xMYKRqCBLCEu8nyx5mDdgPLmH%2BXBg0Pl9RtucYL%2BT9j%2FRZocvj5%2BkQj5iwwKBS%2FriP3T%2BufSc1FdEHIyHlRZSqjnTiSOeIKh3w0ttH7BgUF6G&X-Amz-Signature=0db06e8f2b291c6d10e19728c0e88dcbf0ba8d41d672277a4cfd44a639bb0ff2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6IC656%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU6ouVXuFujUOBnWhJ4Bz6A972%2FLOR8FHHaem%2BqnhpKgIgBOf35c0eGPgaCTSFBlgMAIRbFA8zNxZbiltf5aU%2FYXIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDF69pBYp1GfU5KZ0ZSrcA3HN7GABL5P322n9R6SgJE7XRfB10wE7IIov4GYcslwo7FVM0cdxsW9McVHY8zVduck%2BkTZAsyeBVrKiPUk2YB7k8HWbCMhgKCOMG3pBlLGtYcus88ciCzMP9JsmIDmGedl8EtmTTArcn8z7Ak0znPa4%2Bovhszr9qOJgmqTRRYTTIdAIqK606k%2BvpsiZxx1m4g4Gx%2BqIvduMpIiuWYNhPO11uWFrkoHWfsQI40WGsY%2BAEnOUTUBLOHkU6vySkQipHfjk2r%2FHsSJYeYqLWcaNTcst6KylgheLZQcNpzhizMfe1oVKLbo0BQhTc8bpVhQa9jGR214SJaskTQJUYvxfckBRnGoRciIQ%2F8zMXpHtDHck23kTmklEFV7MafZXmSxWbn1OTpEBvl5oCsPa%2FbFtlQkUSDPXZTQNDl1Xq%2F9s9wqQFxTEHEdl5%2FU81zvLFdCLiPvA7TMFp0pmAijl5CjMnWzMwCx1aRYRW9m9r9nBLwbWhHOp6Khgn4LeYhwdSZgv76prcIDvhC%2BgWjA5ZUVOObOOzuyE7BcSL5RY4EuaFsKB6VgQJd4B6rhAoXxm3Ql2mBUzxcDpofc0df7gzX8rNULDkhy1WBxp8Lt%2FLl%2FHgM18MDOESZ1%2F6%2BObX3heMJq3osEGOqUBVB2JcM50%2Bc6zCiKCbTfGx6mi2M3D416uAVndeZSdhzyyev9Lp54IuBQFfGVrHWJ2Lqa66ES%2FENdM7EPWbp%2F3mo0mnnSWSY8aA82go8NTZIYdkv5xMYKRqCBLCEu8nyx5mDdgPLmH%2BXBg0Pl9RtucYL%2BT9j%2FRZocvj5%2BkQj5iwwKBS%2FriP3T%2BufSc1FdEHIyHlRZSqjnTiSOeIKh3w0ttH7BgUF6G&X-Amz-Signature=b6e664802d5cc6f2ddc346c925477fc3827f8d9ef35915aaedb27295a3ee196e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6IC656%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU6ouVXuFujUOBnWhJ4Bz6A972%2FLOR8FHHaem%2BqnhpKgIgBOf35c0eGPgaCTSFBlgMAIRbFA8zNxZbiltf5aU%2FYXIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDF69pBYp1GfU5KZ0ZSrcA3HN7GABL5P322n9R6SgJE7XRfB10wE7IIov4GYcslwo7FVM0cdxsW9McVHY8zVduck%2BkTZAsyeBVrKiPUk2YB7k8HWbCMhgKCOMG3pBlLGtYcus88ciCzMP9JsmIDmGedl8EtmTTArcn8z7Ak0znPa4%2Bovhszr9qOJgmqTRRYTTIdAIqK606k%2BvpsiZxx1m4g4Gx%2BqIvduMpIiuWYNhPO11uWFrkoHWfsQI40WGsY%2BAEnOUTUBLOHkU6vySkQipHfjk2r%2FHsSJYeYqLWcaNTcst6KylgheLZQcNpzhizMfe1oVKLbo0BQhTc8bpVhQa9jGR214SJaskTQJUYvxfckBRnGoRciIQ%2F8zMXpHtDHck23kTmklEFV7MafZXmSxWbn1OTpEBvl5oCsPa%2FbFtlQkUSDPXZTQNDl1Xq%2F9s9wqQFxTEHEdl5%2FU81zvLFdCLiPvA7TMFp0pmAijl5CjMnWzMwCx1aRYRW9m9r9nBLwbWhHOp6Khgn4LeYhwdSZgv76prcIDvhC%2BgWjA5ZUVOObOOzuyE7BcSL5RY4EuaFsKB6VgQJd4B6rhAoXxm3Ql2mBUzxcDpofc0df7gzX8rNULDkhy1WBxp8Lt%2FLl%2FHgM18MDOESZ1%2F6%2BObX3heMJq3osEGOqUBVB2JcM50%2Bc6zCiKCbTfGx6mi2M3D416uAVndeZSdhzyyev9Lp54IuBQFfGVrHWJ2Lqa66ES%2FENdM7EPWbp%2F3mo0mnnSWSY8aA82go8NTZIYdkv5xMYKRqCBLCEu8nyx5mDdgPLmH%2BXBg0Pl9RtucYL%2BT9j%2FRZocvj5%2BkQj5iwwKBS%2FriP3T%2BufSc1FdEHIyHlRZSqjnTiSOeIKh3w0ttH7BgUF6G&X-Amz-Signature=51b0922258c5aa963b338daebfb5f69f5e298bf8027cb72080f153f7fbcdeaeb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
