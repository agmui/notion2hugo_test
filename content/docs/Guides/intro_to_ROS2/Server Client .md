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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCZDGVB%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMBOShEpa7tQRof5ab72GY48mlqashEZrKxvv3pHy8UAiEA5sBzNqsEfk%2F6sBl%2F1QcxBj1FKcuwHT0E%2F5TPQEAQzIoqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEl%2FBk2CoToA27hl9SrcA06JYE4D58wl9tQrTwFErpcK6fEg%2FeaAhA%2Bxt6xOKSmW4M5ONeC7DdpWGfJ94rEZLuK6Ndm39XPVunYYufeos6dHjMyihWWCNGNOU3PqlUGsNZ4iIq8y3bP9zFy7xqmCQSIYnxolG7PyOKnUyULdSOtuz3dGYYnX3gjH2wff3CxPnif%2FT7taZMdm0TI9i7hhaKe%2BgwbeYrSYh%2F5rLqeAIlsiZXrIwHlFd1ZHbYPj1%2BAqfVJ8ZG56%2FcYJh%2Br5vcOCA6OH2beEiPNUxrKZfl09m%2FSbI%2FFIaAWW7Zl9jV9YHTFBkr738B4FVE3AEnwNODAan3IWKRnu%2BsJU83N7OiqU%2BvDZWErf895mLT99pCEiZ9xwHAXKE7BgtJ9qF0wSZWMK7YUjl7Z0FCqyMnUwfqM%2B2HtmW9YDNWX3giUKWGvX225OMnaa8JGZmtqZZLMJrkO5Cjwge6%2FacF6viiWN7jEvjU2CeyjMV1XtLfs3c75NBoIwCtORDxc778A%2BxaxGYfNQE1IcLVv9uTM36u7%2Fq8P2QisSRlmd61tawzH138kmxyMNkLglLFH5sBYB%2BxGq5tJ%2BzgTJvuoxNXIDWItPrBtnSXlkKcZpMxRpmty6TtHRowW0i9p%2BLyIK4bsfCLl2MMLx5sEGOqUBIrZvjl2a2%2B4rQMT7F9pgyUSolD10IR69uyi7y9i3X1Fn%2Fa3%2F8JCCRT2e%2F7%2B22gtVGKSQCGHDFqUBQuVzYZzrbrAS%2BvOtEOPeHjPbbQSmWLhdN%2BuDvzYufe0IowypA%2FqBgmPfnsOSdxosKBYaokdAmM1lercHY4fd%2FUan7W6qAcJM10kuHkyobzW3UuJPaZWfukC9Hv4LENEPoRPmgP9zwL1Sfzp7&X-Amz-Signature=c1366bcb33e3db08f470f307626d26b373afbf49b33ec02bfebd26a260a70aef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCZDGVB%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMBOShEpa7tQRof5ab72GY48mlqashEZrKxvv3pHy8UAiEA5sBzNqsEfk%2F6sBl%2F1QcxBj1FKcuwHT0E%2F5TPQEAQzIoqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEl%2FBk2CoToA27hl9SrcA06JYE4D58wl9tQrTwFErpcK6fEg%2FeaAhA%2Bxt6xOKSmW4M5ONeC7DdpWGfJ94rEZLuK6Ndm39XPVunYYufeos6dHjMyihWWCNGNOU3PqlUGsNZ4iIq8y3bP9zFy7xqmCQSIYnxolG7PyOKnUyULdSOtuz3dGYYnX3gjH2wff3CxPnif%2FT7taZMdm0TI9i7hhaKe%2BgwbeYrSYh%2F5rLqeAIlsiZXrIwHlFd1ZHbYPj1%2BAqfVJ8ZG56%2FcYJh%2Br5vcOCA6OH2beEiPNUxrKZfl09m%2FSbI%2FFIaAWW7Zl9jV9YHTFBkr738B4FVE3AEnwNODAan3IWKRnu%2BsJU83N7OiqU%2BvDZWErf895mLT99pCEiZ9xwHAXKE7BgtJ9qF0wSZWMK7YUjl7Z0FCqyMnUwfqM%2B2HtmW9YDNWX3giUKWGvX225OMnaa8JGZmtqZZLMJrkO5Cjwge6%2FacF6viiWN7jEvjU2CeyjMV1XtLfs3c75NBoIwCtORDxc778A%2BxaxGYfNQE1IcLVv9uTM36u7%2Fq8P2QisSRlmd61tawzH138kmxyMNkLglLFH5sBYB%2BxGq5tJ%2BzgTJvuoxNXIDWItPrBtnSXlkKcZpMxRpmty6TtHRowW0i9p%2BLyIK4bsfCLl2MMLx5sEGOqUBIrZvjl2a2%2B4rQMT7F9pgyUSolD10IR69uyi7y9i3X1Fn%2Fa3%2F8JCCRT2e%2F7%2B22gtVGKSQCGHDFqUBQuVzYZzrbrAS%2BvOtEOPeHjPbbQSmWLhdN%2BuDvzYufe0IowypA%2FqBgmPfnsOSdxosKBYaokdAmM1lercHY4fd%2FUan7W6qAcJM10kuHkyobzW3UuJPaZWfukC9Hv4LENEPoRPmgP9zwL1Sfzp7&X-Amz-Signature=6aa5747d17f98058be7835198053242fcf2ddc5b3b471627fc28a60d7f410100&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCZDGVB%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMBOShEpa7tQRof5ab72GY48mlqashEZrKxvv3pHy8UAiEA5sBzNqsEfk%2F6sBl%2F1QcxBj1FKcuwHT0E%2F5TPQEAQzIoqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEl%2FBk2CoToA27hl9SrcA06JYE4D58wl9tQrTwFErpcK6fEg%2FeaAhA%2Bxt6xOKSmW4M5ONeC7DdpWGfJ94rEZLuK6Ndm39XPVunYYufeos6dHjMyihWWCNGNOU3PqlUGsNZ4iIq8y3bP9zFy7xqmCQSIYnxolG7PyOKnUyULdSOtuz3dGYYnX3gjH2wff3CxPnif%2FT7taZMdm0TI9i7hhaKe%2BgwbeYrSYh%2F5rLqeAIlsiZXrIwHlFd1ZHbYPj1%2BAqfVJ8ZG56%2FcYJh%2Br5vcOCA6OH2beEiPNUxrKZfl09m%2FSbI%2FFIaAWW7Zl9jV9YHTFBkr738B4FVE3AEnwNODAan3IWKRnu%2BsJU83N7OiqU%2BvDZWErf895mLT99pCEiZ9xwHAXKE7BgtJ9qF0wSZWMK7YUjl7Z0FCqyMnUwfqM%2B2HtmW9YDNWX3giUKWGvX225OMnaa8JGZmtqZZLMJrkO5Cjwge6%2FacF6viiWN7jEvjU2CeyjMV1XtLfs3c75NBoIwCtORDxc778A%2BxaxGYfNQE1IcLVv9uTM36u7%2Fq8P2QisSRlmd61tawzH138kmxyMNkLglLFH5sBYB%2BxGq5tJ%2BzgTJvuoxNXIDWItPrBtnSXlkKcZpMxRpmty6TtHRowW0i9p%2BLyIK4bsfCLl2MMLx5sEGOqUBIrZvjl2a2%2B4rQMT7F9pgyUSolD10IR69uyi7y9i3X1Fn%2Fa3%2F8JCCRT2e%2F7%2B22gtVGKSQCGHDFqUBQuVzYZzrbrAS%2BvOtEOPeHjPbbQSmWLhdN%2BuDvzYufe0IowypA%2FqBgmPfnsOSdxosKBYaokdAmM1lercHY4fd%2FUan7W6qAcJM10kuHkyobzW3UuJPaZWfukC9Hv4LENEPoRPmgP9zwL1Sfzp7&X-Amz-Signature=a016dd34c74fdbe5267a93ddf317b746bc805ee4021bf5877f12281cb6244e24&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCZDGVB%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMBOShEpa7tQRof5ab72GY48mlqashEZrKxvv3pHy8UAiEA5sBzNqsEfk%2F6sBl%2F1QcxBj1FKcuwHT0E%2F5TPQEAQzIoqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEl%2FBk2CoToA27hl9SrcA06JYE4D58wl9tQrTwFErpcK6fEg%2FeaAhA%2Bxt6xOKSmW4M5ONeC7DdpWGfJ94rEZLuK6Ndm39XPVunYYufeos6dHjMyihWWCNGNOU3PqlUGsNZ4iIq8y3bP9zFy7xqmCQSIYnxolG7PyOKnUyULdSOtuz3dGYYnX3gjH2wff3CxPnif%2FT7taZMdm0TI9i7hhaKe%2BgwbeYrSYh%2F5rLqeAIlsiZXrIwHlFd1ZHbYPj1%2BAqfVJ8ZG56%2FcYJh%2Br5vcOCA6OH2beEiPNUxrKZfl09m%2FSbI%2FFIaAWW7Zl9jV9YHTFBkr738B4FVE3AEnwNODAan3IWKRnu%2BsJU83N7OiqU%2BvDZWErf895mLT99pCEiZ9xwHAXKE7BgtJ9qF0wSZWMK7YUjl7Z0FCqyMnUwfqM%2B2HtmW9YDNWX3giUKWGvX225OMnaa8JGZmtqZZLMJrkO5Cjwge6%2FacF6viiWN7jEvjU2CeyjMV1XtLfs3c75NBoIwCtORDxc778A%2BxaxGYfNQE1IcLVv9uTM36u7%2Fq8P2QisSRlmd61tawzH138kmxyMNkLglLFH5sBYB%2BxGq5tJ%2BzgTJvuoxNXIDWItPrBtnSXlkKcZpMxRpmty6TtHRowW0i9p%2BLyIK4bsfCLl2MMLx5sEGOqUBIrZvjl2a2%2B4rQMT7F9pgyUSolD10IR69uyi7y9i3X1Fn%2Fa3%2F8JCCRT2e%2F7%2B22gtVGKSQCGHDFqUBQuVzYZzrbrAS%2BvOtEOPeHjPbbQSmWLhdN%2BuDvzYufe0IowypA%2FqBgmPfnsOSdxosKBYaokdAmM1lercHY4fd%2FUan7W6qAcJM10kuHkyobzW3UuJPaZWfukC9Hv4LENEPoRPmgP9zwL1Sfzp7&X-Amz-Signature=498d76d3ae32b9ef8966d9ec55a3d09d8163408787c910e73b04cf9f386b050c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCZDGVB%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMBOShEpa7tQRof5ab72GY48mlqashEZrKxvv3pHy8UAiEA5sBzNqsEfk%2F6sBl%2F1QcxBj1FKcuwHT0E%2F5TPQEAQzIoqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEl%2FBk2CoToA27hl9SrcA06JYE4D58wl9tQrTwFErpcK6fEg%2FeaAhA%2Bxt6xOKSmW4M5ONeC7DdpWGfJ94rEZLuK6Ndm39XPVunYYufeos6dHjMyihWWCNGNOU3PqlUGsNZ4iIq8y3bP9zFy7xqmCQSIYnxolG7PyOKnUyULdSOtuz3dGYYnX3gjH2wff3CxPnif%2FT7taZMdm0TI9i7hhaKe%2BgwbeYrSYh%2F5rLqeAIlsiZXrIwHlFd1ZHbYPj1%2BAqfVJ8ZG56%2FcYJh%2Br5vcOCA6OH2beEiPNUxrKZfl09m%2FSbI%2FFIaAWW7Zl9jV9YHTFBkr738B4FVE3AEnwNODAan3IWKRnu%2BsJU83N7OiqU%2BvDZWErf895mLT99pCEiZ9xwHAXKE7BgtJ9qF0wSZWMK7YUjl7Z0FCqyMnUwfqM%2B2HtmW9YDNWX3giUKWGvX225OMnaa8JGZmtqZZLMJrkO5Cjwge6%2FacF6viiWN7jEvjU2CeyjMV1XtLfs3c75NBoIwCtORDxc778A%2BxaxGYfNQE1IcLVv9uTM36u7%2Fq8P2QisSRlmd61tawzH138kmxyMNkLglLFH5sBYB%2BxGq5tJ%2BzgTJvuoxNXIDWItPrBtnSXlkKcZpMxRpmty6TtHRowW0i9p%2BLyIK4bsfCLl2MMLx5sEGOqUBIrZvjl2a2%2B4rQMT7F9pgyUSolD10IR69uyi7y9i3X1Fn%2Fa3%2F8JCCRT2e%2F7%2B22gtVGKSQCGHDFqUBQuVzYZzrbrAS%2BvOtEOPeHjPbbQSmWLhdN%2BuDvzYufe0IowypA%2FqBgmPfnsOSdxosKBYaokdAmM1lercHY4fd%2FUan7W6qAcJM10kuHkyobzW3UuJPaZWfukC9Hv4LENEPoRPmgP9zwL1Sfzp7&X-Amz-Signature=13ef363d0d13af9b02639dc6b3fcb069bb3ab902ce62c0bbd1da154008e1b680&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
