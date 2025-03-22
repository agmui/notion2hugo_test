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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647KYHXIA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIHpzBiawu1%2FrnOTtc5whyU%2B30PzkxALyjjmJqUYqrtvkAiAmV3qds9P%2FyebuLc3fFcMMrgfaxsaWEpBnKgZSCCZ1dyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmTAbhHkklbcyhsbiKtwDdJznQaXMjBdpOXbDZ5pj4kQ2Yv5r0xSb2YhvVMbKezz3aONEsEVHh0Q%2FkU0pC8VRm35bHXmj9P4%2B3ozWMY3cBrOgOfqPZqQxKFirUB4SUAw3SvclqUDTHvdPFJJc9GWG6RD7dOQIsS3iHOtoy%2B6IvlttyjA1MhlIFcGc%2B6U0qrBzt9amzjoiFw1udXsHsd7hyLYx8jQsxElVQMyqQtI4DmzDsmyFTNUYWqoa3ti6wAV2NmhA9YGZhuakiQkfg2omxqcS8l%2BTClKHUpvZskOP1SjzR7CtTgX6B%2F%2F5mBLHlFZHpywkIb1nRZvgWrz7kNvzk%2FbhaBr7S0GZ0LeBP8%2Bvw6kd%2F9vfGkgMHmtm5hn6Ng%2BfOBnAL2yVVmCXCcPpwLJ%2FZEfP%2Ba%2F1jWXCgvrm5Y%2F6DNnxxrDRakmXPWs%2FLmphU%2BRBTzNXU%2FHXtuSrVUdppoqnJKeBE7Kbv%2BMeDRL%2Fjj1Ps90n7Z5SEkyYjJTRQwXlfscjuX%2BvBOQGVvunrASW14JT7eFDmEUDokhK5ZYD%2BABhaTpcC7LhGvZc1hDIeM2I36hOqzxDnG5ShqcTJl6KAJROapqIXw56BliNhhBfgHD%2Fyhg0O2WoAMXXZcfA9bd7W%2F%2Flnso0UACVXlFav7wwivb6vgY6pgEp6Ohb1bSrDzb5sPhGVAxcORSXH1Cx8JVSlmZQy%2BpMAm%2BNd596177KNVr476DxBSRIfB59gPXt7nufINwT3jCE3am7hgc%2BUPT5%2Fb11m3BEF%2FzvG5baOz2KOwx9VdTSiPfearZ90FL%2BIuvIHNqRM9vu0cXHQ72Gx%2Fx6uKFn3x5kDNW0hyC%2BfFXKLLT8IKvsy0F81iwcT5bJtPQVqyDCqAGY%2FbK31vnN&X-Amz-Signature=6a9277806aba2eedea5f5298f8360d3b08b4c9c1659281f074e408e48893633e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
