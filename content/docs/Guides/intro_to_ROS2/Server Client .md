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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMUIU7CC%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdPW%2B0dIp12LQMYe5Ggvg%2FsZuR%2FGRIz2Ixeo%2Fn%2F5FhKAiACLvsjj%2BVFy%2B5noDlrYYT5xA8VkPx6clwQ57jCRCO6fSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMROMj50Foy9V0sksWKtwDPFE3DFt2GBMpw3VON%2F5LKfIwq4D2XmgtIwjZvkkULNwtWRgb8jILI116vS4905zzGA2PSxIKd%2B7gm%2FXzaGD9gsYCluUOKPJ4Ccczzfn8r78KjMdmtt86NU%2FsOrOq2HgutKZcbvTJZaY6bRz3kx3E%2BvqUHCQhmB7llqI95OURPsOv2lWFMcPkLVJNByXKX3oUmNfCgrbtZeuf7MKKceFJ%2FEGGhkduErckQ9vwLi0OVGju6taKtFCUPs6keHDCnRjYektqrH2kcszgfZA6BfhbHWhBDqWjsTU6ICRUHNTJOBKAdJzttr%2BXs7N4ZQ1e5rQHhb0y1dkRAjxqbXoYKdGQI96Yj11NTdkHeZc6e8KJL2E9E5SSLCL4vY4yBX1DJux32vNIN5OX%2FyH%2BuN8BM9k7K1%2FPHTuKzvZuhYEOyAE6P%2BWT%2BPkAduB0SxF4rh5Dh9A721FyJJdwT%2BSXnXZik9AJeGEMYbMXfnHC7VkmyNcAbw%2BBJx1spIvnZEGLBP%2BBw1AOhTeBabRO%2FToDuKcRJGvQwzAthf62wPW8gZZjSm6mz0Q9nzTdBbwkVwcMBHQBR7ESKlz4mLJTrKdRv5VSKxM%2B%2BNlbOoEVBfFyb1JTbTT%2Bp%2FkXwa48XGz1yW16nlMwyM%2FrvAY6pgHQTWpW50OT%2BswPk4UdsEXDscQQNc5EVp23g1vQ%2B2dCEoFiGDbSlQ%2B77uiiN2qv6TrSIhrrlpuPfyY6V3tPpZ1KBBpe5wtQo1vPhKCv%2BpymuhgPNDOOKeGT7MS2MUbWifmppvVf0tnPIADLLB9RGTFS35%2FiHUX7ymR7muehBeWjATq7TBkk3m1MUT%2FT2rfZiDAe3fQokP4w4HgboZ1yKvhFxTOMU8zK&X-Amz-Signature=45f92b74edb13187ec6b472c5812506df70e0e89c1ccfa0db9c9b05156cb9ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMUIU7CC%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdPW%2B0dIp12LQMYe5Ggvg%2FsZuR%2FGRIz2Ixeo%2Fn%2F5FhKAiACLvsjj%2BVFy%2B5noDlrYYT5xA8VkPx6clwQ57jCRCO6fSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMROMj50Foy9V0sksWKtwDPFE3DFt2GBMpw3VON%2F5LKfIwq4D2XmgtIwjZvkkULNwtWRgb8jILI116vS4905zzGA2PSxIKd%2B7gm%2FXzaGD9gsYCluUOKPJ4Ccczzfn8r78KjMdmtt86NU%2FsOrOq2HgutKZcbvTJZaY6bRz3kx3E%2BvqUHCQhmB7llqI95OURPsOv2lWFMcPkLVJNByXKX3oUmNfCgrbtZeuf7MKKceFJ%2FEGGhkduErckQ9vwLi0OVGju6taKtFCUPs6keHDCnRjYektqrH2kcszgfZA6BfhbHWhBDqWjsTU6ICRUHNTJOBKAdJzttr%2BXs7N4ZQ1e5rQHhb0y1dkRAjxqbXoYKdGQI96Yj11NTdkHeZc6e8KJL2E9E5SSLCL4vY4yBX1DJux32vNIN5OX%2FyH%2BuN8BM9k7K1%2FPHTuKzvZuhYEOyAE6P%2BWT%2BPkAduB0SxF4rh5Dh9A721FyJJdwT%2BSXnXZik9AJeGEMYbMXfnHC7VkmyNcAbw%2BBJx1spIvnZEGLBP%2BBw1AOhTeBabRO%2FToDuKcRJGvQwzAthf62wPW8gZZjSm6mz0Q9nzTdBbwkVwcMBHQBR7ESKlz4mLJTrKdRv5VSKxM%2B%2BNlbOoEVBfFyb1JTbTT%2Bp%2FkXwa48XGz1yW16nlMwyM%2FrvAY6pgHQTWpW50OT%2BswPk4UdsEXDscQQNc5EVp23g1vQ%2B2dCEoFiGDbSlQ%2B77uiiN2qv6TrSIhrrlpuPfyY6V3tPpZ1KBBpe5wtQo1vPhKCv%2BpymuhgPNDOOKeGT7MS2MUbWifmppvVf0tnPIADLLB9RGTFS35%2FiHUX7ymR7muehBeWjATq7TBkk3m1MUT%2FT2rfZiDAe3fQokP4w4HgboZ1yKvhFxTOMU8zK&X-Amz-Signature=bcc67bc5541c3555cf85d0b730801b777df03f34e4d6179ba1d84c6a86fd03de&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMUIU7CC%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdPW%2B0dIp12LQMYe5Ggvg%2FsZuR%2FGRIz2Ixeo%2Fn%2F5FhKAiACLvsjj%2BVFy%2B5noDlrYYT5xA8VkPx6clwQ57jCRCO6fSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMROMj50Foy9V0sksWKtwDPFE3DFt2GBMpw3VON%2F5LKfIwq4D2XmgtIwjZvkkULNwtWRgb8jILI116vS4905zzGA2PSxIKd%2B7gm%2FXzaGD9gsYCluUOKPJ4Ccczzfn8r78KjMdmtt86NU%2FsOrOq2HgutKZcbvTJZaY6bRz3kx3E%2BvqUHCQhmB7llqI95OURPsOv2lWFMcPkLVJNByXKX3oUmNfCgrbtZeuf7MKKceFJ%2FEGGhkduErckQ9vwLi0OVGju6taKtFCUPs6keHDCnRjYektqrH2kcszgfZA6BfhbHWhBDqWjsTU6ICRUHNTJOBKAdJzttr%2BXs7N4ZQ1e5rQHhb0y1dkRAjxqbXoYKdGQI96Yj11NTdkHeZc6e8KJL2E9E5SSLCL4vY4yBX1DJux32vNIN5OX%2FyH%2BuN8BM9k7K1%2FPHTuKzvZuhYEOyAE6P%2BWT%2BPkAduB0SxF4rh5Dh9A721FyJJdwT%2BSXnXZik9AJeGEMYbMXfnHC7VkmyNcAbw%2BBJx1spIvnZEGLBP%2BBw1AOhTeBabRO%2FToDuKcRJGvQwzAthf62wPW8gZZjSm6mz0Q9nzTdBbwkVwcMBHQBR7ESKlz4mLJTrKdRv5VSKxM%2B%2BNlbOoEVBfFyb1JTbTT%2Bp%2FkXwa48XGz1yW16nlMwyM%2FrvAY6pgHQTWpW50OT%2BswPk4UdsEXDscQQNc5EVp23g1vQ%2B2dCEoFiGDbSlQ%2B77uiiN2qv6TrSIhrrlpuPfyY6V3tPpZ1KBBpe5wtQo1vPhKCv%2BpymuhgPNDOOKeGT7MS2MUbWifmppvVf0tnPIADLLB9RGTFS35%2FiHUX7ymR7muehBeWjATq7TBkk3m1MUT%2FT2rfZiDAe3fQokP4w4HgboZ1yKvhFxTOMU8zK&X-Amz-Signature=6b5d654ccabb9a0e3e1acd84bfc0e92b66b09707eb97eea88a9b4ee3777594c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMUIU7CC%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdPW%2B0dIp12LQMYe5Ggvg%2FsZuR%2FGRIz2Ixeo%2Fn%2F5FhKAiACLvsjj%2BVFy%2B5noDlrYYT5xA8VkPx6clwQ57jCRCO6fSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMROMj50Foy9V0sksWKtwDPFE3DFt2GBMpw3VON%2F5LKfIwq4D2XmgtIwjZvkkULNwtWRgb8jILI116vS4905zzGA2PSxIKd%2B7gm%2FXzaGD9gsYCluUOKPJ4Ccczzfn8r78KjMdmtt86NU%2FsOrOq2HgutKZcbvTJZaY6bRz3kx3E%2BvqUHCQhmB7llqI95OURPsOv2lWFMcPkLVJNByXKX3oUmNfCgrbtZeuf7MKKceFJ%2FEGGhkduErckQ9vwLi0OVGju6taKtFCUPs6keHDCnRjYektqrH2kcszgfZA6BfhbHWhBDqWjsTU6ICRUHNTJOBKAdJzttr%2BXs7N4ZQ1e5rQHhb0y1dkRAjxqbXoYKdGQI96Yj11NTdkHeZc6e8KJL2E9E5SSLCL4vY4yBX1DJux32vNIN5OX%2FyH%2BuN8BM9k7K1%2FPHTuKzvZuhYEOyAE6P%2BWT%2BPkAduB0SxF4rh5Dh9A721FyJJdwT%2BSXnXZik9AJeGEMYbMXfnHC7VkmyNcAbw%2BBJx1spIvnZEGLBP%2BBw1AOhTeBabRO%2FToDuKcRJGvQwzAthf62wPW8gZZjSm6mz0Q9nzTdBbwkVwcMBHQBR7ESKlz4mLJTrKdRv5VSKxM%2B%2BNlbOoEVBfFyb1JTbTT%2Bp%2FkXwa48XGz1yW16nlMwyM%2FrvAY6pgHQTWpW50OT%2BswPk4UdsEXDscQQNc5EVp23g1vQ%2B2dCEoFiGDbSlQ%2B77uiiN2qv6TrSIhrrlpuPfyY6V3tPpZ1KBBpe5wtQo1vPhKCv%2BpymuhgPNDOOKeGT7MS2MUbWifmppvVf0tnPIADLLB9RGTFS35%2FiHUX7ymR7muehBeWjATq7TBkk3m1MUT%2FT2rfZiDAe3fQokP4w4HgboZ1yKvhFxTOMU8zK&X-Amz-Signature=7904be55fafbaf8df5fa09cd6c36a131873c7b6ec62430360960b311cd66c28f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMUIU7CC%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdPW%2B0dIp12LQMYe5Ggvg%2FsZuR%2FGRIz2Ixeo%2Fn%2F5FhKAiACLvsjj%2BVFy%2B5noDlrYYT5xA8VkPx6clwQ57jCRCO6fSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMROMj50Foy9V0sksWKtwDPFE3DFt2GBMpw3VON%2F5LKfIwq4D2XmgtIwjZvkkULNwtWRgb8jILI116vS4905zzGA2PSxIKd%2B7gm%2FXzaGD9gsYCluUOKPJ4Ccczzfn8r78KjMdmtt86NU%2FsOrOq2HgutKZcbvTJZaY6bRz3kx3E%2BvqUHCQhmB7llqI95OURPsOv2lWFMcPkLVJNByXKX3oUmNfCgrbtZeuf7MKKceFJ%2FEGGhkduErckQ9vwLi0OVGju6taKtFCUPs6keHDCnRjYektqrH2kcszgfZA6BfhbHWhBDqWjsTU6ICRUHNTJOBKAdJzttr%2BXs7N4ZQ1e5rQHhb0y1dkRAjxqbXoYKdGQI96Yj11NTdkHeZc6e8KJL2E9E5SSLCL4vY4yBX1DJux32vNIN5OX%2FyH%2BuN8BM9k7K1%2FPHTuKzvZuhYEOyAE6P%2BWT%2BPkAduB0SxF4rh5Dh9A721FyJJdwT%2BSXnXZik9AJeGEMYbMXfnHC7VkmyNcAbw%2BBJx1spIvnZEGLBP%2BBw1AOhTeBabRO%2FToDuKcRJGvQwzAthf62wPW8gZZjSm6mz0Q9nzTdBbwkVwcMBHQBR7ESKlz4mLJTrKdRv5VSKxM%2B%2BNlbOoEVBfFyb1JTbTT%2Bp%2FkXwa48XGz1yW16nlMwyM%2FrvAY6pgHQTWpW50OT%2BswPk4UdsEXDscQQNc5EVp23g1vQ%2B2dCEoFiGDbSlQ%2B77uiiN2qv6TrSIhrrlpuPfyY6V3tPpZ1KBBpe5wtQo1vPhKCv%2BpymuhgPNDOOKeGT7MS2MUbWifmppvVf0tnPIADLLB9RGTFS35%2FiHUX7ymR7muehBeWjATq7TBkk3m1MUT%2FT2rfZiDAe3fQokP4w4HgboZ1yKvhFxTOMU8zK&X-Amz-Signature=84ce0bb461564401225895215d788a850aab0345f63401a13ec35859153bc2ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
