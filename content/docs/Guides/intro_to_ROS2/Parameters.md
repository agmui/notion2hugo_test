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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QM7LXAU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgmK3fj%2FtFv13o3jIFFcqPCSMdVPL6vrjtRKnY0kic5gIgVRJ7gAsVSzuGv%2BVQXtLTURYViDZdmZS5GcKHUDDf3fYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKVvI85Dmt3Xt9SPyrcA3UPgsm5fvJL%2BZDOmWmw9B91aG%2BWiBdP43L5hWLL2aWNS3opmDfZynD%2Fnw3T68L80XS6kn8YUQiJvIl7nnFJFtlKnyQN6y7i6zX9YGKYwZIE2QpzxILzjFsfmRXZBwd%2BmM%2BgFDs7tKkGAI6iipZj7juKAAlckIsG%2F%2Bq7hK3ycw9Y2htAEJ2KhE1%2FsfJd7IUPPyigatmFtBbDI7z07BReuFUdsyhz%2FQcGPUtF50nKc1HesVsL63RzIu5J9c5tS5DdizLZp%2Bi2OBi0kW%2B8Afy0ojqqAgitwg%2BmMf8js4Ran3v%2B9zMP7sgfR0JQCVWun3Xxv3Gk%2BFEptX3p7iioP5TgAjKr%2Fs5fch21n2QKFMS4SRHyXQY2YDby3%2FCEepzovIJ1BnGNMtjZ7CDCkltTyMbuLmJXE9YmH3vP1NbINeVwdXmMhpYI2gsiePm5GgCGP4eZoKkgDytO%2F5Olnmxkerqed5Tqy7KWs%2Fl%2BzGQ481LLDrpxeI4hhM46w5%2BMxe5TVIZMZSukxT4fq5zWg1ZNiPGEJUT6NJc2l4jMQTyVF8vRjvE%2FaAaRHtrxtS5mzY0xkr1Ld9Bvu1hvSBLiwBk%2B9UTHTL37mxC7cENAd%2FEfWs%2BPXfYi8VPYjOS5FAkMYpfcMN3sqcEGOqUBY8oocw4%2Bjs%2BsroNLiI1j1ozwJsOFbsJhiTNHXoRSd7zW777mJ7AczdnSetZ%2FPZu8ADwnDAnAXURySy%2FQN0C3jynMHHmLsgKBSeDgjDvI%2FR6A2quZxWY91kT%2B1yNHmKcC1AThUtQ7EQeFFQCyDhRhLKeRscqaDqARxtqHWORxAUyyzimhWOext1M%2BAf3gVtC9%2Bu9h32bcRLagUoCYNIQukNUp2r2l&X-Amz-Signature=34281e013779fef6fd34f0d4f17e84646beb6e2c4aaf61bb9b0da90051de619a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
