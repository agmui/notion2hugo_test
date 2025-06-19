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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYH5VWJC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCOi7m650GJw4Q5yy34W8VZX6Zud7jbJ4pXzLmYR2I4wIgJfv0c9uDZ7zSga6tBOOvKhXOjKgVbOqHEVf8qeNrkMMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtr%2F7YrZ3Ka57jJLircA57unzvyPXTJTboc2ISVr7nZfWZWgdYIoB5N47lNhToLoZbudWyvXpFhLo4pNFqjc7%2B8MrPyys%2BsdLZTNpGtBPoR%2Fci5NVCvaPSrr8yxs0OZPoMfUrd9yr0NgJ7Ikx9yjb7ZcgeXnyC7t7CATXzDvl31fYTn8k00ZzR9ozcaVGR5ehr8D4%2FOxCbitgJeH%2FWGA1tNUToxFiQZR7qcfBrB0s5%2FkgpSwrvWiPq111zt42eJa0wdkzT9M9MnvhqRkkSmC58TM2jQZ20rITsb%2B9RuvoD1VQ14hdRKSCyjh3tLNi790jygHLBbGiAbGN%2BxhiG%2FPwakq7ooZrsCR%2BxggYMd9f3sQ2cNsoCyLaB7gqqfiv%2FaNlIu8ZjY4Tfql7A2dWrAyDMVoi%2Fg47vYmyP5z6ksANsZ0KuRTtE3YGZjLHAVXdK7b%2FH7PZT6mfg2WXYKBwJTSHQ7qgnRKr3LriTizNx%2BanX3ZBgJ06x%2F6LwH%2BnT3WgAYZBl03F55NFDyouAexZR5P8i%2F12E%2FGWUpXaJ5BhbyH0Ur%2BOELIStA0VzdAS1FWrQylbjuh4B2ffAS4wZbXUCvQiNryvNBZFpN4zsR64Kie3tBi0%2B22cHSy1s6D%2BkraNUL4PSH4A7RkbOOD9d2MP2gzcIGOqUBBXHscgLX7PtFC2T18nj%2FU2FPmvNBv9S06iGcmIOqx8txBm13%2BS6s15cHkOl%2BNVX6E0vbsHnMXPA5NYoTKZFuKNGtfzHcmjNrV06BwpJxGQLbiqgVoS9ylJMADtjHlFQ78atd8vq%2F899h1ozcMbFCIAencnIafgohfKUhf2Cl0wh8SkZknskrxVANJ5vs6ijnRKPbmVV5hJtIe3mKWpXbUVCXjpkq&X-Amz-Signature=54d305637735d7140bc6905658b324e916134249c0a5eb541e7d97d73ee8a62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
