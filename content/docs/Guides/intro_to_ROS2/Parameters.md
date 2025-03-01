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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SACARWZ2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDlTCEIqZx5d0aiNxqT%2FNW0OHcBxhELmEoG3kAPZIvrfQIgSeftNLUyLwOABfPh2aHRszdzHSjt0MBKHUS6YA3y%2FgQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwvJSt3yV3p16djFSrcA%2FYSmEfAVvAZ9lt0XmdYt5ANAv4VBckmFwKn3ZgiU1xG0EnMJ%2B%2BNPl2qEVpsdTyr6JBe5hBWUW1jQjS6K4e91LoYT7X90zbPA35ZQpVHyIWwnNU1%2Bd8ngmfICZFL87MGF63mj%2B7W8uXMNjj%2FyBgrjMHu9c4tVT7ds%2BRVovcg%2Btl65dpXxzSRx5VPDbEl%2FPQLC78GGEhzzM0WFdxQdXNaX7qVUcmQVqUiC7yrgRFDgHhJkTk9jxr0Iw2CjQ0e3n74EHXaG6uHGEpySnIteL%2BrtrN8OERRCYE%2F1rfI4ch9jT3zQIA03HFqKI2Fy%2Fo1v8BoGqWmcfFL47WXB9GusXXijsp9bwT0HW2irzAwfLWjBUM7rXJ60JbGABGxorG9VfBpvLWepVF6enXzkeAQq%2BYNle7cBF8vc4SOL8f%2Fv5fTcrbNcqUIOZYQG%2Fte6gzezgJifO3WQaDUjYioUrmNr7RL%2FiinLOEsZr7M4ztyIhlB%2FtvE30xg0p%2FLT6Jhs%2Bf2w1vH%2FE98Sz5bBZRAFrQMmI1mrqNdgoxBIg7rSbbpYsjjMsqYWwnmwyCYf6Ei%2FhqP%2FskTwmot6RBZ1KJkD8puEx84eDcDJJM4VB6R60E69IvX5Ap50qTyT8KGpYO1BJ9vMKOQir4GOqUBCCWxOhhkYRx4vnAepAasLTunS8RLr2JxJ7a1nQHkJoub0%2Fj26vbXC4fL%2FxN0eM817mpl2dAZpN75iHVZpDKkq5cyi9IdD7siJ6gHaKdN2%2FfUin1pTCxvaHHR7tjnrfsNsovVSLfTeGMLSvMa1fHjrgVnmsPB%2BN6K%2FbxUm8WHeyYVd4MVv0Moj1vTWrmcZ80N4Us4VHX6s1ON4EQLQZ8xAHk0RLaT&X-Amz-Signature=83b3de4e81647833439b33707a98b2cb660dfa9b79e8776b7cfb65ae9b5f9fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
