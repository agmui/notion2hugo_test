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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2ZIK7W%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCD8AtBWmL5kTXcCQw1N3Rk6Nx%2B4JBpCqIyrAdRmIUY8QIhAJYdZDO8AcfDqipYLukmW%2BQYWvkxucuRtzLmPlmDSinKKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgdZQuSMn35%2FKMvR8q3APstnKM2rF0whcaiJVbWTU5TorDN2LKftxcb2yhVJSjlCWZYWJmM2wQmtWpoIunkYaZ8v7Y6jpk%2F1Y4S8OfnkT8dth%2B2sY4o6RkIoHskza0iBpZPMzzLwO4k8Q0yMDcGv9QjRBGSfmtk%2Fbh2pFq3TvZ7W1rT9waMMnIwaBuW3bqKzDg%2FaP0FZ3E%2FXdhnNaZgmeuLAFeZ1pAa6m2u0L1rfgmnstKoSfmd4kgfAx5vg%2BQnLBflMEqRPvIWVqky2zRQCEBtFF5ADkNdabDCqfvV7r7yWAThflTr3Adf7Pa3Wa7ZcpAJsRo8LGtLvarSd3c6di2i8yxJ%2FyQEwpKjEFKDEfTJVNsy54vctlRACF3dU4ZQ3CSz4zzvw8G%2BCQ5bFd6LRW3r0d29gNhjvD53bPRDtMzDj5LbXK%2BP1hMEtmxF2TqaPXr6mFBfC%2BA9wtxwp0JuGHctOjXr00NDyVgnsxTbIpaD5BorbRUndIud7hRxgB7wLeXtLj%2BJoMmGT2o1JgeqsgaqSQPO2NgXOTogZf6IHYwxxFcGVkrWkHOgn5RFrj7RW%2B1MZ7crJs5ktJeGhmrGhrHJWNbwcL5V2%2BvYZPtcePtCiJk6EvtsMyotoTMmVUmhK0rDx4CuWx%2FsZjAJDDWkqXABjqkAbazmDM80kjdViy6bwlt78kmmWbFb8Q250wEYVCkSLyOJEs1V2tuKOgFdSsM0xmrktMe9wfwZUp4h6tQCymGFkQB7cqStdBkaZKFzWJBYlNs9stLmCp%2BU7XrY%2FHUDD2WAqXsrrfL27uiI7MYMWuXKzdPfhfN9hTc4jcFEHTw1bXDb6Yde9welqe4f5YVluA1B81zUafX%2FYFrqjZx4CNJI8gHNDeg&X-Amz-Signature=d6fad72df12eb60dd2545c35fc0ca16cc8dd8e2c3527a95868002c43fff8da4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2ZIK7W%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCD8AtBWmL5kTXcCQw1N3Rk6Nx%2B4JBpCqIyrAdRmIUY8QIhAJYdZDO8AcfDqipYLukmW%2BQYWvkxucuRtzLmPlmDSinKKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgdZQuSMn35%2FKMvR8q3APstnKM2rF0whcaiJVbWTU5TorDN2LKftxcb2yhVJSjlCWZYWJmM2wQmtWpoIunkYaZ8v7Y6jpk%2F1Y4S8OfnkT8dth%2B2sY4o6RkIoHskza0iBpZPMzzLwO4k8Q0yMDcGv9QjRBGSfmtk%2Fbh2pFq3TvZ7W1rT9waMMnIwaBuW3bqKzDg%2FaP0FZ3E%2FXdhnNaZgmeuLAFeZ1pAa6m2u0L1rfgmnstKoSfmd4kgfAx5vg%2BQnLBflMEqRPvIWVqky2zRQCEBtFF5ADkNdabDCqfvV7r7yWAThflTr3Adf7Pa3Wa7ZcpAJsRo8LGtLvarSd3c6di2i8yxJ%2FyQEwpKjEFKDEfTJVNsy54vctlRACF3dU4ZQ3CSz4zzvw8G%2BCQ5bFd6LRW3r0d29gNhjvD53bPRDtMzDj5LbXK%2BP1hMEtmxF2TqaPXr6mFBfC%2BA9wtxwp0JuGHctOjXr00NDyVgnsxTbIpaD5BorbRUndIud7hRxgB7wLeXtLj%2BJoMmGT2o1JgeqsgaqSQPO2NgXOTogZf6IHYwxxFcGVkrWkHOgn5RFrj7RW%2B1MZ7crJs5ktJeGhmrGhrHJWNbwcL5V2%2BvYZPtcePtCiJk6EvtsMyotoTMmVUmhK0rDx4CuWx%2FsZjAJDDWkqXABjqkAbazmDM80kjdViy6bwlt78kmmWbFb8Q250wEYVCkSLyOJEs1V2tuKOgFdSsM0xmrktMe9wfwZUp4h6tQCymGFkQB7cqStdBkaZKFzWJBYlNs9stLmCp%2BU7XrY%2FHUDD2WAqXsrrfL27uiI7MYMWuXKzdPfhfN9hTc4jcFEHTw1bXDb6Yde9welqe4f5YVluA1B81zUafX%2FYFrqjZx4CNJI8gHNDeg&X-Amz-Signature=a599754717300178b62279be509de15dc497445de234e04c64ce31d0c30d774e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2ZIK7W%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCD8AtBWmL5kTXcCQw1N3Rk6Nx%2B4JBpCqIyrAdRmIUY8QIhAJYdZDO8AcfDqipYLukmW%2BQYWvkxucuRtzLmPlmDSinKKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgdZQuSMn35%2FKMvR8q3APstnKM2rF0whcaiJVbWTU5TorDN2LKftxcb2yhVJSjlCWZYWJmM2wQmtWpoIunkYaZ8v7Y6jpk%2F1Y4S8OfnkT8dth%2B2sY4o6RkIoHskza0iBpZPMzzLwO4k8Q0yMDcGv9QjRBGSfmtk%2Fbh2pFq3TvZ7W1rT9waMMnIwaBuW3bqKzDg%2FaP0FZ3E%2FXdhnNaZgmeuLAFeZ1pAa6m2u0L1rfgmnstKoSfmd4kgfAx5vg%2BQnLBflMEqRPvIWVqky2zRQCEBtFF5ADkNdabDCqfvV7r7yWAThflTr3Adf7Pa3Wa7ZcpAJsRo8LGtLvarSd3c6di2i8yxJ%2FyQEwpKjEFKDEfTJVNsy54vctlRACF3dU4ZQ3CSz4zzvw8G%2BCQ5bFd6LRW3r0d29gNhjvD53bPRDtMzDj5LbXK%2BP1hMEtmxF2TqaPXr6mFBfC%2BA9wtxwp0JuGHctOjXr00NDyVgnsxTbIpaD5BorbRUndIud7hRxgB7wLeXtLj%2BJoMmGT2o1JgeqsgaqSQPO2NgXOTogZf6IHYwxxFcGVkrWkHOgn5RFrj7RW%2B1MZ7crJs5ktJeGhmrGhrHJWNbwcL5V2%2BvYZPtcePtCiJk6EvtsMyotoTMmVUmhK0rDx4CuWx%2FsZjAJDDWkqXABjqkAbazmDM80kjdViy6bwlt78kmmWbFb8Q250wEYVCkSLyOJEs1V2tuKOgFdSsM0xmrktMe9wfwZUp4h6tQCymGFkQB7cqStdBkaZKFzWJBYlNs9stLmCp%2BU7XrY%2FHUDD2WAqXsrrfL27uiI7MYMWuXKzdPfhfN9hTc4jcFEHTw1bXDb6Yde9welqe4f5YVluA1B81zUafX%2FYFrqjZx4CNJI8gHNDeg&X-Amz-Signature=90510481fe5eff9e4182480c1ef5031bf5aa85d0aa927b6a5fb19e15fc6be70f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2ZIK7W%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCD8AtBWmL5kTXcCQw1N3Rk6Nx%2B4JBpCqIyrAdRmIUY8QIhAJYdZDO8AcfDqipYLukmW%2BQYWvkxucuRtzLmPlmDSinKKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgdZQuSMn35%2FKMvR8q3APstnKM2rF0whcaiJVbWTU5TorDN2LKftxcb2yhVJSjlCWZYWJmM2wQmtWpoIunkYaZ8v7Y6jpk%2F1Y4S8OfnkT8dth%2B2sY4o6RkIoHskza0iBpZPMzzLwO4k8Q0yMDcGv9QjRBGSfmtk%2Fbh2pFq3TvZ7W1rT9waMMnIwaBuW3bqKzDg%2FaP0FZ3E%2FXdhnNaZgmeuLAFeZ1pAa6m2u0L1rfgmnstKoSfmd4kgfAx5vg%2BQnLBflMEqRPvIWVqky2zRQCEBtFF5ADkNdabDCqfvV7r7yWAThflTr3Adf7Pa3Wa7ZcpAJsRo8LGtLvarSd3c6di2i8yxJ%2FyQEwpKjEFKDEfTJVNsy54vctlRACF3dU4ZQ3CSz4zzvw8G%2BCQ5bFd6LRW3r0d29gNhjvD53bPRDtMzDj5LbXK%2BP1hMEtmxF2TqaPXr6mFBfC%2BA9wtxwp0JuGHctOjXr00NDyVgnsxTbIpaD5BorbRUndIud7hRxgB7wLeXtLj%2BJoMmGT2o1JgeqsgaqSQPO2NgXOTogZf6IHYwxxFcGVkrWkHOgn5RFrj7RW%2B1MZ7crJs5ktJeGhmrGhrHJWNbwcL5V2%2BvYZPtcePtCiJk6EvtsMyotoTMmVUmhK0rDx4CuWx%2FsZjAJDDWkqXABjqkAbazmDM80kjdViy6bwlt78kmmWbFb8Q250wEYVCkSLyOJEs1V2tuKOgFdSsM0xmrktMe9wfwZUp4h6tQCymGFkQB7cqStdBkaZKFzWJBYlNs9stLmCp%2BU7XrY%2FHUDD2WAqXsrrfL27uiI7MYMWuXKzdPfhfN9hTc4jcFEHTw1bXDb6Yde9welqe4f5YVluA1B81zUafX%2FYFrqjZx4CNJI8gHNDeg&X-Amz-Signature=d2ab7fa67299828398f499621b7230d186d0888d115b6675d50a06f521d920c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2ZIK7W%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCD8AtBWmL5kTXcCQw1N3Rk6Nx%2B4JBpCqIyrAdRmIUY8QIhAJYdZDO8AcfDqipYLukmW%2BQYWvkxucuRtzLmPlmDSinKKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgdZQuSMn35%2FKMvR8q3APstnKM2rF0whcaiJVbWTU5TorDN2LKftxcb2yhVJSjlCWZYWJmM2wQmtWpoIunkYaZ8v7Y6jpk%2F1Y4S8OfnkT8dth%2B2sY4o6RkIoHskza0iBpZPMzzLwO4k8Q0yMDcGv9QjRBGSfmtk%2Fbh2pFq3TvZ7W1rT9waMMnIwaBuW3bqKzDg%2FaP0FZ3E%2FXdhnNaZgmeuLAFeZ1pAa6m2u0L1rfgmnstKoSfmd4kgfAx5vg%2BQnLBflMEqRPvIWVqky2zRQCEBtFF5ADkNdabDCqfvV7r7yWAThflTr3Adf7Pa3Wa7ZcpAJsRo8LGtLvarSd3c6di2i8yxJ%2FyQEwpKjEFKDEfTJVNsy54vctlRACF3dU4ZQ3CSz4zzvw8G%2BCQ5bFd6LRW3r0d29gNhjvD53bPRDtMzDj5LbXK%2BP1hMEtmxF2TqaPXr6mFBfC%2BA9wtxwp0JuGHctOjXr00NDyVgnsxTbIpaD5BorbRUndIud7hRxgB7wLeXtLj%2BJoMmGT2o1JgeqsgaqSQPO2NgXOTogZf6IHYwxxFcGVkrWkHOgn5RFrj7RW%2B1MZ7crJs5ktJeGhmrGhrHJWNbwcL5V2%2BvYZPtcePtCiJk6EvtsMyotoTMmVUmhK0rDx4CuWx%2FsZjAJDDWkqXABjqkAbazmDM80kjdViy6bwlt78kmmWbFb8Q250wEYVCkSLyOJEs1V2tuKOgFdSsM0xmrktMe9wfwZUp4h6tQCymGFkQB7cqStdBkaZKFzWJBYlNs9stLmCp%2BU7XrY%2FHUDD2WAqXsrrfL27uiI7MYMWuXKzdPfhfN9hTc4jcFEHTw1bXDb6Yde9welqe4f5YVluA1B81zUafX%2FYFrqjZx4CNJI8gHNDeg&X-Amz-Signature=e3f19454a04ede89d26d748bf10fcdb8f11254efd2ea899e15cfb1a9599c7a14&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
