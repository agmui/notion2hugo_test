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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K3REC7J%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVqbWEAX4kjvGCkZcCQf0MaBDIeVHYAKCr8%2B%2Bi8LlR%2BgIgXMseIFqnhM8nz9XgVDnaKB%2FjEsITtI76b9aDAUo9Y1gqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERYszohToSsM6kOjCrcAw8CldSiCU9Yx6Dr2J4fA5X352RGfjc53yEi6QM8z1tSVkhT1%2BnrTAL1a%2FmwbEXB2HN8VJGQmhZ%2FJpaTEaLhqiyVzkzOJo0a68kRIbdu%2BV7NztkSjBOlUnMPBa%2FeV7TnMBjK7r%2Fm0L2QSUbkgzl8pRWOoTTWy9saUYA5SNzuyWM8mI6KXXoaFWi0HPQxgmf%2FpprM%2BWm6xc%2FSqGAYztnZZko0EyyKiOsEkAsMMg3CKCAee5jHOKRfVFKVxWakEolWcaJ%2BRgghoiLFo9rO0cUYjyvZCUodAznGrdbl5lgJf8B83tDhbEkCIlUZfaUAk%2B%2FCfqZIZ%2F0Egwh%2Bfo9AdGevM7O46oCLoK%2B0hVOwlkiExWz%2Bv42ZJviyHEP2NfMYBFj61neV8ndUdH5GvTg7WpH3boQ2yV8hQmFXPB14vcFEiFnpMSDjDZx1IwKpBWwcNgWT62sqAEZQBW9gZufHKZVCxneNMkTT7jwRl%2FWwVFUOdfNON%2FZmoslqRSMB2EJM99VxUN7sbFTx7%2FjPi6Sn5LRHRzr8WK9KyMxDkSIndldwchf3K0QSL26DSebPXGxDWVfECy%2BlidQgjUSHgPdxZ4HBvYF4gahBz6fU8OzhEDSGjx5EreKFYqo8HQ1FD6LtMIbClcMGOqUBVzeX9Q69of18tB2%2F4pcfR6xAqXLBsHMpBwUCmcjbFl4ytWS0tFG%2F4e0dxzK9%2B2VXarfpLhHkqY%2BOI6%2F8fbcOrmL3yFZfr7ougzwjKiW2UZ%2B9AUZTcoubQ6RU%2Bh4MWD2RQPZ3rwJTqdF%2FEdV7v4QbZQPk0L8R8yEYaAcq7G3GNRX48%2BhK5SScPY2bNmB4UnakQ%2F1b8xkvazaSPCE8nt3ammAX81M%2B&X-Amz-Signature=9ccccf525886e9b85549ac415fa2a100c934567525732251ba7750ff82cb7940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
