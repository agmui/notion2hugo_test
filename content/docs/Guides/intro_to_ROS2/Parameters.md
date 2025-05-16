---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Parameters.md"
title: "Parameters"
date: "2024-09-02T12:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 144
toc: false
icon: ""
---

Creating ROS nodes is nice but sometimes we want to have configurable settings for our nodes.

This is where Parameters come in.

For example, say we have a camera on our robot and we want to set how zoomed in it is. We would create a ROS node and ideally, we could have that node take a parameter that asks for how zoomed in the camera should be.

Later when we go run the node we can just input it into the command line saving us from manually changing it in the code.

Let's create a simple ROS node that takes in a string as its input:

import the ROS libraries and create a class called `MinimalParam`

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
```

In the constructor, we call the parent classes constructor and create a timer object.

Then to declare a parameter we run `self.declare_parameter()` which takes in the parameter name and a default argument

```python
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)
```

```python
    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

```

```python
rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)

    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()

```

To run:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTRL5BQJ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDx8d1G%2B%2Fm5L5QCKKMh037r3qQn2ib8I4MVALShrQ6r0AiBhOJhW8Y2DzncdPAmk3RaM58XyIRFYzTY6wGz5cCU%2Fzir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMrwDs4JbTJZVvE0WPKtwDkxhj9LpEf1HmrcWdWkRIPcz%2FerA8cMERp2AImjGMX35QUdQAm%2FBwv2Kk%2Fa9tjEF7bmIhQQf%2F83kx1In5fydtYEcYfGULkHQ9dd29W%2Baknb1sdYLux9ud3UJvWFZYqCYmjXuI%2Fn6gCTOMWvAzq9ZlVCt%2F2VD4xO7s%2B7oTEgOZv2X3nPrMIBOIXSGDxJMfFuzOfHM4vjoMmUq%2Bqnn1n8sjas9eTZqOPYBGXAxZP6pUg1Cd6Dawa%2FfparSXFgUDWnslpzaFBYw%2FLr8Awoslie8%2FbWHvKtXxUCy%2BYvYV%2BOe5zPKCvxdV04FikWPLRAKEMpFtstGyAxXLAGUZNO2GBOp%2FAE65oaoSuVsV5fVhGUOEqhps2fp4gGJl5O4xQbycKQKTLq3zG4foWMc2FbxAxpWO0inJGYvn%2BtDYSWF%2FSHLDHAd55bhdoDSLY6Qch8qYHXPrV3cC4%2BCJQvjCtYTcF33%2FLfC3a6TKTymogJznXXTHHXwWO7fnXgxIJ8xHNh6g5HeSmEHJD%2FxnaO44MbGPU%2Bjgz9UvwV1I08h%2BtnsSWb%2BRXLL%2BQxhaXIYMP2isEOlKsKhFXff3NGqaMozYYodxyb88a7lqA6nrTbzBR%2FgCjqbZPzA5EK1aRBHposyFamEwkcSewQY6pgHP13sweHRREIvS4dDn1S5lYJF8%2BEjgrxI4PUAdGhqg1ZkyEbVKnJStt4yIRh8sewJxN5OSwsWUS9estukmy%2BzcXtJqSWhLceYDKw5qPw1VumzDGlrBKeXblNns7Yz8UCVAANU9xrn4CkJg0Gl0JFK7aM2l9KuEtm%2FCNtRgUJKiJ0L%2BNVMAczK7FOPho5%2BkLKbomJrRRyGtmb%2FDxeJkWm2bE3V%2F0n4y&X-Amz-Signature=8cc22cf8194fcf55e8acfec8ed6a41d33422bd5f52a96414178d31768f65627e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
