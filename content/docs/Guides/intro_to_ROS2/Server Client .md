---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAIL2KCB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq2AMUeaFip5fG9li3hLxWykNn8og6ZvelV%2BTogKFNTwIhAKF%2BbGWoQyzIXkU8%2BmgZSraaBZ1z%2BaDq4Ym4hr8GyZZoKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRp4wpW30oBZbidLsq3AP%2F7LgilFxbA5BXPQkuRa04ihK6lkzOWICPp2rHS8V7cfefjrKa4xTzyRnEFHGYskPNitmZVCvLy%2BrQkEPT%2BHeB6C0DA8iVbxF0ZTMlLVxUkxTfkwM5TwtWxUBeu%2BdplW%2Fem6BOVPAY177vV%2F5NNeqe0RvG2n%2FxMCyrvhyqxI7ddpJ4UoPzSrG722oL%2FVt2vlpI0jrvL1uWy1K9IAwTaaHD%2FBxrP9jUvVMWwSyNNYfWXxf07LfulKhCmlztT72YUhTbRb2nfO%2BD95QExcCq6LmEa37OUQL4mw6Z%2FIcNiEoXj3Cq1SmDdfQJmJYtOq7gUI3385ucdJs0qMKGQmTP%2BPAx%2F582TKRSFIXoHKdX0pHFMmw5Ctgb6bFvN44yGL%2FIZjcMWF85faWiTZyGBa200xuYetucFPOTF6XehJ7AYil0iUZKDCl8PHzemA0nU56Ks26eQhevHh6SCg9xXVpM%2BUVvefB%2Bu1SeGJCfKHUY1OndcLSDmTnlZqG8VH%2FfAL%2F8n%2F9uygmqSMZfR5b%2Fes9H8iejQqJPNGWn8vq9nosa%2FwfpsAv3r0EYL%2BKpdRJBRnjLZpyychpccB%2B3B5h6Lw%2F3jP4HRoPqXOYtkj1EG4Disk7VcX%2FoAu6fd2eW3Ee5RzCK9uDEBjqkAYfK0XEOf031PsiqEm9rlVsKkt5uFYbRFlpTf7enZhH4im0h%2FusH31Su84XpcfvK6qmb5HJkoTKExIz2%2FKDVAaiJTWOJaqJODlxGLn2CcLS5yHVsALqyRUGmnwdAzSQ0WPN0Zb2LElQyu2lG2sfPL4QqBBW8OC6%2BimKAgahVV%2FwVXPXUdJfuXahs%2Bej2OFsYYtDfcluTBWwxLj2%2F6yPq4yKpGlfo&X-Amz-Signature=460b921d40df8d4b91dea9a5854c15ccbc4d4f7e10b6aa0b0634bb70dddcf187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAIL2KCB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq2AMUeaFip5fG9li3hLxWykNn8og6ZvelV%2BTogKFNTwIhAKF%2BbGWoQyzIXkU8%2BmgZSraaBZ1z%2BaDq4Ym4hr8GyZZoKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRp4wpW30oBZbidLsq3AP%2F7LgilFxbA5BXPQkuRa04ihK6lkzOWICPp2rHS8V7cfefjrKa4xTzyRnEFHGYskPNitmZVCvLy%2BrQkEPT%2BHeB6C0DA8iVbxF0ZTMlLVxUkxTfkwM5TwtWxUBeu%2BdplW%2Fem6BOVPAY177vV%2F5NNeqe0RvG2n%2FxMCyrvhyqxI7ddpJ4UoPzSrG722oL%2FVt2vlpI0jrvL1uWy1K9IAwTaaHD%2FBxrP9jUvVMWwSyNNYfWXxf07LfulKhCmlztT72YUhTbRb2nfO%2BD95QExcCq6LmEa37OUQL4mw6Z%2FIcNiEoXj3Cq1SmDdfQJmJYtOq7gUI3385ucdJs0qMKGQmTP%2BPAx%2F582TKRSFIXoHKdX0pHFMmw5Ctgb6bFvN44yGL%2FIZjcMWF85faWiTZyGBa200xuYetucFPOTF6XehJ7AYil0iUZKDCl8PHzemA0nU56Ks26eQhevHh6SCg9xXVpM%2BUVvefB%2Bu1SeGJCfKHUY1OndcLSDmTnlZqG8VH%2FfAL%2F8n%2F9uygmqSMZfR5b%2Fes9H8iejQqJPNGWn8vq9nosa%2FwfpsAv3r0EYL%2BKpdRJBRnjLZpyychpccB%2B3B5h6Lw%2F3jP4HRoPqXOYtkj1EG4Disk7VcX%2FoAu6fd2eW3Ee5RzCK9uDEBjqkAYfK0XEOf031PsiqEm9rlVsKkt5uFYbRFlpTf7enZhH4im0h%2FusH31Su84XpcfvK6qmb5HJkoTKExIz2%2FKDVAaiJTWOJaqJODlxGLn2CcLS5yHVsALqyRUGmnwdAzSQ0WPN0Zb2LElQyu2lG2sfPL4QqBBW8OC6%2BimKAgahVV%2FwVXPXUdJfuXahs%2Bej2OFsYYtDfcluTBWwxLj2%2F6yPq4yKpGlfo&X-Amz-Signature=eb29295c6e10c67c786ab148d714899c676fe0d5f3d26090b134cc45f9b472c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAIL2KCB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq2AMUeaFip5fG9li3hLxWykNn8og6ZvelV%2BTogKFNTwIhAKF%2BbGWoQyzIXkU8%2BmgZSraaBZ1z%2BaDq4Ym4hr8GyZZoKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRp4wpW30oBZbidLsq3AP%2F7LgilFxbA5BXPQkuRa04ihK6lkzOWICPp2rHS8V7cfefjrKa4xTzyRnEFHGYskPNitmZVCvLy%2BrQkEPT%2BHeB6C0DA8iVbxF0ZTMlLVxUkxTfkwM5TwtWxUBeu%2BdplW%2Fem6BOVPAY177vV%2F5NNeqe0RvG2n%2FxMCyrvhyqxI7ddpJ4UoPzSrG722oL%2FVt2vlpI0jrvL1uWy1K9IAwTaaHD%2FBxrP9jUvVMWwSyNNYfWXxf07LfulKhCmlztT72YUhTbRb2nfO%2BD95QExcCq6LmEa37OUQL4mw6Z%2FIcNiEoXj3Cq1SmDdfQJmJYtOq7gUI3385ucdJs0qMKGQmTP%2BPAx%2F582TKRSFIXoHKdX0pHFMmw5Ctgb6bFvN44yGL%2FIZjcMWF85faWiTZyGBa200xuYetucFPOTF6XehJ7AYil0iUZKDCl8PHzemA0nU56Ks26eQhevHh6SCg9xXVpM%2BUVvefB%2Bu1SeGJCfKHUY1OndcLSDmTnlZqG8VH%2FfAL%2F8n%2F9uygmqSMZfR5b%2Fes9H8iejQqJPNGWn8vq9nosa%2FwfpsAv3r0EYL%2BKpdRJBRnjLZpyychpccB%2B3B5h6Lw%2F3jP4HRoPqXOYtkj1EG4Disk7VcX%2FoAu6fd2eW3Ee5RzCK9uDEBjqkAYfK0XEOf031PsiqEm9rlVsKkt5uFYbRFlpTf7enZhH4im0h%2FusH31Su84XpcfvK6qmb5HJkoTKExIz2%2FKDVAaiJTWOJaqJODlxGLn2CcLS5yHVsALqyRUGmnwdAzSQ0WPN0Zb2LElQyu2lG2sfPL4QqBBW8OC6%2BimKAgahVV%2FwVXPXUdJfuXahs%2Bej2OFsYYtDfcluTBWwxLj2%2F6yPq4yKpGlfo&X-Amz-Signature=131a8ff10b635b9944615b66c1eed0f13978ffbecce078c6d28d4030d338a617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAIL2KCB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq2AMUeaFip5fG9li3hLxWykNn8og6ZvelV%2BTogKFNTwIhAKF%2BbGWoQyzIXkU8%2BmgZSraaBZ1z%2BaDq4Ym4hr8GyZZoKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRp4wpW30oBZbidLsq3AP%2F7LgilFxbA5BXPQkuRa04ihK6lkzOWICPp2rHS8V7cfefjrKa4xTzyRnEFHGYskPNitmZVCvLy%2BrQkEPT%2BHeB6C0DA8iVbxF0ZTMlLVxUkxTfkwM5TwtWxUBeu%2BdplW%2Fem6BOVPAY177vV%2F5NNeqe0RvG2n%2FxMCyrvhyqxI7ddpJ4UoPzSrG722oL%2FVt2vlpI0jrvL1uWy1K9IAwTaaHD%2FBxrP9jUvVMWwSyNNYfWXxf07LfulKhCmlztT72YUhTbRb2nfO%2BD95QExcCq6LmEa37OUQL4mw6Z%2FIcNiEoXj3Cq1SmDdfQJmJYtOq7gUI3385ucdJs0qMKGQmTP%2BPAx%2F582TKRSFIXoHKdX0pHFMmw5Ctgb6bFvN44yGL%2FIZjcMWF85faWiTZyGBa200xuYetucFPOTF6XehJ7AYil0iUZKDCl8PHzemA0nU56Ks26eQhevHh6SCg9xXVpM%2BUVvefB%2Bu1SeGJCfKHUY1OndcLSDmTnlZqG8VH%2FfAL%2F8n%2F9uygmqSMZfR5b%2Fes9H8iejQqJPNGWn8vq9nosa%2FwfpsAv3r0EYL%2BKpdRJBRnjLZpyychpccB%2B3B5h6Lw%2F3jP4HRoPqXOYtkj1EG4Disk7VcX%2FoAu6fd2eW3Ee5RzCK9uDEBjqkAYfK0XEOf031PsiqEm9rlVsKkt5uFYbRFlpTf7enZhH4im0h%2FusH31Su84XpcfvK6qmb5HJkoTKExIz2%2FKDVAaiJTWOJaqJODlxGLn2CcLS5yHVsALqyRUGmnwdAzSQ0WPN0Zb2LElQyu2lG2sfPL4QqBBW8OC6%2BimKAgahVV%2FwVXPXUdJfuXahs%2Bej2OFsYYtDfcluTBWwxLj2%2F6yPq4yKpGlfo&X-Amz-Signature=6aa88c73e3df656454c98ea9e38f5ebafe901e0a759b7392d7f3ff197fc15c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAIL2KCB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq2AMUeaFip5fG9li3hLxWykNn8og6ZvelV%2BTogKFNTwIhAKF%2BbGWoQyzIXkU8%2BmgZSraaBZ1z%2BaDq4Ym4hr8GyZZoKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRp4wpW30oBZbidLsq3AP%2F7LgilFxbA5BXPQkuRa04ihK6lkzOWICPp2rHS8V7cfefjrKa4xTzyRnEFHGYskPNitmZVCvLy%2BrQkEPT%2BHeB6C0DA8iVbxF0ZTMlLVxUkxTfkwM5TwtWxUBeu%2BdplW%2Fem6BOVPAY177vV%2F5NNeqe0RvG2n%2FxMCyrvhyqxI7ddpJ4UoPzSrG722oL%2FVt2vlpI0jrvL1uWy1K9IAwTaaHD%2FBxrP9jUvVMWwSyNNYfWXxf07LfulKhCmlztT72YUhTbRb2nfO%2BD95QExcCq6LmEa37OUQL4mw6Z%2FIcNiEoXj3Cq1SmDdfQJmJYtOq7gUI3385ucdJs0qMKGQmTP%2BPAx%2F582TKRSFIXoHKdX0pHFMmw5Ctgb6bFvN44yGL%2FIZjcMWF85faWiTZyGBa200xuYetucFPOTF6XehJ7AYil0iUZKDCl8PHzemA0nU56Ks26eQhevHh6SCg9xXVpM%2BUVvefB%2Bu1SeGJCfKHUY1OndcLSDmTnlZqG8VH%2FfAL%2F8n%2F9uygmqSMZfR5b%2Fes9H8iejQqJPNGWn8vq9nosa%2FwfpsAv3r0EYL%2BKpdRJBRnjLZpyychpccB%2B3B5h6Lw%2F3jP4HRoPqXOYtkj1EG4Disk7VcX%2FoAu6fd2eW3Ee5RzCK9uDEBjqkAYfK0XEOf031PsiqEm9rlVsKkt5uFYbRFlpTf7enZhH4im0h%2FusH31Su84XpcfvK6qmb5HJkoTKExIz2%2FKDVAaiJTWOJaqJODlxGLn2CcLS5yHVsALqyRUGmnwdAzSQ0WPN0Zb2LElQyu2lG2sfPL4QqBBW8OC6%2BimKAgahVV%2FwVXPXUdJfuXahs%2Bej2OFsYYtDfcluTBWwxLj2%2F6yPq4yKpGlfo&X-Amz-Signature=85efa77f3ea354b5c84bafdf2523bd0e33efd180de4f9b4348e356423c016e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
