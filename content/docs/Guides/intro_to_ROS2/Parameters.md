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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR57QR73%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpa5EWdZ0uROs7xEARllHgsJNUavaesWAE1hs7uSzd4AiEA0w9MYwdMQsC%2FYzmVhs2zcAFtFoMDn0XBAuTHm%2FwK4SEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOkYi%2Bb2AWh4CYj7wircAyDV7natZ40sm4kAHJKXufUuhUrIwezDXP5AIPHapWh5MmTk08mEwBM4nSxdeWuR8wwSnGraCZzjXZZxKTWN8DtcLoPzwiIG%2FgkYrbCGTlTjZlucOXGHr5kvaPpwQTo2pSKpZwk6MAyHhCL3ynN%2FzbS3NVdWiE8EBwPWuq%2BgeNPfITM79H6fZs6%2FmO8WPiFwpYsR50fH%2BhfzS5bcR2g1nzZjvxzJq9fjQPGSPLsoxw9K%2BZeUZmnO6BJaYlT9I%2Bv%2FcDJJrJ3fJL2cI8T%2FjDDJBhnh5TjQfMi5zy%2FRlRRfXojZOpmNd8diLZkR82PUZAHf%2Bihe7CJjZA48NXlrb47C6TjmKGAQym3lzbFrGwN7GLATn4gWkjn4z%2FJILbzmmaf%2FarC4dgSnJ%2B5s%2BW0Df9BmDOpEDX4jHv0L0iO2K68bn6cvDKbOclv7tcVrV%2BLLDGvB%2Bo6uzvcF9He7BncReCi4RjM9wB%2BXcdupK%2FdAW79WL3XQr%2FNDQfPe0qAiRTlAHqhWtspVB6GF6RIpLyUu78BFvwrA1YaXF%2FHxbVtcGTzwgULgwgfvHZgqJ4hW8fKJghMcjhJNTPRf%2BOBijnS14zCJYj3lOTPLQBh28W1YSjXEKWjRNRIe49G4qMcygDwqMKvq2b4GOqUBhqGgdAa%2BUnWmYSQH%2FstODUmur%2BeBcKSEE0QJBE4nLrRroUNdADIKG7ZkjsSdsPBijLKhN7YgHPwZJwBz7KBJRQjV7T6vLnuyFdbVdN6mzyLvce2PSRUHAyY31v453SX1eOiWNIKp177XgtjZjwVyUl0n8l2AheQA6x5KcCTSEyzBVKktvRzr1ifY%2Bwdf%2But3TIy73DArVS6NG4diS9X3SCuUh3wZ&X-Amz-Signature=fad50100ca8ae1b0e57acbda33fee3d5a2503062e5debbe902882542d8dedd43&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
