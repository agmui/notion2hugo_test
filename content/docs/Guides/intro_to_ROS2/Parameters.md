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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMY7CNEM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX5usP3xGxwYDpd4r44S6V6ywC6DrFHdNdlV9eh1rDggIgMzVRuKfIVq7Nl08tpAPdSSDZB9tSYYLWLhCGYhRDMHYq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDI1erTZLt8i3W4TJzCrcA4%2BfoX1pX2ZeZq%2Bct1Smeur9yIdlEBMmL711dxEl4t8JmIBSwwh%2BNH4Ql9wikuLfjcSXi8xUspBwJyMTaPA2BauEbfRCN9yZqPa0ySTaEQgt3FWXYWbvPJz%2F7i9SkbzIGrpTP8REztWHLE%2B261Ps4Q0yMbaQakoAUwx6ef0Sfn9VDULIKZxN9leYKO8UDa77UKACQiCj8LBVKV8p82J0bh%2Femjc%2FCFhM6lhhHKcftIZrRjoqyPPVSlfcBf6HcAIll7YanHvSq6jcq4hZnD03YDj8oVyzW9Jm11PDn3Mc2RMdpIKzP67T5AtZWQvBxg0ekOkbr8Dzytj9Pq8eh5M5Bb6UJtdL99sV1EK%2F6sbh2FuMdLV6LhgRQAKi%2BGNasz%2BxQGxkRE8rfXwEBRnsS%2BnwaqWvaigTvSMKeR0GM6AFUdDpGe1x%2FhAe2qfhp9n6iLIv6DO7i5T%2BKM6A6JV8LNtyqCFN%2BUZec2%2F1WOrY1WHxTDEEgDKs4sKFyUUh%2BdDHkwLvdLqfIRlOjrZkIeSYVgABYvfV3gx9jZ595Z4RNwP%2B58nSpQEOsSVVtyvQjiv1avLGaCHRYsI%2FVZS6yJ4oeGxfjEw8fuDXCQE0sjWK3%2FKTKxvCVLdquiz0NWDRk9rAMJuTvr8GOqUBxcfgUarIpoekMltJb%2FTMB9smYT8Kw7SN9oCDocbCEXqss9J%2Fq06gFpK1OrLUmfiFHAuZeLUMnd8ptVuGXWJl2zTVJULfjlt4Xeku0%2F%2FjRe8q%2F3Gce1em%2FBFGlgBPknCSBLv5J4zW9cbLRDhXs2DxCMpS82pYCINPCGSVnIjvd%2BlV1Q6pDEnCrVy6NWu2zzlUDBfjPE%2BsfskBGxM0GxTcglXuAB1q&X-Amz-Signature=7bf5e0c4f6adb963f33d78fea563c695de3241c33d40b98443270b68babdaddb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
