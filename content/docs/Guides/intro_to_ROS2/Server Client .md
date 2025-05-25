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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4H2ER4P%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGuhdWrzNzzwpqYRS81S2cGsZWnWTaIeuZlwxyKL1EYxAiEAt%2FntGbJRFelK1b2yLwkYcTWTMfhhyDWLhDE%2FDt%2BBsDwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMCW1yOuFTo%2FpMwjXircA4KjMNXhYWqES%2FG8A32ZT%2BlKN2dlkXYMgePyhPwV6q0u4otntuksgthFzflvnFmvnnBA%2BHbK9cpXL6ZzuVtoDoSivN4xX%2FAO%2BOoxz32pcQKcszBEbm%2BEFKuzxY4sv0zqyMjXHIy%2BOX4aIwUYeKX0T8SshjlXPFBv9fwzYTmhc4e%2F6Zu%2Bh7EacwV%2FiStaM0jXIKCX99Lz6sMn5wsivIaC1Jk2pjPdaCl6qp44KwS3cLrKllCPSs5XBYuGCNFAmvvWNklGJGC8lSPydREeOVn4BKGOJmSQ4E4Vi%2FWSagqcVWfzf3IZhjGOOHd3%2BSqQHdI4RCzXTZAjPDPjSumdnJvysypbf01AcKdGdW5czQrenAK5uL5xJ0cy7djLWCB%2B5bhPbKiOPl%2Fb%2BKUrp%2BR0zs%2Bvq68Ah7fCFCqxkFbiJlG4fpvVuNP1OnNp7%2BNYqJT8PA0R%2FmGB%2FPlwwS22CcRzurqutg%2Fl8YJjlQjJHUQjRuwuVUaABqUZjeCp6EmkHmJxj4bcNjFttaMgsyeD4nk%2BOFNb0F6h5NUySeZ2ajK8eMHDm55E2b1SN7zJsFYFnIXBEfUu7iAXpb6xGd14DgUwATDJZYdjKqIsaBdu3WB0ScLPd0NmGuxcNeXD2E29TCdaMO30zcEGOqUBJyBBwl80m%2F9YHDJh949CfUeBOYZGzBVkLy%2FJE3HmNYsUA9TvNJWXV9jc2B5cS%2FSpLi4trsLfbYlwWozNgtyIwETNOSP1EyA%2Fgr%2BAscMNyZHKNJAL9GD%2BYeJMAmDz%2BCa8PpxOeMXJFK2kWgzG%2BmCtNwudfMMfaw3w0CNZ8nkaDWcWQY%2Bk25n5S2qJcF7DAMzOQhsGdyw1cM%2FQ%2BVE5VqqF2GTto735&X-Amz-Signature=4f13ab4059bbed27cff12d6b85b1e6e40fe17dd29c176b7c22e296e05252d7f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4H2ER4P%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGuhdWrzNzzwpqYRS81S2cGsZWnWTaIeuZlwxyKL1EYxAiEAt%2FntGbJRFelK1b2yLwkYcTWTMfhhyDWLhDE%2FDt%2BBsDwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMCW1yOuFTo%2FpMwjXircA4KjMNXhYWqES%2FG8A32ZT%2BlKN2dlkXYMgePyhPwV6q0u4otntuksgthFzflvnFmvnnBA%2BHbK9cpXL6ZzuVtoDoSivN4xX%2FAO%2BOoxz32pcQKcszBEbm%2BEFKuzxY4sv0zqyMjXHIy%2BOX4aIwUYeKX0T8SshjlXPFBv9fwzYTmhc4e%2F6Zu%2Bh7EacwV%2FiStaM0jXIKCX99Lz6sMn5wsivIaC1Jk2pjPdaCl6qp44KwS3cLrKllCPSs5XBYuGCNFAmvvWNklGJGC8lSPydREeOVn4BKGOJmSQ4E4Vi%2FWSagqcVWfzf3IZhjGOOHd3%2BSqQHdI4RCzXTZAjPDPjSumdnJvysypbf01AcKdGdW5czQrenAK5uL5xJ0cy7djLWCB%2B5bhPbKiOPl%2Fb%2BKUrp%2BR0zs%2Bvq68Ah7fCFCqxkFbiJlG4fpvVuNP1OnNp7%2BNYqJT8PA0R%2FmGB%2FPlwwS22CcRzurqutg%2Fl8YJjlQjJHUQjRuwuVUaABqUZjeCp6EmkHmJxj4bcNjFttaMgsyeD4nk%2BOFNb0F6h5NUySeZ2ajK8eMHDm55E2b1SN7zJsFYFnIXBEfUu7iAXpb6xGd14DgUwATDJZYdjKqIsaBdu3WB0ScLPd0NmGuxcNeXD2E29TCdaMO30zcEGOqUBJyBBwl80m%2F9YHDJh949CfUeBOYZGzBVkLy%2FJE3HmNYsUA9TvNJWXV9jc2B5cS%2FSpLi4trsLfbYlwWozNgtyIwETNOSP1EyA%2Fgr%2BAscMNyZHKNJAL9GD%2BYeJMAmDz%2BCa8PpxOeMXJFK2kWgzG%2BmCtNwudfMMfaw3w0CNZ8nkaDWcWQY%2Bk25n5S2qJcF7DAMzOQhsGdyw1cM%2FQ%2BVE5VqqF2GTto735&X-Amz-Signature=5a50464c747a0607756ddab09ef5e1e7ef683dd97bdcf34dfb98f6ddd478dfab&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4H2ER4P%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGuhdWrzNzzwpqYRS81S2cGsZWnWTaIeuZlwxyKL1EYxAiEAt%2FntGbJRFelK1b2yLwkYcTWTMfhhyDWLhDE%2FDt%2BBsDwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMCW1yOuFTo%2FpMwjXircA4KjMNXhYWqES%2FG8A32ZT%2BlKN2dlkXYMgePyhPwV6q0u4otntuksgthFzflvnFmvnnBA%2BHbK9cpXL6ZzuVtoDoSivN4xX%2FAO%2BOoxz32pcQKcszBEbm%2BEFKuzxY4sv0zqyMjXHIy%2BOX4aIwUYeKX0T8SshjlXPFBv9fwzYTmhc4e%2F6Zu%2Bh7EacwV%2FiStaM0jXIKCX99Lz6sMn5wsivIaC1Jk2pjPdaCl6qp44KwS3cLrKllCPSs5XBYuGCNFAmvvWNklGJGC8lSPydREeOVn4BKGOJmSQ4E4Vi%2FWSagqcVWfzf3IZhjGOOHd3%2BSqQHdI4RCzXTZAjPDPjSumdnJvysypbf01AcKdGdW5czQrenAK5uL5xJ0cy7djLWCB%2B5bhPbKiOPl%2Fb%2BKUrp%2BR0zs%2Bvq68Ah7fCFCqxkFbiJlG4fpvVuNP1OnNp7%2BNYqJT8PA0R%2FmGB%2FPlwwS22CcRzurqutg%2Fl8YJjlQjJHUQjRuwuVUaABqUZjeCp6EmkHmJxj4bcNjFttaMgsyeD4nk%2BOFNb0F6h5NUySeZ2ajK8eMHDm55E2b1SN7zJsFYFnIXBEfUu7iAXpb6xGd14DgUwATDJZYdjKqIsaBdu3WB0ScLPd0NmGuxcNeXD2E29TCdaMO30zcEGOqUBJyBBwl80m%2F9YHDJh949CfUeBOYZGzBVkLy%2FJE3HmNYsUA9TvNJWXV9jc2B5cS%2FSpLi4trsLfbYlwWozNgtyIwETNOSP1EyA%2Fgr%2BAscMNyZHKNJAL9GD%2BYeJMAmDz%2BCa8PpxOeMXJFK2kWgzG%2BmCtNwudfMMfaw3w0CNZ8nkaDWcWQY%2Bk25n5S2qJcF7DAMzOQhsGdyw1cM%2FQ%2BVE5VqqF2GTto735&X-Amz-Signature=269274106e042e3b8b1de7e654f24a7bbc31624374741e70eb4d9fe12f3fd347&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4H2ER4P%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGuhdWrzNzzwpqYRS81S2cGsZWnWTaIeuZlwxyKL1EYxAiEAt%2FntGbJRFelK1b2yLwkYcTWTMfhhyDWLhDE%2FDt%2BBsDwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMCW1yOuFTo%2FpMwjXircA4KjMNXhYWqES%2FG8A32ZT%2BlKN2dlkXYMgePyhPwV6q0u4otntuksgthFzflvnFmvnnBA%2BHbK9cpXL6ZzuVtoDoSivN4xX%2FAO%2BOoxz32pcQKcszBEbm%2BEFKuzxY4sv0zqyMjXHIy%2BOX4aIwUYeKX0T8SshjlXPFBv9fwzYTmhc4e%2F6Zu%2Bh7EacwV%2FiStaM0jXIKCX99Lz6sMn5wsivIaC1Jk2pjPdaCl6qp44KwS3cLrKllCPSs5XBYuGCNFAmvvWNklGJGC8lSPydREeOVn4BKGOJmSQ4E4Vi%2FWSagqcVWfzf3IZhjGOOHd3%2BSqQHdI4RCzXTZAjPDPjSumdnJvysypbf01AcKdGdW5czQrenAK5uL5xJ0cy7djLWCB%2B5bhPbKiOPl%2Fb%2BKUrp%2BR0zs%2Bvq68Ah7fCFCqxkFbiJlG4fpvVuNP1OnNp7%2BNYqJT8PA0R%2FmGB%2FPlwwS22CcRzurqutg%2Fl8YJjlQjJHUQjRuwuVUaABqUZjeCp6EmkHmJxj4bcNjFttaMgsyeD4nk%2BOFNb0F6h5NUySeZ2ajK8eMHDm55E2b1SN7zJsFYFnIXBEfUu7iAXpb6xGd14DgUwATDJZYdjKqIsaBdu3WB0ScLPd0NmGuxcNeXD2E29TCdaMO30zcEGOqUBJyBBwl80m%2F9YHDJh949CfUeBOYZGzBVkLy%2FJE3HmNYsUA9TvNJWXV9jc2B5cS%2FSpLi4trsLfbYlwWozNgtyIwETNOSP1EyA%2Fgr%2BAscMNyZHKNJAL9GD%2BYeJMAmDz%2BCa8PpxOeMXJFK2kWgzG%2BmCtNwudfMMfaw3w0CNZ8nkaDWcWQY%2Bk25n5S2qJcF7DAMzOQhsGdyw1cM%2FQ%2BVE5VqqF2GTto735&X-Amz-Signature=18f7c8e092459fbb623972c2f7bbb2f23db972086c29a22eba2b86c6e73222f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4H2ER4P%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGuhdWrzNzzwpqYRS81S2cGsZWnWTaIeuZlwxyKL1EYxAiEAt%2FntGbJRFelK1b2yLwkYcTWTMfhhyDWLhDE%2FDt%2BBsDwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMCW1yOuFTo%2FpMwjXircA4KjMNXhYWqES%2FG8A32ZT%2BlKN2dlkXYMgePyhPwV6q0u4otntuksgthFzflvnFmvnnBA%2BHbK9cpXL6ZzuVtoDoSivN4xX%2FAO%2BOoxz32pcQKcszBEbm%2BEFKuzxY4sv0zqyMjXHIy%2BOX4aIwUYeKX0T8SshjlXPFBv9fwzYTmhc4e%2F6Zu%2Bh7EacwV%2FiStaM0jXIKCX99Lz6sMn5wsivIaC1Jk2pjPdaCl6qp44KwS3cLrKllCPSs5XBYuGCNFAmvvWNklGJGC8lSPydREeOVn4BKGOJmSQ4E4Vi%2FWSagqcVWfzf3IZhjGOOHd3%2BSqQHdI4RCzXTZAjPDPjSumdnJvysypbf01AcKdGdW5czQrenAK5uL5xJ0cy7djLWCB%2B5bhPbKiOPl%2Fb%2BKUrp%2BR0zs%2Bvq68Ah7fCFCqxkFbiJlG4fpvVuNP1OnNp7%2BNYqJT8PA0R%2FmGB%2FPlwwS22CcRzurqutg%2Fl8YJjlQjJHUQjRuwuVUaABqUZjeCp6EmkHmJxj4bcNjFttaMgsyeD4nk%2BOFNb0F6h5NUySeZ2ajK8eMHDm55E2b1SN7zJsFYFnIXBEfUu7iAXpb6xGd14DgUwATDJZYdjKqIsaBdu3WB0ScLPd0NmGuxcNeXD2E29TCdaMO30zcEGOqUBJyBBwl80m%2F9YHDJh949CfUeBOYZGzBVkLy%2FJE3HmNYsUA9TvNJWXV9jc2B5cS%2FSpLi4trsLfbYlwWozNgtyIwETNOSP1EyA%2Fgr%2BAscMNyZHKNJAL9GD%2BYeJMAmDz%2BCa8PpxOeMXJFK2kWgzG%2BmCtNwudfMMfaw3w0CNZ8nkaDWcWQY%2Bk25n5S2qJcF7DAMzOQhsGdyw1cM%2FQ%2BVE5VqqF2GTto735&X-Amz-Signature=134bff40a2a489d4ba084cf26fd857509e0fd904e3b7bd814797531f17b11e93&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
