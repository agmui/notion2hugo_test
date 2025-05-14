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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQRTV7P%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCoRMWKKp1SollTRMpeAAjDAzckr6mZTKICY1SUBotLggIgay%2B9sQ204kC1xTwji4CVgNaK5tNNNuecZI%2FHTnvI96QqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI0k1IGeZs9uKcEeSrcA91Uipg8NM59F2gF7CoZihG3%2BHCRxXK4fEtjs0iQFB7teZsMnRp8vkU1Jb4KAgUKOhoNJb7Wi83SkhFDcfwWlJGHdQdszUvsPZhYg8FouER03MWtfM8eAXSGcS9J2cRu1f%2BIGJvEDuAQPyzpPU9SbsX00%2FMJG9FTtcU4K2KP%2BL4rlRwzeKwbfTpNbByfboS9ZtoVvPbVK069ugzKcx24FHqwxpn5FqSpnp2kKkVG%2F23Rw9KKi3Apl6txcYzyX57y8rvNvVe0uk61WCi9dnh6bwzU6uvvX3%2F%2Ftab8R43vN2Qp5ZDxO7jGWBUBRrfX%2FuNDZRlekbQwhO8zzeKJoQVWyL0lXQQyMqGu3CEGtfrp6sqEJMHXcRZwNyO%2By92bvAQYodokndlNwkxfPb9iXAMr3nxSGYLGAY8W%2FHHLuGKvAcC7riPMPQ%2FEc%2FRoERcCADul0ukkNqlDwh26%2FY81PpgdQ%2F%2FqLlPMzNtX%2Fx2vqyCZHU30mkH0MPMkv2il8osc5I29Xn11qeWkMGsVygGJOuVNtcSRHstMRGqhgp5Z13Wr0S8THOlapmYwIyYLkoRgtUgNI462XG1SgKUk3gmGaQGPY3dzuenlKd30bOsJOWe2A%2BL4t%2FlD%2F03zsMLB0KCkMK2%2Fj8EGOqUBW2P54JWm2vekJQHTzsQLWDKIFzYMZg%2BW2wYoL7k4NTPUJ0yE4yrLMuoCI3dqw3XKKk0fFfKn9HBOMmjbxB%2Bn9fCwgidFZw%2FnAa36hTR2Oip3ZufTdYLgkewLtHlUAiscf8hlJRAtrdPphzKsv3E9paMXhZaeNdq6VchQaZfVtme%2FkO%2FiSBGO6FQ0qjPA360REOmjXgVDdwXt3GQnbLGkRNYUtL1W&X-Amz-Signature=1837730ee83e352677fca8264fd4f4d346a38c72dc756d1161ed3392bde72afe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
