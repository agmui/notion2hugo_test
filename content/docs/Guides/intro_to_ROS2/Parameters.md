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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7A4MX3H%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDgmbId8Zu2059UVzQi7uz4EiOQKN4GskE3%2FIFWRcJnxQIhAOYTrqywqqWV%2Fg2sz11T%2Ft%2F7PR9OukO3Oa4NEDFtkiVXKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwOZT8zHTJlAkoxakq3AMAn2RroZDTfe2UYFaPP8N18vYfpDCJekaCNprzuCNIS%2BXblk7sj4Zsk7FUdWgw8btywi%2FsdbdUM3tDGIpAshPWbhSEqox6%2BJCvUtGYk%2FSajzoV%2Fc9GcyKu5dwc2EZ8iaWuUABU2pE5CeP2lEbTe3qTcm721zlloaZIWmZiKDReAyFaztu1UTnM%2FjqKvr7DaLQTUFXD%2BYF3I89gUf4o1%2B%2BrvkiO1i6xvk4FZc2O%2B1saS8Aw8xP8Nxl59LTnDlWv77dw9puyeULHjjDYmxQW0xSL4L7w%2FZyBNrmcle%2FHHjVJ023ljV%2BNmdPvLDOPpCiNKaF11rkgKN6h0%2FePda2qMTR6UDsQiWv2gCCmSfWprnqbLsKJCU7UNIz6mzWkmloPYXvMF7uoDQ754Q0LVd06eMT42qO2mx3TZIXc%2BxZ2HgI3sm%2FAQw6Mj49lbPjLnXTdrm%2BBHKbkXEG3dTeyXuGxgqQ22C7u1NSdXcKAHDRAcR33dYtWSy%2B4U6P7mxvlAy2iSwJNqo5fbiQuMkfERlkIzdo2fJ5C2rlLIBpm%2FskTBZQ3jlP6R1f1kmM5lWOfNzxVqvweB%2B8hViYhyw0NIYE2i4je5egWY4DH0rVlVFZaA31DOQ2A8rlWsg4DzK5JCzDD7b2%2BBjqkAQuJJCT2sW8TRSRmtRpWkEPS6dKNMUTl2UvgtSObUYB6w%2BPFKepz3lDJO6Fok9dU7KYP1aXos7nl%2BM5hAhOfXq3ljl4M4mDgkGPVmboNHwVYnNapeVftjGrssKzl5vTeB1zjj10FO2q5qHPi5RnJC28Z8pLpRxz%2BZqSl6KZwr3kwOrq0B1tc0AoB%2Fatbk7PXZRfhQ8m5FrZ%2FYVKqsjP7qN5hIgHl&X-Amz-Signature=24c1fe1186a8ac8c5962ac205de3528e0cf32c1293b2308556cf8e3ec2e1ed03&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
