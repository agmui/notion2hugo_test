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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXOLTDY%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEm50BNVEeA%2FLETPxJRCwx5icz9euIC7%2BVDDzo3JhVK6AiBrUYR3OvPzu43ivnv5e%2Bnwk0wUwXc%2BVeYK632zQi23ACqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUk0J66mBfk8nlatKKtwDtDG5pyyJozh35KuL2nt6QkJgnGA0O2gXhSYH2C6AbWQnaCe1pY41NBg2PHiiQE63DRcckVESjS%2FaQmTcDor5YNe4sxpfqbLiZZyirjcPnr4wcxsQFLtk%2BYqfr7M1DXb8kcPdcFGupk619b20E5nuRdxfntqIrkNJhYLEU%2F4y5YSzuqxBzWtPUTBeXxeYxbJ8gH7G9%2FyW%2BK%2Fm2MB%2BYe0CDoqgohJpiPPKvzfaJQ7vjA%2BgbkI48nUyVbqVo8N0Oyh85CBwvWYWzy5QTWx%2Fb2oG16UiTjuDndCO5XzuKZOQTiv3oPuBqYnS9txjNM2lafX6DBLuq5xSeD%2BLcr9IInZdOdIEyrC6Fw59FILa1i95CUwC1D%2FjmECWNmcSWi5CdkHC9z0F8m%2FWwvyhcEu4TBIFpqc28MVSSQe4idrxAfQUl03N3TBxfgSTJ5FCnVncSUhGkjR7z8troPowwfRU6EEwyRmA8uST3mIA8qq1iJ1VT8ZcTZdMP1K6D%2B0LU8nJxxkdc8sLJupEEY2VB9cZeYV5sqHPDXLrC5wh8RXWUlty4VYV1SKd8uAl9R8R8aVDI%2FRLFBcFhMqIQ%2FtXuZ6S8GVYAr6huDkurDcGh87rd5yqqnQr8aR7T3Pod8MkHY4wwYGsvQY6pgE7w2XBf9jk7VUBr2cq%2FY9UwZB9SbvoBG3wrIklxp%2B7W%2FuoCUcV58IV1%2FjfGCDr4NiixD3VHt9685NE4ljHsBUTCvHa8Fp2ChxUY%2BDdvWadfpFUQjsWVoYCI15dLzKUrLepoC86ApmitFdjvIk%2F%2BJlEruBnjehMwyTQMH62cFv8E7n08cW3isRXEJ%2FNUdvvZWGtazIceHpZDzsl4w%2FOlA9jR0iHsenj&X-Amz-Signature=6fe042e91283845d893d19ad8f8cecee3634d133fdaeae05653e3f03e8dd920c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
