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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJZP3RVP%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkdriN9UuJSMFqp4onmMhd%2Fr4TQoX2KJXPK8qzZ6JUXAiBGMvAXTsY1mqYnbT6svUx%2B0651cZa3ks6nZCdVjQYw3yr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMYNngzW2KiCu%2BCP8eKtwDROsyH3kt%2FNmZKQQcv6bfgOTNKmBi3jLiZfI4OQqSTIla%2BK3Jx0zu1BZb5s%2FiJT9%2BR06WUU%2Fg35xB%2FCcFk1bKY5db%2F9Xm7wEoEnripp3CZiVnyTws%2BoYGaTC96OxlE9pmFB74VG8RUsaLBYtqfYDYJl3bY3Et2zFs8Zs5agwFCJB4n4eoZgSu009dfhCe5BX0vJHO%2Fxw0NRXSg3pngE1tUXJCnoy8oQWgGaRCVDtIG4KZnsvcEV8eW1nqdmxC5nIOkDDm4aASccxeotzlSJcYw%2FhZ8BPh37MjUumtljhm4m9d%2BSBDmPDihNfptj1Uk1brAkXTi8MmfRd2tNmNfs5cg1hsaVhe0oeexVuTqr0Ha7pu71wy73y7gY5YHlj5zqWU8zslqgrEijBuGELT%2Fl8dJxPRnLqXQmhfvqIqYw9gurk5C905PrWB9fNtlh9vN3SBvTsj%2FuWD7wqFVox8DzB9yT%2BOujgorAsdqk%2B6a50guC73cRirSkSPBCIdObxtE6l6ZLmnhfMdATO9pI6CdBg5726efuUExw9Mis%2FYWzG2PvEkoFzz643mD2fPTu3BKifrEZydzTp6i%2BdKQ%2FwFNU%2B7kmUC9sSKlRXDJTgwZMuOm%2FvyOtMuuRBTqLRHw58wn5e%2FvwY6pgGrAJUlGVjWUc%2FyEp%2FboSXS8pkCdbaIB4jz%2BZv3WauYk%2BPgYMnfzuwaAbFmsJRIj0qEJCpI7sCKsgDQTNNTonS6S4TdH84BXo43%2BC%2BfSXEWM%2FNb7Hiu%2FY1Ox7wb3jQOdBD68CjAqA2YQ%2B%2BGmf3QQvEG0qsE6OdiFD4Xy6nSEuQw%2BxwOrl4trs8OAe%2BIVDKtHMtaiDOY8IroIqCR%2B8vAxJU%2F0ZWj4U1d&X-Amz-Signature=e4984977f86f1b81132c8ac22ad6738d038bdf6eb7d2e8162f24c427ecad2f89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
