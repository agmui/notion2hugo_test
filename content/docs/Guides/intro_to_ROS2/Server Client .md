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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LJGHQUJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCJRXQ%2B9pbJrdC5SdY0vxlrn1BTVWO2SRZeJnvJiSJ3AiEA%2BDzI%2FFqwg6Pw%2BmZflskFYC%2F6MUlFIvRX9Dgv0mhLo3oq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJlq15tc%2FRNyW%2FelFCrcA%2BA%2B5ztOCqmota8KXFpP3iw%2BwAvcXVTI4pj1THq64L74S%2Fm2kdBebW%2FWSPBgpN2CIEC7i77CYPrUoD6pu5R07jkEtfCQF9ycavSpJLh8A3Cz5UPqX5SJyMf4w7i4%2FIuqo%2BkDL4nkc40yGs6OolmXZG1%2F40VoGBpZByQzPVY6YZGt5zSwd7HEWShsj4pIUeqOLhUP2IultsZWI%2FcgQ%2BKJ1LaUr%2Frrs%2FDNTQtCEagmdt1R%2FIefxOY2efOEeljEGXnhDsNu0rN2gbRKgB88VKEegnPJPWZGzBmTvLoPVV03xGh7KgwtPA7nGpn8eedJsaTDuOKdCaM66QS4nHYMjfE0dJwxiBq3lPNThw4k3N9Vn0OvslvgwRTNdYohO3uov1TPG5t6jdW68Z4AsNN3h2I94AzBJQKdHrP7xU87DNymbLhLfmAPoLc1U9i7113g5ggf82ubr1I0WFOlmbfni5UmY3M6w9uOuVEooGcvZZ2oMWM3DQGe3zeGRJd4%2BP2QPzptvO4EHj92cFVoX6DnfKB%2FTwr%2F4nlyOqaZnA9521KnngC8qcfWtshS7quBHoyI36r1VJkL0VHosOvS967ISiB7pGSzz38XoEczZOmwiE8QU7ia9FKFvv%2BYg2TKbdPNML2ru70GOqUBDNxev6WX91Etbd9TMJSbCnPDUpyft7%2FDdifGK7GqxgK0xnkryln9WpSdVJ1TDAa7HCNFOE%2FY%2BwiUL6hqTuQK5Qg73zCQAsKrdBdjYVXN8Z1%2BeXY6NHSj5Duw7U3UgqKg5pdkrbcFIF3950GdAL1VNQZiIF1L3nD6MUagYEym2Dt6QMNFqo1wnrt9paChglF8HHq8PM7aXMgAjG359piPbU07u%2FYa&X-Amz-Signature=6f0b792f6aa3423e69121894026f5fd4f9e4940505bcce476c0237a5f4b5d50b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LJGHQUJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCJRXQ%2B9pbJrdC5SdY0vxlrn1BTVWO2SRZeJnvJiSJ3AiEA%2BDzI%2FFqwg6Pw%2BmZflskFYC%2F6MUlFIvRX9Dgv0mhLo3oq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJlq15tc%2FRNyW%2FelFCrcA%2BA%2B5ztOCqmota8KXFpP3iw%2BwAvcXVTI4pj1THq64L74S%2Fm2kdBebW%2FWSPBgpN2CIEC7i77CYPrUoD6pu5R07jkEtfCQF9ycavSpJLh8A3Cz5UPqX5SJyMf4w7i4%2FIuqo%2BkDL4nkc40yGs6OolmXZG1%2F40VoGBpZByQzPVY6YZGt5zSwd7HEWShsj4pIUeqOLhUP2IultsZWI%2FcgQ%2BKJ1LaUr%2Frrs%2FDNTQtCEagmdt1R%2FIefxOY2efOEeljEGXnhDsNu0rN2gbRKgB88VKEegnPJPWZGzBmTvLoPVV03xGh7KgwtPA7nGpn8eedJsaTDuOKdCaM66QS4nHYMjfE0dJwxiBq3lPNThw4k3N9Vn0OvslvgwRTNdYohO3uov1TPG5t6jdW68Z4AsNN3h2I94AzBJQKdHrP7xU87DNymbLhLfmAPoLc1U9i7113g5ggf82ubr1I0WFOlmbfni5UmY3M6w9uOuVEooGcvZZ2oMWM3DQGe3zeGRJd4%2BP2QPzptvO4EHj92cFVoX6DnfKB%2FTwr%2F4nlyOqaZnA9521KnngC8qcfWtshS7quBHoyI36r1VJkL0VHosOvS967ISiB7pGSzz38XoEczZOmwiE8QU7ia9FKFvv%2BYg2TKbdPNML2ru70GOqUBDNxev6WX91Etbd9TMJSbCnPDUpyft7%2FDdifGK7GqxgK0xnkryln9WpSdVJ1TDAa7HCNFOE%2FY%2BwiUL6hqTuQK5Qg73zCQAsKrdBdjYVXN8Z1%2BeXY6NHSj5Duw7U3UgqKg5pdkrbcFIF3950GdAL1VNQZiIF1L3nD6MUagYEym2Dt6QMNFqo1wnrt9paChglF8HHq8PM7aXMgAjG359piPbU07u%2FYa&X-Amz-Signature=28588ad82a2ea29d1ffdc74bc57ab4a77fe440855d3292b1350cc1f10c4e8504&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LJGHQUJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCJRXQ%2B9pbJrdC5SdY0vxlrn1BTVWO2SRZeJnvJiSJ3AiEA%2BDzI%2FFqwg6Pw%2BmZflskFYC%2F6MUlFIvRX9Dgv0mhLo3oq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJlq15tc%2FRNyW%2FelFCrcA%2BA%2B5ztOCqmota8KXFpP3iw%2BwAvcXVTI4pj1THq64L74S%2Fm2kdBebW%2FWSPBgpN2CIEC7i77CYPrUoD6pu5R07jkEtfCQF9ycavSpJLh8A3Cz5UPqX5SJyMf4w7i4%2FIuqo%2BkDL4nkc40yGs6OolmXZG1%2F40VoGBpZByQzPVY6YZGt5zSwd7HEWShsj4pIUeqOLhUP2IultsZWI%2FcgQ%2BKJ1LaUr%2Frrs%2FDNTQtCEagmdt1R%2FIefxOY2efOEeljEGXnhDsNu0rN2gbRKgB88VKEegnPJPWZGzBmTvLoPVV03xGh7KgwtPA7nGpn8eedJsaTDuOKdCaM66QS4nHYMjfE0dJwxiBq3lPNThw4k3N9Vn0OvslvgwRTNdYohO3uov1TPG5t6jdW68Z4AsNN3h2I94AzBJQKdHrP7xU87DNymbLhLfmAPoLc1U9i7113g5ggf82ubr1I0WFOlmbfni5UmY3M6w9uOuVEooGcvZZ2oMWM3DQGe3zeGRJd4%2BP2QPzptvO4EHj92cFVoX6DnfKB%2FTwr%2F4nlyOqaZnA9521KnngC8qcfWtshS7quBHoyI36r1VJkL0VHosOvS967ISiB7pGSzz38XoEczZOmwiE8QU7ia9FKFvv%2BYg2TKbdPNML2ru70GOqUBDNxev6WX91Etbd9TMJSbCnPDUpyft7%2FDdifGK7GqxgK0xnkryln9WpSdVJ1TDAa7HCNFOE%2FY%2BwiUL6hqTuQK5Qg73zCQAsKrdBdjYVXN8Z1%2BeXY6NHSj5Duw7U3UgqKg5pdkrbcFIF3950GdAL1VNQZiIF1L3nD6MUagYEym2Dt6QMNFqo1wnrt9paChglF8HHq8PM7aXMgAjG359piPbU07u%2FYa&X-Amz-Signature=4d8da5359ff9913ad0cf5ef7e8c9b49ba75167e36d6c83b0756437f608c4accd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LJGHQUJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCJRXQ%2B9pbJrdC5SdY0vxlrn1BTVWO2SRZeJnvJiSJ3AiEA%2BDzI%2FFqwg6Pw%2BmZflskFYC%2F6MUlFIvRX9Dgv0mhLo3oq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJlq15tc%2FRNyW%2FelFCrcA%2BA%2B5ztOCqmota8KXFpP3iw%2BwAvcXVTI4pj1THq64L74S%2Fm2kdBebW%2FWSPBgpN2CIEC7i77CYPrUoD6pu5R07jkEtfCQF9ycavSpJLh8A3Cz5UPqX5SJyMf4w7i4%2FIuqo%2BkDL4nkc40yGs6OolmXZG1%2F40VoGBpZByQzPVY6YZGt5zSwd7HEWShsj4pIUeqOLhUP2IultsZWI%2FcgQ%2BKJ1LaUr%2Frrs%2FDNTQtCEagmdt1R%2FIefxOY2efOEeljEGXnhDsNu0rN2gbRKgB88VKEegnPJPWZGzBmTvLoPVV03xGh7KgwtPA7nGpn8eedJsaTDuOKdCaM66QS4nHYMjfE0dJwxiBq3lPNThw4k3N9Vn0OvslvgwRTNdYohO3uov1TPG5t6jdW68Z4AsNN3h2I94AzBJQKdHrP7xU87DNymbLhLfmAPoLc1U9i7113g5ggf82ubr1I0WFOlmbfni5UmY3M6w9uOuVEooGcvZZ2oMWM3DQGe3zeGRJd4%2BP2QPzptvO4EHj92cFVoX6DnfKB%2FTwr%2F4nlyOqaZnA9521KnngC8qcfWtshS7quBHoyI36r1VJkL0VHosOvS967ISiB7pGSzz38XoEczZOmwiE8QU7ia9FKFvv%2BYg2TKbdPNML2ru70GOqUBDNxev6WX91Etbd9TMJSbCnPDUpyft7%2FDdifGK7GqxgK0xnkryln9WpSdVJ1TDAa7HCNFOE%2FY%2BwiUL6hqTuQK5Qg73zCQAsKrdBdjYVXN8Z1%2BeXY6NHSj5Duw7U3UgqKg5pdkrbcFIF3950GdAL1VNQZiIF1L3nD6MUagYEym2Dt6QMNFqo1wnrt9paChglF8HHq8PM7aXMgAjG359piPbU07u%2FYa&X-Amz-Signature=d6bfef341006cbbf3c2d08c4628910c6f0cdac93588b06a5fcc1cbb2b0471b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LJGHQUJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCJRXQ%2B9pbJrdC5SdY0vxlrn1BTVWO2SRZeJnvJiSJ3AiEA%2BDzI%2FFqwg6Pw%2BmZflskFYC%2F6MUlFIvRX9Dgv0mhLo3oq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJlq15tc%2FRNyW%2FelFCrcA%2BA%2B5ztOCqmota8KXFpP3iw%2BwAvcXVTI4pj1THq64L74S%2Fm2kdBebW%2FWSPBgpN2CIEC7i77CYPrUoD6pu5R07jkEtfCQF9ycavSpJLh8A3Cz5UPqX5SJyMf4w7i4%2FIuqo%2BkDL4nkc40yGs6OolmXZG1%2F40VoGBpZByQzPVY6YZGt5zSwd7HEWShsj4pIUeqOLhUP2IultsZWI%2FcgQ%2BKJ1LaUr%2Frrs%2FDNTQtCEagmdt1R%2FIefxOY2efOEeljEGXnhDsNu0rN2gbRKgB88VKEegnPJPWZGzBmTvLoPVV03xGh7KgwtPA7nGpn8eedJsaTDuOKdCaM66QS4nHYMjfE0dJwxiBq3lPNThw4k3N9Vn0OvslvgwRTNdYohO3uov1TPG5t6jdW68Z4AsNN3h2I94AzBJQKdHrP7xU87DNymbLhLfmAPoLc1U9i7113g5ggf82ubr1I0WFOlmbfni5UmY3M6w9uOuVEooGcvZZ2oMWM3DQGe3zeGRJd4%2BP2QPzptvO4EHj92cFVoX6DnfKB%2FTwr%2F4nlyOqaZnA9521KnngC8qcfWtshS7quBHoyI36r1VJkL0VHosOvS967ISiB7pGSzz38XoEczZOmwiE8QU7ia9FKFvv%2BYg2TKbdPNML2ru70GOqUBDNxev6WX91Etbd9TMJSbCnPDUpyft7%2FDdifGK7GqxgK0xnkryln9WpSdVJ1TDAa7HCNFOE%2FY%2BwiUL6hqTuQK5Qg73zCQAsKrdBdjYVXN8Z1%2BeXY6NHSj5Duw7U3UgqKg5pdkrbcFIF3950GdAL1VNQZiIF1L3nD6MUagYEym2Dt6QMNFqo1wnrt9paChglF8HHq8PM7aXMgAjG359piPbU07u%2FYa&X-Amz-Signature=d25e15e320e4e39171c1c17893165028580424651b115653933972df87062736&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
