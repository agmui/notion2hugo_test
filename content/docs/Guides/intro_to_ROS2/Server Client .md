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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRW6GGY4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAocGBhHINsT2AbTZuIqgP9ZPPmmQDTRvnQcKUTR7FlgAiEA7%2FmukQ1xRES%2Bb2W%2Fei8UohvKtrCsl%2FivyIgA5UI9OUkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZWeNOeLuVM5N9oxyrcA7aC9nIWPQd6MgVGvR3%2B45JgABJ3RkBl2gh%2FTMs8mk9YQ8%2BnbsPKgMDJsRhPfYfGGb53qjIyGj%2FnIKWscMZp%2FYWxQVomIxfAh%2F1Z5NdhC7BORCZrVko%2FR059NhVArZ%2BLOQdmGdgs306ECEEPLSwaCjgrQ0SWFUOpxyDML1pGIq1wwL1lPzkaM7d90dcElDT2Sc%2FbMLBf%2BlpWktBS%2FnuutXa%2FivwKvFN5F1MPM4%2B%2FxDiWf1ztVpSbTTQXMgPQqghVa24koTQ9jWJ0tRuz9rjAWkPPY6KZZ5Bjj756PiDt%2FLjjSALuGfITQXeZZ6YQXgCq4O5HrfLNha4rhr%2BiFgUu74OEZBWYlrZW7e2xOW9Kv1zs4u5Gd5I3haiROEg%2FZnNyRUkukDejv4zQbzZFX4SBwKw6aiKhLKr7Om7Q%2Bj3FxKTCh%2FZqLkBa7aIALKJaFO2XoJfiUXGgJTJVcuGxIz%2FT6q9A7yktHxHYxvO3phdVq8sfumBdDsn5Yebh5O5udZGyzWwxqOMMgztAf1PIF7NtWEFDPDpJ7gSJW4%2FUJtBBhR%2FLhDnZTmc145ift8QK7%2B9EQU1eBBbk7XhJooSFrh48ywlaRIq5prruhzrqomc66AaWJe9tKwFk8jpXmyIEMKqW%2BssGOqUB9Tv8afmkBXLAUg%2FvYFMGTZ3wKP7gEGaZgZUOguBr3DaURow2NWN1lLlO8EiDlfsjEaqKRpRYMrgdbMJ%2FITwcwU2pX2TOfdVLZ%2FHMS7zyKPbFYOr7yDBf%2B98guV8B%2FhAJWJPV%2BHIGb6dYCz6RTqU5GamqKQsdV%2FJ396zBGQgLGPL51yR2r53O7b6iUeiRp8peWPcURWXMmEbGbfM%2F1gEP5207YBZx&X-Amz-Signature=3b642b6bbd5ecd10de7830d86c2fbab041c3a97c5d2a8a340897d71fa36ec973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRW6GGY4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAocGBhHINsT2AbTZuIqgP9ZPPmmQDTRvnQcKUTR7FlgAiEA7%2FmukQ1xRES%2Bb2W%2Fei8UohvKtrCsl%2FivyIgA5UI9OUkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZWeNOeLuVM5N9oxyrcA7aC9nIWPQd6MgVGvR3%2B45JgABJ3RkBl2gh%2FTMs8mk9YQ8%2BnbsPKgMDJsRhPfYfGGb53qjIyGj%2FnIKWscMZp%2FYWxQVomIxfAh%2F1Z5NdhC7BORCZrVko%2FR059NhVArZ%2BLOQdmGdgs306ECEEPLSwaCjgrQ0SWFUOpxyDML1pGIq1wwL1lPzkaM7d90dcElDT2Sc%2FbMLBf%2BlpWktBS%2FnuutXa%2FivwKvFN5F1MPM4%2B%2FxDiWf1ztVpSbTTQXMgPQqghVa24koTQ9jWJ0tRuz9rjAWkPPY6KZZ5Bjj756PiDt%2FLjjSALuGfITQXeZZ6YQXgCq4O5HrfLNha4rhr%2BiFgUu74OEZBWYlrZW7e2xOW9Kv1zs4u5Gd5I3haiROEg%2FZnNyRUkukDejv4zQbzZFX4SBwKw6aiKhLKr7Om7Q%2Bj3FxKTCh%2FZqLkBa7aIALKJaFO2XoJfiUXGgJTJVcuGxIz%2FT6q9A7yktHxHYxvO3phdVq8sfumBdDsn5Yebh5O5udZGyzWwxqOMMgztAf1PIF7NtWEFDPDpJ7gSJW4%2FUJtBBhR%2FLhDnZTmc145ift8QK7%2B9EQU1eBBbk7XhJooSFrh48ywlaRIq5prruhzrqomc66AaWJe9tKwFk8jpXmyIEMKqW%2BssGOqUB9Tv8afmkBXLAUg%2FvYFMGTZ3wKP7gEGaZgZUOguBr3DaURow2NWN1lLlO8EiDlfsjEaqKRpRYMrgdbMJ%2FITwcwU2pX2TOfdVLZ%2FHMS7zyKPbFYOr7yDBf%2B98guV8B%2FhAJWJPV%2BHIGb6dYCz6RTqU5GamqKQsdV%2FJ396zBGQgLGPL51yR2r53O7b6iUeiRp8peWPcURWXMmEbGbfM%2F1gEP5207YBZx&X-Amz-Signature=703aff638250a786ef8a207e3e8f7302d74ba1a55d5a54690c9e8f2171547585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRW6GGY4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAocGBhHINsT2AbTZuIqgP9ZPPmmQDTRvnQcKUTR7FlgAiEA7%2FmukQ1xRES%2Bb2W%2Fei8UohvKtrCsl%2FivyIgA5UI9OUkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZWeNOeLuVM5N9oxyrcA7aC9nIWPQd6MgVGvR3%2B45JgABJ3RkBl2gh%2FTMs8mk9YQ8%2BnbsPKgMDJsRhPfYfGGb53qjIyGj%2FnIKWscMZp%2FYWxQVomIxfAh%2F1Z5NdhC7BORCZrVko%2FR059NhVArZ%2BLOQdmGdgs306ECEEPLSwaCjgrQ0SWFUOpxyDML1pGIq1wwL1lPzkaM7d90dcElDT2Sc%2FbMLBf%2BlpWktBS%2FnuutXa%2FivwKvFN5F1MPM4%2B%2FxDiWf1ztVpSbTTQXMgPQqghVa24koTQ9jWJ0tRuz9rjAWkPPY6KZZ5Bjj756PiDt%2FLjjSALuGfITQXeZZ6YQXgCq4O5HrfLNha4rhr%2BiFgUu74OEZBWYlrZW7e2xOW9Kv1zs4u5Gd5I3haiROEg%2FZnNyRUkukDejv4zQbzZFX4SBwKw6aiKhLKr7Om7Q%2Bj3FxKTCh%2FZqLkBa7aIALKJaFO2XoJfiUXGgJTJVcuGxIz%2FT6q9A7yktHxHYxvO3phdVq8sfumBdDsn5Yebh5O5udZGyzWwxqOMMgztAf1PIF7NtWEFDPDpJ7gSJW4%2FUJtBBhR%2FLhDnZTmc145ift8QK7%2B9EQU1eBBbk7XhJooSFrh48ywlaRIq5prruhzrqomc66AaWJe9tKwFk8jpXmyIEMKqW%2BssGOqUB9Tv8afmkBXLAUg%2FvYFMGTZ3wKP7gEGaZgZUOguBr3DaURow2NWN1lLlO8EiDlfsjEaqKRpRYMrgdbMJ%2FITwcwU2pX2TOfdVLZ%2FHMS7zyKPbFYOr7yDBf%2B98guV8B%2FhAJWJPV%2BHIGb6dYCz6RTqU5GamqKQsdV%2FJ396zBGQgLGPL51yR2r53O7b6iUeiRp8peWPcURWXMmEbGbfM%2F1gEP5207YBZx&X-Amz-Signature=568ebdc9a688b3514a94a603123005a65105280dbbb01697453d5e3fff6c4b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRW6GGY4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAocGBhHINsT2AbTZuIqgP9ZPPmmQDTRvnQcKUTR7FlgAiEA7%2FmukQ1xRES%2Bb2W%2Fei8UohvKtrCsl%2FivyIgA5UI9OUkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZWeNOeLuVM5N9oxyrcA7aC9nIWPQd6MgVGvR3%2B45JgABJ3RkBl2gh%2FTMs8mk9YQ8%2BnbsPKgMDJsRhPfYfGGb53qjIyGj%2FnIKWscMZp%2FYWxQVomIxfAh%2F1Z5NdhC7BORCZrVko%2FR059NhVArZ%2BLOQdmGdgs306ECEEPLSwaCjgrQ0SWFUOpxyDML1pGIq1wwL1lPzkaM7d90dcElDT2Sc%2FbMLBf%2BlpWktBS%2FnuutXa%2FivwKvFN5F1MPM4%2B%2FxDiWf1ztVpSbTTQXMgPQqghVa24koTQ9jWJ0tRuz9rjAWkPPY6KZZ5Bjj756PiDt%2FLjjSALuGfITQXeZZ6YQXgCq4O5HrfLNha4rhr%2BiFgUu74OEZBWYlrZW7e2xOW9Kv1zs4u5Gd5I3haiROEg%2FZnNyRUkukDejv4zQbzZFX4SBwKw6aiKhLKr7Om7Q%2Bj3FxKTCh%2FZqLkBa7aIALKJaFO2XoJfiUXGgJTJVcuGxIz%2FT6q9A7yktHxHYxvO3phdVq8sfumBdDsn5Yebh5O5udZGyzWwxqOMMgztAf1PIF7NtWEFDPDpJ7gSJW4%2FUJtBBhR%2FLhDnZTmc145ift8QK7%2B9EQU1eBBbk7XhJooSFrh48ywlaRIq5prruhzrqomc66AaWJe9tKwFk8jpXmyIEMKqW%2BssGOqUB9Tv8afmkBXLAUg%2FvYFMGTZ3wKP7gEGaZgZUOguBr3DaURow2NWN1lLlO8EiDlfsjEaqKRpRYMrgdbMJ%2FITwcwU2pX2TOfdVLZ%2FHMS7zyKPbFYOr7yDBf%2B98guV8B%2FhAJWJPV%2BHIGb6dYCz6RTqU5GamqKQsdV%2FJ396zBGQgLGPL51yR2r53O7b6iUeiRp8peWPcURWXMmEbGbfM%2F1gEP5207YBZx&X-Amz-Signature=a05c3e0df4e4cac3d9e11055d453ae190eb3cfe58159ce3e1252ecdd3ead4d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRW6GGY4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAocGBhHINsT2AbTZuIqgP9ZPPmmQDTRvnQcKUTR7FlgAiEA7%2FmukQ1xRES%2Bb2W%2Fei8UohvKtrCsl%2FivyIgA5UI9OUkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZWeNOeLuVM5N9oxyrcA7aC9nIWPQd6MgVGvR3%2B45JgABJ3RkBl2gh%2FTMs8mk9YQ8%2BnbsPKgMDJsRhPfYfGGb53qjIyGj%2FnIKWscMZp%2FYWxQVomIxfAh%2F1Z5NdhC7BORCZrVko%2FR059NhVArZ%2BLOQdmGdgs306ECEEPLSwaCjgrQ0SWFUOpxyDML1pGIq1wwL1lPzkaM7d90dcElDT2Sc%2FbMLBf%2BlpWktBS%2FnuutXa%2FivwKvFN5F1MPM4%2B%2FxDiWf1ztVpSbTTQXMgPQqghVa24koTQ9jWJ0tRuz9rjAWkPPY6KZZ5Bjj756PiDt%2FLjjSALuGfITQXeZZ6YQXgCq4O5HrfLNha4rhr%2BiFgUu74OEZBWYlrZW7e2xOW9Kv1zs4u5Gd5I3haiROEg%2FZnNyRUkukDejv4zQbzZFX4SBwKw6aiKhLKr7Om7Q%2Bj3FxKTCh%2FZqLkBa7aIALKJaFO2XoJfiUXGgJTJVcuGxIz%2FT6q9A7yktHxHYxvO3phdVq8sfumBdDsn5Yebh5O5udZGyzWwxqOMMgztAf1PIF7NtWEFDPDpJ7gSJW4%2FUJtBBhR%2FLhDnZTmc145ift8QK7%2B9EQU1eBBbk7XhJooSFrh48ywlaRIq5prruhzrqomc66AaWJe9tKwFk8jpXmyIEMKqW%2BssGOqUB9Tv8afmkBXLAUg%2FvYFMGTZ3wKP7gEGaZgZUOguBr3DaURow2NWN1lLlO8EiDlfsjEaqKRpRYMrgdbMJ%2FITwcwU2pX2TOfdVLZ%2FHMS7zyKPbFYOr7yDBf%2B98guV8B%2FhAJWJPV%2BHIGb6dYCz6RTqU5GamqKQsdV%2FJ396zBGQgLGPL51yR2r53O7b6iUeiRp8peWPcURWXMmEbGbfM%2F1gEP5207YBZx&X-Amz-Signature=569c6dc47ddd7c3cf50be485e50433b5a639df9d32f8420d8cd81d9aeb43337b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
