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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GARDPAL%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFRx4bcqKSo%2BRqSih92j0ohW5KfoBWDeV0TlfNGd9Mg%2BAiAjAXOkFUcAHmUtV7ph0DTcYr%2B43xDng7hdDDPJWNpwyCr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMRg1KCWQ8H11xLEIXKtwDu3uVzKWWom04M%2BUWEv%2B8864QY5HadNk%2BAzBUOl5iIxuy74YGCzbBidmUveTrnQkh7UUMTCaKqruDKZQvCYM3WqzbMC6BqfFyB65mn1qonSC7aKw%2BFG%2FxYCe%2BhH4VZ12HhQL4NE6eh1idZPV7sf13Fg4204FYSLGHBPuGlYLbQQDyq16xuUOqi%2Bv3EWSfKw7MnIU%2FOHcY%2FfyOHHTI1B790dCN4YbbT7%2FFhqv8TRpA8G0w7MYmncRjxbimB2PNMRE8md%2FWd7UPqY1%2BHF8HIY4b9dXkhJ7VfP6xALAO9PU74X2M9nDzWE%2F2awI7kvFxpAhc4zeOlbRtTTUJWrFYlIWsJLqWIJqIMUsRcrMz6mrgvZPpJbOo0lbarpiD%2BYYhxWUz7Dq7qMp61zwSig%2BTMNnDX%2BRm5uPDrrMZAguZkjsJ6Hjcsp02wbyN%2BUI1DfFdqSWBqd1He6Ctbr5tQFzyE5YdbxFyTGZjvK%2Fb81itecRCpijW5CDEVlkx73oku6%2BSRmxWVkhFW518iqWW7ExmfnTshDgVmWqEJlF7NPCv9qLkbxlQlAm5nZD0xvVaTa6f31x%2FyH7Eo1lfLnPGo%2FL4fGt1nwnndAfFpOFZZneRQEimBMTyXfPXHwhTHJShyxUwicCEvQY6pgGZ%2FglZoArFq5QoDFjNbHdyLxlS6pfj0dBeVLIXHQX9JaYTDMxeyHSIbwFTj2oLxvTnIx0FlDaF%2BFGegaAjEo1jBEIiS60cOX3bhKsoItnaphuvEpSs1Tl1MXsrG7MBISa3mBHwSCeoT7fxL5C8CDuS8SVZ8wS5E8PDGxsyjigiExgr0mvcW2K%2BEqokDriuNYS6AyXjjUV4Jyz9fHrsiROQGSo0uVp5&X-Amz-Signature=db601f4ff47a55e54db8883f80f7007ece4325386475fe844becb075bace658b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
