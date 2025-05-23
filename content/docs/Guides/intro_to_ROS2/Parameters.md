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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF4SZFDD%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDTPVNarv0LbdzPlAx673WMWqN%2FrgXfMq3l3rl4%2BVmWQwIhALPcMUEKQvBBq8XIgbDnTmnYYZ9n9xzkLVb%2Fuv9JPFB7KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0m3mwb0VClI5DM18q3ANgjFK%2BD%2FgvwMWm9ZzFVOFJlqOj4q9Q4SsKI7QZPfiet5FVh41UOb8W6ch1ChQHF7gwteHKYkltUak%2BLkJq7XS8qqj36LG0LAqIqQQJcosEuhZdO%2FZlg%2B2f7KmRzvqfi179YwJBdVdJoYwztmvNItpmeDlIxlbNpCa68QQwgLafmLqGIL53hMy2L6expeKADr59Ovi3qheNeBrHHR4H0qMlSSUIM2Dz%2FtqO9eE8A5b0qNpfn0t4Y76uJDO%2FHU0ZMrButR8JGfRNGch%2FuO%2Fk9%2Bgz5km6duDQqMcFsqjEvriAtmgRImUOEj8%2BDi3y4L1UQtVxNeXA3GvaQI7orQMArnyAUBtwmnvksqU%2BkNctJo8tUilDSl8jNa7Ih2Ke%2BYsj8oIKWv1FtmuS5cz%2FuDX1f9xvmnXHAbE5fEyugb%2FjqN93U1eoh%2B5PdLLYWSYHF2ACqSq6jTKaeb%2F8baQC%2F%2B%2BSCk5iYSHFRUZt5c%2Fx6cc2E%2FGDrDyQEFNRdvdSqCgfIjprIx8meF6Eu5ICm3KYIaoitohsbntxs01hgNoXT6Udk4LB6pmBD9qMa6rpUuNygQtTIgnyks5YqRWziBaNgugygyZRK5S9TlGvgwPKUR6ngIiT%2Bk4q%2FXDWjDMFG%2BAF0TD0jMHBBjqkAcl6sTMM0O6mE%2B%2Bc0rD0e%2BiP6ClF4TzUvk2x9BLotu4bf2nXoXkmW1kI%2F%2BtNCktXOpWaa4m5A4fj0wsRb6K9AuqqIt8%2Bb8dTXH8XmM%2FstBySrsFJRLYIr6hwjbzkeYzj71dUtHbmjV7ZR5UfwaxziiN3oXIiucsV5%2F%2BZHTOiG5DaLPEuLyKwlBAMLqwAhHQARA6x9pzb%2BkFoG6j4bxXM%2FyuEO7ic&X-Amz-Signature=666c0f35d2db0f8076e8a7d873e403c6a2d1f39ee9a6a60807ec474a390fe9d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
