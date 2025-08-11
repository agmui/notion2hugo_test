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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKRPBHBN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ%2BO18dGGfQXAKXA9Vg1wDA9yacHvmIP8s4vbpkHmVyQIgPk%2FffV4%2BDV6nYrX%2Buvjx5A8i%2FcatJ7QWBV0jynnRRd8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKcT2LsR%2BPnt8cy%2BSrcAzhCXI0ciFNiizvdJ%2FtdDXKI9omM25sC940l9JyL8c0FJPnU4rn65sovmwFqV0ve%2BJKSRbua29WBKdfvMi4LIF6qbOGksZ4yfWF8QoLirIvePQrTaoxDUMl4T44wRuQgUzcJ1ibtpNHOw2zX9Ku74Q9S6uz4X%2FxuDZCLDEi5QyM4pVMU4RajupKT0gtgn%2FHkhpwoQoc1VxJ%2FlwsulVdL%2BpinDMxzZQBuQeuzhHW6ddNmnoEj7fzB0aBR9QDgzMHHv8ThRy5zh09BAgFsE6rZlOXhEPKiesTM9aFdOFoQpYLlQIJddceN%2BbPYxZUegLdTZzFH7OZWv3w87dFwpSjt%2FvSiXvq60qofGQFBKI%2FZtCCkDRNCTyHqhUjQRY7uu877Q85WOTPljattxMuD87eDVFFakBPSppTZq5YJDjO%2Brs71eGzmehwlxZK4TmF4kRPgdJFiM%2FQpWtIHCst7UTEer4zQa%2BscsLTEe4tRBTKq5PNjn35itDi%2BYXlUUsON4LI323WTGLTEuIO%2BWc7omkaPJQWmqKSPi5PVbup0zfZiFgvv7svFhxWTtBx6PU6c62DrppZheUytgrsIkcT6Mud8e8jE%2B%2BSaOCNx6KhHYkFcIWQkKImdZB16ij2YT8U4MMb35cQGOqUBpa7vAaQwYT835DC1IOyOR%2BLRzNTVfOJef0IJBlxdNeTwYgKpxFxBLdMMWq%2BCl%2FUcelvJ%2B77uCsv36tjiU8NcP14A2SGI9Vg5Lg%2BJQav9UD3p0HHMf2YvAMNDlaWlPuTiOIXkEDsw0FdPENkApFCvjgu5gj4idZBz1e6dCOQlMAKhtmmJzIdIGbVNCF6vl4uzbqNcYM3459Qmlh0%2BSIOrO13bd%2F6e&X-Amz-Signature=c11259103b932f3cddeee862354c1843e4add2ba8eca6d7e10240cd9d3e93789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
