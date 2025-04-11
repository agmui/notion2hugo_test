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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RVF7OU%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDjRSsrCcW2Hw6%2B2l2ILwAAEZ30OW%2F930PUT%2BGRxugA8gIgAwEVWOfXbTGo%2FysJSH39Rjdw7FIuct6NcGVZjGfPUUkqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0yEzN6TkOU4gtSayrcA3vocTZmbKNqM1lRAATwlWmEqfoeNQFPVoEB03gB0e9ShtDjP2jLnHa%2F%2BHSXKdJzZyTraI835gPt%2Bf%2FzEY3FcumJ%2B4Wa30qosl0CqXr6zjlDzt8qtCHltraEARs113AgtdwTMQiVksYcZ1l6yNpGEJCs9TVeUh%2BPyZ2mQQbBbUdnAp%2Fxw8WNGOv4LC9Q3TNj4D3sn0%2B7HoGDSGbTGLypXcuL5KpDz1TwEgx%2FUbfoSBXiTLyRph8tkRTbRZQzxyZ9LXI9QHbNu0lw2qmIWB28sRe2L%2FVIXZQ3%2BwVITHy%2BZVgEnByKWVd%2BdopTuZzowbeHToxjkvRCFoNg%2FWRYHGMVhfz0SZ9sFwdO69PBujk92fSNIRrNGJhPqhVCegPiV1YIL5jVaszqhtpSleKoYz3eEZ0Uj5df3gJqhUIGP6mamVGKMz3urRFQPn3mWWsyGFcVa115f9L7FRi6GQRx70Bd6G9JFaTtwQ9Rp32S75QIqaKpT%2FM%2FAjfHizRD5mvEyHupQsNf5Q7SzhhV0EFPhouBdlOH3U%2BwfwMooo%2FN8a1%2FFOnnJl1ai8s5GMDwwO4Ax0hgrpDJ7DMMAlegQ5W1Gfheh%2F%2BEEfV1lnSALmpRxkC01sjoEJGfYt1IrAqVSu8YMIXx5b8GOqUBorULRcAcOmrYXQGPyx1rT2PlYyuRuDg7WPE36zZzaH5Q1x5UKloVK06IShe%2Fag3CYGhmZyhctbJ2mm5aKTK0qp9Lw7nlpT9kJDEmQSWSTWo1hWZoMnFDwm55%2FIaeIuP9QE57x5kI%2B24WhQgHPNhP%2FX6gi%2Ba%2FEIgxS%2Baq4ChbmuuMuyVvMGwrQ9BPMcAuudnb18WXZWpieoniqJ3HOEeqQED59IZI&X-Amz-Signature=36a0b0094905115a42b11f891abcc80372dd9ba55e696602c1fae437ac9ecf58&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RVF7OU%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDjRSsrCcW2Hw6%2B2l2ILwAAEZ30OW%2F930PUT%2BGRxugA8gIgAwEVWOfXbTGo%2FysJSH39Rjdw7FIuct6NcGVZjGfPUUkqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0yEzN6TkOU4gtSayrcA3vocTZmbKNqM1lRAATwlWmEqfoeNQFPVoEB03gB0e9ShtDjP2jLnHa%2F%2BHSXKdJzZyTraI835gPt%2Bf%2FzEY3FcumJ%2B4Wa30qosl0CqXr6zjlDzt8qtCHltraEARs113AgtdwTMQiVksYcZ1l6yNpGEJCs9TVeUh%2BPyZ2mQQbBbUdnAp%2Fxw8WNGOv4LC9Q3TNj4D3sn0%2B7HoGDSGbTGLypXcuL5KpDz1TwEgx%2FUbfoSBXiTLyRph8tkRTbRZQzxyZ9LXI9QHbNu0lw2qmIWB28sRe2L%2FVIXZQ3%2BwVITHy%2BZVgEnByKWVd%2BdopTuZzowbeHToxjkvRCFoNg%2FWRYHGMVhfz0SZ9sFwdO69PBujk92fSNIRrNGJhPqhVCegPiV1YIL5jVaszqhtpSleKoYz3eEZ0Uj5df3gJqhUIGP6mamVGKMz3urRFQPn3mWWsyGFcVa115f9L7FRi6GQRx70Bd6G9JFaTtwQ9Rp32S75QIqaKpT%2FM%2FAjfHizRD5mvEyHupQsNf5Q7SzhhV0EFPhouBdlOH3U%2BwfwMooo%2FN8a1%2FFOnnJl1ai8s5GMDwwO4Ax0hgrpDJ7DMMAlegQ5W1Gfheh%2F%2BEEfV1lnSALmpRxkC01sjoEJGfYt1IrAqVSu8YMIXx5b8GOqUBorULRcAcOmrYXQGPyx1rT2PlYyuRuDg7WPE36zZzaH5Q1x5UKloVK06IShe%2Fag3CYGhmZyhctbJ2mm5aKTK0qp9Lw7nlpT9kJDEmQSWSTWo1hWZoMnFDwm55%2FIaeIuP9QE57x5kI%2B24WhQgHPNhP%2FX6gi%2Ba%2FEIgxS%2Baq4ChbmuuMuyVvMGwrQ9BPMcAuudnb18WXZWpieoniqJ3HOEeqQED59IZI&X-Amz-Signature=d28261ec20853340109e6214b20911763c4bdf1a623aa61c4c32fb5e9eab31a6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RVF7OU%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDjRSsrCcW2Hw6%2B2l2ILwAAEZ30OW%2F930PUT%2BGRxugA8gIgAwEVWOfXbTGo%2FysJSH39Rjdw7FIuct6NcGVZjGfPUUkqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0yEzN6TkOU4gtSayrcA3vocTZmbKNqM1lRAATwlWmEqfoeNQFPVoEB03gB0e9ShtDjP2jLnHa%2F%2BHSXKdJzZyTraI835gPt%2Bf%2FzEY3FcumJ%2B4Wa30qosl0CqXr6zjlDzt8qtCHltraEARs113AgtdwTMQiVksYcZ1l6yNpGEJCs9TVeUh%2BPyZ2mQQbBbUdnAp%2Fxw8WNGOv4LC9Q3TNj4D3sn0%2B7HoGDSGbTGLypXcuL5KpDz1TwEgx%2FUbfoSBXiTLyRph8tkRTbRZQzxyZ9LXI9QHbNu0lw2qmIWB28sRe2L%2FVIXZQ3%2BwVITHy%2BZVgEnByKWVd%2BdopTuZzowbeHToxjkvRCFoNg%2FWRYHGMVhfz0SZ9sFwdO69PBujk92fSNIRrNGJhPqhVCegPiV1YIL5jVaszqhtpSleKoYz3eEZ0Uj5df3gJqhUIGP6mamVGKMz3urRFQPn3mWWsyGFcVa115f9L7FRi6GQRx70Bd6G9JFaTtwQ9Rp32S75QIqaKpT%2FM%2FAjfHizRD5mvEyHupQsNf5Q7SzhhV0EFPhouBdlOH3U%2BwfwMooo%2FN8a1%2FFOnnJl1ai8s5GMDwwO4Ax0hgrpDJ7DMMAlegQ5W1Gfheh%2F%2BEEfV1lnSALmpRxkC01sjoEJGfYt1IrAqVSu8YMIXx5b8GOqUBorULRcAcOmrYXQGPyx1rT2PlYyuRuDg7WPE36zZzaH5Q1x5UKloVK06IShe%2Fag3CYGhmZyhctbJ2mm5aKTK0qp9Lw7nlpT9kJDEmQSWSTWo1hWZoMnFDwm55%2FIaeIuP9QE57x5kI%2B24WhQgHPNhP%2FX6gi%2Ba%2FEIgxS%2Baq4ChbmuuMuyVvMGwrQ9BPMcAuudnb18WXZWpieoniqJ3HOEeqQED59IZI&X-Amz-Signature=c0f5507043f1f45c864d14e8cfec25e52ff266c5a598e2d50debb76bb7287e3a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RVF7OU%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDjRSsrCcW2Hw6%2B2l2ILwAAEZ30OW%2F930PUT%2BGRxugA8gIgAwEVWOfXbTGo%2FysJSH39Rjdw7FIuct6NcGVZjGfPUUkqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0yEzN6TkOU4gtSayrcA3vocTZmbKNqM1lRAATwlWmEqfoeNQFPVoEB03gB0e9ShtDjP2jLnHa%2F%2BHSXKdJzZyTraI835gPt%2Bf%2FzEY3FcumJ%2B4Wa30qosl0CqXr6zjlDzt8qtCHltraEARs113AgtdwTMQiVksYcZ1l6yNpGEJCs9TVeUh%2BPyZ2mQQbBbUdnAp%2Fxw8WNGOv4LC9Q3TNj4D3sn0%2B7HoGDSGbTGLypXcuL5KpDz1TwEgx%2FUbfoSBXiTLyRph8tkRTbRZQzxyZ9LXI9QHbNu0lw2qmIWB28sRe2L%2FVIXZQ3%2BwVITHy%2BZVgEnByKWVd%2BdopTuZzowbeHToxjkvRCFoNg%2FWRYHGMVhfz0SZ9sFwdO69PBujk92fSNIRrNGJhPqhVCegPiV1YIL5jVaszqhtpSleKoYz3eEZ0Uj5df3gJqhUIGP6mamVGKMz3urRFQPn3mWWsyGFcVa115f9L7FRi6GQRx70Bd6G9JFaTtwQ9Rp32S75QIqaKpT%2FM%2FAjfHizRD5mvEyHupQsNf5Q7SzhhV0EFPhouBdlOH3U%2BwfwMooo%2FN8a1%2FFOnnJl1ai8s5GMDwwO4Ax0hgrpDJ7DMMAlegQ5W1Gfheh%2F%2BEEfV1lnSALmpRxkC01sjoEJGfYt1IrAqVSu8YMIXx5b8GOqUBorULRcAcOmrYXQGPyx1rT2PlYyuRuDg7WPE36zZzaH5Q1x5UKloVK06IShe%2Fag3CYGhmZyhctbJ2mm5aKTK0qp9Lw7nlpT9kJDEmQSWSTWo1hWZoMnFDwm55%2FIaeIuP9QE57x5kI%2B24WhQgHPNhP%2FX6gi%2Ba%2FEIgxS%2Baq4ChbmuuMuyVvMGwrQ9BPMcAuudnb18WXZWpieoniqJ3HOEeqQED59IZI&X-Amz-Signature=c15d71ebbf86ebca41e8be18abbb275b15f3392cb2e87c595f7356087a8bd82f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RVF7OU%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDjRSsrCcW2Hw6%2B2l2ILwAAEZ30OW%2F930PUT%2BGRxugA8gIgAwEVWOfXbTGo%2FysJSH39Rjdw7FIuct6NcGVZjGfPUUkqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0yEzN6TkOU4gtSayrcA3vocTZmbKNqM1lRAATwlWmEqfoeNQFPVoEB03gB0e9ShtDjP2jLnHa%2F%2BHSXKdJzZyTraI835gPt%2Bf%2FzEY3FcumJ%2B4Wa30qosl0CqXr6zjlDzt8qtCHltraEARs113AgtdwTMQiVksYcZ1l6yNpGEJCs9TVeUh%2BPyZ2mQQbBbUdnAp%2Fxw8WNGOv4LC9Q3TNj4D3sn0%2B7HoGDSGbTGLypXcuL5KpDz1TwEgx%2FUbfoSBXiTLyRph8tkRTbRZQzxyZ9LXI9QHbNu0lw2qmIWB28sRe2L%2FVIXZQ3%2BwVITHy%2BZVgEnByKWVd%2BdopTuZzowbeHToxjkvRCFoNg%2FWRYHGMVhfz0SZ9sFwdO69PBujk92fSNIRrNGJhPqhVCegPiV1YIL5jVaszqhtpSleKoYz3eEZ0Uj5df3gJqhUIGP6mamVGKMz3urRFQPn3mWWsyGFcVa115f9L7FRi6GQRx70Bd6G9JFaTtwQ9Rp32S75QIqaKpT%2FM%2FAjfHizRD5mvEyHupQsNf5Q7SzhhV0EFPhouBdlOH3U%2BwfwMooo%2FN8a1%2FFOnnJl1ai8s5GMDwwO4Ax0hgrpDJ7DMMAlegQ5W1Gfheh%2F%2BEEfV1lnSALmpRxkC01sjoEJGfYt1IrAqVSu8YMIXx5b8GOqUBorULRcAcOmrYXQGPyx1rT2PlYyuRuDg7WPE36zZzaH5Q1x5UKloVK06IShe%2Fag3CYGhmZyhctbJ2mm5aKTK0qp9Lw7nlpT9kJDEmQSWSTWo1hWZoMnFDwm55%2FIaeIuP9QE57x5kI%2B24WhQgHPNhP%2FX6gi%2Ba%2FEIgxS%2Baq4ChbmuuMuyVvMGwrQ9BPMcAuudnb18WXZWpieoniqJ3HOEeqQED59IZI&X-Amz-Signature=b2f1296c3863784379b564283079eab7177a879182ebd39b5777f498be6fef3c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
