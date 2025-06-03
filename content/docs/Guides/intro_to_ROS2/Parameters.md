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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSGIWBT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDl6GWB%2F6bRo8qSrNX%2BDPW2CEuyjuXR3GuoKcjvzTYl8gIgGxAw3CXBK8AZFTK%2Fm9eHHzfNtm0XyfXPGejwEGYXkQoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJmZLMOJrscX%2FYv7lyrcA4faMO1NOK8fLwwdxpkR152Vwz0mRNZL0DWe%2FeK%2Fatg31%2Bz2MssdoiUXrYXgQi357WyRCGNJMEVBmi6w4PjCUmAo2WLuot2wnT77JynI4gez1eQZuQubRy3a0hxWADSrE7mziIMGIzTqcWaczpqPc2ZTw0UIqD9h7YVwFGg6nE5Ivpr89XKkhKHmIervfLA%2Fwh5Ew73aHCRS4p9fGFb7bhYuSmx4ggI8s2G6kA42e5wZPHtc5Nx0dBP5akah9cwFQO%2FC2AXlIEmMHw04%2FLi1B9qmbLgCa1IOzkIx%2FxcmHs3HqalmGreHTLr83G4ae8mQ%2FQbCYYHdqK2NHkyTPLrLX%2B3yaWan3BheP6JoSVoxKkLwEa9DOuk8Mf%2FlaE5nMbzypRs6ANvmYGO811ODVE2%2BRD6iRA2ba9MZ8jjxak%2Bzv2Ak6FSeNBfkSOnNNt3iMb50YEYcMXWz68R%2FCLSwxqe8b1fRxutii0oJqqA475Yl2RNxWTS7uBKUSSTv6LHfowoJFJB6ZWhycd8p4m6FLSKQLImW5Srm0FwReSXAQqhts6lMOp9x%2FUfkceWNm7y8j9bO18v0U5daQ%2B4k7ePSl93dMM6W8BzilxsFI2K2STMESJ%2Bzl0RAKBozonZkfOEQMI%2FF%2BsEGOqUBJFQQGRhZcinwixNM4obD9awvx%2FEzUf31EbJFHZRSDUwXJfn1%2Fi3bANlXkTh7uqgHdItHbEXnCDgDSt%2BU4seyLy4dP9iAswt2Ke%2FOnXcAJiDgYIXHY%2BpH0hbsrJy1b3VucxBRzHZI%2BbXzPc6pQqqWkGD7PYqlJ%2BXA8T7LFpRvaY20K12zrRWdpWeYP0g632nZM5SIKhoOp6apYn9RBOG%2BqYteWUfg&X-Amz-Signature=871db3972248784ea9f53ea22d1021b17cca869bf34ad94b7cd8040ff42b81c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
