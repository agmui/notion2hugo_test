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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636CGN7HU%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl40WRNLH4d7SeI5rXM7MUpBZbhFVX1xS%2B9t5PG55SngIgO%2B65fd0MbLhgHPM3M62Y3v1pRifac4DJFL6cqxbOUOwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCuqEEFXwi1Fg9r9WyrcA3iX5FA%2BYEFMfxQD63MdB3E0HsuELiXrhh3Wub1sdOoJJCdnBxDLerqFrLOZejd4sLVjtW%2FBheLCsyCSYh46PW7y8FOd1DYBs67m1vJzH%2FxXRjPrfqtHDr%2FbYemyXm%2FwovJL8ad%2BO%2BpTY%2FE2wWdiuxTO3AGvJo5Zt8hGpRygsj%2BN%2FktGAXRvNtsRQj4oVDTUnDoAnlbXql8YiytLa7P5EPuvytoCD%2Bcv%2F6T5UgaxO4NMap9pzRbQbXtT2dpGELTJoTIM%2FqqHDku6Im%2FK3ogjpv%2FkAqNuR9oNrVDQ%2BfTfcltwhiH%2B7pEnOcTNAbjGIC5hQHQXRZv0%2FydxIEmXx7U11an2RR0dF90%2FHG0pVEh7R%2FhJw6YSYgc0iGbPnNy4YmwHanHZtSvw5Zmv%2FkWYuRXgYFCLoq6vUxEWn3KmPaieNuraT52DU3kEkvmxBjAHIom4m9PJMSOsRkASv01JcP2HYYbabOi8LhU4EMcJH%2BNK%2Br9R%2B3OsfRC4get4jLN6KbM1FRhji%2B8e%2FKkkiixJ%2Bxsx3vkmT%2BoGJ4ZX06nxvV5AlYGgAVEj86Ru%2BqB%2BQwSZxk8u0ZvNr46qATgbCbvASNEMq9xcqLv%2FgZlavSU4R3NGSHCxLqr05ulJL7tyNLouML3ewsIGOqUBYrwZS5zjz68%2FMxrBCG2GnW2pQ4amQKRMLOaog%2FEj%2FAhVS9wE08Qhzk%2BBSzcW1y%2BzBovnKXhZGx5kekdifrTTFBqXZnD5AUx27fVAbVOCFSfacQOup8EL4PplSs63QAiH8dH8oB%2FA8tIO46P3vF42%2BSaowUS%2FcNW%2FQNvEJe7olSVVcxu%2BgZINv4k6L4yGfi8KK3PmHS%2BPj6OqgwXinTfe9Vk5Uat3&X-Amz-Signature=380515005e59aca7cffbf06ca1a2ad52424b810ce83009c6913cea38b4520654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
