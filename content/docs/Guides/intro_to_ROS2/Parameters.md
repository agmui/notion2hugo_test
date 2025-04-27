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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVFJ42HX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIj7epACUipg%2BOsX%2B6eAeOHpBOY4quKv08qpuZvFXytAiEA34WSUdqjxe8n3ymRwaoukTvjPZDSPvxvQ7Drjpri8mkq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDIBcRbSZ7RaT59CwXCrcA%2F46XggO8WTg8Ge4efyqSkOGYvtpckm4jM%2BEkZbJckGQUAudtuWF2TZA7cb11sniSw3h8%2BAwi1b4GSe69S3YdCDa%2BDdzr4X6nmlmJsO71kbqhUQWJaRjPcEypswr%2B3ysVVHdSXCA94cryC3qgv1l7fi7K0KSLqHpfWeKwf4X56TDBIYSoha7TkJQQ4ahYTotSqeqcO8xo%2FyWPo8MrOxRwOcf5LAvp04yqFuXlL4pz70M%2F51YMupDiYZarPrB4hlkEXjv4AzumcylSrXnCaeU729FEH6Nuq2BJZevqpAqmrwEw%2FfeaG7jApPpc0zbsLq7baEY3wZSv1q0qGyJtN%2B17ukD4wQUYCKu4DusDT6ItHdy%2BcIggD4uGGufkpdlJiBJk8FnJO5L1bvVn5V%2BMulMo9D0ETecUCjgizL7tXzEpnndlbf7aMU8TGURWMTfpUwLTRN7HotX%2BKEizSSGybbXAvTxrOqELdExvtaytL%2F1kwpW%2BJFP5zgnZs23konkzoFqbYX7h7ldssFjPlqw%2B4Li9jCe0%2BNZhOPhp2bN22d3jziySU1RjU0fsANmmw1Npitjyq3fc%2BI58zwRQ%2BGoyKSlT%2BBtRGNR78Sm%2F0mAD2Wb5vZNL%2FTrRE1vkDmy7W%2FoMLaxucAGOqUBBjx1Drv%2BNuwOsvuU1U7QHXme2hyk72zay1DSDeAI9tL51%2Fg%2FFhRgG4spYQZ%2Bo4JOpZBAFnsEofTDnJu9CMSAiWjXFBsvrr%2Bv3dfuYdZ5JIhPHUMYCS67ZH0pEopa2kAsbE0paDEuQ%2FKmmWRLXeM%2FFqIeGhEoo5dzmm8lXXrYNOqFP1m%2Fp9j%2Boea%2FE%2FWMDdb%2B2pV3AeP42P56LaT7%2FdIWkdMBi8cd&X-Amz-Signature=0a09c7de3e5332917706b24b9f23243d4c5d10948fce15a47571a535b406e7e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
