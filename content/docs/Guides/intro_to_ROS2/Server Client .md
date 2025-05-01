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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYLMBHT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDGrRkWk%2BL%2BM2fb9MWhI9jxBIpQCDoTshA9cmmDIpQl%2FwIhAImQ4qGcYRPx7VTMmm3AuD1LuSKf%2FD2A5UpOCNfLDbE5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjXr1lk3dWxk7O7TQq3AOeVNVL5FmF%2FujVVigPUrRQl4OgYSzfarBAqpWiSa7uOojzfQrXuFZXTS0GrAxTI8yBELmyLD0iGv2Adm%2BSCcVIKnSmsw3n%2F1LXDMiRmC0l84BAp%2BczbUYVlJQB4vPL9v5ViI6zqR4PEoNJNVqa0%2BwDlNcWwmRGKOy9%2BvcDzVTV%2F8xoTcAieCTunh0yCd9v4BcAUibaPsxSLYuLPBo9H6ClIm4aMsmwU%2FT47D%2BJ8EVNtRjGc8A0LzUFcjo%2FxMi9bMAI%2FE5%2BsnZQQ8%2BHyqQA4IfFFFRZhZbrlCbKAj3O1f2B%2BbIGhcxuNbABbvsvpeKzEbiJPIVlOS9bVSFFnMyU%2Bj%2Fzh6Vn8mQqW1lR4%2FLI7b5GYLJztrX5Vo2Qrj60NraNk75oGvcIrfxPxC7rLoZ7YI1XMT3SC%2BbhovKKiNLVJ25HXyvOQV%2Fnl2GOWAX%2B3%2Bmj%2FZ21P8e0hZ2YqtGW0IqiC6mAkUZKlulQPeAFYjPvz3Kf6Le7zNCyU9tNswyaAmvrA3Zg4ypKpUAKCxe87V14IAzjgA53CU%2BH8fSHDvkOKErjrn6RQQAHZuKyqSXEIFXanbtmZXNWkDQbM5d%2FpAM98AT1YbJfRkSY1PNgIaZy5IzB6qisHfkShq%2B21ZMQzDDHyM3ABjqkAWwkZIVg5y02xgz1u%2BqyO59CaI1XuTG9s7qxpruc1vNceL3cdXb1afX2EPNfmub0r6p%2BlrLAT%2B7akXpKcgQ2yUCmOat%2F2dyKOS8TZHqFjlt7Vb6dxsJOc12PvUQA582s94B13H8cCJlp%2FcVAIvGgRLsKiyIa%2FDrcX9q%2FU3cjT4xL6z8BgzDZ1W3SKzAXT3ZlJLpV7IoUTB9lmLnTvGHu9x77Cp%2FN&X-Amz-Signature=0fc9b69eb0a817c813e21856afbdb12484b606e3b14c41d1cedf0fc2f77792d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYLMBHT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDGrRkWk%2BL%2BM2fb9MWhI9jxBIpQCDoTshA9cmmDIpQl%2FwIhAImQ4qGcYRPx7VTMmm3AuD1LuSKf%2FD2A5UpOCNfLDbE5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjXr1lk3dWxk7O7TQq3AOeVNVL5FmF%2FujVVigPUrRQl4OgYSzfarBAqpWiSa7uOojzfQrXuFZXTS0GrAxTI8yBELmyLD0iGv2Adm%2BSCcVIKnSmsw3n%2F1LXDMiRmC0l84BAp%2BczbUYVlJQB4vPL9v5ViI6zqR4PEoNJNVqa0%2BwDlNcWwmRGKOy9%2BvcDzVTV%2F8xoTcAieCTunh0yCd9v4BcAUibaPsxSLYuLPBo9H6ClIm4aMsmwU%2FT47D%2BJ8EVNtRjGc8A0LzUFcjo%2FxMi9bMAI%2FE5%2BsnZQQ8%2BHyqQA4IfFFFRZhZbrlCbKAj3O1f2B%2BbIGhcxuNbABbvsvpeKzEbiJPIVlOS9bVSFFnMyU%2Bj%2Fzh6Vn8mQqW1lR4%2FLI7b5GYLJztrX5Vo2Qrj60NraNk75oGvcIrfxPxC7rLoZ7YI1XMT3SC%2BbhovKKiNLVJ25HXyvOQV%2Fnl2GOWAX%2B3%2Bmj%2FZ21P8e0hZ2YqtGW0IqiC6mAkUZKlulQPeAFYjPvz3Kf6Le7zNCyU9tNswyaAmvrA3Zg4ypKpUAKCxe87V14IAzjgA53CU%2BH8fSHDvkOKErjrn6RQQAHZuKyqSXEIFXanbtmZXNWkDQbM5d%2FpAM98AT1YbJfRkSY1PNgIaZy5IzB6qisHfkShq%2B21ZMQzDDHyM3ABjqkAWwkZIVg5y02xgz1u%2BqyO59CaI1XuTG9s7qxpruc1vNceL3cdXb1afX2EPNfmub0r6p%2BlrLAT%2B7akXpKcgQ2yUCmOat%2F2dyKOS8TZHqFjlt7Vb6dxsJOc12PvUQA582s94B13H8cCJlp%2FcVAIvGgRLsKiyIa%2FDrcX9q%2FU3cjT4xL6z8BgzDZ1W3SKzAXT3ZlJLpV7IoUTB9lmLnTvGHu9x77Cp%2FN&X-Amz-Signature=aa8f022d8703a486968a9d91ecbf488ee6099760700ca1a87b4b92f0e0ef7a46&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYLMBHT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDGrRkWk%2BL%2BM2fb9MWhI9jxBIpQCDoTshA9cmmDIpQl%2FwIhAImQ4qGcYRPx7VTMmm3AuD1LuSKf%2FD2A5UpOCNfLDbE5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjXr1lk3dWxk7O7TQq3AOeVNVL5FmF%2FujVVigPUrRQl4OgYSzfarBAqpWiSa7uOojzfQrXuFZXTS0GrAxTI8yBELmyLD0iGv2Adm%2BSCcVIKnSmsw3n%2F1LXDMiRmC0l84BAp%2BczbUYVlJQB4vPL9v5ViI6zqR4PEoNJNVqa0%2BwDlNcWwmRGKOy9%2BvcDzVTV%2F8xoTcAieCTunh0yCd9v4BcAUibaPsxSLYuLPBo9H6ClIm4aMsmwU%2FT47D%2BJ8EVNtRjGc8A0LzUFcjo%2FxMi9bMAI%2FE5%2BsnZQQ8%2BHyqQA4IfFFFRZhZbrlCbKAj3O1f2B%2BbIGhcxuNbABbvsvpeKzEbiJPIVlOS9bVSFFnMyU%2Bj%2Fzh6Vn8mQqW1lR4%2FLI7b5GYLJztrX5Vo2Qrj60NraNk75oGvcIrfxPxC7rLoZ7YI1XMT3SC%2BbhovKKiNLVJ25HXyvOQV%2Fnl2GOWAX%2B3%2Bmj%2FZ21P8e0hZ2YqtGW0IqiC6mAkUZKlulQPeAFYjPvz3Kf6Le7zNCyU9tNswyaAmvrA3Zg4ypKpUAKCxe87V14IAzjgA53CU%2BH8fSHDvkOKErjrn6RQQAHZuKyqSXEIFXanbtmZXNWkDQbM5d%2FpAM98AT1YbJfRkSY1PNgIaZy5IzB6qisHfkShq%2B21ZMQzDDHyM3ABjqkAWwkZIVg5y02xgz1u%2BqyO59CaI1XuTG9s7qxpruc1vNceL3cdXb1afX2EPNfmub0r6p%2BlrLAT%2B7akXpKcgQ2yUCmOat%2F2dyKOS8TZHqFjlt7Vb6dxsJOc12PvUQA582s94B13H8cCJlp%2FcVAIvGgRLsKiyIa%2FDrcX9q%2FU3cjT4xL6z8BgzDZ1W3SKzAXT3ZlJLpV7IoUTB9lmLnTvGHu9x77Cp%2FN&X-Amz-Signature=73270fc89ad5e4a00ef24e28cd674b888854d60397b669cf5ea2f8a4d54c69ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYLMBHT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDGrRkWk%2BL%2BM2fb9MWhI9jxBIpQCDoTshA9cmmDIpQl%2FwIhAImQ4qGcYRPx7VTMmm3AuD1LuSKf%2FD2A5UpOCNfLDbE5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjXr1lk3dWxk7O7TQq3AOeVNVL5FmF%2FujVVigPUrRQl4OgYSzfarBAqpWiSa7uOojzfQrXuFZXTS0GrAxTI8yBELmyLD0iGv2Adm%2BSCcVIKnSmsw3n%2F1LXDMiRmC0l84BAp%2BczbUYVlJQB4vPL9v5ViI6zqR4PEoNJNVqa0%2BwDlNcWwmRGKOy9%2BvcDzVTV%2F8xoTcAieCTunh0yCd9v4BcAUibaPsxSLYuLPBo9H6ClIm4aMsmwU%2FT47D%2BJ8EVNtRjGc8A0LzUFcjo%2FxMi9bMAI%2FE5%2BsnZQQ8%2BHyqQA4IfFFFRZhZbrlCbKAj3O1f2B%2BbIGhcxuNbABbvsvpeKzEbiJPIVlOS9bVSFFnMyU%2Bj%2Fzh6Vn8mQqW1lR4%2FLI7b5GYLJztrX5Vo2Qrj60NraNk75oGvcIrfxPxC7rLoZ7YI1XMT3SC%2BbhovKKiNLVJ25HXyvOQV%2Fnl2GOWAX%2B3%2Bmj%2FZ21P8e0hZ2YqtGW0IqiC6mAkUZKlulQPeAFYjPvz3Kf6Le7zNCyU9tNswyaAmvrA3Zg4ypKpUAKCxe87V14IAzjgA53CU%2BH8fSHDvkOKErjrn6RQQAHZuKyqSXEIFXanbtmZXNWkDQbM5d%2FpAM98AT1YbJfRkSY1PNgIaZy5IzB6qisHfkShq%2B21ZMQzDDHyM3ABjqkAWwkZIVg5y02xgz1u%2BqyO59CaI1XuTG9s7qxpruc1vNceL3cdXb1afX2EPNfmub0r6p%2BlrLAT%2B7akXpKcgQ2yUCmOat%2F2dyKOS8TZHqFjlt7Vb6dxsJOc12PvUQA582s94B13H8cCJlp%2FcVAIvGgRLsKiyIa%2FDrcX9q%2FU3cjT4xL6z8BgzDZ1W3SKzAXT3ZlJLpV7IoUTB9lmLnTvGHu9x77Cp%2FN&X-Amz-Signature=bc5ebd100e0dff1385300609d22269e1c7bff0c7d6a78f3e900b352ab281cd0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYLMBHT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDGrRkWk%2BL%2BM2fb9MWhI9jxBIpQCDoTshA9cmmDIpQl%2FwIhAImQ4qGcYRPx7VTMmm3AuD1LuSKf%2FD2A5UpOCNfLDbE5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjXr1lk3dWxk7O7TQq3AOeVNVL5FmF%2FujVVigPUrRQl4OgYSzfarBAqpWiSa7uOojzfQrXuFZXTS0GrAxTI8yBELmyLD0iGv2Adm%2BSCcVIKnSmsw3n%2F1LXDMiRmC0l84BAp%2BczbUYVlJQB4vPL9v5ViI6zqR4PEoNJNVqa0%2BwDlNcWwmRGKOy9%2BvcDzVTV%2F8xoTcAieCTunh0yCd9v4BcAUibaPsxSLYuLPBo9H6ClIm4aMsmwU%2FT47D%2BJ8EVNtRjGc8A0LzUFcjo%2FxMi9bMAI%2FE5%2BsnZQQ8%2BHyqQA4IfFFFRZhZbrlCbKAj3O1f2B%2BbIGhcxuNbABbvsvpeKzEbiJPIVlOS9bVSFFnMyU%2Bj%2Fzh6Vn8mQqW1lR4%2FLI7b5GYLJztrX5Vo2Qrj60NraNk75oGvcIrfxPxC7rLoZ7YI1XMT3SC%2BbhovKKiNLVJ25HXyvOQV%2Fnl2GOWAX%2B3%2Bmj%2FZ21P8e0hZ2YqtGW0IqiC6mAkUZKlulQPeAFYjPvz3Kf6Le7zNCyU9tNswyaAmvrA3Zg4ypKpUAKCxe87V14IAzjgA53CU%2BH8fSHDvkOKErjrn6RQQAHZuKyqSXEIFXanbtmZXNWkDQbM5d%2FpAM98AT1YbJfRkSY1PNgIaZy5IzB6qisHfkShq%2B21ZMQzDDHyM3ABjqkAWwkZIVg5y02xgz1u%2BqyO59CaI1XuTG9s7qxpruc1vNceL3cdXb1afX2EPNfmub0r6p%2BlrLAT%2B7akXpKcgQ2yUCmOat%2F2dyKOS8TZHqFjlt7Vb6dxsJOc12PvUQA582s94B13H8cCJlp%2FcVAIvGgRLsKiyIa%2FDrcX9q%2FU3cjT4xL6z8BgzDZ1W3SKzAXT3ZlJLpV7IoUTB9lmLnTvGHu9x77Cp%2FN&X-Amz-Signature=497fa9d8bf124c9c1a758cd0c8ed3eb511f72d5eef1d4b32ed9e4423bd58c357&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
