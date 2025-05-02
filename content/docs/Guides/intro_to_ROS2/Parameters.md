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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H56CPFV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDv6weVirMw7yqHOwbhbH5TSboUyyHZxaE0nz%2F5ebLmqAIgdnTdLaBEHf3wPWTJ73v%2BIjqIZ7ZPoec9GIacrXQiDcMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFMTRGC87EJxxYrRyrcAz7ejrMb%2B1UOrKmrD0pOCZSstTuHlvjBi%2BtsWwBpUBtlwnu%2FnbrN7rvablJB8Nc7qeYP%2B83I2b1GuNK8NIjxgM9bdRJIgzucDsv%2F33enzp2Psm9YNKB0tOLsvpg3Bq44NJIF7Jow7wsosa8adQScU9fe2KNPF%2BxRdsNhYKMdFGwibC315czKPeqJojtTGNn7rbHeiZ%2FufJgqHEVp12ub05RmNI8jjV8iZ3KELcLO306MtWmgwOI%2BvvLA3P30qATV0vGiWpqOYNGzfSkj1IFQS87VI2F%2FznQzmwLIJCEVO7HuX1BjPTZ3RZf84dA66DgSOGV2k4z0vGBE8WC8DetsEt%2FyZ5ImT9lPdyqd%2F6KeRChxRuLqJ4XIDEzOxkOZ4Buaq2hh2lQYAQMO7gNngQo%2BbWD7AcEqRBXsgIQ3cbkaSN4xVLMiL6y9nQBwnQndYagks0NFzxAfu5SpDC6LjrFlaP2thGd4WoKe%2FeEhgb6cIC1j3K%2FyAblKolIes%2BR%2FGezLsKbNmomUBPaLCEKJksVFJmDLE7OkYJdxU5Sam2fyUQatnpTORZMALt4L%2BpqehjVGBl51uZvKts2GmX5GLPpBhZ9viLGCQ4XncRTg9EVjI%2B%2FksgWCfPiNUjVcQABTMKrk08AGOqUB23KJrccVggJBsrrR5OJij099jiQkmNkYGo0F4qIc8uvqQmOJocxAKxfZhmdtEdBmygGBLFFZZgW%2FQBmDvtxlK5bl1OkOIMp1hFhxgrQW2F9DPkoUFryBZGi%2BRQ3rtAz33lm6VRcv2zmPLtBxu4vnB96GyaUbf%2BB2N4qjpYg%2B2tzeVCUT6Hv6mGXv6qMrmF2yllMx3ekZ1YupH%2Bt0Lc9Y5%2BKnzs%2Fl&X-Amz-Signature=44a575445e5fe9cb22b81055090540db37a8f4f812fadcbb6451c81cf5d434d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
