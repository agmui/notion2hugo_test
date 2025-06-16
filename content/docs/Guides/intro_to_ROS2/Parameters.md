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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPCZ4QXZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQD%2F6AXtE6N%2Frci8QB47rV%2F5SmFKLyqgi0%2Fo%2BFgaQAxLoAIgVCENPaBqzfuVT3xHMruXEdan0ejk7vOjTEoVgPdAsn0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDAtts81MSP9eG7s96SrcAxwncZOst4N69m2Mc3MU%2FSDxk%2Bvabf%2BCEheiHReovMVtrLU94gTuPAROf7ToPBlvr5mOa6a%2BbR0J42snPggUDPRhWueQ4jjF8Z9Tp8yS%2FhqaLFfbhRayAh0qfJVfhOi4%2BgXPBAyVmARyAfigXLBATCG4%2Bj0VDLpa8ucBi07SaQkZafj%2FCDwuKl0Ig4vDzT7E3n7tZmMKRiSJbtxtwW%2BSoeNAGWH%2FSsKHJFiMU9yubFb2tylHzK5BI%2FREwBvuVBYtl7WNQ0kupN%2BYtxjeXpXaq44598hkwHLkUWyZV3Y5p0mrz4QyWuWppLB%2BMaMK9X%2BnH0rJdpCzR2f569cZZCOxRlPqUzRDf40jl3mS7tdTQkrbcnL2cRz4rFtOaklamLYalkChkVIB%2F6Ocg8Ya4GwYLVa1QmvpmiVz0FaMvnuAiCjYJHXi91QDe%2BHxrLkEJehF9KQ3ETONTtPUhxbTbnDV46UNE2R2YUAbqoApn%2BQ2KF%2B4QMoahtfWUq2VpjZVwNyeSLFlprfNlL%2BMwE%2FO3A87pRJmUMg1LhATat1G%2Bci8qZ07QAtSrOz45J0ovD6fLP35vOGZZHLUHjBNgIwqFVEhJ2Q6yALJyqGg0q59Fk0trS6Cmh1qk0AY5mEEzu0NMOrIwMIGOqUB0bnn8JlUCY2T4I7HCJBjF6p%2B95gEDkM1kIIyv7jG%2FSM5YDM4QcWQnPHGvU7B6E4mgLgXwLyRSlg2atmoo6yhNExVdqd4Bfdp5BoI4PMc7lfwcbL5gZVAkz2sbFJ8m%2FSrGrvXKz7%2BjUv6lpDjtNtNkjljyGG6c%2BfADE7cXavvnDBr5htZaQ1qwlmqfGe6jcTpmyICdr%2FAq845Ykb%2FgN7PGR7QZCS1&X-Amz-Signature=d277fbfd045a269757a57dc18c46bd7697894c4bfd77344982449802064b47aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
