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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJSRQFB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCcu41Zp3BKCn4S7xDkaTcn2wnlqPzJ6VsIDy7imkbhCQIgIqdfCjXRmGVcGl6%2FWcfsTa5ZAVpUHGjurU1NE3nMMYAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIs3R6SVWrb26w6RqSrcA53f0vSc1tIajeVyDPej4QGOK77yrPCbnGckOPeeJSkxdKPrzp%2F2bgQ8BwLYFLF4Dz9zaetlQswnFNic3Ff1j1%2FnjDOTq1aMbrPXhEt8Y1kn5ottySA3o%2BmHqap3vN%2Bcq5evSNd5xa5wJQ2Qbr5FM6XiF%2FbQMkdlwRw%2BAQ8NhzNdQjOQyKF3Rz34q00GKtguYftDITeUF4QJZpCJsxAePMtZ4kpv4rr4HVih1dIZRRGqZOKnsYiMO%2BqguPLKjPC7fh%2Fw2plOyLCAFSL5fQWXPZrEUwnmBHnaWQteHTWpDJZ67m99bM%2B0BjuGMCTZpslP%2BWBKSUpu4zVvTHmNsX9vF801m9dIT9rGeMXACwcVqElkxgILGwrgEk1YZrxZKgaDOJkKT9yQgyPbSb8EV36k2bahS6XOJ7TUC5VKnmvL853vvjVPOSN5O5deWoieKl21XJfYh5zQlneNFHXLoNSbvfXxcm3OynBzM2FTFlWAIjur9lOWRj6EWPdb0ml4eUX8Sqx0Z%2FKQNQ5D8ru%2FiF0DDA2kd641Vmga8z2uLnbzyY949QwO4UXqvXjI1tX7N4pPH0dAt0HhDXeSX%2BKav0NbAQ%2FU6P3x5jd4%2Fc5mA3Au7Jynsw%2FXnI0Lmmo8kAlbMOuf378GOqUBVtTqikC4PbAd6dtqrEI7124oUpqVswdhDtlmRTLaSUMkHjTqGtclLnEx0pSL%2BKMDcB9peCiLtzri47SidUk4QvebJtgNkcAlfNPZEsHIYSltU93i0jnGv9SKFo6hfpWDEJmLAFbT%2F9spSiQeEyoBcYU%2B8dLiVc3JjAnOR7XnctOLViCelIMfvu4D4HocfWArDG1SfcHv02wzbfN%2BGSWrC9RLbqXX&X-Amz-Signature=abb049eb99fe8f2a6da2738f96f4eb5165742974dad0f62c9c02b94ae26ebaa8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
