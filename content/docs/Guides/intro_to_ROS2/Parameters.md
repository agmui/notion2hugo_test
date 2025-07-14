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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KXWR266%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIC9UHZ01wCM%2B%2FTUAURMipyimJH6tb5hRKgjHTNSxl3rXAiAJjTmU8ywbTNx5TkS4jxMHqfC4xVvrkpWt9f913UvIuSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMvdUNHmvMoYFfLNofKtwDU7LLhsnuUgubGtJAHcQKiU5lB0Zzfz9RnPTC1ON4jRYZ%2BCuxmLHAjv4bFGhZmFi8phdM7Ffv2ty0Kb%2FlAI4r%2FojAb4bZkBXwlqXJcODj%2FqOLFyygON0gkmrEC4V%2B7cVpZ2Fap6nJzvVIWncCRyQu3L7AfEtuV3mHQk2AW9XycUf1UzSd2rxSK8AV2ffJj%2FrJ7HIt5%2BiiTkG%2FS%2BEztqiJ7ipBo%2BKZifLWk8hH542vAh7waeFV5TACCejVuBiEhUiCEyWHLiwp4eyfK%2BQUWNODhnwcoroKA%2BBUWRarbwJEKYtzgXiLpjV0w3hzKBa5rznO6S1OEZg5sMoXVxWzZoe3orAv1bM1iUgy0HcAUnUkxhx1G57lIC%2BLfLvNOOBlWo0pjw528MdRmt%2FwgCY%2BOgx1yzlHWz1DyvlUdwON%2BqtCF3iufM9rKIwwjdVb%2F%2BSqO49iozGR6clKQU9zWYwneJxMZt%2F5OPyTb1OeXSYYk5CvOwBdoAaZ%2Fi8RzoKRm1bZSDu5JQ3hLRm%2FvzYeOQqUMduX9aEYiPE01LNGrpVz%2F06nU9vF%2FEP8QWpV570JuRP9NXiYzkbtagUlJCpmlVQ2Qy5eXoc5G6e1i%2FfbU2VpTCym507vHzHCeGvSlG%2BfbcUwm7LTwwY6pgFxHSrq2%2BKaRKWuWGpJMzCeloO79iPALRHgeqJFvAlQYtVGpKW3q3jFrf00H9haFjxcidCBESto%2BLLGYBMzegT3pG95h%2FtyI3EFK7snyrs9IK1Mpzxl4HEMRMV93s0mIm0oTTOfbAdyQWz8Ms0INLhuv%2FlDuRv7F8Piw3x2qKJ3wyOJUcxlC5WGBwO%2F2cwHPI3RvXvzVMeOpNHhw1NHko3A2B8ze5%2F5&X-Amz-Signature=15ab6e39cf5d95ff0211d411517d7ea79989167aabbe5daee0a2c210b43419ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
