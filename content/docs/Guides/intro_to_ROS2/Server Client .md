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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3AJBDE7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmJqzQH74%2BYUx9%2BIIxE8oRH2LZMeEmHsCBAv0ZBEPOIQIgIdjmt696a630qF1TIkocDf%2BpZKPNTzL6wB28TIG%2B%2Fo0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJdvhg%2BvFe8xHmcOfCrcA7pfNByO7Gn%2FrQFD7QdHknctJoWESzy7i3AGK23zYkqgN6KOSdF6UMPi7hNnalzRRPGg6FO%2B1N3MhAO9h3a1HMI3lUZWBainD6FSlRmwkwMKr5Qif0rUW67o3n7Y47XF3h4gm%2Bw0xiIeB2%2FSmGnhR4rZ%2Bt83yfgXyxZRvUVWQuPqYYe4vl8yzYIlN0%2FeaAPcTI4%2FCloaYMOps8T875SpUjeTiLqanNOO1v38K1BrIVZ6AxijqTHtIgg54ia%2FotuZUuj%2FoN%2BWpThptrjNBtorza2M9VFo4W5T9B53hUOlpUG6VLQjIkhTTHGNy6oojUtzJrX6fsFNjcz8AOBn%2B26SmEoONOuWNT%2B33ixM1WNDpqR5%2FTTL6s7k0o3ttQJWiSDcsnjsh35%2FGJRF2dLKVvCPvYDqh2axvWSbJTbvstXhpvLT%2F0pupCazapxVcWFRpzRFX65mw5rNiaiN%2FVABs68%2B5q6oRiQY7yVfBx8DK8ttwvsxkfKMXzIyeelr%2Ftj8q4ZlRLuBZ8mm00kZ%2BoVILNa4c0ZEOjmxEA2f8d%2BImAx9VK231Taewv6bh2WRecm3mTcvfP6EFJ7GZHEM4X%2BxBBOs9ac6o8BhIGStewn9iIqg%2FOSm1tn06gcDJ3Dyovb2MNfuocEGOqUBzzHTxISlmjmiTR7e7jnrGqkAtMNz5MMZ90iPEjR4qhoVoG5zcMjgvRtvZfjYk5WuaLCIJcce8b0N8i9IohlPyjUeeLzlr%2Fi%2BQLPLq2YwkK1A5%2FZ%2BzIk94GnAeEe4RZxTf7YFVgay30RsUWvJm2R%2BwaQOtANVoJoWdisVxgfPSRW%2Bm4SiGbhV4bCniMdVEUyZ0VbyrsZnrxlbCKvT3%2BcLSin66tnA&X-Amz-Signature=27041e0810f2dea6f24f8601321755cf6837ec5845bf190e6f60e22f7b9c572d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3AJBDE7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmJqzQH74%2BYUx9%2BIIxE8oRH2LZMeEmHsCBAv0ZBEPOIQIgIdjmt696a630qF1TIkocDf%2BpZKPNTzL6wB28TIG%2B%2Fo0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJdvhg%2BvFe8xHmcOfCrcA7pfNByO7Gn%2FrQFD7QdHknctJoWESzy7i3AGK23zYkqgN6KOSdF6UMPi7hNnalzRRPGg6FO%2B1N3MhAO9h3a1HMI3lUZWBainD6FSlRmwkwMKr5Qif0rUW67o3n7Y47XF3h4gm%2Bw0xiIeB2%2FSmGnhR4rZ%2Bt83yfgXyxZRvUVWQuPqYYe4vl8yzYIlN0%2FeaAPcTI4%2FCloaYMOps8T875SpUjeTiLqanNOO1v38K1BrIVZ6AxijqTHtIgg54ia%2FotuZUuj%2FoN%2BWpThptrjNBtorza2M9VFo4W5T9B53hUOlpUG6VLQjIkhTTHGNy6oojUtzJrX6fsFNjcz8AOBn%2B26SmEoONOuWNT%2B33ixM1WNDpqR5%2FTTL6s7k0o3ttQJWiSDcsnjsh35%2FGJRF2dLKVvCPvYDqh2axvWSbJTbvstXhpvLT%2F0pupCazapxVcWFRpzRFX65mw5rNiaiN%2FVABs68%2B5q6oRiQY7yVfBx8DK8ttwvsxkfKMXzIyeelr%2Ftj8q4ZlRLuBZ8mm00kZ%2BoVILNa4c0ZEOjmxEA2f8d%2BImAx9VK231Taewv6bh2WRecm3mTcvfP6EFJ7GZHEM4X%2BxBBOs9ac6o8BhIGStewn9iIqg%2FOSm1tn06gcDJ3Dyovb2MNfuocEGOqUBzzHTxISlmjmiTR7e7jnrGqkAtMNz5MMZ90iPEjR4qhoVoG5zcMjgvRtvZfjYk5WuaLCIJcce8b0N8i9IohlPyjUeeLzlr%2Fi%2BQLPLq2YwkK1A5%2FZ%2BzIk94GnAeEe4RZxTf7YFVgay30RsUWvJm2R%2BwaQOtANVoJoWdisVxgfPSRW%2Bm4SiGbhV4bCniMdVEUyZ0VbyrsZnrxlbCKvT3%2BcLSin66tnA&X-Amz-Signature=51327b3685ff5cc573abf57cc6a967f636b46d1d1b807ba245946a4538627483&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3AJBDE7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmJqzQH74%2BYUx9%2BIIxE8oRH2LZMeEmHsCBAv0ZBEPOIQIgIdjmt696a630qF1TIkocDf%2BpZKPNTzL6wB28TIG%2B%2Fo0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJdvhg%2BvFe8xHmcOfCrcA7pfNByO7Gn%2FrQFD7QdHknctJoWESzy7i3AGK23zYkqgN6KOSdF6UMPi7hNnalzRRPGg6FO%2B1N3MhAO9h3a1HMI3lUZWBainD6FSlRmwkwMKr5Qif0rUW67o3n7Y47XF3h4gm%2Bw0xiIeB2%2FSmGnhR4rZ%2Bt83yfgXyxZRvUVWQuPqYYe4vl8yzYIlN0%2FeaAPcTI4%2FCloaYMOps8T875SpUjeTiLqanNOO1v38K1BrIVZ6AxijqTHtIgg54ia%2FotuZUuj%2FoN%2BWpThptrjNBtorza2M9VFo4W5T9B53hUOlpUG6VLQjIkhTTHGNy6oojUtzJrX6fsFNjcz8AOBn%2B26SmEoONOuWNT%2B33ixM1WNDpqR5%2FTTL6s7k0o3ttQJWiSDcsnjsh35%2FGJRF2dLKVvCPvYDqh2axvWSbJTbvstXhpvLT%2F0pupCazapxVcWFRpzRFX65mw5rNiaiN%2FVABs68%2B5q6oRiQY7yVfBx8DK8ttwvsxkfKMXzIyeelr%2Ftj8q4ZlRLuBZ8mm00kZ%2BoVILNa4c0ZEOjmxEA2f8d%2BImAx9VK231Taewv6bh2WRecm3mTcvfP6EFJ7GZHEM4X%2BxBBOs9ac6o8BhIGStewn9iIqg%2FOSm1tn06gcDJ3Dyovb2MNfuocEGOqUBzzHTxISlmjmiTR7e7jnrGqkAtMNz5MMZ90iPEjR4qhoVoG5zcMjgvRtvZfjYk5WuaLCIJcce8b0N8i9IohlPyjUeeLzlr%2Fi%2BQLPLq2YwkK1A5%2FZ%2BzIk94GnAeEe4RZxTf7YFVgay30RsUWvJm2R%2BwaQOtANVoJoWdisVxgfPSRW%2Bm4SiGbhV4bCniMdVEUyZ0VbyrsZnrxlbCKvT3%2BcLSin66tnA&X-Amz-Signature=75400a6a60fe6b675029f8f84e3b83dec3d4042586087881c1b55c3738eac73c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3AJBDE7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmJqzQH74%2BYUx9%2BIIxE8oRH2LZMeEmHsCBAv0ZBEPOIQIgIdjmt696a630qF1TIkocDf%2BpZKPNTzL6wB28TIG%2B%2Fo0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJdvhg%2BvFe8xHmcOfCrcA7pfNByO7Gn%2FrQFD7QdHknctJoWESzy7i3AGK23zYkqgN6KOSdF6UMPi7hNnalzRRPGg6FO%2B1N3MhAO9h3a1HMI3lUZWBainD6FSlRmwkwMKr5Qif0rUW67o3n7Y47XF3h4gm%2Bw0xiIeB2%2FSmGnhR4rZ%2Bt83yfgXyxZRvUVWQuPqYYe4vl8yzYIlN0%2FeaAPcTI4%2FCloaYMOps8T875SpUjeTiLqanNOO1v38K1BrIVZ6AxijqTHtIgg54ia%2FotuZUuj%2FoN%2BWpThptrjNBtorza2M9VFo4W5T9B53hUOlpUG6VLQjIkhTTHGNy6oojUtzJrX6fsFNjcz8AOBn%2B26SmEoONOuWNT%2B33ixM1WNDpqR5%2FTTL6s7k0o3ttQJWiSDcsnjsh35%2FGJRF2dLKVvCPvYDqh2axvWSbJTbvstXhpvLT%2F0pupCazapxVcWFRpzRFX65mw5rNiaiN%2FVABs68%2B5q6oRiQY7yVfBx8DK8ttwvsxkfKMXzIyeelr%2Ftj8q4ZlRLuBZ8mm00kZ%2BoVILNa4c0ZEOjmxEA2f8d%2BImAx9VK231Taewv6bh2WRecm3mTcvfP6EFJ7GZHEM4X%2BxBBOs9ac6o8BhIGStewn9iIqg%2FOSm1tn06gcDJ3Dyovb2MNfuocEGOqUBzzHTxISlmjmiTR7e7jnrGqkAtMNz5MMZ90iPEjR4qhoVoG5zcMjgvRtvZfjYk5WuaLCIJcce8b0N8i9IohlPyjUeeLzlr%2Fi%2BQLPLq2YwkK1A5%2FZ%2BzIk94GnAeEe4RZxTf7YFVgay30RsUWvJm2R%2BwaQOtANVoJoWdisVxgfPSRW%2Bm4SiGbhV4bCniMdVEUyZ0VbyrsZnrxlbCKvT3%2BcLSin66tnA&X-Amz-Signature=4462cecc75e6fd644ff7a59ab30bb2abca907a1bd88fd8e76be33ed8008bfbed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3AJBDE7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmJqzQH74%2BYUx9%2BIIxE8oRH2LZMeEmHsCBAv0ZBEPOIQIgIdjmt696a630qF1TIkocDf%2BpZKPNTzL6wB28TIG%2B%2Fo0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJdvhg%2BvFe8xHmcOfCrcA7pfNByO7Gn%2FrQFD7QdHknctJoWESzy7i3AGK23zYkqgN6KOSdF6UMPi7hNnalzRRPGg6FO%2B1N3MhAO9h3a1HMI3lUZWBainD6FSlRmwkwMKr5Qif0rUW67o3n7Y47XF3h4gm%2Bw0xiIeB2%2FSmGnhR4rZ%2Bt83yfgXyxZRvUVWQuPqYYe4vl8yzYIlN0%2FeaAPcTI4%2FCloaYMOps8T875SpUjeTiLqanNOO1v38K1BrIVZ6AxijqTHtIgg54ia%2FotuZUuj%2FoN%2BWpThptrjNBtorza2M9VFo4W5T9B53hUOlpUG6VLQjIkhTTHGNy6oojUtzJrX6fsFNjcz8AOBn%2B26SmEoONOuWNT%2B33ixM1WNDpqR5%2FTTL6s7k0o3ttQJWiSDcsnjsh35%2FGJRF2dLKVvCPvYDqh2axvWSbJTbvstXhpvLT%2F0pupCazapxVcWFRpzRFX65mw5rNiaiN%2FVABs68%2B5q6oRiQY7yVfBx8DK8ttwvsxkfKMXzIyeelr%2Ftj8q4ZlRLuBZ8mm00kZ%2BoVILNa4c0ZEOjmxEA2f8d%2BImAx9VK231Taewv6bh2WRecm3mTcvfP6EFJ7GZHEM4X%2BxBBOs9ac6o8BhIGStewn9iIqg%2FOSm1tn06gcDJ3Dyovb2MNfuocEGOqUBzzHTxISlmjmiTR7e7jnrGqkAtMNz5MMZ90iPEjR4qhoVoG5zcMjgvRtvZfjYk5WuaLCIJcce8b0N8i9IohlPyjUeeLzlr%2Fi%2BQLPLq2YwkK1A5%2FZ%2BzIk94GnAeEe4RZxTf7YFVgay30RsUWvJm2R%2BwaQOtANVoJoWdisVxgfPSRW%2Bm4SiGbhV4bCniMdVEUyZ0VbyrsZnrxlbCKvT3%2BcLSin66tnA&X-Amz-Signature=e938fd13ba769d46051581b0f2bc3d542131e5540d41ffc019d279959d7d15c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
