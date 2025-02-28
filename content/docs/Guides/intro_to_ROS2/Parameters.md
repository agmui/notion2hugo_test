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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYG4A4XM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDtR2NZekBH4Btaldh01YrQ5zfRjGTaTc4iva%2FUFfPQ2AIhAIzu2hdLUSZUY%2B6aS6qfBpQ%2B59aLlBZSdtkwF9wpknfLKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ%2BPi8AdlLGMN7mL4q3ANX%2Bdw1V6NQjDrJMrcEnLT4IZm0t5RbpZUkWoxhNcCN387aqlTtZYwtDt9zsbXCFIwJqdT%2Bw8VCBEBNVQNPwBF5%2FsRGhP2Z%2FGiPR3Kl4aXUHY8FJrXGs71%2Ft08LSX2AqRfLvKfgrdQn0UM7CF80QJJZ5P6Cg3V%2Fk10Gm%2BvG9HuRBkslNzV7lMpw5CRmvhTL5lI7FlgLYQyErvlaaQx52p5w2102WoCaH%2F3RdhMPMtt5l%2BwQqFqGYxggiPtoy9DA5OI%2BqV4x6tzpFsA5ryyMoqcOebjmjweyO7t%2F%2FlSTD7seE0ylxvNC3y4DS4lv6vfNxoGoHJcrx6RUet%2FkHP5kr7GWhTqwGdyB4zxhuoDVduo%2FECBPNUoVF5vh6eSo%2B9oWX1DjM7Cz%2FXPygZGZuvIwCRGTkZHrDekS7b%2FSm%2B5XOREOPxmB179EpHk%2F7MnEZtnjuWBusdL8jLqnciQnUnDZMIpyFi4a4GU5pfMg6E8OAECtuORkB8kP5hO3GxF1ZZfCU35c7HeCyyNUqk%2FvMk%2FvoXsu4Ye0wa2UNm%2FRjLRAZXCl0%2F66t7rkeMGnZcstgS20b%2FrsuIKUeFhDuDfce5qzDbNBMlQ2J1M5VuerDCPp5w704s%2Be8E7FLcog0Z7ZSDDtj4W%2BBjqkAUAmMDXIbvEx078ivH1QOVNh%2Bq1Xb5xYwBJn1HiCeMvAMZ8Apb6C%2BFWUN46TG083txisO9NyRg8TCK1%2FE4k6qWWFzPl0MUcNb522OpkTdkuiv0rR%2BgibW4zSA9N97N%2FE%2FpfSJvd0cF3JpKj5AlSoY96qdlExUxcQfuIMvjcENb%2Fj8x8iSs0XgkyMCQQqyWyraL%2FoUWOO5wSzwYbKYmbf1vU0KD4D&X-Amz-Signature=1b0fcb2a246b4221747a361ee9695aac277b64ab6336afa49df2f439bf607568&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
