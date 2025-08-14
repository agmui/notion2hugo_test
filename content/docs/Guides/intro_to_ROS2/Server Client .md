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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KGFAIFE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCLCC0VO402OYWM96lJ9F7CgXp6cNC5eKz7nKZcBS6ZBAIgSqVMWIeIp1InIXr%2BdSKqEUCfeVMH5eSS5hAkVxdnRVkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDA1pI4P0uYViz%2FHrfCrcAzQ%2F2uB4GHyVJox7yVT3wn1TR5CnRfdgG9iO93oW%2BNpUyfpwgGt44JnfeH7MQpX3xdciuYAnX0nxwxSoigvLtqmaEyyHPEIxX218kq8mDD%2Fry6vRpuvHIk9nClKf3lMtkgodLW3%2FNgK9yeikKF3ijehJFX%2BA2JZvLY7%2Bea%2BFKWqBeS018K7sn0aKXHnXFg551Gkx5ZR9xraj8UQtn%2F8NlDAzhUwR%2FND47xCXZN%2BenANdLWEye1BXkwle1kZHhS0N1DsjN1UIhOTqBYrLTah4qifNZxy6kJR2IEQllY3IHRMFvZHvr1G6cxGZseZIzjbJJldg8%2Fj9QC3Ytz2y%2BoNsxi6Lj8q9n%2FrZklJRaEIBhW2H%2BFlFlQ2P%2FL3zThSf1lpJVniYf4XkqIU2vZcxNXL20HxnH%2FHNt%2BPnqnjJYWM6LxIcwTw7JeHaMueElXhbDFvgBBPhRq8vE84MGArwKozTII7lITKZiqkZ%2BX4v%2Biv51tvFXDYBiKCy5BMN4HbW7nEQxfHThbXbZIyHNCs%2B7U%2BGFIf74iSF0FZOS9sh9vr8100eMny2JSi99v9eRwGyxtWXhunp%2B%2FeRbO4WBPNmCFkahiwArBa%2FWWPdViKS9u2R9TjMTmExyCxkFa9UGklUMIXD%2BMQGOqUBlZ%2F1qJsrn9bTbW%2BrOEA%2FpCcfEO90qDx1eKozRqzjVvUMFDP%2Bb0buI1NYxqKTT054f2lrSG8IXIuS5hHybryBonkZpYJGLU3A%2Fw21ye%2FAKKS4Vzr7RuAVrKFpK985bVpeijjqtg%2BWWmI6FdW%2Fb1vEpNM5KiHCy21Bc7A2r8VC%2FEimkeLOsD4UsZPucjT8sU4DsjCGQCHSlEMAzeSWUl9IPCmH3XXM&X-Amz-Signature=394eb876b1e163beb2a0ce8b28c998468d8e2eb31fa0e334989758164d2eeccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KGFAIFE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCLCC0VO402OYWM96lJ9F7CgXp6cNC5eKz7nKZcBS6ZBAIgSqVMWIeIp1InIXr%2BdSKqEUCfeVMH5eSS5hAkVxdnRVkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDA1pI4P0uYViz%2FHrfCrcAzQ%2F2uB4GHyVJox7yVT3wn1TR5CnRfdgG9iO93oW%2BNpUyfpwgGt44JnfeH7MQpX3xdciuYAnX0nxwxSoigvLtqmaEyyHPEIxX218kq8mDD%2Fry6vRpuvHIk9nClKf3lMtkgodLW3%2FNgK9yeikKF3ijehJFX%2BA2JZvLY7%2Bea%2BFKWqBeS018K7sn0aKXHnXFg551Gkx5ZR9xraj8UQtn%2F8NlDAzhUwR%2FND47xCXZN%2BenANdLWEye1BXkwle1kZHhS0N1DsjN1UIhOTqBYrLTah4qifNZxy6kJR2IEQllY3IHRMFvZHvr1G6cxGZseZIzjbJJldg8%2Fj9QC3Ytz2y%2BoNsxi6Lj8q9n%2FrZklJRaEIBhW2H%2BFlFlQ2P%2FL3zThSf1lpJVniYf4XkqIU2vZcxNXL20HxnH%2FHNt%2BPnqnjJYWM6LxIcwTw7JeHaMueElXhbDFvgBBPhRq8vE84MGArwKozTII7lITKZiqkZ%2BX4v%2Biv51tvFXDYBiKCy5BMN4HbW7nEQxfHThbXbZIyHNCs%2B7U%2BGFIf74iSF0FZOS9sh9vr8100eMny2JSi99v9eRwGyxtWXhunp%2B%2FeRbO4WBPNmCFkahiwArBa%2FWWPdViKS9u2R9TjMTmExyCxkFa9UGklUMIXD%2BMQGOqUBlZ%2F1qJsrn9bTbW%2BrOEA%2FpCcfEO90qDx1eKozRqzjVvUMFDP%2Bb0buI1NYxqKTT054f2lrSG8IXIuS5hHybryBonkZpYJGLU3A%2Fw21ye%2FAKKS4Vzr7RuAVrKFpK985bVpeijjqtg%2BWWmI6FdW%2Fb1vEpNM5KiHCy21Bc7A2r8VC%2FEimkeLOsD4UsZPucjT8sU4DsjCGQCHSlEMAzeSWUl9IPCmH3XXM&X-Amz-Signature=857e7e7a5537c96d941655f84922eaba10e56a923e9684b4fc0be2b9b63129cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KGFAIFE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCLCC0VO402OYWM96lJ9F7CgXp6cNC5eKz7nKZcBS6ZBAIgSqVMWIeIp1InIXr%2BdSKqEUCfeVMH5eSS5hAkVxdnRVkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDA1pI4P0uYViz%2FHrfCrcAzQ%2F2uB4GHyVJox7yVT3wn1TR5CnRfdgG9iO93oW%2BNpUyfpwgGt44JnfeH7MQpX3xdciuYAnX0nxwxSoigvLtqmaEyyHPEIxX218kq8mDD%2Fry6vRpuvHIk9nClKf3lMtkgodLW3%2FNgK9yeikKF3ijehJFX%2BA2JZvLY7%2Bea%2BFKWqBeS018K7sn0aKXHnXFg551Gkx5ZR9xraj8UQtn%2F8NlDAzhUwR%2FND47xCXZN%2BenANdLWEye1BXkwle1kZHhS0N1DsjN1UIhOTqBYrLTah4qifNZxy6kJR2IEQllY3IHRMFvZHvr1G6cxGZseZIzjbJJldg8%2Fj9QC3Ytz2y%2BoNsxi6Lj8q9n%2FrZklJRaEIBhW2H%2BFlFlQ2P%2FL3zThSf1lpJVniYf4XkqIU2vZcxNXL20HxnH%2FHNt%2BPnqnjJYWM6LxIcwTw7JeHaMueElXhbDFvgBBPhRq8vE84MGArwKozTII7lITKZiqkZ%2BX4v%2Biv51tvFXDYBiKCy5BMN4HbW7nEQxfHThbXbZIyHNCs%2B7U%2BGFIf74iSF0FZOS9sh9vr8100eMny2JSi99v9eRwGyxtWXhunp%2B%2FeRbO4WBPNmCFkahiwArBa%2FWWPdViKS9u2R9TjMTmExyCxkFa9UGklUMIXD%2BMQGOqUBlZ%2F1qJsrn9bTbW%2BrOEA%2FpCcfEO90qDx1eKozRqzjVvUMFDP%2Bb0buI1NYxqKTT054f2lrSG8IXIuS5hHybryBonkZpYJGLU3A%2Fw21ye%2FAKKS4Vzr7RuAVrKFpK985bVpeijjqtg%2BWWmI6FdW%2Fb1vEpNM5KiHCy21Bc7A2r8VC%2FEimkeLOsD4UsZPucjT8sU4DsjCGQCHSlEMAzeSWUl9IPCmH3XXM&X-Amz-Signature=de7fd4f37e397ab8c3a6dbc0924b6e550989fd4627768c3d4a72856c0ef5ad40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KGFAIFE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCLCC0VO402OYWM96lJ9F7CgXp6cNC5eKz7nKZcBS6ZBAIgSqVMWIeIp1InIXr%2BdSKqEUCfeVMH5eSS5hAkVxdnRVkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDA1pI4P0uYViz%2FHrfCrcAzQ%2F2uB4GHyVJox7yVT3wn1TR5CnRfdgG9iO93oW%2BNpUyfpwgGt44JnfeH7MQpX3xdciuYAnX0nxwxSoigvLtqmaEyyHPEIxX218kq8mDD%2Fry6vRpuvHIk9nClKf3lMtkgodLW3%2FNgK9yeikKF3ijehJFX%2BA2JZvLY7%2Bea%2BFKWqBeS018K7sn0aKXHnXFg551Gkx5ZR9xraj8UQtn%2F8NlDAzhUwR%2FND47xCXZN%2BenANdLWEye1BXkwle1kZHhS0N1DsjN1UIhOTqBYrLTah4qifNZxy6kJR2IEQllY3IHRMFvZHvr1G6cxGZseZIzjbJJldg8%2Fj9QC3Ytz2y%2BoNsxi6Lj8q9n%2FrZklJRaEIBhW2H%2BFlFlQ2P%2FL3zThSf1lpJVniYf4XkqIU2vZcxNXL20HxnH%2FHNt%2BPnqnjJYWM6LxIcwTw7JeHaMueElXhbDFvgBBPhRq8vE84MGArwKozTII7lITKZiqkZ%2BX4v%2Biv51tvFXDYBiKCy5BMN4HbW7nEQxfHThbXbZIyHNCs%2B7U%2BGFIf74iSF0FZOS9sh9vr8100eMny2JSi99v9eRwGyxtWXhunp%2B%2FeRbO4WBPNmCFkahiwArBa%2FWWPdViKS9u2R9TjMTmExyCxkFa9UGklUMIXD%2BMQGOqUBlZ%2F1qJsrn9bTbW%2BrOEA%2FpCcfEO90qDx1eKozRqzjVvUMFDP%2Bb0buI1NYxqKTT054f2lrSG8IXIuS5hHybryBonkZpYJGLU3A%2Fw21ye%2FAKKS4Vzr7RuAVrKFpK985bVpeijjqtg%2BWWmI6FdW%2Fb1vEpNM5KiHCy21Bc7A2r8VC%2FEimkeLOsD4UsZPucjT8sU4DsjCGQCHSlEMAzeSWUl9IPCmH3XXM&X-Amz-Signature=c32ae2ef61743f10ddf142428cf9e11838042e7376aee1277c09afc0a90498bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KGFAIFE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCLCC0VO402OYWM96lJ9F7CgXp6cNC5eKz7nKZcBS6ZBAIgSqVMWIeIp1InIXr%2BdSKqEUCfeVMH5eSS5hAkVxdnRVkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDA1pI4P0uYViz%2FHrfCrcAzQ%2F2uB4GHyVJox7yVT3wn1TR5CnRfdgG9iO93oW%2BNpUyfpwgGt44JnfeH7MQpX3xdciuYAnX0nxwxSoigvLtqmaEyyHPEIxX218kq8mDD%2Fry6vRpuvHIk9nClKf3lMtkgodLW3%2FNgK9yeikKF3ijehJFX%2BA2JZvLY7%2Bea%2BFKWqBeS018K7sn0aKXHnXFg551Gkx5ZR9xraj8UQtn%2F8NlDAzhUwR%2FND47xCXZN%2BenANdLWEye1BXkwle1kZHhS0N1DsjN1UIhOTqBYrLTah4qifNZxy6kJR2IEQllY3IHRMFvZHvr1G6cxGZseZIzjbJJldg8%2Fj9QC3Ytz2y%2BoNsxi6Lj8q9n%2FrZklJRaEIBhW2H%2BFlFlQ2P%2FL3zThSf1lpJVniYf4XkqIU2vZcxNXL20HxnH%2FHNt%2BPnqnjJYWM6LxIcwTw7JeHaMueElXhbDFvgBBPhRq8vE84MGArwKozTII7lITKZiqkZ%2BX4v%2Biv51tvFXDYBiKCy5BMN4HbW7nEQxfHThbXbZIyHNCs%2B7U%2BGFIf74iSF0FZOS9sh9vr8100eMny2JSi99v9eRwGyxtWXhunp%2B%2FeRbO4WBPNmCFkahiwArBa%2FWWPdViKS9u2R9TjMTmExyCxkFa9UGklUMIXD%2BMQGOqUBlZ%2F1qJsrn9bTbW%2BrOEA%2FpCcfEO90qDx1eKozRqzjVvUMFDP%2Bb0buI1NYxqKTT054f2lrSG8IXIuS5hHybryBonkZpYJGLU3A%2Fw21ye%2FAKKS4Vzr7RuAVrKFpK985bVpeijjqtg%2BWWmI6FdW%2Fb1vEpNM5KiHCy21Bc7A2r8VC%2FEimkeLOsD4UsZPucjT8sU4DsjCGQCHSlEMAzeSWUl9IPCmH3XXM&X-Amz-Signature=19e42d76083484ac14a83b4a16e450e21e3641c71f27a5af801453ee3727b36a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
