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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPQSZIRR%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIC40Xn8Itw7Y7BF9eLEiY8y7t3MO%2BZM%2BNSb1czjyZ1TrAiEA6bRS11ipcsM%2B2UTv7MudVWsgC5d39Jh5iO3P3KypdpoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFKOOqeHN58ZvJvSircA%2BcCP4u7qg40eAdg64QtzZKp44DsOzGJt1QGcoSy6GVC%2FLRCGWNFaQPApBpudpklyIb2DfWx7gHXBcWRQCEvITZeww1nyLSRrpKM%2Bs6THjwJnquLTGE1cQ2PQt5uy4WdpFDVoQJP1tuewX9Z10YmfMvI%2FQxvfF%2BnZztPwjyRSTBtCQ1Bls29cLqRIfgRRSnKcw2%2Fj1Sy5eOxIyIZFFiOneCKvSxc2pfb6coyONP5X2dVrNe9utZ3bcqllv8%2F08Qr9qdGHVRdXx3koS2Il8M%2Bl6VJKpIQ47s3qlegHCNUzlUL493ArdGR7L%2FfLBiA6bTKKrrjPwp2cgduM7BY75%2F2ldKuUEDxebtNDjTcUTArjp9AqNJ0vUrD1f51VZb%2F18Y8cYpvjjAbnev16jUmLQTZAIWHE9epmB4vnPlHg92HuBPErCfEBIb7%2BICYU%2BIr7HyOOLJd128rE26yVYNYcM%2BRoGgFu1TobfbTuULkDgP8Taz5yj%2FvmAYmkKEeWaYYZDNsGv2TeFA%2F1vH46Jzfvv7awvNa89N6J8VAVuvV7gO6DxlqxTI8HZd%2FxHG59ugBqUF77hKbJtbvToRByOlEq9FITn2Lcr4BS3VvYAg97b1aTF7oWRL0%2BXoWUi%2BtMz5dMNOrxcEGOqUBjokAAWPLUW2pMipa6VNnkj%2FigSnrdPZUYKhCmZi553fXWLYG7D3c5I1SagzlwN8rYVxZsfawQVlQrrKVs%2Fk%2FEv0KqSjrxMP54mhGAH6sLibx2cqniE0yGuCf4kg6IB8HTR2WZnuZeuBrRv%2FQrs2dI8ERjgRZPj7RWpp4BWAKc5y7AAwuIK9mColCbmFyrU4dE2BeNEZHzQHW3cglpUJwhZXQom%2B%2F&X-Amz-Signature=82e783ef3685930f1f1c8ce53b38bc967ceac4cf8e4d94ad7992d16f0610899f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPQSZIRR%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIC40Xn8Itw7Y7BF9eLEiY8y7t3MO%2BZM%2BNSb1czjyZ1TrAiEA6bRS11ipcsM%2B2UTv7MudVWsgC5d39Jh5iO3P3KypdpoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFKOOqeHN58ZvJvSircA%2BcCP4u7qg40eAdg64QtzZKp44DsOzGJt1QGcoSy6GVC%2FLRCGWNFaQPApBpudpklyIb2DfWx7gHXBcWRQCEvITZeww1nyLSRrpKM%2Bs6THjwJnquLTGE1cQ2PQt5uy4WdpFDVoQJP1tuewX9Z10YmfMvI%2FQxvfF%2BnZztPwjyRSTBtCQ1Bls29cLqRIfgRRSnKcw2%2Fj1Sy5eOxIyIZFFiOneCKvSxc2pfb6coyONP5X2dVrNe9utZ3bcqllv8%2F08Qr9qdGHVRdXx3koS2Il8M%2Bl6VJKpIQ47s3qlegHCNUzlUL493ArdGR7L%2FfLBiA6bTKKrrjPwp2cgduM7BY75%2F2ldKuUEDxebtNDjTcUTArjp9AqNJ0vUrD1f51VZb%2F18Y8cYpvjjAbnev16jUmLQTZAIWHE9epmB4vnPlHg92HuBPErCfEBIb7%2BICYU%2BIr7HyOOLJd128rE26yVYNYcM%2BRoGgFu1TobfbTuULkDgP8Taz5yj%2FvmAYmkKEeWaYYZDNsGv2TeFA%2F1vH46Jzfvv7awvNa89N6J8VAVuvV7gO6DxlqxTI8HZd%2FxHG59ugBqUF77hKbJtbvToRByOlEq9FITn2Lcr4BS3VvYAg97b1aTF7oWRL0%2BXoWUi%2BtMz5dMNOrxcEGOqUBjokAAWPLUW2pMipa6VNnkj%2FigSnrdPZUYKhCmZi553fXWLYG7D3c5I1SagzlwN8rYVxZsfawQVlQrrKVs%2Fk%2FEv0KqSjrxMP54mhGAH6sLibx2cqniE0yGuCf4kg6IB8HTR2WZnuZeuBrRv%2FQrs2dI8ERjgRZPj7RWpp4BWAKc5y7AAwuIK9mColCbmFyrU4dE2BeNEZHzQHW3cglpUJwhZXQom%2B%2F&X-Amz-Signature=acb1fdd5322e1e7d69dee6f1af6a626d3b6c391451c80c4ea77d346e2d58b75c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPQSZIRR%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIC40Xn8Itw7Y7BF9eLEiY8y7t3MO%2BZM%2BNSb1czjyZ1TrAiEA6bRS11ipcsM%2B2UTv7MudVWsgC5d39Jh5iO3P3KypdpoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFKOOqeHN58ZvJvSircA%2BcCP4u7qg40eAdg64QtzZKp44DsOzGJt1QGcoSy6GVC%2FLRCGWNFaQPApBpudpklyIb2DfWx7gHXBcWRQCEvITZeww1nyLSRrpKM%2Bs6THjwJnquLTGE1cQ2PQt5uy4WdpFDVoQJP1tuewX9Z10YmfMvI%2FQxvfF%2BnZztPwjyRSTBtCQ1Bls29cLqRIfgRRSnKcw2%2Fj1Sy5eOxIyIZFFiOneCKvSxc2pfb6coyONP5X2dVrNe9utZ3bcqllv8%2F08Qr9qdGHVRdXx3koS2Il8M%2Bl6VJKpIQ47s3qlegHCNUzlUL493ArdGR7L%2FfLBiA6bTKKrrjPwp2cgduM7BY75%2F2ldKuUEDxebtNDjTcUTArjp9AqNJ0vUrD1f51VZb%2F18Y8cYpvjjAbnev16jUmLQTZAIWHE9epmB4vnPlHg92HuBPErCfEBIb7%2BICYU%2BIr7HyOOLJd128rE26yVYNYcM%2BRoGgFu1TobfbTuULkDgP8Taz5yj%2FvmAYmkKEeWaYYZDNsGv2TeFA%2F1vH46Jzfvv7awvNa89N6J8VAVuvV7gO6DxlqxTI8HZd%2FxHG59ugBqUF77hKbJtbvToRByOlEq9FITn2Lcr4BS3VvYAg97b1aTF7oWRL0%2BXoWUi%2BtMz5dMNOrxcEGOqUBjokAAWPLUW2pMipa6VNnkj%2FigSnrdPZUYKhCmZi553fXWLYG7D3c5I1SagzlwN8rYVxZsfawQVlQrrKVs%2Fk%2FEv0KqSjrxMP54mhGAH6sLibx2cqniE0yGuCf4kg6IB8HTR2WZnuZeuBrRv%2FQrs2dI8ERjgRZPj7RWpp4BWAKc5y7AAwuIK9mColCbmFyrU4dE2BeNEZHzQHW3cglpUJwhZXQom%2B%2F&X-Amz-Signature=a51bd1dfe161aa29a4e1e66688257643527f735ba10628b4f554c43826c7b33e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPQSZIRR%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIC40Xn8Itw7Y7BF9eLEiY8y7t3MO%2BZM%2BNSb1czjyZ1TrAiEA6bRS11ipcsM%2B2UTv7MudVWsgC5d39Jh5iO3P3KypdpoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFKOOqeHN58ZvJvSircA%2BcCP4u7qg40eAdg64QtzZKp44DsOzGJt1QGcoSy6GVC%2FLRCGWNFaQPApBpudpklyIb2DfWx7gHXBcWRQCEvITZeww1nyLSRrpKM%2Bs6THjwJnquLTGE1cQ2PQt5uy4WdpFDVoQJP1tuewX9Z10YmfMvI%2FQxvfF%2BnZztPwjyRSTBtCQ1Bls29cLqRIfgRRSnKcw2%2Fj1Sy5eOxIyIZFFiOneCKvSxc2pfb6coyONP5X2dVrNe9utZ3bcqllv8%2F08Qr9qdGHVRdXx3koS2Il8M%2Bl6VJKpIQ47s3qlegHCNUzlUL493ArdGR7L%2FfLBiA6bTKKrrjPwp2cgduM7BY75%2F2ldKuUEDxebtNDjTcUTArjp9AqNJ0vUrD1f51VZb%2F18Y8cYpvjjAbnev16jUmLQTZAIWHE9epmB4vnPlHg92HuBPErCfEBIb7%2BICYU%2BIr7HyOOLJd128rE26yVYNYcM%2BRoGgFu1TobfbTuULkDgP8Taz5yj%2FvmAYmkKEeWaYYZDNsGv2TeFA%2F1vH46Jzfvv7awvNa89N6J8VAVuvV7gO6DxlqxTI8HZd%2FxHG59ugBqUF77hKbJtbvToRByOlEq9FITn2Lcr4BS3VvYAg97b1aTF7oWRL0%2BXoWUi%2BtMz5dMNOrxcEGOqUBjokAAWPLUW2pMipa6VNnkj%2FigSnrdPZUYKhCmZi553fXWLYG7D3c5I1SagzlwN8rYVxZsfawQVlQrrKVs%2Fk%2FEv0KqSjrxMP54mhGAH6sLibx2cqniE0yGuCf4kg6IB8HTR2WZnuZeuBrRv%2FQrs2dI8ERjgRZPj7RWpp4BWAKc5y7AAwuIK9mColCbmFyrU4dE2BeNEZHzQHW3cglpUJwhZXQom%2B%2F&X-Amz-Signature=ae6eae66dcc1a9b71606be3cb9dcfa579ffe25dabde4bb5b440a28006c8b856c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPQSZIRR%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIC40Xn8Itw7Y7BF9eLEiY8y7t3MO%2BZM%2BNSb1czjyZ1TrAiEA6bRS11ipcsM%2B2UTv7MudVWsgC5d39Jh5iO3P3KypdpoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFKOOqeHN58ZvJvSircA%2BcCP4u7qg40eAdg64QtzZKp44DsOzGJt1QGcoSy6GVC%2FLRCGWNFaQPApBpudpklyIb2DfWx7gHXBcWRQCEvITZeww1nyLSRrpKM%2Bs6THjwJnquLTGE1cQ2PQt5uy4WdpFDVoQJP1tuewX9Z10YmfMvI%2FQxvfF%2BnZztPwjyRSTBtCQ1Bls29cLqRIfgRRSnKcw2%2Fj1Sy5eOxIyIZFFiOneCKvSxc2pfb6coyONP5X2dVrNe9utZ3bcqllv8%2F08Qr9qdGHVRdXx3koS2Il8M%2Bl6VJKpIQ47s3qlegHCNUzlUL493ArdGR7L%2FfLBiA6bTKKrrjPwp2cgduM7BY75%2F2ldKuUEDxebtNDjTcUTArjp9AqNJ0vUrD1f51VZb%2F18Y8cYpvjjAbnev16jUmLQTZAIWHE9epmB4vnPlHg92HuBPErCfEBIb7%2BICYU%2BIr7HyOOLJd128rE26yVYNYcM%2BRoGgFu1TobfbTuULkDgP8Taz5yj%2FvmAYmkKEeWaYYZDNsGv2TeFA%2F1vH46Jzfvv7awvNa89N6J8VAVuvV7gO6DxlqxTI8HZd%2FxHG59ugBqUF77hKbJtbvToRByOlEq9FITn2Lcr4BS3VvYAg97b1aTF7oWRL0%2BXoWUi%2BtMz5dMNOrxcEGOqUBjokAAWPLUW2pMipa6VNnkj%2FigSnrdPZUYKhCmZi553fXWLYG7D3c5I1SagzlwN8rYVxZsfawQVlQrrKVs%2Fk%2FEv0KqSjrxMP54mhGAH6sLibx2cqniE0yGuCf4kg6IB8HTR2WZnuZeuBrRv%2FQrs2dI8ERjgRZPj7RWpp4BWAKc5y7AAwuIK9mColCbmFyrU4dE2BeNEZHzQHW3cglpUJwhZXQom%2B%2F&X-Amz-Signature=58c1a3218d23c032029e7ecd2e2d71a4433d23fe85ee123f5bec8d52ceb0a776&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
