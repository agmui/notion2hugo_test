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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG5DTHE7%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIDQ%2F1OrlNCc2shrC2jT1oHWCukvuwr7buC4am6BJ4R2tAiBQyLXP5N5yMzXMSgQknYq8rME4njHzBSq2F5XcLF4eTyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyz8R1JvcV2jTqTTSKtwDvnsUb4g4zoBbS47qHX5BS8yvGrg4IULCDM%2BMN0GPo5RsDuNVOokhnwyYGm62psfJ3p95NshO%2FCex4UGl%2FBK8Vk4PVOVG1suOZENXoFOkkaoX5bdELFGJMzHg%2BzJJs52jyg6R7Xk0PZX8i453OR68wTMtCmg28SL2xWKib4MkVPhfFJb3K4XoosJGit68LaWrqq%2BNluSxnHpfIbmJBJGLW56KXjCrz9LOdUGR5g8u23MjL9mp8FvEvgS%2B6VpZbAI%2FDMqijTMYpJDA%2FgH0du8gNYdbzaK5eQcR9fIE%2BLrh8jlP8QZag7d65oCnxkEjgPDMI93VAkgV%2FnLoaDg5yaKu4UwE5JyVxoGn4c5mhf1y814DQMqG5oXPZfa%2FEVSwCrHyRA6%2BtbddByOq2GF9OUCo6fUddpofD8%2FQ%2BohxlJ0fCnPMRR5ZrUrTPefXV5IW8ZJytIJpa61STq9TUAxts0FqMk66vV6qGZVuIAnMj6SoqL8LeFFAmMtNfIrh9S9xGx6L8J%2F81fntpGGikQccTb%2BkIoTOrtxi3Mxt61CdLduCjBo350vzJqEGmyZurEJTNf%2Bl6PVrY%2Bm0XavwQSE346bNPakzEXJflyjVBVGaWEGfzGW%2FM2i6Ti%2FYqCsdtmQwzMrjvwY6pgH9VyrgV%2BFxTFyngG2aDDPWuTlUxlHOdDJu0LxjIbGxTdctKnMf8VB%2BTpCpxq9XjKSGJLxqVWRudLPOUAlNFL41CJ3RMaY%2BZ9mj21xUwfYU0nAVxIwqPZWIwnQQLUtO7teZsyFAKlSd81C%2Fm5R8esybWULKaN6MIchm6JLX%2FrzKoHOtftK5PzhcDqmgJLVK4EyekTDEgJTEv%2B62d11nQaJ491shNLTk&X-Amz-Signature=2a94108600b2414ec16aa92884abddb0bb5a265d48a1a5ca618113fe80cb248c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
