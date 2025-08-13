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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNNDP5JK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBq2ARMyqthjj6aJ1jx1wuLiet6u2Ok%2F4HWa8vYuMnBwIhAPPT3%2FFm3N9mi%2FIrLKzw9d9SN2iAfmYINgDQARzOBNx%2BKv8DCCcQABoMNjM3NDIzMTgzODA1IgwXKgI3TjlFNyu5nA4q3AOQv3lnCK5G3MIdebLK5KDMocQRuwydAUik1pyFgKGOtCLGKNjIYtZ7f%2FRMJ5h1VVgBTHfR%2FOdyZWrRm5oC4zjeSE9oCQ551IOfDfiT%2F8%2BPTIqbM%2B1H15CBydE1AuD9ZWxQgo%2FsUCtjes2o9yPbTmnnSjS4RObcSsFOix764QhYWNgJEsEaAsuE%2BgB6eNnRnweP61io%2BEFwN13piPEIZvf%2FeHl1GubtnCbNX5Zzevt3bPQQt0aZ%2Byc%2FjFbxJCK61e5k9F27QwAUPflqU79FsLaeaUD89hCEIpGDQm%2BizBAEIejDpBtsRv7hVvAOAppW7mlgiBPYzxnFWsI5WJXm6meD3%2B12kSZ71l4Y7p9ZHEN2pi7XVdFyASGyPO5asuZ08S982Enf%2FHwCNRJneLinSXd94lK4HpwHl55XvPz%2B%2F%2BgD3PiRkG6gbIoLRO2Kq%2B%2BloSWixaOI%2FShhpRSdk5v0cij2KL0N4gqgkffUKFfZrP3kpN%2BIQEmJECQcyf2KhlJiuWRcenFS%2FAtBJJoZG0e6WxrERtnBfTkRqC3T1VC1%2BnKuqLRna9H7k0K9QmknjgqT0sL6PsEv%2BQ9kqhiVVgou833yREM%2FTIRR3OAW%2BDd4iD69UQ%2BMsSsgVezg4ZJ4fDCZ0fDEBjqkAVITJODh29yM6tEFAQRScSy6FQFFUy9vbtkPE3F8zIvueAhEDGhInbeUD5jOuxPm05LTe1Bm3zdFywQX%2FvhsJxrNDyKQqx57gWnqrO9GXhFupnulqVPVoh9mFWIdvtDt0wOUFGHUXPtCKJdLvkQNsPSPdqc2t6TUqLEMO609JJy55Bzhm1OcQBk%2BnhsT%2FMio9GjYFEZZgT4QzLJpi%2B0yOWCla8Un&X-Amz-Signature=4a1693597683332fe887777dc24714463e2653a761aa3bf34a591af1c6dff253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
