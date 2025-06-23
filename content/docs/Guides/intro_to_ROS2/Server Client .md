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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2F5A5F5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDGEkn%2FmlzrEJXL3fNps4AT0iHAMIttW6Vltfg01F2XSgIgezI7joFeb7FOX1p6%2BsSdoLJ%2BziLZuagSFyfp7AkUj2Aq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMASQ8izg30MGqvMoyrcA7iFSkcStKhPWFtvIIdgqGUov6wtQaqI0vLT5d%2Bp3Ns7ZQ2EJ2z%2BnmQNR6raxdqVZSkAQvxZqxQ2HuWtlrtTFPqmXqvxCDNj2lSz7cSblz7lGrqliV%2FUZfG%2FAce9QrDk4BCabaHU%2F1AYAytCm3lddz%2B062pWVi3Y7Q8Ab5RdJaVMlEm7C%2BJgkMVYD3gLquk2L8p6eC%2FeS%2BoXT%2FhsRp%2F2mPklbOHctp2C0W9lqRBKblwTX%2FlPbkRKcd2p33u5TcutzbK75jMwf7TEhPDUeohvj4keND950ndHI4ZsauqLP257466wu82NomixCQLIFp5zU4mas7FHwsaDls3VUU%2FAklefXKYvGnQTfwWS%2FUNDqfjF3UIsek1T58wAcoaPW%2FFKJ0PzvFsgzCUBIz%2F2aa4xXCSc2u2aNv%2B6hGYl%2FrYdR83H%2BDes%2FAIVFEc5u%2BnP05uVAhPuf51DeqPUmFhYzAv5MLQwZ%2FF3O7%2FrER47gaNbKhPAtjq1MfHb5OSrV8NIbXwrj1lqrlL9FU%2FJL0MkTzkgYOK%2BqYgG96JEUViq7W4t3YMT047vX%2BRNMYXcL85IATNLT2GIMBAsydoC4e8YOBmwSIxzafVpky9f8SaXDgyz67LF0vYX4M%2Fb8OsealBCMOeq5sIGOqUBDPLSz4q85QxS4eXLKewvx1UIeB%2B1dR8Q%2Bzes5dpJEQvmaC%2BD2y4shTelK5G%2FF6Elz8tQWpLJ%2FjgWuma%2FXY6J6e8q33NFQ7hF846XiEpLLhv9U6o7lJaJMVaJT86%2BaJ7ACFM3h7z91U4c0ESOl8rKz%2BKEdd6o5N6HeyPJQ8rFXx2VngiOPVyewD7STRkLMN0G72c4fTDq3hcLeSocpBWHTqF5ANH9&X-Amz-Signature=188b9d1764ae64e95c086d28095653caf8dfd13d681fe77aa6b6e5920687abb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2F5A5F5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDGEkn%2FmlzrEJXL3fNps4AT0iHAMIttW6Vltfg01F2XSgIgezI7joFeb7FOX1p6%2BsSdoLJ%2BziLZuagSFyfp7AkUj2Aq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMASQ8izg30MGqvMoyrcA7iFSkcStKhPWFtvIIdgqGUov6wtQaqI0vLT5d%2Bp3Ns7ZQ2EJ2z%2BnmQNR6raxdqVZSkAQvxZqxQ2HuWtlrtTFPqmXqvxCDNj2lSz7cSblz7lGrqliV%2FUZfG%2FAce9QrDk4BCabaHU%2F1AYAytCm3lddz%2B062pWVi3Y7Q8Ab5RdJaVMlEm7C%2BJgkMVYD3gLquk2L8p6eC%2FeS%2BoXT%2FhsRp%2F2mPklbOHctp2C0W9lqRBKblwTX%2FlPbkRKcd2p33u5TcutzbK75jMwf7TEhPDUeohvj4keND950ndHI4ZsauqLP257466wu82NomixCQLIFp5zU4mas7FHwsaDls3VUU%2FAklefXKYvGnQTfwWS%2FUNDqfjF3UIsek1T58wAcoaPW%2FFKJ0PzvFsgzCUBIz%2F2aa4xXCSc2u2aNv%2B6hGYl%2FrYdR83H%2BDes%2FAIVFEc5u%2BnP05uVAhPuf51DeqPUmFhYzAv5MLQwZ%2FF3O7%2FrER47gaNbKhPAtjq1MfHb5OSrV8NIbXwrj1lqrlL9FU%2FJL0MkTzkgYOK%2BqYgG96JEUViq7W4t3YMT047vX%2BRNMYXcL85IATNLT2GIMBAsydoC4e8YOBmwSIxzafVpky9f8SaXDgyz67LF0vYX4M%2Fb8OsealBCMOeq5sIGOqUBDPLSz4q85QxS4eXLKewvx1UIeB%2B1dR8Q%2Bzes5dpJEQvmaC%2BD2y4shTelK5G%2FF6Elz8tQWpLJ%2FjgWuma%2FXY6J6e8q33NFQ7hF846XiEpLLhv9U6o7lJaJMVaJT86%2BaJ7ACFM3h7z91U4c0ESOl8rKz%2BKEdd6o5N6HeyPJQ8rFXx2VngiOPVyewD7STRkLMN0G72c4fTDq3hcLeSocpBWHTqF5ANH9&X-Amz-Signature=671faa670a58843a75e3394aa71a94cce2f2d9f9c0a16fd992bc835bc9e26a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2F5A5F5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDGEkn%2FmlzrEJXL3fNps4AT0iHAMIttW6Vltfg01F2XSgIgezI7joFeb7FOX1p6%2BsSdoLJ%2BziLZuagSFyfp7AkUj2Aq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMASQ8izg30MGqvMoyrcA7iFSkcStKhPWFtvIIdgqGUov6wtQaqI0vLT5d%2Bp3Ns7ZQ2EJ2z%2BnmQNR6raxdqVZSkAQvxZqxQ2HuWtlrtTFPqmXqvxCDNj2lSz7cSblz7lGrqliV%2FUZfG%2FAce9QrDk4BCabaHU%2F1AYAytCm3lddz%2B062pWVi3Y7Q8Ab5RdJaVMlEm7C%2BJgkMVYD3gLquk2L8p6eC%2FeS%2BoXT%2FhsRp%2F2mPklbOHctp2C0W9lqRBKblwTX%2FlPbkRKcd2p33u5TcutzbK75jMwf7TEhPDUeohvj4keND950ndHI4ZsauqLP257466wu82NomixCQLIFp5zU4mas7FHwsaDls3VUU%2FAklefXKYvGnQTfwWS%2FUNDqfjF3UIsek1T58wAcoaPW%2FFKJ0PzvFsgzCUBIz%2F2aa4xXCSc2u2aNv%2B6hGYl%2FrYdR83H%2BDes%2FAIVFEc5u%2BnP05uVAhPuf51DeqPUmFhYzAv5MLQwZ%2FF3O7%2FrER47gaNbKhPAtjq1MfHb5OSrV8NIbXwrj1lqrlL9FU%2FJL0MkTzkgYOK%2BqYgG96JEUViq7W4t3YMT047vX%2BRNMYXcL85IATNLT2GIMBAsydoC4e8YOBmwSIxzafVpky9f8SaXDgyz67LF0vYX4M%2Fb8OsealBCMOeq5sIGOqUBDPLSz4q85QxS4eXLKewvx1UIeB%2B1dR8Q%2Bzes5dpJEQvmaC%2BD2y4shTelK5G%2FF6Elz8tQWpLJ%2FjgWuma%2FXY6J6e8q33NFQ7hF846XiEpLLhv9U6o7lJaJMVaJT86%2BaJ7ACFM3h7z91U4c0ESOl8rKz%2BKEdd6o5N6HeyPJQ8rFXx2VngiOPVyewD7STRkLMN0G72c4fTDq3hcLeSocpBWHTqF5ANH9&X-Amz-Signature=160915c5fa1a5777053b17fe7b74e61ce4024fadd2e8a91431e0568ba8da9b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2F5A5F5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDGEkn%2FmlzrEJXL3fNps4AT0iHAMIttW6Vltfg01F2XSgIgezI7joFeb7FOX1p6%2BsSdoLJ%2BziLZuagSFyfp7AkUj2Aq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMASQ8izg30MGqvMoyrcA7iFSkcStKhPWFtvIIdgqGUov6wtQaqI0vLT5d%2Bp3Ns7ZQ2EJ2z%2BnmQNR6raxdqVZSkAQvxZqxQ2HuWtlrtTFPqmXqvxCDNj2lSz7cSblz7lGrqliV%2FUZfG%2FAce9QrDk4BCabaHU%2F1AYAytCm3lddz%2B062pWVi3Y7Q8Ab5RdJaVMlEm7C%2BJgkMVYD3gLquk2L8p6eC%2FeS%2BoXT%2FhsRp%2F2mPklbOHctp2C0W9lqRBKblwTX%2FlPbkRKcd2p33u5TcutzbK75jMwf7TEhPDUeohvj4keND950ndHI4ZsauqLP257466wu82NomixCQLIFp5zU4mas7FHwsaDls3VUU%2FAklefXKYvGnQTfwWS%2FUNDqfjF3UIsek1T58wAcoaPW%2FFKJ0PzvFsgzCUBIz%2F2aa4xXCSc2u2aNv%2B6hGYl%2FrYdR83H%2BDes%2FAIVFEc5u%2BnP05uVAhPuf51DeqPUmFhYzAv5MLQwZ%2FF3O7%2FrER47gaNbKhPAtjq1MfHb5OSrV8NIbXwrj1lqrlL9FU%2FJL0MkTzkgYOK%2BqYgG96JEUViq7W4t3YMT047vX%2BRNMYXcL85IATNLT2GIMBAsydoC4e8YOBmwSIxzafVpky9f8SaXDgyz67LF0vYX4M%2Fb8OsealBCMOeq5sIGOqUBDPLSz4q85QxS4eXLKewvx1UIeB%2B1dR8Q%2Bzes5dpJEQvmaC%2BD2y4shTelK5G%2FF6Elz8tQWpLJ%2FjgWuma%2FXY6J6e8q33NFQ7hF846XiEpLLhv9U6o7lJaJMVaJT86%2BaJ7ACFM3h7z91U4c0ESOl8rKz%2BKEdd6o5N6HeyPJQ8rFXx2VngiOPVyewD7STRkLMN0G72c4fTDq3hcLeSocpBWHTqF5ANH9&X-Amz-Signature=145040b21a50b48249ed5618f988b5e03d12c725c591e1c966b98da96972c677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2F5A5F5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDGEkn%2FmlzrEJXL3fNps4AT0iHAMIttW6Vltfg01F2XSgIgezI7joFeb7FOX1p6%2BsSdoLJ%2BziLZuagSFyfp7AkUj2Aq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMASQ8izg30MGqvMoyrcA7iFSkcStKhPWFtvIIdgqGUov6wtQaqI0vLT5d%2Bp3Ns7ZQ2EJ2z%2BnmQNR6raxdqVZSkAQvxZqxQ2HuWtlrtTFPqmXqvxCDNj2lSz7cSblz7lGrqliV%2FUZfG%2FAce9QrDk4BCabaHU%2F1AYAytCm3lddz%2B062pWVi3Y7Q8Ab5RdJaVMlEm7C%2BJgkMVYD3gLquk2L8p6eC%2FeS%2BoXT%2FhsRp%2F2mPklbOHctp2C0W9lqRBKblwTX%2FlPbkRKcd2p33u5TcutzbK75jMwf7TEhPDUeohvj4keND950ndHI4ZsauqLP257466wu82NomixCQLIFp5zU4mas7FHwsaDls3VUU%2FAklefXKYvGnQTfwWS%2FUNDqfjF3UIsek1T58wAcoaPW%2FFKJ0PzvFsgzCUBIz%2F2aa4xXCSc2u2aNv%2B6hGYl%2FrYdR83H%2BDes%2FAIVFEc5u%2BnP05uVAhPuf51DeqPUmFhYzAv5MLQwZ%2FF3O7%2FrER47gaNbKhPAtjq1MfHb5OSrV8NIbXwrj1lqrlL9FU%2FJL0MkTzkgYOK%2BqYgG96JEUViq7W4t3YMT047vX%2BRNMYXcL85IATNLT2GIMBAsydoC4e8YOBmwSIxzafVpky9f8SaXDgyz67LF0vYX4M%2Fb8OsealBCMOeq5sIGOqUBDPLSz4q85QxS4eXLKewvx1UIeB%2B1dR8Q%2Bzes5dpJEQvmaC%2BD2y4shTelK5G%2FF6Elz8tQWpLJ%2FjgWuma%2FXY6J6e8q33NFQ7hF846XiEpLLhv9U6o7lJaJMVaJT86%2BaJ7ACFM3h7z91U4c0ESOl8rKz%2BKEdd6o5N6HeyPJQ8rFXx2VngiOPVyewD7STRkLMN0G72c4fTDq3hcLeSocpBWHTqF5ANH9&X-Amz-Signature=12e80e63ab195f708e55742433b06830117ac10071866e7864454722f3493ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
