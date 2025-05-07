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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBPGCJP7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMJT5dlbTrUv%2FM3jKkqHPnyOBvBRAnq01DGY5huupUcAiEA%2BZ5EVFjxuDaxpkfGE85uk43JIkSTRQTWKOkqlHIaI8sq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDD4zvfgw3vc1x5VyGyrcA%2BoThadC8aEBbtZyvhhy%2FmO97qsWu0Lnpo0C6YpA7Ts%2Fsa88NltNY3PulGBJJhdmFVWunIB8Uu3tX5tJ3Oz57J7nl%2FL2cTfB9fxRdtTb%2FXNRqUQGWDJ1sTjBZkbqCEQSIkONbo4DMGZpuO9%2BKf%2F9ufy3Lso7GuDHOXlDW00bhePp%2FHun3YQVw6%2FEYMhzvtIvEkiqc38x0Jjgbt5cLfAwdluMJkV%2FdYHpQv%2BykYRBw36PlT2c6w5BlvoFu8z5F2H2r7HeKSDyIRF1BwJzHdpFwtbDXXbwogX5iFsuafWUUUyxQvgCgJK5p12LQ0de7kgfvo8gQ5yEdwSec8RPCQFBtoDnEGCWRdUdQNbpz8NqnauIizTPrLMJFjc8MEHEpmlVi%2FybzWQzV%2F9lG3hB76O6TMnfUm2QrLGshv4iDJEcKZP2teAcTYgWYGqthwCnH2LzSab0Vz0CLz5LVzYCPLzNQwu0bWH1MDnKdBN44NwuYxbbC507%2B1r%2FukWdoKOdfwuP9w6FKktNajH0WNsdEt63oOB63ypmnQqR2B89GjLgiSEfij83%2Bl%2FIPFVA4Z4Di5%2FFcLHhrvUlS%2FDliqS9Dk92iacpw5g7958oFAvGtPVCYj%2BvuJFV07BCCw6kB3RHMP647sAGOqUBInIQ%2B2rATizxStmQDpJ6Xfxyr05RUhFR%2FDdzusKm4SJv4QWbauOrUy4QhzNfIRVx3kUnFurSXqeW%2BQy0Dx%2BuFk8Trw6RuciBmidnFF0LPffTUUHbdBO8rYTDDr5JoNHmcRb1yqCUcmKeXw8az9p7RvB62cnOm%2BmyIU%2BoHW1H3h%2BlbDRWJwkc1d4A%2F%2F2naMU6HEYz770GjojTqwtwzYtRbfYoyRVA&X-Amz-Signature=32fb2b94279fab5c0eef569c40da53f4e22351f3dba3ec62f098f87acc57a103&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
