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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UCPLOSS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1nvxp24B6BxMvebBN1tvdMDT%2FBfrAH7BVf5to2vGy1AiEA08DONx%2B400dqkHIeyFHtHrLmk1dQrDVlfU9ebI9Bcmgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFMB97n3dooDOhnefCrcA1HSiukGoIQRWkMYzflKcpjRg2Qi5ZiJ0CDa%2FeGevHbPx1R8Cof125ma8TQO%2FSCpRC6ttjmZzQ%2B0ToS2IqQ%2FW7raJpsuXjib4cuBFnUu9Q9ZEiS6Xc7kVAj%2FyYJSqZ%2Fw3DQx1fck07EF5oaJBuKLxx1xYFcjBzFJh2X%2BrDk1XlEH0w0nbh1ee5eQ3OjZTX90kU1VoW5oc%2Fm%2BAAs92ekBXek1j0ubUBquy%2Fig%2FADJ3T%2BIPcpr5EmGh358aiTua7UPN49Xe%2FfJqTt7ihoQ5763xKZWAFRJQ8xOFSKp%2FevWlvdojmDK%2FT1Cz28kql1CyWUMExphEG4jsQDx1FafkR363cf8dBGGsXbJK4NawI2RYHo4BmM%2BQE%2F4VTNhDiO1GDcUoszRaYkiNxRAHy7s%2F19l5%2BlsqtjnyKva9bhtpws4Rl4Va%2Fzwmq%2F1JRnLKbExWCO%2BvtIEp%2FakdCxyirS6ipaY4v5F4u7ADTYjBYXGkylKkRXf28bIjRFguOEOjZxKs%2FUyoX9YueWsj5CKVY0Y%2FUghR5AjNW9NePr1ebxASIce3dS8t3CxV%2FhMAu1tBD9keCdneUfk2TjzBfm9TvVJm88RWOmIv%2FA3FbDUgHLqwAZ2BY2bJMSgHB7gc8RRN4z5ML2cu8QGOqUBLfvCvJ6WwtyJNa3iewquoyXIssMeZgWyo3x7VPwYCvPh9if8PWc3gZkZyBBPx2bMv1Q6F2vg6mIOpjHaaXZI5m9J6wlX9mDwvlcNChQ9ARUhtMdd1CvXlnfwsXzWrUC6tlwHTTzLWNe2sveDSNzb4xiEZWQ4ziZKjUWGrOiLm%2F34smS%2B6xzEMkQp9s1YseHSVAPmsHe2T4KBFRTehBaK4l5Lhfec&X-Amz-Signature=87cf7fb99c515019eb834109fe0a9f3c2b492f5497af9f3db8e4a647084c2d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
