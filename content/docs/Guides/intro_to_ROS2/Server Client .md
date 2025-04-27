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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OF2Z6O%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE100OnoUfZNDbNGlBpFGPrmF5jKDV%2FkcWmZm1%2FTYDc8AiEA8Tl3DciHg6w0%2BFQVw3z5iPH9wgEw637IzR41wve1Ga0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLyn1kEr5vgYGQgR%2BircAxN9G7Zi1CVVyS8V1Mz6uYpfB2VcDwcsp87usaZa76GYTUVnJQrSEXw4xwzCuoMst4qoFde9mDB5XK9dL33UcdPnyCs4OyYKelXn6umvmRuTBQsKLNEJerk4ohfdo7nqQHQGv2drfK9ge13hoGU0PWrBkaCN5nvUsLIS75faYwEeElCDai9S0ksgVxW%2BXvhwltISq4ssh4D%2FuihzoVN487F46AEEj2A%2BJALFmM7NZA26FcVNe%2Bd6%2Ff7u7AHMaIur4JzzT8leH1CUkW0%2FCsfEPnyQoxrksGfZtCnWrSURy2mAoHIhcw69OZpT5jd%2BO2rClkKhhwtuBHdEUih7954tWQE80gNXhV1a6VjAQhIaiwpSeIRAxnIDJJSTAFtJvT57cOK2Gv6obHE4DO8tvFC4yjSm7PzvkJ7dnpfu2lcCCWzlMCI19SqrRgv4Xpfu6GRUBWo%2F6wJpe777QDGbCSNpVb9c3fnj8Ed3tcmWwKZ2dRrA1mbXA%2FGvQG6p5rw1imKGmunKbJJ1RNMBcvBKqhwsYBGjkdCzOrrGyh2%2FVJioqU7%2FmYRhVKCGX0DDhRCPeIl4iYgjLOklxOkU4lrFuo7D7Fd82TSt3tG7iKo5Eugtn%2BaORw0XgG5Rup2z%2Bfu%2BMIfttsAGOqUBQLGtDl1d08bCuLetTe6VKbXzagjqq%2Fu8ADIS%2BK7kp%2Bv3853q%2FlNhYoDxdJvbn1u0Phz7JDi7glNrlcwf20CiOnK3DMeViDNgFPi72M6VH0u6k17625GiKwmihgLWUlvJRBks2sliXQ%2Fmp8lXiP4rBDNv7PZbGDt6%2BFxjYdbF50yH%2F3%2FlNdjY4Zb9GcnJdmtnpPp2dJsusiCSTBVebYKQurYzTA9q&X-Amz-Signature=986dcf0a9fc0c8fec5964f5b71fc80444dbfeabf4f6f2a29d1e41545328e4612&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OF2Z6O%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE100OnoUfZNDbNGlBpFGPrmF5jKDV%2FkcWmZm1%2FTYDc8AiEA8Tl3DciHg6w0%2BFQVw3z5iPH9wgEw637IzR41wve1Ga0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLyn1kEr5vgYGQgR%2BircAxN9G7Zi1CVVyS8V1Mz6uYpfB2VcDwcsp87usaZa76GYTUVnJQrSEXw4xwzCuoMst4qoFde9mDB5XK9dL33UcdPnyCs4OyYKelXn6umvmRuTBQsKLNEJerk4ohfdo7nqQHQGv2drfK9ge13hoGU0PWrBkaCN5nvUsLIS75faYwEeElCDai9S0ksgVxW%2BXvhwltISq4ssh4D%2FuihzoVN487F46AEEj2A%2BJALFmM7NZA26FcVNe%2Bd6%2Ff7u7AHMaIur4JzzT8leH1CUkW0%2FCsfEPnyQoxrksGfZtCnWrSURy2mAoHIhcw69OZpT5jd%2BO2rClkKhhwtuBHdEUih7954tWQE80gNXhV1a6VjAQhIaiwpSeIRAxnIDJJSTAFtJvT57cOK2Gv6obHE4DO8tvFC4yjSm7PzvkJ7dnpfu2lcCCWzlMCI19SqrRgv4Xpfu6GRUBWo%2F6wJpe777QDGbCSNpVb9c3fnj8Ed3tcmWwKZ2dRrA1mbXA%2FGvQG6p5rw1imKGmunKbJJ1RNMBcvBKqhwsYBGjkdCzOrrGyh2%2FVJioqU7%2FmYRhVKCGX0DDhRCPeIl4iYgjLOklxOkU4lrFuo7D7Fd82TSt3tG7iKo5Eugtn%2BaORw0XgG5Rup2z%2Bfu%2BMIfttsAGOqUBQLGtDl1d08bCuLetTe6VKbXzagjqq%2Fu8ADIS%2BK7kp%2Bv3853q%2FlNhYoDxdJvbn1u0Phz7JDi7glNrlcwf20CiOnK3DMeViDNgFPi72M6VH0u6k17625GiKwmihgLWUlvJRBks2sliXQ%2Fmp8lXiP4rBDNv7PZbGDt6%2BFxjYdbF50yH%2F3%2FlNdjY4Zb9GcnJdmtnpPp2dJsusiCSTBVebYKQurYzTA9q&X-Amz-Signature=1a1a8756bd6bfb2099eab7b23b2887186d3e63cca724c7742fa066b8973f9fac&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OF2Z6O%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE100OnoUfZNDbNGlBpFGPrmF5jKDV%2FkcWmZm1%2FTYDc8AiEA8Tl3DciHg6w0%2BFQVw3z5iPH9wgEw637IzR41wve1Ga0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLyn1kEr5vgYGQgR%2BircAxN9G7Zi1CVVyS8V1Mz6uYpfB2VcDwcsp87usaZa76GYTUVnJQrSEXw4xwzCuoMst4qoFde9mDB5XK9dL33UcdPnyCs4OyYKelXn6umvmRuTBQsKLNEJerk4ohfdo7nqQHQGv2drfK9ge13hoGU0PWrBkaCN5nvUsLIS75faYwEeElCDai9S0ksgVxW%2BXvhwltISq4ssh4D%2FuihzoVN487F46AEEj2A%2BJALFmM7NZA26FcVNe%2Bd6%2Ff7u7AHMaIur4JzzT8leH1CUkW0%2FCsfEPnyQoxrksGfZtCnWrSURy2mAoHIhcw69OZpT5jd%2BO2rClkKhhwtuBHdEUih7954tWQE80gNXhV1a6VjAQhIaiwpSeIRAxnIDJJSTAFtJvT57cOK2Gv6obHE4DO8tvFC4yjSm7PzvkJ7dnpfu2lcCCWzlMCI19SqrRgv4Xpfu6GRUBWo%2F6wJpe777QDGbCSNpVb9c3fnj8Ed3tcmWwKZ2dRrA1mbXA%2FGvQG6p5rw1imKGmunKbJJ1RNMBcvBKqhwsYBGjkdCzOrrGyh2%2FVJioqU7%2FmYRhVKCGX0DDhRCPeIl4iYgjLOklxOkU4lrFuo7D7Fd82TSt3tG7iKo5Eugtn%2BaORw0XgG5Rup2z%2Bfu%2BMIfttsAGOqUBQLGtDl1d08bCuLetTe6VKbXzagjqq%2Fu8ADIS%2BK7kp%2Bv3853q%2FlNhYoDxdJvbn1u0Phz7JDi7glNrlcwf20CiOnK3DMeViDNgFPi72M6VH0u6k17625GiKwmihgLWUlvJRBks2sliXQ%2Fmp8lXiP4rBDNv7PZbGDt6%2BFxjYdbF50yH%2F3%2FlNdjY4Zb9GcnJdmtnpPp2dJsusiCSTBVebYKQurYzTA9q&X-Amz-Signature=d525bd7dd6e33a0ff4164c6ac1c94203a16b5835106b6b1793669df22233bef0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OF2Z6O%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE100OnoUfZNDbNGlBpFGPrmF5jKDV%2FkcWmZm1%2FTYDc8AiEA8Tl3DciHg6w0%2BFQVw3z5iPH9wgEw637IzR41wve1Ga0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLyn1kEr5vgYGQgR%2BircAxN9G7Zi1CVVyS8V1Mz6uYpfB2VcDwcsp87usaZa76GYTUVnJQrSEXw4xwzCuoMst4qoFde9mDB5XK9dL33UcdPnyCs4OyYKelXn6umvmRuTBQsKLNEJerk4ohfdo7nqQHQGv2drfK9ge13hoGU0PWrBkaCN5nvUsLIS75faYwEeElCDai9S0ksgVxW%2BXvhwltISq4ssh4D%2FuihzoVN487F46AEEj2A%2BJALFmM7NZA26FcVNe%2Bd6%2Ff7u7AHMaIur4JzzT8leH1CUkW0%2FCsfEPnyQoxrksGfZtCnWrSURy2mAoHIhcw69OZpT5jd%2BO2rClkKhhwtuBHdEUih7954tWQE80gNXhV1a6VjAQhIaiwpSeIRAxnIDJJSTAFtJvT57cOK2Gv6obHE4DO8tvFC4yjSm7PzvkJ7dnpfu2lcCCWzlMCI19SqrRgv4Xpfu6GRUBWo%2F6wJpe777QDGbCSNpVb9c3fnj8Ed3tcmWwKZ2dRrA1mbXA%2FGvQG6p5rw1imKGmunKbJJ1RNMBcvBKqhwsYBGjkdCzOrrGyh2%2FVJioqU7%2FmYRhVKCGX0DDhRCPeIl4iYgjLOklxOkU4lrFuo7D7Fd82TSt3tG7iKo5Eugtn%2BaORw0XgG5Rup2z%2Bfu%2BMIfttsAGOqUBQLGtDl1d08bCuLetTe6VKbXzagjqq%2Fu8ADIS%2BK7kp%2Bv3853q%2FlNhYoDxdJvbn1u0Phz7JDi7glNrlcwf20CiOnK3DMeViDNgFPi72M6VH0u6k17625GiKwmihgLWUlvJRBks2sliXQ%2Fmp8lXiP4rBDNv7PZbGDt6%2BFxjYdbF50yH%2F3%2FlNdjY4Zb9GcnJdmtnpPp2dJsusiCSTBVebYKQurYzTA9q&X-Amz-Signature=67b5a3f7d6625893cd027561be39b6fefcadff96a3923eef8170b83768b627a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OF2Z6O%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE100OnoUfZNDbNGlBpFGPrmF5jKDV%2FkcWmZm1%2FTYDc8AiEA8Tl3DciHg6w0%2BFQVw3z5iPH9wgEw637IzR41wve1Ga0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLyn1kEr5vgYGQgR%2BircAxN9G7Zi1CVVyS8V1Mz6uYpfB2VcDwcsp87usaZa76GYTUVnJQrSEXw4xwzCuoMst4qoFde9mDB5XK9dL33UcdPnyCs4OyYKelXn6umvmRuTBQsKLNEJerk4ohfdo7nqQHQGv2drfK9ge13hoGU0PWrBkaCN5nvUsLIS75faYwEeElCDai9S0ksgVxW%2BXvhwltISq4ssh4D%2FuihzoVN487F46AEEj2A%2BJALFmM7NZA26FcVNe%2Bd6%2Ff7u7AHMaIur4JzzT8leH1CUkW0%2FCsfEPnyQoxrksGfZtCnWrSURy2mAoHIhcw69OZpT5jd%2BO2rClkKhhwtuBHdEUih7954tWQE80gNXhV1a6VjAQhIaiwpSeIRAxnIDJJSTAFtJvT57cOK2Gv6obHE4DO8tvFC4yjSm7PzvkJ7dnpfu2lcCCWzlMCI19SqrRgv4Xpfu6GRUBWo%2F6wJpe777QDGbCSNpVb9c3fnj8Ed3tcmWwKZ2dRrA1mbXA%2FGvQG6p5rw1imKGmunKbJJ1RNMBcvBKqhwsYBGjkdCzOrrGyh2%2FVJioqU7%2FmYRhVKCGX0DDhRCPeIl4iYgjLOklxOkU4lrFuo7D7Fd82TSt3tG7iKo5Eugtn%2BaORw0XgG5Rup2z%2Bfu%2BMIfttsAGOqUBQLGtDl1d08bCuLetTe6VKbXzagjqq%2Fu8ADIS%2BK7kp%2Bv3853q%2FlNhYoDxdJvbn1u0Phz7JDi7glNrlcwf20CiOnK3DMeViDNgFPi72M6VH0u6k17625GiKwmihgLWUlvJRBks2sliXQ%2Fmp8lXiP4rBDNv7PZbGDt6%2BFxjYdbF50yH%2F3%2FlNdjY4Zb9GcnJdmtnpPp2dJsusiCSTBVebYKQurYzTA9q&X-Amz-Signature=c463fe6da0bc95cf25c353fe145e5768573a64d6a1c4c219a69692442a06eba5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
