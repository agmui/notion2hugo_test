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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIWTWQS%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpULiJEjbxhgP8VO2VSZFAhRYb0Q2gUBfFCHIvoW1U1AiBEc8EtEyYFz7u%2BGrDl10%2ByNzFLecVc4Ob%2F5q2ecRTjliqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACuot7wlc3i02EsgKtwD2T9Mj3m3QADkmbTdHBLNz7dwrh78GL9%2FPnyK1MliOmU9u%2FEVYAevzubGgeG%2Fxhg0dk3De9SVzJHvPOIy6sT%2BOmxTBgFmvot9A%2F0yOezRyKQmT%2BLyWnwXd5zQBe0j0MttDN9wX%2F%2FzJM6NlZOddfWCYv9rasD8D2TRv3X5nxybk65xugtuio8oRnbSqRhJpeo8RnsotcsxqN2X%2FF8Gh83Wehfxc24bea0WwU7rlkuE9C%2B%2BPazMNIDuopSWEyzUP5sUSYNNCeRFWaqFLEccEH269Ucmx%2BuUr%2BBMLUVLcJ8oT6KCxRnyPmQrWYjaNniemFboOlOCCOV3mHRFQGGMBzlH82pn18r7Jgo5EWnr2NDhY9MxOShq8AdHagRCmvLgFpSFOHz7oibRTeOw0%2BqrCaFSQA2G3THkIQ9V2oyoa3ZAG29sk7olVjnNRkV8AeNDmaJmuU5fuik1QOfdq4b3lLcM5waw2DRTy3q%2BFrfHf4yMkUVK5OMKEGsibWm95cFHsKitY4mUY86nYRRzeN1RJGM6hJEt8yGobgqYz7zJ59RqCVs6%2Bx%2BvSOrrptQ2R%2FCNPh%2FaK19iR5G2mBmw03Fh18Kna0QChIwpOlb84PKWjBp1pD0wh1W0aqeg25iQG%2FEwiealwgY6pgEt0H7hkYn4AQysUIziKmTaGpYU7g90NMYW8W1QkB5pfawTrQyJBVFo1hNODgYJ%2FD7nE2RkNSzASvpQsVpICKEz0Sf%2Fm%2Bk1RxfJwJOAKujQCuL6u5S8ABJhmNmAST6R%2FIrWKHSg4Og1%2BravQO8Hw9mFRRuE3WC2VJAKzVWcf97pCGzYKRT382ML2zUDE3OghisF6%2FXrjfqVi6Q1GTLK%2BBpuwWRSF2gD&X-Amz-Signature=53fdff76d9b59654d866cf1931c1d1105a103e1648793813c2048489ba437f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIWTWQS%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpULiJEjbxhgP8VO2VSZFAhRYb0Q2gUBfFCHIvoW1U1AiBEc8EtEyYFz7u%2BGrDl10%2ByNzFLecVc4Ob%2F5q2ecRTjliqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACuot7wlc3i02EsgKtwD2T9Mj3m3QADkmbTdHBLNz7dwrh78GL9%2FPnyK1MliOmU9u%2FEVYAevzubGgeG%2Fxhg0dk3De9SVzJHvPOIy6sT%2BOmxTBgFmvot9A%2F0yOezRyKQmT%2BLyWnwXd5zQBe0j0MttDN9wX%2F%2FzJM6NlZOddfWCYv9rasD8D2TRv3X5nxybk65xugtuio8oRnbSqRhJpeo8RnsotcsxqN2X%2FF8Gh83Wehfxc24bea0WwU7rlkuE9C%2B%2BPazMNIDuopSWEyzUP5sUSYNNCeRFWaqFLEccEH269Ucmx%2BuUr%2BBMLUVLcJ8oT6KCxRnyPmQrWYjaNniemFboOlOCCOV3mHRFQGGMBzlH82pn18r7Jgo5EWnr2NDhY9MxOShq8AdHagRCmvLgFpSFOHz7oibRTeOw0%2BqrCaFSQA2G3THkIQ9V2oyoa3ZAG29sk7olVjnNRkV8AeNDmaJmuU5fuik1QOfdq4b3lLcM5waw2DRTy3q%2BFrfHf4yMkUVK5OMKEGsibWm95cFHsKitY4mUY86nYRRzeN1RJGM6hJEt8yGobgqYz7zJ59RqCVs6%2Bx%2BvSOrrptQ2R%2FCNPh%2FaK19iR5G2mBmw03Fh18Kna0QChIwpOlb84PKWjBp1pD0wh1W0aqeg25iQG%2FEwiealwgY6pgEt0H7hkYn4AQysUIziKmTaGpYU7g90NMYW8W1QkB5pfawTrQyJBVFo1hNODgYJ%2FD7nE2RkNSzASvpQsVpICKEz0Sf%2Fm%2Bk1RxfJwJOAKujQCuL6u5S8ABJhmNmAST6R%2FIrWKHSg4Og1%2BravQO8Hw9mFRRuE3WC2VJAKzVWcf97pCGzYKRT382ML2zUDE3OghisF6%2FXrjfqVi6Q1GTLK%2BBpuwWRSF2gD&X-Amz-Signature=1c2ac94cf99ddc55aec9b140c40093ee134943e08ae944d697d2707b4296b5d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIWTWQS%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpULiJEjbxhgP8VO2VSZFAhRYb0Q2gUBfFCHIvoW1U1AiBEc8EtEyYFz7u%2BGrDl10%2ByNzFLecVc4Ob%2F5q2ecRTjliqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACuot7wlc3i02EsgKtwD2T9Mj3m3QADkmbTdHBLNz7dwrh78GL9%2FPnyK1MliOmU9u%2FEVYAevzubGgeG%2Fxhg0dk3De9SVzJHvPOIy6sT%2BOmxTBgFmvot9A%2F0yOezRyKQmT%2BLyWnwXd5zQBe0j0MttDN9wX%2F%2FzJM6NlZOddfWCYv9rasD8D2TRv3X5nxybk65xugtuio8oRnbSqRhJpeo8RnsotcsxqN2X%2FF8Gh83Wehfxc24bea0WwU7rlkuE9C%2B%2BPazMNIDuopSWEyzUP5sUSYNNCeRFWaqFLEccEH269Ucmx%2BuUr%2BBMLUVLcJ8oT6KCxRnyPmQrWYjaNniemFboOlOCCOV3mHRFQGGMBzlH82pn18r7Jgo5EWnr2NDhY9MxOShq8AdHagRCmvLgFpSFOHz7oibRTeOw0%2BqrCaFSQA2G3THkIQ9V2oyoa3ZAG29sk7olVjnNRkV8AeNDmaJmuU5fuik1QOfdq4b3lLcM5waw2DRTy3q%2BFrfHf4yMkUVK5OMKEGsibWm95cFHsKitY4mUY86nYRRzeN1RJGM6hJEt8yGobgqYz7zJ59RqCVs6%2Bx%2BvSOrrptQ2R%2FCNPh%2FaK19iR5G2mBmw03Fh18Kna0QChIwpOlb84PKWjBp1pD0wh1W0aqeg25iQG%2FEwiealwgY6pgEt0H7hkYn4AQysUIziKmTaGpYU7g90NMYW8W1QkB5pfawTrQyJBVFo1hNODgYJ%2FD7nE2RkNSzASvpQsVpICKEz0Sf%2Fm%2Bk1RxfJwJOAKujQCuL6u5S8ABJhmNmAST6R%2FIrWKHSg4Og1%2BravQO8Hw9mFRRuE3WC2VJAKzVWcf97pCGzYKRT382ML2zUDE3OghisF6%2FXrjfqVi6Q1GTLK%2BBpuwWRSF2gD&X-Amz-Signature=22038bbc0affd7ca724cc36c70407d13e8608854c39e0d8b0003d9c8c4765756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIWTWQS%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpULiJEjbxhgP8VO2VSZFAhRYb0Q2gUBfFCHIvoW1U1AiBEc8EtEyYFz7u%2BGrDl10%2ByNzFLecVc4Ob%2F5q2ecRTjliqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACuot7wlc3i02EsgKtwD2T9Mj3m3QADkmbTdHBLNz7dwrh78GL9%2FPnyK1MliOmU9u%2FEVYAevzubGgeG%2Fxhg0dk3De9SVzJHvPOIy6sT%2BOmxTBgFmvot9A%2F0yOezRyKQmT%2BLyWnwXd5zQBe0j0MttDN9wX%2F%2FzJM6NlZOddfWCYv9rasD8D2TRv3X5nxybk65xugtuio8oRnbSqRhJpeo8RnsotcsxqN2X%2FF8Gh83Wehfxc24bea0WwU7rlkuE9C%2B%2BPazMNIDuopSWEyzUP5sUSYNNCeRFWaqFLEccEH269Ucmx%2BuUr%2BBMLUVLcJ8oT6KCxRnyPmQrWYjaNniemFboOlOCCOV3mHRFQGGMBzlH82pn18r7Jgo5EWnr2NDhY9MxOShq8AdHagRCmvLgFpSFOHz7oibRTeOw0%2BqrCaFSQA2G3THkIQ9V2oyoa3ZAG29sk7olVjnNRkV8AeNDmaJmuU5fuik1QOfdq4b3lLcM5waw2DRTy3q%2BFrfHf4yMkUVK5OMKEGsibWm95cFHsKitY4mUY86nYRRzeN1RJGM6hJEt8yGobgqYz7zJ59RqCVs6%2Bx%2BvSOrrptQ2R%2FCNPh%2FaK19iR5G2mBmw03Fh18Kna0QChIwpOlb84PKWjBp1pD0wh1W0aqeg25iQG%2FEwiealwgY6pgEt0H7hkYn4AQysUIziKmTaGpYU7g90NMYW8W1QkB5pfawTrQyJBVFo1hNODgYJ%2FD7nE2RkNSzASvpQsVpICKEz0Sf%2Fm%2Bk1RxfJwJOAKujQCuL6u5S8ABJhmNmAST6R%2FIrWKHSg4Og1%2BravQO8Hw9mFRRuE3WC2VJAKzVWcf97pCGzYKRT382ML2zUDE3OghisF6%2FXrjfqVi6Q1GTLK%2BBpuwWRSF2gD&X-Amz-Signature=ecbf35d7efb46d08e67af502950bf6f9afc3de6a49e8e96765a98e91798d0f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIWTWQS%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpULiJEjbxhgP8VO2VSZFAhRYb0Q2gUBfFCHIvoW1U1AiBEc8EtEyYFz7u%2BGrDl10%2ByNzFLecVc4Ob%2F5q2ecRTjliqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACuot7wlc3i02EsgKtwD2T9Mj3m3QADkmbTdHBLNz7dwrh78GL9%2FPnyK1MliOmU9u%2FEVYAevzubGgeG%2Fxhg0dk3De9SVzJHvPOIy6sT%2BOmxTBgFmvot9A%2F0yOezRyKQmT%2BLyWnwXd5zQBe0j0MttDN9wX%2F%2FzJM6NlZOddfWCYv9rasD8D2TRv3X5nxybk65xugtuio8oRnbSqRhJpeo8RnsotcsxqN2X%2FF8Gh83Wehfxc24bea0WwU7rlkuE9C%2B%2BPazMNIDuopSWEyzUP5sUSYNNCeRFWaqFLEccEH269Ucmx%2BuUr%2BBMLUVLcJ8oT6KCxRnyPmQrWYjaNniemFboOlOCCOV3mHRFQGGMBzlH82pn18r7Jgo5EWnr2NDhY9MxOShq8AdHagRCmvLgFpSFOHz7oibRTeOw0%2BqrCaFSQA2G3THkIQ9V2oyoa3ZAG29sk7olVjnNRkV8AeNDmaJmuU5fuik1QOfdq4b3lLcM5waw2DRTy3q%2BFrfHf4yMkUVK5OMKEGsibWm95cFHsKitY4mUY86nYRRzeN1RJGM6hJEt8yGobgqYz7zJ59RqCVs6%2Bx%2BvSOrrptQ2R%2FCNPh%2FaK19iR5G2mBmw03Fh18Kna0QChIwpOlb84PKWjBp1pD0wh1W0aqeg25iQG%2FEwiealwgY6pgEt0H7hkYn4AQysUIziKmTaGpYU7g90NMYW8W1QkB5pfawTrQyJBVFo1hNODgYJ%2FD7nE2RkNSzASvpQsVpICKEz0Sf%2Fm%2Bk1RxfJwJOAKujQCuL6u5S8ABJhmNmAST6R%2FIrWKHSg4Og1%2BravQO8Hw9mFRRuE3WC2VJAKzVWcf97pCGzYKRT382ML2zUDE3OghisF6%2FXrjfqVi6Q1GTLK%2BBpuwWRSF2gD&X-Amz-Signature=f8568c4d2ec57584b9b5703ea8455dce85aa2e605694aaff277cb564b6e540af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
