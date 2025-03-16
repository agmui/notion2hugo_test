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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF2MPMCC%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVH5GPYPiKZknDLYOHkdWz38w88%2BPVi4CoRAl7PkJPAgIgJnJxu4QWED1k%2F96%2BJzBuSh8EwGfLm5ey81wbI18W%2BJUq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGwKHCH%2BWhnybr6sGSrcA8GUJb8MyJT%2FV4mWb3ZMHMEQQm3YfRWierQ3G7LTyymE1iwowDf2Qf%2FLDhgwIPcwcsUOw7gY3ovjuk%2B88s9vKjXk80uK08I6ZFwAdRltYGyj%2B23nFnI01QQehYMNjj15qmGBg5z8PmCb6fq5UiRj3%2FNq9ZYXyf6FeGSARr3b4y%2F0nbCt2wnxplz2ZQlBr9jMkf9x0HhBIcVKn3UfuPq3rCuMcOUxuvmitG83qtvMUDYopqJoo%2F3QKaqyw%2BInVDOV87paInrMabNBooCCcaEC%2BZxI%2FIij8U5xYF0XlzqxsWsIsDGWBdf7UdiHYChi4qpq9gibeubvKnYQi0J%2BZlbmUGG8M8WSJl72Jce207EAkiEoKn4ds1fzmeeAc7PxlC9%2BF%2BxS%2F5f8Lq%2FiLhdEilHNl7qQHz6m9Foas0Wp3UQGzPYPmsgYjakT97AwBz1sYmstaoscx86ho50fLqU7NFZL0bRhYfaaR9OzoCAAd0UUn55e3NB%2BC9WlpYfxJn4WsJWmCtwNd9xonjbRXfWTUI6J0HmpAdvnghpEdCYpfRVB9DV36zX3FA9jtnv9WDL5nDoIPVFoLlGWospoiS0J7CHIuAAz%2BbKcWa5BZfIAx1L1pvZYM7nImDlLBHt%2BRnrjMKzY2r4GOqUBt7oylfi4VMpcFs6Oo8SVhxc8awIGbn5Sr%2B4Vhey9Z4%2Fs0ugn2D%2FozYeXaQ4VSIUSdCii6FhQYIx%2BJjQgApKzEc%2BH9f72%2FAVyVdJ8kgjHD%2BWCfNqCB%2B97T6WS5NHHv1jFVx8ss6ZrBViLjxER8haFB51ZMPvzEoIO0hH965xuI59gdAiSOs8XlGmocFBCxZUsFxtKs6JeLMd0iM8SrGe6xA4BL19h&X-Amz-Signature=1922f46ffd988258a78a9e333d5883bf730990e98f530671294a50221bbf92a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF2MPMCC%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVH5GPYPiKZknDLYOHkdWz38w88%2BPVi4CoRAl7PkJPAgIgJnJxu4QWED1k%2F96%2BJzBuSh8EwGfLm5ey81wbI18W%2BJUq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGwKHCH%2BWhnybr6sGSrcA8GUJb8MyJT%2FV4mWb3ZMHMEQQm3YfRWierQ3G7LTyymE1iwowDf2Qf%2FLDhgwIPcwcsUOw7gY3ovjuk%2B88s9vKjXk80uK08I6ZFwAdRltYGyj%2B23nFnI01QQehYMNjj15qmGBg5z8PmCb6fq5UiRj3%2FNq9ZYXyf6FeGSARr3b4y%2F0nbCt2wnxplz2ZQlBr9jMkf9x0HhBIcVKn3UfuPq3rCuMcOUxuvmitG83qtvMUDYopqJoo%2F3QKaqyw%2BInVDOV87paInrMabNBooCCcaEC%2BZxI%2FIij8U5xYF0XlzqxsWsIsDGWBdf7UdiHYChi4qpq9gibeubvKnYQi0J%2BZlbmUGG8M8WSJl72Jce207EAkiEoKn4ds1fzmeeAc7PxlC9%2BF%2BxS%2F5f8Lq%2FiLhdEilHNl7qQHz6m9Foas0Wp3UQGzPYPmsgYjakT97AwBz1sYmstaoscx86ho50fLqU7NFZL0bRhYfaaR9OzoCAAd0UUn55e3NB%2BC9WlpYfxJn4WsJWmCtwNd9xonjbRXfWTUI6J0HmpAdvnghpEdCYpfRVB9DV36zX3FA9jtnv9WDL5nDoIPVFoLlGWospoiS0J7CHIuAAz%2BbKcWa5BZfIAx1L1pvZYM7nImDlLBHt%2BRnrjMKzY2r4GOqUBt7oylfi4VMpcFs6Oo8SVhxc8awIGbn5Sr%2B4Vhey9Z4%2Fs0ugn2D%2FozYeXaQ4VSIUSdCii6FhQYIx%2BJjQgApKzEc%2BH9f72%2FAVyVdJ8kgjHD%2BWCfNqCB%2B97T6WS5NHHv1jFVx8ss6ZrBViLjxER8haFB51ZMPvzEoIO0hH965xuI59gdAiSOs8XlGmocFBCxZUsFxtKs6JeLMd0iM8SrGe6xA4BL19h&X-Amz-Signature=86ea108f62c50c8c4bb813271e2ab1a9a106b811dcc794ae46d16c714077810d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF2MPMCC%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVH5GPYPiKZknDLYOHkdWz38w88%2BPVi4CoRAl7PkJPAgIgJnJxu4QWED1k%2F96%2BJzBuSh8EwGfLm5ey81wbI18W%2BJUq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGwKHCH%2BWhnybr6sGSrcA8GUJb8MyJT%2FV4mWb3ZMHMEQQm3YfRWierQ3G7LTyymE1iwowDf2Qf%2FLDhgwIPcwcsUOw7gY3ovjuk%2B88s9vKjXk80uK08I6ZFwAdRltYGyj%2B23nFnI01QQehYMNjj15qmGBg5z8PmCb6fq5UiRj3%2FNq9ZYXyf6FeGSARr3b4y%2F0nbCt2wnxplz2ZQlBr9jMkf9x0HhBIcVKn3UfuPq3rCuMcOUxuvmitG83qtvMUDYopqJoo%2F3QKaqyw%2BInVDOV87paInrMabNBooCCcaEC%2BZxI%2FIij8U5xYF0XlzqxsWsIsDGWBdf7UdiHYChi4qpq9gibeubvKnYQi0J%2BZlbmUGG8M8WSJl72Jce207EAkiEoKn4ds1fzmeeAc7PxlC9%2BF%2BxS%2F5f8Lq%2FiLhdEilHNl7qQHz6m9Foas0Wp3UQGzPYPmsgYjakT97AwBz1sYmstaoscx86ho50fLqU7NFZL0bRhYfaaR9OzoCAAd0UUn55e3NB%2BC9WlpYfxJn4WsJWmCtwNd9xonjbRXfWTUI6J0HmpAdvnghpEdCYpfRVB9DV36zX3FA9jtnv9WDL5nDoIPVFoLlGWospoiS0J7CHIuAAz%2BbKcWa5BZfIAx1L1pvZYM7nImDlLBHt%2BRnrjMKzY2r4GOqUBt7oylfi4VMpcFs6Oo8SVhxc8awIGbn5Sr%2B4Vhey9Z4%2Fs0ugn2D%2FozYeXaQ4VSIUSdCii6FhQYIx%2BJjQgApKzEc%2BH9f72%2FAVyVdJ8kgjHD%2BWCfNqCB%2B97T6WS5NHHv1jFVx8ss6ZrBViLjxER8haFB51ZMPvzEoIO0hH965xuI59gdAiSOs8XlGmocFBCxZUsFxtKs6JeLMd0iM8SrGe6xA4BL19h&X-Amz-Signature=10727916b4fcc935a80b3b59867c0cb52fadac7aa66aae693cb7787c27757bc5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF2MPMCC%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVH5GPYPiKZknDLYOHkdWz38w88%2BPVi4CoRAl7PkJPAgIgJnJxu4QWED1k%2F96%2BJzBuSh8EwGfLm5ey81wbI18W%2BJUq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGwKHCH%2BWhnybr6sGSrcA8GUJb8MyJT%2FV4mWb3ZMHMEQQm3YfRWierQ3G7LTyymE1iwowDf2Qf%2FLDhgwIPcwcsUOw7gY3ovjuk%2B88s9vKjXk80uK08I6ZFwAdRltYGyj%2B23nFnI01QQehYMNjj15qmGBg5z8PmCb6fq5UiRj3%2FNq9ZYXyf6FeGSARr3b4y%2F0nbCt2wnxplz2ZQlBr9jMkf9x0HhBIcVKn3UfuPq3rCuMcOUxuvmitG83qtvMUDYopqJoo%2F3QKaqyw%2BInVDOV87paInrMabNBooCCcaEC%2BZxI%2FIij8U5xYF0XlzqxsWsIsDGWBdf7UdiHYChi4qpq9gibeubvKnYQi0J%2BZlbmUGG8M8WSJl72Jce207EAkiEoKn4ds1fzmeeAc7PxlC9%2BF%2BxS%2F5f8Lq%2FiLhdEilHNl7qQHz6m9Foas0Wp3UQGzPYPmsgYjakT97AwBz1sYmstaoscx86ho50fLqU7NFZL0bRhYfaaR9OzoCAAd0UUn55e3NB%2BC9WlpYfxJn4WsJWmCtwNd9xonjbRXfWTUI6J0HmpAdvnghpEdCYpfRVB9DV36zX3FA9jtnv9WDL5nDoIPVFoLlGWospoiS0J7CHIuAAz%2BbKcWa5BZfIAx1L1pvZYM7nImDlLBHt%2BRnrjMKzY2r4GOqUBt7oylfi4VMpcFs6Oo8SVhxc8awIGbn5Sr%2B4Vhey9Z4%2Fs0ugn2D%2FozYeXaQ4VSIUSdCii6FhQYIx%2BJjQgApKzEc%2BH9f72%2FAVyVdJ8kgjHD%2BWCfNqCB%2B97T6WS5NHHv1jFVx8ss6ZrBViLjxER8haFB51ZMPvzEoIO0hH965xuI59gdAiSOs8XlGmocFBCxZUsFxtKs6JeLMd0iM8SrGe6xA4BL19h&X-Amz-Signature=5e57d9a3fcdd5b35f7109da76c21ddeafcb9576375d7491a7749fecb5420ff06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF2MPMCC%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVH5GPYPiKZknDLYOHkdWz38w88%2BPVi4CoRAl7PkJPAgIgJnJxu4QWED1k%2F96%2BJzBuSh8EwGfLm5ey81wbI18W%2BJUq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGwKHCH%2BWhnybr6sGSrcA8GUJb8MyJT%2FV4mWb3ZMHMEQQm3YfRWierQ3G7LTyymE1iwowDf2Qf%2FLDhgwIPcwcsUOw7gY3ovjuk%2B88s9vKjXk80uK08I6ZFwAdRltYGyj%2B23nFnI01QQehYMNjj15qmGBg5z8PmCb6fq5UiRj3%2FNq9ZYXyf6FeGSARr3b4y%2F0nbCt2wnxplz2ZQlBr9jMkf9x0HhBIcVKn3UfuPq3rCuMcOUxuvmitG83qtvMUDYopqJoo%2F3QKaqyw%2BInVDOV87paInrMabNBooCCcaEC%2BZxI%2FIij8U5xYF0XlzqxsWsIsDGWBdf7UdiHYChi4qpq9gibeubvKnYQi0J%2BZlbmUGG8M8WSJl72Jce207EAkiEoKn4ds1fzmeeAc7PxlC9%2BF%2BxS%2F5f8Lq%2FiLhdEilHNl7qQHz6m9Foas0Wp3UQGzPYPmsgYjakT97AwBz1sYmstaoscx86ho50fLqU7NFZL0bRhYfaaR9OzoCAAd0UUn55e3NB%2BC9WlpYfxJn4WsJWmCtwNd9xonjbRXfWTUI6J0HmpAdvnghpEdCYpfRVB9DV36zX3FA9jtnv9WDL5nDoIPVFoLlGWospoiS0J7CHIuAAz%2BbKcWa5BZfIAx1L1pvZYM7nImDlLBHt%2BRnrjMKzY2r4GOqUBt7oylfi4VMpcFs6Oo8SVhxc8awIGbn5Sr%2B4Vhey9Z4%2Fs0ugn2D%2FozYeXaQ4VSIUSdCii6FhQYIx%2BJjQgApKzEc%2BH9f72%2FAVyVdJ8kgjHD%2BWCfNqCB%2B97T6WS5NHHv1jFVx8ss6ZrBViLjxER8haFB51ZMPvzEoIO0hH965xuI59gdAiSOs8XlGmocFBCxZUsFxtKs6JeLMd0iM8SrGe6xA4BL19h&X-Amz-Signature=b336fb3a4b74e431ad6cf44815fe516830048c1af18cf8b43fd4f0072f5547db&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
