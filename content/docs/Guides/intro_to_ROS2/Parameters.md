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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQYEMYTU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDufrNXfq8wbol%2F5ooNPSfxeeYhbO7U5cZCNpXPAiQfvAiBmCH%2FxpDmXd0oWV2jpKBW5LAynClEEf3I9TeeRjzKU1iqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZjKMd7L0ze0ip223KtwD5h4liD4mnIsrK1pSbc%2FzL71sgxqdBVX3NQjlCVHIO2lnwESWahIkevjRKDD513hsH%2Bt7rJQoj52fTkpEq%2B2a9xpmVhBwAXNpfSNlHpAZOsUP18veU4lnpqzSQJzXvu3nVbdOssRwIbsAjQr7tZWNq95YY9wiNzcMHcqXMb1F5eZhy6jpkA7NoTgF%2FTSUvsC09Bf%2FOxfUGKi5dAcvh8roiv3mDz8m%2F%2Bxun1tGzOq%2Bu9pZEAv8MeOFAKQtWHGlJt43xy7Vgat1pWWhVGN0dIhhC%2F3vUSZ1pmMMl%2Fkdvut5HcB2N3XVXC%2F%2F7dwFalXID3V3FvoD03%2FNLcnXs7vq8%2BvwnNwPTf9IaBd0b5OILGdk8UskY%2BapKQqLHwEGHG4JeVXQkKYbl4EiLxFL%2BRH4czd3AwVCYMotTahqnuPmsi8YHpdQIKRl5VHFt3KWg9jQp0F4iXLvTvHuteUWHiV7kknNplux3dAD1or6uO2abyOCKxhr7vk%2BkHOIwdaoXx%2B%2BMf0JgGY7iU%2FnwIoWBmKQ2LSy%2Bnz1n8O4YkZCTbC74jnsGfx%2ByA5MVNv3p3%2BNwK0DWTVvRyeJ%2FZLpeW8MGlfd%2FMWkIuKwT4K8JrDZy8tXXx%2FGDLw8rl2rzXYT43TONQcw89akwAY6pgHMj4ebmApj32a5SBp7DHsoqjNLEalfSQ977wxMOXHiCCOAc76KFoMdq6zHw3qw%2BCTRf3X2inpUQv4yA7s76qRO2EGB3NXxi6t5zy6auT2ss9rXbsilomWIUKIB2QwoC19PGO93hwD%2FrQGl%2FK%2FavQhMfOf5fuN4%2FemUVa2TApTRMfNXd%2Bo8DdwsYXC3qTp3xNGP6BUrgmyHL3esbm7HegNWjjIu9Cf8&X-Amz-Signature=4e920749d982fb1b398a49ea7a30acc162626158b374f32483c99e6b071138c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
