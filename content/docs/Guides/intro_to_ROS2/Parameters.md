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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDE3OHBP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCxT39UYMOqXzgwnvdliDBl6W15xJX2GhDJMezxrBjabQIgB6mrkvTm%2FmGGX819zE8YfsNTGPakFIv%2Fngh6x4Zya8AqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5qwEFyx6X1hmMW5yrcAwqegPLNJ0bsOJzSIsXIFc2wERccVqvdQZucf3dstKJyOcWNgV6MZZt5pS%2Fd%2FElP08KQHvfi%2B4De0hz5uPvRdOFEitVDxv7ilRaRU%2FReUGOsD%2BnHDsNssHRSPKX5kja1gJ5vRgki0eU7lLQ%2F%2B1V55DzMj823e1JB1bMIwg0ivwq7p1gPGPvZi%2F%2B0%2FmHMSvBBTUmgsM07BwIqoVykqvM7wnXFcPpbmLD6Ur9osZs4Tw6CBcrawVyvDdXgbDniavXje5r4nHnSatDFwPaEUgNuvnEzVzXweU0UfGmeubrfdmeZdFDfMCo9mqTocvqcu8uBHxjLy2%2Bz9LMoCVrmIQd5p2AAreRn2eTJmH8RpJdUbBz0dOg4FTu%2BETweWxn5bWkB9s6ORT9b%2B4%2F2vq3Nx3OiroUuETcT7%2FxWlOnTY%2BiB8cQWWkYG4ta%2B2vO6WqVKuilnExSfXzFBF5rIaQeFIa42MVcg8js0%2BzSXfhtXZQ6qLnDEyy0t2sZKFyPNvzGb%2FD33MMetDb1VC58ejYF21j2iWzX6flPpQFJIzV5yDOsFgtx8VCy7YLd9HUxgaANSPJL4rsUfdndTGEboDwMaR9ABYwWW0CWWzg0VlM3Icn%2FAOyvH%2BBZsgM%2FlrLGQDRBxMOL12sQGOqUBQOIp3IToMlmukfxg6rVXGWn%2Bx%2Bv2BgFuVzJaImxzXq%2BbWOFyXmudkB%2FndjKIyYwUJkLu1KKdn%2FQ3qgxj8GwN4njksq1n9UgtfkZOdFAsZTuQxWs57KeU50fUYK3Qd0YkdlSP6gqX%2F42sI8zJ8SpTeqQQ9c8bBs7NFaThhMm5a%2BnMnnOsuuvBtpMkdBVpsahCDR%2BOH0y%2B1uS8L5I1VFb30Q0o8VwG&X-Amz-Signature=e524c44facab9e6089bdd86d6ef344925d2bc48b54f183ce2497b4abb7eef68f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
