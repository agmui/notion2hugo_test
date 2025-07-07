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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EXPKPYJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDkHIbfEaGHQ%2BMOrLgMhvM6ny0PDnbMEYGiFkFajAl0HAIgY1p1aMCjcdPNVw69FsV%2Fqupe%2FYY83yOXftRSfK0BcqYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKiY%2FsBLFYXnNm0h9SrcA%2FCQycScbar3k2WdS9yQHU1PVI6RE8hHmMoc93pnM2KnroPhvEBjuLf9n962a8kSJduA3vYcNZnO60yh0I9r%2FTIWcfvMoBC%2BNijXU5q5D4%2BGABHJnpRRNWss2p0hsprM%2BGtLUAWyIjQ9LELroCGgF17rqx3DXLWU%2BNVSBQBMXBIaUZeiqpFjO31qBXtkBGe0AUDj783NtzjwS%2B3y0eO323FrAutB%2BjkdS132ViZiBdYdEjnSNdT89P%2FrXm8CUSIULElpbEJRePL2CNBRbTGmi7FwAPMmmbSYUJcFt6nvedqU1ym8QiExDmAsRmRjEfC1xhk%2BSFJvPsiJYGs4b3Hme5M7H1iKjKBvGgAtkUolPoO%2BZDM4dLUNpS5RPkuCrNt2iMHfKEEiDs8CEOfBw0r2VnhxB3XurYT0yD5eqdClXy7YeNMeEyztDQWfeyiwia3S5D2DbwrEUU7HNRR8V%2F%2F5zvCcVL9PNtBwT%2BBeQ7PErKwUf%2FcRxheAq9nKkf4lqCj8SwqS2UHtTCey%2BYZMraZ11vZC%2BgFpRT5bKaYysh7BtoVYSaHffEZx4FYZGxlTF9BLLLJkw%2FeEEOxGq3ZS%2BY9E9itBLUSJSPM6Kcme0n8UQ1c0ewBFZl5IU6FJVXcbMOPpsMMGOqUB5%2FWI3QCHDSB3NhZAgMLqvJSsR890NQKdidM6kDnOD%2FS0VknUL7%2F3kwsGfOmCNnOxmY8QuxPNqazM%2B5dzTeAchkJJbofNIcOwG30J2kNUi7ofBAfbGLBMGqjWOVSgQwDfE413RDbErzSmvEowRpkbLVUshJxtmD6BnebHJQD0IjSkz%2FYCyuminLLGgaQLOCacDq0599ZQq6fBIxFw85mw0bNXVrUU&X-Amz-Signature=f24ea948853ed0958dbfc8241a6520fad09bb059d975b96b88c6edcd587c7ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
