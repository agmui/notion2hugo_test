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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONQMGND%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICuv438MMPWxx5mYaLP0J8092Ey0I6OCyVPASmFTeOmqAiBzufveuiAAtIIAy%2FLri%2B%2FsdPV8qSGNrsN13Dm74YboNSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMuln3uOrky7JQ05r4KtwDoQhkSxAMwICUwsU%2BfaCaZ2tO%2FvVx6aKhi0EOKBENFsZQeMDTLsQVvOj5LeIvrEDiyksQh%2F9OTFtk4El11YdLdBHnKP31hOZFHz2omPoidpzYmWK%2BmAsTAA3kU1je77OF9TOor5Y5SM5NYFvELjzdu%2FPA8PMX2Sdr%2BYMltxSLCOK6GLLUC6OUEvbKJXcfgAGcerR5jOadjr1JJjtYuBf8Qk%2FfqLK4tiwAf2AiIbXwPmOZ%2B2CihQDtoormuTkIcKYLr38kRI1NV1FmY03eQVXNRbmbLVGn4Yi4BISqcBzgbPbNKxKBwmBDPLYNpD6pHc%2BKhM2lM4JuOHzpjBShhAiZA4V3v04Ezk%2F8%2FwG3prnd4gQH84COeeKuToEmLLPtVVR0NExnRB0o0ye9%2FWs6FxF8kZ961F9D92eUpTG%2BYHxo%2BnyS5GRFjnKACWyJ4serfLUi9gSQI79VULXtrkk54%2FxhgFXWtos29WGs0%2BeC%2BV6w4%2FWQS5vrGVTIXDR%2FC5BATSz8GDxSHdhtvF7RdtnVokmUX27tb8seF8j%2FU2h32e03IWXYgpxcVey1eWix46NqWOa%2FPzvgHzii6a3DrIER%2BebKNoFmiT6FjXLlQRd54Ar6a%2FqizbABGZruqG3LQ6wwjbu2vgY6pgH6LUFlR1SVNuEWcL76sg3sMQLmdxEQ%2BoxAvTWlpF1ht1YtmNe14LAX28rd%2BybWnLa55B6fz7AzFRmhDUoZDDvB5Dx1yoIrXa5ggFZFccd3NiJXh9dEXJCgBz3GzELU33Yvmz4DBfifPoIktjfUGIIuE4ZMCne4h1bw%2B%2BwRXwySIxfx%2FCgKzDY8dUT87qm33IpWkLnQwmJUdAUwZIQyMRNjNTH1KoZg&X-Amz-Signature=8acfa724ef43e057b9f94b11ed2f93e6d6c27fc99a487000327cf453995bf0ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
