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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH44YXJ5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCgONG1YPt%2B6GW3bHHDoRbTx%2B2JjmpnOnfdIRzu4odiQIgfybbw9z9XXmTO3cXn98K9iXTKyY7nDpU%2Fo5xGRAFkzwq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKq1o1KbJDI5I7RW9SrcA3m%2B9dowMVSixk8ssk7hGi9vpHVejK0UqUord%2Fa8mNunSh%2BI3iF6wG6E0uuISSXMMHbQRegjhCiPbNhVitKvSeOt6sUBFUtqBhE2%2BD0tLQo6wwMiXTtU3sIWD1HEle%2BXtqySjOl4TTZ0js1dwBDHLKSyef6n9GqDjoKsulx8m%2FgHDThf2vgbzkBvhpSmBXnZMLrmP7Ljp9%2B%2F0ILXCkK2ocXTTZMBt3exmvpOj5%2FQ9TqbjjfqsMJkGnOKi6LeYY6Hys%2BA%2BdAITf4BNF0RNvav6IbOYvMbGZq8HTTiIyHw6%2FkhWiah1dsczUDXOm8msW9vK9RJlAQ4wo66rMViFocnsBEUon7kZ4nJ6yr%2FOr7uBeze0NbCNLv9TGtffywfGjPBoY1UQziYZw6G8mKbIj0CPj6WOUMcPoruHRZnzlxeRM4DpZuVbSbDykCorLwOfvJ6rZQ%2FvhgHYNK1KNEcP%2FJy7NKIVK3NPGsLC9zpjuk6qIi5ItPj%2FTziItZf5Np%2B09tPmJ7uyFxzabKUdJZT4L3MA%2B1o%2FtOXMcHQISnO1qj1BTEheFFNE3ark26zilfsgzsChsjCwfgoZ2JxxRK21Or50pRrPJIR2fFeIy%2Fz%2B%2FEwD9hWoHbY1fBxepjfeMH1MLP%2B5cAGOqUBN1Cg3ReIADwWpIRAaEZsixL6XHID1D9bCEmitySGLDdTFo%2FQI65X2vbSa25E71hDjWVPoemoA2hM8lmO7KhLSBAkjYsOhLt5zebUjDgV%2BR50Dir49NwSKB69f%2FS7LvdWlFh2BCBEWH1u87IQAS238Z6LwquDXybZ7xonbt32Q7X2rUPyvuuv4pVwHyWDHrn5QzIdpVcPlZuTi5BYUAaKn7aNVKhs&X-Amz-Signature=5a292ec9343a476189b9f952438db4b692406bf8dafd576b9fd9b43c65359a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH44YXJ5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCgONG1YPt%2B6GW3bHHDoRbTx%2B2JjmpnOnfdIRzu4odiQIgfybbw9z9XXmTO3cXn98K9iXTKyY7nDpU%2Fo5xGRAFkzwq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKq1o1KbJDI5I7RW9SrcA3m%2B9dowMVSixk8ssk7hGi9vpHVejK0UqUord%2Fa8mNunSh%2BI3iF6wG6E0uuISSXMMHbQRegjhCiPbNhVitKvSeOt6sUBFUtqBhE2%2BD0tLQo6wwMiXTtU3sIWD1HEle%2BXtqySjOl4TTZ0js1dwBDHLKSyef6n9GqDjoKsulx8m%2FgHDThf2vgbzkBvhpSmBXnZMLrmP7Ljp9%2B%2F0ILXCkK2ocXTTZMBt3exmvpOj5%2FQ9TqbjjfqsMJkGnOKi6LeYY6Hys%2BA%2BdAITf4BNF0RNvav6IbOYvMbGZq8HTTiIyHw6%2FkhWiah1dsczUDXOm8msW9vK9RJlAQ4wo66rMViFocnsBEUon7kZ4nJ6yr%2FOr7uBeze0NbCNLv9TGtffywfGjPBoY1UQziYZw6G8mKbIj0CPj6WOUMcPoruHRZnzlxeRM4DpZuVbSbDykCorLwOfvJ6rZQ%2FvhgHYNK1KNEcP%2FJy7NKIVK3NPGsLC9zpjuk6qIi5ItPj%2FTziItZf5Np%2B09tPmJ7uyFxzabKUdJZT4L3MA%2B1o%2FtOXMcHQISnO1qj1BTEheFFNE3ark26zilfsgzsChsjCwfgoZ2JxxRK21Or50pRrPJIR2fFeIy%2Fz%2B%2FEwD9hWoHbY1fBxepjfeMH1MLP%2B5cAGOqUBN1Cg3ReIADwWpIRAaEZsixL6XHID1D9bCEmitySGLDdTFo%2FQI65X2vbSa25E71hDjWVPoemoA2hM8lmO7KhLSBAkjYsOhLt5zebUjDgV%2BR50Dir49NwSKB69f%2FS7LvdWlFh2BCBEWH1u87IQAS238Z6LwquDXybZ7xonbt32Q7X2rUPyvuuv4pVwHyWDHrn5QzIdpVcPlZuTi5BYUAaKn7aNVKhs&X-Amz-Signature=cddf9be07a435648397b1682d7881d6575f6e095eeeecccb8d46ce0d2ef99a3f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH44YXJ5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCgONG1YPt%2B6GW3bHHDoRbTx%2B2JjmpnOnfdIRzu4odiQIgfybbw9z9XXmTO3cXn98K9iXTKyY7nDpU%2Fo5xGRAFkzwq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKq1o1KbJDI5I7RW9SrcA3m%2B9dowMVSixk8ssk7hGi9vpHVejK0UqUord%2Fa8mNunSh%2BI3iF6wG6E0uuISSXMMHbQRegjhCiPbNhVitKvSeOt6sUBFUtqBhE2%2BD0tLQo6wwMiXTtU3sIWD1HEle%2BXtqySjOl4TTZ0js1dwBDHLKSyef6n9GqDjoKsulx8m%2FgHDThf2vgbzkBvhpSmBXnZMLrmP7Ljp9%2B%2F0ILXCkK2ocXTTZMBt3exmvpOj5%2FQ9TqbjjfqsMJkGnOKi6LeYY6Hys%2BA%2BdAITf4BNF0RNvav6IbOYvMbGZq8HTTiIyHw6%2FkhWiah1dsczUDXOm8msW9vK9RJlAQ4wo66rMViFocnsBEUon7kZ4nJ6yr%2FOr7uBeze0NbCNLv9TGtffywfGjPBoY1UQziYZw6G8mKbIj0CPj6WOUMcPoruHRZnzlxeRM4DpZuVbSbDykCorLwOfvJ6rZQ%2FvhgHYNK1KNEcP%2FJy7NKIVK3NPGsLC9zpjuk6qIi5ItPj%2FTziItZf5Np%2B09tPmJ7uyFxzabKUdJZT4L3MA%2B1o%2FtOXMcHQISnO1qj1BTEheFFNE3ark26zilfsgzsChsjCwfgoZ2JxxRK21Or50pRrPJIR2fFeIy%2Fz%2B%2FEwD9hWoHbY1fBxepjfeMH1MLP%2B5cAGOqUBN1Cg3ReIADwWpIRAaEZsixL6XHID1D9bCEmitySGLDdTFo%2FQI65X2vbSa25E71hDjWVPoemoA2hM8lmO7KhLSBAkjYsOhLt5zebUjDgV%2BR50Dir49NwSKB69f%2FS7LvdWlFh2BCBEWH1u87IQAS238Z6LwquDXybZ7xonbt32Q7X2rUPyvuuv4pVwHyWDHrn5QzIdpVcPlZuTi5BYUAaKn7aNVKhs&X-Amz-Signature=84c6eabc16964399e04b23afe373d35caf79f4d2184be214d2d1023d9500725f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH44YXJ5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCgONG1YPt%2B6GW3bHHDoRbTx%2B2JjmpnOnfdIRzu4odiQIgfybbw9z9XXmTO3cXn98K9iXTKyY7nDpU%2Fo5xGRAFkzwq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKq1o1KbJDI5I7RW9SrcA3m%2B9dowMVSixk8ssk7hGi9vpHVejK0UqUord%2Fa8mNunSh%2BI3iF6wG6E0uuISSXMMHbQRegjhCiPbNhVitKvSeOt6sUBFUtqBhE2%2BD0tLQo6wwMiXTtU3sIWD1HEle%2BXtqySjOl4TTZ0js1dwBDHLKSyef6n9GqDjoKsulx8m%2FgHDThf2vgbzkBvhpSmBXnZMLrmP7Ljp9%2B%2F0ILXCkK2ocXTTZMBt3exmvpOj5%2FQ9TqbjjfqsMJkGnOKi6LeYY6Hys%2BA%2BdAITf4BNF0RNvav6IbOYvMbGZq8HTTiIyHw6%2FkhWiah1dsczUDXOm8msW9vK9RJlAQ4wo66rMViFocnsBEUon7kZ4nJ6yr%2FOr7uBeze0NbCNLv9TGtffywfGjPBoY1UQziYZw6G8mKbIj0CPj6WOUMcPoruHRZnzlxeRM4DpZuVbSbDykCorLwOfvJ6rZQ%2FvhgHYNK1KNEcP%2FJy7NKIVK3NPGsLC9zpjuk6qIi5ItPj%2FTziItZf5Np%2B09tPmJ7uyFxzabKUdJZT4L3MA%2B1o%2FtOXMcHQISnO1qj1BTEheFFNE3ark26zilfsgzsChsjCwfgoZ2JxxRK21Or50pRrPJIR2fFeIy%2Fz%2B%2FEwD9hWoHbY1fBxepjfeMH1MLP%2B5cAGOqUBN1Cg3ReIADwWpIRAaEZsixL6XHID1D9bCEmitySGLDdTFo%2FQI65X2vbSa25E71hDjWVPoemoA2hM8lmO7KhLSBAkjYsOhLt5zebUjDgV%2BR50Dir49NwSKB69f%2FS7LvdWlFh2BCBEWH1u87IQAS238Z6LwquDXybZ7xonbt32Q7X2rUPyvuuv4pVwHyWDHrn5QzIdpVcPlZuTi5BYUAaKn7aNVKhs&X-Amz-Signature=8f81e3bb301a04c0a487c8a22d98bc671b1c15a7cd0d4221ad9ee188e60b02fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH44YXJ5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCgONG1YPt%2B6GW3bHHDoRbTx%2B2JjmpnOnfdIRzu4odiQIgfybbw9z9XXmTO3cXn98K9iXTKyY7nDpU%2Fo5xGRAFkzwq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKq1o1KbJDI5I7RW9SrcA3m%2B9dowMVSixk8ssk7hGi9vpHVejK0UqUord%2Fa8mNunSh%2BI3iF6wG6E0uuISSXMMHbQRegjhCiPbNhVitKvSeOt6sUBFUtqBhE2%2BD0tLQo6wwMiXTtU3sIWD1HEle%2BXtqySjOl4TTZ0js1dwBDHLKSyef6n9GqDjoKsulx8m%2FgHDThf2vgbzkBvhpSmBXnZMLrmP7Ljp9%2B%2F0ILXCkK2ocXTTZMBt3exmvpOj5%2FQ9TqbjjfqsMJkGnOKi6LeYY6Hys%2BA%2BdAITf4BNF0RNvav6IbOYvMbGZq8HTTiIyHw6%2FkhWiah1dsczUDXOm8msW9vK9RJlAQ4wo66rMViFocnsBEUon7kZ4nJ6yr%2FOr7uBeze0NbCNLv9TGtffywfGjPBoY1UQziYZw6G8mKbIj0CPj6WOUMcPoruHRZnzlxeRM4DpZuVbSbDykCorLwOfvJ6rZQ%2FvhgHYNK1KNEcP%2FJy7NKIVK3NPGsLC9zpjuk6qIi5ItPj%2FTziItZf5Np%2B09tPmJ7uyFxzabKUdJZT4L3MA%2B1o%2FtOXMcHQISnO1qj1BTEheFFNE3ark26zilfsgzsChsjCwfgoZ2JxxRK21Or50pRrPJIR2fFeIy%2Fz%2B%2FEwD9hWoHbY1fBxepjfeMH1MLP%2B5cAGOqUBN1Cg3ReIADwWpIRAaEZsixL6XHID1D9bCEmitySGLDdTFo%2FQI65X2vbSa25E71hDjWVPoemoA2hM8lmO7KhLSBAkjYsOhLt5zebUjDgV%2BR50Dir49NwSKB69f%2FS7LvdWlFh2BCBEWH1u87IQAS238Z6LwquDXybZ7xonbt32Q7X2rUPyvuuv4pVwHyWDHrn5QzIdpVcPlZuTi5BYUAaKn7aNVKhs&X-Amz-Signature=f76e0a97ad382caa23cf4b3346a5625a704db83d268e0502bd3edc24d771b21b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
