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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBWTAJD%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvrP%2BikZjb2cU3adR1DOkdVI98AvOI5Lj5JCZCItNZJAiAW7gpbDWE9AkpadZZHRXgrv8eUIqxPNh%2FfM%2F4wYUZmqir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMC41FTyNqqS9g%2F6dxKtwDHmLykE5keA6%2BJ4K2SajtgMzz6dDIaXa50zEaba701aGeuvaM%2B7X1oZ58FtgsgtqztGeRA3%2FlguSKumr9ibhsXlFj57wtdhT5uXueygUig61I%2FKZAKJWn0pL75HZSOB0xFmK4WTgS0hqEzWpiqDAk2oEVTYrdvJdcr7q1mZU8ApYUtBkoSkswVaI8MV3B9i7A1jE5Ss97EmlRPrewUu0cv2osMSfhqF1Z7PL00s8Mjne7oe501R5fcOSQa0TM8ouwahqX2f4rHcsCA%2BN9lE4tR3m9RanpvV%2FKV7A3gs6FbEZD0B8sDwDwAwUnKOcKkhwGrgMW6sl8ZcpXPXcG4K80m5SRjGp7UAzHdOJ1c%2Fm%2BmbJ%2B7hDzjWBraJmzK9L%2BeCihRCtaSPXoI3Vy8fRGNYob5ivUHo0YAB7yzuyZs40T%2BNWFO4Qm3S6ipyQM5QypRLxve2aU0pRmBlApb9UQ6HxW5PbdLmiv%2FSt80RVHY6x0R%2BFNZFA1h2JrIETRgcuCAvGekbLKpvYgvWCWQwKxHX2Zhdqx%2B%2FqQG0hMccjdPu3W6KaAJXPFuzXsHwX3WEpTY%2B2K3%2BoGkodqYXUaTa8kUduTU1jZBreDjowv%2B1Llj60kSy%2BI1ek%2BpJaut7s0zWgwz5npwAY6pgEFepGfSIWFC4qVNkJk1PV6T%2FdPFtbcAryEmMxuvE7Bp6QPNSDpll4IeO6Y%2Ba99YRP1%2B3n%2FmwIEJeKa0AO%2BqLdeXQYRjxeXQnVpMrfgdUMLf%2FzFNfWqaMQ9GXizF6vL6tD34SJs0PWgE7JtXgr0ZdrpueQsJfxOJP3pJG1sGHqaUfWAafmQ%2FLmppe8Urptb5GEVu7opG%2FTzDNrSXxYuoXhNbpi%2BlUVG&X-Amz-Signature=9cedcc6e3d6db37185bb91f5da292a24d67ebed57be6e45fc07d40699166cc28&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBWTAJD%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvrP%2BikZjb2cU3adR1DOkdVI98AvOI5Lj5JCZCItNZJAiAW7gpbDWE9AkpadZZHRXgrv8eUIqxPNh%2FfM%2F4wYUZmqir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMC41FTyNqqS9g%2F6dxKtwDHmLykE5keA6%2BJ4K2SajtgMzz6dDIaXa50zEaba701aGeuvaM%2B7X1oZ58FtgsgtqztGeRA3%2FlguSKumr9ibhsXlFj57wtdhT5uXueygUig61I%2FKZAKJWn0pL75HZSOB0xFmK4WTgS0hqEzWpiqDAk2oEVTYrdvJdcr7q1mZU8ApYUtBkoSkswVaI8MV3B9i7A1jE5Ss97EmlRPrewUu0cv2osMSfhqF1Z7PL00s8Mjne7oe501R5fcOSQa0TM8ouwahqX2f4rHcsCA%2BN9lE4tR3m9RanpvV%2FKV7A3gs6FbEZD0B8sDwDwAwUnKOcKkhwGrgMW6sl8ZcpXPXcG4K80m5SRjGp7UAzHdOJ1c%2Fm%2BmbJ%2B7hDzjWBraJmzK9L%2BeCihRCtaSPXoI3Vy8fRGNYob5ivUHo0YAB7yzuyZs40T%2BNWFO4Qm3S6ipyQM5QypRLxve2aU0pRmBlApb9UQ6HxW5PbdLmiv%2FSt80RVHY6x0R%2BFNZFA1h2JrIETRgcuCAvGekbLKpvYgvWCWQwKxHX2Zhdqx%2B%2FqQG0hMccjdPu3W6KaAJXPFuzXsHwX3WEpTY%2B2K3%2BoGkodqYXUaTa8kUduTU1jZBreDjowv%2B1Llj60kSy%2BI1ek%2BpJaut7s0zWgwz5npwAY6pgEFepGfSIWFC4qVNkJk1PV6T%2FdPFtbcAryEmMxuvE7Bp6QPNSDpll4IeO6Y%2Ba99YRP1%2B3n%2FmwIEJeKa0AO%2BqLdeXQYRjxeXQnVpMrfgdUMLf%2FzFNfWqaMQ9GXizF6vL6tD34SJs0PWgE7JtXgr0ZdrpueQsJfxOJP3pJG1sGHqaUfWAafmQ%2FLmppe8Urptb5GEVu7opG%2FTzDNrSXxYuoXhNbpi%2BlUVG&X-Amz-Signature=e153360d1d0a7650d818df279e576e62266cae3176a9dd1a3b220cf1ff4f48cd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBWTAJD%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvrP%2BikZjb2cU3adR1DOkdVI98AvOI5Lj5JCZCItNZJAiAW7gpbDWE9AkpadZZHRXgrv8eUIqxPNh%2FfM%2F4wYUZmqir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMC41FTyNqqS9g%2F6dxKtwDHmLykE5keA6%2BJ4K2SajtgMzz6dDIaXa50zEaba701aGeuvaM%2B7X1oZ58FtgsgtqztGeRA3%2FlguSKumr9ibhsXlFj57wtdhT5uXueygUig61I%2FKZAKJWn0pL75HZSOB0xFmK4WTgS0hqEzWpiqDAk2oEVTYrdvJdcr7q1mZU8ApYUtBkoSkswVaI8MV3B9i7A1jE5Ss97EmlRPrewUu0cv2osMSfhqF1Z7PL00s8Mjne7oe501R5fcOSQa0TM8ouwahqX2f4rHcsCA%2BN9lE4tR3m9RanpvV%2FKV7A3gs6FbEZD0B8sDwDwAwUnKOcKkhwGrgMW6sl8ZcpXPXcG4K80m5SRjGp7UAzHdOJ1c%2Fm%2BmbJ%2B7hDzjWBraJmzK9L%2BeCihRCtaSPXoI3Vy8fRGNYob5ivUHo0YAB7yzuyZs40T%2BNWFO4Qm3S6ipyQM5QypRLxve2aU0pRmBlApb9UQ6HxW5PbdLmiv%2FSt80RVHY6x0R%2BFNZFA1h2JrIETRgcuCAvGekbLKpvYgvWCWQwKxHX2Zhdqx%2B%2FqQG0hMccjdPu3W6KaAJXPFuzXsHwX3WEpTY%2B2K3%2BoGkodqYXUaTa8kUduTU1jZBreDjowv%2B1Llj60kSy%2BI1ek%2BpJaut7s0zWgwz5npwAY6pgEFepGfSIWFC4qVNkJk1PV6T%2FdPFtbcAryEmMxuvE7Bp6QPNSDpll4IeO6Y%2Ba99YRP1%2B3n%2FmwIEJeKa0AO%2BqLdeXQYRjxeXQnVpMrfgdUMLf%2FzFNfWqaMQ9GXizF6vL6tD34SJs0PWgE7JtXgr0ZdrpueQsJfxOJP3pJG1sGHqaUfWAafmQ%2FLmppe8Urptb5GEVu7opG%2FTzDNrSXxYuoXhNbpi%2BlUVG&X-Amz-Signature=666ea503246ae94d8a82cdf2bec415845d621d8b35f11bfd1f4fc9950d85b8e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBWTAJD%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvrP%2BikZjb2cU3adR1DOkdVI98AvOI5Lj5JCZCItNZJAiAW7gpbDWE9AkpadZZHRXgrv8eUIqxPNh%2FfM%2F4wYUZmqir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMC41FTyNqqS9g%2F6dxKtwDHmLykE5keA6%2BJ4K2SajtgMzz6dDIaXa50zEaba701aGeuvaM%2B7X1oZ58FtgsgtqztGeRA3%2FlguSKumr9ibhsXlFj57wtdhT5uXueygUig61I%2FKZAKJWn0pL75HZSOB0xFmK4WTgS0hqEzWpiqDAk2oEVTYrdvJdcr7q1mZU8ApYUtBkoSkswVaI8MV3B9i7A1jE5Ss97EmlRPrewUu0cv2osMSfhqF1Z7PL00s8Mjne7oe501R5fcOSQa0TM8ouwahqX2f4rHcsCA%2BN9lE4tR3m9RanpvV%2FKV7A3gs6FbEZD0B8sDwDwAwUnKOcKkhwGrgMW6sl8ZcpXPXcG4K80m5SRjGp7UAzHdOJ1c%2Fm%2BmbJ%2B7hDzjWBraJmzK9L%2BeCihRCtaSPXoI3Vy8fRGNYob5ivUHo0YAB7yzuyZs40T%2BNWFO4Qm3S6ipyQM5QypRLxve2aU0pRmBlApb9UQ6HxW5PbdLmiv%2FSt80RVHY6x0R%2BFNZFA1h2JrIETRgcuCAvGekbLKpvYgvWCWQwKxHX2Zhdqx%2B%2FqQG0hMccjdPu3W6KaAJXPFuzXsHwX3WEpTY%2B2K3%2BoGkodqYXUaTa8kUduTU1jZBreDjowv%2B1Llj60kSy%2BI1ek%2BpJaut7s0zWgwz5npwAY6pgEFepGfSIWFC4qVNkJk1PV6T%2FdPFtbcAryEmMxuvE7Bp6QPNSDpll4IeO6Y%2Ba99YRP1%2B3n%2FmwIEJeKa0AO%2BqLdeXQYRjxeXQnVpMrfgdUMLf%2FzFNfWqaMQ9GXizF6vL6tD34SJs0PWgE7JtXgr0ZdrpueQsJfxOJP3pJG1sGHqaUfWAafmQ%2FLmppe8Urptb5GEVu7opG%2FTzDNrSXxYuoXhNbpi%2BlUVG&X-Amz-Signature=d0bf99f5c0720f24867a987dc3049a84cee002ea3ea656724257fcd084f98e49&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBWTAJD%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvrP%2BikZjb2cU3adR1DOkdVI98AvOI5Lj5JCZCItNZJAiAW7gpbDWE9AkpadZZHRXgrv8eUIqxPNh%2FfM%2F4wYUZmqir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMC41FTyNqqS9g%2F6dxKtwDHmLykE5keA6%2BJ4K2SajtgMzz6dDIaXa50zEaba701aGeuvaM%2B7X1oZ58FtgsgtqztGeRA3%2FlguSKumr9ibhsXlFj57wtdhT5uXueygUig61I%2FKZAKJWn0pL75HZSOB0xFmK4WTgS0hqEzWpiqDAk2oEVTYrdvJdcr7q1mZU8ApYUtBkoSkswVaI8MV3B9i7A1jE5Ss97EmlRPrewUu0cv2osMSfhqF1Z7PL00s8Mjne7oe501R5fcOSQa0TM8ouwahqX2f4rHcsCA%2BN9lE4tR3m9RanpvV%2FKV7A3gs6FbEZD0B8sDwDwAwUnKOcKkhwGrgMW6sl8ZcpXPXcG4K80m5SRjGp7UAzHdOJ1c%2Fm%2BmbJ%2B7hDzjWBraJmzK9L%2BeCihRCtaSPXoI3Vy8fRGNYob5ivUHo0YAB7yzuyZs40T%2BNWFO4Qm3S6ipyQM5QypRLxve2aU0pRmBlApb9UQ6HxW5PbdLmiv%2FSt80RVHY6x0R%2BFNZFA1h2JrIETRgcuCAvGekbLKpvYgvWCWQwKxHX2Zhdqx%2B%2FqQG0hMccjdPu3W6KaAJXPFuzXsHwX3WEpTY%2B2K3%2BoGkodqYXUaTa8kUduTU1jZBreDjowv%2B1Llj60kSy%2BI1ek%2BpJaut7s0zWgwz5npwAY6pgEFepGfSIWFC4qVNkJk1PV6T%2FdPFtbcAryEmMxuvE7Bp6QPNSDpll4IeO6Y%2Ba99YRP1%2B3n%2FmwIEJeKa0AO%2BqLdeXQYRjxeXQnVpMrfgdUMLf%2FzFNfWqaMQ9GXizF6vL6tD34SJs0PWgE7JtXgr0ZdrpueQsJfxOJP3pJG1sGHqaUfWAafmQ%2FLmppe8Urptb5GEVu7opG%2FTzDNrSXxYuoXhNbpi%2BlUVG&X-Amz-Signature=117a129f668479e1d7e0b1c1e9d86a7b78a006ed10e85e5e4436aa8a6b90bae0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
