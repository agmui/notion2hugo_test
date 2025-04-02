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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USUYKRFD%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQD9X2IP0okDkKPpjSQJ%2BYfeNrEt2HbU6KsNTrq6fQ1F6AIgTct0pLknIWyBfHjXBOziwhQTweDZsUT5CgQy16mENcMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzjpvLbFFKnbVkMgyrcA48bH20ncJvVytmJo77RqmBu9Dn3AN8wCZ47TqDgn4RiW1BzYxHwkQ3%2BuAwFhejfRWXAY%2B2IbknMpEzSSNyQuem%2B39fX%2FVmJBtWWID3RnRICmmog3AgeORs7wBpGFDYENv%2Fn%2BQirtjjp6lrBOfzJVi1E2w64k37%2FvnSaEqQjmZtcU8vSLPAkj78DDWtnl41UBq%2BXOwqn9u29BtJ62xUURZp3gXh1i2IV9z22tx6r0WUwsETF9yXDns0YmPiycbypzpFuLrUDktUQ7j2xZZKWz9d6ydYu%2BkHpWY9VKwDIYXrXE7U2y8dqAkL%2BPeMlzouFFzyT2%2Bq94rQzRVXLMN58U2pKvRkzGNbbsizijnXdMEZtE7b1YnPPJvWvQrlndFtxQy6zZqJ%2F6BugO5qD3WoKb1tqChNbOBsBt3HJjqCR31toDtB6bjKj%2FEw3SlKT7GXjMkd0GZs%2FeMA6XBSjQMD2DY6IFH1VNYti1W0WYCksCQypBSq97rlC1QjoB%2FitqZUJiaGIfiIOdNskuvfuO88gz2X44v4ncnVRa2UWK%2F7Ch%2BsXOYcaix9FTDII27IHL8v6r0qFtQ2zDg6%2B5CgldgQ5akzb5Gklws8GXgX4HKvYg6DRXPy6OZulJqRh8GeiMMbQs78GOqUB5HVJ2GK7C8nxFDlm6cJO9jVHWyVBI%2BNmLWA2YQwz03PoHFyuEnf4cwnQi46lHuR82C8e1Z7TXcALnLWL4lzK9mwFzc5LW7EG9i49T1stuq%2BlB9Y%2F%2F0NbA4mxzq6pWF%2FIdfrcq70RTatV%2FzwuO6N%2BIHt%2BVp6W3l4G%2BJyJ3a0hoB1P07ayhZN2b7rYxGMyT1%2BwJq%2BPkwK9CD98cGbMWGgpga2s%2F7Zm&X-Amz-Signature=28597c6e15dc78ce9f5b4b3bf1724983531f78ac27419e9c8c542ee28a064b64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
