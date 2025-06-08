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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWAYJKAP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzf6ar3CBLpNDKIGJNdMP6Nz0CWvpxRM50iCQ5M2JXPAiEA%2FGG60Q8E9NsyoYiwugLJz0p8jDqExGJ1CYqW6rXPhBwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwb1Je92HRJh0EOuSrcAxoaVfA1FdZJGRHF9v4sVsZc2mAbmw86E8Asrt6pJUoBhHBNnkv5LyYCcEQ%2BY9t4jfXoMCDtyeVWr9SUvRY%2B9yoMv64H74oRSEcVyTJnmzK2HNgHPw%2FvNBFZIQvRT36apf67m%2F8J59A41arFekptkFrL74mXRmren8pGXOZxbhfHZDGKa8pGw0yWBeYoL%2B5KkjFU1sJFV1%2FvQ3di%2F7nu76h4K5e4jhbBSjex%2B0ozjJKr8Js1r5yOczXaHLHrAQRgiTA%2BBdxRxJJsewuS40mc12uloBhaqEnDZm2VxniGnwRszPkRElFkkPPXEkrQcEJXCpI9qw%2FHqLqyPlUjhM1jlU%2FxqJuVHVOC0Ympoc%2BHva%2BiDe2f4FAbR6L7veH38O1rtd%2B5wXab35S9dWINj6O%2F8OoFBSA4HHDDaIAQ3bCpeVVrdlgNHRpGc%2BC0XP8Ae2WNuhT8%2BD1OuASMtCmFtN9iYF5sIbSTH1399tPPdFetEEFcu%2FQ2RiAV90Of4%2FIyDn183IEeJU4PLkN0pUFdNwgaB0iuaBleI6kioBLaal10biVFT2bTZvMI35hyDu21knZ0kPS%2BswaDNCokhkRmRB9IxDVy7HXNPrVuZy6HJYSxjMQ0mLsgHpR9a6Qbl76mMO6ck8IGOqUB9l42trycfjpItZNMocB2MnvFgmLvZNSPG06L4UjBCRohDywhNvzUSfVNZ3dXOD%2F5%2FNHNEEQ1pM8NmIqOwIXHStev5pKpW2S8MAX76UIn4gqaWcdnYYNU0eIY3SgcpUySJ3CHdhOYVCnyCQkKqaKiJiTRggcQHPQ2bsUDLHJhAHlwoiodH%2FsjuGl4p6BGPesyiGtKT%2FRFMFFYCbpJNxzVUsfEiqBX&X-Amz-Signature=2460bf9468264872b2025e8d1441b61c62d3d68a80126b71cf84382d823376f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
