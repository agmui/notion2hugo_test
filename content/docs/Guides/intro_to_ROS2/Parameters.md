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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUEZ3NGJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAVF96EQyiLzhgYMqPg4XhvzFMFW5weaatFTk3BbipygIhAPmWxfkuix4qhl5g5ucVOpuVXmNWgFNm6dinz7jUfYGOKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqAwNVqGxztVXYwB4q3AP25nuHcvSEZoEFfk98XR0BTGso9NA9YsAFdLo9kRlH4k%2FosNcHCPNqF56LithvdZw%2BrXJMb1O0vmR%2BftPxUiN5RT070neaaYcD13IyH7JHX5xn0421ih2KCaSrbSw30Os%2FzVQSQMZGp659yS5WizyUi4i8PyGSEyVPX0NE0gjKYud8XlOVDm%2Bu966bMEGzlVN8prU5WZjaOejsLSkLjuZW9FAzDbB5aRc4qaElNKoaW8YdKeEdQ%2BAm8UVggZzBBRMcICZzq%2FQ1jKVQtPPOTiLyOet9iqRtWHjEvkuUsBW5rwfG3SUtskbqtEk4k77GBVyZ201RA%2FMb%2Fi8ZI7bGnWrUGgjvfMp77nuzBRv1DQC6hUVPps5wksDc6EdzeNncE0tbscQF9VJI5noEBsYOoXEm2ZMy9JYdtoz6mwrgE809b22JOHjrirRo2Qpd03NdbZ6vfEPnBz8X9OsNPnGDs16Hk8zjRrXdMi99p5nCPm%2BRuRQ43DxkRkIrCYVV%2F9Jbr6eFxhaL39Jf9yN249V6WmbgU2xcf6J0kfLvIu8sdf2qf9pgR6EK4XXdvScD4%2BPsDE%2FNVFouxkbqJ8LnKSH1n8theaDVnXtnnyVLhtqHtDL1efTrrxzty8YXzxyPYzDWpNXCBjqkAQXdGUBUt2mam1YY0rJS70lSUkDmR4LnK8uPqMShnNkGlyKeFFSd6Aq4BdW1KojQexSLXFOVUp%2FEEad2YekRVsZ3zxRRc4bF07pFk%2FsNS7%2Fi9qWbOJNXLJ1jl6lT50Ypst5cEidKeXiPKy%2FbEsH%2B2Zg6y1r4NOfTRiDqVnGdzxMhIBjGBvalbnGDvaW9IozbhWD7pXGkkwsdNlAompuG9EU1lfXM&X-Amz-Signature=6cf033167dca5237691f9b8350b41d2701c8799ca2903672ab1989e92131c3d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
