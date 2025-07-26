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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL54UXJP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICaXmKFAitPcrpYbVk3T3leMUloIkDjN%2BM6Z2K1mBKHFAiEA548HOtKVkW40jr0jgZtMyIDXN1d6Ty5CEIANmjLlICsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAwGxZcBS%2BK4nZC2dircA80Y3374FUhUY53%2BeqpoLYLYPxq%2FvIJf8EjAr9KaBGC09s4KoT%2FzM15AsuHPpGyxXwRq04hChoE47vPCqczZU7fGgnPWrYnKzwGk0ri4NCbzHa3AnncP26Fnjt%2BEoV%2BetE%2BqIXmgLl%2BoKx6c%2Bvgf1EW93j%2BWOfKb%2F0jOeqG3S57rzP30d3xis%2FtGAUr3eI3sgZ4R%2FVZ%2FDWPOM2bBmG5UFVaef3VNY8xfxnha92kLpeHvYEQ7nBs5Vaa3WMRfT71G1LnbCEFA15IwucrLkxVBuvjK6LyU5odp7N1BDNW3uJkMcW6ycm4o0%2BNljGbrd5d%2ByRpmngA1%2BkUGaltvdsJAhIWJRMrdcTy1gnyN3MwRNXpCLTgVDwKSBKfr3gR%2B7IZyyKdWPXv50WXwu%2B193gooXa3twcIQSIBMno%2FqdUQpW1miU5QxTSsOdNNWIDJxCKn%2BzkoltAkrvk7zf9cUTXjraR4LarqGTYEfHZeKDrbAtd8tmtPA6Bq%2B9ofid92FnVfI3gKBrgeYeipnJOVSOFwK34oBkuKUAE%2FiVt3H13x7fEURXY7mtPzBrrwscx%2FhCONthkrMLaZOhjeHkkphoDYiK8rlj%2B8sDjHDKGd9Wv7uS%2FLmuy1R19WZbRmrSX0MMKb%2FlMQGOqUBhEHpwAOpJjtYzwZifxafguaCJ%2BaOxwlmM2SHnWGNZN3Wuicf6FzIgpNkYvDQm2xqV54vDuuk%2FVB49JoA9smAX%2BV3iIF6MEV2S14h%2FCLxRlc%2Bm7ULgkNcVmPG%2F5PKhOXLUOnEyexyQI%2FEas1RwiQbtOdTEQl7bDmGrFdi5LSM5RSEVegF6rBNCJj9HWdeEI7n2X55VP81xw9j%2FN8SuBt11Y5Yqzht&X-Amz-Signature=a3ac5084dfb34e0b7f35a7e4d0818c5fb89326b08382c81b8328339301e04a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
