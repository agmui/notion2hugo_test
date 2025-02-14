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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPDWAIYC%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCICxbWJ7KXys8gbX5ztQ39%2BtqJ7XFxevnAI5RXdFaZCkaAiBFcNY0cbUVuT3meX1aSxrTLB%2FiPhGh82ZodHfJUD%2Fl4yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMZ4RQlSTG685%2FoTDxKtwDvbFs1SBWlCV6xwIwbRh0XEhmjatsSrBt8nSCoNMcLI57XSx%2Bzm98aHBxKCRaLljoQql%2BCk7IyfvW0%2Fsl%2F6hhxz64Hx%2FvZu%2B0AOoAsaBSh9mneFoUSks3rdVZJzAL8x3Lq55GVwpqzfTHMEyjbsP4cPxEQhfZpHCxypL6rRfSdhvKwJieZrqIiIHBoKqhJ%2B4hhkox9oRvqKlyGPFuG0WVA2HVt0Q1dOs%2FEzqE3HRedYOB86x1AMuEaJRonRL8GwntWuu30kirW%2F8h5UfoD1ye2uBptHg5nWbl7VioWi9ZRQJwSUnbT9KEf7QdArqMQji94Up57pt9A5v3imPbW5j5Y6PlKvwz4AY%2BmQM496Hmb%2FnlhJtnp70CNl8JO2EqBVYPRrlQmJkO3Ge%2FaYiQgJbiRtfcMnBK2NC3uWMkdHm5F8WYl5qpoJl1%2FZUClDi89Vz014adab%2B0fOpRwO%2Bcj%2Fg2KR68m87Pur1P%2BLAA8Ygoxggjt%2BJvt0B8E4vHHYEyTwJ8thbvbnxbU8Tb8G8UZPQiYWQOogPRsGxPsVemn9aZTm4kJagR94YFMNMsU0pZrBdiG1J2gbVHONLLBXlt4GxjPTJZEL8o90zxw%2FK%2FeSuQxoSBhVcqWEn%2BCsg4wOcwwuq8vQY6pgEfqC0K28GwOd4DPMyRIReUwgHpKIfEgoPxsBFlA179vqGlEP3paTGLp8ftTHHQ%2BdZi0q1Kt7HRQHDAlOuMkukGk5hzjbyt4olePYsC8gIMQDBj%2FfnodzWhMIzOUTXC3kSjMpyEk4N2Rncenvj57Bj5l0uLQQNchatAYn7Ux%2F7wvasheWvFkxnVaq%2FZzIAGhb%2BDO3TN5c0wHBL%2FeL9ooGKrQqaGYaVm&X-Amz-Signature=91118e51ca7e4c8ef1e208778578ec2c42a3e6315635de1b3307d4000c6ec6f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
