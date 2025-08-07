---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3FCXM2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCICXU2hltFor%2FcSnIKrqkDpUirir09n0zv2DjihIZN4pSAiEAkMu2vwfGNrkGZgzXpvL7huMNFORIL0SU5i7yVpU7AjQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2V9cX2ZfGi99GbjircA0SkiHfzBD2jwEmYLdI3KKCGN6CE9kI8f0jEreRVjC1dhe3u0v0wwRLIsAbkJUUAYOsGT9DcTBCYwN31PHgavszNDmi5SqA0R86z2GDsOorXqORC29IQFqJ2lPW41cWjd%2Fy1%2BjcLl0yM3%2BoIBjIAU2IwBt6LCYYDY9Jjtdvz%2BEbYiygnyU1a15RMZWRXLwmRTCYqGPnybjpNarqj4G2Ho2kQ0M%2F7mV2T%2FBw8RYsClTVNq1E9Wh5%2F5tnCXwQB0m5xXbbVHvMnRYkfeN%2BCvrBbbzD6Ak%2BhV6foclJYjI2aa1dgs0EI1lyqFUbEL%2Bm9oaEm5dy3odu0t4xW50VsNc%2BHSRxr7qMSzenrIPBp4v1s8mDyNhrka4SoxMB7uK6Ek8wIzjy7wJWYARLnP3WXFbLTAJX7PW%2BT05qziT%2BqgtyHPuph5GmHxkHlsELhvodKslKI%2BklGSZS483S6Dl4haoqARxdleN9vlQolBCFUOGPNnO1RN%2F5HOK7RoaD1bSRbKOAT3ak41qUxhIg3OZKWNHH1%2FdMV1ajo4uwUveg6K4F9ReIIp26ZFsO%2BKerxU17DcUBrQq6qKvN3vWrravmJ1SUaMvz2%2F0bLdvYFGPAjoYTOefUTmXQ4PQ%2BKBah9UfvLMOft08QGOqUBjL%2BZQU34K7%2FPCHF16l6lR8wobO5pZfA20eB25R7Np69KIsAL6tlGbuPtqiMF%2Bm%2B5n1FENj6b3IkDGmEurAg4XM1VMq1ByWGckE51JR40AP2V1KPTWoh02bSizFdfIKf2TjCWaRoBJvdyLZKX4qrOVaQCtqYVCZ2ibNTj8hulS2AOJod2Ye36d%2Bi2DxGrH6uBiOjDYEtqZxAhgBlMakRQLLC7wjVG&X-Amz-Signature=ef3c9517ea7e7905df11fe30932c0884692eb9757b2ae19b560397d0d0692097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3FCXM2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCICXU2hltFor%2FcSnIKrqkDpUirir09n0zv2DjihIZN4pSAiEAkMu2vwfGNrkGZgzXpvL7huMNFORIL0SU5i7yVpU7AjQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2V9cX2ZfGi99GbjircA0SkiHfzBD2jwEmYLdI3KKCGN6CE9kI8f0jEreRVjC1dhe3u0v0wwRLIsAbkJUUAYOsGT9DcTBCYwN31PHgavszNDmi5SqA0R86z2GDsOorXqORC29IQFqJ2lPW41cWjd%2Fy1%2BjcLl0yM3%2BoIBjIAU2IwBt6LCYYDY9Jjtdvz%2BEbYiygnyU1a15RMZWRXLwmRTCYqGPnybjpNarqj4G2Ho2kQ0M%2F7mV2T%2FBw8RYsClTVNq1E9Wh5%2F5tnCXwQB0m5xXbbVHvMnRYkfeN%2BCvrBbbzD6Ak%2BhV6foclJYjI2aa1dgs0EI1lyqFUbEL%2Bm9oaEm5dy3odu0t4xW50VsNc%2BHSRxr7qMSzenrIPBp4v1s8mDyNhrka4SoxMB7uK6Ek8wIzjy7wJWYARLnP3WXFbLTAJX7PW%2BT05qziT%2BqgtyHPuph5GmHxkHlsELhvodKslKI%2BklGSZS483S6Dl4haoqARxdleN9vlQolBCFUOGPNnO1RN%2F5HOK7RoaD1bSRbKOAT3ak41qUxhIg3OZKWNHH1%2FdMV1ajo4uwUveg6K4F9ReIIp26ZFsO%2BKerxU17DcUBrQq6qKvN3vWrravmJ1SUaMvz2%2F0bLdvYFGPAjoYTOefUTmXQ4PQ%2BKBah9UfvLMOft08QGOqUBjL%2BZQU34K7%2FPCHF16l6lR8wobO5pZfA20eB25R7Np69KIsAL6tlGbuPtqiMF%2Bm%2B5n1FENj6b3IkDGmEurAg4XM1VMq1ByWGckE51JR40AP2V1KPTWoh02bSizFdfIKf2TjCWaRoBJvdyLZKX4qrOVaQCtqYVCZ2ibNTj8hulS2AOJod2Ye36d%2Bi2DxGrH6uBiOjDYEtqZxAhgBlMakRQLLC7wjVG&X-Amz-Signature=abd947df7b36a644100f1465798638ea6a0ae2fc062e7f816c525caa78640651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3FCXM2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCICXU2hltFor%2FcSnIKrqkDpUirir09n0zv2DjihIZN4pSAiEAkMu2vwfGNrkGZgzXpvL7huMNFORIL0SU5i7yVpU7AjQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2V9cX2ZfGi99GbjircA0SkiHfzBD2jwEmYLdI3KKCGN6CE9kI8f0jEreRVjC1dhe3u0v0wwRLIsAbkJUUAYOsGT9DcTBCYwN31PHgavszNDmi5SqA0R86z2GDsOorXqORC29IQFqJ2lPW41cWjd%2Fy1%2BjcLl0yM3%2BoIBjIAU2IwBt6LCYYDY9Jjtdvz%2BEbYiygnyU1a15RMZWRXLwmRTCYqGPnybjpNarqj4G2Ho2kQ0M%2F7mV2T%2FBw8RYsClTVNq1E9Wh5%2F5tnCXwQB0m5xXbbVHvMnRYkfeN%2BCvrBbbzD6Ak%2BhV6foclJYjI2aa1dgs0EI1lyqFUbEL%2Bm9oaEm5dy3odu0t4xW50VsNc%2BHSRxr7qMSzenrIPBp4v1s8mDyNhrka4SoxMB7uK6Ek8wIzjy7wJWYARLnP3WXFbLTAJX7PW%2BT05qziT%2BqgtyHPuph5GmHxkHlsELhvodKslKI%2BklGSZS483S6Dl4haoqARxdleN9vlQolBCFUOGPNnO1RN%2F5HOK7RoaD1bSRbKOAT3ak41qUxhIg3OZKWNHH1%2FdMV1ajo4uwUveg6K4F9ReIIp26ZFsO%2BKerxU17DcUBrQq6qKvN3vWrravmJ1SUaMvz2%2F0bLdvYFGPAjoYTOefUTmXQ4PQ%2BKBah9UfvLMOft08QGOqUBjL%2BZQU34K7%2FPCHF16l6lR8wobO5pZfA20eB25R7Np69KIsAL6tlGbuPtqiMF%2Bm%2B5n1FENj6b3IkDGmEurAg4XM1VMq1ByWGckE51JR40AP2V1KPTWoh02bSizFdfIKf2TjCWaRoBJvdyLZKX4qrOVaQCtqYVCZ2ibNTj8hulS2AOJod2Ye36d%2Bi2DxGrH6uBiOjDYEtqZxAhgBlMakRQLLC7wjVG&X-Amz-Signature=c9bd1da1ee15735da55dca0aca75425b43a0f70f66c7caa25a29210dc9a4acb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3FCXM2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCICXU2hltFor%2FcSnIKrqkDpUirir09n0zv2DjihIZN4pSAiEAkMu2vwfGNrkGZgzXpvL7huMNFORIL0SU5i7yVpU7AjQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2V9cX2ZfGi99GbjircA0SkiHfzBD2jwEmYLdI3KKCGN6CE9kI8f0jEreRVjC1dhe3u0v0wwRLIsAbkJUUAYOsGT9DcTBCYwN31PHgavszNDmi5SqA0R86z2GDsOorXqORC29IQFqJ2lPW41cWjd%2Fy1%2BjcLl0yM3%2BoIBjIAU2IwBt6LCYYDY9Jjtdvz%2BEbYiygnyU1a15RMZWRXLwmRTCYqGPnybjpNarqj4G2Ho2kQ0M%2F7mV2T%2FBw8RYsClTVNq1E9Wh5%2F5tnCXwQB0m5xXbbVHvMnRYkfeN%2BCvrBbbzD6Ak%2BhV6foclJYjI2aa1dgs0EI1lyqFUbEL%2Bm9oaEm5dy3odu0t4xW50VsNc%2BHSRxr7qMSzenrIPBp4v1s8mDyNhrka4SoxMB7uK6Ek8wIzjy7wJWYARLnP3WXFbLTAJX7PW%2BT05qziT%2BqgtyHPuph5GmHxkHlsELhvodKslKI%2BklGSZS483S6Dl4haoqARxdleN9vlQolBCFUOGPNnO1RN%2F5HOK7RoaD1bSRbKOAT3ak41qUxhIg3OZKWNHH1%2FdMV1ajo4uwUveg6K4F9ReIIp26ZFsO%2BKerxU17DcUBrQq6qKvN3vWrravmJ1SUaMvz2%2F0bLdvYFGPAjoYTOefUTmXQ4PQ%2BKBah9UfvLMOft08QGOqUBjL%2BZQU34K7%2FPCHF16l6lR8wobO5pZfA20eB25R7Np69KIsAL6tlGbuPtqiMF%2Bm%2B5n1FENj6b3IkDGmEurAg4XM1VMq1ByWGckE51JR40AP2V1KPTWoh02bSizFdfIKf2TjCWaRoBJvdyLZKX4qrOVaQCtqYVCZ2ibNTj8hulS2AOJod2Ye36d%2Bi2DxGrH6uBiOjDYEtqZxAhgBlMakRQLLC7wjVG&X-Amz-Signature=7d14bf7f06cbbb05bc39a091c7ef1f594f32f10426bfb0495d30189172c1de55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3FCXM2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCICXU2hltFor%2FcSnIKrqkDpUirir09n0zv2DjihIZN4pSAiEAkMu2vwfGNrkGZgzXpvL7huMNFORIL0SU5i7yVpU7AjQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2V9cX2ZfGi99GbjircA0SkiHfzBD2jwEmYLdI3KKCGN6CE9kI8f0jEreRVjC1dhe3u0v0wwRLIsAbkJUUAYOsGT9DcTBCYwN31PHgavszNDmi5SqA0R86z2GDsOorXqORC29IQFqJ2lPW41cWjd%2Fy1%2BjcLl0yM3%2BoIBjIAU2IwBt6LCYYDY9Jjtdvz%2BEbYiygnyU1a15RMZWRXLwmRTCYqGPnybjpNarqj4G2Ho2kQ0M%2F7mV2T%2FBw8RYsClTVNq1E9Wh5%2F5tnCXwQB0m5xXbbVHvMnRYkfeN%2BCvrBbbzD6Ak%2BhV6foclJYjI2aa1dgs0EI1lyqFUbEL%2Bm9oaEm5dy3odu0t4xW50VsNc%2BHSRxr7qMSzenrIPBp4v1s8mDyNhrka4SoxMB7uK6Ek8wIzjy7wJWYARLnP3WXFbLTAJX7PW%2BT05qziT%2BqgtyHPuph5GmHxkHlsELhvodKslKI%2BklGSZS483S6Dl4haoqARxdleN9vlQolBCFUOGPNnO1RN%2F5HOK7RoaD1bSRbKOAT3ak41qUxhIg3OZKWNHH1%2FdMV1ajo4uwUveg6K4F9ReIIp26ZFsO%2BKerxU17DcUBrQq6qKvN3vWrravmJ1SUaMvz2%2F0bLdvYFGPAjoYTOefUTmXQ4PQ%2BKBah9UfvLMOft08QGOqUBjL%2BZQU34K7%2FPCHF16l6lR8wobO5pZfA20eB25R7Np69KIsAL6tlGbuPtqiMF%2Bm%2B5n1FENj6b3IkDGmEurAg4XM1VMq1ByWGckE51JR40AP2V1KPTWoh02bSizFdfIKf2TjCWaRoBJvdyLZKX4qrOVaQCtqYVCZ2ibNTj8hulS2AOJod2Ye36d%2Bi2DxGrH6uBiOjDYEtqZxAhgBlMakRQLLC7wjVG&X-Amz-Signature=25d5dcabce252f1620c5b08d9afcd73ba97d9fb2373b5aa2df9f11464267ffa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
