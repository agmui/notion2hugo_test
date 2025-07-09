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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZEQONTM%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN7kasXxDT7pZ9%2Bs036IlRdX4Nz8Y9vtKFkC7YoOzM7wIgWI2HkxaWNY6Ut0Gv3lDoEoO9lV4JGS%2FJvcF8L%2BwIBIEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXxaZlBlQM3%2B1OpkircA5pqi5wIOuMd3mwEETs99UFQvW%2BjauW3Pp5SJK4y5WCmU3Hp1jGXqfCo0K1qaYaFMNUDEz%2FArVdv1I5nkA%2F4lleMOPFw3WXRSextDtmYlgE545fgH2Qs6gpAlwlPKdfEFZ86a%2Fzdka3t2q0cTUtqNYcV4CDmQwJnhJXPsy61Q58n%2BWr74s8WiW0kK35JFmdjNATEOgOXifXy3%2BrFYK0U6OJR%2FrPvNmU7P0hIYM2bArPEB7oVGhdWzEMBWTkjp%2F6KTLUQzu2zxVFxm51%2BJLL0NhLDf6umIGS9rmiKeamHYRs%2BvxYSXYlyvMDkcz7X8Afwj8jeSOLsUS6vsT6DCa%2Fpa4uB%2F%2BsVfcRNumKVRVKGWgm9o6l2jv2uqdI4kPkbGOsGSY%2B2XEnMAXz%2BZU0EBmgwO2jUW80tZZ3ausGE%2BbRpWtB57m48RiHVzeCRPCQhRgp2YY9B7M%2FSssoy8ZUEcKub9HXG%2BteSx8B1QMpEsk8oIPpPJub0xp1hiE3RDjzBrhga7NcUHcB3xunTDGwEUdXzbf9aVBt2UIH4R6dwDLEp32nATzK314bAyv5d5kd5AiEZj9Tu5MIWmaGp%2Fj1sfaEVkokE823InsdJuFVtJ83NsSaV7EtItMoc5FGXMajHMPLuusMGOqUB0XC203fnQUky%2Fk7PJrMR06eI5SPFK1TmfpfltaizkBPKpEWgs5w6%2Fr1I03KpDnHEk8ZN2941JcSnGar6KzawKYCG3yNgb7yTQj4XZ3oEJnbxeVpyNnSt%2FbgVxtJRe9Q14vN%2BLM55gaxNveka%2FjUOvO4hruTPz0mcXAAJ%2BVJrWKk5quJ%2FX4gSvonh4pirKQa9%2BKoFZ%2BFHbrMUh88kP%2F1yzmDfQJa5&X-Amz-Signature=2c8acd1c8529adbfde492e6f8cc13e3a1dd768399547c4c87d344c700ca68bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
