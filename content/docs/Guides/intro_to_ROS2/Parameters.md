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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N75R6NT%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDQ%2FSKr3u3HHDcXLQ1ohTFGC4wwh6I2%2F%2BqnErEGxK2swQIhAL0LmJy2d6tjxRI4FcGjMn6%2BE%2B%2BN86GtO%2FqltaesKqPTKv8DCHUQABoMNjM3NDIzMTgzODA1IgwZKAkonpuP2%2BrC1Y0q3AN%2BbawTZmFWyqimqDRt3%2FvtlHIMSypfmMV782NBg%2FNc0G4k2y8Pwaz2qrv5rcdMlggmLqSOTFjLgdF%2BKiCWnFC0B7q0ikTlLb9qceWjmYSJUzRWxnouy%2F66vOxSp%2BL95IB1sq65Gqq%2FC3oCS3SlvsEMi77iklNmNwT%2BsExoeDKjTCZ94xwpsbYzapfACBGn%2BrlD9XYVoEzaTMmsHlq4TPCjit2eOoWK6yk9LDliG4PqN7p6M2tc7%2BkTAyr9bhlonhcOvKo16VBjMECpjjz4xeTqCDgpqyHDiT5MrzSWnFfzI4VDO5qP6OFTJ8762bg5MoWU19a7NQoEs8T4e0jhOJOSlLB6nIL0xScsptu38rqk8wpW75ymw3OX8sPQzLQZv7oeLwzeCy%2B4KQ6MdbAjxPnYNNLX%2BlNFI49VzkhTHPbm%2FeXCIsaDKpTzXqv2leNh%2BQmsvWoFqF%2BIvJ56GhEV9MGzaLB5VVj%2F2JHy66VQPsxEUv0dqwpLCCbT5mqz0%2Ba7%2BKu5UWa6u%2B9ykjU50RWchzu8vesQ8Lec%2FxabPRKEWw%2FVqAO0zuAZeuN2wsMYQcDk6pF2izM58H3wj4N%2BICqgl%2B%2F6uRHqnx5zpmbRumetgw6CMFjf0zpOC1Dv7Sm8%2BDCx4q7DBjqkATsP6kj6xZ32xMaFcZH2D0AGT4I10uqKRhg1MjsLedrO7deEKDI7nl9BntIRp8N7IuQtgVP8JN7XWbNlby%2F4wiUGpa132j9UsNLQHokvERW%2FoBwsPAkx08taqH7Yfv9Q55W3t%2BWq71g5p0rJGnBpGbROUw4ZcoTdt2UzboT%2FIIXO5qrv4Up7ZG7MFiKVzH3mw13PApXVphGUWfmfEicwy2%2Fs6fl2&X-Amz-Signature=d002b50ddef4117de6566b7915f6d1fee33663ac649727f69cd20fbdb88a185c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
