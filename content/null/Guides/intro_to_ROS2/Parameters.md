---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Parameters.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633WZPAFM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCID0mXbb5uIzkv6ZEuDg%2FpYMzHyrXQBfwaOJm9%2B0Vsc%2FKAiBFteB46kdrPAkL6UdszrKBd9nKxt8FEjduJy0hOqgq6Cr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMqOkR8bRVymB66sxIKtwDx8WBJMOzxSPqzmddZj%2B1EwkhoJMBkDYo62iNSGOLga1bcsF9leJjpm6nKjInIVH99CeE1ByImuzXzIc7pxvZ6%2FKdA%2FD63%2FllPd89Fe2ltq7UqUsmxh4fuVYQV05lIgTQjCLXmoAjm6pk2tbnlDCLEP56V2HXKWc3YgmLyuAsXrsqg0SI%2BHTNa9VlKpvOFFqlDtXuOfEnImvaTuzrGVEpdi8anzcoa414QRc1S6avBjoA4qKWY6zb90ptiNk6vBvMmQNACemj4D7%2BPhpBnYYR0oJHeQt4ZIWmRYPsLOHosGGpIQMo8%2BRnVP1Ql%2FMR%2Bf7I5U4astYDufNP1moV4LfIRXxhawkU0XIsqnpKSKiikMl2G8HO8QSKVaP48oP4n9Y3bYnMT6yCTsjLAwlK2kRd%2B5Tg56be%2BFI1lE%2F5QmVDx%2BO2itvBDEGSGs61OabR4vdF3Ul9wD0piahjffUn%2BRO16q1A66jIru0YH%2F5nb7yyiDGgNlVyT%2BDpHgA5i7nqgDAZ%2Fu9vbYsGZox9%2BpJtw%2BwFMOtw%2F%2B0%2FFD9j81OMPkNvYynyGzIr%2FLLwQQA1zIchcz23Qs1dRtJVwoYyadAjNYyWsCO3hzIwba0b9oE%2FbZcmaHprgDLKwcprAYkT5x8w7f2JvQY6pgEKs2K00kLFvHeWhj820M1fTDo5wy%2B7w%2FizHNprIP4rs%2F3DQ9usixZt%2F6N8KIvhaKuZLCRjsQhma88th5MPskVwcTawyHBEvJOJYZuizCyCry4xDbeIhiLEk7XEZ%2BY9236aYAt1kGZqT0eTfd1tF0BxESnoDSCznfSOjQgj%2B7h1bGP93GDsfCVt5W2tCVksx%2Btm38CnSdDFLDXSFFldk01%2BIg0O%2BfVU&X-Amz-Signature=b8fc07df69ba1871a84b6a84e56d5a83cc57968d62fa59e66af2576327bacbf3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
