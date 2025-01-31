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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGXHV2LG%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcaFGxTy9d5THK%2B7eJIDenw5%2FDN42QEtwFOi4M8kczkAiEA4%2B3zkLAjNEXUklO%2FNzuJkhGvQyBAHZovWaTvWNLnIK0qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCz0cZD%2Bd%2BCl0bguJSrcAyTHt%2FC0sY3CpkNdnQdc5fDb%2BUaq%2F5sxr%2BcDO4KFyjzB58HE8vpfML%2FK4QB9AmWRXxuHc1cRQVImh8uMj%2BR0CyTn%2B6UP00lS5J6KOKNEsYusXwnhMlCL%2BNZQr7cmR39qK4yR18RpuvrzgkWPpfdT12tYEdtl4Z%2BwVkdQk%2F635PE5NlaOb9n9yh%2FIwh8RcSVaBWX1xp7evGQluvixTejudrCuJRhtlXFV%2BMZZunOAa2CIKH33Hz5ImDi18ZOVtctS%2Fbmil7fB%2FCwxjqanncZturTd4hjyOevatYTZ7ELjyrlROCrXFTR5UK2L70Rg%2FMCoJhRztpdnF98WUs5tvYA%2FZhu4FDrQK62dYEA%2Fgc3BASYVcTccNjbpSk0ruoEnmgbfHhswKP5p%2BP5hHNhHgJqet0JK2anQvfNFce4aCGRkwzpzlVs9txe7cFkd7G7PjSig99UhDU3zOGgGRyIAgj2RBScCAep0sQs3kZX5aexabs%2BeDtKCUOs6%2BxLaw%2B%2B7CKKVSf6USIVFoh8LMh7N8rVI%2B7L5VMbfFc3%2FIVRcp1vQXRw7Kda9T3m1qOAq1OJSUOi%2Bp5zQ34Ts%2FkHWk2EZoBYtugZA4G7jvh8YgjwCDleyBs5JfTPuCsdGoDGDss%2BHMKK58rwGOqUBrK3K%2Fri1vAemB0jip5k3F27PkRsj2VlBjK3NuXWfXD5HLc3xH%2Bd3TgMOILRWzmqfxq7bLvforhZ%2FJvvM1sc4oAK2OKqL885oqHAR2Kwl7YHwCG8Hbgn%2FmVygj%2F2vw%2BzLxKTGhNRzrfzKs06raOc7AT%2F%2BLpVhVtB%2BRCYUfW5x%2ByIBa1kErrwMEGlW6AT%2Bx1lVweXRlVnftInhdGuuYkPu8BbQcRbc&X-Amz-Signature=5080302ab1ca147f8ece7404676a6420ddbf59f40623c33527a3bc04c13192d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
