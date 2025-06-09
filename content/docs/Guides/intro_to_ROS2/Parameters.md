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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSVVSQXU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCERI1sf4PFQcONYFnGthF3mKi4uc1IP0WSrd9cgIGwoQIgd0tG4%2FXV30zQE2QytivnYKEeOTKpp%2F1Sd%2B519NXCXR0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNK6QrH75Xqid892ZSrcAwe6TQOIFH%2BUKLlh6j27%2BXAbwr3DgpSswXeR644YhBVcVr4TzDsukgn%2BjXRvlNfZJQ%2FrwkSEPZJEeoXSDbVlOxDvvafIASWaA2%2BOhLtJTDUcSYh5QhC1zuJUXAkXGxkISeRpUk0bwOGdOJiuUq9arE0nluKvLeb68AKaSh%2BGINcred%2FVLueA4bVBAgzdTDpbkisRWhsZo0kUEWUe4FdlZbeoH2Axnjj5nT%2FJGk3AHZ0pO3ilPJpwrXni6yC20FTR7hnCqTQHukGVBZM7T3GJPlzhscACCu9AAEGCW3qPGUHPWDGtgUswv9VPTwWIQ30kuMBADZZwwYHJ%2B0RtIngBFooUeGNiFiCkNVNKL%2B7Ht0g%2FeDL9sB4gr9P3nuN6OZci0V8v7UjeFhIP7CSQCpxgvGpipepUvsU8w9Qug6%2FzPe%2FZnoPJWoTC5wQONoax%2BtjeHIrE7CO7CXajf8B76euQQkC5bleSf2pklArkGbZZCNkPVPcRKvVoqXVjTEJXeIvxXiFItRrJROV8uOqFXdDt3iBwTYSjXG0tDEW3FFe9QyFX2Yo%2F0OyfuINR7FLNRAJ350I4nnZznOUAxljV%2Flga6KBQ%2FSr4G0w7EKQ%2Bp9%2B4stsF0w9uYW65q6ieYgmpMPmdm8IGOqUBiRRuQ0f6JQDjy%2BPd7OyiyfhyY78jPAtnWp7xks3KtganIWA2czXBafTc%2BF5BkvOYuydDq0BcNQJx5%2FrYLX3wPs3i9%2F8gqzAqQI9t%2Fbokd%2BzSBn%2FiRySbOAh%2BGmCTlHOAd6BwvNgmUPmE36B9ydJ3lCJQeLWlyt6Rsr92hR0hS%2B4m7mBCMJaobA6BaabCR%2Beosb3%2BoYg2spyiXExnMCiHOHOPZdkc&X-Amz-Signature=881f5f72a5b37e1b1f9a5ad435cec4cf2bbadcf93ba81f695af2875ca1815624&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
