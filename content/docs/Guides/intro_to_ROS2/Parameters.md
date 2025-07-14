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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXB7PAE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDUDv50BC5%2FjEfsq3LeIL9MhORGO%2B7uc6O%2FBnNXyrkSbwIhAJSsEsEFxmyRmZ%2FlUcz1hlrzQziR5sEk6HxiFX3FzXkkKv8DCCcQABoMNjM3NDIzMTgzODA1IgyX5PBkTfiSgZVHvOsq3AOAViEvyGrhsJMRGmxouMPyYiqxb1RQwUSxZbIioftvanR35yUhWJlgJdqo%2BDJxAi4MTrFtWtw9sIOZqelMKjdSikrKN5nPuELBQVrUObLqMuEnO79Io2BkPs72vQNkz4CLV2gphkbxWp4eQOG7yLJ%2FqvSXV9yumLhVnML2LGBxZ8kIpdynTQ76U91Q1IhB05s2k5eE8eNHx83ZV9obKdNqI96hjqzOtZaFRPPxUrYb%2FvDClg%2FdL0j6tnNbeua5J6vEB3Y9Jhn%2FG3CGy65Ei2WheTbidhrpG0H4bM6si1SZfW1WPS6mi6qchnCTBYznDdgmGdYGQZwIGLJNqf35vzIjIc63IQ%2Bp%2FoTHYTMoe8oHsva64zN11kf%2Bly97u1Rw%2BepBCueiLAGqlJlMbRMKOUQ7LzdpxzFhlvVB3sJl5%2BfbCNk8H0UNGrk4Rtm4mvJPZKJT%2Ffibiv%2B6QZmvP82mikciw7uCyopTVX%2Fdt8%2BKNZxQKbxJcZyJPH2AdvhazGIyD54bMOTbr6hSWALIwj10cVbYiy0FIM6Brmx8M78Xj1VxLKBPuSoCe%2BEALTlE%2FO%2FJTxKJyf%2F8bxQ53to%2BNbfPP4ri9XCLkcSpQyu4NOlyH6xB2NUOExsR%2B%2FTROT8OGjDwsNLDBjqkAf%2BWUXwEOhW2RPgP7P5FFxCn1%2B6BhRL3nw6cXZiY%2BZxVAloAJDig2sEDe61DhLf4CU%2BoFuWjOaO9ao5xGHQIUW9RAjP63wpNLEI9Zi85AeMYW58OPjC3iousB4SvT5qjcncTfgDiUhPFhHovOeIIp%2FAQGTMiKucOIQqSIlhhZ1QKKA%2BvkxHBd4vLuTa%2F6mK9hZTDsARwDNUesNVFvQJiRL56YrG8&X-Amz-Signature=c04d90986be1b58239d0e4173d059eabd196bfbae61f599f35c31fa0b953ab21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
