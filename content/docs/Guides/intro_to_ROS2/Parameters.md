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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WT2C4EW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCwMXAPQjYlRkQVUFunvWeBISyGzZY8KeESNkE%2BbfijnwIgG5GW07BZPxY6lYrlbzDvvHFCWAM3WQ0LIaSrrbd3UVkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJUJGIqS1GSHWGidircA7nr18QojM0pXJSEMlsdBQqAZ8LSFbhmr7Z0zpXHkj1ETYmpx5RnCmXkrKOgzI4%2FHWTYsNLvlR0hO7EOhAUm7cwZqCo1WmyiwhtXOfbObAFogtTm6AWNW6VB681MA%2FEJ87y7yvAWtdrhqKeF4q1qgJpOsdJRs9zTboifFjduo67G2wAgiZrON%2Bc8XJ4dk4evOMsyarrMypZXBUbPN1W7F8fZGyAdS3q%2BMIA7hLmcnHa%2BHakmBR%2F0VBHrvOzkTRq79Bfl8WJkdY820V0SAwDZM85H7HL8G%2B5zpiVB35f2FLuqyP0NRm8azBi%2FwCuMxSPb%2BfjAd77RaZrjED%2FQ7akKr9gMq7QOwDwlwwvEFBE4P%2FcYDqpfLcKLrHEWbxXjIswcR%2FBmJtUNKkDM%2BIlgaPlcfVicxmzOP%2B%2FCM7QT%2FhRIVPZCvYEpcxnrxA13M4PrA1BRtteZjciC%2F1YWBzDXzUGJrDkR0SjZdZz%2BdBQsvOvL1D3ouHO0kRhp2SB%2B11Cpbxh1SffqZZvkz99a8Knjevgzxz1wgzpI4tBbXMqVkcAVhjKFJYjIzEHagP0l%2Fl2zY9s87bFYYOietPQA%2BouX3cx98PXaENYq0XeXgwNQzJTe%2F9GRWAjXj45KGMcFiQpcMPDqnMQGOqUB7IGu7lwxZ1evFc%2BP7BJIEngswTWzYjIRgJ4j8YkM9XeyHyQeTf4YT7smW5Xd3cTTvTTS2q3a4%2Fp8UizmneG0fVPY9TSLj8bl8i410vkA8TWurfZ9mTtLVm3RUbZ0zTjWIoC%2FnGeVssJT7kdFdLFx8TYXBY6keyzgXj0AtUVp8s3RJ6PqIBYFR8s2E4b6X0TNVdTIsVox3zo5hqT4BPZd0JSFP%2FaQ&X-Amz-Signature=485b1b780edb6dadb7bddd2e8b3a3b66cebb4c4bbe6abd8e6404b1634d2023f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
