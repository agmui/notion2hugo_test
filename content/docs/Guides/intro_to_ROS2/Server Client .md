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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMCYMB7J%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDBYkBbQ4jHN7n1nz5RobLLWwkXQdZTisbeCp96CXZhPgIgQJRad7AzU4FgjmwAZKWzdnfQqO3FakHJtE2wzH4zNIIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBt%2BBM89B%2FnQJo%2F31SrcA6OEvAi0gL%2F2LoqrIkuQWAXV%2Fs4yrzhM1I1owQrlMxdvyhzFuSpAUt3lg9cQLGoAjtr5sqntVZr5W9DQkEJQl4VazBajzA1LtG41m2B2b6wsoBBzsRgH8JEL9t%2BMTWz8h%2FSyUfTaNtg%2BeVhGouuuihC6ZZh3SViNITgzScJGcGYfPw7K8JieImawlUCOPGiC8JLI1CBaUqSiZWraAOgo7bIG9qQGKmMFvFNh3dVkO%2FTczw5gVFxkfa5aDhcSIyi0J%2F6BR%2BLD0LoddilQyvjviHjPF4xI1E1soJpVg4KEcVtPmoGS8nCCveuQZhPm1HypdZxAoPU4y47K0Kb44AhpR8r%2BiPyP0LKDr%2BstLE8gkitfuZOMT1EY9Ub1K434eMMRbso%2BfOya%2FZCgI2eHi7MNG3emEir26gR5U3YSjelQjry4%2Fnj1wRgKVnW%2BlY%2Fo1ihEz81poDIDIBKyDeqk9wglRXoFL8T51s9MY2luZbJxzXuIPz5E75v12Mlg1G5jLGDMB1qX0IJFZoo%2Bd64AqgDcKxysBpLMlCUlQdeNHjgxZZt3HOISnLJ9DwvuNje3DKsKn1KquxBnu6z9zBkh0Ioas70lNXeZ%2Bg2U6Cg3Kz12OQcL%2Bofj0KoWfKVotbAgMN3al8QGOqUB8LgsG%2B4q5vMPFu4eudDt9bwpfbU%2B3dhrHfHv4zdEy1mcP7nHdDCBrK7G0F94OZxJrYNplatIKmerYblbwcW%2FHJgrDQOfIO5hMEIj79iYSIGsRPf6VGiemkIG84uA0Sl7chwTmnUY6AyBTZhKAfPWSO4v1nwbNAfEWax4dKdefcMej6T7eBtmMW7bjusRSY0l7%2BUfBu%2FpdIUmo2raFagKMmAmaE8Y&X-Amz-Signature=bb498b40a5a2765893add31127ef1f9a6463819f5d94163eccf10a3d37193be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMCYMB7J%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDBYkBbQ4jHN7n1nz5RobLLWwkXQdZTisbeCp96CXZhPgIgQJRad7AzU4FgjmwAZKWzdnfQqO3FakHJtE2wzH4zNIIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBt%2BBM89B%2FnQJo%2F31SrcA6OEvAi0gL%2F2LoqrIkuQWAXV%2Fs4yrzhM1I1owQrlMxdvyhzFuSpAUt3lg9cQLGoAjtr5sqntVZr5W9DQkEJQl4VazBajzA1LtG41m2B2b6wsoBBzsRgH8JEL9t%2BMTWz8h%2FSyUfTaNtg%2BeVhGouuuihC6ZZh3SViNITgzScJGcGYfPw7K8JieImawlUCOPGiC8JLI1CBaUqSiZWraAOgo7bIG9qQGKmMFvFNh3dVkO%2FTczw5gVFxkfa5aDhcSIyi0J%2F6BR%2BLD0LoddilQyvjviHjPF4xI1E1soJpVg4KEcVtPmoGS8nCCveuQZhPm1HypdZxAoPU4y47K0Kb44AhpR8r%2BiPyP0LKDr%2BstLE8gkitfuZOMT1EY9Ub1K434eMMRbso%2BfOya%2FZCgI2eHi7MNG3emEir26gR5U3YSjelQjry4%2Fnj1wRgKVnW%2BlY%2Fo1ihEz81poDIDIBKyDeqk9wglRXoFL8T51s9MY2luZbJxzXuIPz5E75v12Mlg1G5jLGDMB1qX0IJFZoo%2Bd64AqgDcKxysBpLMlCUlQdeNHjgxZZt3HOISnLJ9DwvuNje3DKsKn1KquxBnu6z9zBkh0Ioas70lNXeZ%2Bg2U6Cg3Kz12OQcL%2Bofj0KoWfKVotbAgMN3al8QGOqUB8LgsG%2B4q5vMPFu4eudDt9bwpfbU%2B3dhrHfHv4zdEy1mcP7nHdDCBrK7G0F94OZxJrYNplatIKmerYblbwcW%2FHJgrDQOfIO5hMEIj79iYSIGsRPf6VGiemkIG84uA0Sl7chwTmnUY6AyBTZhKAfPWSO4v1nwbNAfEWax4dKdefcMej6T7eBtmMW7bjusRSY0l7%2BUfBu%2FpdIUmo2raFagKMmAmaE8Y&X-Amz-Signature=545c18296f5007168081ecfb36d90e8660e9371559750b12be5859800987a716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMCYMB7J%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDBYkBbQ4jHN7n1nz5RobLLWwkXQdZTisbeCp96CXZhPgIgQJRad7AzU4FgjmwAZKWzdnfQqO3FakHJtE2wzH4zNIIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBt%2BBM89B%2FnQJo%2F31SrcA6OEvAi0gL%2F2LoqrIkuQWAXV%2Fs4yrzhM1I1owQrlMxdvyhzFuSpAUt3lg9cQLGoAjtr5sqntVZr5W9DQkEJQl4VazBajzA1LtG41m2B2b6wsoBBzsRgH8JEL9t%2BMTWz8h%2FSyUfTaNtg%2BeVhGouuuihC6ZZh3SViNITgzScJGcGYfPw7K8JieImawlUCOPGiC8JLI1CBaUqSiZWraAOgo7bIG9qQGKmMFvFNh3dVkO%2FTczw5gVFxkfa5aDhcSIyi0J%2F6BR%2BLD0LoddilQyvjviHjPF4xI1E1soJpVg4KEcVtPmoGS8nCCveuQZhPm1HypdZxAoPU4y47K0Kb44AhpR8r%2BiPyP0LKDr%2BstLE8gkitfuZOMT1EY9Ub1K434eMMRbso%2BfOya%2FZCgI2eHi7MNG3emEir26gR5U3YSjelQjry4%2Fnj1wRgKVnW%2BlY%2Fo1ihEz81poDIDIBKyDeqk9wglRXoFL8T51s9MY2luZbJxzXuIPz5E75v12Mlg1G5jLGDMB1qX0IJFZoo%2Bd64AqgDcKxysBpLMlCUlQdeNHjgxZZt3HOISnLJ9DwvuNje3DKsKn1KquxBnu6z9zBkh0Ioas70lNXeZ%2Bg2U6Cg3Kz12OQcL%2Bofj0KoWfKVotbAgMN3al8QGOqUB8LgsG%2B4q5vMPFu4eudDt9bwpfbU%2B3dhrHfHv4zdEy1mcP7nHdDCBrK7G0F94OZxJrYNplatIKmerYblbwcW%2FHJgrDQOfIO5hMEIj79iYSIGsRPf6VGiemkIG84uA0Sl7chwTmnUY6AyBTZhKAfPWSO4v1nwbNAfEWax4dKdefcMej6T7eBtmMW7bjusRSY0l7%2BUfBu%2FpdIUmo2raFagKMmAmaE8Y&X-Amz-Signature=0edb61dc56023c0b001606b8a26be450f75f304c388eaf56a83fb3ffeccc7a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMCYMB7J%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDBYkBbQ4jHN7n1nz5RobLLWwkXQdZTisbeCp96CXZhPgIgQJRad7AzU4FgjmwAZKWzdnfQqO3FakHJtE2wzH4zNIIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBt%2BBM89B%2FnQJo%2F31SrcA6OEvAi0gL%2F2LoqrIkuQWAXV%2Fs4yrzhM1I1owQrlMxdvyhzFuSpAUt3lg9cQLGoAjtr5sqntVZr5W9DQkEJQl4VazBajzA1LtG41m2B2b6wsoBBzsRgH8JEL9t%2BMTWz8h%2FSyUfTaNtg%2BeVhGouuuihC6ZZh3SViNITgzScJGcGYfPw7K8JieImawlUCOPGiC8JLI1CBaUqSiZWraAOgo7bIG9qQGKmMFvFNh3dVkO%2FTczw5gVFxkfa5aDhcSIyi0J%2F6BR%2BLD0LoddilQyvjviHjPF4xI1E1soJpVg4KEcVtPmoGS8nCCveuQZhPm1HypdZxAoPU4y47K0Kb44AhpR8r%2BiPyP0LKDr%2BstLE8gkitfuZOMT1EY9Ub1K434eMMRbso%2BfOya%2FZCgI2eHi7MNG3emEir26gR5U3YSjelQjry4%2Fnj1wRgKVnW%2BlY%2Fo1ihEz81poDIDIBKyDeqk9wglRXoFL8T51s9MY2luZbJxzXuIPz5E75v12Mlg1G5jLGDMB1qX0IJFZoo%2Bd64AqgDcKxysBpLMlCUlQdeNHjgxZZt3HOISnLJ9DwvuNje3DKsKn1KquxBnu6z9zBkh0Ioas70lNXeZ%2Bg2U6Cg3Kz12OQcL%2Bofj0KoWfKVotbAgMN3al8QGOqUB8LgsG%2B4q5vMPFu4eudDt9bwpfbU%2B3dhrHfHv4zdEy1mcP7nHdDCBrK7G0F94OZxJrYNplatIKmerYblbwcW%2FHJgrDQOfIO5hMEIj79iYSIGsRPf6VGiemkIG84uA0Sl7chwTmnUY6AyBTZhKAfPWSO4v1nwbNAfEWax4dKdefcMej6T7eBtmMW7bjusRSY0l7%2BUfBu%2FpdIUmo2raFagKMmAmaE8Y&X-Amz-Signature=d0c0c29e23b04896d58f2079e3fef11ab0b84f99253cd12dd8bb79086f359956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMCYMB7J%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDBYkBbQ4jHN7n1nz5RobLLWwkXQdZTisbeCp96CXZhPgIgQJRad7AzU4FgjmwAZKWzdnfQqO3FakHJtE2wzH4zNIIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBt%2BBM89B%2FnQJo%2F31SrcA6OEvAi0gL%2F2LoqrIkuQWAXV%2Fs4yrzhM1I1owQrlMxdvyhzFuSpAUt3lg9cQLGoAjtr5sqntVZr5W9DQkEJQl4VazBajzA1LtG41m2B2b6wsoBBzsRgH8JEL9t%2BMTWz8h%2FSyUfTaNtg%2BeVhGouuuihC6ZZh3SViNITgzScJGcGYfPw7K8JieImawlUCOPGiC8JLI1CBaUqSiZWraAOgo7bIG9qQGKmMFvFNh3dVkO%2FTczw5gVFxkfa5aDhcSIyi0J%2F6BR%2BLD0LoddilQyvjviHjPF4xI1E1soJpVg4KEcVtPmoGS8nCCveuQZhPm1HypdZxAoPU4y47K0Kb44AhpR8r%2BiPyP0LKDr%2BstLE8gkitfuZOMT1EY9Ub1K434eMMRbso%2BfOya%2FZCgI2eHi7MNG3emEir26gR5U3YSjelQjry4%2Fnj1wRgKVnW%2BlY%2Fo1ihEz81poDIDIBKyDeqk9wglRXoFL8T51s9MY2luZbJxzXuIPz5E75v12Mlg1G5jLGDMB1qX0IJFZoo%2Bd64AqgDcKxysBpLMlCUlQdeNHjgxZZt3HOISnLJ9DwvuNje3DKsKn1KquxBnu6z9zBkh0Ioas70lNXeZ%2Bg2U6Cg3Kz12OQcL%2Bofj0KoWfKVotbAgMN3al8QGOqUB8LgsG%2B4q5vMPFu4eudDt9bwpfbU%2B3dhrHfHv4zdEy1mcP7nHdDCBrK7G0F94OZxJrYNplatIKmerYblbwcW%2FHJgrDQOfIO5hMEIj79iYSIGsRPf6VGiemkIG84uA0Sl7chwTmnUY6AyBTZhKAfPWSO4v1nwbNAfEWax4dKdefcMej6T7eBtmMW7bjusRSY0l7%2BUfBu%2FpdIUmo2raFagKMmAmaE8Y&X-Amz-Signature=1849e13c5ccd306d7d2e8350786101de2938fe9498606dd5e954cef6109c1b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
