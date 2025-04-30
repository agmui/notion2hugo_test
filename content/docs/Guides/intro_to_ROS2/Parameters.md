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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFGZX5MN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBAGJaIyUkA8SrT5lad2xZofDspB92v7rUo7tKhvo6SkAiBu4zHFJ64CDlCBpDaOqhYc%2BTsjwqlhxClBYqBVPUwJ2yqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzbJr%2BdLfrgE937rYKtwD8g52%2Fn4kyDQPYKoEHIgfyvst%2F4mxOt7GKsm0q8Rbuv32Ii7WUeOniDyx2Y3%2BnFgc49puoxVKCBCj5lmyBNPLzDX%2Br4KUuTvLxEoOiWdWmY7kfDoKKd76V97Qk5DqxQRozCMGDQ%2BwQTfioSU%2F80rzdhzhvWzmp%2Bq5woh6igZZDduaTx11CGXFGwLis56YaMyhF6lggEha9sWZ7XHU6rQXEnUHDpXNb2MJ6rRYW9dXVoLABYhRBthR1pEkAcLhoZbvZBlMlpHI%2Fg9m7fVvOZLu2%2BqpQWNRU%2Bop8wreXFS7bcca1XUp17ikEyUuk9%2FYKP3nKO7smBVpqpke6svq5sTG3mKr4SvokiOyAV8SgHpbhQ4az2xWTo1UZSAeklF%2FDk4HbXa1aigoEb8QQ%2BY7L9Ust01QzMe1LiQ1QFzuxu7Omy%2BOYUbTExI82MIx8MU611f5ypsQS2sNTDqBzfkfrbrvt0nRqpNJdNa2WESNTDud5o9y%2F41BLjsyhykfOcUbsXxseEiCkXmzbNfcx%2FJlqjPL3lcvcoe8vNWA3ICVB%2Ffo9X257pxSaQnoxbNCZ7bdLqcKt%2Bm%2B%2FyldWpZfy3gX57adj3tc7nLthr0he74XPDKSoKHbhFYniMbbJAlGO4IwuKTGwAY6pgH3ujKpIHRhJYn0YcENKGXYIugCikn2NhWrGKwlrMWqj0G9IsbBc%2BqxFD0PoefWNdDx8ZIAmeOqI8lGl8NXR18MfedQJnrDN1LS2a8I8RNI3mGbEFDuxwmOVu9jfZMMBXi3KY%2FBc8i8Gg6BhbbjCgVhMJU9x08ua7yESPAn4AXWJlR%2FhFXR4WDvcb72QSrHv95CFEpCGTmogCHcCmUnfx0stsO1NdL%2F&X-Amz-Signature=549cee395e126836964384c5a41fd7252c8fdb2ba10228e4c974534c21e8c350&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
