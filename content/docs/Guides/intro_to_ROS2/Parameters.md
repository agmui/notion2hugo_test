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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMOXLHON%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAup3b6sXVrpVUWPqvox0UWt8hbemlCUg%2BsS8fVI062LAiBj0ish4Am6Nl017sVkMeo0ga4hg%2FrgbK6i2PHwo5Y7SCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMZu1iDAFsreXUWikRKtwDQqTK0ohmGHh2hnD0cy6Qxvyc108xFp2UP2vqbBF4D9phC8D%2F8qMKteu%2B13P74Vum3NPZ%2Bek7VJciamoqL0Dk2TMKPQGZVvOiF9M86A9wXfv7p464L2%2FLpj6RF6uYe8GAvOqJlhPxd1JkLvTNzoZyKO00K0pzbKjeJ%2FZA%2FpJbAyoQ3AyluKMnsOom%2BtiXKmcnG80vHe%2FJ%2FoYB9VqvvyitMZNF9K60Pzsi77YRtTIgkmVQy4Ni5r7P7a2XHGeAA5Zwd4MfopT8M83FZYPRzpFzH5ldszUtpmMY1sbZAnuDzBWxNYVmlxzzNKkUyJC70b7m99RgIF5K0ul8l2tPVeelwPuacgvroXlFZlH9BZ14KponNGukv8PKV2FUAf4BQIaAmXjmu8YhbcR%2BYFvKyCgdfLmDvQwBDegioWB1vWoZLujdu2H4fJXo9Zpnn9I8oaHPB24bK4qUuUAD%2Bsmsbj2BNlENTw%2BjUW1Xs8sdYOoFvifOB3g0emfx5kKT2sNCmDtqwG1ZVxHWg%2F%2BvBpxE2Q31Sy1sLHyNan%2FnOPKQn5UwFA%2B%2B3Ubwi99pxmGbq%2B8%2FR1IbpnL9TrNZ%2BnBYpNQO3tRbg5gS2P6%2BtHbAGs%2FFERyKiwEgzz2W4XK8cymvMFkw96PNwwY6pgHjh5YjmPb4vTolWJyVQg%2BKWo6kj11ZUofiDCTI8bSRKjmwd6DFBSa%2FneIGUnrT8fYRwJFH0UUi0aDHSaP4buWe7UhtOF01xInHr1GN3bF0eZW3uwGSzeayEfM5guQndkhdpUowIuN5sjz6V4U%2FVVBiCTRvYwnVOztU6FrNV5EL92V4MTqv5N6226LlUC8%2BSlKZ5jdh3%2BjxtiXsOHqIbyO%2BysgB4%2B6r&X-Amz-Signature=e03b06813c526f95a15c5a15c21557f688a559075a64677e8b716770cac5d6f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
