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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVIG4WVA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIArOEr%2F%2FKIWEA6Ymegw%2FE%2BVT4zHjvAifo7kHYoYh0PnmAiB4Q4PGRneZipyUuhYBNMdzwGRGYx7PCyjalJbrrGMI6Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM8vQzVLwEnGIw3XpDKtwDrdKsQKuSBq4aQ9UPe%2F6Dv1UngPtqoLbsIIQ5HL71RaVaaaaNMm2Qr%2BI9R9Xg75D23Q934UIiAenzCKxT8iCr8BkCepKnXRRLfTu1dxcmfZU7lmKO6sggj7DLPRxKRaO0MQQLERMMJ1M4r9MIkMZYj9BxH%2FEvku8bim1CD4ZWWGSNU%2BoBIYjDGA%2BIaand2xGOFHUBejqtK37a0nrKkxe0Vu%2BcfOrvfzPTMTovPzkKwUdFcYRlMGnjLr5u%2BBDrD6sq2YTMV7eWhecaASsHXlfs24FH4azSbhzbvft4v7MNeS4pZjJjz69NzJ6bqFWxgVeSatvZzWNuqs%2F8PzfGRkXNel3J5J25B1Wh7p2gEpwU5roxv%2BwUif1nGDKr%2BbkDpt26P%2F9yOi%2BXNI%2BlbcwH6TwPadvycYXa8VXZ4wxsGaWj%2BXenQ8LMYMHaORL4ZzVSKzDRGgaERXwi9EQKbBFrNiW0ns776KWsu%2FxT1jkggy2w0g5guZOsAE5nlH%2BfQ4tIgCM6%2B5CA9p%2FFOuTkYBfeK67G0i8VhQtzVjGKQ1Y68Ea1EJ4Ht5SGinqLcHg2adP90wv%2B4Z2JOVrUkmEjf%2B2VeQGfVClbhBWZYNF2Mj9XuhITdFSDFRcXmNR7GJwlSE8wn73rvgY6pgHFxZ4z%2Farud0pLq0p9fgZLo57R%2F365erniEZdDK0jY1DCWNyXPklVRL5UffxHa5a%2F4h6iQ7%2BynyESxrQCtF2JUg%2B4v6UVQRYQz9Wl6aKPYkPId8aEV4xca2bQ7BKGvVfkjZu7nw88KqvOjV9AJZ65nQhNEokMfyT4mX5NXahpcsk3tBeGEIef%2BWeQB3yZ5f20oDBb46IpFe2rdgnpMmWB26MDP145A&X-Amz-Signature=4be205c09fdd291fde76e71d262c327a07e0e8928cd88093282e45bbca581a43&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
