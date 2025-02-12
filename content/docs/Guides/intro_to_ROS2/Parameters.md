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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJA5WWRC%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgCZreoWmX0ezOatfnIxhnmNtEOXcOla2xxsgZanKBUgIhAOz0jA6FSySbdRzrozYytVfuXxontCqWWsrnll3ZYPnGKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBmu8JQMnvGeY840oq3ANT%2F%2BhhG5LZ4bHyFLWQzVJzIxOnc8Zmt2pwGjpTW1UVg%2Fso3iK1Yf8pjiPo1Lv5S1U%2FzTpAliBTINs8%2FkF%2FIw51SYDtdGu8y%2FvF2jjRPx6wReipnsAIpCmS24L3LmKEipHRoUM33j1hSikvTMddRNG9tSLEXFmu%2FuhHLxjXj17wt2r2uwQBS7%2FkzYxFv54ZVDxJf4xL0NqQcCJuaDM%2BKKyxx0uoxcPo0peWocIYg3VA87Q0u60hoEuC31pjI1jvr%2FNVlwbD4TjSkAJvRkU5NNTjVdMcPF%2F1hfAIPz5Xr%2FkiCu5QD7g7s1B2ony%2Ba%2F0WsN%2BYW%2Fmtuwn6eh2GElVUi6BKpp0JhDon3PkxodYYuHUph4%2B1SjJTF%2FflbblXetm3DOnPYgA9PQLlcg514Kbpk4QLHCDMhN8lJrPEOCN3bLOIZ1DLQRuTWmqtSSLM6nb5XAaAtpJUpNwexYwTKaFJe2EitfUbEqP%2FnoiQEGLx2EZJgYfAX%2FDW3ZXro%2FAO8T2QyuEyyl92lJ4VtA24i5YPwIQfYCWeaUr%2Fno%2FhxNc2KAHq%2FKuUlk%2BQ8YwkRVRT7URRe%2Bt1fnvBhOP7h5pz7G4%2FNYIAdSg6r9NfgKsEqDj%2Fa9%2BxtNoJEEmQDmukuE4VvTCWiLG9BjqkAdCKjDSZpOBtfkQghsEXN9WLUQKTeG%2B5edt919gaed0QkUwPdH58TVgF7BFeYxcpTjpPjm0XCxtVVFQdRtv58hkOMhnJqvJSyf0uNR6GU9D%2B82Dc%2FbjYZoEGwaqYSghgOg%2FdQN%2F5ccv1JiCH4OfBzBIHYoOtIwhgJIoEgDb8h8YyPz%2BYbrpz%2BOScwG0QsdfXs6%2F9PpfiHYZy%2FzGYYv%2FTPQ6hLANH&X-Amz-Signature=04f9963cff0e33cd1e6ff9df57e2e4bcc6e6478d606f937e9240692c7530db1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
