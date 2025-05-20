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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUKYBZKT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNq1NNerpyVcvDrxj6pSqyV%2FxwyFCtbmr4g7Tkal%2BgQQIgRZ%2FSVLyKp0sh1BFnylyyjc9bVTezpU6KO%2F3luiUIyAIqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBwlWTHXbEM1DEoUircA427gfY91N%2Bna%2Fge1j0aNoCc8J9zWezkh0JAlcYYBUz4yopBJuGlhYXxwvRkkcoV9bNb7jo9RGyM6u5ceuTdSNaFLpLYU5JbOSzvrnuQYPHApekhg6jXlNInp9BHnN9fwrKLnVe0%2Bj9K6tfc0WcnNNMriRROjuTCYVjXFThS%2B%2B7d3w%2BJYGyqqeTQeFk1EEC3kQoUWEs%2FzRRZ7jkXJHDt0%2B%2BZHe4aw74f6QNwJeSHEvdKvFYQWszjHrBB4YcMiDKKwmAJosiIkDs4b7ZfF5Pm9DkPD0HfJFq3%2B%2Ftx7n2%2FDEVSY2JFIEfkHNlpCzlh0aGysmR40lssWv%2FLephgaih32K%2FPAj3CjrtiUUdZcBKcpIZ9qF85KWGGZoT9dfiWLwwaWhvhp2XJuAB%2BFRpaGrqYc5i4N09Gfr108xyF8aE0wVH8i%2Bf%2BH%2FNct5zFLVg9zXokumepGV5nSAwVRDL01S0VgGtbpr4slf7cHXGMK2XZkDHs7n4b7WIxYLhhMnD40OcQolZIeJ%2F%2FTrYFjF2%2BfNZXCJJtHPsj2JaN%2BMVFawxJdO2l6y3AZOCG7yncvzXVnoidSmyLNPAp1ZDEciCLZduExOmsKnEcLVaWfIjD3cDhRxjTHbkWzEaAdMCKB%2Fb7MInKssEGOqUBA5B%2BPmmQrOzmrcaSTztr3Cu6imslwv5%2BtlRBrdP33hYgJXKk0c37MsBsW6u%2BtzuhyxX8oVsvwPUGgRCUCq5SJtzrY0eaC91Y9g%2BjaI5j1Txw%2BH6zGSfUuoYFcQzznXZoVcfRJ%2F6CLANvtpAp79Q6nVvhC%2BtdiLXkexflnsLRqO0YKqByWjNkjn51pmk%2Frv4sa%2FO5Ivx3PjmlRyMZpmxjFKFijnNz&X-Amz-Signature=7db9a86ed2a6d6fc90359a9f05719cec22b052acdedf44574a0f9d9c4764369b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
