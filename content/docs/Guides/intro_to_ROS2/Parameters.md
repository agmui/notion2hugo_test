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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YTAPWE2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNXeUhJlIWYLD0x%2B1RqujXZx%2FveeYlxZyDPcs08tPzXAIhAP%2BWVhlfR%2BA1PbwzA8772KUFsx3XJys8WQeb24sBIbsAKv8DCBIQABoMNjM3NDIzMTgzODA1IgzRomm4T%2B%2B%2BtvRnhg4q3AOTYbyu6vmEFMvC6miH%2BwC1lSPaBppoMbojh6%2BFDiTNMRUzATS%2FpMu56%2BxZ4A2iFmakf1SuvfQwgnZuksGETAvj4WUJ7Ky5lNcGMHbqmo5PQuGKLJysxxaedvKFlaGXQG77LqGqAwAEmCGj9mxQBK4VlgcLLjbzXe6K5FI%2BpEByJjA%2BPPEbIaKdF9bRmpu7x8os2SqcdgM4eOZud7kKyFTTAc83v5Ezvlq6w%2BWOytcFTeQKj8UfpAPOO2YpAI5Q6NHUXh36jucbhWUVbI9n9TdFUJ40BAsnN%2F0EG0UmUVBqogVRnQ91J1wg4Ik4JK8J%2FqedoF9ZtZu6%2FrdbrroGYYuyes8oSkLULJp4trDZNF9XVPc7%2FJWY0G%2BYL4JLT3WvoAIPt4Q1KHuEsX%2FS30LJx7wsKeMnZKQYrSpRuUtW%2F3gwjsOMh%2FeEwpNMbMptx5bvS2tCFPnHj%2F20ArurCoh4nSXF2fHnFMBJjx82v8lYyrw4g1Em0BJuJLvLFY1%2BDMpmUYEF3LQpSEsKsj%2FSuLV%2F4taDDyvjzHxqu%2BY8lUzUYZgM6IjCSqaLmUyBbfGNex2yNsbSDPAVclBdYeGyYvlw4pZshVgz5dD8wpr3a9xysgna4PcuVxlYRpUyKohbNTDA5ra9BjqkAQ8bqpfrTS2QPr8uTE5mn5vOXGUbOmN26sFqrsU2HVI3O2f4UkwdCdQSw1c3aJXb91yqGk6axxfchEGbMvv7R0UJ2ar1g9tx2yFFiakmD1wHlvl5hQb6yZsVJhiSLYYli0R53soW5gxD6PY%2FPnRr%2BuEqB699IuhTLIIVwaPp6w1LHVw9%2BIG%2FZQ%2BU84RAQdyM7lq6fUlOdnnNZNMUl6B15FMjIjIL&X-Amz-Signature=4376c9807308319e880709a836fd6ccd7acda9ced6d2e76998650ded0f86a0bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
