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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H2JRI7D%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaKLWIAQBm%2Fio9VaL4nwJ4kavbouIzGFpMAVU0IW3AsAiEAvbnq7uX%2FnDt23x2l1PZ7lBf67jU4dmWOitMDd%2FkmGk0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQRq%2Bbj0JAaUMGihyrcA1nZkmiJiJ7HIPA6riQiclk3rZ88zTt9aX9lI2Pmkk7BU8OtyyiQoKfdLAldXsKnLdAqiZHkK5PP8XtZRdzla7lmpByx2GrlwM709YciHvz7CTG6p5A1IuF2eM9EP1TyCTYS6nKnIi7aygS6smQk%2FRN8pJ%2F56Qz3T1QsZBP%2Fc3T9Y3XPwoW9GYWdqUaR1vXHYq7g9mzSfRwg40DW30MKuXrFJLkp4nFsr0FVOgWtwOt8dvvKHPMsEtQXzCumOotTnRA%2Fl%2Fvs7%2FtrGFkz%2FPaBVVAT1CDI3BjzlG%2FamJLR45U59XkLgnvW0%2FR%2BiX4Fb6d801tRCITYsurYQbIHDKm0jz3x%2Fi%2FYn0hV1JtgjVWgsYIuof%2BP%2Ffr9Jb9mTHATSwvThEEf6WA3Uw2Hss9hSR9NxjIEgx6GNXRkFWiiJKJinpvIpsrHUDSH1uwBfzyXjXbaj%2BlPflFGgdY%2BsZ1R%2F2%2FI29a2use4oS6e688iQvxQfR5vYpL%2FnQGCaPcqqe%2B3pBthyxEmroqte%2BTSu8qGhGXBTE%2FcsRUVRwGUGsFg94nFfGt4FyY2elQbp3BHgMTEPnL7sknlmoOyXpG5NNAiYzOHSQIsn18QCmc2KlkEuOsWBjKtuqwvxk%2BE%2BazmQpf4MLahyMIGOqUBrsYbtKMWpheu5DJ99vfYY2FdwGh%2FZgBN2s8eLuvhvqgC7UoGXYFQlncR6Xzjz0VapiT%2B%2Fw6qeJRuTB6HNRfs%2B57g5clIxNA5XXlOqVjKMDyBAVxMuYo0mFAmsvytQwauJfEYRxHrm25AU5ZInh3OOVNNFHpTGuxEV8EpK2gM8f2w4PqaT4YWL5PQ8ECUgvvxOPwHwoCMnvV9%2B2%2BTIgyY%2Ft92kSO4&X-Amz-Signature=44612ffdb754d3594a4d8e816c129596c5ab523b6590d47d189f52e20f53a8d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
