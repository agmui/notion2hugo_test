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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDR7WYKN%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ%2BQKknIWNymx2pcEt%2Bf4dKX%2FKAfuerIDz3XXTwVDWpgIgfpPdAqRYvQDE%2FbwpI%2Fites0VEpsnn5OuRC1jT5KtIF4qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMmuyWaiZET%2FN6QOSrcA%2F%2BN%2B64fzHGU3AF8aGb0nuCGml0JHhQuvrytLv1zM2hkYUQduM%2BZCtMF1LmCB9Sg%2FZJFX0K0XKwkTaOXWGn%2BrDFnd0SOMYFeVlDnTqAUgrnxnDPFAsu2Qx%2BnjdJ98I2A%2Fm86kktIqQncD1NJCDQQwxWI%2FbUOfmjvjzpKGQ677jmCUuPquarsmUcPQPdyQ49m5UADcXKcF3rLs4i4%2FB5jASipY%2BiNjCTtj9%2FR7kPXlwiK0Ej10KtNgy7BioIg0rl2sd6LpWK2TsUDOaYccKbZ9YhqIL0uJS21kOgWALr3iZXpRaZQWJi4NNDK55wsFTw2RUxnuw2vzFUEnEfopp5cjYE%2BzuZuMjjP0%2BRdNYtzHAI2bgcV1TXwMlHnzZQZ68RnOjB8rZ7wRGfm7H0HAJlsD7ic0xTkQQqLsK%2BnS035qfGtHfLDlJiEyMqcn1mft1GrSF7Wt1ycfI2wkd8AlXYH%2FEJTg7wBD634KtK5rSBgbfMzeUcnMm3Rfw1PG5GoYcJVg4N9fqwUqhHGNEFy1PsocoA%2Fz5UXcnUBr562KixBEos7BdPUPmamZkm0MD4MmHu9YaN0FvHfxqYFHuKn%2Fn3XXKicyBXTaGFW%2BOftvIW8vecglrxfkXHLGFv%2B%2FnEBMJ%2F0ysIGOqUBZ%2B44cQw0Y3IPzmGbE2z6pxBLxr7gmNxju6Lj%2BD5VGrdUS1J4YMiHzWZv1UW1263dhtOZuJsPfJxOOQEVSc0%2BkbvUY0eYpVM4tWZxsMemflz0h6dzme8dNyXge0cpO1qDq%2FskAvO0GuyA0mT9YnICjDq21QkCdxZwEw3C%2F7VqCbBwVTAi2wP2GfvVJK5d1Fb8vWEZsY4YccwvPDs%2BozzvAxOHwhmK&X-Amz-Signature=5ae42345dba732b1272533413c04b59064292b2590c641c06b79e14bb50c55eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
