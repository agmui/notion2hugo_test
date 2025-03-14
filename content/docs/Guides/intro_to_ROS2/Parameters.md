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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MW4W4EN%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDReQUD2zxUM5OYuMOtIsQS5qRRgJlP%2F%2BOmLB3z8CNIKAIgdHyYmG%2FFjm2NuEjrCbt%2BIi9OrvjY0PzD5BGe4De1CK8qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAn2RBHsh8IGKC%2BVyrcA56rA7o4NdK2RogJ531bHVF4Bi%2BCutcALtAkkdFCQWE4TaL74%2FQf6Ak3EdRfyGfl2RQtfh%2FMxIBdDYDI42XqqLhJa5iPPzjQHkyhPD079zSK48oqSt8Zx2flpJ%2FjUeoHgH4wHD6%2FMmWd7SC7xxdTN0lAVOqRkYNPcBfXKDd3EPeZxdL5NnNcq%2ByTz7ESoAqitQ98L0irgQ5xo920jtm6zQrJYL8CSP3yZ6ZlSHDGxJ15FlKz0lA2SMpemD%2B8NU38ktMFyalSdnDy8e4VI75tKb5wdHSE5LQi7BWar8Z0DWpmuVrQVyt6Vu9bOhwpCgiaDQPsrgK0bukHkEv9UhpjjRD8H4FAaNfU%2BW9gYWP9xiN1jj4l9Ph5g%2BlCCsRw%2FhDQfvXFkfZjrw%2FpWZFQoSxL%2F7cEapvrMJ%2BB1RLMCV9J0tYSO%2B0Md02aY9wnHCYikJyMyC7jM9zKIo%2Bx3oHY8ewhcdSI7dGaX2Vy8oYMmop1eQFDpFHNM38f7lC7OA0YnvIHYBJjnZ%2FNtrwkztwu8jVS7sZfKKL6rG%2Be5S%2BhEkPKL9Vunml6HZn9BpwhO3slPQLGOSmm6xITL3bRC%2BAPwyLyvLZh2dShEMHuS2NgTEGHVl1QzCyz10bazEz8KYxaMP7Mzr4GOqUB5j63eBdbqsCX%2FWipJvSeFWE2DtNANQ0XJRjFgJ62evMfz8S3XD06P79gpPA6NzRZqOwSC9KdWnN%2Bs3OUxjMVrxckMuM%2FkYgP8SeqPinkCsD3R2Uwll9H6xTZHeyJ9e2RQ1me73rFYb0tQ6FliLffoGHoiCSdlgGi5jRwWQvRU8OSArSDLBRGPyjDf0ACWX8mcLvDaQ0nTluaasYDA8otWj99C%2FS9&X-Amz-Signature=844457441bffcb808ff31904052e518880a063d4e5ee86ba7ae959421762b610&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
