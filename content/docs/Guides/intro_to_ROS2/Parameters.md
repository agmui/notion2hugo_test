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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3CB5WAK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIBrWF5MvEnTWd4T%2Bwk6xNH09qH%2FCMVZUbiLvDaA26aRAAiAWmmhT5r%2B5hYPnbhOiWu7ZD7MaBaJKdeJxWBa%2BvbYXIyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMue15cLdBXRXK8lg6KtwD5TT0S1GSqELlHV75iEB%2BE%2FJqEEoq%2BZ%2BSFLLutSfyiujiHme6Jg03dqb%2FcSflTvgLvEeW%2F6svcgeKtUM4Qrt4SG6zfZRMWApZZ7bCUaO9B%2FyqbrChzE%2FLImjA8FeTA0xol4VG84Av%2B7sFg1PYSfq4b0i2FaC%2FT7%2FtV97qMHHH%2FMvyBZf41I2xLTNjy4n06S%2FOej%2FnCzsRAM0rcRGRfzFLYJhLp5Be%2BiaxRSZgRGmYj31cPKtLGZO70DMf%2BX2O8BReakuS2j73PRP7yDPkUHZsCt%2FjFcHEgXvf9libnCaskBaRMnKjkLDQZkgIgG3fx5enfCA76vuxQgE0aWUKHFv0sXfvArShUpDdcNipwLm2YEL3Wp4N3CG1bHSo2He6ErNI73vdO4bnydTI3CC7SBi1Qf%2F3BB4TewWrmplnr%2Fv8RoMXTqIKq9dMMjdZZ6RfZJsl0ncAsixxGeJeMCa4TNAdQwBPaMn7esDdiC7h%2BlRUp7FN8mZpKpUydG4OvCuAJtbUsdI1wPXWNrMC18Ecousjgz9m5qsUs9AdpC88WwPqW%2FSpC3l3AwlqJSBAbKwIN3wBUeFunZL81Rn%2Fseg4hiX5FYSzrfxpjOVXseqkQI3Chy2YmzlxIbWok4CTJ7ownLLZvwY6pgG0tEZcQuzsJQbedPMmgH1s0gJ%2Fty3EcSEwnf9qbAe4atdmkS1shoKCXRd2ljkyVpWFjw2Psn8SA6jj%2BLRTCgfS9J8BGRa%2FtIrjIaU6AV1Klmu8YchNgEcnnuOpcwXPeAnTumlJIcc2MKBwDhkdC5fUNqXidBNzBZ39y%2F27boXUNPMGRIF8zTGwpRWdAERWibTUgQfWlPdn8Rj6%2FfTDWhteuQy7QzFn&X-Amz-Signature=d426f0011e210c4255b75b055a187071be56892378f30dfcb1e22ccabc0f1a94&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
