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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVDFEJO6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjyJciNKuWX1zxEVSI0dLuVkEA6L8Jmfn8zMtKhV32AgIgcxNvJRHgke2sUb%2BVsIbf%2BdqvK1gAN2QMVnSidByF3h8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW6f%2B68HiqLONSrICrcA3j2Rp81AKK%2BVb7tyGjZD%2Fhj%2BikgXyUJIgayoHy%2FDyXpOh6jLZq72jhSAXUAMSi%2Flv4EbigWL6XrfT%2BzWjhzAlUEglk5cEzEUXdM6ECqh1ahsi8SG3xndLyoiK34GCMI6ckJUS4sVgmfUiNlZB1oQ%2FDDlp%2Ffg0WlwzbmcrfdSnV4Pec5HQ%2FJS9oqM1Jgbqh4shRjQen7vn9ShnzOXz2%2BW9Vt3q%2B56E%2FJYMF1vQ%2Bg0fYAbgVpsHx0KnKQOGN4L%2Fm3SGkgEVnn%2BBothh6ywkDaGZcQPgdC0afL55nH99aRWsvNpytlYtsixQ4WiceBrtRBLFwzb0c5rEgr4fALumwZZURntZvrH3dxt4TYQfype%2F54HJAGMtPOgL%2FmckOmuWa5z%2BxCWeybXqHYt6x0Py7kMRJDByfzzecuSAyQiS1gwtcevpI0mxl%2BwowYlcO0qe4m6PQpebzVFfEV5rLiA1PLZ5uhjmUAyoHQnOMcb5T2cFgv1pYFTIH0gnbsM2CQRwzde3ENm9KFvp7ACPvfgo%2BA0jQDmy7M7o99L0b19H8RuJHuFczvs%2B6HEcfkcCBUla9jpZi%2Fx7qqMrEk1Pcyxu1VSSsNkduaCarR%2FSslwDIDuv%2FhsqomRNk%2Fxw8blNOcMIzq5r0GOqUBkMTpAuF%2F%2B4%2BIFYayho1GOG2gTFJNHUMvJ1gFnjyN9mMgetwzXqqYbYY4QXOc4w86jyeNo%2BUYZNEiW6Ubj6JxcOiWBmSIBf8MzXZIQeJC1D4wxiterrG8LI2b%2F%2BsP9%2Fch8k2j9Pay3xCi9N8av6Bnc8kV1sXd0kdqEJhnA939CV6NEIYogWskCVbW1Bl85FVf63p4zQcZFGjXv85xlu6qBWDMmrZV&X-Amz-Signature=4b117eff9277752dc13f09384ac67d611c2341445e1c1adb1e0144df0767756a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
