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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIOWHRZA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCGmBvTZ7jxmu2pgSFgcYhrw9ndpJ4Cu5NzOgJ95R8kpgIhANcrwo2%2BXoJPQBnFDeZkmSjs00H%2FBi07AALp541tJ9AsKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyT7vwkOnWiuGx1oqgq3AMXk0C4O6awAEXEQycVYziQQdgUefc0s73eDzE9Y%2Fcorp0xMP0q8BhAFzPBK3ehLrDZv513H88%2BEWllwkj98AGWY%2BHrL7dN16m7mHm%2FV7AmFejhUQCC8pG93Ms6ZzXhur3Xl9NNBEmx8r2cgu31FL2mbab15AUg9rR8E95DwqmMh0JJdUYb%2FIQx6KHnCa7674rEmKPcOfbOORylpHESy%2B1587ovm1K9kC%2FxWCdhQuKLn1T1lyzWtDEVq41TOboZzF9cmhQBGBoJycQoKWZrON9FRP1dwKzgkO771N4XDWWzYm9JDYsealfBxDwEfbGyN%2B8B8lEZNgOThbdpZpuW6YnQTpC6Zc7vGO7zJIuJ6XZmrogw3M47dRLai6jGwyOS8gMBXC0P%2Bluvp2xG83cgPv6zFhutWpUiyYJe13R43DVtrh1UT4l2rPQ206ShFauB9mURcedLmrnxjUC4ZnjjwwOOQULsNQ9jxBpxnWJ6YTmiX%2Bu8s9kTibjItJQCvE%2BUggKQU9qw2clGl0CMMq62o0CCkimw7C7F8ko34tpwCT3Kftmflhou1n2aZ%2FYFz7JnPoPUbFKD8%2B0hO60D4kJsbNWbqEq1PYQWiN1Y3oEDjXxmtEbS%2FzJmqSnUTqz6pDCx68DBBjqkAQ4uLFsCxuoeS9lpy8jflsMQrGoPoac4Sij1DgkQ3%2FFaVetT%2FTei3lk2Y5h002WQRGez7ot0yTDhrw%2BfLjTmlSpKIyHzxGyxqOM1H2%2Fdr%2BJ6sKYn5ocTW78x%2BiYIlqYiwj3p3ZtYUak%2BKrm5nbHNIn%2F4T08LVh%2BD7x3ulu%2BDsPjZMMF3fHXUDPCfbJ%2FhVlqpS5IZF6mcryxgOykh6X2LBfdvl0Wo&X-Amz-Signature=abd068b289bf125462c1ba7c4cad9066d34c9adef73c2c2568a67b0416d2f834&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
