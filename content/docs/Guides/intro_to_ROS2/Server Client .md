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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LL3OV4U%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1%2Bq%2Bh7HFT20F0lhGSVIq364PcAlu8vRJI92DJUNcFZwIgWpZ5p1iC2XJphVUIxEFc6GR7v%2FtC6He15n%2Fk1Hi3de0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9N536HYQmRG7gxDyrcA7cSjmX847zgjmM53pnegIFqYFPkd1Fr9IBfhGxKcFLGfvuGcNddAWl5QUDg52hA2CkEe2lIR5j9JRNaOdwbiCVc3WMWyLotHGsDOeajDL8WlS08QU0C%2BGI5K0o5ir2mZ3IxHc2i348XEiHijxVJMam4Ct8%2BtL%2FlajmAatL977lKSkR0CilR5j6Qbv%2F52TmGG3T1xiZwm9E8mepSnYEuRHE6%2FZMgdnwr8dYOprmQairFZlW3a%2BX3Tg%2FFFA4PWDBQj3dji3B3uygFNg83IMG6Spaun2ou4pmVYRuYATDayirCc%2FDn5Qv9%2FqPFKEFle0kAoMsmCR8tb3lcPO2kJAFlK522rb2XwKfV7X2Qf%2FkkLVMrfn7gpekcSyp4ne7OTku4CvlLSuSUApsLTyvb6SHfbqq9fywNKI2%2BRE1oodNz%2BCSZRW7koXuvVb4yJeKk515mP87Wz%2FBrK2kQWxvPDRb%2BVNYaMQVu5e1N%2FE5OoTPXLjZgaZCJ65PD8cRky98kGJEm7gBXRehRNZe5b6PpKU8niploiJWWR60wI%2BdzgnGWtLbkoKI0qYJ3E4sPOsET5Fxu27JuH21IxnHAMOMDGXC%2BNyKVsaXxhZFOgYUUd3uLnMNVoAVRsXcPe8pKGIdyMIWR77wGOqUB9FcZmJqh0uu0al8s4y3mLOFCEk4ENZ5zy1HxZ0v%2B7%2F3J2tViDFIYTLDtzsgZJsBP5ZrKOE0wqWzj2l6%2B6%2FE8tphiNTCnBqv%2FpAZM9Z4UraqVuvVgXS6rFcHbRG9P21xsDFD69kQ3eG7Sgc4tlOtxZjnM8t1zopgiKWHXhgNz%2Bq6vh7g61zGYxFRBU0ny2A5c%2B%2F3gIDsjWNEialP%2BZG6zepGsSiHX&X-Amz-Signature=090b50c42f4d93eb9654bd65ee27d48afe0f8ca025ff9c0a545d62316538a85b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LL3OV4U%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1%2Bq%2Bh7HFT20F0lhGSVIq364PcAlu8vRJI92DJUNcFZwIgWpZ5p1iC2XJphVUIxEFc6GR7v%2FtC6He15n%2Fk1Hi3de0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9N536HYQmRG7gxDyrcA7cSjmX847zgjmM53pnegIFqYFPkd1Fr9IBfhGxKcFLGfvuGcNddAWl5QUDg52hA2CkEe2lIR5j9JRNaOdwbiCVc3WMWyLotHGsDOeajDL8WlS08QU0C%2BGI5K0o5ir2mZ3IxHc2i348XEiHijxVJMam4Ct8%2BtL%2FlajmAatL977lKSkR0CilR5j6Qbv%2F52TmGG3T1xiZwm9E8mepSnYEuRHE6%2FZMgdnwr8dYOprmQairFZlW3a%2BX3Tg%2FFFA4PWDBQj3dji3B3uygFNg83IMG6Spaun2ou4pmVYRuYATDayirCc%2FDn5Qv9%2FqPFKEFle0kAoMsmCR8tb3lcPO2kJAFlK522rb2XwKfV7X2Qf%2FkkLVMrfn7gpekcSyp4ne7OTku4CvlLSuSUApsLTyvb6SHfbqq9fywNKI2%2BRE1oodNz%2BCSZRW7koXuvVb4yJeKk515mP87Wz%2FBrK2kQWxvPDRb%2BVNYaMQVu5e1N%2FE5OoTPXLjZgaZCJ65PD8cRky98kGJEm7gBXRehRNZe5b6PpKU8niploiJWWR60wI%2BdzgnGWtLbkoKI0qYJ3E4sPOsET5Fxu27JuH21IxnHAMOMDGXC%2BNyKVsaXxhZFOgYUUd3uLnMNVoAVRsXcPe8pKGIdyMIWR77wGOqUB9FcZmJqh0uu0al8s4y3mLOFCEk4ENZ5zy1HxZ0v%2B7%2F3J2tViDFIYTLDtzsgZJsBP5ZrKOE0wqWzj2l6%2B6%2FE8tphiNTCnBqv%2FpAZM9Z4UraqVuvVgXS6rFcHbRG9P21xsDFD69kQ3eG7Sgc4tlOtxZjnM8t1zopgiKWHXhgNz%2Bq6vh7g61zGYxFRBU0ny2A5c%2B%2F3gIDsjWNEialP%2BZG6zepGsSiHX&X-Amz-Signature=b5f8a2dac2945e88cda4d5f55b2b16d5c6fbe8382374b3cc177b027eb3c1a5fc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LL3OV4U%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1%2Bq%2Bh7HFT20F0lhGSVIq364PcAlu8vRJI92DJUNcFZwIgWpZ5p1iC2XJphVUIxEFc6GR7v%2FtC6He15n%2Fk1Hi3de0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9N536HYQmRG7gxDyrcA7cSjmX847zgjmM53pnegIFqYFPkd1Fr9IBfhGxKcFLGfvuGcNddAWl5QUDg52hA2CkEe2lIR5j9JRNaOdwbiCVc3WMWyLotHGsDOeajDL8WlS08QU0C%2BGI5K0o5ir2mZ3IxHc2i348XEiHijxVJMam4Ct8%2BtL%2FlajmAatL977lKSkR0CilR5j6Qbv%2F52TmGG3T1xiZwm9E8mepSnYEuRHE6%2FZMgdnwr8dYOprmQairFZlW3a%2BX3Tg%2FFFA4PWDBQj3dji3B3uygFNg83IMG6Spaun2ou4pmVYRuYATDayirCc%2FDn5Qv9%2FqPFKEFle0kAoMsmCR8tb3lcPO2kJAFlK522rb2XwKfV7X2Qf%2FkkLVMrfn7gpekcSyp4ne7OTku4CvlLSuSUApsLTyvb6SHfbqq9fywNKI2%2BRE1oodNz%2BCSZRW7koXuvVb4yJeKk515mP87Wz%2FBrK2kQWxvPDRb%2BVNYaMQVu5e1N%2FE5OoTPXLjZgaZCJ65PD8cRky98kGJEm7gBXRehRNZe5b6PpKU8niploiJWWR60wI%2BdzgnGWtLbkoKI0qYJ3E4sPOsET5Fxu27JuH21IxnHAMOMDGXC%2BNyKVsaXxhZFOgYUUd3uLnMNVoAVRsXcPe8pKGIdyMIWR77wGOqUB9FcZmJqh0uu0al8s4y3mLOFCEk4ENZ5zy1HxZ0v%2B7%2F3J2tViDFIYTLDtzsgZJsBP5ZrKOE0wqWzj2l6%2B6%2FE8tphiNTCnBqv%2FpAZM9Z4UraqVuvVgXS6rFcHbRG9P21xsDFD69kQ3eG7Sgc4tlOtxZjnM8t1zopgiKWHXhgNz%2Bq6vh7g61zGYxFRBU0ny2A5c%2B%2F3gIDsjWNEialP%2BZG6zepGsSiHX&X-Amz-Signature=ad70fb2a60a4536b011e08d31af715076ae8532aeac96723344abc65354bd953&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LL3OV4U%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1%2Bq%2Bh7HFT20F0lhGSVIq364PcAlu8vRJI92DJUNcFZwIgWpZ5p1iC2XJphVUIxEFc6GR7v%2FtC6He15n%2Fk1Hi3de0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9N536HYQmRG7gxDyrcA7cSjmX847zgjmM53pnegIFqYFPkd1Fr9IBfhGxKcFLGfvuGcNddAWl5QUDg52hA2CkEe2lIR5j9JRNaOdwbiCVc3WMWyLotHGsDOeajDL8WlS08QU0C%2BGI5K0o5ir2mZ3IxHc2i348XEiHijxVJMam4Ct8%2BtL%2FlajmAatL977lKSkR0CilR5j6Qbv%2F52TmGG3T1xiZwm9E8mepSnYEuRHE6%2FZMgdnwr8dYOprmQairFZlW3a%2BX3Tg%2FFFA4PWDBQj3dji3B3uygFNg83IMG6Spaun2ou4pmVYRuYATDayirCc%2FDn5Qv9%2FqPFKEFle0kAoMsmCR8tb3lcPO2kJAFlK522rb2XwKfV7X2Qf%2FkkLVMrfn7gpekcSyp4ne7OTku4CvlLSuSUApsLTyvb6SHfbqq9fywNKI2%2BRE1oodNz%2BCSZRW7koXuvVb4yJeKk515mP87Wz%2FBrK2kQWxvPDRb%2BVNYaMQVu5e1N%2FE5OoTPXLjZgaZCJ65PD8cRky98kGJEm7gBXRehRNZe5b6PpKU8niploiJWWR60wI%2BdzgnGWtLbkoKI0qYJ3E4sPOsET5Fxu27JuH21IxnHAMOMDGXC%2BNyKVsaXxhZFOgYUUd3uLnMNVoAVRsXcPe8pKGIdyMIWR77wGOqUB9FcZmJqh0uu0al8s4y3mLOFCEk4ENZ5zy1HxZ0v%2B7%2F3J2tViDFIYTLDtzsgZJsBP5ZrKOE0wqWzj2l6%2B6%2FE8tphiNTCnBqv%2FpAZM9Z4UraqVuvVgXS6rFcHbRG9P21xsDFD69kQ3eG7Sgc4tlOtxZjnM8t1zopgiKWHXhgNz%2Bq6vh7g61zGYxFRBU0ny2A5c%2B%2F3gIDsjWNEialP%2BZG6zepGsSiHX&X-Amz-Signature=d24c23bbe17d46e53cd2640472620ad3e3e33239e930333a673e7ef8e96f30fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LL3OV4U%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1%2Bq%2Bh7HFT20F0lhGSVIq364PcAlu8vRJI92DJUNcFZwIgWpZ5p1iC2XJphVUIxEFc6GR7v%2FtC6He15n%2Fk1Hi3de0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9N536HYQmRG7gxDyrcA7cSjmX847zgjmM53pnegIFqYFPkd1Fr9IBfhGxKcFLGfvuGcNddAWl5QUDg52hA2CkEe2lIR5j9JRNaOdwbiCVc3WMWyLotHGsDOeajDL8WlS08QU0C%2BGI5K0o5ir2mZ3IxHc2i348XEiHijxVJMam4Ct8%2BtL%2FlajmAatL977lKSkR0CilR5j6Qbv%2F52TmGG3T1xiZwm9E8mepSnYEuRHE6%2FZMgdnwr8dYOprmQairFZlW3a%2BX3Tg%2FFFA4PWDBQj3dji3B3uygFNg83IMG6Spaun2ou4pmVYRuYATDayirCc%2FDn5Qv9%2FqPFKEFle0kAoMsmCR8tb3lcPO2kJAFlK522rb2XwKfV7X2Qf%2FkkLVMrfn7gpekcSyp4ne7OTku4CvlLSuSUApsLTyvb6SHfbqq9fywNKI2%2BRE1oodNz%2BCSZRW7koXuvVb4yJeKk515mP87Wz%2FBrK2kQWxvPDRb%2BVNYaMQVu5e1N%2FE5OoTPXLjZgaZCJ65PD8cRky98kGJEm7gBXRehRNZe5b6PpKU8niploiJWWR60wI%2BdzgnGWtLbkoKI0qYJ3E4sPOsET5Fxu27JuH21IxnHAMOMDGXC%2BNyKVsaXxhZFOgYUUd3uLnMNVoAVRsXcPe8pKGIdyMIWR77wGOqUB9FcZmJqh0uu0al8s4y3mLOFCEk4ENZ5zy1HxZ0v%2B7%2F3J2tViDFIYTLDtzsgZJsBP5ZrKOE0wqWzj2l6%2B6%2FE8tphiNTCnBqv%2FpAZM9Z4UraqVuvVgXS6rFcHbRG9P21xsDFD69kQ3eG7Sgc4tlOtxZjnM8t1zopgiKWHXhgNz%2Bq6vh7g61zGYxFRBU0ny2A5c%2B%2F3gIDsjWNEialP%2BZG6zepGsSiHX&X-Amz-Signature=183a4455ce04f01b50682c01244f752008a9b35ec6f03812fb8c6430cae55530&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
