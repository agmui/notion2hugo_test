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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNH6Z2Y%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCabW0ZS1%2Fi79zjlSXQRppaam6TqRQqjOTfyH%2F4jbfGywIgOkLEWDmsSsml%2FlmQmzCftN%2FRwbcNebnsup1EX4THsi0qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwJKXmNglH6TSZ%2BtCrcAywgLhE1jbDEAwIqxIK%2BRqcHbf74IdSvvgRoIjMCb1yQAJlLUKhG9Ij1iOc5%2FJ6DP5CD7j1ZTuMAfvmbZ0kKtAJnMUYvlFF9a7Pzy4K4uOi8Q6%2FTk4ENK%2BTKvRFWwANvKR7lQ40rekazI61eEiLF8sS4DM2nWbeUUlzqNshVOKonOIWwHqsbg4p6cFT3TGsUYl%2BBolrKYY9aL4okZNoefaxtwuwKc19SHfEg7VYww%2BY5Xt3jU7EgBQ4CC4cJyUyqCqaxrJQlMoOS8mGGAL9Ov4DVhAZ1vIRztP9H9W%2BULJWwm6ZjUZv3%2FPr62wEO5LtX8%2Fp5jKGj0QKzo%2BdJQxuhwuxUo1sISFhg8ox3IvJz9%2BLBKN9uz9TgFtPU%2B5exh5aKJrRqWolhjwYU72ygLC7kIb36jvZtO6mzWZNu9Sot3t8Qwkd4R6N5eKTWWmo74BU6wo%2F5GErPv42wF2E9HfFYL5m1XepHI1c0%2Fky058d7UiD08GwURwcuNeQki4R5TUx%2FikS8JZa%2B1sYYtsG06p8VG7c6EWEzZfU8%2FQFwmBMVLToGxLpAvrPKInQXsPNSKMoy%2B85BI4hHOn86BAVvWIXnqQSv8WmjQh%2FM89lOyXiD5O%2BR2L8b6IOLservhNbiMPypsr0GOqUBrHAaec%2BrVhp2GpECFC%2Bz6se6CLaJiaAaVnu2X1duvTdX5iqbaL32RP%2BAGS1dFU0CIpw2uqRrIx%2FAG8phgwk0KV3hlP8WHi7eY4GAgt7xAFQmHEN%2B3iykLIBCw5BiP4x91pTAB506jKUkEEKQcmymCVl%2BG2vcliyaqjMyQPbHvp%2FSSNE9SjM8lahsMaruouKzafBUSQVXYIIohMdq3VAoG4Eb7RSo&X-Amz-Signature=32e85af69a9a103f267717fcefd85ddc05e988a1bb922afdce3b016cebc0d969&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
