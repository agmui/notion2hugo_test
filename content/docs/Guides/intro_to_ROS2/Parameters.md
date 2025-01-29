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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ5N3L4Z%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCB9O0T3Kfm5G%2BbhsFLBpHqPTPd%2BlPuepnWrZ1Jr%2FjHVgIhAKXWmrg9p6tnOlTIf46eqkukA6nvGPsd%2BK1FAnloMZf6KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytnFpaSZH0rsc9%2BFYq3AOm1o8FAsCaUa8VE4X1zjuapfsSCmKthH2lwKD1Yddt4mU%2FEom2Ng4pgK2kfzoX2%2Bg6ZLc19VukqgxCnRhEChSGsBVwleHfLfYo9ie6miZw19niZJqi%2FOD33hSohq9lEsMINHqJZgpLn4wkgOrrQXKm26TkppH6Q%2FD7xo%2BTPYvC4smgl2fkQzPgeSnvSzTSAauydSrTKyXHwBP5UR2tgqNNIqImvtRYGmabbTX31t8Gh0VqNmVW2Gusi0ZYHQx%2FNxaV2uWf8DoOFF2KOo30i0k%2BnL8SjLF%2FCiGLbkwbfrduMDl4kvvmUQ8eCEL5WxHMOUDxmwcusYOERi%2FfM%2Bc%2BBiCbDmMljUd2TtHwFaDQCqcdtkmLysQNViAV%2FwNSoFQwnasDe45YynBK03URBPbKZyPA0EQxUCah8TQWOr2kCkUx4jE3xhO0mf6hJfBVWHcROO7gfw971l6kGhApa3stzmeChhZHjbyN9GU4YhkhKpI4%2Bxx2Zvq5Bej3VEJws8zkSO9w8ckfzg0eM%2BbnGadUsjqH7w74lyXODW6Fam5f33rv5pX74xfa2X2oCKc1sz09nnGqsIXMtvKxSVJ1epVIJkxoq4wSr9FLaoq664Ac7t1tcgfO3B6el87i%2BdqqfjD%2Fu%2Ba8BjqkAT5xLgdPsXnW66jF6cREbPnbK6Y2XAzdTeOhmKLfzpg0QdF5eMhDpWpFpvzkqdCg9qYJPiUvauyizLQQ8gA3F7ZUn2Tw2SLmXktnXd1iae5WJaFPJ2auvOD%2ByVYn3brOeJsNgmYOBfcf%2B9fZ%2FUBiVzC40TG55VCpm071JlbIeGMfRqFNkJYVnm2lZwwUEnTtMvkAfbpMJCaGJpKo9an3%2BoDt%2FDZz&X-Amz-Signature=850ba502ff4c6df41beeb560d89fa6d862901a1a48f504b3f10f36558b13f5e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
