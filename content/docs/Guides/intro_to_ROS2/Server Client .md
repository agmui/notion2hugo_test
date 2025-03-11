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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z252H2KW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIF3kLDnNnBQVkyBSfdanziWCneWTOVD5%2Fe4O9sRkJV5mAiEAz9odp6TG61Jf5zQcKJctzB6RmWmegmmpZv%2F5UiGeq7UqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8wcKYzBrobtkfdIircA14Sb10Zdfrnz6sSCdiK%2FsztbGtedfVdBDRxmsgMihJwaXzyJI6Q8g3DXH6I5aoIyelIm9ZaE9yEv0dhA5SMCbetOANWZLoI7SX%2BoAaK341gDifwhzzkdjb94aCARdMtCW0kP3sEg5h1VcP9rCsnWdShZ7t6WdmsnvASuLKfKR%2BDvOrPkbRD467aQz008oKZIJu17UQIyeQqqfN1HcgY6vd%2BBqf0M9M0py%2Fn4%2FuBKeR%2FBKx6OCO1W8Qy1BXDTbGVcPAFDaSslu26q%2BuHmHxw%2Fqc%2F0NchjQS3fkkFz1FvQoXJuOKCWtAOwsKWYlDGgcNKkFsGe%2BsQhMSjoaPe9fzgDppvwdj722sIudrx5S04nwf82JJVRG3KDaOY8viIgaLfz52%2B88A%2FkYi%2Ft1P%2FGRzZ5gLNm%2Bf%2Fvp06VM%2B2Mu2eyxcFPamfb1FCgrjZ%2B079topuBt4iC7qAQ6JKubN0McjgrM7NzJYjylOwAbhm18DIeobCwnYl3Q8PV9S%2FEy6S4BGuFbrGhepBS0jHvMB%2BK2PepWSfh5cl2qTl7MHNHbumzP7Q27D5KBO8OBYV7zTuvZbeVLW2u8v%2BGLfWEG6k4doXzOYYKZcfp8E5t1cqJXNphwTJJg2oFbCDEM%2BQnTebMOPPvr4GOqUBeAfFHCwlyAlTwhlgH6er%2BXY1g0EAHHNYMfPPoqgo6%2B%2FvJ1v39cP14wIW3ByK0NSMqKFkZEoDSaEfLi%2BeqZKRNVFeaaoEbB9i51fux8MmZ2J07GbBCircXWgP0w4ThB2XrdIQE%2FZV4wiBlmTz9IoHMuYGstFRpvAejhBJ8yp8QhKcAFerTPgzDlxphahLBjYJaE%2FY5xbTicwYyOw4h0srjyQhJTf2&X-Amz-Signature=9c57b1d48ec8dc32dc17f5632bae34e943f0d0d069e2c0b9c4875a49a5ab81ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z252H2KW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIF3kLDnNnBQVkyBSfdanziWCneWTOVD5%2Fe4O9sRkJV5mAiEAz9odp6TG61Jf5zQcKJctzB6RmWmegmmpZv%2F5UiGeq7UqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8wcKYzBrobtkfdIircA14Sb10Zdfrnz6sSCdiK%2FsztbGtedfVdBDRxmsgMihJwaXzyJI6Q8g3DXH6I5aoIyelIm9ZaE9yEv0dhA5SMCbetOANWZLoI7SX%2BoAaK341gDifwhzzkdjb94aCARdMtCW0kP3sEg5h1VcP9rCsnWdShZ7t6WdmsnvASuLKfKR%2BDvOrPkbRD467aQz008oKZIJu17UQIyeQqqfN1HcgY6vd%2BBqf0M9M0py%2Fn4%2FuBKeR%2FBKx6OCO1W8Qy1BXDTbGVcPAFDaSslu26q%2BuHmHxw%2Fqc%2F0NchjQS3fkkFz1FvQoXJuOKCWtAOwsKWYlDGgcNKkFsGe%2BsQhMSjoaPe9fzgDppvwdj722sIudrx5S04nwf82JJVRG3KDaOY8viIgaLfz52%2B88A%2FkYi%2Ft1P%2FGRzZ5gLNm%2Bf%2Fvp06VM%2B2Mu2eyxcFPamfb1FCgrjZ%2B079topuBt4iC7qAQ6JKubN0McjgrM7NzJYjylOwAbhm18DIeobCwnYl3Q8PV9S%2FEy6S4BGuFbrGhepBS0jHvMB%2BK2PepWSfh5cl2qTl7MHNHbumzP7Q27D5KBO8OBYV7zTuvZbeVLW2u8v%2BGLfWEG6k4doXzOYYKZcfp8E5t1cqJXNphwTJJg2oFbCDEM%2BQnTebMOPPvr4GOqUBeAfFHCwlyAlTwhlgH6er%2BXY1g0EAHHNYMfPPoqgo6%2B%2FvJ1v39cP14wIW3ByK0NSMqKFkZEoDSaEfLi%2BeqZKRNVFeaaoEbB9i51fux8MmZ2J07GbBCircXWgP0w4ThB2XrdIQE%2FZV4wiBlmTz9IoHMuYGstFRpvAejhBJ8yp8QhKcAFerTPgzDlxphahLBjYJaE%2FY5xbTicwYyOw4h0srjyQhJTf2&X-Amz-Signature=09751faf1d07be46c4ddef07289d28ae091f66578a81a28d6a231818401c5dcd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z252H2KW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIF3kLDnNnBQVkyBSfdanziWCneWTOVD5%2Fe4O9sRkJV5mAiEAz9odp6TG61Jf5zQcKJctzB6RmWmegmmpZv%2F5UiGeq7UqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8wcKYzBrobtkfdIircA14Sb10Zdfrnz6sSCdiK%2FsztbGtedfVdBDRxmsgMihJwaXzyJI6Q8g3DXH6I5aoIyelIm9ZaE9yEv0dhA5SMCbetOANWZLoI7SX%2BoAaK341gDifwhzzkdjb94aCARdMtCW0kP3sEg5h1VcP9rCsnWdShZ7t6WdmsnvASuLKfKR%2BDvOrPkbRD467aQz008oKZIJu17UQIyeQqqfN1HcgY6vd%2BBqf0M9M0py%2Fn4%2FuBKeR%2FBKx6OCO1W8Qy1BXDTbGVcPAFDaSslu26q%2BuHmHxw%2Fqc%2F0NchjQS3fkkFz1FvQoXJuOKCWtAOwsKWYlDGgcNKkFsGe%2BsQhMSjoaPe9fzgDppvwdj722sIudrx5S04nwf82JJVRG3KDaOY8viIgaLfz52%2B88A%2FkYi%2Ft1P%2FGRzZ5gLNm%2Bf%2Fvp06VM%2B2Mu2eyxcFPamfb1FCgrjZ%2B079topuBt4iC7qAQ6JKubN0McjgrM7NzJYjylOwAbhm18DIeobCwnYl3Q8PV9S%2FEy6S4BGuFbrGhepBS0jHvMB%2BK2PepWSfh5cl2qTl7MHNHbumzP7Q27D5KBO8OBYV7zTuvZbeVLW2u8v%2BGLfWEG6k4doXzOYYKZcfp8E5t1cqJXNphwTJJg2oFbCDEM%2BQnTebMOPPvr4GOqUBeAfFHCwlyAlTwhlgH6er%2BXY1g0EAHHNYMfPPoqgo6%2B%2FvJ1v39cP14wIW3ByK0NSMqKFkZEoDSaEfLi%2BeqZKRNVFeaaoEbB9i51fux8MmZ2J07GbBCircXWgP0w4ThB2XrdIQE%2FZV4wiBlmTz9IoHMuYGstFRpvAejhBJ8yp8QhKcAFerTPgzDlxphahLBjYJaE%2FY5xbTicwYyOw4h0srjyQhJTf2&X-Amz-Signature=9f702018e416ed7ccacf4bddd577fd1e4c6fb19f233dcc3f3374efbcd4519cd9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z252H2KW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIF3kLDnNnBQVkyBSfdanziWCneWTOVD5%2Fe4O9sRkJV5mAiEAz9odp6TG61Jf5zQcKJctzB6RmWmegmmpZv%2F5UiGeq7UqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8wcKYzBrobtkfdIircA14Sb10Zdfrnz6sSCdiK%2FsztbGtedfVdBDRxmsgMihJwaXzyJI6Q8g3DXH6I5aoIyelIm9ZaE9yEv0dhA5SMCbetOANWZLoI7SX%2BoAaK341gDifwhzzkdjb94aCARdMtCW0kP3sEg5h1VcP9rCsnWdShZ7t6WdmsnvASuLKfKR%2BDvOrPkbRD467aQz008oKZIJu17UQIyeQqqfN1HcgY6vd%2BBqf0M9M0py%2Fn4%2FuBKeR%2FBKx6OCO1W8Qy1BXDTbGVcPAFDaSslu26q%2BuHmHxw%2Fqc%2F0NchjQS3fkkFz1FvQoXJuOKCWtAOwsKWYlDGgcNKkFsGe%2BsQhMSjoaPe9fzgDppvwdj722sIudrx5S04nwf82JJVRG3KDaOY8viIgaLfz52%2B88A%2FkYi%2Ft1P%2FGRzZ5gLNm%2Bf%2Fvp06VM%2B2Mu2eyxcFPamfb1FCgrjZ%2B079topuBt4iC7qAQ6JKubN0McjgrM7NzJYjylOwAbhm18DIeobCwnYl3Q8PV9S%2FEy6S4BGuFbrGhepBS0jHvMB%2BK2PepWSfh5cl2qTl7MHNHbumzP7Q27D5KBO8OBYV7zTuvZbeVLW2u8v%2BGLfWEG6k4doXzOYYKZcfp8E5t1cqJXNphwTJJg2oFbCDEM%2BQnTebMOPPvr4GOqUBeAfFHCwlyAlTwhlgH6er%2BXY1g0EAHHNYMfPPoqgo6%2B%2FvJ1v39cP14wIW3ByK0NSMqKFkZEoDSaEfLi%2BeqZKRNVFeaaoEbB9i51fux8MmZ2J07GbBCircXWgP0w4ThB2XrdIQE%2FZV4wiBlmTz9IoHMuYGstFRpvAejhBJ8yp8QhKcAFerTPgzDlxphahLBjYJaE%2FY5xbTicwYyOw4h0srjyQhJTf2&X-Amz-Signature=2b14ee4f27ffde22fbddccf26c8f854534e60cff903b86a42c7e57808fb985dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z252H2KW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIF3kLDnNnBQVkyBSfdanziWCneWTOVD5%2Fe4O9sRkJV5mAiEAz9odp6TG61Jf5zQcKJctzB6RmWmegmmpZv%2F5UiGeq7UqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8wcKYzBrobtkfdIircA14Sb10Zdfrnz6sSCdiK%2FsztbGtedfVdBDRxmsgMihJwaXzyJI6Q8g3DXH6I5aoIyelIm9ZaE9yEv0dhA5SMCbetOANWZLoI7SX%2BoAaK341gDifwhzzkdjb94aCARdMtCW0kP3sEg5h1VcP9rCsnWdShZ7t6WdmsnvASuLKfKR%2BDvOrPkbRD467aQz008oKZIJu17UQIyeQqqfN1HcgY6vd%2BBqf0M9M0py%2Fn4%2FuBKeR%2FBKx6OCO1W8Qy1BXDTbGVcPAFDaSslu26q%2BuHmHxw%2Fqc%2F0NchjQS3fkkFz1FvQoXJuOKCWtAOwsKWYlDGgcNKkFsGe%2BsQhMSjoaPe9fzgDppvwdj722sIudrx5S04nwf82JJVRG3KDaOY8viIgaLfz52%2B88A%2FkYi%2Ft1P%2FGRzZ5gLNm%2Bf%2Fvp06VM%2B2Mu2eyxcFPamfb1FCgrjZ%2B079topuBt4iC7qAQ6JKubN0McjgrM7NzJYjylOwAbhm18DIeobCwnYl3Q8PV9S%2FEy6S4BGuFbrGhepBS0jHvMB%2BK2PepWSfh5cl2qTl7MHNHbumzP7Q27D5KBO8OBYV7zTuvZbeVLW2u8v%2BGLfWEG6k4doXzOYYKZcfp8E5t1cqJXNphwTJJg2oFbCDEM%2BQnTebMOPPvr4GOqUBeAfFHCwlyAlTwhlgH6er%2BXY1g0EAHHNYMfPPoqgo6%2B%2FvJ1v39cP14wIW3ByK0NSMqKFkZEoDSaEfLi%2BeqZKRNVFeaaoEbB9i51fux8MmZ2J07GbBCircXWgP0w4ThB2XrdIQE%2FZV4wiBlmTz9IoHMuYGstFRpvAejhBJ8yp8QhKcAFerTPgzDlxphahLBjYJaE%2FY5xbTicwYyOw4h0srjyQhJTf2&X-Amz-Signature=e2145525d1e2c7ea3e89bf6e746e744b7936a7f2deeba0021b3ceb9ebac75a28&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
