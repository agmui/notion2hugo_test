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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXXHVGJ5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc%2FZeBjdbLTUFIK40%2BnCkuKUJ1UjCnate1CCsPYpF9jgIhAKWXMq2Azv4RN7ZagNGCVa3SdY5ss0iFZHPc%2F8LuLgm0KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9ypCd9wqjCXgnrzsq3ANO0JVq46v%2Frhxq7NGxBpJD86y%2B4PzgzSFR3icPg4gJEE7VGTWwA2JMToLVpy99lTL6ep6SHgqNCFdOZgwScd9c8JzvC8%2F%2BKcPQQZNf2ZDQD8XCbSYAbD89yQzPbltzmrW3fY4Ql27KiTjDpNCKoWLSxa8LE9K3FQnDX5Ru95eQzhfgW2w4fgUEEDGbyB2WmsYiDwFWQkT7QrGxlbeueA8d%2FfYK%2FAlGlivqUkKQhjUitueqnk5o5HmnrdiGp2yw0WTCCgeTsv8H8ppQz0x8jh4w42%2Fm%2ByodV3UbGIxDRi5tbwEUwI9goe92KaeccKk3Sa0johRU%2FMNk3BrpzvDMfN3iSKtVneV%2FjC3TTbpiGNEtPhy9pm2cXx5sPBv42lC2R1HOb7nhSOSyczamHs%2F7iDf7bfxnr5wbU7HVI0Ws9weXK3zdIwUhMCv2vRbzhlbWb37XPXoRJ7BiUWND%2FCczurkw4%2Fgv4Sq%2BK7PrrQVcKMCg4tIfZvMaCFLYYzPt11AXFeMhhRlsfq3pgF3soCBgc2aeCqJr3oJLnfC40gePQxl0XUsfqLsrbxmKI5TeTMDVASATgXEKRzWBqcbbMZ0E7Zk3skClENhwBN4FDdZr3TFuS5fVw2j1t03I78UUZjDYy7PBBjqkAdPlvC3fGHWT3wh9%2Fw1uGdXNGXaceA%2FGiZS1f2q1bMG2PF1PnW0KLjTEKda0Wpb6codeLLATawEY0DmyAe8iutfOXtDdfaJYM66fECSSAI050wC3%2FWZdF9WF0nJmdHu7EmAZXk7xkcPpyJYcbHxR19Stz8704X3BIqjJB9l9ax2RzxuUN4fQ21IUWlzXlbiuu1jXChAoaf0hrtiKxQhpUyrniH8J&X-Amz-Signature=d14e0c2d65fa0b67c4905ba836a64b7b71af7e12bf2d49751e1462fb4d2eac0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
