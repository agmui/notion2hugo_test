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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C4PX4U2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoJfh54TEQXAFPO6d6Ha%2BZvnhwYpUbb%2FaLPsJRD6pS0AiEA3CPxS6LFk5kzxzQb3Xawl06bLBFO6Z%2FqZZUbMU6YsUwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzVFv9JuK4XTzdL0CrcA7KYCAYyh9HGgEmIpeWFEkoVLEY5d9NqNPriNCC6RqN5nQ5lG8C8c5M0Fsl4jCHY0WJ%2BkyJJ1VK5Ik7y2NshEeUr4F4DIkrKDk7fbfiqIL0W9gQmzlvQ1bcYGXeNwEadDKxxl0Nzy5zSgvol0tZc%2FetoONzA1LKzFBMWlOlKBG%2FUOqZPNWHNMzmpLh54anOFnkz9oo%2Bp6SCtY2tMQ6zvLLDI%2FqcJfDlE%2FTBjaV0ix8JTXmjnGz4COHN9Km1tL16yhjYdHlupwOpCQ%2BRpFNjx74kAJe9YmGhK%2FTSlkOwNQ9VQaz6d%2BUOWAGGoaFGJ8gXcHxfO2Anp3pHLHZSiqHczz0yb9i15rKge3PkuXN1cVmCalOARdDRm07T4hpT5pXRh5sk4BSdp4SsRw6n3jqXaYdXIr6N%2FT3VUVUGgMx5GKg5%2BZofXL9JGiXPmesqdi90CQYWb3InebuXsHNrFbHXq7t1h2xII1pdTuLuZRecVL%2FHYQdow%2FCS7hA1%2FEIQeGjmAtK4RZaLQ99ZZBzPD4kiu%2BCRCMI2QJWN6GfzSVAw3wttKy%2FjC6a41Gmdf0xhZ5dDgz02VZPiGFXqAt3AYjYhTPRkmTQNNmCpUDg7ipp8fgWudFH48g1SEJEKw5LjaMNfxiL8GOqUBFcgXav5XXlYN6ymBQ%2BGelOEcLgSqe3S8zbgXA5Yoom7t7jaDPqRih2%2BxSNB%2B%2BeWiJsfxLerThE1eEpHnHw3ycyi4vXc9%2FEHlX7mFIh1pUIzFgDGnarK6gz3pCTb3%2BVbA14K8mNXZcGb3NLcgyb2m31Tlao5nBhRk6Deuq7xoVbaQfa1Bj09YpOYC6kcEkvfuHTz2j7V%2BdiSgDSwKA7%2FAd7L9OoG9&X-Amz-Signature=df882f3eec6b690973d05ee76e7a3d9cd22fc2fd6d79c8938d011d5611b5ab89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
