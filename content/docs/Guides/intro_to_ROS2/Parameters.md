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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFUIQHZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIGLguNXM0cM3d2SQD2l5xyohnwh8XqIjgMifgNJW3SYxAiAye%2Bk5F0eqs2Qi5S%2BxbS12QnDF0zj4RSrImxXn2SA1%2BCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM6X%2BT7Hrou4c0zl%2FlKtwDk%2FzUzsb3C9qZLQrHED6CCoydVnKdGYUKwFNULDQIwrXcl3TTklh6wGq%2BHi%2F5ASiwKA57htIgikR%2BkA4WYcWcczBe4bUA4fG1S5wy9pGhB5RUG66L58LGwnEHRN%2FHy0csOzsOmMrKofMEKCpJCzZd334B7kD1IJrUGM%2FHzQxMje1K7NDgNhFJd24cOPVMT2bHtp8vL4AHrezgxeuF0w9DHy9Loy7uqVbehmtGHZDWviL%2BYg30wiQP6SaboyIF5MVTdeEat%2FAeZ%2B33BhmsPxabNRvGgd0dkiNriARYJ5sy9EJVs8XeLoR2arlK%2ByWaG4ghThqbofQFl4L8pD9xKrUqTkWjAZmceTNJ6QZWmiQLPMP3hYIGWKtJ67Fe%2F5biLwYgU2tjYHAhAJ7yzZ8Ira0NW4WpGLzlaD7ByzAPatxHe7pDHB4b%2Bf%2BWTrBffzQVhb%2BZ%2BuRUWYEXiBbDpwG9%2B4%2FwSHTmj%2BRmELQAEeAO3J11R20DFRHHyKQVJJLuo9qkQJXLsyjj0U3P2QGG5BjrkYw%2Bb%2FHDOQy4AW%2B%2FluvOJvfJzfCR2msKfIcnjFqC2KbpP0M1XnTJtL9qzPUx9LTGrYNIkaJu1KhmupbzbkJqW2K8KkilHybMW64coxTJLNwwxpjKwQY6pgHQNogiqfdDADQnCgpMBk3H82JKa9bPT0foE4l8vnoeCsKsmSM9x2E7HjJ10tMOFyhJ80fBo%2BhUtSI3VWBWa501yNNSTKSiUcm8ziRNarkGpagXCAGXNsJRYqlq8Ty2N5%2BjaauJtgD%2BL0ysGD44ry077N9ywana%2FBiRcVXoD%2BoXVRwTsorjuZ2YmHTsBs6cRaJTUP1c98lquFPLyHmReSH%2F88fPTY7r&X-Amz-Signature=2d7aa5ce3638ed0827458f2e0317060fbdd46f948c7a185ab4bf0031cee64252&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
