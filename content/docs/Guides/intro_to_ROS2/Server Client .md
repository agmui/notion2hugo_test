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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW6MY2PY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBStEWLx864tdO8coQpPnb0LNi57OoUgU0Bs06S9y19AiAjfIZAOBRShXWWi%2FQsOZMqK8QeHMGi7p66g4l%2Bc2jh%2Fir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMYvkyTS4DHYo8CJEWKtwDMPut7e8dh7TyXEOsDJGPkaVe3DezSP9Zfd1xAjQGkCkd%2FcmRTsbkWP%2FdL%2F1SKLsfF4tEeBfnBkOlccwxrguBziwNnHCfUylnV%2FPG7Frc7CVLjQyfL0iYG8iVszZcahh%2BvUA3AnhmPB%2FJ9ZG%2F02KxxnAPacgi18%2FENEXHkaaK0KF2%2FBqaPTUkpfhmfhaGaY2ZTBt4VgOKhymwJmlVq2xeP%2B%2B0gP3dEwxj3aE7r1SAlrfYNgQI2tKWBMOqjvqZL3hVbq0MawFFBNISij0FV5UVRzAzTs1USugvvRskxus6eGn98JDg%2FesgpqPikHOeq3k5F57WsUGUjDGSKCJ%2B6JSTNWzL4ywO5SjoBD0RGzlQyXUNKaZpIg6FCOI781krc21EY1IfPIivxDZOzlq%2B9uTVjA6YwzTHA23D7DwfqF5WmRbfe2kIfIXRRuPibkJhrNFV5utXkNvj2cghelp%2B4DeDvXFXHBrjrCGn6Dhl823iym5me3Gf6J%2BMQ9LZEddui5LYKp6PoEoz2cmm%2B654XIr98YeWdF71pCiwcO3xdgKBhRa3%2BeHh4hyoMdJBtzugx%2B2gy%2F1wn6UQH60FFmNHrQ47Ozyd14J3RSVlGta75wskgANvN9oMWD%2BLSp9TaWIwrZ3LvwY6pgEGqwxU029re0OTb3ehwZmmb5x8QIdGbeh02L98Mw%2FcEuO51gw%2FuREFhmd8ySMv%2BeR%2BfBPH6qhjNHf7reb3wUgWMQPi1wM8rnMCR5WgkflCg4IcgtCEbuM4wy%2FIVIyE0Hi31QD75v37%2FyuZYQ8lXpXpfuH0QMrxuFnTrASEfhLzn9c0exag73zyS1FRZJ4LcX3ozO52Uzm2IGMhh9nGN1Zxq%2BvN0ebD&X-Amz-Signature=0067b3fbd32e214212fe6425c4f0d539cb9fbdd4947ef3b4cb9da432e0430308&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW6MY2PY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBStEWLx864tdO8coQpPnb0LNi57OoUgU0Bs06S9y19AiAjfIZAOBRShXWWi%2FQsOZMqK8QeHMGi7p66g4l%2Bc2jh%2Fir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMYvkyTS4DHYo8CJEWKtwDMPut7e8dh7TyXEOsDJGPkaVe3DezSP9Zfd1xAjQGkCkd%2FcmRTsbkWP%2FdL%2F1SKLsfF4tEeBfnBkOlccwxrguBziwNnHCfUylnV%2FPG7Frc7CVLjQyfL0iYG8iVszZcahh%2BvUA3AnhmPB%2FJ9ZG%2F02KxxnAPacgi18%2FENEXHkaaK0KF2%2FBqaPTUkpfhmfhaGaY2ZTBt4VgOKhymwJmlVq2xeP%2B%2B0gP3dEwxj3aE7r1SAlrfYNgQI2tKWBMOqjvqZL3hVbq0MawFFBNISij0FV5UVRzAzTs1USugvvRskxus6eGn98JDg%2FesgpqPikHOeq3k5F57WsUGUjDGSKCJ%2B6JSTNWzL4ywO5SjoBD0RGzlQyXUNKaZpIg6FCOI781krc21EY1IfPIivxDZOzlq%2B9uTVjA6YwzTHA23D7DwfqF5WmRbfe2kIfIXRRuPibkJhrNFV5utXkNvj2cghelp%2B4DeDvXFXHBrjrCGn6Dhl823iym5me3Gf6J%2BMQ9LZEddui5LYKp6PoEoz2cmm%2B654XIr98YeWdF71pCiwcO3xdgKBhRa3%2BeHh4hyoMdJBtzugx%2B2gy%2F1wn6UQH60FFmNHrQ47Ozyd14J3RSVlGta75wskgANvN9oMWD%2BLSp9TaWIwrZ3LvwY6pgEGqwxU029re0OTb3ehwZmmb5x8QIdGbeh02L98Mw%2FcEuO51gw%2FuREFhmd8ySMv%2BeR%2BfBPH6qhjNHf7reb3wUgWMQPi1wM8rnMCR5WgkflCg4IcgtCEbuM4wy%2FIVIyE0Hi31QD75v37%2FyuZYQ8lXpXpfuH0QMrxuFnTrASEfhLzn9c0exag73zyS1FRZJ4LcX3ozO52Uzm2IGMhh9nGN1Zxq%2BvN0ebD&X-Amz-Signature=0f67ab05027833d9abf66c3cd351e118fbeaf0d8728bf7d13ee21884ea07ada0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW6MY2PY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBStEWLx864tdO8coQpPnb0LNi57OoUgU0Bs06S9y19AiAjfIZAOBRShXWWi%2FQsOZMqK8QeHMGi7p66g4l%2Bc2jh%2Fir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMYvkyTS4DHYo8CJEWKtwDMPut7e8dh7TyXEOsDJGPkaVe3DezSP9Zfd1xAjQGkCkd%2FcmRTsbkWP%2FdL%2F1SKLsfF4tEeBfnBkOlccwxrguBziwNnHCfUylnV%2FPG7Frc7CVLjQyfL0iYG8iVszZcahh%2BvUA3AnhmPB%2FJ9ZG%2F02KxxnAPacgi18%2FENEXHkaaK0KF2%2FBqaPTUkpfhmfhaGaY2ZTBt4VgOKhymwJmlVq2xeP%2B%2B0gP3dEwxj3aE7r1SAlrfYNgQI2tKWBMOqjvqZL3hVbq0MawFFBNISij0FV5UVRzAzTs1USugvvRskxus6eGn98JDg%2FesgpqPikHOeq3k5F57WsUGUjDGSKCJ%2B6JSTNWzL4ywO5SjoBD0RGzlQyXUNKaZpIg6FCOI781krc21EY1IfPIivxDZOzlq%2B9uTVjA6YwzTHA23D7DwfqF5WmRbfe2kIfIXRRuPibkJhrNFV5utXkNvj2cghelp%2B4DeDvXFXHBrjrCGn6Dhl823iym5me3Gf6J%2BMQ9LZEddui5LYKp6PoEoz2cmm%2B654XIr98YeWdF71pCiwcO3xdgKBhRa3%2BeHh4hyoMdJBtzugx%2B2gy%2F1wn6UQH60FFmNHrQ47Ozyd14J3RSVlGta75wskgANvN9oMWD%2BLSp9TaWIwrZ3LvwY6pgEGqwxU029re0OTb3ehwZmmb5x8QIdGbeh02L98Mw%2FcEuO51gw%2FuREFhmd8ySMv%2BeR%2BfBPH6qhjNHf7reb3wUgWMQPi1wM8rnMCR5WgkflCg4IcgtCEbuM4wy%2FIVIyE0Hi31QD75v37%2FyuZYQ8lXpXpfuH0QMrxuFnTrASEfhLzn9c0exag73zyS1FRZJ4LcX3ozO52Uzm2IGMhh9nGN1Zxq%2BvN0ebD&X-Amz-Signature=ed339f32157d87823c5da9825f8f457bf8430535c21e2a7022a53a0282a1aab1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW6MY2PY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBStEWLx864tdO8coQpPnb0LNi57OoUgU0Bs06S9y19AiAjfIZAOBRShXWWi%2FQsOZMqK8QeHMGi7p66g4l%2Bc2jh%2Fir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMYvkyTS4DHYo8CJEWKtwDMPut7e8dh7TyXEOsDJGPkaVe3DezSP9Zfd1xAjQGkCkd%2FcmRTsbkWP%2FdL%2F1SKLsfF4tEeBfnBkOlccwxrguBziwNnHCfUylnV%2FPG7Frc7CVLjQyfL0iYG8iVszZcahh%2BvUA3AnhmPB%2FJ9ZG%2F02KxxnAPacgi18%2FENEXHkaaK0KF2%2FBqaPTUkpfhmfhaGaY2ZTBt4VgOKhymwJmlVq2xeP%2B%2B0gP3dEwxj3aE7r1SAlrfYNgQI2tKWBMOqjvqZL3hVbq0MawFFBNISij0FV5UVRzAzTs1USugvvRskxus6eGn98JDg%2FesgpqPikHOeq3k5F57WsUGUjDGSKCJ%2B6JSTNWzL4ywO5SjoBD0RGzlQyXUNKaZpIg6FCOI781krc21EY1IfPIivxDZOzlq%2B9uTVjA6YwzTHA23D7DwfqF5WmRbfe2kIfIXRRuPibkJhrNFV5utXkNvj2cghelp%2B4DeDvXFXHBrjrCGn6Dhl823iym5me3Gf6J%2BMQ9LZEddui5LYKp6PoEoz2cmm%2B654XIr98YeWdF71pCiwcO3xdgKBhRa3%2BeHh4hyoMdJBtzugx%2B2gy%2F1wn6UQH60FFmNHrQ47Ozyd14J3RSVlGta75wskgANvN9oMWD%2BLSp9TaWIwrZ3LvwY6pgEGqwxU029re0OTb3ehwZmmb5x8QIdGbeh02L98Mw%2FcEuO51gw%2FuREFhmd8ySMv%2BeR%2BfBPH6qhjNHf7reb3wUgWMQPi1wM8rnMCR5WgkflCg4IcgtCEbuM4wy%2FIVIyE0Hi31QD75v37%2FyuZYQ8lXpXpfuH0QMrxuFnTrASEfhLzn9c0exag73zyS1FRZJ4LcX3ozO52Uzm2IGMhh9nGN1Zxq%2BvN0ebD&X-Amz-Signature=ee51548b56c6cc32cf8a6bbaa1836fffdf7ac274510796a892f0ce8e5139bbb0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW6MY2PY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBStEWLx864tdO8coQpPnb0LNi57OoUgU0Bs06S9y19AiAjfIZAOBRShXWWi%2FQsOZMqK8QeHMGi7p66g4l%2Bc2jh%2Fir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMYvkyTS4DHYo8CJEWKtwDMPut7e8dh7TyXEOsDJGPkaVe3DezSP9Zfd1xAjQGkCkd%2FcmRTsbkWP%2FdL%2F1SKLsfF4tEeBfnBkOlccwxrguBziwNnHCfUylnV%2FPG7Frc7CVLjQyfL0iYG8iVszZcahh%2BvUA3AnhmPB%2FJ9ZG%2F02KxxnAPacgi18%2FENEXHkaaK0KF2%2FBqaPTUkpfhmfhaGaY2ZTBt4VgOKhymwJmlVq2xeP%2B%2B0gP3dEwxj3aE7r1SAlrfYNgQI2tKWBMOqjvqZL3hVbq0MawFFBNISij0FV5UVRzAzTs1USugvvRskxus6eGn98JDg%2FesgpqPikHOeq3k5F57WsUGUjDGSKCJ%2B6JSTNWzL4ywO5SjoBD0RGzlQyXUNKaZpIg6FCOI781krc21EY1IfPIivxDZOzlq%2B9uTVjA6YwzTHA23D7DwfqF5WmRbfe2kIfIXRRuPibkJhrNFV5utXkNvj2cghelp%2B4DeDvXFXHBrjrCGn6Dhl823iym5me3Gf6J%2BMQ9LZEddui5LYKp6PoEoz2cmm%2B654XIr98YeWdF71pCiwcO3xdgKBhRa3%2BeHh4hyoMdJBtzugx%2B2gy%2F1wn6UQH60FFmNHrQ47Ozyd14J3RSVlGta75wskgANvN9oMWD%2BLSp9TaWIwrZ3LvwY6pgEGqwxU029re0OTb3ehwZmmb5x8QIdGbeh02L98Mw%2FcEuO51gw%2FuREFhmd8ySMv%2BeR%2BfBPH6qhjNHf7reb3wUgWMQPi1wM8rnMCR5WgkflCg4IcgtCEbuM4wy%2FIVIyE0Hi31QD75v37%2FyuZYQ8lXpXpfuH0QMrxuFnTrASEfhLzn9c0exag73zyS1FRZJ4LcX3ozO52Uzm2IGMhh9nGN1Zxq%2BvN0ebD&X-Amz-Signature=8e32ffd2c4fe7b0dc263f3da030f1c0216af717b0e4bbc0f8ca6f265ed1c3505&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
