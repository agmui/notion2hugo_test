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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OGJS6T%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDzsbQGF1QaNwwlwUDBbu152CZ%2Fu1jmukGRVKWFp4YYjgIgY9mySFP57NHDG2MOdrVhGjSkq5EOjk7is7WZ8ObtLxwqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMa8sAZ6uT9etKDUVCrcA7WCSiBdgGeb%2BlHNih5VnEpHrw3Opc8FLoBfPOrXMK5%2BT3%2BCPrKg5TErwZh9IbicZslNbYnLWh8gCpbAETcotnYiz0BfPsmB7f9lrO1o%2BpH07okCIs7q2Qvktt49nIZQwDztD4QAdLpmK4NPb%2BBYW5VBrK4iSE3nH9mXqyqACQogxcGFpC5tbuOPkx4HqkktGGOzkIHojLLL%2Bt%2B1TCKfRTQJoxPof%2FtfXAh7Vlbk7TDa0BvwyKV%2FVF5gKoMjM1jNjVkxABbOM3gj6JGzqmYhgLZ3Nh2deIQ4aFg7yVaNMYsZ2VeB54s8vHEER6VRzBsALB3w6VhwZTq9M750DnVc4Ypa6pUin8FSsquRbJs5eMr%2Fjm8QQRC62aYZ0Z2LM4Y3NIows4VdbAjVTmYuVLy%2Bd7a6oaCTdkHLHYbtcqsIIbk7LFZKjlOf9WxnzFNYHxqqXoD6ddi9aSR5AeOaQizopYaN0jbV1hE2%2Fvz9Qs5xI5Hx5OlaCFF8TkotXPX35bA1CmB3IRio2gE29cZlze6onl9jQMQhO42lGYBVGrKVOAzjHWzTknn8oUYV%2FehcZ5XYYLNEUA6JVLf6h4fgsd87oiWkVPpBuVyzBo69rgIxZFKIKjy3Nxr0yHK1QhTDMJbEtL8GOqUBvCBxAzDt1PVyScKt5Mahf7ZEefZeeRKB0ccSFH6iKys%2FNxKsjRz43Sww4rJEeKlw3ga7pGuTT%2BY0hm%2FkdqKaSASoVB4CFdS3x%2BEGEgvx%2FVbtNhKQAN6hMrvr5vTpFR%2FCS7Zk5G8HvoIHII4rNKKMLRnTHogSyCy6e%2F%2Bjg0HABi24pDm3HKCpNzMhK2g8KPr473Qyn7l8EZaXFsyMKHxnBRQaVMLn&X-Amz-Signature=be3c70ac8eb6cfde730e3bcaf8d8b50c370f17dbeba632096751cba3bf59033b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
