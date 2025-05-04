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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NK7NOIY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCBh80EyVVv%2FAp5Wau9wgXyenBr9MIqX3OqTYuexjObGAIgGSBUJ03M5OTjyuPrGkTu935blhQFPC9Z87rUXzk4psIq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDICbaWOuZ5vi4ZRssyrcA7EcOuNrmUgEV%2Fo8UN2%2BMp0e4cbrODiE1LuFyH1QNZlO7yX435kZrlhNCf%2FNXvLMv2LHPm7FnyTxC2aPIIbSuKFY9ExAIbkU5pvFs%2BspKfVwZFubF3uO7%2BFd4FqGrJ0lCLv%2B8QBlmahfNnV%2Fj2TduUv%2B7cBjUscy7GtSr6WI7inubOKSf2pYuergovlHn44DFUIXnQCEA45EVQDQ4zymjlbNEdPhexGEoD7JnVj2m3nEIMkV2Xem%2BNoo20t37aJ%2BT2rUnXymFwYnax%2FIkOKRqRRtHR6xW569CnQ9UjzS4hxfR3RJh62qLYONpHS2Dao3r72afgs9x2b%2FuiLZXQHhHkbRyGqOzMC0h5JrDRn0z%2BMcMupNBX1J7rcLI9995FTKzsja5qx5W%2Fzxrk%2B1F8HSbNppTjn49%2BhOWyD%2FFppRJpXNGT%2FjNPFvNrwe6%2F%2Bi4BlPi42qJL%2Bk9lU0U88Wxi3cMYf5GhbZw%2BNISAjHlwoCUuC7V0ipMXb6BF8RzT31FnYU9edY1ZMzB7Z3bO5ljYazK%2Bn7TB3yYUM3%2BkO%2FxJnSHihJWECnW2oL05g1ZLAyLCoqCeRv3en7nL2F2lNm55VDduwd7UzdBFiakLU2pOKG8MyuWcbbkONMInJwuQe9MNDO3MAGOqUBFrllIOCq7YaH812u1smSi4udoQMmhYjkaCYadXGhtGEGU0ELRjzGCgswojPzu1DpEorsQzoPHJ%2FcEHntHs0%2FYjOXIcXp%2FoEpKPYXbJylVCJrxM1ZB%2BcxYIDdCWOJ77QEIYSt633ebFKEaRnxiTCwV0k%2B7D9OmhbluT54OsvdOUDMPQ9PpppqdT%2FwQ%2BkxkDiXACTX%2FujoAg%2FiAEyCMclxtqS%2Fb8J6&X-Amz-Signature=c7b2e14a206f918be07c038f532f98f5b43911724da0e7434383308b918c0ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
