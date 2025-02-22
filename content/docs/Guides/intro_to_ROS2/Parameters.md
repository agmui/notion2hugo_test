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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URZFT2LU%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTidBmgZK0mOgRe5kbVSeFhoGtWGo0gEILHDuDSUtVHQIga4LypEE2UhX%2B2morANQHAuL1aDPjOlpxcKqiu%2BPVUhEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3mPAG8TurgnDsy9yrcAxAU171m1FOGKPC9g7yk%2Fg1SxbxrgYHdxwFx2RAA8pbI07sQXhWldiyJq%2BHYaR%2Fj3PFbum6C5NJsF0jzIPL%2F3TyjA271g7XBdx4hKBH%2FHev0WPvo0MuXgjBv19lomTGP%2BZVoRwYzv4cOXAhW%2FPe%2Fg9iHB4P0rv15J1Zv4BU2le7B%2FAhtNJL5VYup6FvN13h2B5xqTG0tCHeLiIvg4TOGPc18EYOhZqd0PRVTEIOSyHgF3CoGeZb6EfHitVQHH%2B59%2FQTJQKXtUcqgRc2mjIzRnYd05DmQ%2B5gwg%2F55IH2rMDHCvlLL56d8pNWSUnfNI1SmRpZ7kmcciHjMOJ4vI6z4P99%2FqFAS26ZmV3KAqPY8pCKKj6rWWtXrFBTeqPFcF1T4k%2FDyaWYfa6YCA6D7nSUazkzL17669pMvN%2BXu%2ByYff%2FjbcX2hvt8WyHsLW0RLhDUlR9zVGbqqduZDLBqJn3cwSOFMUwY54tiUVGtyl7K%2BOPtIDLMye%2FdZR0uW6nERwQOqI2TERnLS%2Fx2%2BiMjVHmpURkJQn6lE63rrP1gC2iKZbUv7Cacz7y6vsdLl03p%2BI5xIefXVx4IBjk7x%2BuefwVGC%2Ff2r9t8H6%2FpJkieCXm7AwhCoWTcd0w0ya34hLUuJMIXI5b0GOqUBXcg68tvIw9fL0Cwg%2Fz2A9dj8a7JN7oJxj3a3i%2BZNqaob3rV514NmQzypmZvW1za62VdEd%2Fqisia9vjYoBO71pjfCi9g21oCvuh8wHrTE%2BJdB4W4WhiYV9ZVs4YB%2Fl92qm%2BL7rR4vw0c5VNoW3P3zG6aPuyaifFzaz2AnhhgThweBvyqQX5L3aWNtYf%2BP0gGN3BpheUMe7jBMmIgu2I3yS0en84fP&X-Amz-Signature=866fb1d1bac2cd1a6b56c6791f8dd0596ed3593911af2bcef122972104606a41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
