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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z656RGUI%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWAUbW2u%2FJtxlFilPd0rzquhfqOOYfu2rhqOMV8QTzKgIhAPtI457c7BBYNw2ZZBE%2F%2F8MtSaL5rLablgRWsfBPpgRCKv8DCFYQABoMNjM3NDIzMTgzODA1IgzMvOv9Xi6omzUI2kgq3AMdGurzb8DoBid4VPOPifHzv54l5jKhC88nrG3f5mIu5v0mpT6r65wjzAP14ZTGCAvMIy%2BxwljM%2FMMrxh5yWqfcoACpkKG8uwXLUsWRJhOP4eewZd%2F68CWslc5geU4pLrZFeHOIeknVv%2B2GZ7eYl0gRIsV3thM82CjJslGsSJVAWl%2BNydQBRR7eoiCOj9Lx18j59H62KCuereS4pfHHyKrcaFbIsM0VKpm%2BzyRliZnAmoMWNSFOnZ3Z%2BG6kDn5ZKVig4oQPShpZXLAwzA0oau%2FSiQJg7mlaJmPrmo%2BBggj1O9cLLt65EwxRr3rZCu7hHe%2Fzjici30kG27yyQpunihPGv9oX%2Fnr6Cb6MqaBvSaSuhaAiBqmAUbLU2U6ibGiuQphBMxJwR2g3bMQwCJ0Eiilcwy68TXViXU8%2FI2D%2BpsGNaKhyHfYsLoFnP8X903rhQrK1KEPCNoOJAzkJs5HX9wuRaMZqwYn%2FjQVaMhTvzMECbaTyII1iX529tQyA0o71zAq%2BUhtf9gR1Zzf96La7Nk%2BJtqhDjSiJCBU%2BrQQ13pMEaQGfd3flBPFHmntvzAn516FVBNz0cdQ6FcKxfDaCcSHxs7gC%2FomOflD7XRWfw8d2rK%2FBjNOmCZZmO%2BRhWjCJzJi%2FBjqkAeJ%2BleqnAsc7i7ej%2FyENAnGT7hIdDKPZbbSHBmWS80D0fgUSGkpWaYIJu9vVCH9S5qLZbB%2FZdlhadafCMD1hiWkCoiPxKtUgiJiQPo0UzZCp%2FpD%2BXZw8pv6R4x8mUcuRS2VIgOs3GY5q06gj4nwgWE%2Bo7SfQkgFT%2BunxyvhxjfBm739u8ynfFCswjTT0X2kItNxmkriOA92%2BLQrO7JxJK%2BPw9XC3&X-Amz-Signature=4be8def80c6c98ed935733c4041faa858a04eac059ab1d2b5160340b26454088&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
