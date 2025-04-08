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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCGUGYM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXlVrBVeCygyYleOh87b2o5NPPfL9r71FiSke4MB26sgIhAPygepHeVurZF%2Fo7lfW%2FG3M8SGy1IcrY%2B4VOjQVxfm76Kv8DCGgQABoMNjM3NDIzMTgzODA1IgwTkCVLIjkIu0uiIZYq3AP5KheWQRMI2K3kBgvCYTaBvFPKkbO0WCX9wdywDkBpwxT7%2F4CgMIO%2FO4aAxRhHM8pvSx6%2Bj5PQ2i7WHLqfWHx%2F1VcQzQ1ZxBYE7pJXX518Gb%2FU9VQy0O3dUOush7cjlMMSV3nH25QM2XkfTeN8PO3DQSeQ0qiw9iC6hfst8NvWSE071nYYcCnXiMWta6OVcGJen%2BEbg%2Fy%2FLHq83aFhBR5dAb4kRnNawVR7FU7e0Uwqmr6eHEhIU7tTkNpj16Qqu%2BJ6S7sSKPWnz9odOc63Gck%2BWcyNMWwHcDfFn3binzS2nhruvJmWBzLNa5ePGLv1kN%2FfV0ru%2BL1YHuQCQ%2FOKEVF9DN6EuWg2oT6R62yIIEsU5wbdL0KMArpwYXP5yBONeM3tWKieXGmXSEwsgspE1y3hOqSfGUajWvaJmis%2FTtCmRMSJ6Sxi8qb%2BL0ge2%2BIxjZuSjNLPcn47TMGyd%2FbB0AmmyJvWMc8%2B0mt%2Fj%2BlvAP2HfCixh3IVAOEt7SFKpKX5y%2BwY2ph1B51iy9tcbpWzRfGfebRrUXT4HS0ABXzHghO0IqAnN%2FPkBBeYpzmlg1NJFXWeOQQY%2FQ7IxDuzkAy0w0JYttGuwYLqaIzKnMTXA9E2vNcbGwJpysyPzpOdqjDCutG%2FBjqkAZZG2n2pf30HijgVLRk3tsNF20Ed%2BfmLnZlFcEiTQL2WpL5NsZQlRrLTIZJbhrOe9Z2srmksc5qvrKPNsOlzYbR3rAUli7yHatKbhtlzQ9SoE8zlv6HBWhwSF%2FIntl%2BvlyZjkP7%2FjSfKAQq7NMGpXH0p8dMJDozRvYw6ALdZV%2FNo0uuSeSqLmZBg0NvoV%2Fxk6Rn9DTZzSJ5XLZny7KtjBuiWGXeK&X-Amz-Signature=f06eaa62c100f32a9e5822bfe5430030ec82c074e44075af09c4ed41e321adb6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
