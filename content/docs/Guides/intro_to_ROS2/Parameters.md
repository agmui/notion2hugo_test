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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAUCDYF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfGkn6oyK2qXkfmHwrYW0%2Fe1itT4ja%2B%2BHNokEQPXgqgwIhAMraM3f7TGtoaEQeT%2BPptqxKamcWnrsPMTDOLgPsmElPKv8DCEcQABoMNjM3NDIzMTgzODA1IgwTkZBc%2BIyZcsQIaSwq3AOTw0TjBnK6OT53aYl2g9B%2BpFa%2F4MiZqvRAPktyqpNt0z5AitK3L84P%2BnWDbqVzQudEn8uaPgwW%2FAOCws5gj0307CyHRRR2aAw%2F%2BoWPK1tTzdWTXGmvMqbRxmX1xy3Nm%2Bcwp6X7k3WTjg82PGbR554Cs6h3zLOM%2B71acUSSh1aRHA04AIshJvIaBvNGa36iCqtvBJoE5UNCuEd5HLHH8rdHZx6CxCxivMLORWwUn9FHTouPWcYlStJfUUMSmMgRHuIIjkO%2Fvwcwg%2FzDJzp0Nwpn72QutsqbcqH2eRoTqsMvIXgkJGXE6ieKn0zMFP6SeNGHQkqJ44DiU3jhWin9gnVTyCmRp2eieHSbqLQMeZxH%2Fa%2B0kM70Z3Ni66N5H4XsDICn7aBj0zaGGeibVKGRELMK8CSUAeWra6BisBMIqm9mP6XwT%2FoJVwKkD%2Bz3bcYbDSy5BErz0APYbPCMFrJUcoaWwjcl63H7lhRfHLs4IdOs7rU9ZfrMvY7TzmZCokVlybuc55OOtLaF%2FoQLhGE8AARnS107k4fuhu2CDQwS3%2BlywEbJ%2BLoFYOdumwBT91T9GYbDUOipAHCWN%2F7WtNYWCxvTA0WT7DP9mhSpw9aBUhAh6dKRYlxIAVdeHD59zzDFgJ3BBjqkAfPb5l5mVSHG8IKWdZANhgNHUlfGc%2Fs9guqjZTuMkz2IswCs438jmsie6PmoSxjMEYL4xE1iutXudROxQrHydyb0qBpPtTET413Ek0hlrDPR6F7jyfJttvcePx9e9QdP9TmJpjQen4GiDdoPG3A2PqM1pZXybX%2FjRj8Q8TMDmBchDMxa%2ByM2xnKuevFSb5HwkgMJBuSrOHbwtM3VrmQQMnlfCRzG&X-Amz-Signature=6f907e2bc6a73699c23ad26af831a29042dc673ce6d952de6313dc3eea9c4344&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
