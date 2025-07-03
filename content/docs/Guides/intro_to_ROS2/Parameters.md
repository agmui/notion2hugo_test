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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WIQJ3JK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC%2BpJB38fd0DDRpBlp%2BOjybKwPdjxElc3kWb0LE3DRmXwIgfj%2F5tM9qHslxmI%2FSwQJYNN6shqF6hTRZk0I5di6nIJIq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDLWmLUqRkurYV8GoRSrcAxjL2ZmIVHfl3SdoejdIPC4xbFqd40rayePppVsddCnq2NK6xWWERQL3e3MuCReGpW7HPc3cllS5GysJJSrjYGoxsgpmfuR7iYwZBbz42kXxFDGuSGDrB%2BqYQ9%2BF8dB6N7vfAjjfZkxcvZotMC9eyS5b08d3Xl24Du%2FQUPpBLQ9v6igiBnN7cW81DUtUkxRbnoR9kqhCO593oTFWG%2F6U7VVcXhgZJgdXoaGwml%2B1hwj%2FbZpe%2B79k%2BMZEjxILE6%2BnYAOFDM2tnxbth%2BZPDyKbuDi8PVC6rq39F7bqnA3fbCRl9WVVGNMsomeeBh9WmECW%2BDdsCjSYpyJcxnmXLLHrXNI6VKjcKDQ6GlAPZSgdf%2FX3kLihYhQ0bHnyu%2FoC%2BXdEBYfpfQLuw2DfmbEaex4OQJ8h7WFS%2FKhEu7J%2FEhzqSuyu4ENyejY7S51bgfWMs%2Bmoirl9TCXbRCr3lPB0ZHguorZd%2FVMdDdIcWONqZkZH%2BwW2Wd6eEzKJlYn%2BkvF%2BkHt6AbB%2BH%2BM1EEMTpMIe8Yo%2BiAQU%2BY7Sm8kaSkC8kyxJZnggBBjzABBKDdi1813nMiP%2FYYMmaSFo5m1zpEgs7Gf75t9G5yjFy4Q7fa3yWk5rE0%2BKZkb0BhhVq50VxCXKMLWImcMGOqUBmrHNB15gXla9%2F%2F%2FXn507MGviG1%2FvDLrtMY7dy%2BQ1Zb%2FB9zIcQ%2BhQi7LVWppNiJb53kCPTnU0GEKqhmW07UiHQgCeTVsP44rWGkM%2Bn2mYzQ1rjF8hG5RLGQ0tDfXmZokDnFC8ksv4bV%2BpuUp3VZ%2BIFu29PZxkAzeCKZuzdtqirf%2BCoG21N2DPAFBOCNdNhyn%2FALju0beET5tpl87sLr4SpKilJmz8&X-Amz-Signature=fab10b65858e1cd465dbc05e5765146243f01e4248b437a27d85f44cfad20cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
