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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDWIF6Z%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ7MAiPHdkQEWNowq4s0zJHACuQUBk%2FSYfxWy4BXQsUwIhAIvrYHDWPUDGqxwq1RSk7WXQyfGLn5F93ZpQtXx%2Bc89IKv8DCHIQABoMNjM3NDIzMTgzODA1IgyCtN976OuIKwpPMEwq3APTnB08ws%2BwcudKJlhNBLqQ4HTcb2D2L599twfYQF0KEhPhlQQiSVXH80T2MaGi0Eo%2FBPiEKGCxvSIR35aJE%2BgMlpoRkGV4wTeuCDPp4oaZ9n9cgfO6YEV2q6yja%2FJh8hBkriSyQ0uuqw1y0eJPfaXwH521lOo%2BiEe7YFlqCLJxu7VSuZBI5fyEoKnckhN7goIbKylEqawx8kpP7ygvXcG8B5UMK7Eecq8ENVbYBRkgPYqhk9xbQbugaiMx5IOxEllu3KZCHNMKDgH%2BH07xQyALMntltSMFMMQZotZhlPqb95L0mDLoOdzoFpIXQaJcOmeV6K0XeUKVCIlfYIIgkSSO2gRBEyN4HwL9YsplTQKicqItJ69su08hLySZ0izFVLrxtYW9SnAHDqes%2FwTB3kCnckrrMAGaQ3fwLC1auKqSstH5%2BcK1DGeejIfYbiAdCoZolXGhvM8%2F5MvmA0eYEbzz4%2FrU4D7d5wgN7BynlVAJ7AsC2YCYPGhkO%2BahjcoKsNuBWeye5u2jyWosSzw3Do640KRJMPPizOQuQ29Gwlxfl50XOlsiglHayXKyQw4hkKqi4EmlJqWopZ5O3xh1lbkGjeVDQD7dDv1AKRjSWNiW0YPYbTHdpm0oJGRmnzDQ%2Bo%2FCBjqkAeCaWe9XAwSMK2CiFVzXAIq804GXRL3HFxp8lPCcpVvaGPIMMwjVVweloNUbIcuMHjIJdpGW83Sv0OjROyyZf4SOnAUu66QuOSlvIL5IxJJYjBk%2FpLt8LI2XbHPf4fD%2FdbUruiIbzAHazTsj2L3gsrNnu%2BTy7jKthg1GDaEa%2F0BW8X%2BEXXCI%2FVsNWQ8F7BElV53Lm9sFwzlDIFlogSr6xMSQ4lD7&X-Amz-Signature=77e248d7a6a7e4402beb11c839ca8ac9c10a7eb694937175101839099ffb12e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDWIF6Z%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ7MAiPHdkQEWNowq4s0zJHACuQUBk%2FSYfxWy4BXQsUwIhAIvrYHDWPUDGqxwq1RSk7WXQyfGLn5F93ZpQtXx%2Bc89IKv8DCHIQABoMNjM3NDIzMTgzODA1IgyCtN976OuIKwpPMEwq3APTnB08ws%2BwcudKJlhNBLqQ4HTcb2D2L599twfYQF0KEhPhlQQiSVXH80T2MaGi0Eo%2FBPiEKGCxvSIR35aJE%2BgMlpoRkGV4wTeuCDPp4oaZ9n9cgfO6YEV2q6yja%2FJh8hBkriSyQ0uuqw1y0eJPfaXwH521lOo%2BiEe7YFlqCLJxu7VSuZBI5fyEoKnckhN7goIbKylEqawx8kpP7ygvXcG8B5UMK7Eecq8ENVbYBRkgPYqhk9xbQbugaiMx5IOxEllu3KZCHNMKDgH%2BH07xQyALMntltSMFMMQZotZhlPqb95L0mDLoOdzoFpIXQaJcOmeV6K0XeUKVCIlfYIIgkSSO2gRBEyN4HwL9YsplTQKicqItJ69su08hLySZ0izFVLrxtYW9SnAHDqes%2FwTB3kCnckrrMAGaQ3fwLC1auKqSstH5%2BcK1DGeejIfYbiAdCoZolXGhvM8%2F5MvmA0eYEbzz4%2FrU4D7d5wgN7BynlVAJ7AsC2YCYPGhkO%2BahjcoKsNuBWeye5u2jyWosSzw3Do640KRJMPPizOQuQ29Gwlxfl50XOlsiglHayXKyQw4hkKqi4EmlJqWopZ5O3xh1lbkGjeVDQD7dDv1AKRjSWNiW0YPYbTHdpm0oJGRmnzDQ%2Bo%2FCBjqkAeCaWe9XAwSMK2CiFVzXAIq804GXRL3HFxp8lPCcpVvaGPIMMwjVVweloNUbIcuMHjIJdpGW83Sv0OjROyyZf4SOnAUu66QuOSlvIL5IxJJYjBk%2FpLt8LI2XbHPf4fD%2FdbUruiIbzAHazTsj2L3gsrNnu%2BTy7jKthg1GDaEa%2F0BW8X%2BEXXCI%2FVsNWQ8F7BElV53Lm9sFwzlDIFlogSr6xMSQ4lD7&X-Amz-Signature=3ea74aebb6c2a6beab41d3b4c9267a2b786ebf26a2a3c41ccddcabb2c18e6eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDWIF6Z%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ7MAiPHdkQEWNowq4s0zJHACuQUBk%2FSYfxWy4BXQsUwIhAIvrYHDWPUDGqxwq1RSk7WXQyfGLn5F93ZpQtXx%2Bc89IKv8DCHIQABoMNjM3NDIzMTgzODA1IgyCtN976OuIKwpPMEwq3APTnB08ws%2BwcudKJlhNBLqQ4HTcb2D2L599twfYQF0KEhPhlQQiSVXH80T2MaGi0Eo%2FBPiEKGCxvSIR35aJE%2BgMlpoRkGV4wTeuCDPp4oaZ9n9cgfO6YEV2q6yja%2FJh8hBkriSyQ0uuqw1y0eJPfaXwH521lOo%2BiEe7YFlqCLJxu7VSuZBI5fyEoKnckhN7goIbKylEqawx8kpP7ygvXcG8B5UMK7Eecq8ENVbYBRkgPYqhk9xbQbugaiMx5IOxEllu3KZCHNMKDgH%2BH07xQyALMntltSMFMMQZotZhlPqb95L0mDLoOdzoFpIXQaJcOmeV6K0XeUKVCIlfYIIgkSSO2gRBEyN4HwL9YsplTQKicqItJ69su08hLySZ0izFVLrxtYW9SnAHDqes%2FwTB3kCnckrrMAGaQ3fwLC1auKqSstH5%2BcK1DGeejIfYbiAdCoZolXGhvM8%2F5MvmA0eYEbzz4%2FrU4D7d5wgN7BynlVAJ7AsC2YCYPGhkO%2BahjcoKsNuBWeye5u2jyWosSzw3Do640KRJMPPizOQuQ29Gwlxfl50XOlsiglHayXKyQw4hkKqi4EmlJqWopZ5O3xh1lbkGjeVDQD7dDv1AKRjSWNiW0YPYbTHdpm0oJGRmnzDQ%2Bo%2FCBjqkAeCaWe9XAwSMK2CiFVzXAIq804GXRL3HFxp8lPCcpVvaGPIMMwjVVweloNUbIcuMHjIJdpGW83Sv0OjROyyZf4SOnAUu66QuOSlvIL5IxJJYjBk%2FpLt8LI2XbHPf4fD%2FdbUruiIbzAHazTsj2L3gsrNnu%2BTy7jKthg1GDaEa%2F0BW8X%2BEXXCI%2FVsNWQ8F7BElV53Lm9sFwzlDIFlogSr6xMSQ4lD7&X-Amz-Signature=7f9be06b0eb9eac814b7df88760b93ab581a79a0d03235d121523a91081a6d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDWIF6Z%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ7MAiPHdkQEWNowq4s0zJHACuQUBk%2FSYfxWy4BXQsUwIhAIvrYHDWPUDGqxwq1RSk7WXQyfGLn5F93ZpQtXx%2Bc89IKv8DCHIQABoMNjM3NDIzMTgzODA1IgyCtN976OuIKwpPMEwq3APTnB08ws%2BwcudKJlhNBLqQ4HTcb2D2L599twfYQF0KEhPhlQQiSVXH80T2MaGi0Eo%2FBPiEKGCxvSIR35aJE%2BgMlpoRkGV4wTeuCDPp4oaZ9n9cgfO6YEV2q6yja%2FJh8hBkriSyQ0uuqw1y0eJPfaXwH521lOo%2BiEe7YFlqCLJxu7VSuZBI5fyEoKnckhN7goIbKylEqawx8kpP7ygvXcG8B5UMK7Eecq8ENVbYBRkgPYqhk9xbQbugaiMx5IOxEllu3KZCHNMKDgH%2BH07xQyALMntltSMFMMQZotZhlPqb95L0mDLoOdzoFpIXQaJcOmeV6K0XeUKVCIlfYIIgkSSO2gRBEyN4HwL9YsplTQKicqItJ69su08hLySZ0izFVLrxtYW9SnAHDqes%2FwTB3kCnckrrMAGaQ3fwLC1auKqSstH5%2BcK1DGeejIfYbiAdCoZolXGhvM8%2F5MvmA0eYEbzz4%2FrU4D7d5wgN7BynlVAJ7AsC2YCYPGhkO%2BahjcoKsNuBWeye5u2jyWosSzw3Do640KRJMPPizOQuQ29Gwlxfl50XOlsiglHayXKyQw4hkKqi4EmlJqWopZ5O3xh1lbkGjeVDQD7dDv1AKRjSWNiW0YPYbTHdpm0oJGRmnzDQ%2Bo%2FCBjqkAeCaWe9XAwSMK2CiFVzXAIq804GXRL3HFxp8lPCcpVvaGPIMMwjVVweloNUbIcuMHjIJdpGW83Sv0OjROyyZf4SOnAUu66QuOSlvIL5IxJJYjBk%2FpLt8LI2XbHPf4fD%2FdbUruiIbzAHazTsj2L3gsrNnu%2BTy7jKthg1GDaEa%2F0BW8X%2BEXXCI%2FVsNWQ8F7BElV53Lm9sFwzlDIFlogSr6xMSQ4lD7&X-Amz-Signature=d34af4b935247fb27ed90be2727daa76e7635711b802cdd04a30e0aeb90a2347&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDWIF6Z%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ7MAiPHdkQEWNowq4s0zJHACuQUBk%2FSYfxWy4BXQsUwIhAIvrYHDWPUDGqxwq1RSk7WXQyfGLn5F93ZpQtXx%2Bc89IKv8DCHIQABoMNjM3NDIzMTgzODA1IgyCtN976OuIKwpPMEwq3APTnB08ws%2BwcudKJlhNBLqQ4HTcb2D2L599twfYQF0KEhPhlQQiSVXH80T2MaGi0Eo%2FBPiEKGCxvSIR35aJE%2BgMlpoRkGV4wTeuCDPp4oaZ9n9cgfO6YEV2q6yja%2FJh8hBkriSyQ0uuqw1y0eJPfaXwH521lOo%2BiEe7YFlqCLJxu7VSuZBI5fyEoKnckhN7goIbKylEqawx8kpP7ygvXcG8B5UMK7Eecq8ENVbYBRkgPYqhk9xbQbugaiMx5IOxEllu3KZCHNMKDgH%2BH07xQyALMntltSMFMMQZotZhlPqb95L0mDLoOdzoFpIXQaJcOmeV6K0XeUKVCIlfYIIgkSSO2gRBEyN4HwL9YsplTQKicqItJ69su08hLySZ0izFVLrxtYW9SnAHDqes%2FwTB3kCnckrrMAGaQ3fwLC1auKqSstH5%2BcK1DGeejIfYbiAdCoZolXGhvM8%2F5MvmA0eYEbzz4%2FrU4D7d5wgN7BynlVAJ7AsC2YCYPGhkO%2BahjcoKsNuBWeye5u2jyWosSzw3Do640KRJMPPizOQuQ29Gwlxfl50XOlsiglHayXKyQw4hkKqi4EmlJqWopZ5O3xh1lbkGjeVDQD7dDv1AKRjSWNiW0YPYbTHdpm0oJGRmnzDQ%2Bo%2FCBjqkAeCaWe9XAwSMK2CiFVzXAIq804GXRL3HFxp8lPCcpVvaGPIMMwjVVweloNUbIcuMHjIJdpGW83Sv0OjROyyZf4SOnAUu66QuOSlvIL5IxJJYjBk%2FpLt8LI2XbHPf4fD%2FdbUruiIbzAHazTsj2L3gsrNnu%2BTy7jKthg1GDaEa%2F0BW8X%2BEXXCI%2FVsNWQ8F7BElV53Lm9sFwzlDIFlogSr6xMSQ4lD7&X-Amz-Signature=3f0950cfd873701a592e90ab96c6a4214232f5e113c9eb00ed1d64787b53a913&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
