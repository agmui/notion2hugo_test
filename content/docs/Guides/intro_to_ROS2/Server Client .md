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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSOBSBR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGBv%2B%2FSTEN4n77dQAQ0fnCMxik6tPwUDrgoDNngr00QgIgRS%2F6KhtXDjlAvPzMG9hhriNsLs2j5P2%2FB5rX8twCAaIqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAz34RLWGqb8gF1jnircAzok967zwBmqvb8ZC%2FjixaXMFJ9iDoL54gb3XWzQ%2Bl2Quj%2Fck%2FCA%2F7WAVD9KAis7Je2BkNfxYAkZnIFvfK1wGPaeR%2B9D6lHFss7QfZiaRAuoSKi6tTFVOCp8ZkqN%2BNtus%2FsEUUVHyTAtUQD79QpZMdb45Gzo7kbW1Ai1NNcvsuV2NpGnHZaYKtPMIIJo%2FninCmwfiW07kQQm8y7D77OiBNQ5yhN6iGpNE996kFYQGa0JfbYm4rDcwSjZqIBCEbpyIXmVxBHCbAgmL0wb5YpxBtnfcAGYtTdgDrF%2FPv%2BAcdE87TqMPbOlvwcUFfcYyVqvt1ZuOTpSmfHN%2BIUwaTZr10%2By9eFZ4z0sKziChbntwvTGEoPN%2BIwL09yMjvYSYBM6J5JU%2BQYo0lzDyiPzp6OEHoNclZzvKZkuQ%2FDnyPnqaRbeEO35Ntkuf1zALz%2FAz1YiuYZPBKq7vrkgPl58QGjbuF86T%2Fdt0ntO7HSBl4V%2FR8VeAcTP8YFppAnyUsh9DyDun1BAlDWcDGcty9X5rST20sJIpy7LOGlOG%2B9qYRybR52%2FjlJicad0RlwElHHbYK3YsRZNBnGkhUgCFMW9uS3uyzLdzidJgGxS9AyrtE0SeDFsJSG4OOO%2Bi88g2fzsMPSo3sIGOqUBBkOv6Xkj%2BhVHK%2BNzI3ntbMqWQt7McHBI6wqwcCrcQ65Im6bSWBTKn5K32X5ihxBVnSGauKuxe2hHbde27BAGNz5RSbK3aTPAqXQwh7UOH9ZQKUOsI5YIS7k566xcpbtGwTk7wxPeyusrim4p5vt9Vz%2BIswnKM%2FLYG806njooN6i5D%2B5%2FQV1k5H6iwrYTq%2FC7OWrgRreB3OVxNQRZZexX0lUwGWWo&X-Amz-Signature=59e0f301c5f1549a9f124884c523202f9c18fc39406c51c5c60de6a2557e03cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSOBSBR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGBv%2B%2FSTEN4n77dQAQ0fnCMxik6tPwUDrgoDNngr00QgIgRS%2F6KhtXDjlAvPzMG9hhriNsLs2j5P2%2FB5rX8twCAaIqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAz34RLWGqb8gF1jnircAzok967zwBmqvb8ZC%2FjixaXMFJ9iDoL54gb3XWzQ%2Bl2Quj%2Fck%2FCA%2F7WAVD9KAis7Je2BkNfxYAkZnIFvfK1wGPaeR%2B9D6lHFss7QfZiaRAuoSKi6tTFVOCp8ZkqN%2BNtus%2FsEUUVHyTAtUQD79QpZMdb45Gzo7kbW1Ai1NNcvsuV2NpGnHZaYKtPMIIJo%2FninCmwfiW07kQQm8y7D77OiBNQ5yhN6iGpNE996kFYQGa0JfbYm4rDcwSjZqIBCEbpyIXmVxBHCbAgmL0wb5YpxBtnfcAGYtTdgDrF%2FPv%2BAcdE87TqMPbOlvwcUFfcYyVqvt1ZuOTpSmfHN%2BIUwaTZr10%2By9eFZ4z0sKziChbntwvTGEoPN%2BIwL09yMjvYSYBM6J5JU%2BQYo0lzDyiPzp6OEHoNclZzvKZkuQ%2FDnyPnqaRbeEO35Ntkuf1zALz%2FAz1YiuYZPBKq7vrkgPl58QGjbuF86T%2Fdt0ntO7HSBl4V%2FR8VeAcTP8YFppAnyUsh9DyDun1BAlDWcDGcty9X5rST20sJIpy7LOGlOG%2B9qYRybR52%2FjlJicad0RlwElHHbYK3YsRZNBnGkhUgCFMW9uS3uyzLdzidJgGxS9AyrtE0SeDFsJSG4OOO%2Bi88g2fzsMPSo3sIGOqUBBkOv6Xkj%2BhVHK%2BNzI3ntbMqWQt7McHBI6wqwcCrcQ65Im6bSWBTKn5K32X5ihxBVnSGauKuxe2hHbde27BAGNz5RSbK3aTPAqXQwh7UOH9ZQKUOsI5YIS7k566xcpbtGwTk7wxPeyusrim4p5vt9Vz%2BIswnKM%2FLYG806njooN6i5D%2B5%2FQV1k5H6iwrYTq%2FC7OWrgRreB3OVxNQRZZexX0lUwGWWo&X-Amz-Signature=0f7ce2f7c4f904dd686e3052de8b8854006dbdaf03d655a83f90b9cd20bc61cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSOBSBR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGBv%2B%2FSTEN4n77dQAQ0fnCMxik6tPwUDrgoDNngr00QgIgRS%2F6KhtXDjlAvPzMG9hhriNsLs2j5P2%2FB5rX8twCAaIqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAz34RLWGqb8gF1jnircAzok967zwBmqvb8ZC%2FjixaXMFJ9iDoL54gb3XWzQ%2Bl2Quj%2Fck%2FCA%2F7WAVD9KAis7Je2BkNfxYAkZnIFvfK1wGPaeR%2B9D6lHFss7QfZiaRAuoSKi6tTFVOCp8ZkqN%2BNtus%2FsEUUVHyTAtUQD79QpZMdb45Gzo7kbW1Ai1NNcvsuV2NpGnHZaYKtPMIIJo%2FninCmwfiW07kQQm8y7D77OiBNQ5yhN6iGpNE996kFYQGa0JfbYm4rDcwSjZqIBCEbpyIXmVxBHCbAgmL0wb5YpxBtnfcAGYtTdgDrF%2FPv%2BAcdE87TqMPbOlvwcUFfcYyVqvt1ZuOTpSmfHN%2BIUwaTZr10%2By9eFZ4z0sKziChbntwvTGEoPN%2BIwL09yMjvYSYBM6J5JU%2BQYo0lzDyiPzp6OEHoNclZzvKZkuQ%2FDnyPnqaRbeEO35Ntkuf1zALz%2FAz1YiuYZPBKq7vrkgPl58QGjbuF86T%2Fdt0ntO7HSBl4V%2FR8VeAcTP8YFppAnyUsh9DyDun1BAlDWcDGcty9X5rST20sJIpy7LOGlOG%2B9qYRybR52%2FjlJicad0RlwElHHbYK3YsRZNBnGkhUgCFMW9uS3uyzLdzidJgGxS9AyrtE0SeDFsJSG4OOO%2Bi88g2fzsMPSo3sIGOqUBBkOv6Xkj%2BhVHK%2BNzI3ntbMqWQt7McHBI6wqwcCrcQ65Im6bSWBTKn5K32X5ihxBVnSGauKuxe2hHbde27BAGNz5RSbK3aTPAqXQwh7UOH9ZQKUOsI5YIS7k566xcpbtGwTk7wxPeyusrim4p5vt9Vz%2BIswnKM%2FLYG806njooN6i5D%2B5%2FQV1k5H6iwrYTq%2FC7OWrgRreB3OVxNQRZZexX0lUwGWWo&X-Amz-Signature=9f79afae6708501d9bdeb5ab2249b90511ac31aa98816f3da263eaca873869ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSOBSBR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGBv%2B%2FSTEN4n77dQAQ0fnCMxik6tPwUDrgoDNngr00QgIgRS%2F6KhtXDjlAvPzMG9hhriNsLs2j5P2%2FB5rX8twCAaIqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAz34RLWGqb8gF1jnircAzok967zwBmqvb8ZC%2FjixaXMFJ9iDoL54gb3XWzQ%2Bl2Quj%2Fck%2FCA%2F7WAVD9KAis7Je2BkNfxYAkZnIFvfK1wGPaeR%2B9D6lHFss7QfZiaRAuoSKi6tTFVOCp8ZkqN%2BNtus%2FsEUUVHyTAtUQD79QpZMdb45Gzo7kbW1Ai1NNcvsuV2NpGnHZaYKtPMIIJo%2FninCmwfiW07kQQm8y7D77OiBNQ5yhN6iGpNE996kFYQGa0JfbYm4rDcwSjZqIBCEbpyIXmVxBHCbAgmL0wb5YpxBtnfcAGYtTdgDrF%2FPv%2BAcdE87TqMPbOlvwcUFfcYyVqvt1ZuOTpSmfHN%2BIUwaTZr10%2By9eFZ4z0sKziChbntwvTGEoPN%2BIwL09yMjvYSYBM6J5JU%2BQYo0lzDyiPzp6OEHoNclZzvKZkuQ%2FDnyPnqaRbeEO35Ntkuf1zALz%2FAz1YiuYZPBKq7vrkgPl58QGjbuF86T%2Fdt0ntO7HSBl4V%2FR8VeAcTP8YFppAnyUsh9DyDun1BAlDWcDGcty9X5rST20sJIpy7LOGlOG%2B9qYRybR52%2FjlJicad0RlwElHHbYK3YsRZNBnGkhUgCFMW9uS3uyzLdzidJgGxS9AyrtE0SeDFsJSG4OOO%2Bi88g2fzsMPSo3sIGOqUBBkOv6Xkj%2BhVHK%2BNzI3ntbMqWQt7McHBI6wqwcCrcQ65Im6bSWBTKn5K32X5ihxBVnSGauKuxe2hHbde27BAGNz5RSbK3aTPAqXQwh7UOH9ZQKUOsI5YIS7k566xcpbtGwTk7wxPeyusrim4p5vt9Vz%2BIswnKM%2FLYG806njooN6i5D%2B5%2FQV1k5H6iwrYTq%2FC7OWrgRreB3OVxNQRZZexX0lUwGWWo&X-Amz-Signature=889f0121aa0d233ebaa00260c2a64c6346fa0ac2572ec601d4c643b992a3dd09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSOBSBR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGBv%2B%2FSTEN4n77dQAQ0fnCMxik6tPwUDrgoDNngr00QgIgRS%2F6KhtXDjlAvPzMG9hhriNsLs2j5P2%2FB5rX8twCAaIqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAz34RLWGqb8gF1jnircAzok967zwBmqvb8ZC%2FjixaXMFJ9iDoL54gb3XWzQ%2Bl2Quj%2Fck%2FCA%2F7WAVD9KAis7Je2BkNfxYAkZnIFvfK1wGPaeR%2B9D6lHFss7QfZiaRAuoSKi6tTFVOCp8ZkqN%2BNtus%2FsEUUVHyTAtUQD79QpZMdb45Gzo7kbW1Ai1NNcvsuV2NpGnHZaYKtPMIIJo%2FninCmwfiW07kQQm8y7D77OiBNQ5yhN6iGpNE996kFYQGa0JfbYm4rDcwSjZqIBCEbpyIXmVxBHCbAgmL0wb5YpxBtnfcAGYtTdgDrF%2FPv%2BAcdE87TqMPbOlvwcUFfcYyVqvt1ZuOTpSmfHN%2BIUwaTZr10%2By9eFZ4z0sKziChbntwvTGEoPN%2BIwL09yMjvYSYBM6J5JU%2BQYo0lzDyiPzp6OEHoNclZzvKZkuQ%2FDnyPnqaRbeEO35Ntkuf1zALz%2FAz1YiuYZPBKq7vrkgPl58QGjbuF86T%2Fdt0ntO7HSBl4V%2FR8VeAcTP8YFppAnyUsh9DyDun1BAlDWcDGcty9X5rST20sJIpy7LOGlOG%2B9qYRybR52%2FjlJicad0RlwElHHbYK3YsRZNBnGkhUgCFMW9uS3uyzLdzidJgGxS9AyrtE0SeDFsJSG4OOO%2Bi88g2fzsMPSo3sIGOqUBBkOv6Xkj%2BhVHK%2BNzI3ntbMqWQt7McHBI6wqwcCrcQ65Im6bSWBTKn5K32X5ihxBVnSGauKuxe2hHbde27BAGNz5RSbK3aTPAqXQwh7UOH9ZQKUOsI5YIS7k566xcpbtGwTk7wxPeyusrim4p5vt9Vz%2BIswnKM%2FLYG806njooN6i5D%2B5%2FQV1k5H6iwrYTq%2FC7OWrgRreB3OVxNQRZZexX0lUwGWWo&X-Amz-Signature=2f7753e41720428ad982a2441d43d43009f70bc6a6eaec252aa3e2cdb119d7c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
