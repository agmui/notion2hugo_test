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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UXDL2VU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCVhu%2FPdAXd8DC3WYb0lkT8AWfv6tzsUNqZ9zu7RhjgrQIgev56nk1WhS%2FHOm4bXVsvjyFUzh9gAFk7Oo%2FIaY89X6gqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKYjLmavpVMR%2FrOKircA%2Bs8eL7uBLrmqNVgOpM5vvjCnpRTV8KyBGH7eDhNBfiyRllVcvyqiNomWKPd1%2Fzu0SEVdUt7xMymFt556ismBYwdH2r6ydCjRE5hWd3QtTILSnf7itSV3gkk%2FdJA7OQABPeoKNMjo3lsyNCzBrKZmmO8sZD5OFHPpnCMQHDFkVZYESrDznSPZXiqFSJEI1KfGR4UXJKgXF2NgFn6oLZ%2FXgrQgvWqdOqMlbTj3DUaopoS2RT%2F6irxS1%2FvFMJ6Qz4JhY4SHcD4qKzoExBPgbzNXgRkjEUbaFRbE2otu27zwRPRBngFomOjDbntSuiyKrScb0N8NdOqf4GmWQLfhEart3Poja8DhDkgVtxmHISVNo29HxESncvQT5OgdSD70TBdUwi0bqmQHNUM%2B6sGKJ05BdTTeztkwc2DmfbWE3BqJHp9a43XkAv%2BRDIs%2FXyGqi1e7d5cWPTtdUm7WfDFRl%2Fc8CNjF%2BA10WmoSnI6X0ECQ7Nb%2B93RFC0UeP%2Bb4DywAXRcxwo23cISco7KyxHh%2BWjSOnmbSAtABk0mEYHW%2BfxXXK7dA%2FZIcjDm%2FXJZmSDXQxAERADDMa3BhuU4MoOI8F21Fbjtwmc85yOMH%2Fzu36TXgxgM8nR4MEsOXcgGBQwNMKGA88EGOqUBsTLMcOEXFZ88pk5XioVy2%2FdQpTg1xQmdLRiSm%2FFkQoS0coIG3EN4lT2ZUixzNwVMLyQGkQ2Q%2FD%2FBHrN7GP%2FhAiReyn4PINPFLbQ7kn8rGri7d%2FHZIlqpEyPVFHuyCaUNH%2BouFXaSM7FHczOR2xqSdkkhw7%2F%2FH55aC%2FCcjFwKBlUJCdfqe7fAnwhFhtbeu1Wsy3nundJ1HMu5thXWLNvCG6S42rwv&X-Amz-Signature=95dcc97807196428c8441da93562b8175320616def39d01032164774327ec694&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UXDL2VU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCVhu%2FPdAXd8DC3WYb0lkT8AWfv6tzsUNqZ9zu7RhjgrQIgev56nk1WhS%2FHOm4bXVsvjyFUzh9gAFk7Oo%2FIaY89X6gqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKYjLmavpVMR%2FrOKircA%2Bs8eL7uBLrmqNVgOpM5vvjCnpRTV8KyBGH7eDhNBfiyRllVcvyqiNomWKPd1%2Fzu0SEVdUt7xMymFt556ismBYwdH2r6ydCjRE5hWd3QtTILSnf7itSV3gkk%2FdJA7OQABPeoKNMjo3lsyNCzBrKZmmO8sZD5OFHPpnCMQHDFkVZYESrDznSPZXiqFSJEI1KfGR4UXJKgXF2NgFn6oLZ%2FXgrQgvWqdOqMlbTj3DUaopoS2RT%2F6irxS1%2FvFMJ6Qz4JhY4SHcD4qKzoExBPgbzNXgRkjEUbaFRbE2otu27zwRPRBngFomOjDbntSuiyKrScb0N8NdOqf4GmWQLfhEart3Poja8DhDkgVtxmHISVNo29HxESncvQT5OgdSD70TBdUwi0bqmQHNUM%2B6sGKJ05BdTTeztkwc2DmfbWE3BqJHp9a43XkAv%2BRDIs%2FXyGqi1e7d5cWPTtdUm7WfDFRl%2Fc8CNjF%2BA10WmoSnI6X0ECQ7Nb%2B93RFC0UeP%2Bb4DywAXRcxwo23cISco7KyxHh%2BWjSOnmbSAtABk0mEYHW%2BfxXXK7dA%2FZIcjDm%2FXJZmSDXQxAERADDMa3BhuU4MoOI8F21Fbjtwmc85yOMH%2Fzu36TXgxgM8nR4MEsOXcgGBQwNMKGA88EGOqUBsTLMcOEXFZ88pk5XioVy2%2FdQpTg1xQmdLRiSm%2FFkQoS0coIG3EN4lT2ZUixzNwVMLyQGkQ2Q%2FD%2FBHrN7GP%2FhAiReyn4PINPFLbQ7kn8rGri7d%2FHZIlqpEyPVFHuyCaUNH%2BouFXaSM7FHczOR2xqSdkkhw7%2F%2FH55aC%2FCcjFwKBlUJCdfqe7fAnwhFhtbeu1Wsy3nundJ1HMu5thXWLNvCG6S42rwv&X-Amz-Signature=e94120d61dde761fa6dd8b34defbaa1e8bc2013d9e75c2b68f70b1ff9f07a3a1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UXDL2VU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCVhu%2FPdAXd8DC3WYb0lkT8AWfv6tzsUNqZ9zu7RhjgrQIgev56nk1WhS%2FHOm4bXVsvjyFUzh9gAFk7Oo%2FIaY89X6gqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKYjLmavpVMR%2FrOKircA%2Bs8eL7uBLrmqNVgOpM5vvjCnpRTV8KyBGH7eDhNBfiyRllVcvyqiNomWKPd1%2Fzu0SEVdUt7xMymFt556ismBYwdH2r6ydCjRE5hWd3QtTILSnf7itSV3gkk%2FdJA7OQABPeoKNMjo3lsyNCzBrKZmmO8sZD5OFHPpnCMQHDFkVZYESrDznSPZXiqFSJEI1KfGR4UXJKgXF2NgFn6oLZ%2FXgrQgvWqdOqMlbTj3DUaopoS2RT%2F6irxS1%2FvFMJ6Qz4JhY4SHcD4qKzoExBPgbzNXgRkjEUbaFRbE2otu27zwRPRBngFomOjDbntSuiyKrScb0N8NdOqf4GmWQLfhEart3Poja8DhDkgVtxmHISVNo29HxESncvQT5OgdSD70TBdUwi0bqmQHNUM%2B6sGKJ05BdTTeztkwc2DmfbWE3BqJHp9a43XkAv%2BRDIs%2FXyGqi1e7d5cWPTtdUm7WfDFRl%2Fc8CNjF%2BA10WmoSnI6X0ECQ7Nb%2B93RFC0UeP%2Bb4DywAXRcxwo23cISco7KyxHh%2BWjSOnmbSAtABk0mEYHW%2BfxXXK7dA%2FZIcjDm%2FXJZmSDXQxAERADDMa3BhuU4MoOI8F21Fbjtwmc85yOMH%2Fzu36TXgxgM8nR4MEsOXcgGBQwNMKGA88EGOqUBsTLMcOEXFZ88pk5XioVy2%2FdQpTg1xQmdLRiSm%2FFkQoS0coIG3EN4lT2ZUixzNwVMLyQGkQ2Q%2FD%2FBHrN7GP%2FhAiReyn4PINPFLbQ7kn8rGri7d%2FHZIlqpEyPVFHuyCaUNH%2BouFXaSM7FHczOR2xqSdkkhw7%2F%2FH55aC%2FCcjFwKBlUJCdfqe7fAnwhFhtbeu1Wsy3nundJ1HMu5thXWLNvCG6S42rwv&X-Amz-Signature=4defa9a2866900b6c95b9e231ed65da2ec2a41ab70fec2270fc6da3f797b1200&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UXDL2VU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCVhu%2FPdAXd8DC3WYb0lkT8AWfv6tzsUNqZ9zu7RhjgrQIgev56nk1WhS%2FHOm4bXVsvjyFUzh9gAFk7Oo%2FIaY89X6gqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKYjLmavpVMR%2FrOKircA%2Bs8eL7uBLrmqNVgOpM5vvjCnpRTV8KyBGH7eDhNBfiyRllVcvyqiNomWKPd1%2Fzu0SEVdUt7xMymFt556ismBYwdH2r6ydCjRE5hWd3QtTILSnf7itSV3gkk%2FdJA7OQABPeoKNMjo3lsyNCzBrKZmmO8sZD5OFHPpnCMQHDFkVZYESrDznSPZXiqFSJEI1KfGR4UXJKgXF2NgFn6oLZ%2FXgrQgvWqdOqMlbTj3DUaopoS2RT%2F6irxS1%2FvFMJ6Qz4JhY4SHcD4qKzoExBPgbzNXgRkjEUbaFRbE2otu27zwRPRBngFomOjDbntSuiyKrScb0N8NdOqf4GmWQLfhEart3Poja8DhDkgVtxmHISVNo29HxESncvQT5OgdSD70TBdUwi0bqmQHNUM%2B6sGKJ05BdTTeztkwc2DmfbWE3BqJHp9a43XkAv%2BRDIs%2FXyGqi1e7d5cWPTtdUm7WfDFRl%2Fc8CNjF%2BA10WmoSnI6X0ECQ7Nb%2B93RFC0UeP%2Bb4DywAXRcxwo23cISco7KyxHh%2BWjSOnmbSAtABk0mEYHW%2BfxXXK7dA%2FZIcjDm%2FXJZmSDXQxAERADDMa3BhuU4MoOI8F21Fbjtwmc85yOMH%2Fzu36TXgxgM8nR4MEsOXcgGBQwNMKGA88EGOqUBsTLMcOEXFZ88pk5XioVy2%2FdQpTg1xQmdLRiSm%2FFkQoS0coIG3EN4lT2ZUixzNwVMLyQGkQ2Q%2FD%2FBHrN7GP%2FhAiReyn4PINPFLbQ7kn8rGri7d%2FHZIlqpEyPVFHuyCaUNH%2BouFXaSM7FHczOR2xqSdkkhw7%2F%2FH55aC%2FCcjFwKBlUJCdfqe7fAnwhFhtbeu1Wsy3nundJ1HMu5thXWLNvCG6S42rwv&X-Amz-Signature=f6506933131ec336e0e37b6f0be8776b9fde23294e16f8ac485cbf62c0c54cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UXDL2VU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCVhu%2FPdAXd8DC3WYb0lkT8AWfv6tzsUNqZ9zu7RhjgrQIgev56nk1WhS%2FHOm4bXVsvjyFUzh9gAFk7Oo%2FIaY89X6gqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKYjLmavpVMR%2FrOKircA%2Bs8eL7uBLrmqNVgOpM5vvjCnpRTV8KyBGH7eDhNBfiyRllVcvyqiNomWKPd1%2Fzu0SEVdUt7xMymFt556ismBYwdH2r6ydCjRE5hWd3QtTILSnf7itSV3gkk%2FdJA7OQABPeoKNMjo3lsyNCzBrKZmmO8sZD5OFHPpnCMQHDFkVZYESrDznSPZXiqFSJEI1KfGR4UXJKgXF2NgFn6oLZ%2FXgrQgvWqdOqMlbTj3DUaopoS2RT%2F6irxS1%2FvFMJ6Qz4JhY4SHcD4qKzoExBPgbzNXgRkjEUbaFRbE2otu27zwRPRBngFomOjDbntSuiyKrScb0N8NdOqf4GmWQLfhEart3Poja8DhDkgVtxmHISVNo29HxESncvQT5OgdSD70TBdUwi0bqmQHNUM%2B6sGKJ05BdTTeztkwc2DmfbWE3BqJHp9a43XkAv%2BRDIs%2FXyGqi1e7d5cWPTtdUm7WfDFRl%2Fc8CNjF%2BA10WmoSnI6X0ECQ7Nb%2B93RFC0UeP%2Bb4DywAXRcxwo23cISco7KyxHh%2BWjSOnmbSAtABk0mEYHW%2BfxXXK7dA%2FZIcjDm%2FXJZmSDXQxAERADDMa3BhuU4MoOI8F21Fbjtwmc85yOMH%2Fzu36TXgxgM8nR4MEsOXcgGBQwNMKGA88EGOqUBsTLMcOEXFZ88pk5XioVy2%2FdQpTg1xQmdLRiSm%2FFkQoS0coIG3EN4lT2ZUixzNwVMLyQGkQ2Q%2FD%2FBHrN7GP%2FhAiReyn4PINPFLbQ7kn8rGri7d%2FHZIlqpEyPVFHuyCaUNH%2BouFXaSM7FHczOR2xqSdkkhw7%2F%2FH55aC%2FCcjFwKBlUJCdfqe7fAnwhFhtbeu1Wsy3nundJ1HMu5thXWLNvCG6S42rwv&X-Amz-Signature=24edc5fb97ecb80b0fc781d107f3d5af14d5f6c48ff94487e6cb6bc0e42de606&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
