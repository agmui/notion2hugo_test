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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XMJCFBN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwRSK11NmyF2C%2FXN%2BepyKQBXqdpK3bUS2SLvzt6fuEGwIgMpVdU5U4798UIGipn%2BC%2FUGnUPsUtld6botxuUdZ6wmEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Y%2B94m7UD%2FTI7xMCrcAwe39NDJ74iPbX48znwVPgt3nMOhWhGZBc9rWEgDgA4ok%2F637a4G9Ua4xTbZB2rYNBfS5bvG%2FHC9CZ5kyE4sG%2B665ncgjYBb%2BHCHwlwHQVuN8VyPrkurZktC3dFdL53DcTt7%2BixB25k%2B59ArOv%2Fm6e3HZ4Hh1sURlsRl6OtFoi%2FvYF2Hpqx0tuGU0%2BANNPYF15iWSeXn0gyZnyqFes4Q6qt9DyTkyeqG38mGudB2Q4lVTPQhMNDu8qOm722aNIeDE6w3BoUMWAV9B5D46E0dULE8IrwoXDHM3fKA8nLq09bG84q3yUhegaVH0VQcTI%2F0Q6nPxpDj2CgEi1GKHjtIvt%2BL4QP%2FkDT%2F4Mr7wMYX7JCPItanx5WrlIDQ2TKErgphuyWVG%2BaulPBXpYP03JADneYvqgQtyKg0hcOIr4SYXVW9xjqOptsVMGE2yRFMQgk6%2BCoduLJd1aNBXnGIRA%2FffuPaXVQ%2BbfqFDg7MgKar9N5dLwpUeWQOsR%2FaPSe2AURdvFy8Rn7id4mY0P6UkdvyqrQbERhux9A9KQfWpjKx%2BsdByW40UrE4MJ5AJ2b4EgKieh8fL6Z%2BgkH4GWniwmoM%2BcFVXeIjFAImISGEmkZHFiOD5%2BBOYr0HZ7WQh7gpMOPJ6r0GOqUB7VMqb8SA3581Cd%2FZVnHDqVqogq%2FM3Hr9ZK6bSlFHD7iAnow2nRzoKdPFczXLTiL39Z7f6yXN8H66W5EvsbFGXbm6%2Fg7PimC9VGJjp42rDaMw5zYa5wp03T%2Buyx9DLWEAad4U61iVc%2BhnZDFat2%2BnPonQr%2BwvOXqsYbC%2BfyOEDLxq0vWeL%2FLpW2dFx7v0v65A6AsarG46BsriBnOCk1nOjLkFRa2Z&X-Amz-Signature=87054b48ff0d683dd481822f03aa50215bd2c3db40725230633574c0909425db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XMJCFBN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwRSK11NmyF2C%2FXN%2BepyKQBXqdpK3bUS2SLvzt6fuEGwIgMpVdU5U4798UIGipn%2BC%2FUGnUPsUtld6botxuUdZ6wmEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Y%2B94m7UD%2FTI7xMCrcAwe39NDJ74iPbX48znwVPgt3nMOhWhGZBc9rWEgDgA4ok%2F637a4G9Ua4xTbZB2rYNBfS5bvG%2FHC9CZ5kyE4sG%2B665ncgjYBb%2BHCHwlwHQVuN8VyPrkurZktC3dFdL53DcTt7%2BixB25k%2B59ArOv%2Fm6e3HZ4Hh1sURlsRl6OtFoi%2FvYF2Hpqx0tuGU0%2BANNPYF15iWSeXn0gyZnyqFes4Q6qt9DyTkyeqG38mGudB2Q4lVTPQhMNDu8qOm722aNIeDE6w3BoUMWAV9B5D46E0dULE8IrwoXDHM3fKA8nLq09bG84q3yUhegaVH0VQcTI%2F0Q6nPxpDj2CgEi1GKHjtIvt%2BL4QP%2FkDT%2F4Mr7wMYX7JCPItanx5WrlIDQ2TKErgphuyWVG%2BaulPBXpYP03JADneYvqgQtyKg0hcOIr4SYXVW9xjqOptsVMGE2yRFMQgk6%2BCoduLJd1aNBXnGIRA%2FffuPaXVQ%2BbfqFDg7MgKar9N5dLwpUeWQOsR%2FaPSe2AURdvFy8Rn7id4mY0P6UkdvyqrQbERhux9A9KQfWpjKx%2BsdByW40UrE4MJ5AJ2b4EgKieh8fL6Z%2BgkH4GWniwmoM%2BcFVXeIjFAImISGEmkZHFiOD5%2BBOYr0HZ7WQh7gpMOPJ6r0GOqUB7VMqb8SA3581Cd%2FZVnHDqVqogq%2FM3Hr9ZK6bSlFHD7iAnow2nRzoKdPFczXLTiL39Z7f6yXN8H66W5EvsbFGXbm6%2Fg7PimC9VGJjp42rDaMw5zYa5wp03T%2Buyx9DLWEAad4U61iVc%2BhnZDFat2%2BnPonQr%2BwvOXqsYbC%2BfyOEDLxq0vWeL%2FLpW2dFx7v0v65A6AsarG46BsriBnOCk1nOjLkFRa2Z&X-Amz-Signature=d53aa76fb0a1ec941f01726dbacbe96caa4af64475f93b0fbcd09e4af94e270d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XMJCFBN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwRSK11NmyF2C%2FXN%2BepyKQBXqdpK3bUS2SLvzt6fuEGwIgMpVdU5U4798UIGipn%2BC%2FUGnUPsUtld6botxuUdZ6wmEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Y%2B94m7UD%2FTI7xMCrcAwe39NDJ74iPbX48znwVPgt3nMOhWhGZBc9rWEgDgA4ok%2F637a4G9Ua4xTbZB2rYNBfS5bvG%2FHC9CZ5kyE4sG%2B665ncgjYBb%2BHCHwlwHQVuN8VyPrkurZktC3dFdL53DcTt7%2BixB25k%2B59ArOv%2Fm6e3HZ4Hh1sURlsRl6OtFoi%2FvYF2Hpqx0tuGU0%2BANNPYF15iWSeXn0gyZnyqFes4Q6qt9DyTkyeqG38mGudB2Q4lVTPQhMNDu8qOm722aNIeDE6w3BoUMWAV9B5D46E0dULE8IrwoXDHM3fKA8nLq09bG84q3yUhegaVH0VQcTI%2F0Q6nPxpDj2CgEi1GKHjtIvt%2BL4QP%2FkDT%2F4Mr7wMYX7JCPItanx5WrlIDQ2TKErgphuyWVG%2BaulPBXpYP03JADneYvqgQtyKg0hcOIr4SYXVW9xjqOptsVMGE2yRFMQgk6%2BCoduLJd1aNBXnGIRA%2FffuPaXVQ%2BbfqFDg7MgKar9N5dLwpUeWQOsR%2FaPSe2AURdvFy8Rn7id4mY0P6UkdvyqrQbERhux9A9KQfWpjKx%2BsdByW40UrE4MJ5AJ2b4EgKieh8fL6Z%2BgkH4GWniwmoM%2BcFVXeIjFAImISGEmkZHFiOD5%2BBOYr0HZ7WQh7gpMOPJ6r0GOqUB7VMqb8SA3581Cd%2FZVnHDqVqogq%2FM3Hr9ZK6bSlFHD7iAnow2nRzoKdPFczXLTiL39Z7f6yXN8H66W5EvsbFGXbm6%2Fg7PimC9VGJjp42rDaMw5zYa5wp03T%2Buyx9DLWEAad4U61iVc%2BhnZDFat2%2BnPonQr%2BwvOXqsYbC%2BfyOEDLxq0vWeL%2FLpW2dFx7v0v65A6AsarG46BsriBnOCk1nOjLkFRa2Z&X-Amz-Signature=e2b99da64577a8800ca4b9b6873db8e901bc3e4c138c0cc88a72e9dd2ab02e03&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XMJCFBN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwRSK11NmyF2C%2FXN%2BepyKQBXqdpK3bUS2SLvzt6fuEGwIgMpVdU5U4798UIGipn%2BC%2FUGnUPsUtld6botxuUdZ6wmEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Y%2B94m7UD%2FTI7xMCrcAwe39NDJ74iPbX48znwVPgt3nMOhWhGZBc9rWEgDgA4ok%2F637a4G9Ua4xTbZB2rYNBfS5bvG%2FHC9CZ5kyE4sG%2B665ncgjYBb%2BHCHwlwHQVuN8VyPrkurZktC3dFdL53DcTt7%2BixB25k%2B59ArOv%2Fm6e3HZ4Hh1sURlsRl6OtFoi%2FvYF2Hpqx0tuGU0%2BANNPYF15iWSeXn0gyZnyqFes4Q6qt9DyTkyeqG38mGudB2Q4lVTPQhMNDu8qOm722aNIeDE6w3BoUMWAV9B5D46E0dULE8IrwoXDHM3fKA8nLq09bG84q3yUhegaVH0VQcTI%2F0Q6nPxpDj2CgEi1GKHjtIvt%2BL4QP%2FkDT%2F4Mr7wMYX7JCPItanx5WrlIDQ2TKErgphuyWVG%2BaulPBXpYP03JADneYvqgQtyKg0hcOIr4SYXVW9xjqOptsVMGE2yRFMQgk6%2BCoduLJd1aNBXnGIRA%2FffuPaXVQ%2BbfqFDg7MgKar9N5dLwpUeWQOsR%2FaPSe2AURdvFy8Rn7id4mY0P6UkdvyqrQbERhux9A9KQfWpjKx%2BsdByW40UrE4MJ5AJ2b4EgKieh8fL6Z%2BgkH4GWniwmoM%2BcFVXeIjFAImISGEmkZHFiOD5%2BBOYr0HZ7WQh7gpMOPJ6r0GOqUB7VMqb8SA3581Cd%2FZVnHDqVqogq%2FM3Hr9ZK6bSlFHD7iAnow2nRzoKdPFczXLTiL39Z7f6yXN8H66W5EvsbFGXbm6%2Fg7PimC9VGJjp42rDaMw5zYa5wp03T%2Buyx9DLWEAad4U61iVc%2BhnZDFat2%2BnPonQr%2BwvOXqsYbC%2BfyOEDLxq0vWeL%2FLpW2dFx7v0v65A6AsarG46BsriBnOCk1nOjLkFRa2Z&X-Amz-Signature=6f0a1fe19300a526db520e97ac26798aef52e9f392846034a5401b2a299c3af2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XMJCFBN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwRSK11NmyF2C%2FXN%2BepyKQBXqdpK3bUS2SLvzt6fuEGwIgMpVdU5U4798UIGipn%2BC%2FUGnUPsUtld6botxuUdZ6wmEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Y%2B94m7UD%2FTI7xMCrcAwe39NDJ74iPbX48znwVPgt3nMOhWhGZBc9rWEgDgA4ok%2F637a4G9Ua4xTbZB2rYNBfS5bvG%2FHC9CZ5kyE4sG%2B665ncgjYBb%2BHCHwlwHQVuN8VyPrkurZktC3dFdL53DcTt7%2BixB25k%2B59ArOv%2Fm6e3HZ4Hh1sURlsRl6OtFoi%2FvYF2Hpqx0tuGU0%2BANNPYF15iWSeXn0gyZnyqFes4Q6qt9DyTkyeqG38mGudB2Q4lVTPQhMNDu8qOm722aNIeDE6w3BoUMWAV9B5D46E0dULE8IrwoXDHM3fKA8nLq09bG84q3yUhegaVH0VQcTI%2F0Q6nPxpDj2CgEi1GKHjtIvt%2BL4QP%2FkDT%2F4Mr7wMYX7JCPItanx5WrlIDQ2TKErgphuyWVG%2BaulPBXpYP03JADneYvqgQtyKg0hcOIr4SYXVW9xjqOptsVMGE2yRFMQgk6%2BCoduLJd1aNBXnGIRA%2FffuPaXVQ%2BbfqFDg7MgKar9N5dLwpUeWQOsR%2FaPSe2AURdvFy8Rn7id4mY0P6UkdvyqrQbERhux9A9KQfWpjKx%2BsdByW40UrE4MJ5AJ2b4EgKieh8fL6Z%2BgkH4GWniwmoM%2BcFVXeIjFAImISGEmkZHFiOD5%2BBOYr0HZ7WQh7gpMOPJ6r0GOqUB7VMqb8SA3581Cd%2FZVnHDqVqogq%2FM3Hr9ZK6bSlFHD7iAnow2nRzoKdPFczXLTiL39Z7f6yXN8H66W5EvsbFGXbm6%2Fg7PimC9VGJjp42rDaMw5zYa5wp03T%2Buyx9DLWEAad4U61iVc%2BhnZDFat2%2BnPonQr%2BwvOXqsYbC%2BfyOEDLxq0vWeL%2FLpW2dFx7v0v65A6AsarG46BsriBnOCk1nOjLkFRa2Z&X-Amz-Signature=eeb8a8d648738f0dcce100ce7bdbb37116b0e1394df25cc155fb67537dc2c400&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
