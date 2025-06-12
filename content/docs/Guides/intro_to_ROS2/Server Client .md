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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVMCHN6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDw%2FvF4NYsYeH6%2BuHrLFV17dGOeM%2FGBvWD8yiCRGXCDQwIhAPTmINBjQxKNES9ugN%2FXzJ7ZJdv%2F4utY7RTT%2Bl%2FoJPh6KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVL9TkCy8SObYP378q3APc7xNrLdzN3w6GB%2FdEwonrrJYvPDxi0t2bOv2klIsaLHGa3eQ23rxu67N2NBecz0FEPblaUyJeFA%2FqLp8Aa6Gy5FQE1%2BF1u2xkkNYk%2FqvpXYFVvB7VsAzkA36jDUAciUDFn6QQK2cQ1WGtggXC%2BkgA27XVwL0s0tz%2FtG01srPb2VaiDt%2FjPBFm0nMRIpM5vQmqjxPrrnack%2BKLzFZG94IE%2Bhj2DBRpzgQI00Un%2FFG%2BELU57eSSopkposK1XAe2r%2FCc%2Fb2VgsR2VjK0147nPXBzyVLSxkFHKXsasSyXhQfpxgWHguluRkGKyowev0BidBomsRYr3FKt8uyVZD2fGyWROBQw8zz7mp9rL2bobqzVe9HOKWSIb%2FI17DpwiSkr%2BsFFL0kYjcOTI3GyzzkQw9pb0yI1YYLw8eO86CTyB0bnGwHc8LUGvD0rlgY4UouD9I9tfK9Y76e9t%2BCHWFp5HthlqY%2FSQdgwaOAWr%2BsOVXiEm2VWPoZRW%2FA8Nuy0ju5xLT4HAwp7q8NPv6wdSYMoPIcXobFN8IFemhGdmrfQ2yVD0Zj1pUWZNpnP0CsyoiL7st6aWwJz6G8Sb9UEj7vL9p54%2BHxLyIgIq46FXzH8fTWW94hevQL0%2FID8584CVjD8k6nCBjqkAS7UKfGf7NbJ9aZl4e%2F4dy%2FWbD8AJv5pKZsl1EC8KslkBtt4dhnGsGWu%2FdN9sjpYgp%2FRb7vJ%2B5Gr6EEpykiS%2BaH2njT4dCuS7AdI6ZvoCyg8fS7xsX3zjEVpBtQZSRIjpC4G%2B7c9r%2Fm7bOt2SUjF0B%2BGk3IWjXzJRoThL8O9A6MVHC%2B4dUces4VAvIsowZTQnec73Mj09uGy%2BIUTUYyNBDc8Ohuh&X-Amz-Signature=71b35dc3ebf3ae09f5248b36df04b787a9c869f05ac400ddccd867f34364df43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVMCHN6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDw%2FvF4NYsYeH6%2BuHrLFV17dGOeM%2FGBvWD8yiCRGXCDQwIhAPTmINBjQxKNES9ugN%2FXzJ7ZJdv%2F4utY7RTT%2Bl%2FoJPh6KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVL9TkCy8SObYP378q3APc7xNrLdzN3w6GB%2FdEwonrrJYvPDxi0t2bOv2klIsaLHGa3eQ23rxu67N2NBecz0FEPblaUyJeFA%2FqLp8Aa6Gy5FQE1%2BF1u2xkkNYk%2FqvpXYFVvB7VsAzkA36jDUAciUDFn6QQK2cQ1WGtggXC%2BkgA27XVwL0s0tz%2FtG01srPb2VaiDt%2FjPBFm0nMRIpM5vQmqjxPrrnack%2BKLzFZG94IE%2Bhj2DBRpzgQI00Un%2FFG%2BELU57eSSopkposK1XAe2r%2FCc%2Fb2VgsR2VjK0147nPXBzyVLSxkFHKXsasSyXhQfpxgWHguluRkGKyowev0BidBomsRYr3FKt8uyVZD2fGyWROBQw8zz7mp9rL2bobqzVe9HOKWSIb%2FI17DpwiSkr%2BsFFL0kYjcOTI3GyzzkQw9pb0yI1YYLw8eO86CTyB0bnGwHc8LUGvD0rlgY4UouD9I9tfK9Y76e9t%2BCHWFp5HthlqY%2FSQdgwaOAWr%2BsOVXiEm2VWPoZRW%2FA8Nuy0ju5xLT4HAwp7q8NPv6wdSYMoPIcXobFN8IFemhGdmrfQ2yVD0Zj1pUWZNpnP0CsyoiL7st6aWwJz6G8Sb9UEj7vL9p54%2BHxLyIgIq46FXzH8fTWW94hevQL0%2FID8584CVjD8k6nCBjqkAS7UKfGf7NbJ9aZl4e%2F4dy%2FWbD8AJv5pKZsl1EC8KslkBtt4dhnGsGWu%2FdN9sjpYgp%2FRb7vJ%2B5Gr6EEpykiS%2BaH2njT4dCuS7AdI6ZvoCyg8fS7xsX3zjEVpBtQZSRIjpC4G%2B7c9r%2Fm7bOt2SUjF0B%2BGk3IWjXzJRoThL8O9A6MVHC%2B4dUces4VAvIsowZTQnec73Mj09uGy%2BIUTUYyNBDc8Ohuh&X-Amz-Signature=6be74c62414038c6f79484ffebaf13a0aba896de7ed84be1a21b49d3614f258a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVMCHN6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDw%2FvF4NYsYeH6%2BuHrLFV17dGOeM%2FGBvWD8yiCRGXCDQwIhAPTmINBjQxKNES9ugN%2FXzJ7ZJdv%2F4utY7RTT%2Bl%2FoJPh6KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVL9TkCy8SObYP378q3APc7xNrLdzN3w6GB%2FdEwonrrJYvPDxi0t2bOv2klIsaLHGa3eQ23rxu67N2NBecz0FEPblaUyJeFA%2FqLp8Aa6Gy5FQE1%2BF1u2xkkNYk%2FqvpXYFVvB7VsAzkA36jDUAciUDFn6QQK2cQ1WGtggXC%2BkgA27XVwL0s0tz%2FtG01srPb2VaiDt%2FjPBFm0nMRIpM5vQmqjxPrrnack%2BKLzFZG94IE%2Bhj2DBRpzgQI00Un%2FFG%2BELU57eSSopkposK1XAe2r%2FCc%2Fb2VgsR2VjK0147nPXBzyVLSxkFHKXsasSyXhQfpxgWHguluRkGKyowev0BidBomsRYr3FKt8uyVZD2fGyWROBQw8zz7mp9rL2bobqzVe9HOKWSIb%2FI17DpwiSkr%2BsFFL0kYjcOTI3GyzzkQw9pb0yI1YYLw8eO86CTyB0bnGwHc8LUGvD0rlgY4UouD9I9tfK9Y76e9t%2BCHWFp5HthlqY%2FSQdgwaOAWr%2BsOVXiEm2VWPoZRW%2FA8Nuy0ju5xLT4HAwp7q8NPv6wdSYMoPIcXobFN8IFemhGdmrfQ2yVD0Zj1pUWZNpnP0CsyoiL7st6aWwJz6G8Sb9UEj7vL9p54%2BHxLyIgIq46FXzH8fTWW94hevQL0%2FID8584CVjD8k6nCBjqkAS7UKfGf7NbJ9aZl4e%2F4dy%2FWbD8AJv5pKZsl1EC8KslkBtt4dhnGsGWu%2FdN9sjpYgp%2FRb7vJ%2B5Gr6EEpykiS%2BaH2njT4dCuS7AdI6ZvoCyg8fS7xsX3zjEVpBtQZSRIjpC4G%2B7c9r%2Fm7bOt2SUjF0B%2BGk3IWjXzJRoThL8O9A6MVHC%2B4dUces4VAvIsowZTQnec73Mj09uGy%2BIUTUYyNBDc8Ohuh&X-Amz-Signature=4acdbbd6c0e283566f1239f77de7851a2afc0e23e26666a9bb468b515b54b755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVMCHN6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDw%2FvF4NYsYeH6%2BuHrLFV17dGOeM%2FGBvWD8yiCRGXCDQwIhAPTmINBjQxKNES9ugN%2FXzJ7ZJdv%2F4utY7RTT%2Bl%2FoJPh6KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVL9TkCy8SObYP378q3APc7xNrLdzN3w6GB%2FdEwonrrJYvPDxi0t2bOv2klIsaLHGa3eQ23rxu67N2NBecz0FEPblaUyJeFA%2FqLp8Aa6Gy5FQE1%2BF1u2xkkNYk%2FqvpXYFVvB7VsAzkA36jDUAciUDFn6QQK2cQ1WGtggXC%2BkgA27XVwL0s0tz%2FtG01srPb2VaiDt%2FjPBFm0nMRIpM5vQmqjxPrrnack%2BKLzFZG94IE%2Bhj2DBRpzgQI00Un%2FFG%2BELU57eSSopkposK1XAe2r%2FCc%2Fb2VgsR2VjK0147nPXBzyVLSxkFHKXsasSyXhQfpxgWHguluRkGKyowev0BidBomsRYr3FKt8uyVZD2fGyWROBQw8zz7mp9rL2bobqzVe9HOKWSIb%2FI17DpwiSkr%2BsFFL0kYjcOTI3GyzzkQw9pb0yI1YYLw8eO86CTyB0bnGwHc8LUGvD0rlgY4UouD9I9tfK9Y76e9t%2BCHWFp5HthlqY%2FSQdgwaOAWr%2BsOVXiEm2VWPoZRW%2FA8Nuy0ju5xLT4HAwp7q8NPv6wdSYMoPIcXobFN8IFemhGdmrfQ2yVD0Zj1pUWZNpnP0CsyoiL7st6aWwJz6G8Sb9UEj7vL9p54%2BHxLyIgIq46FXzH8fTWW94hevQL0%2FID8584CVjD8k6nCBjqkAS7UKfGf7NbJ9aZl4e%2F4dy%2FWbD8AJv5pKZsl1EC8KslkBtt4dhnGsGWu%2FdN9sjpYgp%2FRb7vJ%2B5Gr6EEpykiS%2BaH2njT4dCuS7AdI6ZvoCyg8fS7xsX3zjEVpBtQZSRIjpC4G%2B7c9r%2Fm7bOt2SUjF0B%2BGk3IWjXzJRoThL8O9A6MVHC%2B4dUces4VAvIsowZTQnec73Mj09uGy%2BIUTUYyNBDc8Ohuh&X-Amz-Signature=8f9539f59c059249e06b9b9513540773102426500ed4aa208a0c7f73c5a16a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVMCHN6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDw%2FvF4NYsYeH6%2BuHrLFV17dGOeM%2FGBvWD8yiCRGXCDQwIhAPTmINBjQxKNES9ugN%2FXzJ7ZJdv%2F4utY7RTT%2Bl%2FoJPh6KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVL9TkCy8SObYP378q3APc7xNrLdzN3w6GB%2FdEwonrrJYvPDxi0t2bOv2klIsaLHGa3eQ23rxu67N2NBecz0FEPblaUyJeFA%2FqLp8Aa6Gy5FQE1%2BF1u2xkkNYk%2FqvpXYFVvB7VsAzkA36jDUAciUDFn6QQK2cQ1WGtggXC%2BkgA27XVwL0s0tz%2FtG01srPb2VaiDt%2FjPBFm0nMRIpM5vQmqjxPrrnack%2BKLzFZG94IE%2Bhj2DBRpzgQI00Un%2FFG%2BELU57eSSopkposK1XAe2r%2FCc%2Fb2VgsR2VjK0147nPXBzyVLSxkFHKXsasSyXhQfpxgWHguluRkGKyowev0BidBomsRYr3FKt8uyVZD2fGyWROBQw8zz7mp9rL2bobqzVe9HOKWSIb%2FI17DpwiSkr%2BsFFL0kYjcOTI3GyzzkQw9pb0yI1YYLw8eO86CTyB0bnGwHc8LUGvD0rlgY4UouD9I9tfK9Y76e9t%2BCHWFp5HthlqY%2FSQdgwaOAWr%2BsOVXiEm2VWPoZRW%2FA8Nuy0ju5xLT4HAwp7q8NPv6wdSYMoPIcXobFN8IFemhGdmrfQ2yVD0Zj1pUWZNpnP0CsyoiL7st6aWwJz6G8Sb9UEj7vL9p54%2BHxLyIgIq46FXzH8fTWW94hevQL0%2FID8584CVjD8k6nCBjqkAS7UKfGf7NbJ9aZl4e%2F4dy%2FWbD8AJv5pKZsl1EC8KslkBtt4dhnGsGWu%2FdN9sjpYgp%2FRb7vJ%2B5Gr6EEpykiS%2BaH2njT4dCuS7AdI6ZvoCyg8fS7xsX3zjEVpBtQZSRIjpC4G%2B7c9r%2Fm7bOt2SUjF0B%2BGk3IWjXzJRoThL8O9A6MVHC%2B4dUces4VAvIsowZTQnec73Mj09uGy%2BIUTUYyNBDc8Ohuh&X-Amz-Signature=04db7efd25e4b883d0a1c7c5deeda8864b6827bafbfc168f8bad926a1e08760f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
