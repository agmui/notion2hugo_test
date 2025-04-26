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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PAU7VJV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDkGs4aGx1AbZTuUFxvtPEMZaIR5mRGJuvr%2FW%2FVNc9KAiEA3K%2Ff2Crgxit6SNlvxqpuF2yMCZ0CUODc9xTqcftF%2Bigq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDVHMLUok%2FXjgSNMXircA8lPzw51boJmASSFUJAAf3k4I3j0Z41wjWR55%2BO%2F6RKuT3m7yTLXroxSUSWVqrI0YTxRXwJZSs3nTh3p3DvMvqEWXef87dIUMoOSTaItFvaPin8zYnXXajLzAgCp8EjQUilPsURKzy2m5derK8wkkVX%2FUt5NbcWoOhulcpTOunKCF0ANvRg7tqaaX%2F4HC5VeyRbkrGkwFm6rCdWaTFDY4iKF1Ib%2F8iEqJ%2BMkM37OVQW1LeGuUqC1ySvi8vIEj49GYDxhxDziZ4fCgb3OyGzxhZrzW%2Bm58aQdDnxLIlZk00H2YLNsnxAddL6WIujLWWjp%2BlaX86Z5x3iep4CYl9ffQtGXMD8oWv0gc%2BdRhOKLu%2F1Q%2FkZDhxa4x0Chz4zXnVOmFl7iYCd6PQ0k3iVTnHHSDjxwME6PJr4Ea64lpNy8yxrw76g6lRrvh8gntTGzlWbbw4psYRmt8xDwVWMw2UdfVANQqXHSJhtQAicy3LX3uZEdxl0rY%2F6WdeY8HgMvpHcZM6QUtcPBEgjpKHCV%2FhI3fT1WUBiMITEvbyg9WE8E%2FCOxp6cuVMy4m%2FcH8SwuYp6HOz2aMb8uFILrk%2BqQ1ZmYw7T7pnXc0xWmaaiVgpk4VQhV%2Br9LqrCTZazFsdprMPGDssAGOqUBWcqQNSyZqvzJGEca9aeyq9kX09vBQh1QNw0keJtUkqh7lDUCks75ybe9xr0DOAxCQp4%2FevqGgRPs7prismB97P4YORoIFvqDwv8jI2YXshwlQWVNY9Bw7itVp1AnNfgT4ucCvTYSDGA5yk65j7%2FMxWU3d50HLJOOAjy6Ag8j8kF00m9rPm8A32YJ0KePxYpUdks83OvLYkSXmssMRw1MrYLDMB8f&X-Amz-Signature=eebbbce0dbd2a2ccb86e02141461f22b1866a356ec248f079b5c662bf6ebc3b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PAU7VJV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDkGs4aGx1AbZTuUFxvtPEMZaIR5mRGJuvr%2FW%2FVNc9KAiEA3K%2Ff2Crgxit6SNlvxqpuF2yMCZ0CUODc9xTqcftF%2Bigq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDVHMLUok%2FXjgSNMXircA8lPzw51boJmASSFUJAAf3k4I3j0Z41wjWR55%2BO%2F6RKuT3m7yTLXroxSUSWVqrI0YTxRXwJZSs3nTh3p3DvMvqEWXef87dIUMoOSTaItFvaPin8zYnXXajLzAgCp8EjQUilPsURKzy2m5derK8wkkVX%2FUt5NbcWoOhulcpTOunKCF0ANvRg7tqaaX%2F4HC5VeyRbkrGkwFm6rCdWaTFDY4iKF1Ib%2F8iEqJ%2BMkM37OVQW1LeGuUqC1ySvi8vIEj49GYDxhxDziZ4fCgb3OyGzxhZrzW%2Bm58aQdDnxLIlZk00H2YLNsnxAddL6WIujLWWjp%2BlaX86Z5x3iep4CYl9ffQtGXMD8oWv0gc%2BdRhOKLu%2F1Q%2FkZDhxa4x0Chz4zXnVOmFl7iYCd6PQ0k3iVTnHHSDjxwME6PJr4Ea64lpNy8yxrw76g6lRrvh8gntTGzlWbbw4psYRmt8xDwVWMw2UdfVANQqXHSJhtQAicy3LX3uZEdxl0rY%2F6WdeY8HgMvpHcZM6QUtcPBEgjpKHCV%2FhI3fT1WUBiMITEvbyg9WE8E%2FCOxp6cuVMy4m%2FcH8SwuYp6HOz2aMb8uFILrk%2BqQ1ZmYw7T7pnXc0xWmaaiVgpk4VQhV%2Br9LqrCTZazFsdprMPGDssAGOqUBWcqQNSyZqvzJGEca9aeyq9kX09vBQh1QNw0keJtUkqh7lDUCks75ybe9xr0DOAxCQp4%2FevqGgRPs7prismB97P4YORoIFvqDwv8jI2YXshwlQWVNY9Bw7itVp1AnNfgT4ucCvTYSDGA5yk65j7%2FMxWU3d50HLJOOAjy6Ag8j8kF00m9rPm8A32YJ0KePxYpUdks83OvLYkSXmssMRw1MrYLDMB8f&X-Amz-Signature=5db5998b5f30c5bb82e3f623eb384912b44ffe15633ae9f434b775d83a6f0389&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PAU7VJV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDkGs4aGx1AbZTuUFxvtPEMZaIR5mRGJuvr%2FW%2FVNc9KAiEA3K%2Ff2Crgxit6SNlvxqpuF2yMCZ0CUODc9xTqcftF%2Bigq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDVHMLUok%2FXjgSNMXircA8lPzw51boJmASSFUJAAf3k4I3j0Z41wjWR55%2BO%2F6RKuT3m7yTLXroxSUSWVqrI0YTxRXwJZSs3nTh3p3DvMvqEWXef87dIUMoOSTaItFvaPin8zYnXXajLzAgCp8EjQUilPsURKzy2m5derK8wkkVX%2FUt5NbcWoOhulcpTOunKCF0ANvRg7tqaaX%2F4HC5VeyRbkrGkwFm6rCdWaTFDY4iKF1Ib%2F8iEqJ%2BMkM37OVQW1LeGuUqC1ySvi8vIEj49GYDxhxDziZ4fCgb3OyGzxhZrzW%2Bm58aQdDnxLIlZk00H2YLNsnxAddL6WIujLWWjp%2BlaX86Z5x3iep4CYl9ffQtGXMD8oWv0gc%2BdRhOKLu%2F1Q%2FkZDhxa4x0Chz4zXnVOmFl7iYCd6PQ0k3iVTnHHSDjxwME6PJr4Ea64lpNy8yxrw76g6lRrvh8gntTGzlWbbw4psYRmt8xDwVWMw2UdfVANQqXHSJhtQAicy3LX3uZEdxl0rY%2F6WdeY8HgMvpHcZM6QUtcPBEgjpKHCV%2FhI3fT1WUBiMITEvbyg9WE8E%2FCOxp6cuVMy4m%2FcH8SwuYp6HOz2aMb8uFILrk%2BqQ1ZmYw7T7pnXc0xWmaaiVgpk4VQhV%2Br9LqrCTZazFsdprMPGDssAGOqUBWcqQNSyZqvzJGEca9aeyq9kX09vBQh1QNw0keJtUkqh7lDUCks75ybe9xr0DOAxCQp4%2FevqGgRPs7prismB97P4YORoIFvqDwv8jI2YXshwlQWVNY9Bw7itVp1AnNfgT4ucCvTYSDGA5yk65j7%2FMxWU3d50HLJOOAjy6Ag8j8kF00m9rPm8A32YJ0KePxYpUdks83OvLYkSXmssMRw1MrYLDMB8f&X-Amz-Signature=ecae0d7ae76393c64b98393b82a1acfab98785062e90fea55e09e45be5ca7c63&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PAU7VJV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDkGs4aGx1AbZTuUFxvtPEMZaIR5mRGJuvr%2FW%2FVNc9KAiEA3K%2Ff2Crgxit6SNlvxqpuF2yMCZ0CUODc9xTqcftF%2Bigq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDVHMLUok%2FXjgSNMXircA8lPzw51boJmASSFUJAAf3k4I3j0Z41wjWR55%2BO%2F6RKuT3m7yTLXroxSUSWVqrI0YTxRXwJZSs3nTh3p3DvMvqEWXef87dIUMoOSTaItFvaPin8zYnXXajLzAgCp8EjQUilPsURKzy2m5derK8wkkVX%2FUt5NbcWoOhulcpTOunKCF0ANvRg7tqaaX%2F4HC5VeyRbkrGkwFm6rCdWaTFDY4iKF1Ib%2F8iEqJ%2BMkM37OVQW1LeGuUqC1ySvi8vIEj49GYDxhxDziZ4fCgb3OyGzxhZrzW%2Bm58aQdDnxLIlZk00H2YLNsnxAddL6WIujLWWjp%2BlaX86Z5x3iep4CYl9ffQtGXMD8oWv0gc%2BdRhOKLu%2F1Q%2FkZDhxa4x0Chz4zXnVOmFl7iYCd6PQ0k3iVTnHHSDjxwME6PJr4Ea64lpNy8yxrw76g6lRrvh8gntTGzlWbbw4psYRmt8xDwVWMw2UdfVANQqXHSJhtQAicy3LX3uZEdxl0rY%2F6WdeY8HgMvpHcZM6QUtcPBEgjpKHCV%2FhI3fT1WUBiMITEvbyg9WE8E%2FCOxp6cuVMy4m%2FcH8SwuYp6HOz2aMb8uFILrk%2BqQ1ZmYw7T7pnXc0xWmaaiVgpk4VQhV%2Br9LqrCTZazFsdprMPGDssAGOqUBWcqQNSyZqvzJGEca9aeyq9kX09vBQh1QNw0keJtUkqh7lDUCks75ybe9xr0DOAxCQp4%2FevqGgRPs7prismB97P4YORoIFvqDwv8jI2YXshwlQWVNY9Bw7itVp1AnNfgT4ucCvTYSDGA5yk65j7%2FMxWU3d50HLJOOAjy6Ag8j8kF00m9rPm8A32YJ0KePxYpUdks83OvLYkSXmssMRw1MrYLDMB8f&X-Amz-Signature=9db4c2db248ae2122d3766f1e28e2a2cdfb3e9031f928c16b1e02c0a3a1ddf89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PAU7VJV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDkGs4aGx1AbZTuUFxvtPEMZaIR5mRGJuvr%2FW%2FVNc9KAiEA3K%2Ff2Crgxit6SNlvxqpuF2yMCZ0CUODc9xTqcftF%2Bigq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDVHMLUok%2FXjgSNMXircA8lPzw51boJmASSFUJAAf3k4I3j0Z41wjWR55%2BO%2F6RKuT3m7yTLXroxSUSWVqrI0YTxRXwJZSs3nTh3p3DvMvqEWXef87dIUMoOSTaItFvaPin8zYnXXajLzAgCp8EjQUilPsURKzy2m5derK8wkkVX%2FUt5NbcWoOhulcpTOunKCF0ANvRg7tqaaX%2F4HC5VeyRbkrGkwFm6rCdWaTFDY4iKF1Ib%2F8iEqJ%2BMkM37OVQW1LeGuUqC1ySvi8vIEj49GYDxhxDziZ4fCgb3OyGzxhZrzW%2Bm58aQdDnxLIlZk00H2YLNsnxAddL6WIujLWWjp%2BlaX86Z5x3iep4CYl9ffQtGXMD8oWv0gc%2BdRhOKLu%2F1Q%2FkZDhxa4x0Chz4zXnVOmFl7iYCd6PQ0k3iVTnHHSDjxwME6PJr4Ea64lpNy8yxrw76g6lRrvh8gntTGzlWbbw4psYRmt8xDwVWMw2UdfVANQqXHSJhtQAicy3LX3uZEdxl0rY%2F6WdeY8HgMvpHcZM6QUtcPBEgjpKHCV%2FhI3fT1WUBiMITEvbyg9WE8E%2FCOxp6cuVMy4m%2FcH8SwuYp6HOz2aMb8uFILrk%2BqQ1ZmYw7T7pnXc0xWmaaiVgpk4VQhV%2Br9LqrCTZazFsdprMPGDssAGOqUBWcqQNSyZqvzJGEca9aeyq9kX09vBQh1QNw0keJtUkqh7lDUCks75ybe9xr0DOAxCQp4%2FevqGgRPs7prismB97P4YORoIFvqDwv8jI2YXshwlQWVNY9Bw7itVp1AnNfgT4ucCvTYSDGA5yk65j7%2FMxWU3d50HLJOOAjy6Ag8j8kF00m9rPm8A32YJ0KePxYpUdks83OvLYkSXmssMRw1MrYLDMB8f&X-Amz-Signature=568efc8e41fe4c1efd991960a14b30f1b7f50f6c195b445435651a1408cd63fc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
