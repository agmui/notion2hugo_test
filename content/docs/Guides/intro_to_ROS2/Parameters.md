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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NKU3UIZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAa%2B3iSju%2FMRMC3eRacujcI0fe%2ByVdK6Db96fQBOFesPAiAQbU2eZma0Q0BBWv0V0mbUz%2FekL2bBWOOSUXkI6DwAgyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMj%2BmtpI8J1NoQyx8VKtwD9d5cV0s6LsovLZ0FgCMAf%2FRsT4hZ3jRmA%2BkjGPQRKfK7k6w5ySZ7ytqE5%2FF73mJGthWZO74b4wXLbgtmfZTVKBict%2BGvrRmCRx1QYorXUzZ2ULylbocjyewJAw8fveyPlcZkZZPi2DEfgBZlehioC5ul1lLRU%2BrMbdLPTsk12B33iaUy4qFxEk7d6v7a53P50rUCWAgO%2FGNi3tc1Lg%2Fx19HYdpvN4FO%2FGaK%2FKdMF9jfxLE5ZmJfdX6GcsxEsxHn4X%2FB7c11T8X0Fp9NrK1PYQUJsvKvnBbo%2FRQA1UES%2Bz%2B2X8jP0g5HRIlgmJWfax4D18GiyBQL5fNa%2Fzt%2F121PXFA7%2FWl4z4CgHXDP1BLNOXqv54PanDnrfn2RyvZgGG%2FqP1o6MXy8OWejNql54JNnalmfGykw6CvpjWG7NcD1w58OxbtOxxSr5nTFVyVDaM0hZ6DolXhYyTzApfE6F7QIuJtnFR%2FvuE2FJNIffhK9zFYcAR1DF0R%2B%2B7tQkcrLHibNEA7WoP7S4qMnThgPHHXTWgeOwkMsCxp6gObKEgUSBaPjl5NCNydSjw31v2ytcKDCfUgxbYKtiiHhTDm2QNG7b06mrfsLZWm73lbsJ4d5cVxb7SlAA1cz6fxpGngMwv57PwQY6pgFi3zLkVNuTTUhskiyLqSEtJrQV8itCImFDbWctA1w0kNWGvLysivnZiA3rRt1Shi0cF8QoUQtgSUvq0ZReCg%2Bk8Uidaqc548r6EIBBtvv0UTSsNoMLPjnr6RMcZZ%2FNM7weLieKg%2ByRN6xSxkB%2BOlW1lMqOJQdEA63l36qtTJKQ8N%2BzZccuAJemFNTol0FPBmc%2F5%2BZUlTW1FRPwO%2Fd1leh6%2F1XweqKi&X-Amz-Signature=a1f924a73eb4283d8a033806f4799b90d434177cc874e0f9d1e8e75b869686c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
