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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEIZGGUP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICq1zaKPIKan1RS2F8B45egWJVZv36uctylKDBb1uO1BAiBtySJ0FmgguIN8gUEOs48sGtNm8q%2Brk7zVDfoU%2FGFK7Sr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMVsW5E8saLwiqoTqWKtwDasTeq74DM8vs%2FKAlzJOFR335vYYLnU%2Bzlov3L%2Ba7edamiMU81JebZ14kpVOiObr%2BfgcyElsev1iBWOd6%2Bjc2L1wAom0l4GTdTIPGxr9jegaaEkF9EclqNwzY6MNJjXXGL8rnYMHHY3Q8TQwm0x0PaeOW7hT2IhXpoACNzW4Qmr4kLJkfTLJa3DCKdPkXdgDEvFzMsvDX2Q0RvtIfW1IlxTmh9pVeMLI9v2AqsY1eIZ707IC1CRP%2Fy6CI%2B3N8Lco5qSvNYz%2FnG4Tnz7wMYqEktqQYVNAhCxhdI%2F28XYOpR8001yEcGawmAxap5HH0DPe9XgyFzpB7DANJSvc6sogvT1M9Kn2lVuJpnIqlUczqKMI2T9x4FFwHYhfzoeeaHqFv%2BPrMnWcJydnOZQEy6ztOtQRDz8YLQxWg2Rz7PekC2RkPPKUsj3Bm6mDPPy1FVax12%2FwzmX1UAaXv0QDzGkxKKVkZ0MJ98gb%2BjlaJfr5zACzaQTbW3Kdam5bKJVgNxbsiNaII7TL3GgpZBRbIt7FO04nKGCsvWszwakqo3F0Wlk7PXT5EikCRjIBu0IesGPABwyt6h0Bku7IqMzqbWyawU%2FwKrkRLLthJcwNB74TGREJJk0aq0BvN%2FCaofp0wl%2BT4vQY6pgGCk6jrP0rD266Pcz7kU6VtsrPvBxLqVuZeOX4y0pt7aw6eY%2Fyiu3U%2B%2FSCYTTFf7NHV%2FmDHlDumpW2EV4Xc64nQaK7Ev%2By3H5J1PRj0jLZ8jc3p66kz54T9N%2FUsH7K91ilTZ4FVpXOe8bE8mtbsspPCWCpp2p7jhfvWym%2FSbSs%2B090%2BfgHSxDLBABE6FJEjvUEV3HMS%2B%2B2UAv6RUNMPQPn7tfHjjg4%2F&X-Amz-Signature=e9bace2113de513de4a593b059a049e35b948ae826fc26b8bbbaf39c381d3cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEIZGGUP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICq1zaKPIKan1RS2F8B45egWJVZv36uctylKDBb1uO1BAiBtySJ0FmgguIN8gUEOs48sGtNm8q%2Brk7zVDfoU%2FGFK7Sr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMVsW5E8saLwiqoTqWKtwDasTeq74DM8vs%2FKAlzJOFR335vYYLnU%2Bzlov3L%2Ba7edamiMU81JebZ14kpVOiObr%2BfgcyElsev1iBWOd6%2Bjc2L1wAom0l4GTdTIPGxr9jegaaEkF9EclqNwzY6MNJjXXGL8rnYMHHY3Q8TQwm0x0PaeOW7hT2IhXpoACNzW4Qmr4kLJkfTLJa3DCKdPkXdgDEvFzMsvDX2Q0RvtIfW1IlxTmh9pVeMLI9v2AqsY1eIZ707IC1CRP%2Fy6CI%2B3N8Lco5qSvNYz%2FnG4Tnz7wMYqEktqQYVNAhCxhdI%2F28XYOpR8001yEcGawmAxap5HH0DPe9XgyFzpB7DANJSvc6sogvT1M9Kn2lVuJpnIqlUczqKMI2T9x4FFwHYhfzoeeaHqFv%2BPrMnWcJydnOZQEy6ztOtQRDz8YLQxWg2Rz7PekC2RkPPKUsj3Bm6mDPPy1FVax12%2FwzmX1UAaXv0QDzGkxKKVkZ0MJ98gb%2BjlaJfr5zACzaQTbW3Kdam5bKJVgNxbsiNaII7TL3GgpZBRbIt7FO04nKGCsvWszwakqo3F0Wlk7PXT5EikCRjIBu0IesGPABwyt6h0Bku7IqMzqbWyawU%2FwKrkRLLthJcwNB74TGREJJk0aq0BvN%2FCaofp0wl%2BT4vQY6pgGCk6jrP0rD266Pcz7kU6VtsrPvBxLqVuZeOX4y0pt7aw6eY%2Fyiu3U%2B%2FSCYTTFf7NHV%2FmDHlDumpW2EV4Xc64nQaK7Ev%2By3H5J1PRj0jLZ8jc3p66kz54T9N%2FUsH7K91ilTZ4FVpXOe8bE8mtbsspPCWCpp2p7jhfvWym%2FSbSs%2B090%2BfgHSxDLBABE6FJEjvUEV3HMS%2B%2B2UAv6RUNMPQPn7tfHjjg4%2F&X-Amz-Signature=7b6339c58f9521680c06f59a443b847619139b8e390ef3c3a3e43e081702ac95&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEIZGGUP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICq1zaKPIKan1RS2F8B45egWJVZv36uctylKDBb1uO1BAiBtySJ0FmgguIN8gUEOs48sGtNm8q%2Brk7zVDfoU%2FGFK7Sr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMVsW5E8saLwiqoTqWKtwDasTeq74DM8vs%2FKAlzJOFR335vYYLnU%2Bzlov3L%2Ba7edamiMU81JebZ14kpVOiObr%2BfgcyElsev1iBWOd6%2Bjc2L1wAom0l4GTdTIPGxr9jegaaEkF9EclqNwzY6MNJjXXGL8rnYMHHY3Q8TQwm0x0PaeOW7hT2IhXpoACNzW4Qmr4kLJkfTLJa3DCKdPkXdgDEvFzMsvDX2Q0RvtIfW1IlxTmh9pVeMLI9v2AqsY1eIZ707IC1CRP%2Fy6CI%2B3N8Lco5qSvNYz%2FnG4Tnz7wMYqEktqQYVNAhCxhdI%2F28XYOpR8001yEcGawmAxap5HH0DPe9XgyFzpB7DANJSvc6sogvT1M9Kn2lVuJpnIqlUczqKMI2T9x4FFwHYhfzoeeaHqFv%2BPrMnWcJydnOZQEy6ztOtQRDz8YLQxWg2Rz7PekC2RkPPKUsj3Bm6mDPPy1FVax12%2FwzmX1UAaXv0QDzGkxKKVkZ0MJ98gb%2BjlaJfr5zACzaQTbW3Kdam5bKJVgNxbsiNaII7TL3GgpZBRbIt7FO04nKGCsvWszwakqo3F0Wlk7PXT5EikCRjIBu0IesGPABwyt6h0Bku7IqMzqbWyawU%2FwKrkRLLthJcwNB74TGREJJk0aq0BvN%2FCaofp0wl%2BT4vQY6pgGCk6jrP0rD266Pcz7kU6VtsrPvBxLqVuZeOX4y0pt7aw6eY%2Fyiu3U%2B%2FSCYTTFf7NHV%2FmDHlDumpW2EV4Xc64nQaK7Ev%2By3H5J1PRj0jLZ8jc3p66kz54T9N%2FUsH7K91ilTZ4FVpXOe8bE8mtbsspPCWCpp2p7jhfvWym%2FSbSs%2B090%2BfgHSxDLBABE6FJEjvUEV3HMS%2B%2B2UAv6RUNMPQPn7tfHjjg4%2F&X-Amz-Signature=0722976351a469843d4796ca7e3a460a074bfc0a97c64e12b19b12b262ade708&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEIZGGUP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICq1zaKPIKan1RS2F8B45egWJVZv36uctylKDBb1uO1BAiBtySJ0FmgguIN8gUEOs48sGtNm8q%2Brk7zVDfoU%2FGFK7Sr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMVsW5E8saLwiqoTqWKtwDasTeq74DM8vs%2FKAlzJOFR335vYYLnU%2Bzlov3L%2Ba7edamiMU81JebZ14kpVOiObr%2BfgcyElsev1iBWOd6%2Bjc2L1wAom0l4GTdTIPGxr9jegaaEkF9EclqNwzY6MNJjXXGL8rnYMHHY3Q8TQwm0x0PaeOW7hT2IhXpoACNzW4Qmr4kLJkfTLJa3DCKdPkXdgDEvFzMsvDX2Q0RvtIfW1IlxTmh9pVeMLI9v2AqsY1eIZ707IC1CRP%2Fy6CI%2B3N8Lco5qSvNYz%2FnG4Tnz7wMYqEktqQYVNAhCxhdI%2F28XYOpR8001yEcGawmAxap5HH0DPe9XgyFzpB7DANJSvc6sogvT1M9Kn2lVuJpnIqlUczqKMI2T9x4FFwHYhfzoeeaHqFv%2BPrMnWcJydnOZQEy6ztOtQRDz8YLQxWg2Rz7PekC2RkPPKUsj3Bm6mDPPy1FVax12%2FwzmX1UAaXv0QDzGkxKKVkZ0MJ98gb%2BjlaJfr5zACzaQTbW3Kdam5bKJVgNxbsiNaII7TL3GgpZBRbIt7FO04nKGCsvWszwakqo3F0Wlk7PXT5EikCRjIBu0IesGPABwyt6h0Bku7IqMzqbWyawU%2FwKrkRLLthJcwNB74TGREJJk0aq0BvN%2FCaofp0wl%2BT4vQY6pgGCk6jrP0rD266Pcz7kU6VtsrPvBxLqVuZeOX4y0pt7aw6eY%2Fyiu3U%2B%2FSCYTTFf7NHV%2FmDHlDumpW2EV4Xc64nQaK7Ev%2By3H5J1PRj0jLZ8jc3p66kz54T9N%2FUsH7K91ilTZ4FVpXOe8bE8mtbsspPCWCpp2p7jhfvWym%2FSbSs%2B090%2BfgHSxDLBABE6FJEjvUEV3HMS%2B%2B2UAv6RUNMPQPn7tfHjjg4%2F&X-Amz-Signature=c4b964851cc72bc21e0e8c86a54b0b6b8e903656c759a05554682f6a523ce55c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEIZGGUP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICq1zaKPIKan1RS2F8B45egWJVZv36uctylKDBb1uO1BAiBtySJ0FmgguIN8gUEOs48sGtNm8q%2Brk7zVDfoU%2FGFK7Sr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMVsW5E8saLwiqoTqWKtwDasTeq74DM8vs%2FKAlzJOFR335vYYLnU%2Bzlov3L%2Ba7edamiMU81JebZ14kpVOiObr%2BfgcyElsev1iBWOd6%2Bjc2L1wAom0l4GTdTIPGxr9jegaaEkF9EclqNwzY6MNJjXXGL8rnYMHHY3Q8TQwm0x0PaeOW7hT2IhXpoACNzW4Qmr4kLJkfTLJa3DCKdPkXdgDEvFzMsvDX2Q0RvtIfW1IlxTmh9pVeMLI9v2AqsY1eIZ707IC1CRP%2Fy6CI%2B3N8Lco5qSvNYz%2FnG4Tnz7wMYqEktqQYVNAhCxhdI%2F28XYOpR8001yEcGawmAxap5HH0DPe9XgyFzpB7DANJSvc6sogvT1M9Kn2lVuJpnIqlUczqKMI2T9x4FFwHYhfzoeeaHqFv%2BPrMnWcJydnOZQEy6ztOtQRDz8YLQxWg2Rz7PekC2RkPPKUsj3Bm6mDPPy1FVax12%2FwzmX1UAaXv0QDzGkxKKVkZ0MJ98gb%2BjlaJfr5zACzaQTbW3Kdam5bKJVgNxbsiNaII7TL3GgpZBRbIt7FO04nKGCsvWszwakqo3F0Wlk7PXT5EikCRjIBu0IesGPABwyt6h0Bku7IqMzqbWyawU%2FwKrkRLLthJcwNB74TGREJJk0aq0BvN%2FCaofp0wl%2BT4vQY6pgGCk6jrP0rD266Pcz7kU6VtsrPvBxLqVuZeOX4y0pt7aw6eY%2Fyiu3U%2B%2FSCYTTFf7NHV%2FmDHlDumpW2EV4Xc64nQaK7Ev%2By3H5J1PRj0jLZ8jc3p66kz54T9N%2FUsH7K91ilTZ4FVpXOe8bE8mtbsspPCWCpp2p7jhfvWym%2FSbSs%2B090%2BfgHSxDLBABE6FJEjvUEV3HMS%2B%2B2UAv6RUNMPQPn7tfHjjg4%2F&X-Amz-Signature=4b8252cb26e665604216d6a96a86023285d18ef1ed2d1e812c6221abe016dd26&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
