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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RVQILEZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR0DhWrP1aikl4Cp1dkHIkgcxOVQpwYsR1DUEqJ%2B%2F7FgIhAKrX3DwMzKpWS581CASESj%2BbeVZFfjSwfZSsCHlW6OHaKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZJELCHrT646k1PrAq3APe%2BVj%2FkNdEGX4eP0%2BOlDkWGDYTNiZi1TP9Xq0Ptp%2F3tYub%2FsBLlzPCbvLlykGZhd8E9bzqQaOwe%2BIp0wtuXBjzDBxZpQ%2B%2B7tm05LOBUne0mXfk%2Fl0aw5rT%2BTAMyu14%2BXHxplWr75DjgY3ZQ%2FvHmz1YnS2jsWDn2NEu4Q0zSZCtzJcx6L%2BOGcLgc%2FygsQheAtcvfXqYFYdxmMrF3uXC9g4w6W3kuot7cLR1c8vZwHY07nbV6CViGoF75HtqTsFn2HreJlCXRn1UD17LKCB0aX82OPtK5vIrnfzIY2W2USWKoQ8W8j719QkONPAIZLV0YZTRY7TCCk2D83lK4pNTCvTFF3W4hscNi3%2Fc6Mp4emGE%2BTHk2eSABSeh1LnkzAFd7WNlXnMw%2Fav%2BdFP4m18xdbozWRPloZzhdq3YqGwVtdqbID56YOOPqg9WPTK0QWG3zSFw1XwUv1NIhmvLhhhumJZJ9M0ia1pS3JOwPajTCxuowfgfBtzsNkpRSnti9BwVulOQ9BmoWC1CE3lH1EYPu5lwFnf%2B1vk3da0ZECpOGpkCSHO7G9SMV2uWHCu08PdNLnxH4d6pJ77%2FKIeU0PqV%2BkeBSIRRN6HsXX%2BlkkgtQDNrYCKFYMJMRuoiEWMJyDDWnLu%2FBjqkATkwJ2VIStV9cy2ospBCy7qnqdEekVnxTa3r5RNp2r9SrU0jyLmPHQTXpi024QNNy30ar6Pr72AMxgEw13kCIEEhaQ9MeB%2BuldF61RWp1CPKA4Im4dNg0lBXVM4zQOWPp3h3Cxs5ST9qKPNrv%2B9j5bMvmVC7DYQtlTh0gTPVKDLQkgexMLMbXPoerZLUWoTTLIvgADCk%2Bddial%2Fik0aD0zijqgit&X-Amz-Signature=d64eb58ad794c1e5ee5ba2418561989305faa92e8ae44ed31300e7eb3790d84a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
