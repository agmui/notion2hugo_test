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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAQHGVN2%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC2qxDRHEXh3QoarpV71v5t83BFaAKJwV%2FgaqKCPy1AYgIgVc4M2XNoznaLroCClYpwLExOVRRzGqRduPkQXWcbd%2BEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKwEITI0zSGC8aIpXircAygvhSlgio%2Bi%2Bos%2Bq9B7djsTRComFiAVDwj3y9I8gzij9grzoB1B5MrQB6MYieQiHR%2BXjDuh38M2rzY%2BHOlwgxiD51boQJQZ0wwl3bj2B%2BnTH4iljcii6lczNJIV7Uwut32NagwwO1dbIQSPc4NVM1sVuxlqatYhUnir84bpEqT%2BCWpaha8%2Fg1CvgW0rJF49PecOEVfPNH5fdM%2BJRRo2qxeTdKK7wZOWLVrnte0vg91I19nX243DPcSqDgXV1hfsVrzIhEp0TcIsxlTFJf3z77M9n1sDBvEXjfmiKZpPiogOFjCWkw7SsYaFtv26p0s7hT3jSxS0WGH8WcJCdLWJBOWZmWrHAl26J1S2f33bf7mvwJfsqtokoQqzL2mKBsVAMfKPRHSw9qaxdNXpvOENtxHFZEIHDbzLX%2FiHUuLX3hBaDnX85ZUuTkVyaYTUEB19nlQ%2BVmZNjylApWXlKEzvIoP%2FDHpWuWx9M0xKB%2B3Iy%2F%2B%2BM6PZrjH%2BDH0EiPzZootRiV4p2O4nyoc9HleqAsKzfpZajpBC8TS9UX3Tw8Y9QxcSL%2BwfYbxV8XVhfw%2BAU9R9%2BbXy93kDl9qEgOoVk38noq0jU4FAqJHGnxPqgYaXCsxbyS8iic%2BxZSi4y1XuMLznmsgGOqUBgs30X%2BTJ9f10vj%2B8FOHbXaDtlowxPhW%2F565h6LYXvo250Hoe64z3aryy%2BgIaxTOSiFg3CSdjevO0HYsj647LU5H1zru1hdJwKSb1XP06RK9rATLbZQcbZ%2Bz58OrqcH7gRN21zYPCVk28dm5odILx4o3m7slrNzm9voN5TUrn9ghkLgisjE5rbHoLw0eZt3X%2F6auWBCAoI52Bqse8u7fF0p0hXp82&X-Amz-Signature=2fc15fd0a56e6241fa8ff235d4d5d4d76b45d14e4da6d662ef91111fc6e846f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAQHGVN2%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC2qxDRHEXh3QoarpV71v5t83BFaAKJwV%2FgaqKCPy1AYgIgVc4M2XNoznaLroCClYpwLExOVRRzGqRduPkQXWcbd%2BEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKwEITI0zSGC8aIpXircAygvhSlgio%2Bi%2Bos%2Bq9B7djsTRComFiAVDwj3y9I8gzij9grzoB1B5MrQB6MYieQiHR%2BXjDuh38M2rzY%2BHOlwgxiD51boQJQZ0wwl3bj2B%2BnTH4iljcii6lczNJIV7Uwut32NagwwO1dbIQSPc4NVM1sVuxlqatYhUnir84bpEqT%2BCWpaha8%2Fg1CvgW0rJF49PecOEVfPNH5fdM%2BJRRo2qxeTdKK7wZOWLVrnte0vg91I19nX243DPcSqDgXV1hfsVrzIhEp0TcIsxlTFJf3z77M9n1sDBvEXjfmiKZpPiogOFjCWkw7SsYaFtv26p0s7hT3jSxS0WGH8WcJCdLWJBOWZmWrHAl26J1S2f33bf7mvwJfsqtokoQqzL2mKBsVAMfKPRHSw9qaxdNXpvOENtxHFZEIHDbzLX%2FiHUuLX3hBaDnX85ZUuTkVyaYTUEB19nlQ%2BVmZNjylApWXlKEzvIoP%2FDHpWuWx9M0xKB%2B3Iy%2F%2B%2BM6PZrjH%2BDH0EiPzZootRiV4p2O4nyoc9HleqAsKzfpZajpBC8TS9UX3Tw8Y9QxcSL%2BwfYbxV8XVhfw%2BAU9R9%2BbXy93kDl9qEgOoVk38noq0jU4FAqJHGnxPqgYaXCsxbyS8iic%2BxZSi4y1XuMLznmsgGOqUBgs30X%2BTJ9f10vj%2B8FOHbXaDtlowxPhW%2F565h6LYXvo250Hoe64z3aryy%2BgIaxTOSiFg3CSdjevO0HYsj647LU5H1zru1hdJwKSb1XP06RK9rATLbZQcbZ%2Bz58OrqcH7gRN21zYPCVk28dm5odILx4o3m7slrNzm9voN5TUrn9ghkLgisjE5rbHoLw0eZt3X%2F6auWBCAoI52Bqse8u7fF0p0hXp82&X-Amz-Signature=ca6536cf2dc8339234bad4a9aaa221cbeab2f4e82d5ac3f992d6a3079879f4ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAQHGVN2%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC2qxDRHEXh3QoarpV71v5t83BFaAKJwV%2FgaqKCPy1AYgIgVc4M2XNoznaLroCClYpwLExOVRRzGqRduPkQXWcbd%2BEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKwEITI0zSGC8aIpXircAygvhSlgio%2Bi%2Bos%2Bq9B7djsTRComFiAVDwj3y9I8gzij9grzoB1B5MrQB6MYieQiHR%2BXjDuh38M2rzY%2BHOlwgxiD51boQJQZ0wwl3bj2B%2BnTH4iljcii6lczNJIV7Uwut32NagwwO1dbIQSPc4NVM1sVuxlqatYhUnir84bpEqT%2BCWpaha8%2Fg1CvgW0rJF49PecOEVfPNH5fdM%2BJRRo2qxeTdKK7wZOWLVrnte0vg91I19nX243DPcSqDgXV1hfsVrzIhEp0TcIsxlTFJf3z77M9n1sDBvEXjfmiKZpPiogOFjCWkw7SsYaFtv26p0s7hT3jSxS0WGH8WcJCdLWJBOWZmWrHAl26J1S2f33bf7mvwJfsqtokoQqzL2mKBsVAMfKPRHSw9qaxdNXpvOENtxHFZEIHDbzLX%2FiHUuLX3hBaDnX85ZUuTkVyaYTUEB19nlQ%2BVmZNjylApWXlKEzvIoP%2FDHpWuWx9M0xKB%2B3Iy%2F%2B%2BM6PZrjH%2BDH0EiPzZootRiV4p2O4nyoc9HleqAsKzfpZajpBC8TS9UX3Tw8Y9QxcSL%2BwfYbxV8XVhfw%2BAU9R9%2BbXy93kDl9qEgOoVk38noq0jU4FAqJHGnxPqgYaXCsxbyS8iic%2BxZSi4y1XuMLznmsgGOqUBgs30X%2BTJ9f10vj%2B8FOHbXaDtlowxPhW%2F565h6LYXvo250Hoe64z3aryy%2BgIaxTOSiFg3CSdjevO0HYsj647LU5H1zru1hdJwKSb1XP06RK9rATLbZQcbZ%2Bz58OrqcH7gRN21zYPCVk28dm5odILx4o3m7slrNzm9voN5TUrn9ghkLgisjE5rbHoLw0eZt3X%2F6auWBCAoI52Bqse8u7fF0p0hXp82&X-Amz-Signature=0eb871eae84e2462da2a0dced50aad9e33491b6bc1d1c0c1b80bc309333e15c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAQHGVN2%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC2qxDRHEXh3QoarpV71v5t83BFaAKJwV%2FgaqKCPy1AYgIgVc4M2XNoznaLroCClYpwLExOVRRzGqRduPkQXWcbd%2BEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKwEITI0zSGC8aIpXircAygvhSlgio%2Bi%2Bos%2Bq9B7djsTRComFiAVDwj3y9I8gzij9grzoB1B5MrQB6MYieQiHR%2BXjDuh38M2rzY%2BHOlwgxiD51boQJQZ0wwl3bj2B%2BnTH4iljcii6lczNJIV7Uwut32NagwwO1dbIQSPc4NVM1sVuxlqatYhUnir84bpEqT%2BCWpaha8%2Fg1CvgW0rJF49PecOEVfPNH5fdM%2BJRRo2qxeTdKK7wZOWLVrnte0vg91I19nX243DPcSqDgXV1hfsVrzIhEp0TcIsxlTFJf3z77M9n1sDBvEXjfmiKZpPiogOFjCWkw7SsYaFtv26p0s7hT3jSxS0WGH8WcJCdLWJBOWZmWrHAl26J1S2f33bf7mvwJfsqtokoQqzL2mKBsVAMfKPRHSw9qaxdNXpvOENtxHFZEIHDbzLX%2FiHUuLX3hBaDnX85ZUuTkVyaYTUEB19nlQ%2BVmZNjylApWXlKEzvIoP%2FDHpWuWx9M0xKB%2B3Iy%2F%2B%2BM6PZrjH%2BDH0EiPzZootRiV4p2O4nyoc9HleqAsKzfpZajpBC8TS9UX3Tw8Y9QxcSL%2BwfYbxV8XVhfw%2BAU9R9%2BbXy93kDl9qEgOoVk38noq0jU4FAqJHGnxPqgYaXCsxbyS8iic%2BxZSi4y1XuMLznmsgGOqUBgs30X%2BTJ9f10vj%2B8FOHbXaDtlowxPhW%2F565h6LYXvo250Hoe64z3aryy%2BgIaxTOSiFg3CSdjevO0HYsj647LU5H1zru1hdJwKSb1XP06RK9rATLbZQcbZ%2Bz58OrqcH7gRN21zYPCVk28dm5odILx4o3m7slrNzm9voN5TUrn9ghkLgisjE5rbHoLw0eZt3X%2F6auWBCAoI52Bqse8u7fF0p0hXp82&X-Amz-Signature=5656814d74c5099e88d325269588d76a8a0d8f1d9538592db004c01a1c699ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAQHGVN2%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC2qxDRHEXh3QoarpV71v5t83BFaAKJwV%2FgaqKCPy1AYgIgVc4M2XNoznaLroCClYpwLExOVRRzGqRduPkQXWcbd%2BEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKwEITI0zSGC8aIpXircAygvhSlgio%2Bi%2Bos%2Bq9B7djsTRComFiAVDwj3y9I8gzij9grzoB1B5MrQB6MYieQiHR%2BXjDuh38M2rzY%2BHOlwgxiD51boQJQZ0wwl3bj2B%2BnTH4iljcii6lczNJIV7Uwut32NagwwO1dbIQSPc4NVM1sVuxlqatYhUnir84bpEqT%2BCWpaha8%2Fg1CvgW0rJF49PecOEVfPNH5fdM%2BJRRo2qxeTdKK7wZOWLVrnte0vg91I19nX243DPcSqDgXV1hfsVrzIhEp0TcIsxlTFJf3z77M9n1sDBvEXjfmiKZpPiogOFjCWkw7SsYaFtv26p0s7hT3jSxS0WGH8WcJCdLWJBOWZmWrHAl26J1S2f33bf7mvwJfsqtokoQqzL2mKBsVAMfKPRHSw9qaxdNXpvOENtxHFZEIHDbzLX%2FiHUuLX3hBaDnX85ZUuTkVyaYTUEB19nlQ%2BVmZNjylApWXlKEzvIoP%2FDHpWuWx9M0xKB%2B3Iy%2F%2B%2BM6PZrjH%2BDH0EiPzZootRiV4p2O4nyoc9HleqAsKzfpZajpBC8TS9UX3Tw8Y9QxcSL%2BwfYbxV8XVhfw%2BAU9R9%2BbXy93kDl9qEgOoVk38noq0jU4FAqJHGnxPqgYaXCsxbyS8iic%2BxZSi4y1XuMLznmsgGOqUBgs30X%2BTJ9f10vj%2B8FOHbXaDtlowxPhW%2F565h6LYXvo250Hoe64z3aryy%2BgIaxTOSiFg3CSdjevO0HYsj647LU5H1zru1hdJwKSb1XP06RK9rATLbZQcbZ%2Bz58OrqcH7gRN21zYPCVk28dm5odILx4o3m7slrNzm9voN5TUrn9ghkLgisjE5rbHoLw0eZt3X%2F6auWBCAoI52Bqse8u7fF0p0hXp82&X-Amz-Signature=b4ec808fb66b3565aecea0a7387808df16a8849600d7d402b58fc4ce270732b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
