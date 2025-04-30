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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626SCB3WN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDt7MxqqF4m93lI%2Fl7BFLeDp9aroN%2BA9nfOI9RTc7hkAwIgOruv7K4kPA9aAoVsT%2Fn1FJTLx2fHyyWKTxBoYqFGLO4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3%2FFffF07NibvNWGyrcAzYc0GsQ0rex%2B1YFHCJCN3ZlqmO4sKGR%2FjhId4ugSIIGZA%2FdTK0sTZrxG69KDgqbNftxfV1QqTSUTO%2BBnMsIODVtBZeuVmPrc2G7WLBqfEJXUaSoHUe1QuHsRsm%2F6ZfG08V5t2YgAfNIFpLn9uIQMavNe%2BhrMOcDniMgMldDGqf0v4pOkBVWzLIxr81bvnoJlsZyLZVL1%2B5ccd1JZ5JEjjsoblv5KMlfiLhdSRx%2BNVABlHeg8%2ByjagddgWjI7Mn9ihqhlJQaTUWbIhsHAER1w7EV5kulZgOsJgeMZUtOinvzcNcVYPr0GvHEfOAGLYUwNSP8MEDZtgd0Omk4Z8FyVFwrmlJKDbpyTjT3rJV7965Ijtl7gSOSqNpLzNLCBtJrUFWMT0%2FKPRpK5ZIyQvXFQMJDlN0jGvDwmX8HhA7%2FIuJJtELFdkmDNVqF1L%2FNB5uw3S%2B437As8CN2dMOiGPOItpw6qZFVTDCmqa1l%2F8K8lVupj4CTiXmoOUltSeBIGQwOW5VRTvp3Hv%2FjS0Y7WFBxPUldGYS2PjmOCXc3LArAW8nCMZVrHFC0MnQgaazadPvBbvrhGJPSWaSWR76h81lnmPC8byd2A4PkARrLGiu7IaEaNLwioaiXAMwA9kbqMOuWx8AGOqUB%2Bk9Mmd6SK6el8dgQo4FEHhOkx031Ppy5Ok3g6O%2FDyuP8Xol1Zt2hTX%2FX5uVDg0J222ex%2FhIvSkdRW4x8vsRA0mqmdtqVcqU0M5qPGt1fy%2B2ugPpHpmEx4t8l8GIhuIVD1FZkgcseCC7QPfxrChJtEKaDIDnn4bZ3ImRKDKk%2FQe2r9AppLM3tgLNDxTtwH3FuIL0KElp5Vt6HtBL%2BBTU62AYNs26N&X-Amz-Signature=01276d7f89e7fc0cc7aba4a62b1daf305fb78c91dddd385ad12549658f622f64&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626SCB3WN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDt7MxqqF4m93lI%2Fl7BFLeDp9aroN%2BA9nfOI9RTc7hkAwIgOruv7K4kPA9aAoVsT%2Fn1FJTLx2fHyyWKTxBoYqFGLO4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3%2FFffF07NibvNWGyrcAzYc0GsQ0rex%2B1YFHCJCN3ZlqmO4sKGR%2FjhId4ugSIIGZA%2FdTK0sTZrxG69KDgqbNftxfV1QqTSUTO%2BBnMsIODVtBZeuVmPrc2G7WLBqfEJXUaSoHUe1QuHsRsm%2F6ZfG08V5t2YgAfNIFpLn9uIQMavNe%2BhrMOcDniMgMldDGqf0v4pOkBVWzLIxr81bvnoJlsZyLZVL1%2B5ccd1JZ5JEjjsoblv5KMlfiLhdSRx%2BNVABlHeg8%2ByjagddgWjI7Mn9ihqhlJQaTUWbIhsHAER1w7EV5kulZgOsJgeMZUtOinvzcNcVYPr0GvHEfOAGLYUwNSP8MEDZtgd0Omk4Z8FyVFwrmlJKDbpyTjT3rJV7965Ijtl7gSOSqNpLzNLCBtJrUFWMT0%2FKPRpK5ZIyQvXFQMJDlN0jGvDwmX8HhA7%2FIuJJtELFdkmDNVqF1L%2FNB5uw3S%2B437As8CN2dMOiGPOItpw6qZFVTDCmqa1l%2F8K8lVupj4CTiXmoOUltSeBIGQwOW5VRTvp3Hv%2FjS0Y7WFBxPUldGYS2PjmOCXc3LArAW8nCMZVrHFC0MnQgaazadPvBbvrhGJPSWaSWR76h81lnmPC8byd2A4PkARrLGiu7IaEaNLwioaiXAMwA9kbqMOuWx8AGOqUB%2Bk9Mmd6SK6el8dgQo4FEHhOkx031Ppy5Ok3g6O%2FDyuP8Xol1Zt2hTX%2FX5uVDg0J222ex%2FhIvSkdRW4x8vsRA0mqmdtqVcqU0M5qPGt1fy%2B2ugPpHpmEx4t8l8GIhuIVD1FZkgcseCC7QPfxrChJtEKaDIDnn4bZ3ImRKDKk%2FQe2r9AppLM3tgLNDxTtwH3FuIL0KElp5Vt6HtBL%2BBTU62AYNs26N&X-Amz-Signature=d1ba32801815cbac2f52ff5d49d16d587f488f92caf663f1a59acf52c8c8dfee&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626SCB3WN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDt7MxqqF4m93lI%2Fl7BFLeDp9aroN%2BA9nfOI9RTc7hkAwIgOruv7K4kPA9aAoVsT%2Fn1FJTLx2fHyyWKTxBoYqFGLO4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3%2FFffF07NibvNWGyrcAzYc0GsQ0rex%2B1YFHCJCN3ZlqmO4sKGR%2FjhId4ugSIIGZA%2FdTK0sTZrxG69KDgqbNftxfV1QqTSUTO%2BBnMsIODVtBZeuVmPrc2G7WLBqfEJXUaSoHUe1QuHsRsm%2F6ZfG08V5t2YgAfNIFpLn9uIQMavNe%2BhrMOcDniMgMldDGqf0v4pOkBVWzLIxr81bvnoJlsZyLZVL1%2B5ccd1JZ5JEjjsoblv5KMlfiLhdSRx%2BNVABlHeg8%2ByjagddgWjI7Mn9ihqhlJQaTUWbIhsHAER1w7EV5kulZgOsJgeMZUtOinvzcNcVYPr0GvHEfOAGLYUwNSP8MEDZtgd0Omk4Z8FyVFwrmlJKDbpyTjT3rJV7965Ijtl7gSOSqNpLzNLCBtJrUFWMT0%2FKPRpK5ZIyQvXFQMJDlN0jGvDwmX8HhA7%2FIuJJtELFdkmDNVqF1L%2FNB5uw3S%2B437As8CN2dMOiGPOItpw6qZFVTDCmqa1l%2F8K8lVupj4CTiXmoOUltSeBIGQwOW5VRTvp3Hv%2FjS0Y7WFBxPUldGYS2PjmOCXc3LArAW8nCMZVrHFC0MnQgaazadPvBbvrhGJPSWaSWR76h81lnmPC8byd2A4PkARrLGiu7IaEaNLwioaiXAMwA9kbqMOuWx8AGOqUB%2Bk9Mmd6SK6el8dgQo4FEHhOkx031Ppy5Ok3g6O%2FDyuP8Xol1Zt2hTX%2FX5uVDg0J222ex%2FhIvSkdRW4x8vsRA0mqmdtqVcqU0M5qPGt1fy%2B2ugPpHpmEx4t8l8GIhuIVD1FZkgcseCC7QPfxrChJtEKaDIDnn4bZ3ImRKDKk%2FQe2r9AppLM3tgLNDxTtwH3FuIL0KElp5Vt6HtBL%2BBTU62AYNs26N&X-Amz-Signature=5eec53c2b5f193405c9ff0a6415c8b2e3c42157cef5c0b6eb46f3b7e0a3f59d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626SCB3WN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDt7MxqqF4m93lI%2Fl7BFLeDp9aroN%2BA9nfOI9RTc7hkAwIgOruv7K4kPA9aAoVsT%2Fn1FJTLx2fHyyWKTxBoYqFGLO4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3%2FFffF07NibvNWGyrcAzYc0GsQ0rex%2B1YFHCJCN3ZlqmO4sKGR%2FjhId4ugSIIGZA%2FdTK0sTZrxG69KDgqbNftxfV1QqTSUTO%2BBnMsIODVtBZeuVmPrc2G7WLBqfEJXUaSoHUe1QuHsRsm%2F6ZfG08V5t2YgAfNIFpLn9uIQMavNe%2BhrMOcDniMgMldDGqf0v4pOkBVWzLIxr81bvnoJlsZyLZVL1%2B5ccd1JZ5JEjjsoblv5KMlfiLhdSRx%2BNVABlHeg8%2ByjagddgWjI7Mn9ihqhlJQaTUWbIhsHAER1w7EV5kulZgOsJgeMZUtOinvzcNcVYPr0GvHEfOAGLYUwNSP8MEDZtgd0Omk4Z8FyVFwrmlJKDbpyTjT3rJV7965Ijtl7gSOSqNpLzNLCBtJrUFWMT0%2FKPRpK5ZIyQvXFQMJDlN0jGvDwmX8HhA7%2FIuJJtELFdkmDNVqF1L%2FNB5uw3S%2B437As8CN2dMOiGPOItpw6qZFVTDCmqa1l%2F8K8lVupj4CTiXmoOUltSeBIGQwOW5VRTvp3Hv%2FjS0Y7WFBxPUldGYS2PjmOCXc3LArAW8nCMZVrHFC0MnQgaazadPvBbvrhGJPSWaSWR76h81lnmPC8byd2A4PkARrLGiu7IaEaNLwioaiXAMwA9kbqMOuWx8AGOqUB%2Bk9Mmd6SK6el8dgQo4FEHhOkx031Ppy5Ok3g6O%2FDyuP8Xol1Zt2hTX%2FX5uVDg0J222ex%2FhIvSkdRW4x8vsRA0mqmdtqVcqU0M5qPGt1fy%2B2ugPpHpmEx4t8l8GIhuIVD1FZkgcseCC7QPfxrChJtEKaDIDnn4bZ3ImRKDKk%2FQe2r9AppLM3tgLNDxTtwH3FuIL0KElp5Vt6HtBL%2BBTU62AYNs26N&X-Amz-Signature=f3f17ff93e04f0606afd1f1549299503cc29490f5e56337f7a6764b8d41d79d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626SCB3WN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDt7MxqqF4m93lI%2Fl7BFLeDp9aroN%2BA9nfOI9RTc7hkAwIgOruv7K4kPA9aAoVsT%2Fn1FJTLx2fHyyWKTxBoYqFGLO4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3%2FFffF07NibvNWGyrcAzYc0GsQ0rex%2B1YFHCJCN3ZlqmO4sKGR%2FjhId4ugSIIGZA%2FdTK0sTZrxG69KDgqbNftxfV1QqTSUTO%2BBnMsIODVtBZeuVmPrc2G7WLBqfEJXUaSoHUe1QuHsRsm%2F6ZfG08V5t2YgAfNIFpLn9uIQMavNe%2BhrMOcDniMgMldDGqf0v4pOkBVWzLIxr81bvnoJlsZyLZVL1%2B5ccd1JZ5JEjjsoblv5KMlfiLhdSRx%2BNVABlHeg8%2ByjagddgWjI7Mn9ihqhlJQaTUWbIhsHAER1w7EV5kulZgOsJgeMZUtOinvzcNcVYPr0GvHEfOAGLYUwNSP8MEDZtgd0Omk4Z8FyVFwrmlJKDbpyTjT3rJV7965Ijtl7gSOSqNpLzNLCBtJrUFWMT0%2FKPRpK5ZIyQvXFQMJDlN0jGvDwmX8HhA7%2FIuJJtELFdkmDNVqF1L%2FNB5uw3S%2B437As8CN2dMOiGPOItpw6qZFVTDCmqa1l%2F8K8lVupj4CTiXmoOUltSeBIGQwOW5VRTvp3Hv%2FjS0Y7WFBxPUldGYS2PjmOCXc3LArAW8nCMZVrHFC0MnQgaazadPvBbvrhGJPSWaSWR76h81lnmPC8byd2A4PkARrLGiu7IaEaNLwioaiXAMwA9kbqMOuWx8AGOqUB%2Bk9Mmd6SK6el8dgQo4FEHhOkx031Ppy5Ok3g6O%2FDyuP8Xol1Zt2hTX%2FX5uVDg0J222ex%2FhIvSkdRW4x8vsRA0mqmdtqVcqU0M5qPGt1fy%2B2ugPpHpmEx4t8l8GIhuIVD1FZkgcseCC7QPfxrChJtEKaDIDnn4bZ3ImRKDKk%2FQe2r9AppLM3tgLNDxTtwH3FuIL0KElp5Vt6HtBL%2BBTU62AYNs26N&X-Amz-Signature=dd64e6d24fe4244773a94344ab285e6f75c53a6ecc1ead9099111fed4134e874&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
