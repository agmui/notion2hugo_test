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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJVKSXMO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BeJvWiVaiBQHzht4cl7t63qCcgCd%2B%2Bpdb8s5%2FBZ4fNAiAnxlLr8uv%2BuzpxUjEecxYlAGK57QFDC9U6djUOIa37fiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk3m6EqKQnzt1D5szKtwDCln5rEstA3izDT2SIW9DYpr3bCSRvSEEObAAB8kMLIM6y%2Fj5aF%2BbA4HEHCkmUkVC4p57j1ghWUhAxyYgTExxC7%2FEXgRc4q9rvhT7UKeqRJolfRUviOamp3pJEFKh%2F57kx0IaGDu47YnZN73b5hfbNHjJb%2BUd3trvOhvNVBzeWTAxF9JNiuCwc%2BzCl%2BWh%2FdxqsWvgvhcBpY1LkTvCiPY%2BH3LU0oWxPuk6R2sB7UaYiSMZqqFGhyjggxEe0VCTIFAxoBD6q275GK9qTMP2HUrLiyFGk%2FtBaNJXl4RCAIhRWhm%2F7DDcUPD7WXsQsySJti%2BDRyscdawyO7hn6B3GEoajUU2xLepiws6A3q%2BOYlzEO0GqkL%2BrdED%2FprQsELY4RY9IzLYEXFDp75FMZAKUcpzxawjnShXd0fVM1yiNxgqNFMn3%2FCkk0DRVlXudRGgySPuAyjGtoHD9FvZ%2FuGl%2ByP7UEO2w2O%2Fbxy9dTVrRxINkQHbUpWpvktte7gymFyBOcaYEdrIRiHQg4RZBSVnXYN1eGjfxWXLj0lgL8i%2Fj5ayPc0JOcSE2m7xGF8DYFaEC89NtO8PcXsrtFp6FbXYiIrMy1s4%2BMyGMlJE6h3%2BwyudV2odbkO6smjoWtGDacFsw2pX1vAY6pgGKZ32yG%2FuMOL3L6EZl453KukHvmTd5oToOARsbt51th5VNTSXcxb1Pl4x62zdi4jAA7AH58OpIZF1MdgJkPowyxcD4z3WTgJLap4njfCA8eWoaEgWuqk9eGZNJ%2Biry1%2B%2F08w4XxSGcS8n2ghCKzq4gOaRd0hp7Fqa0VLLP0vFfwBci%2BkM70znp3f3Cb9uoJDLhhcdzvdHRLFdJw%2BAGXa96DUnZcnE5&X-Amz-Signature=5e95b453e316a4185a77df2e10df5999f737880f3a763d0efbc02a495c71dd6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJVKSXMO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BeJvWiVaiBQHzht4cl7t63qCcgCd%2B%2Bpdb8s5%2FBZ4fNAiAnxlLr8uv%2BuzpxUjEecxYlAGK57QFDC9U6djUOIa37fiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk3m6EqKQnzt1D5szKtwDCln5rEstA3izDT2SIW9DYpr3bCSRvSEEObAAB8kMLIM6y%2Fj5aF%2BbA4HEHCkmUkVC4p57j1ghWUhAxyYgTExxC7%2FEXgRc4q9rvhT7UKeqRJolfRUviOamp3pJEFKh%2F57kx0IaGDu47YnZN73b5hfbNHjJb%2BUd3trvOhvNVBzeWTAxF9JNiuCwc%2BzCl%2BWh%2FdxqsWvgvhcBpY1LkTvCiPY%2BH3LU0oWxPuk6R2sB7UaYiSMZqqFGhyjggxEe0VCTIFAxoBD6q275GK9qTMP2HUrLiyFGk%2FtBaNJXl4RCAIhRWhm%2F7DDcUPD7WXsQsySJti%2BDRyscdawyO7hn6B3GEoajUU2xLepiws6A3q%2BOYlzEO0GqkL%2BrdED%2FprQsELY4RY9IzLYEXFDp75FMZAKUcpzxawjnShXd0fVM1yiNxgqNFMn3%2FCkk0DRVlXudRGgySPuAyjGtoHD9FvZ%2FuGl%2ByP7UEO2w2O%2Fbxy9dTVrRxINkQHbUpWpvktte7gymFyBOcaYEdrIRiHQg4RZBSVnXYN1eGjfxWXLj0lgL8i%2Fj5ayPc0JOcSE2m7xGF8DYFaEC89NtO8PcXsrtFp6FbXYiIrMy1s4%2BMyGMlJE6h3%2BwyudV2odbkO6smjoWtGDacFsw2pX1vAY6pgGKZ32yG%2FuMOL3L6EZl453KukHvmTd5oToOARsbt51th5VNTSXcxb1Pl4x62zdi4jAA7AH58OpIZF1MdgJkPowyxcD4z3WTgJLap4njfCA8eWoaEgWuqk9eGZNJ%2Biry1%2B%2F08w4XxSGcS8n2ghCKzq4gOaRd0hp7Fqa0VLLP0vFfwBci%2BkM70znp3f3Cb9uoJDLhhcdzvdHRLFdJw%2BAGXa96DUnZcnE5&X-Amz-Signature=b195a2321dba228ef126491b85a3f3f6d289556fd90c59a5565513803456e932&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJVKSXMO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BeJvWiVaiBQHzht4cl7t63qCcgCd%2B%2Bpdb8s5%2FBZ4fNAiAnxlLr8uv%2BuzpxUjEecxYlAGK57QFDC9U6djUOIa37fiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk3m6EqKQnzt1D5szKtwDCln5rEstA3izDT2SIW9DYpr3bCSRvSEEObAAB8kMLIM6y%2Fj5aF%2BbA4HEHCkmUkVC4p57j1ghWUhAxyYgTExxC7%2FEXgRc4q9rvhT7UKeqRJolfRUviOamp3pJEFKh%2F57kx0IaGDu47YnZN73b5hfbNHjJb%2BUd3trvOhvNVBzeWTAxF9JNiuCwc%2BzCl%2BWh%2FdxqsWvgvhcBpY1LkTvCiPY%2BH3LU0oWxPuk6R2sB7UaYiSMZqqFGhyjggxEe0VCTIFAxoBD6q275GK9qTMP2HUrLiyFGk%2FtBaNJXl4RCAIhRWhm%2F7DDcUPD7WXsQsySJti%2BDRyscdawyO7hn6B3GEoajUU2xLepiws6A3q%2BOYlzEO0GqkL%2BrdED%2FprQsELY4RY9IzLYEXFDp75FMZAKUcpzxawjnShXd0fVM1yiNxgqNFMn3%2FCkk0DRVlXudRGgySPuAyjGtoHD9FvZ%2FuGl%2ByP7UEO2w2O%2Fbxy9dTVrRxINkQHbUpWpvktte7gymFyBOcaYEdrIRiHQg4RZBSVnXYN1eGjfxWXLj0lgL8i%2Fj5ayPc0JOcSE2m7xGF8DYFaEC89NtO8PcXsrtFp6FbXYiIrMy1s4%2BMyGMlJE6h3%2BwyudV2odbkO6smjoWtGDacFsw2pX1vAY6pgGKZ32yG%2FuMOL3L6EZl453KukHvmTd5oToOARsbt51th5VNTSXcxb1Pl4x62zdi4jAA7AH58OpIZF1MdgJkPowyxcD4z3WTgJLap4njfCA8eWoaEgWuqk9eGZNJ%2Biry1%2B%2F08w4XxSGcS8n2ghCKzq4gOaRd0hp7Fqa0VLLP0vFfwBci%2BkM70znp3f3Cb9uoJDLhhcdzvdHRLFdJw%2BAGXa96DUnZcnE5&X-Amz-Signature=37390b4be1f3acc5159e8bc41fd73a4495ad5ca4c540065d2f542273bec0fd5a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJVKSXMO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BeJvWiVaiBQHzht4cl7t63qCcgCd%2B%2Bpdb8s5%2FBZ4fNAiAnxlLr8uv%2BuzpxUjEecxYlAGK57QFDC9U6djUOIa37fiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk3m6EqKQnzt1D5szKtwDCln5rEstA3izDT2SIW9DYpr3bCSRvSEEObAAB8kMLIM6y%2Fj5aF%2BbA4HEHCkmUkVC4p57j1ghWUhAxyYgTExxC7%2FEXgRc4q9rvhT7UKeqRJolfRUviOamp3pJEFKh%2F57kx0IaGDu47YnZN73b5hfbNHjJb%2BUd3trvOhvNVBzeWTAxF9JNiuCwc%2BzCl%2BWh%2FdxqsWvgvhcBpY1LkTvCiPY%2BH3LU0oWxPuk6R2sB7UaYiSMZqqFGhyjggxEe0VCTIFAxoBD6q275GK9qTMP2HUrLiyFGk%2FtBaNJXl4RCAIhRWhm%2F7DDcUPD7WXsQsySJti%2BDRyscdawyO7hn6B3GEoajUU2xLepiws6A3q%2BOYlzEO0GqkL%2BrdED%2FprQsELY4RY9IzLYEXFDp75FMZAKUcpzxawjnShXd0fVM1yiNxgqNFMn3%2FCkk0DRVlXudRGgySPuAyjGtoHD9FvZ%2FuGl%2ByP7UEO2w2O%2Fbxy9dTVrRxINkQHbUpWpvktte7gymFyBOcaYEdrIRiHQg4RZBSVnXYN1eGjfxWXLj0lgL8i%2Fj5ayPc0JOcSE2m7xGF8DYFaEC89NtO8PcXsrtFp6FbXYiIrMy1s4%2BMyGMlJE6h3%2BwyudV2odbkO6smjoWtGDacFsw2pX1vAY6pgGKZ32yG%2FuMOL3L6EZl453KukHvmTd5oToOARsbt51th5VNTSXcxb1Pl4x62zdi4jAA7AH58OpIZF1MdgJkPowyxcD4z3WTgJLap4njfCA8eWoaEgWuqk9eGZNJ%2Biry1%2B%2F08w4XxSGcS8n2ghCKzq4gOaRd0hp7Fqa0VLLP0vFfwBci%2BkM70znp3f3Cb9uoJDLhhcdzvdHRLFdJw%2BAGXa96DUnZcnE5&X-Amz-Signature=45c3efdb66559eb40bcc8643354973d5f83dedfa62c20852e0e6f0fd63707a35&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJVKSXMO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BeJvWiVaiBQHzht4cl7t63qCcgCd%2B%2Bpdb8s5%2FBZ4fNAiAnxlLr8uv%2BuzpxUjEecxYlAGK57QFDC9U6djUOIa37fiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk3m6EqKQnzt1D5szKtwDCln5rEstA3izDT2SIW9DYpr3bCSRvSEEObAAB8kMLIM6y%2Fj5aF%2BbA4HEHCkmUkVC4p57j1ghWUhAxyYgTExxC7%2FEXgRc4q9rvhT7UKeqRJolfRUviOamp3pJEFKh%2F57kx0IaGDu47YnZN73b5hfbNHjJb%2BUd3trvOhvNVBzeWTAxF9JNiuCwc%2BzCl%2BWh%2FdxqsWvgvhcBpY1LkTvCiPY%2BH3LU0oWxPuk6R2sB7UaYiSMZqqFGhyjggxEe0VCTIFAxoBD6q275GK9qTMP2HUrLiyFGk%2FtBaNJXl4RCAIhRWhm%2F7DDcUPD7WXsQsySJti%2BDRyscdawyO7hn6B3GEoajUU2xLepiws6A3q%2BOYlzEO0GqkL%2BrdED%2FprQsELY4RY9IzLYEXFDp75FMZAKUcpzxawjnShXd0fVM1yiNxgqNFMn3%2FCkk0DRVlXudRGgySPuAyjGtoHD9FvZ%2FuGl%2ByP7UEO2w2O%2Fbxy9dTVrRxINkQHbUpWpvktte7gymFyBOcaYEdrIRiHQg4RZBSVnXYN1eGjfxWXLj0lgL8i%2Fj5ayPc0JOcSE2m7xGF8DYFaEC89NtO8PcXsrtFp6FbXYiIrMy1s4%2BMyGMlJE6h3%2BwyudV2odbkO6smjoWtGDacFsw2pX1vAY6pgGKZ32yG%2FuMOL3L6EZl453KukHvmTd5oToOARsbt51th5VNTSXcxb1Pl4x62zdi4jAA7AH58OpIZF1MdgJkPowyxcD4z3WTgJLap4njfCA8eWoaEgWuqk9eGZNJ%2Biry1%2B%2F08w4XxSGcS8n2ghCKzq4gOaRd0hp7Fqa0VLLP0vFfwBci%2BkM70znp3f3Cb9uoJDLhhcdzvdHRLFdJw%2BAGXa96DUnZcnE5&X-Amz-Signature=407ddbc1d497046df12b0e0e0c0a48fd06bfdd9c297e02e481f4edb0b027a24a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
