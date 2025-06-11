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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BTKVF5Y%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCo3hEr%2FHVOTZFTa7FtCtfsoG3mnR3zWQ7xvuhlrMr%2BbQIgFRjeL7wg%2FF8gzBNJDXbJDB27CBuURmZ8tVUWKcYeYJUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHxvF7tl1IKEZ9bByrcA1UyNUD1QGSwgW9pG0Fz95RvgjskciYyhyGhkFz3BCl5ZsKw6Am%2BsTD84TLBLqGhN2jMHkb1aRuYNHqILGspJhff9vBAxY1Qx4ycGBgfhJPez2nFfbe41ed2RSzJY7qhSeeYbLsv%2Fc7rGtm%2FrW1i3TPYqWm%2BtgVOzPXvkAz3%2FqglUjYZg9RS66iHMUgFDVPllJbi9PafzEx%2FB0EaZebGknsxjpW0hoEl9O3p2Nd5WtDgsQelkdfOBbP3b2Np6akw%2B81jurv2HF8qpMzKT0QUZ%2Fv0OVMi6vYgr3vpjUcrbpDo1XgdEbox%2Fcs0NP%2BadlwG7Pjq%2FO6JeRk%2BQd2ajFMfWu1KHDirsA3nEJtzSJeTBCjkOKWmWI9rxrl6ZI2hdejOvHlytMZbMX%2FW15L5%2BpUroocApA6Fk7drWfA0M1unznb9FVOtEFYN4%2B7O0w4CLGG%2BGp2QkWbiZNfpX3UI%2BRKvkPw4XOMlsChQpfn%2Bf7EfK0VaxgIgB92cL70znH6kIqXtP%2BLDIPkR3N0Z8E0lns0SPgXvjm4XeWpi%2BYT8qE45whMMefBBR7yK%2FPExynQzzItSMYrWRw7FS%2B%2FftO6mQd3c7UOOznxd%2FySdZEfEmJcplVOcvIvvydbJQQLQqkdkMI2ap8IGOqUBMadjFpn%2FnFEmkCfVPjpbtxSRH1jYz%2B4oDKcqEGlZw4wnQ0GyAGXz8Fnntah6wHmic%2B7yhaJ7BiDRQ6apSlU2Oo1QZKgCfL5VtCzvRHGVK0s%2BLYSKHk3DPYPkZaQlh%2B3xS9iCuBUjfAqTzGDNCDfBdvqQKyODXCo5I668t0VV791wRxjyPMLPl3M8AY6ZtNNyNTSUpm5um%2Fw0uu1gWPCQgV1Khl9t&X-Amz-Signature=10ee0b25c3e48a0fce0d560183c3b5a95f40f3b12f6d584c38fecec1bfd25b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BTKVF5Y%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCo3hEr%2FHVOTZFTa7FtCtfsoG3mnR3zWQ7xvuhlrMr%2BbQIgFRjeL7wg%2FF8gzBNJDXbJDB27CBuURmZ8tVUWKcYeYJUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHxvF7tl1IKEZ9bByrcA1UyNUD1QGSwgW9pG0Fz95RvgjskciYyhyGhkFz3BCl5ZsKw6Am%2BsTD84TLBLqGhN2jMHkb1aRuYNHqILGspJhff9vBAxY1Qx4ycGBgfhJPez2nFfbe41ed2RSzJY7qhSeeYbLsv%2Fc7rGtm%2FrW1i3TPYqWm%2BtgVOzPXvkAz3%2FqglUjYZg9RS66iHMUgFDVPllJbi9PafzEx%2FB0EaZebGknsxjpW0hoEl9O3p2Nd5WtDgsQelkdfOBbP3b2Np6akw%2B81jurv2HF8qpMzKT0QUZ%2Fv0OVMi6vYgr3vpjUcrbpDo1XgdEbox%2Fcs0NP%2BadlwG7Pjq%2FO6JeRk%2BQd2ajFMfWu1KHDirsA3nEJtzSJeTBCjkOKWmWI9rxrl6ZI2hdejOvHlytMZbMX%2FW15L5%2BpUroocApA6Fk7drWfA0M1unznb9FVOtEFYN4%2B7O0w4CLGG%2BGp2QkWbiZNfpX3UI%2BRKvkPw4XOMlsChQpfn%2Bf7EfK0VaxgIgB92cL70znH6kIqXtP%2BLDIPkR3N0Z8E0lns0SPgXvjm4XeWpi%2BYT8qE45whMMefBBR7yK%2FPExynQzzItSMYrWRw7FS%2B%2FftO6mQd3c7UOOznxd%2FySdZEfEmJcplVOcvIvvydbJQQLQqkdkMI2ap8IGOqUBMadjFpn%2FnFEmkCfVPjpbtxSRH1jYz%2B4oDKcqEGlZw4wnQ0GyAGXz8Fnntah6wHmic%2B7yhaJ7BiDRQ6apSlU2Oo1QZKgCfL5VtCzvRHGVK0s%2BLYSKHk3DPYPkZaQlh%2B3xS9iCuBUjfAqTzGDNCDfBdvqQKyODXCo5I668t0VV791wRxjyPMLPl3M8AY6ZtNNyNTSUpm5um%2Fw0uu1gWPCQgV1Khl9t&X-Amz-Signature=a20360127ff870297e41a5435ce53c64764a5d44e67080dabec19307f4e2ad65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BTKVF5Y%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCo3hEr%2FHVOTZFTa7FtCtfsoG3mnR3zWQ7xvuhlrMr%2BbQIgFRjeL7wg%2FF8gzBNJDXbJDB27CBuURmZ8tVUWKcYeYJUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHxvF7tl1IKEZ9bByrcA1UyNUD1QGSwgW9pG0Fz95RvgjskciYyhyGhkFz3BCl5ZsKw6Am%2BsTD84TLBLqGhN2jMHkb1aRuYNHqILGspJhff9vBAxY1Qx4ycGBgfhJPez2nFfbe41ed2RSzJY7qhSeeYbLsv%2Fc7rGtm%2FrW1i3TPYqWm%2BtgVOzPXvkAz3%2FqglUjYZg9RS66iHMUgFDVPllJbi9PafzEx%2FB0EaZebGknsxjpW0hoEl9O3p2Nd5WtDgsQelkdfOBbP3b2Np6akw%2B81jurv2HF8qpMzKT0QUZ%2Fv0OVMi6vYgr3vpjUcrbpDo1XgdEbox%2Fcs0NP%2BadlwG7Pjq%2FO6JeRk%2BQd2ajFMfWu1KHDirsA3nEJtzSJeTBCjkOKWmWI9rxrl6ZI2hdejOvHlytMZbMX%2FW15L5%2BpUroocApA6Fk7drWfA0M1unznb9FVOtEFYN4%2B7O0w4CLGG%2BGp2QkWbiZNfpX3UI%2BRKvkPw4XOMlsChQpfn%2Bf7EfK0VaxgIgB92cL70znH6kIqXtP%2BLDIPkR3N0Z8E0lns0SPgXvjm4XeWpi%2BYT8qE45whMMefBBR7yK%2FPExynQzzItSMYrWRw7FS%2B%2FftO6mQd3c7UOOznxd%2FySdZEfEmJcplVOcvIvvydbJQQLQqkdkMI2ap8IGOqUBMadjFpn%2FnFEmkCfVPjpbtxSRH1jYz%2B4oDKcqEGlZw4wnQ0GyAGXz8Fnntah6wHmic%2B7yhaJ7BiDRQ6apSlU2Oo1QZKgCfL5VtCzvRHGVK0s%2BLYSKHk3DPYPkZaQlh%2B3xS9iCuBUjfAqTzGDNCDfBdvqQKyODXCo5I668t0VV791wRxjyPMLPl3M8AY6ZtNNyNTSUpm5um%2Fw0uu1gWPCQgV1Khl9t&X-Amz-Signature=1243f0d1a67284e5ef5813eca3eb2e102709490d722323c58e67ddcbd301937f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BTKVF5Y%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCo3hEr%2FHVOTZFTa7FtCtfsoG3mnR3zWQ7xvuhlrMr%2BbQIgFRjeL7wg%2FF8gzBNJDXbJDB27CBuURmZ8tVUWKcYeYJUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHxvF7tl1IKEZ9bByrcA1UyNUD1QGSwgW9pG0Fz95RvgjskciYyhyGhkFz3BCl5ZsKw6Am%2BsTD84TLBLqGhN2jMHkb1aRuYNHqILGspJhff9vBAxY1Qx4ycGBgfhJPez2nFfbe41ed2RSzJY7qhSeeYbLsv%2Fc7rGtm%2FrW1i3TPYqWm%2BtgVOzPXvkAz3%2FqglUjYZg9RS66iHMUgFDVPllJbi9PafzEx%2FB0EaZebGknsxjpW0hoEl9O3p2Nd5WtDgsQelkdfOBbP3b2Np6akw%2B81jurv2HF8qpMzKT0QUZ%2Fv0OVMi6vYgr3vpjUcrbpDo1XgdEbox%2Fcs0NP%2BadlwG7Pjq%2FO6JeRk%2BQd2ajFMfWu1KHDirsA3nEJtzSJeTBCjkOKWmWI9rxrl6ZI2hdejOvHlytMZbMX%2FW15L5%2BpUroocApA6Fk7drWfA0M1unznb9FVOtEFYN4%2B7O0w4CLGG%2BGp2QkWbiZNfpX3UI%2BRKvkPw4XOMlsChQpfn%2Bf7EfK0VaxgIgB92cL70znH6kIqXtP%2BLDIPkR3N0Z8E0lns0SPgXvjm4XeWpi%2BYT8qE45whMMefBBR7yK%2FPExynQzzItSMYrWRw7FS%2B%2FftO6mQd3c7UOOznxd%2FySdZEfEmJcplVOcvIvvydbJQQLQqkdkMI2ap8IGOqUBMadjFpn%2FnFEmkCfVPjpbtxSRH1jYz%2B4oDKcqEGlZw4wnQ0GyAGXz8Fnntah6wHmic%2B7yhaJ7BiDRQ6apSlU2Oo1QZKgCfL5VtCzvRHGVK0s%2BLYSKHk3DPYPkZaQlh%2B3xS9iCuBUjfAqTzGDNCDfBdvqQKyODXCo5I668t0VV791wRxjyPMLPl3M8AY6ZtNNyNTSUpm5um%2Fw0uu1gWPCQgV1Khl9t&X-Amz-Signature=64a874197baf1810a2e770b40fe5f50793b8bb0e98f70cecef08d8dc5c71e8aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BTKVF5Y%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCo3hEr%2FHVOTZFTa7FtCtfsoG3mnR3zWQ7xvuhlrMr%2BbQIgFRjeL7wg%2FF8gzBNJDXbJDB27CBuURmZ8tVUWKcYeYJUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHxvF7tl1IKEZ9bByrcA1UyNUD1QGSwgW9pG0Fz95RvgjskciYyhyGhkFz3BCl5ZsKw6Am%2BsTD84TLBLqGhN2jMHkb1aRuYNHqILGspJhff9vBAxY1Qx4ycGBgfhJPez2nFfbe41ed2RSzJY7qhSeeYbLsv%2Fc7rGtm%2FrW1i3TPYqWm%2BtgVOzPXvkAz3%2FqglUjYZg9RS66iHMUgFDVPllJbi9PafzEx%2FB0EaZebGknsxjpW0hoEl9O3p2Nd5WtDgsQelkdfOBbP3b2Np6akw%2B81jurv2HF8qpMzKT0QUZ%2Fv0OVMi6vYgr3vpjUcrbpDo1XgdEbox%2Fcs0NP%2BadlwG7Pjq%2FO6JeRk%2BQd2ajFMfWu1KHDirsA3nEJtzSJeTBCjkOKWmWI9rxrl6ZI2hdejOvHlytMZbMX%2FW15L5%2BpUroocApA6Fk7drWfA0M1unznb9FVOtEFYN4%2B7O0w4CLGG%2BGp2QkWbiZNfpX3UI%2BRKvkPw4XOMlsChQpfn%2Bf7EfK0VaxgIgB92cL70znH6kIqXtP%2BLDIPkR3N0Z8E0lns0SPgXvjm4XeWpi%2BYT8qE45whMMefBBR7yK%2FPExynQzzItSMYrWRw7FS%2B%2FftO6mQd3c7UOOznxd%2FySdZEfEmJcplVOcvIvvydbJQQLQqkdkMI2ap8IGOqUBMadjFpn%2FnFEmkCfVPjpbtxSRH1jYz%2B4oDKcqEGlZw4wnQ0GyAGXz8Fnntah6wHmic%2B7yhaJ7BiDRQ6apSlU2Oo1QZKgCfL5VtCzvRHGVK0s%2BLYSKHk3DPYPkZaQlh%2B3xS9iCuBUjfAqTzGDNCDfBdvqQKyODXCo5I668t0VV791wRxjyPMLPl3M8AY6ZtNNyNTSUpm5um%2Fw0uu1gWPCQgV1Khl9t&X-Amz-Signature=3777920b0173cac7b973da82f6e9453330511bb5d63f5a7359e1bd024118db3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
