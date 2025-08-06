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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VTRXEFE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDW805Pb7wjd8Bal42%2F%2B07pbdRrYnRaXvfb%2BqeHUPhE%2FAIgImT%2BjR2YLFxxKGdGyUIs%2FLLmP5YMB7YtRGoZm557K90q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGq2Oig0oGk9lk7cRyrcA37703ExGpFrF2D3y3LusuKcFQ0SDrq%2BrupP1zDVm4CQ%2BS8x%2BH2LrBfBJ1yw%2FvEfdN%2Fkl8vM7reOfnPndBn4%2F4PnwImfZAOR1j6xUA7Zux2oc4yBjJ6zmnd5Qky42UsHe0e%2BoTgWiN6f7dgTVxJhn0kGYhQHAVohBlRmY7qRIBg%2BT00rFSRDJtcjC7iasOMjrLtBEacFHf7W%2F%2BH1qDnkeJh8nTu%2FXMKnMPxjmKxgogqjrBc5jguSz3LvETj2gYkYXpy6h4O5X%2Bxx8mqhSmEzN6u8gtdL%2B1YrMjDiXSKHR0tcLswZCFmSX7jCg7o5mzUFFctpfa6jjQ%2FI4oEoVDxeYNrhuGiROBalsjH3D2YbJR84O727UZVdQgFTFwK23BWnDOrP6W3rFBm6h3ZUY%2F32VCcivH8Kr5qkSIV8rApbQPIu86BTi9TBdVLWHa4G9oVkChhYOhEtbZgL9ywhf%2BUqsMTLUGQ05LmBH%2F9skjf4BroytTFKeM1dwCBAb9N1J%2BIYnlqBcahVMvduuM3ZvkQ52lpLTm2ogZcsHzRoVe9XaFC9Dmt%2FGTSVXkYrga2hUfC4cQirsFkupUvAwDhIeJawIb%2FWSjzfL7WClqHdQvQSdgtmQF7QmJdT%2F7wn4pXCMJHQzMQGOqUBvBvLi%2BvTXv6FxtPXuwjK39V1DjQljSRqJbybPol8PuoLCOXVhcCX%2FoDW2aAgHUPP2M%2BUN2RlUcvyksxMgZq0ZmeTt6YkaWMkal%2FWO9pHgNnmtryGuApk1n7iOXOCTvZF3kzAuZda1frfTtLT3uBQuXFhJj7o%2Fq17xee8DmuIrt%2BLpBVKINAmIN%2BMFbZZUW5s5oIWZdFGL%2F1RR%2FjWEqVn%2BzaqNLNE&X-Amz-Signature=d02bf15032a17a5bc4665dfecf1350025e3b63a78bf6492a3dbd744053d695c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
