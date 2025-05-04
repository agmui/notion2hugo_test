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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRFIVRU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQClnkAryT%2BINNvYgOKXTQcdDtvOB4SdIBaRBpzTDIF7awIgRProUcqoQ%2FA22EIhTTVKF6dnl9ZivDOeTHSRQVLbif4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHovvNjLhUhGX4BkyrcA96hlPO6QweDLVt4%2B713f8UgqxXNQokfdQ9jOw98qJ4gomYrl9RYXgjbbOuAwLhojx%2BLOH6eQsUHCC8PEnGdefDjeuDtcdHYaWqYMdsIZ1qsc3IVdjADkJQLN7dQPwXeWvZR70dNpNgNEo3Rdr52t7dL%2BVDFivrQr8rVkZ%2BpPA9%2BANI6TALN73ylX9CbG88ajuXuVOpidbZWSdDu2%2BOPgsWVbRvxbUHhC%2FLhV%2F4ftJDSEfl8A1h4Q9%2Fc9ZgSDRVxW5qV81UCNdjOdVGDIVQTM8NvZvTnRsQap12NdrgS1T87sOysVP0XjRA9K%2Bbw%2FK8bjPoSlk9GrcB8d%2Bk9mtNHgJw%2Bip0IKCNZ3loIooNVyy7BDh6mHSeEnqLhdkGjgxyPJZmIxjHM9tD%2BJntAr6Mj8pDN4WtWUtYJzGWxbxFagQ3mXDWJY9IraTsuO6nIriKNjnScxM5HEQlonAHnjUPM8pxT1pGQ47e8EV5%2BM12fQadwdyQIyGdiY%2FgtuikJlzEuPyq8nr9L4F%2FFa%2Fx7YUIDRE2YI7hSzxJD3tz6KsJYeQvLXJEpDYbIVXTSK0xGIlkq7axxFpkMAfZ7zZcV66IlKLyMc57IVlQcfwVucZdWN6Bp5Tl3olj2LLOgqQeeMNnY2sAGOqUB7aoKw2W8aNQ5NmId7NX7%2FOMvYU7%2FMjyEFFKF2Xl56qs5ctLnXUvtVgbeGDpVGd3bRLtbsAAp6Fx1bZ7N0h4bjtPP9Zsvr%2BlYbVtsa1TD%2BxsR0dAooTb1PZ9CHTZzRVLcaQAzIH8SX5cl1NSHkgk3JiihREMwlNF%2F6UMeCneX2jc80I%2BKCmJi1A0s4PLZkfHKLRw9ansWJ06PPmHUfdSjMTAeFzpB&X-Amz-Signature=da04d97f23e5380f30e228e66c141f11118097ef53bb13c92c47d8c8597b566b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
