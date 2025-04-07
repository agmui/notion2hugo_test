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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSFLXR4X%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXUwUCht2XoZt%2FjKO8ebdLiCf%2F53pkocKpIqspb3HViAiAbIJa4z8asS6VWKWBY7m86cOb%2FOeFOuSxefeEm2HpEYir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM630F0%2BxSNid6t2N0KtwDBNstuDlCat6jtIxQ2ClimPJoPTtshYFhRlgE7BozNQVQxAo95o1BOD8BRbsvcNz7g1TCOy1uubGTvpyq4ZjV94oXRvS52dxHE7pUQS2CfXWP1Pw9a%2Fe4RTEk4yhISJadcHtZYsB%2FTBiGRvw7ABoGzIH%2Fxc0MRh1LZUPNR3E3E1wIsw4Xe4%2F8kmpHKqfhSsQ5ot%2FFJ2nmk3aowaRmZDEq2aUqk%2BTv5iQC1v35IG08X6f0vOBTl90a9C8QN8DhJz5hHWkzlZqQ8uD7S5%2F5tk1XAUYugxKLCupiU%2BkHJXv5%2Bw5q23n8lQ6v%2FsYTzmX7jEH%2FYTGLg3dtOiPiogMEj8yhKQPntjebGDQBylfDw9cS9ubzX6JV9oNvQ1ZgUF6ttjJmW738BhCG9a5RKlFL5rCfCJFXf7%2FCRjcWGY96JhcrepGjrw1bDhJ6i6Rfd7k2Hj0re%2B%2F3e%2Bs%2BoCKSbMVSBwkMyPF89gpttrH3nJqQS65VfmNuDbUWQ2SL9yHPSIIqS1dHtSb5oLmkeyFNZ2lDS9hYqdIDADcpzOn9RV%2F3FUgq%2BwnCNYzpptRClaZGxwi6uqKZnwomPyIFwdEmZ2Zl9BuUc%2FllR7ZOb2EDNb3kHvoF79RiRSX516daC2u6lE8wiNHPvwY6pgEp56gkIWI0FvPKfHRq0w7wFtVnw2UMACmzqwBisOcPBo1ZumNBO1x6kCg9vnwdYmQ%2BxzVWUY2gzzvutURPKL433U7YJhi6a0XM0VMFs87pwnSQaYhdDKgxXXinfoLoHe5BM5KblMCY2Y9nztHDMTbf1%2BwFin2BOT8%2BWvfp4m%2FTzQTNN2nPIpyUx%2BTeRiTw4E693WKIupPNDO3sDUghCIkjx76xHyP0&X-Amz-Signature=d2f317bb2b2aacd730aacfb50d4c8f43d7cd3d7a3ba8502ebb5696e03fdaf96d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSFLXR4X%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXUwUCht2XoZt%2FjKO8ebdLiCf%2F53pkocKpIqspb3HViAiAbIJa4z8asS6VWKWBY7m86cOb%2FOeFOuSxefeEm2HpEYir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM630F0%2BxSNid6t2N0KtwDBNstuDlCat6jtIxQ2ClimPJoPTtshYFhRlgE7BozNQVQxAo95o1BOD8BRbsvcNz7g1TCOy1uubGTvpyq4ZjV94oXRvS52dxHE7pUQS2CfXWP1Pw9a%2Fe4RTEk4yhISJadcHtZYsB%2FTBiGRvw7ABoGzIH%2Fxc0MRh1LZUPNR3E3E1wIsw4Xe4%2F8kmpHKqfhSsQ5ot%2FFJ2nmk3aowaRmZDEq2aUqk%2BTv5iQC1v35IG08X6f0vOBTl90a9C8QN8DhJz5hHWkzlZqQ8uD7S5%2F5tk1XAUYugxKLCupiU%2BkHJXv5%2Bw5q23n8lQ6v%2FsYTzmX7jEH%2FYTGLg3dtOiPiogMEj8yhKQPntjebGDQBylfDw9cS9ubzX6JV9oNvQ1ZgUF6ttjJmW738BhCG9a5RKlFL5rCfCJFXf7%2FCRjcWGY96JhcrepGjrw1bDhJ6i6Rfd7k2Hj0re%2B%2F3e%2Bs%2BoCKSbMVSBwkMyPF89gpttrH3nJqQS65VfmNuDbUWQ2SL9yHPSIIqS1dHtSb5oLmkeyFNZ2lDS9hYqdIDADcpzOn9RV%2F3FUgq%2BwnCNYzpptRClaZGxwi6uqKZnwomPyIFwdEmZ2Zl9BuUc%2FllR7ZOb2EDNb3kHvoF79RiRSX516daC2u6lE8wiNHPvwY6pgEp56gkIWI0FvPKfHRq0w7wFtVnw2UMACmzqwBisOcPBo1ZumNBO1x6kCg9vnwdYmQ%2BxzVWUY2gzzvutURPKL433U7YJhi6a0XM0VMFs87pwnSQaYhdDKgxXXinfoLoHe5BM5KblMCY2Y9nztHDMTbf1%2BwFin2BOT8%2BWvfp4m%2FTzQTNN2nPIpyUx%2BTeRiTw4E693WKIupPNDO3sDUghCIkjx76xHyP0&X-Amz-Signature=8d6fe078b65ff79ae84605b7316d6c6da001fb9fb601b832241edb65410e62ff&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSFLXR4X%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXUwUCht2XoZt%2FjKO8ebdLiCf%2F53pkocKpIqspb3HViAiAbIJa4z8asS6VWKWBY7m86cOb%2FOeFOuSxefeEm2HpEYir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM630F0%2BxSNid6t2N0KtwDBNstuDlCat6jtIxQ2ClimPJoPTtshYFhRlgE7BozNQVQxAo95o1BOD8BRbsvcNz7g1TCOy1uubGTvpyq4ZjV94oXRvS52dxHE7pUQS2CfXWP1Pw9a%2Fe4RTEk4yhISJadcHtZYsB%2FTBiGRvw7ABoGzIH%2Fxc0MRh1LZUPNR3E3E1wIsw4Xe4%2F8kmpHKqfhSsQ5ot%2FFJ2nmk3aowaRmZDEq2aUqk%2BTv5iQC1v35IG08X6f0vOBTl90a9C8QN8DhJz5hHWkzlZqQ8uD7S5%2F5tk1XAUYugxKLCupiU%2BkHJXv5%2Bw5q23n8lQ6v%2FsYTzmX7jEH%2FYTGLg3dtOiPiogMEj8yhKQPntjebGDQBylfDw9cS9ubzX6JV9oNvQ1ZgUF6ttjJmW738BhCG9a5RKlFL5rCfCJFXf7%2FCRjcWGY96JhcrepGjrw1bDhJ6i6Rfd7k2Hj0re%2B%2F3e%2Bs%2BoCKSbMVSBwkMyPF89gpttrH3nJqQS65VfmNuDbUWQ2SL9yHPSIIqS1dHtSb5oLmkeyFNZ2lDS9hYqdIDADcpzOn9RV%2F3FUgq%2BwnCNYzpptRClaZGxwi6uqKZnwomPyIFwdEmZ2Zl9BuUc%2FllR7ZOb2EDNb3kHvoF79RiRSX516daC2u6lE8wiNHPvwY6pgEp56gkIWI0FvPKfHRq0w7wFtVnw2UMACmzqwBisOcPBo1ZumNBO1x6kCg9vnwdYmQ%2BxzVWUY2gzzvutURPKL433U7YJhi6a0XM0VMFs87pwnSQaYhdDKgxXXinfoLoHe5BM5KblMCY2Y9nztHDMTbf1%2BwFin2BOT8%2BWvfp4m%2FTzQTNN2nPIpyUx%2BTeRiTw4E693WKIupPNDO3sDUghCIkjx76xHyP0&X-Amz-Signature=d0dd6219c2cd29b541b8be881e9c48ac8ba0abbdeea3c9e4f2e2689f9f4b3998&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSFLXR4X%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXUwUCht2XoZt%2FjKO8ebdLiCf%2F53pkocKpIqspb3HViAiAbIJa4z8asS6VWKWBY7m86cOb%2FOeFOuSxefeEm2HpEYir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM630F0%2BxSNid6t2N0KtwDBNstuDlCat6jtIxQ2ClimPJoPTtshYFhRlgE7BozNQVQxAo95o1BOD8BRbsvcNz7g1TCOy1uubGTvpyq4ZjV94oXRvS52dxHE7pUQS2CfXWP1Pw9a%2Fe4RTEk4yhISJadcHtZYsB%2FTBiGRvw7ABoGzIH%2Fxc0MRh1LZUPNR3E3E1wIsw4Xe4%2F8kmpHKqfhSsQ5ot%2FFJ2nmk3aowaRmZDEq2aUqk%2BTv5iQC1v35IG08X6f0vOBTl90a9C8QN8DhJz5hHWkzlZqQ8uD7S5%2F5tk1XAUYugxKLCupiU%2BkHJXv5%2Bw5q23n8lQ6v%2FsYTzmX7jEH%2FYTGLg3dtOiPiogMEj8yhKQPntjebGDQBylfDw9cS9ubzX6JV9oNvQ1ZgUF6ttjJmW738BhCG9a5RKlFL5rCfCJFXf7%2FCRjcWGY96JhcrepGjrw1bDhJ6i6Rfd7k2Hj0re%2B%2F3e%2Bs%2BoCKSbMVSBwkMyPF89gpttrH3nJqQS65VfmNuDbUWQ2SL9yHPSIIqS1dHtSb5oLmkeyFNZ2lDS9hYqdIDADcpzOn9RV%2F3FUgq%2BwnCNYzpptRClaZGxwi6uqKZnwomPyIFwdEmZ2Zl9BuUc%2FllR7ZOb2EDNb3kHvoF79RiRSX516daC2u6lE8wiNHPvwY6pgEp56gkIWI0FvPKfHRq0w7wFtVnw2UMACmzqwBisOcPBo1ZumNBO1x6kCg9vnwdYmQ%2BxzVWUY2gzzvutURPKL433U7YJhi6a0XM0VMFs87pwnSQaYhdDKgxXXinfoLoHe5BM5KblMCY2Y9nztHDMTbf1%2BwFin2BOT8%2BWvfp4m%2FTzQTNN2nPIpyUx%2BTeRiTw4E693WKIupPNDO3sDUghCIkjx76xHyP0&X-Amz-Signature=468c401da56ea891f4d2d58a595c5c61a5ece5b0bb52a4a5141b16e3604cb279&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSFLXR4X%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXUwUCht2XoZt%2FjKO8ebdLiCf%2F53pkocKpIqspb3HViAiAbIJa4z8asS6VWKWBY7m86cOb%2FOeFOuSxefeEm2HpEYir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM630F0%2BxSNid6t2N0KtwDBNstuDlCat6jtIxQ2ClimPJoPTtshYFhRlgE7BozNQVQxAo95o1BOD8BRbsvcNz7g1TCOy1uubGTvpyq4ZjV94oXRvS52dxHE7pUQS2CfXWP1Pw9a%2Fe4RTEk4yhISJadcHtZYsB%2FTBiGRvw7ABoGzIH%2Fxc0MRh1LZUPNR3E3E1wIsw4Xe4%2F8kmpHKqfhSsQ5ot%2FFJ2nmk3aowaRmZDEq2aUqk%2BTv5iQC1v35IG08X6f0vOBTl90a9C8QN8DhJz5hHWkzlZqQ8uD7S5%2F5tk1XAUYugxKLCupiU%2BkHJXv5%2Bw5q23n8lQ6v%2FsYTzmX7jEH%2FYTGLg3dtOiPiogMEj8yhKQPntjebGDQBylfDw9cS9ubzX6JV9oNvQ1ZgUF6ttjJmW738BhCG9a5RKlFL5rCfCJFXf7%2FCRjcWGY96JhcrepGjrw1bDhJ6i6Rfd7k2Hj0re%2B%2F3e%2Bs%2BoCKSbMVSBwkMyPF89gpttrH3nJqQS65VfmNuDbUWQ2SL9yHPSIIqS1dHtSb5oLmkeyFNZ2lDS9hYqdIDADcpzOn9RV%2F3FUgq%2BwnCNYzpptRClaZGxwi6uqKZnwomPyIFwdEmZ2Zl9BuUc%2FllR7ZOb2EDNb3kHvoF79RiRSX516daC2u6lE8wiNHPvwY6pgEp56gkIWI0FvPKfHRq0w7wFtVnw2UMACmzqwBisOcPBo1ZumNBO1x6kCg9vnwdYmQ%2BxzVWUY2gzzvutURPKL433U7YJhi6a0XM0VMFs87pwnSQaYhdDKgxXXinfoLoHe5BM5KblMCY2Y9nztHDMTbf1%2BwFin2BOT8%2BWvfp4m%2FTzQTNN2nPIpyUx%2BTeRiTw4E693WKIupPNDO3sDUghCIkjx76xHyP0&X-Amz-Signature=bde79869afb97c59e4221b78e5f33b7724dfca68589b403f1df3bc58a5b754e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
