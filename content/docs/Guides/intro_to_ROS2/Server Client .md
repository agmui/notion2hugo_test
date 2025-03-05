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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVII2NTF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPIgsxTKzmZSMm8sMlwe03XvUqoN7yM7W68SJ7a%2BPJPwIgPMspCayC034ZMXTZj9nqSt7TsSrM5ySQT32Si7fwSEYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJvI7Ui3hq9mfoQKEircAwORL%2FkWmyu%2FMhgejAje5uI26fm%2Fn9ojHOrOHyaQyaktep8G59SRlLHBFgMcilNYuQ5x%2BcVAY2rI%2FCKjf3O0fGpNbNTe8XTcCrzCq1KdYpc8Un1siOMpk5ZyZRXCxfE1Pt8v%2BT3VOHiS98PjO48LwGxNsqqwBxl6qhGJIeFJvZVCc0oFFzW0VfwiQzMGqnrxmaJROfMq8mtV7m2MGa1hi7LE8J%2BLZ1Mazx%2BNZny7sGqolTrbb6PXLZrjOAYkW4Gn16iuwreUkpgjpojKn7JuZc99dcFzQm4U2Yd9gXB5%2FcIyF2Aqh4LAB55rz%2Fd4W0%2FVsWsjmkculwZtIiuZLCKYacNqzcCT7sRttF9MNs5nEou6YpyPnYZ6WKJ17ALQ2RRwOToGjKHZR6LCMR8LlMLs1cVMCJTRTxeTWuFh88eBwwoPX%2BjZf87ra1OUwTJEpApAjBGwx%2F%2FkfNLRMS79C1Ta5fXMPY%2FLvX0sfuGM%2BPPpLUHYHKq2XFzh2dgV1w%2F2J3GhuwhNDS7GbguweXbSuBNNbJCfHETF1W%2Bw993SazXVvzEGUPEC4ErscjmUDLbX%2BMPcd92SUYGJ%2B4IpOsiMRTMsv9Th%2F0mkxeWpM5NySdZVqwsNvSiFimXVMUcJqqwcMMyvoL4GOqUB6%2B6HJoY82Yryss2whqsd6pXQgH2dsj%2BmOXRqR%2FRcdp9qsBrT5fsAt4VMv%2Fo8Jwfjpoysoe5YXV2jBJnbmni30d8UNWtkw%2B23sr%2BfxLTrRJMRmS3x893ETUaRC4ttHUzkmzKxFh%2FiEkS288TQPnaRSWacJz2BuBvQ1x1YWXUdWn08m3c2clNaGDJBbEZt6OIQ%2FfpU1289FXQXVD%2BbXh0mgwCWnJVn&X-Amz-Signature=6e454c1ca186a966e538139010ddb5e35ee4fae303fd1240cb4149c6436875dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVII2NTF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPIgsxTKzmZSMm8sMlwe03XvUqoN7yM7W68SJ7a%2BPJPwIgPMspCayC034ZMXTZj9nqSt7TsSrM5ySQT32Si7fwSEYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJvI7Ui3hq9mfoQKEircAwORL%2FkWmyu%2FMhgejAje5uI26fm%2Fn9ojHOrOHyaQyaktep8G59SRlLHBFgMcilNYuQ5x%2BcVAY2rI%2FCKjf3O0fGpNbNTe8XTcCrzCq1KdYpc8Un1siOMpk5ZyZRXCxfE1Pt8v%2BT3VOHiS98PjO48LwGxNsqqwBxl6qhGJIeFJvZVCc0oFFzW0VfwiQzMGqnrxmaJROfMq8mtV7m2MGa1hi7LE8J%2BLZ1Mazx%2BNZny7sGqolTrbb6PXLZrjOAYkW4Gn16iuwreUkpgjpojKn7JuZc99dcFzQm4U2Yd9gXB5%2FcIyF2Aqh4LAB55rz%2Fd4W0%2FVsWsjmkculwZtIiuZLCKYacNqzcCT7sRttF9MNs5nEou6YpyPnYZ6WKJ17ALQ2RRwOToGjKHZR6LCMR8LlMLs1cVMCJTRTxeTWuFh88eBwwoPX%2BjZf87ra1OUwTJEpApAjBGwx%2F%2FkfNLRMS79C1Ta5fXMPY%2FLvX0sfuGM%2BPPpLUHYHKq2XFzh2dgV1w%2F2J3GhuwhNDS7GbguweXbSuBNNbJCfHETF1W%2Bw993SazXVvzEGUPEC4ErscjmUDLbX%2BMPcd92SUYGJ%2B4IpOsiMRTMsv9Th%2F0mkxeWpM5NySdZVqwsNvSiFimXVMUcJqqwcMMyvoL4GOqUB6%2B6HJoY82Yryss2whqsd6pXQgH2dsj%2BmOXRqR%2FRcdp9qsBrT5fsAt4VMv%2Fo8Jwfjpoysoe5YXV2jBJnbmni30d8UNWtkw%2B23sr%2BfxLTrRJMRmS3x893ETUaRC4ttHUzkmzKxFh%2FiEkS288TQPnaRSWacJz2BuBvQ1x1YWXUdWn08m3c2clNaGDJBbEZt6OIQ%2FfpU1289FXQXVD%2BbXh0mgwCWnJVn&X-Amz-Signature=c2d986fc8e1b2193841a6ec00a525639b1cdde3dbf7f4804050b069a555dba36&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVII2NTF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPIgsxTKzmZSMm8sMlwe03XvUqoN7yM7W68SJ7a%2BPJPwIgPMspCayC034ZMXTZj9nqSt7TsSrM5ySQT32Si7fwSEYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJvI7Ui3hq9mfoQKEircAwORL%2FkWmyu%2FMhgejAje5uI26fm%2Fn9ojHOrOHyaQyaktep8G59SRlLHBFgMcilNYuQ5x%2BcVAY2rI%2FCKjf3O0fGpNbNTe8XTcCrzCq1KdYpc8Un1siOMpk5ZyZRXCxfE1Pt8v%2BT3VOHiS98PjO48LwGxNsqqwBxl6qhGJIeFJvZVCc0oFFzW0VfwiQzMGqnrxmaJROfMq8mtV7m2MGa1hi7LE8J%2BLZ1Mazx%2BNZny7sGqolTrbb6PXLZrjOAYkW4Gn16iuwreUkpgjpojKn7JuZc99dcFzQm4U2Yd9gXB5%2FcIyF2Aqh4LAB55rz%2Fd4W0%2FVsWsjmkculwZtIiuZLCKYacNqzcCT7sRttF9MNs5nEou6YpyPnYZ6WKJ17ALQ2RRwOToGjKHZR6LCMR8LlMLs1cVMCJTRTxeTWuFh88eBwwoPX%2BjZf87ra1OUwTJEpApAjBGwx%2F%2FkfNLRMS79C1Ta5fXMPY%2FLvX0sfuGM%2BPPpLUHYHKq2XFzh2dgV1w%2F2J3GhuwhNDS7GbguweXbSuBNNbJCfHETF1W%2Bw993SazXVvzEGUPEC4ErscjmUDLbX%2BMPcd92SUYGJ%2B4IpOsiMRTMsv9Th%2F0mkxeWpM5NySdZVqwsNvSiFimXVMUcJqqwcMMyvoL4GOqUB6%2B6HJoY82Yryss2whqsd6pXQgH2dsj%2BmOXRqR%2FRcdp9qsBrT5fsAt4VMv%2Fo8Jwfjpoysoe5YXV2jBJnbmni30d8UNWtkw%2B23sr%2BfxLTrRJMRmS3x893ETUaRC4ttHUzkmzKxFh%2FiEkS288TQPnaRSWacJz2BuBvQ1x1YWXUdWn08m3c2clNaGDJBbEZt6OIQ%2FfpU1289FXQXVD%2BbXh0mgwCWnJVn&X-Amz-Signature=e40b0ea6d5f3081b77d3994f2082d433a4eb6b0a99aa449f32ac59205c3bb878&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVII2NTF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPIgsxTKzmZSMm8sMlwe03XvUqoN7yM7W68SJ7a%2BPJPwIgPMspCayC034ZMXTZj9nqSt7TsSrM5ySQT32Si7fwSEYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJvI7Ui3hq9mfoQKEircAwORL%2FkWmyu%2FMhgejAje5uI26fm%2Fn9ojHOrOHyaQyaktep8G59SRlLHBFgMcilNYuQ5x%2BcVAY2rI%2FCKjf3O0fGpNbNTe8XTcCrzCq1KdYpc8Un1siOMpk5ZyZRXCxfE1Pt8v%2BT3VOHiS98PjO48LwGxNsqqwBxl6qhGJIeFJvZVCc0oFFzW0VfwiQzMGqnrxmaJROfMq8mtV7m2MGa1hi7LE8J%2BLZ1Mazx%2BNZny7sGqolTrbb6PXLZrjOAYkW4Gn16iuwreUkpgjpojKn7JuZc99dcFzQm4U2Yd9gXB5%2FcIyF2Aqh4LAB55rz%2Fd4W0%2FVsWsjmkculwZtIiuZLCKYacNqzcCT7sRttF9MNs5nEou6YpyPnYZ6WKJ17ALQ2RRwOToGjKHZR6LCMR8LlMLs1cVMCJTRTxeTWuFh88eBwwoPX%2BjZf87ra1OUwTJEpApAjBGwx%2F%2FkfNLRMS79C1Ta5fXMPY%2FLvX0sfuGM%2BPPpLUHYHKq2XFzh2dgV1w%2F2J3GhuwhNDS7GbguweXbSuBNNbJCfHETF1W%2Bw993SazXVvzEGUPEC4ErscjmUDLbX%2BMPcd92SUYGJ%2B4IpOsiMRTMsv9Th%2F0mkxeWpM5NySdZVqwsNvSiFimXVMUcJqqwcMMyvoL4GOqUB6%2B6HJoY82Yryss2whqsd6pXQgH2dsj%2BmOXRqR%2FRcdp9qsBrT5fsAt4VMv%2Fo8Jwfjpoysoe5YXV2jBJnbmni30d8UNWtkw%2B23sr%2BfxLTrRJMRmS3x893ETUaRC4ttHUzkmzKxFh%2FiEkS288TQPnaRSWacJz2BuBvQ1x1YWXUdWn08m3c2clNaGDJBbEZt6OIQ%2FfpU1289FXQXVD%2BbXh0mgwCWnJVn&X-Amz-Signature=51ed617c3c3d13350bde69ee82e1a14dd49bfd8779debcfa2a0cfbef1dd06f46&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVII2NTF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPIgsxTKzmZSMm8sMlwe03XvUqoN7yM7W68SJ7a%2BPJPwIgPMspCayC034ZMXTZj9nqSt7TsSrM5ySQT32Si7fwSEYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJvI7Ui3hq9mfoQKEircAwORL%2FkWmyu%2FMhgejAje5uI26fm%2Fn9ojHOrOHyaQyaktep8G59SRlLHBFgMcilNYuQ5x%2BcVAY2rI%2FCKjf3O0fGpNbNTe8XTcCrzCq1KdYpc8Un1siOMpk5ZyZRXCxfE1Pt8v%2BT3VOHiS98PjO48LwGxNsqqwBxl6qhGJIeFJvZVCc0oFFzW0VfwiQzMGqnrxmaJROfMq8mtV7m2MGa1hi7LE8J%2BLZ1Mazx%2BNZny7sGqolTrbb6PXLZrjOAYkW4Gn16iuwreUkpgjpojKn7JuZc99dcFzQm4U2Yd9gXB5%2FcIyF2Aqh4LAB55rz%2Fd4W0%2FVsWsjmkculwZtIiuZLCKYacNqzcCT7sRttF9MNs5nEou6YpyPnYZ6WKJ17ALQ2RRwOToGjKHZR6LCMR8LlMLs1cVMCJTRTxeTWuFh88eBwwoPX%2BjZf87ra1OUwTJEpApAjBGwx%2F%2FkfNLRMS79C1Ta5fXMPY%2FLvX0sfuGM%2BPPpLUHYHKq2XFzh2dgV1w%2F2J3GhuwhNDS7GbguweXbSuBNNbJCfHETF1W%2Bw993SazXVvzEGUPEC4ErscjmUDLbX%2BMPcd92SUYGJ%2B4IpOsiMRTMsv9Th%2F0mkxeWpM5NySdZVqwsNvSiFimXVMUcJqqwcMMyvoL4GOqUB6%2B6HJoY82Yryss2whqsd6pXQgH2dsj%2BmOXRqR%2FRcdp9qsBrT5fsAt4VMv%2Fo8Jwfjpoysoe5YXV2jBJnbmni30d8UNWtkw%2B23sr%2BfxLTrRJMRmS3x893ETUaRC4ttHUzkmzKxFh%2FiEkS288TQPnaRSWacJz2BuBvQ1x1YWXUdWn08m3c2clNaGDJBbEZt6OIQ%2FfpU1289FXQXVD%2BbXh0mgwCWnJVn&X-Amz-Signature=af2a56619a5634ffe0c9de8f324c8f374d7d9578465b1b62a77d95d730b557df&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
