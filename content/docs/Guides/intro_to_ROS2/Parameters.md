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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX7YLAU2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD3bhRwbAEqHkhH4%2BK%2FnOHmNX7oVLU2G9f6Aaekjw5dZAIhAIa2im0YG%2BNuq53zJX5en%2BN%2BmfmV%2F2PQ51ZLNuw8lZyFKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVU%2F5bieBxwN3A1qMq3ANNEmlJZMfY4u%2FaDUOu03eyjdDgTSAKwgL1kq65tdxoHfFRPR%2BQGq7Ow2YQUYcrQkirN1d6CLo2vexrUiB%2Bm0DfuiALMppNpqqvHtTIzjZOQsRTz5tFA01YAFOITSkaFqI%2FcZ17d95FlN8jd4592%2B2RLah4RbTB9pmy6dpRWC4gGQVcMA8Mj4lZFqul7P6%2FYDXsvs7QjogjLdTAmHDawnyo4uqmRpVF2tP5uIkUcBwbRsf%2FJZfP%2FWj3idtrCY%2BV%2F6FHYuJ16BachZH21gOSzf2uHtYIScF8HtaDUEJE1SPGfhbtKdtd8F0lI2AHtt%2F1UEBquUWBqn7z5P7bGY04EW6qc1F2XtsRIHd5QUvQFNsctnxLJHl1r%2BmzHy%2BLmoPMrteSzcn9PQ6gyI4NTwWPeTTzSaOvF11g2%2B21ok056HsH%2FOBKrPPwXYMS6XDsmt3SstkTIhfpT5Zpkv1ySFAWTnEUlqRf22AE35P42F8snGcwlar8Ot9O9HnRAf5kJ7neioDp67o78DSfNt8BoKFrLGR98KfvDSYKwpGwq9BteldtBhb4sspP8igJWjIobi1qqpCsw18OmQ0F9tIZexdtEFCT58PcmqDwoVlq8qSCTBv2dDb4GsWrE3h8hq7dNTD70dvABjqkARKLPuR7pTtZq%2BJppfHQRDIwvzyOKq4BhnqzHUDemxq4xJvjtmcU7WJD59npnryMFVxm52tpmidkjPpW5vV90JfLd%2F2%2FhqQELNZ%2BPJHQi9ulRhaR4CXhZ5IT4H%2B3T1JFMKyVqKCbi4GC9IaRgp4HFEBFVdQ0QXxEHKI1wYbD4yQH9XvBH8ZQG4X72MHaO1j%2F2%2FXhtKY%2Bbd749K7z5Hluaqq8yXZ5&X-Amz-Signature=96964ffc328e45df021e7b6f0bb50111640bc118db52af7eff89c71eff65018f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
