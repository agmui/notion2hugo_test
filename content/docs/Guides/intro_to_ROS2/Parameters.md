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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOLUOCPI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfXNib0%2Bxnx3hzsUjOQsVQ5UcCvU%2FJr5bRgeQtxk%2FpnAiEAtHjpw6RfKXdiTCv5yh1xng5AcL71M4PO7XVv6U5ClqQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BtE6XRCtCrTGXS7ircA6vZznx1HcZNYuMxGCQF6Bj%2FM%2BpJ6goy%2F76dcbSkxJ0RCA7gIbL87dD7xVtI8U5hdsxuJTexVnTKWgtUKPEoxYA5GkmWcHxoBBA%2FEcHlKtvIJGhLVVBbAHZFXspjS7WxdSS5MNd9J163fYb6tst3aDFlU6t8H%2BL5Yr%2BYRwIyH0cFTPIpZ6X2r4Mk%2BwOGyCB0l74Qf5muPieKlwGKX8M61S60TohnyT3x03vH3BDarM%2FaJqPfkATNMdzTEnIDr%2BfiJdUMkIifBY8vd5BTVOB4UE8VQ6IfwPnSQpTmosyknf%2FEdJRPxlvWksI8UeE69aVfW%2B53NI8gtmZfN1ehEJF1aNxnkClDqGFLiYpdSnWU%2F1RRELSg30YZEvScVcj9R1PmU4DsAW0bD31r7RubzSVG4WtMvw4YBWfRuKzGyB8mEv5erOvBH19Z8okddd4vco2ND1dlOwjCQE0fXGQj5wGxgiMaIlRBz2hfWB63fFuxKkfVh2EJxB%2BVAHd3%2BP7hhkIE1UHAuy8KMkD1CGNyfgWepQhJKKemMThH4h7FhVyheWRCwgzvtbIum8T9%2FgPUoO0bRSiuAEyODvjH%2BPAc8kblXptzKXuRKkfNxbGlHWTQHuH%2FUAeqqw9OZi34gQ3IMJm%2F4sQGOqUB45RbDc39L5ZOIgYDaQFWFMJqllIuyts1qNKUZDD2t%2F4wdGWHSwFwzNEYilhsxZ%2Fc8CI7rzBxCJ6RbdhKucJJ%2FcYBvxIZcOgQL%2FY9g2WnMyoQKQ1coC34UB5XLBx99ZyMEeIVRdaMXmh8TNtnMuKlT7NO7Tg%2FFtsguY20Mtxb%2B2xccwZN7J9xYVts2p68oL9gTfvnEa9OYdV%2BtN1iMYgZalAYKzpb&X-Amz-Signature=4cb303823c5bf9bbe3649bb5e6ce3344667d99f2f77d35e1265d3f6d8e51007f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
