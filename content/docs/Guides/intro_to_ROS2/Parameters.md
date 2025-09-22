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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJWZMHPL%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1s%2F1OkWccQCRq4NSW52GwWRdbifCLfA3hbfJyZEcbqAIhALKgooTR0tpfuutGTmx2LF2SRsPib9gv3fWdD3TLxwTvKv8DCCIQABoMNjM3NDIzMTgzODA1IgxoGxk9WXp07qE7Uz0q3APM0aty6am6LL2Tz%2FtkLqgNt%2Fu8HbSn5w0SZuc1a0MwX%2FTgt8OmnS4VE%2FbOK051kuy7nMiGHFBiG%2ByhuYzQlVqvS%2BUXAoxD8WPGaoNfLDuiabSj2nyAWnSa1rBWx0Qh2J%2F8NWgRtiqyjHMDuDHL%2FJ53Nsaw4iJ02vJhvWoHW7j5n8YBB23UxzdeV5xO1pqf7E4BklrzbyKtAook7l5jU2XW9zKsCrKDvqHMQQ6zLt7Pl5vrVbKFmjdrZ14cO9HItQbPGTD53HZIZkec193k3Bi78HQ35puQPKjW%2FuvRtReq035eVFcx%2FXcx5Iu16Dxh1wnGquMX0bsFi0lPXQmWh%2F4WFJG1Yhj5eY6d2I1ZBF%2F%2Bu%2B9yxK%2BWaYM4xewPUxsqH3RJYRN62LRH3bX3ZTqmI3OLdyRwf1chPO7UxuBjbp5xVlDS7OzHnlpb55Yrz3tSzwU%2BFRWvfdm%2Fhjwly5y4FhOqpDIorq2%2FD0txWlc3p5FfSQEfZT3No9HEaC1a7b2utwJTxQvJ2arxZVEtBiYa%2F8T20wGJW5%2B5o1dLwEx1zqRTrKsTo%2FpOSqJ%2FuzoUblF2Ql%2BEcytb5PuyBEN%2FO3P%2BJJl45CeEoCh5KLRvng7SAnfb6fedWMOSd3PBlAS6IzD5xcLGBjqkAXuJR33RJ30aFeWjLx5SNeifhcVjGj0Wm3gohdmDCKgVK%2FJO7u6ofk%2BAfaE%2Badhjq30S4WF1Wz5u35MTELtiNV1OKzI%2BFN9D2H95Hi%2BM6Oo9OwYSgzQUbEicuw0TACXVo%2FVp0Dq10dJfuUyO3ZnUBU5Tw0UkhWp5TkYXQhU%2Ff1msQRT5%2Fl6FFNVDgeo45KgsyEcNmZp469MVpZn%2BuQ7gyJo%2FYskD&X-Amz-Signature=890ffd9eddf826cbdff8f547518a1364097f0958fad799883512467f9ac4c76d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
