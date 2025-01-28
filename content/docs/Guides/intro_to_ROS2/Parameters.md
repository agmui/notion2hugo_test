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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHRP5IRJ%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD9RQJggR5tkT%2BmEnWuRgyRs9D%2FtszHaRwIIfwkEWaF4wIgBzdinu1VaxL8nnFvjkRuU66qxIuayqfhyV0zmdCZZeIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEEBQYBh%2FGVKP2%2Ft6SrcAxeOh3fFOJh8yATyaaoxDfTdCnj%2B2ACz6VjzLfpEI7p7N6Io5T7KKpR1WjO%2Bv4%2F04oOQaXKIRKl8BeatdDIka4BdtEYfB%2BvN%2B1E%2FziQHzH71RWUQLIUWH5YOMlCvSpSsMEngqB3Qi6VtAL4teQqFyliFwF7wErUIG6MWJBfZvMLQ3DkIMq71XI7ikLMMtjdZrXesYRlG8HANobo4jDTSWRXzr9sVL6%2FBnviGiKbY%2BlmNDCQbtI9iAqlPZXg%2FC8FLw4fO6oMbA8Ym0zSwd5edQp5owo4kzEcfcdFP18UwIXAiZEl1MDfc5xSHjKnsWzSJlNnKWerDqPvLRQLZo2KIJKryqAluMf18i0l8TT9zcbSADyscTeKqSWFddu4OxgNok5NGx7x13fuElzayFMVbWFoBmrfTIPHeCScmYEkoVkWiHAla2bAoAg4YQpcag34O3quqUaJkTxRD29lh%2FLR5W%2FFKFjMblwi9ACbI1K0lEhB5259k82MZkmBdJl7h5Df4Xp1%2FDLHc4JY7AcO1MgBoqquRsUn209UR5zH0ihT%2BorMKKPxayRaTRwyFmRs8k5soetMZt024ssOZrPHVRAzagjgFoxirQki9SdMWur%2FPFhb0GuL9hJmJ3Z%2FuWTddMM7n5LwGOqUBiTt3w91WTROCwc2HFiADZkGtxh9%2F%2Fs9YQrrxlMa6ciszo%2BPevF56TkAm8UW%2FH7MxM4ObP0cZkjnSUkjO0DILcEkIr%2B4Ch5pE7s46uYmF%2FbqSMRvkZBaXiswOvJGd7aL805Up6OQ7Iv5msOPxLaevCIjYbk0hVqe521LpSGQUviL12O9%2BKrUspyJdshRLS68edR0fTCOfy0cC%2Fn%2FkgZ%2FHhL2qSjjQ&X-Amz-Signature=ecb34e6446bdf73f14fccad4b5ea3a88b0636f288c0566d3a51cbe60921a4b0c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
