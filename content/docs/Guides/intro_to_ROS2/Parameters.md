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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQIEXYRM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV467IXmORiPOcuvp3JV9SDH1uljUOpBxSGGWn25JQ0wIhALftpnQiQRnt%2BBVDd1OrUkDl2f7EPNsaemDGtwEaYPxMKv8DCC0QABoMNjM3NDIzMTgzODA1IgyNnWH%2Fipq9gsodxYMq3AORa5hinbdAwKKShUXmEsVeDmjPf5sVD7tr5fkft1buxLtOnr5drlHVz1WmCN2DtUkfjYHpaFxU7UusRLyJ%2B8yz3U21bz5BwgGmTsL6P8nwiLzU2dg5AaxjiJZiHTwlREkhShSsDF21Tu9zJE7sUrSXLA5kWDc7qpDVzAwcdCKqCqpgxOsXcMj5JCv%2F8mFPk0cVhlvBZPqOlTHOM22uK3OUI6ssgOAEfuBscQ1i5y%2FNsbPSBBBCCsau0WsmE0Lnd25XLwtBVwOvinK5KsnyZfSQAIdL5YoBD8Ojz98sUP3VkEvXI40aGGFqPGG1VQVTtQjR9Piv7sN1Xor46gLzWxxajxPygqM%2BCcxZBISqkIOk96E6%2BenMu8ZgnocDnoLZgTuYvF1WtwSt6OOZ%2B5MI7cMbdWWbi5YR46AF9jZu3xSr3QS3l%2FRDoxE5q8DVjEuiBVagesRA6Dg9SxqvozpgnYV%2FF1ztHmjPZoHHInGyFWG0S7bZo5Y2s4jzvorycOfT9pdIIZbQkMfIrIMbiSsf8Z5veT3lcnZK3BePeyUiEeToAZFjli2q0VIM%2BKwlMXQkkWT1G1acv%2Blk4jpEQMOSMDUSRFRDLpUW7F4rs78sRsS4CfSZrL%2BQvL2VCx1v3TCOkaa%2BBjqkAQ0iq6EN5NKwvYW8dFccyLlUdp3%2Bvms8CYHNmTqRt0894Zm%2FDNntJEmwjYwfr2atbZP3NalMw51Vmwdz2OpwQmhcMOizC9eRbVysnz3%2BEV4ejeoZsPc1HVHQc2hCbO7t50v1BwaPKY5VDkVcZyGqDusr9ahnz5XM%2F0GVWTwvm3wgEmT3UmMjWW0XSQ1EiS93j0Jf%2B5EeDBl778yXUSgXaagKy%2FFU&X-Amz-Signature=ef221e955491337b5a642baccff836050dac3fe2e96b4b1abcbad4d4abb0e302&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
