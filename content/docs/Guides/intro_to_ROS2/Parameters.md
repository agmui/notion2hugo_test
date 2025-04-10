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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NV6D35L%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIFiFv36kJdGJGDp79ZSRDGxug1L9LrnfvUjEA7KGI7lKAiEAlprotb9Hlg1z1BJE%2B1w%2BscN9tJXqs1Lcgo4vDWpWRNkqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3VZVaCErBlezi4ByrcA3rZdJbPRwp4BrlDfq8TeUYaUmmXoeyhh7wnRtSn9E%2FSKhZvNcIEy5Bs0htGSkC4piDPX4iuMEEAEi0712F7XExBDTEaYlFCqdiPGX41Xt4FWWiaoFFusH7nHdiF6dak5F6w92zT8bheCAbIsoRBNTa%2F1kTxi%2BtssR79jUrWldpVkbjkQgNBk3k4CcVJuAr7HGF8ztpc4bagvNGQnA7wsEtWLkUaAUJusgQ%2FFYnbFA%2BDrFjYw4WfoJanbbEFgRcV7G4Zl4hw%2Bk0ukwWrSC1fFE5aZyULLVGLO8gqwCy5WzTYScmIGOTKpgl8f5eKW3RzFIEMOavAeJOTDbJDsp2uT32WYzt3GzAE7FwoSBW6RhA%2BhDfx63d6jGffAeYXF3Hi44pd%2Fe%2BfxFGI8uLn4cXmTPlU1dYbOumSahBwIq7EJvoTVvlIuDQFWZK3wkJWj%2BQsZmof5vthIb0vdcP3ekS5oJMqqewVDvrhpIdPOIVZLl%2BCZmqW31SAHG8XnSuaNvFKbQ7Saf49Annrc9AnQymp380akvYBmm0kkVXHhSHrz%2FtwdPManRuRcLgm964Q4GfcABkj4v8B%2BJguPjlEy%2BIZ0elwshGOIEqy%2BASOXEiXxBwPzv6glplzbq5qpasSMNS5378GOqUBtc%2FmqCIPVYktLQNU5ad%2FgDB0K5EUMwNteBfF5Iuj2TEzplNEv0PRpmrgpZ3MZKwE7m4wDGfuOCbVsROsiaAA3d4DBa2591z54VqoUU1L01vmY9nR0GK9sTIVczLStmjQWkzD1Fv1VD81QJAxBsQF%2BEQyoV8YbAJcxh%2B6x3Z5obgd3YTD68vHu3gSaYpT2UekC4lXCSYeap7D7%2BGNHL4u5UsD8klv&X-Amz-Signature=80431dc7e8c1981ac16bc23e275fba603c824d19d5883d6ddbb8367d76fcd1c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
