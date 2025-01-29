---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFK76SVB%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD3mZmmKd%2FzlL%2FGV9NnPtR%2FfM93mVfN9JQfav7ko9gAAiAtjqsqj5FKmzuEboI3ApLZcgx1QulhyjGvD3f5UEIp1CqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3x3FcZ9bxwXc%2FwVAKtwDYLy2d9X7isT62C7UO5iRjg7bEuBZOTZNhGpm3upiIUOhbCtUNRwMFwSNeBauCqDXu7r60O3J7vDnBg4ScWj1fRzx8O0yojx04lTn01J42X4MOLBYAnmJSPFH%2FFuoUJo%2FhW03SmQftmPVpVK%2BR0H7mZUmp5giuEZ0Cw3rv8UUnPF0HqpPHvWTzS%2FSTGJzacQVAVI8kMacRSCTroIhDlufgcC9FPh2j5IPMfVPh8sjRxAAcP3DMKK6XGjEMCxLw%2BIHcCp5stitfTACJURWUak9rzDHn9co5kDTsWPwGLelXSn4zNtwZk5FiJk%2FvuuifiSS2ldrRp4FomIZgP%2B7VplzND8k4TFqMyQSsSj%2BK7ydnElOkAe90LOjOKL3ec5rDZmHsXxDwaHTHSJQe%2FnPtC4c04deBQ46UEv16lbBhraH9YmBX%2BHhoBkI1WGWaUClX7cYjE7k0iKuFQbXM07n5i494Dzcd7Ju5TKhIYV8q12FZBG8HTRmUGvJdWJZ74u5xR9KQny9n54hjTVgZ5xq3fbFTsjKggiMHv3AVqA0v7gUj04JkSiUHyCzuICRrepfVfQZMlsP0EHg%2Fqq9zQ14iZSBGRJpdnljIBiLgi5P9%2FdAP%2BS184RGqY8Un905mx0w%2Bf%2FnvAY6pgGx2Cf5fI%2FnnV5wTmb%2BFf7JjYPn7swRHy%2FZ1odyZLx3nn5h0QTbfnVmPj6SjUN22FOUH7qgNIrz4GlW7l%2BpljESjmVoZ%2Bf%2BGkIZikHqe7Npz%2FZ9Ts0rI3IzmCruRNvUWQvOOYcgkE94e54LYoeElcHLVucuvMcmXBivz%2FK5U06eWKdQDSVg6ZLE9DNJE5sEIA4Ew39095CfcgMLLjsQylHdO8qrpoby&X-Amz-Signature=0a0cc9d4f811674f15e3dbec36ad7042f31833baa633cfb5c47692515265c056&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFK76SVB%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD3mZmmKd%2FzlL%2FGV9NnPtR%2FfM93mVfN9JQfav7ko9gAAiAtjqsqj5FKmzuEboI3ApLZcgx1QulhyjGvD3f5UEIp1CqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3x3FcZ9bxwXc%2FwVAKtwDYLy2d9X7isT62C7UO5iRjg7bEuBZOTZNhGpm3upiIUOhbCtUNRwMFwSNeBauCqDXu7r60O3J7vDnBg4ScWj1fRzx8O0yojx04lTn01J42X4MOLBYAnmJSPFH%2FFuoUJo%2FhW03SmQftmPVpVK%2BR0H7mZUmp5giuEZ0Cw3rv8UUnPF0HqpPHvWTzS%2FSTGJzacQVAVI8kMacRSCTroIhDlufgcC9FPh2j5IPMfVPh8sjRxAAcP3DMKK6XGjEMCxLw%2BIHcCp5stitfTACJURWUak9rzDHn9co5kDTsWPwGLelXSn4zNtwZk5FiJk%2FvuuifiSS2ldrRp4FomIZgP%2B7VplzND8k4TFqMyQSsSj%2BK7ydnElOkAe90LOjOKL3ec5rDZmHsXxDwaHTHSJQe%2FnPtC4c04deBQ46UEv16lbBhraH9YmBX%2BHhoBkI1WGWaUClX7cYjE7k0iKuFQbXM07n5i494Dzcd7Ju5TKhIYV8q12FZBG8HTRmUGvJdWJZ74u5xR9KQny9n54hjTVgZ5xq3fbFTsjKggiMHv3AVqA0v7gUj04JkSiUHyCzuICRrepfVfQZMlsP0EHg%2Fqq9zQ14iZSBGRJpdnljIBiLgi5P9%2FdAP%2BS184RGqY8Un905mx0w%2Bf%2FnvAY6pgGx2Cf5fI%2FnnV5wTmb%2BFf7JjYPn7swRHy%2FZ1odyZLx3nn5h0QTbfnVmPj6SjUN22FOUH7qgNIrz4GlW7l%2BpljESjmVoZ%2Bf%2BGkIZikHqe7Npz%2FZ9Ts0rI3IzmCruRNvUWQvOOYcgkE94e54LYoeElcHLVucuvMcmXBivz%2FK5U06eWKdQDSVg6ZLE9DNJE5sEIA4Ew39095CfcgMLLjsQylHdO8qrpoby&X-Amz-Signature=f86c127160118646c64d992723e79a7bf45bc97a4dcd0c6d996fe091f146846d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFK76SVB%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD3mZmmKd%2FzlL%2FGV9NnPtR%2FfM93mVfN9JQfav7ko9gAAiAtjqsqj5FKmzuEboI3ApLZcgx1QulhyjGvD3f5UEIp1CqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3x3FcZ9bxwXc%2FwVAKtwDYLy2d9X7isT62C7UO5iRjg7bEuBZOTZNhGpm3upiIUOhbCtUNRwMFwSNeBauCqDXu7r60O3J7vDnBg4ScWj1fRzx8O0yojx04lTn01J42X4MOLBYAnmJSPFH%2FFuoUJo%2FhW03SmQftmPVpVK%2BR0H7mZUmp5giuEZ0Cw3rv8UUnPF0HqpPHvWTzS%2FSTGJzacQVAVI8kMacRSCTroIhDlufgcC9FPh2j5IPMfVPh8sjRxAAcP3DMKK6XGjEMCxLw%2BIHcCp5stitfTACJURWUak9rzDHn9co5kDTsWPwGLelXSn4zNtwZk5FiJk%2FvuuifiSS2ldrRp4FomIZgP%2B7VplzND8k4TFqMyQSsSj%2BK7ydnElOkAe90LOjOKL3ec5rDZmHsXxDwaHTHSJQe%2FnPtC4c04deBQ46UEv16lbBhraH9YmBX%2BHhoBkI1WGWaUClX7cYjE7k0iKuFQbXM07n5i494Dzcd7Ju5TKhIYV8q12FZBG8HTRmUGvJdWJZ74u5xR9KQny9n54hjTVgZ5xq3fbFTsjKggiMHv3AVqA0v7gUj04JkSiUHyCzuICRrepfVfQZMlsP0EHg%2Fqq9zQ14iZSBGRJpdnljIBiLgi5P9%2FdAP%2BS184RGqY8Un905mx0w%2Bf%2FnvAY6pgGx2Cf5fI%2FnnV5wTmb%2BFf7JjYPn7swRHy%2FZ1odyZLx3nn5h0QTbfnVmPj6SjUN22FOUH7qgNIrz4GlW7l%2BpljESjmVoZ%2Bf%2BGkIZikHqe7Npz%2FZ9Ts0rI3IzmCruRNvUWQvOOYcgkE94e54LYoeElcHLVucuvMcmXBivz%2FK5U06eWKdQDSVg6ZLE9DNJE5sEIA4Ew39095CfcgMLLjsQylHdO8qrpoby&X-Amz-Signature=b08cb83289ecac4351733f71a990ff9606f50bc10c70ef6207fa797d8f99d468&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFK76SVB%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD3mZmmKd%2FzlL%2FGV9NnPtR%2FfM93mVfN9JQfav7ko9gAAiAtjqsqj5FKmzuEboI3ApLZcgx1QulhyjGvD3f5UEIp1CqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3x3FcZ9bxwXc%2FwVAKtwDYLy2d9X7isT62C7UO5iRjg7bEuBZOTZNhGpm3upiIUOhbCtUNRwMFwSNeBauCqDXu7r60O3J7vDnBg4ScWj1fRzx8O0yojx04lTn01J42X4MOLBYAnmJSPFH%2FFuoUJo%2FhW03SmQftmPVpVK%2BR0H7mZUmp5giuEZ0Cw3rv8UUnPF0HqpPHvWTzS%2FSTGJzacQVAVI8kMacRSCTroIhDlufgcC9FPh2j5IPMfVPh8sjRxAAcP3DMKK6XGjEMCxLw%2BIHcCp5stitfTACJURWUak9rzDHn9co5kDTsWPwGLelXSn4zNtwZk5FiJk%2FvuuifiSS2ldrRp4FomIZgP%2B7VplzND8k4TFqMyQSsSj%2BK7ydnElOkAe90LOjOKL3ec5rDZmHsXxDwaHTHSJQe%2FnPtC4c04deBQ46UEv16lbBhraH9YmBX%2BHhoBkI1WGWaUClX7cYjE7k0iKuFQbXM07n5i494Dzcd7Ju5TKhIYV8q12FZBG8HTRmUGvJdWJZ74u5xR9KQny9n54hjTVgZ5xq3fbFTsjKggiMHv3AVqA0v7gUj04JkSiUHyCzuICRrepfVfQZMlsP0EHg%2Fqq9zQ14iZSBGRJpdnljIBiLgi5P9%2FdAP%2BS184RGqY8Un905mx0w%2Bf%2FnvAY6pgGx2Cf5fI%2FnnV5wTmb%2BFf7JjYPn7swRHy%2FZ1odyZLx3nn5h0QTbfnVmPj6SjUN22FOUH7qgNIrz4GlW7l%2BpljESjmVoZ%2Bf%2BGkIZikHqe7Npz%2FZ9Ts0rI3IzmCruRNvUWQvOOYcgkE94e54LYoeElcHLVucuvMcmXBivz%2FK5U06eWKdQDSVg6ZLE9DNJE5sEIA4Ew39095CfcgMLLjsQylHdO8qrpoby&X-Amz-Signature=34d287260b4a1c12487a7bf179cee8809e88cb36e4a05a74e1b9149126eebba3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFK76SVB%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD3mZmmKd%2FzlL%2FGV9NnPtR%2FfM93mVfN9JQfav7ko9gAAiAtjqsqj5FKmzuEboI3ApLZcgx1QulhyjGvD3f5UEIp1CqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3x3FcZ9bxwXc%2FwVAKtwDYLy2d9X7isT62C7UO5iRjg7bEuBZOTZNhGpm3upiIUOhbCtUNRwMFwSNeBauCqDXu7r60O3J7vDnBg4ScWj1fRzx8O0yojx04lTn01J42X4MOLBYAnmJSPFH%2FFuoUJo%2FhW03SmQftmPVpVK%2BR0H7mZUmp5giuEZ0Cw3rv8UUnPF0HqpPHvWTzS%2FSTGJzacQVAVI8kMacRSCTroIhDlufgcC9FPh2j5IPMfVPh8sjRxAAcP3DMKK6XGjEMCxLw%2BIHcCp5stitfTACJURWUak9rzDHn9co5kDTsWPwGLelXSn4zNtwZk5FiJk%2FvuuifiSS2ldrRp4FomIZgP%2B7VplzND8k4TFqMyQSsSj%2BK7ydnElOkAe90LOjOKL3ec5rDZmHsXxDwaHTHSJQe%2FnPtC4c04deBQ46UEv16lbBhraH9YmBX%2BHhoBkI1WGWaUClX7cYjE7k0iKuFQbXM07n5i494Dzcd7Ju5TKhIYV8q12FZBG8HTRmUGvJdWJZ74u5xR9KQny9n54hjTVgZ5xq3fbFTsjKggiMHv3AVqA0v7gUj04JkSiUHyCzuICRrepfVfQZMlsP0EHg%2Fqq9zQ14iZSBGRJpdnljIBiLgi5P9%2FdAP%2BS184RGqY8Un905mx0w%2Bf%2FnvAY6pgGx2Cf5fI%2FnnV5wTmb%2BFf7JjYPn7swRHy%2FZ1odyZLx3nn5h0QTbfnVmPj6SjUN22FOUH7qgNIrz4GlW7l%2BpljESjmVoZ%2Bf%2BGkIZikHqe7Npz%2FZ9Ts0rI3IzmCruRNvUWQvOOYcgkE94e54LYoeElcHLVucuvMcmXBivz%2FK5U06eWKdQDSVg6ZLE9DNJE5sEIA4Ew39095CfcgMLLjsQylHdO8qrpoby&X-Amz-Signature=9d8fee38d881062c6f81deb02f3246f61f78413ce7bdb80739b68e83577b2fff&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
