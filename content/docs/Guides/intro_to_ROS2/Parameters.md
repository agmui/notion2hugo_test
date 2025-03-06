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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMPI4RD3%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCny%2BNFj94NHFFWJm5asRJLjV3fDMVNKoo6IZ%2FK%2FXW1kgIhAKfK5vr9JKKVsznj0d9Hik0wcmSkRyYir48Iihr0xiuEKv8DCC4QABoMNjM3NDIzMTgzODA1IgwdLtmHkRQII7LHbWsq3APgv5qYh%2BWDQEdTXFYdgu6RwrCrZTnxhFno3%2F5Bbhux%2B%2BpR5PMgQA0wjTPKGhYzGgRfGbW2mzo3gpno%2BolGusW%2F%2BueUcamO8IMydXIn%2BcXhJ2uh%2Bw9OclxL7s4OmIV%2FO%2BnQc17Z5tDWMLItl4QhwIu9EonJ4zoAuk19xAvYvKyabe5hz%2BIaI2scSP4yqQKo%2FDDD%2FP%2FiLlwC5FWTVTsDcpb4bFVpzOqUqsU7GCyQ1x%2B2mS0ZWBqw23mdHKZbN%2BGxvRGFSGw9LWEpTnvsd2NOB13iujOh7oi0LTPEyz06seXB9n8FLK0%2F%2FkbsaUlufdg0RI0uvD05%2F313OWd0HZJWBPFrx2LTtrxg2VF9Nfz0GsiQG8x66qWr2pCVCkurN2R5A%2FNvYb576BxNZP6prGK8w4cCpN5UdN2M81sWQ3ubxo3yTLe5eXcpqd1kuKE2THDZPVM0GbRvqBnc5M0CGsW7En%2FM1SXPsQjgoPhSYZMOriWvvXZg63DZscEvlEnjAJIAV2KZtvAndyqKOxudI8%2F7ys9sDCD3bNpyew0Jvm5Dx5L7AlMGhdsNx%2Fmb%2Fdc8FM7cdphUW%2BUtaVHScPGCkN01bcYvQF8PyhSTjTQ99UU%2BaY8yZGBpuC87N9XFdzdCvTCNsaa%2BBjqkAWLgMEhBB7oGkHTSeU3YSrcyBxwlWMBt%2BRmx687eKlQiA8xJJTQwhjQXyWCalJGthUuYqhgFwdzhpc1eb5IHvhsiqSe93O1A3%2FZWlj6zllNxIdge6kQ47RqxdUfKk4rbOsBOeytwBEiZyN2ViclkYATH2FpJdrtV3olBpXEtxAhfczoFbi5Z6fTaUprvgFk0a66zFO87Xs%2FICkF2eX8JOzLF%2Ba0I&X-Amz-Signature=6c62638dabdfb4e5f9a1f5e5d4d2607511756e0af5f7cb6ee952768ec553713c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
