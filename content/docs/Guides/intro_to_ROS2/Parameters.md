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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXAZD72%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF05wIQv9VE1D325iNuTqVULBLG7OmVkhKcrwpPrhEwfAiEAsainT9EKW09l%2B3G8T%2Ble6E9eisygM523n5TWbN0FShoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDatuiSxlk%2FEteVQiSrcA8t9a3MGSTH27%2FJx%2F74txt3KYz3nxtDFM13KuPBH%2FvewnSRUlbNWDb0N9Lz2iZ%2B0lQdlBiQpujvtOR87GBTOPabPzwXgvKBBjC1SjxBBDZHi4hv8FvRl8%2BsRwUgpBsr8uGN%2FX8Wt9iN05Vs58fcCopLesJPBEP4zvQ7j65ZEnG7KFQAG3DkbJD2m1yMwGiGlpBwdRf0C8MKmKXx3FRLSQcza8paXI0trlraBCgEIeieP4cAF8IZ84GSObfI4wgIIPtI4oh1IMqju%2FxHURCIW3Cu0In%2FT2x%2FvXVfaatKqw6yzl8pJK0d7mafChzi4eb55XfO%2BtoB6%2FrqLk7AtzLdsZ8WkSWgYmL%2FiKI1YZ9qvVcTUaZwdbLilDzTW1oXTb35fP5DIGWoYeUQgGqcKqZ%2B7HJg79s1laCu0A26%2Bj3EpnwWtH9aCbBjrDf2LBgEpXKFFf3H4tGDNCEKJ1WMrMD2Mg%2BsHa4WXulamFOzv2n1ULC10X2Lnn4eRXoN6fsN0Z35zng01BaD2HZqSbS9jcZ67Vk4aG8EDIxDjgzT1QDP%2BssOfKz9XcLyZfteKGxss7YdYnfQQ22tYIJJbvtuxhqWFK3Yl1RHRttvd6tUKCyvgyVS%2Bi10bImBkfga588AJMMHDxr8GOqUBUyzxCCFRwR7qkBF2%2Fu%2BUt8xNCzcTB8XUdtSUkBVMeTZUAzSkefz20HJYJy0JKT4i9V%2FWAmo0hjh4TJRo9seUOLHd7TxWgKIDNXiGf8QcASzU1mwcybMM%2FFPLdCEufg7G3L%2FOFvDpwcSivKKX%2FFwvAUCI3RZEHFU8O%2FQetiSGBtrzCLtKbKTCbRJliFPX9StO6V2Cdkuj%2B3hmyBiEpADOVqSevuyl&X-Amz-Signature=b5f28e164a56351ceb2133d97531a6d058854566149440b7af2ae56352ded38a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
