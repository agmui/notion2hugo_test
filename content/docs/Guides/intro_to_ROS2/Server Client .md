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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IQFCJK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCQBieDpUyvaj%2F0wBH61ji4pF8X8ixKT1xbo1ScKOrZbwIgCjVZAQbhVeaXCJ9Il4E%2FLM4k1YlUAzp2yqrW72MQIGIqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmTzpNeGj%2FUPuQxryrcAyuf3zX0zmeBDVYLyLyQHnoOREuGe6vRUUZ5AgdbfDjcs%2F0CyDB9dWQGUIxSy6j5VcW4oBQgBNY3BTOUdAziwsLpSzR14RLoQCO%2BdMciYAqQGfSCiPE8Acmf8Zuyv4q6%2Fq8Z4%2F7QwyDIaop0z3Cr5TuUMBujDbgZ%2B5pG3gFRozD1WlQtRYdl64nD1g0z5PgO8xsCztzrzEd%2F6eVeI%2FiTcO%2FFvoIu0Jw3mXgcCnerMTSybv0bmoTGgLKciEoDI%2BatiU%2BNC5%2Fg2zrZ%2BIqSIOtZGT2qfik%2BMBS5mjUh%2BgjitJ7YIz0VEjCZINlM%2F%2Fcizij5n8CSfZvwRmX8fNtyvygducz9L5w7HSb0bRRp%2B7TnzpgsxG3yUsDuPe364I8pz0MSBRdf3BOwt9AtU2ufGJcvru9h0lflo4zkaly4fyecIdJdS7F6%2FNmu%2F83BR4xM083SLXQaAphCDjE8MCXbKOooTIZigPbolDV4WeE8oKy1sc94rBy67ngdHD0yIV%2F0ZaTRmIMqxxDuHyCMnCvhOSrVuqbiDekdX0I30Qv3qvvJGgVUAODFMULg0ST5yscdkdUE1i4wc4eu7oEZnQ0S42B7dP7HBgjD8Ost9swPNhtVsA%2BdyVxb6p0dq%2FZPg9e0MNGl8L4GOqUBfK7jFO7Hvqb577hYNTrDCuELgJKhcJtXr3Ct2vgb1vLjvat0%2FM31u0TkAnCibByLv0oftMjIxQQyAkFPnPbU1vrsaM4fnj1FdIgaL2V24sK8%2BBMUMlubP8uEQh5It7cI%2F%2FcL8119Az0C5AEBG8rRThtfkLvGPqMz1oe%2B4Io%2FHsxYXofOWEkDJHZWicIXjOFV2XihIaM2LPNgYkzADiDEWTaUZP6h&X-Amz-Signature=24af20c9d4bed1ce3bc48b7083aa49a9eaa5a59ea1db549895036c96416453f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IQFCJK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCQBieDpUyvaj%2F0wBH61ji4pF8X8ixKT1xbo1ScKOrZbwIgCjVZAQbhVeaXCJ9Il4E%2FLM4k1YlUAzp2yqrW72MQIGIqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmTzpNeGj%2FUPuQxryrcAyuf3zX0zmeBDVYLyLyQHnoOREuGe6vRUUZ5AgdbfDjcs%2F0CyDB9dWQGUIxSy6j5VcW4oBQgBNY3BTOUdAziwsLpSzR14RLoQCO%2BdMciYAqQGfSCiPE8Acmf8Zuyv4q6%2Fq8Z4%2F7QwyDIaop0z3Cr5TuUMBujDbgZ%2B5pG3gFRozD1WlQtRYdl64nD1g0z5PgO8xsCztzrzEd%2F6eVeI%2FiTcO%2FFvoIu0Jw3mXgcCnerMTSybv0bmoTGgLKciEoDI%2BatiU%2BNC5%2Fg2zrZ%2BIqSIOtZGT2qfik%2BMBS5mjUh%2BgjitJ7YIz0VEjCZINlM%2F%2Fcizij5n8CSfZvwRmX8fNtyvygducz9L5w7HSb0bRRp%2B7TnzpgsxG3yUsDuPe364I8pz0MSBRdf3BOwt9AtU2ufGJcvru9h0lflo4zkaly4fyecIdJdS7F6%2FNmu%2F83BR4xM083SLXQaAphCDjE8MCXbKOooTIZigPbolDV4WeE8oKy1sc94rBy67ngdHD0yIV%2F0ZaTRmIMqxxDuHyCMnCvhOSrVuqbiDekdX0I30Qv3qvvJGgVUAODFMULg0ST5yscdkdUE1i4wc4eu7oEZnQ0S42B7dP7HBgjD8Ost9swPNhtVsA%2BdyVxb6p0dq%2FZPg9e0MNGl8L4GOqUBfK7jFO7Hvqb577hYNTrDCuELgJKhcJtXr3Ct2vgb1vLjvat0%2FM31u0TkAnCibByLv0oftMjIxQQyAkFPnPbU1vrsaM4fnj1FdIgaL2V24sK8%2BBMUMlubP8uEQh5It7cI%2F%2FcL8119Az0C5AEBG8rRThtfkLvGPqMz1oe%2B4Io%2FHsxYXofOWEkDJHZWicIXjOFV2XihIaM2LPNgYkzADiDEWTaUZP6h&X-Amz-Signature=a6ec03f933b8c8c7d10b3581c4dee81826d6696e6ebd094645e594ad5e4350f2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IQFCJK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCQBieDpUyvaj%2F0wBH61ji4pF8X8ixKT1xbo1ScKOrZbwIgCjVZAQbhVeaXCJ9Il4E%2FLM4k1YlUAzp2yqrW72MQIGIqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmTzpNeGj%2FUPuQxryrcAyuf3zX0zmeBDVYLyLyQHnoOREuGe6vRUUZ5AgdbfDjcs%2F0CyDB9dWQGUIxSy6j5VcW4oBQgBNY3BTOUdAziwsLpSzR14RLoQCO%2BdMciYAqQGfSCiPE8Acmf8Zuyv4q6%2Fq8Z4%2F7QwyDIaop0z3Cr5TuUMBujDbgZ%2B5pG3gFRozD1WlQtRYdl64nD1g0z5PgO8xsCztzrzEd%2F6eVeI%2FiTcO%2FFvoIu0Jw3mXgcCnerMTSybv0bmoTGgLKciEoDI%2BatiU%2BNC5%2Fg2zrZ%2BIqSIOtZGT2qfik%2BMBS5mjUh%2BgjitJ7YIz0VEjCZINlM%2F%2Fcizij5n8CSfZvwRmX8fNtyvygducz9L5w7HSb0bRRp%2B7TnzpgsxG3yUsDuPe364I8pz0MSBRdf3BOwt9AtU2ufGJcvru9h0lflo4zkaly4fyecIdJdS7F6%2FNmu%2F83BR4xM083SLXQaAphCDjE8MCXbKOooTIZigPbolDV4WeE8oKy1sc94rBy67ngdHD0yIV%2F0ZaTRmIMqxxDuHyCMnCvhOSrVuqbiDekdX0I30Qv3qvvJGgVUAODFMULg0ST5yscdkdUE1i4wc4eu7oEZnQ0S42B7dP7HBgjD8Ost9swPNhtVsA%2BdyVxb6p0dq%2FZPg9e0MNGl8L4GOqUBfK7jFO7Hvqb577hYNTrDCuELgJKhcJtXr3Ct2vgb1vLjvat0%2FM31u0TkAnCibByLv0oftMjIxQQyAkFPnPbU1vrsaM4fnj1FdIgaL2V24sK8%2BBMUMlubP8uEQh5It7cI%2F%2FcL8119Az0C5AEBG8rRThtfkLvGPqMz1oe%2B4Io%2FHsxYXofOWEkDJHZWicIXjOFV2XihIaM2LPNgYkzADiDEWTaUZP6h&X-Amz-Signature=a5d086eeae637e6b76eabe78f691d3328383fffe28021173cb100bb8a94beb21&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IQFCJK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCQBieDpUyvaj%2F0wBH61ji4pF8X8ixKT1xbo1ScKOrZbwIgCjVZAQbhVeaXCJ9Il4E%2FLM4k1YlUAzp2yqrW72MQIGIqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmTzpNeGj%2FUPuQxryrcAyuf3zX0zmeBDVYLyLyQHnoOREuGe6vRUUZ5AgdbfDjcs%2F0CyDB9dWQGUIxSy6j5VcW4oBQgBNY3BTOUdAziwsLpSzR14RLoQCO%2BdMciYAqQGfSCiPE8Acmf8Zuyv4q6%2Fq8Z4%2F7QwyDIaop0z3Cr5TuUMBujDbgZ%2B5pG3gFRozD1WlQtRYdl64nD1g0z5PgO8xsCztzrzEd%2F6eVeI%2FiTcO%2FFvoIu0Jw3mXgcCnerMTSybv0bmoTGgLKciEoDI%2BatiU%2BNC5%2Fg2zrZ%2BIqSIOtZGT2qfik%2BMBS5mjUh%2BgjitJ7YIz0VEjCZINlM%2F%2Fcizij5n8CSfZvwRmX8fNtyvygducz9L5w7HSb0bRRp%2B7TnzpgsxG3yUsDuPe364I8pz0MSBRdf3BOwt9AtU2ufGJcvru9h0lflo4zkaly4fyecIdJdS7F6%2FNmu%2F83BR4xM083SLXQaAphCDjE8MCXbKOooTIZigPbolDV4WeE8oKy1sc94rBy67ngdHD0yIV%2F0ZaTRmIMqxxDuHyCMnCvhOSrVuqbiDekdX0I30Qv3qvvJGgVUAODFMULg0ST5yscdkdUE1i4wc4eu7oEZnQ0S42B7dP7HBgjD8Ost9swPNhtVsA%2BdyVxb6p0dq%2FZPg9e0MNGl8L4GOqUBfK7jFO7Hvqb577hYNTrDCuELgJKhcJtXr3Ct2vgb1vLjvat0%2FM31u0TkAnCibByLv0oftMjIxQQyAkFPnPbU1vrsaM4fnj1FdIgaL2V24sK8%2BBMUMlubP8uEQh5It7cI%2F%2FcL8119Az0C5AEBG8rRThtfkLvGPqMz1oe%2B4Io%2FHsxYXofOWEkDJHZWicIXjOFV2XihIaM2LPNgYkzADiDEWTaUZP6h&X-Amz-Signature=42590386f682ff652506984973c88dfa6fd5722723f21073969c659dbd64c14d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IQFCJK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCQBieDpUyvaj%2F0wBH61ji4pF8X8ixKT1xbo1ScKOrZbwIgCjVZAQbhVeaXCJ9Il4E%2FLM4k1YlUAzp2yqrW72MQIGIqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmTzpNeGj%2FUPuQxryrcAyuf3zX0zmeBDVYLyLyQHnoOREuGe6vRUUZ5AgdbfDjcs%2F0CyDB9dWQGUIxSy6j5VcW4oBQgBNY3BTOUdAziwsLpSzR14RLoQCO%2BdMciYAqQGfSCiPE8Acmf8Zuyv4q6%2Fq8Z4%2F7QwyDIaop0z3Cr5TuUMBujDbgZ%2B5pG3gFRozD1WlQtRYdl64nD1g0z5PgO8xsCztzrzEd%2F6eVeI%2FiTcO%2FFvoIu0Jw3mXgcCnerMTSybv0bmoTGgLKciEoDI%2BatiU%2BNC5%2Fg2zrZ%2BIqSIOtZGT2qfik%2BMBS5mjUh%2BgjitJ7YIz0VEjCZINlM%2F%2Fcizij5n8CSfZvwRmX8fNtyvygducz9L5w7HSb0bRRp%2B7TnzpgsxG3yUsDuPe364I8pz0MSBRdf3BOwt9AtU2ufGJcvru9h0lflo4zkaly4fyecIdJdS7F6%2FNmu%2F83BR4xM083SLXQaAphCDjE8MCXbKOooTIZigPbolDV4WeE8oKy1sc94rBy67ngdHD0yIV%2F0ZaTRmIMqxxDuHyCMnCvhOSrVuqbiDekdX0I30Qv3qvvJGgVUAODFMULg0ST5yscdkdUE1i4wc4eu7oEZnQ0S42B7dP7HBgjD8Ost9swPNhtVsA%2BdyVxb6p0dq%2FZPg9e0MNGl8L4GOqUBfK7jFO7Hvqb577hYNTrDCuELgJKhcJtXr3Ct2vgb1vLjvat0%2FM31u0TkAnCibByLv0oftMjIxQQyAkFPnPbU1vrsaM4fnj1FdIgaL2V24sK8%2BBMUMlubP8uEQh5It7cI%2F%2FcL8119Az0C5AEBG8rRThtfkLvGPqMz1oe%2B4Io%2FHsxYXofOWEkDJHZWicIXjOFV2XihIaM2LPNgYkzADiDEWTaUZP6h&X-Amz-Signature=6e93cc6666ffc0c1c6e93c901d97e9240a930634991eab9f526723f2d4713f66&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
