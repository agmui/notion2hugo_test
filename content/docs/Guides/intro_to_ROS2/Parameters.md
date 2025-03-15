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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEBWCXD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe7EZcOT6DY7nNlrJiz37AZYN2bK6SJJcQRk%2B%2B05yGzgIhAKpt%2BnFgSEFDKJ0plWEsCiHyTqCQoxACxuUS048%2FkQzyKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzqmz4JV0L7KhYw3Ssq3ANGNQyMe9JTcVATrtyroHgeKL5o5uuBspsm7l%2BviWDL72qsl5acDAu%2BwQ9q0vqj2FigdxhteqZBpJSZpOFZJFF%2F2QHCopPtHRNPLDQf9ygKe2xAqfkVTJD7EC1oOSWdzP6usp3ABHKExH%2FpHuV8rW8jCyWC9zMFMJnQaLFgsM6iaQ%2Bw929L626y5ijealLGn%2BXBNoOFdc38bvqGa4WwwSrFSa5hNg4ws%2B6Ie3Px%2FYlXyi9CW2na%2B3F795RHG7pEA%2B7M4fhuQRdQ49CvRqn2NPh%2B9r%2Fu1FUUzFsQf03cosLcAyptHRIvIWcnco8RWv945dBJq%2B6hUASMGqSm%2F5eJX%2BwNVW5Ro7vFyyr4JSjtQGp9wDJRkkYOj6BbRLrAKtSe4YzKcybXZvOQcU3AVAzOG%2FwIHEakdno4mWBrx1tPPet8ANC5NEfLYA6YGhanRaCCt7svqDrdD%2BeFebaIKVVPAjJSF3fiBxSuTHx3HvvDH6Crq%2BMuYVqjBEo%2FX67RnEsYiNxe9%2FDCaUg2aU1t91QkfLVscy7NcvRRIvBVdHMoF41oz5uRU8qAMKSF9OLon8dKuYkY%2BXHbGrzi8gEwwhyS7BVXUgIdeUBFYmrGzckOsVUaca7fBTK1RHGRYyLjWjClq9O%2BBjqkAd3UeSPMBt%2FiApM6IAYA4CYUFKRtK1Ai7Y%2BEMy4pwELJj5OZdjXBwPtF0QgzDYngbuo0MBgfYvRdBnf7w2jDzXxWQUeQKkJoIDSsDTRK%2Fau6BoQBmt0dQWmsbCZuW6iqCh7jSDF2UIf1Cx%2FvEafhQpFPCZMlRJ%2F3cCrJJ9%2F0yygZHu8N%2BthxBoepXIjYlv3r3SNSeyvrjZVP%2BLgr04FPtjPc66v%2F&X-Amz-Signature=83c3c71177a4a0a7968fbacfc92f4d666e17faf6c4a34ec8dff4187bc15b5a68&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
