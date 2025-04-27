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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJQYH4L3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDN0L5SQuWAHzCAiloQLCdC%2BLBs0UxcHMIRDewDsVi8LAiEAuqE1PAKAJgAhhEg%2BHU2XDljtI7ZYevqbfTzoyFXxiXwq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDENkG50nFMKkKi5VLyrcA%2FjwTPbI5oKR6ToiDxlet54fMKqhDen%2FuV4WZlWdS1AvtDlXQ9Kc9KFeFc9hJG2y4GezyZ6t77DB5dwI4G4%2BANENcEDWd0EANMLIS4FFfPsqmRrtP4E8RnUW7pW3spWUT7%2FyvLFKLHbOxVe2ujDBWBK%2FxFnEGSaaTmGePbM97SxsV0vZFiaQEF%2BhazDIjx0JOxg4rCaDLV6QiQwiAW2fpHL1EWqRoN2Lk3CifGiN2cu6EI6d2l%2Bac6c8UBUZviW3PEQqnJ9%2FU09FfILtV83f4LiudFR%2BywXRj9cOsA01U0sMsIBp3tZeYMCW%2BHPM35xg%2B8tMsktWZeDSHsPmKl1K3ZSPFbB3r9xZhz7WCcAVYBRondE6QVa9ypniRIoR5q0%2F4v0Bv3e7tjGPtPN4V4NMCWifhkbobiaVw4ksgSYUuMf98LoMAxkaOi33JpTvqUwZDvUUWh4hkhu7DD2Xn5QfpCnSwUp8g%2FjpTSCmSeJf7y7dl5nSPkZvnIMTttU7qvbDfw18n4c49hrWoAIdEwZtQwnZnKvMCjbNVwtPAQ0MtFpqfaKB51mQIbYfoYhLCyfthC2ujb1pF2s42QOZJhm1sr%2FZQVKXnU2jMn9rMLXcErIBtHflcUr5vLTR7qYqMJHttsAGOqUBZoq%2F67JcPmcQrWvd22i6oBNMN%2BEQ%2FWqzSie7625uc31%2FIQHyaZySeiSE2l6suvciId%2FOtethetodqcegGtZc6OR%2Bh9gU4D2KcSzeGhH1iQYGTL%2B0EJ3DcFJdsFZ42cP9EQKZms8t5Bl6F7BL3sljnMyBMSyYl2DlJsV3ikW9OtG4XEoxRHNF007jo3oOdMNh4OByXjlQUp6RtLpf1vvL8uBg%2Bn7R&X-Amz-Signature=b3f0d6765cbb06bedc9c33b1426ffd07401f7e998dec86fd1cab0fa4f102c5f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJQYH4L3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDN0L5SQuWAHzCAiloQLCdC%2BLBs0UxcHMIRDewDsVi8LAiEAuqE1PAKAJgAhhEg%2BHU2XDljtI7ZYevqbfTzoyFXxiXwq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDENkG50nFMKkKi5VLyrcA%2FjwTPbI5oKR6ToiDxlet54fMKqhDen%2FuV4WZlWdS1AvtDlXQ9Kc9KFeFc9hJG2y4GezyZ6t77DB5dwI4G4%2BANENcEDWd0EANMLIS4FFfPsqmRrtP4E8RnUW7pW3spWUT7%2FyvLFKLHbOxVe2ujDBWBK%2FxFnEGSaaTmGePbM97SxsV0vZFiaQEF%2BhazDIjx0JOxg4rCaDLV6QiQwiAW2fpHL1EWqRoN2Lk3CifGiN2cu6EI6d2l%2Bac6c8UBUZviW3PEQqnJ9%2FU09FfILtV83f4LiudFR%2BywXRj9cOsA01U0sMsIBp3tZeYMCW%2BHPM35xg%2B8tMsktWZeDSHsPmKl1K3ZSPFbB3r9xZhz7WCcAVYBRondE6QVa9ypniRIoR5q0%2F4v0Bv3e7tjGPtPN4V4NMCWifhkbobiaVw4ksgSYUuMf98LoMAxkaOi33JpTvqUwZDvUUWh4hkhu7DD2Xn5QfpCnSwUp8g%2FjpTSCmSeJf7y7dl5nSPkZvnIMTttU7qvbDfw18n4c49hrWoAIdEwZtQwnZnKvMCjbNVwtPAQ0MtFpqfaKB51mQIbYfoYhLCyfthC2ujb1pF2s42QOZJhm1sr%2FZQVKXnU2jMn9rMLXcErIBtHflcUr5vLTR7qYqMJHttsAGOqUBZoq%2F67JcPmcQrWvd22i6oBNMN%2BEQ%2FWqzSie7625uc31%2FIQHyaZySeiSE2l6suvciId%2FOtethetodqcegGtZc6OR%2Bh9gU4D2KcSzeGhH1iQYGTL%2B0EJ3DcFJdsFZ42cP9EQKZms8t5Bl6F7BL3sljnMyBMSyYl2DlJsV3ikW9OtG4XEoxRHNF007jo3oOdMNh4OByXjlQUp6RtLpf1vvL8uBg%2Bn7R&X-Amz-Signature=4130d30a35e84676ac2a94c81d494e8ab02e620861b03eeccb21cfcf20611dae&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJQYH4L3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDN0L5SQuWAHzCAiloQLCdC%2BLBs0UxcHMIRDewDsVi8LAiEAuqE1PAKAJgAhhEg%2BHU2XDljtI7ZYevqbfTzoyFXxiXwq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDENkG50nFMKkKi5VLyrcA%2FjwTPbI5oKR6ToiDxlet54fMKqhDen%2FuV4WZlWdS1AvtDlXQ9Kc9KFeFc9hJG2y4GezyZ6t77DB5dwI4G4%2BANENcEDWd0EANMLIS4FFfPsqmRrtP4E8RnUW7pW3spWUT7%2FyvLFKLHbOxVe2ujDBWBK%2FxFnEGSaaTmGePbM97SxsV0vZFiaQEF%2BhazDIjx0JOxg4rCaDLV6QiQwiAW2fpHL1EWqRoN2Lk3CifGiN2cu6EI6d2l%2Bac6c8UBUZviW3PEQqnJ9%2FU09FfILtV83f4LiudFR%2BywXRj9cOsA01U0sMsIBp3tZeYMCW%2BHPM35xg%2B8tMsktWZeDSHsPmKl1K3ZSPFbB3r9xZhz7WCcAVYBRondE6QVa9ypniRIoR5q0%2F4v0Bv3e7tjGPtPN4V4NMCWifhkbobiaVw4ksgSYUuMf98LoMAxkaOi33JpTvqUwZDvUUWh4hkhu7DD2Xn5QfpCnSwUp8g%2FjpTSCmSeJf7y7dl5nSPkZvnIMTttU7qvbDfw18n4c49hrWoAIdEwZtQwnZnKvMCjbNVwtPAQ0MtFpqfaKB51mQIbYfoYhLCyfthC2ujb1pF2s42QOZJhm1sr%2FZQVKXnU2jMn9rMLXcErIBtHflcUr5vLTR7qYqMJHttsAGOqUBZoq%2F67JcPmcQrWvd22i6oBNMN%2BEQ%2FWqzSie7625uc31%2FIQHyaZySeiSE2l6suvciId%2FOtethetodqcegGtZc6OR%2Bh9gU4D2KcSzeGhH1iQYGTL%2B0EJ3DcFJdsFZ42cP9EQKZms8t5Bl6F7BL3sljnMyBMSyYl2DlJsV3ikW9OtG4XEoxRHNF007jo3oOdMNh4OByXjlQUp6RtLpf1vvL8uBg%2Bn7R&X-Amz-Signature=86cb1c8d09331e88a0bedc115254b74eca2d86bdb2ad88403b0c299a4a998907&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJQYH4L3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDN0L5SQuWAHzCAiloQLCdC%2BLBs0UxcHMIRDewDsVi8LAiEAuqE1PAKAJgAhhEg%2BHU2XDljtI7ZYevqbfTzoyFXxiXwq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDENkG50nFMKkKi5VLyrcA%2FjwTPbI5oKR6ToiDxlet54fMKqhDen%2FuV4WZlWdS1AvtDlXQ9Kc9KFeFc9hJG2y4GezyZ6t77DB5dwI4G4%2BANENcEDWd0EANMLIS4FFfPsqmRrtP4E8RnUW7pW3spWUT7%2FyvLFKLHbOxVe2ujDBWBK%2FxFnEGSaaTmGePbM97SxsV0vZFiaQEF%2BhazDIjx0JOxg4rCaDLV6QiQwiAW2fpHL1EWqRoN2Lk3CifGiN2cu6EI6d2l%2Bac6c8UBUZviW3PEQqnJ9%2FU09FfILtV83f4LiudFR%2BywXRj9cOsA01U0sMsIBp3tZeYMCW%2BHPM35xg%2B8tMsktWZeDSHsPmKl1K3ZSPFbB3r9xZhz7WCcAVYBRondE6QVa9ypniRIoR5q0%2F4v0Bv3e7tjGPtPN4V4NMCWifhkbobiaVw4ksgSYUuMf98LoMAxkaOi33JpTvqUwZDvUUWh4hkhu7DD2Xn5QfpCnSwUp8g%2FjpTSCmSeJf7y7dl5nSPkZvnIMTttU7qvbDfw18n4c49hrWoAIdEwZtQwnZnKvMCjbNVwtPAQ0MtFpqfaKB51mQIbYfoYhLCyfthC2ujb1pF2s42QOZJhm1sr%2FZQVKXnU2jMn9rMLXcErIBtHflcUr5vLTR7qYqMJHttsAGOqUBZoq%2F67JcPmcQrWvd22i6oBNMN%2BEQ%2FWqzSie7625uc31%2FIQHyaZySeiSE2l6suvciId%2FOtethetodqcegGtZc6OR%2Bh9gU4D2KcSzeGhH1iQYGTL%2B0EJ3DcFJdsFZ42cP9EQKZms8t5Bl6F7BL3sljnMyBMSyYl2DlJsV3ikW9OtG4XEoxRHNF007jo3oOdMNh4OByXjlQUp6RtLpf1vvL8uBg%2Bn7R&X-Amz-Signature=b71319f1fe1af1de5137c8eec1541b0cd59d802a1787e2a6795b43b243313d38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJQYH4L3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDN0L5SQuWAHzCAiloQLCdC%2BLBs0UxcHMIRDewDsVi8LAiEAuqE1PAKAJgAhhEg%2BHU2XDljtI7ZYevqbfTzoyFXxiXwq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDENkG50nFMKkKi5VLyrcA%2FjwTPbI5oKR6ToiDxlet54fMKqhDen%2FuV4WZlWdS1AvtDlXQ9Kc9KFeFc9hJG2y4GezyZ6t77DB5dwI4G4%2BANENcEDWd0EANMLIS4FFfPsqmRrtP4E8RnUW7pW3spWUT7%2FyvLFKLHbOxVe2ujDBWBK%2FxFnEGSaaTmGePbM97SxsV0vZFiaQEF%2BhazDIjx0JOxg4rCaDLV6QiQwiAW2fpHL1EWqRoN2Lk3CifGiN2cu6EI6d2l%2Bac6c8UBUZviW3PEQqnJ9%2FU09FfILtV83f4LiudFR%2BywXRj9cOsA01U0sMsIBp3tZeYMCW%2BHPM35xg%2B8tMsktWZeDSHsPmKl1K3ZSPFbB3r9xZhz7WCcAVYBRondE6QVa9ypniRIoR5q0%2F4v0Bv3e7tjGPtPN4V4NMCWifhkbobiaVw4ksgSYUuMf98LoMAxkaOi33JpTvqUwZDvUUWh4hkhu7DD2Xn5QfpCnSwUp8g%2FjpTSCmSeJf7y7dl5nSPkZvnIMTttU7qvbDfw18n4c49hrWoAIdEwZtQwnZnKvMCjbNVwtPAQ0MtFpqfaKB51mQIbYfoYhLCyfthC2ujb1pF2s42QOZJhm1sr%2FZQVKXnU2jMn9rMLXcErIBtHflcUr5vLTR7qYqMJHttsAGOqUBZoq%2F67JcPmcQrWvd22i6oBNMN%2BEQ%2FWqzSie7625uc31%2FIQHyaZySeiSE2l6suvciId%2FOtethetodqcegGtZc6OR%2Bh9gU4D2KcSzeGhH1iQYGTL%2B0EJ3DcFJdsFZ42cP9EQKZms8t5Bl6F7BL3sljnMyBMSyYl2DlJsV3ikW9OtG4XEoxRHNF007jo3oOdMNh4OByXjlQUp6RtLpf1vvL8uBg%2Bn7R&X-Amz-Signature=478159eafb4eb79ff977731ea5921e763a2b184e6dd17fee177db781e2f50d41&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
