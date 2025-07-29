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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHEOSI4E%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBZbNJrgoFxoEmOpbifxqajhqE0QoSoEdQl6jrDaPNxAiEAmHrKoodf%2BaNUj7KopRQu6QuvZAO3MjlAav4tr3kVDbAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMy9UtfevsDp9CWsTSrcAzNSBxcFz%2FMrXuaL7piGpQPALZ%2FNziNoe5GuhLfF1FfQt%2B98%2B%2BXBxd1opLhLwJayGZ5OkiTVZWNva7DJXZmU0vfEq6WT6Uli8Fsus01jJaRvzLxDQp3WZ%2F9dGVZQ0cr5WF76RV6t626UL2%2FMtx6gH6vTwiBH2ToPtGeGhWxE6KChHOpn0us7FiUMMADZUiwMdTJx3EhDRpvmZWGBIrDh5H%2BFyoy5WdpeIfMDIkUtfq%2Bj98QrOzvY8o2NYcg9OSYo60kVoY%2Fc8JIcKq73dI0LySz0nx6AsyD%2BOtG51mnO%2F33MA5Jer1MVvukBBhxxxfWBDD%2BROo26QQiLZ3f0%2FzefMpc4%2FZHySOi0MwMK%2FymQZ7VmuG3JSJnx3%2FTyz1NTPOkR4OIY6gMUxWV8fVgYbn8aQgWTUYzJyZIzxqMVU%2BLkxlSf3mqRHHFzAQVpAdsHFGKiIoVMA3HDrUpALoF%2F%2BEI9MmcDF8SkgQbFXltUMvv5YgJde%2BTzYK2cbTdciNgKR1NZ4PB%2B3yU3aksnXZy8cq3l%2BovGlvg0VB1Siap0c5dk6pIBCJ%2FHWnrhwUcVtOYimixteTqaSAVPuVELFE5hzRlip33MUl0hZGLZgEFC5Z03aPO%2Fhoc9hBPJoTHKd433MLb%2Bo8QGOqUBTx6J%2BRVTXiwRUY6wEQYBuUe%2Bvilvm2OAxVshiTHjoT5xJTeq9%2FCulgTwUmQVzRBAzeNntiwQ5PV3IpX5OkejQDQk%2Fg25oVRM9QlbugGJqKsBFiIKsTBOa%2BtuMGBZ39tO7PehSmj2%2BJWthGnKfZr2bkxo6FBx4RmM9aAh60YY6GNuCiVjsCH51oSSub7GxX24z%2B4bF8T6pJcXkV9gK4pJ4xwXkKnD&X-Amz-Signature=e58a5192f08d417032ea325e5e70b77629102d025c2211c8ff0181b1d440ceee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
