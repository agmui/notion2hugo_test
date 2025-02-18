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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCGQVJBX%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIG3OIQ%2FKH4Q1uoGuSmYX30T9Z2CvOEpQQzwZIkDtcGHHAiEAi0ppFUjtzaJVanWv7Wv2DZPAs8oyvFXnw94%2BLX28vYwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpxT7mYw9ltI0PrhyrcA0ZQW0CYaVosV9O9HvaGX%2BUb7z%2ByU3tlR8vQE3g3My2UarI6%2BEDzF7cKTimwcOZ30X9HjTDBQdVq6ALkc01%2Bxjl5ecm7Ig5E1%2BM9NI7OOlxb3M3d7mEe7LruUeEhIsmzGU%2F56MPuUolv6K9QmRHO9epXjZn9oevS6wHMXLFb9AF7AzKkmFp2QtviazrXjeh%2BgTM%2BF6E9tqlv2CRK2VRQr2N0HL%2B%2FlurKoduBMTGl5Qf%2FWaE%2BfC8MNCAHfXM6ta9fcwRLt5NZEAHAcp82bzrhM7%2By94R0J4sDOS58qrA8yQbNQzvql41M7A3pTcjQElVfymVCbajF9CbSpHoTmQnNXeLAAaSSUnazKuazUHgWyS%2FrCu6STR0O0NT14uHIFGG5LCwf5PFuZmmdu8YRCNLqXAFUrS9HuDnMe9DGU5rSYG2AlS32SgEcyJzw2iPJlUSqFt%2BgewGEWBqf2tVgK1p%2BpKakub1d81WWIh0565s1rxJU2Yqhn8v4jL7egBAyKxpXVvP5IDP%2Bd79XGMtezDxToOMLiO%2BZdY9ZcAoIjEukjOJtlGk54BuB2QiHArXDMM0Sy4cbLx1MPGUweJCA26I7k4xJxiSkjRpClnwmI70UV4amcnX%2BFndewy9JozSMMNmq0L0GOqUBNl99EXIXrgZ18%2FmfaCMfjFAoNNW5asxs24vfvftHgYuGR0MnscrxphRiRHaVmlRI9mcK3CkC5kjU9G1JzFM%2F%2BgfL8aVBDDJPWlok1yT%2BIuQgC94TNVxYW%2FKGMg2OaQSQsd0Tyc07sIlVhedAHFLTjyLzevDj4Ift2fnS%2FMLfPB3%2BnE%2B639BKvuL6PyzLBqSCeJgYY6T9PgDTgfnOdwYZ2C4EtnVC&X-Amz-Signature=8925148be28ae904e25ee9108ba2fb541cb18d7b9af69584fddd4081aef9411b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
