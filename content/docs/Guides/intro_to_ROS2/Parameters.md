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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7ABGH4M%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAa5OAGsCvg939dcMIkSNgJf5Rrz39DJf6b6QTMnt9SKAiEApuFKDYsK1n17A193LJS4LlnXHmWteZzgMuXZLIoy3RAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLa65Epexo%2FpKiu30yrcA41plU8iWfaNPdHoe7e5Ge0%2BLADAQ5fzjOXGrVv4NsejbVOzwju3pSoKyzYt4MzvHIAeD2ABU2dYV6HkjO4%2F7BsDMenoZ8T85RgTmAtbGFLW2iLubRhbo5rFUP4rCd5DZ8YDeg6d9%2BJXUcNk6NV5VD8ylxdoZXjwVj2wMGXdQPRmARf6H%2BuOF1CtcxIAsgPV%2Bl4fYPstv2CFw15hvDqDYq6EFzRz1Mn09goZSU9cPpdZH3x2eUEhBZaf%2FbD2QgEZQBEyVBUXJLHqYtr7uJkIs2gsuak%2FkZmwBnpbawaHfHBEUzJxIcfN%2FF1OsYZ54cLDq7rKtsVVXTzDuKGA%2BRAnHXfBilY0qb1xIYlsBxcNy%2BlfprGvvf9khnvfc0wRdo6YX1UnZBCPLeVuibka9tb016ANPi8VBKQOlOLi65FevoMU0aQxnSUnjDFm%2FdlNx8sq9DywTL1lnsKUrLPY%2BB8M6yKWqCtNv%2B3h%2BmxxNcZrDRvq%2B66AvhoG%2B8yhPoVvLqDJe6EL2Pq4m3i%2BFzjm8ud6hKqN4LKAWQykR8LIhiuzEuFEof7LlOEzZSvDYQtiLK7y08f3itliBmSAvjaGXEBXYlB0M7H%2FGRbrBQTCmTvW4U8jKiRIR1MGkhnR8dkpML%2FDkMIGOqUBLUNfrZNGZYmmZNGhYP%2FZHCQRZAehA9kEGbWiYBGLDNSBOFzuqvBace4Nd%2FVmfWnnq%2B%2FmCBYGKG1APfrWF54UEif13dKwX2jn13rbqbTTv%2Fm3fIyPlhaPTqPBRPXVjxdFqGacFl6UAz60bPP3SccBI55ZOtt3CUhTjCiquK%2BRlibOEENjiemwaZXOuPGlvCtdooEiGHSepxLiDhHNSuB23we6ILlq&X-Amz-Signature=c2f0f78f65909840e6332118fe0549bfdbb99149f456caf7a11f478b666a96b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
