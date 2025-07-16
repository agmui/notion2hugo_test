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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIMDQLRN%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCAu4TqVy6CH2dO5byp%2FIXed5XXTAF0kGrafD2T4P%2F3VgIhAOkwFbKBmBwnW58KLq2nKIrFDAkJ%2FkOklcRYm%2BuespaqKv8DCGQQABoMNjM3NDIzMTgzODA1IgyYSOpZ5SAp76oIyjEq3ANt%2FACjvQmKVLvctsTOJzJHNc%2FYV5Vzsbcgn9%2By%2Bhj%2Fp5epKjnCT63Nf%2F6%2BSMcXYYPhySTnXp2nWX7wW0vQ%2FUeX0MW0R73L%2B4gv7nuOkKcnDCbR15iCq5%2B9Nv5XZVzOdeySrVfHvRbzHuHeTuhsp2nj3ByqczmgRhcI2Rj%2FEupZRXm9yXjAMOsXEf7KL2dIjSK5DwxeyAuJ5jPOD95FvwJoU6tvVNkV6yr%2BK8BdAjMQOPrFUi1cD3Cvv%2BVqiaLSvI1HvlsxpVwdO3HHUyXDw8eiZnoyIrCUHBkYI76LjxfNJXuNtB2rNgaZy%2FL%2BkFpMnALpUXiswg3GfF4X4fk30gUlSgomlPscMnho8AsoRwypyXBuZG%2BeqS%2F1LDOIdZVaW8BraIc1Ny4LWUzrCpqW7zOBb1%2Bt70hJaCAl5gMoD3XYU%2FNtWMwJ8cy95rr4z0hL0im6yKRxHij3qOvSVEO9htI9jU4bODPUURF0MfBgsGerayQy6lK1TGfbLURicXperJY9Mt4o%2FYkNnPzi%2FrVbvyjb9%2FFBJBrfA%2B8VekS9EbKhbWSRj%2FycbsIZQ2KG6M4%2BY0IooFIOJpJk9mcoAVlyxqYJ3yUKQHShu3xOMLFgh2t7JamevqwYa8maWcQqdzDf4N%2FDBjqkAVVI0wIQHP8Lzy67c6V77q4Y34jwt5qCs1iOAYkzCnrzehQp8Pb9q8jdrWRLAvkIe7%2BfdBQfZdagxntgrm5LRLx7Ghzy9YwuO8%2B0iaflFU7C41AgoOs8ykJQhcETH8Wh3yNA8PnqNJJkJdtZsKwO4Hq7%2F3VZaicm3PFN4c15TJOd5J4fV4FFLjU%2BpveiGPJ%2BXHcnymIaLifxaIRQ4Cm8bdzlgzGZ&X-Amz-Signature=ee70ba42a6aff491593432cb67ca29afe79c8752ec285feeaf3e13c85fe59dfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
