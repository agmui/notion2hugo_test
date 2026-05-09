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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T677FHMF%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCFbVjSlhblqqd9Pzxw%2FXHKJuzS9LxVm73uI0UeExE7KwIgHUyDVKVHwuA5ckl1oZantoM%2BKDePGVrNRHBQBxrD770qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnndTp1OMEZnDYfFSrcA5QxHIEOidBt5lkbCtaOuGZr6wlve3zJrQ04FpaawPYd9yHy4ilMmxDcFUbL%2Fo6BiEnaDTLZRze%2BdSJLkcMPmAUhan5NPVENtUiPe0wU%2BzvKPaTy0V5CKUZCJhy3%2ByDj32OuK6qDhn2dwB7D7IO9ceIPJDhyGIFY9GhVLXrBrd9DoMe6d35YpjTWr4tFjgmX0xm8fXK%2Fu5flGY%2B5s0qgu18kZo5GaY1dvGXlrVWFhQccvKspQ9ylpbQ1q64uwCVSB%2FfIzTAfO9f%2FJrSq2G9Kcj7unrmHBm4g%2F0gD9WK%2BxWyYZ1uHR3mLe53H5urO1kl1HKyNUD8Io%2Fb5wd%2FA%2B0%2BhBrkxakJyHA9IigOFIBLJTLUUe8Rr1aK1j0emjoMhANnQUfT2uuQIuYXaiXqGBn1zkMtL9LAQ0P0A%2FqGINbBo36rQv3SVgoHz6HD%2F61N7h3t%2FNwRT0RUq%2BZPxtFS4gp7HGZOERqvoru9BHWMgcvo%2B%2B6L3SnvWPJSO93Nu%2BRRtMqWDa76MGHCHugPp%2FCK2b1cwz3Em708nlV%2BP1IjiLgezTksCwATn8PYf3uPqMeTsA9GQGqQaMHCqTz5DUEwcjaHc6bQ2ACF7Z1av%2F4BCXB1RejasJrDdGHnctG5ZyXtmMKm5%2Bs8GOqUBoFRC5aIpUDDL4NITVG4nCLR7GgTfS3mRBBl4PRhtEzLB6xS6cK%2B22DVUsBeT0G30yxKRGNIESvsmwc1W5Q52VmolyUN4nYODyAe%2B9LCrExVRtMi4TI0Qnk0%2F9EVZMg8F5Wyvjzcs457iwJF5PgT8W9tPrHi0sKqJZzl8RM1Q%2FJ6mnZtqMe2i6wMazWalpurlu2I7HyUpVMvujSfvzjMwzuGB3N30&X-Amz-Signature=d62e575f9d7978f11653a0b369f5b0efc396e468de8641b90583b7700bd71207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T677FHMF%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCFbVjSlhblqqd9Pzxw%2FXHKJuzS9LxVm73uI0UeExE7KwIgHUyDVKVHwuA5ckl1oZantoM%2BKDePGVrNRHBQBxrD770qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnndTp1OMEZnDYfFSrcA5QxHIEOidBt5lkbCtaOuGZr6wlve3zJrQ04FpaawPYd9yHy4ilMmxDcFUbL%2Fo6BiEnaDTLZRze%2BdSJLkcMPmAUhan5NPVENtUiPe0wU%2BzvKPaTy0V5CKUZCJhy3%2ByDj32OuK6qDhn2dwB7D7IO9ceIPJDhyGIFY9GhVLXrBrd9DoMe6d35YpjTWr4tFjgmX0xm8fXK%2Fu5flGY%2B5s0qgu18kZo5GaY1dvGXlrVWFhQccvKspQ9ylpbQ1q64uwCVSB%2FfIzTAfO9f%2FJrSq2G9Kcj7unrmHBm4g%2F0gD9WK%2BxWyYZ1uHR3mLe53H5urO1kl1HKyNUD8Io%2Fb5wd%2FA%2B0%2BhBrkxakJyHA9IigOFIBLJTLUUe8Rr1aK1j0emjoMhANnQUfT2uuQIuYXaiXqGBn1zkMtL9LAQ0P0A%2FqGINbBo36rQv3SVgoHz6HD%2F61N7h3t%2FNwRT0RUq%2BZPxtFS4gp7HGZOERqvoru9BHWMgcvo%2B%2B6L3SnvWPJSO93Nu%2BRRtMqWDa76MGHCHugPp%2FCK2b1cwz3Em708nlV%2BP1IjiLgezTksCwATn8PYf3uPqMeTsA9GQGqQaMHCqTz5DUEwcjaHc6bQ2ACF7Z1av%2F4BCXB1RejasJrDdGHnctG5ZyXtmMKm5%2Bs8GOqUBoFRC5aIpUDDL4NITVG4nCLR7GgTfS3mRBBl4PRhtEzLB6xS6cK%2B22DVUsBeT0G30yxKRGNIESvsmwc1W5Q52VmolyUN4nYODyAe%2B9LCrExVRtMi4TI0Qnk0%2F9EVZMg8F5Wyvjzcs457iwJF5PgT8W9tPrHi0sKqJZzl8RM1Q%2FJ6mnZtqMe2i6wMazWalpurlu2I7HyUpVMvujSfvzjMwzuGB3N30&X-Amz-Signature=303056d0028d6b2660b083555725d5b208fbc07981dda98eabd63fd405deb16f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T677FHMF%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCFbVjSlhblqqd9Pzxw%2FXHKJuzS9LxVm73uI0UeExE7KwIgHUyDVKVHwuA5ckl1oZantoM%2BKDePGVrNRHBQBxrD770qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnndTp1OMEZnDYfFSrcA5QxHIEOidBt5lkbCtaOuGZr6wlve3zJrQ04FpaawPYd9yHy4ilMmxDcFUbL%2Fo6BiEnaDTLZRze%2BdSJLkcMPmAUhan5NPVENtUiPe0wU%2BzvKPaTy0V5CKUZCJhy3%2ByDj32OuK6qDhn2dwB7D7IO9ceIPJDhyGIFY9GhVLXrBrd9DoMe6d35YpjTWr4tFjgmX0xm8fXK%2Fu5flGY%2B5s0qgu18kZo5GaY1dvGXlrVWFhQccvKspQ9ylpbQ1q64uwCVSB%2FfIzTAfO9f%2FJrSq2G9Kcj7unrmHBm4g%2F0gD9WK%2BxWyYZ1uHR3mLe53H5urO1kl1HKyNUD8Io%2Fb5wd%2FA%2B0%2BhBrkxakJyHA9IigOFIBLJTLUUe8Rr1aK1j0emjoMhANnQUfT2uuQIuYXaiXqGBn1zkMtL9LAQ0P0A%2FqGINbBo36rQv3SVgoHz6HD%2F61N7h3t%2FNwRT0RUq%2BZPxtFS4gp7HGZOERqvoru9BHWMgcvo%2B%2B6L3SnvWPJSO93Nu%2BRRtMqWDa76MGHCHugPp%2FCK2b1cwz3Em708nlV%2BP1IjiLgezTksCwATn8PYf3uPqMeTsA9GQGqQaMHCqTz5DUEwcjaHc6bQ2ACF7Z1av%2F4BCXB1RejasJrDdGHnctG5ZyXtmMKm5%2Bs8GOqUBoFRC5aIpUDDL4NITVG4nCLR7GgTfS3mRBBl4PRhtEzLB6xS6cK%2B22DVUsBeT0G30yxKRGNIESvsmwc1W5Q52VmolyUN4nYODyAe%2B9LCrExVRtMi4TI0Qnk0%2F9EVZMg8F5Wyvjzcs457iwJF5PgT8W9tPrHi0sKqJZzl8RM1Q%2FJ6mnZtqMe2i6wMazWalpurlu2I7HyUpVMvujSfvzjMwzuGB3N30&X-Amz-Signature=fc7e771a3647a279d8ecdf2466a9d2ae98a044b341a5123c07b501e348b74e70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T677FHMF%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCFbVjSlhblqqd9Pzxw%2FXHKJuzS9LxVm73uI0UeExE7KwIgHUyDVKVHwuA5ckl1oZantoM%2BKDePGVrNRHBQBxrD770qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnndTp1OMEZnDYfFSrcA5QxHIEOidBt5lkbCtaOuGZr6wlve3zJrQ04FpaawPYd9yHy4ilMmxDcFUbL%2Fo6BiEnaDTLZRze%2BdSJLkcMPmAUhan5NPVENtUiPe0wU%2BzvKPaTy0V5CKUZCJhy3%2ByDj32OuK6qDhn2dwB7D7IO9ceIPJDhyGIFY9GhVLXrBrd9DoMe6d35YpjTWr4tFjgmX0xm8fXK%2Fu5flGY%2B5s0qgu18kZo5GaY1dvGXlrVWFhQccvKspQ9ylpbQ1q64uwCVSB%2FfIzTAfO9f%2FJrSq2G9Kcj7unrmHBm4g%2F0gD9WK%2BxWyYZ1uHR3mLe53H5urO1kl1HKyNUD8Io%2Fb5wd%2FA%2B0%2BhBrkxakJyHA9IigOFIBLJTLUUe8Rr1aK1j0emjoMhANnQUfT2uuQIuYXaiXqGBn1zkMtL9LAQ0P0A%2FqGINbBo36rQv3SVgoHz6HD%2F61N7h3t%2FNwRT0RUq%2BZPxtFS4gp7HGZOERqvoru9BHWMgcvo%2B%2B6L3SnvWPJSO93Nu%2BRRtMqWDa76MGHCHugPp%2FCK2b1cwz3Em708nlV%2BP1IjiLgezTksCwATn8PYf3uPqMeTsA9GQGqQaMHCqTz5DUEwcjaHc6bQ2ACF7Z1av%2F4BCXB1RejasJrDdGHnctG5ZyXtmMKm5%2Bs8GOqUBoFRC5aIpUDDL4NITVG4nCLR7GgTfS3mRBBl4PRhtEzLB6xS6cK%2B22DVUsBeT0G30yxKRGNIESvsmwc1W5Q52VmolyUN4nYODyAe%2B9LCrExVRtMi4TI0Qnk0%2F9EVZMg8F5Wyvjzcs457iwJF5PgT8W9tPrHi0sKqJZzl8RM1Q%2FJ6mnZtqMe2i6wMazWalpurlu2I7HyUpVMvujSfvzjMwzuGB3N30&X-Amz-Signature=3f434f1bfb2913dd998e5014b2520a013ba1889e4b28d7ff4371ef266252d725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T677FHMF%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCFbVjSlhblqqd9Pzxw%2FXHKJuzS9LxVm73uI0UeExE7KwIgHUyDVKVHwuA5ckl1oZantoM%2BKDePGVrNRHBQBxrD770qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnndTp1OMEZnDYfFSrcA5QxHIEOidBt5lkbCtaOuGZr6wlve3zJrQ04FpaawPYd9yHy4ilMmxDcFUbL%2Fo6BiEnaDTLZRze%2BdSJLkcMPmAUhan5NPVENtUiPe0wU%2BzvKPaTy0V5CKUZCJhy3%2ByDj32OuK6qDhn2dwB7D7IO9ceIPJDhyGIFY9GhVLXrBrd9DoMe6d35YpjTWr4tFjgmX0xm8fXK%2Fu5flGY%2B5s0qgu18kZo5GaY1dvGXlrVWFhQccvKspQ9ylpbQ1q64uwCVSB%2FfIzTAfO9f%2FJrSq2G9Kcj7unrmHBm4g%2F0gD9WK%2BxWyYZ1uHR3mLe53H5urO1kl1HKyNUD8Io%2Fb5wd%2FA%2B0%2BhBrkxakJyHA9IigOFIBLJTLUUe8Rr1aK1j0emjoMhANnQUfT2uuQIuYXaiXqGBn1zkMtL9LAQ0P0A%2FqGINbBo36rQv3SVgoHz6HD%2F61N7h3t%2FNwRT0RUq%2BZPxtFS4gp7HGZOERqvoru9BHWMgcvo%2B%2B6L3SnvWPJSO93Nu%2BRRtMqWDa76MGHCHugPp%2FCK2b1cwz3Em708nlV%2BP1IjiLgezTksCwATn8PYf3uPqMeTsA9GQGqQaMHCqTz5DUEwcjaHc6bQ2ACF7Z1av%2F4BCXB1RejasJrDdGHnctG5ZyXtmMKm5%2Bs8GOqUBoFRC5aIpUDDL4NITVG4nCLR7GgTfS3mRBBl4PRhtEzLB6xS6cK%2B22DVUsBeT0G30yxKRGNIESvsmwc1W5Q52VmolyUN4nYODyAe%2B9LCrExVRtMi4TI0Qnk0%2F9EVZMg8F5Wyvjzcs457iwJF5PgT8W9tPrHi0sKqJZzl8RM1Q%2FJ6mnZtqMe2i6wMazWalpurlu2I7HyUpVMvujSfvzjMwzuGB3N30&X-Amz-Signature=af3eea3a20913da4f01649309fabcf5d586ace56a7bfa6662834c8e9c0d87d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
