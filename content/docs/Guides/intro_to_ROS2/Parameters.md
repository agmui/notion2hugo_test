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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FRHOOZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT4G13wdGJQy18gPdPnkCBAUie7tVPLES5uQPx8%2FNDxAIgKAtKPn8EDDeQwoCRugS5sjJ6H4t9FZ9MoF1jS56IQ9YqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn41GJS30G5hKFLKyrcAxA4i8jVuSEhgSP8tdF%2BRGI0k76DtrLkTK%2Bn%2FVErz84GmOUL6VqDMQ9b5V%2FYaXj5vJQguQY649jwGJvt8B5cFo3nLHZNPI1FSVcO6anseUHjckw2w5L%2Fg8C1Z3AIv%2F4P%2Be6QOXydMgzU2EdcfJ0Tv1VO8GkGMGGW9sJtBeGB8GlfoCGY998xlEPEBnb3M%2FKgnnJnUsXuNIUvSY2vDAEwn%2BvmY67N50zIDmyP09gGrQ0xo%2BuqPQ76bpXOGsPPAoDl4WdUjdPVwX6TOxQ4%2BLPmi8YsONGZ8hVqcbXtHPor5JhC1AEMizlXpgJQzsSTNVjbpGFBjxsWeSRL06gyDZ%2BJe5v6fn1ivsYLbpDNzPVxak5XlsFoOBhAPESDWUr2B6VE9IE%2F3J4R2XOqs1BpmoTYH8b1cPd8pzNHqdPvKyMPOw7JPF6p1jr%2Biajc8lyV8mYGtuuQJfw9jCcGDrZjpoOobiCAvtKIBU5jeF%2FrdDfJ0s9h196Auudt6vufBIh%2FwrYZrCcZNmTlUlUAAR9ddbZ1tAjCDoNrrFS74DUlJkbvtGrcl9uZhSUzEQ8clllLYDZxPdrzKqGGCDZDR%2FgQBfNwVCT7chRNftmyAzEGN%2FVz0r08q6BqR1uxPononiP9MIWy7cEGOqUB4OhVoLbxTmJaXtGm78t0W%2F7LzW%2BLAmqtkR8SKybh2wMrAEw6l24L%2BI8PJrg7ngqwCmm0EwlpwrFNm6nDam4635KOAfuTAgJk8VYGCNjKS%2FHqQyjtS6%2F5C0cngRNBNvm2V%2Fpm%2F9rynKSp9IPfak5L%2BDuYwFpOKzn7cUaWJ8HahkLSZH1O3PMj%2Fk41V4RclxF92QBq5jYMSGJsaK0eATPiQ91ig%2BQT&X-Amz-Signature=8783bb8d24faa91a4537fbc27f60c264cd49fc480205baf4f89a918e4ad05854&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
