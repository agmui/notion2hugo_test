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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AUFPLIW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj0RWrj8KzD71kpBg16ID1d9HWebA6zbqlvfp%2FFO0gOgIged3PyfrR%2BBKmuMuxt1OkPaVhlIYryLisjKM59i6OitQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMECWr%2FkArDsw8ffFircA%2BJCjpHqoE9L%2FP8%2F5S%2BZcIyHMLegNPsJoWNB83xplBTp9ZGDISx%2B696Uv5cBGiz5B7IWzEfBzyufE%2FWHZ%2BDDQY0mIDxBLvKXZmzVHszDEiBm%2FGe72VnU%2BJQnPIdQLjL%2BuO7LkJUiG8nQUSA5ZE232pxjgOKOo1rUqm2EKbYuUoSX3Zk%2BUIvXmz15FMIddBLzswS%2BYpv5mCHh1%2FFjIQeUuwzkqhbhmRGAHdbqkA5XZ9dEB6esOcpgdPhOrdDfPCtoyHvl4l4Xak0pegPKjAaSfxRSRgCKuDiv0zlp6CPm4xFmbELAPA856XiNI2TLcXka9I2ONkpTuPRXCA4BziMpsBa7I5fzc%2BBwmHXLnrgxj9QcF%2FSeqxml0v2qM68Qn6SgqHZVLmhcxZfnvTnGPDeeJ6g97nTq2p39U0bP9qdufftqnQwjz1zL8GS35sWQ%2FlesWYugAOUFm3SykA92nH1PKhwgQChN7hmuSG5W%2BZlLDEnm7RurkgoLwbVMpjRPv%2FIpllrjGZeuGdxSJdwC1pX9c1oWlKQwJg%2FbdpQ6AGPRjfKeTfPwE0QFxgrPTP0ylu%2BrWh6lz8MVeOke3DwU7fRBxmUpL5YfU6Qf%2FuBj1qLGIMWkUtpNHZKfJpKPExYOMI75v8MGOqUBMelLT6luDDTZ3tMtggsPvbP9miR386XwGwuY1Wo6KKfrEFFFT1WuNHKFTCrGzFFATq%2F1Ls0lMgFXcMpuMiODLWEvquoQnGB8hrzgBbCRfHfT%2BUDi0CGOkAjOk3fpMh6MXGhrw%2Bzj8HrOYYCgC4fQcd5UPIBog4%2BdvCtvu1qbfnuHt%2F2Ws89ujMQn00lgnI2LstiMiJV26U1gEKPEDKuWo1rsxDKP&X-Amz-Signature=595f77347e4b59f0869d619de28d4d9f682dfc08adc5f5a5544f46b5b0362f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AUFPLIW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj0RWrj8KzD71kpBg16ID1d9HWebA6zbqlvfp%2FFO0gOgIged3PyfrR%2BBKmuMuxt1OkPaVhlIYryLisjKM59i6OitQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMECWr%2FkArDsw8ffFircA%2BJCjpHqoE9L%2FP8%2F5S%2BZcIyHMLegNPsJoWNB83xplBTp9ZGDISx%2B696Uv5cBGiz5B7IWzEfBzyufE%2FWHZ%2BDDQY0mIDxBLvKXZmzVHszDEiBm%2FGe72VnU%2BJQnPIdQLjL%2BuO7LkJUiG8nQUSA5ZE232pxjgOKOo1rUqm2EKbYuUoSX3Zk%2BUIvXmz15FMIddBLzswS%2BYpv5mCHh1%2FFjIQeUuwzkqhbhmRGAHdbqkA5XZ9dEB6esOcpgdPhOrdDfPCtoyHvl4l4Xak0pegPKjAaSfxRSRgCKuDiv0zlp6CPm4xFmbELAPA856XiNI2TLcXka9I2ONkpTuPRXCA4BziMpsBa7I5fzc%2BBwmHXLnrgxj9QcF%2FSeqxml0v2qM68Qn6SgqHZVLmhcxZfnvTnGPDeeJ6g97nTq2p39U0bP9qdufftqnQwjz1zL8GS35sWQ%2FlesWYugAOUFm3SykA92nH1PKhwgQChN7hmuSG5W%2BZlLDEnm7RurkgoLwbVMpjRPv%2FIpllrjGZeuGdxSJdwC1pX9c1oWlKQwJg%2FbdpQ6AGPRjfKeTfPwE0QFxgrPTP0ylu%2BrWh6lz8MVeOke3DwU7fRBxmUpL5YfU6Qf%2FuBj1qLGIMWkUtpNHZKfJpKPExYOMI75v8MGOqUBMelLT6luDDTZ3tMtggsPvbP9miR386XwGwuY1Wo6KKfrEFFFT1WuNHKFTCrGzFFATq%2F1Ls0lMgFXcMpuMiODLWEvquoQnGB8hrzgBbCRfHfT%2BUDi0CGOkAjOk3fpMh6MXGhrw%2Bzj8HrOYYCgC4fQcd5UPIBog4%2BdvCtvu1qbfnuHt%2F2Ws89ujMQn00lgnI2LstiMiJV26U1gEKPEDKuWo1rsxDKP&X-Amz-Signature=8228bf8f48f5e2830e0b1b6e97ad66d1e03ed951b92e5e4172b7da1c79e296ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AUFPLIW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj0RWrj8KzD71kpBg16ID1d9HWebA6zbqlvfp%2FFO0gOgIged3PyfrR%2BBKmuMuxt1OkPaVhlIYryLisjKM59i6OitQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMECWr%2FkArDsw8ffFircA%2BJCjpHqoE9L%2FP8%2F5S%2BZcIyHMLegNPsJoWNB83xplBTp9ZGDISx%2B696Uv5cBGiz5B7IWzEfBzyufE%2FWHZ%2BDDQY0mIDxBLvKXZmzVHszDEiBm%2FGe72VnU%2BJQnPIdQLjL%2BuO7LkJUiG8nQUSA5ZE232pxjgOKOo1rUqm2EKbYuUoSX3Zk%2BUIvXmz15FMIddBLzswS%2BYpv5mCHh1%2FFjIQeUuwzkqhbhmRGAHdbqkA5XZ9dEB6esOcpgdPhOrdDfPCtoyHvl4l4Xak0pegPKjAaSfxRSRgCKuDiv0zlp6CPm4xFmbELAPA856XiNI2TLcXka9I2ONkpTuPRXCA4BziMpsBa7I5fzc%2BBwmHXLnrgxj9QcF%2FSeqxml0v2qM68Qn6SgqHZVLmhcxZfnvTnGPDeeJ6g97nTq2p39U0bP9qdufftqnQwjz1zL8GS35sWQ%2FlesWYugAOUFm3SykA92nH1PKhwgQChN7hmuSG5W%2BZlLDEnm7RurkgoLwbVMpjRPv%2FIpllrjGZeuGdxSJdwC1pX9c1oWlKQwJg%2FbdpQ6AGPRjfKeTfPwE0QFxgrPTP0ylu%2BrWh6lz8MVeOke3DwU7fRBxmUpL5YfU6Qf%2FuBj1qLGIMWkUtpNHZKfJpKPExYOMI75v8MGOqUBMelLT6luDDTZ3tMtggsPvbP9miR386XwGwuY1Wo6KKfrEFFFT1WuNHKFTCrGzFFATq%2F1Ls0lMgFXcMpuMiODLWEvquoQnGB8hrzgBbCRfHfT%2BUDi0CGOkAjOk3fpMh6MXGhrw%2Bzj8HrOYYCgC4fQcd5UPIBog4%2BdvCtvu1qbfnuHt%2F2Ws89ujMQn00lgnI2LstiMiJV26U1gEKPEDKuWo1rsxDKP&X-Amz-Signature=dbaadd999a59ea7eb97ad0947fdc4cab3e8048ee6ce98d82d0f49b2abab76f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AUFPLIW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj0RWrj8KzD71kpBg16ID1d9HWebA6zbqlvfp%2FFO0gOgIged3PyfrR%2BBKmuMuxt1OkPaVhlIYryLisjKM59i6OitQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMECWr%2FkArDsw8ffFircA%2BJCjpHqoE9L%2FP8%2F5S%2BZcIyHMLegNPsJoWNB83xplBTp9ZGDISx%2B696Uv5cBGiz5B7IWzEfBzyufE%2FWHZ%2BDDQY0mIDxBLvKXZmzVHszDEiBm%2FGe72VnU%2BJQnPIdQLjL%2BuO7LkJUiG8nQUSA5ZE232pxjgOKOo1rUqm2EKbYuUoSX3Zk%2BUIvXmz15FMIddBLzswS%2BYpv5mCHh1%2FFjIQeUuwzkqhbhmRGAHdbqkA5XZ9dEB6esOcpgdPhOrdDfPCtoyHvl4l4Xak0pegPKjAaSfxRSRgCKuDiv0zlp6CPm4xFmbELAPA856XiNI2TLcXka9I2ONkpTuPRXCA4BziMpsBa7I5fzc%2BBwmHXLnrgxj9QcF%2FSeqxml0v2qM68Qn6SgqHZVLmhcxZfnvTnGPDeeJ6g97nTq2p39U0bP9qdufftqnQwjz1zL8GS35sWQ%2FlesWYugAOUFm3SykA92nH1PKhwgQChN7hmuSG5W%2BZlLDEnm7RurkgoLwbVMpjRPv%2FIpllrjGZeuGdxSJdwC1pX9c1oWlKQwJg%2FbdpQ6AGPRjfKeTfPwE0QFxgrPTP0ylu%2BrWh6lz8MVeOke3DwU7fRBxmUpL5YfU6Qf%2FuBj1qLGIMWkUtpNHZKfJpKPExYOMI75v8MGOqUBMelLT6luDDTZ3tMtggsPvbP9miR386XwGwuY1Wo6KKfrEFFFT1WuNHKFTCrGzFFATq%2F1Ls0lMgFXcMpuMiODLWEvquoQnGB8hrzgBbCRfHfT%2BUDi0CGOkAjOk3fpMh6MXGhrw%2Bzj8HrOYYCgC4fQcd5UPIBog4%2BdvCtvu1qbfnuHt%2F2Ws89ujMQn00lgnI2LstiMiJV26U1gEKPEDKuWo1rsxDKP&X-Amz-Signature=a1c0c63f9ab3537ebdcfbecfeffbebd777caca7b4dd67a0debf63aca8edc6912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AUFPLIW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj0RWrj8KzD71kpBg16ID1d9HWebA6zbqlvfp%2FFO0gOgIged3PyfrR%2BBKmuMuxt1OkPaVhlIYryLisjKM59i6OitQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMECWr%2FkArDsw8ffFircA%2BJCjpHqoE9L%2FP8%2F5S%2BZcIyHMLegNPsJoWNB83xplBTp9ZGDISx%2B696Uv5cBGiz5B7IWzEfBzyufE%2FWHZ%2BDDQY0mIDxBLvKXZmzVHszDEiBm%2FGe72VnU%2BJQnPIdQLjL%2BuO7LkJUiG8nQUSA5ZE232pxjgOKOo1rUqm2EKbYuUoSX3Zk%2BUIvXmz15FMIddBLzswS%2BYpv5mCHh1%2FFjIQeUuwzkqhbhmRGAHdbqkA5XZ9dEB6esOcpgdPhOrdDfPCtoyHvl4l4Xak0pegPKjAaSfxRSRgCKuDiv0zlp6CPm4xFmbELAPA856XiNI2TLcXka9I2ONkpTuPRXCA4BziMpsBa7I5fzc%2BBwmHXLnrgxj9QcF%2FSeqxml0v2qM68Qn6SgqHZVLmhcxZfnvTnGPDeeJ6g97nTq2p39U0bP9qdufftqnQwjz1zL8GS35sWQ%2FlesWYugAOUFm3SykA92nH1PKhwgQChN7hmuSG5W%2BZlLDEnm7RurkgoLwbVMpjRPv%2FIpllrjGZeuGdxSJdwC1pX9c1oWlKQwJg%2FbdpQ6AGPRjfKeTfPwE0QFxgrPTP0ylu%2BrWh6lz8MVeOke3DwU7fRBxmUpL5YfU6Qf%2FuBj1qLGIMWkUtpNHZKfJpKPExYOMI75v8MGOqUBMelLT6luDDTZ3tMtggsPvbP9miR386XwGwuY1Wo6KKfrEFFFT1WuNHKFTCrGzFFATq%2F1Ls0lMgFXcMpuMiODLWEvquoQnGB8hrzgBbCRfHfT%2BUDi0CGOkAjOk3fpMh6MXGhrw%2Bzj8HrOYYCgC4fQcd5UPIBog4%2BdvCtvu1qbfnuHt%2F2Ws89ujMQn00lgnI2LstiMiJV26U1gEKPEDKuWo1rsxDKP&X-Amz-Signature=f454e69c1b22030eb45c29d6c0a1953ed23e25565a9d24a66c09dca60d93b3bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
