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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV6UZWUV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1kxJIZP%2BdtUm7GxSvt7%2F3JhckJoWwVQCVIjk8fXoRFAiBAB%2FejgRQrmS%2BbHwbkFrkjQZbNOfbucBrzs2VVbFi5vSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLEsnZZRVgtgYxImmKtwD6A77rmkjCqbYxZvPQ7ZsaP8AaAJN5z4iQd9novlM%2FFTvk7GJqJpYtKqN4gKaFsYnIzv1e%2BNdhY8ihA05M1zVRNCRZ6rS5hHdzrswhv8JsjsoiAvU3fC%2FN0CeyZIHwwJp4cMdU0gIeEZoZRxh8YNt4A2gL3igcRUe2vtCOjMzntxFtWWZiyb3WI0J1nvRPYziC%2BJ%2BS3jRE8N805q6q8%2BeXKAB4zqKTc0Hm4DYHjez7rxvu0Gl9EObw6%2B2L1EEBmjaEmnc985VXF0osqqSlHxqT65bsSMIsCLjDbyhILN6xNDjKbQubfW41sXDJ2yzlISgA3v7iAyKb8QKdortD5XVmP7XvJo%2F06QV2gzZqTfl9ih%2BIW7NyYI7ylIKIoxTLFsLgTwRzCNgj%2BwblSCOFRUNHgnd%2BmEx6F8R4PuEGBZQBHbjUMulOz7Jn%2FAf2ZongE4CNtdFbC5mB65%2Byxj124cTVH1MmKrlR7iP2BdQ2FYHpeR0eMh19FFEmULSClAPWwOuKfu%2FhUQUC3y2xjDGDV3fpqS9ntb1pujjQrqoXKZYBRUfQ6oNV%2F78eEkC%2F%2FUyrCCIO%2BbBkhQpIn7fmQGM03JYGG%2FOXMduvboPxTaHUKkZDZ3omgzEvfDl41jIJXwwn7esvQY6pgGdDfbC1PjF%2FS0UK8Ol0vKX8ZSpNtx%2FK0nCO0GUb3t0VXR1TXwlAXwHxHc4diUN49VcPc7ZXQ20KDMCqONbUlK%2FmyGdV4MlZsCvXg7idqHl7t817m3Xo2F8e%2FDPbmM7x0yHG3i6i8k31TGVJ%2FzgN27b24NDk2PJuCjuL%2BKBpoL5ZQorvGOCOxF13D6rYeVVjFB7P%2BpcmlIP0x1pIlpjFWjzx0bxgMFL&X-Amz-Signature=a6d92d1a35f6c3efc5b122a770950253de8ccccdf0c64e7eae17e304a093b3d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
