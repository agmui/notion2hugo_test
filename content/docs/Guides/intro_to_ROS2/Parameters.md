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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q26BVO22%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCefo60yKzBR0wS0p224IwH0RvpBsL1w6FDLwurZyUEXQIgReI2vYNn9WiHfAObpnSRZD054abil%2BCm6QdMMG3q0ccqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBe0e3NGdBLTy8CFQSrcA2AWiHuYe8mrZfxwjmE6mE1MQOyC7MxdgO9VhdLlKNcSu9xid2WBo12PdxjWPo8Q%2BlYcduuIzRmNMfTJWat7daih4uSQ5lXqJ24HXAjYn83gsLwBr0dNtSjCEi0EAloCRBqgZduiBBLmFPGCQc%2BPjMsBqykyFT%2FLuj4IacXCK04hko47zfsafO8uWq0VYH%2FjwUx3dwxjqXMC%2Be8fkHAS8W%2Bg3dxAqzt4qK3R6fDXMIKft7YEYuDsyGevYaAssUk6pW1JE73YT4LniczwucEwR1ZMWX1R%2BwOcahL6EECGfL%2BhfzVJTwEQXdgZs%2BripfBsZZcK3UJgwY7DdtaE0oZyKoRFx%2FRn82nEaQwbXjWv4uowG07wx0TR67mHVbrG1efbBt97mjE0NfptoYkRBOvoAk9ZPuNbWP7daTnNgrxSZvTk75dWUIdC2AhaXOs3m9mxbk8%2BKaf%2FGNeAd1Mc7vJybzetF6wx93g1HTufyJED4V5rIBpojLSPF32w82zxBg0OB7z2GX0TK6HrVsgCTWQ2zWIf5o1LvXNIE5r8TXYleWXNFW%2BrpeaGeMJwXFNiBHt6KIBVz2jcWGZsToFapQMiH0pXiD9KTgeekfB4U50PMHsUjp5hDOYZRDeKq6uPMKno%2BcMGOqUBVrtUij2C6wlLomnc3uZ2VFy3zC0oQsI4ycs%2Bnq%2F6fV%2F9vpbUks%2BrM1az2JBb1%2FTB%2BNXPnN5gR8nBVr%2FKJBUvnOCoWh1rOGY%2FMJTIfp8HBBoj%2FwyzQOkjFIy%2FSCFI4KPaNGYFbQaNR7IUYkZeICW6TrbdN%2BA0WPfdlivan12OaAw1R6jytIW5KXZayBRsCp8K6qyovIwW53p4GiK4rnwjYOnwuFa8&X-Amz-Signature=9c322c615ddb6ea1ddd0e3c9733d7f076cccefd24fd8fb9174a63882dbc1be3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
