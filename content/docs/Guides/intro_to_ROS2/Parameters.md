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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL5HO7SE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk3YrcI7op8hd%2FMPeulTB9USjNwdiv9aQchOSyaThnwAIgMpPDpZ00pTdxQfTZSAB5gpAyZSarem91xVDiHdAl2p4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLppWCTW%2Bikp4KTXGircA5Fq5SAdmuw8dvsYJAQ4NIYpqwEV1jGFSUuh%2Ftz%2F5pcQZnTHWJ1hMgGgEBdJjGTuM2D8RoB0Lsa6%2FQHE%2BMhXysk3I1Hi7EnIQJ31kJTva%2B%2FJTYflk8V0WQd1VWTFc6O2A79ELKj6IQ6Xyc%2FA4fahVSkL9JbXqfhSCKMBO1LVrB6CrRXRO63KL47g4Se7w506tp3eSCDsX09b9RQMtbyFeBmbZiFRklvvVkNAHGPEbEqzsu85f7HmYRFP6oc3Xe11seK2kPxG%2Feh2vCgNjZzietSGxftOJejwWB86B4vXHo0fq1LB44fmyaq%2BHYlusLKxAeYHPM9RgDfaYBNhjaiv0YOK1aPgp0nqllQREmNhFJUFCN7uJhngh1uPZmrkFxHP55A6BmbDOWPWuL6BQ8aH%2FHP3pXfWlK%2BErHYbIPRs%2FvpII0eZ%2FlkgGWVXJYFMQVkiU8GJqcTBEEWAlwnXpbLimPz9lqEq%2FpAjVJHzoDTdtd71xNIR55DhpoyxYeQQRwoweBOqT8q0kSv1pRJbRx7VUdNiuN35gTTL9UZabVdu93oct5mFRBYDVS7CNxtWCCmt9oWoNTEKCBcWduOyEnMXwuQ97dxZiFySTLJzZw%2FN70wPjE1GwpSd9eh1XaFZMNiT98MGOqUBjDpNjXN3Crhrs1e%2FW0YPhqiZuRnmG1srrTC%2B6go4ntun9IZyblRWljpOM1FULSUsv%2FG7P7Ice2P29Qzp%2F%2B9%2FccAhknO%2FYK8cu7JALy2dBGb7gqz545%2B5NMKcLpg%2Bb%2BQHwLxpp0FBGGhWchcdvqcgUWWxqcrP4u1ar2sPwXxKpM0wree576PO0QMjtiRsO6d13bM%2Fu4XTH0dAzrCpIV2j5srxkgN4&X-Amz-Signature=3dec146a1bbe6a636726637829d590a0d68852185935ec226eceb838859f7c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
