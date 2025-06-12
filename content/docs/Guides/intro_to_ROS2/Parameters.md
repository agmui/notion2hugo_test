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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5HZYW6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T034005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIB6qxSksD%2BBA6Du44GSsWMQbdhWzlANxrQnJLiN5dT%2FTAiAv3%2FatmA71mT9QHCweR2fcar4Nal9mTCL3FxGk4tqMTSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxy6M2TaZo33s2VxWKtwDoYhx7EZfaxF%2F3GZmbrWC33ConIbZwgyuan0J3BXZIH4vc7LvBkGloyim3mncFSO96XmGy1fPCOUhIO82hDeSjB0%2BTe8IsHFujgdKMhgkiMjgjQG0WWhn%2FVk6uVilFxTd%2BbWkb8aWG55lN6S1mTjl6zQ6f5Fk9vqc0WJu6tvbwJOi4z6HqfZUV72R6EFPeMsGrSNubiUaO90NNYNXug0DCupSeBXcD5FkhMiX4b1a1Q6h4ZuVlCN2RubPA9TYKy0w6RxSC3f8siJFNIu1SuF0QYIXhm4MAxfwvSLxvZ9jS73WV4EZ7QmXXKSQlTNoULH2ThjaswzXrd9cEQgHL%2B5oyDrG7pnE2ZDt4x7hFF%2FxRwIWMsTvbdA7V76NLEST%2BY2qiqb8jIXSpRVdzNmXM5wAh8xIKgaeYCMe%2BVFTeXXwhof8wwhvmLPZvw%2FU8CELlKFSZjVMaf3mXYPTw1LBxL7Q9dSXujO%2B2YHIeSRVAlEBrh%2FEOIdzFraWVTjs3o7F06fLN3ia%2FcHVSL01Rer4BwY3W5cNbepeg3LXlqlJox6s%2FvbjH9MNl%2FpDu4%2Bx5K6uYijsNHHd9xeVANDhWOkdhnDA9L3ido7UBZNzQ3fdj8ZySvJ6axg%2B%2FpTUmWfv8pgw35OpwgY6pgGxCYzooa7dBj45upWLTcOFYFmkNL6PQU%2Bk6tQcsFk%2BdW8fcHK8XQVBcgzunfRUgZ07%2BQb2uck9GAI%2FH5cRZyH6nM3YvId%2BIkZdhPqttAlYCpiIPl0rVmYkRYW%2BnMW7lqA7F3mn7Mwg1FfTTQeO97R9fnkkKWNyPidzgcblBdb44FCJ64P8A8GMbUxI8pFV7PrwU3q%2B8BKkHttp1nqc1vlW6vMUvec5&X-Amz-Signature=dba92c0c0094fab279555460cfe0a32c9f0cd59696c233b46d31a9ad7288efa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
