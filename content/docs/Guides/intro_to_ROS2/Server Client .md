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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OWGCQEM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEg9IJsYryhCWZTqRZuOmsGz3W23%2BDj%2FKyFw05QQ8%2F4fAiBsdIkPCj1JagJ6gEmSAhJmh7Xf%2F8TZj3PvK0Qq8TNefSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM9IOtLXK5HziaEhtOKtwD6lzL2aloS%2BPp1Tjl28EhWmsRfURQkhqPyMNa1%2Bw2FZJ8XlfRZpXvhVhi%2B6L2tgNinDR%2FuV953b6xQzbyVDxFIf1E2QSIGP%2FcZmrVSijygR16ysfitSXyQbT6ST711kpewKdzI1fdMyh6XOujiKR2wFcAIEMGx%2BaVyIc6u7MC0bguk8yGXJgMwTUKXgsw%2Bv85citZnaFaQ9YGX5xvhNcb2%2BJwB4NnbaOjpZtcMPWJPFbR6Vd7Bfccc4yJ%2FSAD%2FTY5sXxrqxCl%2Fl2VMMOWvSDFFqD4%2FxGKPYpeLL14Aa1Wvly5LqXvG3GGuRdyvru3aQRHmAxcd85gfERUv0lKpFpMpZXebGmK%2FEeCRQs01Zh8XR4KIatiwttekKodT3FOxM8JAGbE0m3byAISbFUyC%2BfLNd4%2BEkg7%2BfwlzUW%2BsFJ2IcnYQSzPV4Cc0RAL4wXKWc3vmzUFhH3iPsM%2BfReJynLyXoexTxXP3gL%2FXbnXrq6NV6K%2BwhjcFEBRuPdVZiUbozEYrbDagT8T7vgyJ6zFi75s1XeX%2BOODHbug1mUYw1PD4P5oYpW4AIkPMY2fPPh3dxbNNK3Wngh5zZoJIHtqv5%2FiUXrB62NYXUEPsdyYRvVOAWbBJSBdM1WLVV49bi4wrr3bvgY6pgFQKzqqJMwf9%2BShoDar%2FMUWHoRKUjU%2FmcrE%2FbDvGx1MF3TcI9tW9uvlsIcELupo%2F9bOaY0D80VCq%2B%2FTQN6vtsrAfd9OA1j7AnWOSr0C18x0BPftlCeZMTRNG12OZmvJHoemyBj%2FJZzN2%2FxpbTH6U22jfvcq6AkYb5vOrgfs3H5wTLUbyrlKP%2FWH8g%2FEKhMlKSOEwiHWX3duB0WNy1SvxaJALpvRp0LR&X-Amz-Signature=2b84722283771772d9948cf9a31b4a0bcb7356005083cedbb8dc668de533f099&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OWGCQEM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEg9IJsYryhCWZTqRZuOmsGz3W23%2BDj%2FKyFw05QQ8%2F4fAiBsdIkPCj1JagJ6gEmSAhJmh7Xf%2F8TZj3PvK0Qq8TNefSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM9IOtLXK5HziaEhtOKtwD6lzL2aloS%2BPp1Tjl28EhWmsRfURQkhqPyMNa1%2Bw2FZJ8XlfRZpXvhVhi%2B6L2tgNinDR%2FuV953b6xQzbyVDxFIf1E2QSIGP%2FcZmrVSijygR16ysfitSXyQbT6ST711kpewKdzI1fdMyh6XOujiKR2wFcAIEMGx%2BaVyIc6u7MC0bguk8yGXJgMwTUKXgsw%2Bv85citZnaFaQ9YGX5xvhNcb2%2BJwB4NnbaOjpZtcMPWJPFbR6Vd7Bfccc4yJ%2FSAD%2FTY5sXxrqxCl%2Fl2VMMOWvSDFFqD4%2FxGKPYpeLL14Aa1Wvly5LqXvG3GGuRdyvru3aQRHmAxcd85gfERUv0lKpFpMpZXebGmK%2FEeCRQs01Zh8XR4KIatiwttekKodT3FOxM8JAGbE0m3byAISbFUyC%2BfLNd4%2BEkg7%2BfwlzUW%2BsFJ2IcnYQSzPV4Cc0RAL4wXKWc3vmzUFhH3iPsM%2BfReJynLyXoexTxXP3gL%2FXbnXrq6NV6K%2BwhjcFEBRuPdVZiUbozEYrbDagT8T7vgyJ6zFi75s1XeX%2BOODHbug1mUYw1PD4P5oYpW4AIkPMY2fPPh3dxbNNK3Wngh5zZoJIHtqv5%2FiUXrB62NYXUEPsdyYRvVOAWbBJSBdM1WLVV49bi4wrr3bvgY6pgFQKzqqJMwf9%2BShoDar%2FMUWHoRKUjU%2FmcrE%2FbDvGx1MF3TcI9tW9uvlsIcELupo%2F9bOaY0D80VCq%2B%2FTQN6vtsrAfd9OA1j7AnWOSr0C18x0BPftlCeZMTRNG12OZmvJHoemyBj%2FJZzN2%2FxpbTH6U22jfvcq6AkYb5vOrgfs3H5wTLUbyrlKP%2FWH8g%2FEKhMlKSOEwiHWX3duB0WNy1SvxaJALpvRp0LR&X-Amz-Signature=b397cead5d8425aa1ace53359247a5edeeb1c2e06880d84a095b10def2333115&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OWGCQEM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEg9IJsYryhCWZTqRZuOmsGz3W23%2BDj%2FKyFw05QQ8%2F4fAiBsdIkPCj1JagJ6gEmSAhJmh7Xf%2F8TZj3PvK0Qq8TNefSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM9IOtLXK5HziaEhtOKtwD6lzL2aloS%2BPp1Tjl28EhWmsRfURQkhqPyMNa1%2Bw2FZJ8XlfRZpXvhVhi%2B6L2tgNinDR%2FuV953b6xQzbyVDxFIf1E2QSIGP%2FcZmrVSijygR16ysfitSXyQbT6ST711kpewKdzI1fdMyh6XOujiKR2wFcAIEMGx%2BaVyIc6u7MC0bguk8yGXJgMwTUKXgsw%2Bv85citZnaFaQ9YGX5xvhNcb2%2BJwB4NnbaOjpZtcMPWJPFbR6Vd7Bfccc4yJ%2FSAD%2FTY5sXxrqxCl%2Fl2VMMOWvSDFFqD4%2FxGKPYpeLL14Aa1Wvly5LqXvG3GGuRdyvru3aQRHmAxcd85gfERUv0lKpFpMpZXebGmK%2FEeCRQs01Zh8XR4KIatiwttekKodT3FOxM8JAGbE0m3byAISbFUyC%2BfLNd4%2BEkg7%2BfwlzUW%2BsFJ2IcnYQSzPV4Cc0RAL4wXKWc3vmzUFhH3iPsM%2BfReJynLyXoexTxXP3gL%2FXbnXrq6NV6K%2BwhjcFEBRuPdVZiUbozEYrbDagT8T7vgyJ6zFi75s1XeX%2BOODHbug1mUYw1PD4P5oYpW4AIkPMY2fPPh3dxbNNK3Wngh5zZoJIHtqv5%2FiUXrB62NYXUEPsdyYRvVOAWbBJSBdM1WLVV49bi4wrr3bvgY6pgFQKzqqJMwf9%2BShoDar%2FMUWHoRKUjU%2FmcrE%2FbDvGx1MF3TcI9tW9uvlsIcELupo%2F9bOaY0D80VCq%2B%2FTQN6vtsrAfd9OA1j7AnWOSr0C18x0BPftlCeZMTRNG12OZmvJHoemyBj%2FJZzN2%2FxpbTH6U22jfvcq6AkYb5vOrgfs3H5wTLUbyrlKP%2FWH8g%2FEKhMlKSOEwiHWX3duB0WNy1SvxaJALpvRp0LR&X-Amz-Signature=c88c2adc69eb369c0c279d185c2e330ae37c845f72f48f365b40a89dd00f42cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OWGCQEM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEg9IJsYryhCWZTqRZuOmsGz3W23%2BDj%2FKyFw05QQ8%2F4fAiBsdIkPCj1JagJ6gEmSAhJmh7Xf%2F8TZj3PvK0Qq8TNefSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM9IOtLXK5HziaEhtOKtwD6lzL2aloS%2BPp1Tjl28EhWmsRfURQkhqPyMNa1%2Bw2FZJ8XlfRZpXvhVhi%2B6L2tgNinDR%2FuV953b6xQzbyVDxFIf1E2QSIGP%2FcZmrVSijygR16ysfitSXyQbT6ST711kpewKdzI1fdMyh6XOujiKR2wFcAIEMGx%2BaVyIc6u7MC0bguk8yGXJgMwTUKXgsw%2Bv85citZnaFaQ9YGX5xvhNcb2%2BJwB4NnbaOjpZtcMPWJPFbR6Vd7Bfccc4yJ%2FSAD%2FTY5sXxrqxCl%2Fl2VMMOWvSDFFqD4%2FxGKPYpeLL14Aa1Wvly5LqXvG3GGuRdyvru3aQRHmAxcd85gfERUv0lKpFpMpZXebGmK%2FEeCRQs01Zh8XR4KIatiwttekKodT3FOxM8JAGbE0m3byAISbFUyC%2BfLNd4%2BEkg7%2BfwlzUW%2BsFJ2IcnYQSzPV4Cc0RAL4wXKWc3vmzUFhH3iPsM%2BfReJynLyXoexTxXP3gL%2FXbnXrq6NV6K%2BwhjcFEBRuPdVZiUbozEYrbDagT8T7vgyJ6zFi75s1XeX%2BOODHbug1mUYw1PD4P5oYpW4AIkPMY2fPPh3dxbNNK3Wngh5zZoJIHtqv5%2FiUXrB62NYXUEPsdyYRvVOAWbBJSBdM1WLVV49bi4wrr3bvgY6pgFQKzqqJMwf9%2BShoDar%2FMUWHoRKUjU%2FmcrE%2FbDvGx1MF3TcI9tW9uvlsIcELupo%2F9bOaY0D80VCq%2B%2FTQN6vtsrAfd9OA1j7AnWOSr0C18x0BPftlCeZMTRNG12OZmvJHoemyBj%2FJZzN2%2FxpbTH6U22jfvcq6AkYb5vOrgfs3H5wTLUbyrlKP%2FWH8g%2FEKhMlKSOEwiHWX3duB0WNy1SvxaJALpvRp0LR&X-Amz-Signature=5611c9ef23b9df61e0fbd7379a93d5cd090b23379920806282de28027dbdaef3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OWGCQEM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEg9IJsYryhCWZTqRZuOmsGz3W23%2BDj%2FKyFw05QQ8%2F4fAiBsdIkPCj1JagJ6gEmSAhJmh7Xf%2F8TZj3PvK0Qq8TNefSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM9IOtLXK5HziaEhtOKtwD6lzL2aloS%2BPp1Tjl28EhWmsRfURQkhqPyMNa1%2Bw2FZJ8XlfRZpXvhVhi%2B6L2tgNinDR%2FuV953b6xQzbyVDxFIf1E2QSIGP%2FcZmrVSijygR16ysfitSXyQbT6ST711kpewKdzI1fdMyh6XOujiKR2wFcAIEMGx%2BaVyIc6u7MC0bguk8yGXJgMwTUKXgsw%2Bv85citZnaFaQ9YGX5xvhNcb2%2BJwB4NnbaOjpZtcMPWJPFbR6Vd7Bfccc4yJ%2FSAD%2FTY5sXxrqxCl%2Fl2VMMOWvSDFFqD4%2FxGKPYpeLL14Aa1Wvly5LqXvG3GGuRdyvru3aQRHmAxcd85gfERUv0lKpFpMpZXebGmK%2FEeCRQs01Zh8XR4KIatiwttekKodT3FOxM8JAGbE0m3byAISbFUyC%2BfLNd4%2BEkg7%2BfwlzUW%2BsFJ2IcnYQSzPV4Cc0RAL4wXKWc3vmzUFhH3iPsM%2BfReJynLyXoexTxXP3gL%2FXbnXrq6NV6K%2BwhjcFEBRuPdVZiUbozEYrbDagT8T7vgyJ6zFi75s1XeX%2BOODHbug1mUYw1PD4P5oYpW4AIkPMY2fPPh3dxbNNK3Wngh5zZoJIHtqv5%2FiUXrB62NYXUEPsdyYRvVOAWbBJSBdM1WLVV49bi4wrr3bvgY6pgFQKzqqJMwf9%2BShoDar%2FMUWHoRKUjU%2FmcrE%2FbDvGx1MF3TcI9tW9uvlsIcELupo%2F9bOaY0D80VCq%2B%2FTQN6vtsrAfd9OA1j7AnWOSr0C18x0BPftlCeZMTRNG12OZmvJHoemyBj%2FJZzN2%2FxpbTH6U22jfvcq6AkYb5vOrgfs3H5wTLUbyrlKP%2FWH8g%2FEKhMlKSOEwiHWX3duB0WNy1SvxaJALpvRp0LR&X-Amz-Signature=438a33c0715dd313ea3d43a0bfead2bddc4de58afcba10a811aed65b8eae982b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
