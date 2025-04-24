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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXQZH4OZ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCHl%2BMiE4hx%2FAVeQS%2FbA9EgpcpQSfiteeQcZavePhbpGgIgJshGZTRnwM4rKY2yBHyVuW%2FO5Ds2LH3Ym%2BWISr7vA5gq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPeBOMQYi38bVnxitSrcAzw8q60gpneVu%2B5uaLEO20qpijQGiDz2g649FsTIJ7wSwWlyGneHzH5oco422hCOW1rg4QU5ESIMGAMqWm37wOYJ0cAa0NV1prJe4uQ7B6Kt80sBLxGJo4hkLs3vuzI%2Fu9XPTnRINyC91Pby%2FMeMNZUYVYT6vHNcnER%2BJv14SLbkqxk4EZ7jgZySz3uIecqRZSqmxUZwODkUyoeuMtsQDXhpPeu%2FaV56bsuxD8Dv%2FfyBR6EO8cVrJ9V7IDRz4SoT5YnEXTLQ%2Blkmh4E20uSc7wS5f93XYCEtI8YERgSbRMYmLkBpHt3BV0scP4pRERNkKVAo4jrjg2PBZ3SoXumJKxe4rdfEJxiFUMfafWFm0QPLWKFuwYJG%2F%2Faqikhf37SMm3Vwe3R7yu6Hvlh3XOcMm%2F%2BdtCKpWj1stEHMXJEI4SFLQLU%2Bbs0Qt%2Bq6YaLS6Lja2JKewAde2YKsftt7Kuk8WcK%2FnpykZxZ%2BM7dmHQDTnGtMr62HVUQK%2BhEHlmAeaCW0DOs2l0J4Kb24vfAXhmJ8QtdCNKL4eESKfij6itQAZYAA0MDbcox3kCEQc4e4QbcsZfDIQsRt8v9hoR8QXgHKZY8606sZSv2aOKQ29B8%2FxWdnZgc8dIWgNDvJgoXRMPSEqMAGOqUBC4aM47W9QSHzDX%2F2s1eqb%2Bu1aHh6%2F8zXrM2lImszZx7kXW0mmT%2BsykoiSzAZASmPVx4t2wC4l8s4tIS%2FMed3anDC7RT2Lbj8atVY3rkKtf50w6D1TTkhr%2FL8I8FF4YDvJztA9%2FpgWBI%2BGfkZuFU4iKoX%2BnXNSkxV6XLeUrPu2DYUYltoP7evLQ1kzWAO2IZiDjHJVzTNPoRKP07c5Q7LhaylBcbw&X-Amz-Signature=f1aa726141bf8d130eb8e46c42bcdfa367f71e484e60eef2041a2d49fb313368&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
