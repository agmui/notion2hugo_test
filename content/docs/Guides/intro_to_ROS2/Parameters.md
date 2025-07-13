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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E3AOWWG%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1RgfE2swt%2FP1Snk0UKIYmd%2BMInDD6UDMRZoqlQV21OgIhAL1pnxWwipb2f%2F0DiTc3yNUwT7EgDGkA5vpN8Gxb%2Bl3dKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6xW%2FFjXcu3dngaRwq3APIfi8TEw2X1hspj5Ybbkm1JIWo9gokJRJHyYZHw9V9%2FtUY%2F%2BtEk%2BTtOKIOukuXu8zOzD0ntfoz5ua6FFSC5sGfhAF4gAiiwDuD5NV9GZwK0Ak6AXC%2FfnqHVTLpXiB6CWhAdfkBDJ6zkrntZSjdwKVN5EtEbdAaw349s%2F%2BBo8U7vV8Yn4%2Fd4uPFj3rbP6Ca8qAPuXp5qSo%2FB1m5lj95h7xBYj89ZLp7FgpZjylOJSGBD3pal6FJ3dmP%2F5ElOwDUwhrYLKi%2FNyaqdlD6lC5J44Fzo%2B6xiuVb9LF0OqVGhQ8ID4OIV5LhZA%2BXsC2Av4Z7DUGKJIUApEP2pXc24YxkomIrY6Z%2FBQtD4nFC60aZhIlE4QOqY%2FzKLCgJeHpqrqCiXmN4Y3vs2Tq1YxpNGNajUtqHOhTfke0NOOc%2BhJguE87MSy4kL9bXvb20mQ6C5w0h5Kc03k88ULPpppnx394TJaLuWBwKNwXEGWkyy0aEV5tHCJAL3z1ax3gsgFm9jaKI5sauEkNZ7glnsdE178nrILCcB%2BihSXpkyFUWvkLS6VW9%2BaAfktlfX0uK4NtszpT7%2B1BQH%2FeHj%2FwI855LRQPMNG1jhSTGGrA9mIRX2Xy%2Bbs5cm07Kqb61amvmAoJODzDxgMzDBjqkAT1RwyS4J0eoEbr%2Byw%2BE5SSnxfJuv5eUkQ4Yo4anPioZ2YIUHqSeMA9Y0sTfvQBSdDEImHJg3pqhnEn%2FwULo2U%2FUEstr%2BGEJEaNqCMajk%2BBhSBBeiItsvNfuVG4W5OFpNh%2FQtqIK8I20OcqA3tGL%2FHDyg%2Bh1EXy2AzsLDC%2B%2BpxDhtavMuX2bGC8eT0je4EQVkooKxAv2A0bq3PqCMZ8L3tUQciiZ&X-Amz-Signature=16b35ca3fe3129425eda913bd87b2c0038eaf2e081d4c377ae9798d0d4b73d99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
