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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOWUGEBC%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIH744tavq7cUzFQR%2BFQJZtesTY3WbaEPosLheE51AlSLAiAkJywHmpf0El%2BP85nrcNTq6htEBvtEXkM9curW%2FrBCKSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcK%2BXZIlgUHz7di2VKtwDJUbmmHMdw8JQfk3%2BnJYg5jwJcPqV6eYDddf7bpjfhhPF3OxWH3H7o8xpJ0ORzS2paQM25LMPMrJLm2aYZrnDErIuIpPe6cinMsVZvbkiI1k4fJXLYdmKoCTzKvKD8saXoDAXlKHS6%2FKcFcMcFZBlMbU2v%2Fu6tfCSpzLvSCWvvc1dadfg62BBOFnE3v%2BdcovQl%2B%2FanoQ9SdS9Q%2FayEgaEyj02f%2BWZJHP%2F%2BPxJpQdDdUiZFjF1tAxOxFfEKtBvkLEuVNqjpL42qdRPu3EHma4%2BnEQjwQPqtXsQDAvg7FaRGP1SVP02gmjvbwFyfdsse6vvihGiJI2JhHg2XXvQOURXtV5NK9I4m9aTRb0enPO578p7Rz8sm2dy%2FVFdzp4OI4qKSCBrWFi3TyXFTO3JkysyHb26MtJwlH%2BMcYP8SLUHU6AdTs%2FVRsAYvQfrLs3bHGuQUXDOE5xlPaSWThvPue2UGNxWiLcQHbeA0tmirR9%2BMDnZOlr1KGzpGVfE0B7rARjq7lJj4Y3ODUz50ZY8TpjKPOE0kns%2BzYayusoMWVCQFN8WeOdezMjLALoPWZ4EhG7mxg9nndS%2FcFCqEH8ExbgMeWmpIwEqX9tnKhS5%2BAHfntf9NZjdcZRvACDNZmkwm%2FuLywY6pgGFx22MI%2F92Yvs2gKX6%2Fa5p6ux4vXm3NUIQ%2F0%2BDW91CSkSiIPITOoVu0lYToJ1dss4xgtF3xNjTKUwu3SSRQpjCmxr4MlHLX1s9ISGF9NO0h%2Bo5h55BxBjKLi1GCwkXh2AdQq9r5kB%2BjPULHTyfzsix3njc2iIEyrOVKN3fP8fP%2F48X5UE7IIuYqMXh5g2Gzf%2Bl8vbUlQgidLCjYCpzza%2BYgfslAn%2Fv&X-Amz-Signature=3d47f0dab923ebf2be40e2c8bfa23e486ae252115cf0f590b73978f8ad3f4e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
