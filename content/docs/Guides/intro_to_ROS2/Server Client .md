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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72P5VAP%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3iPA2aoXMS48CGetcDjOCuD97rju92ywiV%2Bdk%2BsbVKQIhAIkYReWlylSUsVaz4iAe1kLubhDgLGHpVIowcagVsA%2FRKv8DCD4QABoMNjM3NDIzMTgzODA1IgyLcSdS63FHx2O%2Beecq3AOoRwK6xRzzwNm3RMHX4KzJXchG1SX7UTd%2BqHJlwhgXUoXBob2gnwLdAJvBTaz%2FN5v%2FP6nju9eZD2v1Bv8tdxxqOyWt4k4OX0GC3507Uc1U2tFkyCkzFTcpS4UYh0JpUgwABY4gMISv51uXaAmSEr8zILvoqatIYAQ46Rntw84YFyG0x8VSxYXNbGnAS3D%2FFQ4%2BVEOkYoNwRKCgN2BZ%2FT9kzoeKDEnhHOaOMeguPOe%2FeFwzJKBlpDAqtdNQM3yBPuenrVVnanXDGeTXilW5RCVV6r8AcAWouerF%2FytVh83EMonpcIF72WtMj6ERK0g%2BfQ%2Bejfy6QguyuMYdaIM8QYuytTr%2B6En4H4%2BZCkQ0yT7kieQ%2FBFOQg9iNRHBNXjvoKqeFSOOty8U2vffRcMRqFOAdQEzspLvgj%2Fa0xVYxQERdxOFH1JW5eIcIDMAcGofTb0LvpJRHYk%2Fz6cRp4jKBLCQ8GVwUn52IF7WZHQAbcM%2B95b39PQdvuycnCFazqNmiPrbTpqvi%2Fc00uzMKWJ59oID9h76ajnYQEUmIXlAI4Er8Nnhx2moLFqVUvYG2DgNWwCVz2%2FvtFqIjmMlGkWa3zdgj7JeaSKmUR5TQpTZp2%2FEiUOvq2Tw2jY6z%2FKagvjCX296%2BBjqkAYDkaY0Nt8d8V6co0xgvCcbS86wHB62e018qlCLJZC2TomU%2FBdvvq7OLcre4fa%2FF9gUK0ceHFBlZcPh0Q%2FiYTNmmAv95%2BzTanl0znLf49DZl4vHebPLoyf7QDM3fgQR6nJXSZS479uWGZ9iZz%2FuJCqeFz56m%2FqGOTZbdb2B2cnymz76tlXtK2z%2BQDjG9HebnPJLorVFUYgWVqXDlHvR5b4p9mv0X&X-Amz-Signature=eb0d00bc7adba9bcbcc4b6e23986d52c42575f6444de0d07071645e276653ade&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72P5VAP%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3iPA2aoXMS48CGetcDjOCuD97rju92ywiV%2Bdk%2BsbVKQIhAIkYReWlylSUsVaz4iAe1kLubhDgLGHpVIowcagVsA%2FRKv8DCD4QABoMNjM3NDIzMTgzODA1IgyLcSdS63FHx2O%2Beecq3AOoRwK6xRzzwNm3RMHX4KzJXchG1SX7UTd%2BqHJlwhgXUoXBob2gnwLdAJvBTaz%2FN5v%2FP6nju9eZD2v1Bv8tdxxqOyWt4k4OX0GC3507Uc1U2tFkyCkzFTcpS4UYh0JpUgwABY4gMISv51uXaAmSEr8zILvoqatIYAQ46Rntw84YFyG0x8VSxYXNbGnAS3D%2FFQ4%2BVEOkYoNwRKCgN2BZ%2FT9kzoeKDEnhHOaOMeguPOe%2FeFwzJKBlpDAqtdNQM3yBPuenrVVnanXDGeTXilW5RCVV6r8AcAWouerF%2FytVh83EMonpcIF72WtMj6ERK0g%2BfQ%2Bejfy6QguyuMYdaIM8QYuytTr%2B6En4H4%2BZCkQ0yT7kieQ%2FBFOQg9iNRHBNXjvoKqeFSOOty8U2vffRcMRqFOAdQEzspLvgj%2Fa0xVYxQERdxOFH1JW5eIcIDMAcGofTb0LvpJRHYk%2Fz6cRp4jKBLCQ8GVwUn52IF7WZHQAbcM%2B95b39PQdvuycnCFazqNmiPrbTpqvi%2Fc00uzMKWJ59oID9h76ajnYQEUmIXlAI4Er8Nnhx2moLFqVUvYG2DgNWwCVz2%2FvtFqIjmMlGkWa3zdgj7JeaSKmUR5TQpTZp2%2FEiUOvq2Tw2jY6z%2FKagvjCX296%2BBjqkAYDkaY0Nt8d8V6co0xgvCcbS86wHB62e018qlCLJZC2TomU%2FBdvvq7OLcre4fa%2FF9gUK0ceHFBlZcPh0Q%2FiYTNmmAv95%2BzTanl0znLf49DZl4vHebPLoyf7QDM3fgQR6nJXSZS479uWGZ9iZz%2FuJCqeFz56m%2FqGOTZbdb2B2cnymz76tlXtK2z%2BQDjG9HebnPJLorVFUYgWVqXDlHvR5b4p9mv0X&X-Amz-Signature=349214f4d9d379bf67299511b7dc36fbb2600c48f464c9ec27b4e07c66ecc4fd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72P5VAP%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3iPA2aoXMS48CGetcDjOCuD97rju92ywiV%2Bdk%2BsbVKQIhAIkYReWlylSUsVaz4iAe1kLubhDgLGHpVIowcagVsA%2FRKv8DCD4QABoMNjM3NDIzMTgzODA1IgyLcSdS63FHx2O%2Beecq3AOoRwK6xRzzwNm3RMHX4KzJXchG1SX7UTd%2BqHJlwhgXUoXBob2gnwLdAJvBTaz%2FN5v%2FP6nju9eZD2v1Bv8tdxxqOyWt4k4OX0GC3507Uc1U2tFkyCkzFTcpS4UYh0JpUgwABY4gMISv51uXaAmSEr8zILvoqatIYAQ46Rntw84YFyG0x8VSxYXNbGnAS3D%2FFQ4%2BVEOkYoNwRKCgN2BZ%2FT9kzoeKDEnhHOaOMeguPOe%2FeFwzJKBlpDAqtdNQM3yBPuenrVVnanXDGeTXilW5RCVV6r8AcAWouerF%2FytVh83EMonpcIF72WtMj6ERK0g%2BfQ%2Bejfy6QguyuMYdaIM8QYuytTr%2B6En4H4%2BZCkQ0yT7kieQ%2FBFOQg9iNRHBNXjvoKqeFSOOty8U2vffRcMRqFOAdQEzspLvgj%2Fa0xVYxQERdxOFH1JW5eIcIDMAcGofTb0LvpJRHYk%2Fz6cRp4jKBLCQ8GVwUn52IF7WZHQAbcM%2B95b39PQdvuycnCFazqNmiPrbTpqvi%2Fc00uzMKWJ59oID9h76ajnYQEUmIXlAI4Er8Nnhx2moLFqVUvYG2DgNWwCVz2%2FvtFqIjmMlGkWa3zdgj7JeaSKmUR5TQpTZp2%2FEiUOvq2Tw2jY6z%2FKagvjCX296%2BBjqkAYDkaY0Nt8d8V6co0xgvCcbS86wHB62e018qlCLJZC2TomU%2FBdvvq7OLcre4fa%2FF9gUK0ceHFBlZcPh0Q%2FiYTNmmAv95%2BzTanl0znLf49DZl4vHebPLoyf7QDM3fgQR6nJXSZS479uWGZ9iZz%2FuJCqeFz56m%2FqGOTZbdb2B2cnymz76tlXtK2z%2BQDjG9HebnPJLorVFUYgWVqXDlHvR5b4p9mv0X&X-Amz-Signature=331d2546abe6ede1f39f0beec358408c7299a95ac33dcac0413c7a54dbe8f3e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72P5VAP%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3iPA2aoXMS48CGetcDjOCuD97rju92ywiV%2Bdk%2BsbVKQIhAIkYReWlylSUsVaz4iAe1kLubhDgLGHpVIowcagVsA%2FRKv8DCD4QABoMNjM3NDIzMTgzODA1IgyLcSdS63FHx2O%2Beecq3AOoRwK6xRzzwNm3RMHX4KzJXchG1SX7UTd%2BqHJlwhgXUoXBob2gnwLdAJvBTaz%2FN5v%2FP6nju9eZD2v1Bv8tdxxqOyWt4k4OX0GC3507Uc1U2tFkyCkzFTcpS4UYh0JpUgwABY4gMISv51uXaAmSEr8zILvoqatIYAQ46Rntw84YFyG0x8VSxYXNbGnAS3D%2FFQ4%2BVEOkYoNwRKCgN2BZ%2FT9kzoeKDEnhHOaOMeguPOe%2FeFwzJKBlpDAqtdNQM3yBPuenrVVnanXDGeTXilW5RCVV6r8AcAWouerF%2FytVh83EMonpcIF72WtMj6ERK0g%2BfQ%2Bejfy6QguyuMYdaIM8QYuytTr%2B6En4H4%2BZCkQ0yT7kieQ%2FBFOQg9iNRHBNXjvoKqeFSOOty8U2vffRcMRqFOAdQEzspLvgj%2Fa0xVYxQERdxOFH1JW5eIcIDMAcGofTb0LvpJRHYk%2Fz6cRp4jKBLCQ8GVwUn52IF7WZHQAbcM%2B95b39PQdvuycnCFazqNmiPrbTpqvi%2Fc00uzMKWJ59oID9h76ajnYQEUmIXlAI4Er8Nnhx2moLFqVUvYG2DgNWwCVz2%2FvtFqIjmMlGkWa3zdgj7JeaSKmUR5TQpTZp2%2FEiUOvq2Tw2jY6z%2FKagvjCX296%2BBjqkAYDkaY0Nt8d8V6co0xgvCcbS86wHB62e018qlCLJZC2TomU%2FBdvvq7OLcre4fa%2FF9gUK0ceHFBlZcPh0Q%2FiYTNmmAv95%2BzTanl0znLf49DZl4vHebPLoyf7QDM3fgQR6nJXSZS479uWGZ9iZz%2FuJCqeFz56m%2FqGOTZbdb2B2cnymz76tlXtK2z%2BQDjG9HebnPJLorVFUYgWVqXDlHvR5b4p9mv0X&X-Amz-Signature=c5a326beab8a966bd3bcef3ec74e1fa36d0d48d00709cf14868540ca3f5643d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72P5VAP%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3iPA2aoXMS48CGetcDjOCuD97rju92ywiV%2Bdk%2BsbVKQIhAIkYReWlylSUsVaz4iAe1kLubhDgLGHpVIowcagVsA%2FRKv8DCD4QABoMNjM3NDIzMTgzODA1IgyLcSdS63FHx2O%2Beecq3AOoRwK6xRzzwNm3RMHX4KzJXchG1SX7UTd%2BqHJlwhgXUoXBob2gnwLdAJvBTaz%2FN5v%2FP6nju9eZD2v1Bv8tdxxqOyWt4k4OX0GC3507Uc1U2tFkyCkzFTcpS4UYh0JpUgwABY4gMISv51uXaAmSEr8zILvoqatIYAQ46Rntw84YFyG0x8VSxYXNbGnAS3D%2FFQ4%2BVEOkYoNwRKCgN2BZ%2FT9kzoeKDEnhHOaOMeguPOe%2FeFwzJKBlpDAqtdNQM3yBPuenrVVnanXDGeTXilW5RCVV6r8AcAWouerF%2FytVh83EMonpcIF72WtMj6ERK0g%2BfQ%2Bejfy6QguyuMYdaIM8QYuytTr%2B6En4H4%2BZCkQ0yT7kieQ%2FBFOQg9iNRHBNXjvoKqeFSOOty8U2vffRcMRqFOAdQEzspLvgj%2Fa0xVYxQERdxOFH1JW5eIcIDMAcGofTb0LvpJRHYk%2Fz6cRp4jKBLCQ8GVwUn52IF7WZHQAbcM%2B95b39PQdvuycnCFazqNmiPrbTpqvi%2Fc00uzMKWJ59oID9h76ajnYQEUmIXlAI4Er8Nnhx2moLFqVUvYG2DgNWwCVz2%2FvtFqIjmMlGkWa3zdgj7JeaSKmUR5TQpTZp2%2FEiUOvq2Tw2jY6z%2FKagvjCX296%2BBjqkAYDkaY0Nt8d8V6co0xgvCcbS86wHB62e018qlCLJZC2TomU%2FBdvvq7OLcre4fa%2FF9gUK0ceHFBlZcPh0Q%2FiYTNmmAv95%2BzTanl0znLf49DZl4vHebPLoyf7QDM3fgQR6nJXSZS479uWGZ9iZz%2FuJCqeFz56m%2FqGOTZbdb2B2cnymz76tlXtK2z%2BQDjG9HebnPJLorVFUYgWVqXDlHvR5b4p9mv0X&X-Amz-Signature=e286ef19a2d4c81b8e03def8b12a17253816097ebddbc9e95e132b06b016b214&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
