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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPBU6NUV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIBcyzHW3JIDwF6XxPMnIDKooZtF%2FOHB6z%2FP2iNcKtIMqAiAGzsZRGCgc2Z3oaTYB6JY00Py6%2B9Ui%2FCuJ%2BsMmZdHPTSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMTuwmqONlM%2FMK8viNKtwDvgmiaxAJTZpf4NENRbwHa3DE7GW7XdYdp%2BOR%2FprH2rPotaI8Zd0rJHbt%2B1gdXSWXSaByqhSFmpjgPFAJpl1f%2FnhFRKsEaWl91BbwynwxVYKMCVTox5C9Z886EdbFXHVyYj4MZ3Ijl%2FhEYu8InlA94dSrGlitCItAw2YLtT4WuFCzbHPrfvkP49VUDh737FLH8mVYaLa8fEtfsbm7m3GZ%2FnVEn9QdTq9sbc%2BDtUe6KsDeFDnvhMhdaLc%2BqGxdnr%2BD%2BBjLpRKzairjq%2BzTl6VQjLyVejBarjOaSLvKB3MiMX0H3HqK%2BFRGYzJQubELIar%2B%2BDIVJT89oNew7apFd1O%2FnJN5TZCs9xfg2ptcyfcH2wfiJ9FH8JtRcTDw7D99ujA%2BwqAOQQbpksaNdNPjfdMBWjj9NgUStC9kx0DHCKLyzfbs%2Fjw5v7Zps0dCnHZ2z%2F6robqenQ549GtW50ju4t%2FMo7ljbvDUaxSD3VQvD3z%2FbeajFcHcNzHDW5EMex8412RKLa3QOL%2FZbzTZilKn29K%2By97yHeLS9QTDj39crNt%2FMsy3%2B3z4L%2Bh24eGw8UjEcyJAN4BqRnYAXhA7zZExSIO1rHD%2BGNEhEDg1lk%2F8EBrAqtIhTkkhsrZgGFK0jgowofXDvQY6pgERFtoDYZ9dCqHYp4zuobcV5lmuG8ZNM2OpEZ0bl3vArTxQa4PBBU%2BT8VON0da%2BYKnsOU3iSqzuMlY8UFR70TKePvAjjYzeCDKrpxnG6WZwWY5Zjdi9zWw65PCvRuR%2Bpugv7VNUsJQ%2Bfv4OXK1X1OIq1zgXbp7cb%2F4K1HrTce5XTxUsm8XCDN072gEXiWFByZ8JwGD9iVub%2BZA%2Frtbc6ewkfi0%2FUmAP&X-Amz-Signature=ca9d68d0e625486d3588a96c28163620551e51a2a5f20f0771af3e33c9643799&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
