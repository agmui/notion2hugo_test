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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ4VK5DT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRwVOWvtCdTAdfqTmC2w7v27e6HtWsqAAdNV%2BYW%2B2EygIhANoDtMCzXWGfQ20ikh2br%2F3WK2uzxovliAoGxBc41gZAKv8DCDQQABoMNjM3NDIzMTgzODA1IgycLrqRKRzvMDxtI3wq3ANtC%2Fpodd9nmLyaR0WSqgjUywPd0KuXvVsXYzG2J20%2BQjQYBXybGVT3j9BDu0cSSuDho1WUxC66UxPbZHK8M60RP6%2Fl4I0eWSWOrjo7XOjZ1twxEky042%2B8r8IWjVoJC6h52VJnZzaNK3H0lnHHaf5TA0is0d6ZSC2GJbg1uROD62W5kd%2B18VNIHAK44kB5lwlBwPP1imQv3zWT0BcuB9mok5z%2FLxniotbKfrcMOrk5e80EXqdg7eAEhuvHvR5C6sX7guoiICdYDyF32vr5JmbEudCnBbWMQbp3jx4NihzCrjPMlXPBCRP%2B5%2F%2BVUwm6gl176YiTIgA1U4bUyA7vj3ndUngEiQxipG6GzqNZSJI1DQMzn8j%2BWj8r4NibhdryPcglR1ujP34qjIUa%2F7HLdA9RFOwmsAYs1DD5J%2BJeFCch8M6yLDetTur3cBCvJnZMujkO%2BUH5ka4gM4I8%2FatvD%2B%2BL2ojMDCrPXh4W9HlcpuOstYIrZ1pImfIA42mLuhQh%2FBsoxI5W5f5J4ovyK%2BuQNEuoMflbCLaUP%2BKK7uXaR6PV3Hn%2BxK%2BWAkbkUFncTej6DuwhpC4YXGQA25WjsrZeupSWY4IvBi6fHF3CIb8jYGNXNbKhubGzuN39gb1MCTDb1vq%2FBjqkAcorDyuS6Q7cKJKVN0yIkHIEqQSIGjrpifyAOpmDeVa8C9TBjcWG9iCp6uGrXHXG18KvCtQ2cYtVfE8UyiLf6Xzp633UzqeHfzgZGyv6lGkPHZ7B03WmaaxyZ%2Fy%2BhGxlk3eBl6AFC6DKfLwPmcGRN0ovuVbPZpiGTSUplX3YBnUnQK3gGf19m77UVIxXvWba89tDVB98prGVVqono8TjaKtnoJGr&X-Amz-Signature=73a11c586f2782e21e72155d8a3da9cf92f371e82d3519f996ee889d13ded6a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
