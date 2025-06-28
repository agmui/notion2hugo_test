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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2WXPQK%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFVnm0sZQZvmNy1UWyfdxKw6QaiCYb13DNhP5ZBoqIBwIgDwoCxQPk4ghD3Wn3KreNPdR62OnXEQdbZZixibxChzMqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKanK7SRvs9LHRRgnyrcA1ERhPDLI1M3zNHCy%2Fm1QQ5qo4OesW5HwipCfyzY2Otdmsn5P6Golwrao0m4o%2ByG2DnpXfpqrnCJUovuFsDp7V9i8m10ixOfo4ZSCVZtjSiMa0SAjlCiX%2FfvgrG%2Fyeug9xdaHh6EU%2BNFjmjdGD08OQAmXM3zu%2FbCEEPMOD0ux2%2FPn8%2BF2m0PNFfg1jRZY1jBbMicLJdypkX0rbdRc%2FhcTQ0D1QwCTgRj1neofOQrFOz7aYZyNQ6IYMZuh6%2FcsNm1F91C9lJabqzkj%2BRPaQYrm%2B8%2BMCuBDZ5QXFGYu0mCikNTS0qed%2FIyqe2c9ecfZsdOtiifk1kobmt%2BlVT6%2BzpMnvrYYxjfwbRIbID3e%2B7e4Tkt48eJWnOeXiF6Dzz%2FQkTFKUxlR3BYQlq9aI%2Bna%2FQcbwwMG87apecBaztVMWk9nf%2B6%2FwbumUWQ7oSKQ%2BTIuirZjL3FU9FDRALdm2lLf6j8RHF6iXd0E4D4cwX8znRqZ2PJZiDKVGeLl%2B5XrTbKhxQIsCQMbtJqeRms%2F1NqontGARz1ZigEpjEH3s9ufubsqHkqC0ryP7GgSlvjCABCWV74RQU4I3ndvi8aXNuM5xYq1IaOGgo3jyHA7l6serkwId0aGpizcYkaeWpzADeCMOGg%2FsIGOqUBCFpyjCfymEj21yI0AlZdWNdGh3K4Jc1hfRbU0YxzmwLqfp2aUqohr53%2BoMthU%2BzdbyW4AOzZYDAiRANW2pYiLtN6A7JK%2BGDM98vEWPE977w%2FJlF09Ql4l%2BGUMwagt8FfUz0aERhVP6c1roiTmDIaw2u%2BrGY1cabCfgdUkASP3Tlhaqo9SsGdifbc7Wab6bYXg0wMvVJl%2Bm57QDqMqqcdGjhnYD5G&X-Amz-Signature=9ddad911ed918eb14318ed0e09df4c8da4bb8bd76683a93e779a47e70e38101f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
