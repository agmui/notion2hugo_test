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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BS2DZS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcymsgeS9v1kqBdPnT1I4QNSKAEBahlt%2Fx88RXl5iNMAiEArBKm7BSp%2BOrXeM9ox66XsUPliWJHdYEASzsgMZjrrOMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAavHQFK%2FdImLl8WfSrcA3MT8AJkBR%2FcroBinZMoRRjq%2F%2F%2FOFFXdrSJFYVpQ9oE5ry5BziDFVPPcARhjv9Xz7a%2Bb6WODKeDXUxiaVfx2Au8EP71p31%2F9kyZDcqDeCbY%2Bb7IB11fckNWfJHurblDd3P10egtq0mISuVcLD7eeLNjq5CbzDf9QCxHjttixarisSJNVFtoXEsMqBnyjz6gn0HDmg8TBhdqaydh608s155UwWKD1Mv6bD8gHIuY3KouONlD8%2BIdU2YpbCGExk8A3zcewQNCRJHR0RTkShqzkIzI%2FpyRoLrqdASpqyv8oWPSvsCYHp2uIECslmEL%2FxqdbrHgM7SzzJkQU932zSJOKTOuutng0EGY6pBTOqJrP8V4rj3OBkv02G00C5owBMVc5E%2Fx%2F%2BFJKSWDOZ%2FTjOepIYQ4oLbZKf508n9lESTRpXq3SqRNzG1q%2B%2B5bPOdtMDwstwt4DpXT1Wj5iqupArODCeYDuQX3H%2FZlvunl0DNEpJugvPpecXyYUM2DdMk7rZAVSp3Pd%2B%2BEqlXnQlw5C2LRF4W6Sc7bGQpyfECXZ0fQiyFUMAy9%2B%2FP613S6dv3CxC%2FyaWt7TnwNW1ZBhGh9n1kLw%2FMmrunhiRm4aJ7qEdZDJkXXVTZjsRdZd0FTVvKj%2BMKmWksIGOqUBmVD8MzpqRhL4Grq%2BXw%2FMgR2eFI1KdAYLBkWzlQhrIqHI7wD3NkqQtiDmfFP9CXNRfee7g7p3rCL0MqLa4w6S9Z0F8uoDd%2FTsoCO02%2BNwDb3%2F1vlfcrkuavwWCh3B6SuekoTOBJCNs%2FUywrQqaOIKkAP%2BpVtPAyUsJplxkg7ScbV7cXvFTQbLtcoBKEuudYhhTRuvBbo4Bys%2BcdM%2BZEo1IQZAUvsf&X-Amz-Signature=f7f90debdcf7c826b01878d2e62d858acbd673fda55532862427619075f0d204&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BS2DZS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcymsgeS9v1kqBdPnT1I4QNSKAEBahlt%2Fx88RXl5iNMAiEArBKm7BSp%2BOrXeM9ox66XsUPliWJHdYEASzsgMZjrrOMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAavHQFK%2FdImLl8WfSrcA3MT8AJkBR%2FcroBinZMoRRjq%2F%2F%2FOFFXdrSJFYVpQ9oE5ry5BziDFVPPcARhjv9Xz7a%2Bb6WODKeDXUxiaVfx2Au8EP71p31%2F9kyZDcqDeCbY%2Bb7IB11fckNWfJHurblDd3P10egtq0mISuVcLD7eeLNjq5CbzDf9QCxHjttixarisSJNVFtoXEsMqBnyjz6gn0HDmg8TBhdqaydh608s155UwWKD1Mv6bD8gHIuY3KouONlD8%2BIdU2YpbCGExk8A3zcewQNCRJHR0RTkShqzkIzI%2FpyRoLrqdASpqyv8oWPSvsCYHp2uIECslmEL%2FxqdbrHgM7SzzJkQU932zSJOKTOuutng0EGY6pBTOqJrP8V4rj3OBkv02G00C5owBMVc5E%2Fx%2F%2BFJKSWDOZ%2FTjOepIYQ4oLbZKf508n9lESTRpXq3SqRNzG1q%2B%2B5bPOdtMDwstwt4DpXT1Wj5iqupArODCeYDuQX3H%2FZlvunl0DNEpJugvPpecXyYUM2DdMk7rZAVSp3Pd%2B%2BEqlXnQlw5C2LRF4W6Sc7bGQpyfECXZ0fQiyFUMAy9%2B%2FP613S6dv3CxC%2FyaWt7TnwNW1ZBhGh9n1kLw%2FMmrunhiRm4aJ7qEdZDJkXXVTZjsRdZd0FTVvKj%2BMKmWksIGOqUBmVD8MzpqRhL4Grq%2BXw%2FMgR2eFI1KdAYLBkWzlQhrIqHI7wD3NkqQtiDmfFP9CXNRfee7g7p3rCL0MqLa4w6S9Z0F8uoDd%2FTsoCO02%2BNwDb3%2F1vlfcrkuavwWCh3B6SuekoTOBJCNs%2FUywrQqaOIKkAP%2BpVtPAyUsJplxkg7ScbV7cXvFTQbLtcoBKEuudYhhTRuvBbo4Bys%2BcdM%2BZEo1IQZAUvsf&X-Amz-Signature=0672d472625aaa19a89d3af6c4d6f0962629a1cbe2e7adce446054cae699aa17&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BS2DZS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcymsgeS9v1kqBdPnT1I4QNSKAEBahlt%2Fx88RXl5iNMAiEArBKm7BSp%2BOrXeM9ox66XsUPliWJHdYEASzsgMZjrrOMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAavHQFK%2FdImLl8WfSrcA3MT8AJkBR%2FcroBinZMoRRjq%2F%2F%2FOFFXdrSJFYVpQ9oE5ry5BziDFVPPcARhjv9Xz7a%2Bb6WODKeDXUxiaVfx2Au8EP71p31%2F9kyZDcqDeCbY%2Bb7IB11fckNWfJHurblDd3P10egtq0mISuVcLD7eeLNjq5CbzDf9QCxHjttixarisSJNVFtoXEsMqBnyjz6gn0HDmg8TBhdqaydh608s155UwWKD1Mv6bD8gHIuY3KouONlD8%2BIdU2YpbCGExk8A3zcewQNCRJHR0RTkShqzkIzI%2FpyRoLrqdASpqyv8oWPSvsCYHp2uIECslmEL%2FxqdbrHgM7SzzJkQU932zSJOKTOuutng0EGY6pBTOqJrP8V4rj3OBkv02G00C5owBMVc5E%2Fx%2F%2BFJKSWDOZ%2FTjOepIYQ4oLbZKf508n9lESTRpXq3SqRNzG1q%2B%2B5bPOdtMDwstwt4DpXT1Wj5iqupArODCeYDuQX3H%2FZlvunl0DNEpJugvPpecXyYUM2DdMk7rZAVSp3Pd%2B%2BEqlXnQlw5C2LRF4W6Sc7bGQpyfECXZ0fQiyFUMAy9%2B%2FP613S6dv3CxC%2FyaWt7TnwNW1ZBhGh9n1kLw%2FMmrunhiRm4aJ7qEdZDJkXXVTZjsRdZd0FTVvKj%2BMKmWksIGOqUBmVD8MzpqRhL4Grq%2BXw%2FMgR2eFI1KdAYLBkWzlQhrIqHI7wD3NkqQtiDmfFP9CXNRfee7g7p3rCL0MqLa4w6S9Z0F8uoDd%2FTsoCO02%2BNwDb3%2F1vlfcrkuavwWCh3B6SuekoTOBJCNs%2FUywrQqaOIKkAP%2BpVtPAyUsJplxkg7ScbV7cXvFTQbLtcoBKEuudYhhTRuvBbo4Bys%2BcdM%2BZEo1IQZAUvsf&X-Amz-Signature=96c8d255f8dfba4f70d4c05c88359dbfb74fe96e37165542c377430b59a39549&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BS2DZS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcymsgeS9v1kqBdPnT1I4QNSKAEBahlt%2Fx88RXl5iNMAiEArBKm7BSp%2BOrXeM9ox66XsUPliWJHdYEASzsgMZjrrOMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAavHQFK%2FdImLl8WfSrcA3MT8AJkBR%2FcroBinZMoRRjq%2F%2F%2FOFFXdrSJFYVpQ9oE5ry5BziDFVPPcARhjv9Xz7a%2Bb6WODKeDXUxiaVfx2Au8EP71p31%2F9kyZDcqDeCbY%2Bb7IB11fckNWfJHurblDd3P10egtq0mISuVcLD7eeLNjq5CbzDf9QCxHjttixarisSJNVFtoXEsMqBnyjz6gn0HDmg8TBhdqaydh608s155UwWKD1Mv6bD8gHIuY3KouONlD8%2BIdU2YpbCGExk8A3zcewQNCRJHR0RTkShqzkIzI%2FpyRoLrqdASpqyv8oWPSvsCYHp2uIECslmEL%2FxqdbrHgM7SzzJkQU932zSJOKTOuutng0EGY6pBTOqJrP8V4rj3OBkv02G00C5owBMVc5E%2Fx%2F%2BFJKSWDOZ%2FTjOepIYQ4oLbZKf508n9lESTRpXq3SqRNzG1q%2B%2B5bPOdtMDwstwt4DpXT1Wj5iqupArODCeYDuQX3H%2FZlvunl0DNEpJugvPpecXyYUM2DdMk7rZAVSp3Pd%2B%2BEqlXnQlw5C2LRF4W6Sc7bGQpyfECXZ0fQiyFUMAy9%2B%2FP613S6dv3CxC%2FyaWt7TnwNW1ZBhGh9n1kLw%2FMmrunhiRm4aJ7qEdZDJkXXVTZjsRdZd0FTVvKj%2BMKmWksIGOqUBmVD8MzpqRhL4Grq%2BXw%2FMgR2eFI1KdAYLBkWzlQhrIqHI7wD3NkqQtiDmfFP9CXNRfee7g7p3rCL0MqLa4w6S9Z0F8uoDd%2FTsoCO02%2BNwDb3%2F1vlfcrkuavwWCh3B6SuekoTOBJCNs%2FUywrQqaOIKkAP%2BpVtPAyUsJplxkg7ScbV7cXvFTQbLtcoBKEuudYhhTRuvBbo4Bys%2BcdM%2BZEo1IQZAUvsf&X-Amz-Signature=20af140f60308a51cf3ba194f138ee04ecae35b064ea01729d0c880fb84967e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BS2DZS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcymsgeS9v1kqBdPnT1I4QNSKAEBahlt%2Fx88RXl5iNMAiEArBKm7BSp%2BOrXeM9ox66XsUPliWJHdYEASzsgMZjrrOMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAavHQFK%2FdImLl8WfSrcA3MT8AJkBR%2FcroBinZMoRRjq%2F%2F%2FOFFXdrSJFYVpQ9oE5ry5BziDFVPPcARhjv9Xz7a%2Bb6WODKeDXUxiaVfx2Au8EP71p31%2F9kyZDcqDeCbY%2Bb7IB11fckNWfJHurblDd3P10egtq0mISuVcLD7eeLNjq5CbzDf9QCxHjttixarisSJNVFtoXEsMqBnyjz6gn0HDmg8TBhdqaydh608s155UwWKD1Mv6bD8gHIuY3KouONlD8%2BIdU2YpbCGExk8A3zcewQNCRJHR0RTkShqzkIzI%2FpyRoLrqdASpqyv8oWPSvsCYHp2uIECslmEL%2FxqdbrHgM7SzzJkQU932zSJOKTOuutng0EGY6pBTOqJrP8V4rj3OBkv02G00C5owBMVc5E%2Fx%2F%2BFJKSWDOZ%2FTjOepIYQ4oLbZKf508n9lESTRpXq3SqRNzG1q%2B%2B5bPOdtMDwstwt4DpXT1Wj5iqupArODCeYDuQX3H%2FZlvunl0DNEpJugvPpecXyYUM2DdMk7rZAVSp3Pd%2B%2BEqlXnQlw5C2LRF4W6Sc7bGQpyfECXZ0fQiyFUMAy9%2B%2FP613S6dv3CxC%2FyaWt7TnwNW1ZBhGh9n1kLw%2FMmrunhiRm4aJ7qEdZDJkXXVTZjsRdZd0FTVvKj%2BMKmWksIGOqUBmVD8MzpqRhL4Grq%2BXw%2FMgR2eFI1KdAYLBkWzlQhrIqHI7wD3NkqQtiDmfFP9CXNRfee7g7p3rCL0MqLa4w6S9Z0F8uoDd%2FTsoCO02%2BNwDb3%2F1vlfcrkuavwWCh3B6SuekoTOBJCNs%2FUywrQqaOIKkAP%2BpVtPAyUsJplxkg7ScbV7cXvFTQbLtcoBKEuudYhhTRuvBbo4Bys%2BcdM%2BZEo1IQZAUvsf&X-Amz-Signature=edea8b1b44d690edf8d4ade66ef938d37b8ededee8d4b396f447e5716a9e6a37&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
