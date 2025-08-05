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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZEYBTT4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIASB2tTKlhzah3N%2Fr%2B5KaAQYWNKyTcNLvkGUg31qziyvAiA4yD1YqCT2IY0AynfPaOE2UxUQvAg1yf1eDotYIQ2Plyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMgDI%2Fd%2FWi1oGj2qJoKtwD0DSYs5mmHBpMF1Aaihw2nxbzGwyUvoAhyKLku7%2Bgq%2FGUypEaEUjRIkTEp2RWAoDrzK2fkPohcRNf8wbZT25uAG06fz%2BlFd%2BPf3g0A3r8x%2F5KBgBMEa7mMeXj9Dxsjk7%2FQYPYJm6cx%2B96%2BtueB%2BtljEXZgkx%2BalQkbTf6pRWgaqB9un0ivSboP58jdGbxfle%2Beqwe6o9kWOZY2XcF6jLKx%2FxhYsgvUAk9GqR4vj6OSPogkkTcSo5fZGrTsF%2FVCgO5x3nnLCqpgoWXoolyu4c7TfXG9oDLABgViM%2FosEVt%2BTb61KdkT1daD5EoVGaT0THqEctn0GhaaxgIAvWW%2BtnYmX44iw%2FTMG9PpMgZf%2BdN2Od5PghYojl0xaPpn1G89PJf2kNIh6WEZ2ENtL7%2BNv2%2FEafHTO7SgbtdmHj8nxK1Sp6T1Gxn1TxZBHdY5vdlSJLkNlmM4kO42FYYE08TemCaicO4h7yCTRs%2BPscvUDA5%2FQw2Mz37LRuwYWpccvO6qZbWCkcqCWNcd3ZRfEOoUJl%2BQaiJGDWIGHax1lTrvYEt%2Fm3SHuIk7HlUNtFCIathcc6mO5dZg2dHwG6KA6jZNfBl%2B0ger4t9eZtyEk37BunyjxIq%2Bp3sKzBTPYFLvDgw3vTExAY6pgHISl1U%2FpH8H3lgLjtc3LtjccZS4MfTkz5Px%2F7zVzv3kqQ%2BLVELT8Bab8tfEmF7bT1ZzAq3YHgyCqRmJYuy07mu7BZCPvjZiHxdbMDgkCHuOk75PcmzxIIjV5cYVYhHeBeqrsigZ9Uej2AZU3wWLKxU3Ydsdfx5DBQsIXzeajRLNSKIJbL1r9gNw25zPqf6goDRXYjLbpQOVNxyRWEpyIW4nPTvYMGt&X-Amz-Signature=1dad1ae8d5b23cb030303afb9d58f9464c446e6048378dadeeca7962be251f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZEYBTT4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIASB2tTKlhzah3N%2Fr%2B5KaAQYWNKyTcNLvkGUg31qziyvAiA4yD1YqCT2IY0AynfPaOE2UxUQvAg1yf1eDotYIQ2Plyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMgDI%2Fd%2FWi1oGj2qJoKtwD0DSYs5mmHBpMF1Aaihw2nxbzGwyUvoAhyKLku7%2Bgq%2FGUypEaEUjRIkTEp2RWAoDrzK2fkPohcRNf8wbZT25uAG06fz%2BlFd%2BPf3g0A3r8x%2F5KBgBMEa7mMeXj9Dxsjk7%2FQYPYJm6cx%2B96%2BtueB%2BtljEXZgkx%2BalQkbTf6pRWgaqB9un0ivSboP58jdGbxfle%2Beqwe6o9kWOZY2XcF6jLKx%2FxhYsgvUAk9GqR4vj6OSPogkkTcSo5fZGrTsF%2FVCgO5x3nnLCqpgoWXoolyu4c7TfXG9oDLABgViM%2FosEVt%2BTb61KdkT1daD5EoVGaT0THqEctn0GhaaxgIAvWW%2BtnYmX44iw%2FTMG9PpMgZf%2BdN2Od5PghYojl0xaPpn1G89PJf2kNIh6WEZ2ENtL7%2BNv2%2FEafHTO7SgbtdmHj8nxK1Sp6T1Gxn1TxZBHdY5vdlSJLkNlmM4kO42FYYE08TemCaicO4h7yCTRs%2BPscvUDA5%2FQw2Mz37LRuwYWpccvO6qZbWCkcqCWNcd3ZRfEOoUJl%2BQaiJGDWIGHax1lTrvYEt%2Fm3SHuIk7HlUNtFCIathcc6mO5dZg2dHwG6KA6jZNfBl%2B0ger4t9eZtyEk37BunyjxIq%2Bp3sKzBTPYFLvDgw3vTExAY6pgHISl1U%2FpH8H3lgLjtc3LtjccZS4MfTkz5Px%2F7zVzv3kqQ%2BLVELT8Bab8tfEmF7bT1ZzAq3YHgyCqRmJYuy07mu7BZCPvjZiHxdbMDgkCHuOk75PcmzxIIjV5cYVYhHeBeqrsigZ9Uej2AZU3wWLKxU3Ydsdfx5DBQsIXzeajRLNSKIJbL1r9gNw25zPqf6goDRXYjLbpQOVNxyRWEpyIW4nPTvYMGt&X-Amz-Signature=5232b7516eeeb476a9ac9bd8f98ff31c6280b62089652832af448dadc7b49931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZEYBTT4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIASB2tTKlhzah3N%2Fr%2B5KaAQYWNKyTcNLvkGUg31qziyvAiA4yD1YqCT2IY0AynfPaOE2UxUQvAg1yf1eDotYIQ2Plyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMgDI%2Fd%2FWi1oGj2qJoKtwD0DSYs5mmHBpMF1Aaihw2nxbzGwyUvoAhyKLku7%2Bgq%2FGUypEaEUjRIkTEp2RWAoDrzK2fkPohcRNf8wbZT25uAG06fz%2BlFd%2BPf3g0A3r8x%2F5KBgBMEa7mMeXj9Dxsjk7%2FQYPYJm6cx%2B96%2BtueB%2BtljEXZgkx%2BalQkbTf6pRWgaqB9un0ivSboP58jdGbxfle%2Beqwe6o9kWOZY2XcF6jLKx%2FxhYsgvUAk9GqR4vj6OSPogkkTcSo5fZGrTsF%2FVCgO5x3nnLCqpgoWXoolyu4c7TfXG9oDLABgViM%2FosEVt%2BTb61KdkT1daD5EoVGaT0THqEctn0GhaaxgIAvWW%2BtnYmX44iw%2FTMG9PpMgZf%2BdN2Od5PghYojl0xaPpn1G89PJf2kNIh6WEZ2ENtL7%2BNv2%2FEafHTO7SgbtdmHj8nxK1Sp6T1Gxn1TxZBHdY5vdlSJLkNlmM4kO42FYYE08TemCaicO4h7yCTRs%2BPscvUDA5%2FQw2Mz37LRuwYWpccvO6qZbWCkcqCWNcd3ZRfEOoUJl%2BQaiJGDWIGHax1lTrvYEt%2Fm3SHuIk7HlUNtFCIathcc6mO5dZg2dHwG6KA6jZNfBl%2B0ger4t9eZtyEk37BunyjxIq%2Bp3sKzBTPYFLvDgw3vTExAY6pgHISl1U%2FpH8H3lgLjtc3LtjccZS4MfTkz5Px%2F7zVzv3kqQ%2BLVELT8Bab8tfEmF7bT1ZzAq3YHgyCqRmJYuy07mu7BZCPvjZiHxdbMDgkCHuOk75PcmzxIIjV5cYVYhHeBeqrsigZ9Uej2AZU3wWLKxU3Ydsdfx5DBQsIXzeajRLNSKIJbL1r9gNw25zPqf6goDRXYjLbpQOVNxyRWEpyIW4nPTvYMGt&X-Amz-Signature=2c0de56672ba001ba4e57853607a1cadd1c150f9b79968796d214862241c4b73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZEYBTT4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIASB2tTKlhzah3N%2Fr%2B5KaAQYWNKyTcNLvkGUg31qziyvAiA4yD1YqCT2IY0AynfPaOE2UxUQvAg1yf1eDotYIQ2Plyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMgDI%2Fd%2FWi1oGj2qJoKtwD0DSYs5mmHBpMF1Aaihw2nxbzGwyUvoAhyKLku7%2Bgq%2FGUypEaEUjRIkTEp2RWAoDrzK2fkPohcRNf8wbZT25uAG06fz%2BlFd%2BPf3g0A3r8x%2F5KBgBMEa7mMeXj9Dxsjk7%2FQYPYJm6cx%2B96%2BtueB%2BtljEXZgkx%2BalQkbTf6pRWgaqB9un0ivSboP58jdGbxfle%2Beqwe6o9kWOZY2XcF6jLKx%2FxhYsgvUAk9GqR4vj6OSPogkkTcSo5fZGrTsF%2FVCgO5x3nnLCqpgoWXoolyu4c7TfXG9oDLABgViM%2FosEVt%2BTb61KdkT1daD5EoVGaT0THqEctn0GhaaxgIAvWW%2BtnYmX44iw%2FTMG9PpMgZf%2BdN2Od5PghYojl0xaPpn1G89PJf2kNIh6WEZ2ENtL7%2BNv2%2FEafHTO7SgbtdmHj8nxK1Sp6T1Gxn1TxZBHdY5vdlSJLkNlmM4kO42FYYE08TemCaicO4h7yCTRs%2BPscvUDA5%2FQw2Mz37LRuwYWpccvO6qZbWCkcqCWNcd3ZRfEOoUJl%2BQaiJGDWIGHax1lTrvYEt%2Fm3SHuIk7HlUNtFCIathcc6mO5dZg2dHwG6KA6jZNfBl%2B0ger4t9eZtyEk37BunyjxIq%2Bp3sKzBTPYFLvDgw3vTExAY6pgHISl1U%2FpH8H3lgLjtc3LtjccZS4MfTkz5Px%2F7zVzv3kqQ%2BLVELT8Bab8tfEmF7bT1ZzAq3YHgyCqRmJYuy07mu7BZCPvjZiHxdbMDgkCHuOk75PcmzxIIjV5cYVYhHeBeqrsigZ9Uej2AZU3wWLKxU3Ydsdfx5DBQsIXzeajRLNSKIJbL1r9gNw25zPqf6goDRXYjLbpQOVNxyRWEpyIW4nPTvYMGt&X-Amz-Signature=f739e398c3e94b2b98215f0a10ae9763ad8ee70440e45569608e75a96c155eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZEYBTT4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIASB2tTKlhzah3N%2Fr%2B5KaAQYWNKyTcNLvkGUg31qziyvAiA4yD1YqCT2IY0AynfPaOE2UxUQvAg1yf1eDotYIQ2Plyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMgDI%2Fd%2FWi1oGj2qJoKtwD0DSYs5mmHBpMF1Aaihw2nxbzGwyUvoAhyKLku7%2Bgq%2FGUypEaEUjRIkTEp2RWAoDrzK2fkPohcRNf8wbZT25uAG06fz%2BlFd%2BPf3g0A3r8x%2F5KBgBMEa7mMeXj9Dxsjk7%2FQYPYJm6cx%2B96%2BtueB%2BtljEXZgkx%2BalQkbTf6pRWgaqB9un0ivSboP58jdGbxfle%2Beqwe6o9kWOZY2XcF6jLKx%2FxhYsgvUAk9GqR4vj6OSPogkkTcSo5fZGrTsF%2FVCgO5x3nnLCqpgoWXoolyu4c7TfXG9oDLABgViM%2FosEVt%2BTb61KdkT1daD5EoVGaT0THqEctn0GhaaxgIAvWW%2BtnYmX44iw%2FTMG9PpMgZf%2BdN2Od5PghYojl0xaPpn1G89PJf2kNIh6WEZ2ENtL7%2BNv2%2FEafHTO7SgbtdmHj8nxK1Sp6T1Gxn1TxZBHdY5vdlSJLkNlmM4kO42FYYE08TemCaicO4h7yCTRs%2BPscvUDA5%2FQw2Mz37LRuwYWpccvO6qZbWCkcqCWNcd3ZRfEOoUJl%2BQaiJGDWIGHax1lTrvYEt%2Fm3SHuIk7HlUNtFCIathcc6mO5dZg2dHwG6KA6jZNfBl%2B0ger4t9eZtyEk37BunyjxIq%2Bp3sKzBTPYFLvDgw3vTExAY6pgHISl1U%2FpH8H3lgLjtc3LtjccZS4MfTkz5Px%2F7zVzv3kqQ%2BLVELT8Bab8tfEmF7bT1ZzAq3YHgyCqRmJYuy07mu7BZCPvjZiHxdbMDgkCHuOk75PcmzxIIjV5cYVYhHeBeqrsigZ9Uej2AZU3wWLKxU3Ydsdfx5DBQsIXzeajRLNSKIJbL1r9gNw25zPqf6goDRXYjLbpQOVNxyRWEpyIW4nPTvYMGt&X-Amz-Signature=d9b17a037c464d0c63f7d7a73b45f1f2809c6b77ca2d11bc28cca01a9a7f8493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
