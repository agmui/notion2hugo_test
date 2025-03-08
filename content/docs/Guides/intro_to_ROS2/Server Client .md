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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMXZRDTD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBJzf9tZ6NifQQhQXCSMODbb2scD93IiBMls9bRQnOGgAiAgDzxGinuiC4EA3rwK4gTlMBbsDm3FNhjooE4GcXG8nir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMOs9aMAZynsB59sMKKtwDLdMEbYabf31I491jmw1tlNqjNAOFmwDbaWJSIqTDKAixytYNbTbgt%2F9dCZE29ct2ATsDb5nn2cjGDk46twjGA7ct1sWS9WHp28GQFlIEDf3s5gssZPehs0qaK6WJrQnfAUIspyZ2Y%2BpKDUyLR1mv%2BeKNpfp%2FRIVeQRx2Z1Flz6cW9LrXXnE36KvwPqhuJEphRooyr7HvjZJzPSJx8pAYcNtViW4duwmgu7A7cSCiPee70nNsuElU39EGkYrZwvcCDihg%2FkiLsZKH7rkdRDzq3kzA5acuzla9%2FRm9qwyskk2eW50Jx2HvOT80uy4kFGdeah29Uf5%2BX038IpDfsQjCTz6e99GkWZHiFEZdr7WzUImTU08obHb19fFxNrRb9aDRpRjBA%2Fb4JSGDN1GjTBLz4n34t%2F%2F%2Bi%2B8thU78xgelt89ZyDax5lV41B7mWXr2U5ehqRBfIN7SeaiNjt%2BHJScn%2B7EH8sblAxrQrmn6zOoomIVOt5yKu5hcxJsS19x%2BQvYT6JgBtMZk8TShsYu0qegwDfdqy6QUaQEZ%2FlwCnqM2oqwsABsRqCat4Axkx9auoIHk4h1R29IHx39RLxz9NbDFxwbKj949VM8Bd7BKuHjSrD%2FpuCtOHWBaSseElQYwpf6tvgY6pgERBQ30cj3siJ2lfGyKGq%2Fr8%2FCQfM1WhBx6wx%2Bbo2wTBjLdNHq3IXD8IZNR9rptO6o2dP63pRQLpIOn1DYLtMac1ZcOie3MpXO7doI%2FHCWnxq2PkCEnmCRPtdrdb2OMD2mnDGyPJdRYjcFPjKMCqrC1GeZn5ZlDSUw5ZlQa6eGVsubDXF74Xm2zRH7h5kGFT3pJ1UuFExrRXJ5Ax93Uo3rhLukFhvxJ&X-Amz-Signature=65f484be2f2e61ac9bc500a395b1a93dda98f1a623c76c35fb737e6fb2dad4eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMXZRDTD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBJzf9tZ6NifQQhQXCSMODbb2scD93IiBMls9bRQnOGgAiAgDzxGinuiC4EA3rwK4gTlMBbsDm3FNhjooE4GcXG8nir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMOs9aMAZynsB59sMKKtwDLdMEbYabf31I491jmw1tlNqjNAOFmwDbaWJSIqTDKAixytYNbTbgt%2F9dCZE29ct2ATsDb5nn2cjGDk46twjGA7ct1sWS9WHp28GQFlIEDf3s5gssZPehs0qaK6WJrQnfAUIspyZ2Y%2BpKDUyLR1mv%2BeKNpfp%2FRIVeQRx2Z1Flz6cW9LrXXnE36KvwPqhuJEphRooyr7HvjZJzPSJx8pAYcNtViW4duwmgu7A7cSCiPee70nNsuElU39EGkYrZwvcCDihg%2FkiLsZKH7rkdRDzq3kzA5acuzla9%2FRm9qwyskk2eW50Jx2HvOT80uy4kFGdeah29Uf5%2BX038IpDfsQjCTz6e99GkWZHiFEZdr7WzUImTU08obHb19fFxNrRb9aDRpRjBA%2Fb4JSGDN1GjTBLz4n34t%2F%2F%2Bi%2B8thU78xgelt89ZyDax5lV41B7mWXr2U5ehqRBfIN7SeaiNjt%2BHJScn%2B7EH8sblAxrQrmn6zOoomIVOt5yKu5hcxJsS19x%2BQvYT6JgBtMZk8TShsYu0qegwDfdqy6QUaQEZ%2FlwCnqM2oqwsABsRqCat4Axkx9auoIHk4h1R29IHx39RLxz9NbDFxwbKj949VM8Bd7BKuHjSrD%2FpuCtOHWBaSseElQYwpf6tvgY6pgERBQ30cj3siJ2lfGyKGq%2Fr8%2FCQfM1WhBx6wx%2Bbo2wTBjLdNHq3IXD8IZNR9rptO6o2dP63pRQLpIOn1DYLtMac1ZcOie3MpXO7doI%2FHCWnxq2PkCEnmCRPtdrdb2OMD2mnDGyPJdRYjcFPjKMCqrC1GeZn5ZlDSUw5ZlQa6eGVsubDXF74Xm2zRH7h5kGFT3pJ1UuFExrRXJ5Ax93Uo3rhLukFhvxJ&X-Amz-Signature=b5c79eae68b1a900f7b67739aa887cc194b612902c29ef9e7caa025b4e9cd135&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMXZRDTD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBJzf9tZ6NifQQhQXCSMODbb2scD93IiBMls9bRQnOGgAiAgDzxGinuiC4EA3rwK4gTlMBbsDm3FNhjooE4GcXG8nir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMOs9aMAZynsB59sMKKtwDLdMEbYabf31I491jmw1tlNqjNAOFmwDbaWJSIqTDKAixytYNbTbgt%2F9dCZE29ct2ATsDb5nn2cjGDk46twjGA7ct1sWS9WHp28GQFlIEDf3s5gssZPehs0qaK6WJrQnfAUIspyZ2Y%2BpKDUyLR1mv%2BeKNpfp%2FRIVeQRx2Z1Flz6cW9LrXXnE36KvwPqhuJEphRooyr7HvjZJzPSJx8pAYcNtViW4duwmgu7A7cSCiPee70nNsuElU39EGkYrZwvcCDihg%2FkiLsZKH7rkdRDzq3kzA5acuzla9%2FRm9qwyskk2eW50Jx2HvOT80uy4kFGdeah29Uf5%2BX038IpDfsQjCTz6e99GkWZHiFEZdr7WzUImTU08obHb19fFxNrRb9aDRpRjBA%2Fb4JSGDN1GjTBLz4n34t%2F%2F%2Bi%2B8thU78xgelt89ZyDax5lV41B7mWXr2U5ehqRBfIN7SeaiNjt%2BHJScn%2B7EH8sblAxrQrmn6zOoomIVOt5yKu5hcxJsS19x%2BQvYT6JgBtMZk8TShsYu0qegwDfdqy6QUaQEZ%2FlwCnqM2oqwsABsRqCat4Axkx9auoIHk4h1R29IHx39RLxz9NbDFxwbKj949VM8Bd7BKuHjSrD%2FpuCtOHWBaSseElQYwpf6tvgY6pgERBQ30cj3siJ2lfGyKGq%2Fr8%2FCQfM1WhBx6wx%2Bbo2wTBjLdNHq3IXD8IZNR9rptO6o2dP63pRQLpIOn1DYLtMac1ZcOie3MpXO7doI%2FHCWnxq2PkCEnmCRPtdrdb2OMD2mnDGyPJdRYjcFPjKMCqrC1GeZn5ZlDSUw5ZlQa6eGVsubDXF74Xm2zRH7h5kGFT3pJ1UuFExrRXJ5Ax93Uo3rhLukFhvxJ&X-Amz-Signature=0d4c2915476e230bd0faed1091160531c6cfd485585f6ad25611d84a2d39344c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMXZRDTD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBJzf9tZ6NifQQhQXCSMODbb2scD93IiBMls9bRQnOGgAiAgDzxGinuiC4EA3rwK4gTlMBbsDm3FNhjooE4GcXG8nir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMOs9aMAZynsB59sMKKtwDLdMEbYabf31I491jmw1tlNqjNAOFmwDbaWJSIqTDKAixytYNbTbgt%2F9dCZE29ct2ATsDb5nn2cjGDk46twjGA7ct1sWS9WHp28GQFlIEDf3s5gssZPehs0qaK6WJrQnfAUIspyZ2Y%2BpKDUyLR1mv%2BeKNpfp%2FRIVeQRx2Z1Flz6cW9LrXXnE36KvwPqhuJEphRooyr7HvjZJzPSJx8pAYcNtViW4duwmgu7A7cSCiPee70nNsuElU39EGkYrZwvcCDihg%2FkiLsZKH7rkdRDzq3kzA5acuzla9%2FRm9qwyskk2eW50Jx2HvOT80uy4kFGdeah29Uf5%2BX038IpDfsQjCTz6e99GkWZHiFEZdr7WzUImTU08obHb19fFxNrRb9aDRpRjBA%2Fb4JSGDN1GjTBLz4n34t%2F%2F%2Bi%2B8thU78xgelt89ZyDax5lV41B7mWXr2U5ehqRBfIN7SeaiNjt%2BHJScn%2B7EH8sblAxrQrmn6zOoomIVOt5yKu5hcxJsS19x%2BQvYT6JgBtMZk8TShsYu0qegwDfdqy6QUaQEZ%2FlwCnqM2oqwsABsRqCat4Axkx9auoIHk4h1R29IHx39RLxz9NbDFxwbKj949VM8Bd7BKuHjSrD%2FpuCtOHWBaSseElQYwpf6tvgY6pgERBQ30cj3siJ2lfGyKGq%2Fr8%2FCQfM1WhBx6wx%2Bbo2wTBjLdNHq3IXD8IZNR9rptO6o2dP63pRQLpIOn1DYLtMac1ZcOie3MpXO7doI%2FHCWnxq2PkCEnmCRPtdrdb2OMD2mnDGyPJdRYjcFPjKMCqrC1GeZn5ZlDSUw5ZlQa6eGVsubDXF74Xm2zRH7h5kGFT3pJ1UuFExrRXJ5Ax93Uo3rhLukFhvxJ&X-Amz-Signature=bb51827ca47a660b0c33a87ae328b213d9de35da2a136adace672ed31dbdb21c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMXZRDTD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBJzf9tZ6NifQQhQXCSMODbb2scD93IiBMls9bRQnOGgAiAgDzxGinuiC4EA3rwK4gTlMBbsDm3FNhjooE4GcXG8nir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMOs9aMAZynsB59sMKKtwDLdMEbYabf31I491jmw1tlNqjNAOFmwDbaWJSIqTDKAixytYNbTbgt%2F9dCZE29ct2ATsDb5nn2cjGDk46twjGA7ct1sWS9WHp28GQFlIEDf3s5gssZPehs0qaK6WJrQnfAUIspyZ2Y%2BpKDUyLR1mv%2BeKNpfp%2FRIVeQRx2Z1Flz6cW9LrXXnE36KvwPqhuJEphRooyr7HvjZJzPSJx8pAYcNtViW4duwmgu7A7cSCiPee70nNsuElU39EGkYrZwvcCDihg%2FkiLsZKH7rkdRDzq3kzA5acuzla9%2FRm9qwyskk2eW50Jx2HvOT80uy4kFGdeah29Uf5%2BX038IpDfsQjCTz6e99GkWZHiFEZdr7WzUImTU08obHb19fFxNrRb9aDRpRjBA%2Fb4JSGDN1GjTBLz4n34t%2F%2F%2Bi%2B8thU78xgelt89ZyDax5lV41B7mWXr2U5ehqRBfIN7SeaiNjt%2BHJScn%2B7EH8sblAxrQrmn6zOoomIVOt5yKu5hcxJsS19x%2BQvYT6JgBtMZk8TShsYu0qegwDfdqy6QUaQEZ%2FlwCnqM2oqwsABsRqCat4Axkx9auoIHk4h1R29IHx39RLxz9NbDFxwbKj949VM8Bd7BKuHjSrD%2FpuCtOHWBaSseElQYwpf6tvgY6pgERBQ30cj3siJ2lfGyKGq%2Fr8%2FCQfM1WhBx6wx%2Bbo2wTBjLdNHq3IXD8IZNR9rptO6o2dP63pRQLpIOn1DYLtMac1ZcOie3MpXO7doI%2FHCWnxq2PkCEnmCRPtdrdb2OMD2mnDGyPJdRYjcFPjKMCqrC1GeZn5ZlDSUw5ZlQa6eGVsubDXF74Xm2zRH7h5kGFT3pJ1UuFExrRXJ5Ax93Uo3rhLukFhvxJ&X-Amz-Signature=5253a16532a716079e07477c8cd85c9d54424654a63cd421ac393f585bbadbde&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
