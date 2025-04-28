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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4JJBIE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCithDXWBNHP0nxxyyEaoJS8yBXwoqWfIv8hRT35ARxeAIgSq0JJGRNz7T2hiLeeKwRhNJoWdTkOKBsk61FhGdYBYwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBaQaIrfbIGQIR5GZyrcA3NuuHxkDiy4fC2VWHWJlRqAcryMim45mtqMyWxePKgswEGGCXkK%2BHfsrwGA0kit3AI2uQcNUntTVeedCgZohPfsPBCenfsbaFo59gY9G6P1qjYeKMgFNM2qN4LAGysOVNVRq2DY3PxOXOVORCS3o3sQK71P9Gd7wTfvOeYsk70P%2FozqsSUfh4%2FmVSHK6cQgJCNT2%2FCh1O%2FQKDX0WBWnRQZ5uVhQtg5ySbqncHJ4GRN2CWHrjqzkpufmGOa1KS9kkuwu31o%2Bew%2FbtsBNYSU0jcPNyTWFdkNz88b1JXIOR7cvP%2Fq%2BVk7guF8bRYf9FnNQyZQO9SZnATBPEooCloR7pCG1HPYx7SIcGMjC4MVEw1ehpXvbLO1uSa%2BjoVUVOSBU9y9ouDg8U%2FbL4ole082fJ3WlB1RLlgM45GmIy%2BIYK91nGFRYPIMt9XYkDoTYZwNYtKIg6rx91r%2FqzaoLTYP7yrbHw0yGUBmGzkI6uUXCuLz9PfBsJoPtl%2Bek2hcur7QLneCGoB8rnCcVUy6u29HD6Lx6nE0KyB%2B3%2FVVPc1022yMH9e78Up0Rle1hzv3xyzJMToJWDqvHRta3VsdyQvPURJSrYVNRsP2aPKFGSD3VPRGjS68cZP%2BVC%2FpFRhK1MMbnvMAGOqUBRaM9DtrH%2B4%2B6StzWKrO9ppA30KzRm%2FHgD1QmA5jWnCW1y%2Bfy9J55uBJ0Ak2bVdNec4g0Cgfu3CEMhg5I8EyjwXXoflwiO3Kf%2FBoUNyBJ3ls0s3LzKaId%2Fe%2FOHP6YJVJT7RJAwoqt1DAbTPDtoqHUs%2B33xadhvRRdhHOhuQoCcGHDmPNvGWJcmDi%2BIZGkHTsaxCGEKM6DHGzqC%2B8UZnVQ3hUyc%2FDa&X-Amz-Signature=5abd2575021a78ae605c140766afe3b7abafee9d1d763ecfb2cf94295198cbaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4JJBIE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCithDXWBNHP0nxxyyEaoJS8yBXwoqWfIv8hRT35ARxeAIgSq0JJGRNz7T2hiLeeKwRhNJoWdTkOKBsk61FhGdYBYwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBaQaIrfbIGQIR5GZyrcA3NuuHxkDiy4fC2VWHWJlRqAcryMim45mtqMyWxePKgswEGGCXkK%2BHfsrwGA0kit3AI2uQcNUntTVeedCgZohPfsPBCenfsbaFo59gY9G6P1qjYeKMgFNM2qN4LAGysOVNVRq2DY3PxOXOVORCS3o3sQK71P9Gd7wTfvOeYsk70P%2FozqsSUfh4%2FmVSHK6cQgJCNT2%2FCh1O%2FQKDX0WBWnRQZ5uVhQtg5ySbqncHJ4GRN2CWHrjqzkpufmGOa1KS9kkuwu31o%2Bew%2FbtsBNYSU0jcPNyTWFdkNz88b1JXIOR7cvP%2Fq%2BVk7guF8bRYf9FnNQyZQO9SZnATBPEooCloR7pCG1HPYx7SIcGMjC4MVEw1ehpXvbLO1uSa%2BjoVUVOSBU9y9ouDg8U%2FbL4ole082fJ3WlB1RLlgM45GmIy%2BIYK91nGFRYPIMt9XYkDoTYZwNYtKIg6rx91r%2FqzaoLTYP7yrbHw0yGUBmGzkI6uUXCuLz9PfBsJoPtl%2Bek2hcur7QLneCGoB8rnCcVUy6u29HD6Lx6nE0KyB%2B3%2FVVPc1022yMH9e78Up0Rle1hzv3xyzJMToJWDqvHRta3VsdyQvPURJSrYVNRsP2aPKFGSD3VPRGjS68cZP%2BVC%2FpFRhK1MMbnvMAGOqUBRaM9DtrH%2B4%2B6StzWKrO9ppA30KzRm%2FHgD1QmA5jWnCW1y%2Bfy9J55uBJ0Ak2bVdNec4g0Cgfu3CEMhg5I8EyjwXXoflwiO3Kf%2FBoUNyBJ3ls0s3LzKaId%2Fe%2FOHP6YJVJT7RJAwoqt1DAbTPDtoqHUs%2B33xadhvRRdhHOhuQoCcGHDmPNvGWJcmDi%2BIZGkHTsaxCGEKM6DHGzqC%2B8UZnVQ3hUyc%2FDa&X-Amz-Signature=094c0e211ef596dc6ef389f8d405752dd7a523dd2336f6663129d33cc86d3f46&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4JJBIE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCithDXWBNHP0nxxyyEaoJS8yBXwoqWfIv8hRT35ARxeAIgSq0JJGRNz7T2hiLeeKwRhNJoWdTkOKBsk61FhGdYBYwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBaQaIrfbIGQIR5GZyrcA3NuuHxkDiy4fC2VWHWJlRqAcryMim45mtqMyWxePKgswEGGCXkK%2BHfsrwGA0kit3AI2uQcNUntTVeedCgZohPfsPBCenfsbaFo59gY9G6P1qjYeKMgFNM2qN4LAGysOVNVRq2DY3PxOXOVORCS3o3sQK71P9Gd7wTfvOeYsk70P%2FozqsSUfh4%2FmVSHK6cQgJCNT2%2FCh1O%2FQKDX0WBWnRQZ5uVhQtg5ySbqncHJ4GRN2CWHrjqzkpufmGOa1KS9kkuwu31o%2Bew%2FbtsBNYSU0jcPNyTWFdkNz88b1JXIOR7cvP%2Fq%2BVk7guF8bRYf9FnNQyZQO9SZnATBPEooCloR7pCG1HPYx7SIcGMjC4MVEw1ehpXvbLO1uSa%2BjoVUVOSBU9y9ouDg8U%2FbL4ole082fJ3WlB1RLlgM45GmIy%2BIYK91nGFRYPIMt9XYkDoTYZwNYtKIg6rx91r%2FqzaoLTYP7yrbHw0yGUBmGzkI6uUXCuLz9PfBsJoPtl%2Bek2hcur7QLneCGoB8rnCcVUy6u29HD6Lx6nE0KyB%2B3%2FVVPc1022yMH9e78Up0Rle1hzv3xyzJMToJWDqvHRta3VsdyQvPURJSrYVNRsP2aPKFGSD3VPRGjS68cZP%2BVC%2FpFRhK1MMbnvMAGOqUBRaM9DtrH%2B4%2B6StzWKrO9ppA30KzRm%2FHgD1QmA5jWnCW1y%2Bfy9J55uBJ0Ak2bVdNec4g0Cgfu3CEMhg5I8EyjwXXoflwiO3Kf%2FBoUNyBJ3ls0s3LzKaId%2Fe%2FOHP6YJVJT7RJAwoqt1DAbTPDtoqHUs%2B33xadhvRRdhHOhuQoCcGHDmPNvGWJcmDi%2BIZGkHTsaxCGEKM6DHGzqC%2B8UZnVQ3hUyc%2FDa&X-Amz-Signature=a3865b2aa89b8f3dd4b6d7dba1e0fb28fce943b6d04545162d75ad0e0c408f53&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4JJBIE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCithDXWBNHP0nxxyyEaoJS8yBXwoqWfIv8hRT35ARxeAIgSq0JJGRNz7T2hiLeeKwRhNJoWdTkOKBsk61FhGdYBYwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBaQaIrfbIGQIR5GZyrcA3NuuHxkDiy4fC2VWHWJlRqAcryMim45mtqMyWxePKgswEGGCXkK%2BHfsrwGA0kit3AI2uQcNUntTVeedCgZohPfsPBCenfsbaFo59gY9G6P1qjYeKMgFNM2qN4LAGysOVNVRq2DY3PxOXOVORCS3o3sQK71P9Gd7wTfvOeYsk70P%2FozqsSUfh4%2FmVSHK6cQgJCNT2%2FCh1O%2FQKDX0WBWnRQZ5uVhQtg5ySbqncHJ4GRN2CWHrjqzkpufmGOa1KS9kkuwu31o%2Bew%2FbtsBNYSU0jcPNyTWFdkNz88b1JXIOR7cvP%2Fq%2BVk7guF8bRYf9FnNQyZQO9SZnATBPEooCloR7pCG1HPYx7SIcGMjC4MVEw1ehpXvbLO1uSa%2BjoVUVOSBU9y9ouDg8U%2FbL4ole082fJ3WlB1RLlgM45GmIy%2BIYK91nGFRYPIMt9XYkDoTYZwNYtKIg6rx91r%2FqzaoLTYP7yrbHw0yGUBmGzkI6uUXCuLz9PfBsJoPtl%2Bek2hcur7QLneCGoB8rnCcVUy6u29HD6Lx6nE0KyB%2B3%2FVVPc1022yMH9e78Up0Rle1hzv3xyzJMToJWDqvHRta3VsdyQvPURJSrYVNRsP2aPKFGSD3VPRGjS68cZP%2BVC%2FpFRhK1MMbnvMAGOqUBRaM9DtrH%2B4%2B6StzWKrO9ppA30KzRm%2FHgD1QmA5jWnCW1y%2Bfy9J55uBJ0Ak2bVdNec4g0Cgfu3CEMhg5I8EyjwXXoflwiO3Kf%2FBoUNyBJ3ls0s3LzKaId%2Fe%2FOHP6YJVJT7RJAwoqt1DAbTPDtoqHUs%2B33xadhvRRdhHOhuQoCcGHDmPNvGWJcmDi%2BIZGkHTsaxCGEKM6DHGzqC%2B8UZnVQ3hUyc%2FDa&X-Amz-Signature=45eb64d169b01a19f9f058d268f0862fae8106d92b21fa0f3889947e55774bb3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4JJBIE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCithDXWBNHP0nxxyyEaoJS8yBXwoqWfIv8hRT35ARxeAIgSq0JJGRNz7T2hiLeeKwRhNJoWdTkOKBsk61FhGdYBYwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBaQaIrfbIGQIR5GZyrcA3NuuHxkDiy4fC2VWHWJlRqAcryMim45mtqMyWxePKgswEGGCXkK%2BHfsrwGA0kit3AI2uQcNUntTVeedCgZohPfsPBCenfsbaFo59gY9G6P1qjYeKMgFNM2qN4LAGysOVNVRq2DY3PxOXOVORCS3o3sQK71P9Gd7wTfvOeYsk70P%2FozqsSUfh4%2FmVSHK6cQgJCNT2%2FCh1O%2FQKDX0WBWnRQZ5uVhQtg5ySbqncHJ4GRN2CWHrjqzkpufmGOa1KS9kkuwu31o%2Bew%2FbtsBNYSU0jcPNyTWFdkNz88b1JXIOR7cvP%2Fq%2BVk7guF8bRYf9FnNQyZQO9SZnATBPEooCloR7pCG1HPYx7SIcGMjC4MVEw1ehpXvbLO1uSa%2BjoVUVOSBU9y9ouDg8U%2FbL4ole082fJ3WlB1RLlgM45GmIy%2BIYK91nGFRYPIMt9XYkDoTYZwNYtKIg6rx91r%2FqzaoLTYP7yrbHw0yGUBmGzkI6uUXCuLz9PfBsJoPtl%2Bek2hcur7QLneCGoB8rnCcVUy6u29HD6Lx6nE0KyB%2B3%2FVVPc1022yMH9e78Up0Rle1hzv3xyzJMToJWDqvHRta3VsdyQvPURJSrYVNRsP2aPKFGSD3VPRGjS68cZP%2BVC%2FpFRhK1MMbnvMAGOqUBRaM9DtrH%2B4%2B6StzWKrO9ppA30KzRm%2FHgD1QmA5jWnCW1y%2Bfy9J55uBJ0Ak2bVdNec4g0Cgfu3CEMhg5I8EyjwXXoflwiO3Kf%2FBoUNyBJ3ls0s3LzKaId%2Fe%2FOHP6YJVJT7RJAwoqt1DAbTPDtoqHUs%2B33xadhvRRdhHOhuQoCcGHDmPNvGWJcmDi%2BIZGkHTsaxCGEKM6DHGzqC%2B8UZnVQ3hUyc%2FDa&X-Amz-Signature=15ef21979366b5bf12f3d3d4860202b341eb70821403050949691c8172c6868b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
