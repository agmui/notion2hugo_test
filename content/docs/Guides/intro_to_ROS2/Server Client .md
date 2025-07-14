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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWOSPRNA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD7RPV3%2F%2FAXUqOvi7r%2FQiR%2FxT4mS9u6Gs82GM4F2IfSIgIhANkK2XkEDQ8GF9suSXssXWfS4sxKbr3xoLdgf8vLOc4QKv8DCDQQABoMNjM3NDIzMTgzODA1IgxevkOX41K5E4%2FuDNoq3AOsJI5UdyCK%2BoG0Igg4QMRMAoaxUkpUOWLqOOLb9s0cGT72ymLw3cfOmJZQ3rrNGuO%2FdUNrJdPdVnj9%2FnLYCGnm3uJgS43Bl1hbGrLVGMEZt9pwev1K9JEn8Qz%2FGa%2F7k%2BUWo6Dl3ihTXoGBnEWNe1Ik2ADFbTdnpEPaKJXBpiamLfSKDPWgTOSeS0zN9TFxoJ5iK1zmQ95WrX8TpYj85FxRxExMFFkPqHEhh8QdZz4HAEZ2bKgCRQTHVyQ6xRbEr1t4qbXwVZkUaHPhYfdBDnlLWDnHSeuehpYz4kGZA2Qq%2BTaSrwV8QXT3%2BeRny0RsqC5BTBaRvjcTVSABwHzJLvbsY8sJZQ0sedAjzAQfZyOZGg66tKnef%2FBVwoPuykDcjbCfhmK%2FA9ZiDKALwIeMlNY2%2FVSINS6NwT7uCWw8KoXzzQtgasfam1KUQo7KedliNsQ04USkFPR87S1pbWdcI9jGhATSTmdEEOZrV%2BOaenktGM1fz7KxPcSyvF1T00BWn%2BznVMt5goSUrYd1h2bNDyHqAToxLUmTq3PHj9Pg%2FkSWCfbWj%2B1%2B84iVogUCQqfLX4Hd3Q5tKdmww%2FAU2GNRs1zNiR%2B%2Br2jbabZdOV8RiQW0aRilQy2h5%2B5xBSZzpDCnpNXDBjqkAT77zds5h5TphhCbGn3in5rksgjJDsNkyxMB9AyPfiphs9E4hnEtgATjxnWFcfeWIFUAj7pYb0mFtEI2bay2mhgjTdX06StWScOvZCq65DyUsCpGlW%2BeEA5zByCh9ZiBpV9X4rHiUHCsRXaNhr4NQCV8zPWiJx03GCY7GtOSBgG9Bhh0GE4NNIda0%2FWx%2FD%2BeiDn2bq4v7BO%2BeDkwU09rZO3v5xv9&X-Amz-Signature=29b48bdb6cb13171e48bceb323bd8c1df1aec4a693de8ec9072803be6f5f8a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWOSPRNA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD7RPV3%2F%2FAXUqOvi7r%2FQiR%2FxT4mS9u6Gs82GM4F2IfSIgIhANkK2XkEDQ8GF9suSXssXWfS4sxKbr3xoLdgf8vLOc4QKv8DCDQQABoMNjM3NDIzMTgzODA1IgxevkOX41K5E4%2FuDNoq3AOsJI5UdyCK%2BoG0Igg4QMRMAoaxUkpUOWLqOOLb9s0cGT72ymLw3cfOmJZQ3rrNGuO%2FdUNrJdPdVnj9%2FnLYCGnm3uJgS43Bl1hbGrLVGMEZt9pwev1K9JEn8Qz%2FGa%2F7k%2BUWo6Dl3ihTXoGBnEWNe1Ik2ADFbTdnpEPaKJXBpiamLfSKDPWgTOSeS0zN9TFxoJ5iK1zmQ95WrX8TpYj85FxRxExMFFkPqHEhh8QdZz4HAEZ2bKgCRQTHVyQ6xRbEr1t4qbXwVZkUaHPhYfdBDnlLWDnHSeuehpYz4kGZA2Qq%2BTaSrwV8QXT3%2BeRny0RsqC5BTBaRvjcTVSABwHzJLvbsY8sJZQ0sedAjzAQfZyOZGg66tKnef%2FBVwoPuykDcjbCfhmK%2FA9ZiDKALwIeMlNY2%2FVSINS6NwT7uCWw8KoXzzQtgasfam1KUQo7KedliNsQ04USkFPR87S1pbWdcI9jGhATSTmdEEOZrV%2BOaenktGM1fz7KxPcSyvF1T00BWn%2BznVMt5goSUrYd1h2bNDyHqAToxLUmTq3PHj9Pg%2FkSWCfbWj%2B1%2B84iVogUCQqfLX4Hd3Q5tKdmww%2FAU2GNRs1zNiR%2B%2Br2jbabZdOV8RiQW0aRilQy2h5%2B5xBSZzpDCnpNXDBjqkAT77zds5h5TphhCbGn3in5rksgjJDsNkyxMB9AyPfiphs9E4hnEtgATjxnWFcfeWIFUAj7pYb0mFtEI2bay2mhgjTdX06StWScOvZCq65DyUsCpGlW%2BeEA5zByCh9ZiBpV9X4rHiUHCsRXaNhr4NQCV8zPWiJx03GCY7GtOSBgG9Bhh0GE4NNIda0%2FWx%2FD%2BeiDn2bq4v7BO%2BeDkwU09rZO3v5xv9&X-Amz-Signature=1adf9438ab8137151af69fb0324e3137cf17d161e224e0f43eeffb8a63a42754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWOSPRNA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD7RPV3%2F%2FAXUqOvi7r%2FQiR%2FxT4mS9u6Gs82GM4F2IfSIgIhANkK2XkEDQ8GF9suSXssXWfS4sxKbr3xoLdgf8vLOc4QKv8DCDQQABoMNjM3NDIzMTgzODA1IgxevkOX41K5E4%2FuDNoq3AOsJI5UdyCK%2BoG0Igg4QMRMAoaxUkpUOWLqOOLb9s0cGT72ymLw3cfOmJZQ3rrNGuO%2FdUNrJdPdVnj9%2FnLYCGnm3uJgS43Bl1hbGrLVGMEZt9pwev1K9JEn8Qz%2FGa%2F7k%2BUWo6Dl3ihTXoGBnEWNe1Ik2ADFbTdnpEPaKJXBpiamLfSKDPWgTOSeS0zN9TFxoJ5iK1zmQ95WrX8TpYj85FxRxExMFFkPqHEhh8QdZz4HAEZ2bKgCRQTHVyQ6xRbEr1t4qbXwVZkUaHPhYfdBDnlLWDnHSeuehpYz4kGZA2Qq%2BTaSrwV8QXT3%2BeRny0RsqC5BTBaRvjcTVSABwHzJLvbsY8sJZQ0sedAjzAQfZyOZGg66tKnef%2FBVwoPuykDcjbCfhmK%2FA9ZiDKALwIeMlNY2%2FVSINS6NwT7uCWw8KoXzzQtgasfam1KUQo7KedliNsQ04USkFPR87S1pbWdcI9jGhATSTmdEEOZrV%2BOaenktGM1fz7KxPcSyvF1T00BWn%2BznVMt5goSUrYd1h2bNDyHqAToxLUmTq3PHj9Pg%2FkSWCfbWj%2B1%2B84iVogUCQqfLX4Hd3Q5tKdmww%2FAU2GNRs1zNiR%2B%2Br2jbabZdOV8RiQW0aRilQy2h5%2B5xBSZzpDCnpNXDBjqkAT77zds5h5TphhCbGn3in5rksgjJDsNkyxMB9AyPfiphs9E4hnEtgATjxnWFcfeWIFUAj7pYb0mFtEI2bay2mhgjTdX06StWScOvZCq65DyUsCpGlW%2BeEA5zByCh9ZiBpV9X4rHiUHCsRXaNhr4NQCV8zPWiJx03GCY7GtOSBgG9Bhh0GE4NNIda0%2FWx%2FD%2BeiDn2bq4v7BO%2BeDkwU09rZO3v5xv9&X-Amz-Signature=b418393fda39d30821b8461fae9a73ff34e324c0d97ba21ef6ad056e2e1710f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWOSPRNA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD7RPV3%2F%2FAXUqOvi7r%2FQiR%2FxT4mS9u6Gs82GM4F2IfSIgIhANkK2XkEDQ8GF9suSXssXWfS4sxKbr3xoLdgf8vLOc4QKv8DCDQQABoMNjM3NDIzMTgzODA1IgxevkOX41K5E4%2FuDNoq3AOsJI5UdyCK%2BoG0Igg4QMRMAoaxUkpUOWLqOOLb9s0cGT72ymLw3cfOmJZQ3rrNGuO%2FdUNrJdPdVnj9%2FnLYCGnm3uJgS43Bl1hbGrLVGMEZt9pwev1K9JEn8Qz%2FGa%2F7k%2BUWo6Dl3ihTXoGBnEWNe1Ik2ADFbTdnpEPaKJXBpiamLfSKDPWgTOSeS0zN9TFxoJ5iK1zmQ95WrX8TpYj85FxRxExMFFkPqHEhh8QdZz4HAEZ2bKgCRQTHVyQ6xRbEr1t4qbXwVZkUaHPhYfdBDnlLWDnHSeuehpYz4kGZA2Qq%2BTaSrwV8QXT3%2BeRny0RsqC5BTBaRvjcTVSABwHzJLvbsY8sJZQ0sedAjzAQfZyOZGg66tKnef%2FBVwoPuykDcjbCfhmK%2FA9ZiDKALwIeMlNY2%2FVSINS6NwT7uCWw8KoXzzQtgasfam1KUQo7KedliNsQ04USkFPR87S1pbWdcI9jGhATSTmdEEOZrV%2BOaenktGM1fz7KxPcSyvF1T00BWn%2BznVMt5goSUrYd1h2bNDyHqAToxLUmTq3PHj9Pg%2FkSWCfbWj%2B1%2B84iVogUCQqfLX4Hd3Q5tKdmww%2FAU2GNRs1zNiR%2B%2Br2jbabZdOV8RiQW0aRilQy2h5%2B5xBSZzpDCnpNXDBjqkAT77zds5h5TphhCbGn3in5rksgjJDsNkyxMB9AyPfiphs9E4hnEtgATjxnWFcfeWIFUAj7pYb0mFtEI2bay2mhgjTdX06StWScOvZCq65DyUsCpGlW%2BeEA5zByCh9ZiBpV9X4rHiUHCsRXaNhr4NQCV8zPWiJx03GCY7GtOSBgG9Bhh0GE4NNIda0%2FWx%2FD%2BeiDn2bq4v7BO%2BeDkwU09rZO3v5xv9&X-Amz-Signature=0d9717aa821b2ef98012b6a7c7684aec006c3d4e67d9d829629008e938dde449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWOSPRNA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD7RPV3%2F%2FAXUqOvi7r%2FQiR%2FxT4mS9u6Gs82GM4F2IfSIgIhANkK2XkEDQ8GF9suSXssXWfS4sxKbr3xoLdgf8vLOc4QKv8DCDQQABoMNjM3NDIzMTgzODA1IgxevkOX41K5E4%2FuDNoq3AOsJI5UdyCK%2BoG0Igg4QMRMAoaxUkpUOWLqOOLb9s0cGT72ymLw3cfOmJZQ3rrNGuO%2FdUNrJdPdVnj9%2FnLYCGnm3uJgS43Bl1hbGrLVGMEZt9pwev1K9JEn8Qz%2FGa%2F7k%2BUWo6Dl3ihTXoGBnEWNe1Ik2ADFbTdnpEPaKJXBpiamLfSKDPWgTOSeS0zN9TFxoJ5iK1zmQ95WrX8TpYj85FxRxExMFFkPqHEhh8QdZz4HAEZ2bKgCRQTHVyQ6xRbEr1t4qbXwVZkUaHPhYfdBDnlLWDnHSeuehpYz4kGZA2Qq%2BTaSrwV8QXT3%2BeRny0RsqC5BTBaRvjcTVSABwHzJLvbsY8sJZQ0sedAjzAQfZyOZGg66tKnef%2FBVwoPuykDcjbCfhmK%2FA9ZiDKALwIeMlNY2%2FVSINS6NwT7uCWw8KoXzzQtgasfam1KUQo7KedliNsQ04USkFPR87S1pbWdcI9jGhATSTmdEEOZrV%2BOaenktGM1fz7KxPcSyvF1T00BWn%2BznVMt5goSUrYd1h2bNDyHqAToxLUmTq3PHj9Pg%2FkSWCfbWj%2B1%2B84iVogUCQqfLX4Hd3Q5tKdmww%2FAU2GNRs1zNiR%2B%2Br2jbabZdOV8RiQW0aRilQy2h5%2B5xBSZzpDCnpNXDBjqkAT77zds5h5TphhCbGn3in5rksgjJDsNkyxMB9AyPfiphs9E4hnEtgATjxnWFcfeWIFUAj7pYb0mFtEI2bay2mhgjTdX06StWScOvZCq65DyUsCpGlW%2BeEA5zByCh9ZiBpV9X4rHiUHCsRXaNhr4NQCV8zPWiJx03GCY7GtOSBgG9Bhh0GE4NNIda0%2FWx%2FD%2BeiDn2bq4v7BO%2BeDkwU09rZO3v5xv9&X-Amz-Signature=391cf60aeeb79bcd254814917c7ee3549def3af5c475e5fe97f53d3a4f6612ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
