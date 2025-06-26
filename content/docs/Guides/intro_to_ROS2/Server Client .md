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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYRE2T4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBlgCWCXRnqQT8a6SmVP6RGJdlqPaBGTc1aJeSV8ozadAiEAy5r3qdqN70rzdmWS0K6BO%2F384wBWBXmBvRHsy44nCuwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMIbV3wX3mpIEWHICCrcA4zIesLfqddDoZJz0G%2BoQmw5M5cUqAszteMDvwEX0G1BZdt4XheaVIh6E8REVMArEAvRnCEH3PS92iS4wGp5kryDIVEAVGJXS1%2FXcDFIV4rZ8Kd2XnizmWrscn%2BQlwFPca5E%2BSgwYJF7yDxNmip%2Bbf8OdX2VTLccVA1lahzI7hHJ%2FsBzU5ufF94noIG85AxAfGypDZ5%2Ft5k9Id6YcUOV4%2By7a%2B%2FAXTzJ7JtrQcS0Y0YujvckbRjM2%2FiIFIlcAePl76kwTTL%2F17btHLiZdjWeKo1D8Omq%2FJY9nHFfJKZIltltxy6lsSlCXAkpunP%2FAj4ajHNk4gwWavL9Y%2FC7FkuFazURduThfGbjAN9aeb%2BpjjTydq4mNF%2FCsMpa8nqjz8fc4QEhowGGRy2IclKMvgH%2BjHXMgRKZFFyqHZGKSD2CBjqlov5HgkTjnPX66Hr2b7al2GwbL6Aimd2c4gOOu%2BNcmzEtwjero1IAjtLxJ4%2ByBc4jxmyQ8ZFd2i5lBfPNJqfzVuJXxpJc2t1i5XJMlPUsEageVBijPYJ5k0IS7H9iyim%2Fxglp1S1m7%2FO41JJjt4MBRlbWPNioz%2BntE%2FwlSAjsbQETVdu4RObvygW9q8M8gHIC84jd0qpSF7kN4YdiMJyW9MIGOqUBOYN8Ye5pLI8hhpeXXCwDX7OcD1AzHjLf%2FAopJbNdAZWZ5ntAE0aJZ9nLIOch2aXwsfxHvYnYoAIYKSYKpQK%2FfIa5A84CMIX74QJK%2FGLhne0e9YnSYe0xXn1bdvAr0yXj8omq2AmN8mRII1mYQk%2Bndqza%2B4LhNOmZ0AVJN7lWI8kHl0GWoMXDNCXNI3Sn1WCVrQZsXXLn5WhGSOWIN5TyBc%2B7j0OD&X-Amz-Signature=303fa11e1e494ad055ae333b0b39b03f312480954283f5308ed4bb59b8c95311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYRE2T4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBlgCWCXRnqQT8a6SmVP6RGJdlqPaBGTc1aJeSV8ozadAiEAy5r3qdqN70rzdmWS0K6BO%2F384wBWBXmBvRHsy44nCuwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMIbV3wX3mpIEWHICCrcA4zIesLfqddDoZJz0G%2BoQmw5M5cUqAszteMDvwEX0G1BZdt4XheaVIh6E8REVMArEAvRnCEH3PS92iS4wGp5kryDIVEAVGJXS1%2FXcDFIV4rZ8Kd2XnizmWrscn%2BQlwFPca5E%2BSgwYJF7yDxNmip%2Bbf8OdX2VTLccVA1lahzI7hHJ%2FsBzU5ufF94noIG85AxAfGypDZ5%2Ft5k9Id6YcUOV4%2By7a%2B%2FAXTzJ7JtrQcS0Y0YujvckbRjM2%2FiIFIlcAePl76kwTTL%2F17btHLiZdjWeKo1D8Omq%2FJY9nHFfJKZIltltxy6lsSlCXAkpunP%2FAj4ajHNk4gwWavL9Y%2FC7FkuFazURduThfGbjAN9aeb%2BpjjTydq4mNF%2FCsMpa8nqjz8fc4QEhowGGRy2IclKMvgH%2BjHXMgRKZFFyqHZGKSD2CBjqlov5HgkTjnPX66Hr2b7al2GwbL6Aimd2c4gOOu%2BNcmzEtwjero1IAjtLxJ4%2ByBc4jxmyQ8ZFd2i5lBfPNJqfzVuJXxpJc2t1i5XJMlPUsEageVBijPYJ5k0IS7H9iyim%2Fxglp1S1m7%2FO41JJjt4MBRlbWPNioz%2BntE%2FwlSAjsbQETVdu4RObvygW9q8M8gHIC84jd0qpSF7kN4YdiMJyW9MIGOqUBOYN8Ye5pLI8hhpeXXCwDX7OcD1AzHjLf%2FAopJbNdAZWZ5ntAE0aJZ9nLIOch2aXwsfxHvYnYoAIYKSYKpQK%2FfIa5A84CMIX74QJK%2FGLhne0e9YnSYe0xXn1bdvAr0yXj8omq2AmN8mRII1mYQk%2Bndqza%2B4LhNOmZ0AVJN7lWI8kHl0GWoMXDNCXNI3Sn1WCVrQZsXXLn5WhGSOWIN5TyBc%2B7j0OD&X-Amz-Signature=ba609f805a118936f2440eb9fcdab727e3db55dfe3511cbdc6e59cfcd1d181c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYRE2T4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBlgCWCXRnqQT8a6SmVP6RGJdlqPaBGTc1aJeSV8ozadAiEAy5r3qdqN70rzdmWS0K6BO%2F384wBWBXmBvRHsy44nCuwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMIbV3wX3mpIEWHICCrcA4zIesLfqddDoZJz0G%2BoQmw5M5cUqAszteMDvwEX0G1BZdt4XheaVIh6E8REVMArEAvRnCEH3PS92iS4wGp5kryDIVEAVGJXS1%2FXcDFIV4rZ8Kd2XnizmWrscn%2BQlwFPca5E%2BSgwYJF7yDxNmip%2Bbf8OdX2VTLccVA1lahzI7hHJ%2FsBzU5ufF94noIG85AxAfGypDZ5%2Ft5k9Id6YcUOV4%2By7a%2B%2FAXTzJ7JtrQcS0Y0YujvckbRjM2%2FiIFIlcAePl76kwTTL%2F17btHLiZdjWeKo1D8Omq%2FJY9nHFfJKZIltltxy6lsSlCXAkpunP%2FAj4ajHNk4gwWavL9Y%2FC7FkuFazURduThfGbjAN9aeb%2BpjjTydq4mNF%2FCsMpa8nqjz8fc4QEhowGGRy2IclKMvgH%2BjHXMgRKZFFyqHZGKSD2CBjqlov5HgkTjnPX66Hr2b7al2GwbL6Aimd2c4gOOu%2BNcmzEtwjero1IAjtLxJ4%2ByBc4jxmyQ8ZFd2i5lBfPNJqfzVuJXxpJc2t1i5XJMlPUsEageVBijPYJ5k0IS7H9iyim%2Fxglp1S1m7%2FO41JJjt4MBRlbWPNioz%2BntE%2FwlSAjsbQETVdu4RObvygW9q8M8gHIC84jd0qpSF7kN4YdiMJyW9MIGOqUBOYN8Ye5pLI8hhpeXXCwDX7OcD1AzHjLf%2FAopJbNdAZWZ5ntAE0aJZ9nLIOch2aXwsfxHvYnYoAIYKSYKpQK%2FfIa5A84CMIX74QJK%2FGLhne0e9YnSYe0xXn1bdvAr0yXj8omq2AmN8mRII1mYQk%2Bndqza%2B4LhNOmZ0AVJN7lWI8kHl0GWoMXDNCXNI3Sn1WCVrQZsXXLn5WhGSOWIN5TyBc%2B7j0OD&X-Amz-Signature=25ad55379d2a87f6720e22ff8470c3e04f873ee73e2626c76ea4decbb748c3a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYRE2T4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBlgCWCXRnqQT8a6SmVP6RGJdlqPaBGTc1aJeSV8ozadAiEAy5r3qdqN70rzdmWS0K6BO%2F384wBWBXmBvRHsy44nCuwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMIbV3wX3mpIEWHICCrcA4zIesLfqddDoZJz0G%2BoQmw5M5cUqAszteMDvwEX0G1BZdt4XheaVIh6E8REVMArEAvRnCEH3PS92iS4wGp5kryDIVEAVGJXS1%2FXcDFIV4rZ8Kd2XnizmWrscn%2BQlwFPca5E%2BSgwYJF7yDxNmip%2Bbf8OdX2VTLccVA1lahzI7hHJ%2FsBzU5ufF94noIG85AxAfGypDZ5%2Ft5k9Id6YcUOV4%2By7a%2B%2FAXTzJ7JtrQcS0Y0YujvckbRjM2%2FiIFIlcAePl76kwTTL%2F17btHLiZdjWeKo1D8Omq%2FJY9nHFfJKZIltltxy6lsSlCXAkpunP%2FAj4ajHNk4gwWavL9Y%2FC7FkuFazURduThfGbjAN9aeb%2BpjjTydq4mNF%2FCsMpa8nqjz8fc4QEhowGGRy2IclKMvgH%2BjHXMgRKZFFyqHZGKSD2CBjqlov5HgkTjnPX66Hr2b7al2GwbL6Aimd2c4gOOu%2BNcmzEtwjero1IAjtLxJ4%2ByBc4jxmyQ8ZFd2i5lBfPNJqfzVuJXxpJc2t1i5XJMlPUsEageVBijPYJ5k0IS7H9iyim%2Fxglp1S1m7%2FO41JJjt4MBRlbWPNioz%2BntE%2FwlSAjsbQETVdu4RObvygW9q8M8gHIC84jd0qpSF7kN4YdiMJyW9MIGOqUBOYN8Ye5pLI8hhpeXXCwDX7OcD1AzHjLf%2FAopJbNdAZWZ5ntAE0aJZ9nLIOch2aXwsfxHvYnYoAIYKSYKpQK%2FfIa5A84CMIX74QJK%2FGLhne0e9YnSYe0xXn1bdvAr0yXj8omq2AmN8mRII1mYQk%2Bndqza%2B4LhNOmZ0AVJN7lWI8kHl0GWoMXDNCXNI3Sn1WCVrQZsXXLn5WhGSOWIN5TyBc%2B7j0OD&X-Amz-Signature=7d93304126777caf4a326f23ce7afa77907bd5fdea1d719ef4dd55f65020e9bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYRE2T4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBlgCWCXRnqQT8a6SmVP6RGJdlqPaBGTc1aJeSV8ozadAiEAy5r3qdqN70rzdmWS0K6BO%2F384wBWBXmBvRHsy44nCuwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMIbV3wX3mpIEWHICCrcA4zIesLfqddDoZJz0G%2BoQmw5M5cUqAszteMDvwEX0G1BZdt4XheaVIh6E8REVMArEAvRnCEH3PS92iS4wGp5kryDIVEAVGJXS1%2FXcDFIV4rZ8Kd2XnizmWrscn%2BQlwFPca5E%2BSgwYJF7yDxNmip%2Bbf8OdX2VTLccVA1lahzI7hHJ%2FsBzU5ufF94noIG85AxAfGypDZ5%2Ft5k9Id6YcUOV4%2By7a%2B%2FAXTzJ7JtrQcS0Y0YujvckbRjM2%2FiIFIlcAePl76kwTTL%2F17btHLiZdjWeKo1D8Omq%2FJY9nHFfJKZIltltxy6lsSlCXAkpunP%2FAj4ajHNk4gwWavL9Y%2FC7FkuFazURduThfGbjAN9aeb%2BpjjTydq4mNF%2FCsMpa8nqjz8fc4QEhowGGRy2IclKMvgH%2BjHXMgRKZFFyqHZGKSD2CBjqlov5HgkTjnPX66Hr2b7al2GwbL6Aimd2c4gOOu%2BNcmzEtwjero1IAjtLxJ4%2ByBc4jxmyQ8ZFd2i5lBfPNJqfzVuJXxpJc2t1i5XJMlPUsEageVBijPYJ5k0IS7H9iyim%2Fxglp1S1m7%2FO41JJjt4MBRlbWPNioz%2BntE%2FwlSAjsbQETVdu4RObvygW9q8M8gHIC84jd0qpSF7kN4YdiMJyW9MIGOqUBOYN8Ye5pLI8hhpeXXCwDX7OcD1AzHjLf%2FAopJbNdAZWZ5ntAE0aJZ9nLIOch2aXwsfxHvYnYoAIYKSYKpQK%2FfIa5A84CMIX74QJK%2FGLhne0e9YnSYe0xXn1bdvAr0yXj8omq2AmN8mRII1mYQk%2Bndqza%2B4LhNOmZ0AVJN7lWI8kHl0GWoMXDNCXNI3Sn1WCVrQZsXXLn5WhGSOWIN5TyBc%2B7j0OD&X-Amz-Signature=467c13896662c6a4ef65a16670eb2206c91d892a462896c631837f4eeafc4549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
