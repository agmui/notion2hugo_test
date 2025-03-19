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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6RKF3SA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCqtYnRbmKR4VDQe%2FDyJTcg%2BUlFdrlejvqXeKyLosg7kQIhALQG91SsZfUDcEd9%2BaeD3dY1AQqHuwO%2FHODEFCN5DDtkKv8DCHgQABoMNjM3NDIzMTgzODA1IgxhjCn%2FDpqqM10LU0Eq3APON06X5DjR6KnRTpx4tY4HsB9nOlcVYmzeh8WZP0bKKhvZsPOUYuWVeZHb8E0IkUQ8viwLwUcAlzcM032%2FCiayUtuTM498CpwUXIFXUlo7MKPuY6nj4joe0FImmhVWUqVlIpleQT3tjqYQxpmzLy7nnvCmGYH%2BGuD58H4YqWWXlkDkf9K5IEBpR8hQYEjuY7ZN18WVs%2FvtKHUSedPsJhFXVXRniKwZbxy%2FkqSAiKHCFiXNlmpF1xOe%2B3zCUghoUpTuEkyWepSR5sa5MLAsTkgN6YUZl6ls9PUp0cprFXyxGtDOJDW%2FpVT0DzwIbC%2BO%2BBAwTLx11jPHYn2Jqa3unV4DwVkp3Lvh6Cc4tkPH%2FmmAKu30TSbXrMWufM9Fz9Xrq7ESUL9HX%2Bu4G7rWNvMWQWFkt22EHob4EzrrF%2FcvQR2AUo3HBC324M5KV0LxubNLtDcqwAiPYgKdtyJ7gTwchirPlRLzHjyeR7PBkrRI0ll8icOPcv0YS3ADhRIJfq0mflwHnaYjEQ%2FHY8AFm3f0ZwdfBXzgwvAsWoJz5EBpXAhlzEtweNmttwsq%2B9VSQDl7Np%2BPRBaDhUSlOorAkVM3rRzOvWkaOYm7tnzKI%2BN90ePaDleNaK5dGM%2BBK%2BJxEjCNvOu%2BBjqkAfL3QzmFWqXmDjhDoxbRlO9maPEIR6%2FgjOqc8bkpmFcTGJSARdNFEggXYqRjqBUvw2gM%2BEI%2FAQduEQevplK%2ByDTNymXfYUpdhL1WnE0rI2xWizHDta1ykBfoQdBHlgFHMI11K7NNgJfQaZab%2FL%2BEueE9jpASH47OcLaI1q3s9M2DnHFFYwo0O2gQCSsWLTQSOzBLOh8lIzg5hoyqwxW%2BN7puivi9&X-Amz-Signature=ef91f9cb615a761f9d3e8a1625dafd07e196dcd36af1d08d12aff9b50cb2f76b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
