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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZYZKGA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIBTjl1hT576HpsIfzcbu%2Fv%2B%2BFj%2FlgIYlevBmi%2BV1sf1fAiAc%2FGGhvPTfTrU0HUdRmPrUAaBThv2eMsupSc1AP4mDOSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM%2FMTDj2DrRl91pnKKtwDnhaCAOnOR%2FJeIvp4qKSouIBmYozky1ZDxz7jQXujFuSeSa2tt%2FKFIu5xCroCRcG3U7jlNxdFv34lo3EosJD%2FBhRtd5V%2BzScskyDFMHwWJG4%2Bb02Ofjqf5hu%2BjQspveQ8ieDsNTkJiamDulq46RmBJb%2Fu2EatZ6wkTgPF8n6XrZ0qrIJBJy8KPs8B2c0yYzv5zN9KQL%2B1vCZbCaHL229JIyzl%2Fp9YLm6mPNiQD1Faa3T0GQvDHkLmhS2%2B2EMT43djOW9Szq%2Fsy6YDh6AcNGvEa0A9MOYOuW%2F1hUBIwnlwy2vLGTWCYIG4pj8ko6P4lEZiPfk4icXhXNs8cYcTRpS5x%2B9dcO1Fw413YUZAqLxarGyO4YC%2BfqP%2F5ZoaAxTYPNRAj%2Fjp9zSW52VY%2F0ToAtyW%2BbXtGpwHPuq%2BVFznkvWDULJt3%2F5JVX%2FcT8H%2F%2FE1viUi%2BRsHzPHBIfx6oer9Oa%2Fp9OvPo5P8AbNe2Wjq8jOgIYgCngCt%2BzAN55%2FEIKpUC4OXGuPbAW1SpMXtsBZD62jv5gCHsv5CA0eLhlPn5HdPe1yANK2P4L%2BJoMlLycn3ON77bHECkoj8ECavvCgBwXuX0RczM2mhvL1jUq14L5LhYlB3NEPxt6b%2Bgo3xCvTkwseTTwAY6pgGJCxklkdiiL40bxFRa1ISlXmghTSnFqRNKGs2SQu4UUsNx8iI%2FO8CVnWu0cbHU8E0xN6y1Koo%2BSrTHQkdAPg8LfYU0fkbUGt3f4bSWdOH2%2BFs4Xdqbp7ZFLkXeOFju9r%2BWX5WN0DheJ9hvMdIsZRaM6gBk9XIonbo8TouUYV33D1dIcEpXvIiLNS%2Fft3Npsz7GQahpYvgpVhMZ0Mwdpq9M7fD1R6CV&X-Amz-Signature=9f0d0d98773c589472f82b00d19338d30a0597d24afe5ca0c76d81e91c7a7fa6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
