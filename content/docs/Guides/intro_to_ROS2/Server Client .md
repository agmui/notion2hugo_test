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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH35CI7A%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCID3ezMVhOCrYaUklgB2k5mvsyTy4eXaq0hfrxkTJ5YAIhAPp%2FbHfyQdeu9wbNSXxfquHRcAl3b0cEf3p0w1TtFE1GKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdiiWIeQaLNMf20%2B0q3AMsTDh51HOQYJWrdh9wfhkNePSiSpe5wiFkDa0MDARW9ChF3%2BJeiJBtjHzbPV0%2BvsDVDR7I0%2Bp17pEAXcrpvYxe%2F61RsfLHqZCkCNU5ub35EsX%2FMPe32LK9cMZ6SB9oZSTSZSm%2FJlCfod1MjNB1uoYFJb5WJua1g3kpy%2FlFgsU6olmWL%2BgLvULz9yyRN2yXjO0QMNsr6r3l5eZAfK6phlkNcH8YZS1RkAGG9JYOl%2BZhsS70v%2BDPVnI%2BZMmnOtuwh2jIgjHlhivvldQ%2FCoPQnOLNOS8dgyk4aZAM3xCmlyFY5AjvzWJDTBsDKOQnfVWROp7aP5P5MmEl%2FX4KvX2M5Vg1ADIpzZ%2F9FJTf9GCugGLFxoWrtj5vMtCl1YUFn9%2Fp52I2Yy9tsJ4ddRQnahy4UsINeOix4wlLgXx%2FyzeODUYI2GVniIFrWvmYYiBaFm5do3MFj0grKw5yqef5cH4BjQf7znUddJvk9EsWtU6GzAGPSMN3uj5c3w1J%2BzVkMYw4WWK5eNS8XEUWzGjBgaOg2rwbrczEWtUhMvZdz%2F4zd6zFFtNCDgHmQu0iVC75qAH6fuPJVOIzbj7rpY6CyTb%2FlwmDuTUe%2Fp%2BqfjO%2FyCbtgPwUTxgRgzRM%2BvQdr8oqNTCqgvrBBjqkAREwEPrWv4m%2B1khSjhWZyI07UR7vuD7hwr3UeN4gU4Pm4N2TJoJe8JAMff5M1Amvo8oTJseI3Gx%2BZorogPsG%2BnFC4oehfbRwcrPApk19u4uFVtwsRIbtLG8CpMXvPRRv6elOabPqgQEsqeqKG3dSBEWkRg3dy13K3CutNIHcftVosGBPDbu5Jr7vgCGEYJkFH%2BMxqT8dnXORL0WLI%2BOWG54QgHMZ&X-Amz-Signature=0bf3085d7f960120534fbc8603ace33875d8c645a06cce737766ce9c157f6c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH35CI7A%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCID3ezMVhOCrYaUklgB2k5mvsyTy4eXaq0hfrxkTJ5YAIhAPp%2FbHfyQdeu9wbNSXxfquHRcAl3b0cEf3p0w1TtFE1GKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdiiWIeQaLNMf20%2B0q3AMsTDh51HOQYJWrdh9wfhkNePSiSpe5wiFkDa0MDARW9ChF3%2BJeiJBtjHzbPV0%2BvsDVDR7I0%2Bp17pEAXcrpvYxe%2F61RsfLHqZCkCNU5ub35EsX%2FMPe32LK9cMZ6SB9oZSTSZSm%2FJlCfod1MjNB1uoYFJb5WJua1g3kpy%2FlFgsU6olmWL%2BgLvULz9yyRN2yXjO0QMNsr6r3l5eZAfK6phlkNcH8YZS1RkAGG9JYOl%2BZhsS70v%2BDPVnI%2BZMmnOtuwh2jIgjHlhivvldQ%2FCoPQnOLNOS8dgyk4aZAM3xCmlyFY5AjvzWJDTBsDKOQnfVWROp7aP5P5MmEl%2FX4KvX2M5Vg1ADIpzZ%2F9FJTf9GCugGLFxoWrtj5vMtCl1YUFn9%2Fp52I2Yy9tsJ4ddRQnahy4UsINeOix4wlLgXx%2FyzeODUYI2GVniIFrWvmYYiBaFm5do3MFj0grKw5yqef5cH4BjQf7znUddJvk9EsWtU6GzAGPSMN3uj5c3w1J%2BzVkMYw4WWK5eNS8XEUWzGjBgaOg2rwbrczEWtUhMvZdz%2F4zd6zFFtNCDgHmQu0iVC75qAH6fuPJVOIzbj7rpY6CyTb%2FlwmDuTUe%2Fp%2BqfjO%2FyCbtgPwUTxgRgzRM%2BvQdr8oqNTCqgvrBBjqkAREwEPrWv4m%2B1khSjhWZyI07UR7vuD7hwr3UeN4gU4Pm4N2TJoJe8JAMff5M1Amvo8oTJseI3Gx%2BZorogPsG%2BnFC4oehfbRwcrPApk19u4uFVtwsRIbtLG8CpMXvPRRv6elOabPqgQEsqeqKG3dSBEWkRg3dy13K3CutNIHcftVosGBPDbu5Jr7vgCGEYJkFH%2BMxqT8dnXORL0WLI%2BOWG54QgHMZ&X-Amz-Signature=b912f55d1b000f0d113ffe2ac82329e396aa3d087522f6468882c93bab38e136&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH35CI7A%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCID3ezMVhOCrYaUklgB2k5mvsyTy4eXaq0hfrxkTJ5YAIhAPp%2FbHfyQdeu9wbNSXxfquHRcAl3b0cEf3p0w1TtFE1GKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdiiWIeQaLNMf20%2B0q3AMsTDh51HOQYJWrdh9wfhkNePSiSpe5wiFkDa0MDARW9ChF3%2BJeiJBtjHzbPV0%2BvsDVDR7I0%2Bp17pEAXcrpvYxe%2F61RsfLHqZCkCNU5ub35EsX%2FMPe32LK9cMZ6SB9oZSTSZSm%2FJlCfod1MjNB1uoYFJb5WJua1g3kpy%2FlFgsU6olmWL%2BgLvULz9yyRN2yXjO0QMNsr6r3l5eZAfK6phlkNcH8YZS1RkAGG9JYOl%2BZhsS70v%2BDPVnI%2BZMmnOtuwh2jIgjHlhivvldQ%2FCoPQnOLNOS8dgyk4aZAM3xCmlyFY5AjvzWJDTBsDKOQnfVWROp7aP5P5MmEl%2FX4KvX2M5Vg1ADIpzZ%2F9FJTf9GCugGLFxoWrtj5vMtCl1YUFn9%2Fp52I2Yy9tsJ4ddRQnahy4UsINeOix4wlLgXx%2FyzeODUYI2GVniIFrWvmYYiBaFm5do3MFj0grKw5yqef5cH4BjQf7znUddJvk9EsWtU6GzAGPSMN3uj5c3w1J%2BzVkMYw4WWK5eNS8XEUWzGjBgaOg2rwbrczEWtUhMvZdz%2F4zd6zFFtNCDgHmQu0iVC75qAH6fuPJVOIzbj7rpY6CyTb%2FlwmDuTUe%2Fp%2BqfjO%2FyCbtgPwUTxgRgzRM%2BvQdr8oqNTCqgvrBBjqkAREwEPrWv4m%2B1khSjhWZyI07UR7vuD7hwr3UeN4gU4Pm4N2TJoJe8JAMff5M1Amvo8oTJseI3Gx%2BZorogPsG%2BnFC4oehfbRwcrPApk19u4uFVtwsRIbtLG8CpMXvPRRv6elOabPqgQEsqeqKG3dSBEWkRg3dy13K3CutNIHcftVosGBPDbu5Jr7vgCGEYJkFH%2BMxqT8dnXORL0WLI%2BOWG54QgHMZ&X-Amz-Signature=c2103ebc383695548f25aaee790313a8a5baa29432e60ebaafde7eae846fa15f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH35CI7A%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCID3ezMVhOCrYaUklgB2k5mvsyTy4eXaq0hfrxkTJ5YAIhAPp%2FbHfyQdeu9wbNSXxfquHRcAl3b0cEf3p0w1TtFE1GKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdiiWIeQaLNMf20%2B0q3AMsTDh51HOQYJWrdh9wfhkNePSiSpe5wiFkDa0MDARW9ChF3%2BJeiJBtjHzbPV0%2BvsDVDR7I0%2Bp17pEAXcrpvYxe%2F61RsfLHqZCkCNU5ub35EsX%2FMPe32LK9cMZ6SB9oZSTSZSm%2FJlCfod1MjNB1uoYFJb5WJua1g3kpy%2FlFgsU6olmWL%2BgLvULz9yyRN2yXjO0QMNsr6r3l5eZAfK6phlkNcH8YZS1RkAGG9JYOl%2BZhsS70v%2BDPVnI%2BZMmnOtuwh2jIgjHlhivvldQ%2FCoPQnOLNOS8dgyk4aZAM3xCmlyFY5AjvzWJDTBsDKOQnfVWROp7aP5P5MmEl%2FX4KvX2M5Vg1ADIpzZ%2F9FJTf9GCugGLFxoWrtj5vMtCl1YUFn9%2Fp52I2Yy9tsJ4ddRQnahy4UsINeOix4wlLgXx%2FyzeODUYI2GVniIFrWvmYYiBaFm5do3MFj0grKw5yqef5cH4BjQf7znUddJvk9EsWtU6GzAGPSMN3uj5c3w1J%2BzVkMYw4WWK5eNS8XEUWzGjBgaOg2rwbrczEWtUhMvZdz%2F4zd6zFFtNCDgHmQu0iVC75qAH6fuPJVOIzbj7rpY6CyTb%2FlwmDuTUe%2Fp%2BqfjO%2FyCbtgPwUTxgRgzRM%2BvQdr8oqNTCqgvrBBjqkAREwEPrWv4m%2B1khSjhWZyI07UR7vuD7hwr3UeN4gU4Pm4N2TJoJe8JAMff5M1Amvo8oTJseI3Gx%2BZorogPsG%2BnFC4oehfbRwcrPApk19u4uFVtwsRIbtLG8CpMXvPRRv6elOabPqgQEsqeqKG3dSBEWkRg3dy13K3CutNIHcftVosGBPDbu5Jr7vgCGEYJkFH%2BMxqT8dnXORL0WLI%2BOWG54QgHMZ&X-Amz-Signature=9b3d1fb66621b01bffe5be088d3b8846cd3647bb19e674703b70e9f0692fc11f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH35CI7A%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCID3ezMVhOCrYaUklgB2k5mvsyTy4eXaq0hfrxkTJ5YAIhAPp%2FbHfyQdeu9wbNSXxfquHRcAl3b0cEf3p0w1TtFE1GKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdiiWIeQaLNMf20%2B0q3AMsTDh51HOQYJWrdh9wfhkNePSiSpe5wiFkDa0MDARW9ChF3%2BJeiJBtjHzbPV0%2BvsDVDR7I0%2Bp17pEAXcrpvYxe%2F61RsfLHqZCkCNU5ub35EsX%2FMPe32LK9cMZ6SB9oZSTSZSm%2FJlCfod1MjNB1uoYFJb5WJua1g3kpy%2FlFgsU6olmWL%2BgLvULz9yyRN2yXjO0QMNsr6r3l5eZAfK6phlkNcH8YZS1RkAGG9JYOl%2BZhsS70v%2BDPVnI%2BZMmnOtuwh2jIgjHlhivvldQ%2FCoPQnOLNOS8dgyk4aZAM3xCmlyFY5AjvzWJDTBsDKOQnfVWROp7aP5P5MmEl%2FX4KvX2M5Vg1ADIpzZ%2F9FJTf9GCugGLFxoWrtj5vMtCl1YUFn9%2Fp52I2Yy9tsJ4ddRQnahy4UsINeOix4wlLgXx%2FyzeODUYI2GVniIFrWvmYYiBaFm5do3MFj0grKw5yqef5cH4BjQf7znUddJvk9EsWtU6GzAGPSMN3uj5c3w1J%2BzVkMYw4WWK5eNS8XEUWzGjBgaOg2rwbrczEWtUhMvZdz%2F4zd6zFFtNCDgHmQu0iVC75qAH6fuPJVOIzbj7rpY6CyTb%2FlwmDuTUe%2Fp%2BqfjO%2FyCbtgPwUTxgRgzRM%2BvQdr8oqNTCqgvrBBjqkAREwEPrWv4m%2B1khSjhWZyI07UR7vuD7hwr3UeN4gU4Pm4N2TJoJe8JAMff5M1Amvo8oTJseI3Gx%2BZorogPsG%2BnFC4oehfbRwcrPApk19u4uFVtwsRIbtLG8CpMXvPRRv6elOabPqgQEsqeqKG3dSBEWkRg3dy13K3CutNIHcftVosGBPDbu5Jr7vgCGEYJkFH%2BMxqT8dnXORL0WLI%2BOWG54QgHMZ&X-Amz-Signature=2d808ab087f44de9b050bd89a62f9de8c71d28ef77163e625f336a43cf24ff24&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
