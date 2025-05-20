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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSUGFUHX%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaoHtsi1fghi1pgMBWN5JP3l2o7PfPPGaVEyR6PNNZuAiEAty55d%2Bf5eHf8ecQiK%2BEapJDwvG7RCKMzk9UFvZAQ%2FDMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAIepHeiY%2BEJjwUhCrcA39tjIju0unO24DvPl4bjZ%2F6iKoskp8MWTdCZDOmiYt9CeKC2YnswBel0vPbEIyqhHG4QMHvoRAh6oDvnmCDLc0x80%2BcIU6IXURH4lWqdDbEcPLBItGdJhFdXh%2B1rOQt%2Fpc8by0rslvVz7B%2F2v1nxT0rAG9hG3oZRztHqaxHb0y1cOwes3hJrizSNGrC3tbz2fUvieNxIAhesWWgxWeXwucMSPc6IRqSq1rRhQR%2BjUE8jL2rXANP3Vv8KpiHZh6lMNC1vYMoeeTNe79n0AyjOjTzclK73o23UsTw2BbHHIOBTjL0yVzy5JVr3z6YwnCh5IowDUzUyaAKeKVq0A6%2B5M%2BM817nNq6lkSBFQ012YoAxnYq9Kk%2FqbGYpa3YTiuwZOvWypCGFqV7qaBIypz3B50sEHC2i6XhtaUvZwefNHve%2FFKBE7UDPNV3jlTChIkrlsx4qskK6OaeU9yPyNq0M7dUNVjgEb2nN%2Bv0DTEV9mNOpWP7uoOMet0znFhG258cPR%2BVvsqdLbL4skLjp1mVW%2B%2B9Lu6mYNPAqtMc0pXZeVo5KY%2BVmJNBdGUDkNCnimsjFrcnYgQtqC1%2Ba6qUg5KfzbhspI0OU7UNj%2Fm9ZT81BrEPFP1YiuTJpnqsgOs2hMKbLr8EGOqUBUqJ%2Bdfavzn30FYkgWBrmf2293aeHtJBPBzeigxalmVT6WzP1lxpfWotb5GuUtr7j7PBsuiztK3eojMHELu%2FsFYHMap3elO8BG760H1%2BfG6%2BGsZDzMr4MtMGa9YsRMvytdS%2FCSN57nYHljJjB%2BGyIgH%2B%2BjLFG4MnLTxnowZSHrbbfjpxDr%2BwU16QtfBbAVx4sacByf%2F2CKI%2BENBQ4zpjizoSWlywk&X-Amz-Signature=60053a644185868c65c0303d49a74d6e828770fee76aa969da28bf1387e8d07f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
