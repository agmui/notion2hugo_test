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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6IRWZNK%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC5HXj%2BizwX3MCpNT0xiAGQGYNVtH%2BaqjfhJQHwbL3VIwIgBpNLPM0CpmDbXSBrjTB%2Bgd%2BukQ40pc%2B2OzAO8sBHsKwqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcHc0ZGSJjJH87B%2BCrcA03LsvMyHKw2EdCZ%2FzjUObputJetwhND1WVYTTjdir4b41ycY%2F3U0TecDUqKSzpjDweBPAr7N0Y%2F%2BAXBWg1CJufbcqcAZeudAMktaXbOVn0s5z2n5NAgwbwtEJEXXWq8CGpNWvUnWCEJdaLuDyW8RGSr1dQbQFaec0EiPNHuPknLaU6TOq11MEifEbktl7YS1LIr0ZlnsRITIneKlTj8cXaCDfTOSxFGuW9JWr66opjsQF7FlA%2FW4umZrfiAwTXH9S6kpMsBVV%2FkSyrc3KiLbBtHEHlyPYyyJfBaJvbutqmipeCg1pxoX6YCz%2FkmJifegp1htNqp07Qib0EcylZK0qQ7FY7UtYdNumi67i3eAT2k2LP58CeetCZntef0KP4UshQYlz1p4dvMbmgdmvpSpmBIpYB4LCoDmlgHIxWKHfLsBL6pgNf%2FD01iv7F8SQA4ACGI1kkTVY9daBHNSa4N2PZ8SXH0mhd%2BdKiwFsSLPkST1zsUwz1hHzMyy1ZluMBX1%2FBlpkixt4j31eoZ8g2DjqCb3xMp5wl5%2FSwfr4hPJPOmiivWwhqZJWjyvwWcSDObDXbh%2BoPUx9r47ZgMRWYQ1Emt8cnssR%2FVi2w1m5kCFRvIQaFnyUXRp6NL%2B5QgMP%2FDgMEGOqUBBezVqYAy%2FhF29vc7LHQ4VxiAMNkOn1ahaH7ovbZ8MUP7WKQnP1Gmx1SSfllcltExTGC0bIyvhhUBIuvX%2ByZo8TAiru3hmL%2B80u%2BydU%2BpNQr9CsWXod%2BQJHcLaPbQWKY3xb7ujrEE1jezQEG%2FYS4vhgJWqepqWTJ%2FtgFXWCDIRSi8IWqLdHWQNZKqzncn4ae2dOhgySgwm5Zb0471b3p5RPrP5Pzj&X-Amz-Signature=c68f244954495e907e1f472abecf03d1b5b00cda30d99e2455832abed4181d2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
