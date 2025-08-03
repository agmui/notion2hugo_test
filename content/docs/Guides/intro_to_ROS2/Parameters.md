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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5RVGREC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR6MdzPqctk7ibDiiUCjpiDZCeSp4c6TpV9jmRHvRyFAIgDGELhiGMRoMa1ZVPnU8SwSDPfm%2F6FELv3y64TzXaplYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDN8f7jZyqW%2FnW3HX6CrcAyoHP9tgEgMjLpv%2FxgYcWn9j1Cy8vYuAimP4O8C%2BasQiJYGQXtFQh45QnxWg2otckI608kn2SvPdRbUnWdn8oIgIJTeDsTnCTGXlL7cgkHDRQZ%2FI5QT1k9UY0M1mekTWWi3tqRc7TzxFGWRzSvhJiof%2FSW8rwgJkRqwOgb6TAYzJ9BZK5cbJuXiWTyGM3vBEVr35Vi6%2F1F5iNErOXzc1cJwtRqE43lXCw%2FIGVjiVtO9gR83DnEGRE2st8r5h6DwSNQBp9gePw3X3NFngvnsBvqdu0pJseRTyLUrLY4fVoFYADMMavDm1vtf3fvBJDrVBFnZRfH1fudNrn1gOqx1Dhk8pJ%2FWX%2FySRQF7kK76Qa9z7HGAPRlhuPhEn%2BMxjso7455b7uxk4g7g3gRl2sBAahvx%2BPdiPpyOdkO91VzGkxctiNdw1CuByh5G17VtyJyzL9vIJhPCA%2Bhi4l2%2FFREiO700mTMlgBJHpohzy6xuPxePQ%2FmYPEIsY%2BwWBUJ9mUJhVcH831WFjlWwg57yBlQQFnK7Ln1EzDYtgDBi%2B7r6%2B8ywb2bAMhR0OpY25pTCKEtQsHE%2F%2F6AqO4dL%2BnvOqtItRvnxarmUgqkhz9bgtBOITP3i9hGa4BZLnHpws%2FuBkMP7ZvsQGOqUB%2FXUxrFSJvN6PR6MA2TKQerXzuDgJm1sSl3cb7hnZDDp0BXo%2Br7Ej3zN43meq95K5W3e0IGUJSiGlfSJUu9vPyHgwg%2FmBxs0MBg2MiprJ1%2FxpL5RI9QUBYxHrIeSRq6Gu%2BNKstpeS0juftJU3Xh%2Bp6ON54qf9ekAZT1UXZ04TKdw91961nRw4ETU0%2FCl3f5S4hzP8NH4SRDMpeqVlRITjihUhFqSj&X-Amz-Signature=f6f267b7a6392b7a24e131e8a5fbf10f3734937a2f714521a0ffd17f0b2581aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
