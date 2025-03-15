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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPM6QMR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqd9dHb3F5WV23wf%2F4K6w0KiDEpve0rSIdpIUJzKANkAiEA0B8ykxPy5I1osU00DX3JhmXuh2Ev%2F4Xxr8I81Kncscsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKqeC1GaOB2q7UTduyrcA5P5hI5ViMT6saXItjTW6giHbJOcP5G1pjXO2V4Wv9rIo4Od6m%2FTgOs%2B1J9dzk7d8aIjQKbAisjaKoPHbiPQZM6DMfaKIiuhPtEBIAwn6sNzcGEEjg6rUjWumwWKx%2Flf%2FqpSvKFfx%2BdSm2leG1aNeeDh8uwbg%2BlwWdI3xQ6hHi8HU7PGpVOsdkjAHp3HaL%2F1P7dpcYXW2bhA5lAPFmyClxL9y%2FlqRfmo%2FSQV1QqxARE3noLW4JKWDniWj%2FAE%2BiBq4mD0y3Di0qZ21YHBRf%2FxA9k%2BDmTqSIYvjnsksWv9k9h34e4JaYZEMobmj1K4FTZffJyhs9FxgG3opp%2BeVEyB5%2B4kHDtGdqXJXWFx8%2F7q5Iy2DAUSHfmWek60v32Lj2KUdbo0p1dmpZH9hrVd6oUzeJoWQXYZ27XVU8C1GBP7HEudW7NcQfyYoroz9%2BchGOVBv4TZANRmg7ZzaCnCzQuhSOcVsZN%2BdDzAQvc2s2rH7Z37X%2B6koOQtlrpfPL6BKHoxlkGg6RBI3qyQhESEzsI6SRWasb2CgfePJeu5piAsUTOmTeoieQXfW%2FBO6j%2BA3wjwfb3CPTApHv6kh0Ij36%2Btl20gdLG1XsRdcd2GY46%2FT2xjLrFzPEtYpyja9L1%2BMObu1b4GOqUB2QTiIRZ32BScBrXWqMmlFBwp8ZKRApugY9xrImK%2BYYWjTaIdhmWh2MHtOqVvrhM1vGTi5puSJCX2U%2FYWlb%2B7Ro22G9JVasbRLjk%2FsfMi8EsvpY%2FqPDg%2BPDdn6KDPp9cunB9%2F7CuRT7ObNwgiQ4Zjv%2Fr%2Bs3tIXiyFXpzPTdNq1yV%2BtHKiq35xFU3NSbafwja8m7glnlvNCLgWI84Jxkd40lVew3rJ&X-Amz-Signature=3c5b455b0c9eef5bb2ea6e82b31fe7453bc1fab13cc561486799275d9108b470&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
