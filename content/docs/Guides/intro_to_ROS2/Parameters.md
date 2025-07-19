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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEWQQFBH%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdEu2Xo50ifflLMUmMUbq9lbIZYiBDIBxIWTkIeWreSAiBmftvJjbIF%2FLvdN5ocfRo5EAINTkfuEtWAXCIVFVDg7CqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAvcc4gLLfMwMzw7HKtwD2Gmr2imOC01P9Rt9SO6zMR5yZfWZalZ%2BXSBm405bipWvUF91Q%2BXNCCdtPLuOcJywnkNnsOCg24ifYoiTrb%2B2ZTob4DDvpcGxxByscSYIj2OqKTtsQRFyGfNOjM4QpcYor%2F5B6QkOV3en4DtjxQvwwY0d7oF%2FXfrW3wPg755uqpzx1kYuaKNCeZz%2FlxgTLq1sIaNqW87UvnVIhO10Le8XZpGnOCHDLQ2y5bKe5tdY4lvm8zfxhYPL4VFhzW%2FjtwCYWJ1v4nt%2BiE46FTtv22jLmYkIpcr%2BD%2FkMiTJaW06cCXPaONPqnWsmuRO4zCcSTcPN4sFyx4nWZKZ5JkcurNkubnPVklDc9pC219xJYCiKKoFX9d%2BRPG9ZtrYby68ARUbTL6eCl9eQFcJkQEL%2Fry77QzStONyQFPkVQKaXJk3srMPiVipJoOngbFLv%2F89b0QzSW7%2FzwN8Eh5Q4FKvuGS6xJ4LaGjz6HcHlbeEKdTUq64%2Bm3Ll1zqO8mTUP48lg26d18On89RzPROh2r4C%2FmVt5qIeA%2FLcMuS0BkNvyWB38Uomg2rsst2gUxu2%2Bs63dxpjppdGx92JIu53uljAexsPZWQpGpnQqZT3uMdFptxQ%2FYC%2BlR9V%2BpRXDT0%2BUrQQwlbjuwwY6pgF6yEH%2FQCKQke%2BoiK5hw4LyGpxugswCEKrl2JqPzfptbKrw%2BS0SbPx75Vv4MmKmCabcmbQK5jpWxtlxIIMg%2F6hh1Kn0GfUBCgU62pl%2F5TFj3%2FUSs8iKOGhhIbqvlSZla%2Bc01hKqPvfsy72KX2%2B%2BcZkElQCQqAehpMMpAi2zysFFFVtwXr2KCuIDbACUervWep9gXrGLtW%2FOyJPmBw6bL03IzxUNq0hG&X-Amz-Signature=44ff180150c005ba9523d1b75fb37245a2f72ff751843406e95a8af197ec74e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
