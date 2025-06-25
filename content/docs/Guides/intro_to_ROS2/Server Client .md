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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQJLG3Z%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCRrmpuujM04DrHMRAfZkPWD0F84i7FKw%2FPfO0iepxo9QIhAIvfnqS0zyGQK5PCZ7yx1WMcXpCM5VeVdHFS1rw2zE0%2FKv8DCDoQABoMNjM3NDIzMTgzODA1IgyHHtGBIh14MxoeYvgq3AOh%2Fsq42PQFaTfSPEETgk4PrBnOxNXI9BQx2h%2FHB3lXUGSQbUM9ULK228IoGja9Mh8skLJSSYut6Ox579GhYyM6G2zKumBFWy9%2BtJX3%2Fa0uMqo%2BHfPDdk7NTsLQemE8VgWIcHBi7aYJ3Tq5INdOTwsympwlGb6MpUipaOjyS69LL8dhpQfh0wVR0xN1BBWceBEjDUp4iGvDpfdNUB7QExn5HUrpSiB79vXvSZrBIVg%2ByetwpQ%2F%2FxES6ymEIvdruymXAIlMHKBLFlX5Q7iEu%2FZpHmfPFVy%2FNLu81Xi6D8rflKbchyyuFr5OmpFMQ6rjBYQIsbdqUnrGOE0Bt1RK9s59%2BjsUD7VfxU5J%2BmwgDuc5zNVlQuQLprJyjsWDlffNiUI%2BbMgVtZ6zvMq5nXEKvdQsaTDgPoTGEOU2uqY0MjixrdJ15T1gpLltRYKPhmEhoo4sk3mGGAh37qf3tZnE4y6Rtuk6obsf%2Be%2BNHUJv3P3xdJXU0jfOnaoWddzvxzcdHfkPl5Qjcvn5e0Wx4soHnl2SvFepL4P5ldjYA%2By%2BT17OYXxh7rGptuGBztdH6EYhh1glW1KERg9UNn78ip%2FlFa0kJueGPWMttuITuXQ6hFQDVtmnK29Eb6psZQxsIejCKl%2B3CBjqkAaNsdM9vyZ1cT23DS17JvF8zVSDyaLILaQLiJjYF6U2gvhLma6UzHI8Tb%2F2DFI7axvYFLnNoU%2FR27K0FpIn5rmSqBLlhscihxKjLVGc%2FyN5qoW7tnOiF85K%2BzFsdd5ytSuua5praXy65jzO3tVUCKLM8sa8Wm3JIWZfjNckBTMnbYWNUnYIPr89vMCxQhC%2FynAUTJcNoocoWh5VWel71omtOhY%2Be&X-Amz-Signature=8516536b96ae9e3ffb6a125cc117882413206840dcedf98fef99dc00d3b23006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQJLG3Z%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCRrmpuujM04DrHMRAfZkPWD0F84i7FKw%2FPfO0iepxo9QIhAIvfnqS0zyGQK5PCZ7yx1WMcXpCM5VeVdHFS1rw2zE0%2FKv8DCDoQABoMNjM3NDIzMTgzODA1IgyHHtGBIh14MxoeYvgq3AOh%2Fsq42PQFaTfSPEETgk4PrBnOxNXI9BQx2h%2FHB3lXUGSQbUM9ULK228IoGja9Mh8skLJSSYut6Ox579GhYyM6G2zKumBFWy9%2BtJX3%2Fa0uMqo%2BHfPDdk7NTsLQemE8VgWIcHBi7aYJ3Tq5INdOTwsympwlGb6MpUipaOjyS69LL8dhpQfh0wVR0xN1BBWceBEjDUp4iGvDpfdNUB7QExn5HUrpSiB79vXvSZrBIVg%2ByetwpQ%2F%2FxES6ymEIvdruymXAIlMHKBLFlX5Q7iEu%2FZpHmfPFVy%2FNLu81Xi6D8rflKbchyyuFr5OmpFMQ6rjBYQIsbdqUnrGOE0Bt1RK9s59%2BjsUD7VfxU5J%2BmwgDuc5zNVlQuQLprJyjsWDlffNiUI%2BbMgVtZ6zvMq5nXEKvdQsaTDgPoTGEOU2uqY0MjixrdJ15T1gpLltRYKPhmEhoo4sk3mGGAh37qf3tZnE4y6Rtuk6obsf%2Be%2BNHUJv3P3xdJXU0jfOnaoWddzvxzcdHfkPl5Qjcvn5e0Wx4soHnl2SvFepL4P5ldjYA%2By%2BT17OYXxh7rGptuGBztdH6EYhh1glW1KERg9UNn78ip%2FlFa0kJueGPWMttuITuXQ6hFQDVtmnK29Eb6psZQxsIejCKl%2B3CBjqkAaNsdM9vyZ1cT23DS17JvF8zVSDyaLILaQLiJjYF6U2gvhLma6UzHI8Tb%2F2DFI7axvYFLnNoU%2FR27K0FpIn5rmSqBLlhscihxKjLVGc%2FyN5qoW7tnOiF85K%2BzFsdd5ytSuua5praXy65jzO3tVUCKLM8sa8Wm3JIWZfjNckBTMnbYWNUnYIPr89vMCxQhC%2FynAUTJcNoocoWh5VWel71omtOhY%2Be&X-Amz-Signature=ed26fc5619e1871c59f642e0075a1003eb884654217a2101e7700b9b1352e3d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQJLG3Z%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCRrmpuujM04DrHMRAfZkPWD0F84i7FKw%2FPfO0iepxo9QIhAIvfnqS0zyGQK5PCZ7yx1WMcXpCM5VeVdHFS1rw2zE0%2FKv8DCDoQABoMNjM3NDIzMTgzODA1IgyHHtGBIh14MxoeYvgq3AOh%2Fsq42PQFaTfSPEETgk4PrBnOxNXI9BQx2h%2FHB3lXUGSQbUM9ULK228IoGja9Mh8skLJSSYut6Ox579GhYyM6G2zKumBFWy9%2BtJX3%2Fa0uMqo%2BHfPDdk7NTsLQemE8VgWIcHBi7aYJ3Tq5INdOTwsympwlGb6MpUipaOjyS69LL8dhpQfh0wVR0xN1BBWceBEjDUp4iGvDpfdNUB7QExn5HUrpSiB79vXvSZrBIVg%2ByetwpQ%2F%2FxES6ymEIvdruymXAIlMHKBLFlX5Q7iEu%2FZpHmfPFVy%2FNLu81Xi6D8rflKbchyyuFr5OmpFMQ6rjBYQIsbdqUnrGOE0Bt1RK9s59%2BjsUD7VfxU5J%2BmwgDuc5zNVlQuQLprJyjsWDlffNiUI%2BbMgVtZ6zvMq5nXEKvdQsaTDgPoTGEOU2uqY0MjixrdJ15T1gpLltRYKPhmEhoo4sk3mGGAh37qf3tZnE4y6Rtuk6obsf%2Be%2BNHUJv3P3xdJXU0jfOnaoWddzvxzcdHfkPl5Qjcvn5e0Wx4soHnl2SvFepL4P5ldjYA%2By%2BT17OYXxh7rGptuGBztdH6EYhh1glW1KERg9UNn78ip%2FlFa0kJueGPWMttuITuXQ6hFQDVtmnK29Eb6psZQxsIejCKl%2B3CBjqkAaNsdM9vyZ1cT23DS17JvF8zVSDyaLILaQLiJjYF6U2gvhLma6UzHI8Tb%2F2DFI7axvYFLnNoU%2FR27K0FpIn5rmSqBLlhscihxKjLVGc%2FyN5qoW7tnOiF85K%2BzFsdd5ytSuua5praXy65jzO3tVUCKLM8sa8Wm3JIWZfjNckBTMnbYWNUnYIPr89vMCxQhC%2FynAUTJcNoocoWh5VWel71omtOhY%2Be&X-Amz-Signature=58aa18e06fd044d2a689a1e0c8507ab6fa79bca70ae70d0209fb51085ececeb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQJLG3Z%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCRrmpuujM04DrHMRAfZkPWD0F84i7FKw%2FPfO0iepxo9QIhAIvfnqS0zyGQK5PCZ7yx1WMcXpCM5VeVdHFS1rw2zE0%2FKv8DCDoQABoMNjM3NDIzMTgzODA1IgyHHtGBIh14MxoeYvgq3AOh%2Fsq42PQFaTfSPEETgk4PrBnOxNXI9BQx2h%2FHB3lXUGSQbUM9ULK228IoGja9Mh8skLJSSYut6Ox579GhYyM6G2zKumBFWy9%2BtJX3%2Fa0uMqo%2BHfPDdk7NTsLQemE8VgWIcHBi7aYJ3Tq5INdOTwsympwlGb6MpUipaOjyS69LL8dhpQfh0wVR0xN1BBWceBEjDUp4iGvDpfdNUB7QExn5HUrpSiB79vXvSZrBIVg%2ByetwpQ%2F%2FxES6ymEIvdruymXAIlMHKBLFlX5Q7iEu%2FZpHmfPFVy%2FNLu81Xi6D8rflKbchyyuFr5OmpFMQ6rjBYQIsbdqUnrGOE0Bt1RK9s59%2BjsUD7VfxU5J%2BmwgDuc5zNVlQuQLprJyjsWDlffNiUI%2BbMgVtZ6zvMq5nXEKvdQsaTDgPoTGEOU2uqY0MjixrdJ15T1gpLltRYKPhmEhoo4sk3mGGAh37qf3tZnE4y6Rtuk6obsf%2Be%2BNHUJv3P3xdJXU0jfOnaoWddzvxzcdHfkPl5Qjcvn5e0Wx4soHnl2SvFepL4P5ldjYA%2By%2BT17OYXxh7rGptuGBztdH6EYhh1glW1KERg9UNn78ip%2FlFa0kJueGPWMttuITuXQ6hFQDVtmnK29Eb6psZQxsIejCKl%2B3CBjqkAaNsdM9vyZ1cT23DS17JvF8zVSDyaLILaQLiJjYF6U2gvhLma6UzHI8Tb%2F2DFI7axvYFLnNoU%2FR27K0FpIn5rmSqBLlhscihxKjLVGc%2FyN5qoW7tnOiF85K%2BzFsdd5ytSuua5praXy65jzO3tVUCKLM8sa8Wm3JIWZfjNckBTMnbYWNUnYIPr89vMCxQhC%2FynAUTJcNoocoWh5VWel71omtOhY%2Be&X-Amz-Signature=9e3822801fd56a0ae0664b04b447657c80bf0d82f5360fbf43fd38f831475474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQJLG3Z%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCRrmpuujM04DrHMRAfZkPWD0F84i7FKw%2FPfO0iepxo9QIhAIvfnqS0zyGQK5PCZ7yx1WMcXpCM5VeVdHFS1rw2zE0%2FKv8DCDoQABoMNjM3NDIzMTgzODA1IgyHHtGBIh14MxoeYvgq3AOh%2Fsq42PQFaTfSPEETgk4PrBnOxNXI9BQx2h%2FHB3lXUGSQbUM9ULK228IoGja9Mh8skLJSSYut6Ox579GhYyM6G2zKumBFWy9%2BtJX3%2Fa0uMqo%2BHfPDdk7NTsLQemE8VgWIcHBi7aYJ3Tq5INdOTwsympwlGb6MpUipaOjyS69LL8dhpQfh0wVR0xN1BBWceBEjDUp4iGvDpfdNUB7QExn5HUrpSiB79vXvSZrBIVg%2ByetwpQ%2F%2FxES6ymEIvdruymXAIlMHKBLFlX5Q7iEu%2FZpHmfPFVy%2FNLu81Xi6D8rflKbchyyuFr5OmpFMQ6rjBYQIsbdqUnrGOE0Bt1RK9s59%2BjsUD7VfxU5J%2BmwgDuc5zNVlQuQLprJyjsWDlffNiUI%2BbMgVtZ6zvMq5nXEKvdQsaTDgPoTGEOU2uqY0MjixrdJ15T1gpLltRYKPhmEhoo4sk3mGGAh37qf3tZnE4y6Rtuk6obsf%2Be%2BNHUJv3P3xdJXU0jfOnaoWddzvxzcdHfkPl5Qjcvn5e0Wx4soHnl2SvFepL4P5ldjYA%2By%2BT17OYXxh7rGptuGBztdH6EYhh1glW1KERg9UNn78ip%2FlFa0kJueGPWMttuITuXQ6hFQDVtmnK29Eb6psZQxsIejCKl%2B3CBjqkAaNsdM9vyZ1cT23DS17JvF8zVSDyaLILaQLiJjYF6U2gvhLma6UzHI8Tb%2F2DFI7axvYFLnNoU%2FR27K0FpIn5rmSqBLlhscihxKjLVGc%2FyN5qoW7tnOiF85K%2BzFsdd5ytSuua5praXy65jzO3tVUCKLM8sa8Wm3JIWZfjNckBTMnbYWNUnYIPr89vMCxQhC%2FynAUTJcNoocoWh5VWel71omtOhY%2Be&X-Amz-Signature=cc90ea6d3dec2512588c6d67f47902596de9f05c825b0e4bcead344e54ac9d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
