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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LGDGTH3%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCxPUF%2Barrkq4csdF6AMPJPSY2siJTRNufr45SU276lWQIgQ9UGEIJPDoLg%2FvEt%2BmY7NYlfMDkwfkdxB4V%2FEN4X0vQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWn%2BHsggeX2JFlI7CrcA%2Bl9AsmI3HC%2BKp11BRy6TNU6pAysmbpf0u1ABXuq53W6ScKUP9aJUfsZNuOL4%2BaWIWIl9u81ZaHDR5gpytAQPove20n%2Fh8dtC09A%2FsB6HMohzfLlOk%2B8zhQUm0tdA3ivxVrnpmLGqJRy0VLSyyWHu7tJSXXGofu7KE5mL1P3bjoIiGkXGgOonQnzc9QCnviBHsUh0bxkZQCsODPTkIFTuMw%2FXz%2B4yOYdVFce%2BPIQcI45JGVFrRkgq7YKtIYnRJW8zCfAzAIxjs1Bw2i9om9AlzC7xHcZs%2F4gtgeQAJ3F8kYoehuYx1SQr%2FmYm5KH5QiEtPKyhPMf3XaA%2FFrechCDgZ1ihvKQ0qlAnN9px%2FQCfH2T%2BUQKlHcnkJJrluCW9WI8%2B8eazaMwVueM6KehMb7lSMIP5EekBzyqD0JxLL8EMcwZe6trFLNk8kk4zTSJ3Q5Mvxk9BlkRKrpO8bBWBmHbSQKGiYHzCb4q0ZaBhZCA%2FMPO1emd2oj0YwtPC7IHo1ss9i4dlreyd%2BNFhAz4YRu8dRhFt0ddw41edJn1mq1Bgeia50zG3PrpiOkwX2h1C%2B6Ce4aAk0kvVOeDjWK3EZGx9zqjvyx79L%2BBOFwjIeAGhzsU1nHYzv1Mnoj8YsR5MPq4gcEGOqUBGogpMxtge1VST3toPu30y51ew0GfXeGpMfXT%2BBAm31Tc8xsDwHB6EDBkW6mwrJ6mBxO3V3oLakRzxt7YQxJjhcO9HYFdzcZo0iWbY1BUy7olhAPrObOytMfFy%2F1GocuIxTbJwqoON%2FlOJ6GJQYYC9%2FHN4SkSRFp1KtY3NFfutYJhEIMFgAwRs0EeyL2iwezEQCb%2BXCYsE1x1xvWE%2FV4p2sLN5QsX&X-Amz-Signature=c91f557500c533b75d902f65fd420b5d50f692b6c9de441fcd83a6d4a0660c81&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LGDGTH3%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCxPUF%2Barrkq4csdF6AMPJPSY2siJTRNufr45SU276lWQIgQ9UGEIJPDoLg%2FvEt%2BmY7NYlfMDkwfkdxB4V%2FEN4X0vQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWn%2BHsggeX2JFlI7CrcA%2Bl9AsmI3HC%2BKp11BRy6TNU6pAysmbpf0u1ABXuq53W6ScKUP9aJUfsZNuOL4%2BaWIWIl9u81ZaHDR5gpytAQPove20n%2Fh8dtC09A%2FsB6HMohzfLlOk%2B8zhQUm0tdA3ivxVrnpmLGqJRy0VLSyyWHu7tJSXXGofu7KE5mL1P3bjoIiGkXGgOonQnzc9QCnviBHsUh0bxkZQCsODPTkIFTuMw%2FXz%2B4yOYdVFce%2BPIQcI45JGVFrRkgq7YKtIYnRJW8zCfAzAIxjs1Bw2i9om9AlzC7xHcZs%2F4gtgeQAJ3F8kYoehuYx1SQr%2FmYm5KH5QiEtPKyhPMf3XaA%2FFrechCDgZ1ihvKQ0qlAnN9px%2FQCfH2T%2BUQKlHcnkJJrluCW9WI8%2B8eazaMwVueM6KehMb7lSMIP5EekBzyqD0JxLL8EMcwZe6trFLNk8kk4zTSJ3Q5Mvxk9BlkRKrpO8bBWBmHbSQKGiYHzCb4q0ZaBhZCA%2FMPO1emd2oj0YwtPC7IHo1ss9i4dlreyd%2BNFhAz4YRu8dRhFt0ddw41edJn1mq1Bgeia50zG3PrpiOkwX2h1C%2B6Ce4aAk0kvVOeDjWK3EZGx9zqjvyx79L%2BBOFwjIeAGhzsU1nHYzv1Mnoj8YsR5MPq4gcEGOqUBGogpMxtge1VST3toPu30y51ew0GfXeGpMfXT%2BBAm31Tc8xsDwHB6EDBkW6mwrJ6mBxO3V3oLakRzxt7YQxJjhcO9HYFdzcZo0iWbY1BUy7olhAPrObOytMfFy%2F1GocuIxTbJwqoON%2FlOJ6GJQYYC9%2FHN4SkSRFp1KtY3NFfutYJhEIMFgAwRs0EeyL2iwezEQCb%2BXCYsE1x1xvWE%2FV4p2sLN5QsX&X-Amz-Signature=86469382f7fd5c06a2ffa02fc6e4f44dc4db510b22e1f5b1e5e64f8bfafdcea0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LGDGTH3%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCxPUF%2Barrkq4csdF6AMPJPSY2siJTRNufr45SU276lWQIgQ9UGEIJPDoLg%2FvEt%2BmY7NYlfMDkwfkdxB4V%2FEN4X0vQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWn%2BHsggeX2JFlI7CrcA%2Bl9AsmI3HC%2BKp11BRy6TNU6pAysmbpf0u1ABXuq53W6ScKUP9aJUfsZNuOL4%2BaWIWIl9u81ZaHDR5gpytAQPove20n%2Fh8dtC09A%2FsB6HMohzfLlOk%2B8zhQUm0tdA3ivxVrnpmLGqJRy0VLSyyWHu7tJSXXGofu7KE5mL1P3bjoIiGkXGgOonQnzc9QCnviBHsUh0bxkZQCsODPTkIFTuMw%2FXz%2B4yOYdVFce%2BPIQcI45JGVFrRkgq7YKtIYnRJW8zCfAzAIxjs1Bw2i9om9AlzC7xHcZs%2F4gtgeQAJ3F8kYoehuYx1SQr%2FmYm5KH5QiEtPKyhPMf3XaA%2FFrechCDgZ1ihvKQ0qlAnN9px%2FQCfH2T%2BUQKlHcnkJJrluCW9WI8%2B8eazaMwVueM6KehMb7lSMIP5EekBzyqD0JxLL8EMcwZe6trFLNk8kk4zTSJ3Q5Mvxk9BlkRKrpO8bBWBmHbSQKGiYHzCb4q0ZaBhZCA%2FMPO1emd2oj0YwtPC7IHo1ss9i4dlreyd%2BNFhAz4YRu8dRhFt0ddw41edJn1mq1Bgeia50zG3PrpiOkwX2h1C%2B6Ce4aAk0kvVOeDjWK3EZGx9zqjvyx79L%2BBOFwjIeAGhzsU1nHYzv1Mnoj8YsR5MPq4gcEGOqUBGogpMxtge1VST3toPu30y51ew0GfXeGpMfXT%2BBAm31Tc8xsDwHB6EDBkW6mwrJ6mBxO3V3oLakRzxt7YQxJjhcO9HYFdzcZo0iWbY1BUy7olhAPrObOytMfFy%2F1GocuIxTbJwqoON%2FlOJ6GJQYYC9%2FHN4SkSRFp1KtY3NFfutYJhEIMFgAwRs0EeyL2iwezEQCb%2BXCYsE1x1xvWE%2FV4p2sLN5QsX&X-Amz-Signature=17b6533c976f74e0d76e7eb1e8a172e36178a783772e70aa9e61fa99caa7559f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LGDGTH3%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCxPUF%2Barrkq4csdF6AMPJPSY2siJTRNufr45SU276lWQIgQ9UGEIJPDoLg%2FvEt%2BmY7NYlfMDkwfkdxB4V%2FEN4X0vQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWn%2BHsggeX2JFlI7CrcA%2Bl9AsmI3HC%2BKp11BRy6TNU6pAysmbpf0u1ABXuq53W6ScKUP9aJUfsZNuOL4%2BaWIWIl9u81ZaHDR5gpytAQPove20n%2Fh8dtC09A%2FsB6HMohzfLlOk%2B8zhQUm0tdA3ivxVrnpmLGqJRy0VLSyyWHu7tJSXXGofu7KE5mL1P3bjoIiGkXGgOonQnzc9QCnviBHsUh0bxkZQCsODPTkIFTuMw%2FXz%2B4yOYdVFce%2BPIQcI45JGVFrRkgq7YKtIYnRJW8zCfAzAIxjs1Bw2i9om9AlzC7xHcZs%2F4gtgeQAJ3F8kYoehuYx1SQr%2FmYm5KH5QiEtPKyhPMf3XaA%2FFrechCDgZ1ihvKQ0qlAnN9px%2FQCfH2T%2BUQKlHcnkJJrluCW9WI8%2B8eazaMwVueM6KehMb7lSMIP5EekBzyqD0JxLL8EMcwZe6trFLNk8kk4zTSJ3Q5Mvxk9BlkRKrpO8bBWBmHbSQKGiYHzCb4q0ZaBhZCA%2FMPO1emd2oj0YwtPC7IHo1ss9i4dlreyd%2BNFhAz4YRu8dRhFt0ddw41edJn1mq1Bgeia50zG3PrpiOkwX2h1C%2B6Ce4aAk0kvVOeDjWK3EZGx9zqjvyx79L%2BBOFwjIeAGhzsU1nHYzv1Mnoj8YsR5MPq4gcEGOqUBGogpMxtge1VST3toPu30y51ew0GfXeGpMfXT%2BBAm31Tc8xsDwHB6EDBkW6mwrJ6mBxO3V3oLakRzxt7YQxJjhcO9HYFdzcZo0iWbY1BUy7olhAPrObOytMfFy%2F1GocuIxTbJwqoON%2FlOJ6GJQYYC9%2FHN4SkSRFp1KtY3NFfutYJhEIMFgAwRs0EeyL2iwezEQCb%2BXCYsE1x1xvWE%2FV4p2sLN5QsX&X-Amz-Signature=787740c29d692e8cbf30e626e95475f10ba12aa8d9a7a939712ba95e4ed0f3ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LGDGTH3%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCxPUF%2Barrkq4csdF6AMPJPSY2siJTRNufr45SU276lWQIgQ9UGEIJPDoLg%2FvEt%2BmY7NYlfMDkwfkdxB4V%2FEN4X0vQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWn%2BHsggeX2JFlI7CrcA%2Bl9AsmI3HC%2BKp11BRy6TNU6pAysmbpf0u1ABXuq53W6ScKUP9aJUfsZNuOL4%2BaWIWIl9u81ZaHDR5gpytAQPove20n%2Fh8dtC09A%2FsB6HMohzfLlOk%2B8zhQUm0tdA3ivxVrnpmLGqJRy0VLSyyWHu7tJSXXGofu7KE5mL1P3bjoIiGkXGgOonQnzc9QCnviBHsUh0bxkZQCsODPTkIFTuMw%2FXz%2B4yOYdVFce%2BPIQcI45JGVFrRkgq7YKtIYnRJW8zCfAzAIxjs1Bw2i9om9AlzC7xHcZs%2F4gtgeQAJ3F8kYoehuYx1SQr%2FmYm5KH5QiEtPKyhPMf3XaA%2FFrechCDgZ1ihvKQ0qlAnN9px%2FQCfH2T%2BUQKlHcnkJJrluCW9WI8%2B8eazaMwVueM6KehMb7lSMIP5EekBzyqD0JxLL8EMcwZe6trFLNk8kk4zTSJ3Q5Mvxk9BlkRKrpO8bBWBmHbSQKGiYHzCb4q0ZaBhZCA%2FMPO1emd2oj0YwtPC7IHo1ss9i4dlreyd%2BNFhAz4YRu8dRhFt0ddw41edJn1mq1Bgeia50zG3PrpiOkwX2h1C%2B6Ce4aAk0kvVOeDjWK3EZGx9zqjvyx79L%2BBOFwjIeAGhzsU1nHYzv1Mnoj8YsR5MPq4gcEGOqUBGogpMxtge1VST3toPu30y51ew0GfXeGpMfXT%2BBAm31Tc8xsDwHB6EDBkW6mwrJ6mBxO3V3oLakRzxt7YQxJjhcO9HYFdzcZo0iWbY1BUy7olhAPrObOytMfFy%2F1GocuIxTbJwqoON%2FlOJ6GJQYYC9%2FHN4SkSRFp1KtY3NFfutYJhEIMFgAwRs0EeyL2iwezEQCb%2BXCYsE1x1xvWE%2FV4p2sLN5QsX&X-Amz-Signature=b49dc37fc9cdff6e9da30b826b8d6070a5ab88b605c6ebda5d14507c4408c25b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
