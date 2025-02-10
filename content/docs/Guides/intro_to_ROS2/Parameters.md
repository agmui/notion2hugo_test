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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOAQJ2R%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRqihxBsDhbDUd1N1RhaZmZWic8reA0iKz4Bo%2BgabdkwIgT%2Blvgm%2Fkr6scnW7gtugpUAil31EovasR1c3nGOLCyxsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWG5Fm8lURDcNM9pircA9vgHsdJc%2F%2B9cU%2BudrkmL6QM58wBeoIv5c3Y5r0H%2B%2FpDEurfbjoqiZOwLX4T3uvKUaz1%2FlgfxOXBDVs6UfusgwUpIcdSO2Lfpzu26S6YSYds8RNkkf9gh16dJVVB8%2FpwYQr%2FSUy00I%2FCrKnU7Sj2Jx8oRjFCd1muWRAnJIrXrpt6NgskYLdKK5dry5%2F142YiZ5W6vPWVz%2F%2FDIJ7fufkKbMouaPabJhOiJLXtz%2FnrKLW0tVh%2BshXzZmzaAXGbqmuo%2BJJkoClaRjfZJDuLBt5qdaaRTnK0qW2SQHzl34pQVth20Upk%2F%2BmPoWKVQY1Q0i%2BxRlCLl1PloDSHvhvzkl8nuSlZbeSfP3L5rDLcA7AsTz8Dl85edCIeOW6%2Fs97BzZYk03lS55%2B4Wj5PUIxLtx2p2dsRcBFsXFtb5K48srijU9SfwUfhYaTemU4CcPDuLJFNzg7mMCTacmNruOdZLah2Y7gz%2BTJIrgeUlQwEsa6xIctNNYkTm%2F5YGiPW%2BmOXlZlvGOVu2coIjlVVNbU9lBdW4mzAIYun1LzPV6JKhDzxPkIAYbQdkC%2FqdmG%2B7HxoHbX8dwKs5988bPllFtLKc7TDzkESG8NBbm%2BKVveRtEBuUl5HABoN9MLRf%2BVzRQ5VMI6up70GOqUByQc7zLXFuJysFKEL1%2FG6x2LEHGo0fItgUhJcVafexmoueOOjp7DJlFMMzn%2BiMYkaiIzc9tXUOa2xbuqObJ0u%2FkTnCVrBFfZ7GNZXldMVVRYsU9GY6i%2Fqdmi53l6fC8qnSDwg4pDyUMt%2BzXaf%2B6BqavCZTakvQ%2FvEvwyZ38kOmUIQOCMiEXn7OdUnQo7jo7qEgpdkB7id40cX4YLT1gM8JocWCkLT&X-Amz-Signature=3aec71751b26dfc4c7b5bf0edcbe8d959befe9574e071b411b09ec91606045f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
