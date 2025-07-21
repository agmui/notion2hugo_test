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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FMVLV7T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChx0CVBjFkpLgx1cqUPwP9jt43rqqgFbF%2F5Gi8Mwl4CAIhAJtY%2B7%2Frqmoe3lldhNG%2FyvC%2BhasUbeXicKb2d1gKKFpyKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzokCyDqxa37aOseTYq3ANMMhTdVo8VZmOVKe4ns6y3jXxWX0maPoBG4V6Xyry%2B7zJ2BM%2BEVBcSATz5oEfNRZNW9iKWuN0qAc9LZJx%2Bmp%2B8%2BZjkqxFytwzMPrBB%2F6h9U32BSTl9Wfm1TZhIzAzLNDdQy%2F0pENn4km8WdtRdoLRgnqKmzQgB4YBtml2acTUG1LUa3qOdl57W2AhXJuRMfI1kSbZJAoRBXPdeS%2Fme7Tc%2Falu0tnM8mCRdighoHUbuu%2FgYJNcMyQuNdemvQBV20w1t6fC5ClTBrgYt%2BcD%2Feuaow46BIlofuqe0FMHUsAzLjoahhjhW0iQa3p%2BPJC53%2FVMKP66Oaa5YY2TZtP9ClINpBC3I9Vkl%2FMnBxyc9fIBZTklaDSFbs%2BOOaC6KPxPELax6YY0r6vvB4hZtp%2FagKXFFLmL1hWaoOlTdBXzsSehhgOwqKBWSRQkb9L657Ey5Njwv3%2F2som6%2FNEFnO8QG20ExNVAFhzVBEPX%2F391vYy6eqxspc5EZDKt7dfv%2BadWcmemDB6UqI41XH18eAet0al0NVuBnist5kNGTkJVdtDWps3Ed2MEcvuVWUU5QMW3DevXvZ4pcb%2FkeYdJyr3LmzkejdeHpqN1iP%2Fy44W2vfqjA3n%2Fk8vnYOOj2YlA%2FMDDWxPnDBjqkAbAz7yOkZ25AAv2Ul9gsl4wFl5U2HOlEE2NuKCvJJXISbsSAM8VDXzBPH2qem9l1cNyiwzfzDcLgN4Q9H%2Bse2trdxCzt9sCCa9qLRzFBKHw0kkuwTYqdTbS%2BvrNWkh8JZaVzBpTFYDEjCgYw8HzkRaLJDQ8JrQjfN53xRHaRwA%2F060%2FOZw8ny2YYJQjZzywZxK%2BGrBzeKp7wD0WrI5I97EfhYpzw&X-Amz-Signature=56d36c3ca1908be59c88fd5b547b55362071b2d1d9a2fd363b99a2a1b66c1868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FMVLV7T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChx0CVBjFkpLgx1cqUPwP9jt43rqqgFbF%2F5Gi8Mwl4CAIhAJtY%2B7%2Frqmoe3lldhNG%2FyvC%2BhasUbeXicKb2d1gKKFpyKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzokCyDqxa37aOseTYq3ANMMhTdVo8VZmOVKe4ns6y3jXxWX0maPoBG4V6Xyry%2B7zJ2BM%2BEVBcSATz5oEfNRZNW9iKWuN0qAc9LZJx%2Bmp%2B8%2BZjkqxFytwzMPrBB%2F6h9U32BSTl9Wfm1TZhIzAzLNDdQy%2F0pENn4km8WdtRdoLRgnqKmzQgB4YBtml2acTUG1LUa3qOdl57W2AhXJuRMfI1kSbZJAoRBXPdeS%2Fme7Tc%2Falu0tnM8mCRdighoHUbuu%2FgYJNcMyQuNdemvQBV20w1t6fC5ClTBrgYt%2BcD%2Feuaow46BIlofuqe0FMHUsAzLjoahhjhW0iQa3p%2BPJC53%2FVMKP66Oaa5YY2TZtP9ClINpBC3I9Vkl%2FMnBxyc9fIBZTklaDSFbs%2BOOaC6KPxPELax6YY0r6vvB4hZtp%2FagKXFFLmL1hWaoOlTdBXzsSehhgOwqKBWSRQkb9L657Ey5Njwv3%2F2som6%2FNEFnO8QG20ExNVAFhzVBEPX%2F391vYy6eqxspc5EZDKt7dfv%2BadWcmemDB6UqI41XH18eAet0al0NVuBnist5kNGTkJVdtDWps3Ed2MEcvuVWUU5QMW3DevXvZ4pcb%2FkeYdJyr3LmzkejdeHpqN1iP%2Fy44W2vfqjA3n%2Fk8vnYOOj2YlA%2FMDDWxPnDBjqkAbAz7yOkZ25AAv2Ul9gsl4wFl5U2HOlEE2NuKCvJJXISbsSAM8VDXzBPH2qem9l1cNyiwzfzDcLgN4Q9H%2Bse2trdxCzt9sCCa9qLRzFBKHw0kkuwTYqdTbS%2BvrNWkh8JZaVzBpTFYDEjCgYw8HzkRaLJDQ8JrQjfN53xRHaRwA%2F060%2FOZw8ny2YYJQjZzywZxK%2BGrBzeKp7wD0WrI5I97EfhYpzw&X-Amz-Signature=e5dcb4a66d6489459b28c9becdab2f562ae15c11ac5c1125e83ad9ad85fdb61b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FMVLV7T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChx0CVBjFkpLgx1cqUPwP9jt43rqqgFbF%2F5Gi8Mwl4CAIhAJtY%2B7%2Frqmoe3lldhNG%2FyvC%2BhasUbeXicKb2d1gKKFpyKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzokCyDqxa37aOseTYq3ANMMhTdVo8VZmOVKe4ns6y3jXxWX0maPoBG4V6Xyry%2B7zJ2BM%2BEVBcSATz5oEfNRZNW9iKWuN0qAc9LZJx%2Bmp%2B8%2BZjkqxFytwzMPrBB%2F6h9U32BSTl9Wfm1TZhIzAzLNDdQy%2F0pENn4km8WdtRdoLRgnqKmzQgB4YBtml2acTUG1LUa3qOdl57W2AhXJuRMfI1kSbZJAoRBXPdeS%2Fme7Tc%2Falu0tnM8mCRdighoHUbuu%2FgYJNcMyQuNdemvQBV20w1t6fC5ClTBrgYt%2BcD%2Feuaow46BIlofuqe0FMHUsAzLjoahhjhW0iQa3p%2BPJC53%2FVMKP66Oaa5YY2TZtP9ClINpBC3I9Vkl%2FMnBxyc9fIBZTklaDSFbs%2BOOaC6KPxPELax6YY0r6vvB4hZtp%2FagKXFFLmL1hWaoOlTdBXzsSehhgOwqKBWSRQkb9L657Ey5Njwv3%2F2som6%2FNEFnO8QG20ExNVAFhzVBEPX%2F391vYy6eqxspc5EZDKt7dfv%2BadWcmemDB6UqI41XH18eAet0al0NVuBnist5kNGTkJVdtDWps3Ed2MEcvuVWUU5QMW3DevXvZ4pcb%2FkeYdJyr3LmzkejdeHpqN1iP%2Fy44W2vfqjA3n%2Fk8vnYOOj2YlA%2FMDDWxPnDBjqkAbAz7yOkZ25AAv2Ul9gsl4wFl5U2HOlEE2NuKCvJJXISbsSAM8VDXzBPH2qem9l1cNyiwzfzDcLgN4Q9H%2Bse2trdxCzt9sCCa9qLRzFBKHw0kkuwTYqdTbS%2BvrNWkh8JZaVzBpTFYDEjCgYw8HzkRaLJDQ8JrQjfN53xRHaRwA%2F060%2FOZw8ny2YYJQjZzywZxK%2BGrBzeKp7wD0WrI5I97EfhYpzw&X-Amz-Signature=d2dac66779d0547c4dd2806d1f660cf0f70399bf968cfd3b62f90e064498b6fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FMVLV7T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChx0CVBjFkpLgx1cqUPwP9jt43rqqgFbF%2F5Gi8Mwl4CAIhAJtY%2B7%2Frqmoe3lldhNG%2FyvC%2BhasUbeXicKb2d1gKKFpyKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzokCyDqxa37aOseTYq3ANMMhTdVo8VZmOVKe4ns6y3jXxWX0maPoBG4V6Xyry%2B7zJ2BM%2BEVBcSATz5oEfNRZNW9iKWuN0qAc9LZJx%2Bmp%2B8%2BZjkqxFytwzMPrBB%2F6h9U32BSTl9Wfm1TZhIzAzLNDdQy%2F0pENn4km8WdtRdoLRgnqKmzQgB4YBtml2acTUG1LUa3qOdl57W2AhXJuRMfI1kSbZJAoRBXPdeS%2Fme7Tc%2Falu0tnM8mCRdighoHUbuu%2FgYJNcMyQuNdemvQBV20w1t6fC5ClTBrgYt%2BcD%2Feuaow46BIlofuqe0FMHUsAzLjoahhjhW0iQa3p%2BPJC53%2FVMKP66Oaa5YY2TZtP9ClINpBC3I9Vkl%2FMnBxyc9fIBZTklaDSFbs%2BOOaC6KPxPELax6YY0r6vvB4hZtp%2FagKXFFLmL1hWaoOlTdBXzsSehhgOwqKBWSRQkb9L657Ey5Njwv3%2F2som6%2FNEFnO8QG20ExNVAFhzVBEPX%2F391vYy6eqxspc5EZDKt7dfv%2BadWcmemDB6UqI41XH18eAet0al0NVuBnist5kNGTkJVdtDWps3Ed2MEcvuVWUU5QMW3DevXvZ4pcb%2FkeYdJyr3LmzkejdeHpqN1iP%2Fy44W2vfqjA3n%2Fk8vnYOOj2YlA%2FMDDWxPnDBjqkAbAz7yOkZ25AAv2Ul9gsl4wFl5U2HOlEE2NuKCvJJXISbsSAM8VDXzBPH2qem9l1cNyiwzfzDcLgN4Q9H%2Bse2trdxCzt9sCCa9qLRzFBKHw0kkuwTYqdTbS%2BvrNWkh8JZaVzBpTFYDEjCgYw8HzkRaLJDQ8JrQjfN53xRHaRwA%2F060%2FOZw8ny2YYJQjZzywZxK%2BGrBzeKp7wD0WrI5I97EfhYpzw&X-Amz-Signature=ccec99578bcc6e9fcadde614f675f3d2944f0ee9e541a80b7fe74e38c8246f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FMVLV7T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChx0CVBjFkpLgx1cqUPwP9jt43rqqgFbF%2F5Gi8Mwl4CAIhAJtY%2B7%2Frqmoe3lldhNG%2FyvC%2BhasUbeXicKb2d1gKKFpyKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzokCyDqxa37aOseTYq3ANMMhTdVo8VZmOVKe4ns6y3jXxWX0maPoBG4V6Xyry%2B7zJ2BM%2BEVBcSATz5oEfNRZNW9iKWuN0qAc9LZJx%2Bmp%2B8%2BZjkqxFytwzMPrBB%2F6h9U32BSTl9Wfm1TZhIzAzLNDdQy%2F0pENn4km8WdtRdoLRgnqKmzQgB4YBtml2acTUG1LUa3qOdl57W2AhXJuRMfI1kSbZJAoRBXPdeS%2Fme7Tc%2Falu0tnM8mCRdighoHUbuu%2FgYJNcMyQuNdemvQBV20w1t6fC5ClTBrgYt%2BcD%2Feuaow46BIlofuqe0FMHUsAzLjoahhjhW0iQa3p%2BPJC53%2FVMKP66Oaa5YY2TZtP9ClINpBC3I9Vkl%2FMnBxyc9fIBZTklaDSFbs%2BOOaC6KPxPELax6YY0r6vvB4hZtp%2FagKXFFLmL1hWaoOlTdBXzsSehhgOwqKBWSRQkb9L657Ey5Njwv3%2F2som6%2FNEFnO8QG20ExNVAFhzVBEPX%2F391vYy6eqxspc5EZDKt7dfv%2BadWcmemDB6UqI41XH18eAet0al0NVuBnist5kNGTkJVdtDWps3Ed2MEcvuVWUU5QMW3DevXvZ4pcb%2FkeYdJyr3LmzkejdeHpqN1iP%2Fy44W2vfqjA3n%2Fk8vnYOOj2YlA%2FMDDWxPnDBjqkAbAz7yOkZ25AAv2Ul9gsl4wFl5U2HOlEE2NuKCvJJXISbsSAM8VDXzBPH2qem9l1cNyiwzfzDcLgN4Q9H%2Bse2trdxCzt9sCCa9qLRzFBKHw0kkuwTYqdTbS%2BvrNWkh8JZaVzBpTFYDEjCgYw8HzkRaLJDQ8JrQjfN53xRHaRwA%2F060%2FOZw8ny2YYJQjZzywZxK%2BGrBzeKp7wD0WrI5I97EfhYpzw&X-Amz-Signature=396123fea143ab64ac9d629be3e33b992955b1ad6ce68626e06f801cfc7c1e92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
