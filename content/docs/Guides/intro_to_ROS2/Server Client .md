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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILNEMNV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCbF%2Bc4zJsSrIEjPCv8kZjWA84UKVc2U%2FNKhbCKfHABpgIgDuwb%2BFzceSvwfwdtJRCbSDNKdrSmVp7v4q7pXZdoYXEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDA3%2B66cvxFhUgsedfyrcA6TNWVTNzJe3pY8ukpqMHp%2Fxfmx9DnnZh%2FN0R1zHXiVLSpv5MkLrJdFqj0uDVWftFhxf3EPcXTsZjycBvX8o3iEfYom0yV2Q68eAfgtbqAaQKSINzfFtiJbRLiA%2BGtCplBbZStbo07zvWrtF0unCYysE2gShx%2FKRMWP7fr1tpNTPRpFSQ5so8UciF1j%2Byey8R0eL5QMu2E7L2rygFnDW5K9Bbr2wna8jyGIuaF09Fh7XF8dYYRRfyMS4NcTZpDYYY4G01S6oLxAClr1xfpVA0sIrcE8wi6Z52TczqZdywsnqXM%2Flh%2B9smCLGVMwyeGCCQXf8SMHt0KgPGEgDwSLIwY4IfdD7o3EnKaob53Ylm2aSEs8z3gd0inm3XgE8fJTh2t%2BfVtXYsKXKL9RmzEe9JvZOtwn8hjKSxRrT8gskuBdtHhOqYa2POf8ehbi2djAS2GxL3ZN5B8Cor18loRZD5B8hAaTNSJPJsyokz2ltSr7MpaH0NSKKViJbu7nddM57szQaFa%2BL7VcXNDKyiN75lM1d%2FtQmqOWyQFxKY4JjJM8mEVoGekqYqqjSuxhEg5RUlMOivfrP%2B4eMe6Oilo170VI%2BCLNa%2FXVG5MTk%2FGjer%2BAko%2BYS1rUK8%2B89Qm1BMMG%2Fhr0GOqUBgA%2BJy9cx%2FBIzJd2vhiGazPG%2B4IxYKgF6S9TgFaXK%2Fcry8MDjEqI7MLY7s2PAKYiCws6iIuPun0ijEzeAnJlRTwCoOctXWTCtW%2BFzKRx1zb301KdBXXxqlrbJxhyxpoKmdjqXcZ8zQs9ENhjAAA8GUwjASoLAMokofZNiscswBPAyWMtTRyTK5M09xImP92akCMG5q7ivsUHYOKRg7578jStwOTvi&X-Amz-Signature=53fdf6f1b355c423f32b73acfc5512663b47f7a4599c79b028b8e00b8b13952d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILNEMNV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCbF%2Bc4zJsSrIEjPCv8kZjWA84UKVc2U%2FNKhbCKfHABpgIgDuwb%2BFzceSvwfwdtJRCbSDNKdrSmVp7v4q7pXZdoYXEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDA3%2B66cvxFhUgsedfyrcA6TNWVTNzJe3pY8ukpqMHp%2Fxfmx9DnnZh%2FN0R1zHXiVLSpv5MkLrJdFqj0uDVWftFhxf3EPcXTsZjycBvX8o3iEfYom0yV2Q68eAfgtbqAaQKSINzfFtiJbRLiA%2BGtCplBbZStbo07zvWrtF0unCYysE2gShx%2FKRMWP7fr1tpNTPRpFSQ5so8UciF1j%2Byey8R0eL5QMu2E7L2rygFnDW5K9Bbr2wna8jyGIuaF09Fh7XF8dYYRRfyMS4NcTZpDYYY4G01S6oLxAClr1xfpVA0sIrcE8wi6Z52TczqZdywsnqXM%2Flh%2B9smCLGVMwyeGCCQXf8SMHt0KgPGEgDwSLIwY4IfdD7o3EnKaob53Ylm2aSEs8z3gd0inm3XgE8fJTh2t%2BfVtXYsKXKL9RmzEe9JvZOtwn8hjKSxRrT8gskuBdtHhOqYa2POf8ehbi2djAS2GxL3ZN5B8Cor18loRZD5B8hAaTNSJPJsyokz2ltSr7MpaH0NSKKViJbu7nddM57szQaFa%2BL7VcXNDKyiN75lM1d%2FtQmqOWyQFxKY4JjJM8mEVoGekqYqqjSuxhEg5RUlMOivfrP%2B4eMe6Oilo170VI%2BCLNa%2FXVG5MTk%2FGjer%2BAko%2BYS1rUK8%2B89Qm1BMMG%2Fhr0GOqUBgA%2BJy9cx%2FBIzJd2vhiGazPG%2B4IxYKgF6S9TgFaXK%2Fcry8MDjEqI7MLY7s2PAKYiCws6iIuPun0ijEzeAnJlRTwCoOctXWTCtW%2BFzKRx1zb301KdBXXxqlrbJxhyxpoKmdjqXcZ8zQs9ENhjAAA8GUwjASoLAMokofZNiscswBPAyWMtTRyTK5M09xImP92akCMG5q7ivsUHYOKRg7578jStwOTvi&X-Amz-Signature=683375b3f7252a75d3805667040ada288d4fda31967143508825911ed61bac89&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILNEMNV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCbF%2Bc4zJsSrIEjPCv8kZjWA84UKVc2U%2FNKhbCKfHABpgIgDuwb%2BFzceSvwfwdtJRCbSDNKdrSmVp7v4q7pXZdoYXEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDA3%2B66cvxFhUgsedfyrcA6TNWVTNzJe3pY8ukpqMHp%2Fxfmx9DnnZh%2FN0R1zHXiVLSpv5MkLrJdFqj0uDVWftFhxf3EPcXTsZjycBvX8o3iEfYom0yV2Q68eAfgtbqAaQKSINzfFtiJbRLiA%2BGtCplBbZStbo07zvWrtF0unCYysE2gShx%2FKRMWP7fr1tpNTPRpFSQ5so8UciF1j%2Byey8R0eL5QMu2E7L2rygFnDW5K9Bbr2wna8jyGIuaF09Fh7XF8dYYRRfyMS4NcTZpDYYY4G01S6oLxAClr1xfpVA0sIrcE8wi6Z52TczqZdywsnqXM%2Flh%2B9smCLGVMwyeGCCQXf8SMHt0KgPGEgDwSLIwY4IfdD7o3EnKaob53Ylm2aSEs8z3gd0inm3XgE8fJTh2t%2BfVtXYsKXKL9RmzEe9JvZOtwn8hjKSxRrT8gskuBdtHhOqYa2POf8ehbi2djAS2GxL3ZN5B8Cor18loRZD5B8hAaTNSJPJsyokz2ltSr7MpaH0NSKKViJbu7nddM57szQaFa%2BL7VcXNDKyiN75lM1d%2FtQmqOWyQFxKY4JjJM8mEVoGekqYqqjSuxhEg5RUlMOivfrP%2B4eMe6Oilo170VI%2BCLNa%2FXVG5MTk%2FGjer%2BAko%2BYS1rUK8%2B89Qm1BMMG%2Fhr0GOqUBgA%2BJy9cx%2FBIzJd2vhiGazPG%2B4IxYKgF6S9TgFaXK%2Fcry8MDjEqI7MLY7s2PAKYiCws6iIuPun0ijEzeAnJlRTwCoOctXWTCtW%2BFzKRx1zb301KdBXXxqlrbJxhyxpoKmdjqXcZ8zQs9ENhjAAA8GUwjASoLAMokofZNiscswBPAyWMtTRyTK5M09xImP92akCMG5q7ivsUHYOKRg7578jStwOTvi&X-Amz-Signature=ffb714516a5d220dd9eb49e05cdeda8d0fc00fed8f7df9d82b99eb900bb2b359&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILNEMNV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCbF%2Bc4zJsSrIEjPCv8kZjWA84UKVc2U%2FNKhbCKfHABpgIgDuwb%2BFzceSvwfwdtJRCbSDNKdrSmVp7v4q7pXZdoYXEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDA3%2B66cvxFhUgsedfyrcA6TNWVTNzJe3pY8ukpqMHp%2Fxfmx9DnnZh%2FN0R1zHXiVLSpv5MkLrJdFqj0uDVWftFhxf3EPcXTsZjycBvX8o3iEfYom0yV2Q68eAfgtbqAaQKSINzfFtiJbRLiA%2BGtCplBbZStbo07zvWrtF0unCYysE2gShx%2FKRMWP7fr1tpNTPRpFSQ5so8UciF1j%2Byey8R0eL5QMu2E7L2rygFnDW5K9Bbr2wna8jyGIuaF09Fh7XF8dYYRRfyMS4NcTZpDYYY4G01S6oLxAClr1xfpVA0sIrcE8wi6Z52TczqZdywsnqXM%2Flh%2B9smCLGVMwyeGCCQXf8SMHt0KgPGEgDwSLIwY4IfdD7o3EnKaob53Ylm2aSEs8z3gd0inm3XgE8fJTh2t%2BfVtXYsKXKL9RmzEe9JvZOtwn8hjKSxRrT8gskuBdtHhOqYa2POf8ehbi2djAS2GxL3ZN5B8Cor18loRZD5B8hAaTNSJPJsyokz2ltSr7MpaH0NSKKViJbu7nddM57szQaFa%2BL7VcXNDKyiN75lM1d%2FtQmqOWyQFxKY4JjJM8mEVoGekqYqqjSuxhEg5RUlMOivfrP%2B4eMe6Oilo170VI%2BCLNa%2FXVG5MTk%2FGjer%2BAko%2BYS1rUK8%2B89Qm1BMMG%2Fhr0GOqUBgA%2BJy9cx%2FBIzJd2vhiGazPG%2B4IxYKgF6S9TgFaXK%2Fcry8MDjEqI7MLY7s2PAKYiCws6iIuPun0ijEzeAnJlRTwCoOctXWTCtW%2BFzKRx1zb301KdBXXxqlrbJxhyxpoKmdjqXcZ8zQs9ENhjAAA8GUwjASoLAMokofZNiscswBPAyWMtTRyTK5M09xImP92akCMG5q7ivsUHYOKRg7578jStwOTvi&X-Amz-Signature=b3ed3bcc680d20cedf446e59a75ff452e9b06de5a5b95f07f940d371717a5732&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILNEMNV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCbF%2Bc4zJsSrIEjPCv8kZjWA84UKVc2U%2FNKhbCKfHABpgIgDuwb%2BFzceSvwfwdtJRCbSDNKdrSmVp7v4q7pXZdoYXEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDA3%2B66cvxFhUgsedfyrcA6TNWVTNzJe3pY8ukpqMHp%2Fxfmx9DnnZh%2FN0R1zHXiVLSpv5MkLrJdFqj0uDVWftFhxf3EPcXTsZjycBvX8o3iEfYom0yV2Q68eAfgtbqAaQKSINzfFtiJbRLiA%2BGtCplBbZStbo07zvWrtF0unCYysE2gShx%2FKRMWP7fr1tpNTPRpFSQ5so8UciF1j%2Byey8R0eL5QMu2E7L2rygFnDW5K9Bbr2wna8jyGIuaF09Fh7XF8dYYRRfyMS4NcTZpDYYY4G01S6oLxAClr1xfpVA0sIrcE8wi6Z52TczqZdywsnqXM%2Flh%2B9smCLGVMwyeGCCQXf8SMHt0KgPGEgDwSLIwY4IfdD7o3EnKaob53Ylm2aSEs8z3gd0inm3XgE8fJTh2t%2BfVtXYsKXKL9RmzEe9JvZOtwn8hjKSxRrT8gskuBdtHhOqYa2POf8ehbi2djAS2GxL3ZN5B8Cor18loRZD5B8hAaTNSJPJsyokz2ltSr7MpaH0NSKKViJbu7nddM57szQaFa%2BL7VcXNDKyiN75lM1d%2FtQmqOWyQFxKY4JjJM8mEVoGekqYqqjSuxhEg5RUlMOivfrP%2B4eMe6Oilo170VI%2BCLNa%2FXVG5MTk%2FGjer%2BAko%2BYS1rUK8%2B89Qm1BMMG%2Fhr0GOqUBgA%2BJy9cx%2FBIzJd2vhiGazPG%2B4IxYKgF6S9TgFaXK%2Fcry8MDjEqI7MLY7s2PAKYiCws6iIuPun0ijEzeAnJlRTwCoOctXWTCtW%2BFzKRx1zb301KdBXXxqlrbJxhyxpoKmdjqXcZ8zQs9ENhjAAA8GUwjASoLAMokofZNiscswBPAyWMtTRyTK5M09xImP92akCMG5q7ivsUHYOKRg7578jStwOTvi&X-Amz-Signature=dafdb0ca30980a4b7f34f91853b2fa7e375ca51b54128a5e7aafe7cf13f40689&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
