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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QLJP2N%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCNpKcbVwV1bTHf%2FJMBvgpMiZi0mX6Kd4EJ%2FOmWiUOnyQIhALQqvJxGiqt%2FZSq8RuRZso%2BQraranzy%2FT0B1KZTEUQ0SKv8DCDcQABoMNjM3NDIzMTgzODA1IgxstdZ3bBQKHNGS4Ucq3AMd3iyBsPNILEq2mp%2BsbgDhBOf2luNXtToVM%2BHzw7l0NJKxQvUwz4bDL07p%2FTrHbB2ckmtBEPpJ91s%2Fum4hvJdxkkNqb1L4x70E%2FK7zNSg1hch5hrRyMEp38lx936Jaadi2ZhiTHUfE62vKB2mSMrRowAEPYLzPwLiO75Rh1%2B%2Bt7sB0a%2FRvRTQf%2BSS7%2FXefee2oFCMFH0nCeKkpmYqlw1c9pTjgov%2Fn2KfilWL20AQkLhd%2FhDUPRWgwPCXurG6fJQWzfxuJKPrc50zwum%2FULmYDifXlCmG0nugfb6MaglyrGuCGAz%2BF5legJWnIV3BQY6Gd01z0272fzMyX8ObtdWbCiBH26Z2jlvRciAeD0vLNXvIX9evqCbPZz2W6bsbBoSqzTUk%2F11KZPiIj2a2fqjRw2KzNBoAA0DKTlBZwrO6i3UcTKZ46DJ3C6KZyq0JlMCstVViCZ7HDbI8Pav0FrpQmBew99gS3VeOOXRUXXEuXlxnHVCnCnQk%2FVukZvP%2BuooGLPDfQX%2BJWA2PXcIfVmeJPwCZtTk7Dwwdw9XI5lhq4ejulDZYiDpS%2Fcn4Cub6tgmQmPOeBrBtalMzGci7BcWPDrv1p0iF5Bd5fjU%2BWgC36pUkKKSB0MJngwdOkljCAuOzCBjqkAYM2HjuA9vdBzrZAZ8F2vw2zrhkvVRoxhJc6j0H8dx%2FQNm8QcfUAvk3GqWxsiUY3tFHeEkIifQ9K%2FNH%2F34nhr%2F6wAbtWdI%2BEy3i9sQ8O1oUdFqUZs0fRNysaYnIcr0%2Bpt1%2Fz3tH0WNaxmzrLEDHYXTk%2BK0A%2FljYcWqPlnGBzGsxTt92ayATg1sJF4Y2rxpWyKdDPmRVrOzKPebTn8x0xu9UTIeeW&X-Amz-Signature=369b18dab82dee8e662db31f9580abd43bd4f872e2b48d73c9471e3ec5c50d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QLJP2N%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCNpKcbVwV1bTHf%2FJMBvgpMiZi0mX6Kd4EJ%2FOmWiUOnyQIhALQqvJxGiqt%2FZSq8RuRZso%2BQraranzy%2FT0B1KZTEUQ0SKv8DCDcQABoMNjM3NDIzMTgzODA1IgxstdZ3bBQKHNGS4Ucq3AMd3iyBsPNILEq2mp%2BsbgDhBOf2luNXtToVM%2BHzw7l0NJKxQvUwz4bDL07p%2FTrHbB2ckmtBEPpJ91s%2Fum4hvJdxkkNqb1L4x70E%2FK7zNSg1hch5hrRyMEp38lx936Jaadi2ZhiTHUfE62vKB2mSMrRowAEPYLzPwLiO75Rh1%2B%2Bt7sB0a%2FRvRTQf%2BSS7%2FXefee2oFCMFH0nCeKkpmYqlw1c9pTjgov%2Fn2KfilWL20AQkLhd%2FhDUPRWgwPCXurG6fJQWzfxuJKPrc50zwum%2FULmYDifXlCmG0nugfb6MaglyrGuCGAz%2BF5legJWnIV3BQY6Gd01z0272fzMyX8ObtdWbCiBH26Z2jlvRciAeD0vLNXvIX9evqCbPZz2W6bsbBoSqzTUk%2F11KZPiIj2a2fqjRw2KzNBoAA0DKTlBZwrO6i3UcTKZ46DJ3C6KZyq0JlMCstVViCZ7HDbI8Pav0FrpQmBew99gS3VeOOXRUXXEuXlxnHVCnCnQk%2FVukZvP%2BuooGLPDfQX%2BJWA2PXcIfVmeJPwCZtTk7Dwwdw9XI5lhq4ejulDZYiDpS%2Fcn4Cub6tgmQmPOeBrBtalMzGci7BcWPDrv1p0iF5Bd5fjU%2BWgC36pUkKKSB0MJngwdOkljCAuOzCBjqkAYM2HjuA9vdBzrZAZ8F2vw2zrhkvVRoxhJc6j0H8dx%2FQNm8QcfUAvk3GqWxsiUY3tFHeEkIifQ9K%2FNH%2F34nhr%2F6wAbtWdI%2BEy3i9sQ8O1oUdFqUZs0fRNysaYnIcr0%2Bpt1%2Fz3tH0WNaxmzrLEDHYXTk%2BK0A%2FljYcWqPlnGBzGsxTt92ayATg1sJF4Y2rxpWyKdDPmRVrOzKPebTn8x0xu9UTIeeW&X-Amz-Signature=b3f41b1978e59ac89b89a70a90aad97507ec98f29f2c7ca68b9f7f1534188f27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QLJP2N%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCNpKcbVwV1bTHf%2FJMBvgpMiZi0mX6Kd4EJ%2FOmWiUOnyQIhALQqvJxGiqt%2FZSq8RuRZso%2BQraranzy%2FT0B1KZTEUQ0SKv8DCDcQABoMNjM3NDIzMTgzODA1IgxstdZ3bBQKHNGS4Ucq3AMd3iyBsPNILEq2mp%2BsbgDhBOf2luNXtToVM%2BHzw7l0NJKxQvUwz4bDL07p%2FTrHbB2ckmtBEPpJ91s%2Fum4hvJdxkkNqb1L4x70E%2FK7zNSg1hch5hrRyMEp38lx936Jaadi2ZhiTHUfE62vKB2mSMrRowAEPYLzPwLiO75Rh1%2B%2Bt7sB0a%2FRvRTQf%2BSS7%2FXefee2oFCMFH0nCeKkpmYqlw1c9pTjgov%2Fn2KfilWL20AQkLhd%2FhDUPRWgwPCXurG6fJQWzfxuJKPrc50zwum%2FULmYDifXlCmG0nugfb6MaglyrGuCGAz%2BF5legJWnIV3BQY6Gd01z0272fzMyX8ObtdWbCiBH26Z2jlvRciAeD0vLNXvIX9evqCbPZz2W6bsbBoSqzTUk%2F11KZPiIj2a2fqjRw2KzNBoAA0DKTlBZwrO6i3UcTKZ46DJ3C6KZyq0JlMCstVViCZ7HDbI8Pav0FrpQmBew99gS3VeOOXRUXXEuXlxnHVCnCnQk%2FVukZvP%2BuooGLPDfQX%2BJWA2PXcIfVmeJPwCZtTk7Dwwdw9XI5lhq4ejulDZYiDpS%2Fcn4Cub6tgmQmPOeBrBtalMzGci7BcWPDrv1p0iF5Bd5fjU%2BWgC36pUkKKSB0MJngwdOkljCAuOzCBjqkAYM2HjuA9vdBzrZAZ8F2vw2zrhkvVRoxhJc6j0H8dx%2FQNm8QcfUAvk3GqWxsiUY3tFHeEkIifQ9K%2FNH%2F34nhr%2F6wAbtWdI%2BEy3i9sQ8O1oUdFqUZs0fRNysaYnIcr0%2Bpt1%2Fz3tH0WNaxmzrLEDHYXTk%2BK0A%2FljYcWqPlnGBzGsxTt92ayATg1sJF4Y2rxpWyKdDPmRVrOzKPebTn8x0xu9UTIeeW&X-Amz-Signature=fd38d0e8bab1672f0c0f30731e04e5c9bce6ad46598ee196acd18558de201081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QLJP2N%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCNpKcbVwV1bTHf%2FJMBvgpMiZi0mX6Kd4EJ%2FOmWiUOnyQIhALQqvJxGiqt%2FZSq8RuRZso%2BQraranzy%2FT0B1KZTEUQ0SKv8DCDcQABoMNjM3NDIzMTgzODA1IgxstdZ3bBQKHNGS4Ucq3AMd3iyBsPNILEq2mp%2BsbgDhBOf2luNXtToVM%2BHzw7l0NJKxQvUwz4bDL07p%2FTrHbB2ckmtBEPpJ91s%2Fum4hvJdxkkNqb1L4x70E%2FK7zNSg1hch5hrRyMEp38lx936Jaadi2ZhiTHUfE62vKB2mSMrRowAEPYLzPwLiO75Rh1%2B%2Bt7sB0a%2FRvRTQf%2BSS7%2FXefee2oFCMFH0nCeKkpmYqlw1c9pTjgov%2Fn2KfilWL20AQkLhd%2FhDUPRWgwPCXurG6fJQWzfxuJKPrc50zwum%2FULmYDifXlCmG0nugfb6MaglyrGuCGAz%2BF5legJWnIV3BQY6Gd01z0272fzMyX8ObtdWbCiBH26Z2jlvRciAeD0vLNXvIX9evqCbPZz2W6bsbBoSqzTUk%2F11KZPiIj2a2fqjRw2KzNBoAA0DKTlBZwrO6i3UcTKZ46DJ3C6KZyq0JlMCstVViCZ7HDbI8Pav0FrpQmBew99gS3VeOOXRUXXEuXlxnHVCnCnQk%2FVukZvP%2BuooGLPDfQX%2BJWA2PXcIfVmeJPwCZtTk7Dwwdw9XI5lhq4ejulDZYiDpS%2Fcn4Cub6tgmQmPOeBrBtalMzGci7BcWPDrv1p0iF5Bd5fjU%2BWgC36pUkKKSB0MJngwdOkljCAuOzCBjqkAYM2HjuA9vdBzrZAZ8F2vw2zrhkvVRoxhJc6j0H8dx%2FQNm8QcfUAvk3GqWxsiUY3tFHeEkIifQ9K%2FNH%2F34nhr%2F6wAbtWdI%2BEy3i9sQ8O1oUdFqUZs0fRNysaYnIcr0%2Bpt1%2Fz3tH0WNaxmzrLEDHYXTk%2BK0A%2FljYcWqPlnGBzGsxTt92ayATg1sJF4Y2rxpWyKdDPmRVrOzKPebTn8x0xu9UTIeeW&X-Amz-Signature=e649f0eec3849d770ffb84b8ffe1ff039669ef9f21c04eb370d4d1194a2fabdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QLJP2N%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCNpKcbVwV1bTHf%2FJMBvgpMiZi0mX6Kd4EJ%2FOmWiUOnyQIhALQqvJxGiqt%2FZSq8RuRZso%2BQraranzy%2FT0B1KZTEUQ0SKv8DCDcQABoMNjM3NDIzMTgzODA1IgxstdZ3bBQKHNGS4Ucq3AMd3iyBsPNILEq2mp%2BsbgDhBOf2luNXtToVM%2BHzw7l0NJKxQvUwz4bDL07p%2FTrHbB2ckmtBEPpJ91s%2Fum4hvJdxkkNqb1L4x70E%2FK7zNSg1hch5hrRyMEp38lx936Jaadi2ZhiTHUfE62vKB2mSMrRowAEPYLzPwLiO75Rh1%2B%2Bt7sB0a%2FRvRTQf%2BSS7%2FXefee2oFCMFH0nCeKkpmYqlw1c9pTjgov%2Fn2KfilWL20AQkLhd%2FhDUPRWgwPCXurG6fJQWzfxuJKPrc50zwum%2FULmYDifXlCmG0nugfb6MaglyrGuCGAz%2BF5legJWnIV3BQY6Gd01z0272fzMyX8ObtdWbCiBH26Z2jlvRciAeD0vLNXvIX9evqCbPZz2W6bsbBoSqzTUk%2F11KZPiIj2a2fqjRw2KzNBoAA0DKTlBZwrO6i3UcTKZ46DJ3C6KZyq0JlMCstVViCZ7HDbI8Pav0FrpQmBew99gS3VeOOXRUXXEuXlxnHVCnCnQk%2FVukZvP%2BuooGLPDfQX%2BJWA2PXcIfVmeJPwCZtTk7Dwwdw9XI5lhq4ejulDZYiDpS%2Fcn4Cub6tgmQmPOeBrBtalMzGci7BcWPDrv1p0iF5Bd5fjU%2BWgC36pUkKKSB0MJngwdOkljCAuOzCBjqkAYM2HjuA9vdBzrZAZ8F2vw2zrhkvVRoxhJc6j0H8dx%2FQNm8QcfUAvk3GqWxsiUY3tFHeEkIifQ9K%2FNH%2F34nhr%2F6wAbtWdI%2BEy3i9sQ8O1oUdFqUZs0fRNysaYnIcr0%2Bpt1%2Fz3tH0WNaxmzrLEDHYXTk%2BK0A%2FljYcWqPlnGBzGsxTt92ayATg1sJF4Y2rxpWyKdDPmRVrOzKPebTn8x0xu9UTIeeW&X-Amz-Signature=4b8f07ca7318ac260b2defa72e8ae13448ca2bd74a678e015e1203f8e6024a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
