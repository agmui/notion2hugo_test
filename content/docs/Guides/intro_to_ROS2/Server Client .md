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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPRICI7B%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuPJuAgkKNQdelUGa1ZWJmjcpB7nOgah2r9q%2FydrPcOQIgGCRh7Ts9UNsBg15o3mVXrew1u6TzDw4mChqqyERwSxgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISR7WTnoEzXztY16CrcA50L4K19JgRC4SalP8MT%2BTZqvgWcwnp4i1sm80GuW1G0lYUBLIbDjRjsAmEUlc%2BefsZuKTVvC1Qz%2FHjLBFIXMfcSUO73H0UeRvOSbYnJe8TEZGdHmv4yFSf8X0ReH%2FiILuZWDYcjIIRCu7nsZY8k6WuRTt2y82aAvH69IRUHKD6%2B7%2FHHGNfJN55AjIIYtfz%2B9s7exYhzzZ9DXoRLo8now4udOO4Mjc5mmchc8bgNzXNoYRvcVvreaxQUWCj4SvAbBfI6KaSOrcXQDVpkZPVvX8Z4vs7SLBUyUoM%2BWbkpY8ExMVldZCRAn4KLkyUp0wy%2FyCSlYcL6SEJmfSpys3IFfSajCIYMnitTVh8QeVlMO6urQDcw%2BUCtOcBoeyNoE%2B6SQOwjhkos77R9x4DJ2jEUIl5tM%2BMraE45jmH8lx6INTUjiWyL4SVVsco0NePXzaDS5fJxEDsQfC8KNyO3BrSh8JeoZm%2FdOc3LOxM1Tw4UPccxfbbM8BSbJY3klbk3rVjVynWFHGGsUca46ELdM%2BULpIj3PurptMGDr2KuKeyPTNQgPPMJXoxJlni6rxNayH0G00x0k6fco%2BqfRbtA%2FC%2BVlJPJKdY2dR5huCGhOKpn%2FMl4VB4VMAMJcflr5WS0MOqf4r0GOqUBHTYiwG8BjxJzeVkmKlgHEZIlj70cCKQcwbCDEfM2pN%2FmZmK3hJu%2BnHk6lEBw1Nv18b63rgPXTl74RLIx4he2J1XMnUohs8veeQH52cG2P2qTUfDwoW%2B69sKN0Hq%2B2biuaGOSY59hP9qLI8xnf9ImNH%2FM24%2Bx7gaz5ROZe6jC8ezp2U6eKRET4EKzzwj1BdxitzMnoqeqf51kYF%2FPQqwwqgNmC2rP&X-Amz-Signature=422a6d4d41cf21e540818d2166712da651ea09425e982267ac3f01002aff71a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPRICI7B%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuPJuAgkKNQdelUGa1ZWJmjcpB7nOgah2r9q%2FydrPcOQIgGCRh7Ts9UNsBg15o3mVXrew1u6TzDw4mChqqyERwSxgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISR7WTnoEzXztY16CrcA50L4K19JgRC4SalP8MT%2BTZqvgWcwnp4i1sm80GuW1G0lYUBLIbDjRjsAmEUlc%2BefsZuKTVvC1Qz%2FHjLBFIXMfcSUO73H0UeRvOSbYnJe8TEZGdHmv4yFSf8X0ReH%2FiILuZWDYcjIIRCu7nsZY8k6WuRTt2y82aAvH69IRUHKD6%2B7%2FHHGNfJN55AjIIYtfz%2B9s7exYhzzZ9DXoRLo8now4udOO4Mjc5mmchc8bgNzXNoYRvcVvreaxQUWCj4SvAbBfI6KaSOrcXQDVpkZPVvX8Z4vs7SLBUyUoM%2BWbkpY8ExMVldZCRAn4KLkyUp0wy%2FyCSlYcL6SEJmfSpys3IFfSajCIYMnitTVh8QeVlMO6urQDcw%2BUCtOcBoeyNoE%2B6SQOwjhkos77R9x4DJ2jEUIl5tM%2BMraE45jmH8lx6INTUjiWyL4SVVsco0NePXzaDS5fJxEDsQfC8KNyO3BrSh8JeoZm%2FdOc3LOxM1Tw4UPccxfbbM8BSbJY3klbk3rVjVynWFHGGsUca46ELdM%2BULpIj3PurptMGDr2KuKeyPTNQgPPMJXoxJlni6rxNayH0G00x0k6fco%2BqfRbtA%2FC%2BVlJPJKdY2dR5huCGhOKpn%2FMl4VB4VMAMJcflr5WS0MOqf4r0GOqUBHTYiwG8BjxJzeVkmKlgHEZIlj70cCKQcwbCDEfM2pN%2FmZmK3hJu%2BnHk6lEBw1Nv18b63rgPXTl74RLIx4he2J1XMnUohs8veeQH52cG2P2qTUfDwoW%2B69sKN0Hq%2B2biuaGOSY59hP9qLI8xnf9ImNH%2FM24%2Bx7gaz5ROZe6jC8ezp2U6eKRET4EKzzwj1BdxitzMnoqeqf51kYF%2FPQqwwqgNmC2rP&X-Amz-Signature=19809acd31fe129122bc195bd3a47dae91cd66475e1a2ef31a27511919e00a22&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPRICI7B%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuPJuAgkKNQdelUGa1ZWJmjcpB7nOgah2r9q%2FydrPcOQIgGCRh7Ts9UNsBg15o3mVXrew1u6TzDw4mChqqyERwSxgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISR7WTnoEzXztY16CrcA50L4K19JgRC4SalP8MT%2BTZqvgWcwnp4i1sm80GuW1G0lYUBLIbDjRjsAmEUlc%2BefsZuKTVvC1Qz%2FHjLBFIXMfcSUO73H0UeRvOSbYnJe8TEZGdHmv4yFSf8X0ReH%2FiILuZWDYcjIIRCu7nsZY8k6WuRTt2y82aAvH69IRUHKD6%2B7%2FHHGNfJN55AjIIYtfz%2B9s7exYhzzZ9DXoRLo8now4udOO4Mjc5mmchc8bgNzXNoYRvcVvreaxQUWCj4SvAbBfI6KaSOrcXQDVpkZPVvX8Z4vs7SLBUyUoM%2BWbkpY8ExMVldZCRAn4KLkyUp0wy%2FyCSlYcL6SEJmfSpys3IFfSajCIYMnitTVh8QeVlMO6urQDcw%2BUCtOcBoeyNoE%2B6SQOwjhkos77R9x4DJ2jEUIl5tM%2BMraE45jmH8lx6INTUjiWyL4SVVsco0NePXzaDS5fJxEDsQfC8KNyO3BrSh8JeoZm%2FdOc3LOxM1Tw4UPccxfbbM8BSbJY3klbk3rVjVynWFHGGsUca46ELdM%2BULpIj3PurptMGDr2KuKeyPTNQgPPMJXoxJlni6rxNayH0G00x0k6fco%2BqfRbtA%2FC%2BVlJPJKdY2dR5huCGhOKpn%2FMl4VB4VMAMJcflr5WS0MOqf4r0GOqUBHTYiwG8BjxJzeVkmKlgHEZIlj70cCKQcwbCDEfM2pN%2FmZmK3hJu%2BnHk6lEBw1Nv18b63rgPXTl74RLIx4he2J1XMnUohs8veeQH52cG2P2qTUfDwoW%2B69sKN0Hq%2B2biuaGOSY59hP9qLI8xnf9ImNH%2FM24%2Bx7gaz5ROZe6jC8ezp2U6eKRET4EKzzwj1BdxitzMnoqeqf51kYF%2FPQqwwqgNmC2rP&X-Amz-Signature=172a4f3836fd2f1fb0db4ec1ca735cbcf7f8e00aee83526c70b88cb671749561&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPRICI7B%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuPJuAgkKNQdelUGa1ZWJmjcpB7nOgah2r9q%2FydrPcOQIgGCRh7Ts9UNsBg15o3mVXrew1u6TzDw4mChqqyERwSxgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISR7WTnoEzXztY16CrcA50L4K19JgRC4SalP8MT%2BTZqvgWcwnp4i1sm80GuW1G0lYUBLIbDjRjsAmEUlc%2BefsZuKTVvC1Qz%2FHjLBFIXMfcSUO73H0UeRvOSbYnJe8TEZGdHmv4yFSf8X0ReH%2FiILuZWDYcjIIRCu7nsZY8k6WuRTt2y82aAvH69IRUHKD6%2B7%2FHHGNfJN55AjIIYtfz%2B9s7exYhzzZ9DXoRLo8now4udOO4Mjc5mmchc8bgNzXNoYRvcVvreaxQUWCj4SvAbBfI6KaSOrcXQDVpkZPVvX8Z4vs7SLBUyUoM%2BWbkpY8ExMVldZCRAn4KLkyUp0wy%2FyCSlYcL6SEJmfSpys3IFfSajCIYMnitTVh8QeVlMO6urQDcw%2BUCtOcBoeyNoE%2B6SQOwjhkos77R9x4DJ2jEUIl5tM%2BMraE45jmH8lx6INTUjiWyL4SVVsco0NePXzaDS5fJxEDsQfC8KNyO3BrSh8JeoZm%2FdOc3LOxM1Tw4UPccxfbbM8BSbJY3klbk3rVjVynWFHGGsUca46ELdM%2BULpIj3PurptMGDr2KuKeyPTNQgPPMJXoxJlni6rxNayH0G00x0k6fco%2BqfRbtA%2FC%2BVlJPJKdY2dR5huCGhOKpn%2FMl4VB4VMAMJcflr5WS0MOqf4r0GOqUBHTYiwG8BjxJzeVkmKlgHEZIlj70cCKQcwbCDEfM2pN%2FmZmK3hJu%2BnHk6lEBw1Nv18b63rgPXTl74RLIx4he2J1XMnUohs8veeQH52cG2P2qTUfDwoW%2B69sKN0Hq%2B2biuaGOSY59hP9qLI8xnf9ImNH%2FM24%2Bx7gaz5ROZe6jC8ezp2U6eKRET4EKzzwj1BdxitzMnoqeqf51kYF%2FPQqwwqgNmC2rP&X-Amz-Signature=e4afc0805e64362c7c723dde70341c08157d555dbdb7e55926a637d9b181e083&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPRICI7B%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuPJuAgkKNQdelUGa1ZWJmjcpB7nOgah2r9q%2FydrPcOQIgGCRh7Ts9UNsBg15o3mVXrew1u6TzDw4mChqqyERwSxgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISR7WTnoEzXztY16CrcA50L4K19JgRC4SalP8MT%2BTZqvgWcwnp4i1sm80GuW1G0lYUBLIbDjRjsAmEUlc%2BefsZuKTVvC1Qz%2FHjLBFIXMfcSUO73H0UeRvOSbYnJe8TEZGdHmv4yFSf8X0ReH%2FiILuZWDYcjIIRCu7nsZY8k6WuRTt2y82aAvH69IRUHKD6%2B7%2FHHGNfJN55AjIIYtfz%2B9s7exYhzzZ9DXoRLo8now4udOO4Mjc5mmchc8bgNzXNoYRvcVvreaxQUWCj4SvAbBfI6KaSOrcXQDVpkZPVvX8Z4vs7SLBUyUoM%2BWbkpY8ExMVldZCRAn4KLkyUp0wy%2FyCSlYcL6SEJmfSpys3IFfSajCIYMnitTVh8QeVlMO6urQDcw%2BUCtOcBoeyNoE%2B6SQOwjhkos77R9x4DJ2jEUIl5tM%2BMraE45jmH8lx6INTUjiWyL4SVVsco0NePXzaDS5fJxEDsQfC8KNyO3BrSh8JeoZm%2FdOc3LOxM1Tw4UPccxfbbM8BSbJY3klbk3rVjVynWFHGGsUca46ELdM%2BULpIj3PurptMGDr2KuKeyPTNQgPPMJXoxJlni6rxNayH0G00x0k6fco%2BqfRbtA%2FC%2BVlJPJKdY2dR5huCGhOKpn%2FMl4VB4VMAMJcflr5WS0MOqf4r0GOqUBHTYiwG8BjxJzeVkmKlgHEZIlj70cCKQcwbCDEfM2pN%2FmZmK3hJu%2BnHk6lEBw1Nv18b63rgPXTl74RLIx4he2J1XMnUohs8veeQH52cG2P2qTUfDwoW%2B69sKN0Hq%2B2biuaGOSY59hP9qLI8xnf9ImNH%2FM24%2Bx7gaz5ROZe6jC8ezp2U6eKRET4EKzzwj1BdxitzMnoqeqf51kYF%2FPQqwwqgNmC2rP&X-Amz-Signature=8606863631a17e6cb0a37daef7926111863840e98bef36500900a02e873e375e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
