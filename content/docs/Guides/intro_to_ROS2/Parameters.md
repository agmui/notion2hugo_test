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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I7QE25O%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvS5g9ZZ2xAdhnbBLQs7LX4hihoDtl1CHE9hYEPdnJSAiEArqsMKrB41OL27VcJoCPjVmob7FX1YyMyEfnubM1hOkYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDICsHp7gmRerlZPz2ircA0b3npG6rOx%2BID5J3mwd1vYT892OniTAsY89b5MYJKQWjrBAcg6yPBZgZ0tAJfwiEmsC0UwpO8Ea3Vx35aL3FDXuaiRySvXvpzYN8mrPamB6ftCcR5DpIldS3VF7MCZeUboMiVBG%2BYHYXhi%2BE3yPdnze1pfFvmAfCRuMuW9pwvuZiqqWGDCOlFIcOxCj%2B6upXyroZcxCzmv5v6Gmpv%2B8bpVG4y2gL%2FDA1seWHwcOySQTDyg9DfMQBseZeOMExUVIsYmrmpkTaYG50NpgPPLtEj1H%2FQkRTc1T1DGDmKoGiuApP7%2B%2BgLz8%2BTAlRfeORqh%2BSEAWUHQz2n%2FO9%2FtgBmQCRk4ihyytLlUDnWvTq42ZCl9hKYwwWWCb3lMp32xUWCnxxxPKpTbalQX3LSgoA8GQc8t5CJJDXP%2FWq9UaBxNeQcWjVtuFx2rm3IkMJ%2Bon7zHomCMa4qpYpmQCOHb8tj181wbrZ%2Bsql932%2FSIhQvQygzcjxq6oa4mI31PekPoh3Uc9qMVBXU7BjcGW%2BDfdHajQxUvGXOBhoVU6GAWbMDC9dskpF32xmiIUBBFoCOL6%2FqF7xySEC0%2Fk4uglRlxvUwcPc%2Fv5eKn7%2BYpmt9ziB7VDoQsUawOnXwkx5Tgcf2xFMI2lzcMGOqUBz3ia41L%2BJjRTtsa29YaAx63VqVt4bpdsnnIYa%2FJ7nkr3l2yKtmtnuKVrwsA1KL8VqcZuHrVCDmVVifWBVhfTzbmIfQga7dUElYOhvFxND6%2FNf%2BvlgLpV5rkqjoMKOSypiKVsnMv5zrxLQC2fyQYPqYQgUbxb8%2BpfQhZttOlkYcx5%2BSbub3Ho7AjYNNmIjw5t0CCbN2Gch1m5qwBR%2B2n1sA%2BScxrb&X-Amz-Signature=f73b8fa74b12032a228971919584b2433f1c83d6cdf8ddccba77f6f7b0882b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
