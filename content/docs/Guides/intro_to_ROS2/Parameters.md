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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64ZC2VW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkOP30SrvJ6kPU9mpo%2FrNsmWJopGvYl4B%2FU300YiIbTAiAfqswNAVHyM1N7fnlaaUKFPufH2rFtVSKIT1gv3G1RXCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMh%2BSVEJBKIfkUMUXMKtwDMY%2BkGPLagipuwMoH8z4FlzVBISq4nezrkuUpUKC55NCxQ%2FHdmPTWuitvNgqjVaoiNQvyRtSIo9tllAYx0yJt0B8indr8EEE1AF760sRkAUR%2F%2FI9%2BJ6bQnoeQI%2FcPFCxr1Aw9FfuMtVZTlbP3My44PcPY8bq8zXpPyuf72VREUeXXplmgUjS6UR8460g1gtEkeahmzlIP%2FVwxTzLVo8UAK0JmKgWI8sybFOm%2Fiz2e%2BlZTPhWgE4Zg6ptPRfagmlhC%2FveQR8dthncL9mGgzgNRH6Yta2tDILdQXPYyeTmDrTbscKxjwlKJ9fLbIwPDQeUIxcNVzFTlMaoPPMoH6rbkDsxq%2BCCe7xvnD2js%2B8DwghfYtnCxP7a3Ab0D5cK0KGaY335WgptbVE7zNmdAgnas5gP9CCybUED%2FKsPAeVwMoyow2vJTUEgwlGOl35Oy8Nrws8sUkYs7YDg45wzwKJCX42ap4M8%2B1Jid%2B49o8dQcgGaVGjwaXWmS6zxu2lKQp0jZp3ONCKH9U6DfGhf17qIckuRQjcwAzcLKdAAyIujNDlyKgfCnzwek6cLcJJ6OLF%2F0rCMX%2F3oadSGzjfjh97ufp8jf59aFAEOK7T9I65ze7jLFW1DUdZraI0AoCF8wnpHewQY6pgHzf4uXkRu3HtMRqetGZa49CR9ZHdnFKFmoWkjmS5qKalSLQNj9s%2Bl5BUsPWkuZrz2KGsC%2BJQEWXwudqD12VNfKSVrGECOmUqS%2BuIa79ErOTOvq9fCKYgmZZS%2Ftk7EGl7VRvTs5OcF%2FuYkNFhPHqJ59iqH5U2ql5I7h0sPiuB48fEVRbdQ2sgHtHlmwKrlcOy433c6uXBoKXoi0FFxAcxd6BnAQRFeq&X-Amz-Signature=76fe0373719dec96b7185f798d73f231c45097a0c977a83850265d12313bf442&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
