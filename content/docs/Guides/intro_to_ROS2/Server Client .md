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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQA5572%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJFMEMCIHTrP2BU0XkUxY%2BdMAA4OkXfm9IEIKu93ht5fxZgqFDqAh8Z%2Bnkb9icAb1z%2FJF1Wqy3KvFGQf3gRfZAKid4colKyKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMx3IsmkaD05chAPIq3ANqxyOLK0J0%2FN4O6R3MF2DFXhW3eE%2F5JmgycwL3aeepJlOgVpuZhdKTVMkv4xcRHeCWwrsP2%2FLw78RB4z8sqVVGRfJGznzxWalPh2Zyl8VBLtxDx%2FUrgw57gZSgQH3A%2FcnEFN5VCYEKOMvKvtOmcJYYPmOYa3iXdzWv%2FGiKW3AvcFAhesPenE0Nxp9BA8zGyozNov2Ju76pIM0Ma%2F1iSTNkJlm1yvcDEXhmbMFYsyUCkRjd0fNr1ZjtVj4ZZBUL1Fyp6E2e79JRkTt2ZrfbZ7IlW5BA4XyzffWtVPxE%2FWzNr1M93tCKr7%2FYYmU%2B2Wlwg%2FSsr%2B3XFCTYsGzs7MeTLhCmPDttf38nCt%2FQUd3d9%2FrHtmruwR%2BeitYWkw%2F%2FIDbeOjK7YScFh99%2BLGUKgTbjxDrOkZKiTl6TayNFvWYYTG6yrZycxUgbPKCbjXxpfn4BnVJqSNdGLyH9GN%2Bw83jUVeqs5Vc7mgUPTXYvFUian2v%2FFwd4QR5FZmqPqKd%2BKrDEpIcZdpJWUNsSdkN%2FW%2B%2FDMGRyU5qZs4j46Rw7Srj5jVxeNIdQjJLtudjASe%2BZ%2BQE9%2BJfSY%2FZbR8K7Hx0KNPwjJ8AK1woICTZ3IKVWTBDdiK8ndIshtYowEql7zH2eazC3vKe%2FBjqnASJhaJl3VlcONLCyt%2FZ9Jj7hEs5UsqjVASuhdAmiS2Ep0wAaE%2Fb8P6G99ter82Xu%2F0quBoCXPbv61aLXs49P2es4iQa81Kd7gtN6rf5fYDF%2BC6GiWZYFH3JRQnV9tQsrAM7rdtpxEpWc4RI2Dnys7mRzecAftF4Jmw4asNE5LHY4Wnk%2Fo1zw2NTrkaerkzkD%2BL3uw2N8Ad7ebSspuOavMkwrZKKvnO0x&X-Amz-Signature=0abb01ca48feb527fc70450990472012c323394c2a13e7df3fb80feb2b780e30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQA5572%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJFMEMCIHTrP2BU0XkUxY%2BdMAA4OkXfm9IEIKu93ht5fxZgqFDqAh8Z%2Bnkb9icAb1z%2FJF1Wqy3KvFGQf3gRfZAKid4colKyKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMx3IsmkaD05chAPIq3ANqxyOLK0J0%2FN4O6R3MF2DFXhW3eE%2F5JmgycwL3aeepJlOgVpuZhdKTVMkv4xcRHeCWwrsP2%2FLw78RB4z8sqVVGRfJGznzxWalPh2Zyl8VBLtxDx%2FUrgw57gZSgQH3A%2FcnEFN5VCYEKOMvKvtOmcJYYPmOYa3iXdzWv%2FGiKW3AvcFAhesPenE0Nxp9BA8zGyozNov2Ju76pIM0Ma%2F1iSTNkJlm1yvcDEXhmbMFYsyUCkRjd0fNr1ZjtVj4ZZBUL1Fyp6E2e79JRkTt2ZrfbZ7IlW5BA4XyzffWtVPxE%2FWzNr1M93tCKr7%2FYYmU%2B2Wlwg%2FSsr%2B3XFCTYsGzs7MeTLhCmPDttf38nCt%2FQUd3d9%2FrHtmruwR%2BeitYWkw%2F%2FIDbeOjK7YScFh99%2BLGUKgTbjxDrOkZKiTl6TayNFvWYYTG6yrZycxUgbPKCbjXxpfn4BnVJqSNdGLyH9GN%2Bw83jUVeqs5Vc7mgUPTXYvFUian2v%2FFwd4QR5FZmqPqKd%2BKrDEpIcZdpJWUNsSdkN%2FW%2B%2FDMGRyU5qZs4j46Rw7Srj5jVxeNIdQjJLtudjASe%2BZ%2BQE9%2BJfSY%2FZbR8K7Hx0KNPwjJ8AK1woICTZ3IKVWTBDdiK8ndIshtYowEql7zH2eazC3vKe%2FBjqnASJhaJl3VlcONLCyt%2FZ9Jj7hEs5UsqjVASuhdAmiS2Ep0wAaE%2Fb8P6G99ter82Xu%2F0quBoCXPbv61aLXs49P2es4iQa81Kd7gtN6rf5fYDF%2BC6GiWZYFH3JRQnV9tQsrAM7rdtpxEpWc4RI2Dnys7mRzecAftF4Jmw4asNE5LHY4Wnk%2Fo1zw2NTrkaerkzkD%2BL3uw2N8Ad7ebSspuOavMkwrZKKvnO0x&X-Amz-Signature=b7124613dc6e14ee6d91bbf3a0635bb631716360d8c163067948dbcd7d762b9c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQA5572%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJFMEMCIHTrP2BU0XkUxY%2BdMAA4OkXfm9IEIKu93ht5fxZgqFDqAh8Z%2Bnkb9icAb1z%2FJF1Wqy3KvFGQf3gRfZAKid4colKyKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMx3IsmkaD05chAPIq3ANqxyOLK0J0%2FN4O6R3MF2DFXhW3eE%2F5JmgycwL3aeepJlOgVpuZhdKTVMkv4xcRHeCWwrsP2%2FLw78RB4z8sqVVGRfJGznzxWalPh2Zyl8VBLtxDx%2FUrgw57gZSgQH3A%2FcnEFN5VCYEKOMvKvtOmcJYYPmOYa3iXdzWv%2FGiKW3AvcFAhesPenE0Nxp9BA8zGyozNov2Ju76pIM0Ma%2F1iSTNkJlm1yvcDEXhmbMFYsyUCkRjd0fNr1ZjtVj4ZZBUL1Fyp6E2e79JRkTt2ZrfbZ7IlW5BA4XyzffWtVPxE%2FWzNr1M93tCKr7%2FYYmU%2B2Wlwg%2FSsr%2B3XFCTYsGzs7MeTLhCmPDttf38nCt%2FQUd3d9%2FrHtmruwR%2BeitYWkw%2F%2FIDbeOjK7YScFh99%2BLGUKgTbjxDrOkZKiTl6TayNFvWYYTG6yrZycxUgbPKCbjXxpfn4BnVJqSNdGLyH9GN%2Bw83jUVeqs5Vc7mgUPTXYvFUian2v%2FFwd4QR5FZmqPqKd%2BKrDEpIcZdpJWUNsSdkN%2FW%2B%2FDMGRyU5qZs4j46Rw7Srj5jVxeNIdQjJLtudjASe%2BZ%2BQE9%2BJfSY%2FZbR8K7Hx0KNPwjJ8AK1woICTZ3IKVWTBDdiK8ndIshtYowEql7zH2eazC3vKe%2FBjqnASJhaJl3VlcONLCyt%2FZ9Jj7hEs5UsqjVASuhdAmiS2Ep0wAaE%2Fb8P6G99ter82Xu%2F0quBoCXPbv61aLXs49P2es4iQa81Kd7gtN6rf5fYDF%2BC6GiWZYFH3JRQnV9tQsrAM7rdtpxEpWc4RI2Dnys7mRzecAftF4Jmw4asNE5LHY4Wnk%2Fo1zw2NTrkaerkzkD%2BL3uw2N8Ad7ebSspuOavMkwrZKKvnO0x&X-Amz-Signature=ef5298d77343ed755e0987a829fcad43d33db1285a8226492c54ca3567b3e172&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQA5572%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJFMEMCIHTrP2BU0XkUxY%2BdMAA4OkXfm9IEIKu93ht5fxZgqFDqAh8Z%2Bnkb9icAb1z%2FJF1Wqy3KvFGQf3gRfZAKid4colKyKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMx3IsmkaD05chAPIq3ANqxyOLK0J0%2FN4O6R3MF2DFXhW3eE%2F5JmgycwL3aeepJlOgVpuZhdKTVMkv4xcRHeCWwrsP2%2FLw78RB4z8sqVVGRfJGznzxWalPh2Zyl8VBLtxDx%2FUrgw57gZSgQH3A%2FcnEFN5VCYEKOMvKvtOmcJYYPmOYa3iXdzWv%2FGiKW3AvcFAhesPenE0Nxp9BA8zGyozNov2Ju76pIM0Ma%2F1iSTNkJlm1yvcDEXhmbMFYsyUCkRjd0fNr1ZjtVj4ZZBUL1Fyp6E2e79JRkTt2ZrfbZ7IlW5BA4XyzffWtVPxE%2FWzNr1M93tCKr7%2FYYmU%2B2Wlwg%2FSsr%2B3XFCTYsGzs7MeTLhCmPDttf38nCt%2FQUd3d9%2FrHtmruwR%2BeitYWkw%2F%2FIDbeOjK7YScFh99%2BLGUKgTbjxDrOkZKiTl6TayNFvWYYTG6yrZycxUgbPKCbjXxpfn4BnVJqSNdGLyH9GN%2Bw83jUVeqs5Vc7mgUPTXYvFUian2v%2FFwd4QR5FZmqPqKd%2BKrDEpIcZdpJWUNsSdkN%2FW%2B%2FDMGRyU5qZs4j46Rw7Srj5jVxeNIdQjJLtudjASe%2BZ%2BQE9%2BJfSY%2FZbR8K7Hx0KNPwjJ8AK1woICTZ3IKVWTBDdiK8ndIshtYowEql7zH2eazC3vKe%2FBjqnASJhaJl3VlcONLCyt%2FZ9Jj7hEs5UsqjVASuhdAmiS2Ep0wAaE%2Fb8P6G99ter82Xu%2F0quBoCXPbv61aLXs49P2es4iQa81Kd7gtN6rf5fYDF%2BC6GiWZYFH3JRQnV9tQsrAM7rdtpxEpWc4RI2Dnys7mRzecAftF4Jmw4asNE5LHY4Wnk%2Fo1zw2NTrkaerkzkD%2BL3uw2N8Ad7ebSspuOavMkwrZKKvnO0x&X-Amz-Signature=950e9c6535bb1cef5d2efc8b6721fa1f3dc319d78b3e95acfa3e4cfce6811426&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQA5572%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJFMEMCIHTrP2BU0XkUxY%2BdMAA4OkXfm9IEIKu93ht5fxZgqFDqAh8Z%2Bnkb9icAb1z%2FJF1Wqy3KvFGQf3gRfZAKid4colKyKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMx3IsmkaD05chAPIq3ANqxyOLK0J0%2FN4O6R3MF2DFXhW3eE%2F5JmgycwL3aeepJlOgVpuZhdKTVMkv4xcRHeCWwrsP2%2FLw78RB4z8sqVVGRfJGznzxWalPh2Zyl8VBLtxDx%2FUrgw57gZSgQH3A%2FcnEFN5VCYEKOMvKvtOmcJYYPmOYa3iXdzWv%2FGiKW3AvcFAhesPenE0Nxp9BA8zGyozNov2Ju76pIM0Ma%2F1iSTNkJlm1yvcDEXhmbMFYsyUCkRjd0fNr1ZjtVj4ZZBUL1Fyp6E2e79JRkTt2ZrfbZ7IlW5BA4XyzffWtVPxE%2FWzNr1M93tCKr7%2FYYmU%2B2Wlwg%2FSsr%2B3XFCTYsGzs7MeTLhCmPDttf38nCt%2FQUd3d9%2FrHtmruwR%2BeitYWkw%2F%2FIDbeOjK7YScFh99%2BLGUKgTbjxDrOkZKiTl6TayNFvWYYTG6yrZycxUgbPKCbjXxpfn4BnVJqSNdGLyH9GN%2Bw83jUVeqs5Vc7mgUPTXYvFUian2v%2FFwd4QR5FZmqPqKd%2BKrDEpIcZdpJWUNsSdkN%2FW%2B%2FDMGRyU5qZs4j46Rw7Srj5jVxeNIdQjJLtudjASe%2BZ%2BQE9%2BJfSY%2FZbR8K7Hx0KNPwjJ8AK1woICTZ3IKVWTBDdiK8ndIshtYowEql7zH2eazC3vKe%2FBjqnASJhaJl3VlcONLCyt%2FZ9Jj7hEs5UsqjVASuhdAmiS2Ep0wAaE%2Fb8P6G99ter82Xu%2F0quBoCXPbv61aLXs49P2es4iQa81Kd7gtN6rf5fYDF%2BC6GiWZYFH3JRQnV9tQsrAM7rdtpxEpWc4RI2Dnys7mRzecAftF4Jmw4asNE5LHY4Wnk%2Fo1zw2NTrkaerkzkD%2BL3uw2N8Ad7ebSspuOavMkwrZKKvnO0x&X-Amz-Signature=00b8acf51080274d8752be076233c1f7c793b1cc8cf3b43e694af8107612a4e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
