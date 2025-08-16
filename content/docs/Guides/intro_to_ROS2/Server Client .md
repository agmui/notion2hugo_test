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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KCRHTC2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDeUiPvIE2eiZYe4oY8DaUBJXUVfYWc%2Bda%2F6nQFlri8bwIhAIW4fyOsqR%2FPVj2CoUqDj3dlZUAD%2BQG9GrS0zOuENLY2Kv8DCHcQABoMNjM3NDIzMTgzODA1IgxURuR%2FDnKf4WjU7IYq3AMu9%2F60tmVEAWWWT%2FY1L%2Bqv%2Bt1FwBgbJdddqVeiWJMhmr6dL89OLQLvRnHQTZY58jRmyeV%2Bi87zQWqaGwrEsaS32Xhtc5lzn3WKUIpAHIwtS3k7nM7yOWrFLv2X8Qr5gsPVoNw7U569LAgoz7rFSzlujazwdYsDahjxXqdzUapuTsOKl6DwlyHJ6913bu6eeWTEBKtvHQjFVukiRELCD%2F73pYLr%2BTO9%2FISOK44fKAGArDnhUBvKltiaJiZ1fpJzY6fCrLSYotkdZEb1oXpTskMXqdKM3GoX33l4We6XspY0x28wTC0eF5T1hQXZmEe0f0mOizK0TZF6quq8UbZR0Xu1DyfrWUC%2Bs5AkwomW2V8%2F%2F%2BA%2BCdWLfDc9dAguTDlFqffOA8YvyZMPc1lK1drnDB%2FSDwEYkk8mxv3iMhfS43CBsLCBE%2BoXOjN2gljn6iq7f%2Bnivyj6am9F9ozEcUS1d3%2B8NrtnDZYh78xRfea%2F%2FsMyHd3a5%2F0ie5w%2FwnRfb2AwrQ7iZUVA8e%2FyHYTJi%2Fag%2FE6m%2FJgVHYtUBmpGwKTcZgH9QgyhFUi%2FhvUqT2yfXEgt6qC9kERxglhW6CNVQD3OlC5f4fBPbJniKVBq519VBFFxPbMul2pIqV1MzI9sTTDqloLFBjqkAaigQ65wYQXJB6boaGFmVglOdtJ6kTD6Mb6fkiyqlDUkacD6MKagV%2BvBTQdCW1Cp2RaB0Ln7Mw5lsW6gPqRhj6muR9bZlX0m0aFmgrA44sEJaPX5kkcdVvFApybKxCms4Uo5e3JGmXX8MW1RdOCTOCUZED7rWYuJXQ3fstW2fF%2FzAkKsfoRxq4AMQMjDjDlg7C5tC%2FFA2lHLrmdfaxibi%2B4Rw8DO&X-Amz-Signature=170d3516db8aa3620987e601d524f15f92e4f01712333b9c4cd6dc95d6c2ecee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KCRHTC2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDeUiPvIE2eiZYe4oY8DaUBJXUVfYWc%2Bda%2F6nQFlri8bwIhAIW4fyOsqR%2FPVj2CoUqDj3dlZUAD%2BQG9GrS0zOuENLY2Kv8DCHcQABoMNjM3NDIzMTgzODA1IgxURuR%2FDnKf4WjU7IYq3AMu9%2F60tmVEAWWWT%2FY1L%2Bqv%2Bt1FwBgbJdddqVeiWJMhmr6dL89OLQLvRnHQTZY58jRmyeV%2Bi87zQWqaGwrEsaS32Xhtc5lzn3WKUIpAHIwtS3k7nM7yOWrFLv2X8Qr5gsPVoNw7U569LAgoz7rFSzlujazwdYsDahjxXqdzUapuTsOKl6DwlyHJ6913bu6eeWTEBKtvHQjFVukiRELCD%2F73pYLr%2BTO9%2FISOK44fKAGArDnhUBvKltiaJiZ1fpJzY6fCrLSYotkdZEb1oXpTskMXqdKM3GoX33l4We6XspY0x28wTC0eF5T1hQXZmEe0f0mOizK0TZF6quq8UbZR0Xu1DyfrWUC%2Bs5AkwomW2V8%2F%2F%2BA%2BCdWLfDc9dAguTDlFqffOA8YvyZMPc1lK1drnDB%2FSDwEYkk8mxv3iMhfS43CBsLCBE%2BoXOjN2gljn6iq7f%2Bnivyj6am9F9ozEcUS1d3%2B8NrtnDZYh78xRfea%2F%2FsMyHd3a5%2F0ie5w%2FwnRfb2AwrQ7iZUVA8e%2FyHYTJi%2Fag%2FE6m%2FJgVHYtUBmpGwKTcZgH9QgyhFUi%2FhvUqT2yfXEgt6qC9kERxglhW6CNVQD3OlC5f4fBPbJniKVBq519VBFFxPbMul2pIqV1MzI9sTTDqloLFBjqkAaigQ65wYQXJB6boaGFmVglOdtJ6kTD6Mb6fkiyqlDUkacD6MKagV%2BvBTQdCW1Cp2RaB0Ln7Mw5lsW6gPqRhj6muR9bZlX0m0aFmgrA44sEJaPX5kkcdVvFApybKxCms4Uo5e3JGmXX8MW1RdOCTOCUZED7rWYuJXQ3fstW2fF%2FzAkKsfoRxq4AMQMjDjDlg7C5tC%2FFA2lHLrmdfaxibi%2B4Rw8DO&X-Amz-Signature=fccf2c8b9d3724bf01d07b0f5e6337b8d3fb218a4c38c7d55b606b1dd24fc00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KCRHTC2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDeUiPvIE2eiZYe4oY8DaUBJXUVfYWc%2Bda%2F6nQFlri8bwIhAIW4fyOsqR%2FPVj2CoUqDj3dlZUAD%2BQG9GrS0zOuENLY2Kv8DCHcQABoMNjM3NDIzMTgzODA1IgxURuR%2FDnKf4WjU7IYq3AMu9%2F60tmVEAWWWT%2FY1L%2Bqv%2Bt1FwBgbJdddqVeiWJMhmr6dL89OLQLvRnHQTZY58jRmyeV%2Bi87zQWqaGwrEsaS32Xhtc5lzn3WKUIpAHIwtS3k7nM7yOWrFLv2X8Qr5gsPVoNw7U569LAgoz7rFSzlujazwdYsDahjxXqdzUapuTsOKl6DwlyHJ6913bu6eeWTEBKtvHQjFVukiRELCD%2F73pYLr%2BTO9%2FISOK44fKAGArDnhUBvKltiaJiZ1fpJzY6fCrLSYotkdZEb1oXpTskMXqdKM3GoX33l4We6XspY0x28wTC0eF5T1hQXZmEe0f0mOizK0TZF6quq8UbZR0Xu1DyfrWUC%2Bs5AkwomW2V8%2F%2F%2BA%2BCdWLfDc9dAguTDlFqffOA8YvyZMPc1lK1drnDB%2FSDwEYkk8mxv3iMhfS43CBsLCBE%2BoXOjN2gljn6iq7f%2Bnivyj6am9F9ozEcUS1d3%2B8NrtnDZYh78xRfea%2F%2FsMyHd3a5%2F0ie5w%2FwnRfb2AwrQ7iZUVA8e%2FyHYTJi%2Fag%2FE6m%2FJgVHYtUBmpGwKTcZgH9QgyhFUi%2FhvUqT2yfXEgt6qC9kERxglhW6CNVQD3OlC5f4fBPbJniKVBq519VBFFxPbMul2pIqV1MzI9sTTDqloLFBjqkAaigQ65wYQXJB6boaGFmVglOdtJ6kTD6Mb6fkiyqlDUkacD6MKagV%2BvBTQdCW1Cp2RaB0Ln7Mw5lsW6gPqRhj6muR9bZlX0m0aFmgrA44sEJaPX5kkcdVvFApybKxCms4Uo5e3JGmXX8MW1RdOCTOCUZED7rWYuJXQ3fstW2fF%2FzAkKsfoRxq4AMQMjDjDlg7C5tC%2FFA2lHLrmdfaxibi%2B4Rw8DO&X-Amz-Signature=a987962e83064ff47b6dcd703dfd5fb3c29018b58fcf6ccf6a97799f30f6143e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KCRHTC2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDeUiPvIE2eiZYe4oY8DaUBJXUVfYWc%2Bda%2F6nQFlri8bwIhAIW4fyOsqR%2FPVj2CoUqDj3dlZUAD%2BQG9GrS0zOuENLY2Kv8DCHcQABoMNjM3NDIzMTgzODA1IgxURuR%2FDnKf4WjU7IYq3AMu9%2F60tmVEAWWWT%2FY1L%2Bqv%2Bt1FwBgbJdddqVeiWJMhmr6dL89OLQLvRnHQTZY58jRmyeV%2Bi87zQWqaGwrEsaS32Xhtc5lzn3WKUIpAHIwtS3k7nM7yOWrFLv2X8Qr5gsPVoNw7U569LAgoz7rFSzlujazwdYsDahjxXqdzUapuTsOKl6DwlyHJ6913bu6eeWTEBKtvHQjFVukiRELCD%2F73pYLr%2BTO9%2FISOK44fKAGArDnhUBvKltiaJiZ1fpJzY6fCrLSYotkdZEb1oXpTskMXqdKM3GoX33l4We6XspY0x28wTC0eF5T1hQXZmEe0f0mOizK0TZF6quq8UbZR0Xu1DyfrWUC%2Bs5AkwomW2V8%2F%2F%2BA%2BCdWLfDc9dAguTDlFqffOA8YvyZMPc1lK1drnDB%2FSDwEYkk8mxv3iMhfS43CBsLCBE%2BoXOjN2gljn6iq7f%2Bnivyj6am9F9ozEcUS1d3%2B8NrtnDZYh78xRfea%2F%2FsMyHd3a5%2F0ie5w%2FwnRfb2AwrQ7iZUVA8e%2FyHYTJi%2Fag%2FE6m%2FJgVHYtUBmpGwKTcZgH9QgyhFUi%2FhvUqT2yfXEgt6qC9kERxglhW6CNVQD3OlC5f4fBPbJniKVBq519VBFFxPbMul2pIqV1MzI9sTTDqloLFBjqkAaigQ65wYQXJB6boaGFmVglOdtJ6kTD6Mb6fkiyqlDUkacD6MKagV%2BvBTQdCW1Cp2RaB0Ln7Mw5lsW6gPqRhj6muR9bZlX0m0aFmgrA44sEJaPX5kkcdVvFApybKxCms4Uo5e3JGmXX8MW1RdOCTOCUZED7rWYuJXQ3fstW2fF%2FzAkKsfoRxq4AMQMjDjDlg7C5tC%2FFA2lHLrmdfaxibi%2B4Rw8DO&X-Amz-Signature=812829720ddcb22b7b139aaca931a9eea791d6fba4f1dc8833bc2aba2f29df46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KCRHTC2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDeUiPvIE2eiZYe4oY8DaUBJXUVfYWc%2Bda%2F6nQFlri8bwIhAIW4fyOsqR%2FPVj2CoUqDj3dlZUAD%2BQG9GrS0zOuENLY2Kv8DCHcQABoMNjM3NDIzMTgzODA1IgxURuR%2FDnKf4WjU7IYq3AMu9%2F60tmVEAWWWT%2FY1L%2Bqv%2Bt1FwBgbJdddqVeiWJMhmr6dL89OLQLvRnHQTZY58jRmyeV%2Bi87zQWqaGwrEsaS32Xhtc5lzn3WKUIpAHIwtS3k7nM7yOWrFLv2X8Qr5gsPVoNw7U569LAgoz7rFSzlujazwdYsDahjxXqdzUapuTsOKl6DwlyHJ6913bu6eeWTEBKtvHQjFVukiRELCD%2F73pYLr%2BTO9%2FISOK44fKAGArDnhUBvKltiaJiZ1fpJzY6fCrLSYotkdZEb1oXpTskMXqdKM3GoX33l4We6XspY0x28wTC0eF5T1hQXZmEe0f0mOizK0TZF6quq8UbZR0Xu1DyfrWUC%2Bs5AkwomW2V8%2F%2F%2BA%2BCdWLfDc9dAguTDlFqffOA8YvyZMPc1lK1drnDB%2FSDwEYkk8mxv3iMhfS43CBsLCBE%2BoXOjN2gljn6iq7f%2Bnivyj6am9F9ozEcUS1d3%2B8NrtnDZYh78xRfea%2F%2FsMyHd3a5%2F0ie5w%2FwnRfb2AwrQ7iZUVA8e%2FyHYTJi%2Fag%2FE6m%2FJgVHYtUBmpGwKTcZgH9QgyhFUi%2FhvUqT2yfXEgt6qC9kERxglhW6CNVQD3OlC5f4fBPbJniKVBq519VBFFxPbMul2pIqV1MzI9sTTDqloLFBjqkAaigQ65wYQXJB6boaGFmVglOdtJ6kTD6Mb6fkiyqlDUkacD6MKagV%2BvBTQdCW1Cp2RaB0Ln7Mw5lsW6gPqRhj6muR9bZlX0m0aFmgrA44sEJaPX5kkcdVvFApybKxCms4Uo5e3JGmXX8MW1RdOCTOCUZED7rWYuJXQ3fstW2fF%2FzAkKsfoRxq4AMQMjDjDlg7C5tC%2FFA2lHLrmdfaxibi%2B4Rw8DO&X-Amz-Signature=16a76133a77c20703c49cecbb8ab48d16999ca1f63723aff817c11252a9d14cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
