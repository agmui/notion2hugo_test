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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSDON4OY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICofc5yVZJZ1qMy8fB98hAZJtAvb90LstZWXOrkXBdDWAiEA4uOtnnOzaxesAn8bZjlb9Jx7VojxeMKuMR46%2BE%2BwhKAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGANV%2F5Q08MsHFULkircA%2B9EU3K7Jhs4epnwIu2NlnnD%2FWmc%2BtocfU9DszZ2QmeffQfgSxZHUpOMBzHZiHe6YLBxQKZvdlDDp0K7JJieJ1pmIQw2ElghX6KH68Hgq3b%2Ft4tD66knF%2BsEEpKU4oEIhHtOUtFtSHpYsEpMt8oJWmMwnftnMjdup8OJj%2FOfe1rSd%2BtNRMr6MjPcXloBM4cCHgGHFswf%2BcEmwSX%2FvuGwVRr6oX6f%2BKeV65cZppw2OgobkwqGliK%2BJYmdhyKfE08dYCDj9R0O%2Bbog58SriOjW8TL3R%2BWMX%2BuANePj5KegsV1ZO9VjsNNdOKHBxV8zPJ2J8KyU8terikbYEfHNgTq%2BQk4sZUyDs7Psn3npz1UICLgWfaOhtXhRGGTJHXHV0%2FlsiVoPTDerau7MgCwBvr43WG3GIq58vV6KYmpjevDGbwMqerEe37fuD21JCmnXclaIdNDuQwoetxVMLkuxc2tu0aeQ0jrLwaZal4TxC%2FmR%2FDHYotfS0CnttV5mZfkeWCBbfZP0WRd9BaSEUjy6a8tbmxZBL2tU%2FZOWX5Q6F3XHBMmjj%2F64DC9JnuAKl14CFdSpG1%2FNLjU9Kinf3z8rw7mInqcqlk46cR6GaxfvqLaYVzQghHYoC6B%2Bavv9Mt7dMO6808IGOqUBd9PbBUKIKYBR30GaTgwbD2F8rZfNNg4h8hHkf6QnUGDENur5InaEWFA9zIajCBL4LYGlogViKKzLcYNM40sDQcgtSg3JyFAKJIThKrBAxnp2IfGtzqYednxu1NgsVSkXSd6TA2yvH3xFvKgItcPpLhJQOs%2FR18V7T5rsTxin7qobZDR1bJfCEzAcKogwe2KqKgVVIl9Qf1k6eWxNIcLr2DI7iNrO&X-Amz-Signature=ef66de254da31e9a3122bd47f873c3884be54f7943bc199ee3ec1b76337f6b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
