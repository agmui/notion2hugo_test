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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO77YT5K%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCvm0YvhmWYh%2BLbLgnawx%2BKj504xNuX7EVKqnvaPDSmRAIgEaoyWGjtvDTFTTE6feGgz89wpcJkyJDLe8cqjmCICacqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv28xoAf5F1U1WV6yrcAxDtx%2FLQuTzolMkKBF%2F6t33V7kljLOz9SeYBHXytP9D73rrwiL8yZ0ffV34xbGW0KQOGxn8gZnQ%2F4NvBwDtTGVEgzGQPt1kU7Jjy0aATlO6bvDUag4pJRtgIew58zV3Ffc%2FsNOXpqd%2Bsvi2IU5pfNK37WGUtjZkhSWLIcgYytz4PY0fYJytTcAS4%2Ff7qOQyjrLtH7dH86oZkU3GNXu%2BKMB544B8JY6SDxbOlMJgVxuDjzySBSP0ahBKmWQti0eYWgknavwDcZjeWntMjAVj%2F2trHfeX0XiPiFQnDbJWMSO52dmmjpGNB0RLgegMGx7M5j5WxEa8sdNstEv3agZwFzrGOKS5VreJ8i0do%2Ftu8unazAVrM0WRvc50V8LUhtkzXXU8c1UOB8W6flwHkhDx2YFKFT5eTv6%2FU8y8leEkaPuT3j684zffCILLJ2ZKKG7qQHOFghrC7HuFi13K3OOG3YBmrqvfv7WFllcGlfN3HBJZhKK4%2Bz56wHx2Wv2bjtub3nswf%2Bsql5K5p2sSG127Zd%2BYtU64%2FgOwH0lQdcKxYE4UHKIMYpRQ2oTcCLgWV1RCyy09fQdi3f4OQaZTWhnLpxLR719LmE7csYpX5Bn5eGzxYQ0g%2B54UkvcWB1HE7MJvwo78GOqUBdLNstNdmmpThOkvskFTFSTk%2BPwbtz90W8reBLChHvXnw6toS0MIueRBoyc55FxWAcLNGgPsW%2Bdbh%2BM5QiFyAVf%2BfTzz%2FlK6CfYPNSxQES%2BMla%2BCQFxlwJ1RQhU%2FnBtPGPqEgZ7Gy1rCsIkqb6zIdust%2BX7YxbY5Aql3gq9DWdSWHHTf%2FAL%2B4lwmQ3uhQxV0UFO1hMjLexnjauWEKIYbhycUkOki%2F&X-Amz-Signature=b68c3731760ba697a3bb4a16ebfa92642cc40a4d79c7744f4148aa9d8430102f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO77YT5K%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCvm0YvhmWYh%2BLbLgnawx%2BKj504xNuX7EVKqnvaPDSmRAIgEaoyWGjtvDTFTTE6feGgz89wpcJkyJDLe8cqjmCICacqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv28xoAf5F1U1WV6yrcAxDtx%2FLQuTzolMkKBF%2F6t33V7kljLOz9SeYBHXytP9D73rrwiL8yZ0ffV34xbGW0KQOGxn8gZnQ%2F4NvBwDtTGVEgzGQPt1kU7Jjy0aATlO6bvDUag4pJRtgIew58zV3Ffc%2FsNOXpqd%2Bsvi2IU5pfNK37WGUtjZkhSWLIcgYytz4PY0fYJytTcAS4%2Ff7qOQyjrLtH7dH86oZkU3GNXu%2BKMB544B8JY6SDxbOlMJgVxuDjzySBSP0ahBKmWQti0eYWgknavwDcZjeWntMjAVj%2F2trHfeX0XiPiFQnDbJWMSO52dmmjpGNB0RLgegMGx7M5j5WxEa8sdNstEv3agZwFzrGOKS5VreJ8i0do%2Ftu8unazAVrM0WRvc50V8LUhtkzXXU8c1UOB8W6flwHkhDx2YFKFT5eTv6%2FU8y8leEkaPuT3j684zffCILLJ2ZKKG7qQHOFghrC7HuFi13K3OOG3YBmrqvfv7WFllcGlfN3HBJZhKK4%2Bz56wHx2Wv2bjtub3nswf%2Bsql5K5p2sSG127Zd%2BYtU64%2FgOwH0lQdcKxYE4UHKIMYpRQ2oTcCLgWV1RCyy09fQdi3f4OQaZTWhnLpxLR719LmE7csYpX5Bn5eGzxYQ0g%2B54UkvcWB1HE7MJvwo78GOqUBdLNstNdmmpThOkvskFTFSTk%2BPwbtz90W8reBLChHvXnw6toS0MIueRBoyc55FxWAcLNGgPsW%2Bdbh%2BM5QiFyAVf%2BfTzz%2FlK6CfYPNSxQES%2BMla%2BCQFxlwJ1RQhU%2FnBtPGPqEgZ7Gy1rCsIkqb6zIdust%2BX7YxbY5Aql3gq9DWdSWHHTf%2FAL%2B4lwmQ3uhQxV0UFO1hMjLexnjauWEKIYbhycUkOki%2F&X-Amz-Signature=88a113dec4e085f845b8a5352868bd651d730df3a461d31d6b3ab7fd9bcb598e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO77YT5K%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCvm0YvhmWYh%2BLbLgnawx%2BKj504xNuX7EVKqnvaPDSmRAIgEaoyWGjtvDTFTTE6feGgz89wpcJkyJDLe8cqjmCICacqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv28xoAf5F1U1WV6yrcAxDtx%2FLQuTzolMkKBF%2F6t33V7kljLOz9SeYBHXytP9D73rrwiL8yZ0ffV34xbGW0KQOGxn8gZnQ%2F4NvBwDtTGVEgzGQPt1kU7Jjy0aATlO6bvDUag4pJRtgIew58zV3Ffc%2FsNOXpqd%2Bsvi2IU5pfNK37WGUtjZkhSWLIcgYytz4PY0fYJytTcAS4%2Ff7qOQyjrLtH7dH86oZkU3GNXu%2BKMB544B8JY6SDxbOlMJgVxuDjzySBSP0ahBKmWQti0eYWgknavwDcZjeWntMjAVj%2F2trHfeX0XiPiFQnDbJWMSO52dmmjpGNB0RLgegMGx7M5j5WxEa8sdNstEv3agZwFzrGOKS5VreJ8i0do%2Ftu8unazAVrM0WRvc50V8LUhtkzXXU8c1UOB8W6flwHkhDx2YFKFT5eTv6%2FU8y8leEkaPuT3j684zffCILLJ2ZKKG7qQHOFghrC7HuFi13K3OOG3YBmrqvfv7WFllcGlfN3HBJZhKK4%2Bz56wHx2Wv2bjtub3nswf%2Bsql5K5p2sSG127Zd%2BYtU64%2FgOwH0lQdcKxYE4UHKIMYpRQ2oTcCLgWV1RCyy09fQdi3f4OQaZTWhnLpxLR719LmE7csYpX5Bn5eGzxYQ0g%2B54UkvcWB1HE7MJvwo78GOqUBdLNstNdmmpThOkvskFTFSTk%2BPwbtz90W8reBLChHvXnw6toS0MIueRBoyc55FxWAcLNGgPsW%2Bdbh%2BM5QiFyAVf%2BfTzz%2FlK6CfYPNSxQES%2BMla%2BCQFxlwJ1RQhU%2FnBtPGPqEgZ7Gy1rCsIkqb6zIdust%2BX7YxbY5Aql3gq9DWdSWHHTf%2FAL%2B4lwmQ3uhQxV0UFO1hMjLexnjauWEKIYbhycUkOki%2F&X-Amz-Signature=f3a72ac7cd6cfe11eaa002313e492fc64b4f9c51fe800e904a546fb702fb0bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO77YT5K%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCvm0YvhmWYh%2BLbLgnawx%2BKj504xNuX7EVKqnvaPDSmRAIgEaoyWGjtvDTFTTE6feGgz89wpcJkyJDLe8cqjmCICacqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv28xoAf5F1U1WV6yrcAxDtx%2FLQuTzolMkKBF%2F6t33V7kljLOz9SeYBHXytP9D73rrwiL8yZ0ffV34xbGW0KQOGxn8gZnQ%2F4NvBwDtTGVEgzGQPt1kU7Jjy0aATlO6bvDUag4pJRtgIew58zV3Ffc%2FsNOXpqd%2Bsvi2IU5pfNK37WGUtjZkhSWLIcgYytz4PY0fYJytTcAS4%2Ff7qOQyjrLtH7dH86oZkU3GNXu%2BKMB544B8JY6SDxbOlMJgVxuDjzySBSP0ahBKmWQti0eYWgknavwDcZjeWntMjAVj%2F2trHfeX0XiPiFQnDbJWMSO52dmmjpGNB0RLgegMGx7M5j5WxEa8sdNstEv3agZwFzrGOKS5VreJ8i0do%2Ftu8unazAVrM0WRvc50V8LUhtkzXXU8c1UOB8W6flwHkhDx2YFKFT5eTv6%2FU8y8leEkaPuT3j684zffCILLJ2ZKKG7qQHOFghrC7HuFi13K3OOG3YBmrqvfv7WFllcGlfN3HBJZhKK4%2Bz56wHx2Wv2bjtub3nswf%2Bsql5K5p2sSG127Zd%2BYtU64%2FgOwH0lQdcKxYE4UHKIMYpRQ2oTcCLgWV1RCyy09fQdi3f4OQaZTWhnLpxLR719LmE7csYpX5Bn5eGzxYQ0g%2B54UkvcWB1HE7MJvwo78GOqUBdLNstNdmmpThOkvskFTFSTk%2BPwbtz90W8reBLChHvXnw6toS0MIueRBoyc55FxWAcLNGgPsW%2Bdbh%2BM5QiFyAVf%2BfTzz%2FlK6CfYPNSxQES%2BMla%2BCQFxlwJ1RQhU%2FnBtPGPqEgZ7Gy1rCsIkqb6zIdust%2BX7YxbY5Aql3gq9DWdSWHHTf%2FAL%2B4lwmQ3uhQxV0UFO1hMjLexnjauWEKIYbhycUkOki%2F&X-Amz-Signature=b3e71d832a420bc28d84b513e6462293c953d6a52aa099b3e0ac1310524cd9f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO77YT5K%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCvm0YvhmWYh%2BLbLgnawx%2BKj504xNuX7EVKqnvaPDSmRAIgEaoyWGjtvDTFTTE6feGgz89wpcJkyJDLe8cqjmCICacqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv28xoAf5F1U1WV6yrcAxDtx%2FLQuTzolMkKBF%2F6t33V7kljLOz9SeYBHXytP9D73rrwiL8yZ0ffV34xbGW0KQOGxn8gZnQ%2F4NvBwDtTGVEgzGQPt1kU7Jjy0aATlO6bvDUag4pJRtgIew58zV3Ffc%2FsNOXpqd%2Bsvi2IU5pfNK37WGUtjZkhSWLIcgYytz4PY0fYJytTcAS4%2Ff7qOQyjrLtH7dH86oZkU3GNXu%2BKMB544B8JY6SDxbOlMJgVxuDjzySBSP0ahBKmWQti0eYWgknavwDcZjeWntMjAVj%2F2trHfeX0XiPiFQnDbJWMSO52dmmjpGNB0RLgegMGx7M5j5WxEa8sdNstEv3agZwFzrGOKS5VreJ8i0do%2Ftu8unazAVrM0WRvc50V8LUhtkzXXU8c1UOB8W6flwHkhDx2YFKFT5eTv6%2FU8y8leEkaPuT3j684zffCILLJ2ZKKG7qQHOFghrC7HuFi13K3OOG3YBmrqvfv7WFllcGlfN3HBJZhKK4%2Bz56wHx2Wv2bjtub3nswf%2Bsql5K5p2sSG127Zd%2BYtU64%2FgOwH0lQdcKxYE4UHKIMYpRQ2oTcCLgWV1RCyy09fQdi3f4OQaZTWhnLpxLR719LmE7csYpX5Bn5eGzxYQ0g%2B54UkvcWB1HE7MJvwo78GOqUBdLNstNdmmpThOkvskFTFSTk%2BPwbtz90W8reBLChHvXnw6toS0MIueRBoyc55FxWAcLNGgPsW%2Bdbh%2BM5QiFyAVf%2BfTzz%2FlK6CfYPNSxQES%2BMla%2BCQFxlwJ1RQhU%2FnBtPGPqEgZ7Gy1rCsIkqb6zIdust%2BX7YxbY5Aql3gq9DWdSWHHTf%2FAL%2B4lwmQ3uhQxV0UFO1hMjLexnjauWEKIYbhycUkOki%2F&X-Amz-Signature=58e01401aad1e2bdc7d7d9a23654532e6a706e1a3a9f2109112f5d8ba33673ef&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
