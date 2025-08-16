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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MR7L2DG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCJfTr1Txdxb%2B4sBl22pX6jhyRvAxPpDeGzN188bRYfYAIhAP4%2FMb0q6sGF95h9nB78CKBC%2BPkPgHkTM%2BANe9duES0eKv8DCGwQABoMNjM3NDIzMTgzODA1IgxoV73DEgt%2BcXWSJoAq3AOfiqgcSVqJRD2uTXz31C5hvtbSs5J7PeeyyUCOcVcCVHwsI%2FkOptXd%2BmHJBRZZ2J84ndIICzHRiy4iowEykd3bea4rq7YRh2fqD163pGQrm0NFVvpyHYUZdiJHqs38y7xGhZI20gzgwjw7vK8TT6ypsttdhCQRxJX2xyZli6e1gCN5eEotAXfx%2Bgxw5YLIaKok5LfSeKJGwRlAH%2FUF%2Fj8TJLhvgp3Pjgh97BUOunaeI7IOxdeZKYbKRXobWb%2FZQc0GlOU2lo52jcAJZyLPLw37sgL1bHzSrs9xFFBzdBbEXhIghEwGUHk%2BHUIpe2aZoS3QkfDBE4PDC%2BPhpgF32M%2BqNcRGArlJx5RxKDVqJQ%2FptNUl%2BWJLbRG2JGypz0GovvyYnMsziKd8PmceawiRvo0CCf4ZSo20b4b9nBAQo1ETHxKgjOC%2Bvii5coMBPle7E%2FmpQciGKhCVvyNQtdIOBFVjpxLYyqC3Ljwm36QNuam5SrLmV9GFUfv3PuJ%2B7fsf9grOuG9TcNP44aOt47wnGofz28nE0vCrI8W88cBkohJFOamEgUQQFNndakhA2Tu1erWiaSRFwjoV0lUxpRDdNlNRpa7SMUsxUMbt9t85hqt%2F7NAAvaX4CZ87mpIJETCV5P%2FEBjqkAWxTyTNEfzbSXZI4eXTvi%2BzpW6%2BwvUtgTEWjrOnJvLS2IewPw1F%2BPo4KkIRRPOc3DKptZlmtoX5AZNoL4Pjt8BcQ86p9JnB2Z4AMu4TSwwYyaKm5uQkzi9VMn%2ByKX02YDrl%2B3PFnWYDCwHZx47YWBWqq%2FJr1P3rVNm1zOZSUwz8cAGyYZ4z3FkDf1Wo%2FdH4V4a5LtW0UCSWmNLsNjV80qqOjqwMo&X-Amz-Signature=0a3595acacb8573c1a0e7ee87deb9c19d14ab4e432fd2b1d5c6c8aabaefbc954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
