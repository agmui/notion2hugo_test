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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JIS3NBV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4IjW%2Fqq4AHKZbcQYzP1164Va7FwQRw0Hsq6IWkJWV%2BAiEA2IvOExFsd4WBAgjJPrUB%2F8WjCBsE7oezHRxYt7iA82Iq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFKpxmiYk0EEqmCs%2FCrcA10Zj%2ByX5%2B2%2FtMg2TtdrY8AJKeJRarlpACKHTSRiZOKKfBzZmeze2Hk4A9Iv08K1lptaM5qeTzTD%2FOe%2FFMRy2AN48jMZcDMwH0zhj5NTi5NE9twS%2BT%2BEI8A0LlQsWXf0ItR7Yf%2ByKUxIRh6vaf3dES526rrddTYjbRXlDTSPJBVeuLwQ23nrYM6eu5XRPG7D4lqdpEA4OD4QLwEl5ReflnAjBJtxO5hk7a9q1%2FoDxoBhkYeTk1p8ttqOK%2FbHxM%2FtxrCJq5v47kOvWg6O30M3LOuux8jysPwPxxMH18pC5KCcmuAPOqSHZiomJlb6k5kdesdfJR%2B0cv68kWF2pZ2%2FKkWFXPjydgwjbzjSfcZeECfZP%2BvOzAxx0vsBv6xWA8iIH3amOClzf%2BJu%2FqJzm%2Fp8lGH6PhP3zOrRmJ5bCkiIQEjbWuiCWLXn30Gh8glsbtsVeo1L1LK7uI1xiWCWIcm42T%2F4JV9PV6FdYGnWxzorBxjvXtG7o0eu3d5FoOJ87lRNSEnCTDDPLGQm%2FnCrgqDhFfW%2Fofef7t4rmr%2BesqyhlHnbPRYh%2FUk4syDdJ66USFjB7WMzYms5FAuVjJSZ6oUAnRR3DeK6kvwgK80YebQJVAUHhV%2FlyXoDC7fp2UMYMJbrjb8GOqUB8Z2%2BXCpuekbzV%2Fo0Ja%2FNZ4yU6vXcAdxCyB4HDs9GJhdJJol6sCjgbNLpSMMo1S5s9P6xkYNiBJ23nAG%2BUUob%2Fp8GZhN%2BqX2dHI8wR%2FalKNmNgvKbX0ERhkxtPBs9YgiZ7BHeTGuBvMNXb%2B5atcnwBvwvSxfRBx%2BqNYI6jhjVGpG5XZd%2FINouGX8Sp%2BccRJAol8xpXUfNOYgNr2Zfn%2BaWW9Dk%2BsSG&X-Amz-Signature=a0b292c76f0d1dc67ab9dd109b5f8c9fdc0808b85120e8738466a2518e2709eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
