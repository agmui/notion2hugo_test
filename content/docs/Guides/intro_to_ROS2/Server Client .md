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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXNONWUL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2NHT8tiMpTdbr6UZXwITUwCHzblB%2FF8grw1s6zkIVvAIgfbOGBNAgDQElTgAr%2FDdwsFGYH5yh0VYo0GpnUWHdABwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIBa9RJByd7NKhOGESrcAyLn0zm4hEHuz58LtE4%2FhPE5Q2Mm1VgaAq7O7aoRIEwHMiUDw%2BTCEIIpP7LhODd0Wo4t%2BEx%2Be78q8JJkiLcV9Q78OoQE3nHpGtjw78oo7bGAxMcFgA23%2F9UYtACSiacCOUZJBvhLN3uniraIaeROcgq8%2BhxlbPjsZK8v6mrwF7zjjkqRKYEIh5HUQ5Ea%2BTHxqXdUPHGq32rd8DktpMkorJT0WSOR6zQoyRtjyh6UfOz5FgOOG6VtTNeicmxa0E7zdzax0GiShrVy9qdzMQ4LA4yvizRgez%2Bs%2Bik4DqXtY7DxTT50WvkddpTf2Xm0oIF5mjr3qDdX3kS8XcCpPTs5yWqpJz9nvAcSpF4FfWVIf1k9szm45C42cSRInyxLFSDYB2vd%2Fnr0dPT7naUbQLcE49qnW3Wdf27M7gLgTqFatxtksIHW53sp5wkjx2PtjlAlYQVmeM9WAICPsbMh3LKjWedniUTpurvAv%2F2Ac8KQdhksM5TBSCU0E8G2ggeauVzK%2FgYGo9Un63Hxxz7qjNrihsRaXZmwUFCvqHTdHXL83XAfYApwlibALhhquYpbCD2rytnh%2FwT00cZwvSoXdDXmYxrIAxUhBQoYP6mxOgiat5RAvq7IH88m%2FONsYQFaMMuHqr4GOqUBXe8qIEvASR24acNf2SZmJzAjBUh3bRCRHiDyBaztu3MFVkVYhJVck%2FpsPnoJsXNdAf%2BTSy%2B7TYnDdNNn3cuy5%2FG9eI%2FqB%2BmScpibk%2FeZjN6TZviomAXnCO1loWIUBx2Bm6OMzDquUo7eWCV5R459lm1k1e3u5GsBSCWjg9lblCRRkHZRbx2JGQx8VkCYc4QoCsBNFBapSVvzfb6kI6yFc5Zr0E%2B9&X-Amz-Signature=dfae9701519faa63e1e5a7176357df17130f516a9586f071b250d17210e1fab1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXNONWUL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2NHT8tiMpTdbr6UZXwITUwCHzblB%2FF8grw1s6zkIVvAIgfbOGBNAgDQElTgAr%2FDdwsFGYH5yh0VYo0GpnUWHdABwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIBa9RJByd7NKhOGESrcAyLn0zm4hEHuz58LtE4%2FhPE5Q2Mm1VgaAq7O7aoRIEwHMiUDw%2BTCEIIpP7LhODd0Wo4t%2BEx%2Be78q8JJkiLcV9Q78OoQE3nHpGtjw78oo7bGAxMcFgA23%2F9UYtACSiacCOUZJBvhLN3uniraIaeROcgq8%2BhxlbPjsZK8v6mrwF7zjjkqRKYEIh5HUQ5Ea%2BTHxqXdUPHGq32rd8DktpMkorJT0WSOR6zQoyRtjyh6UfOz5FgOOG6VtTNeicmxa0E7zdzax0GiShrVy9qdzMQ4LA4yvizRgez%2Bs%2Bik4DqXtY7DxTT50WvkddpTf2Xm0oIF5mjr3qDdX3kS8XcCpPTs5yWqpJz9nvAcSpF4FfWVIf1k9szm45C42cSRInyxLFSDYB2vd%2Fnr0dPT7naUbQLcE49qnW3Wdf27M7gLgTqFatxtksIHW53sp5wkjx2PtjlAlYQVmeM9WAICPsbMh3LKjWedniUTpurvAv%2F2Ac8KQdhksM5TBSCU0E8G2ggeauVzK%2FgYGo9Un63Hxxz7qjNrihsRaXZmwUFCvqHTdHXL83XAfYApwlibALhhquYpbCD2rytnh%2FwT00cZwvSoXdDXmYxrIAxUhBQoYP6mxOgiat5RAvq7IH88m%2FONsYQFaMMuHqr4GOqUBXe8qIEvASR24acNf2SZmJzAjBUh3bRCRHiDyBaztu3MFVkVYhJVck%2FpsPnoJsXNdAf%2BTSy%2B7TYnDdNNn3cuy5%2FG9eI%2FqB%2BmScpibk%2FeZjN6TZviomAXnCO1loWIUBx2Bm6OMzDquUo7eWCV5R459lm1k1e3u5GsBSCWjg9lblCRRkHZRbx2JGQx8VkCYc4QoCsBNFBapSVvzfb6kI6yFc5Zr0E%2B9&X-Amz-Signature=e382008c7a2bf16edde96732dbabd14801b5481e1216fc7baa93697efb8aac74&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXNONWUL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2NHT8tiMpTdbr6UZXwITUwCHzblB%2FF8grw1s6zkIVvAIgfbOGBNAgDQElTgAr%2FDdwsFGYH5yh0VYo0GpnUWHdABwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIBa9RJByd7NKhOGESrcAyLn0zm4hEHuz58LtE4%2FhPE5Q2Mm1VgaAq7O7aoRIEwHMiUDw%2BTCEIIpP7LhODd0Wo4t%2BEx%2Be78q8JJkiLcV9Q78OoQE3nHpGtjw78oo7bGAxMcFgA23%2F9UYtACSiacCOUZJBvhLN3uniraIaeROcgq8%2BhxlbPjsZK8v6mrwF7zjjkqRKYEIh5HUQ5Ea%2BTHxqXdUPHGq32rd8DktpMkorJT0WSOR6zQoyRtjyh6UfOz5FgOOG6VtTNeicmxa0E7zdzax0GiShrVy9qdzMQ4LA4yvizRgez%2Bs%2Bik4DqXtY7DxTT50WvkddpTf2Xm0oIF5mjr3qDdX3kS8XcCpPTs5yWqpJz9nvAcSpF4FfWVIf1k9szm45C42cSRInyxLFSDYB2vd%2Fnr0dPT7naUbQLcE49qnW3Wdf27M7gLgTqFatxtksIHW53sp5wkjx2PtjlAlYQVmeM9WAICPsbMh3LKjWedniUTpurvAv%2F2Ac8KQdhksM5TBSCU0E8G2ggeauVzK%2FgYGo9Un63Hxxz7qjNrihsRaXZmwUFCvqHTdHXL83XAfYApwlibALhhquYpbCD2rytnh%2FwT00cZwvSoXdDXmYxrIAxUhBQoYP6mxOgiat5RAvq7IH88m%2FONsYQFaMMuHqr4GOqUBXe8qIEvASR24acNf2SZmJzAjBUh3bRCRHiDyBaztu3MFVkVYhJVck%2FpsPnoJsXNdAf%2BTSy%2B7TYnDdNNn3cuy5%2FG9eI%2FqB%2BmScpibk%2FeZjN6TZviomAXnCO1loWIUBx2Bm6OMzDquUo7eWCV5R459lm1k1e3u5GsBSCWjg9lblCRRkHZRbx2JGQx8VkCYc4QoCsBNFBapSVvzfb6kI6yFc5Zr0E%2B9&X-Amz-Signature=7999bf5207ed3987f8c2a811361e4db0d2506ca879dbe34932d44cfafa8a5121&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXNONWUL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2NHT8tiMpTdbr6UZXwITUwCHzblB%2FF8grw1s6zkIVvAIgfbOGBNAgDQElTgAr%2FDdwsFGYH5yh0VYo0GpnUWHdABwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIBa9RJByd7NKhOGESrcAyLn0zm4hEHuz58LtE4%2FhPE5Q2Mm1VgaAq7O7aoRIEwHMiUDw%2BTCEIIpP7LhODd0Wo4t%2BEx%2Be78q8JJkiLcV9Q78OoQE3nHpGtjw78oo7bGAxMcFgA23%2F9UYtACSiacCOUZJBvhLN3uniraIaeROcgq8%2BhxlbPjsZK8v6mrwF7zjjkqRKYEIh5HUQ5Ea%2BTHxqXdUPHGq32rd8DktpMkorJT0WSOR6zQoyRtjyh6UfOz5FgOOG6VtTNeicmxa0E7zdzax0GiShrVy9qdzMQ4LA4yvizRgez%2Bs%2Bik4DqXtY7DxTT50WvkddpTf2Xm0oIF5mjr3qDdX3kS8XcCpPTs5yWqpJz9nvAcSpF4FfWVIf1k9szm45C42cSRInyxLFSDYB2vd%2Fnr0dPT7naUbQLcE49qnW3Wdf27M7gLgTqFatxtksIHW53sp5wkjx2PtjlAlYQVmeM9WAICPsbMh3LKjWedniUTpurvAv%2F2Ac8KQdhksM5TBSCU0E8G2ggeauVzK%2FgYGo9Un63Hxxz7qjNrihsRaXZmwUFCvqHTdHXL83XAfYApwlibALhhquYpbCD2rytnh%2FwT00cZwvSoXdDXmYxrIAxUhBQoYP6mxOgiat5RAvq7IH88m%2FONsYQFaMMuHqr4GOqUBXe8qIEvASR24acNf2SZmJzAjBUh3bRCRHiDyBaztu3MFVkVYhJVck%2FpsPnoJsXNdAf%2BTSy%2B7TYnDdNNn3cuy5%2FG9eI%2FqB%2BmScpibk%2FeZjN6TZviomAXnCO1loWIUBx2Bm6OMzDquUo7eWCV5R459lm1k1e3u5GsBSCWjg9lblCRRkHZRbx2JGQx8VkCYc4QoCsBNFBapSVvzfb6kI6yFc5Zr0E%2B9&X-Amz-Signature=0c22676da91b403cbddee6c2db86a7feb7f85ead7f4a506fd4f5c95f5b40a043&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXNONWUL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2NHT8tiMpTdbr6UZXwITUwCHzblB%2FF8grw1s6zkIVvAIgfbOGBNAgDQElTgAr%2FDdwsFGYH5yh0VYo0GpnUWHdABwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIBa9RJByd7NKhOGESrcAyLn0zm4hEHuz58LtE4%2FhPE5Q2Mm1VgaAq7O7aoRIEwHMiUDw%2BTCEIIpP7LhODd0Wo4t%2BEx%2Be78q8JJkiLcV9Q78OoQE3nHpGtjw78oo7bGAxMcFgA23%2F9UYtACSiacCOUZJBvhLN3uniraIaeROcgq8%2BhxlbPjsZK8v6mrwF7zjjkqRKYEIh5HUQ5Ea%2BTHxqXdUPHGq32rd8DktpMkorJT0WSOR6zQoyRtjyh6UfOz5FgOOG6VtTNeicmxa0E7zdzax0GiShrVy9qdzMQ4LA4yvizRgez%2Bs%2Bik4DqXtY7DxTT50WvkddpTf2Xm0oIF5mjr3qDdX3kS8XcCpPTs5yWqpJz9nvAcSpF4FfWVIf1k9szm45C42cSRInyxLFSDYB2vd%2Fnr0dPT7naUbQLcE49qnW3Wdf27M7gLgTqFatxtksIHW53sp5wkjx2PtjlAlYQVmeM9WAICPsbMh3LKjWedniUTpurvAv%2F2Ac8KQdhksM5TBSCU0E8G2ggeauVzK%2FgYGo9Un63Hxxz7qjNrihsRaXZmwUFCvqHTdHXL83XAfYApwlibALhhquYpbCD2rytnh%2FwT00cZwvSoXdDXmYxrIAxUhBQoYP6mxOgiat5RAvq7IH88m%2FONsYQFaMMuHqr4GOqUBXe8qIEvASR24acNf2SZmJzAjBUh3bRCRHiDyBaztu3MFVkVYhJVck%2FpsPnoJsXNdAf%2BTSy%2B7TYnDdNNn3cuy5%2FG9eI%2FqB%2BmScpibk%2FeZjN6TZviomAXnCO1loWIUBx2Bm6OMzDquUo7eWCV5R459lm1k1e3u5GsBSCWjg9lblCRRkHZRbx2JGQx8VkCYc4QoCsBNFBapSVvzfb6kI6yFc5Zr0E%2B9&X-Amz-Signature=87c49e8edb205b5faaa48b74b9219b5b38e3478002cc2439d880acfea1d4635f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
