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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSBF2V4S%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICvnK2BmdUXcMQCpyfJRMv%2FNoS4FpFYdZwLofcCz8Y5cAiEArVO7Y%2BJne1q7DwOJW6ToGoHoGW%2FcG1xoUvunyjry5xIqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOn5LJo1Dunck2ZIVSrcA4ID2Xa5lvKHRHq9wvFfXiKzMvcUv9bmIulW%2B8iiAXlME4MsDRu3E13K07k1rwR2SSWQkfY2GU09yzy3JduHWOEBMg8%2FuqiWzfPCi528q6CN3LPpGxzWShRtArp6rFOrb571Jzo3kCAgzGAlBU5qhnaJ3buT6i0QwZ%2BO%2BEn8EyLtrAPD%2Fg4nvq3Lq5Fz6lP96fNnhHEdFzLX4STTTrMX4wTIwVYziKJYWCwPDJB4h%2B1R57I7ysNwFm1NK4JEHCKqKvHSg1IK7so8Wto8QIQGKeThN2TpAgljWOZV94I1HGDAV7UGkWFeCrD3HayY8I2zZTBT39c3BphbwP5iapRsXfenVUqF%2Fe1R%2B7Ox73w%2BzzkLRr27DgDfkPkWAXSsNaq9Ju1RG28bIbEoL7zBCR8X%2F2CSL2XoZGK%2BgnL8pdHzhAIU5xmfrh9Hl95K74r7esP4JRpSvFvtZUQE6F4CNYy36%2FWTJ95BQm3%2FtPKxeP5w2%2FaGmZ%2FyVtXPjQKvJhIv47qEjPq0gaUtQvRD0D55K5bRpetOBF8oQDmHzCOkF%2BpD89XX0Mo6AWwIRuenVGSAhQTWvXdhZz1JTcOA9klV2j3d9Tx0Mc9GpHZJpBfyXtCgtAqvI%2B8plUye72Y2GBjfMPnqlMAGOqUBx2rPzD2p%2F1msuDWOtooI7gvKMvGlidxao%2BxRVgd%2BjDQMctrbeC0AKX2fEqcVGKc%2B6Xhn3AYyXUWGPLi6nRGkMdVKntut3k5EwvjxASrgHderW3NVf87vlvOwqTBxZ%2FOvQXD8BPACeyI6iWBhG7G%2FLEkOgBbXpPl%2BjY86Naq3DYwzsqEb%2BRI9M0wuNxAweRWLTugYhNR6reLuji6GdxtR5mW9Mx4V&X-Amz-Signature=0f8e6ce2b1bdbe6f26a67521744bd7971164a8ea8c7fddccdeb9a132067d3c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
