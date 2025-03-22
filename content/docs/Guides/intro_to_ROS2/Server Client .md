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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZV6DEWU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIG0hlK%2B0HJDOnT%2FrO0D1XMMmvWwQN81IzN6hZ5RwkyDiAiEA0TzeM1CKgObM0%2FXb0Agg4FtO6PFJFmaMjbHpzioMM6wqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKE9PaSAHuy4kVkVaCrcAyUWwFyM5zyWUSSukoEYAp06V%2FUwfacaU67NKvuWIFV1ZMEDXxgjwdVTSF6JQ0knoRwRzhuVW7c4dMO%2BO39rE3HcfYLy3rMdbXDyN7zcIvuSXVdoNxbePJVplkiO8Vc685jjHxlSXWrjNln4UJOdi48G6PM%2BCKKQ8BuQYU%2ByWL5o%2FQjebWosTtUCJGYpdszGmCN0oH8nHn5p5X5Cw9a8pen1lwOYrJwXa98DhP%2FIKTSzPLLUolh%2FCYW1oKUCDP18bDmopL57O9mjeZqvSE8vs6IYztQv4n8yrzD%2BVtrX8nSxMDE9FGEAQ8o2KHY5hQF6oW66MoceA%2FKdW3M8mfaoX2CrS9Ngve%2B7TkDRtJ4EYzFbFR3Wfk9uSTo45C6dD1KYVhYu9ghZtfH%2BeLaBddPE9eOJAkTBT3jBLLKV%2FBCvoelfyhc%2BRTNDKMbgEfyTPSTQNKHJjhtA%2BokhR9rVHf8Tp%2B%2FgamWrqu4rNJFim7ExXcpa6nhr72Iz9rV4QqIOuijXgU5RRl%2Bd%2BH83O585M8sxk%2BPq6xX7Zcr%2F60GRrwMHlwCyqpGvjvZqgRuLwJPlW3igVE9CW6Dkl4g5eLHBm4LBS2jml9IkE7fV4jfRm8N6TC%2BXZD1XTm9ck1ZJsxvoMOmL%2Bb4GOqUBq%2F6M5u4ZXRDZ0Q3fjQhrGMkcIKIOruQmDHQqBrrNc%2BMn4bT24QDSo8cJGbJpvcrH0ATuVnRSAgEDBJEsJKCvetykP3o7AEYJAwsm2iO89bZxe4slyt4c90bdD4CohoptORVchfV3bZDxda33QeasWUxOOIBntydhinyFsw78XcGXTC1k6Wa5JiransMI%2BzpczFiA8PpeUoP2BAz7HFbTZA9THOmg&X-Amz-Signature=5f9155d8ed4709fa8ebc14c92bfdefb4b53763087955abd3a694741f77282636&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZV6DEWU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIG0hlK%2B0HJDOnT%2FrO0D1XMMmvWwQN81IzN6hZ5RwkyDiAiEA0TzeM1CKgObM0%2FXb0Agg4FtO6PFJFmaMjbHpzioMM6wqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKE9PaSAHuy4kVkVaCrcAyUWwFyM5zyWUSSukoEYAp06V%2FUwfacaU67NKvuWIFV1ZMEDXxgjwdVTSF6JQ0knoRwRzhuVW7c4dMO%2BO39rE3HcfYLy3rMdbXDyN7zcIvuSXVdoNxbePJVplkiO8Vc685jjHxlSXWrjNln4UJOdi48G6PM%2BCKKQ8BuQYU%2ByWL5o%2FQjebWosTtUCJGYpdszGmCN0oH8nHn5p5X5Cw9a8pen1lwOYrJwXa98DhP%2FIKTSzPLLUolh%2FCYW1oKUCDP18bDmopL57O9mjeZqvSE8vs6IYztQv4n8yrzD%2BVtrX8nSxMDE9FGEAQ8o2KHY5hQF6oW66MoceA%2FKdW3M8mfaoX2CrS9Ngve%2B7TkDRtJ4EYzFbFR3Wfk9uSTo45C6dD1KYVhYu9ghZtfH%2BeLaBddPE9eOJAkTBT3jBLLKV%2FBCvoelfyhc%2BRTNDKMbgEfyTPSTQNKHJjhtA%2BokhR9rVHf8Tp%2B%2FgamWrqu4rNJFim7ExXcpa6nhr72Iz9rV4QqIOuijXgU5RRl%2Bd%2BH83O585M8sxk%2BPq6xX7Zcr%2F60GRrwMHlwCyqpGvjvZqgRuLwJPlW3igVE9CW6Dkl4g5eLHBm4LBS2jml9IkE7fV4jfRm8N6TC%2BXZD1XTm9ck1ZJsxvoMOmL%2Bb4GOqUBq%2F6M5u4ZXRDZ0Q3fjQhrGMkcIKIOruQmDHQqBrrNc%2BMn4bT24QDSo8cJGbJpvcrH0ATuVnRSAgEDBJEsJKCvetykP3o7AEYJAwsm2iO89bZxe4slyt4c90bdD4CohoptORVchfV3bZDxda33QeasWUxOOIBntydhinyFsw78XcGXTC1k6Wa5JiransMI%2BzpczFiA8PpeUoP2BAz7HFbTZA9THOmg&X-Amz-Signature=7a36ee0c0deae4657aabab8406e9d7dd1c64b47e8f209d6c0aae8f70fe069097&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZV6DEWU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIG0hlK%2B0HJDOnT%2FrO0D1XMMmvWwQN81IzN6hZ5RwkyDiAiEA0TzeM1CKgObM0%2FXb0Agg4FtO6PFJFmaMjbHpzioMM6wqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKE9PaSAHuy4kVkVaCrcAyUWwFyM5zyWUSSukoEYAp06V%2FUwfacaU67NKvuWIFV1ZMEDXxgjwdVTSF6JQ0knoRwRzhuVW7c4dMO%2BO39rE3HcfYLy3rMdbXDyN7zcIvuSXVdoNxbePJVplkiO8Vc685jjHxlSXWrjNln4UJOdi48G6PM%2BCKKQ8BuQYU%2ByWL5o%2FQjebWosTtUCJGYpdszGmCN0oH8nHn5p5X5Cw9a8pen1lwOYrJwXa98DhP%2FIKTSzPLLUolh%2FCYW1oKUCDP18bDmopL57O9mjeZqvSE8vs6IYztQv4n8yrzD%2BVtrX8nSxMDE9FGEAQ8o2KHY5hQF6oW66MoceA%2FKdW3M8mfaoX2CrS9Ngve%2B7TkDRtJ4EYzFbFR3Wfk9uSTo45C6dD1KYVhYu9ghZtfH%2BeLaBddPE9eOJAkTBT3jBLLKV%2FBCvoelfyhc%2BRTNDKMbgEfyTPSTQNKHJjhtA%2BokhR9rVHf8Tp%2B%2FgamWrqu4rNJFim7ExXcpa6nhr72Iz9rV4QqIOuijXgU5RRl%2Bd%2BH83O585M8sxk%2BPq6xX7Zcr%2F60GRrwMHlwCyqpGvjvZqgRuLwJPlW3igVE9CW6Dkl4g5eLHBm4LBS2jml9IkE7fV4jfRm8N6TC%2BXZD1XTm9ck1ZJsxvoMOmL%2Bb4GOqUBq%2F6M5u4ZXRDZ0Q3fjQhrGMkcIKIOruQmDHQqBrrNc%2BMn4bT24QDSo8cJGbJpvcrH0ATuVnRSAgEDBJEsJKCvetykP3o7AEYJAwsm2iO89bZxe4slyt4c90bdD4CohoptORVchfV3bZDxda33QeasWUxOOIBntydhinyFsw78XcGXTC1k6Wa5JiransMI%2BzpczFiA8PpeUoP2BAz7HFbTZA9THOmg&X-Amz-Signature=db8d32436312fb04676c0c362f9c7a93176ab8f952df1b417d7791f6f5c20f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZV6DEWU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIG0hlK%2B0HJDOnT%2FrO0D1XMMmvWwQN81IzN6hZ5RwkyDiAiEA0TzeM1CKgObM0%2FXb0Agg4FtO6PFJFmaMjbHpzioMM6wqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKE9PaSAHuy4kVkVaCrcAyUWwFyM5zyWUSSukoEYAp06V%2FUwfacaU67NKvuWIFV1ZMEDXxgjwdVTSF6JQ0knoRwRzhuVW7c4dMO%2BO39rE3HcfYLy3rMdbXDyN7zcIvuSXVdoNxbePJVplkiO8Vc685jjHxlSXWrjNln4UJOdi48G6PM%2BCKKQ8BuQYU%2ByWL5o%2FQjebWosTtUCJGYpdszGmCN0oH8nHn5p5X5Cw9a8pen1lwOYrJwXa98DhP%2FIKTSzPLLUolh%2FCYW1oKUCDP18bDmopL57O9mjeZqvSE8vs6IYztQv4n8yrzD%2BVtrX8nSxMDE9FGEAQ8o2KHY5hQF6oW66MoceA%2FKdW3M8mfaoX2CrS9Ngve%2B7TkDRtJ4EYzFbFR3Wfk9uSTo45C6dD1KYVhYu9ghZtfH%2BeLaBddPE9eOJAkTBT3jBLLKV%2FBCvoelfyhc%2BRTNDKMbgEfyTPSTQNKHJjhtA%2BokhR9rVHf8Tp%2B%2FgamWrqu4rNJFim7ExXcpa6nhr72Iz9rV4QqIOuijXgU5RRl%2Bd%2BH83O585M8sxk%2BPq6xX7Zcr%2F60GRrwMHlwCyqpGvjvZqgRuLwJPlW3igVE9CW6Dkl4g5eLHBm4LBS2jml9IkE7fV4jfRm8N6TC%2BXZD1XTm9ck1ZJsxvoMOmL%2Bb4GOqUBq%2F6M5u4ZXRDZ0Q3fjQhrGMkcIKIOruQmDHQqBrrNc%2BMn4bT24QDSo8cJGbJpvcrH0ATuVnRSAgEDBJEsJKCvetykP3o7AEYJAwsm2iO89bZxe4slyt4c90bdD4CohoptORVchfV3bZDxda33QeasWUxOOIBntydhinyFsw78XcGXTC1k6Wa5JiransMI%2BzpczFiA8PpeUoP2BAz7HFbTZA9THOmg&X-Amz-Signature=99ed94a8294d12d1b2d3f9bd15f0f67e92e9c47a6d9dd9ec78cd2f4528fb8ea3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZV6DEWU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIG0hlK%2B0HJDOnT%2FrO0D1XMMmvWwQN81IzN6hZ5RwkyDiAiEA0TzeM1CKgObM0%2FXb0Agg4FtO6PFJFmaMjbHpzioMM6wqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKE9PaSAHuy4kVkVaCrcAyUWwFyM5zyWUSSukoEYAp06V%2FUwfacaU67NKvuWIFV1ZMEDXxgjwdVTSF6JQ0knoRwRzhuVW7c4dMO%2BO39rE3HcfYLy3rMdbXDyN7zcIvuSXVdoNxbePJVplkiO8Vc685jjHxlSXWrjNln4UJOdi48G6PM%2BCKKQ8BuQYU%2ByWL5o%2FQjebWosTtUCJGYpdszGmCN0oH8nHn5p5X5Cw9a8pen1lwOYrJwXa98DhP%2FIKTSzPLLUolh%2FCYW1oKUCDP18bDmopL57O9mjeZqvSE8vs6IYztQv4n8yrzD%2BVtrX8nSxMDE9FGEAQ8o2KHY5hQF6oW66MoceA%2FKdW3M8mfaoX2CrS9Ngve%2B7TkDRtJ4EYzFbFR3Wfk9uSTo45C6dD1KYVhYu9ghZtfH%2BeLaBddPE9eOJAkTBT3jBLLKV%2FBCvoelfyhc%2BRTNDKMbgEfyTPSTQNKHJjhtA%2BokhR9rVHf8Tp%2B%2FgamWrqu4rNJFim7ExXcpa6nhr72Iz9rV4QqIOuijXgU5RRl%2Bd%2BH83O585M8sxk%2BPq6xX7Zcr%2F60GRrwMHlwCyqpGvjvZqgRuLwJPlW3igVE9CW6Dkl4g5eLHBm4LBS2jml9IkE7fV4jfRm8N6TC%2BXZD1XTm9ck1ZJsxvoMOmL%2Bb4GOqUBq%2F6M5u4ZXRDZ0Q3fjQhrGMkcIKIOruQmDHQqBrrNc%2BMn4bT24QDSo8cJGbJpvcrH0ATuVnRSAgEDBJEsJKCvetykP3o7AEYJAwsm2iO89bZxe4slyt4c90bdD4CohoptORVchfV3bZDxda33QeasWUxOOIBntydhinyFsw78XcGXTC1k6Wa5JiransMI%2BzpczFiA8PpeUoP2BAz7HFbTZA9THOmg&X-Amz-Signature=5e057e08761bf007c8ba964265824265cf47e12ae232af1164ca994dfc3c6e36&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
