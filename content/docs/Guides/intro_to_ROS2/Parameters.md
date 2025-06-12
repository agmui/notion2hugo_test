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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VOCVYX5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDLBj6DO0XrxEo%2FJQ6watanN78B5OigOPScv5nNWjU05AIgKLUDJFcIy2UUT7lj%2FDfGCNMCw%2FAhyLa1y%2BEC2%2BBH%2FqAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI74vMuCYerGu2%2FDircA2ova812yMzxsSOYZfRkMw9uqku5WFVBZHAd6GFj6TWA0Z7YYyJmc2f%2Fz5R%2BVdIDqI47CHvVsMh2NHF0MIEVCx9N17WTJ74qMsjCqDOUnYs7ALQk3HcUccdL50BFQJV%2F94UD9%2FLwSKeKdM5h%2FyUCcaerPlOXCKhB6lGZwp7mIENfyUuuRB5cwGmiEIiCrTMdkhlPNeSdiYX9pFatbApCaf%2F92BhpM2lfyo%2BjeV398nBnVXKnSISUV8dujtF2aNSIQ4Aa5Dz%2F3Oj%2FtK4HmTtGJnLSrAw5%2F8ZU3rLGhKyBuutPn9s8%2Fze0UpJAtXE8mfiRyc0%2BBJyf0uU7n51XXbvLNIdeUqJUkco8VDpsGjmQf%2BZ33uWngb25UJ6VHUctk0%2BkRbNpoxv042PtfrM9J%2FU14GMlIrm%2FSlOqtMNV77Mb6%2B7vKuXa5K9zGVTe0wsa%2Bf9MI18oG4u2WnSrZvG4b3dppb%2BLUmxA7uGdHilmPMjQq1%2B7%2Bh8fj9eW7ZM6Ejw6RNC0ENURQ7WhOu1gi1Dezc7g87lxKnD3u0MTgt1Erlh87Ejclw8WIbl1whHLEVWs8cncTvdyPXF1vIvvr4hkxAPFZjGAGoKQIhYJOVWzz%2BArkkfOND40ELGweNi4jF%2FGMM6uq8IGOqUBDwM1MC64ygecLqDyvkhwSN48W9ibhQKyLCKmiLjuMpDBznEuiq6CeRALp9EJ7%2FxJQbbJ1prl%2FSzyJnJStXFUwCygTlkKLSOXopqaLktUQ7BQhPFgP4Ddl6vmG%2BSwWgBHxIDqNkQLhdPYU9A89URdIxGaa3Ow8BHC0nr01ZPKVjzQpMrITwrOKG9YFE3hIMB7z00gLHy71QdwdR8R33IJrZ9ccbvV&X-Amz-Signature=90668d8bd486ddaa4ec3acdb55d2705a98bb9d501627166101659db56accf41a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
