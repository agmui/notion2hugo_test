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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRSYOLMD%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDcBmI%2BfsEA1AkHSctgywgNPTVBVm8X92zPQtbmiyX19AIgM60Pjy3RQBDyMw%2BwJilGCpqIMGzaVTWrwcENleRyTCsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCClj4eST%2Fgz4LXg1yrcA79pMIKxr6CkN8LbKlEL6%2BebPgxWyjm5gOEOY2KfuM0Pz4DawcLHH39HFssGaJy7DXaUsHGxxsZ4xGND2LvBSDcZCREKUXZ7BAs7xx7rBdt4ifA%2B5UPw8WgZaEZ7d8NdLX68o2VyCG6hr%2BQ2kmBXbvRBBKHsK03jSxEI1fdFkdWmXpEsmPcMGhakt7pm68elqbDO7T9%2FtFdmc6uF2S7K%2FqWrkBs5LWJqRRZa9eCbojiIPZ%2F0rFJJNkLCUFy8IdPDuxxgaxNW52Zs2umRcSxIWGrTIbSkbb5V18Dsz1PiwgJbCHcxiAJFSZT4EDGSHr1WADWeRROTvLEbSh3LouiTaz5f73tdQEv3m31etG4bYFsTjJ4mDk1rooI58JLQfK05mpHl25rvM7xNcievmpZ8Yoi3VNVsZcrpq0nKeJlrRxpP3T8fe%2B5P%2BzNnlYlL5iTkjqT5OjGnsiZB6%2FMoIhjyRh2ux7SaFKbmshbdK81m6vn1%2BuWslegjAyMDUyvgUL%2BOjztkJ%2Fm1WUKSgoR7zZEb2fz9rmm4pfWiFgstDzAzL3YvEmiSVUQ1WoienLFK8AnQNie%2FUebJei%2FPoPmMK0hH81n7dNR62%2Fvuf%2Bs0s6LVEfA7o5deYiwKGzIl2hcUMN2HqsIGOqUBEi1%2BGkJnJNbCosWh79qt7sBFR6v8metbjQoPTmPJE%2B21gLjvBjymHhvLuu6rAFqEzOgEUhSU4uLdZ%2Ft%2BME5%2F5gHUJNPEHhyMGTxK%2Bw6O9IX3B%2BFD15bBt6zXLhsAVasPtMIYDq873D%2BnThxVavRSVTlNBW4bEoxe6BPW9inVW7SxlwoJgtaLz1vFNwMtcvk9kFPoSxHXSKN88aBOA%2B0wUVnLvAEe&X-Amz-Signature=dced9977de34ea555be795bf09567f5a5aa31c00ffacb00b0843adf8f669c7bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
