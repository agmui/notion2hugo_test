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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636CD4BZL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDb1FtijQ1fvYGs3JB3eSYmUV7%2BBLwMPf1vMGJcLmYZZQIgPtgfTWUH07zbDOxk7t3hc9jS2lp%2BayQXRGy8cypUe48q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDOCnTAxbvDHGXJhHjSrcAxI0zC4kferC1nDFcA%2FzUPsPwfhn7lPV3Ts4odaZ6%2FIVV36LIHvcLoDEAw34pzklAC9V%2FKFmExzP%2FPZ200DtO%2F%2FXXB7PF2Tel82xmXJIs539PmmHSFbCSVTDv6UFJ9VCBoV0BvFF5KNd0H6PeXpkgF9stAFVg%2Fm3s6udxQ27mYH82%2FIda6Q%2BqanAcup4GHFaY5fNR1NePEDRnYDQucs9BQ9wdgwxUzAZevXFnZ3X32FoXE2nZcugk0nRtUrU4QLtSXKfhyHcQCzyWE%2Bi53I9rbJ%2B1WIUFwS2I6kPnP%2BdnThMRQAOof%2Bojjf6pI%2FvoqOnC14EoHKQXyuytQ2LcH3BHKGeAfjI6ON63rIoYu%2FvSJPbXDyZ3%2FWjH67Moy7mN%2FcI7JAcn04xNoibPt4uYH3LbS8x1n%2BJ23znRM%2FjBdeesQI8%2B0%2BuLeVq2sokkaTCpF7TcjuaFKfwmxbJ0Rlm5QQaWlSIxYsQnCTTYRfOubVlR0yKiCt%2Be%2F%2Fjhmrkeneg2NVRRUysW4ZvVvqgMb3ErCti9QRe1vnKZAComoIU9aTNNQx%2Bk7guiesY9D2OwUXV%2F0KrCjVF%2BInVQrCdMk9xsiY6IfqtiIBNj3FI264IE%2FFPd7YM7SEeR9XUwaFLrzJBMLDI0MMGOqUBPhcL%2B%2FfgaIGVbTGdDXxQA8TXElsz23d%2FTAch7XBBqIa9iibc1Bg6d96MGLJsCZEh7ynMA4FJS70ljbXxO8%2Fybt98I3vDmTmqTv%2FlOdj2mP7sM5TfuVyrhoLHJUe05g00SY9qj6%2FRKcITEpkkMlcGlKTk%2FqNB6ajtJw7lv7Jk1F4D0AMswq9tj1ysQBhmE%2BG5yRU86YTZIZFYV3KIaZfpDhgPdV1D&X-Amz-Signature=84f4c7f8b0f246545ad1025937e2ee4078c063992f7d221c29fb7d7444f429bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
