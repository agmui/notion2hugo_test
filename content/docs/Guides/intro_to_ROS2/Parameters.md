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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOMXFNLS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIF9XLw3X2Ts94gjuQrl1taoC5JaRBLXPt51lqTM%2BBbwhAiBnM0SPhX6654TCqhR71SdZRv5HgsTlWIM4Dkr8RdwuMir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM5cicbHVdUZNkhBuMKtwDPCUNOSLSlqdn4MNOped7PfU9iBwbPStV6n5%2B%2FSxlCW7sUDw07fUIyPoLjRwKw3%2BzR9Cmg2tsrzS3%2B53EtmfnMqLW3oQ5t5Sg67SMvHFjb3VbsWqEilwrlFTTIne0pm3kjR7IwwOaaFGWvYlDf1t%2B3rLnVYAGrkAGYgCAYypEaYop5DUAqZfU4JpOnlgjbVamtj7q0%2FlzQA4jlyytKYXsiR9CSU822Z7YT262Y37CMVkpmhwzxTYU0smNyLwL8vAm3DOp8fM%2FyFzTCO3gn03hW9KPyQ65mM2zhyEqSTWQbrpPwGVYRABtjZvfBzcWPMEiXN03n31vMJUMQr37nc0GIRC%2BwKhE%2Fko5sc5FFM7ebvouvSj588QHNzVUYPjDtE%2FSc3e8UrHUu34V38Qa8znoLdq%2BuNC%2F%2F%2FOm6tosIChGCUAhbfbH1UMOJA5iruLEpqDO3omTsePz6J%2FHVupNzRR61HgN%2FGtPVUu2zYN8r27v6ZXJ7%2Fl8GtfDzDzmCq3raYwBM5m1GBYRirxwAU%2BptjkQqDqOW6xi1iWvwZg%2Fs8aioshQcwMcrQI5JRTZbCNfnl6HTlp1QjnFkEmZM94ggZ%2FAZJ05tno6FM1bQ99SCQiUZmQTT25qF4WyBjMMqyUwnqmHwgY6pgGyERHQXU32FhV%2BOvY2a1AcAvVk71Rw2AhNDghdHdJHgda1Zn5cQ19cwSR2%2Fd%2BJL5Nakjo%2FP9%2Ba5MqsGg9u0Ov3hNxcLCyi6POMU6QRzHkdl7qSe1ZRB9hBT%2FraF1OYtMp68TDDgUIbIgPsRMT9pSiX8CG5M%2BJ4FkYPSwpfnPNaNJM4iNhimqWv%2F0AxD23CjAzsdDLs8CAC3eLiKjvKGYtI2SFb%2BHJ2&X-Amz-Signature=3dc61e888e2199340484f35af20fcd63a68930b46cedecd8fce20e25331f713f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
