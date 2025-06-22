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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OBYYJ7%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvHNbB4QGwiF6EUqoA78do9%2F5jdc%2Frp9L3stinyZdb1AiEAj6w3KRMTBPFp8xO4PUWR3Rf3VexQleuofleSFhlpx%2FAqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZik1qLa02e5upOFCrcA5Bf95t9r5d93rlyrMiwgDmvzKIztLqPnZklHndvN%2FBUr%2FQcXTjGr5QDds%2BUBIifVJcoqlDYBOcyS8di67XlyS33OzDoc%2F%2FK19sIGjxlq3mvmrtl5%2BgxK13VofRdd7%2FInvgS4Bh6onFS%2FKwrDEODQRSLShkJLBGPVkOuwBbFfyzdsK4%2Fbst635Sxy54hZw12d%2FtcNmp3WdkoZfIGoyRnl45Yz9Pk0HxiW2qvzc2TTFUIHDAWVk392HIe3ThoC8r3f%2FFqpELw68oDNfKkGNGHxZMZOgrZq10Y3TYqeFEMjjf5Vm%2FUR6f%2F2FDUOkbydXJWFJQ2n3xqPwjHISR0AaI1sYlVVzn8fMQFAte5vyHreuti20ItmUbCb%2BMERv9RnGNI4fHLN2dSrfYnLcNgBjb%2B1%2FZc5ZZ7CRqNxpUXuvuXRDAmc4CNORZKVUFlVgya4Dov9vrBY3yQt6a80%2F%2Bv3doVSB12IgAEY2aNN9A8aguWXMGhyKVW5fhUj6IcFbkeaLZh51ECNuQwbLTr6EGN3LEzOzFTIQvA6zWiTILGKnLOXEER8VnTiKi9NxpHOP1pnyghGsCnwVAOr5Px0gac8aKgueqmp9mv0g%2FTbGXIxAnxgQv8RCxbT9kaVBusKHrwMIGk3sIGOqUBRMctE33z5sF%2BlRPsJv1m42dbhaDhOeswla2a9iAcz%2BBWxR4uuyfEMBL2gl6EWM2%2BlTj%2FzNgdK4OSu0egoxH1IxEB2%2FS%2FxJRUi8TZgHpoRGU0NVo7weJEF7IylmIE5vCfPS4qMWf37WuTSxcWynHgMmT%2BKsPl1YM1C4L%2FzkjTF9c4B3X%2FaWybEFtK%2Bv2haoyHJq9Oiefw5HdT8GzcCHjSo%2BDKb%2FAp&X-Amz-Signature=bf088074dbc5c12f17ae6046cc7d4b7955b091587f3be1896e3738a02073c92e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OBYYJ7%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvHNbB4QGwiF6EUqoA78do9%2F5jdc%2Frp9L3stinyZdb1AiEAj6w3KRMTBPFp8xO4PUWR3Rf3VexQleuofleSFhlpx%2FAqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZik1qLa02e5upOFCrcA5Bf95t9r5d93rlyrMiwgDmvzKIztLqPnZklHndvN%2FBUr%2FQcXTjGr5QDds%2BUBIifVJcoqlDYBOcyS8di67XlyS33OzDoc%2F%2FK19sIGjxlq3mvmrtl5%2BgxK13VofRdd7%2FInvgS4Bh6onFS%2FKwrDEODQRSLShkJLBGPVkOuwBbFfyzdsK4%2Fbst635Sxy54hZw12d%2FtcNmp3WdkoZfIGoyRnl45Yz9Pk0HxiW2qvzc2TTFUIHDAWVk392HIe3ThoC8r3f%2FFqpELw68oDNfKkGNGHxZMZOgrZq10Y3TYqeFEMjjf5Vm%2FUR6f%2F2FDUOkbydXJWFJQ2n3xqPwjHISR0AaI1sYlVVzn8fMQFAte5vyHreuti20ItmUbCb%2BMERv9RnGNI4fHLN2dSrfYnLcNgBjb%2B1%2FZc5ZZ7CRqNxpUXuvuXRDAmc4CNORZKVUFlVgya4Dov9vrBY3yQt6a80%2F%2Bv3doVSB12IgAEY2aNN9A8aguWXMGhyKVW5fhUj6IcFbkeaLZh51ECNuQwbLTr6EGN3LEzOzFTIQvA6zWiTILGKnLOXEER8VnTiKi9NxpHOP1pnyghGsCnwVAOr5Px0gac8aKgueqmp9mv0g%2FTbGXIxAnxgQv8RCxbT9kaVBusKHrwMIGk3sIGOqUBRMctE33z5sF%2BlRPsJv1m42dbhaDhOeswla2a9iAcz%2BBWxR4uuyfEMBL2gl6EWM2%2BlTj%2FzNgdK4OSu0egoxH1IxEB2%2FS%2FxJRUi8TZgHpoRGU0NVo7weJEF7IylmIE5vCfPS4qMWf37WuTSxcWynHgMmT%2BKsPl1YM1C4L%2FzkjTF9c4B3X%2FaWybEFtK%2Bv2haoyHJq9Oiefw5HdT8GzcCHjSo%2BDKb%2FAp&X-Amz-Signature=6ced3c961617e82df2ef10427b503a69f02302345da5c039d5ea0f898f023549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OBYYJ7%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvHNbB4QGwiF6EUqoA78do9%2F5jdc%2Frp9L3stinyZdb1AiEAj6w3KRMTBPFp8xO4PUWR3Rf3VexQleuofleSFhlpx%2FAqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZik1qLa02e5upOFCrcA5Bf95t9r5d93rlyrMiwgDmvzKIztLqPnZklHndvN%2FBUr%2FQcXTjGr5QDds%2BUBIifVJcoqlDYBOcyS8di67XlyS33OzDoc%2F%2FK19sIGjxlq3mvmrtl5%2BgxK13VofRdd7%2FInvgS4Bh6onFS%2FKwrDEODQRSLShkJLBGPVkOuwBbFfyzdsK4%2Fbst635Sxy54hZw12d%2FtcNmp3WdkoZfIGoyRnl45Yz9Pk0HxiW2qvzc2TTFUIHDAWVk392HIe3ThoC8r3f%2FFqpELw68oDNfKkGNGHxZMZOgrZq10Y3TYqeFEMjjf5Vm%2FUR6f%2F2FDUOkbydXJWFJQ2n3xqPwjHISR0AaI1sYlVVzn8fMQFAte5vyHreuti20ItmUbCb%2BMERv9RnGNI4fHLN2dSrfYnLcNgBjb%2B1%2FZc5ZZ7CRqNxpUXuvuXRDAmc4CNORZKVUFlVgya4Dov9vrBY3yQt6a80%2F%2Bv3doVSB12IgAEY2aNN9A8aguWXMGhyKVW5fhUj6IcFbkeaLZh51ECNuQwbLTr6EGN3LEzOzFTIQvA6zWiTILGKnLOXEER8VnTiKi9NxpHOP1pnyghGsCnwVAOr5Px0gac8aKgueqmp9mv0g%2FTbGXIxAnxgQv8RCxbT9kaVBusKHrwMIGk3sIGOqUBRMctE33z5sF%2BlRPsJv1m42dbhaDhOeswla2a9iAcz%2BBWxR4uuyfEMBL2gl6EWM2%2BlTj%2FzNgdK4OSu0egoxH1IxEB2%2FS%2FxJRUi8TZgHpoRGU0NVo7weJEF7IylmIE5vCfPS4qMWf37WuTSxcWynHgMmT%2BKsPl1YM1C4L%2FzkjTF9c4B3X%2FaWybEFtK%2Bv2haoyHJq9Oiefw5HdT8GzcCHjSo%2BDKb%2FAp&X-Amz-Signature=57e5256b29f2c5ea8729e232cfa5ecdbc3e58a1c967057a809ed858f21255dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OBYYJ7%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvHNbB4QGwiF6EUqoA78do9%2F5jdc%2Frp9L3stinyZdb1AiEAj6w3KRMTBPFp8xO4PUWR3Rf3VexQleuofleSFhlpx%2FAqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZik1qLa02e5upOFCrcA5Bf95t9r5d93rlyrMiwgDmvzKIztLqPnZklHndvN%2FBUr%2FQcXTjGr5QDds%2BUBIifVJcoqlDYBOcyS8di67XlyS33OzDoc%2F%2FK19sIGjxlq3mvmrtl5%2BgxK13VofRdd7%2FInvgS4Bh6onFS%2FKwrDEODQRSLShkJLBGPVkOuwBbFfyzdsK4%2Fbst635Sxy54hZw12d%2FtcNmp3WdkoZfIGoyRnl45Yz9Pk0HxiW2qvzc2TTFUIHDAWVk392HIe3ThoC8r3f%2FFqpELw68oDNfKkGNGHxZMZOgrZq10Y3TYqeFEMjjf5Vm%2FUR6f%2F2FDUOkbydXJWFJQ2n3xqPwjHISR0AaI1sYlVVzn8fMQFAte5vyHreuti20ItmUbCb%2BMERv9RnGNI4fHLN2dSrfYnLcNgBjb%2B1%2FZc5ZZ7CRqNxpUXuvuXRDAmc4CNORZKVUFlVgya4Dov9vrBY3yQt6a80%2F%2Bv3doVSB12IgAEY2aNN9A8aguWXMGhyKVW5fhUj6IcFbkeaLZh51ECNuQwbLTr6EGN3LEzOzFTIQvA6zWiTILGKnLOXEER8VnTiKi9NxpHOP1pnyghGsCnwVAOr5Px0gac8aKgueqmp9mv0g%2FTbGXIxAnxgQv8RCxbT9kaVBusKHrwMIGk3sIGOqUBRMctE33z5sF%2BlRPsJv1m42dbhaDhOeswla2a9iAcz%2BBWxR4uuyfEMBL2gl6EWM2%2BlTj%2FzNgdK4OSu0egoxH1IxEB2%2FS%2FxJRUi8TZgHpoRGU0NVo7weJEF7IylmIE5vCfPS4qMWf37WuTSxcWynHgMmT%2BKsPl1YM1C4L%2FzkjTF9c4B3X%2FaWybEFtK%2Bv2haoyHJq9Oiefw5HdT8GzcCHjSo%2BDKb%2FAp&X-Amz-Signature=7c38d5c06955a071768d1749d6a73d1cac0defcd7acc9ac5463589c17bff3bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OBYYJ7%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvHNbB4QGwiF6EUqoA78do9%2F5jdc%2Frp9L3stinyZdb1AiEAj6w3KRMTBPFp8xO4PUWR3Rf3VexQleuofleSFhlpx%2FAqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZik1qLa02e5upOFCrcA5Bf95t9r5d93rlyrMiwgDmvzKIztLqPnZklHndvN%2FBUr%2FQcXTjGr5QDds%2BUBIifVJcoqlDYBOcyS8di67XlyS33OzDoc%2F%2FK19sIGjxlq3mvmrtl5%2BgxK13VofRdd7%2FInvgS4Bh6onFS%2FKwrDEODQRSLShkJLBGPVkOuwBbFfyzdsK4%2Fbst635Sxy54hZw12d%2FtcNmp3WdkoZfIGoyRnl45Yz9Pk0HxiW2qvzc2TTFUIHDAWVk392HIe3ThoC8r3f%2FFqpELw68oDNfKkGNGHxZMZOgrZq10Y3TYqeFEMjjf5Vm%2FUR6f%2F2FDUOkbydXJWFJQ2n3xqPwjHISR0AaI1sYlVVzn8fMQFAte5vyHreuti20ItmUbCb%2BMERv9RnGNI4fHLN2dSrfYnLcNgBjb%2B1%2FZc5ZZ7CRqNxpUXuvuXRDAmc4CNORZKVUFlVgya4Dov9vrBY3yQt6a80%2F%2Bv3doVSB12IgAEY2aNN9A8aguWXMGhyKVW5fhUj6IcFbkeaLZh51ECNuQwbLTr6EGN3LEzOzFTIQvA6zWiTILGKnLOXEER8VnTiKi9NxpHOP1pnyghGsCnwVAOr5Px0gac8aKgueqmp9mv0g%2FTbGXIxAnxgQv8RCxbT9kaVBusKHrwMIGk3sIGOqUBRMctE33z5sF%2BlRPsJv1m42dbhaDhOeswla2a9iAcz%2BBWxR4uuyfEMBL2gl6EWM2%2BlTj%2FzNgdK4OSu0egoxH1IxEB2%2FS%2FxJRUi8TZgHpoRGU0NVo7weJEF7IylmIE5vCfPS4qMWf37WuTSxcWynHgMmT%2BKsPl1YM1C4L%2FzkjTF9c4B3X%2FaWybEFtK%2Bv2haoyHJq9Oiefw5HdT8GzcCHjSo%2BDKb%2FAp&X-Amz-Signature=a1ddc4ce6e6db0c31c581dd687cab4537604dc165d0dcf75a1179b00a55349b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
