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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW3PHTBQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD5e8DcGEDG%2BkZ9fzEPShM%2FUuWEFdfIr%2FDw7%2Fbptg4SQwIhAP%2FDD1lO6Jci%2F92vYultDvjE4rTKOOaPJLk1xVsljNzZKv8DCEoQABoMNjM3NDIzMTgzODA1Igz8zvis0sLpQxOqDDsq3ANcfmuSLYNUWYghO%2BgSFhE55zdFcW4jcO4xoUqrDCM7DamOf4WCvYSxIukLiLPxRk2uEbQj6WQ99BU3V59iUVm8MJ1PSxV53mudKHLhZnWTndQkg728ncoOdMmnWkZdxhYveE0rjIFoIjhg4XBMO%2BJt%2BdBoSu050DZFopeM%2B3JItNcNOYj13pcDFYHkSHRJtUzy%2FZZywkmKHypZ5P%2BoN6lC6MgbSG6hF1bScYlJvlfw8D%2BNEiqput0ch1IYZbAXvincwcpZF8AcPvAwrYznOC70XX%2FyNkskC%2BqSDQwE9Pwv3lqj3IUjaMYDbUX%2F80nJA0I0z00iJWrMitQKZ4bnm5CV7GBYaoyyUQGdC3IXkMFHiEZo5hzHu6ZwoQpf0O9aPYO2QXo5Mo3%2FctVJlx3aPUMJjH8bvnwjIA0ioazM6NF8%2F%2FssHxB0UIN%2BYAnXhNpIUQKroN5hQjkTUZvco8zVJ6WfCsok7Xows2%2BR5RGdsXLO24zWtoXhs8ntlVo3cWAzToNEvQqtZ8I56he%2F4beaWC75uluqNnzIBvfOmBOt76TWMmRN8jtPJb7piakC%2B9o8XR9pSGY29PEA2wviNPLThwEvAuBm%2B05lBqPqPeRMSj9rQRPbHJYbCtvf2qu9AzDGu469BjqkAXOSuT%2FJLhzolxC3xAvGGXYXzkUIm02K%2BwX%2FFQlZdn5m7aCEMQgFxzK08RrZ8g17iV%2FXCOOqkbAI2zYkHqfTEsOIxgX73xP46SuPZHRoctDz0ISpICp%2FpQWuUEpyT%2BJrkvTPTybZz7o%2FMM0FXXxpPo6NR%2F3MZdhdJtK3PFzlgZ54n3Pr%2B221PJyDKWEfBo7CBZquUuMXNsKQiAEWFEh6DpllXDMo&X-Amz-Signature=5036e6754e0560cfeeab14026937fefab3b2cdcc80af8b074f1878c5a9c0f144&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW3PHTBQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD5e8DcGEDG%2BkZ9fzEPShM%2FUuWEFdfIr%2FDw7%2Fbptg4SQwIhAP%2FDD1lO6Jci%2F92vYultDvjE4rTKOOaPJLk1xVsljNzZKv8DCEoQABoMNjM3NDIzMTgzODA1Igz8zvis0sLpQxOqDDsq3ANcfmuSLYNUWYghO%2BgSFhE55zdFcW4jcO4xoUqrDCM7DamOf4WCvYSxIukLiLPxRk2uEbQj6WQ99BU3V59iUVm8MJ1PSxV53mudKHLhZnWTndQkg728ncoOdMmnWkZdxhYveE0rjIFoIjhg4XBMO%2BJt%2BdBoSu050DZFopeM%2B3JItNcNOYj13pcDFYHkSHRJtUzy%2FZZywkmKHypZ5P%2BoN6lC6MgbSG6hF1bScYlJvlfw8D%2BNEiqput0ch1IYZbAXvincwcpZF8AcPvAwrYznOC70XX%2FyNkskC%2BqSDQwE9Pwv3lqj3IUjaMYDbUX%2F80nJA0I0z00iJWrMitQKZ4bnm5CV7GBYaoyyUQGdC3IXkMFHiEZo5hzHu6ZwoQpf0O9aPYO2QXo5Mo3%2FctVJlx3aPUMJjH8bvnwjIA0ioazM6NF8%2F%2FssHxB0UIN%2BYAnXhNpIUQKroN5hQjkTUZvco8zVJ6WfCsok7Xows2%2BR5RGdsXLO24zWtoXhs8ntlVo3cWAzToNEvQqtZ8I56he%2F4beaWC75uluqNnzIBvfOmBOt76TWMmRN8jtPJb7piakC%2B9o8XR9pSGY29PEA2wviNPLThwEvAuBm%2B05lBqPqPeRMSj9rQRPbHJYbCtvf2qu9AzDGu469BjqkAXOSuT%2FJLhzolxC3xAvGGXYXzkUIm02K%2BwX%2FFQlZdn5m7aCEMQgFxzK08RrZ8g17iV%2FXCOOqkbAI2zYkHqfTEsOIxgX73xP46SuPZHRoctDz0ISpICp%2FpQWuUEpyT%2BJrkvTPTybZz7o%2FMM0FXXxpPo6NR%2F3MZdhdJtK3PFzlgZ54n3Pr%2B221PJyDKWEfBo7CBZquUuMXNsKQiAEWFEh6DpllXDMo&X-Amz-Signature=10ae1e7344226edbf2cb76957510b91b5add45f3bb9e18f8002bb1dce50470c1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW3PHTBQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD5e8DcGEDG%2BkZ9fzEPShM%2FUuWEFdfIr%2FDw7%2Fbptg4SQwIhAP%2FDD1lO6Jci%2F92vYultDvjE4rTKOOaPJLk1xVsljNzZKv8DCEoQABoMNjM3NDIzMTgzODA1Igz8zvis0sLpQxOqDDsq3ANcfmuSLYNUWYghO%2BgSFhE55zdFcW4jcO4xoUqrDCM7DamOf4WCvYSxIukLiLPxRk2uEbQj6WQ99BU3V59iUVm8MJ1PSxV53mudKHLhZnWTndQkg728ncoOdMmnWkZdxhYveE0rjIFoIjhg4XBMO%2BJt%2BdBoSu050DZFopeM%2B3JItNcNOYj13pcDFYHkSHRJtUzy%2FZZywkmKHypZ5P%2BoN6lC6MgbSG6hF1bScYlJvlfw8D%2BNEiqput0ch1IYZbAXvincwcpZF8AcPvAwrYznOC70XX%2FyNkskC%2BqSDQwE9Pwv3lqj3IUjaMYDbUX%2F80nJA0I0z00iJWrMitQKZ4bnm5CV7GBYaoyyUQGdC3IXkMFHiEZo5hzHu6ZwoQpf0O9aPYO2QXo5Mo3%2FctVJlx3aPUMJjH8bvnwjIA0ioazM6NF8%2F%2FssHxB0UIN%2BYAnXhNpIUQKroN5hQjkTUZvco8zVJ6WfCsok7Xows2%2BR5RGdsXLO24zWtoXhs8ntlVo3cWAzToNEvQqtZ8I56he%2F4beaWC75uluqNnzIBvfOmBOt76TWMmRN8jtPJb7piakC%2B9o8XR9pSGY29PEA2wviNPLThwEvAuBm%2B05lBqPqPeRMSj9rQRPbHJYbCtvf2qu9AzDGu469BjqkAXOSuT%2FJLhzolxC3xAvGGXYXzkUIm02K%2BwX%2FFQlZdn5m7aCEMQgFxzK08RrZ8g17iV%2FXCOOqkbAI2zYkHqfTEsOIxgX73xP46SuPZHRoctDz0ISpICp%2FpQWuUEpyT%2BJrkvTPTybZz7o%2FMM0FXXxpPo6NR%2F3MZdhdJtK3PFzlgZ54n3Pr%2B221PJyDKWEfBo7CBZquUuMXNsKQiAEWFEh6DpllXDMo&X-Amz-Signature=eed9c594c40580be6f4026e1dc1d41ae73511c59a53a9ef06416fbc48e30bb51&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW3PHTBQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD5e8DcGEDG%2BkZ9fzEPShM%2FUuWEFdfIr%2FDw7%2Fbptg4SQwIhAP%2FDD1lO6Jci%2F92vYultDvjE4rTKOOaPJLk1xVsljNzZKv8DCEoQABoMNjM3NDIzMTgzODA1Igz8zvis0sLpQxOqDDsq3ANcfmuSLYNUWYghO%2BgSFhE55zdFcW4jcO4xoUqrDCM7DamOf4WCvYSxIukLiLPxRk2uEbQj6WQ99BU3V59iUVm8MJ1PSxV53mudKHLhZnWTndQkg728ncoOdMmnWkZdxhYveE0rjIFoIjhg4XBMO%2BJt%2BdBoSu050DZFopeM%2B3JItNcNOYj13pcDFYHkSHRJtUzy%2FZZywkmKHypZ5P%2BoN6lC6MgbSG6hF1bScYlJvlfw8D%2BNEiqput0ch1IYZbAXvincwcpZF8AcPvAwrYznOC70XX%2FyNkskC%2BqSDQwE9Pwv3lqj3IUjaMYDbUX%2F80nJA0I0z00iJWrMitQKZ4bnm5CV7GBYaoyyUQGdC3IXkMFHiEZo5hzHu6ZwoQpf0O9aPYO2QXo5Mo3%2FctVJlx3aPUMJjH8bvnwjIA0ioazM6NF8%2F%2FssHxB0UIN%2BYAnXhNpIUQKroN5hQjkTUZvco8zVJ6WfCsok7Xows2%2BR5RGdsXLO24zWtoXhs8ntlVo3cWAzToNEvQqtZ8I56he%2F4beaWC75uluqNnzIBvfOmBOt76TWMmRN8jtPJb7piakC%2B9o8XR9pSGY29PEA2wviNPLThwEvAuBm%2B05lBqPqPeRMSj9rQRPbHJYbCtvf2qu9AzDGu469BjqkAXOSuT%2FJLhzolxC3xAvGGXYXzkUIm02K%2BwX%2FFQlZdn5m7aCEMQgFxzK08RrZ8g17iV%2FXCOOqkbAI2zYkHqfTEsOIxgX73xP46SuPZHRoctDz0ISpICp%2FpQWuUEpyT%2BJrkvTPTybZz7o%2FMM0FXXxpPo6NR%2F3MZdhdJtK3PFzlgZ54n3Pr%2B221PJyDKWEfBo7CBZquUuMXNsKQiAEWFEh6DpllXDMo&X-Amz-Signature=14fe1ebe908b3858b055d190cf2c6c4f91bff7ffa0faeed976e01f40168dfc29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW3PHTBQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD5e8DcGEDG%2BkZ9fzEPShM%2FUuWEFdfIr%2FDw7%2Fbptg4SQwIhAP%2FDD1lO6Jci%2F92vYultDvjE4rTKOOaPJLk1xVsljNzZKv8DCEoQABoMNjM3NDIzMTgzODA1Igz8zvis0sLpQxOqDDsq3ANcfmuSLYNUWYghO%2BgSFhE55zdFcW4jcO4xoUqrDCM7DamOf4WCvYSxIukLiLPxRk2uEbQj6WQ99BU3V59iUVm8MJ1PSxV53mudKHLhZnWTndQkg728ncoOdMmnWkZdxhYveE0rjIFoIjhg4XBMO%2BJt%2BdBoSu050DZFopeM%2B3JItNcNOYj13pcDFYHkSHRJtUzy%2FZZywkmKHypZ5P%2BoN6lC6MgbSG6hF1bScYlJvlfw8D%2BNEiqput0ch1IYZbAXvincwcpZF8AcPvAwrYznOC70XX%2FyNkskC%2BqSDQwE9Pwv3lqj3IUjaMYDbUX%2F80nJA0I0z00iJWrMitQKZ4bnm5CV7GBYaoyyUQGdC3IXkMFHiEZo5hzHu6ZwoQpf0O9aPYO2QXo5Mo3%2FctVJlx3aPUMJjH8bvnwjIA0ioazM6NF8%2F%2FssHxB0UIN%2BYAnXhNpIUQKroN5hQjkTUZvco8zVJ6WfCsok7Xows2%2BR5RGdsXLO24zWtoXhs8ntlVo3cWAzToNEvQqtZ8I56he%2F4beaWC75uluqNnzIBvfOmBOt76TWMmRN8jtPJb7piakC%2B9o8XR9pSGY29PEA2wviNPLThwEvAuBm%2B05lBqPqPeRMSj9rQRPbHJYbCtvf2qu9AzDGu469BjqkAXOSuT%2FJLhzolxC3xAvGGXYXzkUIm02K%2BwX%2FFQlZdn5m7aCEMQgFxzK08RrZ8g17iV%2FXCOOqkbAI2zYkHqfTEsOIxgX73xP46SuPZHRoctDz0ISpICp%2FpQWuUEpyT%2BJrkvTPTybZz7o%2FMM0FXXxpPo6NR%2F3MZdhdJtK3PFzlgZ54n3Pr%2B221PJyDKWEfBo7CBZquUuMXNsKQiAEWFEh6DpllXDMo&X-Amz-Signature=7f67ebdc965a4ebfe7959a6d19f1362ec82a6fed63abb5369f6bcd2666f8c35e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
