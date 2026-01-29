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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4XPUWU%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaJqnKiGrIWuW3PAW8GtSePfXDy8HjI%2F98jjIrqJtRjAiAXeIhbTOOWl05M%2FZcIEIRMBIeWn2eqNmArSQiwhAY3PSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMQUR9wUS8ABx2T80CKtwDVeth%2FKqNonCvssIbQxdsuiKKFmbhVFmOwZs2ylRAGz1g1lTuCMi%2FuLJr82DmUO2cCEnHIZDqng27oDczMCvVMVTm%2FkrXVlGptZLpMWE%2F%2FBGAvFrmt9U7g3QWvWfUp7NVTKmneBNQQWx6bzaBZN6HmVZDHQgAfHj2W61qwxptFVZGxwI3i%2F15M4qCzY57kbdvPFSp8LKGBfphSosUJc4XD4wB8gzDRtoA1RaZbvrW5%2FfHYXUlbBbotmZCan9dMgHle3rKpNjPf4G6jUa7s72lJtML9pL0CUhZvDKejU%2FKbtuosBs34wyeViUAnu2KXgDXgOm39mMOACSmzBN8GTzT2DPDPaUWHRi%2Bl%2Fjdthp2dHW1WZi6nmrNOSlwcexG9S1eA%2FvV%2FxITla1hBMCQo8j6XHAstg%2FJLpBRb9qztJf5sMPXBvB%2B0KwaVpxV92BBVGjucSeVixXn7keoU9kayiNnG9yUtUrbwEgrsLdasQpw%2Fg3q2cLoRkHrjHVgyMiB%2BHWFTnjwZvESDYhOeLlvgq3nO0nd0L0y%2F0hGOSBRVBEsReodfQWOOs9i38t%2FOLxi%2FAVGhd39v%2FUgVSWz%2FvYKKMF%2FfokeHTfSHWwKCEAReTXc%2BFeWluC%2B2NUMhXfavZowkPbqywY6pgGNE8Ucb0uAQm9Wm1lEcjMDr726xvLJBCc1vxXFr%2FpZZR4hGgiQlL7vJeIIKbKrUMhGEY1DhachOTwjq4U51CxIa25ZQmeZ9m66WNj1NGhtBL7wwSpNfm8oj%2FJ7Gw7QsRC7SaXdL0zerVSotKgthFRTwxXxIzk%2F3%2B4m3q0k9qkpGPUIBw9RJ4%2BVQjWzxZ8JXEHJPI%2FKvAUUGgllFJQ3Ikvx8Ln3bnMt&X-Amz-Signature=27a3dffc2c52e70792c4d9d004ce071db6344a69d2c2a20c7dbefc6a01f5df72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
