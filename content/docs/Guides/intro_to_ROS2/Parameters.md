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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UWW7JKZ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrDOQsjtCK4iDBxq3J0UKszgUhMriKexbFEb5mcI32nQIgRWW1covMb6Rr80Q%2FNgA%2B1GxzAH6MU7epBg7eQylteVIq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDHIhWvdm7jSrMgRlryrcA%2FZUSbpCsuWizwTzYbVPgXAg1qYITh92R39l2yDquZVAQ5zS6xnt%2FfIv0F0OPE8e1g4QiUMdXJUIgMXQTvEQx3GbAaaciQjHo8hvG3dtUa4bTS94WEMgiNMpEZsVgIS2A9cvVePz9VYekM2h4q5Bpl7TP0ZOc7G8i5L%2BjTAo5aG1zZkL%2FBFeWIHADbWrse5bmoY2H%2Fohv7CZhrFx%2BIv0zD%2FGcP%2BfdBVsmmfBar%2FdgUj0cyrZNCbzOCvR5XPJypKzqW1i5c1OASrrruY2AW9tkXYwSquTUUfWcLSwE%2FXIwmZzU9z6jHnpwtTrjNIOTNEhvzMpnJzLETDTRFe7dlYyRK9%2Fl1i%2F6xkBZ%2BLsosaGQmuNlVOUOH6W5X8Tpv3WrgL8U85Oq3X9UErLK63C4epD4%2F3%2BH6jXEDhYIyWbeo6AEKDGY0Ax6DQc%2FgpCasPC1unxwLF%2BAqhlgDBvGKktzQpsVXzGY8NYrr1%2Bx2PEcjrNzXZSfUWP4tCFD0y6AhODKMAUDZmlB%2BeYbRXywf5v%2F7LcFshJigunsSEHe7myNT7i4lx%2BBk%2FInad3BlTkD2hNG2EwKMoSyI6mAcwGW%2F0Ct3OBt4yNTwzv3oYNwMuvp7%2Fq8v4ePrV%2FzpxhGHwbV6bMMLX%2ByL8GOqUBEJmZjc0PK3QxhgBLGQIwNHgmrX52CI9UUy9VSP4D3TqRsQaNnRsYIPuZhePmeJCh3l%2FIEwPOxh1kvneM1QONLeK9%2FPbWse2to5v31LPyxoQhUXybfuC%2BUEhBUtjuT5%2BfZs04YJSIb4DZHz3nRpIYshwsJ0QfxzhkNx%2F7eW0yyeCwB%2BW6nos2fmyTnXLtBpBI1Pea2ltuedblk1sUN%2FNC3sqNte%2B6&X-Amz-Signature=2750486cfa123c3a3934603c5278cc9022c9f124cb3a7f02bdcf4f8babebea2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
