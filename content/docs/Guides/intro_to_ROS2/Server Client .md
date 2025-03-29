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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWXFL3TI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDSH%2F0Yrs95B9LRQjS4XegIPjHWg%2BUBlFh6G1EJw7F%2BXAiEAyUSoiwPBaqpadQpClnKhEGG5BdJhk946874Mdrrtatkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE320jfuku%2BUIUIxDSrcA92ASsLCUa82R79ACZlbhUl9PZo1UBP%2BSqg0OC5PxWA2K4k1FZplkjuYEdCWo58QV%2FG8WewTFn8nk7c1MoCCvQWUEm5KRx9tDPaPRjpuTOA0hl1aOwc80MrjStRcRx5pQsmcqql2TDNvbd2Qh8UG7XCKaZWsqo84qA5uxoeLsHoyBRPX87mfK%2BnUTfnolo%2FhN95VB0CWizN9Hd4LzOt3tesyojtKD1JG%2F1zgTUVnI0DjwuDklj1SFXXb%2Fgz6n%2B90Ev1MjroIlgCmgn7J06XH%2F9egW9t8UxIU9RnvDdoD1y2rb%2FUiy%2FwliawjTxdsevmUU13s%2F6D1wRIb3aycd65Co10OVPmSqcTXWG1Kx0FtfljEPzDs46wsHfr0orEpw0NLj9FnE7OHjTNr7MDNMnR%2FmCl91OsULG8Qjgd938v8ShPoQPDJr%2FKev0qx09SZhPdcid0zazkOThTgroxyh2LFdm6F8c5PGGi%2Fzy%2FltrPjOWjEWBh21HCPOQmUIT0azWYbOIW8v1m%2BrtWhtY7OHqS2gdl3EdGljcx0zIk9jOcrOc5By24HkHxG31XBjcJ1T2JghIuHFCWTKjZBXUQSH1Ti9G%2F4BgQPJmDkUiBWShLEHGDw%2F9B7XHdjv4p7wn2%2BMJ21n78GOqUB9RE6mkOHM2zyg0E7u7zwituVUKXkkmXbft%2Flkkp8voooKiwq%2BsNkTBaeGZ5IFwy2q7W1%2FQuWRr1o5%2BKtNte8Yk8w0jwYjJQ7G9oIb1z1n0P04cAOyjbWEXiIPVmTBFdb0XMVv6ScBjsGASYcuj4UnqBv0%2BEN0HozvLqQ4DFhNIXK%2BRwaLYnjIK00eqOS%2FXUOrvoNNysR2t8I1c%2B1Fv2%2BoQEJZJkv&X-Amz-Signature=d84794ec98506aea9e9d6e0e59f0349e75d7c0757f6134ee7b4560626bd23888&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWXFL3TI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDSH%2F0Yrs95B9LRQjS4XegIPjHWg%2BUBlFh6G1EJw7F%2BXAiEAyUSoiwPBaqpadQpClnKhEGG5BdJhk946874Mdrrtatkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE320jfuku%2BUIUIxDSrcA92ASsLCUa82R79ACZlbhUl9PZo1UBP%2BSqg0OC5PxWA2K4k1FZplkjuYEdCWo58QV%2FG8WewTFn8nk7c1MoCCvQWUEm5KRx9tDPaPRjpuTOA0hl1aOwc80MrjStRcRx5pQsmcqql2TDNvbd2Qh8UG7XCKaZWsqo84qA5uxoeLsHoyBRPX87mfK%2BnUTfnolo%2FhN95VB0CWizN9Hd4LzOt3tesyojtKD1JG%2F1zgTUVnI0DjwuDklj1SFXXb%2Fgz6n%2B90Ev1MjroIlgCmgn7J06XH%2F9egW9t8UxIU9RnvDdoD1y2rb%2FUiy%2FwliawjTxdsevmUU13s%2F6D1wRIb3aycd65Co10OVPmSqcTXWG1Kx0FtfljEPzDs46wsHfr0orEpw0NLj9FnE7OHjTNr7MDNMnR%2FmCl91OsULG8Qjgd938v8ShPoQPDJr%2FKev0qx09SZhPdcid0zazkOThTgroxyh2LFdm6F8c5PGGi%2Fzy%2FltrPjOWjEWBh21HCPOQmUIT0azWYbOIW8v1m%2BrtWhtY7OHqS2gdl3EdGljcx0zIk9jOcrOc5By24HkHxG31XBjcJ1T2JghIuHFCWTKjZBXUQSH1Ti9G%2F4BgQPJmDkUiBWShLEHGDw%2F9B7XHdjv4p7wn2%2BMJ21n78GOqUB9RE6mkOHM2zyg0E7u7zwituVUKXkkmXbft%2Flkkp8voooKiwq%2BsNkTBaeGZ5IFwy2q7W1%2FQuWRr1o5%2BKtNte8Yk8w0jwYjJQ7G9oIb1z1n0P04cAOyjbWEXiIPVmTBFdb0XMVv6ScBjsGASYcuj4UnqBv0%2BEN0HozvLqQ4DFhNIXK%2BRwaLYnjIK00eqOS%2FXUOrvoNNysR2t8I1c%2B1Fv2%2BoQEJZJkv&X-Amz-Signature=6b4fcf4d5cc1ae85440380b4ae3154e5de3ebcf3f3d8c015e883c7b4e5f27b9c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWXFL3TI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDSH%2F0Yrs95B9LRQjS4XegIPjHWg%2BUBlFh6G1EJw7F%2BXAiEAyUSoiwPBaqpadQpClnKhEGG5BdJhk946874Mdrrtatkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE320jfuku%2BUIUIxDSrcA92ASsLCUa82R79ACZlbhUl9PZo1UBP%2BSqg0OC5PxWA2K4k1FZplkjuYEdCWo58QV%2FG8WewTFn8nk7c1MoCCvQWUEm5KRx9tDPaPRjpuTOA0hl1aOwc80MrjStRcRx5pQsmcqql2TDNvbd2Qh8UG7XCKaZWsqo84qA5uxoeLsHoyBRPX87mfK%2BnUTfnolo%2FhN95VB0CWizN9Hd4LzOt3tesyojtKD1JG%2F1zgTUVnI0DjwuDklj1SFXXb%2Fgz6n%2B90Ev1MjroIlgCmgn7J06XH%2F9egW9t8UxIU9RnvDdoD1y2rb%2FUiy%2FwliawjTxdsevmUU13s%2F6D1wRIb3aycd65Co10OVPmSqcTXWG1Kx0FtfljEPzDs46wsHfr0orEpw0NLj9FnE7OHjTNr7MDNMnR%2FmCl91OsULG8Qjgd938v8ShPoQPDJr%2FKev0qx09SZhPdcid0zazkOThTgroxyh2LFdm6F8c5PGGi%2Fzy%2FltrPjOWjEWBh21HCPOQmUIT0azWYbOIW8v1m%2BrtWhtY7OHqS2gdl3EdGljcx0zIk9jOcrOc5By24HkHxG31XBjcJ1T2JghIuHFCWTKjZBXUQSH1Ti9G%2F4BgQPJmDkUiBWShLEHGDw%2F9B7XHdjv4p7wn2%2BMJ21n78GOqUB9RE6mkOHM2zyg0E7u7zwituVUKXkkmXbft%2Flkkp8voooKiwq%2BsNkTBaeGZ5IFwy2q7W1%2FQuWRr1o5%2BKtNte8Yk8w0jwYjJQ7G9oIb1z1n0P04cAOyjbWEXiIPVmTBFdb0XMVv6ScBjsGASYcuj4UnqBv0%2BEN0HozvLqQ4DFhNIXK%2BRwaLYnjIK00eqOS%2FXUOrvoNNysR2t8I1c%2B1Fv2%2BoQEJZJkv&X-Amz-Signature=96c2ba756010785becaf68cc83d58014607df65aa8ed242468f162df4a28a677&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWXFL3TI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDSH%2F0Yrs95B9LRQjS4XegIPjHWg%2BUBlFh6G1EJw7F%2BXAiEAyUSoiwPBaqpadQpClnKhEGG5BdJhk946874Mdrrtatkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE320jfuku%2BUIUIxDSrcA92ASsLCUa82R79ACZlbhUl9PZo1UBP%2BSqg0OC5PxWA2K4k1FZplkjuYEdCWo58QV%2FG8WewTFn8nk7c1MoCCvQWUEm5KRx9tDPaPRjpuTOA0hl1aOwc80MrjStRcRx5pQsmcqql2TDNvbd2Qh8UG7XCKaZWsqo84qA5uxoeLsHoyBRPX87mfK%2BnUTfnolo%2FhN95VB0CWizN9Hd4LzOt3tesyojtKD1JG%2F1zgTUVnI0DjwuDklj1SFXXb%2Fgz6n%2B90Ev1MjroIlgCmgn7J06XH%2F9egW9t8UxIU9RnvDdoD1y2rb%2FUiy%2FwliawjTxdsevmUU13s%2F6D1wRIb3aycd65Co10OVPmSqcTXWG1Kx0FtfljEPzDs46wsHfr0orEpw0NLj9FnE7OHjTNr7MDNMnR%2FmCl91OsULG8Qjgd938v8ShPoQPDJr%2FKev0qx09SZhPdcid0zazkOThTgroxyh2LFdm6F8c5PGGi%2Fzy%2FltrPjOWjEWBh21HCPOQmUIT0azWYbOIW8v1m%2BrtWhtY7OHqS2gdl3EdGljcx0zIk9jOcrOc5By24HkHxG31XBjcJ1T2JghIuHFCWTKjZBXUQSH1Ti9G%2F4BgQPJmDkUiBWShLEHGDw%2F9B7XHdjv4p7wn2%2BMJ21n78GOqUB9RE6mkOHM2zyg0E7u7zwituVUKXkkmXbft%2Flkkp8voooKiwq%2BsNkTBaeGZ5IFwy2q7W1%2FQuWRr1o5%2BKtNte8Yk8w0jwYjJQ7G9oIb1z1n0P04cAOyjbWEXiIPVmTBFdb0XMVv6ScBjsGASYcuj4UnqBv0%2BEN0HozvLqQ4DFhNIXK%2BRwaLYnjIK00eqOS%2FXUOrvoNNysR2t8I1c%2B1Fv2%2BoQEJZJkv&X-Amz-Signature=d7bd17fa651b4d7efa214185bb091a5cb94d770c6d71ff8ccfbcb939b2640a1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWXFL3TI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDSH%2F0Yrs95B9LRQjS4XegIPjHWg%2BUBlFh6G1EJw7F%2BXAiEAyUSoiwPBaqpadQpClnKhEGG5BdJhk946874Mdrrtatkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE320jfuku%2BUIUIxDSrcA92ASsLCUa82R79ACZlbhUl9PZo1UBP%2BSqg0OC5PxWA2K4k1FZplkjuYEdCWo58QV%2FG8WewTFn8nk7c1MoCCvQWUEm5KRx9tDPaPRjpuTOA0hl1aOwc80MrjStRcRx5pQsmcqql2TDNvbd2Qh8UG7XCKaZWsqo84qA5uxoeLsHoyBRPX87mfK%2BnUTfnolo%2FhN95VB0CWizN9Hd4LzOt3tesyojtKD1JG%2F1zgTUVnI0DjwuDklj1SFXXb%2Fgz6n%2B90Ev1MjroIlgCmgn7J06XH%2F9egW9t8UxIU9RnvDdoD1y2rb%2FUiy%2FwliawjTxdsevmUU13s%2F6D1wRIb3aycd65Co10OVPmSqcTXWG1Kx0FtfljEPzDs46wsHfr0orEpw0NLj9FnE7OHjTNr7MDNMnR%2FmCl91OsULG8Qjgd938v8ShPoQPDJr%2FKev0qx09SZhPdcid0zazkOThTgroxyh2LFdm6F8c5PGGi%2Fzy%2FltrPjOWjEWBh21HCPOQmUIT0azWYbOIW8v1m%2BrtWhtY7OHqS2gdl3EdGljcx0zIk9jOcrOc5By24HkHxG31XBjcJ1T2JghIuHFCWTKjZBXUQSH1Ti9G%2F4BgQPJmDkUiBWShLEHGDw%2F9B7XHdjv4p7wn2%2BMJ21n78GOqUB9RE6mkOHM2zyg0E7u7zwituVUKXkkmXbft%2Flkkp8voooKiwq%2BsNkTBaeGZ5IFwy2q7W1%2FQuWRr1o5%2BKtNte8Yk8w0jwYjJQ7G9oIb1z1n0P04cAOyjbWEXiIPVmTBFdb0XMVv6ScBjsGASYcuj4UnqBv0%2BEN0HozvLqQ4DFhNIXK%2BRwaLYnjIK00eqOS%2FXUOrvoNNysR2t8I1c%2B1Fv2%2BoQEJZJkv&X-Amz-Signature=2ccf129f768ebe44f95db90df9b611ba91f33414c1fc7be6c56c90256e29f37d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
