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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZYMO5Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAXKL%2F0X8C0liLYRGSVNtGuMvqfxHWXJhaqrR2QbW%2F6ZAiBOKVJG9mw%2ByISCmHlWfnNNNY7SbzlosCmHg9aMEi%2BW1iqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt6YmuCOdIo72OBGmKtwD3wVoba4m0Dw4EUpohLO7I2dxvCSpW1IOEyJs3f5ERdUNAEQg9WgYx4D2SnnogX8At4q%2Fl7RXPwh1ZE4MdVh3WJhSoq4XahskxBHvgyZWHi8LVbGzo8HsMAYbVTgSHPiH94n%2FC8TdOIoQaiM4CF1YbHS5tNXyit2FNmTrHyDcz0Od%2FTuQrPqDs%2Femwn8lDaolwPSMYOMFn5Um91vg8PAOLnSO04dBiNdHybEyhx5Rn69b3nsKsl%2FgDvgRnMCmx1Dz1burrTLBhUwIfhl7dB9OwXh0rCX%2Fa0Apxs8y6nmT2ZKZGDKDhTbXyZTUvJnOr174FCEJSvlIpPe40NsBDCx%2FRdDwDUzgxrX0MA8rZd8s1tkPdTaTReBfmFKYQDrWFpu%2FENo%2BJDh3EunTDtThA2WM8hB66ES5mBUFhzT4hhx%2BwAZ02aAR4OjgbO1Xrd93bDwWcoJ0PrEWQ19ZwCA0r%2FTD%2FWo0ybY6Ju112oSKIM6kFE83%2FODJh74srHUx5CBFRKxbp3bKsoPpq0xyD5uTwiiZ0Efdp0bZyyje6MGKZzNs0R5U2ENGd4cvgIAxpL1ngmQoVGMX%2BeLqvevgl%2Bt8c%2Bxz4Q0WnDT9TLOHqkV5VGysuLLDTcdXSuWg%2B9GadlAwjdfsvwY6pgHzuGbTqh%2BjzG9coefUNKbKFP0GT8ACXhjPzfIeSYO5nWk7%2BnqNa33hK%2BtH8NGwTryoJLJqJFhkI27%2Fnbq%2FfHb5k%2FJhUHUjhciUIvqMPLhcZr6CkcMubv5sX6d6mil7sYzZGMg7FrgU1sry%2BD%2FzNjeNMkFPlFeRRFGBCKsJC5DsgRG8UDlos4g7sWXNekWGYl68imcFAaQiDBU%2BtglSBGq6jFrrKGau&X-Amz-Signature=35a6218764c84fbd025643f273dea038a5603c5fab836be62ec64380775feeee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZYMO5Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAXKL%2F0X8C0liLYRGSVNtGuMvqfxHWXJhaqrR2QbW%2F6ZAiBOKVJG9mw%2ByISCmHlWfnNNNY7SbzlosCmHg9aMEi%2BW1iqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt6YmuCOdIo72OBGmKtwD3wVoba4m0Dw4EUpohLO7I2dxvCSpW1IOEyJs3f5ERdUNAEQg9WgYx4D2SnnogX8At4q%2Fl7RXPwh1ZE4MdVh3WJhSoq4XahskxBHvgyZWHi8LVbGzo8HsMAYbVTgSHPiH94n%2FC8TdOIoQaiM4CF1YbHS5tNXyit2FNmTrHyDcz0Od%2FTuQrPqDs%2Femwn8lDaolwPSMYOMFn5Um91vg8PAOLnSO04dBiNdHybEyhx5Rn69b3nsKsl%2FgDvgRnMCmx1Dz1burrTLBhUwIfhl7dB9OwXh0rCX%2Fa0Apxs8y6nmT2ZKZGDKDhTbXyZTUvJnOr174FCEJSvlIpPe40NsBDCx%2FRdDwDUzgxrX0MA8rZd8s1tkPdTaTReBfmFKYQDrWFpu%2FENo%2BJDh3EunTDtThA2WM8hB66ES5mBUFhzT4hhx%2BwAZ02aAR4OjgbO1Xrd93bDwWcoJ0PrEWQ19ZwCA0r%2FTD%2FWo0ybY6Ju112oSKIM6kFE83%2FODJh74srHUx5CBFRKxbp3bKsoPpq0xyD5uTwiiZ0Efdp0bZyyje6MGKZzNs0R5U2ENGd4cvgIAxpL1ngmQoVGMX%2BeLqvevgl%2Bt8c%2Bxz4Q0WnDT9TLOHqkV5VGysuLLDTcdXSuWg%2B9GadlAwjdfsvwY6pgHzuGbTqh%2BjzG9coefUNKbKFP0GT8ACXhjPzfIeSYO5nWk7%2BnqNa33hK%2BtH8NGwTryoJLJqJFhkI27%2Fnbq%2FfHb5k%2FJhUHUjhciUIvqMPLhcZr6CkcMubv5sX6d6mil7sYzZGMg7FrgU1sry%2BD%2FzNjeNMkFPlFeRRFGBCKsJC5DsgRG8UDlos4g7sWXNekWGYl68imcFAaQiDBU%2BtglSBGq6jFrrKGau&X-Amz-Signature=531ad30c0433cd8409513f879d02e26afc0eaea61a588572d061a57f9419d867&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZYMO5Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAXKL%2F0X8C0liLYRGSVNtGuMvqfxHWXJhaqrR2QbW%2F6ZAiBOKVJG9mw%2ByISCmHlWfnNNNY7SbzlosCmHg9aMEi%2BW1iqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt6YmuCOdIo72OBGmKtwD3wVoba4m0Dw4EUpohLO7I2dxvCSpW1IOEyJs3f5ERdUNAEQg9WgYx4D2SnnogX8At4q%2Fl7RXPwh1ZE4MdVh3WJhSoq4XahskxBHvgyZWHi8LVbGzo8HsMAYbVTgSHPiH94n%2FC8TdOIoQaiM4CF1YbHS5tNXyit2FNmTrHyDcz0Od%2FTuQrPqDs%2Femwn8lDaolwPSMYOMFn5Um91vg8PAOLnSO04dBiNdHybEyhx5Rn69b3nsKsl%2FgDvgRnMCmx1Dz1burrTLBhUwIfhl7dB9OwXh0rCX%2Fa0Apxs8y6nmT2ZKZGDKDhTbXyZTUvJnOr174FCEJSvlIpPe40NsBDCx%2FRdDwDUzgxrX0MA8rZd8s1tkPdTaTReBfmFKYQDrWFpu%2FENo%2BJDh3EunTDtThA2WM8hB66ES5mBUFhzT4hhx%2BwAZ02aAR4OjgbO1Xrd93bDwWcoJ0PrEWQ19ZwCA0r%2FTD%2FWo0ybY6Ju112oSKIM6kFE83%2FODJh74srHUx5CBFRKxbp3bKsoPpq0xyD5uTwiiZ0Efdp0bZyyje6MGKZzNs0R5U2ENGd4cvgIAxpL1ngmQoVGMX%2BeLqvevgl%2Bt8c%2Bxz4Q0WnDT9TLOHqkV5VGysuLLDTcdXSuWg%2B9GadlAwjdfsvwY6pgHzuGbTqh%2BjzG9coefUNKbKFP0GT8ACXhjPzfIeSYO5nWk7%2BnqNa33hK%2BtH8NGwTryoJLJqJFhkI27%2Fnbq%2FfHb5k%2FJhUHUjhciUIvqMPLhcZr6CkcMubv5sX6d6mil7sYzZGMg7FrgU1sry%2BD%2FzNjeNMkFPlFeRRFGBCKsJC5DsgRG8UDlos4g7sWXNekWGYl68imcFAaQiDBU%2BtglSBGq6jFrrKGau&X-Amz-Signature=985e188106b65373e6352d74150ed2b6c8d173d4fbc0ee4b1e7f77d726e32b1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZYMO5Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAXKL%2F0X8C0liLYRGSVNtGuMvqfxHWXJhaqrR2QbW%2F6ZAiBOKVJG9mw%2ByISCmHlWfnNNNY7SbzlosCmHg9aMEi%2BW1iqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt6YmuCOdIo72OBGmKtwD3wVoba4m0Dw4EUpohLO7I2dxvCSpW1IOEyJs3f5ERdUNAEQg9WgYx4D2SnnogX8At4q%2Fl7RXPwh1ZE4MdVh3WJhSoq4XahskxBHvgyZWHi8LVbGzo8HsMAYbVTgSHPiH94n%2FC8TdOIoQaiM4CF1YbHS5tNXyit2FNmTrHyDcz0Od%2FTuQrPqDs%2Femwn8lDaolwPSMYOMFn5Um91vg8PAOLnSO04dBiNdHybEyhx5Rn69b3nsKsl%2FgDvgRnMCmx1Dz1burrTLBhUwIfhl7dB9OwXh0rCX%2Fa0Apxs8y6nmT2ZKZGDKDhTbXyZTUvJnOr174FCEJSvlIpPe40NsBDCx%2FRdDwDUzgxrX0MA8rZd8s1tkPdTaTReBfmFKYQDrWFpu%2FENo%2BJDh3EunTDtThA2WM8hB66ES5mBUFhzT4hhx%2BwAZ02aAR4OjgbO1Xrd93bDwWcoJ0PrEWQ19ZwCA0r%2FTD%2FWo0ybY6Ju112oSKIM6kFE83%2FODJh74srHUx5CBFRKxbp3bKsoPpq0xyD5uTwiiZ0Efdp0bZyyje6MGKZzNs0R5U2ENGd4cvgIAxpL1ngmQoVGMX%2BeLqvevgl%2Bt8c%2Bxz4Q0WnDT9TLOHqkV5VGysuLLDTcdXSuWg%2B9GadlAwjdfsvwY6pgHzuGbTqh%2BjzG9coefUNKbKFP0GT8ACXhjPzfIeSYO5nWk7%2BnqNa33hK%2BtH8NGwTryoJLJqJFhkI27%2Fnbq%2FfHb5k%2FJhUHUjhciUIvqMPLhcZr6CkcMubv5sX6d6mil7sYzZGMg7FrgU1sry%2BD%2FzNjeNMkFPlFeRRFGBCKsJC5DsgRG8UDlos4g7sWXNekWGYl68imcFAaQiDBU%2BtglSBGq6jFrrKGau&X-Amz-Signature=0cf4856c63b30ccab9dcc28ad64780b3eae68d903eb56ea5df78f8ae7292ec6b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZYMO5Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAXKL%2F0X8C0liLYRGSVNtGuMvqfxHWXJhaqrR2QbW%2F6ZAiBOKVJG9mw%2ByISCmHlWfnNNNY7SbzlosCmHg9aMEi%2BW1iqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt6YmuCOdIo72OBGmKtwD3wVoba4m0Dw4EUpohLO7I2dxvCSpW1IOEyJs3f5ERdUNAEQg9WgYx4D2SnnogX8At4q%2Fl7RXPwh1ZE4MdVh3WJhSoq4XahskxBHvgyZWHi8LVbGzo8HsMAYbVTgSHPiH94n%2FC8TdOIoQaiM4CF1YbHS5tNXyit2FNmTrHyDcz0Od%2FTuQrPqDs%2Femwn8lDaolwPSMYOMFn5Um91vg8PAOLnSO04dBiNdHybEyhx5Rn69b3nsKsl%2FgDvgRnMCmx1Dz1burrTLBhUwIfhl7dB9OwXh0rCX%2Fa0Apxs8y6nmT2ZKZGDKDhTbXyZTUvJnOr174FCEJSvlIpPe40NsBDCx%2FRdDwDUzgxrX0MA8rZd8s1tkPdTaTReBfmFKYQDrWFpu%2FENo%2BJDh3EunTDtThA2WM8hB66ES5mBUFhzT4hhx%2BwAZ02aAR4OjgbO1Xrd93bDwWcoJ0PrEWQ19ZwCA0r%2FTD%2FWo0ybY6Ju112oSKIM6kFE83%2FODJh74srHUx5CBFRKxbp3bKsoPpq0xyD5uTwiiZ0Efdp0bZyyje6MGKZzNs0R5U2ENGd4cvgIAxpL1ngmQoVGMX%2BeLqvevgl%2Bt8c%2Bxz4Q0WnDT9TLOHqkV5VGysuLLDTcdXSuWg%2B9GadlAwjdfsvwY6pgHzuGbTqh%2BjzG9coefUNKbKFP0GT8ACXhjPzfIeSYO5nWk7%2BnqNa33hK%2BtH8NGwTryoJLJqJFhkI27%2Fnbq%2FfHb5k%2FJhUHUjhciUIvqMPLhcZr6CkcMubv5sX6d6mil7sYzZGMg7FrgU1sry%2BD%2FzNjeNMkFPlFeRRFGBCKsJC5DsgRG8UDlos4g7sWXNekWGYl68imcFAaQiDBU%2BtglSBGq6jFrrKGau&X-Amz-Signature=48d29b5a60478ecb3a7abc277cf18c34b8103c8ab2fffcba174e864d44f7367d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
