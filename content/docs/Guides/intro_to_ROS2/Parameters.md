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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKQUU6CT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCLeWyJdh7OWicaZoSMBz0eHHHBUPn%2F%2BUtd8ysWep54NwIhANiwrZZFAJ4mfYElGuHkPfkRa0AHsEEb8J8T2hSdIjInKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxyzvmmBP%2B0bQid1n8q3APVJzflQdw9yedPT9RiFGakEGEOEo%2FzhabUrzMChkSSu9PGmFj0lEXe2BzwdfOZ9Nkw9bB%2BaOuH4GS1J2yolF9Zow08yJf5zO5iUyX1dTUHJRrVZyTBntmdup6UgTdMlTvRPfPonsfOA7tZbIVEeQAetCCc9Ja8wg4d36dtt2d2qYeKTyUHTAadXElx2cP%2BcE349a5Etk8wNzeYBn8nHDnBmcsRN2YaPJ9Fk9CllTsLrxGL8TvGGEIZ8X6dtEht5r%2FLkEZkMOZq03Z2mlBzew9GyxKLrriV3Xk53qlhMkP9Mml696im7tIpCZ1ImION4l83zZgf3cnORmyb6vuq8LLhEabZXP%2F4QCzlyK%2FIZff%2Fl96Pek21GCOfChypM3npFa9AC6q%2Fa4aBT0bhmQBgirT9NTKSQZWgh400kuG6iOvlMwEIh6kdyT2rn359D2XmTDNA%2BKYlcghJBmBVrPkea0CIhvthyeLwZN3c4%2BhkghRCaEyU2ns9TdV69O7ldX9yL8nmyZg%2FBOsAk%2FtZlFJYU2W5IGrRhvWA9lvkED1UMdooR6hKwoYyJ0LC3NcfqAv9CiFPUVqoKhZvn7QXzMcth%2BvUx0Gjrh%2FCKqsXM%2FZga0yD8AbGuNZyMkTZOAl9wDDG2c7ABjqkAXcQhWN7qCxgCAlmgZHdELH7PYX1Qa1FcnAq9IQW6GP%2FcfzpSsihUK7%2B2WAMBnxUf1I2nsOBM5hzkP0FaDqNNnaBhC3trLJEbhLcQ%2B7sFEnQ1TpHl4oOthjk7II94f7meFUKnXVXGMiTjAJ83cZ1XzWBMFrW0vl4bwi%2BuTVJMFnirhmGvPmZDY0RVI70jaeuBUVaVAjOZSEGXqMG1ydhjIihfCtg&X-Amz-Signature=43272161eb5abc171f18f81111a7339d5d1aac3913c6e5d3efca713494c485a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
