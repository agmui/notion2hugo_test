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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2OQRW7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIHiD96Rm15gPOG9nvmicMbktFoyaN7HiDY7gajmbKMyCAiAoqWvgBbwwj%2FPWe9dGFlReGF1nIUyzZquY8P7mmNEzsSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BMIDVYnPfoDOXwztKtwDvLDaZ6g%2FMot58xc23CdQ6xyAY1CuRh2dExSXv7pXhRl%2BF5yPxyyCqVkItrk9GftveU3P0evIZdAUJBSmGRqH%2BoAHZoGO2BjXQaX33mK%2B7p4n9Y%2FanD7eH%2BCpYmLVXpXfXXSB31vGuLuka4%2FWaZXZ7wP1LZXfwboIf2w3auOZXZgLtksCP6E9qE1BjLtXMlm5MOGx0HFO3pWsUHayDHMIi1isPMla5kP1e0Kwr6TDnSEk7JmR4EpTG63RkTrp%2BkOjLO3wHvCL22KIkMSkU9H41l%2BmZJ8%2FunN1YDSlQ0gQYX7x7ZCOiH0PCoOtAsPdXOZ24JZomB7fRhpBCpQyA5c912jAF8T0hXMoKv2qZOhn39ViqiAqJCO%2FgG3JvCZ9KHC6jMYYmolaKLyYzMts9MN7x%2BB%2F7%2BDtw%2BSUjbyoz1ics%2FLpyLkP29ll4dv3Jmk3YtY5hAsnI76wvX8JsYKrYovAS%2FUnk4pByjYJUzvA2sYPAphz5LbJ4rxEnV09vA6FqybXteo1XtUjHY92rj9XpoQzhOb%2Buq4IDYx%2B%2BkzoBh6Bum2%2B1OMZ2bbw3quM%2BXdI7OriY8KLG4i%2Bh3XFnQhbvdkrJZvg8kBPGQ1EHrtV5Z6XbYunEKh%2BRib%2FH4zVE2sw0cjQxAY6pgH4nUtY91qkLRgkS5M5Gj9Lk35e4fDbEyM0Sr%2BHLTu3%2F2V2H5wHzFrd4xCmHz9lQ1cpUqQfTKqz2H9FDugcdHpNs6BR8JnhruZ9hGEQzPkXqJms3SmixtlisLKf1qXvww5ypWwU5KXRuIAth7e7j5kQ%2FpnnW4JWH%2FxEyCKzv%2Fe2FtfGVpJpYUD%2F0mbB9VJC82IODWSWoqoUzu7avPW%2BABqR%2BhT95hZh&X-Amz-Signature=7f5da7c0922e633e87ff1d3f1de8ec400832ab2bc4060325ea707c594a7fbc8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
