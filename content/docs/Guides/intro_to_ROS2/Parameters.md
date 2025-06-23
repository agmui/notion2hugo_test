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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642G4SQ4T%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCV%2Bzt8SPzU192Emn6J0Hvmtm5ljtyEh2wKJoyQuFQ%2FfAIhAOueGKcf3WtZAUbAw50DMlIfwnx4NEl03CfbgvsY3amoKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwpknnerGT7AUindYq3AONV%2BiZ88WBrONOG4DwGs9SASHdoZw6pY4zF%2FnkWpuzjecFBM1uUzoHbcHBzT%2BsnxecumMbNSfryC2Ht7GFzUaBKyGAguhrUDRXMKw42URXCU4uwGGLK6Vu75usi5i%2BWjmPKb16T26CN8nM8PKP%2BMCOQxtf3YJP1Wr13QsYe059T%2BHaIL6dY35MEG7quohTyUuf%2FnxFNbRSrUhFqUx5Uzvek4fAmI0Yv8ye6vPny1V6BPTEGZiMH53K7xzGUJaIWqRM5WfhDECE%2FSoDnC3S7TQRUoQpzl6eqQE75IVLBivjohWo3442lXr1uvVCCPnjLGoXwsa%2BxIcnc7AWhRrV%2BfJWpOH49Ai4gYKMbw9kMNdUSDNCUvuPU7%2BDLB5PNmrUO589f50ca8T%2Fq%2FXW1K5S2k3vXztdbrj6%2BkZ%2BHZiXdoRXXE0NJ1GIWs7Y9LWmFOKazYrH7SorK%2FNA%2FxGvWxY0LskOVJ7LHA4v0mIvFpYFdRv1fh4dq7DI3ZkVzFoe5R374%2Fji3NtTB7ZFxxbK0%2B5uFp5UZOxikUhRNEWXJtdY1ESn5Q0dqmOpKSREiasRTK728trsm0dyI2jbivC7cc3TttOPmfCyZgYYdSMGU6brmoAiCPagkPns%2FGVO1zvO8DDrp%2BLCBjqkAYRZJQ3XFPYQM%2BfBa6YdbGRMLVGL31YUaUj%2FRqRn2zzrqeUPse4jd%2FP9nZJvM7E5cl2oBwiYf7VOBmBndStG2fMmpKXeGuBwVE0KnOXVKgTb34d6wv%2BlwVQNsjTSPhMQih1oA4bYbU%2FFHXCSyZ6F7uLBYKVZ54MHznGZNMKxQSq35%2FX1h8YsA4soWMPhsCt2hRssREBZvvYSan759u755kYMe33V&X-Amz-Signature=d32c2824b8d82dd42790ae7ad83971e790cf0ab045bb024cf2e253999f0f9871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
