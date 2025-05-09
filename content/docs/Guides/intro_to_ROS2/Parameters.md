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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM3AU6HM%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqcTDOhY21XBJz%2F5a7mHBl%2B84rrYpy70iH7YjPRYzz9QIhAOKRO4xRJfWNT05wU1%2FegMMmr%2BmaH260WR4z6p3k%2Fi1VKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbRwDrK77GZI7oC2cq3AMw81Ou%2BSVysjygwW9NQpHTPxqSbgIWKYJ%2FkLSkq8G6u5Mub8EH1DrQsiSuRBCrnkgqro7lM5VnFYkwSzg2tTDK6wTGM4kwGCkjCk7uSBMbQLLMBodTz%2B8UpvsZy7n0WHCL%2FeyX0CCKfdM4ypsqTrt0jMAY%2Fa%2BiVGt5R6IVrbjXwb%2FjORyvf1F4LqeTvHheYvQc7Nw6L2sZpMnBFJCijPjbwJ3pS1gkbd30C1oRgTQBB2OwOWq%2FKil0%2FNkpuaz1oavjRivnL533SfaG75o0qjMIOunbbO8Gn1LPUyaop%2BDHkX%2Bxd3%2BWq9QlicBbv%2Fr6U8h2Sqo3KcCCsAkS76OB7IVtMU6MeUb1ySm5hS1bVOLju82tY8EO0DxQs05EQWqYZ7ZiuGL6bwpkhHO1HxLBwnhyH5JgJW6Km2VYF1Mz0l870V3pKTuXxfylyuSXtDTdWXOlZlgdN3a8rhgIvrd%2Ba3RTCy%2B4HT3Plkoc8erxgbmqcUiJeeDMP1Z2TuJp6AlA8nBRDATxrEMHm2MVzjD023DkNaDNa8MX4roGx6MibBYJhNocTpJ0evBGYoMo6DYM8rDsuUFJqQMVAOYPWBIvFabwL1no%2FQtM6MGEGdRv6cjehIwkyVxr4yBhhMwlVDD0lfbABjqkAV5GYmxQYpyHyVmRKsrkQ70X%2BpfCmuhu1Z3vZZHoMSO2W2R%2F7cnnLfEHgiLymyHkD14HNSwBlwfz8QVdHtzkP0GPKM9mZcKEUq9P1fVchxKSaGdSoKpCwWYcqaXkiBfKF4ZvpamrKDHswpHYOC9OblAunAQ4kixFiJbfEFw88zd7A2CQkh%2FvAZ7FiupUJvBy12B%2FUylwYyIi0FTQ4fB0T2xUeCcY&X-Amz-Signature=b640c9ea146331d94ede85ad121cd7111319ceaf89f6407ee7f7500b50e016d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
