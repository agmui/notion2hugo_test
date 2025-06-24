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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47GSIKD%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDN%2B%2Flwg%2F2MR6mFTqAZC86LlaugoOrl%2FR66YthiDmq%2BTAIgNZb7g%2FbrKzNZ%2BSEIh%2BJpiFhi1aanExWowOsobxk%2BVC4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDmioCsdobHJhnLabCrcAxUT%2F1lrp8HqIyYZPfgcZQbY9lCL0LnFzlf15bq%2B3Qt%2BnBQTvlvopXK0o7VRZeo3iQlX52OI1P7wicjxPYyYkfAw30t4fYEY8%2BxQr%2Fvrex927Vwx%2FfAOj%2BVkl0s%2FIRM1bOdk8bpN3cegtpprIaUWFQapN8ElPbFFzWfeMSWbq51wOqLXpWJNdaJx7e204LyFT6yndZ9Qbir5Ov%2BDvTF11jz4MpM0HSu62%2BWJBalLS7WshCQzF%2FqozE%2Bug0L%2FKFVMRJedlWP8QsyS8sBQUrV1v3tFjeCB6PQ4PopNdufbEjZrQ5twZihJbK0mZU87eSv%2FtgOXKDR12NrdxsVFlQppAy7ly%2FfEwwivtIl6Jhthwl8RuTYnMJ7OXZkmDX81%2Fmhy7Fl%2B9CFC4asgCA68uUP3zqPDydgUgGq6dPwcBDRfnMEagooeO3eSpvQ4vGJ6l%2FGnUXipMxo47MICSZSWCsgDDwbDmsFhlhyal7ovY6axJkHi%2BQTK6sNB2F3rc%2BMwd1sMACvEcHly2pMNT7OQrbZvHVaiLe7N0R1YvoWc%2FBWwykb1otjYAFBR0iJaIh3DclHQ3Vyv7BDlmFG3wuQE%2FnVtYS1RFeNw0s7jPUyhu1GHDQlTk3EmrzppgmtthOi9MPay6cIGOqUBi72KDs%2FTAvnusEM0UC6tZoVrEqHNkkSuaGB0Rdb4esPquTe29Biyw6IVGqaPXTJQa777%2F80%2F2%2FNUWzzHBnwtM5UVCpdoNWwbC9lkVLVYQlg8l7tHGkOp8tGkN97fOCusNmpkhzLfplUiX0s8chODc3oqLufsS5eGGFd1aBUem5jUROGzASUNthxhMl1ygMGiZNgvaVotgW2I8dv9RfCm7SAHva4K&X-Amz-Signature=a17d3d2d4d75f868f590e09e369f897194bf296344bc49b342647f2ce8a93db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
