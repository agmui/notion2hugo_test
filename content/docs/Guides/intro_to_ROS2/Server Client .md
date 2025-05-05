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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GT6OCN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfH5gjQQ10I4%2Fth%2F3ouGxhic2QI5hf5GVxhBE9dUDKFQIgC4oQURFWOPRYgT4ZVZTCP78wHtetPVpchq3kN4FGb0sq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOVq%2Fn38oafyp8hWbSrcAw4OB4YPY1A5Bzi85qLoDUbbURd3icpYer6ea7oCeKrgGwqI6oIIE3sNmKfx%2FdqzP344ssI6XnqOfabuaNfiW6x0oJ8bHn80Ia06zxB3w88llS0KNI9TxmC8%2BURij0ymJZQo31RYyC8j7Oo6pgIV94RdynNR4mPzCHT%2BxNt9zjITSyTMiMEI3c8me9iRlzfWTbyCcDTWLUq%2FtIMr9%2FlOO1KOjeP2VPl3wuYQaZO0yeYHuqDoExUIaeLV%2FB2%2BN5XJl1DVYdfhsxGRumOdf1i%2FltFquJeVAwBRp15qecryXzk27QeOwOM0mpSTINcRFi3C3LpV%2BCfIg8z6b%2FHsKY4vKSSqc%2F835Tf%2Fqs%2FtnfQX7C6eW%2BPp%2B6IESe3GD6%2Fby9KEuZkxCKGIYuEUDHUmRycCPprVYSzovSp%2BJT14F894pTPNm6Q58BKMFgmw2VL1kgETM5m2wjZwN0qsXkq73zxWreT5N3BYx9nPDyvNwKIuBdkPIusDrBAPk47hhLEnT6W4Yp2hf%2FJWHPCx6xthlA6f6pOMrNAlr6Vs7SfM7x3oAIroauI6ls7m2OK5Y0367SUGvhSl%2Fyz5LdtLYkJSfTXgORH9t5O28Fp8BTgJusHMxiRJ817JOK87gtS%2BUdO9MK7L4sAGOqUBgCU8h2qo%2B3snybgpoOCXCcMtyuJwF6LihOcAYX1PHwwdG2UvksZflZQyD3jZxs7KXBfttXuEKkhg9QZgGZIfrPSS1NWEzEIJxLbwRrp6CDm77auOhamoFOGJ5n0nqZ41rEZbOiKacXoK1fVuf38Eu78MYD9CTtJbYce6RgqW9kL%2FnrqWqI5RMkrjcCe0udnE82Vv%2FLIZO22VIZAyG1WHyIuDD3g0&X-Amz-Signature=0e5574a239f4bb66bd71ab114640921194f2ac13f3ae5d0e54fd88ec4581b555&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GT6OCN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfH5gjQQ10I4%2Fth%2F3ouGxhic2QI5hf5GVxhBE9dUDKFQIgC4oQURFWOPRYgT4ZVZTCP78wHtetPVpchq3kN4FGb0sq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOVq%2Fn38oafyp8hWbSrcAw4OB4YPY1A5Bzi85qLoDUbbURd3icpYer6ea7oCeKrgGwqI6oIIE3sNmKfx%2FdqzP344ssI6XnqOfabuaNfiW6x0oJ8bHn80Ia06zxB3w88llS0KNI9TxmC8%2BURij0ymJZQo31RYyC8j7Oo6pgIV94RdynNR4mPzCHT%2BxNt9zjITSyTMiMEI3c8me9iRlzfWTbyCcDTWLUq%2FtIMr9%2FlOO1KOjeP2VPl3wuYQaZO0yeYHuqDoExUIaeLV%2FB2%2BN5XJl1DVYdfhsxGRumOdf1i%2FltFquJeVAwBRp15qecryXzk27QeOwOM0mpSTINcRFi3C3LpV%2BCfIg8z6b%2FHsKY4vKSSqc%2F835Tf%2Fqs%2FtnfQX7C6eW%2BPp%2B6IESe3GD6%2Fby9KEuZkxCKGIYuEUDHUmRycCPprVYSzovSp%2BJT14F894pTPNm6Q58BKMFgmw2VL1kgETM5m2wjZwN0qsXkq73zxWreT5N3BYx9nPDyvNwKIuBdkPIusDrBAPk47hhLEnT6W4Yp2hf%2FJWHPCx6xthlA6f6pOMrNAlr6Vs7SfM7x3oAIroauI6ls7m2OK5Y0367SUGvhSl%2Fyz5LdtLYkJSfTXgORH9t5O28Fp8BTgJusHMxiRJ817JOK87gtS%2BUdO9MK7L4sAGOqUBgCU8h2qo%2B3snybgpoOCXCcMtyuJwF6LihOcAYX1PHwwdG2UvksZflZQyD3jZxs7KXBfttXuEKkhg9QZgGZIfrPSS1NWEzEIJxLbwRrp6CDm77auOhamoFOGJ5n0nqZ41rEZbOiKacXoK1fVuf38Eu78MYD9CTtJbYce6RgqW9kL%2FnrqWqI5RMkrjcCe0udnE82Vv%2FLIZO22VIZAyG1WHyIuDD3g0&X-Amz-Signature=b229e531464c953de8bf361187cbd30691919bfebebff77a5d959ceb9347c7e4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GT6OCN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfH5gjQQ10I4%2Fth%2F3ouGxhic2QI5hf5GVxhBE9dUDKFQIgC4oQURFWOPRYgT4ZVZTCP78wHtetPVpchq3kN4FGb0sq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOVq%2Fn38oafyp8hWbSrcAw4OB4YPY1A5Bzi85qLoDUbbURd3icpYer6ea7oCeKrgGwqI6oIIE3sNmKfx%2FdqzP344ssI6XnqOfabuaNfiW6x0oJ8bHn80Ia06zxB3w88llS0KNI9TxmC8%2BURij0ymJZQo31RYyC8j7Oo6pgIV94RdynNR4mPzCHT%2BxNt9zjITSyTMiMEI3c8me9iRlzfWTbyCcDTWLUq%2FtIMr9%2FlOO1KOjeP2VPl3wuYQaZO0yeYHuqDoExUIaeLV%2FB2%2BN5XJl1DVYdfhsxGRumOdf1i%2FltFquJeVAwBRp15qecryXzk27QeOwOM0mpSTINcRFi3C3LpV%2BCfIg8z6b%2FHsKY4vKSSqc%2F835Tf%2Fqs%2FtnfQX7C6eW%2BPp%2B6IESe3GD6%2Fby9KEuZkxCKGIYuEUDHUmRycCPprVYSzovSp%2BJT14F894pTPNm6Q58BKMFgmw2VL1kgETM5m2wjZwN0qsXkq73zxWreT5N3BYx9nPDyvNwKIuBdkPIusDrBAPk47hhLEnT6W4Yp2hf%2FJWHPCx6xthlA6f6pOMrNAlr6Vs7SfM7x3oAIroauI6ls7m2OK5Y0367SUGvhSl%2Fyz5LdtLYkJSfTXgORH9t5O28Fp8BTgJusHMxiRJ817JOK87gtS%2BUdO9MK7L4sAGOqUBgCU8h2qo%2B3snybgpoOCXCcMtyuJwF6LihOcAYX1PHwwdG2UvksZflZQyD3jZxs7KXBfttXuEKkhg9QZgGZIfrPSS1NWEzEIJxLbwRrp6CDm77auOhamoFOGJ5n0nqZ41rEZbOiKacXoK1fVuf38Eu78MYD9CTtJbYce6RgqW9kL%2FnrqWqI5RMkrjcCe0udnE82Vv%2FLIZO22VIZAyG1WHyIuDD3g0&X-Amz-Signature=56705d13ac19c7bb83a71da5b073a31b153e0891046cd3cd0b48de844c62ec7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GT6OCN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfH5gjQQ10I4%2Fth%2F3ouGxhic2QI5hf5GVxhBE9dUDKFQIgC4oQURFWOPRYgT4ZVZTCP78wHtetPVpchq3kN4FGb0sq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOVq%2Fn38oafyp8hWbSrcAw4OB4YPY1A5Bzi85qLoDUbbURd3icpYer6ea7oCeKrgGwqI6oIIE3sNmKfx%2FdqzP344ssI6XnqOfabuaNfiW6x0oJ8bHn80Ia06zxB3w88llS0KNI9TxmC8%2BURij0ymJZQo31RYyC8j7Oo6pgIV94RdynNR4mPzCHT%2BxNt9zjITSyTMiMEI3c8me9iRlzfWTbyCcDTWLUq%2FtIMr9%2FlOO1KOjeP2VPl3wuYQaZO0yeYHuqDoExUIaeLV%2FB2%2BN5XJl1DVYdfhsxGRumOdf1i%2FltFquJeVAwBRp15qecryXzk27QeOwOM0mpSTINcRFi3C3LpV%2BCfIg8z6b%2FHsKY4vKSSqc%2F835Tf%2Fqs%2FtnfQX7C6eW%2BPp%2B6IESe3GD6%2Fby9KEuZkxCKGIYuEUDHUmRycCPprVYSzovSp%2BJT14F894pTPNm6Q58BKMFgmw2VL1kgETM5m2wjZwN0qsXkq73zxWreT5N3BYx9nPDyvNwKIuBdkPIusDrBAPk47hhLEnT6W4Yp2hf%2FJWHPCx6xthlA6f6pOMrNAlr6Vs7SfM7x3oAIroauI6ls7m2OK5Y0367SUGvhSl%2Fyz5LdtLYkJSfTXgORH9t5O28Fp8BTgJusHMxiRJ817JOK87gtS%2BUdO9MK7L4sAGOqUBgCU8h2qo%2B3snybgpoOCXCcMtyuJwF6LihOcAYX1PHwwdG2UvksZflZQyD3jZxs7KXBfttXuEKkhg9QZgGZIfrPSS1NWEzEIJxLbwRrp6CDm77auOhamoFOGJ5n0nqZ41rEZbOiKacXoK1fVuf38Eu78MYD9CTtJbYce6RgqW9kL%2FnrqWqI5RMkrjcCe0udnE82Vv%2FLIZO22VIZAyG1WHyIuDD3g0&X-Amz-Signature=8f6da2f6ac1932168452c8f1eedb2fd5b7e388130d91882fd75fd75cc8a8e9f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GT6OCN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfH5gjQQ10I4%2Fth%2F3ouGxhic2QI5hf5GVxhBE9dUDKFQIgC4oQURFWOPRYgT4ZVZTCP78wHtetPVpchq3kN4FGb0sq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOVq%2Fn38oafyp8hWbSrcAw4OB4YPY1A5Bzi85qLoDUbbURd3icpYer6ea7oCeKrgGwqI6oIIE3sNmKfx%2FdqzP344ssI6XnqOfabuaNfiW6x0oJ8bHn80Ia06zxB3w88llS0KNI9TxmC8%2BURij0ymJZQo31RYyC8j7Oo6pgIV94RdynNR4mPzCHT%2BxNt9zjITSyTMiMEI3c8me9iRlzfWTbyCcDTWLUq%2FtIMr9%2FlOO1KOjeP2VPl3wuYQaZO0yeYHuqDoExUIaeLV%2FB2%2BN5XJl1DVYdfhsxGRumOdf1i%2FltFquJeVAwBRp15qecryXzk27QeOwOM0mpSTINcRFi3C3LpV%2BCfIg8z6b%2FHsKY4vKSSqc%2F835Tf%2Fqs%2FtnfQX7C6eW%2BPp%2B6IESe3GD6%2Fby9KEuZkxCKGIYuEUDHUmRycCPprVYSzovSp%2BJT14F894pTPNm6Q58BKMFgmw2VL1kgETM5m2wjZwN0qsXkq73zxWreT5N3BYx9nPDyvNwKIuBdkPIusDrBAPk47hhLEnT6W4Yp2hf%2FJWHPCx6xthlA6f6pOMrNAlr6Vs7SfM7x3oAIroauI6ls7m2OK5Y0367SUGvhSl%2Fyz5LdtLYkJSfTXgORH9t5O28Fp8BTgJusHMxiRJ817JOK87gtS%2BUdO9MK7L4sAGOqUBgCU8h2qo%2B3snybgpoOCXCcMtyuJwF6LihOcAYX1PHwwdG2UvksZflZQyD3jZxs7KXBfttXuEKkhg9QZgGZIfrPSS1NWEzEIJxLbwRrp6CDm77auOhamoFOGJ5n0nqZ41rEZbOiKacXoK1fVuf38Eu78MYD9CTtJbYce6RgqW9kL%2FnrqWqI5RMkrjcCe0udnE82Vv%2FLIZO22VIZAyG1WHyIuDD3g0&X-Amz-Signature=0bc63c8457096506d1a2e7499451dbcf595d4c7a4a5b194f2635c287b4c6a331&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
