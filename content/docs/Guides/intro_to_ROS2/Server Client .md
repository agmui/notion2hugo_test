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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PKTLNOV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFdL9F7L2%2FkW1IMOy0ehqkkp1CETVKOMnu%2BLbagITY49AiBnSaKdBffbADR1tpcxaxgi%2Fxdn4kciBJePDT8PmhDGlCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMPmPlGOFgedSPoXoZKtwDoRIv7EQjFE32PcCCBJ%2FZh1VcCaNZvIESJXhQBIszHgD95lFiN%2BwA8LEjyys2mXOSdYkLOGZkC0XUpcE0Z%2FPm1c7fA3%2FCn2WCnDqaJpWuiAG49oQrbegIh%2FmF5ZkoLCh0ekSZMyvhTFoZub3di0HgHNckGpN%2FhDS9wLoNvx%2FfV6klUnyGratHkZfxM4UqB2hehInOZLhtWTv7xptH2LDfRs6y2Y%2B5CEkIf3k71k%2Frfn20Z5tC%2BhriPuVvs%2F3qxer0TLclPn9vwZoOffVL8%2FNm80fr%2BrxTBH3yKUcSgkVf5H6tMdOKtGmpUqqfRX2jH9LvmgrAlFEld9%2FKhRyHYPw71sFc%2BI4teHzyna%2FU5IUuHemb%2FxqMpPMLW7QBUn4RORm6BFRVuBsjK3P0DPffQHAhK1cX5lGB%2FMIerXFsh7pKGKrvhMq85Zu7BwwTQDi45t3vUi4R8%2Bw%2FRixO0Fe06%2BF%2BNBNWYKQv3ojBntnV8KtNxAYDeJQmVFXmsmYcBASkprGTaWodmXyf3yJxH2uUhxYRBdArA8zyR6P%2B6DFtVBdppFnah0Dev4kouCHCRvtYpGiOKt%2BdzLZEmZ1Czmmux9IE5MSgI2Q7bwBedPl4q8I5U3k9gDgwrhpegojuEGEwubSCvgY6pgH2%2BFveSCNfvi9hnwryMp6LrCnfJt%2BovKH5u9ZDCaqjMyhyBxgXQmK3Cxunw1cQjVyWbdv7g6Z2MO1Aml3Px%2Bri3uanyuFlvhc0JpJ1H6Stjz4nYptWpfK%2BsgcMVl2NEzVyhFuMFg9ShPa6aJH5RN%2FFPRqf3aCkrApJavy7M17BhS2dY04GJKsqVklyxyUGAz5FbumWQlWiXgFcZDDyq%2BrA52Zttmu2&X-Amz-Signature=abe2d239050fb2886151cdadd8e6d814867097826b37683e1237cd45b6978bbd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PKTLNOV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFdL9F7L2%2FkW1IMOy0ehqkkp1CETVKOMnu%2BLbagITY49AiBnSaKdBffbADR1tpcxaxgi%2Fxdn4kciBJePDT8PmhDGlCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMPmPlGOFgedSPoXoZKtwDoRIv7EQjFE32PcCCBJ%2FZh1VcCaNZvIESJXhQBIszHgD95lFiN%2BwA8LEjyys2mXOSdYkLOGZkC0XUpcE0Z%2FPm1c7fA3%2FCn2WCnDqaJpWuiAG49oQrbegIh%2FmF5ZkoLCh0ekSZMyvhTFoZub3di0HgHNckGpN%2FhDS9wLoNvx%2FfV6klUnyGratHkZfxM4UqB2hehInOZLhtWTv7xptH2LDfRs6y2Y%2B5CEkIf3k71k%2Frfn20Z5tC%2BhriPuVvs%2F3qxer0TLclPn9vwZoOffVL8%2FNm80fr%2BrxTBH3yKUcSgkVf5H6tMdOKtGmpUqqfRX2jH9LvmgrAlFEld9%2FKhRyHYPw71sFc%2BI4teHzyna%2FU5IUuHemb%2FxqMpPMLW7QBUn4RORm6BFRVuBsjK3P0DPffQHAhK1cX5lGB%2FMIerXFsh7pKGKrvhMq85Zu7BwwTQDi45t3vUi4R8%2Bw%2FRixO0Fe06%2BF%2BNBNWYKQv3ojBntnV8KtNxAYDeJQmVFXmsmYcBASkprGTaWodmXyf3yJxH2uUhxYRBdArA8zyR6P%2B6DFtVBdppFnah0Dev4kouCHCRvtYpGiOKt%2BdzLZEmZ1Czmmux9IE5MSgI2Q7bwBedPl4q8I5U3k9gDgwrhpegojuEGEwubSCvgY6pgH2%2BFveSCNfvi9hnwryMp6LrCnfJt%2BovKH5u9ZDCaqjMyhyBxgXQmK3Cxunw1cQjVyWbdv7g6Z2MO1Aml3Px%2Bri3uanyuFlvhc0JpJ1H6Stjz4nYptWpfK%2BsgcMVl2NEzVyhFuMFg9ShPa6aJH5RN%2FFPRqf3aCkrApJavy7M17BhS2dY04GJKsqVklyxyUGAz5FbumWQlWiXgFcZDDyq%2BrA52Zttmu2&X-Amz-Signature=124b6490867f60f3d54480ef348d95e57bc60a21a7c43463062e3f76601b3ac7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PKTLNOV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFdL9F7L2%2FkW1IMOy0ehqkkp1CETVKOMnu%2BLbagITY49AiBnSaKdBffbADR1tpcxaxgi%2Fxdn4kciBJePDT8PmhDGlCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMPmPlGOFgedSPoXoZKtwDoRIv7EQjFE32PcCCBJ%2FZh1VcCaNZvIESJXhQBIszHgD95lFiN%2BwA8LEjyys2mXOSdYkLOGZkC0XUpcE0Z%2FPm1c7fA3%2FCn2WCnDqaJpWuiAG49oQrbegIh%2FmF5ZkoLCh0ekSZMyvhTFoZub3di0HgHNckGpN%2FhDS9wLoNvx%2FfV6klUnyGratHkZfxM4UqB2hehInOZLhtWTv7xptH2LDfRs6y2Y%2B5CEkIf3k71k%2Frfn20Z5tC%2BhriPuVvs%2F3qxer0TLclPn9vwZoOffVL8%2FNm80fr%2BrxTBH3yKUcSgkVf5H6tMdOKtGmpUqqfRX2jH9LvmgrAlFEld9%2FKhRyHYPw71sFc%2BI4teHzyna%2FU5IUuHemb%2FxqMpPMLW7QBUn4RORm6BFRVuBsjK3P0DPffQHAhK1cX5lGB%2FMIerXFsh7pKGKrvhMq85Zu7BwwTQDi45t3vUi4R8%2Bw%2FRixO0Fe06%2BF%2BNBNWYKQv3ojBntnV8KtNxAYDeJQmVFXmsmYcBASkprGTaWodmXyf3yJxH2uUhxYRBdArA8zyR6P%2B6DFtVBdppFnah0Dev4kouCHCRvtYpGiOKt%2BdzLZEmZ1Czmmux9IE5MSgI2Q7bwBedPl4q8I5U3k9gDgwrhpegojuEGEwubSCvgY6pgH2%2BFveSCNfvi9hnwryMp6LrCnfJt%2BovKH5u9ZDCaqjMyhyBxgXQmK3Cxunw1cQjVyWbdv7g6Z2MO1Aml3Px%2Bri3uanyuFlvhc0JpJ1H6Stjz4nYptWpfK%2BsgcMVl2NEzVyhFuMFg9ShPa6aJH5RN%2FFPRqf3aCkrApJavy7M17BhS2dY04GJKsqVklyxyUGAz5FbumWQlWiXgFcZDDyq%2BrA52Zttmu2&X-Amz-Signature=bb1f75737b27b1736b84bbd475cc05189ea9ac3b4f85fa564eca376ef11e7712&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PKTLNOV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFdL9F7L2%2FkW1IMOy0ehqkkp1CETVKOMnu%2BLbagITY49AiBnSaKdBffbADR1tpcxaxgi%2Fxdn4kciBJePDT8PmhDGlCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMPmPlGOFgedSPoXoZKtwDoRIv7EQjFE32PcCCBJ%2FZh1VcCaNZvIESJXhQBIszHgD95lFiN%2BwA8LEjyys2mXOSdYkLOGZkC0XUpcE0Z%2FPm1c7fA3%2FCn2WCnDqaJpWuiAG49oQrbegIh%2FmF5ZkoLCh0ekSZMyvhTFoZub3di0HgHNckGpN%2FhDS9wLoNvx%2FfV6klUnyGratHkZfxM4UqB2hehInOZLhtWTv7xptH2LDfRs6y2Y%2B5CEkIf3k71k%2Frfn20Z5tC%2BhriPuVvs%2F3qxer0TLclPn9vwZoOffVL8%2FNm80fr%2BrxTBH3yKUcSgkVf5H6tMdOKtGmpUqqfRX2jH9LvmgrAlFEld9%2FKhRyHYPw71sFc%2BI4teHzyna%2FU5IUuHemb%2FxqMpPMLW7QBUn4RORm6BFRVuBsjK3P0DPffQHAhK1cX5lGB%2FMIerXFsh7pKGKrvhMq85Zu7BwwTQDi45t3vUi4R8%2Bw%2FRixO0Fe06%2BF%2BNBNWYKQv3ojBntnV8KtNxAYDeJQmVFXmsmYcBASkprGTaWodmXyf3yJxH2uUhxYRBdArA8zyR6P%2B6DFtVBdppFnah0Dev4kouCHCRvtYpGiOKt%2BdzLZEmZ1Czmmux9IE5MSgI2Q7bwBedPl4q8I5U3k9gDgwrhpegojuEGEwubSCvgY6pgH2%2BFveSCNfvi9hnwryMp6LrCnfJt%2BovKH5u9ZDCaqjMyhyBxgXQmK3Cxunw1cQjVyWbdv7g6Z2MO1Aml3Px%2Bri3uanyuFlvhc0JpJ1H6Stjz4nYptWpfK%2BsgcMVl2NEzVyhFuMFg9ShPa6aJH5RN%2FFPRqf3aCkrApJavy7M17BhS2dY04GJKsqVklyxyUGAz5FbumWQlWiXgFcZDDyq%2BrA52Zttmu2&X-Amz-Signature=3881efdc227fbf735172cb3cd24620d1c85b7e7d93062cc95bf8ac7ea6f962a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PKTLNOV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFdL9F7L2%2FkW1IMOy0ehqkkp1CETVKOMnu%2BLbagITY49AiBnSaKdBffbADR1tpcxaxgi%2Fxdn4kciBJePDT8PmhDGlCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMPmPlGOFgedSPoXoZKtwDoRIv7EQjFE32PcCCBJ%2FZh1VcCaNZvIESJXhQBIszHgD95lFiN%2BwA8LEjyys2mXOSdYkLOGZkC0XUpcE0Z%2FPm1c7fA3%2FCn2WCnDqaJpWuiAG49oQrbegIh%2FmF5ZkoLCh0ekSZMyvhTFoZub3di0HgHNckGpN%2FhDS9wLoNvx%2FfV6klUnyGratHkZfxM4UqB2hehInOZLhtWTv7xptH2LDfRs6y2Y%2B5CEkIf3k71k%2Frfn20Z5tC%2BhriPuVvs%2F3qxer0TLclPn9vwZoOffVL8%2FNm80fr%2BrxTBH3yKUcSgkVf5H6tMdOKtGmpUqqfRX2jH9LvmgrAlFEld9%2FKhRyHYPw71sFc%2BI4teHzyna%2FU5IUuHemb%2FxqMpPMLW7QBUn4RORm6BFRVuBsjK3P0DPffQHAhK1cX5lGB%2FMIerXFsh7pKGKrvhMq85Zu7BwwTQDi45t3vUi4R8%2Bw%2FRixO0Fe06%2BF%2BNBNWYKQv3ojBntnV8KtNxAYDeJQmVFXmsmYcBASkprGTaWodmXyf3yJxH2uUhxYRBdArA8zyR6P%2B6DFtVBdppFnah0Dev4kouCHCRvtYpGiOKt%2BdzLZEmZ1Czmmux9IE5MSgI2Q7bwBedPl4q8I5U3k9gDgwrhpegojuEGEwubSCvgY6pgH2%2BFveSCNfvi9hnwryMp6LrCnfJt%2BovKH5u9ZDCaqjMyhyBxgXQmK3Cxunw1cQjVyWbdv7g6Z2MO1Aml3Px%2Bri3uanyuFlvhc0JpJ1H6Stjz4nYptWpfK%2BsgcMVl2NEzVyhFuMFg9ShPa6aJH5RN%2FFPRqf3aCkrApJavy7M17BhS2dY04GJKsqVklyxyUGAz5FbumWQlWiXgFcZDDyq%2BrA52Zttmu2&X-Amz-Signature=0aed1772256390819eb3e6b5e012a8476bafa6635f0c4647aa9d4cd411f0c689&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
