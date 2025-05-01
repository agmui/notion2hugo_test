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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVUD7AHS%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIEjyzunfAABQkurjn9ejmo8HIE%2FOGdMjHRsJjF6jIZNPAiBRP85MVRuoD4id18J%2BtL3GvmYIlqQHUMUmnOvN6P5Q2CqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlQuFpl0qaDD39s9sKtwDtdVz%2BVa6B7uOPBr8l8gr9Ze5iwPIYonVdisEX2Z57QxarEpoa97unMnkEo3RzMbfOdffNtmflp9jEOlIdYl14x6SQS9gaTeq5na6mp2r5Hg0npRaIS8%2F8%2FkfSw4gQzpIeh489jZtDe2nTvmyUTPb01WJmYVMzatakh%2BD8VdGPN3AbsgCG3zzCSnhYExaLzfkycROgY5HlEdVNQyPYAclrtT5HrdQiVPFT6VIvrGgW7UYlnHmVq2YbTahPKClblb6%2F8LvHiWiToaOMvzMi%2BifMjU91Ze0i5iAwV%2BDH4rhL061EOg2E4pOJz0CbRznqt8s4%2BlTjzJc1TGmo1XK4I%2BC9F47tmYdRkd6F4%2BAFhxIMuC9xQqD9Cq382wOrrr5%2FjPMxA%2BBCTl9Tb28kQfEkZNxdcumuF95jUdMSirtU08egGAxmvG1AwM6hUBLXbrsewXofoldFoHSu6%2FgEWp%2B%2FQmwWQnDjw45Q0x0bI7W1O8Idiey5QaMw%2F4e0KuGGz5g1hTCJcADnlyKX44GvrOyyKyJiZFJbN%2Bhv%2FKAAj%2FtP1W%2FHQD%2Fj86W13cNREhP7UItREiPYuGgPJDh56Qr4lxRDwui3itp0EubIlf2KFzHHQsEPRi7d0ea07hio2GJT0Awr5HPwAY6pgHinDQkS%2FRZUCJrMNAmXtO16K26ql7CJE%2Fx3fz7bPn1VY1SO573p5TD6D0JG0lPxs1ZhmceQv5tDaElEcnS0s2UlwdKWDfw%2BddOSv6%2FudUzZw5AlLnzw2EiuedEC5Jcses8GvgYMhu1aqO5GeliV%2B8wIT3lJMIiSgOCvdLRSREVEa0ku0FZCMTj7koO9vNRNsM7Hb9wzokkGOlvSfzvJnAm%2Fh1rCdp9&X-Amz-Signature=cd1a03d7d569250b7370532509ca977e6816e87e95775726bf289b555eda9954&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
