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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPNG2PW%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqV0EOWun8eBwr77J48i6%2BkSaVWKt%2Bm3wC%2Fy94B0HTLAiEArEUa3lU7pSEm%2B8WkDr8zkmaFbi%2FCWI%2FzBUw%2Bz4Ok0n8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDM2UAigbgEHOGdzykyrcA7UFefnUldU2Yi8T%2BjN3vljA0LS4xIfLEDfAVJQ3HxV6jMdI6%2FIRYmCXHEcRCr6eCSZ4kZ13qOjnnAi0GJS5zBJoW8bNTmn4iqFqjRlAC06ERzsQfP0t1GBBnZzQfYrErw5VA1y1yS3NiPxkK4S1Nxeftzb06A%2BdsL7Niwo%2BqnsGcIgQhgiEgrVD8sFIfk9Ss3wbFrmFFqYfKLexZ%2FVDrzT6J%2FdqQNG4pGRUWFNlYiFavowSOPoEnHBIScy9SG00uHqdmIIWmhsYErPTt%2FosOQMyGdZ2ajbwHxwROXSu2jJVM3MTve44ql65sifnSwr2bXEvn7C7nQEhNg%2FlP%2FjlNclVfhozfrI5aEeKFbPZQIvDyYRuqSJByPMgvkeEp1E1tavDcXYQidEAiwnCyVaNKOAT03CHeZ9spMCmeKgCgsDxtubBxf0YKYOuHuDjgukD1lN4mnjld0JdBnD8t%2BMfwl7hR9tyWILFwrhvROlECf0bfhme9tLIeo1XVCtC2efmowlZUll0F0NxgAmaoPB8QD6T61v8o82uB1pv5pUuqRHNCexCvrJF27zzHRBFUWcZbmeSAgGgnoNMGPxVAVcOBtK9dhycGgWNpSFoyhKeSryGTSyQAw85cMNynp1kMOOzrsAGOqUBr89HB%2FzN1x8ARKqmjsK30iIQvS4KjKG3tEmurXO8vbei7o%2BRtW5KUVMFDi%2B5d6K96gmxNdkRAc1jtRfDlyICNtjBmZCCoQFa15k%2Ba2kSgjx9Rh%2FhX390bL5oLDV%2BEQs35bOWC%2Fqw7VCGxgut8du5df3TvcrIOwdFnh56DGWb5XmnUUMNxwq%2BJd1Tv2i1ivvF8mjgEvE%2F5zwrzTn0p807yMj%2BS%2FkT&X-Amz-Signature=1a56f08bc5ddd1a6e77480612c7be78e9bfed3c2957dac0b92cc486f3fcb4acd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPNG2PW%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqV0EOWun8eBwr77J48i6%2BkSaVWKt%2Bm3wC%2Fy94B0HTLAiEArEUa3lU7pSEm%2B8WkDr8zkmaFbi%2FCWI%2FzBUw%2Bz4Ok0n8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDM2UAigbgEHOGdzykyrcA7UFefnUldU2Yi8T%2BjN3vljA0LS4xIfLEDfAVJQ3HxV6jMdI6%2FIRYmCXHEcRCr6eCSZ4kZ13qOjnnAi0GJS5zBJoW8bNTmn4iqFqjRlAC06ERzsQfP0t1GBBnZzQfYrErw5VA1y1yS3NiPxkK4S1Nxeftzb06A%2BdsL7Niwo%2BqnsGcIgQhgiEgrVD8sFIfk9Ss3wbFrmFFqYfKLexZ%2FVDrzT6J%2FdqQNG4pGRUWFNlYiFavowSOPoEnHBIScy9SG00uHqdmIIWmhsYErPTt%2FosOQMyGdZ2ajbwHxwROXSu2jJVM3MTve44ql65sifnSwr2bXEvn7C7nQEhNg%2FlP%2FjlNclVfhozfrI5aEeKFbPZQIvDyYRuqSJByPMgvkeEp1E1tavDcXYQidEAiwnCyVaNKOAT03CHeZ9spMCmeKgCgsDxtubBxf0YKYOuHuDjgukD1lN4mnjld0JdBnD8t%2BMfwl7hR9tyWILFwrhvROlECf0bfhme9tLIeo1XVCtC2efmowlZUll0F0NxgAmaoPB8QD6T61v8o82uB1pv5pUuqRHNCexCvrJF27zzHRBFUWcZbmeSAgGgnoNMGPxVAVcOBtK9dhycGgWNpSFoyhKeSryGTSyQAw85cMNynp1kMOOzrsAGOqUBr89HB%2FzN1x8ARKqmjsK30iIQvS4KjKG3tEmurXO8vbei7o%2BRtW5KUVMFDi%2B5d6K96gmxNdkRAc1jtRfDlyICNtjBmZCCoQFa15k%2Ba2kSgjx9Rh%2FhX390bL5oLDV%2BEQs35bOWC%2Fqw7VCGxgut8du5df3TvcrIOwdFnh56DGWb5XmnUUMNxwq%2BJd1Tv2i1ivvF8mjgEvE%2F5zwrzTn0p807yMj%2BS%2FkT&X-Amz-Signature=b49409657ed46e11cbb5b5408fc144951fe55ce9cc4c6a502e195a044ab9f79a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPNG2PW%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqV0EOWun8eBwr77J48i6%2BkSaVWKt%2Bm3wC%2Fy94B0HTLAiEArEUa3lU7pSEm%2B8WkDr8zkmaFbi%2FCWI%2FzBUw%2Bz4Ok0n8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDM2UAigbgEHOGdzykyrcA7UFefnUldU2Yi8T%2BjN3vljA0LS4xIfLEDfAVJQ3HxV6jMdI6%2FIRYmCXHEcRCr6eCSZ4kZ13qOjnnAi0GJS5zBJoW8bNTmn4iqFqjRlAC06ERzsQfP0t1GBBnZzQfYrErw5VA1y1yS3NiPxkK4S1Nxeftzb06A%2BdsL7Niwo%2BqnsGcIgQhgiEgrVD8sFIfk9Ss3wbFrmFFqYfKLexZ%2FVDrzT6J%2FdqQNG4pGRUWFNlYiFavowSOPoEnHBIScy9SG00uHqdmIIWmhsYErPTt%2FosOQMyGdZ2ajbwHxwROXSu2jJVM3MTve44ql65sifnSwr2bXEvn7C7nQEhNg%2FlP%2FjlNclVfhozfrI5aEeKFbPZQIvDyYRuqSJByPMgvkeEp1E1tavDcXYQidEAiwnCyVaNKOAT03CHeZ9spMCmeKgCgsDxtubBxf0YKYOuHuDjgukD1lN4mnjld0JdBnD8t%2BMfwl7hR9tyWILFwrhvROlECf0bfhme9tLIeo1XVCtC2efmowlZUll0F0NxgAmaoPB8QD6T61v8o82uB1pv5pUuqRHNCexCvrJF27zzHRBFUWcZbmeSAgGgnoNMGPxVAVcOBtK9dhycGgWNpSFoyhKeSryGTSyQAw85cMNynp1kMOOzrsAGOqUBr89HB%2FzN1x8ARKqmjsK30iIQvS4KjKG3tEmurXO8vbei7o%2BRtW5KUVMFDi%2B5d6K96gmxNdkRAc1jtRfDlyICNtjBmZCCoQFa15k%2Ba2kSgjx9Rh%2FhX390bL5oLDV%2BEQs35bOWC%2Fqw7VCGxgut8du5df3TvcrIOwdFnh56DGWb5XmnUUMNxwq%2BJd1Tv2i1ivvF8mjgEvE%2F5zwrzTn0p807yMj%2BS%2FkT&X-Amz-Signature=5ae09599389eb8e741e0dcff024a715834e761b662a149f137ee0aa3065a3fe8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPNG2PW%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqV0EOWun8eBwr77J48i6%2BkSaVWKt%2Bm3wC%2Fy94B0HTLAiEArEUa3lU7pSEm%2B8WkDr8zkmaFbi%2FCWI%2FzBUw%2Bz4Ok0n8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDM2UAigbgEHOGdzykyrcA7UFefnUldU2Yi8T%2BjN3vljA0LS4xIfLEDfAVJQ3HxV6jMdI6%2FIRYmCXHEcRCr6eCSZ4kZ13qOjnnAi0GJS5zBJoW8bNTmn4iqFqjRlAC06ERzsQfP0t1GBBnZzQfYrErw5VA1y1yS3NiPxkK4S1Nxeftzb06A%2BdsL7Niwo%2BqnsGcIgQhgiEgrVD8sFIfk9Ss3wbFrmFFqYfKLexZ%2FVDrzT6J%2FdqQNG4pGRUWFNlYiFavowSOPoEnHBIScy9SG00uHqdmIIWmhsYErPTt%2FosOQMyGdZ2ajbwHxwROXSu2jJVM3MTve44ql65sifnSwr2bXEvn7C7nQEhNg%2FlP%2FjlNclVfhozfrI5aEeKFbPZQIvDyYRuqSJByPMgvkeEp1E1tavDcXYQidEAiwnCyVaNKOAT03CHeZ9spMCmeKgCgsDxtubBxf0YKYOuHuDjgukD1lN4mnjld0JdBnD8t%2BMfwl7hR9tyWILFwrhvROlECf0bfhme9tLIeo1XVCtC2efmowlZUll0F0NxgAmaoPB8QD6T61v8o82uB1pv5pUuqRHNCexCvrJF27zzHRBFUWcZbmeSAgGgnoNMGPxVAVcOBtK9dhycGgWNpSFoyhKeSryGTSyQAw85cMNynp1kMOOzrsAGOqUBr89HB%2FzN1x8ARKqmjsK30iIQvS4KjKG3tEmurXO8vbei7o%2BRtW5KUVMFDi%2B5d6K96gmxNdkRAc1jtRfDlyICNtjBmZCCoQFa15k%2Ba2kSgjx9Rh%2FhX390bL5oLDV%2BEQs35bOWC%2Fqw7VCGxgut8du5df3TvcrIOwdFnh56DGWb5XmnUUMNxwq%2BJd1Tv2i1ivvF8mjgEvE%2F5zwrzTn0p807yMj%2BS%2FkT&X-Amz-Signature=14b8ff334582f52ff9b50bb5014e1fa878125215ca081588e2bbaa994bbc8949&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPNG2PW%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqV0EOWun8eBwr77J48i6%2BkSaVWKt%2Bm3wC%2Fy94B0HTLAiEArEUa3lU7pSEm%2B8WkDr8zkmaFbi%2FCWI%2FzBUw%2Bz4Ok0n8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDM2UAigbgEHOGdzykyrcA7UFefnUldU2Yi8T%2BjN3vljA0LS4xIfLEDfAVJQ3HxV6jMdI6%2FIRYmCXHEcRCr6eCSZ4kZ13qOjnnAi0GJS5zBJoW8bNTmn4iqFqjRlAC06ERzsQfP0t1GBBnZzQfYrErw5VA1y1yS3NiPxkK4S1Nxeftzb06A%2BdsL7Niwo%2BqnsGcIgQhgiEgrVD8sFIfk9Ss3wbFrmFFqYfKLexZ%2FVDrzT6J%2FdqQNG4pGRUWFNlYiFavowSOPoEnHBIScy9SG00uHqdmIIWmhsYErPTt%2FosOQMyGdZ2ajbwHxwROXSu2jJVM3MTve44ql65sifnSwr2bXEvn7C7nQEhNg%2FlP%2FjlNclVfhozfrI5aEeKFbPZQIvDyYRuqSJByPMgvkeEp1E1tavDcXYQidEAiwnCyVaNKOAT03CHeZ9spMCmeKgCgsDxtubBxf0YKYOuHuDjgukD1lN4mnjld0JdBnD8t%2BMfwl7hR9tyWILFwrhvROlECf0bfhme9tLIeo1XVCtC2efmowlZUll0F0NxgAmaoPB8QD6T61v8o82uB1pv5pUuqRHNCexCvrJF27zzHRBFUWcZbmeSAgGgnoNMGPxVAVcOBtK9dhycGgWNpSFoyhKeSryGTSyQAw85cMNynp1kMOOzrsAGOqUBr89HB%2FzN1x8ARKqmjsK30iIQvS4KjKG3tEmurXO8vbei7o%2BRtW5KUVMFDi%2B5d6K96gmxNdkRAc1jtRfDlyICNtjBmZCCoQFa15k%2Ba2kSgjx9Rh%2FhX390bL5oLDV%2BEQs35bOWC%2Fqw7VCGxgut8du5df3TvcrIOwdFnh56DGWb5XmnUUMNxwq%2BJd1Tv2i1ivvF8mjgEvE%2F5zwrzTn0p807yMj%2BS%2FkT&X-Amz-Signature=820e04b89bd928c421c33ee88568689ec8cd8a762cb5391e317280d44db3dea7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
