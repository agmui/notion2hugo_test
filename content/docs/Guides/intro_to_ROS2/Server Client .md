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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMKZ7HD4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrRYZvp1K3ZGReZBQGSpvz3DResiw7Me554DjpfDWzgAiAcGJybPa9kzJeGnL55N3byvE4W98C2wNmbpMhEFv1DFCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM2y%2FbACsWrUkeLGewKtwD2jEbB8RxMswsJ3tE4wVIGHb3u7vjPpN7j7XJ%2F5tGvYdG25U2lpCZmuYiY3lTL%2B6wbIKLeIvEgDiY74bCI5EzOtvsbVg8ovldfFFpZInAAu9TwdcoCLM9x2XwtT3EyKJwBYaZh%2FguZy1l5YNhpjh6Exq6TsJAhS4yyp8NqPV%2FcPQinFNFT9Ykzd5kSqTigIkEUo0VR2M8pzDQTMpjM%2FoAxzcHx4oBhLvG7ZWIRU9BrIBaZWwrLE%2BwzlyDqS6P4X0vgXsVCvWyhcs3WlSfrOtt5UtmZdEAH9opLN7wjFbZWZWKqwFx7I1T%2F9joWcL8MkN4wQsPwvQHPpik9rEywq2OHAdARHjgRxZqj541mOiT7daevbm6gWzWFpe1h4fQbu%2FcZONPSq1N6KjpUBjZ818rVzzwegwq9YXAUI8sfdd4GMlWTNaLJeqW9x9Gkm8Fmx0irPF7MG%2FvKguBgKmgOvWD0XYoWooEjxyQNt6YzffDI19B1rmRv0dfCyp%2B1OJD4t5jAQuew0VKPfucj6J1uah%2FQ75dEuZpNprxtINeRlehymPyEFVPsg6VZcYMnczQZev34b2RgD71awUt%2BqhuyIv%2B4Q5h4dlA%2FhzQoTh4yF0PELIE0ZQ6QJj7FmoPLx4wzcqswAY6pgEYF2%2Bym2Sk%2BlySHhGmS52s5d1xq0ng7gnH0wzpcrFQ4uE47B2jsnxBoYS%2Boq55%2Fi8TSSE4YWnjSpWubc%2Fxdy4X%2B0f3ALnft%2BQUDB%2FBgoQ%2BWVYBD8HYmVVAl3q2JDwpHF1MtGtzAcCLulGv5CrARsqhocHisP7OPtsBM5cpnPGIBFHtCHzTO%2FHYdDLEbGxSYAP5kKVDgHNKFcmDQdFAREJ40P%2FclwLX&X-Amz-Signature=b3ea8f1362a04628cb3e039e5229677d7dc2f81a891ffd62e367ae099d7493f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMKZ7HD4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrRYZvp1K3ZGReZBQGSpvz3DResiw7Me554DjpfDWzgAiAcGJybPa9kzJeGnL55N3byvE4W98C2wNmbpMhEFv1DFCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM2y%2FbACsWrUkeLGewKtwD2jEbB8RxMswsJ3tE4wVIGHb3u7vjPpN7j7XJ%2F5tGvYdG25U2lpCZmuYiY3lTL%2B6wbIKLeIvEgDiY74bCI5EzOtvsbVg8ovldfFFpZInAAu9TwdcoCLM9x2XwtT3EyKJwBYaZh%2FguZy1l5YNhpjh6Exq6TsJAhS4yyp8NqPV%2FcPQinFNFT9Ykzd5kSqTigIkEUo0VR2M8pzDQTMpjM%2FoAxzcHx4oBhLvG7ZWIRU9BrIBaZWwrLE%2BwzlyDqS6P4X0vgXsVCvWyhcs3WlSfrOtt5UtmZdEAH9opLN7wjFbZWZWKqwFx7I1T%2F9joWcL8MkN4wQsPwvQHPpik9rEywq2OHAdARHjgRxZqj541mOiT7daevbm6gWzWFpe1h4fQbu%2FcZONPSq1N6KjpUBjZ818rVzzwegwq9YXAUI8sfdd4GMlWTNaLJeqW9x9Gkm8Fmx0irPF7MG%2FvKguBgKmgOvWD0XYoWooEjxyQNt6YzffDI19B1rmRv0dfCyp%2B1OJD4t5jAQuew0VKPfucj6J1uah%2FQ75dEuZpNprxtINeRlehymPyEFVPsg6VZcYMnczQZev34b2RgD71awUt%2BqhuyIv%2B4Q5h4dlA%2FhzQoTh4yF0PELIE0ZQ6QJj7FmoPLx4wzcqswAY6pgEYF2%2Bym2Sk%2BlySHhGmS52s5d1xq0ng7gnH0wzpcrFQ4uE47B2jsnxBoYS%2Boq55%2Fi8TSSE4YWnjSpWubc%2Fxdy4X%2B0f3ALnft%2BQUDB%2FBgoQ%2BWVYBD8HYmVVAl3q2JDwpHF1MtGtzAcCLulGv5CrARsqhocHisP7OPtsBM5cpnPGIBFHtCHzTO%2FHYdDLEbGxSYAP5kKVDgHNKFcmDQdFAREJ40P%2FclwLX&X-Amz-Signature=9ebbaed58d8470f31e0a82bd722042aac99853e12a6093ceb93fadc649465216&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMKZ7HD4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrRYZvp1K3ZGReZBQGSpvz3DResiw7Me554DjpfDWzgAiAcGJybPa9kzJeGnL55N3byvE4W98C2wNmbpMhEFv1DFCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM2y%2FbACsWrUkeLGewKtwD2jEbB8RxMswsJ3tE4wVIGHb3u7vjPpN7j7XJ%2F5tGvYdG25U2lpCZmuYiY3lTL%2B6wbIKLeIvEgDiY74bCI5EzOtvsbVg8ovldfFFpZInAAu9TwdcoCLM9x2XwtT3EyKJwBYaZh%2FguZy1l5YNhpjh6Exq6TsJAhS4yyp8NqPV%2FcPQinFNFT9Ykzd5kSqTigIkEUo0VR2M8pzDQTMpjM%2FoAxzcHx4oBhLvG7ZWIRU9BrIBaZWwrLE%2BwzlyDqS6P4X0vgXsVCvWyhcs3WlSfrOtt5UtmZdEAH9opLN7wjFbZWZWKqwFx7I1T%2F9joWcL8MkN4wQsPwvQHPpik9rEywq2OHAdARHjgRxZqj541mOiT7daevbm6gWzWFpe1h4fQbu%2FcZONPSq1N6KjpUBjZ818rVzzwegwq9YXAUI8sfdd4GMlWTNaLJeqW9x9Gkm8Fmx0irPF7MG%2FvKguBgKmgOvWD0XYoWooEjxyQNt6YzffDI19B1rmRv0dfCyp%2B1OJD4t5jAQuew0VKPfucj6J1uah%2FQ75dEuZpNprxtINeRlehymPyEFVPsg6VZcYMnczQZev34b2RgD71awUt%2BqhuyIv%2B4Q5h4dlA%2FhzQoTh4yF0PELIE0ZQ6QJj7FmoPLx4wzcqswAY6pgEYF2%2Bym2Sk%2BlySHhGmS52s5d1xq0ng7gnH0wzpcrFQ4uE47B2jsnxBoYS%2Boq55%2Fi8TSSE4YWnjSpWubc%2Fxdy4X%2B0f3ALnft%2BQUDB%2FBgoQ%2BWVYBD8HYmVVAl3q2JDwpHF1MtGtzAcCLulGv5CrARsqhocHisP7OPtsBM5cpnPGIBFHtCHzTO%2FHYdDLEbGxSYAP5kKVDgHNKFcmDQdFAREJ40P%2FclwLX&X-Amz-Signature=63eeaaa3d0495f7da3bf18b295010e74b7e40b9a3d2d12fbec39afcbb3704fe9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMKZ7HD4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrRYZvp1K3ZGReZBQGSpvz3DResiw7Me554DjpfDWzgAiAcGJybPa9kzJeGnL55N3byvE4W98C2wNmbpMhEFv1DFCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM2y%2FbACsWrUkeLGewKtwD2jEbB8RxMswsJ3tE4wVIGHb3u7vjPpN7j7XJ%2F5tGvYdG25U2lpCZmuYiY3lTL%2B6wbIKLeIvEgDiY74bCI5EzOtvsbVg8ovldfFFpZInAAu9TwdcoCLM9x2XwtT3EyKJwBYaZh%2FguZy1l5YNhpjh6Exq6TsJAhS4yyp8NqPV%2FcPQinFNFT9Ykzd5kSqTigIkEUo0VR2M8pzDQTMpjM%2FoAxzcHx4oBhLvG7ZWIRU9BrIBaZWwrLE%2BwzlyDqS6P4X0vgXsVCvWyhcs3WlSfrOtt5UtmZdEAH9opLN7wjFbZWZWKqwFx7I1T%2F9joWcL8MkN4wQsPwvQHPpik9rEywq2OHAdARHjgRxZqj541mOiT7daevbm6gWzWFpe1h4fQbu%2FcZONPSq1N6KjpUBjZ818rVzzwegwq9YXAUI8sfdd4GMlWTNaLJeqW9x9Gkm8Fmx0irPF7MG%2FvKguBgKmgOvWD0XYoWooEjxyQNt6YzffDI19B1rmRv0dfCyp%2B1OJD4t5jAQuew0VKPfucj6J1uah%2FQ75dEuZpNprxtINeRlehymPyEFVPsg6VZcYMnczQZev34b2RgD71awUt%2BqhuyIv%2B4Q5h4dlA%2FhzQoTh4yF0PELIE0ZQ6QJj7FmoPLx4wzcqswAY6pgEYF2%2Bym2Sk%2BlySHhGmS52s5d1xq0ng7gnH0wzpcrFQ4uE47B2jsnxBoYS%2Boq55%2Fi8TSSE4YWnjSpWubc%2Fxdy4X%2B0f3ALnft%2BQUDB%2FBgoQ%2BWVYBD8HYmVVAl3q2JDwpHF1MtGtzAcCLulGv5CrARsqhocHisP7OPtsBM5cpnPGIBFHtCHzTO%2FHYdDLEbGxSYAP5kKVDgHNKFcmDQdFAREJ40P%2FclwLX&X-Amz-Signature=2976a4c00ce4d5ea74afe0f8a991e5bc6ff4cb48da1681c3517a3b323ae8ef0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMKZ7HD4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrRYZvp1K3ZGReZBQGSpvz3DResiw7Me554DjpfDWzgAiAcGJybPa9kzJeGnL55N3byvE4W98C2wNmbpMhEFv1DFCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM2y%2FbACsWrUkeLGewKtwD2jEbB8RxMswsJ3tE4wVIGHb3u7vjPpN7j7XJ%2F5tGvYdG25U2lpCZmuYiY3lTL%2B6wbIKLeIvEgDiY74bCI5EzOtvsbVg8ovldfFFpZInAAu9TwdcoCLM9x2XwtT3EyKJwBYaZh%2FguZy1l5YNhpjh6Exq6TsJAhS4yyp8NqPV%2FcPQinFNFT9Ykzd5kSqTigIkEUo0VR2M8pzDQTMpjM%2FoAxzcHx4oBhLvG7ZWIRU9BrIBaZWwrLE%2BwzlyDqS6P4X0vgXsVCvWyhcs3WlSfrOtt5UtmZdEAH9opLN7wjFbZWZWKqwFx7I1T%2F9joWcL8MkN4wQsPwvQHPpik9rEywq2OHAdARHjgRxZqj541mOiT7daevbm6gWzWFpe1h4fQbu%2FcZONPSq1N6KjpUBjZ818rVzzwegwq9YXAUI8sfdd4GMlWTNaLJeqW9x9Gkm8Fmx0irPF7MG%2FvKguBgKmgOvWD0XYoWooEjxyQNt6YzffDI19B1rmRv0dfCyp%2B1OJD4t5jAQuew0VKPfucj6J1uah%2FQ75dEuZpNprxtINeRlehymPyEFVPsg6VZcYMnczQZev34b2RgD71awUt%2BqhuyIv%2B4Q5h4dlA%2FhzQoTh4yF0PELIE0ZQ6QJj7FmoPLx4wzcqswAY6pgEYF2%2Bym2Sk%2BlySHhGmS52s5d1xq0ng7gnH0wzpcrFQ4uE47B2jsnxBoYS%2Boq55%2Fi8TSSE4YWnjSpWubc%2Fxdy4X%2B0f3ALnft%2BQUDB%2FBgoQ%2BWVYBD8HYmVVAl3q2JDwpHF1MtGtzAcCLulGv5CrARsqhocHisP7OPtsBM5cpnPGIBFHtCHzTO%2FHYdDLEbGxSYAP5kKVDgHNKFcmDQdFAREJ40P%2FclwLX&X-Amz-Signature=ca343904be59065c808f2e11105d476f30e95e7093b42e7b875d97855597aa47&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
