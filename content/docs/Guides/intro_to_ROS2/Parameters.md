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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJKL6CR3%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID48XXP8XV68VhHQf%2F7eqKnrEh3xah%2FfGmnbUyLW35p1AiEAuWCFIxxyIUz%2FnaIUUKiwRD%2BOStKqMF3LnguZodRE68cqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKRI8nzz59z0kVWqyrcA9SzLCSO0Otcpk0KxurTWxJA41zO15Rs1YBVOXizsWf9pRLzsMUigb02%2BpRHlwmiR87RmADZ7ZyldYgLa%2FJAy%2BAfb1Ua78zEoujzJCLQLiBopvmcrLW2B8kO9EWj2J8%2FkG06Dg8%2B1%2Bg2XqRsElmaN82n%2F7Z1hvHMkykM4%2BpSYGiKMKFV3aLMztGjv%2B4YLY3%2FovYc11ryfIm3DSb%2BBMl%2BxqzPjs%2BRQFs5eIxIMl1T3%2BqYqwh6lVePzMqoXRSoOKGF8k%2FXPla9ryxm4Agos8vT%2FJhnuKqkh%2B1Cvgavu4GcQQGjIcLnaz2i%2BS6I4mLr3EkfgAWYM%2Fvbo0pa48SzhLe1QoQMAZqaNTmELAbkvy1wUi6UjVe%2BUTj4SLkAo1nnH1oooGuG7pyC63c9DoKwOT3OgiaBpDJv1VjwyhUlVtHiWP7hDmJ%2BmXg29IszjYt4BXpNYJyqGz6QH39q1YB9OdO%2F4WnVtPTQQf8O1PZuh06JV2qgwYK7hBhY748W0WZIKvKGkhBI91%2BLCfDODkQ2bweThPg%2FoTSXp3%2FpEO5Bznk6r95zDDz9gXdKZGSf7KaktyjeVPN2XPi%2Ba5uRMo5yX6IHHQQF6lA0DhoLOQGiQg5169vqgjT1%2FF%2FfsOU7zyOtMObn%2BcMGOqUBg%2FnmhDDono7nnA8MLYyf5CpW99CeA2Cx81X362vyXshONgyqt29Jj5IGgV%2Fg7el5yTI%2FPfoS3Xk%2FE%2BDaaMPje%2FNjEB6lfdi7hT%2B0J2J56dFwBSKIbBwZ6q1gs06PqI%2Bp%2Bg6w%2BmoQWosG%2F5VjyK5RsRt0%2F4cxGyzmzyRwIgwzHeReyPazuwNh%2Be9ccadYgvCc2CsvOIShKUnvKao%2BV0bgzfuaugz8&X-Amz-Signature=ae7a2221428bc888cb665f9c32c2a934e42cafa44f8d32aac9cc40db6690b3f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
