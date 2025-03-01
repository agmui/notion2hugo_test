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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDXMFVTS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIAt0%2F5M3qAjbVhMgyYBPVGXm2S1V9Mr%2F3V0coBmphtoRAiBihzDRNSIx%2BEpTPpb8E09dkWrgea1ITwOzcmi2hH5wkiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw%2FxtcKFzVTKeXgYGKtwDGbKdyTzzwS8sZTnqyPgD4Gq%2FbFwcY1CvUAN4nyRl9gdumiGwpHUNd31XL6cpZ8Vr%2FD4J3wDhBjWYUXx5TxTzhQHnhNWtAAegRp49qk6AhpXvTSRkO7XeD0ScYOw8LdyPHi1Av2jaVC5u09cuJ8JBUI6UVGsmPidDYRQ08a8GvGKaLfHxSS0i%2B3u%2BDtBO4jPFjVcxh83sWpDy2BeQlqu4f89vafchrVV7XqAIb%2FzTK5KFl6TyTCydqNrFm7NN8RRo4wBjLdmZOpUHZuPP35pvG1Szt4R%2BVPj1s47%2BJJxvTa%2FGbtZkZm9762LzMnMCvq4ecmuS3xO37iTj9AFwtDUM0bmpBpbYuxIqPAN%2FMJickn22clUojUfgz8KWfd3rSunaVIdeXoez1G7LvR6puhhakVEX%2FeFglghdKF3qF8OrZ8g7DSLhWF0cjTucFmj%2FjOxH0rTRR43seI%2BjG%2Fpd4PAaY0muY8bVcQxJNzEZRjReSNhXbK0c5sdUnmnmwG2dDguxpEDwmSh2z2s2qqEOHGUhDlpy1uIs2dlxgvxi84gNWvlRV%2FKdu8DGBdSoKiXzf5NvKhk55ucjsV%2BR6uFYgCXeW6YqE3Fx1EJzRAuWHJDq%2FrDoSRO2XgDLTTz0sKAwvpCKvgY6pgGas82NIfHkFwgnZXLRYvGIizoaEVwsd7TH9YcKKGKwnCuZSLH%2FwWloK83J8VHkQRS%2FvNQYHTJj4CFEBEMRuPnztR4jJmealuvuMehskz0zOyoERdubrrwx6wOHkhLIrnB1OBQ7bBWSyuw9xr4PEyH2yyoqaqntW%2BILvPGBqKqdp24G5tIj%2FNeTeOEfEBXMXizMmPteLm%2FbRC9ja1uaiAYGKS8109ji&X-Amz-Signature=df06e7cbfa9ed967b73086078af8e6045dcd8e232687e9a438d896605810d8e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDXMFVTS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIAt0%2F5M3qAjbVhMgyYBPVGXm2S1V9Mr%2F3V0coBmphtoRAiBihzDRNSIx%2BEpTPpb8E09dkWrgea1ITwOzcmi2hH5wkiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw%2FxtcKFzVTKeXgYGKtwDGbKdyTzzwS8sZTnqyPgD4Gq%2FbFwcY1CvUAN4nyRl9gdumiGwpHUNd31XL6cpZ8Vr%2FD4J3wDhBjWYUXx5TxTzhQHnhNWtAAegRp49qk6AhpXvTSRkO7XeD0ScYOw8LdyPHi1Av2jaVC5u09cuJ8JBUI6UVGsmPidDYRQ08a8GvGKaLfHxSS0i%2B3u%2BDtBO4jPFjVcxh83sWpDy2BeQlqu4f89vafchrVV7XqAIb%2FzTK5KFl6TyTCydqNrFm7NN8RRo4wBjLdmZOpUHZuPP35pvG1Szt4R%2BVPj1s47%2BJJxvTa%2FGbtZkZm9762LzMnMCvq4ecmuS3xO37iTj9AFwtDUM0bmpBpbYuxIqPAN%2FMJickn22clUojUfgz8KWfd3rSunaVIdeXoez1G7LvR6puhhakVEX%2FeFglghdKF3qF8OrZ8g7DSLhWF0cjTucFmj%2FjOxH0rTRR43seI%2BjG%2Fpd4PAaY0muY8bVcQxJNzEZRjReSNhXbK0c5sdUnmnmwG2dDguxpEDwmSh2z2s2qqEOHGUhDlpy1uIs2dlxgvxi84gNWvlRV%2FKdu8DGBdSoKiXzf5NvKhk55ucjsV%2BR6uFYgCXeW6YqE3Fx1EJzRAuWHJDq%2FrDoSRO2XgDLTTz0sKAwvpCKvgY6pgGas82NIfHkFwgnZXLRYvGIizoaEVwsd7TH9YcKKGKwnCuZSLH%2FwWloK83J8VHkQRS%2FvNQYHTJj4CFEBEMRuPnztR4jJmealuvuMehskz0zOyoERdubrrwx6wOHkhLIrnB1OBQ7bBWSyuw9xr4PEyH2yyoqaqntW%2BILvPGBqKqdp24G5tIj%2FNeTeOEfEBXMXizMmPteLm%2FbRC9ja1uaiAYGKS8109ji&X-Amz-Signature=ce2362aea8f3c93a367d52076477a2b4f87b45e76761a1e04f987ce5acebd449&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDXMFVTS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIAt0%2F5M3qAjbVhMgyYBPVGXm2S1V9Mr%2F3V0coBmphtoRAiBihzDRNSIx%2BEpTPpb8E09dkWrgea1ITwOzcmi2hH5wkiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw%2FxtcKFzVTKeXgYGKtwDGbKdyTzzwS8sZTnqyPgD4Gq%2FbFwcY1CvUAN4nyRl9gdumiGwpHUNd31XL6cpZ8Vr%2FD4J3wDhBjWYUXx5TxTzhQHnhNWtAAegRp49qk6AhpXvTSRkO7XeD0ScYOw8LdyPHi1Av2jaVC5u09cuJ8JBUI6UVGsmPidDYRQ08a8GvGKaLfHxSS0i%2B3u%2BDtBO4jPFjVcxh83sWpDy2BeQlqu4f89vafchrVV7XqAIb%2FzTK5KFl6TyTCydqNrFm7NN8RRo4wBjLdmZOpUHZuPP35pvG1Szt4R%2BVPj1s47%2BJJxvTa%2FGbtZkZm9762LzMnMCvq4ecmuS3xO37iTj9AFwtDUM0bmpBpbYuxIqPAN%2FMJickn22clUojUfgz8KWfd3rSunaVIdeXoez1G7LvR6puhhakVEX%2FeFglghdKF3qF8OrZ8g7DSLhWF0cjTucFmj%2FjOxH0rTRR43seI%2BjG%2Fpd4PAaY0muY8bVcQxJNzEZRjReSNhXbK0c5sdUnmnmwG2dDguxpEDwmSh2z2s2qqEOHGUhDlpy1uIs2dlxgvxi84gNWvlRV%2FKdu8DGBdSoKiXzf5NvKhk55ucjsV%2BR6uFYgCXeW6YqE3Fx1EJzRAuWHJDq%2FrDoSRO2XgDLTTz0sKAwvpCKvgY6pgGas82NIfHkFwgnZXLRYvGIizoaEVwsd7TH9YcKKGKwnCuZSLH%2FwWloK83J8VHkQRS%2FvNQYHTJj4CFEBEMRuPnztR4jJmealuvuMehskz0zOyoERdubrrwx6wOHkhLIrnB1OBQ7bBWSyuw9xr4PEyH2yyoqaqntW%2BILvPGBqKqdp24G5tIj%2FNeTeOEfEBXMXizMmPteLm%2FbRC9ja1uaiAYGKS8109ji&X-Amz-Signature=4992266a79bb459920b6e4cfb1054a33952931fd78f85b3d2a32e3c6a6525baf&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDXMFVTS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIAt0%2F5M3qAjbVhMgyYBPVGXm2S1V9Mr%2F3V0coBmphtoRAiBihzDRNSIx%2BEpTPpb8E09dkWrgea1ITwOzcmi2hH5wkiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw%2FxtcKFzVTKeXgYGKtwDGbKdyTzzwS8sZTnqyPgD4Gq%2FbFwcY1CvUAN4nyRl9gdumiGwpHUNd31XL6cpZ8Vr%2FD4J3wDhBjWYUXx5TxTzhQHnhNWtAAegRp49qk6AhpXvTSRkO7XeD0ScYOw8LdyPHi1Av2jaVC5u09cuJ8JBUI6UVGsmPidDYRQ08a8GvGKaLfHxSS0i%2B3u%2BDtBO4jPFjVcxh83sWpDy2BeQlqu4f89vafchrVV7XqAIb%2FzTK5KFl6TyTCydqNrFm7NN8RRo4wBjLdmZOpUHZuPP35pvG1Szt4R%2BVPj1s47%2BJJxvTa%2FGbtZkZm9762LzMnMCvq4ecmuS3xO37iTj9AFwtDUM0bmpBpbYuxIqPAN%2FMJickn22clUojUfgz8KWfd3rSunaVIdeXoez1G7LvR6puhhakVEX%2FeFglghdKF3qF8OrZ8g7DSLhWF0cjTucFmj%2FjOxH0rTRR43seI%2BjG%2Fpd4PAaY0muY8bVcQxJNzEZRjReSNhXbK0c5sdUnmnmwG2dDguxpEDwmSh2z2s2qqEOHGUhDlpy1uIs2dlxgvxi84gNWvlRV%2FKdu8DGBdSoKiXzf5NvKhk55ucjsV%2BR6uFYgCXeW6YqE3Fx1EJzRAuWHJDq%2FrDoSRO2XgDLTTz0sKAwvpCKvgY6pgGas82NIfHkFwgnZXLRYvGIizoaEVwsd7TH9YcKKGKwnCuZSLH%2FwWloK83J8VHkQRS%2FvNQYHTJj4CFEBEMRuPnztR4jJmealuvuMehskz0zOyoERdubrrwx6wOHkhLIrnB1OBQ7bBWSyuw9xr4PEyH2yyoqaqntW%2BILvPGBqKqdp24G5tIj%2FNeTeOEfEBXMXizMmPteLm%2FbRC9ja1uaiAYGKS8109ji&X-Amz-Signature=7a5f1ec707cce94cb8b08aeb09b95886e19fedf3eee7a602777fdf8bad229cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDXMFVTS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIAt0%2F5M3qAjbVhMgyYBPVGXm2S1V9Mr%2F3V0coBmphtoRAiBihzDRNSIx%2BEpTPpb8E09dkWrgea1ITwOzcmi2hH5wkiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw%2FxtcKFzVTKeXgYGKtwDGbKdyTzzwS8sZTnqyPgD4Gq%2FbFwcY1CvUAN4nyRl9gdumiGwpHUNd31XL6cpZ8Vr%2FD4J3wDhBjWYUXx5TxTzhQHnhNWtAAegRp49qk6AhpXvTSRkO7XeD0ScYOw8LdyPHi1Av2jaVC5u09cuJ8JBUI6UVGsmPidDYRQ08a8GvGKaLfHxSS0i%2B3u%2BDtBO4jPFjVcxh83sWpDy2BeQlqu4f89vafchrVV7XqAIb%2FzTK5KFl6TyTCydqNrFm7NN8RRo4wBjLdmZOpUHZuPP35pvG1Szt4R%2BVPj1s47%2BJJxvTa%2FGbtZkZm9762LzMnMCvq4ecmuS3xO37iTj9AFwtDUM0bmpBpbYuxIqPAN%2FMJickn22clUojUfgz8KWfd3rSunaVIdeXoez1G7LvR6puhhakVEX%2FeFglghdKF3qF8OrZ8g7DSLhWF0cjTucFmj%2FjOxH0rTRR43seI%2BjG%2Fpd4PAaY0muY8bVcQxJNzEZRjReSNhXbK0c5sdUnmnmwG2dDguxpEDwmSh2z2s2qqEOHGUhDlpy1uIs2dlxgvxi84gNWvlRV%2FKdu8DGBdSoKiXzf5NvKhk55ucjsV%2BR6uFYgCXeW6YqE3Fx1EJzRAuWHJDq%2FrDoSRO2XgDLTTz0sKAwvpCKvgY6pgGas82NIfHkFwgnZXLRYvGIizoaEVwsd7TH9YcKKGKwnCuZSLH%2FwWloK83J8VHkQRS%2FvNQYHTJj4CFEBEMRuPnztR4jJmealuvuMehskz0zOyoERdubrrwx6wOHkhLIrnB1OBQ7bBWSyuw9xr4PEyH2yyoqaqntW%2BILvPGBqKqdp24G5tIj%2FNeTeOEfEBXMXizMmPteLm%2FbRC9ja1uaiAYGKS8109ji&X-Amz-Signature=055bf50b9677c4cdca1690d33c2f2c2d677de27681e1198764caaca63f41a481&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
