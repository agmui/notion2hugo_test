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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE3FJRIR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB4UcN8bf12wVRbNClsywlRV8Q6dlX3pxmLnkNiFOPhyAiAom5yWXIBs48BwAZOj9nLgBoL2LFby%2B9iP7zB4LQZGUCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6r72gsx8GnvwItwKtwDjIqMh0t5%2FccHtC5xpS6wyQ2o%2B6BBN%2Fx6pY6v4BPkTX4lBy3fuqt8lQh9cOKZ0IzDBcrVqx8OKG2lTa3dWNZnUTdb%2BEQdXq9Fr3I%2FnYOBbdxJsp1YJv26cIlNlVVeqap2LT1aPH2X14TX1VSvBwganBu2iLRFaCPoVlmonVn2R0jESOydqB4kG8bQgNJctLCGIHrMbX8KJjpPinroYbQIkWwkhgzc6QvlGCfdEFclEOKcsnSs8OEpt9XMU9FR0RBr8I9%2FUHcOWAij75FNdVjNf1du8M44G65r7P2xCoGXU%2FO9%2FbJ3r7qiXQMD6yHa1qfhrol73SS7Mk9lmTR2%2B%2BFk6aOfrIUf%2BSId4sOdGD5Y3GMx3Y60N%2Bs9%2FgUQQwyqf2m1ONPtuji35nN6SmxztbLPEzb0bLLcUIcY5ch%2FktfLEqHbULmo%2B%2BSCRF87e1NIdtMs3tyWwa9AcNbxVjm1AKINdVQ2L3ZVZc9hYRFCc%2B6bb%2BLdzL%2B205%2Ban9Wk5920YcNbI%2FeIEw2mnQoAEeCSN0fcOHvNSMlLFoGeyLv9VGwW0mvez6RNEwjlOLVoSiwhZxstJda8C9cSXDIU8j7UHKoPSNBVWuuZLJSUznZ89v3HMANfH6bdLijGYMO%2Fhn0wjMz%2FvgY6pgEFcFfXC5a%2FLjSYOlZ%2BMkrgqY%2FLo5nfc6MDQHMZ3P%2FTI51dtJ%2FR43dJebPcOGeQwM914%2FRUIXxcDzcm1Qzhn6KG%2FwF0DVn5hpPlSsO8s2J8ROCxObZRF%2F6O4Yfjh2gc2L3URrAxIEGQZJbyFlL3gNxRwz%2BgM%2BdoaSNOM7Y1p3f77qHN3gMbU9gSg1EYcqeoWsevOpvskGagTwjk2fDdJ01zP4uK9FP3&X-Amz-Signature=318c3f004c2feb447a54def2e2d0f86493340838ada85e81151c1c81db8896a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE3FJRIR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB4UcN8bf12wVRbNClsywlRV8Q6dlX3pxmLnkNiFOPhyAiAom5yWXIBs48BwAZOj9nLgBoL2LFby%2B9iP7zB4LQZGUCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6r72gsx8GnvwItwKtwDjIqMh0t5%2FccHtC5xpS6wyQ2o%2B6BBN%2Fx6pY6v4BPkTX4lBy3fuqt8lQh9cOKZ0IzDBcrVqx8OKG2lTa3dWNZnUTdb%2BEQdXq9Fr3I%2FnYOBbdxJsp1YJv26cIlNlVVeqap2LT1aPH2X14TX1VSvBwganBu2iLRFaCPoVlmonVn2R0jESOydqB4kG8bQgNJctLCGIHrMbX8KJjpPinroYbQIkWwkhgzc6QvlGCfdEFclEOKcsnSs8OEpt9XMU9FR0RBr8I9%2FUHcOWAij75FNdVjNf1du8M44G65r7P2xCoGXU%2FO9%2FbJ3r7qiXQMD6yHa1qfhrol73SS7Mk9lmTR2%2B%2BFk6aOfrIUf%2BSId4sOdGD5Y3GMx3Y60N%2Bs9%2FgUQQwyqf2m1ONPtuji35nN6SmxztbLPEzb0bLLcUIcY5ch%2FktfLEqHbULmo%2B%2BSCRF87e1NIdtMs3tyWwa9AcNbxVjm1AKINdVQ2L3ZVZc9hYRFCc%2B6bb%2BLdzL%2B205%2Ban9Wk5920YcNbI%2FeIEw2mnQoAEeCSN0fcOHvNSMlLFoGeyLv9VGwW0mvez6RNEwjlOLVoSiwhZxstJda8C9cSXDIU8j7UHKoPSNBVWuuZLJSUznZ89v3HMANfH6bdLijGYMO%2Fhn0wjMz%2FvgY6pgEFcFfXC5a%2FLjSYOlZ%2BMkrgqY%2FLo5nfc6MDQHMZ3P%2FTI51dtJ%2FR43dJebPcOGeQwM914%2FRUIXxcDzcm1Qzhn6KG%2FwF0DVn5hpPlSsO8s2J8ROCxObZRF%2F6O4Yfjh2gc2L3URrAxIEGQZJbyFlL3gNxRwz%2BgM%2BdoaSNOM7Y1p3f77qHN3gMbU9gSg1EYcqeoWsevOpvskGagTwjk2fDdJ01zP4uK9FP3&X-Amz-Signature=9cc2e6a046963a9d249576a1d27c3c3068c04126195ff6b847407d75b39fec9e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE3FJRIR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB4UcN8bf12wVRbNClsywlRV8Q6dlX3pxmLnkNiFOPhyAiAom5yWXIBs48BwAZOj9nLgBoL2LFby%2B9iP7zB4LQZGUCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6r72gsx8GnvwItwKtwDjIqMh0t5%2FccHtC5xpS6wyQ2o%2B6BBN%2Fx6pY6v4BPkTX4lBy3fuqt8lQh9cOKZ0IzDBcrVqx8OKG2lTa3dWNZnUTdb%2BEQdXq9Fr3I%2FnYOBbdxJsp1YJv26cIlNlVVeqap2LT1aPH2X14TX1VSvBwganBu2iLRFaCPoVlmonVn2R0jESOydqB4kG8bQgNJctLCGIHrMbX8KJjpPinroYbQIkWwkhgzc6QvlGCfdEFclEOKcsnSs8OEpt9XMU9FR0RBr8I9%2FUHcOWAij75FNdVjNf1du8M44G65r7P2xCoGXU%2FO9%2FbJ3r7qiXQMD6yHa1qfhrol73SS7Mk9lmTR2%2B%2BFk6aOfrIUf%2BSId4sOdGD5Y3GMx3Y60N%2Bs9%2FgUQQwyqf2m1ONPtuji35nN6SmxztbLPEzb0bLLcUIcY5ch%2FktfLEqHbULmo%2B%2BSCRF87e1NIdtMs3tyWwa9AcNbxVjm1AKINdVQ2L3ZVZc9hYRFCc%2B6bb%2BLdzL%2B205%2Ban9Wk5920YcNbI%2FeIEw2mnQoAEeCSN0fcOHvNSMlLFoGeyLv9VGwW0mvez6RNEwjlOLVoSiwhZxstJda8C9cSXDIU8j7UHKoPSNBVWuuZLJSUznZ89v3HMANfH6bdLijGYMO%2Fhn0wjMz%2FvgY6pgEFcFfXC5a%2FLjSYOlZ%2BMkrgqY%2FLo5nfc6MDQHMZ3P%2FTI51dtJ%2FR43dJebPcOGeQwM914%2FRUIXxcDzcm1Qzhn6KG%2FwF0DVn5hpPlSsO8s2J8ROCxObZRF%2F6O4Yfjh2gc2L3URrAxIEGQZJbyFlL3gNxRwz%2BgM%2BdoaSNOM7Y1p3f77qHN3gMbU9gSg1EYcqeoWsevOpvskGagTwjk2fDdJ01zP4uK9FP3&X-Amz-Signature=9b4fab1b73e66f169293cd86c8afe2911555944c3e910de9e978e5a23eaca19c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE3FJRIR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB4UcN8bf12wVRbNClsywlRV8Q6dlX3pxmLnkNiFOPhyAiAom5yWXIBs48BwAZOj9nLgBoL2LFby%2B9iP7zB4LQZGUCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6r72gsx8GnvwItwKtwDjIqMh0t5%2FccHtC5xpS6wyQ2o%2B6BBN%2Fx6pY6v4BPkTX4lBy3fuqt8lQh9cOKZ0IzDBcrVqx8OKG2lTa3dWNZnUTdb%2BEQdXq9Fr3I%2FnYOBbdxJsp1YJv26cIlNlVVeqap2LT1aPH2X14TX1VSvBwganBu2iLRFaCPoVlmonVn2R0jESOydqB4kG8bQgNJctLCGIHrMbX8KJjpPinroYbQIkWwkhgzc6QvlGCfdEFclEOKcsnSs8OEpt9XMU9FR0RBr8I9%2FUHcOWAij75FNdVjNf1du8M44G65r7P2xCoGXU%2FO9%2FbJ3r7qiXQMD6yHa1qfhrol73SS7Mk9lmTR2%2B%2BFk6aOfrIUf%2BSId4sOdGD5Y3GMx3Y60N%2Bs9%2FgUQQwyqf2m1ONPtuji35nN6SmxztbLPEzb0bLLcUIcY5ch%2FktfLEqHbULmo%2B%2BSCRF87e1NIdtMs3tyWwa9AcNbxVjm1AKINdVQ2L3ZVZc9hYRFCc%2B6bb%2BLdzL%2B205%2Ban9Wk5920YcNbI%2FeIEw2mnQoAEeCSN0fcOHvNSMlLFoGeyLv9VGwW0mvez6RNEwjlOLVoSiwhZxstJda8C9cSXDIU8j7UHKoPSNBVWuuZLJSUznZ89v3HMANfH6bdLijGYMO%2Fhn0wjMz%2FvgY6pgEFcFfXC5a%2FLjSYOlZ%2BMkrgqY%2FLo5nfc6MDQHMZ3P%2FTI51dtJ%2FR43dJebPcOGeQwM914%2FRUIXxcDzcm1Qzhn6KG%2FwF0DVn5hpPlSsO8s2J8ROCxObZRF%2F6O4Yfjh2gc2L3URrAxIEGQZJbyFlL3gNxRwz%2BgM%2BdoaSNOM7Y1p3f77qHN3gMbU9gSg1EYcqeoWsevOpvskGagTwjk2fDdJ01zP4uK9FP3&X-Amz-Signature=7bec2462caebc6aa29b4443c67797fd17e1896d49c8b649dfc120e0461210088&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE3FJRIR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB4UcN8bf12wVRbNClsywlRV8Q6dlX3pxmLnkNiFOPhyAiAom5yWXIBs48BwAZOj9nLgBoL2LFby%2B9iP7zB4LQZGUCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6r72gsx8GnvwItwKtwDjIqMh0t5%2FccHtC5xpS6wyQ2o%2B6BBN%2Fx6pY6v4BPkTX4lBy3fuqt8lQh9cOKZ0IzDBcrVqx8OKG2lTa3dWNZnUTdb%2BEQdXq9Fr3I%2FnYOBbdxJsp1YJv26cIlNlVVeqap2LT1aPH2X14TX1VSvBwganBu2iLRFaCPoVlmonVn2R0jESOydqB4kG8bQgNJctLCGIHrMbX8KJjpPinroYbQIkWwkhgzc6QvlGCfdEFclEOKcsnSs8OEpt9XMU9FR0RBr8I9%2FUHcOWAij75FNdVjNf1du8M44G65r7P2xCoGXU%2FO9%2FbJ3r7qiXQMD6yHa1qfhrol73SS7Mk9lmTR2%2B%2BFk6aOfrIUf%2BSId4sOdGD5Y3GMx3Y60N%2Bs9%2FgUQQwyqf2m1ONPtuji35nN6SmxztbLPEzb0bLLcUIcY5ch%2FktfLEqHbULmo%2B%2BSCRF87e1NIdtMs3tyWwa9AcNbxVjm1AKINdVQ2L3ZVZc9hYRFCc%2B6bb%2BLdzL%2B205%2Ban9Wk5920YcNbI%2FeIEw2mnQoAEeCSN0fcOHvNSMlLFoGeyLv9VGwW0mvez6RNEwjlOLVoSiwhZxstJda8C9cSXDIU8j7UHKoPSNBVWuuZLJSUznZ89v3HMANfH6bdLijGYMO%2Fhn0wjMz%2FvgY6pgEFcFfXC5a%2FLjSYOlZ%2BMkrgqY%2FLo5nfc6MDQHMZ3P%2FTI51dtJ%2FR43dJebPcOGeQwM914%2FRUIXxcDzcm1Qzhn6KG%2FwF0DVn5hpPlSsO8s2J8ROCxObZRF%2F6O4Yfjh2gc2L3URrAxIEGQZJbyFlL3gNxRwz%2BgM%2BdoaSNOM7Y1p3f77qHN3gMbU9gSg1EYcqeoWsevOpvskGagTwjk2fDdJ01zP4uK9FP3&X-Amz-Signature=9d25a2ab3fe7125a953830276fbd6bd0d24ffb407a96a797b4731a790a3fc8d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
