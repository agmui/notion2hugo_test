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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CIT6FIA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIDm9EBgssijRyJOWh5qbl46%2F55lLgPRALUpaS0wBFQAUAiANu2g29AV9mO87oaCCLmJWim%2BjMueRWxAeLA8FpsMm2ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM33e3T5HXn6TenHelKtwDsVbvCYw1Y26sn9U%2BNdYSbV9i7WHElQrpB0jFsTunGWHGNZtcpcANxeFZ%2BxzpCBasbAA7KufoWM%2FYjehJ0%2BiXJzPvKkqnPmufY8qN6CHNzk6kyvysKuS71Cmwjy321USZEam8wbVIULqTZSqtZ19gzlJNUvIJNlDsbN4eGICdw7SantYLGhqUcWV%2FhNrFRKTOfnSjCWjcXJMcEgdsXxAAxZpmaQEi0KjnmIkaWp7OggrGoKy4yoZPkr1Tv9ezq4m2wH4PlOHdnIuoHRbfHqMgjD26yNmT21Wgixj4Di59mOqylAPd7GdCedjo4NOwTMnnqychbrU7CMTAelIqQttGTfudHbIgyZkn6LSsM3xXTj2fGPNxWqiRaFNehz00qVdyIjWSce7HFKR5UPPvuKhkHfhKVHT%2BQuBXyJIaZhQTzQHooLWn0r9LEXGjI4JlBCOwwjE0gK9pWgV6poCGOoJTTs0U%2BlFqGAJWbHzAJ%2BBIg%2F2pAW0kGt80qQuKkLxZFRF0XR4Fr6hTA7zXbydWuyvxERXWxZIT%2BuQbv8RuSe1fPFHMb%2FjTckc4op6wUjcKq3nNH1ijc187%2FrLC5YrLm2qcWz9bNaUsEke%2BXJ2n0MrWP5bHbrCM2avTInQmZcowuKrmwgY6pgFT4Y7girsSyLHs7yQHcgTDj4YNHhEXcXb8KZ6Q%2BT3%2BJ0qJsSnDvx1HnHUeFnaJ1aSLltTw9W3JFSKAM7EesoEBBkuGv3HUt%2FIvVxHMmufNxoEdCZ%2BSIL51TrDu7WuCqyj55%2BWLRjg%2B3YJKy%2F79jGvmP8x7fUePDVCoG9Rtapv8EfZ4huep4Mk%2F8OXGakDOsQXhjEUCjWY9MJHFMOrKUKvGnxdxpqWy&X-Amz-Signature=378d953fa419be8d73da44fa6bdd9e26a0f1f7410d6fc71cf8cb12195b0b45b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
