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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DAEFYF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC12aka5ChIzTQUBOw0%2Fvc45X013zMZT34yX%2Bgqkh9gbgIgYtKljNMK7RpdiAEPpRNmZwFvZidlPALJWiav%2B0xvFhkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq5%2BOfAMsN92LlDLCrcAz5XQIlkHTfSbN37AEbmlCQ7TFcliUS7jrrGZrodxM0hKu%2Fb9EQtcC8Y%2FZ%2FvD05RgeO9VXZ34aoeO%2BRlICqGbYhzWvWipZIbbq8gqS2S1xFHxAkMXwsAZK5DsQ41Q7LP6oQXSsuCF1AzFa2vZk3KQiUTxFmiwpmYHiZdPTZ8Nt6ZP4c7r4zM1B4mTYsprNWpC1XGDwurUsiqB6ctBAQhPhzG%2BfRa%2FwgeA0Cx3pX8fHjNThVxPsYdvRK0%2FjQYDSIzG3DRbKKl2BVDjgktnUPIaCOKcdcjSaCxWjT8jCPik232VOENp0xqRA0c7QEL%2BRhjmZsCPOwVmt7wSkk1LurOTlY0OxBtYSwojc4AQYEVZORkg4b6B0RGd1skMAYlDYSEn5QazLmAxd3N3HeWwFI%2F82Tpi0rWnyWZJWXEtwyi%2By396yn6eQnuv8tmjyGc2QI14S8LjEowMTkJltHOLt5WTj524sjvPgCpEzTSyMLzHMN2BjCZcDMQ4SR0Z71lLzlyFDYTkry6UAqyXcAjlig5xMvV4g9iBgwzma493bsoyWE67it6tuK%2FlnsI3vUnlas3zn2iRNqz0esban%2FFbKpsmmQ0YMOks3B6OGNON0hQnwSGhNVr9lx9tH11qbktMKjaw74GOqUBx%2FNgyX9ceCgMspIQSxwBQpEPQCcUzePH%2BRSuGxgGTVm5cyrmehA%2F9PXBsDbhzwOfhs951GvmvOlMvuoItJA6Tj%2BTa9cW0x08fK3T4qMaNEHiiGDf8zEoIAy5qcl2P7D0RiBp3Jgbxm4rxwl2uWF8Zh7yi52Nmc5BYGW0%2FN6wsTTBx%2BOFYY2Oh8dj8QXfA2g%2BwKJNYxWwNq0YPZ%2Bp1NgCklRG%2BwQ4&X-Amz-Signature=c2618be42f040777ebef24fb863384f1b4eea5dacc7e47b3b577e0c5de250bab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DAEFYF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC12aka5ChIzTQUBOw0%2Fvc45X013zMZT34yX%2Bgqkh9gbgIgYtKljNMK7RpdiAEPpRNmZwFvZidlPALJWiav%2B0xvFhkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq5%2BOfAMsN92LlDLCrcAz5XQIlkHTfSbN37AEbmlCQ7TFcliUS7jrrGZrodxM0hKu%2Fb9EQtcC8Y%2FZ%2FvD05RgeO9VXZ34aoeO%2BRlICqGbYhzWvWipZIbbq8gqS2S1xFHxAkMXwsAZK5DsQ41Q7LP6oQXSsuCF1AzFa2vZk3KQiUTxFmiwpmYHiZdPTZ8Nt6ZP4c7r4zM1B4mTYsprNWpC1XGDwurUsiqB6ctBAQhPhzG%2BfRa%2FwgeA0Cx3pX8fHjNThVxPsYdvRK0%2FjQYDSIzG3DRbKKl2BVDjgktnUPIaCOKcdcjSaCxWjT8jCPik232VOENp0xqRA0c7QEL%2BRhjmZsCPOwVmt7wSkk1LurOTlY0OxBtYSwojc4AQYEVZORkg4b6B0RGd1skMAYlDYSEn5QazLmAxd3N3HeWwFI%2F82Tpi0rWnyWZJWXEtwyi%2By396yn6eQnuv8tmjyGc2QI14S8LjEowMTkJltHOLt5WTj524sjvPgCpEzTSyMLzHMN2BjCZcDMQ4SR0Z71lLzlyFDYTkry6UAqyXcAjlig5xMvV4g9iBgwzma493bsoyWE67it6tuK%2FlnsI3vUnlas3zn2iRNqz0esban%2FFbKpsmmQ0YMOks3B6OGNON0hQnwSGhNVr9lx9tH11qbktMKjaw74GOqUBx%2FNgyX9ceCgMspIQSxwBQpEPQCcUzePH%2BRSuGxgGTVm5cyrmehA%2F9PXBsDbhzwOfhs951GvmvOlMvuoItJA6Tj%2BTa9cW0x08fK3T4qMaNEHiiGDf8zEoIAy5qcl2P7D0RiBp3Jgbxm4rxwl2uWF8Zh7yi52Nmc5BYGW0%2FN6wsTTBx%2BOFYY2Oh8dj8QXfA2g%2BwKJNYxWwNq0YPZ%2Bp1NgCklRG%2BwQ4&X-Amz-Signature=9f385027041459621dc5eb0c443eabfe5ef05657af5d34920691725416e5f226&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DAEFYF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC12aka5ChIzTQUBOw0%2Fvc45X013zMZT34yX%2Bgqkh9gbgIgYtKljNMK7RpdiAEPpRNmZwFvZidlPALJWiav%2B0xvFhkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq5%2BOfAMsN92LlDLCrcAz5XQIlkHTfSbN37AEbmlCQ7TFcliUS7jrrGZrodxM0hKu%2Fb9EQtcC8Y%2FZ%2FvD05RgeO9VXZ34aoeO%2BRlICqGbYhzWvWipZIbbq8gqS2S1xFHxAkMXwsAZK5DsQ41Q7LP6oQXSsuCF1AzFa2vZk3KQiUTxFmiwpmYHiZdPTZ8Nt6ZP4c7r4zM1B4mTYsprNWpC1XGDwurUsiqB6ctBAQhPhzG%2BfRa%2FwgeA0Cx3pX8fHjNThVxPsYdvRK0%2FjQYDSIzG3DRbKKl2BVDjgktnUPIaCOKcdcjSaCxWjT8jCPik232VOENp0xqRA0c7QEL%2BRhjmZsCPOwVmt7wSkk1LurOTlY0OxBtYSwojc4AQYEVZORkg4b6B0RGd1skMAYlDYSEn5QazLmAxd3N3HeWwFI%2F82Tpi0rWnyWZJWXEtwyi%2By396yn6eQnuv8tmjyGc2QI14S8LjEowMTkJltHOLt5WTj524sjvPgCpEzTSyMLzHMN2BjCZcDMQ4SR0Z71lLzlyFDYTkry6UAqyXcAjlig5xMvV4g9iBgwzma493bsoyWE67it6tuK%2FlnsI3vUnlas3zn2iRNqz0esban%2FFbKpsmmQ0YMOks3B6OGNON0hQnwSGhNVr9lx9tH11qbktMKjaw74GOqUBx%2FNgyX9ceCgMspIQSxwBQpEPQCcUzePH%2BRSuGxgGTVm5cyrmehA%2F9PXBsDbhzwOfhs951GvmvOlMvuoItJA6Tj%2BTa9cW0x08fK3T4qMaNEHiiGDf8zEoIAy5qcl2P7D0RiBp3Jgbxm4rxwl2uWF8Zh7yi52Nmc5BYGW0%2FN6wsTTBx%2BOFYY2Oh8dj8QXfA2g%2BwKJNYxWwNq0YPZ%2Bp1NgCklRG%2BwQ4&X-Amz-Signature=e1aa6580b8dceaad19fb6bba7eb9be9bb39a458e7d2d6279c5da248caa2c7b36&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DAEFYF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC12aka5ChIzTQUBOw0%2Fvc45X013zMZT34yX%2Bgqkh9gbgIgYtKljNMK7RpdiAEPpRNmZwFvZidlPALJWiav%2B0xvFhkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq5%2BOfAMsN92LlDLCrcAz5XQIlkHTfSbN37AEbmlCQ7TFcliUS7jrrGZrodxM0hKu%2Fb9EQtcC8Y%2FZ%2FvD05RgeO9VXZ34aoeO%2BRlICqGbYhzWvWipZIbbq8gqS2S1xFHxAkMXwsAZK5DsQ41Q7LP6oQXSsuCF1AzFa2vZk3KQiUTxFmiwpmYHiZdPTZ8Nt6ZP4c7r4zM1B4mTYsprNWpC1XGDwurUsiqB6ctBAQhPhzG%2BfRa%2FwgeA0Cx3pX8fHjNThVxPsYdvRK0%2FjQYDSIzG3DRbKKl2BVDjgktnUPIaCOKcdcjSaCxWjT8jCPik232VOENp0xqRA0c7QEL%2BRhjmZsCPOwVmt7wSkk1LurOTlY0OxBtYSwojc4AQYEVZORkg4b6B0RGd1skMAYlDYSEn5QazLmAxd3N3HeWwFI%2F82Tpi0rWnyWZJWXEtwyi%2By396yn6eQnuv8tmjyGc2QI14S8LjEowMTkJltHOLt5WTj524sjvPgCpEzTSyMLzHMN2BjCZcDMQ4SR0Z71lLzlyFDYTkry6UAqyXcAjlig5xMvV4g9iBgwzma493bsoyWE67it6tuK%2FlnsI3vUnlas3zn2iRNqz0esban%2FFbKpsmmQ0YMOks3B6OGNON0hQnwSGhNVr9lx9tH11qbktMKjaw74GOqUBx%2FNgyX9ceCgMspIQSxwBQpEPQCcUzePH%2BRSuGxgGTVm5cyrmehA%2F9PXBsDbhzwOfhs951GvmvOlMvuoItJA6Tj%2BTa9cW0x08fK3T4qMaNEHiiGDf8zEoIAy5qcl2P7D0RiBp3Jgbxm4rxwl2uWF8Zh7yi52Nmc5BYGW0%2FN6wsTTBx%2BOFYY2Oh8dj8QXfA2g%2BwKJNYxWwNq0YPZ%2Bp1NgCklRG%2BwQ4&X-Amz-Signature=446ff49d519d728c3ab80ed00189f02f914d39fb65c8320f115c76e2979e5997&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DAEFYF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC12aka5ChIzTQUBOw0%2Fvc45X013zMZT34yX%2Bgqkh9gbgIgYtKljNMK7RpdiAEPpRNmZwFvZidlPALJWiav%2B0xvFhkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq5%2BOfAMsN92LlDLCrcAz5XQIlkHTfSbN37AEbmlCQ7TFcliUS7jrrGZrodxM0hKu%2Fb9EQtcC8Y%2FZ%2FvD05RgeO9VXZ34aoeO%2BRlICqGbYhzWvWipZIbbq8gqS2S1xFHxAkMXwsAZK5DsQ41Q7LP6oQXSsuCF1AzFa2vZk3KQiUTxFmiwpmYHiZdPTZ8Nt6ZP4c7r4zM1B4mTYsprNWpC1XGDwurUsiqB6ctBAQhPhzG%2BfRa%2FwgeA0Cx3pX8fHjNThVxPsYdvRK0%2FjQYDSIzG3DRbKKl2BVDjgktnUPIaCOKcdcjSaCxWjT8jCPik232VOENp0xqRA0c7QEL%2BRhjmZsCPOwVmt7wSkk1LurOTlY0OxBtYSwojc4AQYEVZORkg4b6B0RGd1skMAYlDYSEn5QazLmAxd3N3HeWwFI%2F82Tpi0rWnyWZJWXEtwyi%2By396yn6eQnuv8tmjyGc2QI14S8LjEowMTkJltHOLt5WTj524sjvPgCpEzTSyMLzHMN2BjCZcDMQ4SR0Z71lLzlyFDYTkry6UAqyXcAjlig5xMvV4g9iBgwzma493bsoyWE67it6tuK%2FlnsI3vUnlas3zn2iRNqz0esban%2FFbKpsmmQ0YMOks3B6OGNON0hQnwSGhNVr9lx9tH11qbktMKjaw74GOqUBx%2FNgyX9ceCgMspIQSxwBQpEPQCcUzePH%2BRSuGxgGTVm5cyrmehA%2F9PXBsDbhzwOfhs951GvmvOlMvuoItJA6Tj%2BTa9cW0x08fK3T4qMaNEHiiGDf8zEoIAy5qcl2P7D0RiBp3Jgbxm4rxwl2uWF8Zh7yi52Nmc5BYGW0%2FN6wsTTBx%2BOFYY2Oh8dj8QXfA2g%2BwKJNYxWwNq0YPZ%2Bp1NgCklRG%2BwQ4&X-Amz-Signature=379784953b70f723e44366c616e9c9ee0302f9636d50f9cff92d9d867f2eea66&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
