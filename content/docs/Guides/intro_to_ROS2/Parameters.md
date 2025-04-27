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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E3FYDG2%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXclJHNGhe58H9U5mHp%2BZp9He0QfYZQ6osmNEJLOz%2FsAiBl5wFTddwlGW8AFRVJ575ieqj4V%2BqrvhDApnyONnClUyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMSmveH9%2BSxR068rW3KtwDkfXsQzPrGg22bnQJMDwKQrS6ZrhIdyJqAJ0FuuGl7mepEZsUZj1AAr36xyEQEvS%2FfD%2BT5KA3OUqfPSL9WK7ry92B52UH5QfvOhW55Ni0Zu5UVcY4SQd6wg%2FAI%2Ber2eWVkjU1PyU6Ema9HDbyFVDgfTvqBZrk8Za8jXq%2BD3TWgn%2FdJRe19b6gOCxW9%2FfIU5h33CRlN7IoErcFYqoHmgJTAy56X123%2BSjeoYO8%2Be4NKJ2%2Fy5Ow6mp7mr%2FJNq7kf0i1KDI%2B4Mfee9pNM%2BhOrifP%2FDSssd1pgu4%2BuodkNLBkCp3hQsuTo6tnpQJae5bEPspaVH2PqQvcFcC80owQCRnfyWgdvs5ybcyhGExdolAVcVCO8jaSqLElY405221rjA6n2bQ7Y2hYUSsMboOOSklNjLV0CTOMYzKhWAFg9v%2FIWCOlXmKXxMucgqiDI8n%2FTAfDC%2FpUWZZXjWCmg2ZvO9Ur91Pd%2Ft1OCAbRQAcZWOz24Madcej8BtxP12Jrxod70zFl%2FCA7h8TnPI7c%2BHgXo3bO05mOjV%2BY0pvKkzDLEz%2B1uu0q68yH4gtBDH55s0aOgSw1sj9CrpYJK4IqFznCOwJGNwnMz6KCLG8oFw%2FyIPynJ1U0xkuvclo7jZXreFQwpcq1wAY6pgF0faRelGjAVAcs9k3h1HNRiO%2FI%2BIaZivgkpTF0xve4G0zoNZLG8iPpbskCc5XKaGAjCPhbXcv%2BjwNe7qR9vBFyb2L6EU7lIq8jc7Lw96qQvX2OnlyMRafOzsSOZlQ2XOd8YwMRTboFoFOEZ0e2X4f6X%2F1N4IT5%2B7l7TAKLr1XF1TMdIcHM93%2Bo0yhHUb%2Bp9TlkUy4TzLIbuE%2FbbX1pCLQft6bpFPwE&X-Amz-Signature=87dfd7469dd3256a9e0223b16994094f5df217a7fa8d5376ce74ed1099d52886&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
