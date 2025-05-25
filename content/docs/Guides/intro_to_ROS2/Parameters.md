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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4Y47ISN%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGVA6AUB%2FL5LhFRcjWmCHoYvHLGcUqj3Fe58wUqD45RzAiBP4Rx5mw2kGFWjzYy7P0MgJhDtRMuAoJuI6p30AfbgVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMByrCyTKsKu%2B4iN7pKtwDbWd4bxaRTreYD8IoFghV47nOFtcLHrgIVEoOUpPJUgsJQJ49Z%2BiW%2BGj%2FU224oU%2FqKEl93NY3JL7J8zaBJKASrWv%2FkU1NuP2Tq%2FMjC5vqTketdW6V1BWNIcWoKj%2BZk1ijGpk2R3GciQ04NKuCn72qLBfoTESVw3VKwe6j187R%2BQVqlPTxq4vGEuBXh0f315LlzUa%2FLuLH812wFt70fkd0eBuNQMz403Toq9BDfOuZB2SLV2bE%2BLFxextqHASGj9gB%2F9oFuQn%2FGYwCYVEANpkF%2FcrGQLVLpyk%2BA3r2goCRKnVUFtvMXau7xN20YRRdMEgaDuS7J8GVE%2Bo2UV27ULiQty5KxKgrCFoT%2BctAcJoUcfu1Dir22GoS1Uv%2BO8c1DPqyPYhErFhMcVncXiX2MTnEUfNgK%2B4zkN5Sst0YpCVd9j3kSNm69RM7XLpI2eMnQyCdJfPa1yOK29C5m1JWPCH698eyIh3U%2FEKpR0zQyesMQk17O1fAQ9iLP4dmJT%2FQugnUeJbQ8p3fPf%2BfhL4CxU2q19%2BrxRDKPwHe8Mmg2f%2FfypKUc89Tdt2Nvw8khBsI8Rufe0xXCIU4%2BpfZVIymzX9y6VkZvwMLzv1kKwEAbzPQIc4ugjR%2FltGCvs%2F2CHowksXNwQY6pgGZKA8nVZOYXgstnIaFoSswGLqzSEzkXAUcdVR41XjQcacJaikxNTwgEur9gTFviuvdw1hXT1dTSQZXvP%2FK71ovFtJrXWTrCRCzy9uCJ2fslvBEOBJZofTibwLiXMZ9yIOpThVwLW5ARu6kKc7yKUBP2vkcQDxW3mcLqhvSRRW9zUNLGeoSWG4GmthRbzY%2BxBX4Pr86kfZPVeSipSHniCUN%2Fj327fQ8&X-Amz-Signature=c9b580d3801147b9794ad9624562fae02d7378ad621eafe2ec6b706a97589321&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
