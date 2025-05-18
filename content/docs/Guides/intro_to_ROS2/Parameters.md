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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSTAZQUM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpbIfufvbXI311kfX5%2Fb3Ne96IgmoL1ibU9RjkssoneAIgDGgJd48rDDGpf3X3Ipce%2B8tdsbyM46gOu1hWxLniJgYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEii%2FiRT6gJRONNuaircA9GlqaAOMmGa1gzBqtUeM3Prsbz%2BcPm%2BE5eNikUW5CXv851fcNUzR0RAC1kSOIjX2ZTYllozjBrDJAF%2BNhhBl5nN56IQBCehAHnZ6s8bdcHIvzQElmyesZSxs5QQ3IpO4WXnyDGHZBw2ruOEH4eSR%2F9Y6I9pPGLKxsY82hnph54pXD1negH4Ju1LTurzy1in1UNBMlEOOaqcq5gpe%2FIPOlYb329UBXtk1CZwg0ZhQW1tiD4nPdUGuTGRxRwkPrplgI8KhZIyGJxzJY8ySbWpAOiBoEruk82zVjt4qMPp0VAqDDa1%2FOkXjJRheBiSND8t87d%2B2J9eHE5%2B5MGhOzCXGfCtCiCHiGpwsN2JgBMRxKsPxbpumL3vo4iIVKSJ516wPY36om4Y6lnQw%2B3HOTvU6O9dGmj8c0P6UeHklJuj2FAISqQq%2Bx36tQtfMuQmdmkGKdlunLHfl9vzkG59HIG3qtMvO4KeJCNxJRaQmgdQ8I82PEoSBcjcxYnbZMazDqVKSTM9Ywgce57nnU1R0tPMgqlXrMrjW9rGlfF3x%2FRlCh4UKBeWval73VZsa%2BMQhqVh%2BQKhaXWeGyG76QcDbPiRsUVlWNP1m3pXRonwkdlt3NgPsAFZdwQhe08U0NdwMOudp8EGOqUBumToBmQK%2Fjro0QiU2Bv1tgoY8X6%2BZ18bnOrNDHj8zarFcaep%2BdgJdoI4Gh8LqtJSYN8REQZNkXOxclUE081wcsdtYyUSrJ8xOkjMhM2ko%2BWz5W4uwAeORjuKEm%2BBDXmrEkpBOcUs5K3%2F0xtPbz3M4au5n%2F0v1YRjFjjBS%2Bo4OYjNZX9T5C0oC%2F9%2FPzb40Frzf2leLQql479zHDerrHBnd%2B91jCO%2B&X-Amz-Signature=9a1d9830cc00dceff985322deb62d79a47fb3d10a93ecc3e291f2b7e481179f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
