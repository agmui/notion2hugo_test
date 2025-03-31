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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDQCEAR%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDBKiYu%2F%2ByX25WWADSBZLiBLnT051YO2gH5RMOcXAMEIwIhAK%2BMOD07Ez%2FFMyXP7a6ijcXQqu8IxKIQI2wB14uM79W7KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5byjET7UT0CtGQzQq3AMjUk57NnPsP7lWuhwIvLGGfrvYkSzadOu6ueHxwzpjl7XfVG3WtypqTT8LQEff%2F1MVeXSL1iE%2FwyMwCYCie8Pv%2Fp7PoNsf6Bl4wQMRc%2BFGBNj0SRNaCizGQtF27R%2BKi%2BaP4nTjeSCP073SPpAI0u3PnzGhOzlvJuw6rJRcbrK0yBwhMVyjdjTs%2B9Mt%2F8HBmFuhJAM70dEsYwItO6Fznvz8MtGhzR7suirsgL6g1n0bP0ZqWEHoEOSBsWiVDFrHO45tIP4v3ggbjxvBEsu%2BVUwrvOpCzMyFNH%2FR92S3V0GL5c4%2BUGjfgkcaTSmZldTyCXWQLKL7uqXjOz5f9PqDwitxXGXPH%2FROB7gTjeyYj2f0Kn%2Fr8zc8KLuG6VA0kA%2F7O1dbNUvstqvy8UilMGhje%2BXH4QsD2vWVctqsl3MpNMHbeYhHq4N2lfJAbwHspz98ZOz%2FglBdcIRxV%2F5axqhLjO8uU5GdEFgFIh%2Bq6VpNbe5bvuaTRXAH3niCRJSAAB2%2F428ZtXT71D0ZawTvYn%2B%2FkJ%2FaUr3Abr96xIWXqSYQKO386%2Fk%2FcMbPVt4JLBZNqOXOw%2BAW3dCWK0i5mjb%2F0y6F9ynwYGsBPEAyDsQOfrA%2FHnOuCQcocxGVYua%2BZTGcyjD6u6e%2FBjqkAWZzEnpGtNEUyu8NV5U%2BobxVW5XufM30u%2BMVp43qfBH7CbJFHSPhN9muXYBRKfwv%2B9VfzQr5HYHY1lLXpcDTpT617ZiDlv51pdG87qrnc%2BJEk3RCxAjwBQhYAQZ0OrtxzMEnfc5Wc1Y22fmzT0E%2FX8Qy%2FVu87WAH2DbKZpoK7C7Wu2ZSIOaeq5ifmA%2FcYqlrboZYdY8a87JJis1nVwe08vrYe3hJ&X-Amz-Signature=45d086c5dadbe37e5f69f8fc856352a132f6d20f51aff02dfeb45872131923b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
