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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHQYOQAX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDPhV8Qfz5SBpP61qATEerVYFV%2FySq7CZ7P4dZZTD0powIgL0mfk0MKSuCfgY0%2FpwMSz%2BfG9%2F3n4l2GyTZ4NNZ6nw8qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHA2zLzeW3FOqaDcrircA3fwr7k4dBDRmvcJov84QYQrtWUAt7OWA6pyqdc69%2FvJ9tStTdeX4Jjim13oX5Zt6iJJCWrP%2BcCKFNAdvbth9Fmsp87NEjbRE9YCX1%2BiAGJX55CkYUZpwacltW7E5n8xbckanE0W%2FeZaMsWx7LVKgNYnsgSmgpBoLlpKG962RFZVt2ozQnt818HtfV4AsjF6sGXEP5P0WHMOyeEM17eH0VS9Uw5cEcriIPV%2F5r6fIx%2BJPNZ3NoMyUIRVsxniKxjxr%2BZwv9wp1LZxSyAi5wQOA6XMQqr1lT61GHL9DoDm69GOtA94uXo%2BGFxrOe%2B%2Fj2ZpMuMo3krPGKWyClMzAHcN%2F2yk69bbfX4ChRPiZDPnNK8K0aibqQRv7h1uNHnN4mCRcuqxt%2Ft6YEX%2FWe%2BifCIbDU8xsMcRM6G%2FOUPk439%2BNrbrQdCRDRbMdmI5OKYQQnMGYNyPjylPwGa%2FFZVqYb5JsOTSi4HtDsGZwWFFoCso0RkrEwYE1FQWihlO7t9QyHOfANmh81zqIr25eJ3NSa81cK0U%2F260USmOcA1JB%2BogkSf0Uht2Pbu%2B%2BzNj%2Bw1077kP%2B3hfXmMpygjF0hzm%2BaiQVv44c1pVBszu6LzpaWN8Kf6q1JoYf0EhWhY3iUzPMIrZ5b8GOqUB9LFDPBeG1vI4MyvYuQxCMszjdPDIpgnLavkE%2FEqFia2vQWVDIDAApOQYhnuJOfJ5uFufc70NoiL88YR%2F7aurBUPCmPAFG106O6K3%2Fwk7reaRLbfTzvhXRlZbuusQkr9ONanqaX9NddB%2FOvo7CpYX4mDNMI7Uklg3fDE%2FkJfBV8Vys9MAIqRZ8u6HqnARMss7It8BXnumNy48VTCiD%2FBclSuFBHjU&X-Amz-Signature=cce26e4e602f7dde787546354277e9b997e44fcefac49907ca0f518c436dc8a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
