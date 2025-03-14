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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNZPB3N%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGb7BHBFyz4%2BNXrjrlTMpnHB%2FIf4FKTGABRnP%2BiUXwUeAiEAxfU3N2WQsY2rLZZQlxBLh947XCxcLdxAXwTXtUiYJkgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDr1Ye3fbWWLCjtwlyrcA3Dv%2BFLog%2ByOwAYt3x3uc6GKs6d%2Fy6hLQZUy6j8m5uYBHbenC95ZjXHlUZ1QuofmmtKNDsAM1P%2FfnidQ%2BizCCNjXfhLjIpHCQ2vvjwLwU1THzmCdfR8A7y5ja2TZWqU%2FyqUQ02azYiMhKZpnx821iYZG9ElDbfaw%2F%2FlZovdpp%2FMFwYd2ARSFe3JiHyHi5JndN5%2BAn9MqZbLBx98P5sX%2B%2BhBSCMu7MyD%2F0VJ%2BwjICE3IZKGEYMdsDvLBOL6kKMur0bF81tPV9Yuf1FyAQ%2Bmf8xUHOYUzIbpzuQ53dYB6TuG1u7md6FgTDMGXMk0OGAQU%2Bm8zLax5fCCwV0M0oVAEe4UghE2RzvIHhq%2B92AxMg1iRyfq1kvKBGYw%2BEjksjN3eowPHOzp3xQCXlcp0r3RbHipnpBjB4%2BijnIbJE2SX3t5ePpRf8HiZba4z%2FCIXl2TZdblp5y8oNZWuBhCj26bnSmDJSyB%2FW9djSky6VTkoFLMgGf3kr7w2sV4MfxsZFiMTGLB0g3G3ixu7FXUZu5nD5HjyH8RNq12vBQas1lu33tLlFfhvrDtKZ%2FKqjIY0jE%2FGYta7gYbT%2Fr27qKarmd0dCxf4OHV3jQLMLe722Rixt2aliPhKpU2l4BE6JYtQhMK%2FGz74GOqUB1tj6I1fvqbV2xWCraDHlQZoZ56q%2BCsj8lF1QQvysffO80J16PTbUB5bXoE%2FzqIPT9c4jUMWsBjyuMXYdHv6LZmla4jz65mnBeZIG%2BygzT0uelN%2BtKO5BklNiqv%2Fmc%2BYvzl4ynkhsm7%2BYwP7SUPOGtt3CIxy3tVBdXivU2GhBLIUOPZUq%2FM4RTcguoFEJwo6ZI28RvJxELm%2FynfevIg36dYc9bHYa&X-Amz-Signature=81f65f6df6b253efb4e0dea4fabac109586e271e5f3fda34eea5be57823cac6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNZPB3N%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGb7BHBFyz4%2BNXrjrlTMpnHB%2FIf4FKTGABRnP%2BiUXwUeAiEAxfU3N2WQsY2rLZZQlxBLh947XCxcLdxAXwTXtUiYJkgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDr1Ye3fbWWLCjtwlyrcA3Dv%2BFLog%2ByOwAYt3x3uc6GKs6d%2Fy6hLQZUy6j8m5uYBHbenC95ZjXHlUZ1QuofmmtKNDsAM1P%2FfnidQ%2BizCCNjXfhLjIpHCQ2vvjwLwU1THzmCdfR8A7y5ja2TZWqU%2FyqUQ02azYiMhKZpnx821iYZG9ElDbfaw%2F%2FlZovdpp%2FMFwYd2ARSFe3JiHyHi5JndN5%2BAn9MqZbLBx98P5sX%2B%2BhBSCMu7MyD%2F0VJ%2BwjICE3IZKGEYMdsDvLBOL6kKMur0bF81tPV9Yuf1FyAQ%2Bmf8xUHOYUzIbpzuQ53dYB6TuG1u7md6FgTDMGXMk0OGAQU%2Bm8zLax5fCCwV0M0oVAEe4UghE2RzvIHhq%2B92AxMg1iRyfq1kvKBGYw%2BEjksjN3eowPHOzp3xQCXlcp0r3RbHipnpBjB4%2BijnIbJE2SX3t5ePpRf8HiZba4z%2FCIXl2TZdblp5y8oNZWuBhCj26bnSmDJSyB%2FW9djSky6VTkoFLMgGf3kr7w2sV4MfxsZFiMTGLB0g3G3ixu7FXUZu5nD5HjyH8RNq12vBQas1lu33tLlFfhvrDtKZ%2FKqjIY0jE%2FGYta7gYbT%2Fr27qKarmd0dCxf4OHV3jQLMLe722Rixt2aliPhKpU2l4BE6JYtQhMK%2FGz74GOqUB1tj6I1fvqbV2xWCraDHlQZoZ56q%2BCsj8lF1QQvysffO80J16PTbUB5bXoE%2FzqIPT9c4jUMWsBjyuMXYdHv6LZmla4jz65mnBeZIG%2BygzT0uelN%2BtKO5BklNiqv%2Fmc%2BYvzl4ynkhsm7%2BYwP7SUPOGtt3CIxy3tVBdXivU2GhBLIUOPZUq%2FM4RTcguoFEJwo6ZI28RvJxELm%2FynfevIg36dYc9bHYa&X-Amz-Signature=804d10a639e620686fdc1f221c6fe7cd695724a51c3f8bd2879f627e5f60201b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNZPB3N%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGb7BHBFyz4%2BNXrjrlTMpnHB%2FIf4FKTGABRnP%2BiUXwUeAiEAxfU3N2WQsY2rLZZQlxBLh947XCxcLdxAXwTXtUiYJkgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDr1Ye3fbWWLCjtwlyrcA3Dv%2BFLog%2ByOwAYt3x3uc6GKs6d%2Fy6hLQZUy6j8m5uYBHbenC95ZjXHlUZ1QuofmmtKNDsAM1P%2FfnidQ%2BizCCNjXfhLjIpHCQ2vvjwLwU1THzmCdfR8A7y5ja2TZWqU%2FyqUQ02azYiMhKZpnx821iYZG9ElDbfaw%2F%2FlZovdpp%2FMFwYd2ARSFe3JiHyHi5JndN5%2BAn9MqZbLBx98P5sX%2B%2BhBSCMu7MyD%2F0VJ%2BwjICE3IZKGEYMdsDvLBOL6kKMur0bF81tPV9Yuf1FyAQ%2Bmf8xUHOYUzIbpzuQ53dYB6TuG1u7md6FgTDMGXMk0OGAQU%2Bm8zLax5fCCwV0M0oVAEe4UghE2RzvIHhq%2B92AxMg1iRyfq1kvKBGYw%2BEjksjN3eowPHOzp3xQCXlcp0r3RbHipnpBjB4%2BijnIbJE2SX3t5ePpRf8HiZba4z%2FCIXl2TZdblp5y8oNZWuBhCj26bnSmDJSyB%2FW9djSky6VTkoFLMgGf3kr7w2sV4MfxsZFiMTGLB0g3G3ixu7FXUZu5nD5HjyH8RNq12vBQas1lu33tLlFfhvrDtKZ%2FKqjIY0jE%2FGYta7gYbT%2Fr27qKarmd0dCxf4OHV3jQLMLe722Rixt2aliPhKpU2l4BE6JYtQhMK%2FGz74GOqUB1tj6I1fvqbV2xWCraDHlQZoZ56q%2BCsj8lF1QQvysffO80J16PTbUB5bXoE%2FzqIPT9c4jUMWsBjyuMXYdHv6LZmla4jz65mnBeZIG%2BygzT0uelN%2BtKO5BklNiqv%2Fmc%2BYvzl4ynkhsm7%2BYwP7SUPOGtt3CIxy3tVBdXivU2GhBLIUOPZUq%2FM4RTcguoFEJwo6ZI28RvJxELm%2FynfevIg36dYc9bHYa&X-Amz-Signature=6625a7975a4700238329a60b5099ac02494863dcec0a879ca425178f2ec3586d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNZPB3N%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGb7BHBFyz4%2BNXrjrlTMpnHB%2FIf4FKTGABRnP%2BiUXwUeAiEAxfU3N2WQsY2rLZZQlxBLh947XCxcLdxAXwTXtUiYJkgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDr1Ye3fbWWLCjtwlyrcA3Dv%2BFLog%2ByOwAYt3x3uc6GKs6d%2Fy6hLQZUy6j8m5uYBHbenC95ZjXHlUZ1QuofmmtKNDsAM1P%2FfnidQ%2BizCCNjXfhLjIpHCQ2vvjwLwU1THzmCdfR8A7y5ja2TZWqU%2FyqUQ02azYiMhKZpnx821iYZG9ElDbfaw%2F%2FlZovdpp%2FMFwYd2ARSFe3JiHyHi5JndN5%2BAn9MqZbLBx98P5sX%2B%2BhBSCMu7MyD%2F0VJ%2BwjICE3IZKGEYMdsDvLBOL6kKMur0bF81tPV9Yuf1FyAQ%2Bmf8xUHOYUzIbpzuQ53dYB6TuG1u7md6FgTDMGXMk0OGAQU%2Bm8zLax5fCCwV0M0oVAEe4UghE2RzvIHhq%2B92AxMg1iRyfq1kvKBGYw%2BEjksjN3eowPHOzp3xQCXlcp0r3RbHipnpBjB4%2BijnIbJE2SX3t5ePpRf8HiZba4z%2FCIXl2TZdblp5y8oNZWuBhCj26bnSmDJSyB%2FW9djSky6VTkoFLMgGf3kr7w2sV4MfxsZFiMTGLB0g3G3ixu7FXUZu5nD5HjyH8RNq12vBQas1lu33tLlFfhvrDtKZ%2FKqjIY0jE%2FGYta7gYbT%2Fr27qKarmd0dCxf4OHV3jQLMLe722Rixt2aliPhKpU2l4BE6JYtQhMK%2FGz74GOqUB1tj6I1fvqbV2xWCraDHlQZoZ56q%2BCsj8lF1QQvysffO80J16PTbUB5bXoE%2FzqIPT9c4jUMWsBjyuMXYdHv6LZmla4jz65mnBeZIG%2BygzT0uelN%2BtKO5BklNiqv%2Fmc%2BYvzl4ynkhsm7%2BYwP7SUPOGtt3CIxy3tVBdXivU2GhBLIUOPZUq%2FM4RTcguoFEJwo6ZI28RvJxELm%2FynfevIg36dYc9bHYa&X-Amz-Signature=481b7ed1c8c51ece8afe2494083428b6ac5ce8632736e3e572c10e471b9b64df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNZPB3N%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGb7BHBFyz4%2BNXrjrlTMpnHB%2FIf4FKTGABRnP%2BiUXwUeAiEAxfU3N2WQsY2rLZZQlxBLh947XCxcLdxAXwTXtUiYJkgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDr1Ye3fbWWLCjtwlyrcA3Dv%2BFLog%2ByOwAYt3x3uc6GKs6d%2Fy6hLQZUy6j8m5uYBHbenC95ZjXHlUZ1QuofmmtKNDsAM1P%2FfnidQ%2BizCCNjXfhLjIpHCQ2vvjwLwU1THzmCdfR8A7y5ja2TZWqU%2FyqUQ02azYiMhKZpnx821iYZG9ElDbfaw%2F%2FlZovdpp%2FMFwYd2ARSFe3JiHyHi5JndN5%2BAn9MqZbLBx98P5sX%2B%2BhBSCMu7MyD%2F0VJ%2BwjICE3IZKGEYMdsDvLBOL6kKMur0bF81tPV9Yuf1FyAQ%2Bmf8xUHOYUzIbpzuQ53dYB6TuG1u7md6FgTDMGXMk0OGAQU%2Bm8zLax5fCCwV0M0oVAEe4UghE2RzvIHhq%2B92AxMg1iRyfq1kvKBGYw%2BEjksjN3eowPHOzp3xQCXlcp0r3RbHipnpBjB4%2BijnIbJE2SX3t5ePpRf8HiZba4z%2FCIXl2TZdblp5y8oNZWuBhCj26bnSmDJSyB%2FW9djSky6VTkoFLMgGf3kr7w2sV4MfxsZFiMTGLB0g3G3ixu7FXUZu5nD5HjyH8RNq12vBQas1lu33tLlFfhvrDtKZ%2FKqjIY0jE%2FGYta7gYbT%2Fr27qKarmd0dCxf4OHV3jQLMLe722Rixt2aliPhKpU2l4BE6JYtQhMK%2FGz74GOqUB1tj6I1fvqbV2xWCraDHlQZoZ56q%2BCsj8lF1QQvysffO80J16PTbUB5bXoE%2FzqIPT9c4jUMWsBjyuMXYdHv6LZmla4jz65mnBeZIG%2BygzT0uelN%2BtKO5BklNiqv%2Fmc%2BYvzl4ynkhsm7%2BYwP7SUPOGtt3CIxy3tVBdXivU2GhBLIUOPZUq%2FM4RTcguoFEJwo6ZI28RvJxELm%2FynfevIg36dYc9bHYa&X-Amz-Signature=3ff1728e305f1ca907702d97eec5a8fe0a6a18a557ea1e452cba746e127c9dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
