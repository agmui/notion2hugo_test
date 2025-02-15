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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AS25SGP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIH03oqR2MU8%2BPgnRl7TIqKgm7ZOzCGGlm6cyBjMvvJrwAiB%2B8TFpkqo%2F0XS%2BKM40uR1yQpPBtp9fF1RgMfchqje4Uir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMaAfoBvmlNScIzc7sKtwDYYGDSyf8CCO1noUULEqaFdPDXkh1%2FFcXcvs9pHqSy3YODbzXt%2FlS20R6eQWlsGNsjS1knU7wG8jJvl6cOSUHUedkTMY3Q1Q%2FD5%2BPNlc5aoRxMCyjBNa0%2FxlHQcqFRS21qgkz2S6SEhlXlolkg9MUfLEmLmWrBLC08DTU%2BrpUHjuvIRyXaSS2LPlgSCFUYZG68PS3FK5NhNArsVra%2BuKFI3ivV3J7n%2Bw0k%2BSOygu5Nv2IIE1fpSBWrU59aejkHVVEE%2B7UJRe6EZ31mn9D72Cb3638pZBKABp1W%2F3j10pCyQ12WPG7xrD9pwSLPsLzNoQEiwaUuYTMPt5UZ%2FnpAdQRESlIvThVWBlhVoU3r70yO%2F0aHP2lnjZSit491j7zx2GIZHFNiJumnosUnLv7mXExn4oMOyj3BVEOK5HHs9GeA%2FYuZaCjd7dIBlJoaBPxqouQryTZLsqLpGo5G7Wr8D%2B%2Bzu%2FyfbwcRrX1k6cZfm4lPm3GkYeR2A1bxHXOJQSN1YGKM7Y1Xf81M8LeRVuxn8t%2FK%2Bin5dtPyaYRx0DLZom5huC5ZXNyvv%2BuDcLOvWkXsmlUum8QXnRMdtJQ6xVj8HTE00HWB4V%2FJoVSg%2Bag%2BzmPdPFmqmjDbrwhTP0eOQcwve3BvQY6pgEo%2BTVScselmWA8gA26Ja%2Bb%2FGrCKiI9vTZ5Mq2w8swzaWwBNAvhiFCv2PCPQ1QpDQwNNorsvk%2FH33HyYCDc0HUPb0SHHygTDaD3kPBUqq5ZDBG80cT5v6BoLWA2tybklupMISXQM0q8cI6oHyMdyHtADtkRs0Na4wEV3%2FSSxZ4B1uG5LGPQ821m%2B48xL9DoIHltbEtzEORZPQLRZbv70yqW%2Buc6P83b&X-Amz-Signature=6c89dbd96dd7c8929383d051657f2977062f111ed7ef4cc87441ace00c1a4bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AS25SGP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIH03oqR2MU8%2BPgnRl7TIqKgm7ZOzCGGlm6cyBjMvvJrwAiB%2B8TFpkqo%2F0XS%2BKM40uR1yQpPBtp9fF1RgMfchqje4Uir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMaAfoBvmlNScIzc7sKtwDYYGDSyf8CCO1noUULEqaFdPDXkh1%2FFcXcvs9pHqSy3YODbzXt%2FlS20R6eQWlsGNsjS1knU7wG8jJvl6cOSUHUedkTMY3Q1Q%2FD5%2BPNlc5aoRxMCyjBNa0%2FxlHQcqFRS21qgkz2S6SEhlXlolkg9MUfLEmLmWrBLC08DTU%2BrpUHjuvIRyXaSS2LPlgSCFUYZG68PS3FK5NhNArsVra%2BuKFI3ivV3J7n%2Bw0k%2BSOygu5Nv2IIE1fpSBWrU59aejkHVVEE%2B7UJRe6EZ31mn9D72Cb3638pZBKABp1W%2F3j10pCyQ12WPG7xrD9pwSLPsLzNoQEiwaUuYTMPt5UZ%2FnpAdQRESlIvThVWBlhVoU3r70yO%2F0aHP2lnjZSit491j7zx2GIZHFNiJumnosUnLv7mXExn4oMOyj3BVEOK5HHs9GeA%2FYuZaCjd7dIBlJoaBPxqouQryTZLsqLpGo5G7Wr8D%2B%2Bzu%2FyfbwcRrX1k6cZfm4lPm3GkYeR2A1bxHXOJQSN1YGKM7Y1Xf81M8LeRVuxn8t%2FK%2Bin5dtPyaYRx0DLZom5huC5ZXNyvv%2BuDcLOvWkXsmlUum8QXnRMdtJQ6xVj8HTE00HWB4V%2FJoVSg%2Bag%2BzmPdPFmqmjDbrwhTP0eOQcwve3BvQY6pgEo%2BTVScselmWA8gA26Ja%2Bb%2FGrCKiI9vTZ5Mq2w8swzaWwBNAvhiFCv2PCPQ1QpDQwNNorsvk%2FH33HyYCDc0HUPb0SHHygTDaD3kPBUqq5ZDBG80cT5v6BoLWA2tybklupMISXQM0q8cI6oHyMdyHtADtkRs0Na4wEV3%2FSSxZ4B1uG5LGPQ821m%2B48xL9DoIHltbEtzEORZPQLRZbv70yqW%2Buc6P83b&X-Amz-Signature=2fb243fb777a286df6f92bf44e4ab2a1603cfaf46d5b0d43ad503a34d1393737&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AS25SGP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIH03oqR2MU8%2BPgnRl7TIqKgm7ZOzCGGlm6cyBjMvvJrwAiB%2B8TFpkqo%2F0XS%2BKM40uR1yQpPBtp9fF1RgMfchqje4Uir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMaAfoBvmlNScIzc7sKtwDYYGDSyf8CCO1noUULEqaFdPDXkh1%2FFcXcvs9pHqSy3YODbzXt%2FlS20R6eQWlsGNsjS1knU7wG8jJvl6cOSUHUedkTMY3Q1Q%2FD5%2BPNlc5aoRxMCyjBNa0%2FxlHQcqFRS21qgkz2S6SEhlXlolkg9MUfLEmLmWrBLC08DTU%2BrpUHjuvIRyXaSS2LPlgSCFUYZG68PS3FK5NhNArsVra%2BuKFI3ivV3J7n%2Bw0k%2BSOygu5Nv2IIE1fpSBWrU59aejkHVVEE%2B7UJRe6EZ31mn9D72Cb3638pZBKABp1W%2F3j10pCyQ12WPG7xrD9pwSLPsLzNoQEiwaUuYTMPt5UZ%2FnpAdQRESlIvThVWBlhVoU3r70yO%2F0aHP2lnjZSit491j7zx2GIZHFNiJumnosUnLv7mXExn4oMOyj3BVEOK5HHs9GeA%2FYuZaCjd7dIBlJoaBPxqouQryTZLsqLpGo5G7Wr8D%2B%2Bzu%2FyfbwcRrX1k6cZfm4lPm3GkYeR2A1bxHXOJQSN1YGKM7Y1Xf81M8LeRVuxn8t%2FK%2Bin5dtPyaYRx0DLZom5huC5ZXNyvv%2BuDcLOvWkXsmlUum8QXnRMdtJQ6xVj8HTE00HWB4V%2FJoVSg%2Bag%2BzmPdPFmqmjDbrwhTP0eOQcwve3BvQY6pgEo%2BTVScselmWA8gA26Ja%2Bb%2FGrCKiI9vTZ5Mq2w8swzaWwBNAvhiFCv2PCPQ1QpDQwNNorsvk%2FH33HyYCDc0HUPb0SHHygTDaD3kPBUqq5ZDBG80cT5v6BoLWA2tybklupMISXQM0q8cI6oHyMdyHtADtkRs0Na4wEV3%2FSSxZ4B1uG5LGPQ821m%2B48xL9DoIHltbEtzEORZPQLRZbv70yqW%2Buc6P83b&X-Amz-Signature=311492aebff4a2ab58135519d6002c4d43e222f56af70f64cfa3e8c873355d00&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AS25SGP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIH03oqR2MU8%2BPgnRl7TIqKgm7ZOzCGGlm6cyBjMvvJrwAiB%2B8TFpkqo%2F0XS%2BKM40uR1yQpPBtp9fF1RgMfchqje4Uir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMaAfoBvmlNScIzc7sKtwDYYGDSyf8CCO1noUULEqaFdPDXkh1%2FFcXcvs9pHqSy3YODbzXt%2FlS20R6eQWlsGNsjS1knU7wG8jJvl6cOSUHUedkTMY3Q1Q%2FD5%2BPNlc5aoRxMCyjBNa0%2FxlHQcqFRS21qgkz2S6SEhlXlolkg9MUfLEmLmWrBLC08DTU%2BrpUHjuvIRyXaSS2LPlgSCFUYZG68PS3FK5NhNArsVra%2BuKFI3ivV3J7n%2Bw0k%2BSOygu5Nv2IIE1fpSBWrU59aejkHVVEE%2B7UJRe6EZ31mn9D72Cb3638pZBKABp1W%2F3j10pCyQ12WPG7xrD9pwSLPsLzNoQEiwaUuYTMPt5UZ%2FnpAdQRESlIvThVWBlhVoU3r70yO%2F0aHP2lnjZSit491j7zx2GIZHFNiJumnosUnLv7mXExn4oMOyj3BVEOK5HHs9GeA%2FYuZaCjd7dIBlJoaBPxqouQryTZLsqLpGo5G7Wr8D%2B%2Bzu%2FyfbwcRrX1k6cZfm4lPm3GkYeR2A1bxHXOJQSN1YGKM7Y1Xf81M8LeRVuxn8t%2FK%2Bin5dtPyaYRx0DLZom5huC5ZXNyvv%2BuDcLOvWkXsmlUum8QXnRMdtJQ6xVj8HTE00HWB4V%2FJoVSg%2Bag%2BzmPdPFmqmjDbrwhTP0eOQcwve3BvQY6pgEo%2BTVScselmWA8gA26Ja%2Bb%2FGrCKiI9vTZ5Mq2w8swzaWwBNAvhiFCv2PCPQ1QpDQwNNorsvk%2FH33HyYCDc0HUPb0SHHygTDaD3kPBUqq5ZDBG80cT5v6BoLWA2tybklupMISXQM0q8cI6oHyMdyHtADtkRs0Na4wEV3%2FSSxZ4B1uG5LGPQ821m%2B48xL9DoIHltbEtzEORZPQLRZbv70yqW%2Buc6P83b&X-Amz-Signature=ccdf09aca71cd664a6dc246fe9170f8f7a5c71c4779b0fd82a01d0bc5e02b7ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AS25SGP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIH03oqR2MU8%2BPgnRl7TIqKgm7ZOzCGGlm6cyBjMvvJrwAiB%2B8TFpkqo%2F0XS%2BKM40uR1yQpPBtp9fF1RgMfchqje4Uir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMaAfoBvmlNScIzc7sKtwDYYGDSyf8CCO1noUULEqaFdPDXkh1%2FFcXcvs9pHqSy3YODbzXt%2FlS20R6eQWlsGNsjS1knU7wG8jJvl6cOSUHUedkTMY3Q1Q%2FD5%2BPNlc5aoRxMCyjBNa0%2FxlHQcqFRS21qgkz2S6SEhlXlolkg9MUfLEmLmWrBLC08DTU%2BrpUHjuvIRyXaSS2LPlgSCFUYZG68PS3FK5NhNArsVra%2BuKFI3ivV3J7n%2Bw0k%2BSOygu5Nv2IIE1fpSBWrU59aejkHVVEE%2B7UJRe6EZ31mn9D72Cb3638pZBKABp1W%2F3j10pCyQ12WPG7xrD9pwSLPsLzNoQEiwaUuYTMPt5UZ%2FnpAdQRESlIvThVWBlhVoU3r70yO%2F0aHP2lnjZSit491j7zx2GIZHFNiJumnosUnLv7mXExn4oMOyj3BVEOK5HHs9GeA%2FYuZaCjd7dIBlJoaBPxqouQryTZLsqLpGo5G7Wr8D%2B%2Bzu%2FyfbwcRrX1k6cZfm4lPm3GkYeR2A1bxHXOJQSN1YGKM7Y1Xf81M8LeRVuxn8t%2FK%2Bin5dtPyaYRx0DLZom5huC5ZXNyvv%2BuDcLOvWkXsmlUum8QXnRMdtJQ6xVj8HTE00HWB4V%2FJoVSg%2Bag%2BzmPdPFmqmjDbrwhTP0eOQcwve3BvQY6pgEo%2BTVScselmWA8gA26Ja%2Bb%2FGrCKiI9vTZ5Mq2w8swzaWwBNAvhiFCv2PCPQ1QpDQwNNorsvk%2FH33HyYCDc0HUPb0SHHygTDaD3kPBUqq5ZDBG80cT5v6BoLWA2tybklupMISXQM0q8cI6oHyMdyHtADtkRs0Na4wEV3%2FSSxZ4B1uG5LGPQ821m%2B48xL9DoIHltbEtzEORZPQLRZbv70yqW%2Buc6P83b&X-Amz-Signature=ce08e8a54d0353e1b044a3a5306c93a24d3dee0e4b27e01f726d5cfb2f8dbb1e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
