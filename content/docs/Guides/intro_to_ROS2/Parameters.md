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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PY76U3B%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDrP3i1dcy43yqbLL4bdpVN7kYqV%2FGJTTo%2Fuy3MBeFHxwIhALz%2FN%2B4Qq%2FVlJZctKx0Ljz3BoapxIfYqUESvL0DOh2f4KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwltps0%2BWoLF531d2kq3AM9Ygjltf3HDF%2F5tZvm9PRsgkVmeeHxswkwFhh9QPN6qpBlId9d41w6WlnpwCtK5NP%2BaVtNNycH6F7UtQFyskXptznhR%2BiTDaya3desdCj73IBNRFwCT2LXJqm%2BPqXgH00qxRkEV%2FOULfeFp7X0f4iGkNrmAcZjlyZXmz9Xcjcs9K6R%2BGy4k6VH2nkLMt4YwvyQwaSzP801t4J03heizoIYyldbzi0naIHJG5fLAuFvHwpzTfijrRteJLrBNyqtvgLK1MC%2BLIAyjzCP2krtTHIxJN%2B5EEIKNf3%2FjP6KzaJ4WCWb%2BNv2GgO0I5sI0UcG9rSL5xk3mFh6VHmoSfyl3xBbvNNb0dbz75Wgow8EjEnT6tDIsYZ9K3VmV76VRBHiMkUW0LQ2nee%2BV2dlJqNrO4%2FFsIDx%2B9M6iksvVUjFRwOoOG%2FiA%2BrzyMUj6wNcnxdK7dsy43GvXlVowx4ISLA92nFLgaHj%2F9jwvgHILgT0qus%2FfLNoRCSGxurq4Me2sr8pgN9nC%2FdQ2S3NmP9m7cvzJ2XE811Fg5AcThKAdpbkZisUN%2FKahWgODHtcvRAdOrrzvUD%2B9g%2FSr8eSxWHg%2FiUPv3dt9QgPijwtE0gNAuWARdSKDzo7tPH8uz8o%2Bg0EzzDG8qDABjqkAYGae0P%2FdHYcQVRWhOQQM0RGiDE89YnY1Lpqft4wq0rPmLOHYVIVfgTPfmq3pDDsr3la2aRgn9npAHwzZBY05HYk5a9kD35aZHO4pQC%2BSS%2BUi702BuFA7V%2F5rl8sadj3olx8AK1LSMRL2ATpIQDOgUc81LvGFhVVhQmyNXmcjYu%2FJUqq2Ncbd0ZhHDvdDLJfrn1ooyPaVdDcSAag5Sjy8NOAx4ou&X-Amz-Signature=4f6696e7045b0fe8ebf54c492c585a45845c1b80ac7bbf05b0400896c9048033&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
