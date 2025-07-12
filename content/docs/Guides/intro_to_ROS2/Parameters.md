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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666574HTIT%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBktkMKxR9tg63m7qFunDJUVQk8f0RXNW%2BEzcLOq5aDaAiEAqLw2%2F%2Fw%2F87PVWwwpzRlGmv97tOUiZM%2Bz%2FK5OylyoM74qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmk49k6%2BiwPlig4aSrcA0nLDK2kazsUW0Sxrf%2FhoU%2FGbEvDV5794UxYNutxc%2FpmPyJNEuy89TkQv%2BwcrHwLp05bZqILf3UYYyWZYx%2BNQ8Lft5koqI6zU22z8bMYOIKqyJZt6lWLBuI8gu40U9Xth52J9raFq9%2F6WMGSQEigVqJ%2FplzXe5IWAORUU9KCHTAA39D4bbEQQAbwTkOSHkARd1HcxKiarDVCEfAPZfIV2e%2Ba81OcgPgSzGyp7a0zASJOYeyYdnDiRDa%2BsgxJsi9TvrovKBdmb7bM35o%2F31SfpIAnEQikbskEby1LnTHdG8LkQ%2F6RWGdlWcLeukilUDWOJrKTz%2Bpm3WY0ji%2BsTe6bFZqxBlz2YAoFhi1fOTm40lGaDO4QrHsNIjPK8ls4aSFOjBiu8fESkKS2h5hx%2BiVXMWxsJsdZApwjVbFwnkUPQKjlG8NtRwSc7RcKzRFNddGBWwvRb05igkVTuWhI%2BbTX%2FqhedmL3Q3J56RgetbbnDdcKAPJdP5q4kvohFiT62840Db7f11oxa4A8x0XsLeETHDdB991aJhOB5ocSUmXiWHVaGpa87eQIXidNen0zX74MNNNTUIc4kSvZ%2BIPLw7pARFE6u3wah6cYCV5brx99%2BzAnXn%2FghUQeiXAaA5naMK2uy8MGOqUBBoT3BfkNwA%2FYsy%2BvDf%2BbRL3QDbvac9ExTcyRPoOvuZ%2B7UJLay%2FTW3WE9AnFO9ZpsPlut5WKJyt4aR11vwAwYu296wTIAtwW0br9ZFVYzlmek%2FT5IyTHUgyt0MM0yuTxzk%2F8OYAca153%2BmjeKRWspr%2FbxU6sQKQMBnA4xjgjcEhoWwhqvz8pivvggI5dAGsC5M5Ob3CB6NusMWdsZuy%2F%2F2QeMtxs0&X-Amz-Signature=3f197d2957d273cd3ef6753ca998b34d5d7bdc1cbe488d2cb8ab280a9a721430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
