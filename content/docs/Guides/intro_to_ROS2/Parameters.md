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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIIR4C2K%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyZD7I5%2B5veL5E2Vb%2BAkI777CIQsCztflYiC13R11O4AiA99D46UrI3hDKpitL%2BgXhMI%2Fb5JZz34mIkUu3hk66UWSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDbR9stKfnGNFkzqhKtwDJUvgvco9Lm4jscYuKl2evNG7cHV6hg81DimVSbb1b4saF4dGaycienEq7dZw3irmkAarYklsFWBURAsScVwichyhzSjZRlpRzLdx9t0zPx947CHqFHtIN9%2FkqrIFvcvOfmED2ZkJ4wiSppJ7liApl0u4aqbuE2mCOpOmx9liQTLR6LR0zuej9uBD5E2JGtmIvVOxnZ0L1CJltJldJeSZfI0Ih1X8fDwSIlmM2pRc6kB1%2BDvJXv7Oben9TIvlQhFIZOmi7YBS9f6G92qauD5MrKKXHWytnTbXzhJsERf28Z5EFvuXPepB5xshzVpNp6hDEF2bfdFj9%2BIMvJLf2pk7D%2BKCT8cRe523fyz0%2B876nQT6Wr8UEwMxYLWYAgGCwLrfTgC5R6gSzbS5X6gSjPhuv%2BS5GvPVF0sH2Xs7Rh8W8wFbHvJ2ukOSctqq%2FgEuTSwo6w%2FeIgJIcEBHSByMQVb%2FZQZkzmOfZfvzdDJhzP2DjWCrRFw0ky6SkNws8whYWIPQQoxJecQiseqDMMIth22r7ADRag9y62WIod1Twbw1bvEvTH8GsTJEd6TuT516b%2B%2B0K%2FRoPtIZ2iNmpBDcYFw3QsnspWZByVTR3fM2Kldi8gkBRTbm%2FXI8QSd2E70wq4qlxAY6pgHzK20Unpj3J8tFyGqDq0FXnyVemTCkVKdskjKDVo7iRGV6fHtSxeKfbKd4r0FnVKgcLCVo%2F0PTB2yXG39hE0KzFXbY%2FLY7W24r9aUmfWBHLmMRPAm5Q3j399Qd8CGak3QEiBzqrmirb828Jz8vblMBJz6z%2ByFUHDkNkmzYjXu0RzCNmpDDHOCAGwvs5lccJfvN%2B%2FWYfBNkImZuCstuchJU0pjSCOsw&X-Amz-Signature=c2f44bed7794c5d72586d36f6afdda5938d9a711ab6dedd25cdcf7f1f32a9d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
