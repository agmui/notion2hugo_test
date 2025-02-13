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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC2JCUOE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnWQxkrz5CNLO7d8CrircZCok2YIsNTDlODdxoB35HAQIgRbgy92kHfR9PZZUSsj0Oaa17JmCmGZ4jLMxPpSM44Xwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMKuj9mHDsnenEFALSrcAzToMiaNaIG47FBIwTEDfin0bmfBq4EtGEArc%2FWQdnRAPRk5TNMWvLFwW4SkgzQaDi073XBAtf1nTs%2BggK5aLynqI1OzMI3hysbKUQV6rxLG8NnldOsOj1A6V4eTgl3RtrlwXAlRt9qWefYdX9azxeMk1tOS%2Brp7V1YcLLBMBelkgi0p7cyxx1C0zU%2F4yvAG2aq5o%2BIgXyZYaq4hVvCX0Xtjbz8elHUbvaOk87goKNjfSHIOw9tWXf4T0X8tVms5Qp9VmNZhebt0pW0nYJzuo%2FDprHU9jqzJFMvnwthGCSBTN98WrH8E%2BUGlkzoXARDxDNJikdw%2FlE8ToD2IQrPKSotzNklFM7PaaGdfWel6aDGJp8Tw5bP1HK%2BJG9QFWvBAycjQ50Fa37iBPXXQYGtBgyD3bunDCf2nhdmceTDWxZ3MXMkXzsZvzH75SEElJHs1hTTJ4ZowwgzyKF3oVGkoAmqykPRIXV333ZF2A7lm4fc4a1UCqr1lytYBBBCMEURMT23WlFG4M2Ny%2BN9eqpBpRARhh02oXc9gM7IMAHIo3oeMpLOTsNneri2IMUrgSlAzqLEjiQ2gPQ%2Boq%2FSat01NlYSkRMR3hpFU7QPo2PWo3%2FcUs46U0ddnNSOVWrDhMObeuL0GOqUBfw19xYI%2Bazl0tzbf8z3nrX1M2ZBG2sybkZrbMbuEc%2FN3KSC%2FEqRTAimlbsiiyZEOIg5JCtXd48LpwhNuNhytnJw2gr8ejcMChu41hpSH8RIv8miKJIQ%2BJvofV5XwD22d%2BR3NuW1x5gLCv6IJ6%2B4qxN99ECGTWSEuQAGUJ4ibRPR8kXEChCyJb15d%2BaALmKfoVaSWfFqiQ%2B652EK6g58BE2TSbDbj&X-Amz-Signature=340a5a853d0f87d8f205457eee465ef3da51d5769d30010df3c05a66eb2d9e23&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC2JCUOE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnWQxkrz5CNLO7d8CrircZCok2YIsNTDlODdxoB35HAQIgRbgy92kHfR9PZZUSsj0Oaa17JmCmGZ4jLMxPpSM44Xwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMKuj9mHDsnenEFALSrcAzToMiaNaIG47FBIwTEDfin0bmfBq4EtGEArc%2FWQdnRAPRk5TNMWvLFwW4SkgzQaDi073XBAtf1nTs%2BggK5aLynqI1OzMI3hysbKUQV6rxLG8NnldOsOj1A6V4eTgl3RtrlwXAlRt9qWefYdX9azxeMk1tOS%2Brp7V1YcLLBMBelkgi0p7cyxx1C0zU%2F4yvAG2aq5o%2BIgXyZYaq4hVvCX0Xtjbz8elHUbvaOk87goKNjfSHIOw9tWXf4T0X8tVms5Qp9VmNZhebt0pW0nYJzuo%2FDprHU9jqzJFMvnwthGCSBTN98WrH8E%2BUGlkzoXARDxDNJikdw%2FlE8ToD2IQrPKSotzNklFM7PaaGdfWel6aDGJp8Tw5bP1HK%2BJG9QFWvBAycjQ50Fa37iBPXXQYGtBgyD3bunDCf2nhdmceTDWxZ3MXMkXzsZvzH75SEElJHs1hTTJ4ZowwgzyKF3oVGkoAmqykPRIXV333ZF2A7lm4fc4a1UCqr1lytYBBBCMEURMT23WlFG4M2Ny%2BN9eqpBpRARhh02oXc9gM7IMAHIo3oeMpLOTsNneri2IMUrgSlAzqLEjiQ2gPQ%2Boq%2FSat01NlYSkRMR3hpFU7QPo2PWo3%2FcUs46U0ddnNSOVWrDhMObeuL0GOqUBfw19xYI%2Bazl0tzbf8z3nrX1M2ZBG2sybkZrbMbuEc%2FN3KSC%2FEqRTAimlbsiiyZEOIg5JCtXd48LpwhNuNhytnJw2gr8ejcMChu41hpSH8RIv8miKJIQ%2BJvofV5XwD22d%2BR3NuW1x5gLCv6IJ6%2B4qxN99ECGTWSEuQAGUJ4ibRPR8kXEChCyJb15d%2BaALmKfoVaSWfFqiQ%2B652EK6g58BE2TSbDbj&X-Amz-Signature=d3f36dc84d94563f8b0f1f69445868fa9b0773255be2a4413a2b063348f3f5fa&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC2JCUOE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnWQxkrz5CNLO7d8CrircZCok2YIsNTDlODdxoB35HAQIgRbgy92kHfR9PZZUSsj0Oaa17JmCmGZ4jLMxPpSM44Xwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMKuj9mHDsnenEFALSrcAzToMiaNaIG47FBIwTEDfin0bmfBq4EtGEArc%2FWQdnRAPRk5TNMWvLFwW4SkgzQaDi073XBAtf1nTs%2BggK5aLynqI1OzMI3hysbKUQV6rxLG8NnldOsOj1A6V4eTgl3RtrlwXAlRt9qWefYdX9azxeMk1tOS%2Brp7V1YcLLBMBelkgi0p7cyxx1C0zU%2F4yvAG2aq5o%2BIgXyZYaq4hVvCX0Xtjbz8elHUbvaOk87goKNjfSHIOw9tWXf4T0X8tVms5Qp9VmNZhebt0pW0nYJzuo%2FDprHU9jqzJFMvnwthGCSBTN98WrH8E%2BUGlkzoXARDxDNJikdw%2FlE8ToD2IQrPKSotzNklFM7PaaGdfWel6aDGJp8Tw5bP1HK%2BJG9QFWvBAycjQ50Fa37iBPXXQYGtBgyD3bunDCf2nhdmceTDWxZ3MXMkXzsZvzH75SEElJHs1hTTJ4ZowwgzyKF3oVGkoAmqykPRIXV333ZF2A7lm4fc4a1UCqr1lytYBBBCMEURMT23WlFG4M2Ny%2BN9eqpBpRARhh02oXc9gM7IMAHIo3oeMpLOTsNneri2IMUrgSlAzqLEjiQ2gPQ%2Boq%2FSat01NlYSkRMR3hpFU7QPo2PWo3%2FcUs46U0ddnNSOVWrDhMObeuL0GOqUBfw19xYI%2Bazl0tzbf8z3nrX1M2ZBG2sybkZrbMbuEc%2FN3KSC%2FEqRTAimlbsiiyZEOIg5JCtXd48LpwhNuNhytnJw2gr8ejcMChu41hpSH8RIv8miKJIQ%2BJvofV5XwD22d%2BR3NuW1x5gLCv6IJ6%2B4qxN99ECGTWSEuQAGUJ4ibRPR8kXEChCyJb15d%2BaALmKfoVaSWfFqiQ%2B652EK6g58BE2TSbDbj&X-Amz-Signature=89e9d2c181adcfcdae66158e8eabc722b6297deb8f80cbbfcfa2aae74ee91200&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC2JCUOE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnWQxkrz5CNLO7d8CrircZCok2YIsNTDlODdxoB35HAQIgRbgy92kHfR9PZZUSsj0Oaa17JmCmGZ4jLMxPpSM44Xwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMKuj9mHDsnenEFALSrcAzToMiaNaIG47FBIwTEDfin0bmfBq4EtGEArc%2FWQdnRAPRk5TNMWvLFwW4SkgzQaDi073XBAtf1nTs%2BggK5aLynqI1OzMI3hysbKUQV6rxLG8NnldOsOj1A6V4eTgl3RtrlwXAlRt9qWefYdX9azxeMk1tOS%2Brp7V1YcLLBMBelkgi0p7cyxx1C0zU%2F4yvAG2aq5o%2BIgXyZYaq4hVvCX0Xtjbz8elHUbvaOk87goKNjfSHIOw9tWXf4T0X8tVms5Qp9VmNZhebt0pW0nYJzuo%2FDprHU9jqzJFMvnwthGCSBTN98WrH8E%2BUGlkzoXARDxDNJikdw%2FlE8ToD2IQrPKSotzNklFM7PaaGdfWel6aDGJp8Tw5bP1HK%2BJG9QFWvBAycjQ50Fa37iBPXXQYGtBgyD3bunDCf2nhdmceTDWxZ3MXMkXzsZvzH75SEElJHs1hTTJ4ZowwgzyKF3oVGkoAmqykPRIXV333ZF2A7lm4fc4a1UCqr1lytYBBBCMEURMT23WlFG4M2Ny%2BN9eqpBpRARhh02oXc9gM7IMAHIo3oeMpLOTsNneri2IMUrgSlAzqLEjiQ2gPQ%2Boq%2FSat01NlYSkRMR3hpFU7QPo2PWo3%2FcUs46U0ddnNSOVWrDhMObeuL0GOqUBfw19xYI%2Bazl0tzbf8z3nrX1M2ZBG2sybkZrbMbuEc%2FN3KSC%2FEqRTAimlbsiiyZEOIg5JCtXd48LpwhNuNhytnJw2gr8ejcMChu41hpSH8RIv8miKJIQ%2BJvofV5XwD22d%2BR3NuW1x5gLCv6IJ6%2B4qxN99ECGTWSEuQAGUJ4ibRPR8kXEChCyJb15d%2BaALmKfoVaSWfFqiQ%2B652EK6g58BE2TSbDbj&X-Amz-Signature=d404e30313a6c1d369617a25a6f99b95112926b0eddd41231d1a1bedec6fc554&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC2JCUOE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnWQxkrz5CNLO7d8CrircZCok2YIsNTDlODdxoB35HAQIgRbgy92kHfR9PZZUSsj0Oaa17JmCmGZ4jLMxPpSM44Xwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMKuj9mHDsnenEFALSrcAzToMiaNaIG47FBIwTEDfin0bmfBq4EtGEArc%2FWQdnRAPRk5TNMWvLFwW4SkgzQaDi073XBAtf1nTs%2BggK5aLynqI1OzMI3hysbKUQV6rxLG8NnldOsOj1A6V4eTgl3RtrlwXAlRt9qWefYdX9azxeMk1tOS%2Brp7V1YcLLBMBelkgi0p7cyxx1C0zU%2F4yvAG2aq5o%2BIgXyZYaq4hVvCX0Xtjbz8elHUbvaOk87goKNjfSHIOw9tWXf4T0X8tVms5Qp9VmNZhebt0pW0nYJzuo%2FDprHU9jqzJFMvnwthGCSBTN98WrH8E%2BUGlkzoXARDxDNJikdw%2FlE8ToD2IQrPKSotzNklFM7PaaGdfWel6aDGJp8Tw5bP1HK%2BJG9QFWvBAycjQ50Fa37iBPXXQYGtBgyD3bunDCf2nhdmceTDWxZ3MXMkXzsZvzH75SEElJHs1hTTJ4ZowwgzyKF3oVGkoAmqykPRIXV333ZF2A7lm4fc4a1UCqr1lytYBBBCMEURMT23WlFG4M2Ny%2BN9eqpBpRARhh02oXc9gM7IMAHIo3oeMpLOTsNneri2IMUrgSlAzqLEjiQ2gPQ%2Boq%2FSat01NlYSkRMR3hpFU7QPo2PWo3%2FcUs46U0ddnNSOVWrDhMObeuL0GOqUBfw19xYI%2Bazl0tzbf8z3nrX1M2ZBG2sybkZrbMbuEc%2FN3KSC%2FEqRTAimlbsiiyZEOIg5JCtXd48LpwhNuNhytnJw2gr8ejcMChu41hpSH8RIv8miKJIQ%2BJvofV5XwD22d%2BR3NuW1x5gLCv6IJ6%2B4qxN99ECGTWSEuQAGUJ4ibRPR8kXEChCyJb15d%2BaALmKfoVaSWfFqiQ%2B652EK6g58BE2TSbDbj&X-Amz-Signature=982677a6acbf4be217288f43832255e667d148af267b3ab423c169123160ab01&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
