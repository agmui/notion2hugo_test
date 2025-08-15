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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMV3PWUV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDviLo%2BPV461HRL63OaO%2Bs%2FOR%2BWnAWBCy0egJ%2FVdEGK8QIgNZOe%2BzmocVvfGBn%2FaYpA%2B1gmWdNHdMXBHVyYJ9yeHWoq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCZIxae0dOM2QBkNQSrcAz%2F%2FZZM5RuQUJPZdgoCfWPFGBTGnZu%2FnjsycSmTG0MutjbxCzxFZyTnJ%2Bgchw93UgI2tL%2BM6tHam%2Fj8d3GyqlFTbvfeBot3essDk1mI8Cx2IAXt4Ke4aO1quawftJufAy4QJliNLMk%2BUq%2BprwsHAOX0yC7n3KkmPj61xv4S5wk4wuYeo8iGbcwEQ%2B%2FzJlZnn1wOHYBAvzfceA0fZZ5dcJrE%2BoS4s4Wa8OR9s4R5j60JaGD2eq9aSZTrns9LdivXL%2BYtkyzK1KPaE%2FUG0J5EBsX6BF8C4zfzxS9pyB%2F3REAPdhpljdPOqM3QYPVwFiMRtkwCjkCq6UHYdoVx3q4Lm%2Bh18OfZV3UVWcD3sQ0tLbzkbgWzWTjOgEB5Nr0h2f%2Fj9i%2Fg%2FJgMm9sgCfzuQ19NUdWhSqv%2FFtczv7HE9378hV2fWHxXWeCKfXBlYGrplVPnh%2BTFAm0EZ8OIQn%2F0sTi8079UJZwZ6Z3G%2BqMY4NRgIuN6uX1gACVOtw8Xu52dk0X0YyhPYE2Nawr%2FLTbAk%2BwECmKZJM9iWGWHMBpvWrT6ntAsl2mcnVE4PZqsYs7xyGLLILFQ72gxF0jcGrFbxXD%2BwI2V2WhiIep0Ue2C3p74PukZTqQQTzm0GbwwRFpgOMKq3%2FMQGOqUBswCmhyPo6Mfs08AEndGMKXrDzIj%2Fge3b5ke4PDhTHQEhogkVhc%2BJL%2BUhgitnVpaF%2FXkdfUiL9u4FCeyoS4da%2FlDKxzYos2DXXYZPaddZ5%2Bj1AEizcjkpI0URY%2FhQZ%2FK%2FmH4isdyRN3m7IibM28eLnE80OiVQWWMapSqpzDh7OEdib2QPVafv0%2F3xU2ZG3uxDMsuyrE%2FRLUWYqbxPKkZvJ2hLC53b&X-Amz-Signature=e0df6f655d66e595f3b83acd7b7f863185f88483997035a71bec1a4f22c1b2da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
