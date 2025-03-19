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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU64AWTL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCLLjanBGcq3ikzaHGX3Pf0eyp619%2FxuQsX2xKyzMltfAIhAICDKxRb6VU4LYzyAcfxKSSrCk44u9mm1Cu%2BmGJOhDR2Kv8DCH4QABoMNjM3NDIzMTgzODA1IgxK1hlPB58vyKO0E9Uq3ANcPo6s8NU5%2B7Fl5D5HSuK59ISgBj71ic7zFX6Sb82nadHvbuXrjgvLGfLaWOJaD0mCc7s7nTtsSW2jYGD1t8qCNtMnd3%2BcTlDoLuRMgjkGm3ncLqbIibMJ8cTdtkIvKW4hFwGuh73EQJcatYZ0OMEqM828mn9uNz9QL0AQK74duj9JvizLM4XgxiWxZnNMWOKs5qEhzjtNw2I%2FfQDnitck0kRrpZNudmwsnanosjDHKiNgh%2FBzn9ExUy17THoTnszjJp%2BfpGku9IRfEE4C8gqareOtryIR7eYHuykgsE98Zf9iilLEXWl5eSAcFft%2FzyaGS3TAp%2BlyGzUP9r1q0IilUAgqeEnGmjJPr%2BU3fdc7ichB5ggCvLlsrOz%2Fnf39hTS31dts5gdLw%2BPb5TKLRqtuZVkURcVmCv%2FgBrmuca1SUgd1A5Acxg8NVbP1pWL1AQXjQzu7WiYM7GcjnWx25lhW3K7su5pqeoO80dF5%2BGqMagNIMgld1%2Fz2F3qfSMRxzaD65SA4r2m3SqpWH5%2BOjINwR6zYsGK5UA0Ws4%2B2hz8lPU8Dl93KKebNzdtET%2BqV26LK16NJpROFJ0DgPTG%2FWICjVkL88Ea0kQkIayA4F%2F41oFc84s1%2BABfXJpPvsjD32Oy%2BBjqkAaS1tCcaWQj5zihQ%2BAceVLoJ5Y7yK6eGf%2FWqkzC1WP41QiV8TedG1Owctg4Xp0ZpQxn3H8SnQlAlg9WM9k7bFDc26jaU98sRvVapsFZ6JilKw1heGcf07dMvu1AkDNP%2FQV8rj%2FGu2kSXoEEnEQvyw2PahAEONKeeWhIxyHwvu%2F%2FS%2BqcxvvlliVprcyGXsVp0SvRziDcJ00QnmtfUwAd6ldgkhYpt&X-Amz-Signature=1737cda3f5f57d7d422eafa17d80d495f7c2e5e2977c3c8fe8e356fb7f9f18c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
