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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVC2LWT%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxspq%2FCrvhX%2FqcFNcwbyCGK40nomSgdHGySVT09U%2FWFAiEAnGpuVIO8WeK1fibgwdV9BDm3%2BWYLlwHFVTEu8l6IAmAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmvp1UEmF23laKUjyrcAx19tCxQdpAEETOaFmxwS6EXbkKIzzft7QqNkz0pL1z59cgidmYGPFDngVqfvkpl6%2BCSunDuwLlKclsI9biFE%2Buf929tLWrjWNcKGMaQ7WoShnkcXRLS6LXTSi4Y6SiU1TtpyJlJuJ9i04hNOT7%2FH0%2FyJzkc0Afl%2BB5wthRSYPL56P6Uebg1ISVG5I22fA5%2BUfd%2FUcpSePd6pFTrSxPAGREahDrj4HAup7oW9XGQyJ31bqcHKDEouxJUgiPAruLrefKW1y2%2BvE8HZcJib87BJzBHtQA4i6kZeRB4BhCqSzn3f1xG0hD5HtMbNpwFyp6YmcvqiyMvWE9zrLDOoAA1%2BrAud7%2B%2BmEsdizXSnT82hMd1UEO983zySgEk9ZOZ1OrFvdZ3T4X%2FFpi7tjZCZGl1JzXIe0VUtl0%2F0wtXMleL1MSDsk2VJD8W6UvLPc5%2Fcdkdh0GeCp5ahOxhDEcZoKirk8xAbEtFBZUVXhNAONUjsRlGpoxDd1rUO0C%2BoYF%2BdZ56Fez1ar%2FuhBrpa1hV7zgI5APpgUL%2FU1b7xDuUYXeyvPy6SJZmt68kgtFyZUXKTK5QSGxAlNd3VNMFk9a0FImhPRJaS8JSpFgHKp%2Fw6FV7KeeEmDKK4Ze4i1yRmujBMIqrvsMGOqUBz83HMZrgQMEIzP4xgANMdC9%2BbGj0TbGszkU4A8IDMu0LS3bmen%2FK8QZq7bAmZxT0gJPCSWvU0yNsZYj7%2FcT%2Bh7jwXuTdZJ6VkVuwiFowsIJZaD8WycmPekRuzC25v7JS3y5b03YVTe7Qy4OH1CkKm%2FdRlPUFsjINzxpIpMX6PJhAoo9hCQSLZIiEt5OKddP91SQ0jbNP5B1BDuZrMeO01bhpY0Z4&X-Amz-Signature=b3d24500e0b90c8ce5ea866019bd4d97c94ea8074a210f366ce66e6324be44f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
