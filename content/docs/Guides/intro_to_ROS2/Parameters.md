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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K27ELV6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCYmBk38VzlF5JvzuEsxV%2Bnp1eCfo7uziYBLIKINV65HwIhAKS%2FXBBglFGKgjUGckTjqUOXZYCb4Z0ll25Sv2QMUveKKv8DCFkQABoMNjM3NDIzMTgzODA1IgxaC9%2FFOOo%2FbIQxEigq3AP33TvVmZxaGVqzfU3Of7izYoh4UjXT8lP8dCOBiNQJEGGyor8Ny9P3wIk2N3X6%2BaY1XtZJabTJr40bLp5kmU0mS1hOIZpq6IEvfJCMW1XNg%2BdQvyaYteZ%2FdPUsVVQu9YVJJUpoxzwCiEIdahNyUNGXypL7JGUqevq16xOdi0C%2FHSqyhdbMEio476Xfo%2F2bimcE0M5Yo0q1l2hdvP9sHiuKXsfrceocApfAOIbo2vGzy2kC%2FqKoThf6iquwlU0gzXK7mBcYlRsMtGghBSe%2FCvJpdUCMQ5FQ6SblLBgm585iTXjcSwmCG3MWNiJM15%2BTnUj%2BVsgyAFWjW36y0t67xo69eqySwKJgvOcJPfSFdLypvF251mGDFja43GZ7WXP1vII6YKwr4fPsns%2BaK0MGqNOVb%2BpVRRkcg2UXXMkcCOXaOzIO88ZUUShwmMcVltnYzVzMD9Sn2TiphMrsFQBnhDOlOzJEQbr2XrnSMuxR5TinbwKxc9encaOI%2BQKiEYTYtv675vFVrPiK8H9LEEYnI60ZT8Ix%2BX3V3giHUrRt5yzeAEfqiZlefQUi3CFFC5SWVVpAtt7ssap1N1UVLFI7WZk4715BUrg9QUViLI%2Fwj2xdlKvyoRul1VFbrcBkBDDGvd3DBjqkAbgVKrzP6Ymr3s4BSzXqy6qLBvM7JId%2BJNw208zumjExe28b7jnbpWk6OaYwpNKqYHPFpsgyjqaAvFs0gkYR6XPgL5aJB6Okr06drKtb6SvaCDdJQ43BXGu0j3jwqgC%2BdbOl7uRGOuXFbPZzhJLd%2BgqGpgBbkh5%2BqSyn99GknS%2FmTBMMuU65WSUVfC%2BWFEytNsMKh8C1HUXN38vMQEnCSrg%2FSYCu&X-Amz-Signature=3c258996e006c634b198e23283836d5ce0a9a0787660297cd8dde427a43892a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
