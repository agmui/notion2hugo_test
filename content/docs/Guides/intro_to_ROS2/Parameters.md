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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JMH3CFR%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYcnRw0ttmXVGIFWSJ6v%2BSkMyFYIy85dvrW8WI5bv45AIhAN0tldafixvGbaJuaxdkjG8qbi3YMYZnB2%2Fs3Vg75PEvKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwutPd0w5cTxgNgessq3AOGlgnMOYLIw7Ij3Tl3oZDWdbtMgFL7bw0SN%2F08GouTHMHrNKlpApxuEyadUivYLUHlnedjpYU63cOP68gLUvdgIcNClJrbV64l9UB5%2BsjB9H8djYYmwHdqM9n9CWr%2FDgZNgQbtLmjGVK1ZEdXfehqjscn0LQ5clXxfbt5%2Fp4hEYTHh7gVNpopeqbpHxrrB%2B4J6Ay2MjE2rc5i8VBLG11WJrTG8aqdFG34lVpqcSG29ng1NaXXmb9EuwsJcPrswZuCZcs7q6kZ%2BdzU1dPmj%2F%2BuMj%2FfWl0DEdBenxDlQka83xgVdULrmfCsZkqEeaS%2BW03bET%2BLJQ1lR6fBRZnugF8H5WDGHCUTtH05V7zIOPtDULafZgby7XiGDtIiIdC%2FfKPTBBiQ4SlERtf7w4PqzumWPvbf41b3v%2Bnv5bcSpAP4CIkeKoAY7k3KLxeWxho6ViDN%2BIdMShTZwjG9NmHUb5rOCKvbQRaTgljBGnG2wko39ywUH3opo66ERj4dspCTe1tAhK7p5Q5ByNnJR6a5Q%2Blpt5Ua8x6O9r1M1s0amCAr9ycGOanj6z%2BoiCcJMYwH%2FmUm%2BTBpQSWTIZCvwQOS70N1IMHQRgT7TYaVBHwS5wzeKtfQfCHgclgU6B3lsrjCTpezBBjqkAdbYkkZ1HHrsZ%2Fk7K5X%2BB7P%2Fby2hv5YVwHDJYbWu6CluUTzT2uLkHyQg1%2FUM%2FxlVaZYOkgDtDmWOqmS1yXDK9h72gX4r6PxEwWBxc0LlwFk0ffjPiNqQwR0PJlRpO9k7GYGovJNqoTMMtXvjGXAy8IaUDdyiSFljz5E6oVqvRoWWkbze0zBXkJ7mxMezXZCoaGUyRll42vKeWgAU46AHyojaqp0O&X-Amz-Signature=2117096ecaa7417a0acd234f6d32e332d9f8ee48c79dff8cd7ad284bf36ada2f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
