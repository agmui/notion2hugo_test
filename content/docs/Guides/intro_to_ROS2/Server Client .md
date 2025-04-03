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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MNLBCVR%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFzeodhq%2BOw%2FqpJk%2Bl40JdJnucZLCrF2cFIMAi4kYec4AiB68x44fbPEN%2B2%2BpXdOOh0TwVPTv4B0NPWOiW%2FFRsKD9iqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEGLzqQITmibtzYEtKtwDHKaeMOocSqcvPb1MzypYx3CJ0QBtALW7sIsDLrLZCBmGStgLvocDj5i%2F%2FZ6sikl%2FxtTS1YaVcHMwSh0l1tslAb6FEqe%2BCJc5PuXGQ1T8b3pYJU9x5cUf%2BxWVfX9UDpsR2Vb5DJiN046N9tXDuuW5YOJgkW4BYJVnEYvDisX7HBaLADEU5F0AskHF1%2FqRL%2BWdpTL8YYw8vA4%2BF%2FApbJ09LrB0OWmY9zThkmrDxFrKKO%2F1GVH7PxfWwdC%2FW0%2FHNp70fs3nlxoQK2dm4uvV%2F8MGlCEW%2FIl8yLx26TMybUOvg6zQGJsCKrFB1XYBj7%2BtWg4zB8pcBx7ycRu9D4BUAAhkDIK3N8WCdqdDlBAyWbe7miCotvIS5zPOl9qWoj3GCQmD8jLsOpNAI84RTRdetjKdN0RDPXHbCHRw9aqS3kqajzurJ%2Fo0gAk4J1zmGr%2Bcnbnm6d8bKWpmFuMmbBP0jA44GQrpstZp%2FAoYHa4114pFC2JADJ1%2Byn5qz2AeOnchmoH41MECDjhZPHWYFMfFyQI%2FjhGpw5WoswB9GctCJRhubFszgoSuMwEGFFLYtpQXPGPYVdmGUOP1lpXkH0%2Bii6nwRE7CQSDhJHeP2uc%2FxBaml9aDZCfMU6ZC9FPYZT0wsMi4vwY6pgHnPBt%2F4CoFRlYUneibiP%2FdOOV8T2wy5%2BnDqjiXBCbS%2BXuQyNjzJZ1NZC7uKOyCeoIrSJs3GiAu6fBcvb%2F8ybLMMcy6XHaVCu3a60tc%2BIfn8xhll1sJSRnEEer%2BrpuIHHQBCyX2bmFQtjQQevZXqmWoPoIvLgI2oBWInSOjvsPQrF2%2F775aJtbJrhXMTx5NMmBxIGY5wzV6cOL0CKvtX6rRzom5%2FMOW&X-Amz-Signature=32bf72b47f9e088e5a7cbed02343746eb9087949556f72c3c3c5070c3e675d59&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MNLBCVR%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFzeodhq%2BOw%2FqpJk%2Bl40JdJnucZLCrF2cFIMAi4kYec4AiB68x44fbPEN%2B2%2BpXdOOh0TwVPTv4B0NPWOiW%2FFRsKD9iqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEGLzqQITmibtzYEtKtwDHKaeMOocSqcvPb1MzypYx3CJ0QBtALW7sIsDLrLZCBmGStgLvocDj5i%2F%2FZ6sikl%2FxtTS1YaVcHMwSh0l1tslAb6FEqe%2BCJc5PuXGQ1T8b3pYJU9x5cUf%2BxWVfX9UDpsR2Vb5DJiN046N9tXDuuW5YOJgkW4BYJVnEYvDisX7HBaLADEU5F0AskHF1%2FqRL%2BWdpTL8YYw8vA4%2BF%2FApbJ09LrB0OWmY9zThkmrDxFrKKO%2F1GVH7PxfWwdC%2FW0%2FHNp70fs3nlxoQK2dm4uvV%2F8MGlCEW%2FIl8yLx26TMybUOvg6zQGJsCKrFB1XYBj7%2BtWg4zB8pcBx7ycRu9D4BUAAhkDIK3N8WCdqdDlBAyWbe7miCotvIS5zPOl9qWoj3GCQmD8jLsOpNAI84RTRdetjKdN0RDPXHbCHRw9aqS3kqajzurJ%2Fo0gAk4J1zmGr%2Bcnbnm6d8bKWpmFuMmbBP0jA44GQrpstZp%2FAoYHa4114pFC2JADJ1%2Byn5qz2AeOnchmoH41MECDjhZPHWYFMfFyQI%2FjhGpw5WoswB9GctCJRhubFszgoSuMwEGFFLYtpQXPGPYVdmGUOP1lpXkH0%2Bii6nwRE7CQSDhJHeP2uc%2FxBaml9aDZCfMU6ZC9FPYZT0wsMi4vwY6pgHnPBt%2F4CoFRlYUneibiP%2FdOOV8T2wy5%2BnDqjiXBCbS%2BXuQyNjzJZ1NZC7uKOyCeoIrSJs3GiAu6fBcvb%2F8ybLMMcy6XHaVCu3a60tc%2BIfn8xhll1sJSRnEEer%2BrpuIHHQBCyX2bmFQtjQQevZXqmWoPoIvLgI2oBWInSOjvsPQrF2%2F775aJtbJrhXMTx5NMmBxIGY5wzV6cOL0CKvtX6rRzom5%2FMOW&X-Amz-Signature=90c2b7a4cd1595fd00ddaa783ed2881209eb5eb9266540898b266ffcfd0bf202&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MNLBCVR%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFzeodhq%2BOw%2FqpJk%2Bl40JdJnucZLCrF2cFIMAi4kYec4AiB68x44fbPEN%2B2%2BpXdOOh0TwVPTv4B0NPWOiW%2FFRsKD9iqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEGLzqQITmibtzYEtKtwDHKaeMOocSqcvPb1MzypYx3CJ0QBtALW7sIsDLrLZCBmGStgLvocDj5i%2F%2FZ6sikl%2FxtTS1YaVcHMwSh0l1tslAb6FEqe%2BCJc5PuXGQ1T8b3pYJU9x5cUf%2BxWVfX9UDpsR2Vb5DJiN046N9tXDuuW5YOJgkW4BYJVnEYvDisX7HBaLADEU5F0AskHF1%2FqRL%2BWdpTL8YYw8vA4%2BF%2FApbJ09LrB0OWmY9zThkmrDxFrKKO%2F1GVH7PxfWwdC%2FW0%2FHNp70fs3nlxoQK2dm4uvV%2F8MGlCEW%2FIl8yLx26TMybUOvg6zQGJsCKrFB1XYBj7%2BtWg4zB8pcBx7ycRu9D4BUAAhkDIK3N8WCdqdDlBAyWbe7miCotvIS5zPOl9qWoj3GCQmD8jLsOpNAI84RTRdetjKdN0RDPXHbCHRw9aqS3kqajzurJ%2Fo0gAk4J1zmGr%2Bcnbnm6d8bKWpmFuMmbBP0jA44GQrpstZp%2FAoYHa4114pFC2JADJ1%2Byn5qz2AeOnchmoH41MECDjhZPHWYFMfFyQI%2FjhGpw5WoswB9GctCJRhubFszgoSuMwEGFFLYtpQXPGPYVdmGUOP1lpXkH0%2Bii6nwRE7CQSDhJHeP2uc%2FxBaml9aDZCfMU6ZC9FPYZT0wsMi4vwY6pgHnPBt%2F4CoFRlYUneibiP%2FdOOV8T2wy5%2BnDqjiXBCbS%2BXuQyNjzJZ1NZC7uKOyCeoIrSJs3GiAu6fBcvb%2F8ybLMMcy6XHaVCu3a60tc%2BIfn8xhll1sJSRnEEer%2BrpuIHHQBCyX2bmFQtjQQevZXqmWoPoIvLgI2oBWInSOjvsPQrF2%2F775aJtbJrhXMTx5NMmBxIGY5wzV6cOL0CKvtX6rRzom5%2FMOW&X-Amz-Signature=c1a6fc83c117757b6e3fb3417b2749cd3a7a3c9e08a7ba9442663e0137cedc54&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MNLBCVR%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFzeodhq%2BOw%2FqpJk%2Bl40JdJnucZLCrF2cFIMAi4kYec4AiB68x44fbPEN%2B2%2BpXdOOh0TwVPTv4B0NPWOiW%2FFRsKD9iqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEGLzqQITmibtzYEtKtwDHKaeMOocSqcvPb1MzypYx3CJ0QBtALW7sIsDLrLZCBmGStgLvocDj5i%2F%2FZ6sikl%2FxtTS1YaVcHMwSh0l1tslAb6FEqe%2BCJc5PuXGQ1T8b3pYJU9x5cUf%2BxWVfX9UDpsR2Vb5DJiN046N9tXDuuW5YOJgkW4BYJVnEYvDisX7HBaLADEU5F0AskHF1%2FqRL%2BWdpTL8YYw8vA4%2BF%2FApbJ09LrB0OWmY9zThkmrDxFrKKO%2F1GVH7PxfWwdC%2FW0%2FHNp70fs3nlxoQK2dm4uvV%2F8MGlCEW%2FIl8yLx26TMybUOvg6zQGJsCKrFB1XYBj7%2BtWg4zB8pcBx7ycRu9D4BUAAhkDIK3N8WCdqdDlBAyWbe7miCotvIS5zPOl9qWoj3GCQmD8jLsOpNAI84RTRdetjKdN0RDPXHbCHRw9aqS3kqajzurJ%2Fo0gAk4J1zmGr%2Bcnbnm6d8bKWpmFuMmbBP0jA44GQrpstZp%2FAoYHa4114pFC2JADJ1%2Byn5qz2AeOnchmoH41MECDjhZPHWYFMfFyQI%2FjhGpw5WoswB9GctCJRhubFszgoSuMwEGFFLYtpQXPGPYVdmGUOP1lpXkH0%2Bii6nwRE7CQSDhJHeP2uc%2FxBaml9aDZCfMU6ZC9FPYZT0wsMi4vwY6pgHnPBt%2F4CoFRlYUneibiP%2FdOOV8T2wy5%2BnDqjiXBCbS%2BXuQyNjzJZ1NZC7uKOyCeoIrSJs3GiAu6fBcvb%2F8ybLMMcy6XHaVCu3a60tc%2BIfn8xhll1sJSRnEEer%2BrpuIHHQBCyX2bmFQtjQQevZXqmWoPoIvLgI2oBWInSOjvsPQrF2%2F775aJtbJrhXMTx5NMmBxIGY5wzV6cOL0CKvtX6rRzom5%2FMOW&X-Amz-Signature=efed73ff658acaecf4a97d5ba9adb9d3ed72d954724e2dd3cb1f16edebc0e2dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MNLBCVR%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFzeodhq%2BOw%2FqpJk%2Bl40JdJnucZLCrF2cFIMAi4kYec4AiB68x44fbPEN%2B2%2BpXdOOh0TwVPTv4B0NPWOiW%2FFRsKD9iqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEGLzqQITmibtzYEtKtwDHKaeMOocSqcvPb1MzypYx3CJ0QBtALW7sIsDLrLZCBmGStgLvocDj5i%2F%2FZ6sikl%2FxtTS1YaVcHMwSh0l1tslAb6FEqe%2BCJc5PuXGQ1T8b3pYJU9x5cUf%2BxWVfX9UDpsR2Vb5DJiN046N9tXDuuW5YOJgkW4BYJVnEYvDisX7HBaLADEU5F0AskHF1%2FqRL%2BWdpTL8YYw8vA4%2BF%2FApbJ09LrB0OWmY9zThkmrDxFrKKO%2F1GVH7PxfWwdC%2FW0%2FHNp70fs3nlxoQK2dm4uvV%2F8MGlCEW%2FIl8yLx26TMybUOvg6zQGJsCKrFB1XYBj7%2BtWg4zB8pcBx7ycRu9D4BUAAhkDIK3N8WCdqdDlBAyWbe7miCotvIS5zPOl9qWoj3GCQmD8jLsOpNAI84RTRdetjKdN0RDPXHbCHRw9aqS3kqajzurJ%2Fo0gAk4J1zmGr%2Bcnbnm6d8bKWpmFuMmbBP0jA44GQrpstZp%2FAoYHa4114pFC2JADJ1%2Byn5qz2AeOnchmoH41MECDjhZPHWYFMfFyQI%2FjhGpw5WoswB9GctCJRhubFszgoSuMwEGFFLYtpQXPGPYVdmGUOP1lpXkH0%2Bii6nwRE7CQSDhJHeP2uc%2FxBaml9aDZCfMU6ZC9FPYZT0wsMi4vwY6pgHnPBt%2F4CoFRlYUneibiP%2FdOOV8T2wy5%2BnDqjiXBCbS%2BXuQyNjzJZ1NZC7uKOyCeoIrSJs3GiAu6fBcvb%2F8ybLMMcy6XHaVCu3a60tc%2BIfn8xhll1sJSRnEEer%2BrpuIHHQBCyX2bmFQtjQQevZXqmWoPoIvLgI2oBWInSOjvsPQrF2%2F775aJtbJrhXMTx5NMmBxIGY5wzV6cOL0CKvtX6rRzom5%2FMOW&X-Amz-Signature=f0130cbebe6976e80f4e6ce1ec5f368e4af10a1ca9339fde9e6ac184657204bc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
