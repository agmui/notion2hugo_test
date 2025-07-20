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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WXWJDFW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZOCVV4WrA0kJedZmBiCmzjNDSNddGzQXk1DOIrfMyoAIgTi5d97l4eworjYwV390XbPGuhKAV1c2xF7ixea4I4yYqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIWczZkiNL%2BtxyojCrcA6vqfQaEUAKYRga5QJFUN%2F7irEZw7%2B07OcLyfpfOB1wIUHLEkrIC6ZrUkPzYAkLjClxE0d18ID7RmAojnScbu9yOADEovYqdxrT9pc9Faypta8V0u0FXqakIYv5GKrAD3Lhx0Zpx0meI90WdbG0WscwUfVnXmP1sXRPO0ca9R2Uu2QHdZUkvLgAMLHReysic9yXLRT5Sm4cPeaNuXh3yqbDG6hSTS5FqD7L0RdhcHv7EtJeJ%2BLZsO1q4ULI3EZNRzvmJWeilgdChk0eBFl8jqpTCkOUEJbYgAoRJZW0x498rjIEP4AKlhdftYmXLcZsTUfZckCBMqWt%2Bzp%2B3JBKr%2FJMzSoTV2PZj0XAdC1gZbKslvRcoIqRPOg%2BoZ0dmvcM1fsKkPOPzWsI6tZVZuR6tZzT8ImOjzjL76itI%2B7%2Fls1SE6Ac59MGcKMNAGqh16Xwe1M8y2stTigVZKbmj6l4w67Q0JkQ7hRjc8hGPT7sEKxMns2OL1kvAHG56c9LxzP1wzgEc1aAXUlwAbXVUtjCjds9S86yk%2FEgJ7jKwlKBtxyE9jeBmTpIlYjFg0tg65%2BAuzBrBBK3rMx%2F13VdV9A1%2FCB7r%2BTcFCVAlPUXjaUV9XJ8f535xT0WENISz1UT9ML%2Fc88MGOqUBr%2FEp9L6ysC%2BXSRuhztccyJVR73BOKy%2FtOEZ0tb0dtMZblmlsiFI0wrlrBIbGr4qSRK4ZRahZw73l4hNmXFu1177lbSmyr4ytaMHDudXL8g1FPFEFX8AfgNPzvT7JQ2PoTCZEzCrGwKQqtWJRCGJXnls1UeSAJNHJaFnQwF7EjHaL1IETOnJkzNojyxeo9VSs6zAEUN3cDBisp3Ov%2BN%2FwlPjIC5jr&X-Amz-Signature=3de86e0eb38416a4c30e5d927373f967a47f044bb3d7819290ee685ece6ce082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
