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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TBEXARO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFyl3zUPACAUE7BzBz2xOrSo18v5eabCCHf1YKuoEyXAiEA7tQeOWYLOZQYEhqNbMfrYvOL3KMxLXQPbklBiAiEdwkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMvELW2Ug1i7zl7RWCrcAyDAzvLO%2BLKbZvSX8ZVEecwdQW%2BgE4%2BRBwh4oimD5YuwPRxctJMy8xQSWxNTto3JZYzu1LWmOXPFooi9kDOfqMTZQfL5MBdV3kBGLNgt6tGwCxtzrdzou0MWbQLSSL%2BdV7Wnp5znkuomDxahN5apboYAZAELpxj2alyqXBAgBSsaAjeLaYzojcH4VTuCcZXPv%2BvC90vuSXFuziWwQzS04aPrUZ2Vw4sHNkmCBC5DcLtJ2IhARBD9oo91cAaTknVVwTxU2YaNnRz%2By3bxetNxxou9c%2Ba5u4xPXCD3pmLepqXFSvlro%2FqbuvYUnp4cZGhqOLE6bLPYANznu2vJl3vWc9WJG1m%2FOp%2BlIlYAFJFC8L8vyOpNxJ1WoTvNi9vQrwChEzydnYMzh6TMDppE8GQaTF0Ch3NRhMhNzk9CnT4l0FWTuU3eGoFAtBbFfHbY0yMshDrn2deK403OwxIprSetWYvR5x5C%2B43nHZVe1YOMGXQ6Wr9FvbIDt11DxzPegOj1ty5m58RSQmoitJCjQUIhdyYMfbg2s8LGFzVhtjleJuNpebko8XVZ87qADtrlEMpoAxsfzrspADsTrPRoN0JT05pfZIQHyEJKqpsvywL1P8r3xtrYA7M5OYAJ8djTMOeW1MEGOqUB%2Fo2oG2MG5uamz9ss9bkjDefxJPnBpX%2B%2BsAuHFymfXEZyFHgGdaTO91TNDGsXI4OEswFe2dVQTnh0DUapmdlsjhiUm4JvMgWnLhcgHX4rLjKJgn0CU25k64D2bkF7qayOJRmR89C9j1ouDDcz6fb2nhee6f%2FW7zILzf5qYlwpExMXuQsrICUjI7Khi6Gr1B2K4GsVrAeCskbpUXnv9HnmLI8tzanj&X-Amz-Signature=b93f3886891ace1d914444bf93a3d7b61ddac93d65e5009766a1b5dfcd7950c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
