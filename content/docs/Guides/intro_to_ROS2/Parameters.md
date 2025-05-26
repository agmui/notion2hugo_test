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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQAIZ7IX%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdlvmOaIfMqszFasAtm7AFawNdSROPlppVeqd9WmZjeAiB9Xl%2BeODUNPPmP4JpumhK1HQKii%2BEgWQslK0qlvBX%2B%2Fyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIM6v%2BCKEFRSXU%2BPjbQKtwDq3IDnEqEb0qUM6hVITzfsJWgpjDjCV1GR6aEFaFHBJhG8LpBt0WI%2FBNCWiC3LOFqiHZsmOsC2LAiJmYgqJ2BpCgLGsw88ZZZImkafkgUsQWUJCHO4wIIAIu9NZXA16dNCDEfDjzMvSHVz2G%2BTL%2B%2FZ3Oyh0wAhYW5WoPMsX7ybHq6TBi4Ix3zHBJvzL1EMnd5wL%2FyjVZ5eSi6%2BlwgOHQMPa%2FhJEwKMBT%2FrWbknVIFPfrumyA7VHOnursatqVcv0ZhHAYllmfWyJ4pRE%2B4CVemfBqdRQ6USem7ihov%2BW6dnMAtZnFiWg%2BEWUPiNRUwghFve50YxC%2FTgv7O4lu8er19FELRKDeMsJ4UtIHQyFFCPIRNMBr28JPP3k%2F6Tz9zTY%2Boh8yAJeR3OraSRM9qXpJlb0J49mQtKAihJgLcIVBPyMbg7zxW2YTeSkm4tDzkA3v%2BpFZDnRH808LZ%2FfvOGzchGnvqFqymR%2BBAukDKg5ED1NYUvU2RivB6kV2W25q0uVuOo85aLwBR1MsFyerRB00xTZx6GRgNZn2zrSPkJY7wkxWnoVLM8aj%2BPkEKnHQW5%2Bdhpy%2BT22qMatYknE3Jo7Cgkqe6%2FgYARDQCZIQMMcf%2F6%2FEaPa%2B%2FUrLYqDLSOl4w3avTwQY6pgFA0KaemX50WZx9O7gtPARGews7cJr1UX%2BgdOPH2znWdzOSYyv0lTfFP0ekTRWcC6ZWuD1eq8Z%2BsYL8RpCLhKbYYykNkUymN%2B%2BBJdKPJ%2FXS7OjmNa5%2F8Fn2hm2g48WzE5MYNRcrEGj%2Bc2dCsWCGEsKiFw1x1Rf5JpEWiONhkxHeheP2qDpTIz5CzL5bFlC4%2B6WmNgrOMJUauj%2F2sDH7IynFt7lD0Kbt&X-Amz-Signature=4baf8e6dfc1119eabd0029fbb54161269e2385e10757ce3d7856f0aa2a6affdb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
