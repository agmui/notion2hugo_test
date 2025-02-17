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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2O5CIOE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIAmNScgWleFWwuPBT1AJ0dX0P9mduSaW3OTgSTPvzPW%2BAiBF2fAY%2BfH8%2BzAPSIrwq71OkrvqnzMDCbzj200fqwHSmSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMgVVQweGLomRpNHWBKtwDp9Dp%2BEFClw5yAC8mLT%2FzCSFXGT0rzIGQukzUflV0mJPcat0EZVNp%2F58R9C%2FyJrc2Mbfq0ashQoR0O1n1NMcmtniTzLZzyEkguvpilCzio1qSp0in2X%2BjIYXd%2BvK89pEOxwacGDVphFgi8BJt0qQclXSkSxeJlTiJaeXTBHamYw%2Bq8FAyz4Dyo0UWlSxn37bdGKUF1%2FE%2BnLyfk1BTGmKJ9CCapgzEEeSbkMx73v1CuHjGTcfx0kSh4xbcJmxL5RxhV1p2W4DOip3aJgGl1Seoj56FpFspQFK13Gus7VK8tb9%2Bfmwousvxxj8mjS8oEOSFd8rbcrkh2zoPLFkDco5guXdm94RJglOGg%2FBMsv488rxSLZkGD1toShSnRgAP5UftY0vqjzK0qgNdW2KmnvsNOff5N%2FB3UTJhB0c25BAQvcNLV46U4WIBxM4VYxLUmZW1QJFL0PLDQlUPVHFRQHDXQd%2FKuX4EL2kDa6bdB4%2F0LbPDp03crT19dIrdK7zJM%2BU5J3llv2oVfrXH2sAqXLWh2tfzJ2lCTc5H6Cx63PcNu5pkEtFLj%2FttEiLBhVRF9vq6Veqc346ythi8rY7bMijolPctV%2F05WXvt6jUyVy5K6z4Qoj5ZSUYipmxzjOkwlZvKvQY6pgFJ4Jd9uU72MXWmHugiB6DZ3sf6liDh3XXcIZBvTP14BibaXe0FmmyK0p0J3KjrOjwR1Q3gIFkGxH8j8Dur6aBFNySMUo2rxaLFqzVHaZOh6lSJxFA0T3WFIfXKKhrlyBiyZmvELHsLRF9Z%2BAr00K2yYaLE5q3%2FczTFE1WV2FcULDbr5OqkSL%2Bw7%2F2aFxpS6fXJIaMVJ89LfyKRblXVLPWbP0tSUK%2Fa&X-Amz-Signature=37e733db8337d8952bb9a090407951fc3be4def6dfbebf28317e1b8235123bf2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
