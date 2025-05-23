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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LF3X66%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC0AIgmNUnHFSb28HQjvdb2ODcAcgJboErJBJKwjBmQdQIhAICp%2BWAi4jaELI6xUpwWgIhIIn2ILv2i9w3vfZsMu043KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzeYBOXO0siUTQErUq3ANTm0hPnkH51LDTnxo2TkTwY27H4Z20cwltMqUswHNFbIediK0GhCtTEGhSbrDJ3U6O4g4VrtROoU1aKOai0A%2FIf2F1KgSG%2BUYQfYtCJZT6NhbX3Z0dCCqW859BlxvZsFDNMZUmKYnLBXn7hTcioVe%2BGVLTDAvbjmSV1lFZHMEkSnyGsX0XUWnhbpu0TOR5zA6uSU36NavSTyVNWV%2BfSpiLG6rFVCCn7wIBxuqagjPv8C6hvUJTdZvZzW%2FdtzVkIquCtxQKGrV%2BCwyPYIOD8nnSXCj8CojKuXOohOixdFPpLJ%2B5zq9fw0nKQsEIG%2BeISSbAurdywPrx1kvNpWjcxPkn8SA8T0Jzd%2BWvx8LohIeVKfGiFfbfN600qKYfIT1pHNtoaxT1Ttsk2Rmv6PuIxuUBglSgu6FGKhV7h0t1wdfuJfCzn12g7Uh0fvNuWpxX%2FfJ20X8QauralLLxxfykuL1edNLqTq7Ki%2FEZRk0IEVMlP9eL9I2rtPEtvMsDOGQ4TNdVYe%2BxHZclt4d2I%2FTlGzFqAon7yFEGG1VsKXf7NaIKE6H0V3GyG4Hmb6526o76DiKierAlzdXL7M5e7MtOErQfUmuQLKa6bRS0dlRG%2B49H0RRepMbttgCZ7VspnzCnocPBBjqkAc1NRlQuJfEc%2FLfQpTTh8vMnnbDIrUDMGSQqldIcUbALc66ndXlqpoIUVtIY4QnZ4QwONUdL8JY1i03b0ITlCK1yni9qietUiYa3ryIzf%2FFE1ARw3poB3AXgQsMHwvOl8fI1k6ubwO5WP9dBVdYGHijjttCQfUBPfa%2FAi3mCZWBrPHyY9jpoWZPaavbY%2Fo8CeZ67d%2BoSFr6GnE5AOkUu%2BZLI%2F7Q9&X-Amz-Signature=326e593b21824b75453441ab77cb0ebb494dd83a5b7a9b5dbaa7ac3f39979c88&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
