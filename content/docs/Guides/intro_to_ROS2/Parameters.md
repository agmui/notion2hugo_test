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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ5PUUO5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEzPVoEF8Wl0Cx9Ukb4eYR6LOeMFuwR%2FAV8PefvXCtyRAiEA1d%2Fsz5Lvp4RrGrJePWAj6R5U1bnOCEyGy3Ye1HlGZdkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMpYFk0Bblxxlao0JircA4X1kP5oCfLWfuyNz%2FgbUTtzjLCAghiW2X8hmKGkjs2FUhlwHVBoboU7PiTNiAWYivKeRHLAqUPI7TRNI6Xs6i0NYwNh%2Fm00KqpL7KeevrEttX8W67duqb6TesW%2FRlHrjuqEzijKb2J4uiAdi4trMXr6dv4xdEMhn%2F6zX1xRbGDxSTa2vAg2mTj636tltIC5MmGsanQJtRFrZi5FsUcB7Vf1GAaMoqWILdMux0Oq%2FwE5Pk4%2FmFOatI0R9an6UOWz96iqxi0gqfyBiJax9daDHroCOlaAIoorUTy0b%2Fmg6WdyWjHkFTNvDzky4P8Qe12FRLEVhpKvGrROfzl%2F%2FMS04BTWlAPvONUZk2vZrzggXQFPIzEPQBLUK5JyOaZ4JqrsGQhcEGENT5ECWAGe0aGPC1GO4v0sDc8trQP0ggLKMeUccuqC2wEYtTux81st38OqYgu7hbqNpSKAnH%2BdsKIxmJzc4uJS5Aa9BRhsar%2FnkIrM81Vx%2B7M9Rf0F8w5vyWw%2FjEGPUFxS3IPM35sElRuzX%2B4IkGBQq4wofLdJVZmVY5Fqg28ac5uO9khGvsTT86xQYZzq75OCd%2BUMu8Ucdpv5lxyLu4fv8ArIBdzCnjOA3xuoB6sYYwVhvio0rxQFMKWZgsUGOqUB3KhUpKeCKHC0Wl5p7%2BVmQQ2%2B28WfeXyR98L8POCd45CtsgewAKHPkEJSimq9t2YQFw5ZFfuKh9z2boWT%2BslJBw0UgZAu3oDiE9yq5mGUKw7rMJhZST2BOzAtrcibcJeOKUKYRz3YFVfiq%2BLsrXHOgmFesTVNmaq8n11jEY3sxPHDSmBXGLq0ebcvk58Mmga0FmuitmyqrjZMFRnnk%2FQ%2FkVs23lRA&X-Amz-Signature=64b27f87bfa7f3903a292e6ded67c33ad7d99c3cb41673eb07b9932716d41afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
