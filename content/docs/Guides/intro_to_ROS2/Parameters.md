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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOPIBT7G%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCwC1uU5MSkiP3R7lMY8CWetT%2Bf6bmAsYrdSTp5HpT2OQIgF9ZjfX7hujoGR6IQCIpOB1nGABhc8zmUL%2F2%2FkOyiDCsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkCg%2BDF9xzppcrnnyrcA%2FubClfZMn%2Bypmnk5kI5BjS7AlGnSNrZ4jcsC0%2B0bqJpWcl2NOWMDaUMdLRu0UimKZvg1rj8fl%2B%2FrEPNBuH2tCqJd3YF9hm6JHzJWqL7xUcWMybA%2F7A979%2FccuLhoT7bGYfkudgkvA6AwsjaZE7zq%2F7Ckhqw7xjjI%2B1q33JGYB1YnQWCbsnemiIZYBlWSTBWgK3Olsfsn1rAQdI8wpOpkTOjWOUolAkPYvTuEglwIdmthZApfgHnb7KH98yrMRIwYZWLtJftUwBSJv3RJShvmfeFzbCjGzozmsyZQZe0fSolsVcUZ4n2tCsFWVIWclhsTaXZg89E%2BGE6KraqTIXyNCRt83hQME2iPBvt2NAfMPDYaUOh8faSRzm9QZItHtFd5OeJ6r%2FJVhmcgmtEHTNASp6wzeDWai%2FRH0smrqtmJi7uxjDnlqg1xEhuYD%2B5SM%2FJg1YEQ5kzgwD%2F%2FC8UKBSqoCGdlyTkb1itYkWF9YvRfzb5nA1TR62PJ7kwN%2BvJ00Ikjsgi%2Buzprw%2FfNOLPcrmTpBgTDcTgWybRz%2Fw7qXITbiVpFd%2B5RA4RmEp8Wpzjie%2FJt%2FH82TjEiHExPW4HY4Qz8TA7j48gT1fEL3QWqbiJkRsZlLoZ%2FRv7PpneDANAMIa0xMgGOqUBqGEK77D8QiN5omEH%2FO2oCjru67G2guUFI9H8jJj4Q6w2R7kCBevnGqnp%2BFUfWUElhKR%2FiYD0znFf9MlwOWFxV57bUPG%2F0eHHb6%2Bhx61LFAHCLNuSpTw%2FJi4CrYonra0sWXfEH3uM3s45sG2QKrY%2FJHe0HkSmetgb%2BTxXU3Sn8BbMO5ATbYrbnHxKNPjZv%2F2VoaOa8HZfaP2lk1oZq12NT9ar6DN4&X-Amz-Signature=85ab8b9f54b57c84c294cc1a1d64b3d4fbae767574902d2997027dda758e28d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
