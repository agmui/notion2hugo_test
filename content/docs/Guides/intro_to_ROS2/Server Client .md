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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QMA5FT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC6JNhNHAi1Lxl%2FhFzU%2Boi4Vk76CjBjMwgCEAW8dhRMNAIgcYc511JB6Ku%2B%2Fb2zRU5uKEonoHggx59dJpZLU5s%2BZcYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDD%2F0MsMe6m0auId2iSrcA60iaikoaj5q8QNTlO%2BGmg%2F4TQl1rDPYnEtJoFFaRTf8CHSEmypkkoLZhnihbEX3rh0pbk1UhTUFpw8Q2Ao1ar3g2pgcHlJ%2Fo7w9E8%2B5wPO1Iz%2BIsqlYQ0gWBhjoly5vQSWgM%2BN600qJshKEQ9oBCMw045dIotzG8%2BfC1zKpCslus03M9eYYe0AQ8hoXEXm7EtqyMGF4xmuseTVkz%2FaCxXckfATTXilg1Y25Ao5S8bM7o4yqPIZ5qiU1UjQk1vuVv2azxqa2pciHwP30PJ2gdDr2%2FL9y3VIh7YjCD2z17YJMBfICLu3X9opR44mTIk0djMElrtiarXvDf93hiE2SF4j9fP4hlEAOAiRqQjmBDXHSZcO21Kour%2Fdf%2BRWkCdKWydR8kg2ol8BRO3guz2FIfkmRMhBWXgdI6VsHrAvATp%2BquJcOw6pPIz04mbLt7gwnBTZx7kMYZtmWgm3jg0s7T1H0P5K7WGww0uu7%2FKtB9TbeSABllIyvy3fsXiiAkkJNeLJMnjh3ZU6NN019tv%2F8ncDe6yIXbhSEKERn2paZRH93ftxgDRASycwzg0zKpTILdjA%2BhewflsSgl6Pj5ZvJMbvCrzt%2BoITNyhzXZNPJ79uHNG7I7ObQNGi6paMXMLTNx8EGOqUB4mSCbdku0n04aNa%2BZatcNfOCN%2FUulBQ%2FbGW8S%2FP9EpEy39W3%2B5bjxKa99Ara%2FGbJLQlVNxpJxrzPVTcyvNBwjnzOwqzHBUBCJlOK1dS98StAsuMHVRd%2FYW0pieU8wx9JYK%2F2LhxFT57UHf%2FyO2GDhowI1yxhKJ1zZh%2BoVOlHj7LPiy0wDTgVr9XAATw3AmAe9YfdHj3JsdentfQX5DNTUwMiuH59&X-Amz-Signature=0f9ff21f65fa5413f8df795fdb7ef19854349c360bb871f1f381e49a6fc38ec1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QMA5FT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC6JNhNHAi1Lxl%2FhFzU%2Boi4Vk76CjBjMwgCEAW8dhRMNAIgcYc511JB6Ku%2B%2Fb2zRU5uKEonoHggx59dJpZLU5s%2BZcYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDD%2F0MsMe6m0auId2iSrcA60iaikoaj5q8QNTlO%2BGmg%2F4TQl1rDPYnEtJoFFaRTf8CHSEmypkkoLZhnihbEX3rh0pbk1UhTUFpw8Q2Ao1ar3g2pgcHlJ%2Fo7w9E8%2B5wPO1Iz%2BIsqlYQ0gWBhjoly5vQSWgM%2BN600qJshKEQ9oBCMw045dIotzG8%2BfC1zKpCslus03M9eYYe0AQ8hoXEXm7EtqyMGF4xmuseTVkz%2FaCxXckfATTXilg1Y25Ao5S8bM7o4yqPIZ5qiU1UjQk1vuVv2azxqa2pciHwP30PJ2gdDr2%2FL9y3VIh7YjCD2z17YJMBfICLu3X9opR44mTIk0djMElrtiarXvDf93hiE2SF4j9fP4hlEAOAiRqQjmBDXHSZcO21Kour%2Fdf%2BRWkCdKWydR8kg2ol8BRO3guz2FIfkmRMhBWXgdI6VsHrAvATp%2BquJcOw6pPIz04mbLt7gwnBTZx7kMYZtmWgm3jg0s7T1H0P5K7WGww0uu7%2FKtB9TbeSABllIyvy3fsXiiAkkJNeLJMnjh3ZU6NN019tv%2F8ncDe6yIXbhSEKERn2paZRH93ftxgDRASycwzg0zKpTILdjA%2BhewflsSgl6Pj5ZvJMbvCrzt%2BoITNyhzXZNPJ79uHNG7I7ObQNGi6paMXMLTNx8EGOqUB4mSCbdku0n04aNa%2BZatcNfOCN%2FUulBQ%2FbGW8S%2FP9EpEy39W3%2B5bjxKa99Ara%2FGbJLQlVNxpJxrzPVTcyvNBwjnzOwqzHBUBCJlOK1dS98StAsuMHVRd%2FYW0pieU8wx9JYK%2F2LhxFT57UHf%2FyO2GDhowI1yxhKJ1zZh%2BoVOlHj7LPiy0wDTgVr9XAATw3AmAe9YfdHj3JsdentfQX5DNTUwMiuH59&X-Amz-Signature=01fb0ebda72fa32c13a23c8aeb97de94860a32381d7681ed2087acf5d78ad352&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QMA5FT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC6JNhNHAi1Lxl%2FhFzU%2Boi4Vk76CjBjMwgCEAW8dhRMNAIgcYc511JB6Ku%2B%2Fb2zRU5uKEonoHggx59dJpZLU5s%2BZcYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDD%2F0MsMe6m0auId2iSrcA60iaikoaj5q8QNTlO%2BGmg%2F4TQl1rDPYnEtJoFFaRTf8CHSEmypkkoLZhnihbEX3rh0pbk1UhTUFpw8Q2Ao1ar3g2pgcHlJ%2Fo7w9E8%2B5wPO1Iz%2BIsqlYQ0gWBhjoly5vQSWgM%2BN600qJshKEQ9oBCMw045dIotzG8%2BfC1zKpCslus03M9eYYe0AQ8hoXEXm7EtqyMGF4xmuseTVkz%2FaCxXckfATTXilg1Y25Ao5S8bM7o4yqPIZ5qiU1UjQk1vuVv2azxqa2pciHwP30PJ2gdDr2%2FL9y3VIh7YjCD2z17YJMBfICLu3X9opR44mTIk0djMElrtiarXvDf93hiE2SF4j9fP4hlEAOAiRqQjmBDXHSZcO21Kour%2Fdf%2BRWkCdKWydR8kg2ol8BRO3guz2FIfkmRMhBWXgdI6VsHrAvATp%2BquJcOw6pPIz04mbLt7gwnBTZx7kMYZtmWgm3jg0s7T1H0P5K7WGww0uu7%2FKtB9TbeSABllIyvy3fsXiiAkkJNeLJMnjh3ZU6NN019tv%2F8ncDe6yIXbhSEKERn2paZRH93ftxgDRASycwzg0zKpTILdjA%2BhewflsSgl6Pj5ZvJMbvCrzt%2BoITNyhzXZNPJ79uHNG7I7ObQNGi6paMXMLTNx8EGOqUB4mSCbdku0n04aNa%2BZatcNfOCN%2FUulBQ%2FbGW8S%2FP9EpEy39W3%2B5bjxKa99Ara%2FGbJLQlVNxpJxrzPVTcyvNBwjnzOwqzHBUBCJlOK1dS98StAsuMHVRd%2FYW0pieU8wx9JYK%2F2LhxFT57UHf%2FyO2GDhowI1yxhKJ1zZh%2BoVOlHj7LPiy0wDTgVr9XAATw3AmAe9YfdHj3JsdentfQX5DNTUwMiuH59&X-Amz-Signature=9d86c31fea5f9cca56d365428c93a8c98121eae04a3d2e40d2b1bf2f1a8698c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QMA5FT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC6JNhNHAi1Lxl%2FhFzU%2Boi4Vk76CjBjMwgCEAW8dhRMNAIgcYc511JB6Ku%2B%2Fb2zRU5uKEonoHggx59dJpZLU5s%2BZcYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDD%2F0MsMe6m0auId2iSrcA60iaikoaj5q8QNTlO%2BGmg%2F4TQl1rDPYnEtJoFFaRTf8CHSEmypkkoLZhnihbEX3rh0pbk1UhTUFpw8Q2Ao1ar3g2pgcHlJ%2Fo7w9E8%2B5wPO1Iz%2BIsqlYQ0gWBhjoly5vQSWgM%2BN600qJshKEQ9oBCMw045dIotzG8%2BfC1zKpCslus03M9eYYe0AQ8hoXEXm7EtqyMGF4xmuseTVkz%2FaCxXckfATTXilg1Y25Ao5S8bM7o4yqPIZ5qiU1UjQk1vuVv2azxqa2pciHwP30PJ2gdDr2%2FL9y3VIh7YjCD2z17YJMBfICLu3X9opR44mTIk0djMElrtiarXvDf93hiE2SF4j9fP4hlEAOAiRqQjmBDXHSZcO21Kour%2Fdf%2BRWkCdKWydR8kg2ol8BRO3guz2FIfkmRMhBWXgdI6VsHrAvATp%2BquJcOw6pPIz04mbLt7gwnBTZx7kMYZtmWgm3jg0s7T1H0P5K7WGww0uu7%2FKtB9TbeSABllIyvy3fsXiiAkkJNeLJMnjh3ZU6NN019tv%2F8ncDe6yIXbhSEKERn2paZRH93ftxgDRASycwzg0zKpTILdjA%2BhewflsSgl6Pj5ZvJMbvCrzt%2BoITNyhzXZNPJ79uHNG7I7ObQNGi6paMXMLTNx8EGOqUB4mSCbdku0n04aNa%2BZatcNfOCN%2FUulBQ%2FbGW8S%2FP9EpEy39W3%2B5bjxKa99Ara%2FGbJLQlVNxpJxrzPVTcyvNBwjnzOwqzHBUBCJlOK1dS98StAsuMHVRd%2FYW0pieU8wx9JYK%2F2LhxFT57UHf%2FyO2GDhowI1yxhKJ1zZh%2BoVOlHj7LPiy0wDTgVr9XAATw3AmAe9YfdHj3JsdentfQX5DNTUwMiuH59&X-Amz-Signature=caf6c24ac984af9a76279b1457b14ff01f0074c9dcae744b9ce969186902ca16&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QMA5FT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC6JNhNHAi1Lxl%2FhFzU%2Boi4Vk76CjBjMwgCEAW8dhRMNAIgcYc511JB6Ku%2B%2Fb2zRU5uKEonoHggx59dJpZLU5s%2BZcYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDD%2F0MsMe6m0auId2iSrcA60iaikoaj5q8QNTlO%2BGmg%2F4TQl1rDPYnEtJoFFaRTf8CHSEmypkkoLZhnihbEX3rh0pbk1UhTUFpw8Q2Ao1ar3g2pgcHlJ%2Fo7w9E8%2B5wPO1Iz%2BIsqlYQ0gWBhjoly5vQSWgM%2BN600qJshKEQ9oBCMw045dIotzG8%2BfC1zKpCslus03M9eYYe0AQ8hoXEXm7EtqyMGF4xmuseTVkz%2FaCxXckfATTXilg1Y25Ao5S8bM7o4yqPIZ5qiU1UjQk1vuVv2azxqa2pciHwP30PJ2gdDr2%2FL9y3VIh7YjCD2z17YJMBfICLu3X9opR44mTIk0djMElrtiarXvDf93hiE2SF4j9fP4hlEAOAiRqQjmBDXHSZcO21Kour%2Fdf%2BRWkCdKWydR8kg2ol8BRO3guz2FIfkmRMhBWXgdI6VsHrAvATp%2BquJcOw6pPIz04mbLt7gwnBTZx7kMYZtmWgm3jg0s7T1H0P5K7WGww0uu7%2FKtB9TbeSABllIyvy3fsXiiAkkJNeLJMnjh3ZU6NN019tv%2F8ncDe6yIXbhSEKERn2paZRH93ftxgDRASycwzg0zKpTILdjA%2BhewflsSgl6Pj5ZvJMbvCrzt%2BoITNyhzXZNPJ79uHNG7I7ObQNGi6paMXMLTNx8EGOqUB4mSCbdku0n04aNa%2BZatcNfOCN%2FUulBQ%2FbGW8S%2FP9EpEy39W3%2B5bjxKa99Ara%2FGbJLQlVNxpJxrzPVTcyvNBwjnzOwqzHBUBCJlOK1dS98StAsuMHVRd%2FYW0pieU8wx9JYK%2F2LhxFT57UHf%2FyO2GDhowI1yxhKJ1zZh%2BoVOlHj7LPiy0wDTgVr9XAATw3AmAe9YfdHj3JsdentfQX5DNTUwMiuH59&X-Amz-Signature=d90a7dd0f94dced960385cbabc6f6205784516cfafa2cd545e8497cc1f2ec68c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
