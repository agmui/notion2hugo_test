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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2JW45PL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcgTtVvgTjhnjPXJWnOEE5POJlxqzdtik97r8iL2LYBgIgRdZKCg0dx2efuk9fqHz7aNQ0hUsRxBjE36ZVKtPUPsgq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDOgSHGK7aCL1tCZ1jircA32MI1Lj5cQRRl3p6%2BnVPiBcPGzycee1u%2F8wYGSiCsthpTjUiXwwo%2FJoMc5V0EpW%2BlZMVTAm5cKyPVZcGBsGFqas3IjY92tcaSRajfDMPO2CdSJECWDeyQuTqkKOnlG25Fko%2BuVt3hWv9R4Klqua%2BgokBP%2BAfrvkQI4qJ8xX2yvTCuI6hIZ03VfpaqasdETtAk3Gag%2FlZDkG1LHIPyezSzBKCb83JJH9HiJXK9lRLboOi%2BSsmZDK%2Fdkkb75kyOW0hSAXRoZPLwW4fkGXbFlK%2BgpGRma3kkDatMZ8ZFw%2BCJqJcn276DGuTc3G1Jbv859e7RCvGgpsiWNLOxEnsarfcmNT2vInvTPQDYxLjet%2FL%2BH4zXGsDcO6ax46i1vQIBf84YccTecKEh6gtbA4h%2BydS%2Bzuh9bTrG4ThZBDcoKEu7E2N2zFK7Eua83didq7vV3mElIvh1epW%2FPR2n04BMSudsqf41wjUjFfiyuW4ISAgn9LeTM%2BJZY1JqBrsERRMsk38rwfHiNm74%2BgXKnPSWHQLwbrX4HUhPmBWfE68keLVcpA5y%2FnhaxoKhJA2RHl9WdA5%2Bej5qEmVk5JCmEI2%2FJHdHFgHMpoiK15z4wv%2BhMHir2gz%2BFHJc%2FbQdofE5vNMO%2FstsAGOqUBspYxDGVRBWiotGg2o1n7z5Jmk2gSIpR1mgbW3Li%2FxAdmfjKngy%2FyPBlJCYnTcpHl%2FabXXxPxl5ZDrDkVIyuALTFVvrMo%2B2VILVl6K%2BcN6s5bh4O6vis6qbGdsKCUbzUHVB7VZxAn0jeCSagDDYPIBlwam4RPirKBJSxTqY4rF9ihEuVerk5ubuZi0lyMLempJkulI5MsCQr568j5bNwOnGLFT4SK&X-Amz-Signature=dfa5fbda44a80ac94b329a1b6a0ca1041973639762947047cbc8f91e24958592&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2JW45PL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcgTtVvgTjhnjPXJWnOEE5POJlxqzdtik97r8iL2LYBgIgRdZKCg0dx2efuk9fqHz7aNQ0hUsRxBjE36ZVKtPUPsgq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDOgSHGK7aCL1tCZ1jircA32MI1Lj5cQRRl3p6%2BnVPiBcPGzycee1u%2F8wYGSiCsthpTjUiXwwo%2FJoMc5V0EpW%2BlZMVTAm5cKyPVZcGBsGFqas3IjY92tcaSRajfDMPO2CdSJECWDeyQuTqkKOnlG25Fko%2BuVt3hWv9R4Klqua%2BgokBP%2BAfrvkQI4qJ8xX2yvTCuI6hIZ03VfpaqasdETtAk3Gag%2FlZDkG1LHIPyezSzBKCb83JJH9HiJXK9lRLboOi%2BSsmZDK%2Fdkkb75kyOW0hSAXRoZPLwW4fkGXbFlK%2BgpGRma3kkDatMZ8ZFw%2BCJqJcn276DGuTc3G1Jbv859e7RCvGgpsiWNLOxEnsarfcmNT2vInvTPQDYxLjet%2FL%2BH4zXGsDcO6ax46i1vQIBf84YccTecKEh6gtbA4h%2BydS%2Bzuh9bTrG4ThZBDcoKEu7E2N2zFK7Eua83didq7vV3mElIvh1epW%2FPR2n04BMSudsqf41wjUjFfiyuW4ISAgn9LeTM%2BJZY1JqBrsERRMsk38rwfHiNm74%2BgXKnPSWHQLwbrX4HUhPmBWfE68keLVcpA5y%2FnhaxoKhJA2RHl9WdA5%2Bej5qEmVk5JCmEI2%2FJHdHFgHMpoiK15z4wv%2BhMHir2gz%2BFHJc%2FbQdofE5vNMO%2FstsAGOqUBspYxDGVRBWiotGg2o1n7z5Jmk2gSIpR1mgbW3Li%2FxAdmfjKngy%2FyPBlJCYnTcpHl%2FabXXxPxl5ZDrDkVIyuALTFVvrMo%2B2VILVl6K%2BcN6s5bh4O6vis6qbGdsKCUbzUHVB7VZxAn0jeCSagDDYPIBlwam4RPirKBJSxTqY4rF9ihEuVerk5ubuZi0lyMLempJkulI5MsCQr568j5bNwOnGLFT4SK&X-Amz-Signature=eaf764a0d6f3f52a602369d75c2192a1a68b36d3137262121cdf13c4240baa4e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2JW45PL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcgTtVvgTjhnjPXJWnOEE5POJlxqzdtik97r8iL2LYBgIgRdZKCg0dx2efuk9fqHz7aNQ0hUsRxBjE36ZVKtPUPsgq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDOgSHGK7aCL1tCZ1jircA32MI1Lj5cQRRl3p6%2BnVPiBcPGzycee1u%2F8wYGSiCsthpTjUiXwwo%2FJoMc5V0EpW%2BlZMVTAm5cKyPVZcGBsGFqas3IjY92tcaSRajfDMPO2CdSJECWDeyQuTqkKOnlG25Fko%2BuVt3hWv9R4Klqua%2BgokBP%2BAfrvkQI4qJ8xX2yvTCuI6hIZ03VfpaqasdETtAk3Gag%2FlZDkG1LHIPyezSzBKCb83JJH9HiJXK9lRLboOi%2BSsmZDK%2Fdkkb75kyOW0hSAXRoZPLwW4fkGXbFlK%2BgpGRma3kkDatMZ8ZFw%2BCJqJcn276DGuTc3G1Jbv859e7RCvGgpsiWNLOxEnsarfcmNT2vInvTPQDYxLjet%2FL%2BH4zXGsDcO6ax46i1vQIBf84YccTecKEh6gtbA4h%2BydS%2Bzuh9bTrG4ThZBDcoKEu7E2N2zFK7Eua83didq7vV3mElIvh1epW%2FPR2n04BMSudsqf41wjUjFfiyuW4ISAgn9LeTM%2BJZY1JqBrsERRMsk38rwfHiNm74%2BgXKnPSWHQLwbrX4HUhPmBWfE68keLVcpA5y%2FnhaxoKhJA2RHl9WdA5%2Bej5qEmVk5JCmEI2%2FJHdHFgHMpoiK15z4wv%2BhMHir2gz%2BFHJc%2FbQdofE5vNMO%2FstsAGOqUBspYxDGVRBWiotGg2o1n7z5Jmk2gSIpR1mgbW3Li%2FxAdmfjKngy%2FyPBlJCYnTcpHl%2FabXXxPxl5ZDrDkVIyuALTFVvrMo%2B2VILVl6K%2BcN6s5bh4O6vis6qbGdsKCUbzUHVB7VZxAn0jeCSagDDYPIBlwam4RPirKBJSxTqY4rF9ihEuVerk5ubuZi0lyMLempJkulI5MsCQr568j5bNwOnGLFT4SK&X-Amz-Signature=a1d1860055e5649c49ac02b9b7ab150fdcf2bed44246e4a7bd5bbeca38f260b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2JW45PL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcgTtVvgTjhnjPXJWnOEE5POJlxqzdtik97r8iL2LYBgIgRdZKCg0dx2efuk9fqHz7aNQ0hUsRxBjE36ZVKtPUPsgq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDOgSHGK7aCL1tCZ1jircA32MI1Lj5cQRRl3p6%2BnVPiBcPGzycee1u%2F8wYGSiCsthpTjUiXwwo%2FJoMc5V0EpW%2BlZMVTAm5cKyPVZcGBsGFqas3IjY92tcaSRajfDMPO2CdSJECWDeyQuTqkKOnlG25Fko%2BuVt3hWv9R4Klqua%2BgokBP%2BAfrvkQI4qJ8xX2yvTCuI6hIZ03VfpaqasdETtAk3Gag%2FlZDkG1LHIPyezSzBKCb83JJH9HiJXK9lRLboOi%2BSsmZDK%2Fdkkb75kyOW0hSAXRoZPLwW4fkGXbFlK%2BgpGRma3kkDatMZ8ZFw%2BCJqJcn276DGuTc3G1Jbv859e7RCvGgpsiWNLOxEnsarfcmNT2vInvTPQDYxLjet%2FL%2BH4zXGsDcO6ax46i1vQIBf84YccTecKEh6gtbA4h%2BydS%2Bzuh9bTrG4ThZBDcoKEu7E2N2zFK7Eua83didq7vV3mElIvh1epW%2FPR2n04BMSudsqf41wjUjFfiyuW4ISAgn9LeTM%2BJZY1JqBrsERRMsk38rwfHiNm74%2BgXKnPSWHQLwbrX4HUhPmBWfE68keLVcpA5y%2FnhaxoKhJA2RHl9WdA5%2Bej5qEmVk5JCmEI2%2FJHdHFgHMpoiK15z4wv%2BhMHir2gz%2BFHJc%2FbQdofE5vNMO%2FstsAGOqUBspYxDGVRBWiotGg2o1n7z5Jmk2gSIpR1mgbW3Li%2FxAdmfjKngy%2FyPBlJCYnTcpHl%2FabXXxPxl5ZDrDkVIyuALTFVvrMo%2B2VILVl6K%2BcN6s5bh4O6vis6qbGdsKCUbzUHVB7VZxAn0jeCSagDDYPIBlwam4RPirKBJSxTqY4rF9ihEuVerk5ubuZi0lyMLempJkulI5MsCQr568j5bNwOnGLFT4SK&X-Amz-Signature=7c7ce201a60dd6f3c799e9c1d70c456d9d0c09ba03a1bf86792714e6e6eedd18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2JW45PL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcgTtVvgTjhnjPXJWnOEE5POJlxqzdtik97r8iL2LYBgIgRdZKCg0dx2efuk9fqHz7aNQ0hUsRxBjE36ZVKtPUPsgq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDOgSHGK7aCL1tCZ1jircA32MI1Lj5cQRRl3p6%2BnVPiBcPGzycee1u%2F8wYGSiCsthpTjUiXwwo%2FJoMc5V0EpW%2BlZMVTAm5cKyPVZcGBsGFqas3IjY92tcaSRajfDMPO2CdSJECWDeyQuTqkKOnlG25Fko%2BuVt3hWv9R4Klqua%2BgokBP%2BAfrvkQI4qJ8xX2yvTCuI6hIZ03VfpaqasdETtAk3Gag%2FlZDkG1LHIPyezSzBKCb83JJH9HiJXK9lRLboOi%2BSsmZDK%2Fdkkb75kyOW0hSAXRoZPLwW4fkGXbFlK%2BgpGRma3kkDatMZ8ZFw%2BCJqJcn276DGuTc3G1Jbv859e7RCvGgpsiWNLOxEnsarfcmNT2vInvTPQDYxLjet%2FL%2BH4zXGsDcO6ax46i1vQIBf84YccTecKEh6gtbA4h%2BydS%2Bzuh9bTrG4ThZBDcoKEu7E2N2zFK7Eua83didq7vV3mElIvh1epW%2FPR2n04BMSudsqf41wjUjFfiyuW4ISAgn9LeTM%2BJZY1JqBrsERRMsk38rwfHiNm74%2BgXKnPSWHQLwbrX4HUhPmBWfE68keLVcpA5y%2FnhaxoKhJA2RHl9WdA5%2Bej5qEmVk5JCmEI2%2FJHdHFgHMpoiK15z4wv%2BhMHir2gz%2BFHJc%2FbQdofE5vNMO%2FstsAGOqUBspYxDGVRBWiotGg2o1n7z5Jmk2gSIpR1mgbW3Li%2FxAdmfjKngy%2FyPBlJCYnTcpHl%2FabXXxPxl5ZDrDkVIyuALTFVvrMo%2B2VILVl6K%2BcN6s5bh4O6vis6qbGdsKCUbzUHVB7VZxAn0jeCSagDDYPIBlwam4RPirKBJSxTqY4rF9ihEuVerk5ubuZi0lyMLempJkulI5MsCQr568j5bNwOnGLFT4SK&X-Amz-Signature=e6a3b134771fbbb872a0e68d994bf22e9897a902082be39087ac75949168a9fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
