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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NEMHU2Q%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T004010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIGBWt%2BNwh8v15yhPENxkVn1MwDJeTHZy9QC4bxYs2qdZAiEA1R60REcvBOISYnsdkTudz4EuFM0sieC6WXTUeMBb7xMqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTWhcU0Z5NuSvFdiSrcA8rrjugkDxJJpCeQ8VFBmkis7pPtIVmsJHMeFRjf%2FGK9Xx%2Fxo1SCDxkeWyrVvi78pMOZ6eLtsCwxdJZNcdC84HdYLXgrH7sP3957blQ6Zt81uImVbgY1cwdbX%2F0%2F%2FFqfLCx5F45nrs9twoxM3%2B4fmiN1R61TejoRCmzSgOFAccgOQ%2BALrssB2eVoX7cJcWyHu1lxz2%2F2tbIk2gdsvKZXFbTLCej2qyBpS6LyihcsHsxPudr9iXJljIOubZdl7%2FrkIVZpvp%2FnSUhUWIopBHG%2B6TDhqV9pHHHaPiC5R655PTF1yHu0WjW8Wh3vGg623Q3ZcMCSoHcFm6xMHhc0bBFhG11nuIUmnt5pUeWY8TMSC3su5xxtNOPHxpDmvqZ6Gpebsog8kP%2BcECrsPxog2aqgoUmxxEW5S8ijrLwBBCElrSfNZik%2FWasyydJF8jMEA6XbMsNRXGEB%2FI4kJHNs12WApz6R09v0knGrC%2BbLFmnTzPN2LxjsCtTyY7wMlBRRNiq14bhhpKt0o1ZSesv5j3uQC1IgNLAdrewQsOGWk9ivZhz%2BBaWaqR20%2BnNtwm7qJgYIerQEroJ9B%2Fu%2FfUHfPfHMnlqzxe8zajB1YfcxOT8ds%2FU8nuPDi3Iplb8rn9nPMLD8pcAGOqUB8VkC2mncT8DMhrd3ro%2BXnbatPN7TuEKBi%2F4QI2WxPPtyR%2BickeWmWLnOelwfEsLFyXnAOwDyVHd2xJJWSRQjONYjAutBowxEEPX2qIRjReZuAW9dycaQd6m1hQ%2F4uDCYt8Wc%2BxQLPnSL7DMP%2Ftp84mYC4dFr%2BTHNNT0BG%2F9V3woVxRvTR4DERcUKifbKUvaNyL9z%2FA84qJBeESrjFFsFsxPFqKeD&X-Amz-Signature=ba4b80f2fdcd17e01c5581b0123fe7132990a808ce1cfc8ba69621a7873b5e9b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
