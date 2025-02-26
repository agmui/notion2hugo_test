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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3FOGIAR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIB8hxD33%2BVmL3H9MU63MGFsuw1C6PoF9iMjcVhCEx5tmAiBhxov5ESNPYgzNvv36lwaD%2BCHbuifjDonc1G%2FPo%2FEX5yr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMg020qglRlyiNFuKKKtwDh%2FRnmFdEOnq60Sls7yv3w%2BYh4UtYQYIi5JiY7FwcduBpRqEJc1pE%2BZ5tLAjFubQnJdzcTMk%2BT%2Bm5c%2BNVOjMcRF5acVws6tpwDBptOd8rcLZOGdUVGLbQvgzOCrPHBUgsbU%2Fc1tAQpnqE%2F6JLaAwxDLud%2FJzyY2ZqEFiDADX%2FBm61bzgKefqbATgQeg1AQiETXG9ZtlY%2BkXwanu1FxYjylUsYqV5blHMfcBa%2BooPfKCVCPm2JserZlX2Ou3jRH35GJAoXDRjHr1oZz5h5QC4Ezshxb8O9FJe2emRAEY3k2QfgeqrMBqyssdEY4SGdZh1%2FeJwyIhIbcAa94b92hjwhXvN%2BvtIYEaCZCNzqCgu%2FhtvUM%2BY%2FBA%2BdUxbC0F2WqkLhqs1bBRldGL8NUSPcGkgh93Gd4rU82fcz%2BTJmVYG%2BriVK4CtsmsYrxoWVEVUqE5Pz%2B4yakmMRLWcesKMgCQFz4HQlxfR4%2F7rxfNLDKz7TkVW9ZSXb13zrfpNAH5gcZJqG02v5I5YN5I7woIollypYzmtfu%2Fjx6PQF7WpR5j%2FPDI57SwQ3nV1%2FyMh7iVtAdB4Bql2jNMDlycqgGEQu0zslMXW95WmPg%2Fvvb59R7A%2BUKHENJ39e2i7riqVUZy4wh735vQY6pgG25l1RZKsYJj8S%2FobvODPASWNtyjzW7dBycg1mWVyACEy1XLJfkwMag4Deycte5Md9%2Fg1GoM0QKEZ55KH55ZumMuPItstWWvoQwI6kw1sbAF66ridWuzJpFN2VpJQ%2FZM%2F6Q7LvCoUesqgtghGKVnDjf%2F6L0wDXafJ1IExTELcm2K%2FeI%2BDg5L9O2ogBMwIe20624Wj6Yr7G4KK0OkheojdLx2g32z4i&X-Amz-Signature=6558cbdaa738691685c360e9c66d15c32610fbf29a91ef7bba52ef948f9e9e32&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3FOGIAR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIB8hxD33%2BVmL3H9MU63MGFsuw1C6PoF9iMjcVhCEx5tmAiBhxov5ESNPYgzNvv36lwaD%2BCHbuifjDonc1G%2FPo%2FEX5yr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMg020qglRlyiNFuKKKtwDh%2FRnmFdEOnq60Sls7yv3w%2BYh4UtYQYIi5JiY7FwcduBpRqEJc1pE%2BZ5tLAjFubQnJdzcTMk%2BT%2Bm5c%2BNVOjMcRF5acVws6tpwDBptOd8rcLZOGdUVGLbQvgzOCrPHBUgsbU%2Fc1tAQpnqE%2F6JLaAwxDLud%2FJzyY2ZqEFiDADX%2FBm61bzgKefqbATgQeg1AQiETXG9ZtlY%2BkXwanu1FxYjylUsYqV5blHMfcBa%2BooPfKCVCPm2JserZlX2Ou3jRH35GJAoXDRjHr1oZz5h5QC4Ezshxb8O9FJe2emRAEY3k2QfgeqrMBqyssdEY4SGdZh1%2FeJwyIhIbcAa94b92hjwhXvN%2BvtIYEaCZCNzqCgu%2FhtvUM%2BY%2FBA%2BdUxbC0F2WqkLhqs1bBRldGL8NUSPcGkgh93Gd4rU82fcz%2BTJmVYG%2BriVK4CtsmsYrxoWVEVUqE5Pz%2B4yakmMRLWcesKMgCQFz4HQlxfR4%2F7rxfNLDKz7TkVW9ZSXb13zrfpNAH5gcZJqG02v5I5YN5I7woIollypYzmtfu%2Fjx6PQF7WpR5j%2FPDI57SwQ3nV1%2FyMh7iVtAdB4Bql2jNMDlycqgGEQu0zslMXW95WmPg%2Fvvb59R7A%2BUKHENJ39e2i7riqVUZy4wh735vQY6pgG25l1RZKsYJj8S%2FobvODPASWNtyjzW7dBycg1mWVyACEy1XLJfkwMag4Deycte5Md9%2Fg1GoM0QKEZ55KH55ZumMuPItstWWvoQwI6kw1sbAF66ridWuzJpFN2VpJQ%2FZM%2F6Q7LvCoUesqgtghGKVnDjf%2F6L0wDXafJ1IExTELcm2K%2FeI%2BDg5L9O2ogBMwIe20624Wj6Yr7G4KK0OkheojdLx2g32z4i&X-Amz-Signature=7b05b2ef0f1562da6db42b2cf0fe7ca953fdd614a9c72ec42d0cda3485b96957&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3FOGIAR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIB8hxD33%2BVmL3H9MU63MGFsuw1C6PoF9iMjcVhCEx5tmAiBhxov5ESNPYgzNvv36lwaD%2BCHbuifjDonc1G%2FPo%2FEX5yr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMg020qglRlyiNFuKKKtwDh%2FRnmFdEOnq60Sls7yv3w%2BYh4UtYQYIi5JiY7FwcduBpRqEJc1pE%2BZ5tLAjFubQnJdzcTMk%2BT%2Bm5c%2BNVOjMcRF5acVws6tpwDBptOd8rcLZOGdUVGLbQvgzOCrPHBUgsbU%2Fc1tAQpnqE%2F6JLaAwxDLud%2FJzyY2ZqEFiDADX%2FBm61bzgKefqbATgQeg1AQiETXG9ZtlY%2BkXwanu1FxYjylUsYqV5blHMfcBa%2BooPfKCVCPm2JserZlX2Ou3jRH35GJAoXDRjHr1oZz5h5QC4Ezshxb8O9FJe2emRAEY3k2QfgeqrMBqyssdEY4SGdZh1%2FeJwyIhIbcAa94b92hjwhXvN%2BvtIYEaCZCNzqCgu%2FhtvUM%2BY%2FBA%2BdUxbC0F2WqkLhqs1bBRldGL8NUSPcGkgh93Gd4rU82fcz%2BTJmVYG%2BriVK4CtsmsYrxoWVEVUqE5Pz%2B4yakmMRLWcesKMgCQFz4HQlxfR4%2F7rxfNLDKz7TkVW9ZSXb13zrfpNAH5gcZJqG02v5I5YN5I7woIollypYzmtfu%2Fjx6PQF7WpR5j%2FPDI57SwQ3nV1%2FyMh7iVtAdB4Bql2jNMDlycqgGEQu0zslMXW95WmPg%2Fvvb59R7A%2BUKHENJ39e2i7riqVUZy4wh735vQY6pgG25l1RZKsYJj8S%2FobvODPASWNtyjzW7dBycg1mWVyACEy1XLJfkwMag4Deycte5Md9%2Fg1GoM0QKEZ55KH55ZumMuPItstWWvoQwI6kw1sbAF66ridWuzJpFN2VpJQ%2FZM%2F6Q7LvCoUesqgtghGKVnDjf%2F6L0wDXafJ1IExTELcm2K%2FeI%2BDg5L9O2ogBMwIe20624Wj6Yr7G4KK0OkheojdLx2g32z4i&X-Amz-Signature=51045c7e25769c886a0810d4c43c902c1f3cc1914a3d184d5cc113c9f838a885&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3FOGIAR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIB8hxD33%2BVmL3H9MU63MGFsuw1C6PoF9iMjcVhCEx5tmAiBhxov5ESNPYgzNvv36lwaD%2BCHbuifjDonc1G%2FPo%2FEX5yr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMg020qglRlyiNFuKKKtwDh%2FRnmFdEOnq60Sls7yv3w%2BYh4UtYQYIi5JiY7FwcduBpRqEJc1pE%2BZ5tLAjFubQnJdzcTMk%2BT%2Bm5c%2BNVOjMcRF5acVws6tpwDBptOd8rcLZOGdUVGLbQvgzOCrPHBUgsbU%2Fc1tAQpnqE%2F6JLaAwxDLud%2FJzyY2ZqEFiDADX%2FBm61bzgKefqbATgQeg1AQiETXG9ZtlY%2BkXwanu1FxYjylUsYqV5blHMfcBa%2BooPfKCVCPm2JserZlX2Ou3jRH35GJAoXDRjHr1oZz5h5QC4Ezshxb8O9FJe2emRAEY3k2QfgeqrMBqyssdEY4SGdZh1%2FeJwyIhIbcAa94b92hjwhXvN%2BvtIYEaCZCNzqCgu%2FhtvUM%2BY%2FBA%2BdUxbC0F2WqkLhqs1bBRldGL8NUSPcGkgh93Gd4rU82fcz%2BTJmVYG%2BriVK4CtsmsYrxoWVEVUqE5Pz%2B4yakmMRLWcesKMgCQFz4HQlxfR4%2F7rxfNLDKz7TkVW9ZSXb13zrfpNAH5gcZJqG02v5I5YN5I7woIollypYzmtfu%2Fjx6PQF7WpR5j%2FPDI57SwQ3nV1%2FyMh7iVtAdB4Bql2jNMDlycqgGEQu0zslMXW95WmPg%2Fvvb59R7A%2BUKHENJ39e2i7riqVUZy4wh735vQY6pgG25l1RZKsYJj8S%2FobvODPASWNtyjzW7dBycg1mWVyACEy1XLJfkwMag4Deycte5Md9%2Fg1GoM0QKEZ55KH55ZumMuPItstWWvoQwI6kw1sbAF66ridWuzJpFN2VpJQ%2FZM%2F6Q7LvCoUesqgtghGKVnDjf%2F6L0wDXafJ1IExTELcm2K%2FeI%2BDg5L9O2ogBMwIe20624Wj6Yr7G4KK0OkheojdLx2g32z4i&X-Amz-Signature=de33439bbdd618d6589d40d3dff744db9a2230666ec441e36a6f585a3f0f282e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3FOGIAR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIB8hxD33%2BVmL3H9MU63MGFsuw1C6PoF9iMjcVhCEx5tmAiBhxov5ESNPYgzNvv36lwaD%2BCHbuifjDonc1G%2FPo%2FEX5yr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMg020qglRlyiNFuKKKtwDh%2FRnmFdEOnq60Sls7yv3w%2BYh4UtYQYIi5JiY7FwcduBpRqEJc1pE%2BZ5tLAjFubQnJdzcTMk%2BT%2Bm5c%2BNVOjMcRF5acVws6tpwDBptOd8rcLZOGdUVGLbQvgzOCrPHBUgsbU%2Fc1tAQpnqE%2F6JLaAwxDLud%2FJzyY2ZqEFiDADX%2FBm61bzgKefqbATgQeg1AQiETXG9ZtlY%2BkXwanu1FxYjylUsYqV5blHMfcBa%2BooPfKCVCPm2JserZlX2Ou3jRH35GJAoXDRjHr1oZz5h5QC4Ezshxb8O9FJe2emRAEY3k2QfgeqrMBqyssdEY4SGdZh1%2FeJwyIhIbcAa94b92hjwhXvN%2BvtIYEaCZCNzqCgu%2FhtvUM%2BY%2FBA%2BdUxbC0F2WqkLhqs1bBRldGL8NUSPcGkgh93Gd4rU82fcz%2BTJmVYG%2BriVK4CtsmsYrxoWVEVUqE5Pz%2B4yakmMRLWcesKMgCQFz4HQlxfR4%2F7rxfNLDKz7TkVW9ZSXb13zrfpNAH5gcZJqG02v5I5YN5I7woIollypYzmtfu%2Fjx6PQF7WpR5j%2FPDI57SwQ3nV1%2FyMh7iVtAdB4Bql2jNMDlycqgGEQu0zslMXW95WmPg%2Fvvb59R7A%2BUKHENJ39e2i7riqVUZy4wh735vQY6pgG25l1RZKsYJj8S%2FobvODPASWNtyjzW7dBycg1mWVyACEy1XLJfkwMag4Deycte5Md9%2Fg1GoM0QKEZ55KH55ZumMuPItstWWvoQwI6kw1sbAF66ridWuzJpFN2VpJQ%2FZM%2F6Q7LvCoUesqgtghGKVnDjf%2F6L0wDXafJ1IExTELcm2K%2FeI%2BDg5L9O2ogBMwIe20624Wj6Yr7G4KK0OkheojdLx2g32z4i&X-Amz-Signature=69027c3f7647ab867748177d61ccc318810ffa09e4b1be2a59881dd49b505656&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
