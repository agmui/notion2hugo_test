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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJN6TST4%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALvO7vz65tpuifyu3TSb65XeS8rw1vTukBtK8%2BYIgVeAiAQD9S%2BkVjDP5Ewqa3O%2BaW1u2TuAwgxmPvnM3IwL6yXEir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM2tc0nN0MvYx6VbxNKtwDBPitTjKZP1vjOpZ%2FEBeINd8QHT4IEax4iit0ppWMCMFnc2CplvPjTcGLYeUzHYGHPuKqJd%2FoKVZvP%2FvYoPYV2XIKscdkjdV28zgun9XCgZmLtADI5jV0eChZhR5R7WKEesDAYEqgSfmdC7F8vGF748Z4RiiF4l7CmBMoG2uGIJuyiJmHuTB0nGi6s9LwOZafg2r%2Fsw2Dj8dIfaTKK14rxvp1a0qjSO%2BfYvbsRfoOrwhwoKI2W%2Fh%2B6igaun5cEAOULD5DBaGifaZS9FByv5Nz2jCEXDysTZ7VoIOM2Tw5GG6U2kY4YXQiG2BDqXiDY8W2%2FsXIlAKq90vQEo9eL2cr3JrghBADaQEyHS41t7yYzqCWNwQw9e%2FLjNNh78fYkvE624nMEs0AVd%2BIPAu%2BX4mJRVpKS959AWyhdsGhYS%2BNZuAHrH09QOHQS%2BV2vMrJXCP6j3BkwmhijIfzciaiaXC5AHj05kP2assvqwHoG63AGdIoLfMfOcTYp53odxrFug4FJQmOQwUvZ1we%2F86VPmAV6PyKLdtmLtYQnDuDZRvADYy3EsOQu4%2F7xYm61Okjjo8jP1wzQGkRTlRmrYJa6Es7DWIw477PaThQ9wYW6ylkVznTwqGphggFvw2bsS0w44O5vQY6pgEHoSUOBHhMtI5etltEe9GZe11uhUiwCGlmYKaTZIg7SnLXZZXXtUVtAnxEwdsTgKlEWA1EIS9AmMayVO0%2BYgUvOZEjjFCpwhR2Vdmwb0apz7mkX7MbAPI66TAOohYI5UCmdWJoqi66GVSgfAtFPF2I16fIGMZ8feRiqZstZZhRjl4dLn%2B0VSyrsplaeXmxGNibUbzj8Sdz2cms2mC9GzhEz7aTe4yz&X-Amz-Signature=ea10d37752074cc1e2d1140f78333f88bfcb07382409c41475043a6ae3709d13&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJN6TST4%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALvO7vz65tpuifyu3TSb65XeS8rw1vTukBtK8%2BYIgVeAiAQD9S%2BkVjDP5Ewqa3O%2BaW1u2TuAwgxmPvnM3IwL6yXEir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM2tc0nN0MvYx6VbxNKtwDBPitTjKZP1vjOpZ%2FEBeINd8QHT4IEax4iit0ppWMCMFnc2CplvPjTcGLYeUzHYGHPuKqJd%2FoKVZvP%2FvYoPYV2XIKscdkjdV28zgun9XCgZmLtADI5jV0eChZhR5R7WKEesDAYEqgSfmdC7F8vGF748Z4RiiF4l7CmBMoG2uGIJuyiJmHuTB0nGi6s9LwOZafg2r%2Fsw2Dj8dIfaTKK14rxvp1a0qjSO%2BfYvbsRfoOrwhwoKI2W%2Fh%2B6igaun5cEAOULD5DBaGifaZS9FByv5Nz2jCEXDysTZ7VoIOM2Tw5GG6U2kY4YXQiG2BDqXiDY8W2%2FsXIlAKq90vQEo9eL2cr3JrghBADaQEyHS41t7yYzqCWNwQw9e%2FLjNNh78fYkvE624nMEs0AVd%2BIPAu%2BX4mJRVpKS959AWyhdsGhYS%2BNZuAHrH09QOHQS%2BV2vMrJXCP6j3BkwmhijIfzciaiaXC5AHj05kP2assvqwHoG63AGdIoLfMfOcTYp53odxrFug4FJQmOQwUvZ1we%2F86VPmAV6PyKLdtmLtYQnDuDZRvADYy3EsOQu4%2F7xYm61Okjjo8jP1wzQGkRTlRmrYJa6Es7DWIw477PaThQ9wYW6ylkVznTwqGphggFvw2bsS0w44O5vQY6pgEHoSUOBHhMtI5etltEe9GZe11uhUiwCGlmYKaTZIg7SnLXZZXXtUVtAnxEwdsTgKlEWA1EIS9AmMayVO0%2BYgUvOZEjjFCpwhR2Vdmwb0apz7mkX7MbAPI66TAOohYI5UCmdWJoqi66GVSgfAtFPF2I16fIGMZ8feRiqZstZZhRjl4dLn%2B0VSyrsplaeXmxGNibUbzj8Sdz2cms2mC9GzhEz7aTe4yz&X-Amz-Signature=42c4c6b96a972ad66cf910e8e528b97ec572a5ce8ef31858839c4ae409cc0c38&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJN6TST4%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALvO7vz65tpuifyu3TSb65XeS8rw1vTukBtK8%2BYIgVeAiAQD9S%2BkVjDP5Ewqa3O%2BaW1u2TuAwgxmPvnM3IwL6yXEir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM2tc0nN0MvYx6VbxNKtwDBPitTjKZP1vjOpZ%2FEBeINd8QHT4IEax4iit0ppWMCMFnc2CplvPjTcGLYeUzHYGHPuKqJd%2FoKVZvP%2FvYoPYV2XIKscdkjdV28zgun9XCgZmLtADI5jV0eChZhR5R7WKEesDAYEqgSfmdC7F8vGF748Z4RiiF4l7CmBMoG2uGIJuyiJmHuTB0nGi6s9LwOZafg2r%2Fsw2Dj8dIfaTKK14rxvp1a0qjSO%2BfYvbsRfoOrwhwoKI2W%2Fh%2B6igaun5cEAOULD5DBaGifaZS9FByv5Nz2jCEXDysTZ7VoIOM2Tw5GG6U2kY4YXQiG2BDqXiDY8W2%2FsXIlAKq90vQEo9eL2cr3JrghBADaQEyHS41t7yYzqCWNwQw9e%2FLjNNh78fYkvE624nMEs0AVd%2BIPAu%2BX4mJRVpKS959AWyhdsGhYS%2BNZuAHrH09QOHQS%2BV2vMrJXCP6j3BkwmhijIfzciaiaXC5AHj05kP2assvqwHoG63AGdIoLfMfOcTYp53odxrFug4FJQmOQwUvZ1we%2F86VPmAV6PyKLdtmLtYQnDuDZRvADYy3EsOQu4%2F7xYm61Okjjo8jP1wzQGkRTlRmrYJa6Es7DWIw477PaThQ9wYW6ylkVznTwqGphggFvw2bsS0w44O5vQY6pgEHoSUOBHhMtI5etltEe9GZe11uhUiwCGlmYKaTZIg7SnLXZZXXtUVtAnxEwdsTgKlEWA1EIS9AmMayVO0%2BYgUvOZEjjFCpwhR2Vdmwb0apz7mkX7MbAPI66TAOohYI5UCmdWJoqi66GVSgfAtFPF2I16fIGMZ8feRiqZstZZhRjl4dLn%2B0VSyrsplaeXmxGNibUbzj8Sdz2cms2mC9GzhEz7aTe4yz&X-Amz-Signature=2aa32411b4ffbc5e964cc0bf552a02e12aec82178fe5601570ae8d4bd113d7c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJN6TST4%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALvO7vz65tpuifyu3TSb65XeS8rw1vTukBtK8%2BYIgVeAiAQD9S%2BkVjDP5Ewqa3O%2BaW1u2TuAwgxmPvnM3IwL6yXEir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM2tc0nN0MvYx6VbxNKtwDBPitTjKZP1vjOpZ%2FEBeINd8QHT4IEax4iit0ppWMCMFnc2CplvPjTcGLYeUzHYGHPuKqJd%2FoKVZvP%2FvYoPYV2XIKscdkjdV28zgun9XCgZmLtADI5jV0eChZhR5R7WKEesDAYEqgSfmdC7F8vGF748Z4RiiF4l7CmBMoG2uGIJuyiJmHuTB0nGi6s9LwOZafg2r%2Fsw2Dj8dIfaTKK14rxvp1a0qjSO%2BfYvbsRfoOrwhwoKI2W%2Fh%2B6igaun5cEAOULD5DBaGifaZS9FByv5Nz2jCEXDysTZ7VoIOM2Tw5GG6U2kY4YXQiG2BDqXiDY8W2%2FsXIlAKq90vQEo9eL2cr3JrghBADaQEyHS41t7yYzqCWNwQw9e%2FLjNNh78fYkvE624nMEs0AVd%2BIPAu%2BX4mJRVpKS959AWyhdsGhYS%2BNZuAHrH09QOHQS%2BV2vMrJXCP6j3BkwmhijIfzciaiaXC5AHj05kP2assvqwHoG63AGdIoLfMfOcTYp53odxrFug4FJQmOQwUvZ1we%2F86VPmAV6PyKLdtmLtYQnDuDZRvADYy3EsOQu4%2F7xYm61Okjjo8jP1wzQGkRTlRmrYJa6Es7DWIw477PaThQ9wYW6ylkVznTwqGphggFvw2bsS0w44O5vQY6pgEHoSUOBHhMtI5etltEe9GZe11uhUiwCGlmYKaTZIg7SnLXZZXXtUVtAnxEwdsTgKlEWA1EIS9AmMayVO0%2BYgUvOZEjjFCpwhR2Vdmwb0apz7mkX7MbAPI66TAOohYI5UCmdWJoqi66GVSgfAtFPF2I16fIGMZ8feRiqZstZZhRjl4dLn%2B0VSyrsplaeXmxGNibUbzj8Sdz2cms2mC9GzhEz7aTe4yz&X-Amz-Signature=ad438d7df4a55d103204982e4f456a37e38350a87d47298a20719ecfdfdca168&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJN6TST4%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALvO7vz65tpuifyu3TSb65XeS8rw1vTukBtK8%2BYIgVeAiAQD9S%2BkVjDP5Ewqa3O%2BaW1u2TuAwgxmPvnM3IwL6yXEir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM2tc0nN0MvYx6VbxNKtwDBPitTjKZP1vjOpZ%2FEBeINd8QHT4IEax4iit0ppWMCMFnc2CplvPjTcGLYeUzHYGHPuKqJd%2FoKVZvP%2FvYoPYV2XIKscdkjdV28zgun9XCgZmLtADI5jV0eChZhR5R7WKEesDAYEqgSfmdC7F8vGF748Z4RiiF4l7CmBMoG2uGIJuyiJmHuTB0nGi6s9LwOZafg2r%2Fsw2Dj8dIfaTKK14rxvp1a0qjSO%2BfYvbsRfoOrwhwoKI2W%2Fh%2B6igaun5cEAOULD5DBaGifaZS9FByv5Nz2jCEXDysTZ7VoIOM2Tw5GG6U2kY4YXQiG2BDqXiDY8W2%2FsXIlAKq90vQEo9eL2cr3JrghBADaQEyHS41t7yYzqCWNwQw9e%2FLjNNh78fYkvE624nMEs0AVd%2BIPAu%2BX4mJRVpKS959AWyhdsGhYS%2BNZuAHrH09QOHQS%2BV2vMrJXCP6j3BkwmhijIfzciaiaXC5AHj05kP2assvqwHoG63AGdIoLfMfOcTYp53odxrFug4FJQmOQwUvZ1we%2F86VPmAV6PyKLdtmLtYQnDuDZRvADYy3EsOQu4%2F7xYm61Okjjo8jP1wzQGkRTlRmrYJa6Es7DWIw477PaThQ9wYW6ylkVznTwqGphggFvw2bsS0w44O5vQY6pgEHoSUOBHhMtI5etltEe9GZe11uhUiwCGlmYKaTZIg7SnLXZZXXtUVtAnxEwdsTgKlEWA1EIS9AmMayVO0%2BYgUvOZEjjFCpwhR2Vdmwb0apz7mkX7MbAPI66TAOohYI5UCmdWJoqi66GVSgfAtFPF2I16fIGMZ8feRiqZstZZhRjl4dLn%2B0VSyrsplaeXmxGNibUbzj8Sdz2cms2mC9GzhEz7aTe4yz&X-Amz-Signature=f94d654d31934f391ebf15fc9b1709dba5330e803848fe0d2ec1ab047efd75d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
