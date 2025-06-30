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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKGKRU4J%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb2NppiDRlCo2w01kvg1sjaF8dQXKYGHbWgu%2FigI8ojgIgNDrsbWXv286jpCVVqE9QscaiVi%2FPppXkR94JGlF5FNcqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtnWE38CnIGrbRTVSrcA9Orp1gF6xilB3eUaNzdbMbiIXqWlcsbTe60vDWTVRcJYJKni%2BFi%2BplyP7%2B5Vv%2BUsT6zhy1la1DN5bMm6NgTn3n0eqOfCDf9TA2PhcGrffwZ2orXJObVYQbluFx1cGOlnL5BHVHVvhgjcZr4lyMfJHpA%2FbkOZnoUKb%2F6sI8QSsUUREdTTfzHJVuoPiqwU2j8GZneBPFYN3PO%2BCSUJSuG10XsmEd5MMbiG3%2FUstoPXRmB92qDHfPrUnVt2lSjkdNiu1T7C0nkoErjx4oqHJgCMDNUBWk2GMg7n1Yt%2FKxQwKg11X8fnTR57Io88cYEIPy6pEtY5m5jeTRbae4gCZq1bpBdtXZFKXLQ6kt0J6ZvBY%2B7n%2FTS%2Fq5V%2BdWx61u%2Bvyb4XRwPimdLvuDfHD5cnxG1qNwyf1kr4WMYaZVc7P1fplSbobC%2BJE2Z1C6PftB7oy9nBsuVIPHaleTglEue%2B1PpAUzayHw9Fgdpbu21Ka0n03TFUGbBVufeMYbIAEXV%2F%2FABw3bJRp3wWnFuHWiAuNXUSQMj0RCZdAQd%2Fu1symiBdusjUoeGVzsnSPYae2KkhCCnLjc1umgbWty9NLb6eFYaHN82UUAr7te5FB0Go%2BaACYhmZfYzqsC1OxuCG7AgMJ76i8MGOqUBro9oq6cUkymoOc9e4RmoYTIqdIQL0S4ttnY4oot0Ljhfwo2H92jqe4bV3M7ePcLx6y8V0gBkRa1iY6ROOfhTRYl8izkgspU84FifgFKbj4sTWnFeVVusRd%2BZrAz7kdOLpP86W4ZPZp%2BKsPwUlHzBP2PzLZhg10VrdVCDRYaKCYsS6BkAMNSHmp0P3p4uyNPz%2BRh57ZzP875k2sXLSt79Lcxss5rQ&X-Amz-Signature=c15f736496d7f352b637dd7309da63129559c7350ed3f76414ac03b1f74def53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKGKRU4J%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb2NppiDRlCo2w01kvg1sjaF8dQXKYGHbWgu%2FigI8ojgIgNDrsbWXv286jpCVVqE9QscaiVi%2FPppXkR94JGlF5FNcqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtnWE38CnIGrbRTVSrcA9Orp1gF6xilB3eUaNzdbMbiIXqWlcsbTe60vDWTVRcJYJKni%2BFi%2BplyP7%2B5Vv%2BUsT6zhy1la1DN5bMm6NgTn3n0eqOfCDf9TA2PhcGrffwZ2orXJObVYQbluFx1cGOlnL5BHVHVvhgjcZr4lyMfJHpA%2FbkOZnoUKb%2F6sI8QSsUUREdTTfzHJVuoPiqwU2j8GZneBPFYN3PO%2BCSUJSuG10XsmEd5MMbiG3%2FUstoPXRmB92qDHfPrUnVt2lSjkdNiu1T7C0nkoErjx4oqHJgCMDNUBWk2GMg7n1Yt%2FKxQwKg11X8fnTR57Io88cYEIPy6pEtY5m5jeTRbae4gCZq1bpBdtXZFKXLQ6kt0J6ZvBY%2B7n%2FTS%2Fq5V%2BdWx61u%2Bvyb4XRwPimdLvuDfHD5cnxG1qNwyf1kr4WMYaZVc7P1fplSbobC%2BJE2Z1C6PftB7oy9nBsuVIPHaleTglEue%2B1PpAUzayHw9Fgdpbu21Ka0n03TFUGbBVufeMYbIAEXV%2F%2FABw3bJRp3wWnFuHWiAuNXUSQMj0RCZdAQd%2Fu1symiBdusjUoeGVzsnSPYae2KkhCCnLjc1umgbWty9NLb6eFYaHN82UUAr7te5FB0Go%2BaACYhmZfYzqsC1OxuCG7AgMJ76i8MGOqUBro9oq6cUkymoOc9e4RmoYTIqdIQL0S4ttnY4oot0Ljhfwo2H92jqe4bV3M7ePcLx6y8V0gBkRa1iY6ROOfhTRYl8izkgspU84FifgFKbj4sTWnFeVVusRd%2BZrAz7kdOLpP86W4ZPZp%2BKsPwUlHzBP2PzLZhg10VrdVCDRYaKCYsS6BkAMNSHmp0P3p4uyNPz%2BRh57ZzP875k2sXLSt79Lcxss5rQ&X-Amz-Signature=c77a739c05ed9477a985d052100da1ae84bf7bc15955d249045de2095c581837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKGKRU4J%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb2NppiDRlCo2w01kvg1sjaF8dQXKYGHbWgu%2FigI8ojgIgNDrsbWXv286jpCVVqE9QscaiVi%2FPppXkR94JGlF5FNcqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtnWE38CnIGrbRTVSrcA9Orp1gF6xilB3eUaNzdbMbiIXqWlcsbTe60vDWTVRcJYJKni%2BFi%2BplyP7%2B5Vv%2BUsT6zhy1la1DN5bMm6NgTn3n0eqOfCDf9TA2PhcGrffwZ2orXJObVYQbluFx1cGOlnL5BHVHVvhgjcZr4lyMfJHpA%2FbkOZnoUKb%2F6sI8QSsUUREdTTfzHJVuoPiqwU2j8GZneBPFYN3PO%2BCSUJSuG10XsmEd5MMbiG3%2FUstoPXRmB92qDHfPrUnVt2lSjkdNiu1T7C0nkoErjx4oqHJgCMDNUBWk2GMg7n1Yt%2FKxQwKg11X8fnTR57Io88cYEIPy6pEtY5m5jeTRbae4gCZq1bpBdtXZFKXLQ6kt0J6ZvBY%2B7n%2FTS%2Fq5V%2BdWx61u%2Bvyb4XRwPimdLvuDfHD5cnxG1qNwyf1kr4WMYaZVc7P1fplSbobC%2BJE2Z1C6PftB7oy9nBsuVIPHaleTglEue%2B1PpAUzayHw9Fgdpbu21Ka0n03TFUGbBVufeMYbIAEXV%2F%2FABw3bJRp3wWnFuHWiAuNXUSQMj0RCZdAQd%2Fu1symiBdusjUoeGVzsnSPYae2KkhCCnLjc1umgbWty9NLb6eFYaHN82UUAr7te5FB0Go%2BaACYhmZfYzqsC1OxuCG7AgMJ76i8MGOqUBro9oq6cUkymoOc9e4RmoYTIqdIQL0S4ttnY4oot0Ljhfwo2H92jqe4bV3M7ePcLx6y8V0gBkRa1iY6ROOfhTRYl8izkgspU84FifgFKbj4sTWnFeVVusRd%2BZrAz7kdOLpP86W4ZPZp%2BKsPwUlHzBP2PzLZhg10VrdVCDRYaKCYsS6BkAMNSHmp0P3p4uyNPz%2BRh57ZzP875k2sXLSt79Lcxss5rQ&X-Amz-Signature=d8a4a5c4dc945dafbc6a28231ce9bdc21c22dbdad4fc26e3fc7d042255c7498d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKGKRU4J%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb2NppiDRlCo2w01kvg1sjaF8dQXKYGHbWgu%2FigI8ojgIgNDrsbWXv286jpCVVqE9QscaiVi%2FPppXkR94JGlF5FNcqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtnWE38CnIGrbRTVSrcA9Orp1gF6xilB3eUaNzdbMbiIXqWlcsbTe60vDWTVRcJYJKni%2BFi%2BplyP7%2B5Vv%2BUsT6zhy1la1DN5bMm6NgTn3n0eqOfCDf9TA2PhcGrffwZ2orXJObVYQbluFx1cGOlnL5BHVHVvhgjcZr4lyMfJHpA%2FbkOZnoUKb%2F6sI8QSsUUREdTTfzHJVuoPiqwU2j8GZneBPFYN3PO%2BCSUJSuG10XsmEd5MMbiG3%2FUstoPXRmB92qDHfPrUnVt2lSjkdNiu1T7C0nkoErjx4oqHJgCMDNUBWk2GMg7n1Yt%2FKxQwKg11X8fnTR57Io88cYEIPy6pEtY5m5jeTRbae4gCZq1bpBdtXZFKXLQ6kt0J6ZvBY%2B7n%2FTS%2Fq5V%2BdWx61u%2Bvyb4XRwPimdLvuDfHD5cnxG1qNwyf1kr4WMYaZVc7P1fplSbobC%2BJE2Z1C6PftB7oy9nBsuVIPHaleTglEue%2B1PpAUzayHw9Fgdpbu21Ka0n03TFUGbBVufeMYbIAEXV%2F%2FABw3bJRp3wWnFuHWiAuNXUSQMj0RCZdAQd%2Fu1symiBdusjUoeGVzsnSPYae2KkhCCnLjc1umgbWty9NLb6eFYaHN82UUAr7te5FB0Go%2BaACYhmZfYzqsC1OxuCG7AgMJ76i8MGOqUBro9oq6cUkymoOc9e4RmoYTIqdIQL0S4ttnY4oot0Ljhfwo2H92jqe4bV3M7ePcLx6y8V0gBkRa1iY6ROOfhTRYl8izkgspU84FifgFKbj4sTWnFeVVusRd%2BZrAz7kdOLpP86W4ZPZp%2BKsPwUlHzBP2PzLZhg10VrdVCDRYaKCYsS6BkAMNSHmp0P3p4uyNPz%2BRh57ZzP875k2sXLSt79Lcxss5rQ&X-Amz-Signature=fbdd1fce61ccb47ac1613c9045c37d09e905dbbb8b331363a662b5cbd09259f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKGKRU4J%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb2NppiDRlCo2w01kvg1sjaF8dQXKYGHbWgu%2FigI8ojgIgNDrsbWXv286jpCVVqE9QscaiVi%2FPppXkR94JGlF5FNcqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtnWE38CnIGrbRTVSrcA9Orp1gF6xilB3eUaNzdbMbiIXqWlcsbTe60vDWTVRcJYJKni%2BFi%2BplyP7%2B5Vv%2BUsT6zhy1la1DN5bMm6NgTn3n0eqOfCDf9TA2PhcGrffwZ2orXJObVYQbluFx1cGOlnL5BHVHVvhgjcZr4lyMfJHpA%2FbkOZnoUKb%2F6sI8QSsUUREdTTfzHJVuoPiqwU2j8GZneBPFYN3PO%2BCSUJSuG10XsmEd5MMbiG3%2FUstoPXRmB92qDHfPrUnVt2lSjkdNiu1T7C0nkoErjx4oqHJgCMDNUBWk2GMg7n1Yt%2FKxQwKg11X8fnTR57Io88cYEIPy6pEtY5m5jeTRbae4gCZq1bpBdtXZFKXLQ6kt0J6ZvBY%2B7n%2FTS%2Fq5V%2BdWx61u%2Bvyb4XRwPimdLvuDfHD5cnxG1qNwyf1kr4WMYaZVc7P1fplSbobC%2BJE2Z1C6PftB7oy9nBsuVIPHaleTglEue%2B1PpAUzayHw9Fgdpbu21Ka0n03TFUGbBVufeMYbIAEXV%2F%2FABw3bJRp3wWnFuHWiAuNXUSQMj0RCZdAQd%2Fu1symiBdusjUoeGVzsnSPYae2KkhCCnLjc1umgbWty9NLb6eFYaHN82UUAr7te5FB0Go%2BaACYhmZfYzqsC1OxuCG7AgMJ76i8MGOqUBro9oq6cUkymoOc9e4RmoYTIqdIQL0S4ttnY4oot0Ljhfwo2H92jqe4bV3M7ePcLx6y8V0gBkRa1iY6ROOfhTRYl8izkgspU84FifgFKbj4sTWnFeVVusRd%2BZrAz7kdOLpP86W4ZPZp%2BKsPwUlHzBP2PzLZhg10VrdVCDRYaKCYsS6BkAMNSHmp0P3p4uyNPz%2BRh57ZzP875k2sXLSt79Lcxss5rQ&X-Amz-Signature=7175d74fde1af7f94a66b413f115d41c06c334b3f8a596f95a310a198b540de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
