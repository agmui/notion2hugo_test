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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2OL6OZL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICV%2BSSaIXjyV5ZXO%2F2TjCdQ%2Febb9KI40EKA6DqIpdmc5AiArCS9BvUagVnVjbBDXSSv5AetwM2xB6R3YyuKFXyj1vir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMX0R%2B7xBy0%2BOxEhVSKtwDfPyjs1Ri5HNQC7Ush2TTutP%2BziRbfB0S2DhmxbzAwZYxfRi2KW2m5S8Ah85SvZHyTnlarAji96ln00un9Iy0glTBfMB6jhwDxtT%2F3rCjS36BUOXrrUvVaDmOSV1IadG2IZ4qoHxU2AvSa1wGfJsndnucTXsFtncVgAwzfOYzvqJdkPsQ%2BD5hVfsoaqw%2FmdizOKBU9Vz9LCBvb%2FZsv%2BDjOeq8kH6d2Cq5gu7kl64rdGJveU%2FHKjn1anWIOGty4bR9s5LDp7pwO7mnoCvON0pCMUpPvDwGpU4JG30jfnuAgB1ObxrWMYjQlIvFyZABhNPvK5yH3j87dJArsJio8d6XtXYg24odrgRzKrsxCMzwyesiAzS3yLTLQZDS2lr7oI1eKfp4xmicwEsyvy45qtlA3qmbrmwY1%2B28nl7kvIlRF9P%2FD9ue%2FcV3hHMVHHLV5qB4tt4FY1ZtQNgwA69vokGr4sdyp5wc5wEqaHkIdt%2FW9O%2BmpmBTTQW%2BIHNj3582tV248qpNiUCMkT2pNzCVo9u%2BasxmzJqAqWnFR%2FbZFwfoP1Bx%2B%2FNXWcOeJH1OvCZcQ3HlPePJxiBTjWZB2x%2B8hczwkb%2FUvNipkPMthc4z6oplRCe0u884dQ72vOpWz4wwrrivwwY6pgFtoTsShlRNVRNp4Vf73NVewB%2BWiyIbXxLeJKnEgWhaXiwdvxtOesHST%2FxDWWT9O%2FAnRcDs3kxt8Ln573HOPzPq%2FTnHrPo50e5n7TMYlMm9mb9Z5r1%2B%2BohIQoQMfvYbR7PYIjOqfkR3bAvO%2F40gR11eXijRwZCrfb32FmaEdzmvo4HXfSlXShsfs4giEObusdmZeYECp%2FoyR6CB6GJJzhIjHf8pvu9x&X-Amz-Signature=8529c210af9cf4f9b38f714e2645dbd46bf0ec489c21f76de4f983371656f19d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
