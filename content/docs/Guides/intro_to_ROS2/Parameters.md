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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VJHRWBV%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLQ3kqv8xlGDKczKZNhKNklUCE2gpf5PGT29ZI7xaqcgIgCvGCziGdFn3UAQh3PBMn2vJe%2Fb95%2FmFXGxvUfaNy%2BB4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDCLxP%2FILr27Yy1KtKyrcA1LnDT5MeFWDK3DxS5jJwzvvYnMfKg437s0ot5PDwed%2FLsOJIed4Z5BXg4dYXX5WKdARdafL6HPQw8%2B83ciepnaLchiuuKUg3Q%2FqR7iNwveZnJDFh7x2RckNXM%2BASqpsMlM2XWJetXrlbR5VOFUu85kzUzV%2FNTGhQe9h3nMHhsKYwccuHyUvOWDJovccdEXMv3gR8suMEpem%2BLyQ5hW%2BsfoZLE98uDLyTX%2BU0X5vNImPsnHOjGryylORZm7rwErvEQxKAg4Buu5yEuofRgBxIkILkQVU1wKMrtlIICvhkGTfxjUPXDqZUzsk44zdrXCno7mCwgcQTjg84LbtRdCPFb9%2F4H0O0jlhb%2FlzaaGJE9cqoEoroR18wrJwjEC8zWq6pnRErcZFLTTOpp0%2B8xdIdX%2BlrGBCR%2Bd9EZjA9Nspwm1AclysERIBbEZTVkn%2FakovWA%2BUNI2XTCAksJITn6PTZ6BzxEsKifoLCoUof7Jc5OFSJ5%2FsLVyfJAcBrwdmycB%2FYQZcTIi5B6yehu37LLGwyvlvo1Q%2B4%2Bt4m0pJ%2BFKVnZPb5Nbm3FMmIWpESjfOSNc4x0hG%2B6lSp5oCcAazKSaTVdRyV1%2F2E59%2FfzAAtu7E6nn3i%2FbbkuIuVIW7TYa4MNiC7sAGOqUB9qZFNIw4glowsb4sEhU4mhhypNYQZWUuU68DWSOKfB8HpVr0esfJXNDMl5yZ%2Fp7odNIugEIbu0fN7O8zj%2Bj2Sw5QJko%2FZwSOPzLxRHiO3Jalw3dZF5q6q%2FeYaa00LMUCdIfOY%2Be%2BjhJeXjq0C8LRCjeZJLcc9Yf2FPHxjVTQ5Gb%2BeIED48v276TYO9VMkkIhh4WdhDRkAvKWa3GQBYvQRfazi3L2&X-Amz-Signature=5a0d01a5e40fb91a0a5e861e435e4e1b5594452ef34d864dc0db4d7fb215250b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
