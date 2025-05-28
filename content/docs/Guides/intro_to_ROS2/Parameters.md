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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMVOWXSF%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyZU%2FY2B3MjeAMcn418UImKx1%2BNJ6P8QoWLITPFN5h0AiEAkkG2MKqKjaPlv8qm7K8VUVfxLFY2oPaXO092pHpcHy0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCGnM0xioO1FdrxP%2FCrcA3j3wKrd06L4YKvFf7df7sE36Q5NkXpnGixW8kXZRO0tJMHutC6luBQMw8pRjYDN11xGsjpUXVAXWCVfwhNJgpkjUbEoSkyoPFFm4baNmMTHWtkZf3dYxfZQNaPGKBJWxrykqASrOxlQP61yW35Od2hHIM8H%2FAN%2FcbdpWgYd6Jo7OwBo%2FXpt5c9RYQplerVJ0W6xIFeDBxzv7L4DUac37o%2BG5HitQAbtg%2BKMMDekip3RdfSibqeWNbEEZMbRZjcAa2Swli3%2FdSgce8I%2BwGy%2FOMRyuX8Lw4KGOPrjQsjrMMZHcNfzcUZVvE2ZgyUuQcSl0R6hBlg5pTRigouHnqSOxrkDV1IUS8D8gYRrcJdGIUYHvS%2B32QYqIdgHQ6Gl0wiHaYxRIrtceRrdC2OrMa9cBfd7qHEPk2uKJPqZS%2F2Dl5%2BHV11vyX%2BMIfbVD1ajA4sckGrynStJ4zyU%2BV4mOKug6ZH1CSb44TimYTgPjLtlWzBnZNgKFzPGfV5Fc3%2BATfhq2m4YyXPyPMWhEsG2LfG0Lt0zysOp%2Fq2afiJ16RAeKpPkpZ5yc7BiuZfayQnVYSrUQq3UaT0BgRV2RPfIjNCb%2BS1BpHs66L389%2FCFz0swWPUajZEnlg%2Fa1JhLymT1MKHN3MEGOqUBi%2F8Q7eKOyDY8XfY2dHqaulv5slJ%2FjxObSb3KQm4yOPmjFrDYiG84C8VVvxUcIKXdxYJsCFC2a49p5oyIT0NU6iHtJ1OVrrpRdr4yPHdbC4ejsi9z%2BTldtOwWZjFEOpPJoGI92KBL01MSsCBJqCQ5lW5myiNe9w%2BRy0FYzaXtKUseWI9sVs6g5A8Q%2FY%2BAdo%2ByAs0qEBt4LcxYT%2B%2BURYxp93DMMZMO&X-Amz-Signature=a0b0ae0d949f5afa838d07fd1068b4d29a67c9b9b8e7297f1e16077fa897cf5e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
