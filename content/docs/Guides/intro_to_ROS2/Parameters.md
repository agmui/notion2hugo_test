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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PJR7QVM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIA5NhypbYTiuFmpQ0%2BBGxu5um%2F6VgI%2BFI18XW9Q%2FhAHtAiBIOV3AvC1SAar6tI1136KBPN7fMVbXUP98vIrJOW6Gyir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMK%2Fkn6hHi0mcBAGD0KtwDkzCF80%2FR8uLb0kqQRsEnmcvRaCstVX1kWZ%2FsJBA307MM5mHb5tIO055NCiFuGMAe3ZN8Wc8N0BuU7N2TkgDRBrUKrSKYz21gyIiNi25n0E5GYrqeCgVonl%2FVeR52ukGjTfNTFA0rCCqHlVTCWhxf44IaRVwja3ryeU8iWJd3XelnsC58eGB3JpPtlOeMopCXB1n%2FqnejE8hkcP3go5%2F0NHRbO1zc1IoiJJH5NcOKaWGGUoKqY6X6LueP9HLFMlkuwvMa12dd37uXPuRzQ9NSwWUBDDBto0QzxJUZIsjIim3WlHKTZllOW%2BAkgK301FeM2zAlWrpw%2B%2BeRmtghmMsC0%2FXMgdngbjj5p4W5scUUjsVMUOx%2FENV8dXtquPxqzN2MRLQER7lOBqYsIuyCkR%2BGzzUgqC%2BjgQKuZgskE95FqrZqa54%2FvaPtNrN2q9yui014fTmV3STqBhEVbv4416kEAgcGFxK0eaSZSvhAq4j0%2BnOaISO6c4CkKE5iWhMlbIKVoSbCU12e5pGQNA3KRG1jAImkDR9qiGhH5kkRn7tV7XZ9HREJOEHjz7paEHHoL2yqXSaew569ZX3nZyoT%2FZvb5wHoZaYn0EoJKelNkua81%2BfYeKwkHm115bTuqO4wl4n8vQY6pgFLUuRnFgTPsXCwjlJ3C0rqxLp5hE1ibuO1nf7HlJAnZhnh90TzbMSPmfEHL6xpkS1pLTptGyhkEAV2EORmKMcKuCw5lGTfPB6GgR2ka2x5IhdsauLPWJ6MZhr4Gf6yinJsTfux0qawxnRwHwfnGq5KpRoEK%2B4PbGKktuu8c6arODewttWLPFegjmlbTW4mdWql3m%2Feu4AS%2Bue3CVEpPYAc07jjygAa&X-Amz-Signature=5e92f97ebcdb726ba0aba680cef11f2cd3d4cb97183694e47c69371f523cc293&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
