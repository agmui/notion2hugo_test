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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFWOQBJ7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDSp6lMYjwQhhepmvwV7TY%2Bysngutqnh%2Fna6AjdAfKJzAiArkdz2qgudktcsje8BQVRfmeKwyA%2FzrbaXOjy%2F3r9LiiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM19ygOr%2BJJJFR%2FTOwKtwD44%2FA7wt1O7Es%2BJaInxL%2B57jiw1CMI4u7UcHVZrzveCBZJIMpUVqAEI5%2F%2BzUG7RHxoPYhucq68%2B3Zy6WJrlt9Ir0Lm0R3XYO4pmosf%2FXfnD2v96k2nRC6vPWQWUIpt6kTDRA3b2z%2Fv%2BGNmFLfCRoT01PstJrx7FmtZK5fCAHW1znAMz2c%2F7X36j5FWxCif0QOAAkD3EYVh9GPKYI%2FKbZ1EaBA%2BoR4fe%2FzzsuemgWRJKfhiP0quQMks7Iv2rVI9xrxxSOuevDgLsPzL299wFPkqAJ8NGdrUi1AK5givtA8pZdcwttyYa88JFJGZXPQt2gqDO4N8HOquPcT%2BOTncPo0mJpSO56yEJqy9C1F6F%2FbzGM3HxvkNaisu3cSfm5%2FbpBKCWMvUUnd0VTV9iccelPMzenJfNSYaz1LyMopM%2FfY6CEIQOPXV1YXgmPjTPg%2F2xsmDI1mtPmrDO0iJaoK3pHpm6d0VMfxNf9OvgOp7FC7DopI1zm%2FDpyCDIBc7qL0ZKzC%2BfQhDHtibPGls3PqB1g%2FkB4BhliZKL4Ul5QFL%2BbUAHVZaBTDHug7dz1bH%2BE%2B7rnv%2F6EfHwp%2BPheGXxa8dRGJSChpG9ZdKM7WqRie1y5s22G1m43%2B3zwGzJWjih8w1vn0vgY6pgF1%2BYnDGpyAQ79uew4x84dWAsZGWqZajdr7uTpEHZT%2FvEOJ9f8Pl8yh1xpThZL2G2ANRZgFwyckRvuKezHpjINM8gVD2u9hckbKBnb4g94Sgj3t%2F7undXAw5y8e9YLRBILsuiplZXgmnfiRKxvQeC68NCMoFw420ukf4fvqTLHvnoduUbUwv9LRL6EBz5dLsUaT7AjlWxykG5A52tXTPqe8JVyFEFBy&X-Amz-Signature=9606b40718bd2bb04d9716b274a7d0d4c397dc8396c11ebaab4330a166de723a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
