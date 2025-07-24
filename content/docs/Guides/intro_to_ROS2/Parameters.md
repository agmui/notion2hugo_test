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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HKPEQLH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDKRY2n4O62ML7vwXBps8Ckv5dl0WbMcJr5LN8EmmdxXQIhAKnZyK9V1ql3P7A%2FbAD4BOPkKeU9TCoWfo2SUHGIOVwiKv8DCDIQABoMNjM3NDIzMTgzODA1Igw8PU4Pci0%2FR6kM3Ygq3APuIFb9erm5vmwkmrhv47PsazF3EnNXZoBU2R6rqn9llTIUUDpzb2o%2FeFM4lSSu4n1%2BhVLGMkXGDar9QXVFfvLqYXiKgQJo0yYC9x3A3i%2BluXRNh9BYcYUHf%2FWkm70UyAfiPFioNxu1u1zexfb8VGfAqLVTc1QQY6XcodJbqZQp0HvC%2Bv8MXJCjgcy8fFr8DwnaFQaZPTeTMgvpAIWxMm9P3HF8HeFym%2BOd8FiXvcy5FzKDuAV8XhYl3O1w7i2QUJJlVohDuv4zg1XhbPOdcsXLv8cCvSBMWyf573aOpMPd5DmUjQxxsPmF0Pr6JvTC6Lz5T4FzPpmCqdJLQGnFkLBcZfXdeKgCMahQrEhOxF%2FgK4EXkZuJU0Acy6bSOdXuwpaeabTF0eqqeGRIQR03TslSWpQS7kMIjqd6cdUiEBLcYwKUuBznNdX3vTyDEEnV8fK5sQNG6DNs2GNBteQXBBUvn3f7R388zN6%2FgNa1dqBsnzyMzbv6WaTWRvKqd0cqMgMxYpKm0f63NiTe1es0Hb%2B%2FV80yaP7aM6MdRwhWHj%2BgFzVRQPCg%2FPM%2FwAbh3JhGt1G%2BbBfAqW0aiGo3xKTgeTSSL%2F4z5QMyj6AKiV9xh0ufFqHN6AvzGMIWMz5agTCL1InEBjqkAVsJUI3WYB4YS2%2Bdz2M3gEdeiaKok3QEkYqqnvdSZmG0B9G0cH8YIMve41LjfqU4U1KpaIjfMI8O814StoBxmZe0E7s%2BkzHQcZgkeil6nLmFSlgmpQ6XQxn6oW6J%2BfBqvq%2BGaoS8uDXkCVF6FCpvFchzQTJdT9euyOiCMel5vlntzUxyzt7vHih5Z2vBkdv8V7P5gMFQP3wVLJ%2B2dcHzCx9SebJs&X-Amz-Signature=a5cffc82b119e130f5620d10575c8824e2559675dfc2ddd6af7289f434280d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
