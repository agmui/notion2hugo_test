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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRTNRALV%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTaOJ0rC3tbsRhgd8MErl33Nxdrj67x8gnfaGHfu%2BEoAIhAPKHnw%2Fnbo%2Fi4rWyJ4ZeCzIxmITzilQ43txWBgAYRtosKv8DCGcQABoMNjM3NDIzMTgzODA1Igxr3w6j7g7RevGPpSwq3ANxvp8lXpbtlAl%2FJnqlSFp644IgTyOvAOVx1ffeUENddsPmXSeO%2Fp%2BN9t6T1t4BVzjVCRRNVeEMd5kqAZTSGVI2I9Xvjlkmu6BKWZ%2FqbOZcGyejI2ZIumz6IXjAtG%2BUMS4hl5i3W%2BFUyM92kE8b3c012HQXMmEd1VB2%2FOUtUd6gipZt1BNUR2JSc14GPI7bEL5BQns12RuuuT1mHK3UzQawwphy9acJRXTJk9chOUnsErBk7FCsvloEBr5n2E5iRLL8awciJj2iKkwKUwOfQzxIV1TbpAxaDUwrfIHtW5vEROJTiWSwckhutZQdGyaWaO7e9HpDcHG8Tgw8EF4HvPwetFKPDxhnYO5qFtP0KM37jnb2wJmrF%2B%2FYyCWf%2FP7UNP0M9W%2BL3q8vguQvtALMehCvYp4OVzJ%2B8nSa8wC4rfOlU9agf8IqsOexUtsShZqyYija%2BaeTzmZiqYKiXoURGvxc9UKzY15UVoti96EPYOhlVC%2FUDdR9wezxDXMfH1EbVcAWk%2FpnK0BFgo7j6m6V1BwwbAJEBEasndqXjmV87AW79P%2BWLJeFjqFvDat63SJsRQlntGh25JHqksOV3Wp8CReS3PeHwyao5Q29wdCsrVpq7q0Lr%2FEa%2FBzb7Xbi1TDN1LrABjqkAWSJCwoOj0e2oKnYjw8azHBka1ucywtdCpJhxhVcYD%2FzbMCbobj6vEkAuqNRtKN7xGzFkaZqWsa1a0A6NPfR1wPL9TkUVBLWG5dr8S2cHi6ZhFQZ2gY%2FmwQcp7b4huF0pS6YFcprS3qifvW3tQui6AsGyouGsf0D9U3Z1%2FN7p1DJ1do%2FNjq87V%2FC57GnKDsYngPiJOJxgJn2V4sKhxUp3bFwtqlW&X-Amz-Signature=b3ef4770f88f8724cbaaa6922ee6d37b00544063041d172b6b6f32f08273e2af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
