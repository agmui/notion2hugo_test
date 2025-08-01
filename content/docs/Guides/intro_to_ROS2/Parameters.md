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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQQXWQL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwcn5w5U1LxBjyOcJhRavA2iRFIOf0XCtIDAknmiwn0AIhAOAcJnPgUpypMspn7C79mTexyQw6Vy9FdJlW5EqXoblfKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxNerl6BOp4HeP3mgq3AO97DvszFeejqKC4i%2Bsbl0HIVb36nap%2Bfdt%2FVrRsC4d4tv5SP%2Bp8%2BGXexPDO2DtpTyAhXYUENGQ0KxECtfhrTtCGKgrYNUhK%2FwOMFzX7VbmklPBe501EULSDy%2BFYP9IY0rus6WtYMqjSDC3Mkr0pjp65MwpsrKLcao8PvcaeR3RckgD6qj0j7zBBmT5aIzLDoN7Qb4ami3Q1OTR%2BpUG9Oxb5Y4F9ffSDrmDTyAm9xjIiUsajhDyV3NrHGylDnCXG57cUndPdEJqMV1hWbXa4d0Fu%2BxggtgZVPB%2F5LbyQokz1SfllBEzxlk6Go3tOkO%2BpSBVKz87dnZoEbQCa%2FD20GHkiovDjNigFMqzdl5rAQXqUNCzlKsC9BWTgeU6UfTRjCDYNaaJEHpsuD9GUgXh%2BD%2FtxQUP70Wqjvmnsh6W0tdszu0rpRyLhfSM%2Ba10fkF4uDLyxKKszs91t6sqzsAEzeYvVAHXcsuN5Nm1MQES8uzBB%2BgJuhq5ft2KaqE8T9mqofnRk7tWFTwaFtrtfxZiMG4ZSmu3blIiWCEII8hNw4maAQf3eNAOvZJBlcyPsYhDCWf4aCVEVBPXXzNRdYzcDX55ayU3sJklkolMK2MGpj7OeZ26e7jMJU4mhHUMfDDk7q%2FEBjqkAXcxsIQbWbR3JSXx3t2ZcEtl7kYM5yXEvDUrzHVY1Kai6DkmRXw%2Fc2RuReBEhadLAYebS1F9rob6OWe16ZGaK9cpUAnx5MStsAr3D0kKpWO1fk8rjlQfVAxUzlH8AOJxRuvWrwBgkfxLE2DVTA6p4%2BxX26BwZGU6Ti26LP1YaYtLXcmN%2FSbF%2BAc%2BZ5aqldkkHi1PVSufQOdwlhWBTrL5sjs7HEqX&X-Amz-Signature=dbd1197dccdc67ae66bc823d5c10befbe768569e12fa22416873584cd1333c1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
