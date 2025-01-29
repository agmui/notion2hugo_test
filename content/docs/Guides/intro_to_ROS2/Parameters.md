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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323OJ6ZL%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbbRGvPLTYAnckAKsKNPRmimKzXXCQat4Ix2cXfVoDaQIgduF%2F3nn1NTaZj%2BfQaYlX%2Bud7zlXEXPaV6F6BlofmBRgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEX%2BBSU0l5mKqB77UyrcA9MxQy44vhqlMVa0IbbNiuKQP2NwoFN%2B%2BRMX0Yh6hwCLXC9tI4HgIxiSGMG8RdxpRrGnjcjEmpq5u7sCT98BpT8bLgtThaoLs%2Bu3%2FnsDsHxbS4LUfWf4pf22cIjZKFyNDH4QUjZke%2F2joT%2BM%2BHWcejgMIkuKFubzC6EH%2B3uwluILKiHhnfPvAVK48NRiTTL381K4XvyxP6qs5nA1lQsNOxXF12japRFDJt%2FZ%2FXxSBqdPvIHtaKD6xScqud%2F4Nzq679P3n2l09FrGHFim%2B%2BYlgHCbU%2BEUq0s%2BfSvqQI1sQgUNYOgpO%2BDq9DFkal8f1BnZiU%2B9mxgtMY1lSyX9cuUg76JYl35WfJTfmk%2FAegCix4YStxpi%2FENGe34ZdHR8EiWcW7mCVv%2BCvdJo3NB48DUWzYqanYFYnhLusoh27vN3gakk8mbX%2F4Va3Ami6foFl6qDcXvV37WGwLGcprNTunnkdxnga%2FiUtzALxfdUo%2FHQ3C97GcYGXoKHlNvnbl%2BESx4%2BFl46DwgDGj57CnXfHVHvDavuN5wJVKN5iivxmw14YzCW5DsfmMRqUHDELLoPNRv5YiVz5H4Bdf4twQpBaRo9BhDQz%2BdTyaxiGdQnfvZMGY4FiIKxNHqNVNmEzAb9MOSw6LwGOqUBs%2BuCak%2F9QL%2FWCcX91HLLQ5Al0i9RZlLpeZH2TEIH1bdfTR%2Bj%2BY34rmBm%2BobwyIKHnANc6cT6O0MFbFV6eheQVTJQc0zWxyGoPYTHwNKW5zy8bXocpFzBVTU01JXwr%2FDnZ1AWx91Z8CnvvNlixc%2Bvh9S8PNZbtZWH0pyO1mteS%2BFQcRPeln%2FGd09DzBbMU8uYS17xUuAbl07TMGPbjvLv4ninAICO&X-Amz-Signature=838aea3ad4f429750703017f3685d07857135d3ce7a4d071e9fa2e0b507e840a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
