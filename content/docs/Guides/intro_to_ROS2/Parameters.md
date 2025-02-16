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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNHJN734%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQC7W983F5j%2FzJqneZET%2BE8iNIOlXF6ynz9MysCcwAieUgIgJZC%2FI3xfc7SHdynHTiAgPLZmkoRi3jVjzAfewTz6ac0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOZT%2FqpQFfL8ZeSMOSrcA4Y4J4lrc24GjdimQz4apkUmjS%2BUrgWl%2FC42CAtWWLYeamrCZSUeuaBR6VJGrrdyP%2FNUelbZYLvTCHNgKKcZW9TGedTDxpI%2F3i2zxYESNNB21gUtSynYIRLrw%2BMJ4HZu7ZmKlRMf8nqj753%2F5%2BrynoFEbFfoG68lM%2BRrzhBL04G%2BTtKdCKDdN2RoWvmQJnFbSq%2FqI6NPDdlgkBHFJKzhCdcpnSA8qyDRFHtMSJKH0rEnTqs4lBkeIVI9GoxTsiYwzdmq7Wx4Hggm02eqsW%2BPCizOkIgAr%2BqiXa5fTPvJ7Jczo5Chyw%2F0JvzNh5SUDTtZuRXdwyOkN6rpUn%2BVFa1kmQKRmCtyUg032GXFV2AufHpNQyRuzzYU%2B%2F%2FO1D5Q5bEOqqUkI8B6Eghi0b0nh6W3UBrp1zkJ99A3qO3xT4PGu028bBgmxGMPq%2BoZHj5YYxAYo4EAGHYRDpZOXbhX%2FWHlLfCiCe6%2BybTmGHRK3PJfa00Fw7miEtjTtjQuLl%2BKFWL8%2BfOjzRW0wMmd0hOkRfbbGRI5XfkdSOjT7S9P7rpd%2BJDvpByHsZEaDTS0TpGD929XsHfluzZWCShN9RjJrXctmoHXOoBXSHxfgAhnbTVEyAxO7MlMIGE8TFxlEgGKML3AyL0GOqUBuvfYOe%2FFT2nNZfR6RFvvIkGhyCf17VUBVz2TSqsCy2OUI%2FolMccnoD4H8OZDjV%2BycPR90s%2BJf5MAizRxoSVC7KY0NoZE9Akdu%2Bsd3rQ9h%2Fp6mNeXzMNpCsEjPj%2FVcfIT%2BVDg7VhEiWnPRmCU2JW5Nn9M%2FPPAgzpJTW6QzNZjcEwENUHxNR%2BtMoCSGDcn%2B1qsvstrEJV4ZrQS1cPmQk2JsVfpITdS&X-Amz-Signature=e19600b9c8769a2725d65ebe992e072b2da966b6addc1324a7c2a3f880a42683&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
