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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HXJJALN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCteWzzdWJoGkViLPzSSnYvhYGsf1PuuZnQx%2FqAyVE29AIhANxrtDJQXYidNaGNGy%2FmfpVLCZyoDyhnTPhU1Xzvt5VyKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAM%2FvWEgxtEBXm4bgq3AMFOaW5fkEXeAabNlYnl25q9znP5%2BUiEaN97Cjndt1yx5AFVK7wxfB5L0WSqbGLTSAOUjGEtFDFmusJq4EtJZ8tivekw7M6LUDaQWEc%2BMohPJKBaUoLLuWqclnoCvkA1vsVM9Vk%2Fatxg1Fhv4bPzfD1oSSnW%2BH9BDJ34WoUXZedLL2xfWBCK14t6mdwuculkwOr%2Bft713yJWMjk0wBFx9sGs9hMbB8kb5HCl%2BY%2BWK7srDIKKmW4IHHPEv5z3TcCcgbifxDIUcHyatXvz2rypXKi01hiGQrXmgiPvaH4KJJEiANTlC0ZRabI9pVTOJZyS4ReXpIZlgXHiRfc9MB%2BykcYnY9u1f4d%2BhKyx0t5qdeYN4V%2BEhw%2F%2B1CCr4Li7lAzeyGSNwkR8e7voCQEquVkaGKTtxQqtP1aCxp6hASSJl83PSCddBF4DDs32tcXXBYiM3L3kGPq9C3YHAipSIu%2F%2BYP1VpXkuKtutEz2Jvk40tafuPAbl1U3AgnVG7pn91N1etA8mVrEN%2B%2F4ipF1xcDAIgX6V3%2FPM3djcWwi131q%2FrXTPgNp0J%2F8Ki9kl6g%2BegtGl8dhHwCT7x0%2FXUIjQ81FiQlKs2O01VapbZJvZx58B3EpGDd0Oqz1hgbG5cbRCjCynIfBBjqkAWMJCU0zwXbQN6nycmrdSfWgexd%2FmAMjtKrLVJlUw8WrDZqx%2FrZPFx%2BrPcZnM3GUy28%2BR0TNQCw8aPlryBJFS6%2BuMyUv9EyYi2XUyjBv8nAAmJ3lq34J6QyLtAdO9Kl9WqQSkoXH0joI1fbybmK5i7hi9r6vWavHfT%2BophabMjKYoHV4MhUuKYnZUa5gslXIMSU6Nh45s%2Fb7ebzRo4yckoblSskc&X-Amz-Signature=50a9078bd71aa86bb469b9ad2af7b116a692f40840c3f1b9f0317fbd042b1772&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
