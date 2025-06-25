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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DVCAFQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQD4upWfyVaI5T80HwVAZ145wWqSehho%2Bgge4j%2FUlKfMGAIhAPDtrKVPQFslq3SKyVevif9srUYfettXPvBypnFt1nZ4Kv8DCEYQABoMNjM3NDIzMTgzODA1IgxufEaeDq832o%2BwEdYq3ANSZigT3wXj9OW%2F%2BzVzP9PBaVqBunpQYmvh19lkkdIaAvVV6ttMKxJpEfwdGVMKOE9dEGxe4nyYr5eC8IELawVyluUBP7C67mRyO%2B6xoIvg07IEToSCjA7jtG1QC%2BHbRgNEXvVG7TSCQ0A%2Br2WAFOB116KEiT7nvkev0Q6ecNpAIswHV7Kh2tx3pjazqcwjp8aqBAhOgqmXwFSyDlsWbhqTNIm7S8Gg7cewxnKRWThD7WErVQPJYmr8IGjjSZPFGuTLhvQZL3sd033WGZgy2AJXXLE2FBHAjeh7tjZIR9%2FmCW0YQPzMXZnSN6BMdgpL4W4aMn7furrc2jNGi15gIi5ykLTUJPcJY179Hl%2Fqyv7ybJw%2Bt7Gj6AxFZtq5Ae5Sf%2FBn9xAbEt71UMh7fQLlNwBZCiKke8ROYjcnVSkgjHACDdbvVz2b5WmdUI3KBlKgSJvplJJB90E%2BBSUnREK8xM73hIPz%2Bp1O%2F8pRstY1aBfcKZxAbxqM9qy2t9rW8ETK7h%2BuIoMtGwzkuSpMhdihNcRC6JQ1y4QzHSR%2FmOK%2B5X33Bb6b1lCPWzyadXOQuLdYO82Ml07AldVT69DfcFjqzKepwCy8EFFYwox%2F84bXG1BBF7D2CZHzHttpiZVoRTDL7%2B%2FCBjqkAdaPOIrYsOr1VI0H25zXMOQlQ8wz8mklBNs5X4PWJyGxe0HukkWNotfiFZ%2F42qIkX81o66f3qPJcftrZsL83L3rHVisnOUSHZSCeI8YNhsam7u72R5GbFhdlJWjMBE2WBoMv4MoIqzcpRI9%2FQmCo4CLGfOJiNGsw232rKvsozD7pY2hQOAVzyqJ54oTtFBqShwNclq4IeVl5o1VLDxDaIH2IkXZW&X-Amz-Signature=4c2d232de9cd9823ea9eb8d56b748c7d21aaef36d2c92c5b5c16c65032a841cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
