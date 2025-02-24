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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKBDYNYX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYgIGUA%2Faw3J17oPxf811%2B%2B63IG20imcfSP%2FAT%2BjZdSgIhAJNWXEcwtRYDnzyt4gZKiXU38o6kFS84G%2BT31c8sqHyKKv8DCCoQABoMNjM3NDIzMTgzODA1IgykDpszv%2Fp0S%2BWBSmsq3AMlHtlpcWRNoRgwH4k6aQCqIbepj7oqt%2BegnRNfH2soh3tnvDg8V4sU%2FJeU%2BLEfO3ALMDVDZF%2B1qmUjdDYETl4yQqmpOYws6KX3O6jmyEaqJRRGGc1R6krol4ynvJyKPUUlhPHRGiUG%2BIewY8KvLjasBMwiVSnERZdJ2dSBQEMjmARBhifDS4NWoATrIhZLhvwDLuKtplNTepEB3CIsTuUl%2FnTlbM3StBNB5j5UVYOtxMVGQy9fa%2BzRmNj%2FIIzwxrRT6k%2BVRdHXch05CIHolD4ptm8lBnuKRJQ5iHYG11myysFte0pms6wyVtHA6GPILnqylqLhIV0JEhZIeGzpckMNZm0Vp53s9SaKJvsSd%2Bdi97VEodZQFPzQ%2Bwz6ZK3lJV7pM1nOc%2B6zFre5B%2BXyBlQk8xuPs8nhPq0hfYmDaYNhwZtMiDuruHKlt30VPUW3zS4QinuOgRuOx89kB0TQbt2Wgy5rh5jwJgkg20QCWm1j7l2O0txu4EyrylCZEhwX2PI68bnrMezQWG5CxnRKRrbV9oA%2F8mgONekzs%2FqNV8KOx%2Ff%2FUNfxrRhQf9c%2FLqUinL474A1EXYY6ttJnSu%2B5w%2F%2FIAgHzyji%2Fu6fzemFWEV%2FG8IoIgvXPxLFz4r1S6jCE6%2FC9BjqkARScAB%2BgcZ08x2BkZvB9QH5RKXOJ3Ea3GJVmJNPtXmIjurW4zdwUZy1RkwvbHsLA4O%2FIclmpRZU%2F9VB9ACFNA80T6uboL3xqT%2Fl3qC%2B6ExiRkOJJWVyfPfH20H5HIXL5lTzppBVuTvKF1O26ejU3jRL6xuZCuDURjUPkzCrKxnW0QCkbtEji7ijlP2b2MVEryixa3O70HgyOT2TLxmjJBMyxiXWb&X-Amz-Signature=ea52c12405818ba2be968284982cad52701f7a0876f1ab92caec14b8a9e9a473&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
