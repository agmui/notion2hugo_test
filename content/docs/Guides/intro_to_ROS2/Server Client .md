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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663I3SD5P%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkeYgOQNuasWWNGIW78H3apWgAsz3Cob9NCmwMJW9iAAIhAPyXf4TIjGInd5WA30bquGSTBRADtejRRmuj742JQXhAKv8DCFAQABoMNjM3NDIzMTgzODA1IgyT97gbFdRgO3O0ZKEq3ANp0ENuklM8cJ0UTX3ZZ5gOTgNnZyM7PklY8kWw55qONpwo%2FVbZmquT50etu1bD5QUgjPDcO16iRpxkGnCP3Y5AaWeqgOM6Xjr5HHYJ%2B7oltvpgf2iO1OD1GzWQxYctmiCe45hgOWYd6IBI2fNgpajR7vl4D7B0vqm4a2EEwUuGRTdPw7hR8B9RPDn7kQG%2BvK06TbSgounBlFcfxwWwY0FHBSwV%2Fd3mfNV2AxDDJneGuSY6prYo5f4Lf5PTcbkEA3UgaA2g%2Btt6VO984bQFXSGeWf4F3dRx7F%2FAwfLMiH9Mm%2BDdmHRZnv1ygBjCDKmD68w4YBdMp7IhruzjVhM3BxCyfCSm5tH54xBchA2OVvwzJOK%2FLZkLnS087lA3w34UBdYk7PgyHiMLkmZfG4aBYQLei0XIjbJPPOhH72KkGzz0Dp6xSDxWh7KpiBsnR1fzR0NATuT1pe4vhv209F9L1m5Sfi935thyKk3dEWvFmFBb%2F5vTrO6YjP3ET%2Bq9PKVC%2F3K4p%2FS%2BTGZ9eU669sostxJccN%2BK7Xto8CB3ETlTWd9WTAAhF3rhX4UVjNqWPcDSDrdhThtE6KcAM%2FbcknoZ5cvRGhqULD7ZakwM1VVBas4NtVKEP2ZWTk4ZYcJu%2BzDjv7XABjqkAQhJtWozCMaxWHKcMnrv%2BwvAAielwXZBYW%2FoPExG7Tn9wpJ2Eq5DQ7VZoO8NxwbF%2FhT6rmGLzJKuqqwuxpg30pZ2zTUSCAKEZyEDsTmY1PXpFIrtayevqrdr8Ymuprh4qR16BL9F5VJFa%2Fqe2%2ByW2GLIYoZJNkpIuEgV5o8plJk%2FyVahoHvsf0lo1UJWO2rUQKPk8CpCge9QLAEh%2BWhqZY5N5Gvk&X-Amz-Signature=8efd4cee3fda98aabd5ebdb978254088b17cdcd080879a787d965aa782f19464&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663I3SD5P%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkeYgOQNuasWWNGIW78H3apWgAsz3Cob9NCmwMJW9iAAIhAPyXf4TIjGInd5WA30bquGSTBRADtejRRmuj742JQXhAKv8DCFAQABoMNjM3NDIzMTgzODA1IgyT97gbFdRgO3O0ZKEq3ANp0ENuklM8cJ0UTX3ZZ5gOTgNnZyM7PklY8kWw55qONpwo%2FVbZmquT50etu1bD5QUgjPDcO16iRpxkGnCP3Y5AaWeqgOM6Xjr5HHYJ%2B7oltvpgf2iO1OD1GzWQxYctmiCe45hgOWYd6IBI2fNgpajR7vl4D7B0vqm4a2EEwUuGRTdPw7hR8B9RPDn7kQG%2BvK06TbSgounBlFcfxwWwY0FHBSwV%2Fd3mfNV2AxDDJneGuSY6prYo5f4Lf5PTcbkEA3UgaA2g%2Btt6VO984bQFXSGeWf4F3dRx7F%2FAwfLMiH9Mm%2BDdmHRZnv1ygBjCDKmD68w4YBdMp7IhruzjVhM3BxCyfCSm5tH54xBchA2OVvwzJOK%2FLZkLnS087lA3w34UBdYk7PgyHiMLkmZfG4aBYQLei0XIjbJPPOhH72KkGzz0Dp6xSDxWh7KpiBsnR1fzR0NATuT1pe4vhv209F9L1m5Sfi935thyKk3dEWvFmFBb%2F5vTrO6YjP3ET%2Bq9PKVC%2F3K4p%2FS%2BTGZ9eU669sostxJccN%2BK7Xto8CB3ETlTWd9WTAAhF3rhX4UVjNqWPcDSDrdhThtE6KcAM%2FbcknoZ5cvRGhqULD7ZakwM1VVBas4NtVKEP2ZWTk4ZYcJu%2BzDjv7XABjqkAQhJtWozCMaxWHKcMnrv%2BwvAAielwXZBYW%2FoPExG7Tn9wpJ2Eq5DQ7VZoO8NxwbF%2FhT6rmGLzJKuqqwuxpg30pZ2zTUSCAKEZyEDsTmY1PXpFIrtayevqrdr8Ymuprh4qR16BL9F5VJFa%2Fqe2%2ByW2GLIYoZJNkpIuEgV5o8plJk%2FyVahoHvsf0lo1UJWO2rUQKPk8CpCge9QLAEh%2BWhqZY5N5Gvk&X-Amz-Signature=68585d276dfb9bc3e375406e5b28c86af79df7a115bfb6b90d8bd394d6122227&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663I3SD5P%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkeYgOQNuasWWNGIW78H3apWgAsz3Cob9NCmwMJW9iAAIhAPyXf4TIjGInd5WA30bquGSTBRADtejRRmuj742JQXhAKv8DCFAQABoMNjM3NDIzMTgzODA1IgyT97gbFdRgO3O0ZKEq3ANp0ENuklM8cJ0UTX3ZZ5gOTgNnZyM7PklY8kWw55qONpwo%2FVbZmquT50etu1bD5QUgjPDcO16iRpxkGnCP3Y5AaWeqgOM6Xjr5HHYJ%2B7oltvpgf2iO1OD1GzWQxYctmiCe45hgOWYd6IBI2fNgpajR7vl4D7B0vqm4a2EEwUuGRTdPw7hR8B9RPDn7kQG%2BvK06TbSgounBlFcfxwWwY0FHBSwV%2Fd3mfNV2AxDDJneGuSY6prYo5f4Lf5PTcbkEA3UgaA2g%2Btt6VO984bQFXSGeWf4F3dRx7F%2FAwfLMiH9Mm%2BDdmHRZnv1ygBjCDKmD68w4YBdMp7IhruzjVhM3BxCyfCSm5tH54xBchA2OVvwzJOK%2FLZkLnS087lA3w34UBdYk7PgyHiMLkmZfG4aBYQLei0XIjbJPPOhH72KkGzz0Dp6xSDxWh7KpiBsnR1fzR0NATuT1pe4vhv209F9L1m5Sfi935thyKk3dEWvFmFBb%2F5vTrO6YjP3ET%2Bq9PKVC%2F3K4p%2FS%2BTGZ9eU669sostxJccN%2BK7Xto8CB3ETlTWd9WTAAhF3rhX4UVjNqWPcDSDrdhThtE6KcAM%2FbcknoZ5cvRGhqULD7ZakwM1VVBas4NtVKEP2ZWTk4ZYcJu%2BzDjv7XABjqkAQhJtWozCMaxWHKcMnrv%2BwvAAielwXZBYW%2FoPExG7Tn9wpJ2Eq5DQ7VZoO8NxwbF%2FhT6rmGLzJKuqqwuxpg30pZ2zTUSCAKEZyEDsTmY1PXpFIrtayevqrdr8Ymuprh4qR16BL9F5VJFa%2Fqe2%2ByW2GLIYoZJNkpIuEgV5o8plJk%2FyVahoHvsf0lo1UJWO2rUQKPk8CpCge9QLAEh%2BWhqZY5N5Gvk&X-Amz-Signature=e3a51fd060ae2efbb607dabc21c68faf55996fdb5202174fadc967b1257c2978&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663I3SD5P%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkeYgOQNuasWWNGIW78H3apWgAsz3Cob9NCmwMJW9iAAIhAPyXf4TIjGInd5WA30bquGSTBRADtejRRmuj742JQXhAKv8DCFAQABoMNjM3NDIzMTgzODA1IgyT97gbFdRgO3O0ZKEq3ANp0ENuklM8cJ0UTX3ZZ5gOTgNnZyM7PklY8kWw55qONpwo%2FVbZmquT50etu1bD5QUgjPDcO16iRpxkGnCP3Y5AaWeqgOM6Xjr5HHYJ%2B7oltvpgf2iO1OD1GzWQxYctmiCe45hgOWYd6IBI2fNgpajR7vl4D7B0vqm4a2EEwUuGRTdPw7hR8B9RPDn7kQG%2BvK06TbSgounBlFcfxwWwY0FHBSwV%2Fd3mfNV2AxDDJneGuSY6prYo5f4Lf5PTcbkEA3UgaA2g%2Btt6VO984bQFXSGeWf4F3dRx7F%2FAwfLMiH9Mm%2BDdmHRZnv1ygBjCDKmD68w4YBdMp7IhruzjVhM3BxCyfCSm5tH54xBchA2OVvwzJOK%2FLZkLnS087lA3w34UBdYk7PgyHiMLkmZfG4aBYQLei0XIjbJPPOhH72KkGzz0Dp6xSDxWh7KpiBsnR1fzR0NATuT1pe4vhv209F9L1m5Sfi935thyKk3dEWvFmFBb%2F5vTrO6YjP3ET%2Bq9PKVC%2F3K4p%2FS%2BTGZ9eU669sostxJccN%2BK7Xto8CB3ETlTWd9WTAAhF3rhX4UVjNqWPcDSDrdhThtE6KcAM%2FbcknoZ5cvRGhqULD7ZakwM1VVBas4NtVKEP2ZWTk4ZYcJu%2BzDjv7XABjqkAQhJtWozCMaxWHKcMnrv%2BwvAAielwXZBYW%2FoPExG7Tn9wpJ2Eq5DQ7VZoO8NxwbF%2FhT6rmGLzJKuqqwuxpg30pZ2zTUSCAKEZyEDsTmY1PXpFIrtayevqrdr8Ymuprh4qR16BL9F5VJFa%2Fqe2%2ByW2GLIYoZJNkpIuEgV5o8plJk%2FyVahoHvsf0lo1UJWO2rUQKPk8CpCge9QLAEh%2BWhqZY5N5Gvk&X-Amz-Signature=e6984038253e46db8c36aa389cf303ff7d39977ea1e939b934e8209fb87e7a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663I3SD5P%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkeYgOQNuasWWNGIW78H3apWgAsz3Cob9NCmwMJW9iAAIhAPyXf4TIjGInd5WA30bquGSTBRADtejRRmuj742JQXhAKv8DCFAQABoMNjM3NDIzMTgzODA1IgyT97gbFdRgO3O0ZKEq3ANp0ENuklM8cJ0UTX3ZZ5gOTgNnZyM7PklY8kWw55qONpwo%2FVbZmquT50etu1bD5QUgjPDcO16iRpxkGnCP3Y5AaWeqgOM6Xjr5HHYJ%2B7oltvpgf2iO1OD1GzWQxYctmiCe45hgOWYd6IBI2fNgpajR7vl4D7B0vqm4a2EEwUuGRTdPw7hR8B9RPDn7kQG%2BvK06TbSgounBlFcfxwWwY0FHBSwV%2Fd3mfNV2AxDDJneGuSY6prYo5f4Lf5PTcbkEA3UgaA2g%2Btt6VO984bQFXSGeWf4F3dRx7F%2FAwfLMiH9Mm%2BDdmHRZnv1ygBjCDKmD68w4YBdMp7IhruzjVhM3BxCyfCSm5tH54xBchA2OVvwzJOK%2FLZkLnS087lA3w34UBdYk7PgyHiMLkmZfG4aBYQLei0XIjbJPPOhH72KkGzz0Dp6xSDxWh7KpiBsnR1fzR0NATuT1pe4vhv209F9L1m5Sfi935thyKk3dEWvFmFBb%2F5vTrO6YjP3ET%2Bq9PKVC%2F3K4p%2FS%2BTGZ9eU669sostxJccN%2BK7Xto8CB3ETlTWd9WTAAhF3rhX4UVjNqWPcDSDrdhThtE6KcAM%2FbcknoZ5cvRGhqULD7ZakwM1VVBas4NtVKEP2ZWTk4ZYcJu%2BzDjv7XABjqkAQhJtWozCMaxWHKcMnrv%2BwvAAielwXZBYW%2FoPExG7Tn9wpJ2Eq5DQ7VZoO8NxwbF%2FhT6rmGLzJKuqqwuxpg30pZ2zTUSCAKEZyEDsTmY1PXpFIrtayevqrdr8Ymuprh4qR16BL9F5VJFa%2Fqe2%2ByW2GLIYoZJNkpIuEgV5o8plJk%2FyVahoHvsf0lo1UJWO2rUQKPk8CpCge9QLAEh%2BWhqZY5N5Gvk&X-Amz-Signature=a5ed68df401c139e73271c8b4dcd13efc8f52bf69835a129af65618bbb3e1a05&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
