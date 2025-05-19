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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOM4RG5W%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3INInKJ0PvtXjdtYe6B39U%2Fzq989JBmjCh18xj1URKwIgWRCKYHG17IgO5poPXfmJOFm7LbCl0dvyqDsLs8EAs0IqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6i%2BgV7qb2OZlFXMyrcAwPSszpGSDQ11%2BUX6tvU2NtJ60AC2B5HEqTLsVc0POA5vqKPs5cDYMS%2F4vsNLxGOoWkSj7qHJEJAN%2FIcqPgLhEvDdHe9QoyB20UgJADPtjQlWaHcR9i9AS1D6rNFIT4oNEhMrddQvgK0A879rdY1MWyq8p7YcBA4QRVNNuJgewJ2tBVe4URTayEeYeKifn%2BPQ9By6skxzeQm1cnSQ2kUwUERpe6KIpqI7k2wR%2FxNNTR3copts0m4b1NJwFhp7Jq5BSOcyWKsOUgl366DAdBgb5LImpncXuNCMLDejXbvYOAnRtWlIXrJ9ujZm1pH%2B9rRSC4UNGV1%2FJmw6lGlAo3i4Le4aiwCEbjdhkHn5jCMoh3MNZ7%2FWbOWPvqxYkSf%2BwaxaDLLtwFedL36UEjQfsJV0kNxE86bXm53sMXw69rzWw37GPRZkenAHLOg4AL1llfoZceyGp%2BvUohDoYZVmxIBKXsl%2FGuYtxAgu6Dsf80ZNlgpX63zngbzgttJvvhywPsfwVxJgSW%2BY89%2FCU0bNarBt5%2B8AiOuznJn%2BMTS5FNgaXDUHUd09LBUI2UspqlHFJ4K1j3LgQx%2BQJY1JBpmBtqPzFx0vYiky2YfVM2Yzgk30T7cgVGccyvPxHfUmmvrMLPdqsEGOqUBR5s9%2Bm47BzctOeiP82OH600Ld2PifjJn4fYL49R0LrqZoH53ce%2BapPTnp9SJMV3mxcMGKN1fv4wB8HrM%2FPKCyhn6Y1nHJuFB2fJlvS2TxktlaRgwUiC9%2FpUnfsBeNTe%2FyeML5uGM6XfABCtZtEgajAOmyP9sLUIwmWWx9pGRZf6fALv2r%2B8f2KI%2BY5CJ25JragOj2OMAFjJWRQUIM91vE22FUVRt&X-Amz-Signature=6aec102da4ef325abc87115722de17c9c29d701d3b0fb406b2b3254735cb091c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
