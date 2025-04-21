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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YFBZ6DM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD8rj28RCJOVBmWuOI8Y%2BMeGBYA6AxRulhqiX%2FOZZq7xgIhAKAcr2cmWJear4SvHWpqf7iu5uWUaOzISYALPRZK5slDKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVLysCZJ10KitnJG4q3AOkJEyaxyghP9cJea3GymXosjAH4oKmwmdF4y0igvwRcHLprxTo2WoBA4%2BZJ0VpSBlF1tHT8UyQUYEVFwBMdiBbcnPG3CaqWVl02ttpX%2BIiGHNd8q2P8%2FxaQH%2FFJ6d8N9JrTqv%2F6qub8En2524ZdEVGPTPkj241Q%2FViN9xtB%2B%2FNN5GrooTATLMC68PVeG7DUyePh1VpN1V3JO9jRCn%2FSYejqSPV0aTG5ZoxEMqTVtdUt6Ds3%2F%2F4V5p6BWs14vkAbvkyF30LuKrbDGkcnIuwbgV%2FQkvhJ3Gl4oyJTz%2BzRo%2BvtxPx9roTKnPQ1pSvwN8Mbo%2FG757VeMeVSAnp%2FLtfCBECodTEYxGcPTV9h3OD0LgJKbRsxIQa38xi1rMcytlnPsJA1JxFtUWqZD8EgRy%2Bj5GFeO368wyI4IlpQgcjt5NQJlmxP0WBTnQS%2FJrn45sqCEQVMMKTr7RaR6WQU5lVSpYL8hQkGdSUImMHxM3EKDHoqAntsZ9skF9DsHsu8peVXh7GDfaMQMmSgDICPNkKiUm0KUatITHYhPB22vIwQn7oF59DXlqERpw56WCxIpRd%2BuNdYTyosA6s45sCGZd%2FgfXEtfuoPPTFDHvuAwz32tHGrGSJqQYwmvuuzkLPsTDml5bABjqkAaduxnHKEs2zkJClQJcEMCiit2b5qh1t6UpowzTn7n%2BReF7SYxjhTT1EuTno9g56n7MD8ZWqEqRldg5dFUJ3c68zqEJ2JFj8t0qgC0xzCN5lW8DFPayCEVHH1H5nv20osm9b0izTIX62BuIqiPEbo2G%2FOOEfljsATPeYUgLEuA9N2wAuEWsd4fpgi5%2Ba6tJyzDVjc1vFwvw5vRKE%2BsoCowDPAKOm&X-Amz-Signature=9029da2f4e39e800741821c37085d0e926d418f4a835c8b914a130e7e2c5e24a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
