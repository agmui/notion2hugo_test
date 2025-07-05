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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UZH66FY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIGf7%2F124tGjhNS%2BrZpLSWzV8cjfAucZDm99wtcPaMkKDAiEAj0iFwinqEqMJsf0rg2zW3u9UVxb3HC%2BQZwrhdybAKscq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDF0xW8Ayuo5lNyBJaSrcA7%2BzPUu60Qu20cWvJ3IgCMvPsOu%2FiJDk%2FV%2FK2oDHomVEp%2F7p6jyGRABh6brOcm3oxsCQRClM%2BAM%2FyrK829CHu3d6%2FJtIziz9nrUgmD22cFouA%2FHsrq4P8VZWPXLGXe8kVvhtPMKU%2Bjq%2Fv0u4ubSQmdCM74JzjA01AKXLD61atCv8sIRCBmt3dm%2FHAXYRZNRSzGe9CqmDD3PQgGjvWAQlEjdg%2BXTaODnQx1XPshdEFyENn5Y71mo3u8WFmmlaJjmJODlz2go6tvFTrfNWJy6%2F1%2F02ugtYiFCIdYZV7xfcU8eviU%2FWx6Yqi9XaE8ClsvSYL3UzIvFfSCVa2QwqvvVa1Q%2B4EQTzwVqimfvVNPjAtPyuJCMwMVpaU7s75uxymmpRrA2PMuipAeP6ZX%2BsfsnsjHdZPwqYcrDBRY90lMUvCCR5SyWLkP5iUZWV5FnUxh0ETze5jx0gom822oJPa%2F0oOkRefsAapFrrzEPVJYg115VJUxjDJaUcZUUZqe93cG7HweeS5V%2Bg5%2FKueaVWSwQw3vaZpb%2BCMwctl5uGoFBjbNOMzTvzZR2Q0DHrQAFX4oZZl%2B9PvM84JBaeUVBc8uSXCut4B%2FBieQl08v0TpWGrl8If5SgilCHnL1t5yIijML3fosMGOqUBmC10wQMhPzzn%2Fwe3YGxT8uJ%2BHZhG6t2nWWN5fRrWH8WJQHnts30MpIKh8C%2F7gGRGucu9ErJ47aPFT6J4qmRiJF3qZSvnV1I61ukyrJkzkBnXZ4pb2m262Rpj69KNudGS%2Bf2U%2FcWhz1iE%2F2Vc6luP5iMMJQIoON8%2BuxgfNz13jNobge5yFyC8WdeI0Ci7Fj%2FxCcXJFQ63E0M3fdrXhy1TVcfE8%2BeF&X-Amz-Signature=987e50beff1f264fa8ba62a0f678013b54d5410d30068caedbd410b3ca5da951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UZH66FY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIGf7%2F124tGjhNS%2BrZpLSWzV8cjfAucZDm99wtcPaMkKDAiEAj0iFwinqEqMJsf0rg2zW3u9UVxb3HC%2BQZwrhdybAKscq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDF0xW8Ayuo5lNyBJaSrcA7%2BzPUu60Qu20cWvJ3IgCMvPsOu%2FiJDk%2FV%2FK2oDHomVEp%2F7p6jyGRABh6brOcm3oxsCQRClM%2BAM%2FyrK829CHu3d6%2FJtIziz9nrUgmD22cFouA%2FHsrq4P8VZWPXLGXe8kVvhtPMKU%2Bjq%2Fv0u4ubSQmdCM74JzjA01AKXLD61atCv8sIRCBmt3dm%2FHAXYRZNRSzGe9CqmDD3PQgGjvWAQlEjdg%2BXTaODnQx1XPshdEFyENn5Y71mo3u8WFmmlaJjmJODlz2go6tvFTrfNWJy6%2F1%2F02ugtYiFCIdYZV7xfcU8eviU%2FWx6Yqi9XaE8ClsvSYL3UzIvFfSCVa2QwqvvVa1Q%2B4EQTzwVqimfvVNPjAtPyuJCMwMVpaU7s75uxymmpRrA2PMuipAeP6ZX%2BsfsnsjHdZPwqYcrDBRY90lMUvCCR5SyWLkP5iUZWV5FnUxh0ETze5jx0gom822oJPa%2F0oOkRefsAapFrrzEPVJYg115VJUxjDJaUcZUUZqe93cG7HweeS5V%2Bg5%2FKueaVWSwQw3vaZpb%2BCMwctl5uGoFBjbNOMzTvzZR2Q0DHrQAFX4oZZl%2B9PvM84JBaeUVBc8uSXCut4B%2FBieQl08v0TpWGrl8If5SgilCHnL1t5yIijML3fosMGOqUBmC10wQMhPzzn%2Fwe3YGxT8uJ%2BHZhG6t2nWWN5fRrWH8WJQHnts30MpIKh8C%2F7gGRGucu9ErJ47aPFT6J4qmRiJF3qZSvnV1I61ukyrJkzkBnXZ4pb2m262Rpj69KNudGS%2Bf2U%2FcWhz1iE%2F2Vc6luP5iMMJQIoON8%2BuxgfNz13jNobge5yFyC8WdeI0Ci7Fj%2FxCcXJFQ63E0M3fdrXhy1TVcfE8%2BeF&X-Amz-Signature=50a3bf18cf5a93ce6f19ffc272acf57e546b15e467864c7a553da31986c3ee1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UZH66FY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIGf7%2F124tGjhNS%2BrZpLSWzV8cjfAucZDm99wtcPaMkKDAiEAj0iFwinqEqMJsf0rg2zW3u9UVxb3HC%2BQZwrhdybAKscq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDF0xW8Ayuo5lNyBJaSrcA7%2BzPUu60Qu20cWvJ3IgCMvPsOu%2FiJDk%2FV%2FK2oDHomVEp%2F7p6jyGRABh6brOcm3oxsCQRClM%2BAM%2FyrK829CHu3d6%2FJtIziz9nrUgmD22cFouA%2FHsrq4P8VZWPXLGXe8kVvhtPMKU%2Bjq%2Fv0u4ubSQmdCM74JzjA01AKXLD61atCv8sIRCBmt3dm%2FHAXYRZNRSzGe9CqmDD3PQgGjvWAQlEjdg%2BXTaODnQx1XPshdEFyENn5Y71mo3u8WFmmlaJjmJODlz2go6tvFTrfNWJy6%2F1%2F02ugtYiFCIdYZV7xfcU8eviU%2FWx6Yqi9XaE8ClsvSYL3UzIvFfSCVa2QwqvvVa1Q%2B4EQTzwVqimfvVNPjAtPyuJCMwMVpaU7s75uxymmpRrA2PMuipAeP6ZX%2BsfsnsjHdZPwqYcrDBRY90lMUvCCR5SyWLkP5iUZWV5FnUxh0ETze5jx0gom822oJPa%2F0oOkRefsAapFrrzEPVJYg115VJUxjDJaUcZUUZqe93cG7HweeS5V%2Bg5%2FKueaVWSwQw3vaZpb%2BCMwctl5uGoFBjbNOMzTvzZR2Q0DHrQAFX4oZZl%2B9PvM84JBaeUVBc8uSXCut4B%2FBieQl08v0TpWGrl8If5SgilCHnL1t5yIijML3fosMGOqUBmC10wQMhPzzn%2Fwe3YGxT8uJ%2BHZhG6t2nWWN5fRrWH8WJQHnts30MpIKh8C%2F7gGRGucu9ErJ47aPFT6J4qmRiJF3qZSvnV1I61ukyrJkzkBnXZ4pb2m262Rpj69KNudGS%2Bf2U%2FcWhz1iE%2F2Vc6luP5iMMJQIoON8%2BuxgfNz13jNobge5yFyC8WdeI0Ci7Fj%2FxCcXJFQ63E0M3fdrXhy1TVcfE8%2BeF&X-Amz-Signature=64be7656df8cee5a309c481691c70e5c9dcf9f871aea5005a7f0a9ce44197bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UZH66FY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIGf7%2F124tGjhNS%2BrZpLSWzV8cjfAucZDm99wtcPaMkKDAiEAj0iFwinqEqMJsf0rg2zW3u9UVxb3HC%2BQZwrhdybAKscq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDF0xW8Ayuo5lNyBJaSrcA7%2BzPUu60Qu20cWvJ3IgCMvPsOu%2FiJDk%2FV%2FK2oDHomVEp%2F7p6jyGRABh6brOcm3oxsCQRClM%2BAM%2FyrK829CHu3d6%2FJtIziz9nrUgmD22cFouA%2FHsrq4P8VZWPXLGXe8kVvhtPMKU%2Bjq%2Fv0u4ubSQmdCM74JzjA01AKXLD61atCv8sIRCBmt3dm%2FHAXYRZNRSzGe9CqmDD3PQgGjvWAQlEjdg%2BXTaODnQx1XPshdEFyENn5Y71mo3u8WFmmlaJjmJODlz2go6tvFTrfNWJy6%2F1%2F02ugtYiFCIdYZV7xfcU8eviU%2FWx6Yqi9XaE8ClsvSYL3UzIvFfSCVa2QwqvvVa1Q%2B4EQTzwVqimfvVNPjAtPyuJCMwMVpaU7s75uxymmpRrA2PMuipAeP6ZX%2BsfsnsjHdZPwqYcrDBRY90lMUvCCR5SyWLkP5iUZWV5FnUxh0ETze5jx0gom822oJPa%2F0oOkRefsAapFrrzEPVJYg115VJUxjDJaUcZUUZqe93cG7HweeS5V%2Bg5%2FKueaVWSwQw3vaZpb%2BCMwctl5uGoFBjbNOMzTvzZR2Q0DHrQAFX4oZZl%2B9PvM84JBaeUVBc8uSXCut4B%2FBieQl08v0TpWGrl8If5SgilCHnL1t5yIijML3fosMGOqUBmC10wQMhPzzn%2Fwe3YGxT8uJ%2BHZhG6t2nWWN5fRrWH8WJQHnts30MpIKh8C%2F7gGRGucu9ErJ47aPFT6J4qmRiJF3qZSvnV1I61ukyrJkzkBnXZ4pb2m262Rpj69KNudGS%2Bf2U%2FcWhz1iE%2F2Vc6luP5iMMJQIoON8%2BuxgfNz13jNobge5yFyC8WdeI0Ci7Fj%2FxCcXJFQ63E0M3fdrXhy1TVcfE8%2BeF&X-Amz-Signature=923967b822abfd67fd796309cee011aff12bfa003144f8e7349ccf1a2cba5c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UZH66FY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIGf7%2F124tGjhNS%2BrZpLSWzV8cjfAucZDm99wtcPaMkKDAiEAj0iFwinqEqMJsf0rg2zW3u9UVxb3HC%2BQZwrhdybAKscq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDF0xW8Ayuo5lNyBJaSrcA7%2BzPUu60Qu20cWvJ3IgCMvPsOu%2FiJDk%2FV%2FK2oDHomVEp%2F7p6jyGRABh6brOcm3oxsCQRClM%2BAM%2FyrK829CHu3d6%2FJtIziz9nrUgmD22cFouA%2FHsrq4P8VZWPXLGXe8kVvhtPMKU%2Bjq%2Fv0u4ubSQmdCM74JzjA01AKXLD61atCv8sIRCBmt3dm%2FHAXYRZNRSzGe9CqmDD3PQgGjvWAQlEjdg%2BXTaODnQx1XPshdEFyENn5Y71mo3u8WFmmlaJjmJODlz2go6tvFTrfNWJy6%2F1%2F02ugtYiFCIdYZV7xfcU8eviU%2FWx6Yqi9XaE8ClsvSYL3UzIvFfSCVa2QwqvvVa1Q%2B4EQTzwVqimfvVNPjAtPyuJCMwMVpaU7s75uxymmpRrA2PMuipAeP6ZX%2BsfsnsjHdZPwqYcrDBRY90lMUvCCR5SyWLkP5iUZWV5FnUxh0ETze5jx0gom822oJPa%2F0oOkRefsAapFrrzEPVJYg115VJUxjDJaUcZUUZqe93cG7HweeS5V%2Bg5%2FKueaVWSwQw3vaZpb%2BCMwctl5uGoFBjbNOMzTvzZR2Q0DHrQAFX4oZZl%2B9PvM84JBaeUVBc8uSXCut4B%2FBieQl08v0TpWGrl8If5SgilCHnL1t5yIijML3fosMGOqUBmC10wQMhPzzn%2Fwe3YGxT8uJ%2BHZhG6t2nWWN5fRrWH8WJQHnts30MpIKh8C%2F7gGRGucu9ErJ47aPFT6J4qmRiJF3qZSvnV1I61ukyrJkzkBnXZ4pb2m262Rpj69KNudGS%2Bf2U%2FcWhz1iE%2F2Vc6luP5iMMJQIoON8%2BuxgfNz13jNobge5yFyC8WdeI0Ci7Fj%2FxCcXJFQ63E0M3fdrXhy1TVcfE8%2BeF&X-Amz-Signature=d2860f65c8022127312629cc3bd30401e28a15ce876b1469095eafea6fdf155f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
