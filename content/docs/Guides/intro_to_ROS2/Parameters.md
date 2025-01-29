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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB2BOXZZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BRUwrJRT8wB0JOewaBc4AXM1oCHIuk%2FI7rNYf2MutkAiAZ9NX9slxMHkKtuKtFPhSwlVO8qNq1%2BFXiDO%2FGzGPuoyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQoO6iQKIIc77GCmDKtwDNHQEFRRXsVnddbKfH1Uu6LUIsr%2FaKaErcj%2BeKr5tYKjpFWX%2FIyr1WfzDMR9Ybom3hdwwhbac0QiT%2FECGfXUNMTUL3xtXBHN%2Fn588VTFYasxSroZ6XjnAFf%2BFQqyueL12pTkgWw3YxxMMGh15cXj%2FLbjS54N0w0kWb6L3DXRyMJk6IX8C42wn3YKS7mOcxGJcmLZ4uFUm835dJkCiGU7ZmkUxhttfgdbhJydn1ZVvanmJLQwm8ZNzKBzCvEdcmKtRniKJg6WfBbrlvirxdK3iChrmUXkhHQXCew499F4dzW5VT7vtrRj4SN%2Bkjet9PmbAxVicIyYRR4gnX6iJFq4gB04UwC81B27fOIiT%2B9AJqWDTfR6%2BfmlL1wHkshjVhOTALu%2FXlaF%2B9nQNA0mBzqk9WtdS6IYKPVHBmx%2Bph6wz3b%2BrgobiXFoiE6ZVlP6U6%2FpFdAqifPJWPbTqV%2FqSSvTb19V5Q%2FxCba%2FlhSa5FH6YFLXY41rCda9ywBFul%2BEteQaFeXF9uKq%2BoM6ljPVNlwwKK9R36zXbB2Ue6kFEsySHlG96ZGlAl%2F755ALEN98nC%2B%2FNnyM414f6KDVZPlyzxZClyn2F%2BRNSeNUtznyRPLjpyTyGlDnqpBYia5nsdOkwwqrqvAY6pgGPvEoCj%2B28GiGZe2UiS90c1L576GiliLTrdRre7ftgqRDMHRPY07aom21vzu8vaFniS%2FY4lKhXd1UWpp7Zd7Ptzmr8UiN6coeZrvPWXs0oKtu7Hw1NkfbxN4iS8cJiKw6Mp5RC4Pfd8mjEU5P6ZYf5RDwp7zhCoGOpcjR6fVLM5vwUPvBXciLjta5EC1esccHr%2BLlOiZpFMOaNLs8g3yGfbjKkwVOr&X-Amz-Signature=49fb48b1ce456b0fc4a56b42074691f1b774196656bf9c801fc97b3d5ffce189&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
