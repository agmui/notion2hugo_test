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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NTQ6JR6%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCzrfdFdeIGZ6edF8BWwccG66fgCfEjJssa3E6EmOHTFwIgY4dpI3lDQfarguYMvJsoBeKezrfnlVKdelMvEU9oI7Eq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCINdnL3uz7X7YJmaircAwswT6Io9CWvihu59w1NFHnJjqLQiD0eJrEMfWlShlsxuCY4Si9ulNcAV%2FYdfU5jzCCIxivhz6AsgwseotfL5d5e2MtKW2ZPPofoDFRY0kGU86S6h2FoMFkLGVQhdnYOJ6fvFXUDe9VPGkzQ0N2bS66Y3tLtU%2Bn6AsX%2BUbhp%2F2%2FF0A9H%2FJZ4ekqI17zx9qPIrxrdUjIMhsR5y%2B7FTm4vxdlaxEKzlPNJqDOS2C0hyNRqkTgF8Xf9XgZY2E8f1Gr%2FOJHJircOhYEwx0Zn%2FnRTm%2BGv%2FJUo3ZcIKT%2BT7LrVmNfjOk%2BfLrsbpYp7I4HEKFcSRNzKJq5Ofm2DkSaYdJ%2FXOcyDw0Jq1fQhu%2FTvCGaF0Za1I8FqDXnDFZyTIN9yqzq7%2FXvBRMU7%2BekvswEJxcAsGB43GWdZ2cWXRxtIRdLRvD%2FJoWBMoAftslSwDpu68YvYsryZh66w1WPHvMH5%2FfN5pddmWl0yDVqtBhX2jIuSFnquZ9UqlawB83ffhRwSRdKw0JSUn%2B1rvf5kGr5%2B4Fa4pUVMvG6Aey6UBfxLn%2B6A963YJIrrAulYfueIXNJK3%2FOAom7cl%2BREe72bVN6JtLFkAbHHG67TE4NPf6THIYGxkWRqE1sVmGKifJvMiu8CMMOmt74GOqUBJY5EQkMvq%2B2NiHEyi4TF3l891MWQS8ymG%2BhEvNwFAAGUoUKzcgsRzUqF2EOIs%2Fy9MT5hP%2FnUQgg4ojAo5eU6JxY%2Bh%2BCMBu1K4nxam4aB%2FPVZTOrS2g1nOtZrkB3Kl3zWvyGK58LNP%2F9w2TAXaB%2BCj908CwwPbcq4ES0nUtcOEp2VbBt9W9afNtgb%2BJ0%2FafME1YMgdI0AbhmQxJY3Vt6vNBYRCwxN&X-Amz-Signature=9d563f626b5a4a0b7d1cb7a5f9f390e6ff21ee4a6148f323ce3d02f2a186f70d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NTQ6JR6%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCzrfdFdeIGZ6edF8BWwccG66fgCfEjJssa3E6EmOHTFwIgY4dpI3lDQfarguYMvJsoBeKezrfnlVKdelMvEU9oI7Eq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCINdnL3uz7X7YJmaircAwswT6Io9CWvihu59w1NFHnJjqLQiD0eJrEMfWlShlsxuCY4Si9ulNcAV%2FYdfU5jzCCIxivhz6AsgwseotfL5d5e2MtKW2ZPPofoDFRY0kGU86S6h2FoMFkLGVQhdnYOJ6fvFXUDe9VPGkzQ0N2bS66Y3tLtU%2Bn6AsX%2BUbhp%2F2%2FF0A9H%2FJZ4ekqI17zx9qPIrxrdUjIMhsR5y%2B7FTm4vxdlaxEKzlPNJqDOS2C0hyNRqkTgF8Xf9XgZY2E8f1Gr%2FOJHJircOhYEwx0Zn%2FnRTm%2BGv%2FJUo3ZcIKT%2BT7LrVmNfjOk%2BfLrsbpYp7I4HEKFcSRNzKJq5Ofm2DkSaYdJ%2FXOcyDw0Jq1fQhu%2FTvCGaF0Za1I8FqDXnDFZyTIN9yqzq7%2FXvBRMU7%2BekvswEJxcAsGB43GWdZ2cWXRxtIRdLRvD%2FJoWBMoAftslSwDpu68YvYsryZh66w1WPHvMH5%2FfN5pddmWl0yDVqtBhX2jIuSFnquZ9UqlawB83ffhRwSRdKw0JSUn%2B1rvf5kGr5%2B4Fa4pUVMvG6Aey6UBfxLn%2B6A963YJIrrAulYfueIXNJK3%2FOAom7cl%2BREe72bVN6JtLFkAbHHG67TE4NPf6THIYGxkWRqE1sVmGKifJvMiu8CMMOmt74GOqUBJY5EQkMvq%2B2NiHEyi4TF3l891MWQS8ymG%2BhEvNwFAAGUoUKzcgsRzUqF2EOIs%2Fy9MT5hP%2FnUQgg4ojAo5eU6JxY%2Bh%2BCMBu1K4nxam4aB%2FPVZTOrS2g1nOtZrkB3Kl3zWvyGK58LNP%2F9w2TAXaB%2BCj908CwwPbcq4ES0nUtcOEp2VbBt9W9afNtgb%2BJ0%2FafME1YMgdI0AbhmQxJY3Vt6vNBYRCwxN&X-Amz-Signature=33bd02382ca0359e76de614230842c0d4aac41d575db4e0cb159bf98dc60424c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NTQ6JR6%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCzrfdFdeIGZ6edF8BWwccG66fgCfEjJssa3E6EmOHTFwIgY4dpI3lDQfarguYMvJsoBeKezrfnlVKdelMvEU9oI7Eq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCINdnL3uz7X7YJmaircAwswT6Io9CWvihu59w1NFHnJjqLQiD0eJrEMfWlShlsxuCY4Si9ulNcAV%2FYdfU5jzCCIxivhz6AsgwseotfL5d5e2MtKW2ZPPofoDFRY0kGU86S6h2FoMFkLGVQhdnYOJ6fvFXUDe9VPGkzQ0N2bS66Y3tLtU%2Bn6AsX%2BUbhp%2F2%2FF0A9H%2FJZ4ekqI17zx9qPIrxrdUjIMhsR5y%2B7FTm4vxdlaxEKzlPNJqDOS2C0hyNRqkTgF8Xf9XgZY2E8f1Gr%2FOJHJircOhYEwx0Zn%2FnRTm%2BGv%2FJUo3ZcIKT%2BT7LrVmNfjOk%2BfLrsbpYp7I4HEKFcSRNzKJq5Ofm2DkSaYdJ%2FXOcyDw0Jq1fQhu%2FTvCGaF0Za1I8FqDXnDFZyTIN9yqzq7%2FXvBRMU7%2BekvswEJxcAsGB43GWdZ2cWXRxtIRdLRvD%2FJoWBMoAftslSwDpu68YvYsryZh66w1WPHvMH5%2FfN5pddmWl0yDVqtBhX2jIuSFnquZ9UqlawB83ffhRwSRdKw0JSUn%2B1rvf5kGr5%2B4Fa4pUVMvG6Aey6UBfxLn%2B6A963YJIrrAulYfueIXNJK3%2FOAom7cl%2BREe72bVN6JtLFkAbHHG67TE4NPf6THIYGxkWRqE1sVmGKifJvMiu8CMMOmt74GOqUBJY5EQkMvq%2B2NiHEyi4TF3l891MWQS8ymG%2BhEvNwFAAGUoUKzcgsRzUqF2EOIs%2Fy9MT5hP%2FnUQgg4ojAo5eU6JxY%2Bh%2BCMBu1K4nxam4aB%2FPVZTOrS2g1nOtZrkB3Kl3zWvyGK58LNP%2F9w2TAXaB%2BCj908CwwPbcq4ES0nUtcOEp2VbBt9W9afNtgb%2BJ0%2FafME1YMgdI0AbhmQxJY3Vt6vNBYRCwxN&X-Amz-Signature=6bf4fd1791ae1f41baca4df83b72e0107a0c7fe11dc9a4b32126bb5fd27b41dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NTQ6JR6%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCzrfdFdeIGZ6edF8BWwccG66fgCfEjJssa3E6EmOHTFwIgY4dpI3lDQfarguYMvJsoBeKezrfnlVKdelMvEU9oI7Eq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCINdnL3uz7X7YJmaircAwswT6Io9CWvihu59w1NFHnJjqLQiD0eJrEMfWlShlsxuCY4Si9ulNcAV%2FYdfU5jzCCIxivhz6AsgwseotfL5d5e2MtKW2ZPPofoDFRY0kGU86S6h2FoMFkLGVQhdnYOJ6fvFXUDe9VPGkzQ0N2bS66Y3tLtU%2Bn6AsX%2BUbhp%2F2%2FF0A9H%2FJZ4ekqI17zx9qPIrxrdUjIMhsR5y%2B7FTm4vxdlaxEKzlPNJqDOS2C0hyNRqkTgF8Xf9XgZY2E8f1Gr%2FOJHJircOhYEwx0Zn%2FnRTm%2BGv%2FJUo3ZcIKT%2BT7LrVmNfjOk%2BfLrsbpYp7I4HEKFcSRNzKJq5Ofm2DkSaYdJ%2FXOcyDw0Jq1fQhu%2FTvCGaF0Za1I8FqDXnDFZyTIN9yqzq7%2FXvBRMU7%2BekvswEJxcAsGB43GWdZ2cWXRxtIRdLRvD%2FJoWBMoAftslSwDpu68YvYsryZh66w1WPHvMH5%2FfN5pddmWl0yDVqtBhX2jIuSFnquZ9UqlawB83ffhRwSRdKw0JSUn%2B1rvf5kGr5%2B4Fa4pUVMvG6Aey6UBfxLn%2B6A963YJIrrAulYfueIXNJK3%2FOAom7cl%2BREe72bVN6JtLFkAbHHG67TE4NPf6THIYGxkWRqE1sVmGKifJvMiu8CMMOmt74GOqUBJY5EQkMvq%2B2NiHEyi4TF3l891MWQS8ymG%2BhEvNwFAAGUoUKzcgsRzUqF2EOIs%2Fy9MT5hP%2FnUQgg4ojAo5eU6JxY%2Bh%2BCMBu1K4nxam4aB%2FPVZTOrS2g1nOtZrkB3Kl3zWvyGK58LNP%2F9w2TAXaB%2BCj908CwwPbcq4ES0nUtcOEp2VbBt9W9afNtgb%2BJ0%2FafME1YMgdI0AbhmQxJY3Vt6vNBYRCwxN&X-Amz-Signature=809d68f16ea420e146e653038a614ae7b123edee643b6bc180dbdac00e95ba0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NTQ6JR6%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCzrfdFdeIGZ6edF8BWwccG66fgCfEjJssa3E6EmOHTFwIgY4dpI3lDQfarguYMvJsoBeKezrfnlVKdelMvEU9oI7Eq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCINdnL3uz7X7YJmaircAwswT6Io9CWvihu59w1NFHnJjqLQiD0eJrEMfWlShlsxuCY4Si9ulNcAV%2FYdfU5jzCCIxivhz6AsgwseotfL5d5e2MtKW2ZPPofoDFRY0kGU86S6h2FoMFkLGVQhdnYOJ6fvFXUDe9VPGkzQ0N2bS66Y3tLtU%2Bn6AsX%2BUbhp%2F2%2FF0A9H%2FJZ4ekqI17zx9qPIrxrdUjIMhsR5y%2B7FTm4vxdlaxEKzlPNJqDOS2C0hyNRqkTgF8Xf9XgZY2E8f1Gr%2FOJHJircOhYEwx0Zn%2FnRTm%2BGv%2FJUo3ZcIKT%2BT7LrVmNfjOk%2BfLrsbpYp7I4HEKFcSRNzKJq5Ofm2DkSaYdJ%2FXOcyDw0Jq1fQhu%2FTvCGaF0Za1I8FqDXnDFZyTIN9yqzq7%2FXvBRMU7%2BekvswEJxcAsGB43GWdZ2cWXRxtIRdLRvD%2FJoWBMoAftslSwDpu68YvYsryZh66w1WPHvMH5%2FfN5pddmWl0yDVqtBhX2jIuSFnquZ9UqlawB83ffhRwSRdKw0JSUn%2B1rvf5kGr5%2B4Fa4pUVMvG6Aey6UBfxLn%2B6A963YJIrrAulYfueIXNJK3%2FOAom7cl%2BREe72bVN6JtLFkAbHHG67TE4NPf6THIYGxkWRqE1sVmGKifJvMiu8CMMOmt74GOqUBJY5EQkMvq%2B2NiHEyi4TF3l891MWQS8ymG%2BhEvNwFAAGUoUKzcgsRzUqF2EOIs%2Fy9MT5hP%2FnUQgg4ojAo5eU6JxY%2Bh%2BCMBu1K4nxam4aB%2FPVZTOrS2g1nOtZrkB3Kl3zWvyGK58LNP%2F9w2TAXaB%2BCj908CwwPbcq4ES0nUtcOEp2VbBt9W9afNtgb%2BJ0%2FafME1YMgdI0AbhmQxJY3Vt6vNBYRCwxN&X-Amz-Signature=72943a25c8ca9574797a8c33ea882dc7ffaebf70a22dcb1b986cbe30b0f19b28&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
