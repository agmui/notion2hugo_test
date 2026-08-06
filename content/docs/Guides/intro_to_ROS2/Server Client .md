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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7L4ZHKC%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDwSXkp8o%2FSW4aAwsQEuRbswjflFF9MwhaifPhKdERKnQIgMy14GwKKKptn%2FupLQUkYhF41WMHrjP7DrpUldrpG65oq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDJecVgb2PPoNOfwUNSrcA%2BbbfOZZzSRoiXJ%2FQEPdm6OAQaCxGqRvwifpay1CEMYZKKrj8oCueLD7mggXNSvUUrMYMp09%2BpRQnwCemt9OGf6Plwt%2F3bxlPD4tiTKbd3JqkJJ44nZsLXzsC4hBXx5X1QcsGXVegaWm5145WUEfYteKZGPB2Jm0Ep8asElTko%2FUlb3G241uYVDHQmZX4PKcNol3ntKU2V0jwHFVm6DqnrCqWuW3UYbxNqzr7D9cVBnGgo2tE3n49N%2FbblD8aLMmRJYASxnjVjJi2RIpQ294huKq5ckk5L%2BGwAZAhexuw%2BopbYCvFfXejhw6BfxhHVReCRbUf8jPI31%2BzeJShwLZNPvzNDksRhGJO88iXDvO4M6nBQqE44f6EnFWmWFe9saGkEjYbEFlMnfpnLd6Cdued6MNM788PUk8MJh8VOiyJr%2FX2AOVKXm4WBjGw6bo26Id9xYZYUVZChfM6iDhN%2Bc0CKIogNhNBEqGQCrCXdOxqu6yCkXb7Mo3cHHVb7H48X1O6PiASKx%2BGcF%2B9kY1GKUQDwvZbfsWN5Ec9Lapl2n2ZaArNeOyPYoPVX2KOeJ7p%2FRQBzir6unB%2BTn%2B97BiJXJQQaLTGmy3tuk2Q6LMCMLTj811hnHO%2F2Gp4l87rdIkMMPUz9MGOqUBJxNSrzLZ3qIjHa74NMEnuHzG2h%2FcqpOkksIywTEoeMPmb3Ye8aUFlV7UIZAcKyetHDjGaYb5x4OracJtj4O6MVG31M3upH8NiNwzK9kEEsUhjOXqHuURK10KMbYPZqF%2FxCQq%2FKos7v8R%2Br%2FmtxEWATyPB%2BpyACrtQCGZHmhxG7rK8%2FDu4Bcy%2BF0m8DUT%2BHLxrG7AfQkIcfU5X1RPQvl7IjuM6GK4&X-Amz-Signature=b186e8857f61663e32354bcd3d007a75fc9be9d3a66e0e6c875ffbac05f75704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7L4ZHKC%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDwSXkp8o%2FSW4aAwsQEuRbswjflFF9MwhaifPhKdERKnQIgMy14GwKKKptn%2FupLQUkYhF41WMHrjP7DrpUldrpG65oq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDJecVgb2PPoNOfwUNSrcA%2BbbfOZZzSRoiXJ%2FQEPdm6OAQaCxGqRvwifpay1CEMYZKKrj8oCueLD7mggXNSvUUrMYMp09%2BpRQnwCemt9OGf6Plwt%2F3bxlPD4tiTKbd3JqkJJ44nZsLXzsC4hBXx5X1QcsGXVegaWm5145WUEfYteKZGPB2Jm0Ep8asElTko%2FUlb3G241uYVDHQmZX4PKcNol3ntKU2V0jwHFVm6DqnrCqWuW3UYbxNqzr7D9cVBnGgo2tE3n49N%2FbblD8aLMmRJYASxnjVjJi2RIpQ294huKq5ckk5L%2BGwAZAhexuw%2BopbYCvFfXejhw6BfxhHVReCRbUf8jPI31%2BzeJShwLZNPvzNDksRhGJO88iXDvO4M6nBQqE44f6EnFWmWFe9saGkEjYbEFlMnfpnLd6Cdued6MNM788PUk8MJh8VOiyJr%2FX2AOVKXm4WBjGw6bo26Id9xYZYUVZChfM6iDhN%2Bc0CKIogNhNBEqGQCrCXdOxqu6yCkXb7Mo3cHHVb7H48X1O6PiASKx%2BGcF%2B9kY1GKUQDwvZbfsWN5Ec9Lapl2n2ZaArNeOyPYoPVX2KOeJ7p%2FRQBzir6unB%2BTn%2B97BiJXJQQaLTGmy3tuk2Q6LMCMLTj811hnHO%2F2Gp4l87rdIkMMPUz9MGOqUBJxNSrzLZ3qIjHa74NMEnuHzG2h%2FcqpOkksIywTEoeMPmb3Ye8aUFlV7UIZAcKyetHDjGaYb5x4OracJtj4O6MVG31M3upH8NiNwzK9kEEsUhjOXqHuURK10KMbYPZqF%2FxCQq%2FKos7v8R%2Br%2FmtxEWATyPB%2BpyACrtQCGZHmhxG7rK8%2FDu4Bcy%2BF0m8DUT%2BHLxrG7AfQkIcfU5X1RPQvl7IjuM6GK4&X-Amz-Signature=d02b3c42fc09473fc1758296b70436212725316e6cc122c5f7c3b91c7693c711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7L4ZHKC%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDwSXkp8o%2FSW4aAwsQEuRbswjflFF9MwhaifPhKdERKnQIgMy14GwKKKptn%2FupLQUkYhF41WMHrjP7DrpUldrpG65oq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDJecVgb2PPoNOfwUNSrcA%2BbbfOZZzSRoiXJ%2FQEPdm6OAQaCxGqRvwifpay1CEMYZKKrj8oCueLD7mggXNSvUUrMYMp09%2BpRQnwCemt9OGf6Plwt%2F3bxlPD4tiTKbd3JqkJJ44nZsLXzsC4hBXx5X1QcsGXVegaWm5145WUEfYteKZGPB2Jm0Ep8asElTko%2FUlb3G241uYVDHQmZX4PKcNol3ntKU2V0jwHFVm6DqnrCqWuW3UYbxNqzr7D9cVBnGgo2tE3n49N%2FbblD8aLMmRJYASxnjVjJi2RIpQ294huKq5ckk5L%2BGwAZAhexuw%2BopbYCvFfXejhw6BfxhHVReCRbUf8jPI31%2BzeJShwLZNPvzNDksRhGJO88iXDvO4M6nBQqE44f6EnFWmWFe9saGkEjYbEFlMnfpnLd6Cdued6MNM788PUk8MJh8VOiyJr%2FX2AOVKXm4WBjGw6bo26Id9xYZYUVZChfM6iDhN%2Bc0CKIogNhNBEqGQCrCXdOxqu6yCkXb7Mo3cHHVb7H48X1O6PiASKx%2BGcF%2B9kY1GKUQDwvZbfsWN5Ec9Lapl2n2ZaArNeOyPYoPVX2KOeJ7p%2FRQBzir6unB%2BTn%2B97BiJXJQQaLTGmy3tuk2Q6LMCMLTj811hnHO%2F2Gp4l87rdIkMMPUz9MGOqUBJxNSrzLZ3qIjHa74NMEnuHzG2h%2FcqpOkksIywTEoeMPmb3Ye8aUFlV7UIZAcKyetHDjGaYb5x4OracJtj4O6MVG31M3upH8NiNwzK9kEEsUhjOXqHuURK10KMbYPZqF%2FxCQq%2FKos7v8R%2Br%2FmtxEWATyPB%2BpyACrtQCGZHmhxG7rK8%2FDu4Bcy%2BF0m8DUT%2BHLxrG7AfQkIcfU5X1RPQvl7IjuM6GK4&X-Amz-Signature=0fffec334cea931d87b89516a21e260ab003b7346cefd9b745cc9d6415927791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7L4ZHKC%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDwSXkp8o%2FSW4aAwsQEuRbswjflFF9MwhaifPhKdERKnQIgMy14GwKKKptn%2FupLQUkYhF41WMHrjP7DrpUldrpG65oq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDJecVgb2PPoNOfwUNSrcA%2BbbfOZZzSRoiXJ%2FQEPdm6OAQaCxGqRvwifpay1CEMYZKKrj8oCueLD7mggXNSvUUrMYMp09%2BpRQnwCemt9OGf6Plwt%2F3bxlPD4tiTKbd3JqkJJ44nZsLXzsC4hBXx5X1QcsGXVegaWm5145WUEfYteKZGPB2Jm0Ep8asElTko%2FUlb3G241uYVDHQmZX4PKcNol3ntKU2V0jwHFVm6DqnrCqWuW3UYbxNqzr7D9cVBnGgo2tE3n49N%2FbblD8aLMmRJYASxnjVjJi2RIpQ294huKq5ckk5L%2BGwAZAhexuw%2BopbYCvFfXejhw6BfxhHVReCRbUf8jPI31%2BzeJShwLZNPvzNDksRhGJO88iXDvO4M6nBQqE44f6EnFWmWFe9saGkEjYbEFlMnfpnLd6Cdued6MNM788PUk8MJh8VOiyJr%2FX2AOVKXm4WBjGw6bo26Id9xYZYUVZChfM6iDhN%2Bc0CKIogNhNBEqGQCrCXdOxqu6yCkXb7Mo3cHHVb7H48X1O6PiASKx%2BGcF%2B9kY1GKUQDwvZbfsWN5Ec9Lapl2n2ZaArNeOyPYoPVX2KOeJ7p%2FRQBzir6unB%2BTn%2B97BiJXJQQaLTGmy3tuk2Q6LMCMLTj811hnHO%2F2Gp4l87rdIkMMPUz9MGOqUBJxNSrzLZ3qIjHa74NMEnuHzG2h%2FcqpOkksIywTEoeMPmb3Ye8aUFlV7UIZAcKyetHDjGaYb5x4OracJtj4O6MVG31M3upH8NiNwzK9kEEsUhjOXqHuURK10KMbYPZqF%2FxCQq%2FKos7v8R%2Br%2FmtxEWATyPB%2BpyACrtQCGZHmhxG7rK8%2FDu4Bcy%2BF0m8DUT%2BHLxrG7AfQkIcfU5X1RPQvl7IjuM6GK4&X-Amz-Signature=c7976c96131728ef32bb436e150bdc19c2c1e0a7d33e32d18ef16c86448620e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7L4ZHKC%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDwSXkp8o%2FSW4aAwsQEuRbswjflFF9MwhaifPhKdERKnQIgMy14GwKKKptn%2FupLQUkYhF41WMHrjP7DrpUldrpG65oq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDJecVgb2PPoNOfwUNSrcA%2BbbfOZZzSRoiXJ%2FQEPdm6OAQaCxGqRvwifpay1CEMYZKKrj8oCueLD7mggXNSvUUrMYMp09%2BpRQnwCemt9OGf6Plwt%2F3bxlPD4tiTKbd3JqkJJ44nZsLXzsC4hBXx5X1QcsGXVegaWm5145WUEfYteKZGPB2Jm0Ep8asElTko%2FUlb3G241uYVDHQmZX4PKcNol3ntKU2V0jwHFVm6DqnrCqWuW3UYbxNqzr7D9cVBnGgo2tE3n49N%2FbblD8aLMmRJYASxnjVjJi2RIpQ294huKq5ckk5L%2BGwAZAhexuw%2BopbYCvFfXejhw6BfxhHVReCRbUf8jPI31%2BzeJShwLZNPvzNDksRhGJO88iXDvO4M6nBQqE44f6EnFWmWFe9saGkEjYbEFlMnfpnLd6Cdued6MNM788PUk8MJh8VOiyJr%2FX2AOVKXm4WBjGw6bo26Id9xYZYUVZChfM6iDhN%2Bc0CKIogNhNBEqGQCrCXdOxqu6yCkXb7Mo3cHHVb7H48X1O6PiASKx%2BGcF%2B9kY1GKUQDwvZbfsWN5Ec9Lapl2n2ZaArNeOyPYoPVX2KOeJ7p%2FRQBzir6unB%2BTn%2B97BiJXJQQaLTGmy3tuk2Q6LMCMLTj811hnHO%2F2Gp4l87rdIkMMPUz9MGOqUBJxNSrzLZ3qIjHa74NMEnuHzG2h%2FcqpOkksIywTEoeMPmb3Ye8aUFlV7UIZAcKyetHDjGaYb5x4OracJtj4O6MVG31M3upH8NiNwzK9kEEsUhjOXqHuURK10KMbYPZqF%2FxCQq%2FKos7v8R%2Br%2FmtxEWATyPB%2BpyACrtQCGZHmhxG7rK8%2FDu4Bcy%2BF0m8DUT%2BHLxrG7AfQkIcfU5X1RPQvl7IjuM6GK4&X-Amz-Signature=300b9b2b307ddf1aad98e61bf4484b5a154abc9f28821cb8af21a8a52d0bd0be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
