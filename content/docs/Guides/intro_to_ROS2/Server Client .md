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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOTIW45%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCUDY6LZu66KYL3AB74Y4GXCLBMlYAshCnNlBaeE3vNiwIgaP65XfvxJ%2BKrr89%2Fd91dzsSGKls5ukG00zxkh0vgEtEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOAEufu8TR2IoiCNASrcA6nkmlRMCAXQG7Bq1oNgkLAwguYtuw3QvNl5Ch%2BqcXu%2FXkV4z1W8j4R7PpxQam3ovDIbmyzexyqYkH9x1roM5brzsqpj8Y3KC2INVEPoOsv0Ma45R8Qh2YbtQPWFZzae5Gqobyw%2BkZeNyvdUcWQdkTZWUKQsrSPlm95ia%2FvMvo1ROn6h9dtD6YCJko9tANN71%2FreRPHSPno7rp2%2BZFBfyWfgEXxl6vmb488HeK26SYFIcGOlF23p2r186lQ1nzGrA7We%2Bae2RYb06D6%2B4pPovvzotlsBiLrvVPQhBhskUQc7Dgz%2BgteIeltHnLHYs5qEq4gD3yrlz3zL%2B0Csoh1InT7k9QvXC8LCAVxzstd2aBnujpmLb8Dg1P84%2B67U2vcj6JimnNujDXd%2BsYbfZvmukrhE2qO5lugzEXHfNbG%2FLNSxx7emAL3uGk8gD4p60chTMc8WjoDm4wRLz%2FPgB1dftK51T7mZIiN%2FphHi4RHgorefeh2u80udjc2WODj3yEeUWlwjKw3oFeBXMQ0RLczPGXHzm4rWy64L6RpqiaCNvSnCtyR2IOxv42gxME5%2BlSEVm%2BgG9EsjFgw694tEsC9%2Fo1Ko2G%2FN1nnibx6%2FmQR5BjxAPbH68OOpVvpbxzdZMMnDyL0GOqUBhFGMxJ4n9%2BYCNe5k0zJF9N9GGpPxu%2F5kcYeMla%2BIgYfBgkpttIzQ%2BcrJMJsrbPmE2jOpjrVU0mQJUzRLZPtjJOrL8gVvPkpJwS5JhynfRQNBdv7hSZfKpHsCpBkXfs7Lzh8%2BteZagQFMN4l%2FHsLySiGvKBFiXdASL5uHVc8PyfMaPPUCOZmPts5Gt5%2BiZu5t3YVc5%2B5dMu55OMbZ9n3Rscb5geHw&X-Amz-Signature=d4da600d98735cf78229b4a72979a43db567418b781bbac88fbca287c64d7c37&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOTIW45%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCUDY6LZu66KYL3AB74Y4GXCLBMlYAshCnNlBaeE3vNiwIgaP65XfvxJ%2BKrr89%2Fd91dzsSGKls5ukG00zxkh0vgEtEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOAEufu8TR2IoiCNASrcA6nkmlRMCAXQG7Bq1oNgkLAwguYtuw3QvNl5Ch%2BqcXu%2FXkV4z1W8j4R7PpxQam3ovDIbmyzexyqYkH9x1roM5brzsqpj8Y3KC2INVEPoOsv0Ma45R8Qh2YbtQPWFZzae5Gqobyw%2BkZeNyvdUcWQdkTZWUKQsrSPlm95ia%2FvMvo1ROn6h9dtD6YCJko9tANN71%2FreRPHSPno7rp2%2BZFBfyWfgEXxl6vmb488HeK26SYFIcGOlF23p2r186lQ1nzGrA7We%2Bae2RYb06D6%2B4pPovvzotlsBiLrvVPQhBhskUQc7Dgz%2BgteIeltHnLHYs5qEq4gD3yrlz3zL%2B0Csoh1InT7k9QvXC8LCAVxzstd2aBnujpmLb8Dg1P84%2B67U2vcj6JimnNujDXd%2BsYbfZvmukrhE2qO5lugzEXHfNbG%2FLNSxx7emAL3uGk8gD4p60chTMc8WjoDm4wRLz%2FPgB1dftK51T7mZIiN%2FphHi4RHgorefeh2u80udjc2WODj3yEeUWlwjKw3oFeBXMQ0RLczPGXHzm4rWy64L6RpqiaCNvSnCtyR2IOxv42gxME5%2BlSEVm%2BgG9EsjFgw694tEsC9%2Fo1Ko2G%2FN1nnibx6%2FmQR5BjxAPbH68OOpVvpbxzdZMMnDyL0GOqUBhFGMxJ4n9%2BYCNe5k0zJF9N9GGpPxu%2F5kcYeMla%2BIgYfBgkpttIzQ%2BcrJMJsrbPmE2jOpjrVU0mQJUzRLZPtjJOrL8gVvPkpJwS5JhynfRQNBdv7hSZfKpHsCpBkXfs7Lzh8%2BteZagQFMN4l%2FHsLySiGvKBFiXdASL5uHVc8PyfMaPPUCOZmPts5Gt5%2BiZu5t3YVc5%2B5dMu55OMbZ9n3Rscb5geHw&X-Amz-Signature=fbf38076f1f8b4986359354c066a4796718828dd6cb282c4a44d0afa0cb0ac58&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOTIW45%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCUDY6LZu66KYL3AB74Y4GXCLBMlYAshCnNlBaeE3vNiwIgaP65XfvxJ%2BKrr89%2Fd91dzsSGKls5ukG00zxkh0vgEtEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOAEufu8TR2IoiCNASrcA6nkmlRMCAXQG7Bq1oNgkLAwguYtuw3QvNl5Ch%2BqcXu%2FXkV4z1W8j4R7PpxQam3ovDIbmyzexyqYkH9x1roM5brzsqpj8Y3KC2INVEPoOsv0Ma45R8Qh2YbtQPWFZzae5Gqobyw%2BkZeNyvdUcWQdkTZWUKQsrSPlm95ia%2FvMvo1ROn6h9dtD6YCJko9tANN71%2FreRPHSPno7rp2%2BZFBfyWfgEXxl6vmb488HeK26SYFIcGOlF23p2r186lQ1nzGrA7We%2Bae2RYb06D6%2B4pPovvzotlsBiLrvVPQhBhskUQc7Dgz%2BgteIeltHnLHYs5qEq4gD3yrlz3zL%2B0Csoh1InT7k9QvXC8LCAVxzstd2aBnujpmLb8Dg1P84%2B67U2vcj6JimnNujDXd%2BsYbfZvmukrhE2qO5lugzEXHfNbG%2FLNSxx7emAL3uGk8gD4p60chTMc8WjoDm4wRLz%2FPgB1dftK51T7mZIiN%2FphHi4RHgorefeh2u80udjc2WODj3yEeUWlwjKw3oFeBXMQ0RLczPGXHzm4rWy64L6RpqiaCNvSnCtyR2IOxv42gxME5%2BlSEVm%2BgG9EsjFgw694tEsC9%2Fo1Ko2G%2FN1nnibx6%2FmQR5BjxAPbH68OOpVvpbxzdZMMnDyL0GOqUBhFGMxJ4n9%2BYCNe5k0zJF9N9GGpPxu%2F5kcYeMla%2BIgYfBgkpttIzQ%2BcrJMJsrbPmE2jOpjrVU0mQJUzRLZPtjJOrL8gVvPkpJwS5JhynfRQNBdv7hSZfKpHsCpBkXfs7Lzh8%2BteZagQFMN4l%2FHsLySiGvKBFiXdASL5uHVc8PyfMaPPUCOZmPts5Gt5%2BiZu5t3YVc5%2B5dMu55OMbZ9n3Rscb5geHw&X-Amz-Signature=24306879049d9e3ccdad29bf08b7e683da46db24a4d359e9408d599439706176&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOTIW45%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCUDY6LZu66KYL3AB74Y4GXCLBMlYAshCnNlBaeE3vNiwIgaP65XfvxJ%2BKrr89%2Fd91dzsSGKls5ukG00zxkh0vgEtEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOAEufu8TR2IoiCNASrcA6nkmlRMCAXQG7Bq1oNgkLAwguYtuw3QvNl5Ch%2BqcXu%2FXkV4z1W8j4R7PpxQam3ovDIbmyzexyqYkH9x1roM5brzsqpj8Y3KC2INVEPoOsv0Ma45R8Qh2YbtQPWFZzae5Gqobyw%2BkZeNyvdUcWQdkTZWUKQsrSPlm95ia%2FvMvo1ROn6h9dtD6YCJko9tANN71%2FreRPHSPno7rp2%2BZFBfyWfgEXxl6vmb488HeK26SYFIcGOlF23p2r186lQ1nzGrA7We%2Bae2RYb06D6%2B4pPovvzotlsBiLrvVPQhBhskUQc7Dgz%2BgteIeltHnLHYs5qEq4gD3yrlz3zL%2B0Csoh1InT7k9QvXC8LCAVxzstd2aBnujpmLb8Dg1P84%2B67U2vcj6JimnNujDXd%2BsYbfZvmukrhE2qO5lugzEXHfNbG%2FLNSxx7emAL3uGk8gD4p60chTMc8WjoDm4wRLz%2FPgB1dftK51T7mZIiN%2FphHi4RHgorefeh2u80udjc2WODj3yEeUWlwjKw3oFeBXMQ0RLczPGXHzm4rWy64L6RpqiaCNvSnCtyR2IOxv42gxME5%2BlSEVm%2BgG9EsjFgw694tEsC9%2Fo1Ko2G%2FN1nnibx6%2FmQR5BjxAPbH68OOpVvpbxzdZMMnDyL0GOqUBhFGMxJ4n9%2BYCNe5k0zJF9N9GGpPxu%2F5kcYeMla%2BIgYfBgkpttIzQ%2BcrJMJsrbPmE2jOpjrVU0mQJUzRLZPtjJOrL8gVvPkpJwS5JhynfRQNBdv7hSZfKpHsCpBkXfs7Lzh8%2BteZagQFMN4l%2FHsLySiGvKBFiXdASL5uHVc8PyfMaPPUCOZmPts5Gt5%2BiZu5t3YVc5%2B5dMu55OMbZ9n3Rscb5geHw&X-Amz-Signature=db392099652233a0b00f2d948283a1c89fd81126749f5eaa663181b837c5b357&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOTIW45%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCUDY6LZu66KYL3AB74Y4GXCLBMlYAshCnNlBaeE3vNiwIgaP65XfvxJ%2BKrr89%2Fd91dzsSGKls5ukG00zxkh0vgEtEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOAEufu8TR2IoiCNASrcA6nkmlRMCAXQG7Bq1oNgkLAwguYtuw3QvNl5Ch%2BqcXu%2FXkV4z1W8j4R7PpxQam3ovDIbmyzexyqYkH9x1roM5brzsqpj8Y3KC2INVEPoOsv0Ma45R8Qh2YbtQPWFZzae5Gqobyw%2BkZeNyvdUcWQdkTZWUKQsrSPlm95ia%2FvMvo1ROn6h9dtD6YCJko9tANN71%2FreRPHSPno7rp2%2BZFBfyWfgEXxl6vmb488HeK26SYFIcGOlF23p2r186lQ1nzGrA7We%2Bae2RYb06D6%2B4pPovvzotlsBiLrvVPQhBhskUQc7Dgz%2BgteIeltHnLHYs5qEq4gD3yrlz3zL%2B0Csoh1InT7k9QvXC8LCAVxzstd2aBnujpmLb8Dg1P84%2B67U2vcj6JimnNujDXd%2BsYbfZvmukrhE2qO5lugzEXHfNbG%2FLNSxx7emAL3uGk8gD4p60chTMc8WjoDm4wRLz%2FPgB1dftK51T7mZIiN%2FphHi4RHgorefeh2u80udjc2WODj3yEeUWlwjKw3oFeBXMQ0RLczPGXHzm4rWy64L6RpqiaCNvSnCtyR2IOxv42gxME5%2BlSEVm%2BgG9EsjFgw694tEsC9%2Fo1Ko2G%2FN1nnibx6%2FmQR5BjxAPbH68OOpVvpbxzdZMMnDyL0GOqUBhFGMxJ4n9%2BYCNe5k0zJF9N9GGpPxu%2F5kcYeMla%2BIgYfBgkpttIzQ%2BcrJMJsrbPmE2jOpjrVU0mQJUzRLZPtjJOrL8gVvPkpJwS5JhynfRQNBdv7hSZfKpHsCpBkXfs7Lzh8%2BteZagQFMN4l%2FHsLySiGvKBFiXdASL5uHVc8PyfMaPPUCOZmPts5Gt5%2BiZu5t3YVc5%2B5dMu55OMbZ9n3Rscb5geHw&X-Amz-Signature=464614bb0105601eb6071c3f9f95eb71010eabb5d012f28b71d7f3863131be75&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
