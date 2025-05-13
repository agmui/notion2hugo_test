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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E5ETUYB%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICSQvEwGF5qkqpqtZ7INRwyWBR5XmvjcaGOH2FB6BqovAiByALKVBGfdgyEgfN4SZsAGpOQR9UuHJ1BJI8VvSx7wdiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwFmySStx4wYEhhLlKtwDbcJdlMC4674cloCRgRR0JtEip5mVa0ZM9FRoKbfpFDbydAzH5owgyXyD0oF4FpqSQgPowLJrO0G6JLue%2BIxtiyAYKMgUYwXe8It3CY2Ql%2FsWNRNc%2BfPeFFzSmLqegZmRwwW7HCsqrUT90oRYBV65g8%2FzO%2Fr%2F8pGY3HMz7CNenNXG%2BftUnK1hJPJQuIUfTUgyWk3WFpn0zDTdn5tkYIprMAU1WkGX6RxYJXB245s7VJ7JFnH5jtIQUgdl2%2BTtHyaQ8320GNZSv%2BKUaz%2FOxJLB24Ns2SXW3e2Azp%2FgegSeBWARWb3OLnHDC2D2%2B3lp4WjcucwKcUvXF2f5m1fJbqjmzCDSIBs%2FBSc46%2BxaiCrAcK7CmYq3hq3s1PSgA1IqrLJHkU84%2F8WI6rbea2btgZBawffg1QBucuk9AM%2BxqmrYaA6%2FnVyUMGlteJpmWDyUdJcNc1tdtjcIShujs7XIHA1lOEnKbWlbSV9LxHFJrGNrfsDAn7IhMLn%2BKz9Q5UmtxVeY46IgpEJftrRyM6rEMp83DI6AfFHNcwAyzbEF1%2B7f%2Bq0awk3oVj2NE4FMt%2BArJEsLlkfc2F4pSLRwCzQDWdRWD8DCAxsYdy7vDDe5yCFstllpFOx1nIqVXc3jj%2FAwwsaOwQY6pgHA%2FVAvGbnKVCbqBZr9KtVtiqxvN92JtZvF87q%2FlUmcQA3lBGDT2c1x%2FY2W%2FL%2B26bRGo9821tlR%2BXEqcHLPDuV0kszGuAElNaMRhLf9VrX6mjafPKDW3tj9fGjJxQAF5Pse%2Be2JPETrZVdVUSYzoG6XB9loi3%2BSSf9PtI%2FP206EEwZxC2s40MeauVi8zPEevoSLyshneq10HfDEV5osviK0tQU3ZPYs&X-Amz-Signature=8b5f59bfe0081487876d15e663323b4613ae55c6f7e461de9747f4cf6ce34944&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E5ETUYB%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICSQvEwGF5qkqpqtZ7INRwyWBR5XmvjcaGOH2FB6BqovAiByALKVBGfdgyEgfN4SZsAGpOQR9UuHJ1BJI8VvSx7wdiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwFmySStx4wYEhhLlKtwDbcJdlMC4674cloCRgRR0JtEip5mVa0ZM9FRoKbfpFDbydAzH5owgyXyD0oF4FpqSQgPowLJrO0G6JLue%2BIxtiyAYKMgUYwXe8It3CY2Ql%2FsWNRNc%2BfPeFFzSmLqegZmRwwW7HCsqrUT90oRYBV65g8%2FzO%2Fr%2F8pGY3HMz7CNenNXG%2BftUnK1hJPJQuIUfTUgyWk3WFpn0zDTdn5tkYIprMAU1WkGX6RxYJXB245s7VJ7JFnH5jtIQUgdl2%2BTtHyaQ8320GNZSv%2BKUaz%2FOxJLB24Ns2SXW3e2Azp%2FgegSeBWARWb3OLnHDC2D2%2B3lp4WjcucwKcUvXF2f5m1fJbqjmzCDSIBs%2FBSc46%2BxaiCrAcK7CmYq3hq3s1PSgA1IqrLJHkU84%2F8WI6rbea2btgZBawffg1QBucuk9AM%2BxqmrYaA6%2FnVyUMGlteJpmWDyUdJcNc1tdtjcIShujs7XIHA1lOEnKbWlbSV9LxHFJrGNrfsDAn7IhMLn%2BKz9Q5UmtxVeY46IgpEJftrRyM6rEMp83DI6AfFHNcwAyzbEF1%2B7f%2Bq0awk3oVj2NE4FMt%2BArJEsLlkfc2F4pSLRwCzQDWdRWD8DCAxsYdy7vDDe5yCFstllpFOx1nIqVXc3jj%2FAwwsaOwQY6pgHA%2FVAvGbnKVCbqBZr9KtVtiqxvN92JtZvF87q%2FlUmcQA3lBGDT2c1x%2FY2W%2FL%2B26bRGo9821tlR%2BXEqcHLPDuV0kszGuAElNaMRhLf9VrX6mjafPKDW3tj9fGjJxQAF5Pse%2Be2JPETrZVdVUSYzoG6XB9loi3%2BSSf9PtI%2FP206EEwZxC2s40MeauVi8zPEevoSLyshneq10HfDEV5osviK0tQU3ZPYs&X-Amz-Signature=df2344e88a22f9b9ad93da33f607bf02cd4f79689acb731ef095825c8601888b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E5ETUYB%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICSQvEwGF5qkqpqtZ7INRwyWBR5XmvjcaGOH2FB6BqovAiByALKVBGfdgyEgfN4SZsAGpOQR9UuHJ1BJI8VvSx7wdiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwFmySStx4wYEhhLlKtwDbcJdlMC4674cloCRgRR0JtEip5mVa0ZM9FRoKbfpFDbydAzH5owgyXyD0oF4FpqSQgPowLJrO0G6JLue%2BIxtiyAYKMgUYwXe8It3CY2Ql%2FsWNRNc%2BfPeFFzSmLqegZmRwwW7HCsqrUT90oRYBV65g8%2FzO%2Fr%2F8pGY3HMz7CNenNXG%2BftUnK1hJPJQuIUfTUgyWk3WFpn0zDTdn5tkYIprMAU1WkGX6RxYJXB245s7VJ7JFnH5jtIQUgdl2%2BTtHyaQ8320GNZSv%2BKUaz%2FOxJLB24Ns2SXW3e2Azp%2FgegSeBWARWb3OLnHDC2D2%2B3lp4WjcucwKcUvXF2f5m1fJbqjmzCDSIBs%2FBSc46%2BxaiCrAcK7CmYq3hq3s1PSgA1IqrLJHkU84%2F8WI6rbea2btgZBawffg1QBucuk9AM%2BxqmrYaA6%2FnVyUMGlteJpmWDyUdJcNc1tdtjcIShujs7XIHA1lOEnKbWlbSV9LxHFJrGNrfsDAn7IhMLn%2BKz9Q5UmtxVeY46IgpEJftrRyM6rEMp83DI6AfFHNcwAyzbEF1%2B7f%2Bq0awk3oVj2NE4FMt%2BArJEsLlkfc2F4pSLRwCzQDWdRWD8DCAxsYdy7vDDe5yCFstllpFOx1nIqVXc3jj%2FAwwsaOwQY6pgHA%2FVAvGbnKVCbqBZr9KtVtiqxvN92JtZvF87q%2FlUmcQA3lBGDT2c1x%2FY2W%2FL%2B26bRGo9821tlR%2BXEqcHLPDuV0kszGuAElNaMRhLf9VrX6mjafPKDW3tj9fGjJxQAF5Pse%2Be2JPETrZVdVUSYzoG6XB9loi3%2BSSf9PtI%2FP206EEwZxC2s40MeauVi8zPEevoSLyshneq10HfDEV5osviK0tQU3ZPYs&X-Amz-Signature=2ddb1a7bacd977db8eb994531f22fbdb8ecf63e51676f715f555118b043cdb9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E5ETUYB%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICSQvEwGF5qkqpqtZ7INRwyWBR5XmvjcaGOH2FB6BqovAiByALKVBGfdgyEgfN4SZsAGpOQR9UuHJ1BJI8VvSx7wdiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwFmySStx4wYEhhLlKtwDbcJdlMC4674cloCRgRR0JtEip5mVa0ZM9FRoKbfpFDbydAzH5owgyXyD0oF4FpqSQgPowLJrO0G6JLue%2BIxtiyAYKMgUYwXe8It3CY2Ql%2FsWNRNc%2BfPeFFzSmLqegZmRwwW7HCsqrUT90oRYBV65g8%2FzO%2Fr%2F8pGY3HMz7CNenNXG%2BftUnK1hJPJQuIUfTUgyWk3WFpn0zDTdn5tkYIprMAU1WkGX6RxYJXB245s7VJ7JFnH5jtIQUgdl2%2BTtHyaQ8320GNZSv%2BKUaz%2FOxJLB24Ns2SXW3e2Azp%2FgegSeBWARWb3OLnHDC2D2%2B3lp4WjcucwKcUvXF2f5m1fJbqjmzCDSIBs%2FBSc46%2BxaiCrAcK7CmYq3hq3s1PSgA1IqrLJHkU84%2F8WI6rbea2btgZBawffg1QBucuk9AM%2BxqmrYaA6%2FnVyUMGlteJpmWDyUdJcNc1tdtjcIShujs7XIHA1lOEnKbWlbSV9LxHFJrGNrfsDAn7IhMLn%2BKz9Q5UmtxVeY46IgpEJftrRyM6rEMp83DI6AfFHNcwAyzbEF1%2B7f%2Bq0awk3oVj2NE4FMt%2BArJEsLlkfc2F4pSLRwCzQDWdRWD8DCAxsYdy7vDDe5yCFstllpFOx1nIqVXc3jj%2FAwwsaOwQY6pgHA%2FVAvGbnKVCbqBZr9KtVtiqxvN92JtZvF87q%2FlUmcQA3lBGDT2c1x%2FY2W%2FL%2B26bRGo9821tlR%2BXEqcHLPDuV0kszGuAElNaMRhLf9VrX6mjafPKDW3tj9fGjJxQAF5Pse%2Be2JPETrZVdVUSYzoG6XB9loi3%2BSSf9PtI%2FP206EEwZxC2s40MeauVi8zPEevoSLyshneq10HfDEV5osviK0tQU3ZPYs&X-Amz-Signature=cad259e3f76418bb49b242aa3e9d006346cd07f354769fe4a7cb826f04b6c569&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E5ETUYB%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICSQvEwGF5qkqpqtZ7INRwyWBR5XmvjcaGOH2FB6BqovAiByALKVBGfdgyEgfN4SZsAGpOQR9UuHJ1BJI8VvSx7wdiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwFmySStx4wYEhhLlKtwDbcJdlMC4674cloCRgRR0JtEip5mVa0ZM9FRoKbfpFDbydAzH5owgyXyD0oF4FpqSQgPowLJrO0G6JLue%2BIxtiyAYKMgUYwXe8It3CY2Ql%2FsWNRNc%2BfPeFFzSmLqegZmRwwW7HCsqrUT90oRYBV65g8%2FzO%2Fr%2F8pGY3HMz7CNenNXG%2BftUnK1hJPJQuIUfTUgyWk3WFpn0zDTdn5tkYIprMAU1WkGX6RxYJXB245s7VJ7JFnH5jtIQUgdl2%2BTtHyaQ8320GNZSv%2BKUaz%2FOxJLB24Ns2SXW3e2Azp%2FgegSeBWARWb3OLnHDC2D2%2B3lp4WjcucwKcUvXF2f5m1fJbqjmzCDSIBs%2FBSc46%2BxaiCrAcK7CmYq3hq3s1PSgA1IqrLJHkU84%2F8WI6rbea2btgZBawffg1QBucuk9AM%2BxqmrYaA6%2FnVyUMGlteJpmWDyUdJcNc1tdtjcIShujs7XIHA1lOEnKbWlbSV9LxHFJrGNrfsDAn7IhMLn%2BKz9Q5UmtxVeY46IgpEJftrRyM6rEMp83DI6AfFHNcwAyzbEF1%2B7f%2Bq0awk3oVj2NE4FMt%2BArJEsLlkfc2F4pSLRwCzQDWdRWD8DCAxsYdy7vDDe5yCFstllpFOx1nIqVXc3jj%2FAwwsaOwQY6pgHA%2FVAvGbnKVCbqBZr9KtVtiqxvN92JtZvF87q%2FlUmcQA3lBGDT2c1x%2FY2W%2FL%2B26bRGo9821tlR%2BXEqcHLPDuV0kszGuAElNaMRhLf9VrX6mjafPKDW3tj9fGjJxQAF5Pse%2Be2JPETrZVdVUSYzoG6XB9loi3%2BSSf9PtI%2FP206EEwZxC2s40MeauVi8zPEevoSLyshneq10HfDEV5osviK0tQU3ZPYs&X-Amz-Signature=325ec0038b51c4265339aba4076339e2c0cf417062d4ffa6685a58a878e95868&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
