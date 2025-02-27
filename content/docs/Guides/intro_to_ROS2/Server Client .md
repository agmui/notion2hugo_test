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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUZVSLHZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH5gSdexKgkiht7q4PdFp1w1gKEmjOUahN3G5uGSW9S%2FAiEAhNifo5%2FxbWqZ%2BkN4ubJ18oWijj8n783644GU6mUgqkIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEgQfvmnPl5THlNNYSrcAyrLqkhMI5Z7UmknlpO6CGnhpMlPA6vvToZXAzdwZSxbx6YtL4VOVH64%2B5%2FRK4eKFpmlBsrhwLLaU%2F0AZmm07AlI41RYxB2nXe9tuNKj40aQPodirpElmvpjXk%2FPrA9oDZaoXIlZcvFHCzHk1dvz4vuQBPbcJiytxQESqffvEm%2FIGA7N%2F2vgaipLnSK6CehsRUrY3fsgR8M27qt%2BYi47zA%2F8Z781GKS9F16P%2BQt%2BPqDuOG2akKkp8Qny5GaZz77aBATCgHVQe9fphGmU1Uv2dbVZrZi4W9kKv3OqhZOKRKjzzl4IlIUsHr8IQpdxK%2BXr74nLGIePSey6v7AlWowi4iTpmVKgmukFhOHlrASO9H58loneAQFpR8TJ703R5PYcGdoec6LOevYZ4pmzHOd0vGqYjq6esnQcm6NlFqpmAm720I56HSnq%2B1YibUGi5ZK8HxAS5nbWrQkTWJUnFya7JJ0UfBiu%2Fhb48iepV1NdAtGZHfgjjkHw41KATMXRPTYUyferNrIjZvhWUxNrlrfSOqXFnqe4bnSlbU1h4uqx4qmuK8KAUkeaHLB3IMeDD86K2Yn7V3HZgjwTPWH7ep56%2FRlsys1dKh3VXLuWbN%2B%2FrfYK2EuoDqxRobOxo689MOHQ%2F70GOqUBD1BU4%2FKGN9XCLbg0pcYLiNEeQryEeRmz4PCZCT5juYeOo6OokUMPKM1H3pDVUx0nQYPDuTM3H00vGjfyWnGkwAfPZjvPDS3h%2F%2Fd3vB6Wm7iMvCsWdcFHNElfXJrMUcAY%2Bh9Jwqb%2BElYmP1oJFYSP0Qmw0AW77%2Fnc5ZXQuvV%2B43tG3fmhb49edShRwyx2LubNU7pTAGly8P9S7DatX9af89IwGri%2F&X-Amz-Signature=0d1a46dd3666f235765b9220aa3aecf3666ef8ae2fae20d0220b800d62cdfa5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUZVSLHZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH5gSdexKgkiht7q4PdFp1w1gKEmjOUahN3G5uGSW9S%2FAiEAhNifo5%2FxbWqZ%2BkN4ubJ18oWijj8n783644GU6mUgqkIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEgQfvmnPl5THlNNYSrcAyrLqkhMI5Z7UmknlpO6CGnhpMlPA6vvToZXAzdwZSxbx6YtL4VOVH64%2B5%2FRK4eKFpmlBsrhwLLaU%2F0AZmm07AlI41RYxB2nXe9tuNKj40aQPodirpElmvpjXk%2FPrA9oDZaoXIlZcvFHCzHk1dvz4vuQBPbcJiytxQESqffvEm%2FIGA7N%2F2vgaipLnSK6CehsRUrY3fsgR8M27qt%2BYi47zA%2F8Z781GKS9F16P%2BQt%2BPqDuOG2akKkp8Qny5GaZz77aBATCgHVQe9fphGmU1Uv2dbVZrZi4W9kKv3OqhZOKRKjzzl4IlIUsHr8IQpdxK%2BXr74nLGIePSey6v7AlWowi4iTpmVKgmukFhOHlrASO9H58loneAQFpR8TJ703R5PYcGdoec6LOevYZ4pmzHOd0vGqYjq6esnQcm6NlFqpmAm720I56HSnq%2B1YibUGi5ZK8HxAS5nbWrQkTWJUnFya7JJ0UfBiu%2Fhb48iepV1NdAtGZHfgjjkHw41KATMXRPTYUyferNrIjZvhWUxNrlrfSOqXFnqe4bnSlbU1h4uqx4qmuK8KAUkeaHLB3IMeDD86K2Yn7V3HZgjwTPWH7ep56%2FRlsys1dKh3VXLuWbN%2B%2FrfYK2EuoDqxRobOxo689MOHQ%2F70GOqUBD1BU4%2FKGN9XCLbg0pcYLiNEeQryEeRmz4PCZCT5juYeOo6OokUMPKM1H3pDVUx0nQYPDuTM3H00vGjfyWnGkwAfPZjvPDS3h%2F%2Fd3vB6Wm7iMvCsWdcFHNElfXJrMUcAY%2Bh9Jwqb%2BElYmP1oJFYSP0Qmw0AW77%2Fnc5ZXQuvV%2B43tG3fmhb49edShRwyx2LubNU7pTAGly8P9S7DatX9af89IwGri%2F&X-Amz-Signature=9fd3977374fb40657fcaa16c929b9f38f5d8f2ce417d627e17c15146ecb7e124&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUZVSLHZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH5gSdexKgkiht7q4PdFp1w1gKEmjOUahN3G5uGSW9S%2FAiEAhNifo5%2FxbWqZ%2BkN4ubJ18oWijj8n783644GU6mUgqkIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEgQfvmnPl5THlNNYSrcAyrLqkhMI5Z7UmknlpO6CGnhpMlPA6vvToZXAzdwZSxbx6YtL4VOVH64%2B5%2FRK4eKFpmlBsrhwLLaU%2F0AZmm07AlI41RYxB2nXe9tuNKj40aQPodirpElmvpjXk%2FPrA9oDZaoXIlZcvFHCzHk1dvz4vuQBPbcJiytxQESqffvEm%2FIGA7N%2F2vgaipLnSK6CehsRUrY3fsgR8M27qt%2BYi47zA%2F8Z781GKS9F16P%2BQt%2BPqDuOG2akKkp8Qny5GaZz77aBATCgHVQe9fphGmU1Uv2dbVZrZi4W9kKv3OqhZOKRKjzzl4IlIUsHr8IQpdxK%2BXr74nLGIePSey6v7AlWowi4iTpmVKgmukFhOHlrASO9H58loneAQFpR8TJ703R5PYcGdoec6LOevYZ4pmzHOd0vGqYjq6esnQcm6NlFqpmAm720I56HSnq%2B1YibUGi5ZK8HxAS5nbWrQkTWJUnFya7JJ0UfBiu%2Fhb48iepV1NdAtGZHfgjjkHw41KATMXRPTYUyferNrIjZvhWUxNrlrfSOqXFnqe4bnSlbU1h4uqx4qmuK8KAUkeaHLB3IMeDD86K2Yn7V3HZgjwTPWH7ep56%2FRlsys1dKh3VXLuWbN%2B%2FrfYK2EuoDqxRobOxo689MOHQ%2F70GOqUBD1BU4%2FKGN9XCLbg0pcYLiNEeQryEeRmz4PCZCT5juYeOo6OokUMPKM1H3pDVUx0nQYPDuTM3H00vGjfyWnGkwAfPZjvPDS3h%2F%2Fd3vB6Wm7iMvCsWdcFHNElfXJrMUcAY%2Bh9Jwqb%2BElYmP1oJFYSP0Qmw0AW77%2Fnc5ZXQuvV%2B43tG3fmhb49edShRwyx2LubNU7pTAGly8P9S7DatX9af89IwGri%2F&X-Amz-Signature=fc88a4078949797d936f5bb3ab639071df3a1ab796096e5eb38acdf5dcfc4c04&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUZVSLHZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH5gSdexKgkiht7q4PdFp1w1gKEmjOUahN3G5uGSW9S%2FAiEAhNifo5%2FxbWqZ%2BkN4ubJ18oWijj8n783644GU6mUgqkIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEgQfvmnPl5THlNNYSrcAyrLqkhMI5Z7UmknlpO6CGnhpMlPA6vvToZXAzdwZSxbx6YtL4VOVH64%2B5%2FRK4eKFpmlBsrhwLLaU%2F0AZmm07AlI41RYxB2nXe9tuNKj40aQPodirpElmvpjXk%2FPrA9oDZaoXIlZcvFHCzHk1dvz4vuQBPbcJiytxQESqffvEm%2FIGA7N%2F2vgaipLnSK6CehsRUrY3fsgR8M27qt%2BYi47zA%2F8Z781GKS9F16P%2BQt%2BPqDuOG2akKkp8Qny5GaZz77aBATCgHVQe9fphGmU1Uv2dbVZrZi4W9kKv3OqhZOKRKjzzl4IlIUsHr8IQpdxK%2BXr74nLGIePSey6v7AlWowi4iTpmVKgmukFhOHlrASO9H58loneAQFpR8TJ703R5PYcGdoec6LOevYZ4pmzHOd0vGqYjq6esnQcm6NlFqpmAm720I56HSnq%2B1YibUGi5ZK8HxAS5nbWrQkTWJUnFya7JJ0UfBiu%2Fhb48iepV1NdAtGZHfgjjkHw41KATMXRPTYUyferNrIjZvhWUxNrlrfSOqXFnqe4bnSlbU1h4uqx4qmuK8KAUkeaHLB3IMeDD86K2Yn7V3HZgjwTPWH7ep56%2FRlsys1dKh3VXLuWbN%2B%2FrfYK2EuoDqxRobOxo689MOHQ%2F70GOqUBD1BU4%2FKGN9XCLbg0pcYLiNEeQryEeRmz4PCZCT5juYeOo6OokUMPKM1H3pDVUx0nQYPDuTM3H00vGjfyWnGkwAfPZjvPDS3h%2F%2Fd3vB6Wm7iMvCsWdcFHNElfXJrMUcAY%2Bh9Jwqb%2BElYmP1oJFYSP0Qmw0AW77%2Fnc5ZXQuvV%2B43tG3fmhb49edShRwyx2LubNU7pTAGly8P9S7DatX9af89IwGri%2F&X-Amz-Signature=708acff20836664c395d06e76b81d4b1a93c939290609e36c6af98cbbabe9765&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUZVSLHZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH5gSdexKgkiht7q4PdFp1w1gKEmjOUahN3G5uGSW9S%2FAiEAhNifo5%2FxbWqZ%2BkN4ubJ18oWijj8n783644GU6mUgqkIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEgQfvmnPl5THlNNYSrcAyrLqkhMI5Z7UmknlpO6CGnhpMlPA6vvToZXAzdwZSxbx6YtL4VOVH64%2B5%2FRK4eKFpmlBsrhwLLaU%2F0AZmm07AlI41RYxB2nXe9tuNKj40aQPodirpElmvpjXk%2FPrA9oDZaoXIlZcvFHCzHk1dvz4vuQBPbcJiytxQESqffvEm%2FIGA7N%2F2vgaipLnSK6CehsRUrY3fsgR8M27qt%2BYi47zA%2F8Z781GKS9F16P%2BQt%2BPqDuOG2akKkp8Qny5GaZz77aBATCgHVQe9fphGmU1Uv2dbVZrZi4W9kKv3OqhZOKRKjzzl4IlIUsHr8IQpdxK%2BXr74nLGIePSey6v7AlWowi4iTpmVKgmukFhOHlrASO9H58loneAQFpR8TJ703R5PYcGdoec6LOevYZ4pmzHOd0vGqYjq6esnQcm6NlFqpmAm720I56HSnq%2B1YibUGi5ZK8HxAS5nbWrQkTWJUnFya7JJ0UfBiu%2Fhb48iepV1NdAtGZHfgjjkHw41KATMXRPTYUyferNrIjZvhWUxNrlrfSOqXFnqe4bnSlbU1h4uqx4qmuK8KAUkeaHLB3IMeDD86K2Yn7V3HZgjwTPWH7ep56%2FRlsys1dKh3VXLuWbN%2B%2FrfYK2EuoDqxRobOxo689MOHQ%2F70GOqUBD1BU4%2FKGN9XCLbg0pcYLiNEeQryEeRmz4PCZCT5juYeOo6OokUMPKM1H3pDVUx0nQYPDuTM3H00vGjfyWnGkwAfPZjvPDS3h%2F%2Fd3vB6Wm7iMvCsWdcFHNElfXJrMUcAY%2Bh9Jwqb%2BElYmP1oJFYSP0Qmw0AW77%2Fnc5ZXQuvV%2B43tG3fmhb49edShRwyx2LubNU7pTAGly8P9S7DatX9af89IwGri%2F&X-Amz-Signature=315d92add45f6e866cce1f746dcd753d0c164763a3bccb1dc418cd4150f0e280&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
