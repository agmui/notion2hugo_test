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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIOWHRZA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCGmBvTZ7jxmu2pgSFgcYhrw9ndpJ4Cu5NzOgJ95R8kpgIhANcrwo2%2BXoJPQBnFDeZkmSjs00H%2FBi07AALp541tJ9AsKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyT7vwkOnWiuGx1oqgq3AMXk0C4O6awAEXEQycVYziQQdgUefc0s73eDzE9Y%2Fcorp0xMP0q8BhAFzPBK3ehLrDZv513H88%2BEWllwkj98AGWY%2BHrL7dN16m7mHm%2FV7AmFejhUQCC8pG93Ms6ZzXhur3Xl9NNBEmx8r2cgu31FL2mbab15AUg9rR8E95DwqmMh0JJdUYb%2FIQx6KHnCa7674rEmKPcOfbOORylpHESy%2B1587ovm1K9kC%2FxWCdhQuKLn1T1lyzWtDEVq41TOboZzF9cmhQBGBoJycQoKWZrON9FRP1dwKzgkO771N4XDWWzYm9JDYsealfBxDwEfbGyN%2B8B8lEZNgOThbdpZpuW6YnQTpC6Zc7vGO7zJIuJ6XZmrogw3M47dRLai6jGwyOS8gMBXC0P%2Bluvp2xG83cgPv6zFhutWpUiyYJe13R43DVtrh1UT4l2rPQ206ShFauB9mURcedLmrnxjUC4ZnjjwwOOQULsNQ9jxBpxnWJ6YTmiX%2Bu8s9kTibjItJQCvE%2BUggKQU9qw2clGl0CMMq62o0CCkimw7C7F8ko34tpwCT3Kftmflhou1n2aZ%2FYFz7JnPoPUbFKD8%2B0hO60D4kJsbNWbqEq1PYQWiN1Y3oEDjXxmtEbS%2FzJmqSnUTqz6pDCx68DBBjqkAQ4uLFsCxuoeS9lpy8jflsMQrGoPoac4Sij1DgkQ3%2FFaVetT%2FTei3lk2Y5h002WQRGez7ot0yTDhrw%2BfLjTmlSpKIyHzxGyxqOM1H2%2Fdr%2BJ6sKYn5ocTW78x%2BiYIlqYiwj3p3ZtYUak%2BKrm5nbHNIn%2F4T08LVh%2BD7x3ulu%2BDsPjZMMF3fHXUDPCfbJ%2FhVlqpS5IZF6mcryxgOykh6X2LBfdvl0Wo&X-Amz-Signature=ef03c46e3b337a3779756052f0bafd24cb27f6c92c1af4166aa9ee825d27039d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIOWHRZA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCGmBvTZ7jxmu2pgSFgcYhrw9ndpJ4Cu5NzOgJ95R8kpgIhANcrwo2%2BXoJPQBnFDeZkmSjs00H%2FBi07AALp541tJ9AsKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyT7vwkOnWiuGx1oqgq3AMXk0C4O6awAEXEQycVYziQQdgUefc0s73eDzE9Y%2Fcorp0xMP0q8BhAFzPBK3ehLrDZv513H88%2BEWllwkj98AGWY%2BHrL7dN16m7mHm%2FV7AmFejhUQCC8pG93Ms6ZzXhur3Xl9NNBEmx8r2cgu31FL2mbab15AUg9rR8E95DwqmMh0JJdUYb%2FIQx6KHnCa7674rEmKPcOfbOORylpHESy%2B1587ovm1K9kC%2FxWCdhQuKLn1T1lyzWtDEVq41TOboZzF9cmhQBGBoJycQoKWZrON9FRP1dwKzgkO771N4XDWWzYm9JDYsealfBxDwEfbGyN%2B8B8lEZNgOThbdpZpuW6YnQTpC6Zc7vGO7zJIuJ6XZmrogw3M47dRLai6jGwyOS8gMBXC0P%2Bluvp2xG83cgPv6zFhutWpUiyYJe13R43DVtrh1UT4l2rPQ206ShFauB9mURcedLmrnxjUC4ZnjjwwOOQULsNQ9jxBpxnWJ6YTmiX%2Bu8s9kTibjItJQCvE%2BUggKQU9qw2clGl0CMMq62o0CCkimw7C7F8ko34tpwCT3Kftmflhou1n2aZ%2FYFz7JnPoPUbFKD8%2B0hO60D4kJsbNWbqEq1PYQWiN1Y3oEDjXxmtEbS%2FzJmqSnUTqz6pDCx68DBBjqkAQ4uLFsCxuoeS9lpy8jflsMQrGoPoac4Sij1DgkQ3%2FFaVetT%2FTei3lk2Y5h002WQRGez7ot0yTDhrw%2BfLjTmlSpKIyHzxGyxqOM1H2%2Fdr%2BJ6sKYn5ocTW78x%2BiYIlqYiwj3p3ZtYUak%2BKrm5nbHNIn%2F4T08LVh%2BD7x3ulu%2BDsPjZMMF3fHXUDPCfbJ%2FhVlqpS5IZF6mcryxgOykh6X2LBfdvl0Wo&X-Amz-Signature=800641633099f07e4d8f3e1c7d80f3d7563e484cb03c77726477dfc8f7d60085&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIOWHRZA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCGmBvTZ7jxmu2pgSFgcYhrw9ndpJ4Cu5NzOgJ95R8kpgIhANcrwo2%2BXoJPQBnFDeZkmSjs00H%2FBi07AALp541tJ9AsKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyT7vwkOnWiuGx1oqgq3AMXk0C4O6awAEXEQycVYziQQdgUefc0s73eDzE9Y%2Fcorp0xMP0q8BhAFzPBK3ehLrDZv513H88%2BEWllwkj98AGWY%2BHrL7dN16m7mHm%2FV7AmFejhUQCC8pG93Ms6ZzXhur3Xl9NNBEmx8r2cgu31FL2mbab15AUg9rR8E95DwqmMh0JJdUYb%2FIQx6KHnCa7674rEmKPcOfbOORylpHESy%2B1587ovm1K9kC%2FxWCdhQuKLn1T1lyzWtDEVq41TOboZzF9cmhQBGBoJycQoKWZrON9FRP1dwKzgkO771N4XDWWzYm9JDYsealfBxDwEfbGyN%2B8B8lEZNgOThbdpZpuW6YnQTpC6Zc7vGO7zJIuJ6XZmrogw3M47dRLai6jGwyOS8gMBXC0P%2Bluvp2xG83cgPv6zFhutWpUiyYJe13R43DVtrh1UT4l2rPQ206ShFauB9mURcedLmrnxjUC4ZnjjwwOOQULsNQ9jxBpxnWJ6YTmiX%2Bu8s9kTibjItJQCvE%2BUggKQU9qw2clGl0CMMq62o0CCkimw7C7F8ko34tpwCT3Kftmflhou1n2aZ%2FYFz7JnPoPUbFKD8%2B0hO60D4kJsbNWbqEq1PYQWiN1Y3oEDjXxmtEbS%2FzJmqSnUTqz6pDCx68DBBjqkAQ4uLFsCxuoeS9lpy8jflsMQrGoPoac4Sij1DgkQ3%2FFaVetT%2FTei3lk2Y5h002WQRGez7ot0yTDhrw%2BfLjTmlSpKIyHzxGyxqOM1H2%2Fdr%2BJ6sKYn5ocTW78x%2BiYIlqYiwj3p3ZtYUak%2BKrm5nbHNIn%2F4T08LVh%2BD7x3ulu%2BDsPjZMMF3fHXUDPCfbJ%2FhVlqpS5IZF6mcryxgOykh6X2LBfdvl0Wo&X-Amz-Signature=e2f333600c2f749cc929a84cbb22a90f0701a5ca57b09272063c24781aeaca69&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIOWHRZA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCGmBvTZ7jxmu2pgSFgcYhrw9ndpJ4Cu5NzOgJ95R8kpgIhANcrwo2%2BXoJPQBnFDeZkmSjs00H%2FBi07AALp541tJ9AsKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyT7vwkOnWiuGx1oqgq3AMXk0C4O6awAEXEQycVYziQQdgUefc0s73eDzE9Y%2Fcorp0xMP0q8BhAFzPBK3ehLrDZv513H88%2BEWllwkj98AGWY%2BHrL7dN16m7mHm%2FV7AmFejhUQCC8pG93Ms6ZzXhur3Xl9NNBEmx8r2cgu31FL2mbab15AUg9rR8E95DwqmMh0JJdUYb%2FIQx6KHnCa7674rEmKPcOfbOORylpHESy%2B1587ovm1K9kC%2FxWCdhQuKLn1T1lyzWtDEVq41TOboZzF9cmhQBGBoJycQoKWZrON9FRP1dwKzgkO771N4XDWWzYm9JDYsealfBxDwEfbGyN%2B8B8lEZNgOThbdpZpuW6YnQTpC6Zc7vGO7zJIuJ6XZmrogw3M47dRLai6jGwyOS8gMBXC0P%2Bluvp2xG83cgPv6zFhutWpUiyYJe13R43DVtrh1UT4l2rPQ206ShFauB9mURcedLmrnxjUC4ZnjjwwOOQULsNQ9jxBpxnWJ6YTmiX%2Bu8s9kTibjItJQCvE%2BUggKQU9qw2clGl0CMMq62o0CCkimw7C7F8ko34tpwCT3Kftmflhou1n2aZ%2FYFz7JnPoPUbFKD8%2B0hO60D4kJsbNWbqEq1PYQWiN1Y3oEDjXxmtEbS%2FzJmqSnUTqz6pDCx68DBBjqkAQ4uLFsCxuoeS9lpy8jflsMQrGoPoac4Sij1DgkQ3%2FFaVetT%2FTei3lk2Y5h002WQRGez7ot0yTDhrw%2BfLjTmlSpKIyHzxGyxqOM1H2%2Fdr%2BJ6sKYn5ocTW78x%2BiYIlqYiwj3p3ZtYUak%2BKrm5nbHNIn%2F4T08LVh%2BD7x3ulu%2BDsPjZMMF3fHXUDPCfbJ%2FhVlqpS5IZF6mcryxgOykh6X2LBfdvl0Wo&X-Amz-Signature=5e87499ce7c60394311fee9fe8f6628a9c3bf02272dc1e27f09d13b904bbe7f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIOWHRZA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCGmBvTZ7jxmu2pgSFgcYhrw9ndpJ4Cu5NzOgJ95R8kpgIhANcrwo2%2BXoJPQBnFDeZkmSjs00H%2FBi07AALp541tJ9AsKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyT7vwkOnWiuGx1oqgq3AMXk0C4O6awAEXEQycVYziQQdgUefc0s73eDzE9Y%2Fcorp0xMP0q8BhAFzPBK3ehLrDZv513H88%2BEWllwkj98AGWY%2BHrL7dN16m7mHm%2FV7AmFejhUQCC8pG93Ms6ZzXhur3Xl9NNBEmx8r2cgu31FL2mbab15AUg9rR8E95DwqmMh0JJdUYb%2FIQx6KHnCa7674rEmKPcOfbOORylpHESy%2B1587ovm1K9kC%2FxWCdhQuKLn1T1lyzWtDEVq41TOboZzF9cmhQBGBoJycQoKWZrON9FRP1dwKzgkO771N4XDWWzYm9JDYsealfBxDwEfbGyN%2B8B8lEZNgOThbdpZpuW6YnQTpC6Zc7vGO7zJIuJ6XZmrogw3M47dRLai6jGwyOS8gMBXC0P%2Bluvp2xG83cgPv6zFhutWpUiyYJe13R43DVtrh1UT4l2rPQ206ShFauB9mURcedLmrnxjUC4ZnjjwwOOQULsNQ9jxBpxnWJ6YTmiX%2Bu8s9kTibjItJQCvE%2BUggKQU9qw2clGl0CMMq62o0CCkimw7C7F8ko34tpwCT3Kftmflhou1n2aZ%2FYFz7JnPoPUbFKD8%2B0hO60D4kJsbNWbqEq1PYQWiN1Y3oEDjXxmtEbS%2FzJmqSnUTqz6pDCx68DBBjqkAQ4uLFsCxuoeS9lpy8jflsMQrGoPoac4Sij1DgkQ3%2FFaVetT%2FTei3lk2Y5h002WQRGez7ot0yTDhrw%2BfLjTmlSpKIyHzxGyxqOM1H2%2Fdr%2BJ6sKYn5ocTW78x%2BiYIlqYiwj3p3ZtYUak%2BKrm5nbHNIn%2F4T08LVh%2BD7x3ulu%2BDsPjZMMF3fHXUDPCfbJ%2FhVlqpS5IZF6mcryxgOykh6X2LBfdvl0Wo&X-Amz-Signature=22d36cc6c829ed33bb3cbf5337cb8b2e21393a136db7838e2ed3c0436664bcc7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
