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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAEFWK5U%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCUhaqsGDnZVF3VaVGvzghiyRTksj1POQo3d3bgcY2AVQIhAN6EYaprHqKavKQs%2BeuXPmAvAFubLooitUOnVH%2B01GLuKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUBuNHViz25LD1Sf4q3AOoCASkncKZ6wYxLXQDX8j8Mml9TTWcj%2FnTSoovb%2FUTA2DYaOqZRsMldynQc5kEfiY3eq2rynA283zMWDjFnfT%2FK0Fsg%2BR0kHx%2F393SRKawgljELQRHywKcAxwikZhcGlo7%2FI9dcW8aNVnkwvdxJMOwS2iB6PVXr0V%2B9NTV1dPzSKv3nMhvQjKbHwwl1P0ry7O35vcf%2FBPL10FGC0MeRLKe%2FD%2B4dfceTXn%2B9QYzBKWtOmOG6uJhCp%2FMo%2BoLFBsfZpaUAE1otIqc1Tbv7k85diGPblh6%2BjlPfCXkerVAva%2Fpe2%2BL3cQqMAT5JZt32zTPMPZmphVUvC1UTU2S4If%2FZwsik5EOAbINK5JPF%2FVhL2HrfP7uo4InqBp0tHHnDHkgdOnjwRZhzXzU51oLpg%2B493Or6D7nQPdR8Rc2frjsBWgZvo3NBsf3H1jdq0q1Y6mZaUfAFW6clAEOZAEQSdLsUZPjpS12Mt8fqLQwYavP7iUeXCI98Nw4iqVIt%2BQjisHxkKqb0j45XOmPzk3wyJhdKwLICCmLRbGsX4rToOSidExU29WCbnfQzQgpZLAdFNV4oD%2F6HiTD3SPXpn48c08ZA6hIgG4aG5Og9TEFrneRERCSNcrsNKcnLQdlDxLBuzDU2cvABjqkAW9htZJ2SMxxMlvSETMXJ3fM1i%2BS0Ik%2BbsKU9B4raX5FZnkycqxDLQRefbLiXiG26oxez8WSWtTCY3nExkwSSa6ZB0GWkwY2NaEpIKmN6P45%2BUfNS1EJZbxTmZt%2F63SV3gN0%2BWwUJ94Sheb6jdlP%2BGxpzq5DH31yGCe8CqVZZwaSqoFe62BKNUCpdeeQf6bqRlvN94%2F%2BiFWWezchWMBejP0xdaJA&X-Amz-Signature=9596843bf4f95992929bd406efe586379159b02c0e7515b62deb3dae5ba0c101&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
