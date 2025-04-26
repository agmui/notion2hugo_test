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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBAHQMSD%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMZNYgzBasSE2D5SpzPRDGw9u7NR4Pa%2FmoC6pv5m7g5AiEA1uMvIMT7ujfDPX3TfljWjvq0xLVHVCpyhU0vDNyCqLAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFkFBwjte6oacxFPzCrcA22zJARUwpLx0e0sGhXIppwD9pfrei7U%2BFndRtGQ5T2%2Blp9zSm%2F0tHMUWUsexnJuYF7nvgwLqyamEe3F7hs7QfTsPf3K4sTKMnOSsvDKrGj%2F2Ds5%2B%2BXUtArTpLowzYQJrYNlCriehTPjjiTuJ8pNxrdTnKO%2BdQLa91BqlL78SM0jXkRbjhvP%2FvWwR579YQuUfjFRpT8IWrcapvjgqhHvO%2BDq%2FAi%2FbJ9qHPyHeDOB%2BkELr33uRug8PfXjnkI0WQkc8tAxeez1igjn%2BlKmHdCpBUgrJY71FxyMA65bs99AbfBIssIvrkvxsie5AKYliX0sCFfxLzZzQPwXTn1De4Rgrn77FFgZA%2BXTeThbDOCCEj0jm6FsPRyXnlwuZ1dmDe0diZJPhOLnVBMtSrs%2BSrM0r3pBTWP7zu55RO0r%2F1V9A4I3%2BGj%2Bnjg2GBmZYpRiDm%2F7YCWZMi4beiE7BNIebXh10%2BicVkHKFQiONoNGcNs4%2BeoqZ6moE%2FoGWcEKhpewO26IQ0PtXlLvcgpdhY%2B%2BM4iMWPMO3O2CH5vcNElrEVJiuVT%2B6UiUet4FvlxvS4%2FwmQFaUHMMlVTfxYmCpSbmEN%2Bz8%2B4fXluhBhuGkvaHgRM8e9eruQXylaBBXDFQeEzrMN7ms8AGOqUB9dSjR%2BSX55GV%2BM7rTjVvbQd7f9B75OPBgzAe%2FSEOOAfc36baQqZtGYapmXRrmBgoPh8TLbohfUyLFToa7CFfYJMvpehBfp0%2BsOp6IR5qpkVP%2BKy2jPTcjfShnIvVLeTVhRn0uTDJ%2Fm0roETfSekGY3pB8pJYe06vNJq5%2BaR3vm2cf5pScrPUOoGXW21cJXQTJj5%2FIND3pflPB4HuM%2F74rWZajcM6&X-Amz-Signature=b9d2c689116803acf2814cd7ed7c9b6cf7aa99da5978b3b77ac1061bf3de7ee6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
