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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWXYFD7P%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGufcsO0nx2x39JLQLlsKnZzFq3yJ7N2mA%2FRMkxryF%2FxAiEAol8yaXPFR6CVKeP3MKQydoPdIQa19dtJenVId8J1CswqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBv1FiMHVGFYmShkkyrcA1Zk4Tgz0ao%2FynQsO7t%2FyOWGdbcZXGlmd4%2F7trt7%2BVoSJ9GbNRozUiGfcjunv%2Brw54J0f7kUGpPaNw8ys7dC43HU6loXws30R6FknsaY09wujgo%2BlEIooIkyjGxEvW%2FatREhM%2BW88XZIx8oLSOuSB%2B8I1uJgDHRnAU5rwloHLCplVEXDMCvPo%2BmZxqs3Kh9KpFCPYbEjiflvgxWABEIyc9toX05S1k7loUJTiP5GqvHLeM347anBFoMWQYeslkx4ElyMgfEWftI4M%2BU7zfZjU%2FReT%2BUeyeyTjeXCa0I93c3IF94JVvCMF7rjXqyA4SdA38iH44VssF%2FLfmBaXVmZe98intZxtvr6pOYWxyJd08hjZwjGzsvDvA399JLEVbPbmQgduX%2BwVwaR65tdyVizx3Rp4xN4ADZ0QcxxY9q2Jgez3veS9M30sCyHagstoV6ZxVQlg28Nf1EOIiH4kvYEMIpZaWj14cck8DhzN1BW8dchXZjOztBejUdS2hxMzkRZfqn7d0fvJ4OzH6S300LJ4z5C79cAVeSu6vwBQyXtON0yCD29%2FUm%2FvNpkA4AjVvjaG7xD2rKZ5nzWHOiTP7H2pl7dt3%2BvRNslff1VeLxpYzMfDUtMFQMH4JOKEMYCMO6BkcAGOqUBHJIaL3XOiIpkIDs%2BlFQuaDu1ZGFeVu1l2Zn3Ku8Yg5i%2BS%2BXu5idGVRGoU2xOrbVf13eJjRvSifwcBFDKN%2FrfL41Z6lHeQuzpiYicpaJvNsVt65B%2FF0z8wS%2B2YUzIrdmoPIjLxau7RB%2BFqMmlfS8sSEijD0KN%2BjRXyuwdhNyB3Z%2FBhHJyn6VyFraP4SXcWY%2BFYkbF%2BvWc2S6MB4QwSU8bUKJCpxJg&X-Amz-Signature=f8c17b1e51fd1fcd415c6ff9038187fe1f548d85cc6565437cc48f51e3299611&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
