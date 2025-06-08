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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWDLNTB7%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeIo1uKtB4zXEtOUZBL%2F3EOm8z5y6TFbeQ6n5mlBipuAiEA8UpNcXbpZTcmQFDfYpL10RDjQtpEY2gqumUFEhJBEX8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXa7IPW%2BU9ga%2BBiBircA9XguIMBJXzTij7%2FeQBwjcgSmkVbV8dG3wnf5LAJyJhy1eigQyCOz0ysCGbo87fQb4cyajMNgQXTvPFN8C%2Bz1lE%2B7pP4i%2BE2WK4hH6T7C3cBv849YRPQLkUbbjcnhACXztE%2FTR%2FOcv7u7VKoVTjyTKAnso%2Fn9DRw7sbPGSYJv3nHnlfrFT7u5xtpOkH1oiZ7mwzubTStVQ4RFdZdD97w%2Bb23qWU2sLB8AhX6ikbngXZIGG%2BKmvVpicTmOhAl0HCUuPZJNmBlgzFGFxPl5A0PJmpStp%2FvIgS4r0LqAoK6tbT0XN3mXsbImE4BhEGp5rOSbq96%2FFD5f%2FG6YtJvosdqOEm1oL0O9R0mhAC82ivWkjBfFCZoqE%2BzYa2Wpq4pt6PP%2FN6qY11FMlbTEeDHPgLBj5kdGVvGIDDuxfRPMdrF%2FGYORlrWWl%2BDNVX6RRlQKMm8diDgKOllhJdUHOgnVbgt5kIl27Y4%2Bi0FpKPK1X2otnNROzJQRqVq1935w0gRWNFIZEaQuCYp1CxHhOmIeMnNBmhaohauoJOHa2PiwcXI2CnlW%2BOvNxoAMnEYZtV7wbrqsYAJGAxM7%2Bs28XhZ6myg68Jld9DwAeB5J3ApFYSKcHHzWxPNS25kr%2Bhhije%2BMJ3il8IGOqUBp%2FcGZpKyc5RON0tVKx4z3DWOaC%2BtnDWwdtv5j5g4IvrS%2FWtoE%2Fngf11flxjz3s8CUzxbhilO68%2Fvok5udr7FC7u3Rb%2FH56%2FaOE51N7ACxaobAijhFJjEK1OMAIK5JFiqi%2F%2FjvmCKmPWpnHkBcR5LjIG3wGjEAdoKJdUsQgg5OIqE830%2FN%2BCAD3kq0jRfScenSugZf5zIV7BzmrMGfUXmcx6szunK&X-Amz-Signature=c2f2beccbc17cf1564c65faa8be5008a57e8c68a42449c48c759ab5d23268793&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
