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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HW4UVHR%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvjYpl9gF0vKzCWdRb4F51qtRS2LHFbNeNUMrNAkLhSQIgW0PYcR7qNtQVknw%2BNm1VO7hZl9%2Bc7fPx%2BJgHtr5HGYgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVLGhBL5IcKIcWQOyrcAyb6%2BR0D6ThmoM5RiX64ukq6Zzb%2BoPpSi4VEcofNCQWHBckjdJgMO1uVHBIKDT3%2FsKtfdVK7MflPR2ytNrVrNTjgtydyqB%2Bqka%2FgoDdOLTL6CceWllaDz%2B8OPgDKVSfzjYx8RtxnuXYMF09LiBQGjiyi3i8OMj2rqV06PKB1ePVwoKoarn5PQ23k2BJKE%2FGyNEAi5aUH3bXo9NEZxeS2WIrGq8FeGnWWQ37u89O0Un6DhSOlwocqDGlQHz7ayfIWAahRYy%2FMl9UPAFhB%2F7eJUzcuLSsDZA%2FE8gkHxKO9rp1WvRPEvj2EzM1Zolsw%2Brz7zsD7aORsI4vZiVfBJCkxR6WEP3DXKFHYYYFRnsQ0QJsXJBrYoO2APAXKBprmvOUspZz8bt4XNBg%2BKcqzJSewzkPdItF9aze3%2FeGf1xfa787vhjcIhW16fQUpGNNodYbNGDlhJHl8ae1hVsm2reueoF5CDDG2Na%2FSGTYDX5pfJsAoqQTz6%2FhdVZ%2FNtVBiHped0czuFCf4KRSwZsnM1SZ%2BnEpuSdoLFmzsXMhzTG70cl3VOmbkYoebpPBnk3hjUdtG%2FSTYyG8HzCB%2Fy2iLsG%2FwbCG4iA7H0hc9TQFrkru8ePjQJW9eFQvvFlmb33j%2BMNuM7bwGOqUBWCyDfOI2lnUF29hjG2x2LqWSMsuvZezctm0qALZZy6mu7pRcsFDMt2ILBWa6%2FJzi2NxVLwdlbZOjdTUdyIlEQhuTGdOCPu1qd6XmCibc8pdCPOADfkdlZCCCDFgmF5qYrTUSq3YXaGfrGFgN5s%2BW0Ngl6R%2BO8S2uE%2FGcuokLgfALd2a9x8cZwycRnv%2FM8EBQfpLMxDiT5aXLfWlZPspJgqQrQM57&X-Amz-Signature=e12feab6a042eff27b4add0bbef3827ef8ae550fe2c3ff988eff73dc8d4047b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
