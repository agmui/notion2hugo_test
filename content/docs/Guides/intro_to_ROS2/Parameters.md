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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFBFDFHP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCICNDpphPkqO4bs2bjuYC2F5uUIOdOgK%2BW4p1TPMZRi46AiAd9%2BDiSjZZMVgMeU6MA7bd2mvYKH5EZd3RezPkK02fayr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMb2xN4S5XN4mxO%2Fr3KtwDirUui%2FftWGqtmX1kWQ2rGA%2BH0Lc722j0dbBiXvJgxYwQNswPwzAk5PqznRoDFE43oPQ9QlC3f9SeLoZ3X52EJz%2Bf8y4suNbmRFhKsVTBAuUI7wDyh3D5Xk4on7FvaJHFCfiTa2H72%2BqnmLVdaScSFuLiRRclg%2Fp3hDTaEm7ORL1tAjFOyx1Q1ukOmxg1QzSw%2BwiJIRshYhXRav0gKGSz4nmcTDu8mdTeuAFZffe1bAO7mEvqjrkwuKYNA9I%2FGUcC5cI%2FLzJdorUNQxrrPwjADDiRYiteot1F%2BXnBUjzRdiVmzzm5hdax9kLwtEnPlUFlzexeHAIChyzAxYjhn4pM1aeO95q%2B%2FWsaUIlAOzuc82%2Fi%2BH9hNLXm2o3tI%2BTrIUZgzTajL04BS08SEpJX3X4s6g9m0eRfzVDBtPhwRR4IYDPUm8W%2B6BUwXz%2BPyVgamhQ5ItnsVxsv5aVTrUXDeNgVXvqyY5BrWOn4bfRIRN2MpyNapmeL4E%2FfGagGR0Yj4UqtoeFgyDfoMGPkykykkfnuMqxsQI4t3SOUd74qKF3OpNqG9ngCZVeY13hHE0jY%2FrvoJl%2FvaJr78R%2Begl2a0phQYfLlWTvCOpJOtQmkP6d0qkdc68h1xPEUToALh04wzf%2BsvgY6pgHbJZ6Weub%2Br0bPzgXeeLceGRqKCkFo6A%2FN7lkSWXn7q0bC5%2FJr1hispWjhrh9KqQ7ToDy7obt9RYt98npfyXUvRmOMgNTSd8Aq0gXx4VfjqycAw%2B96hJpunIxf98pmo5PxnCcNTxCTJN0CsKuO5WP3tZ%2FU3q40kf8jQW5uiJpZ5rIFuy4HsdhR4TBc0vlTtgUXFx50NGmQmVVpXqk6dprloX8TCGWe&X-Amz-Signature=4588bf28a83728808be7b123d4b2e354f6125ef241bf507a32e3f219d439036f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
