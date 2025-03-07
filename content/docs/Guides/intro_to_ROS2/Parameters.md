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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLNGZTMW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCCOYGYqWA1t8bRwRp%2FHg0SB%2FHaW7PNs0fOOL9skZnrdAIgDHX3fhHES6lASecUr2Odg27HzVYri4abVuUyoBCd9dQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDH0rzQQTmEc58ZoCKircA4GjDjjPO4VA%2FwIezBsBDCO4UeX%2BKcONDVc5iOakbsHaBxhuZSk07ihf%2FADeRE5N9VTcmrGHb7qCdASEFb4xsdXZLty6qLpek1vD8EzXtE71JwEhi9TXbXXs%2BCo6MPuXax3fEY59m1ILnKRMoybxQICkT029Gu%2F7YsxA%2BHE%2BusPM7ZGVs1%2BalVFuJ8b9wmr0fJQzZ7hfcD6huFAZUvmFcaQJZIJxeOtqusEUHNseW7thf4k%2FwQDJGLBhCXODBSQhSZlQ5xzOtcQoQ%2FowPcszhLlYActYP7KN0YfKFK6aMJ9B6Ng3Ay5cKNQRkqaTOOZ%2Fw6TzNCnsLVGY%2FWGMuwpleptRCIji%2BnPb6C6kTNBCcDbU0WcL7MM14StMs65TPzERdKbp3nWKCRR4bsPWOMihVZGsRc1eIpC11r3KoZj%2F0ULjIFBkYYs6lN4tAPXTG4UwZ9Ptiy8hyDsVOYfcCpNUISXlNXvsMTX3L30Ezko7noT4eKQ5eFU0inHQ3HTLcqBkmlbunEYXjraNVpF%2BjHCK34Ig5GCcMBICJ4geUfNc1Yeq3nX%2FGkDMeURDaIvLHf3ixZ2H%2FAFnFsF7pSSxclzS74rQJEruCcjV%2B6PcQRyN2UTIJX7B47V4WswhjUCQML%2FArL4GOqUBmVSvupwXZ1fS9Ram%2Fruvh7nLZvpmg2Dz233ak63lanb8LPaqaLbpA11ytzhbV%2Bd%2Beve%2FfqQQZb4QCdbCj3I8RlzSFo7BFcyCJliJsSlqPRYtmUQJLcjkE6MpYBZZvd4usuAeUry%2B%2FNG8Qm6db7dAxC%2FchKg%2BgqpSp1AsE9F1S2t1HvfmdlanbukFQcu0C9Rmo5MjaYP%2FUbvXd0qnBxMv%2BxFbP28I&X-Amz-Signature=a55899834cd625643eb10f5fb7546f942449c658f0a30138e77b933b3d3df852&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
