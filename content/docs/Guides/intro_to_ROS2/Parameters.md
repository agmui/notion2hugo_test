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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPH43ZW6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEL5AQImhpXi21ZnA7Jfc0UErTQIWte8OSly7%2FrV9A4gIhANsXTdyxZg9wK4DN%2F4HDftOT%2BVEJ0u74FZuL9HDSBcepKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd309ljtaD49x8DZYq3AMx%2BNIyXBylUozqDLvHq%2B3fYOrfMkzm%2B6CCBcJAGnV37e8FAcuXtsgFQ6VGterurne1zxlSM2l9v2qKD4xLu0Nw7%2BDb9XzY55Rs4zlkKPBvVNGuvhhQWEnT%2BHSd%2FC6bCaTVrTamBSOYee%2FT0SKuhRAcA78xCQ1itafSq%2B3VBnKpbBdiTrOGuoBfsCFWxYTObONJQPGw5lNcOzGa6O9sysJ3LYbSFLE0%2ByEWj9UXuu%2FxjPwMAG8Gdr9AF6a%2BzvhMyRoDYYOEwvMxZvxkvWPDubQ4%2F1K4fYQtFZlXk0Wyy3XnvYAsp0sXMGMXpKdKQZhSHzwojZXhZwjleJgKxPtP%2Fdr%2F372q3EWbAvv%2FlR%2BZssYbjKFqliGH77b8VG37L82CmnzcIfxQOvNV3A0P1XmyiIM7s2JqjUGy8%2FAZIMT%2FJ76ERC4HlqLGeoIQADCKq5Tna198u8DA9RHbIQZEDfHUrt1VgSFpsRwyvec%2BZCQYB2o0eK%2BbtFvuybksqpqKoxTK3Lc8Cm36aYh92boiZPPFeHkeVtDuaQ9q%2BzkNgJ8Hk7GnkQkMoCujvonNpWyzQTLA6mok0wJFr3EreaA%2F5m94kZsK%2FdJDWeL1KgvBK%2FpHnW96S%2FphG7ZGmBg72XDyxDDupfe8BjqkARrBtKJl3FABGi5tE%2FN1q%2FTVpHnSkfp5AMCU41h4ntntWL%2B6%2BKzBKt%2FffqwR69qZCfjVNOkBhv4rUEi1phgK2G18DrB%2BRdjXQXZyNJYHeR4y8KK5Mxg8NMnlsqUa6pggMEA%2BDLGdF66gdavkbKH5BSOIw1faIeiT5zEDhAam0JMoZtIwf0TP6WMVf0PTKo7yi8OfNDhmVKCu2fHen3n%2BjHOq5h9b&X-Amz-Signature=732d89b98d091443592d42950f2e291a841b7915b22bede3bb7753958ba7d266&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
