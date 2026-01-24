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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVLY2TMS%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGMvU6DWL9p6y4IQc%2FIwbGvlC76Qv4CYmvgcjXBTl62%2BAiA%2F5qT2Maw4NK7W%2F4MOXakCqxYfJrV6yl4kMEByygm%2Fsir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM%2BqNqI1bYTiOcsGTKKtwDFoa3wuobEWgO6QV9eiYRkapH0pC1irCb8nsGhzi41zaBX0kVkw9EM8NtUkfKYOd8oqwod%2B9IaoSRXrJvUVNPx7SKc5C4fmwyxhYVCHUDm604A5pWYqLTaPVwhJB9BKvecWPgmqDDBLfprJ3LBM%2F6Du19LNdf5ThfgkRLf2WRaJaWwV%2FW5hZYME63XbP1XT5BYjhkg%2FUuCMyyAh%2FZNNfU8WPCjwqzGcCQWcjrMRYH1jzaaIMkLJjuvVmu4ZHhCbhkZdAbZTuYDkkYeIIJcxzpK1PJ1jJ0i4xCcUgvJSTAq6tFQTtEaEUldurx9ICF9KroLnlFWMYreQYJIH26xmKU%2F8iGnJ%2B50RtniSa5hAGUPyHr4XNz%2F0nyGnmOmN03Ah2%2BLGeoxaQHNmG6Ywvrd2OqHKrtG06jRiR7HidE7Xokjg8ZcjdXCz4z9UtFbcn8V1jUTLkBzAL7%2F3cMYdwheT1bOSw76BWVuDVWc1yvm9A5QbWNuWJC6N4rZxcY%2BllO6Ghk0T38Ae%2FHd78XXwYbOQl0uIOI3yYdHeZO7Nw71xY9YCxpneRKSbh1MsyeKQbAqFLQAIK9eBEccTBRzKBWJfnCqmaJmhW7L0fZo8Dtx5o%2F4WDD%2BeLKwbZV7Zm8oOowuazQywY6pgHhgmbFPQL4qu%2B%2Bq%2Bq0WJhAQAc5t7IWNhgE0z8s5EDgHU3G1TmGgbmjf34M%2FAHoNa3jVmY8e2wMd7Jmhb3BFfP6gP%2FVs%2B%2FbeDPMfVvmd7Wk%2FMAdKCpGgKEWn6xJfJF9hsXRzAZVbe0ewsULkrC58LYvmRm3aaq386mCrHpzKsm6slaSU%2FE5vjO9LoTIPsR5utau5AND3vA0eHIm2jP%2BOuRb9olqdKqM&X-Amz-Signature=14753f2587c248dd2be061f08b9e5b376193eca9433bcfdb4a02671d22024588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
