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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2EG2R5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDxcBtclt39a4hp%2B0PpB9DXgGTwNNoqTyRyZcbg9fN%2FKAIhAMdzVIEYwAgc6H0kPYkFPZSDwwn1xX30mRJC%2B0cmJilUKv8DCH4QABoMNjM3NDIzMTgzODA1Igw0HDjTvTYilVa%2Ba1Aq3AOOpikwMp73fc%2BXS%2BPu0L82lgQJ18PanhrF086tcOn1ZTmftef5qAdOk1%2F1JvBW32FgFIorqtYqXx3reK9eJkzrhThGqp0vC%2FewfsX4pDT26sMsIhtqbRkK1s%2FJJPybOA1%2B9yLB%2FrQkmXMddU6b9QNLH1HWxinOSDr5gJT9W0SH%2FjvNFQaUIAkeXnbnCWxFTr9rYZ3FMK3tshhL4XBjR1lMNnrmO2PXUrwJZzI5le8YOyErY8oES%2ByG6Ry224NgZCWCsSZBig5ulHkjbUq0ZSpUD%2FggD2RazDlG2Ah4gIixxCGfpqqbqpgRxFi5ctcLFm7mJQGgJE2hF9jG6RmTCpQ0%2B3uwNsCPMKqtO4EB7EuuOuoYj9VzHKYOcpFJ8aTHBwGutPxgLI%2FJXpiOkVETcDDC2QmkuJkGn%2Bj3NleIpLP3rUX4oTUafnJr1gjDEiMhPyb6qAI5KD26toBu5%2BVLzt0o3xHpdgGN%2BQo2bv%2FK5e1PItU%2B9Z75HvipPYRqnbQyhbJ%2BGNoTIhhFCNtnOIrFTJgXBeg8RLtePCsjp3AVjadvmJPgoLucLuh%2BK1Zj0SEuz8eSjH90iFVckq0MxWy4iCHXwruPa87Gu7AKTSzDilHEtcv9SQ0tbHvm4Oh5rDCR2ey%2BBjqkAeRet%2BGCoRgO9vK6SfNAPH24eTWuUSkYOJy%2FuTWNz2s6ehQ65WLqt9%2BENhg9az%2Fu%2FRWxuJ130iS6fBpKg3zmfhkVmQi%2FtY%2BrUmKOX3GxZdiYS2o8QPFCT0WhSvSVXvN9oIY%2BdMkZaj4gPObCAN2PL2ruQmGDWfJNp1qbER8r4WBpvvfW1FkY0C992cZ2TgByNHEVJtNmnffFSp57qWc9gpXCEMsJ&X-Amz-Signature=9b6fff4740be120a54952dda690df6810bda11abeed69c261946495a845069c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2EG2R5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDxcBtclt39a4hp%2B0PpB9DXgGTwNNoqTyRyZcbg9fN%2FKAIhAMdzVIEYwAgc6H0kPYkFPZSDwwn1xX30mRJC%2B0cmJilUKv8DCH4QABoMNjM3NDIzMTgzODA1Igw0HDjTvTYilVa%2Ba1Aq3AOOpikwMp73fc%2BXS%2BPu0L82lgQJ18PanhrF086tcOn1ZTmftef5qAdOk1%2F1JvBW32FgFIorqtYqXx3reK9eJkzrhThGqp0vC%2FewfsX4pDT26sMsIhtqbRkK1s%2FJJPybOA1%2B9yLB%2FrQkmXMddU6b9QNLH1HWxinOSDr5gJT9W0SH%2FjvNFQaUIAkeXnbnCWxFTr9rYZ3FMK3tshhL4XBjR1lMNnrmO2PXUrwJZzI5le8YOyErY8oES%2ByG6Ry224NgZCWCsSZBig5ulHkjbUq0ZSpUD%2FggD2RazDlG2Ah4gIixxCGfpqqbqpgRxFi5ctcLFm7mJQGgJE2hF9jG6RmTCpQ0%2B3uwNsCPMKqtO4EB7EuuOuoYj9VzHKYOcpFJ8aTHBwGutPxgLI%2FJXpiOkVETcDDC2QmkuJkGn%2Bj3NleIpLP3rUX4oTUafnJr1gjDEiMhPyb6qAI5KD26toBu5%2BVLzt0o3xHpdgGN%2BQo2bv%2FK5e1PItU%2B9Z75HvipPYRqnbQyhbJ%2BGNoTIhhFCNtnOIrFTJgXBeg8RLtePCsjp3AVjadvmJPgoLucLuh%2BK1Zj0SEuz8eSjH90iFVckq0MxWy4iCHXwruPa87Gu7AKTSzDilHEtcv9SQ0tbHvm4Oh5rDCR2ey%2BBjqkAeRet%2BGCoRgO9vK6SfNAPH24eTWuUSkYOJy%2FuTWNz2s6ehQ65WLqt9%2BENhg9az%2Fu%2FRWxuJ130iS6fBpKg3zmfhkVmQi%2FtY%2BrUmKOX3GxZdiYS2o8QPFCT0WhSvSVXvN9oIY%2BdMkZaj4gPObCAN2PL2ruQmGDWfJNp1qbER8r4WBpvvfW1FkY0C992cZ2TgByNHEVJtNmnffFSp57qWc9gpXCEMsJ&X-Amz-Signature=70d58f52a2e732b5db05653fa3ad6692dce74206119749ac6124b2b681acf04b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2EG2R5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDxcBtclt39a4hp%2B0PpB9DXgGTwNNoqTyRyZcbg9fN%2FKAIhAMdzVIEYwAgc6H0kPYkFPZSDwwn1xX30mRJC%2B0cmJilUKv8DCH4QABoMNjM3NDIzMTgzODA1Igw0HDjTvTYilVa%2Ba1Aq3AOOpikwMp73fc%2BXS%2BPu0L82lgQJ18PanhrF086tcOn1ZTmftef5qAdOk1%2F1JvBW32FgFIorqtYqXx3reK9eJkzrhThGqp0vC%2FewfsX4pDT26sMsIhtqbRkK1s%2FJJPybOA1%2B9yLB%2FrQkmXMddU6b9QNLH1HWxinOSDr5gJT9W0SH%2FjvNFQaUIAkeXnbnCWxFTr9rYZ3FMK3tshhL4XBjR1lMNnrmO2PXUrwJZzI5le8YOyErY8oES%2ByG6Ry224NgZCWCsSZBig5ulHkjbUq0ZSpUD%2FggD2RazDlG2Ah4gIixxCGfpqqbqpgRxFi5ctcLFm7mJQGgJE2hF9jG6RmTCpQ0%2B3uwNsCPMKqtO4EB7EuuOuoYj9VzHKYOcpFJ8aTHBwGutPxgLI%2FJXpiOkVETcDDC2QmkuJkGn%2Bj3NleIpLP3rUX4oTUafnJr1gjDEiMhPyb6qAI5KD26toBu5%2BVLzt0o3xHpdgGN%2BQo2bv%2FK5e1PItU%2B9Z75HvipPYRqnbQyhbJ%2BGNoTIhhFCNtnOIrFTJgXBeg8RLtePCsjp3AVjadvmJPgoLucLuh%2BK1Zj0SEuz8eSjH90iFVckq0MxWy4iCHXwruPa87Gu7AKTSzDilHEtcv9SQ0tbHvm4Oh5rDCR2ey%2BBjqkAeRet%2BGCoRgO9vK6SfNAPH24eTWuUSkYOJy%2FuTWNz2s6ehQ65WLqt9%2BENhg9az%2Fu%2FRWxuJ130iS6fBpKg3zmfhkVmQi%2FtY%2BrUmKOX3GxZdiYS2o8QPFCT0WhSvSVXvN9oIY%2BdMkZaj4gPObCAN2PL2ruQmGDWfJNp1qbER8r4WBpvvfW1FkY0C992cZ2TgByNHEVJtNmnffFSp57qWc9gpXCEMsJ&X-Amz-Signature=c8bb0e329d1877ea4a7375e19b67fd0edcbfdc338d6368e3d909722359952a86&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2EG2R5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDxcBtclt39a4hp%2B0PpB9DXgGTwNNoqTyRyZcbg9fN%2FKAIhAMdzVIEYwAgc6H0kPYkFPZSDwwn1xX30mRJC%2B0cmJilUKv8DCH4QABoMNjM3NDIzMTgzODA1Igw0HDjTvTYilVa%2Ba1Aq3AOOpikwMp73fc%2BXS%2BPu0L82lgQJ18PanhrF086tcOn1ZTmftef5qAdOk1%2F1JvBW32FgFIorqtYqXx3reK9eJkzrhThGqp0vC%2FewfsX4pDT26sMsIhtqbRkK1s%2FJJPybOA1%2B9yLB%2FrQkmXMddU6b9QNLH1HWxinOSDr5gJT9W0SH%2FjvNFQaUIAkeXnbnCWxFTr9rYZ3FMK3tshhL4XBjR1lMNnrmO2PXUrwJZzI5le8YOyErY8oES%2ByG6Ry224NgZCWCsSZBig5ulHkjbUq0ZSpUD%2FggD2RazDlG2Ah4gIixxCGfpqqbqpgRxFi5ctcLFm7mJQGgJE2hF9jG6RmTCpQ0%2B3uwNsCPMKqtO4EB7EuuOuoYj9VzHKYOcpFJ8aTHBwGutPxgLI%2FJXpiOkVETcDDC2QmkuJkGn%2Bj3NleIpLP3rUX4oTUafnJr1gjDEiMhPyb6qAI5KD26toBu5%2BVLzt0o3xHpdgGN%2BQo2bv%2FK5e1PItU%2B9Z75HvipPYRqnbQyhbJ%2BGNoTIhhFCNtnOIrFTJgXBeg8RLtePCsjp3AVjadvmJPgoLucLuh%2BK1Zj0SEuz8eSjH90iFVckq0MxWy4iCHXwruPa87Gu7AKTSzDilHEtcv9SQ0tbHvm4Oh5rDCR2ey%2BBjqkAeRet%2BGCoRgO9vK6SfNAPH24eTWuUSkYOJy%2FuTWNz2s6ehQ65WLqt9%2BENhg9az%2Fu%2FRWxuJ130iS6fBpKg3zmfhkVmQi%2FtY%2BrUmKOX3GxZdiYS2o8QPFCT0WhSvSVXvN9oIY%2BdMkZaj4gPObCAN2PL2ruQmGDWfJNp1qbER8r4WBpvvfW1FkY0C992cZ2TgByNHEVJtNmnffFSp57qWc9gpXCEMsJ&X-Amz-Signature=b5ead6037d17c74a24857df0772f966a0cf9672131940cdb8d1d7c5e3e1154f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2EG2R5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDxcBtclt39a4hp%2B0PpB9DXgGTwNNoqTyRyZcbg9fN%2FKAIhAMdzVIEYwAgc6H0kPYkFPZSDwwn1xX30mRJC%2B0cmJilUKv8DCH4QABoMNjM3NDIzMTgzODA1Igw0HDjTvTYilVa%2Ba1Aq3AOOpikwMp73fc%2BXS%2BPu0L82lgQJ18PanhrF086tcOn1ZTmftef5qAdOk1%2F1JvBW32FgFIorqtYqXx3reK9eJkzrhThGqp0vC%2FewfsX4pDT26sMsIhtqbRkK1s%2FJJPybOA1%2B9yLB%2FrQkmXMddU6b9QNLH1HWxinOSDr5gJT9W0SH%2FjvNFQaUIAkeXnbnCWxFTr9rYZ3FMK3tshhL4XBjR1lMNnrmO2PXUrwJZzI5le8YOyErY8oES%2ByG6Ry224NgZCWCsSZBig5ulHkjbUq0ZSpUD%2FggD2RazDlG2Ah4gIixxCGfpqqbqpgRxFi5ctcLFm7mJQGgJE2hF9jG6RmTCpQ0%2B3uwNsCPMKqtO4EB7EuuOuoYj9VzHKYOcpFJ8aTHBwGutPxgLI%2FJXpiOkVETcDDC2QmkuJkGn%2Bj3NleIpLP3rUX4oTUafnJr1gjDEiMhPyb6qAI5KD26toBu5%2BVLzt0o3xHpdgGN%2BQo2bv%2FK5e1PItU%2B9Z75HvipPYRqnbQyhbJ%2BGNoTIhhFCNtnOIrFTJgXBeg8RLtePCsjp3AVjadvmJPgoLucLuh%2BK1Zj0SEuz8eSjH90iFVckq0MxWy4iCHXwruPa87Gu7AKTSzDilHEtcv9SQ0tbHvm4Oh5rDCR2ey%2BBjqkAeRet%2BGCoRgO9vK6SfNAPH24eTWuUSkYOJy%2FuTWNz2s6ehQ65WLqt9%2BENhg9az%2Fu%2FRWxuJ130iS6fBpKg3zmfhkVmQi%2FtY%2BrUmKOX3GxZdiYS2o8QPFCT0WhSvSVXvN9oIY%2BdMkZaj4gPObCAN2PL2ruQmGDWfJNp1qbER8r4WBpvvfW1FkY0C992cZ2TgByNHEVJtNmnffFSp57qWc9gpXCEMsJ&X-Amz-Signature=9541fe2a1f340061c3b1f26767b6af126b2d2f94f6a74909501cc0a56048253f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
