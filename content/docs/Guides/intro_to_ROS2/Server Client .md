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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F3RKQCK%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQAtgjA1xGJGyTp3ayE5uJtufXSBwX7YsRx9VnZ%2BAsvAiEAjJ4TslHh%2FX9jcROiziRdirwnYjk03%2B8a7q0BFaoYKYoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeIw7k2b9s6%2FSFjpCrcA1mQAqY5fwB1ZK3ZTf6T%2BdzNIp3fAvFF4o4wwsiRQPqh8cDYfRxZ9tSG%2BbbBVgO0HJMCmaFV2Vu9b%2Bfpeiasak%2FH%2FLzH5qURMrbWQzowNY6HfUri5bTQ2a5tiU%2F8%2FpdsHkloRFHW81ks1DJLUaui7tTrJUNWyq9YW79VxN5kJjzuE%2B3idWMtspcV1qdjt9nn65BF15hK%2Fwl9VMV42y4%2FdK7TMfLwtwIIJxcCKOmg2DtzEgD3rKhP8kezNIp8vhhh%2F7j%2BFnSMajy6%2F6nxg83F10z45WUsuD2JdkQky1k%2F73E2WP498%2BrkfGw7lIO0AX0ZLPO5ssP8vMPwXOT7b9Fli0yseUufvgl7cRP2n%2BnEwRUGTfU9tg8glbT3Ce7QlAX28eFt1lT3%2Bv%2FZl%2BE%2BCkd6pYF5q3tBbEqRn4s7uwbYalSyqVwSWnWIGWbUKRtJOVtglhx9OeDMUJtvBXFzJhSnwcmGXeArDbtCINOchro7l%2FGqr92haP6TYNvALPBZsq7UpIqcmT9dFigxUblVsKYOLq98qtHJBaADIdAGknb6vJV6rNvFUG7sj%2FVIj5AIdfYqopXMHyhHA%2BVXIzpNJzBnR5nvyITZThVO4N4BOrUlmVFqPGAkInf6PJhbsDIVMMDuwcAGOqUBZCnJbNyqVur4jd1%2FlAMQZZlZAkgBm5ymKI4kzwJK9oagpOqVHziel6OOro%2BGrOerHPUn9MB6keZGokjFjwk73UjMuxvqANtE4m82Yq%2BAiy8IEoDT9LVpCNvHYfRmDcx9sZpu1jOFw0k9CYnJOuW5jteRtT3%2FIS8pSVLp1o%2F2KQK8DGWLZasRw9q7SW5H%2BBpAqfXk5doF2bjVWVimPUzEqnCPtP%2Bt&X-Amz-Signature=466f9e36265a577b84b6e42c62607d63e25a14ea4b44e87bf4532a390979270d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F3RKQCK%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQAtgjA1xGJGyTp3ayE5uJtufXSBwX7YsRx9VnZ%2BAsvAiEAjJ4TslHh%2FX9jcROiziRdirwnYjk03%2B8a7q0BFaoYKYoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeIw7k2b9s6%2FSFjpCrcA1mQAqY5fwB1ZK3ZTf6T%2BdzNIp3fAvFF4o4wwsiRQPqh8cDYfRxZ9tSG%2BbbBVgO0HJMCmaFV2Vu9b%2Bfpeiasak%2FH%2FLzH5qURMrbWQzowNY6HfUri5bTQ2a5tiU%2F8%2FpdsHkloRFHW81ks1DJLUaui7tTrJUNWyq9YW79VxN5kJjzuE%2B3idWMtspcV1qdjt9nn65BF15hK%2Fwl9VMV42y4%2FdK7TMfLwtwIIJxcCKOmg2DtzEgD3rKhP8kezNIp8vhhh%2F7j%2BFnSMajy6%2F6nxg83F10z45WUsuD2JdkQky1k%2F73E2WP498%2BrkfGw7lIO0AX0ZLPO5ssP8vMPwXOT7b9Fli0yseUufvgl7cRP2n%2BnEwRUGTfU9tg8glbT3Ce7QlAX28eFt1lT3%2Bv%2FZl%2BE%2BCkd6pYF5q3tBbEqRn4s7uwbYalSyqVwSWnWIGWbUKRtJOVtglhx9OeDMUJtvBXFzJhSnwcmGXeArDbtCINOchro7l%2FGqr92haP6TYNvALPBZsq7UpIqcmT9dFigxUblVsKYOLq98qtHJBaADIdAGknb6vJV6rNvFUG7sj%2FVIj5AIdfYqopXMHyhHA%2BVXIzpNJzBnR5nvyITZThVO4N4BOrUlmVFqPGAkInf6PJhbsDIVMMDuwcAGOqUBZCnJbNyqVur4jd1%2FlAMQZZlZAkgBm5ymKI4kzwJK9oagpOqVHziel6OOro%2BGrOerHPUn9MB6keZGokjFjwk73UjMuxvqANtE4m82Yq%2BAiy8IEoDT9LVpCNvHYfRmDcx9sZpu1jOFw0k9CYnJOuW5jteRtT3%2FIS8pSVLp1o%2F2KQK8DGWLZasRw9q7SW5H%2BBpAqfXk5doF2bjVWVimPUzEqnCPtP%2Bt&X-Amz-Signature=5595d2f6d0503fb16b8a4193b326a71066cee20bdb4e52bc6147619a363abdca&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F3RKQCK%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQAtgjA1xGJGyTp3ayE5uJtufXSBwX7YsRx9VnZ%2BAsvAiEAjJ4TslHh%2FX9jcROiziRdirwnYjk03%2B8a7q0BFaoYKYoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeIw7k2b9s6%2FSFjpCrcA1mQAqY5fwB1ZK3ZTf6T%2BdzNIp3fAvFF4o4wwsiRQPqh8cDYfRxZ9tSG%2BbbBVgO0HJMCmaFV2Vu9b%2Bfpeiasak%2FH%2FLzH5qURMrbWQzowNY6HfUri5bTQ2a5tiU%2F8%2FpdsHkloRFHW81ks1DJLUaui7tTrJUNWyq9YW79VxN5kJjzuE%2B3idWMtspcV1qdjt9nn65BF15hK%2Fwl9VMV42y4%2FdK7TMfLwtwIIJxcCKOmg2DtzEgD3rKhP8kezNIp8vhhh%2F7j%2BFnSMajy6%2F6nxg83F10z45WUsuD2JdkQky1k%2F73E2WP498%2BrkfGw7lIO0AX0ZLPO5ssP8vMPwXOT7b9Fli0yseUufvgl7cRP2n%2BnEwRUGTfU9tg8glbT3Ce7QlAX28eFt1lT3%2Bv%2FZl%2BE%2BCkd6pYF5q3tBbEqRn4s7uwbYalSyqVwSWnWIGWbUKRtJOVtglhx9OeDMUJtvBXFzJhSnwcmGXeArDbtCINOchro7l%2FGqr92haP6TYNvALPBZsq7UpIqcmT9dFigxUblVsKYOLq98qtHJBaADIdAGknb6vJV6rNvFUG7sj%2FVIj5AIdfYqopXMHyhHA%2BVXIzpNJzBnR5nvyITZThVO4N4BOrUlmVFqPGAkInf6PJhbsDIVMMDuwcAGOqUBZCnJbNyqVur4jd1%2FlAMQZZlZAkgBm5ymKI4kzwJK9oagpOqVHziel6OOro%2BGrOerHPUn9MB6keZGokjFjwk73UjMuxvqANtE4m82Yq%2BAiy8IEoDT9LVpCNvHYfRmDcx9sZpu1jOFw0k9CYnJOuW5jteRtT3%2FIS8pSVLp1o%2F2KQK8DGWLZasRw9q7SW5H%2BBpAqfXk5doF2bjVWVimPUzEqnCPtP%2Bt&X-Amz-Signature=f697bd342091c99fa60e0905e42d1568e747f18bcae62cf50e497c3a5e9093d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F3RKQCK%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQAtgjA1xGJGyTp3ayE5uJtufXSBwX7YsRx9VnZ%2BAsvAiEAjJ4TslHh%2FX9jcROiziRdirwnYjk03%2B8a7q0BFaoYKYoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeIw7k2b9s6%2FSFjpCrcA1mQAqY5fwB1ZK3ZTf6T%2BdzNIp3fAvFF4o4wwsiRQPqh8cDYfRxZ9tSG%2BbbBVgO0HJMCmaFV2Vu9b%2Bfpeiasak%2FH%2FLzH5qURMrbWQzowNY6HfUri5bTQ2a5tiU%2F8%2FpdsHkloRFHW81ks1DJLUaui7tTrJUNWyq9YW79VxN5kJjzuE%2B3idWMtspcV1qdjt9nn65BF15hK%2Fwl9VMV42y4%2FdK7TMfLwtwIIJxcCKOmg2DtzEgD3rKhP8kezNIp8vhhh%2F7j%2BFnSMajy6%2F6nxg83F10z45WUsuD2JdkQky1k%2F73E2WP498%2BrkfGw7lIO0AX0ZLPO5ssP8vMPwXOT7b9Fli0yseUufvgl7cRP2n%2BnEwRUGTfU9tg8glbT3Ce7QlAX28eFt1lT3%2Bv%2FZl%2BE%2BCkd6pYF5q3tBbEqRn4s7uwbYalSyqVwSWnWIGWbUKRtJOVtglhx9OeDMUJtvBXFzJhSnwcmGXeArDbtCINOchro7l%2FGqr92haP6TYNvALPBZsq7UpIqcmT9dFigxUblVsKYOLq98qtHJBaADIdAGknb6vJV6rNvFUG7sj%2FVIj5AIdfYqopXMHyhHA%2BVXIzpNJzBnR5nvyITZThVO4N4BOrUlmVFqPGAkInf6PJhbsDIVMMDuwcAGOqUBZCnJbNyqVur4jd1%2FlAMQZZlZAkgBm5ymKI4kzwJK9oagpOqVHziel6OOro%2BGrOerHPUn9MB6keZGokjFjwk73UjMuxvqANtE4m82Yq%2BAiy8IEoDT9LVpCNvHYfRmDcx9sZpu1jOFw0k9CYnJOuW5jteRtT3%2FIS8pSVLp1o%2F2KQK8DGWLZasRw9q7SW5H%2BBpAqfXk5doF2bjVWVimPUzEqnCPtP%2Bt&X-Amz-Signature=fa2ae48528df18aa29825923ae185c5914f8d9b5fe59a702a514f0d00da134ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F3RKQCK%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQAtgjA1xGJGyTp3ayE5uJtufXSBwX7YsRx9VnZ%2BAsvAiEAjJ4TslHh%2FX9jcROiziRdirwnYjk03%2B8a7q0BFaoYKYoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeIw7k2b9s6%2FSFjpCrcA1mQAqY5fwB1ZK3ZTf6T%2BdzNIp3fAvFF4o4wwsiRQPqh8cDYfRxZ9tSG%2BbbBVgO0HJMCmaFV2Vu9b%2Bfpeiasak%2FH%2FLzH5qURMrbWQzowNY6HfUri5bTQ2a5tiU%2F8%2FpdsHkloRFHW81ks1DJLUaui7tTrJUNWyq9YW79VxN5kJjzuE%2B3idWMtspcV1qdjt9nn65BF15hK%2Fwl9VMV42y4%2FdK7TMfLwtwIIJxcCKOmg2DtzEgD3rKhP8kezNIp8vhhh%2F7j%2BFnSMajy6%2F6nxg83F10z45WUsuD2JdkQky1k%2F73E2WP498%2BrkfGw7lIO0AX0ZLPO5ssP8vMPwXOT7b9Fli0yseUufvgl7cRP2n%2BnEwRUGTfU9tg8glbT3Ce7QlAX28eFt1lT3%2Bv%2FZl%2BE%2BCkd6pYF5q3tBbEqRn4s7uwbYalSyqVwSWnWIGWbUKRtJOVtglhx9OeDMUJtvBXFzJhSnwcmGXeArDbtCINOchro7l%2FGqr92haP6TYNvALPBZsq7UpIqcmT9dFigxUblVsKYOLq98qtHJBaADIdAGknb6vJV6rNvFUG7sj%2FVIj5AIdfYqopXMHyhHA%2BVXIzpNJzBnR5nvyITZThVO4N4BOrUlmVFqPGAkInf6PJhbsDIVMMDuwcAGOqUBZCnJbNyqVur4jd1%2FlAMQZZlZAkgBm5ymKI4kzwJK9oagpOqVHziel6OOro%2BGrOerHPUn9MB6keZGokjFjwk73UjMuxvqANtE4m82Yq%2BAiy8IEoDT9LVpCNvHYfRmDcx9sZpu1jOFw0k9CYnJOuW5jteRtT3%2FIS8pSVLp1o%2F2KQK8DGWLZasRw9q7SW5H%2BBpAqfXk5doF2bjVWVimPUzEqnCPtP%2Bt&X-Amz-Signature=24d0d85c6990eb99f623295debbca3143d31458576d49a4f74f05c5c9e9f4616&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
