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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667CMEPTQ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIByZHB3p5dBCcOP5M8OkgpdDopZxI7VkP3G3uoanswTSAiEAgV%2BIrqck9iH45UdYRZxznKDPFO2Z3Xv7YVvQUScrRm0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfXnz%2FB%2B2ojbxMIhircA1jc42BrBwojugn5B%2BewvC3E3EQAUP6cioeAyBdKHUdTBK0jxJp%2F7QLPFr3p7Wn3P9%2B%2F2YyUUBWE15EBE5lk4vnHSif6gGpdfHHWLLDW%2FZRc%2F2T0gbUi7rGFIWh5cQPHUqPg%2BeWllkhBGJPt0yWBxffSAephxBHxXtNUcZrdG3yLUlDnLGKyqX6x%2BDSgumqSUc%2FP7ku7AzDBFLYOd12nLjiJpAnYn7cuQfEjNyuR001fSo61m1lLjNqcruEtojj5Yzjk6o0%2FMT45m47Cd36MbvqoN1ApP8NHZQN55NAK0Qixm8RKo%2BxD93di%2BH9DPkcaju66MLVgVRzURaDeyNNj0twErJtOHqHGuqi8GvlgSvhM3m69Qzk1nx2LPfOc0Poqxj4WDFqOpJK7OZZ1qjc6xPp%2FuSIImO49CgohzrcDB3XvRuUbkB19mfaanD8s34S36paTKBDw1CtJ7XVYijjYJRm9bqvJUQhnl6U3EgYFGfq47v3bpA%2Fwgv1wui4ChHOiEejXosffDwTdro7WSy6mNolSazabwHo0kyheeVw9v2tkIOAf8YHXxa4%2BzH98Aqy4RtzJW5cWDWVzFHYW5fSW3KE1jzyB3Rw%2BNn7Juy2RMtAM004R0CFfXliF0gGzMLCCkcAGOqUBBfvgiq3ysfl%2B2E7MhcZP1Asv%2BhMUQZC5MCgLzg7mWDYOPB7B8YfLnMbwp8KPC3SBOofHFfeotOqIl0FGWzvS5JzpB6K1982PeqT1NAM75%2FTizAjAk0U59yvAbuE%2FI2peR%2BXWrrtAZrxR32nkTBphrCAfmwF6OjoHwVb8JkTthm2Cszb8yjOD542l1Mg96nWRnvTlPmcpqIzsnKCVE6qAxjWZ0oF2&X-Amz-Signature=55cba9055fae60ccf3acdcf76162faf1fee2c51f7b76469f77650c68334e81a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667CMEPTQ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIByZHB3p5dBCcOP5M8OkgpdDopZxI7VkP3G3uoanswTSAiEAgV%2BIrqck9iH45UdYRZxznKDPFO2Z3Xv7YVvQUScrRm0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfXnz%2FB%2B2ojbxMIhircA1jc42BrBwojugn5B%2BewvC3E3EQAUP6cioeAyBdKHUdTBK0jxJp%2F7QLPFr3p7Wn3P9%2B%2F2YyUUBWE15EBE5lk4vnHSif6gGpdfHHWLLDW%2FZRc%2F2T0gbUi7rGFIWh5cQPHUqPg%2BeWllkhBGJPt0yWBxffSAephxBHxXtNUcZrdG3yLUlDnLGKyqX6x%2BDSgumqSUc%2FP7ku7AzDBFLYOd12nLjiJpAnYn7cuQfEjNyuR001fSo61m1lLjNqcruEtojj5Yzjk6o0%2FMT45m47Cd36MbvqoN1ApP8NHZQN55NAK0Qixm8RKo%2BxD93di%2BH9DPkcaju66MLVgVRzURaDeyNNj0twErJtOHqHGuqi8GvlgSvhM3m69Qzk1nx2LPfOc0Poqxj4WDFqOpJK7OZZ1qjc6xPp%2FuSIImO49CgohzrcDB3XvRuUbkB19mfaanD8s34S36paTKBDw1CtJ7XVYijjYJRm9bqvJUQhnl6U3EgYFGfq47v3bpA%2Fwgv1wui4ChHOiEejXosffDwTdro7WSy6mNolSazabwHo0kyheeVw9v2tkIOAf8YHXxa4%2BzH98Aqy4RtzJW5cWDWVzFHYW5fSW3KE1jzyB3Rw%2BNn7Juy2RMtAM004R0CFfXliF0gGzMLCCkcAGOqUBBfvgiq3ysfl%2B2E7MhcZP1Asv%2BhMUQZC5MCgLzg7mWDYOPB7B8YfLnMbwp8KPC3SBOofHFfeotOqIl0FGWzvS5JzpB6K1982PeqT1NAM75%2FTizAjAk0U59yvAbuE%2FI2peR%2BXWrrtAZrxR32nkTBphrCAfmwF6OjoHwVb8JkTthm2Cszb8yjOD542l1Mg96nWRnvTlPmcpqIzsnKCVE6qAxjWZ0oF2&X-Amz-Signature=babe5a0569da2939346ba152f69fa83b8c2a032d3f91da40964bbe6fb06b5541&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667CMEPTQ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIByZHB3p5dBCcOP5M8OkgpdDopZxI7VkP3G3uoanswTSAiEAgV%2BIrqck9iH45UdYRZxznKDPFO2Z3Xv7YVvQUScrRm0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfXnz%2FB%2B2ojbxMIhircA1jc42BrBwojugn5B%2BewvC3E3EQAUP6cioeAyBdKHUdTBK0jxJp%2F7QLPFr3p7Wn3P9%2B%2F2YyUUBWE15EBE5lk4vnHSif6gGpdfHHWLLDW%2FZRc%2F2T0gbUi7rGFIWh5cQPHUqPg%2BeWllkhBGJPt0yWBxffSAephxBHxXtNUcZrdG3yLUlDnLGKyqX6x%2BDSgumqSUc%2FP7ku7AzDBFLYOd12nLjiJpAnYn7cuQfEjNyuR001fSo61m1lLjNqcruEtojj5Yzjk6o0%2FMT45m47Cd36MbvqoN1ApP8NHZQN55NAK0Qixm8RKo%2BxD93di%2BH9DPkcaju66MLVgVRzURaDeyNNj0twErJtOHqHGuqi8GvlgSvhM3m69Qzk1nx2LPfOc0Poqxj4WDFqOpJK7OZZ1qjc6xPp%2FuSIImO49CgohzrcDB3XvRuUbkB19mfaanD8s34S36paTKBDw1CtJ7XVYijjYJRm9bqvJUQhnl6U3EgYFGfq47v3bpA%2Fwgv1wui4ChHOiEejXosffDwTdro7WSy6mNolSazabwHo0kyheeVw9v2tkIOAf8YHXxa4%2BzH98Aqy4RtzJW5cWDWVzFHYW5fSW3KE1jzyB3Rw%2BNn7Juy2RMtAM004R0CFfXliF0gGzMLCCkcAGOqUBBfvgiq3ysfl%2B2E7MhcZP1Asv%2BhMUQZC5MCgLzg7mWDYOPB7B8YfLnMbwp8KPC3SBOofHFfeotOqIl0FGWzvS5JzpB6K1982PeqT1NAM75%2FTizAjAk0U59yvAbuE%2FI2peR%2BXWrrtAZrxR32nkTBphrCAfmwF6OjoHwVb8JkTthm2Cszb8yjOD542l1Mg96nWRnvTlPmcpqIzsnKCVE6qAxjWZ0oF2&X-Amz-Signature=d6f5c8227662aa29cf964026f6c4b5803db11c50b122a1d3d0da3218785f55b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667CMEPTQ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIByZHB3p5dBCcOP5M8OkgpdDopZxI7VkP3G3uoanswTSAiEAgV%2BIrqck9iH45UdYRZxznKDPFO2Z3Xv7YVvQUScrRm0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfXnz%2FB%2B2ojbxMIhircA1jc42BrBwojugn5B%2BewvC3E3EQAUP6cioeAyBdKHUdTBK0jxJp%2F7QLPFr3p7Wn3P9%2B%2F2YyUUBWE15EBE5lk4vnHSif6gGpdfHHWLLDW%2FZRc%2F2T0gbUi7rGFIWh5cQPHUqPg%2BeWllkhBGJPt0yWBxffSAephxBHxXtNUcZrdG3yLUlDnLGKyqX6x%2BDSgumqSUc%2FP7ku7AzDBFLYOd12nLjiJpAnYn7cuQfEjNyuR001fSo61m1lLjNqcruEtojj5Yzjk6o0%2FMT45m47Cd36MbvqoN1ApP8NHZQN55NAK0Qixm8RKo%2BxD93di%2BH9DPkcaju66MLVgVRzURaDeyNNj0twErJtOHqHGuqi8GvlgSvhM3m69Qzk1nx2LPfOc0Poqxj4WDFqOpJK7OZZ1qjc6xPp%2FuSIImO49CgohzrcDB3XvRuUbkB19mfaanD8s34S36paTKBDw1CtJ7XVYijjYJRm9bqvJUQhnl6U3EgYFGfq47v3bpA%2Fwgv1wui4ChHOiEejXosffDwTdro7WSy6mNolSazabwHo0kyheeVw9v2tkIOAf8YHXxa4%2BzH98Aqy4RtzJW5cWDWVzFHYW5fSW3KE1jzyB3Rw%2BNn7Juy2RMtAM004R0CFfXliF0gGzMLCCkcAGOqUBBfvgiq3ysfl%2B2E7MhcZP1Asv%2BhMUQZC5MCgLzg7mWDYOPB7B8YfLnMbwp8KPC3SBOofHFfeotOqIl0FGWzvS5JzpB6K1982PeqT1NAM75%2FTizAjAk0U59yvAbuE%2FI2peR%2BXWrrtAZrxR32nkTBphrCAfmwF6OjoHwVb8JkTthm2Cszb8yjOD542l1Mg96nWRnvTlPmcpqIzsnKCVE6qAxjWZ0oF2&X-Amz-Signature=3e531804a7da38f3f62d00da9f1240c8d255d270eac3e4a42d5a029686ce20c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667CMEPTQ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIByZHB3p5dBCcOP5M8OkgpdDopZxI7VkP3G3uoanswTSAiEAgV%2BIrqck9iH45UdYRZxznKDPFO2Z3Xv7YVvQUScrRm0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfXnz%2FB%2B2ojbxMIhircA1jc42BrBwojugn5B%2BewvC3E3EQAUP6cioeAyBdKHUdTBK0jxJp%2F7QLPFr3p7Wn3P9%2B%2F2YyUUBWE15EBE5lk4vnHSif6gGpdfHHWLLDW%2FZRc%2F2T0gbUi7rGFIWh5cQPHUqPg%2BeWllkhBGJPt0yWBxffSAephxBHxXtNUcZrdG3yLUlDnLGKyqX6x%2BDSgumqSUc%2FP7ku7AzDBFLYOd12nLjiJpAnYn7cuQfEjNyuR001fSo61m1lLjNqcruEtojj5Yzjk6o0%2FMT45m47Cd36MbvqoN1ApP8NHZQN55NAK0Qixm8RKo%2BxD93di%2BH9DPkcaju66MLVgVRzURaDeyNNj0twErJtOHqHGuqi8GvlgSvhM3m69Qzk1nx2LPfOc0Poqxj4WDFqOpJK7OZZ1qjc6xPp%2FuSIImO49CgohzrcDB3XvRuUbkB19mfaanD8s34S36paTKBDw1CtJ7XVYijjYJRm9bqvJUQhnl6U3EgYFGfq47v3bpA%2Fwgv1wui4ChHOiEejXosffDwTdro7WSy6mNolSazabwHo0kyheeVw9v2tkIOAf8YHXxa4%2BzH98Aqy4RtzJW5cWDWVzFHYW5fSW3KE1jzyB3Rw%2BNn7Juy2RMtAM004R0CFfXliF0gGzMLCCkcAGOqUBBfvgiq3ysfl%2B2E7MhcZP1Asv%2BhMUQZC5MCgLzg7mWDYOPB7B8YfLnMbwp8KPC3SBOofHFfeotOqIl0FGWzvS5JzpB6K1982PeqT1NAM75%2FTizAjAk0U59yvAbuE%2FI2peR%2BXWrrtAZrxR32nkTBphrCAfmwF6OjoHwVb8JkTthm2Cszb8yjOD542l1Mg96nWRnvTlPmcpqIzsnKCVE6qAxjWZ0oF2&X-Amz-Signature=f127df908f35998488ba157d10040e0da8a9ec9a15c4369cdfee1a6d7c7c9169&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
