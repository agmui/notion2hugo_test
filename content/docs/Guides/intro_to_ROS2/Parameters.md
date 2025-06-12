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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UDLRYHU%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIDkkEnfZ69RR%2BuuySMEAHd7idYgE%2BQrMEbBOX1aZRRFsAiB4bZqBl9s%2BuENN1UPpZTbmBUEKM0u38c%2FAyAOcCGeFpCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzAq6C%2FjYFMSxtmzZKtwDqi2gbI32IQ%2B4I5zVTVTM4hWwE6Lo906Adyziv4IEagGvcFZmAY51b7vn1%2F6NGS%2FrVgFvE8RBaWyFp59wNO%2FDmojP%2BuXo3JWzoUVA7b4WdicfuirpD3fo5uUoAo545dj4u3AGzH0nbuc099Qd%2BxC9d%2FAj2h9oDsB5eZl%2BSdll%2BhzofrbaXA2rMd5K4rhe3J3%2FT56qt6eDOnMHek12Ah49uWJIM%2BZVTl8Gax1sGbTeFJXwoYpj3740SSYU%2BWWalau6FkAG6FYBQZAhh%2BhTr%2Bfk33s%2F6eT3TZGX4C%2Bm1mo23qyQMVlsxu0YwH1%2FjJRCSQFNVWdesiEPNKOoVPNKO2IpbwxLxbdYjmEZBiqgOal%2Bi%2F2SmzcQT3Ts4lqw1t3GGfqTvJ6UgSrZssBBOcvx3XUwa0weSzbisb2Zq%2Faw3iWGso%2BTTkNLN3GDQOOdVhb7VRCnGDy1KXNtxz7SHv1%2FQqP6ianvOiWbOXpC3xmU2zF0iQFknmJVlb5Btkm6rVX6SFQBu04MZU%2Fx2zCt8pnJOvtG3zyBjEHohuGdzqmoLnBQoiyG%2FaLeglDeGr7qtmx44dagU06yeNiTmDiiJkDe230TIrmW6w0JIOLv29zu8BTTlFHtBsQIggxOQJt%2FjC8wjbaowgY6pgGbIDwX0vm3KrekM7NRAiuO9FMtbhEbsBlGx%2B3aPcuWKqNV%2BEOy03imLA%2BAvW%2FbAtUBIgQe6ZLwQLnOGzceWtnJm%2BIu9NM03fBTlLwnEoqwCimYuI2syoxBwqHAtv0bx7yDbXO3YDxDXk%2BhHiGIrkJRUJoNhx1r9l6ZJc3W1GucvzhhhWfD%2BALHp6xno6KsIzMjZPAyd4VakbptkFE2jhLvNHDGABwg&X-Amz-Signature=3dc3769bc4578035815b50c907a01cc25ea9134aaa10fbac0d72d192a95d275f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
