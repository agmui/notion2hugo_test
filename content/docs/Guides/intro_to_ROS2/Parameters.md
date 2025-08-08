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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXCWHJ2G%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDhX9ILJ8%2FiA9MDMD6EV2wOLmnBkVKWCw%2FC%2BlwZXz%2FhEwIgQJIi3x2fFrpEjdiQU7CGlduCMIfV2yxJ2972FwNhAYoqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJUjiMuNM7c5GA48yrcA%2Fl7dEA%2BtwK39%2B0PjOHb9z46Ih1cZEphV%2FGOOkrgz%2FatJUH%2FVoul1gyDzyC2H%2BIK%2BjBrybNhZNNGGS7KFBMKt5YwEPi7LQFuHDrTfG6ckyIK6ZAtkI%2Fk8jINbvJJSJ5RwlQtW%2Fy%2BYMjeTyXi1BI%2Fw%2Fj4ZA4SktHGdiEBf073g0%2FNgmYvaRCvUbyxNNxNssc3YpipVtMnzKX1UleLlHxEdgP38M2nLEFJDppoBBamUtHbeRvykuXX%2F6Gf2MvKF%2FrYsZlnsklubpaZLQ76mS7P9yTaD7dPj8uv0zk5xoNRAHB4uzC6Lu1PWuEWOmMYUTa%2B58waa0r6ht87rlf3QBFhKbFpb7NdKjdr5RpUVz6dldtGWZSsNjs9jqnkdj0aL0NAy6Z5DMgo%2Fevwdw%2B6F3X04d3sLo9QUgQUxq1NQy%2B7NKwSn%2FUkFhqxJho4la8l%2BVv%2FEhwwBZGuYWNq5evBWRP9PZCLi2GoWT25PvruHTJUx%2BldqXzG9EJrWwrRcmljmVaU%2Fy6rnYa1oYvAAlo27pcn1bpA314a4sYq9XDLIKSUU0PZkwJAwbbiJwaofFxuNT3TayF0pZ3krW3Qem5NyHgiIsyoi%2B9UYYaj%2FuAaU1zS9g6506qTDTEP%2F3HSDcuzMPSu1cQGOqUB%2FWKjzZkKwFmzoYg9iW%2FxtmZCFFpN%2FqGeuGbbEqWgq8eqwDpwYmKorOhn98f8i%2BuQ0DDM%2F7JEYzjaYaq0r%2BEH6eQ3augJeFkNuJPwOAiIzFbZruORunhc5CVfSMTaFLPeSjRc8XVsFmdPm0%2FwQJh7MtSbAaPFipi%2FNi0Y9QdR6rdBN%2Fgej569C5WKgKW4XRhKptLCkkpvyO7TucI6LsQYUd%2Bd%2FlVH&X-Amz-Signature=72d74fff1c7375f1e67ba6ca4397afa46cb4697738b0ddb52c0cee80d468d73a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
