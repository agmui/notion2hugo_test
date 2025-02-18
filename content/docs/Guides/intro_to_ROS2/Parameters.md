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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5VAKIE%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDbH%2FyulCSmApWlFC0G08Eopk1H3rulIyMa7mMH9CXJ0AIhAM6wh6iW0FAaFrDWzUr58BWw7TzD5ZsGEpugZf6aJJ63KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxztISOchBPlpJ4jRoq3AOKf%2FBH0acJdxM2mxR2j4YcuMTYc5ugxCVzBo0TtTzzew%2FTSgmThla4QEmsTthTBHxLSDtGt53xD7o%2Fq7MFwkQBXaNIe%2FmFcIrG%2FqwKh1jxobTOn5kMZqsBTAMqXgbfjjDBsUQVdpjrlEM3Mni9whQfhZYqwmSVNko7g9MgmevTSjqvTZHYWnTqiF3XXt1%2F313Xr0PzQK670gpYH383x%2BazN65dVtfSQ7bDnBstkfi%2B%2Bh8tB2bSo1Cclb5FpPExxKSPoNZHx2xSpCd0JTs2vQSK2pChbsmjz8S6vbShj%2BnAVwoX%2BNRDiTs1YwZF9cQ6Mw%2Bzsv%2Bg%2FHtjmuljJO%2Br0U1FhOfaCWlPF5lF6Xz8reFlx2Pu%2Fqj5yiKsvFedUUq1i9gXo4r7S%2F%2FfbxHT0gfH0nrJyMKgSinAsMKLGvXID6Br9a0yrd38aI6%2BCgFdWdaHQvuuqOY3z9pqNd9VyBzBv26h0pdh1Zjrp41lwVwZOYK3YCkOLyVG5uv7U%2BcNLfCB8bT5%2BLJcAnF%2Fedyb%2BsquU93ncwXeOBtxNVectCh1CHW0pcstz9YHnoaJkMu9nG%2FOdZgu6J7OaNp2pMtDOtUgjUmTQJcsRrj8TXO8gD1O%2Fn15bKh24iJD20Mrr6Y4DTD4%2FtC9BjqkAWPYYAoFofZqs%2FVjjgPNGteG0g8SSJwlV6rJQshgLhu5pETGNDPerQlzXoZwNIQpKcyPNQlLn%2FMotrhEevQQEYo9wSsYpHRaZ8mEcRQquTubRA9C0%2FqpzTWhTcBnEFwnVEtYIJhxW%2Bc%2BuSVu56P%2BllF5xp6JrW4VfcdU0EPg0FLUlZmX8GItfrX8w3D3HKoG7X%2Bdka4geN%2BexG71OPa18ujPn1jP&X-Amz-Signature=d4c699290a0f91d46ad1530ac5c7da6e7f52a8509379873d366f388b2e11cf99&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
