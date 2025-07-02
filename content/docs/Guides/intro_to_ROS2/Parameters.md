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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJ6COZU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV8BvqVFB089JncbLx46j28Ry9cfoKJi28LmyWa%2B6ZUAiAHloU0pw6jJFfLT3pE0HhcWJ3%2BfgOGnYYN8CfMVUM0xyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxxf%2BxjMZ9frwqUWRKtwDxr3Qpw4UkScqSRQB8ELWBizP%2FI8oWdwTqP11sR28XxNLpRP7B9JFr0MiPfL2ru4%2BVCmd2uMOqUq%2F%2F11HyLunpwBdUlRqnPeZZ9%2F8ArGBKASIQ%2FWA6dItckcP%2FdRuCNVBMro%2FeFPyqKXoOgrKSsp5y0L1I0uDWhrV69XEoEk0byJ%2FGCynA%2BjEiYN3mPJs9eHKq5KLFwlf6p45WJpIvrLiAI23PKuVkyLyhSESjz4Fi48KkiMEgYLoKiTbI3W%2FuwM8MCfAGXEjGmAIQ0AunEwSl0l%2FLTlszzePwCOd2fHYrR608gNgbN%2FrS5vufTHVcdnPGmOL7aPDO4%2BwVeWVPJSzbz4Ix2v1yswP815P0j1azCsvlCCyqBQBkwZXtuvwve1bCx3%2FJ9Ex3NWh9TOMWZi55%2FO67%2BchtprUyPWOAWz%2BmxcCWwN7Xxeei6qUEpqWkyIo2mFgrG3tdM421iSeJzABybU3CqON%2Fa0gUp56GGGCdo4CH%2BiqVcPfY7trVKOGYQHnuCvao%2BoHzhCxYGDjuJ9B7lLiQqJoWXkW%2BH%2FrxFhKGdAGMqe1jgQAXTJtr5cs82kb3hQ7NLSM%2F8uG2anQAJoDfimYV%2FsBk71aZjJFv5USFfZl3AkwSfVj%2FVGKp8swhueUwwY6pgFT4wv9KChVCZvHzP%2BWw4HNJv0NKY4VADm44xMVP39ai3c14742anaXmVldyVYhPaDGjVNM4OL12EbS4AcHzgND966ZWyqd1eFTW%2FeoHXNJgJKHzcCTMLgqVC%2FPIWK6O7nM2CWjK0xcQlDU%2BR5slZjiEa9Dz7PMZhV1R6nU30Dn2tRVveYkxlPBaXMZEIInl5KaskzK%2BvIjkMNUyJE8VpsHfO3KP6%2Bb&X-Amz-Signature=4f438dd7cc73944ce90b4faa4f0a690295cdb47a24c873df41d4850cc1f2d686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
