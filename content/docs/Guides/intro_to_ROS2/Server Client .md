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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU7GC2KY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF2rl4H1YRlx7ohIIvP58nzQDzty%2BgjSmKqXRSt%2FXy1wIgdmZKZWNfY8dVjfbQoySOxcdDgr1lRkmWo6ppbaGBSIMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B3GQ1D3EF9nbbgDyrcA%2BpbmQqZElfKbNSlR9Bgz2XPgjy0XAL5EzPPpyMLHgUJVwoVSk9NWlxLULwe%2Bdpwb0GcqE0tFyqr3mcRnWwAq%2FopbVuBfcg2Cu0a9M7%2Fs8quFypv5ABURbUZQH1y4hAvFz7UCMpFgF0b1jVU56QWHCZ2oHSkyet35Gn%2BMm1QXcedrUQeCud1qgszEN2Rdjnuof69ItF09DfeCDG0FmsLKwelzC%2F%2FKNLeGeY3YC%2BmT1KsPprogUBnVirRzsGARJFIYvWVZKkZXXZVkHgzWid%2FBQ7CZcBSo8l7%2BZnRXGcDUTHRQo39W8buAvr0%2Bs4Cr7Q%2ByWQzy6BiSTQ1iwjblqZ90adSCqSye0nUtTQj9G%2F5jXlcwj3b5afmtmQtncVF1avqIXYoXA9yf034j2rEH46PFL%2BmQ53y4nm2d2pwr16RMSOycOVTzlEaQxGH%2Bfh%2F4obCI%2F2VFvwYCEjBlPZPfI3tmMWZcRctsRVmB3ucH82O6a7FT%2FAIh6REwNdoonf%2BC5G3tCQR0%2FNx0hwihBY7IDhFdPU2ocYC0xqqrgPpSCqNgathOCxNUPsBcvSfkzsElffwdEPzKhCkuq6%2F%2B6TvCl%2FwawS54JjnKdQ7jbWPM23nDrVDWrsfkVjWics4v0JiMLiy48EGOqUBKz%2Bi2yQWSLDdY3VktQPjE02CkATDhdJ0Ooh9kiOWbIfM1WZl8WUq1OPs%2FYzDtXCBQX1ZiYoBdEWDebmW8AwBju1XKkxP040qfdGNrFjY2bmCjxVfBG36kge9VmmVb8hYz8bT1a4YPNeJ4pWCPRF92aLNSZoLk9BRKUKAGhPkMLbcPCodgo3Ptzh%2BZSlxx1RMTzkXJ1%2FNpOKwznw4uCz7AB98Nej9&X-Amz-Signature=5e218062172795431084f659d20b6d7bffc96fe3ca4c9000af84eba31dcacd87&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU7GC2KY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF2rl4H1YRlx7ohIIvP58nzQDzty%2BgjSmKqXRSt%2FXy1wIgdmZKZWNfY8dVjfbQoySOxcdDgr1lRkmWo6ppbaGBSIMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B3GQ1D3EF9nbbgDyrcA%2BpbmQqZElfKbNSlR9Bgz2XPgjy0XAL5EzPPpyMLHgUJVwoVSk9NWlxLULwe%2Bdpwb0GcqE0tFyqr3mcRnWwAq%2FopbVuBfcg2Cu0a9M7%2Fs8quFypv5ABURbUZQH1y4hAvFz7UCMpFgF0b1jVU56QWHCZ2oHSkyet35Gn%2BMm1QXcedrUQeCud1qgszEN2Rdjnuof69ItF09DfeCDG0FmsLKwelzC%2F%2FKNLeGeY3YC%2BmT1KsPprogUBnVirRzsGARJFIYvWVZKkZXXZVkHgzWid%2FBQ7CZcBSo8l7%2BZnRXGcDUTHRQo39W8buAvr0%2Bs4Cr7Q%2ByWQzy6BiSTQ1iwjblqZ90adSCqSye0nUtTQj9G%2F5jXlcwj3b5afmtmQtncVF1avqIXYoXA9yf034j2rEH46PFL%2BmQ53y4nm2d2pwr16RMSOycOVTzlEaQxGH%2Bfh%2F4obCI%2F2VFvwYCEjBlPZPfI3tmMWZcRctsRVmB3ucH82O6a7FT%2FAIh6REwNdoonf%2BC5G3tCQR0%2FNx0hwihBY7IDhFdPU2ocYC0xqqrgPpSCqNgathOCxNUPsBcvSfkzsElffwdEPzKhCkuq6%2F%2B6TvCl%2FwawS54JjnKdQ7jbWPM23nDrVDWrsfkVjWics4v0JiMLiy48EGOqUBKz%2Bi2yQWSLDdY3VktQPjE02CkATDhdJ0Ooh9kiOWbIfM1WZl8WUq1OPs%2FYzDtXCBQX1ZiYoBdEWDebmW8AwBju1XKkxP040qfdGNrFjY2bmCjxVfBG36kge9VmmVb8hYz8bT1a4YPNeJ4pWCPRF92aLNSZoLk9BRKUKAGhPkMLbcPCodgo3Ptzh%2BZSlxx1RMTzkXJ1%2FNpOKwznw4uCz7AB98Nej9&X-Amz-Signature=c737d17982f7b062fdb522f5f9f66ddaba700330040542fd98365b250691d067&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU7GC2KY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF2rl4H1YRlx7ohIIvP58nzQDzty%2BgjSmKqXRSt%2FXy1wIgdmZKZWNfY8dVjfbQoySOxcdDgr1lRkmWo6ppbaGBSIMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B3GQ1D3EF9nbbgDyrcA%2BpbmQqZElfKbNSlR9Bgz2XPgjy0XAL5EzPPpyMLHgUJVwoVSk9NWlxLULwe%2Bdpwb0GcqE0tFyqr3mcRnWwAq%2FopbVuBfcg2Cu0a9M7%2Fs8quFypv5ABURbUZQH1y4hAvFz7UCMpFgF0b1jVU56QWHCZ2oHSkyet35Gn%2BMm1QXcedrUQeCud1qgszEN2Rdjnuof69ItF09DfeCDG0FmsLKwelzC%2F%2FKNLeGeY3YC%2BmT1KsPprogUBnVirRzsGARJFIYvWVZKkZXXZVkHgzWid%2FBQ7CZcBSo8l7%2BZnRXGcDUTHRQo39W8buAvr0%2Bs4Cr7Q%2ByWQzy6BiSTQ1iwjblqZ90adSCqSye0nUtTQj9G%2F5jXlcwj3b5afmtmQtncVF1avqIXYoXA9yf034j2rEH46PFL%2BmQ53y4nm2d2pwr16RMSOycOVTzlEaQxGH%2Bfh%2F4obCI%2F2VFvwYCEjBlPZPfI3tmMWZcRctsRVmB3ucH82O6a7FT%2FAIh6REwNdoonf%2BC5G3tCQR0%2FNx0hwihBY7IDhFdPU2ocYC0xqqrgPpSCqNgathOCxNUPsBcvSfkzsElffwdEPzKhCkuq6%2F%2B6TvCl%2FwawS54JjnKdQ7jbWPM23nDrVDWrsfkVjWics4v0JiMLiy48EGOqUBKz%2Bi2yQWSLDdY3VktQPjE02CkATDhdJ0Ooh9kiOWbIfM1WZl8WUq1OPs%2FYzDtXCBQX1ZiYoBdEWDebmW8AwBju1XKkxP040qfdGNrFjY2bmCjxVfBG36kge9VmmVb8hYz8bT1a4YPNeJ4pWCPRF92aLNSZoLk9BRKUKAGhPkMLbcPCodgo3Ptzh%2BZSlxx1RMTzkXJ1%2FNpOKwznw4uCz7AB98Nej9&X-Amz-Signature=94a2712c097fb127e105471c229bdea514571d016ccef3115ddf3f1ff162d886&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU7GC2KY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF2rl4H1YRlx7ohIIvP58nzQDzty%2BgjSmKqXRSt%2FXy1wIgdmZKZWNfY8dVjfbQoySOxcdDgr1lRkmWo6ppbaGBSIMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B3GQ1D3EF9nbbgDyrcA%2BpbmQqZElfKbNSlR9Bgz2XPgjy0XAL5EzPPpyMLHgUJVwoVSk9NWlxLULwe%2Bdpwb0GcqE0tFyqr3mcRnWwAq%2FopbVuBfcg2Cu0a9M7%2Fs8quFypv5ABURbUZQH1y4hAvFz7UCMpFgF0b1jVU56QWHCZ2oHSkyet35Gn%2BMm1QXcedrUQeCud1qgszEN2Rdjnuof69ItF09DfeCDG0FmsLKwelzC%2F%2FKNLeGeY3YC%2BmT1KsPprogUBnVirRzsGARJFIYvWVZKkZXXZVkHgzWid%2FBQ7CZcBSo8l7%2BZnRXGcDUTHRQo39W8buAvr0%2Bs4Cr7Q%2ByWQzy6BiSTQ1iwjblqZ90adSCqSye0nUtTQj9G%2F5jXlcwj3b5afmtmQtncVF1avqIXYoXA9yf034j2rEH46PFL%2BmQ53y4nm2d2pwr16RMSOycOVTzlEaQxGH%2Bfh%2F4obCI%2F2VFvwYCEjBlPZPfI3tmMWZcRctsRVmB3ucH82O6a7FT%2FAIh6REwNdoonf%2BC5G3tCQR0%2FNx0hwihBY7IDhFdPU2ocYC0xqqrgPpSCqNgathOCxNUPsBcvSfkzsElffwdEPzKhCkuq6%2F%2B6TvCl%2FwawS54JjnKdQ7jbWPM23nDrVDWrsfkVjWics4v0JiMLiy48EGOqUBKz%2Bi2yQWSLDdY3VktQPjE02CkATDhdJ0Ooh9kiOWbIfM1WZl8WUq1OPs%2FYzDtXCBQX1ZiYoBdEWDebmW8AwBju1XKkxP040qfdGNrFjY2bmCjxVfBG36kge9VmmVb8hYz8bT1a4YPNeJ4pWCPRF92aLNSZoLk9BRKUKAGhPkMLbcPCodgo3Ptzh%2BZSlxx1RMTzkXJ1%2FNpOKwznw4uCz7AB98Nej9&X-Amz-Signature=9524339f84268f67072f80e71b122e6f8d0f8261569169d1b6295ce806cc513f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU7GC2KY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF2rl4H1YRlx7ohIIvP58nzQDzty%2BgjSmKqXRSt%2FXy1wIgdmZKZWNfY8dVjfbQoySOxcdDgr1lRkmWo6ppbaGBSIMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B3GQ1D3EF9nbbgDyrcA%2BpbmQqZElfKbNSlR9Bgz2XPgjy0XAL5EzPPpyMLHgUJVwoVSk9NWlxLULwe%2Bdpwb0GcqE0tFyqr3mcRnWwAq%2FopbVuBfcg2Cu0a9M7%2Fs8quFypv5ABURbUZQH1y4hAvFz7UCMpFgF0b1jVU56QWHCZ2oHSkyet35Gn%2BMm1QXcedrUQeCud1qgszEN2Rdjnuof69ItF09DfeCDG0FmsLKwelzC%2F%2FKNLeGeY3YC%2BmT1KsPprogUBnVirRzsGARJFIYvWVZKkZXXZVkHgzWid%2FBQ7CZcBSo8l7%2BZnRXGcDUTHRQo39W8buAvr0%2Bs4Cr7Q%2ByWQzy6BiSTQ1iwjblqZ90adSCqSye0nUtTQj9G%2F5jXlcwj3b5afmtmQtncVF1avqIXYoXA9yf034j2rEH46PFL%2BmQ53y4nm2d2pwr16RMSOycOVTzlEaQxGH%2Bfh%2F4obCI%2F2VFvwYCEjBlPZPfI3tmMWZcRctsRVmB3ucH82O6a7FT%2FAIh6REwNdoonf%2BC5G3tCQR0%2FNx0hwihBY7IDhFdPU2ocYC0xqqrgPpSCqNgathOCxNUPsBcvSfkzsElffwdEPzKhCkuq6%2F%2B6TvCl%2FwawS54JjnKdQ7jbWPM23nDrVDWrsfkVjWics4v0JiMLiy48EGOqUBKz%2Bi2yQWSLDdY3VktQPjE02CkATDhdJ0Ooh9kiOWbIfM1WZl8WUq1OPs%2FYzDtXCBQX1ZiYoBdEWDebmW8AwBju1XKkxP040qfdGNrFjY2bmCjxVfBG36kge9VmmVb8hYz8bT1a4YPNeJ4pWCPRF92aLNSZoLk9BRKUKAGhPkMLbcPCodgo3Ptzh%2BZSlxx1RMTzkXJ1%2FNpOKwznw4uCz7AB98Nej9&X-Amz-Signature=721cffb86825ad3b06f841ba954b108a2ccdaf9d4ad0d5fede45765bff3dd197&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
