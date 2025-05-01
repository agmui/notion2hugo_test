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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632VCQJ4Z%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFsq1JHj%2BiLYLTvEb3I0YeaTK%2FSO3XSfMOTTh92Cl8zcAiEAnXHD%2Foz%2FS%2BR40ltVstm9eUyRYaXMKnOdt1nqgRQiJ%2BMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfxb5vFSNn7GuD9KCrcA9dso9AT0sK297nqGexTGYxlTT855ncsu0WgmC5HYD8cxwlMlUxxdGwBvWsk89FkLLrOp1yocmvcbelbqYRvDR9r5d5wQnA2XzzG79IQw1Cu8pq%2BXLTMjBI7ga4vqy9emA6RV1s%2BM4lvivlU84r4pbHFC1lTQSBiumqFMW1S2jx%2FKBqx37zvrAnpCM8FJ8Cs6339nRiod4A7obcW20VDPJvphyIduinsFJAoab6YrJqRZ3EzlCo8TR8MtNO50da02yJMCj0oX1WaZL%2FIq6XWaijGWLEASBXfmoqxDqz%2B20OLs7t%2BcXcdXz50y%2B0f8GqP2IdqVrZwovtA9ZxYc0oUVkjYkBLZdSDAZz%2BkZhPqOCEM%2Fg%2BfT93isI2dWfEYIwSqQyZ6lvbRVnd0GKa7m5elg8C6OYASfXin8ROxQ%2BlV8%2FcvRrhsRE4PEM5O1m%2FR5Vaix8CSKs61WIlcx0kA14JeRogFf7Ki33nAGmCftU1nhfZM%2FUlGFLEee5EBHFW%2BQxfj2R%2FMgsB3jELRfhE8Ew5eQHxvo%2F3dmI%2FbS0wvDOXPaV61bQv%2FWyksWcDKMppllEXThxhw5l%2FBwO%2FxwmRdwIWi26t0xty%2FWxawPKqNNkfhp18ymllHOpzQyTm%2Fz58XMNCDy8AGOqUB2DkutHHABH77B68a1RppzsfB0B9gzOQ4wGKMeYY2TT412Pkezv8JRn04SeKv%2BYgdl2VAD8ZAz7gRV9Rsj%2BAbeQZlhd9kFwAcY1NOsjaWuaXj2QOHCSsWfAv%2FPwdkzPW1i7p1yxrVvCYSp7KMsIk3Uf9Ft5kHlmREeykdyeGBQVpkH65m2lMgkCesg8cZrzkpl0JHns4FF%2FxKQ4vLyXeaLJEjfEG5&X-Amz-Signature=92973ff90bde0d5bd6278789cf2d0a9883efda9f95b029281ec18143aa870fdc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
