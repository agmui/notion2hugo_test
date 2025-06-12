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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C4LFP7Q%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD%2FDScdQy3AuxRvjqyNgTkRVmlSKoMNIuUnlBD45Xe3KQIgIJVkEGWPUyGxdt8iLn9xmWI4f%2BqnyHlIognPj6PMMp0qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BNBcY%2BI7%2BnLgdEkyrcA%2FW%2FIAheXHDWTuttdw%2FUa5QjRebNEJWGvLUnQdBr8NRdhG3RZAQMkpkP2rgFFChz8lf8AnhCqI1ARAqFZcJN1z4zUGzYsAUk1MlQYX1gJgZYTy4kAX%2BvS7e3t7Wv2Nsgpl8QBRzQJoXSy1CuwCDAUCO9hl6SD%2BqnED1FATg9GrrBhtADUPCe5Sd%2B13dfpJ4oz69port9kGEOMKkCMi%2FJgyT4tLDe%2BfKyekmDzJolcFbaj8m28qvKVCLwWdYwLLJCw%2F1ZjcOkjLkR8Eq7Hw5P9MYPcT5tREnFuTUHueu7CHUsZV72LTZDUXSDR5mULPXMqsIWtsXIpHdZPM4CTOmjbeI%2BN2gN95lS2NYPXkvTO3ugQsFI0NV6kXBu8HsDZguObfetkKlewRkNTI6V43tCziug43ipmuckeOANxQyofKeW8HhisAKgv7%2F2GvmCa4%2B%2BL7F9%2BYNpmKf8sFurOqOEAmYxmsw%2FIuoSr4HR%2Bpp3kNCJz41D8%2B7JxSGhMwF8mR5zc7zWuhNMXDG1y7Xfp6TO9EVaiRr6o8%2BvRtzKZfGXy3F4gePNirD50hZo7hUx3KxxHtbk7kcH2w%2B43CYsF2LairuJYXpr2qUAIVQUmVjvSTSWcmyZmZeSgEiLp4iEMJeUqcIGOqUB6CwQw9S3UmOkNx9E5i%2B8BLZKQTcsoWt2Enh%2B0Ve%2F8L9VICe9hUC5EqqkggYbmiO2LKaNq3HQL3kSqTEjxHuMBJKKGZ7h13wWxdUro%2FZgsSnsiCmg3QNK%2B3rUaGuJrkFFxFMQwYMntmQLr6689i0ySNbpffxXSiz4Gqeq9ZVrfGsLa%2FLGPLc7bKaSrxRWxy1HO8MROLcTe%2FB7EmQ2nSPfNf%2BzPZt3&X-Amz-Signature=30941f21657bac7267568c4f2a95435d11ef486403af112b87a5138981d3038f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
