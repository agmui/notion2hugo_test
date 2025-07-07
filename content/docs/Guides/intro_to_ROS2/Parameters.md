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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7O6WTAJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIF56M9WMi1yYEqpt1c4OjpOFq5Zm8azsffDg95uN490aAiAvkLy1GlcTEQ32QX%2F3tc8gO1WdPwb%2Bm9pBBDB4hlseSCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMLLRt9Op5Gyo4AtbYKtwD0KRLA9%2BTuIDP2U%2F0G4lf01euDHgGhzLYwDlI35XOW7sPIT67oitR7yA2OhL1q2W0jTOJzbtVrWaahlHjl7dH%2Bvr7EXbYnfqFBKDL6cj85ybNx0m%2FFD3vudWqTVrNgv65LVU2NzLAlAq9tG6SeXlSfDJqAAbzn0aoSw5En5asSWTNaJvVM4Z0USFFwl2Og1PwpZx%2F85mR6V5zaP8Ot09Cdzr2Bo%2BoQ5Bpoh7wD9zaACoCgGxak75lvXdxXxJJbgHN2YuNjvMH9YD6K2DEnsQgim3KI3pRoSkPRxyS6mKsSTYCF1kBs66TJIwavs4NSg4xQTJEgPqLnuiu%2FwnkPhWvVH2vvxsDIU5ionQGR5Vedx8Wx1KSSGcHBLXtPPyjLczuhnLkOcplACgJnMD7CaCsn8q2dp%2B6ha3DCUMW%2BYSsMhHvVhN1EYHZqyZGOEibDz4syUqs6pcvE5TD7oYJ5MbHvNyAN8dDuyzdG49%2F2oLPhbZwQPNrCwCIIas4dnrwnELLDJoVKOvlSj9Gdzf56RODu5XUFD%2BGPhqa4MRv2TC3BekDejUwEouCpcTY7KpeUO06%2FnTEAiJnw1eUkRoUps%2FS7otr4sLiPKgtO4ecjR89ENil7QNFqMuS30KD3P0wpa2twwY6pgEHcbRTwfpCt%2F8nE1g2ocnODtTpk9rTaA66tYf%2BBJsdG%2BjngnJE7CYMDxKelT79fXxgdHXNE6QYDDPugJtGQSkyPm8qrMSg04cLOXgMRBTj5NExPfRZGvgwmwxvYncWUFXUcv%2Fipl7fMRbHUYq1uLDQrvu7NI3Ejm8hUpguSSu%2BHB5Ji%2BF4pFAjUkaQm185j2gDId9pUPMx7c12nTzmx9PcNn09RVxq&X-Amz-Signature=acbacf5a1de61669f1a26be369de09922d8b068be72d9d8b2d07921a25f8a38a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
