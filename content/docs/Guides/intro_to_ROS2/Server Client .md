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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA3SGPIM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3FaD2SnL%2FhkdGpv2E2xU%2BxhrGS%2BfglX1lzf3crY4FjQIhANt3IgR0JFronLs2n5DMjSSeaAKETaY0kX37XpWGtdoIKv8DCEAQABoMNjM3NDIzMTgzODA1Igz6L5JexCSagOpEgVEq3AOhBI05bbhtoRyZ4jRaAvc%2F4ZU4TM8GO78ED645cquT%2FJqjzFbxI%2FcDCHRvbj7NT2wSqb%2BdVuUQS67pskxjBlY0%2F9b5VvXGPUd3ezUBqfBLrT3PI%2BOaUWcsPXUxtNSPGtiaP8A65GTgYmT8YX%2Bd0byPsWOyvCLjwr5kjOicIHq23SRFclIa9RHZWieJiju5g1gsg7KrYVG1CVTchC3yZ0M57ViGOAqQPF8CRT7K7rfWQPQeuqOwDUjJpyS%2FLjAppp4x%2BWjeicvhqcBv2jCqBEQkQ1uT%2BngFWYlQ6kfqrWsVEmQZRaF229iFcTCFItkQvp%2BQut%2Fr9TDyQW6Tay3gpGPaTrtdHJgXaQvtGHDt39CBdsgwjL1z2qS2zYO%2FhRWmkiTacO6VpUX3NHHb0BUai3lXOS8SbIZLGW1ZCDklmSPRHckV6EQhD0kMFnrPzBsh9QDBA0KIKmvUPp9LoXG82B3moppBn5aqmtocGP4eLt2bAJhoIGQ8Uzrum0IKG%2FXQyN%2BI%2FqNKIf2w%2Fn8xgWixYhYBiOG1CIyBWtzd2Ktc4FAPMyoR3VHgT3NCuAq31FUM8AEJ9qtFd0d%2FaoDQBaGM%2Bl2DVa9%2Fy7iV7shM18jcI9ZWKrBVkPDWWJCJ9J8TIzCchLLABjqkAdh%2BX122zt9PFF4RQEUrSF%2FDh%2Bb%2FDyy4JL3h9JZRZB%2Fb%2BboLgmukEUyU3zBpje%2BXF1qjc0RvZIH2VmJ0yzWoMhJ9LwC4DRrWb%2BIIlN8sRiPF2vEfy2Sq2Da7mPdbP0IeeyWRxsX%2BJRg0eONOLgW7cq6q3PndS2WOVkdftF2I%2BCB%2Bniz6ClyIi0NnyD7XYrGlglsSrkhlOqtsE2zwokrrHOzZXR1k&X-Amz-Signature=3febf0a59dc24ee236f573a7ecb1f7f81d36d309b85dd245e2f92c71077509d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA3SGPIM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3FaD2SnL%2FhkdGpv2E2xU%2BxhrGS%2BfglX1lzf3crY4FjQIhANt3IgR0JFronLs2n5DMjSSeaAKETaY0kX37XpWGtdoIKv8DCEAQABoMNjM3NDIzMTgzODA1Igz6L5JexCSagOpEgVEq3AOhBI05bbhtoRyZ4jRaAvc%2F4ZU4TM8GO78ED645cquT%2FJqjzFbxI%2FcDCHRvbj7NT2wSqb%2BdVuUQS67pskxjBlY0%2F9b5VvXGPUd3ezUBqfBLrT3PI%2BOaUWcsPXUxtNSPGtiaP8A65GTgYmT8YX%2Bd0byPsWOyvCLjwr5kjOicIHq23SRFclIa9RHZWieJiju5g1gsg7KrYVG1CVTchC3yZ0M57ViGOAqQPF8CRT7K7rfWQPQeuqOwDUjJpyS%2FLjAppp4x%2BWjeicvhqcBv2jCqBEQkQ1uT%2BngFWYlQ6kfqrWsVEmQZRaF229iFcTCFItkQvp%2BQut%2Fr9TDyQW6Tay3gpGPaTrtdHJgXaQvtGHDt39CBdsgwjL1z2qS2zYO%2FhRWmkiTacO6VpUX3NHHb0BUai3lXOS8SbIZLGW1ZCDklmSPRHckV6EQhD0kMFnrPzBsh9QDBA0KIKmvUPp9LoXG82B3moppBn5aqmtocGP4eLt2bAJhoIGQ8Uzrum0IKG%2FXQyN%2BI%2FqNKIf2w%2Fn8xgWixYhYBiOG1CIyBWtzd2Ktc4FAPMyoR3VHgT3NCuAq31FUM8AEJ9qtFd0d%2FaoDQBaGM%2Bl2DVa9%2Fy7iV7shM18jcI9ZWKrBVkPDWWJCJ9J8TIzCchLLABjqkAdh%2BX122zt9PFF4RQEUrSF%2FDh%2Bb%2FDyy4JL3h9JZRZB%2Fb%2BboLgmukEUyU3zBpje%2BXF1qjc0RvZIH2VmJ0yzWoMhJ9LwC4DRrWb%2BIIlN8sRiPF2vEfy2Sq2Da7mPdbP0IeeyWRxsX%2BJRg0eONOLgW7cq6q3PndS2WOVkdftF2I%2BCB%2Bniz6ClyIi0NnyD7XYrGlglsSrkhlOqtsE2zwokrrHOzZXR1k&X-Amz-Signature=25885cb9ef5487d5efa1636f56a9718c02de4a3cf67d3998e787c41f32cda5b3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA3SGPIM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3FaD2SnL%2FhkdGpv2E2xU%2BxhrGS%2BfglX1lzf3crY4FjQIhANt3IgR0JFronLs2n5DMjSSeaAKETaY0kX37XpWGtdoIKv8DCEAQABoMNjM3NDIzMTgzODA1Igz6L5JexCSagOpEgVEq3AOhBI05bbhtoRyZ4jRaAvc%2F4ZU4TM8GO78ED645cquT%2FJqjzFbxI%2FcDCHRvbj7NT2wSqb%2BdVuUQS67pskxjBlY0%2F9b5VvXGPUd3ezUBqfBLrT3PI%2BOaUWcsPXUxtNSPGtiaP8A65GTgYmT8YX%2Bd0byPsWOyvCLjwr5kjOicIHq23SRFclIa9RHZWieJiju5g1gsg7KrYVG1CVTchC3yZ0M57ViGOAqQPF8CRT7K7rfWQPQeuqOwDUjJpyS%2FLjAppp4x%2BWjeicvhqcBv2jCqBEQkQ1uT%2BngFWYlQ6kfqrWsVEmQZRaF229iFcTCFItkQvp%2BQut%2Fr9TDyQW6Tay3gpGPaTrtdHJgXaQvtGHDt39CBdsgwjL1z2qS2zYO%2FhRWmkiTacO6VpUX3NHHb0BUai3lXOS8SbIZLGW1ZCDklmSPRHckV6EQhD0kMFnrPzBsh9QDBA0KIKmvUPp9LoXG82B3moppBn5aqmtocGP4eLt2bAJhoIGQ8Uzrum0IKG%2FXQyN%2BI%2FqNKIf2w%2Fn8xgWixYhYBiOG1CIyBWtzd2Ktc4FAPMyoR3VHgT3NCuAq31FUM8AEJ9qtFd0d%2FaoDQBaGM%2Bl2DVa9%2Fy7iV7shM18jcI9ZWKrBVkPDWWJCJ9J8TIzCchLLABjqkAdh%2BX122zt9PFF4RQEUrSF%2FDh%2Bb%2FDyy4JL3h9JZRZB%2Fb%2BboLgmukEUyU3zBpje%2BXF1qjc0RvZIH2VmJ0yzWoMhJ9LwC4DRrWb%2BIIlN8sRiPF2vEfy2Sq2Da7mPdbP0IeeyWRxsX%2BJRg0eONOLgW7cq6q3PndS2WOVkdftF2I%2BCB%2Bniz6ClyIi0NnyD7XYrGlglsSrkhlOqtsE2zwokrrHOzZXR1k&X-Amz-Signature=7a19db4c7d0a1ea009160d8d1594b8934e7059db42e5ee22fa458d60edca0d70&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA3SGPIM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3FaD2SnL%2FhkdGpv2E2xU%2BxhrGS%2BfglX1lzf3crY4FjQIhANt3IgR0JFronLs2n5DMjSSeaAKETaY0kX37XpWGtdoIKv8DCEAQABoMNjM3NDIzMTgzODA1Igz6L5JexCSagOpEgVEq3AOhBI05bbhtoRyZ4jRaAvc%2F4ZU4TM8GO78ED645cquT%2FJqjzFbxI%2FcDCHRvbj7NT2wSqb%2BdVuUQS67pskxjBlY0%2F9b5VvXGPUd3ezUBqfBLrT3PI%2BOaUWcsPXUxtNSPGtiaP8A65GTgYmT8YX%2Bd0byPsWOyvCLjwr5kjOicIHq23SRFclIa9RHZWieJiju5g1gsg7KrYVG1CVTchC3yZ0M57ViGOAqQPF8CRT7K7rfWQPQeuqOwDUjJpyS%2FLjAppp4x%2BWjeicvhqcBv2jCqBEQkQ1uT%2BngFWYlQ6kfqrWsVEmQZRaF229iFcTCFItkQvp%2BQut%2Fr9TDyQW6Tay3gpGPaTrtdHJgXaQvtGHDt39CBdsgwjL1z2qS2zYO%2FhRWmkiTacO6VpUX3NHHb0BUai3lXOS8SbIZLGW1ZCDklmSPRHckV6EQhD0kMFnrPzBsh9QDBA0KIKmvUPp9LoXG82B3moppBn5aqmtocGP4eLt2bAJhoIGQ8Uzrum0IKG%2FXQyN%2BI%2FqNKIf2w%2Fn8xgWixYhYBiOG1CIyBWtzd2Ktc4FAPMyoR3VHgT3NCuAq31FUM8AEJ9qtFd0d%2FaoDQBaGM%2Bl2DVa9%2Fy7iV7shM18jcI9ZWKrBVkPDWWJCJ9J8TIzCchLLABjqkAdh%2BX122zt9PFF4RQEUrSF%2FDh%2Bb%2FDyy4JL3h9JZRZB%2Fb%2BboLgmukEUyU3zBpje%2BXF1qjc0RvZIH2VmJ0yzWoMhJ9LwC4DRrWb%2BIIlN8sRiPF2vEfy2Sq2Da7mPdbP0IeeyWRxsX%2BJRg0eONOLgW7cq6q3PndS2WOVkdftF2I%2BCB%2Bniz6ClyIi0NnyD7XYrGlglsSrkhlOqtsE2zwokrrHOzZXR1k&X-Amz-Signature=95daa4adabe4e202bf61e0c0bef118de0de4985c048cf1782b0278e2c9ac1cc7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA3SGPIM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3FaD2SnL%2FhkdGpv2E2xU%2BxhrGS%2BfglX1lzf3crY4FjQIhANt3IgR0JFronLs2n5DMjSSeaAKETaY0kX37XpWGtdoIKv8DCEAQABoMNjM3NDIzMTgzODA1Igz6L5JexCSagOpEgVEq3AOhBI05bbhtoRyZ4jRaAvc%2F4ZU4TM8GO78ED645cquT%2FJqjzFbxI%2FcDCHRvbj7NT2wSqb%2BdVuUQS67pskxjBlY0%2F9b5VvXGPUd3ezUBqfBLrT3PI%2BOaUWcsPXUxtNSPGtiaP8A65GTgYmT8YX%2Bd0byPsWOyvCLjwr5kjOicIHq23SRFclIa9RHZWieJiju5g1gsg7KrYVG1CVTchC3yZ0M57ViGOAqQPF8CRT7K7rfWQPQeuqOwDUjJpyS%2FLjAppp4x%2BWjeicvhqcBv2jCqBEQkQ1uT%2BngFWYlQ6kfqrWsVEmQZRaF229iFcTCFItkQvp%2BQut%2Fr9TDyQW6Tay3gpGPaTrtdHJgXaQvtGHDt39CBdsgwjL1z2qS2zYO%2FhRWmkiTacO6VpUX3NHHb0BUai3lXOS8SbIZLGW1ZCDklmSPRHckV6EQhD0kMFnrPzBsh9QDBA0KIKmvUPp9LoXG82B3moppBn5aqmtocGP4eLt2bAJhoIGQ8Uzrum0IKG%2FXQyN%2BI%2FqNKIf2w%2Fn8xgWixYhYBiOG1CIyBWtzd2Ktc4FAPMyoR3VHgT3NCuAq31FUM8AEJ9qtFd0d%2FaoDQBaGM%2Bl2DVa9%2Fy7iV7shM18jcI9ZWKrBVkPDWWJCJ9J8TIzCchLLABjqkAdh%2BX122zt9PFF4RQEUrSF%2FDh%2Bb%2FDyy4JL3h9JZRZB%2Fb%2BboLgmukEUyU3zBpje%2BXF1qjc0RvZIH2VmJ0yzWoMhJ9LwC4DRrWb%2BIIlN8sRiPF2vEfy2Sq2Da7mPdbP0IeeyWRxsX%2BJRg0eONOLgW7cq6q3PndS2WOVkdftF2I%2BCB%2Bniz6ClyIi0NnyD7XYrGlglsSrkhlOqtsE2zwokrrHOzZXR1k&X-Amz-Signature=e1b638a719d520b09a539de9fffcce14b4fecd49d7539b0d9c31c12e3a173130&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
