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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIJXDF6%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEGcSJQWJE5BeYvIkmHBkUMEbOA2Yt30TvRvvHH566lSAiEApB1HCtEqLI2RteIL2HcmTRHad9k5OEJVt6EbcwRsUwgqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqw76Rp0qvB%2FSujHircA%2FSZV8%2Bq6soAaWJm%2ByowCABOz2ZedhjwsmpuhUncTpg2P5HkqsbtVc64dcWINE2DpBI0OsacMiSI9HNbU9%2F64WNO6V3VtxjRRVAm7oJtf8zRbId5j%2F6FMNc2p9pB5T38KHoZS0hlqxj7Sjgj0JXaTPYaeDhutQnI8LYCXXeaEK8XoSqR3TjjqxXj2FJLEQJuTqVshwgeWHHCYWOZpgYf1voUsF6M3Ue2jGTh589dYDf1RzRgEJgEKx9DOlq9aKNTs5km2v4L0hwAAJiENhly8IweMjmMLhW9zHqT5pRY9X6y2QJpoY4UQdQV3RFPpOaklahqeuMJi08f5CF9IVuJob4AhWMEpxTa4ejyv7Yv%2F4TucRZm403LTu3YwNRy0fn7SkW1fsLhlQ4Ucxdh5QeI%2FZnqhdRZV0HU15y8gaMAAHqGr5TqELnpfeEw2oNxs%2FEYj7Z1YTEuF7Mk9FJrHNZrhTcTRe4girBt26jxfnpJnPW%2BGJAvOaIQhXBLyWT3QN4LWVNdq4a51WQhaKBV5uxeUEj0856pvmI3VrwGwhKayi6fCOD6TTowM%2FA4otpbRQzRgs%2BcoVGLcUwXu6xF1ZVeUtbI%2FtFgDbmoPq%2BncyjZtx8UpcNkdh493PM%2FjFoxMMKB38IGOqUBRZ2YYInUB6JMVf%2F6Zx3Eli9OcbUgbP3IV5yt9P%2BpuLy33%2B%2BlS6tBkYTozlu71X1rG2lRMJxL4RXdoBi5Gs3ronL%2BOPvcgotedxId1oMf9uZ%2B4mM3mcFtmVNl8IbNEnxSstRiHsfuy4uILcZCv%2F76mTcditfLXncBoTnqm4EuL5A%2F9FjFd4vVPLsB9u6ijnYq3W%2FbGZLp1LbhEvrz0R2mvTk4%2BvUf&X-Amz-Signature=e02235381667806fb27a507e3a79aea3f5377094fc6dda36becca560145a6b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIJXDF6%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEGcSJQWJE5BeYvIkmHBkUMEbOA2Yt30TvRvvHH566lSAiEApB1HCtEqLI2RteIL2HcmTRHad9k5OEJVt6EbcwRsUwgqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqw76Rp0qvB%2FSujHircA%2FSZV8%2Bq6soAaWJm%2ByowCABOz2ZedhjwsmpuhUncTpg2P5HkqsbtVc64dcWINE2DpBI0OsacMiSI9HNbU9%2F64WNO6V3VtxjRRVAm7oJtf8zRbId5j%2F6FMNc2p9pB5T38KHoZS0hlqxj7Sjgj0JXaTPYaeDhutQnI8LYCXXeaEK8XoSqR3TjjqxXj2FJLEQJuTqVshwgeWHHCYWOZpgYf1voUsF6M3Ue2jGTh589dYDf1RzRgEJgEKx9DOlq9aKNTs5km2v4L0hwAAJiENhly8IweMjmMLhW9zHqT5pRY9X6y2QJpoY4UQdQV3RFPpOaklahqeuMJi08f5CF9IVuJob4AhWMEpxTa4ejyv7Yv%2F4TucRZm403LTu3YwNRy0fn7SkW1fsLhlQ4Ucxdh5QeI%2FZnqhdRZV0HU15y8gaMAAHqGr5TqELnpfeEw2oNxs%2FEYj7Z1YTEuF7Mk9FJrHNZrhTcTRe4girBt26jxfnpJnPW%2BGJAvOaIQhXBLyWT3QN4LWVNdq4a51WQhaKBV5uxeUEj0856pvmI3VrwGwhKayi6fCOD6TTowM%2FA4otpbRQzRgs%2BcoVGLcUwXu6xF1ZVeUtbI%2FtFgDbmoPq%2BncyjZtx8UpcNkdh493PM%2FjFoxMMKB38IGOqUBRZ2YYInUB6JMVf%2F6Zx3Eli9OcbUgbP3IV5yt9P%2BpuLy33%2B%2BlS6tBkYTozlu71X1rG2lRMJxL4RXdoBi5Gs3ronL%2BOPvcgotedxId1oMf9uZ%2B4mM3mcFtmVNl8IbNEnxSstRiHsfuy4uILcZCv%2F76mTcditfLXncBoTnqm4EuL5A%2F9FjFd4vVPLsB9u6ijnYq3W%2FbGZLp1LbhEvrz0R2mvTk4%2BvUf&X-Amz-Signature=19be15e87954c232f20b1d7c51fdd584a1acc0a94de82e3ed686b68233cda6e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIJXDF6%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEGcSJQWJE5BeYvIkmHBkUMEbOA2Yt30TvRvvHH566lSAiEApB1HCtEqLI2RteIL2HcmTRHad9k5OEJVt6EbcwRsUwgqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqw76Rp0qvB%2FSujHircA%2FSZV8%2Bq6soAaWJm%2ByowCABOz2ZedhjwsmpuhUncTpg2P5HkqsbtVc64dcWINE2DpBI0OsacMiSI9HNbU9%2F64WNO6V3VtxjRRVAm7oJtf8zRbId5j%2F6FMNc2p9pB5T38KHoZS0hlqxj7Sjgj0JXaTPYaeDhutQnI8LYCXXeaEK8XoSqR3TjjqxXj2FJLEQJuTqVshwgeWHHCYWOZpgYf1voUsF6M3Ue2jGTh589dYDf1RzRgEJgEKx9DOlq9aKNTs5km2v4L0hwAAJiENhly8IweMjmMLhW9zHqT5pRY9X6y2QJpoY4UQdQV3RFPpOaklahqeuMJi08f5CF9IVuJob4AhWMEpxTa4ejyv7Yv%2F4TucRZm403LTu3YwNRy0fn7SkW1fsLhlQ4Ucxdh5QeI%2FZnqhdRZV0HU15y8gaMAAHqGr5TqELnpfeEw2oNxs%2FEYj7Z1YTEuF7Mk9FJrHNZrhTcTRe4girBt26jxfnpJnPW%2BGJAvOaIQhXBLyWT3QN4LWVNdq4a51WQhaKBV5uxeUEj0856pvmI3VrwGwhKayi6fCOD6TTowM%2FA4otpbRQzRgs%2BcoVGLcUwXu6xF1ZVeUtbI%2FtFgDbmoPq%2BncyjZtx8UpcNkdh493PM%2FjFoxMMKB38IGOqUBRZ2YYInUB6JMVf%2F6Zx3Eli9OcbUgbP3IV5yt9P%2BpuLy33%2B%2BlS6tBkYTozlu71X1rG2lRMJxL4RXdoBi5Gs3ronL%2BOPvcgotedxId1oMf9uZ%2B4mM3mcFtmVNl8IbNEnxSstRiHsfuy4uILcZCv%2F76mTcditfLXncBoTnqm4EuL5A%2F9FjFd4vVPLsB9u6ijnYq3W%2FbGZLp1LbhEvrz0R2mvTk4%2BvUf&X-Amz-Signature=f3101ce89c5b824eb3305da5570f79da89ada890c2139f30e37b0e0d9d5e25cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIJXDF6%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEGcSJQWJE5BeYvIkmHBkUMEbOA2Yt30TvRvvHH566lSAiEApB1HCtEqLI2RteIL2HcmTRHad9k5OEJVt6EbcwRsUwgqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqw76Rp0qvB%2FSujHircA%2FSZV8%2Bq6soAaWJm%2ByowCABOz2ZedhjwsmpuhUncTpg2P5HkqsbtVc64dcWINE2DpBI0OsacMiSI9HNbU9%2F64WNO6V3VtxjRRVAm7oJtf8zRbId5j%2F6FMNc2p9pB5T38KHoZS0hlqxj7Sjgj0JXaTPYaeDhutQnI8LYCXXeaEK8XoSqR3TjjqxXj2FJLEQJuTqVshwgeWHHCYWOZpgYf1voUsF6M3Ue2jGTh589dYDf1RzRgEJgEKx9DOlq9aKNTs5km2v4L0hwAAJiENhly8IweMjmMLhW9zHqT5pRY9X6y2QJpoY4UQdQV3RFPpOaklahqeuMJi08f5CF9IVuJob4AhWMEpxTa4ejyv7Yv%2F4TucRZm403LTu3YwNRy0fn7SkW1fsLhlQ4Ucxdh5QeI%2FZnqhdRZV0HU15y8gaMAAHqGr5TqELnpfeEw2oNxs%2FEYj7Z1YTEuF7Mk9FJrHNZrhTcTRe4girBt26jxfnpJnPW%2BGJAvOaIQhXBLyWT3QN4LWVNdq4a51WQhaKBV5uxeUEj0856pvmI3VrwGwhKayi6fCOD6TTowM%2FA4otpbRQzRgs%2BcoVGLcUwXu6xF1ZVeUtbI%2FtFgDbmoPq%2BncyjZtx8UpcNkdh493PM%2FjFoxMMKB38IGOqUBRZ2YYInUB6JMVf%2F6Zx3Eli9OcbUgbP3IV5yt9P%2BpuLy33%2B%2BlS6tBkYTozlu71X1rG2lRMJxL4RXdoBi5Gs3ronL%2BOPvcgotedxId1oMf9uZ%2B4mM3mcFtmVNl8IbNEnxSstRiHsfuy4uILcZCv%2F76mTcditfLXncBoTnqm4EuL5A%2F9FjFd4vVPLsB9u6ijnYq3W%2FbGZLp1LbhEvrz0R2mvTk4%2BvUf&X-Amz-Signature=0ee89e028c518dd80db0336bcc4a05ab3a794ae89c44fac2035d5f0a8cb757c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIJXDF6%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEGcSJQWJE5BeYvIkmHBkUMEbOA2Yt30TvRvvHH566lSAiEApB1HCtEqLI2RteIL2HcmTRHad9k5OEJVt6EbcwRsUwgqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqw76Rp0qvB%2FSujHircA%2FSZV8%2Bq6soAaWJm%2ByowCABOz2ZedhjwsmpuhUncTpg2P5HkqsbtVc64dcWINE2DpBI0OsacMiSI9HNbU9%2F64WNO6V3VtxjRRVAm7oJtf8zRbId5j%2F6FMNc2p9pB5T38KHoZS0hlqxj7Sjgj0JXaTPYaeDhutQnI8LYCXXeaEK8XoSqR3TjjqxXj2FJLEQJuTqVshwgeWHHCYWOZpgYf1voUsF6M3Ue2jGTh589dYDf1RzRgEJgEKx9DOlq9aKNTs5km2v4L0hwAAJiENhly8IweMjmMLhW9zHqT5pRY9X6y2QJpoY4UQdQV3RFPpOaklahqeuMJi08f5CF9IVuJob4AhWMEpxTa4ejyv7Yv%2F4TucRZm403LTu3YwNRy0fn7SkW1fsLhlQ4Ucxdh5QeI%2FZnqhdRZV0HU15y8gaMAAHqGr5TqELnpfeEw2oNxs%2FEYj7Z1YTEuF7Mk9FJrHNZrhTcTRe4girBt26jxfnpJnPW%2BGJAvOaIQhXBLyWT3QN4LWVNdq4a51WQhaKBV5uxeUEj0856pvmI3VrwGwhKayi6fCOD6TTowM%2FA4otpbRQzRgs%2BcoVGLcUwXu6xF1ZVeUtbI%2FtFgDbmoPq%2BncyjZtx8UpcNkdh493PM%2FjFoxMMKB38IGOqUBRZ2YYInUB6JMVf%2F6Zx3Eli9OcbUgbP3IV5yt9P%2BpuLy33%2B%2BlS6tBkYTozlu71X1rG2lRMJxL4RXdoBi5Gs3ronL%2BOPvcgotedxId1oMf9uZ%2B4mM3mcFtmVNl8IbNEnxSstRiHsfuy4uILcZCv%2F76mTcditfLXncBoTnqm4EuL5A%2F9FjFd4vVPLsB9u6ijnYq3W%2FbGZLp1LbhEvrz0R2mvTk4%2BvUf&X-Amz-Signature=d03d69d8a722f024f6ac564e46a2527b2df8f33d61b21be0f038c34ccfcfd767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
