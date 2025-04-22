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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDGQSTFU%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC34W8aevrAo%2FePajpRaWdmtBClfvVPcJa0HcJVGXegQAIgX8gwh3mk%2B5i37yvjhW5F8iRrkaNz3Qc9m9g0Flss8xUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlGtO6BbcKRwPe%2FTircA5jNjRp1WI3Ih%2FN3L7qQ8eDL7ibqXwlpqR6SirLo%2BfY94ugkWlhlJqKQysaj7PJ29DV2TgPIa1fsy%2FYPSwofSJt%2Byl5X8tWTky1giHc2nUiyuwnppdbUw9qovUTNAss7NFsvF3XSly2dF5iT%2FLr8gvxEWTWAYbbHMTKw8oQtUWysy8FmSObH13VY0TbRv3MbaPvj1rnF20wXZTX23nI%2Bn%2Fk96bht3c3GwpUWOPGGY51GB90%2BFsV8e%2BK0PvglQtRVjILL4w4si6YB0Wa60lxlaW2%2BRLf1MbQB4B%2BPgyqCA20C1A6N4SoAzTYdtUvJoob4u2Sd1bQASFle2Cd4ZWp%2Ft%2F6Z8djR3vBkgcQ%2FPnP2eqm%2BThMk%2FimmBvVFO%2B9TZhugFa%2Bit72BE4GRs4ke6g%2BrLXtOTIZxp87Y7UDdKT2DxQtsHXatF364F5NAlilxOW%2F4qcsO0EDJK7tQK%2B0uhu%2Fp01Ri%2BbA3CywfKL%2B5hipDieUo4fO8DpUfpCXeVh5YPKjYj7NccOLf9kECIAKca%2FqQrBODx5X6d%2FjruxGy5OqSC%2BsmH9obM7Chq%2FCbpVe2BYsbQmYKPpzuItPXEKWDZ6bLvRikEMr2CoKjsvlRa9yD9XmCz8D4gpPvhZAGEaXCMI%2B7n8AGOqUBVnAn7CcvL7I1HUX5KUkvKIm4wkWgrXh2ctjIldl24trpro4VxhECyAh7JxR8%2FfpQn%2Fr72HRRxUNRdXy5D0D%2F6T6FTOHmupqA%2FRNpzlSJtJL8e2ZBl659HD8FPbG0Uno30mFagMwxC%2Bz0UMnRFUrt%2BzCirMmiKmAvOgjydXvVC2yezAUwNc0ZvJTBUfWgdVcxDNuH94DrZ%2BbDXr8o4PFEGqNxLQTS&X-Amz-Signature=e831a428312c14772ccf6299e101692c2cb755e259730439685d116aaf300adb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDGQSTFU%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC34W8aevrAo%2FePajpRaWdmtBClfvVPcJa0HcJVGXegQAIgX8gwh3mk%2B5i37yvjhW5F8iRrkaNz3Qc9m9g0Flss8xUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlGtO6BbcKRwPe%2FTircA5jNjRp1WI3Ih%2FN3L7qQ8eDL7ibqXwlpqR6SirLo%2BfY94ugkWlhlJqKQysaj7PJ29DV2TgPIa1fsy%2FYPSwofSJt%2Byl5X8tWTky1giHc2nUiyuwnppdbUw9qovUTNAss7NFsvF3XSly2dF5iT%2FLr8gvxEWTWAYbbHMTKw8oQtUWysy8FmSObH13VY0TbRv3MbaPvj1rnF20wXZTX23nI%2Bn%2Fk96bht3c3GwpUWOPGGY51GB90%2BFsV8e%2BK0PvglQtRVjILL4w4si6YB0Wa60lxlaW2%2BRLf1MbQB4B%2BPgyqCA20C1A6N4SoAzTYdtUvJoob4u2Sd1bQASFle2Cd4ZWp%2Ft%2F6Z8djR3vBkgcQ%2FPnP2eqm%2BThMk%2FimmBvVFO%2B9TZhugFa%2Bit72BE4GRs4ke6g%2BrLXtOTIZxp87Y7UDdKT2DxQtsHXatF364F5NAlilxOW%2F4qcsO0EDJK7tQK%2B0uhu%2Fp01Ri%2BbA3CywfKL%2B5hipDieUo4fO8DpUfpCXeVh5YPKjYj7NccOLf9kECIAKca%2FqQrBODx5X6d%2FjruxGy5OqSC%2BsmH9obM7Chq%2FCbpVe2BYsbQmYKPpzuItPXEKWDZ6bLvRikEMr2CoKjsvlRa9yD9XmCz8D4gpPvhZAGEaXCMI%2B7n8AGOqUBVnAn7CcvL7I1HUX5KUkvKIm4wkWgrXh2ctjIldl24trpro4VxhECyAh7JxR8%2FfpQn%2Fr72HRRxUNRdXy5D0D%2F6T6FTOHmupqA%2FRNpzlSJtJL8e2ZBl659HD8FPbG0Uno30mFagMwxC%2Bz0UMnRFUrt%2BzCirMmiKmAvOgjydXvVC2yezAUwNc0ZvJTBUfWgdVcxDNuH94DrZ%2BbDXr8o4PFEGqNxLQTS&X-Amz-Signature=d7532b6a7105427553adadde03471f809cec6a76ba4c53eecdc96873982271e6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDGQSTFU%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC34W8aevrAo%2FePajpRaWdmtBClfvVPcJa0HcJVGXegQAIgX8gwh3mk%2B5i37yvjhW5F8iRrkaNz3Qc9m9g0Flss8xUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlGtO6BbcKRwPe%2FTircA5jNjRp1WI3Ih%2FN3L7qQ8eDL7ibqXwlpqR6SirLo%2BfY94ugkWlhlJqKQysaj7PJ29DV2TgPIa1fsy%2FYPSwofSJt%2Byl5X8tWTky1giHc2nUiyuwnppdbUw9qovUTNAss7NFsvF3XSly2dF5iT%2FLr8gvxEWTWAYbbHMTKw8oQtUWysy8FmSObH13VY0TbRv3MbaPvj1rnF20wXZTX23nI%2Bn%2Fk96bht3c3GwpUWOPGGY51GB90%2BFsV8e%2BK0PvglQtRVjILL4w4si6YB0Wa60lxlaW2%2BRLf1MbQB4B%2BPgyqCA20C1A6N4SoAzTYdtUvJoob4u2Sd1bQASFle2Cd4ZWp%2Ft%2F6Z8djR3vBkgcQ%2FPnP2eqm%2BThMk%2FimmBvVFO%2B9TZhugFa%2Bit72BE4GRs4ke6g%2BrLXtOTIZxp87Y7UDdKT2DxQtsHXatF364F5NAlilxOW%2F4qcsO0EDJK7tQK%2B0uhu%2Fp01Ri%2BbA3CywfKL%2B5hipDieUo4fO8DpUfpCXeVh5YPKjYj7NccOLf9kECIAKca%2FqQrBODx5X6d%2FjruxGy5OqSC%2BsmH9obM7Chq%2FCbpVe2BYsbQmYKPpzuItPXEKWDZ6bLvRikEMr2CoKjsvlRa9yD9XmCz8D4gpPvhZAGEaXCMI%2B7n8AGOqUBVnAn7CcvL7I1HUX5KUkvKIm4wkWgrXh2ctjIldl24trpro4VxhECyAh7JxR8%2FfpQn%2Fr72HRRxUNRdXy5D0D%2F6T6FTOHmupqA%2FRNpzlSJtJL8e2ZBl659HD8FPbG0Uno30mFagMwxC%2Bz0UMnRFUrt%2BzCirMmiKmAvOgjydXvVC2yezAUwNc0ZvJTBUfWgdVcxDNuH94DrZ%2BbDXr8o4PFEGqNxLQTS&X-Amz-Signature=f32bade5099d442a6c4781a8a2f7ef6a005b8586c32a3901b1514c4f92578812&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDGQSTFU%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC34W8aevrAo%2FePajpRaWdmtBClfvVPcJa0HcJVGXegQAIgX8gwh3mk%2B5i37yvjhW5F8iRrkaNz3Qc9m9g0Flss8xUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlGtO6BbcKRwPe%2FTircA5jNjRp1WI3Ih%2FN3L7qQ8eDL7ibqXwlpqR6SirLo%2BfY94ugkWlhlJqKQysaj7PJ29DV2TgPIa1fsy%2FYPSwofSJt%2Byl5X8tWTky1giHc2nUiyuwnppdbUw9qovUTNAss7NFsvF3XSly2dF5iT%2FLr8gvxEWTWAYbbHMTKw8oQtUWysy8FmSObH13VY0TbRv3MbaPvj1rnF20wXZTX23nI%2Bn%2Fk96bht3c3GwpUWOPGGY51GB90%2BFsV8e%2BK0PvglQtRVjILL4w4si6YB0Wa60lxlaW2%2BRLf1MbQB4B%2BPgyqCA20C1A6N4SoAzTYdtUvJoob4u2Sd1bQASFle2Cd4ZWp%2Ft%2F6Z8djR3vBkgcQ%2FPnP2eqm%2BThMk%2FimmBvVFO%2B9TZhugFa%2Bit72BE4GRs4ke6g%2BrLXtOTIZxp87Y7UDdKT2DxQtsHXatF364F5NAlilxOW%2F4qcsO0EDJK7tQK%2B0uhu%2Fp01Ri%2BbA3CywfKL%2B5hipDieUo4fO8DpUfpCXeVh5YPKjYj7NccOLf9kECIAKca%2FqQrBODx5X6d%2FjruxGy5OqSC%2BsmH9obM7Chq%2FCbpVe2BYsbQmYKPpzuItPXEKWDZ6bLvRikEMr2CoKjsvlRa9yD9XmCz8D4gpPvhZAGEaXCMI%2B7n8AGOqUBVnAn7CcvL7I1HUX5KUkvKIm4wkWgrXh2ctjIldl24trpro4VxhECyAh7JxR8%2FfpQn%2Fr72HRRxUNRdXy5D0D%2F6T6FTOHmupqA%2FRNpzlSJtJL8e2ZBl659HD8FPbG0Uno30mFagMwxC%2Bz0UMnRFUrt%2BzCirMmiKmAvOgjydXvVC2yezAUwNc0ZvJTBUfWgdVcxDNuH94DrZ%2BbDXr8o4PFEGqNxLQTS&X-Amz-Signature=8ad35b54dd58e56ca50e2790a1eac618b35e1c4ccff268b95265edb2c585d3ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDGQSTFU%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC34W8aevrAo%2FePajpRaWdmtBClfvVPcJa0HcJVGXegQAIgX8gwh3mk%2B5i37yvjhW5F8iRrkaNz3Qc9m9g0Flss8xUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlGtO6BbcKRwPe%2FTircA5jNjRp1WI3Ih%2FN3L7qQ8eDL7ibqXwlpqR6SirLo%2BfY94ugkWlhlJqKQysaj7PJ29DV2TgPIa1fsy%2FYPSwofSJt%2Byl5X8tWTky1giHc2nUiyuwnppdbUw9qovUTNAss7NFsvF3XSly2dF5iT%2FLr8gvxEWTWAYbbHMTKw8oQtUWysy8FmSObH13VY0TbRv3MbaPvj1rnF20wXZTX23nI%2Bn%2Fk96bht3c3GwpUWOPGGY51GB90%2BFsV8e%2BK0PvglQtRVjILL4w4si6YB0Wa60lxlaW2%2BRLf1MbQB4B%2BPgyqCA20C1A6N4SoAzTYdtUvJoob4u2Sd1bQASFle2Cd4ZWp%2Ft%2F6Z8djR3vBkgcQ%2FPnP2eqm%2BThMk%2FimmBvVFO%2B9TZhugFa%2Bit72BE4GRs4ke6g%2BrLXtOTIZxp87Y7UDdKT2DxQtsHXatF364F5NAlilxOW%2F4qcsO0EDJK7tQK%2B0uhu%2Fp01Ri%2BbA3CywfKL%2B5hipDieUo4fO8DpUfpCXeVh5YPKjYj7NccOLf9kECIAKca%2FqQrBODx5X6d%2FjruxGy5OqSC%2BsmH9obM7Chq%2FCbpVe2BYsbQmYKPpzuItPXEKWDZ6bLvRikEMr2CoKjsvlRa9yD9XmCz8D4gpPvhZAGEaXCMI%2B7n8AGOqUBVnAn7CcvL7I1HUX5KUkvKIm4wkWgrXh2ctjIldl24trpro4VxhECyAh7JxR8%2FfpQn%2Fr72HRRxUNRdXy5D0D%2F6T6FTOHmupqA%2FRNpzlSJtJL8e2ZBl659HD8FPbG0Uno30mFagMwxC%2Bz0UMnRFUrt%2BzCirMmiKmAvOgjydXvVC2yezAUwNc0ZvJTBUfWgdVcxDNuH94DrZ%2BbDXr8o4PFEGqNxLQTS&X-Amz-Signature=5afd10b7b1b1c66c232f37172c1154f8d6bc8b9e237ae25ca781c6d81e43cd30&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
