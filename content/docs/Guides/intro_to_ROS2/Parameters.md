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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOEF5Q4E%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOy%2BeqD5BEfAIcnvXpxlflLp1ufzOOBb6mjKYhM91MhQIhAM%2Bv%2FT9Zt64deyh0omoqSkWpEnY4Ge%2FQZhr6fHowYa0YKv8DCBwQABoMNjM3NDIzMTgzODA1Igx4pb49Z%2B0VUlvC0sgq3ANN%2FcQqI8sdGW9loQk24sXphm8B%2BR%2F%2BxfQu%2BFJ5idfrvnP5KMrFJHuAHVsBFqoakQcRmSrlg5DzeftBUuhccV4MrFATVVOrOXiQBVSd%2BVz426w5AgCiVkJQjIIHUIKDEAphbHHBo7cW1%2Bgc4QEQsrcWY%2FTEgU4S%2FeQoquXisEqR%2Bpbuh2CzUYpculpBPGO8NxFUC%2B0kXIbXxzsu%2FIj6wF04C7yCryncRE9E0qJRWVoBR7NpJwR8tgjFWLL1A%2FNZdZ0%2FhCm9y%2Fi8rV%2FRFpY1aaF1%2BG7i7Q4SBtZKOX8W21jdOSMQdCbL3lnK8aPLujgioD9SMZ7tW%2BhG9taYYDhHaRYaVFaKQzr3z3A0toA0h0VIsowr9MK8p0Oeb3bmn1%2FAMnrrwHI1NpqqVpJPo%2FDd15FJNgDXtzFfN%2F0Ssy96l4nXBzDv2Q4VAJW1XPw1uT2W1d6Onu3IgRNjC5JWkqEIwwpf17%2BDdQAz1gScHLF0CAjfxz183%2FXe4h%2FtVpKu9414XePw4h3n8Hs%2FG3jPlBsdM6DO%2BNEl%2FjIMx8TfxoivaxJEaXSR1yNuT3W%2FabLm4yZuJh0ywHHduDbzuKF5er6jiWExtZBvWYOwXJfihG6qzdtjJRxDJSEhTL2kv2hSiTDYjde%2BBjqkAXQRshZp1f6%2B9RVReF7FaffRobSwqlgUhDHqLupuya3RvNItAxui%2F48wylvFlUBV9xWzMbGdch9Feyar7GB5Xj20vdRGmE48e%2BWkuck3NcaUk%2BG3zjlJUo3dc8cupCEBPidmESSHJItTVYG5ipTdNWs0Wl9UoSk9sV55mfaXBWzq3g8iUVT2btTFksDRiyIC5PVer8porM5hmp1rRhKHnuIjkgxj&X-Amz-Signature=29ec13ffd9a87a5429387b0d87368dba68b4c19ad5042b658707514f7df8fa39&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
