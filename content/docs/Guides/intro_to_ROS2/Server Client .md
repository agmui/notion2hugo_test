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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U64LGJMO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqKJ7so3XRsD0cbn6mDfUPveGqJs7G5k6lkZBfk19pQAiEA4tokE7gTezTlqK6TpzJ3Q1mIpSkPYR%2FAeJhuoZTINOQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCulaVSTvnI3Y3nlEyrcA8xFUvbbc0qghYtR451%2BsZq8O8ELSvPEVQdl5V%2Fu%2F3KD3wCZJmyARNlNSBEwaRbvGdgpDf%2BJafEkSy7JITYILHFGNydClKCRlizcdSZvYK062bY5gJd6ZDnlpqChMZdsb1PZ86NYMFeu7dB%2FKwq%2F2ofv%2F5ywctq5zUJpHrraoCpDNNfq598xhKcPpCUBnIvf24v4d0ySF7I5rJeL%2BqaYyVXgWgBHUp6WI7cezTgiyZAcRtH%2BE6xET5XH5yY33E8kaSGgoobNIKQuq5phqDPhi9YsGAcjmI%2FEc1nwF8tD5q1lYFDYe4guMEQFO6JrnW04ZmmxukomWY5Z7doT4zSlxWhJlFF7SKG9g9dKeXzvzM3svJiFid514IGkKZTp%2B5tcq9xvq50ioLetNjPA6htTyri%2BM95E7RzX0KpsgvJTXNnIUSptDBgCVAyE%2FAqtRQDGLqeWF4YatzgAwpclbzMr7zlHvm65qFa%2FyY9NgIJVcm22hdO%2B4bQNa4VRqRa2ZkA6DTXtwAv7XSy1lSiDERhLnZlMM5AbjAy4NAqC5%2BEEYCFrDe4uHMYLQ%2F819Acr8L0x26eQQuGbo5DsRdGD8qfbgWX00qQAueNUknvcIU6TO1ccA9C6iXnoL2X6wRFoMN%2BLsb0GOqUBJ%2F4uucDu%2Bcn%2BLY7BBjDVtlJ%2Bzuw9%2FBddoTrakEaITwiO77eM9URcDKFbnqF90gxprqrFFMcnm3HUCcrdoZOU8BwwXPe2%2BYIRC5lJaY4UfkKiW%2BDjxerYVPfk6FdbP1LP6p3Uo47il8tn%2FAn1hv6W0hpYY8oplzrh5pfusWUZ9sBzdYgAeXae25g8vFBFgS7RroM3AEkdkakrT7RPq7TKpX0HeMso&X-Amz-Signature=441cf3824efdf75464bf996f3d78ed8bc1645cd2cd9b2cbc1cb937d6a7fc24e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U64LGJMO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqKJ7so3XRsD0cbn6mDfUPveGqJs7G5k6lkZBfk19pQAiEA4tokE7gTezTlqK6TpzJ3Q1mIpSkPYR%2FAeJhuoZTINOQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCulaVSTvnI3Y3nlEyrcA8xFUvbbc0qghYtR451%2BsZq8O8ELSvPEVQdl5V%2Fu%2F3KD3wCZJmyARNlNSBEwaRbvGdgpDf%2BJafEkSy7JITYILHFGNydClKCRlizcdSZvYK062bY5gJd6ZDnlpqChMZdsb1PZ86NYMFeu7dB%2FKwq%2F2ofv%2F5ywctq5zUJpHrraoCpDNNfq598xhKcPpCUBnIvf24v4d0ySF7I5rJeL%2BqaYyVXgWgBHUp6WI7cezTgiyZAcRtH%2BE6xET5XH5yY33E8kaSGgoobNIKQuq5phqDPhi9YsGAcjmI%2FEc1nwF8tD5q1lYFDYe4guMEQFO6JrnW04ZmmxukomWY5Z7doT4zSlxWhJlFF7SKG9g9dKeXzvzM3svJiFid514IGkKZTp%2B5tcq9xvq50ioLetNjPA6htTyri%2BM95E7RzX0KpsgvJTXNnIUSptDBgCVAyE%2FAqtRQDGLqeWF4YatzgAwpclbzMr7zlHvm65qFa%2FyY9NgIJVcm22hdO%2B4bQNa4VRqRa2ZkA6DTXtwAv7XSy1lSiDERhLnZlMM5AbjAy4NAqC5%2BEEYCFrDe4uHMYLQ%2F819Acr8L0x26eQQuGbo5DsRdGD8qfbgWX00qQAueNUknvcIU6TO1ccA9C6iXnoL2X6wRFoMN%2BLsb0GOqUBJ%2F4uucDu%2Bcn%2BLY7BBjDVtlJ%2Bzuw9%2FBddoTrakEaITwiO77eM9URcDKFbnqF90gxprqrFFMcnm3HUCcrdoZOU8BwwXPe2%2BYIRC5lJaY4UfkKiW%2BDjxerYVPfk6FdbP1LP6p3Uo47il8tn%2FAn1hv6W0hpYY8oplzrh5pfusWUZ9sBzdYgAeXae25g8vFBFgS7RroM3AEkdkakrT7RPq7TKpX0HeMso&X-Amz-Signature=6e8a6d21edf49088ebdbfc3509eb2762cb3a3c964bc204b0618bc30aea30febf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U64LGJMO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqKJ7so3XRsD0cbn6mDfUPveGqJs7G5k6lkZBfk19pQAiEA4tokE7gTezTlqK6TpzJ3Q1mIpSkPYR%2FAeJhuoZTINOQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCulaVSTvnI3Y3nlEyrcA8xFUvbbc0qghYtR451%2BsZq8O8ELSvPEVQdl5V%2Fu%2F3KD3wCZJmyARNlNSBEwaRbvGdgpDf%2BJafEkSy7JITYILHFGNydClKCRlizcdSZvYK062bY5gJd6ZDnlpqChMZdsb1PZ86NYMFeu7dB%2FKwq%2F2ofv%2F5ywctq5zUJpHrraoCpDNNfq598xhKcPpCUBnIvf24v4d0ySF7I5rJeL%2BqaYyVXgWgBHUp6WI7cezTgiyZAcRtH%2BE6xET5XH5yY33E8kaSGgoobNIKQuq5phqDPhi9YsGAcjmI%2FEc1nwF8tD5q1lYFDYe4guMEQFO6JrnW04ZmmxukomWY5Z7doT4zSlxWhJlFF7SKG9g9dKeXzvzM3svJiFid514IGkKZTp%2B5tcq9xvq50ioLetNjPA6htTyri%2BM95E7RzX0KpsgvJTXNnIUSptDBgCVAyE%2FAqtRQDGLqeWF4YatzgAwpclbzMr7zlHvm65qFa%2FyY9NgIJVcm22hdO%2B4bQNa4VRqRa2ZkA6DTXtwAv7XSy1lSiDERhLnZlMM5AbjAy4NAqC5%2BEEYCFrDe4uHMYLQ%2F819Acr8L0x26eQQuGbo5DsRdGD8qfbgWX00qQAueNUknvcIU6TO1ccA9C6iXnoL2X6wRFoMN%2BLsb0GOqUBJ%2F4uucDu%2Bcn%2BLY7BBjDVtlJ%2Bzuw9%2FBddoTrakEaITwiO77eM9URcDKFbnqF90gxprqrFFMcnm3HUCcrdoZOU8BwwXPe2%2BYIRC5lJaY4UfkKiW%2BDjxerYVPfk6FdbP1LP6p3Uo47il8tn%2FAn1hv6W0hpYY8oplzrh5pfusWUZ9sBzdYgAeXae25g8vFBFgS7RroM3AEkdkakrT7RPq7TKpX0HeMso&X-Amz-Signature=a0e8fe61d8cb769998f8f39f764a27e618ea8ee4dd6b478434a5e5da20d332c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U64LGJMO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqKJ7so3XRsD0cbn6mDfUPveGqJs7G5k6lkZBfk19pQAiEA4tokE7gTezTlqK6TpzJ3Q1mIpSkPYR%2FAeJhuoZTINOQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCulaVSTvnI3Y3nlEyrcA8xFUvbbc0qghYtR451%2BsZq8O8ELSvPEVQdl5V%2Fu%2F3KD3wCZJmyARNlNSBEwaRbvGdgpDf%2BJafEkSy7JITYILHFGNydClKCRlizcdSZvYK062bY5gJd6ZDnlpqChMZdsb1PZ86NYMFeu7dB%2FKwq%2F2ofv%2F5ywctq5zUJpHrraoCpDNNfq598xhKcPpCUBnIvf24v4d0ySF7I5rJeL%2BqaYyVXgWgBHUp6WI7cezTgiyZAcRtH%2BE6xET5XH5yY33E8kaSGgoobNIKQuq5phqDPhi9YsGAcjmI%2FEc1nwF8tD5q1lYFDYe4guMEQFO6JrnW04ZmmxukomWY5Z7doT4zSlxWhJlFF7SKG9g9dKeXzvzM3svJiFid514IGkKZTp%2B5tcq9xvq50ioLetNjPA6htTyri%2BM95E7RzX0KpsgvJTXNnIUSptDBgCVAyE%2FAqtRQDGLqeWF4YatzgAwpclbzMr7zlHvm65qFa%2FyY9NgIJVcm22hdO%2B4bQNa4VRqRa2ZkA6DTXtwAv7XSy1lSiDERhLnZlMM5AbjAy4NAqC5%2BEEYCFrDe4uHMYLQ%2F819Acr8L0x26eQQuGbo5DsRdGD8qfbgWX00qQAueNUknvcIU6TO1ccA9C6iXnoL2X6wRFoMN%2BLsb0GOqUBJ%2F4uucDu%2Bcn%2BLY7BBjDVtlJ%2Bzuw9%2FBddoTrakEaITwiO77eM9URcDKFbnqF90gxprqrFFMcnm3HUCcrdoZOU8BwwXPe2%2BYIRC5lJaY4UfkKiW%2BDjxerYVPfk6FdbP1LP6p3Uo47il8tn%2FAn1hv6W0hpYY8oplzrh5pfusWUZ9sBzdYgAeXae25g8vFBFgS7RroM3AEkdkakrT7RPq7TKpX0HeMso&X-Amz-Signature=77c5da288df0ebb429e2dc8658ad789b9bb9ce838e0eeac94147640fe989e767&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U64LGJMO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqKJ7so3XRsD0cbn6mDfUPveGqJs7G5k6lkZBfk19pQAiEA4tokE7gTezTlqK6TpzJ3Q1mIpSkPYR%2FAeJhuoZTINOQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCulaVSTvnI3Y3nlEyrcA8xFUvbbc0qghYtR451%2BsZq8O8ELSvPEVQdl5V%2Fu%2F3KD3wCZJmyARNlNSBEwaRbvGdgpDf%2BJafEkSy7JITYILHFGNydClKCRlizcdSZvYK062bY5gJd6ZDnlpqChMZdsb1PZ86NYMFeu7dB%2FKwq%2F2ofv%2F5ywctq5zUJpHrraoCpDNNfq598xhKcPpCUBnIvf24v4d0ySF7I5rJeL%2BqaYyVXgWgBHUp6WI7cezTgiyZAcRtH%2BE6xET5XH5yY33E8kaSGgoobNIKQuq5phqDPhi9YsGAcjmI%2FEc1nwF8tD5q1lYFDYe4guMEQFO6JrnW04ZmmxukomWY5Z7doT4zSlxWhJlFF7SKG9g9dKeXzvzM3svJiFid514IGkKZTp%2B5tcq9xvq50ioLetNjPA6htTyri%2BM95E7RzX0KpsgvJTXNnIUSptDBgCVAyE%2FAqtRQDGLqeWF4YatzgAwpclbzMr7zlHvm65qFa%2FyY9NgIJVcm22hdO%2B4bQNa4VRqRa2ZkA6DTXtwAv7XSy1lSiDERhLnZlMM5AbjAy4NAqC5%2BEEYCFrDe4uHMYLQ%2F819Acr8L0x26eQQuGbo5DsRdGD8qfbgWX00qQAueNUknvcIU6TO1ccA9C6iXnoL2X6wRFoMN%2BLsb0GOqUBJ%2F4uucDu%2Bcn%2BLY7BBjDVtlJ%2Bzuw9%2FBddoTrakEaITwiO77eM9URcDKFbnqF90gxprqrFFMcnm3HUCcrdoZOU8BwwXPe2%2BYIRC5lJaY4UfkKiW%2BDjxerYVPfk6FdbP1LP6p3Uo47il8tn%2FAn1hv6W0hpYY8oplzrh5pfusWUZ9sBzdYgAeXae25g8vFBFgS7RroM3AEkdkakrT7RPq7TKpX0HeMso&X-Amz-Signature=d33b4614642bc6234794cb117dccb0ae7de1d3f52d4313b516b086a7e1d1ccec&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
