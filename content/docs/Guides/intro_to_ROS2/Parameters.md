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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIVZ3JO7%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDyCZgx4o62qo%2FlkdBAvq%2FC%2FCDcoFwfBTqvmeXaXjJJ9gIgCbEgOr5KBfG74FygmKUVrs8JvOWZGPS%2FgJEPeaOtel0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFqxipFjoau%2F6%2FXvaircA9nPMQSRFMeEXtqpUICkzd35gorEV8nKDi%2FpJ6MnqvvRdgYi10foB0Ikxla1YAaop15B7DMGA9iYpDyCu%2FNWSyb5xT4iIWb3lOnDWYLAE6xdO%2BmgpVFhQqZivMu99G4TpCYX7kC%2FazF20IxhLqjgNXo3ciSVTG4q%2F%2BicsyFux8DRJ05gX%2FZw%2ByasFa4uQy%2F%2Fei%2FvCicQtwnYwF%2BgVra%2Fb66N59CaKZ1e2AgaZoJ%2BQmcqjwMaU1a3M9Anak%2FztR9vNQBOkAIAuu0FVOMLaZVdRIpbtst8NTrU%2BEJyLKWQ4eMf6Q12A9iiE53a68PIZwMVy8GysK2ogV0lm67yBJY1V2tTPaUk5X7eYzsZs2e2IYndLtoLqU5iy1OvDXIjpTDRAsSqNfwcG%2FqNWCehsOb%2FprseYG%2FIiriwi69JfRTCwRgLWnUpFdtLGeVqbJhfDE5PxUvdj2pkk8eBH6CYNnFHg1SogSeL0NrdiDBYjhm9mYn8SLX66SXJfL1rzW9DQw7xhEfryaVZmxUAvQLjfj%2FrfozB%2BA8xWr05qCLV0cG%2F2KTJlWcyuBg4WiBcFWSiwQ6oGGsyqOVzeQySvOtTAJlftYsHovMyZAExuRt6W9wjCuon1fP4ExKYdPYoIdv7MLL%2B%2BcIGOqUBewcTf6a%2F%2FlXmHnA1buK4ZB09zr1uqkpDbbtnXi53%2FJDy4V8xvIEjd%2BN9ns9WnHT%2Fvqm3OzpPT5yJNhRm7lDOMOBrtHWF4aZchUuBMMhEthvPP%2FpQsgF%2B4EtIAruamUmg4NKgve%2BO77SPJ5P2LPk6NaWteafouDRJUgIengBCh%2BMSRcLghA1x4jOuvniQ09Uza0vnbEOEiCtJDTj3hRfRd7Dwmm9%2B&X-Amz-Signature=bfb932e4b63497e39eeed1156f58e2f733e3cf582f7a6fc9ef2c8faa1064f6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
