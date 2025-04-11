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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N67BYKO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCID95inrJWkD8TEBaLojlB4fTO7Zf5vtUTAVoyYVsoKA0AiEA7JIrWM24%2B5nVnWOH5WdTsEW%2FDUcNsWbl0FqWkYp6NlgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbFNEdFIB3ogUCXOyrcA6wPRIw3KUIDZbOJ6UBgKH3Zv3A3or%2FzeQmvUGtLKUJSe07PdithFveHdKC2CRQ6ILhR41uFfpbZDfSwaY2Un%2FlIiSKI%2BlwaNfyVVTRSWpDXUCRVZ4o7Pw9Wg9mn7QWZ5NRSSM92FFs7Q67KzzG8HI2MwjyhE80lyAqjQGV4RbjGN278X5r9%2FnXc4umNGI8dHx6gH%2B1gUgx0qD%2FryG%2FUHv8bcXDZPNBAIQCAxUvJEl9phfXOIQlPb3%2BaeKxWwWojDm0922WDf5eDiAiv919%2FpP2U0zynl68nAhLU%2FtrG68P7Fqlzubr2cz2ZYjKdx2K4Pj5L1fKP1oRRQq4RnZPjmSseu8%2FgA5V74QD1hExY4T5L45K2gVNfi5I77Ikq%2FhBCgPuMjbQD%2FpexM2SeTS4dZ1s1B7U5UTTbe%2FYMjwLNInyxL0yCvPu392R2SGHceVAC0vpsc4SDpJQQA6baqd%2BTPeYerne9Vhuvt2wQeN%2FxiMUPTmQ2JVpsRtw9Pv%2Fwp%2FtJWrTdL0FmgYtVVGRMVnOAeruwwtdKFIOUp9Rw4wUp7zVFcYlsTUL8qOzPk2EQflAk36Q%2BIq9QtBjBvsJqJ%2BhQ%2By2BV5S9PDM3%2BGWijhcmLySgNHKyrMZVB1hwxmOWMJSz478GOqUBPnbJSSIapmIy9NunP7%2BfOQ%2FGWAtb%2BmUIH7m2PN%2B2zNXkGjQXIWbFKOAaczjt6JoP1QwnNbJQb%2BU0LmTyQD%2Fd8nNQcRLX%2FLC%2FnyHE1aNbZ6ouYxLEg8DfcjZ7%2BFODAl7MsWRlgh%2FOR2bJzS58QIGAsGOe1Qof7mJZ84vfcIGygzzKL94mrsag8oGqSv2FtKzCIAgyo5fnKYSkMWAtz1Q471ZETR4j&X-Amz-Signature=4e9b660013f76afd401a3b384257afbc149db81bc8697ed2183887c252db51a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
