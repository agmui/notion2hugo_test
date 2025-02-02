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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVYFAH3S%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLZLjBBCjFiRhsMwjzyn7xylrYMCJw1zZVR74bXXKR0AiEAyeGPwpNcQOTpXnWqr6gD5Hd3XeGsqLUqhj73Q7EQhqMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSZ3b5GXe7Jzsap4ircA6HVx7cmf2jp1S181trUcRwa%2B6lnF%2BCwf%2B0GnX0GfARU9EX%2FHdDgNvH9VXNOuvFhTR59O6sLi25HPIOvepU4fFWakD7djmTnp%2FSG4Pb9VLSj84sD8ZdQUTh0XutDB2%2FEVz1f%2BV3wyAovO4O5q7hk5uC2gtlq1LCMeigLBISWuE8sjU%2FqGY0untfvhCgHtheR1%2FIpjczUA1BRWXcLfjzs7g0k963IpLHcU611UWBj0cvs1be9cjkzuWdFZXS%2F8ofssVDmA7fGqUUe5nCC4PdhedGs%2FnRyOA%2F58tsUq7lbKb1TuocnicsRTzt4fyXm3PtDdlehDpvj4SwuK7x7ROUvIDeL7k%2FmqlWWXTAMWi9CgaGWnFVqODqSqUef1BPVCfWtWfaHhuzXKHyjFPvBDjAJhsYkX32NlD9j1HVMxxnDC%2Bzb1Hq95fP0NDb8uZvzWSUBmgk83W6rz48mPtII0zrISsLDHJJXBN9EuzRLGVpeddHcZMiKvLIwOpTs6r%2Fioh4Kt6TAO8m12WPx36ArFE9%2BqJGNxN2mIvI1F8OJh%2FhWMdNX1v39fdnxknnD0F8%2FP%2FmLeYVaAWy7fDDdKLI%2FnShOFd9pCT40yjrCGUrfaFX3kVpW7iGHqO15oJ4wIgt9MLnz%2BrwGOqUBRirzUzsvGXulzd5fDKHuImm99rZdou23djjsA8GwqWkWC%2BTAU%2Fk2aDwaJ%2BxlHcZSeMroW9gwMTsogd210YpAQjYM%2Fl53HjOE52NVSbUFFLyUhSH8e%2FUjk3k4iFL61%2FwKh8hjQGrKFdgdaVrVJQc7ZCRTDMV1Anu74gaIN7omlWgDbcu5Z3iOHM2Cr1IEVwu%2FvF%2B1exq2pkRqXOC2rjJ7VKeYl6GQ&X-Amz-Signature=24f42eceff1d53b971186cc3aa5c105a222fd978a6e087b6613ceab269b5af2f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
