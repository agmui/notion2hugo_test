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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AHDPKPC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2Fz0lMgoUtQwJShkOZNZYgKoelC8XMYO5x31Qir%2BXyaQIgfAarpuvw4eSJsMPqKNzIely33Otqki%2F%2BOl%2FmkNOaun4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDM9ij4IB0WaHN80ysyrcA0IOb1ReU3pINldhrHhJDGAyP%2BYai2cMWfD2gipvhP5H%2BkxjeDf7QJpLE7p8A%2BipZTKv2pDwkZVIil1GbonIbYXh1Ew53vDIiQfoSaZFUGoA9Ch6N%2BK7F6rhSpsSz6HNoTivAOdVidBK9CczncJdTke4d5lauCngRFqI%2Fl27lNNo%2Bh0eAvHJV3OpuiOpDOWADgJIJvTSFjz%2BBQ%2BJ7K8Mi9z8EPTOIGJms5t%2FC3K2iJ9TRs8C8dyfRkvQZWjxmCpeG5j7QqfQVfm%2B8rPhxztxPzQU8Zqytra3Ga8Zy%2BEaJHzQCQVFF%2FNhDSiSbCrG8R8Gb9c%2FjONmk%2B9xGLT2ohVsR2NLPS%2BT9lwLdec5HF22gsk7RYIx5U%2Fjc3xyOfUuoF7jDDCzJ%2B0yI4iFeaUIDSYP9JVgCzdxgYWLvPaWLZFBUueDbQROcQaLmKjlEOO5pogkulMWWXvfGdGBHmIBujq1xdGo7KmvxQDfNltCEnzKqsMZlURSplqbEw3b92Z3tw9R3gJjwoKDW6UxMs51g3BZkc46H8gNnJRrvcOJ%2BfD99AV5O8Q5ChZSMbL6bLMn3LOLGABgFmTsH3RoP%2BWouJrtIhuvTPYwffrNTlc8t%2Fn9vCb9aJn1NyBHqNgPm6XaMInikcQGOqUBOciRUxbksFsC31JhgEUW5cp29OkD2V6Uq6eIzvMv2T9dIyuVmgf8P6NNC6O%2BbmUwzXwY8w2N1U31Eafc295jMAavA6vmem7JX2nNd%2F9JdHVpzVbTnvxoKDYwLY1luK8pg0ebTsfV49omMGgwhPSl8vJ3Vt7b2XC07jU6GfYlaVctOudJ9ulddIOHzL8W6%2B0H%2BoOyImUbI3TDr1DQbsMUnwtj%2FH7U&X-Amz-Signature=e2dfd1a6d0b9820486244bc8f027f1255f59d23740851b4e3e7cb94e21be19c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
