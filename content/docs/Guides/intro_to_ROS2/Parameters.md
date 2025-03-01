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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR6NYSAC%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD%2BQYH07Zvsi1Io5T%2Fahim0%2FHkwFitCX1UkWiu3%2BlW5NQIgJRA2OlMF79eDk%2ByvQC%2FBFL2IsVfJhfwJmPv46ahxgDAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBipmnpAK%2FEDpNvfyrcA5fshOqqivvg8Mbs5x%2BGOuG%2BX5S8jYGrCkavsZTkuzxtC%2Ba4ueNElEO1RTbUOaYo9AA57v2t485OML3Wo6%2BJU0vJCXw0k9fmNmZ5kE5CsAGwXzMBGYkWt8hSagtCJ9gQKoy2vH%2BcQRNaMklCfg1fy48xzQwrvMCX2WX4MnO9AtJ98fwEDb0ijOfKYKPwAfQVRTOiWSEfy86h2nq6f3uIaQ63B3qYvBDCEWklcCU0JoyAx2NWTENBeYYvnBqnzXahB1Y0BklPwznFtPlZXRCHxJKA2J0yvqcUvHUsUWWP3nCcffjQHrLti11z4mTUhB9%2BOmYCFJpnM%2FoBW1NlQKadEECqeHhZizj0MT40amB7F%2FENhRd9GeW2C8gFcZG%2FsYrd8VpXZnhZr0Bkbs58p4rvh%2Bwg6HrC4dgThnCqfJVHSh%2FJIK7dDrbLpGnJnqnYUQ3JfDitXXkfzeuu3y0vAR5IKIKbu75VwEI7mQPRso4aSBLchhoyzJ6uDj7wGI2%2FObwpG4QqZzzmszwaJJJOFGtZkPPvftK7OR9YmgccHh9KXaGFHHfvRJOQYCK%2FiMAY%2BJQf4H1eLdOUGhnlY2Y9i6wenJBD6JPmgXI4VBekjCsNEBibDGjaS913vbOCnZATMMDHjb4GOqUBoyFMA4JlxhTXBMytY2hqVobXPofSVmTz3YWdCcHs1E9Y1l86Z6ItZH8SpAE8Ue411NcJtdmiQLhRBDA7Iq17fRVphRU1vf9o6kwxOHs1rO3dKfbWkblhPn5WnogXsemnZMh7%2FGBNUAlTTAWnqilhvXllkeTDq37HAnEwmiYuDg8ma8gQqQBmqXYabshx%2BjP8o65bqjpbGOpTAJpJocFziuv03%2Fd7&X-Amz-Signature=9472c18cc233ffeb8ad7dab7d891933f468d69207da2f505733018d8cd9b6f58&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
