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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWUZ6GT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGk2jSC2ZcD2kRCA43qXBQmTtMjAjDp6YP7x1Z8g2z5rAiEAx99f1Ljwd%2BwjFVNeHRFVSNAHjLl3FbxAzmudiCoUBUoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBD%2Bp8RbD4aFl04IvyrcA4ZtK4%2BgnI5uoFVSKepOAOt5gQdojXvQwXAS%2FV1IFrXsPBwd62xnuD3gFI8iquKS3mDqZ8ltoUnwcTaOpjNtqs4w9tgz0VqKcLz99%2FI1f7%2BY6Ri%2BwKXZ7%2BgjbQvOd6KU4JmIi3s47y%2FR6frDqMcg9Nf1VOYR6yidLCeO8RjcpWi0WRMFz9KqxJWakC5yk%2BgDT1YupZKLCHzcg990mNojsoaUl9K2dDX7KWia3I6fdGQcxHKkv7B%2FOpMMKIqoH%2Frzwb4Y8BRn3jf24B62Yev2xxHpfy6sSeU1%2B0ryV%2FNu0JkPuAphaA1RKEmYKce8SuFRxfBTmV%2BAGzfe1o3ap2R1NmMzBkVR8ESyN%2BeGy9wON%2BjGkxsUUWnsXozWeN4hXcC4EvQE%2Fm6e%2FQxL5hccGCVtoP0ndAHinZRhNO26FciNESrUJ1R1LW18HxQM8xJ%2FEOLvjk5v9dnYmo64wglhfo1JqF6Til4VNibGLAZfy34W04MZC%2ByoutRYxHCZax4i9GGNNTXiD%2B3j44X6k6dFgdrPVMSIva%2BSZFEG8ncmeHNQp%2BSkqed593uw%2Bqp0QgKl%2FplisiODC7zcirPT1ZOkBGgT7936ORl1YAQSoj0hzwL4ADHmt3rACzpJIuJdsc78MMTvmsEGOqUBRcl0LhZUtOyUoIOM26buDh7dS7LRJjua76BSBZI7iGnEtOZLIfsuGzLyQB8EUMJpvx%2FWbDVPswQRVmo5jOzurCMow7u2DQDLYONUtFPGfhNBQtjBfM1pl3%2F6ww0eyV4C7pDt74s9mspdgbPUqQcMpMMbDevoMGc%2BYBiajAOKXMtdJFR04OuM3cPwZNlK5SiBugCpDpyURG%2FJFEPe%2FfSMU6Q82DGb&X-Amz-Signature=b7f44e916b1442ef8ddf35ae1a07d95b64e4e757ab1a1d68540ea4513c119873&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
