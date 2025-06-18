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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4NVC6W%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq5FC7xXdHwpmhCuejlWtmAtHXQ6rh2Ec2rftA2SRFfwIgeVoSJKP%2BCxiiOZIkhx572b%2FPgOgi1NwtUczCl0X9H2cqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcD2ewRFhqwQ2btmyrcA1ccXFZ1WxpiUUijRO4kCSubjgesOwB7AbHwWJVBh9PEvyRUpZeaYHOm6PctD6KeJmHl%2F3M69b1fbWjf6F%2FgHt7KereJsrBIPlwzP%2BY4%2FXkY0Qw2zoNSG%2BCKlgyxAzunULdspc4XBgvfh0fFskAR%2FXaCGvRIaktD6BeMyuDQBn%2BDrk22ZABxXwh%2FGevfrQBZ553P3XXRqhOfYiAf%2FdRqOn%2FxFTwFc7l6M2nO8f8DdveBMVvblRH1ciPxIhQ4K3dkUX7Nq%2Bcy5cJ4nFAe4VNWp711vEzwaTkhkxrWWFxMxIWbf30kRl71tTcyb5pElqP3I%2BiWquesugAkf%2FTjAf26zjYIHGZSuDBi0mbaGti4Ae55qbhTcnRhu%2FxvMszI8H2FjxOX3rcGsQJZEWfrX69vZskVHiiRM8ZFPifLMtip7LIRkFj02vEFb2BM9q%2Fu0veGwBluaJiFHwXc2%2B1AtgpepHrzcGuTRb8n1uAwGPQMlhuPsu71yVQmDwdcVSA6fWCPFV5UxQgU70g3iGVX0qTfn%2BiyjrwZr27jf0mBOZ8AYM%2FTwvKl7VJh7Ig7uKlHQORWgGhFW8f0KGgr3uT7rjxxN24nr9Svc3iUlMYwRr6%2BGjbI3C1kCfsbKOTkC0s0MKugyMIGOqUBTxCq407gXAB36gbpWQ%2Bkkg3OeRl67P2dCSUqaUcQS0awStT%2BNSnDicnMFz4Hqm9EAcOyHkfxsI14j%2FZ6R7sbZL2MakWrtXcDvAotqczJEvcV4Ksb%2F7M8Rv5tAOTDJ9GSHpUgnCMQAGcSsXKpbHoduZdiY0Bg5aizDLt3E0foaRgAleoKknt2bAxtQroi6CWL6CzAFx9weIAd3gHr2DQnA4YzAepj&X-Amz-Signature=1bbc4c52fe8aebdd28b4460006b61487e5088e01109328bc9d4042b156f084c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
