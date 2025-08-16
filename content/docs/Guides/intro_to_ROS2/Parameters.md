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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M5FKIEW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBjUp8stCPs54gnwvHLGQWXy2Gev3kODcLmd73ujpR%2FwAiEA0mwO75ApEoky8j9pw5SGTe8UTw%2FkULShBA60x4ucnbQq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNByZx55Qn4H78xosSrcAytTXhePW2TpfsQkXc1kEDvVWqVmvhgRbjZGxWnWo4e%2BIPJ1a0lBsVDWgjICrFolR7q7lvYuealxgz4t1gLUczvYtzvPgkFs4xvV8CCQe%2Fs3um3tswhOMQD%2FT1UUcV3C7oitQmA%2BvM8INWo%2FaRuymuLr1h7xyR4Mc3OHYX3J5JjuCGiqcpjLkT2AVmOiPQaEU4Rvcj2ueDQG7vZXlE6mvIZjjO9Fmd14AAILfixFc%2FUiAou81JMllIOFMqW%2FjseVV5JFtiiqQjza%2Fi6aAjDUuI5jTLHkZgKBzafsL4BR%2FhY8m70%2FU4hJbCwsbMbPMV%2BaNMbc4Ip2bKE3csFP%2B4c4iUKsTDE2bIE3GFmjm6qsHwduihU6LgHf0CZs2OYh0U7gC74tE6tFzsyvWvjetZPr0vtFu0ZU6K5J2FV4nx8475fDrdaaM5ExrvEU7WqKtCyYOtKGeZZ43xaF5%2BNqtuRQBxxPyYPKOaIB4o%2BVRdoStzOgLfjFXc5OWTOhlPEXxUwkr7cDw%2FN0RYRmCVfObvLgHh3vCgv36xu7JaB%2FP94xtM3rk8rq3Sbaup8e2AR2XDf6xJ3RLg7iYi9d3tXtN8QyCu8faD3CLahlQsyrnmWvT9PeBsvKdNfT2%2FQMQpGYMPnX%2FsQGOqUBrUmxynttTq6RngWgN40TaZBCJ%2FUSrv6Ah78KJlZyNdPu755q7NVnSBsY%2BrCvrgzgA6UeoSLWFvXhSH%2BYqUZRHzGyS3yC3Tdrv94Ji%2BS2SARoP1j%2BUoAYEPFRUIYg%2FvxuV9%2FmmolTa9wxQkJRte0TFmlhlkSLdj5v3JvgePfzvVrKw6fRu1MeuOYEu5dGTo9gmnSPvMsUWAWmHJgYUzEvrT1RmLQX&X-Amz-Signature=4af00347998c40419e9dd6421a32946fe656fbe805a56da60abac9a9eed4edd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
