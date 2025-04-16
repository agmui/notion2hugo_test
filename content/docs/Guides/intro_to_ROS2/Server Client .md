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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUNPZE4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuvDf04fqxj4S%2FmtS3o7rHv2BQcpOcG4b5Td3Eagvo2AiEAk2TVdhHACqgBQyux8vi%2Byh5vurMAUJ6C2JN%2BRJAbb2Qq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAltS9Oa0%2By2lR5%2FsCrcAw%2BGM%2FH8k4oXCcvwT%2FawtvkfFaCjTYwt2U4d%2FXJPXoLZzG%2BD3LZ0%2FK1fRjf59I2XTpZ55t7vl5FpcurdlrWN8rOM2bDZz%2BJz0peciM9PgRhoPejAfGDHxoZdjZfO4QK%2Be5BNwThK56qaGTOODqZRhCMcy7S4%2FnV%2BZd6gnTj2%2BUxZbEtZVz3EEOLZdwYxIKvJ%2BkPFX3%2BX3%2FGh4Tiy0XIKauwD3LNtjDKybEiozIQtmD1WJhuZ%2FXzZP2bJJp0Z%2BTCYcS0Ya4kU2WcGKu3a1cySKALswp459u4M273bUEQCdRKvOQ09AWOHM6YzUDQCucxQAbZXXKkciNphkSMpsfo1Cibl2McjGpxj8VdNAHH6O6YjLMXoHuzfpYkXHWgRcmDVnrpwCLVGwXFzO9%2Boo5p9UDusaTvm6dJj%2BagZJgPTgRfJzcRvj6vLlfdqOzy8dOMom8rcSudfk2KAEA7ak5wKsxjyMKFw9IiQ9WMUwVDZ2SctfE1Vu%2Fag0FY4CNDs4Q6Wd7EqBwdg%2FIe9%2BdbQUewINIAibgC71xuVlzXczW8XZH2wnpqNXfCM2lTayW%2FRFYQY2zaQw5%2BU8TOaPXfSHgCCcTx%2BB%2FpjTFo7tScrqWXI9E3KLb34xeAKUk2Sz3h%2BMMvGgMAGOqUBUX%2FUNIfkBLUP9fMXjmJk%2B1iklptBmdUdHof8RvPH8KNS%2FTKJo2QknGlKVdulDAEyeaaRMaueR4zUgBwuj%2BXSvDxcW%2BjBuaD2GKM%2FfhcdZNX%2F%2Fpu%2BgbAi1NuoBmgbEzvUGtl6UVvlz6sM3%2Fd%2FgylhlFMg1uWmKYLXrCHYYdlyLtbECeYKrU8Yvrs9nKZ9s9IFLlAyE82lC48KssaKUMDysLTNYceb&X-Amz-Signature=6b2f95627faaca9c8e886fbcf6ebdcb9bf08edb6b42c3e0f4f1869d9fe15a4c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUNPZE4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuvDf04fqxj4S%2FmtS3o7rHv2BQcpOcG4b5Td3Eagvo2AiEAk2TVdhHACqgBQyux8vi%2Byh5vurMAUJ6C2JN%2BRJAbb2Qq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAltS9Oa0%2By2lR5%2FsCrcAw%2BGM%2FH8k4oXCcvwT%2FawtvkfFaCjTYwt2U4d%2FXJPXoLZzG%2BD3LZ0%2FK1fRjf59I2XTpZ55t7vl5FpcurdlrWN8rOM2bDZz%2BJz0peciM9PgRhoPejAfGDHxoZdjZfO4QK%2Be5BNwThK56qaGTOODqZRhCMcy7S4%2FnV%2BZd6gnTj2%2BUxZbEtZVz3EEOLZdwYxIKvJ%2BkPFX3%2BX3%2FGh4Tiy0XIKauwD3LNtjDKybEiozIQtmD1WJhuZ%2FXzZP2bJJp0Z%2BTCYcS0Ya4kU2WcGKu3a1cySKALswp459u4M273bUEQCdRKvOQ09AWOHM6YzUDQCucxQAbZXXKkciNphkSMpsfo1Cibl2McjGpxj8VdNAHH6O6YjLMXoHuzfpYkXHWgRcmDVnrpwCLVGwXFzO9%2Boo5p9UDusaTvm6dJj%2BagZJgPTgRfJzcRvj6vLlfdqOzy8dOMom8rcSudfk2KAEA7ak5wKsxjyMKFw9IiQ9WMUwVDZ2SctfE1Vu%2Fag0FY4CNDs4Q6Wd7EqBwdg%2FIe9%2BdbQUewINIAibgC71xuVlzXczW8XZH2wnpqNXfCM2lTayW%2FRFYQY2zaQw5%2BU8TOaPXfSHgCCcTx%2BB%2FpjTFo7tScrqWXI9E3KLb34xeAKUk2Sz3h%2BMMvGgMAGOqUBUX%2FUNIfkBLUP9fMXjmJk%2B1iklptBmdUdHof8RvPH8KNS%2FTKJo2QknGlKVdulDAEyeaaRMaueR4zUgBwuj%2BXSvDxcW%2BjBuaD2GKM%2FfhcdZNX%2F%2Fpu%2BgbAi1NuoBmgbEzvUGtl6UVvlz6sM3%2Fd%2FgylhlFMg1uWmKYLXrCHYYdlyLtbECeYKrU8Yvrs9nKZ9s9IFLlAyE82lC48KssaKUMDysLTNYceb&X-Amz-Signature=6e9c905900077f64ac05d813f51329ed68f387df6d48b138467815988add0408&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUNPZE4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuvDf04fqxj4S%2FmtS3o7rHv2BQcpOcG4b5Td3Eagvo2AiEAk2TVdhHACqgBQyux8vi%2Byh5vurMAUJ6C2JN%2BRJAbb2Qq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAltS9Oa0%2By2lR5%2FsCrcAw%2BGM%2FH8k4oXCcvwT%2FawtvkfFaCjTYwt2U4d%2FXJPXoLZzG%2BD3LZ0%2FK1fRjf59I2XTpZ55t7vl5FpcurdlrWN8rOM2bDZz%2BJz0peciM9PgRhoPejAfGDHxoZdjZfO4QK%2Be5BNwThK56qaGTOODqZRhCMcy7S4%2FnV%2BZd6gnTj2%2BUxZbEtZVz3EEOLZdwYxIKvJ%2BkPFX3%2BX3%2FGh4Tiy0XIKauwD3LNtjDKybEiozIQtmD1WJhuZ%2FXzZP2bJJp0Z%2BTCYcS0Ya4kU2WcGKu3a1cySKALswp459u4M273bUEQCdRKvOQ09AWOHM6YzUDQCucxQAbZXXKkciNphkSMpsfo1Cibl2McjGpxj8VdNAHH6O6YjLMXoHuzfpYkXHWgRcmDVnrpwCLVGwXFzO9%2Boo5p9UDusaTvm6dJj%2BagZJgPTgRfJzcRvj6vLlfdqOzy8dOMom8rcSudfk2KAEA7ak5wKsxjyMKFw9IiQ9WMUwVDZ2SctfE1Vu%2Fag0FY4CNDs4Q6Wd7EqBwdg%2FIe9%2BdbQUewINIAibgC71xuVlzXczW8XZH2wnpqNXfCM2lTayW%2FRFYQY2zaQw5%2BU8TOaPXfSHgCCcTx%2BB%2FpjTFo7tScrqWXI9E3KLb34xeAKUk2Sz3h%2BMMvGgMAGOqUBUX%2FUNIfkBLUP9fMXjmJk%2B1iklptBmdUdHof8RvPH8KNS%2FTKJo2QknGlKVdulDAEyeaaRMaueR4zUgBwuj%2BXSvDxcW%2BjBuaD2GKM%2FfhcdZNX%2F%2Fpu%2BgbAi1NuoBmgbEzvUGtl6UVvlz6sM3%2Fd%2FgylhlFMg1uWmKYLXrCHYYdlyLtbECeYKrU8Yvrs9nKZ9s9IFLlAyE82lC48KssaKUMDysLTNYceb&X-Amz-Signature=5ef46897f51fa2712a55d6fc9fb134b04b930f874276a0b1ba4b5b896fe24bee&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUNPZE4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuvDf04fqxj4S%2FmtS3o7rHv2BQcpOcG4b5Td3Eagvo2AiEAk2TVdhHACqgBQyux8vi%2Byh5vurMAUJ6C2JN%2BRJAbb2Qq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAltS9Oa0%2By2lR5%2FsCrcAw%2BGM%2FH8k4oXCcvwT%2FawtvkfFaCjTYwt2U4d%2FXJPXoLZzG%2BD3LZ0%2FK1fRjf59I2XTpZ55t7vl5FpcurdlrWN8rOM2bDZz%2BJz0peciM9PgRhoPejAfGDHxoZdjZfO4QK%2Be5BNwThK56qaGTOODqZRhCMcy7S4%2FnV%2BZd6gnTj2%2BUxZbEtZVz3EEOLZdwYxIKvJ%2BkPFX3%2BX3%2FGh4Tiy0XIKauwD3LNtjDKybEiozIQtmD1WJhuZ%2FXzZP2bJJp0Z%2BTCYcS0Ya4kU2WcGKu3a1cySKALswp459u4M273bUEQCdRKvOQ09AWOHM6YzUDQCucxQAbZXXKkciNphkSMpsfo1Cibl2McjGpxj8VdNAHH6O6YjLMXoHuzfpYkXHWgRcmDVnrpwCLVGwXFzO9%2Boo5p9UDusaTvm6dJj%2BagZJgPTgRfJzcRvj6vLlfdqOzy8dOMom8rcSudfk2KAEA7ak5wKsxjyMKFw9IiQ9WMUwVDZ2SctfE1Vu%2Fag0FY4CNDs4Q6Wd7EqBwdg%2FIe9%2BdbQUewINIAibgC71xuVlzXczW8XZH2wnpqNXfCM2lTayW%2FRFYQY2zaQw5%2BU8TOaPXfSHgCCcTx%2BB%2FpjTFo7tScrqWXI9E3KLb34xeAKUk2Sz3h%2BMMvGgMAGOqUBUX%2FUNIfkBLUP9fMXjmJk%2B1iklptBmdUdHof8RvPH8KNS%2FTKJo2QknGlKVdulDAEyeaaRMaueR4zUgBwuj%2BXSvDxcW%2BjBuaD2GKM%2FfhcdZNX%2F%2Fpu%2BgbAi1NuoBmgbEzvUGtl6UVvlz6sM3%2Fd%2FgylhlFMg1uWmKYLXrCHYYdlyLtbECeYKrU8Yvrs9nKZ9s9IFLlAyE82lC48KssaKUMDysLTNYceb&X-Amz-Signature=dbdb6314b933481cd20a5cdcf84dd6511e3529bf32240ec08b026e79a7c6ee18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUNPZE4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuvDf04fqxj4S%2FmtS3o7rHv2BQcpOcG4b5Td3Eagvo2AiEAk2TVdhHACqgBQyux8vi%2Byh5vurMAUJ6C2JN%2BRJAbb2Qq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAltS9Oa0%2By2lR5%2FsCrcAw%2BGM%2FH8k4oXCcvwT%2FawtvkfFaCjTYwt2U4d%2FXJPXoLZzG%2BD3LZ0%2FK1fRjf59I2XTpZ55t7vl5FpcurdlrWN8rOM2bDZz%2BJz0peciM9PgRhoPejAfGDHxoZdjZfO4QK%2Be5BNwThK56qaGTOODqZRhCMcy7S4%2FnV%2BZd6gnTj2%2BUxZbEtZVz3EEOLZdwYxIKvJ%2BkPFX3%2BX3%2FGh4Tiy0XIKauwD3LNtjDKybEiozIQtmD1WJhuZ%2FXzZP2bJJp0Z%2BTCYcS0Ya4kU2WcGKu3a1cySKALswp459u4M273bUEQCdRKvOQ09AWOHM6YzUDQCucxQAbZXXKkciNphkSMpsfo1Cibl2McjGpxj8VdNAHH6O6YjLMXoHuzfpYkXHWgRcmDVnrpwCLVGwXFzO9%2Boo5p9UDusaTvm6dJj%2BagZJgPTgRfJzcRvj6vLlfdqOzy8dOMom8rcSudfk2KAEA7ak5wKsxjyMKFw9IiQ9WMUwVDZ2SctfE1Vu%2Fag0FY4CNDs4Q6Wd7EqBwdg%2FIe9%2BdbQUewINIAibgC71xuVlzXczW8XZH2wnpqNXfCM2lTayW%2FRFYQY2zaQw5%2BU8TOaPXfSHgCCcTx%2BB%2FpjTFo7tScrqWXI9E3KLb34xeAKUk2Sz3h%2BMMvGgMAGOqUBUX%2FUNIfkBLUP9fMXjmJk%2B1iklptBmdUdHof8RvPH8KNS%2FTKJo2QknGlKVdulDAEyeaaRMaueR4zUgBwuj%2BXSvDxcW%2BjBuaD2GKM%2FfhcdZNX%2F%2Fpu%2BgbAi1NuoBmgbEzvUGtl6UVvlz6sM3%2Fd%2FgylhlFMg1uWmKYLXrCHYYdlyLtbECeYKrU8Yvrs9nKZ9s9IFLlAyE82lC48KssaKUMDysLTNYceb&X-Amz-Signature=056a7641d4c05c7b0566d24aa573ed41a41e8f2e8e9d10c1bf35ea489e7900f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
