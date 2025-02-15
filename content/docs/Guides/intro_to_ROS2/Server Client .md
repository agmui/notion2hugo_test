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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWIBMFMV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIExhf7mMAAmDvVuVYZs%2FTTy9BsHb7t%2FUOMpELubHbIQ2AiEA32kOUjFpOxEgoYdMGoH5zLgpQGRsKLAIIvhwAiaZ8d8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAJvAFn%2B63ZHW0maByrcAw%2BIopWV1et3vk3DfUO30tG0RDxWUdDeBgofBs7dKvIomg5wRx6lLz3xB0g6gznWqtLgTxxmFrfoagjOHSy9qprtzdPFQe0NXtINdOdDhuYk0z6W%2FU2VXNwWmbX%2BNyjdXBAEo0MAl6NSisT7C6zI2yaSBviVE6zxm9w85EP7lnW1jXs7zObzg747t%2Fp%2B5w%2FiKqyV5lVlpmV%2BxbznieeH2dOxnVPbP66bJLoR%2BYbICnEhPUJcJDrUJbnDxdlI7YQwYlWtZb7KhHo7%2BWZpJ2e0zV9hBSmP2mtooDis6ZUsHnGHb1ExfG2oB053%2Be0RtmMdA6ebq69cvUFNrvy5z0B6yLB3kg9%2ByX8meSw%2FZ9qBYk7ByJCmGM1QgvpeavNtg%2FLTwC%2Boqg4SfL4BVFF77KwFUvrIkmlf54YKnn%2BWW553uw%2B%2B9PGCBWqKcQ61yjx83yEwHDuy8%2Bi1Gdk6fL1dq54cSDdjhb68BhwfSJcDv2oBIy4zHoZEhFZ3E6KJBTtzTIgpy5hQR04VQ2FDFVLbKXv0UC1IIzSi5CYgMfPSiANuZH0GMySojsxUGre4%2FS6KtbITuHIrm5YeJIkBtr4bw%2FA2XZfoez3xcJav3Yk2oWjOeaVIs0fU1gtso0eUlF0wMOfFwr0GOqUBs9WHD%2B1%2FAATDXx1Ko7RhMuw0YbI%2BjNpXFR0PWHzoPVGxqAbip%2FijLj8emGp2TADzxc%2B4zK77%2BLrZWOD9pu98FhEA%2Fjft%2Fav%2BHhxUpj5qV4pTGlGw2wt0Mn9iGg%2BYStaEybmm4RNvjSAUhxAdNtc62KVCyC8Rxwh%2FjcfWSuxRrpVp%2FEGX3573S%2F0e8YiDYIdhWDMG7C1tTAgQnmTEkSXNStjj5Dy1&X-Amz-Signature=4273df3d688ba6350f8991aff9b8e8003debd93e07c37706bdc7d25e101a54e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWIBMFMV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIExhf7mMAAmDvVuVYZs%2FTTy9BsHb7t%2FUOMpELubHbIQ2AiEA32kOUjFpOxEgoYdMGoH5zLgpQGRsKLAIIvhwAiaZ8d8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAJvAFn%2B63ZHW0maByrcAw%2BIopWV1et3vk3DfUO30tG0RDxWUdDeBgofBs7dKvIomg5wRx6lLz3xB0g6gznWqtLgTxxmFrfoagjOHSy9qprtzdPFQe0NXtINdOdDhuYk0z6W%2FU2VXNwWmbX%2BNyjdXBAEo0MAl6NSisT7C6zI2yaSBviVE6zxm9w85EP7lnW1jXs7zObzg747t%2Fp%2B5w%2FiKqyV5lVlpmV%2BxbznieeH2dOxnVPbP66bJLoR%2BYbICnEhPUJcJDrUJbnDxdlI7YQwYlWtZb7KhHo7%2BWZpJ2e0zV9hBSmP2mtooDis6ZUsHnGHb1ExfG2oB053%2Be0RtmMdA6ebq69cvUFNrvy5z0B6yLB3kg9%2ByX8meSw%2FZ9qBYk7ByJCmGM1QgvpeavNtg%2FLTwC%2Boqg4SfL4BVFF77KwFUvrIkmlf54YKnn%2BWW553uw%2B%2B9PGCBWqKcQ61yjx83yEwHDuy8%2Bi1Gdk6fL1dq54cSDdjhb68BhwfSJcDv2oBIy4zHoZEhFZ3E6KJBTtzTIgpy5hQR04VQ2FDFVLbKXv0UC1IIzSi5CYgMfPSiANuZH0GMySojsxUGre4%2FS6KtbITuHIrm5YeJIkBtr4bw%2FA2XZfoez3xcJav3Yk2oWjOeaVIs0fU1gtso0eUlF0wMOfFwr0GOqUBs9WHD%2B1%2FAATDXx1Ko7RhMuw0YbI%2BjNpXFR0PWHzoPVGxqAbip%2FijLj8emGp2TADzxc%2B4zK77%2BLrZWOD9pu98FhEA%2Fjft%2Fav%2BHhxUpj5qV4pTGlGw2wt0Mn9iGg%2BYStaEybmm4RNvjSAUhxAdNtc62KVCyC8Rxwh%2FjcfWSuxRrpVp%2FEGX3573S%2F0e8YiDYIdhWDMG7C1tTAgQnmTEkSXNStjj5Dy1&X-Amz-Signature=c7c92e36f1f185e3e51553d6df8a236f6364cbde7c3a296f559a325483940c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWIBMFMV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIExhf7mMAAmDvVuVYZs%2FTTy9BsHb7t%2FUOMpELubHbIQ2AiEA32kOUjFpOxEgoYdMGoH5zLgpQGRsKLAIIvhwAiaZ8d8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAJvAFn%2B63ZHW0maByrcAw%2BIopWV1et3vk3DfUO30tG0RDxWUdDeBgofBs7dKvIomg5wRx6lLz3xB0g6gznWqtLgTxxmFrfoagjOHSy9qprtzdPFQe0NXtINdOdDhuYk0z6W%2FU2VXNwWmbX%2BNyjdXBAEo0MAl6NSisT7C6zI2yaSBviVE6zxm9w85EP7lnW1jXs7zObzg747t%2Fp%2B5w%2FiKqyV5lVlpmV%2BxbznieeH2dOxnVPbP66bJLoR%2BYbICnEhPUJcJDrUJbnDxdlI7YQwYlWtZb7KhHo7%2BWZpJ2e0zV9hBSmP2mtooDis6ZUsHnGHb1ExfG2oB053%2Be0RtmMdA6ebq69cvUFNrvy5z0B6yLB3kg9%2ByX8meSw%2FZ9qBYk7ByJCmGM1QgvpeavNtg%2FLTwC%2Boqg4SfL4BVFF77KwFUvrIkmlf54YKnn%2BWW553uw%2B%2B9PGCBWqKcQ61yjx83yEwHDuy8%2Bi1Gdk6fL1dq54cSDdjhb68BhwfSJcDv2oBIy4zHoZEhFZ3E6KJBTtzTIgpy5hQR04VQ2FDFVLbKXv0UC1IIzSi5CYgMfPSiANuZH0GMySojsxUGre4%2FS6KtbITuHIrm5YeJIkBtr4bw%2FA2XZfoez3xcJav3Yk2oWjOeaVIs0fU1gtso0eUlF0wMOfFwr0GOqUBs9WHD%2B1%2FAATDXx1Ko7RhMuw0YbI%2BjNpXFR0PWHzoPVGxqAbip%2FijLj8emGp2TADzxc%2B4zK77%2BLrZWOD9pu98FhEA%2Fjft%2Fav%2BHhxUpj5qV4pTGlGw2wt0Mn9iGg%2BYStaEybmm4RNvjSAUhxAdNtc62KVCyC8Rxwh%2FjcfWSuxRrpVp%2FEGX3573S%2F0e8YiDYIdhWDMG7C1tTAgQnmTEkSXNStjj5Dy1&X-Amz-Signature=c202890277fb11fac5fb42583718d6fe542ca2cece94de089acf5388ea65b0ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWIBMFMV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIExhf7mMAAmDvVuVYZs%2FTTy9BsHb7t%2FUOMpELubHbIQ2AiEA32kOUjFpOxEgoYdMGoH5zLgpQGRsKLAIIvhwAiaZ8d8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAJvAFn%2B63ZHW0maByrcAw%2BIopWV1et3vk3DfUO30tG0RDxWUdDeBgofBs7dKvIomg5wRx6lLz3xB0g6gznWqtLgTxxmFrfoagjOHSy9qprtzdPFQe0NXtINdOdDhuYk0z6W%2FU2VXNwWmbX%2BNyjdXBAEo0MAl6NSisT7C6zI2yaSBviVE6zxm9w85EP7lnW1jXs7zObzg747t%2Fp%2B5w%2FiKqyV5lVlpmV%2BxbznieeH2dOxnVPbP66bJLoR%2BYbICnEhPUJcJDrUJbnDxdlI7YQwYlWtZb7KhHo7%2BWZpJ2e0zV9hBSmP2mtooDis6ZUsHnGHb1ExfG2oB053%2Be0RtmMdA6ebq69cvUFNrvy5z0B6yLB3kg9%2ByX8meSw%2FZ9qBYk7ByJCmGM1QgvpeavNtg%2FLTwC%2Boqg4SfL4BVFF77KwFUvrIkmlf54YKnn%2BWW553uw%2B%2B9PGCBWqKcQ61yjx83yEwHDuy8%2Bi1Gdk6fL1dq54cSDdjhb68BhwfSJcDv2oBIy4zHoZEhFZ3E6KJBTtzTIgpy5hQR04VQ2FDFVLbKXv0UC1IIzSi5CYgMfPSiANuZH0GMySojsxUGre4%2FS6KtbITuHIrm5YeJIkBtr4bw%2FA2XZfoez3xcJav3Yk2oWjOeaVIs0fU1gtso0eUlF0wMOfFwr0GOqUBs9WHD%2B1%2FAATDXx1Ko7RhMuw0YbI%2BjNpXFR0PWHzoPVGxqAbip%2FijLj8emGp2TADzxc%2B4zK77%2BLrZWOD9pu98FhEA%2Fjft%2Fav%2BHhxUpj5qV4pTGlGw2wt0Mn9iGg%2BYStaEybmm4RNvjSAUhxAdNtc62KVCyC8Rxwh%2FjcfWSuxRrpVp%2FEGX3573S%2F0e8YiDYIdhWDMG7C1tTAgQnmTEkSXNStjj5Dy1&X-Amz-Signature=1718a678e532e1f12fae08e0c090e758d05942a2d18199c2176ff535459dd291&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWIBMFMV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIExhf7mMAAmDvVuVYZs%2FTTy9BsHb7t%2FUOMpELubHbIQ2AiEA32kOUjFpOxEgoYdMGoH5zLgpQGRsKLAIIvhwAiaZ8d8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAJvAFn%2B63ZHW0maByrcAw%2BIopWV1et3vk3DfUO30tG0RDxWUdDeBgofBs7dKvIomg5wRx6lLz3xB0g6gznWqtLgTxxmFrfoagjOHSy9qprtzdPFQe0NXtINdOdDhuYk0z6W%2FU2VXNwWmbX%2BNyjdXBAEo0MAl6NSisT7C6zI2yaSBviVE6zxm9w85EP7lnW1jXs7zObzg747t%2Fp%2B5w%2FiKqyV5lVlpmV%2BxbznieeH2dOxnVPbP66bJLoR%2BYbICnEhPUJcJDrUJbnDxdlI7YQwYlWtZb7KhHo7%2BWZpJ2e0zV9hBSmP2mtooDis6ZUsHnGHb1ExfG2oB053%2Be0RtmMdA6ebq69cvUFNrvy5z0B6yLB3kg9%2ByX8meSw%2FZ9qBYk7ByJCmGM1QgvpeavNtg%2FLTwC%2Boqg4SfL4BVFF77KwFUvrIkmlf54YKnn%2BWW553uw%2B%2B9PGCBWqKcQ61yjx83yEwHDuy8%2Bi1Gdk6fL1dq54cSDdjhb68BhwfSJcDv2oBIy4zHoZEhFZ3E6KJBTtzTIgpy5hQR04VQ2FDFVLbKXv0UC1IIzSi5CYgMfPSiANuZH0GMySojsxUGre4%2FS6KtbITuHIrm5YeJIkBtr4bw%2FA2XZfoez3xcJav3Yk2oWjOeaVIs0fU1gtso0eUlF0wMOfFwr0GOqUBs9WHD%2B1%2FAATDXx1Ko7RhMuw0YbI%2BjNpXFR0PWHzoPVGxqAbip%2FijLj8emGp2TADzxc%2B4zK77%2BLrZWOD9pu98FhEA%2Fjft%2Fav%2BHhxUpj5qV4pTGlGw2wt0Mn9iGg%2BYStaEybmm4RNvjSAUhxAdNtc62KVCyC8Rxwh%2FjcfWSuxRrpVp%2FEGX3573S%2F0e8YiDYIdhWDMG7C1tTAgQnmTEkSXNStjj5Dy1&X-Amz-Signature=b2514fa41234a96c6ab6ead0b6cb8e1c0abd17af2e17f310e0c6fe2453203ad6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
