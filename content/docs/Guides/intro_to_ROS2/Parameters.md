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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNWJHBKW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBK8d0tyQ%2Fa%2BiI08JMFMJxmnj4DTL9pm1x0MAKSxzWerAiEArsJb33aGvUoqDQ3S%2BSnMUcvew8NbqzAtgBaa%2FWjWGSwq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGL%2BLY5w%2BoALcC4c8yrcA%2Fs682IGmLGjlnKR4TlPy7rFOCtWpHmdwWpiiWZrFwUbMXts%2FjBUgl1tUhoOA03xSLxWYfjzex6MubFzYCM9gzhEdEqcHZZz3YcatDh8DCS0lbVjKD61VfCH7ocWYrpZn1yILo8zM3O6ai6zAPqwVeyLYHjmfcpxGV3Pfr9vrbJy%2FqU88HLsu6Xd9FiS2EUFafLX4Dz%2BQ5xxQzQsR3WaBvVLaGQ3y5Fq6aiwXAvRc2Z6ju3JtVPkNDiJdjf%2BuVEh8dqdNMPlESBdZahDEVv7GgJqlAHDT7PRKjI5%2FSprq2sZiw6BYbY8VLstMy3n0zUKVkf5GO40fxR%2BLrfVSHzz1Net3vcDGBHbrwbsPV%2B5Eo%2BfrgASkaNtsSUp3Dxm1z%2F4A49UkGUWVu5Fgc1bFwdnfmlEOyE16fTwTXx3i%2B%2BE8QX7gSs7VY0pOLeyLk9xQkPNIUpTlb26JM%2BEM7KxlO2bEYr3gQ3jP007%2BhUGj%2BL6oGiIGzEqsUfE%2BrVsiVRfdbDDsvLmtxfraQ4nAIMHbzv7ijrlZrxnEgMxBMTB85JSJo8%2BR%2BdHaMdmTEwrZzCeHPPTSIIc0h1eY1DIijVtB%2Fzc2oX3J9D3cB%2FU5FNmP3WaRJp6SECVqEz8ieT00cdyMMzcrr4GOqUBtmkRAGM4OdULhgsCMvbwRlLowDxanPCtJRK5Do5b1ctIpmpx%2BMJQF08GNLCjMtf5A8rHYDZfWTJ5wH7Q6xTi7QvFnjnhvyO7158yROBGysFQQ3Pu%2BHs07u3ZsAGEVrjv9UhFg5WiBaZQeFTPqBfRw7eDitL1mBg1ZLiAoesVlX8b4rVJ0uYx9kp7Et3HVn5UK8h6Q%2B9orDojojPrB4GtOQQ5PFFD&X-Amz-Signature=27ab4e73630ff88fa90eae6a116978462bdb1baed15d4990b6762715947be3aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
