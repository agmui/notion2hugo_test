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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPPN7KT3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvZcq5%2FSSlxXmc5KsOzxOQTsFTSTSdcFbk5yl03SbO6AiEA%2BgyAoQB6xpg%2FXqiEDa8eJDQHnWVdcgZm9kQ5Pf0biOYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BdIyprCzBDFVGGgircA%2FyJtWt899%2Bsb8DKtSSH3KF4nZ%2BBqUYmtZ3Hc2iqftBOp9zXI149b9ohNQOOifnTpU6Q4ACY6JjILHS3NNAKtycfYEVMS6TxLzM28RoVcHz0fzXJYEd7qXxms0sWexLQ8mf4F2RuawDOxAAftPOgzdcEq8LAtfTiNndbp%2FdgwgctEQ1O%2FLOfzIcIB179LYSuczjCjT97Y2SjuchyI%2Fqtx4sqv67nHvmYJ2vMi0jwBVDYULy9ehiPv7pO4r4dQWyF3kAKhEOED5lqQ%2F2b5Pmg3lzF3eGPS05SxKxijqTjr2wuI8zzxk2Ww0pi3I%2B5M6EzG70eCClYyv4cXsUnyhRVhGNH0gqUDbKDnP4qMFbGdiRqe8D5VaCbKQreWVWCtFuzvox55Bw7fMVGNnUiAKtZlCWLnHPVQASZIK%2BaCOobS8v03WGdVSmIGQ4RCfOnucdCa8UhWzwLAZ3xs9cI93vZLI4U98XL9Q4A6dxx6Bq1SpQDNbir%2FegDA0z1ZTDU2JCKL9XDwg1v6SV7xyb8AKwkXSPIDlMFwHIxzsHd%2FkMfD0TK1P1fbFFpUIkPBT5op%2B6lDyuKPM2W3sxBb%2FhWqoeQwU2onPpgd2DFkZR12pfUNVP4P6Pcb9Eb2f4JzbdHMOyY4b0GOqUB7dIruQw%2FZDFCNYcvkj24bqq36cJUI%2FhpQXFU%2FvLDWQMtQWfx1W9GmsNv62FFxkqjmmfjZ30caguAHKStKkfrl%2BzMu%2F3mdmngPDeKRobneTf%2BQVVBqaOOZp3VIHfLY57vIRc3N%2Fyoj61WYyn6ZsZE7Emht1WBHWpY0fkdWX%2B48BdLHUNig6bwKo2OpJ03mpFWug8%2BrpKuVzcjNWPPOs6YdsTusdPm&X-Amz-Signature=696bf33bf0015f7684df2a1ffe0988c9e579a2594c04da53c605d916302bd2dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
