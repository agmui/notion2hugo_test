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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNUYABD4%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6GHRGh3AuWmnt%2BHNtuda%2BM52zjziLdb1tZ4p9sqH1mAIgKhn%2B7vrg0z5UAsohG23hF0pXQhgSW9rVDY6mKUJkdMIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUpQPVorN%2Fqjpe2jSrcA5oLD0dZb9KnpvTZ8IZBqeb5SpFG6qQErndOW6Rr7KCq9ryE4cq9iTOvo0XINvbWee0H64VSKxVksOz4FVoigRr0JYvVm7ZNLKWlwUPbnZxTATZQ7vWDa6ZSlYcHllVSgxs1rdxQbFpS2ECSQ7S6vpcn02hzSoXXMQ0yLKXzg6ua8f1vAHRF2XgSaUPr7g2LN5OGMT9zO9pvTyPlc29%2FpXap%2B30PeZoHwQVTCf%2BnN5RVVZFV76H31Yz8vxOB6m6lLR9GyG0X0Fl7iRqmBui371KK6zunAtKHo%2BCDs0d0yjcK%2F4kTdTvsB5Ity3NLeEmg8pT76w%2FfN4UG7pfyPbE6MntlD%2FdYxqap6g7KBl9IiTc%2F7Hb8z0n8Fc9R%2BFpypdRU%2FsRHQ4WgFtezhwDOfbkarDTHUu%2F5wCbS4BSJc4%2FntJRYUB8Lfx%2B3VBK96D7DzfeqNlTv07FnFTRdom%2BTjky2qnhVpnS%2BAM%2BrllintTFos7aZDyK9OZ%2B%2F7LG5vVq9ig2nbbb6SfmV2sKkGXK9SZQceCckV8mUDwiKf%2BzqfzmFKtYh%2Bb6t0jGBTe3YIB4fbRvsktO9huCRa3MrCkoSb8alIYT1KC5XB70tS%2BoAp%2F4Bap6gm%2BlW74xwrOeMJJ%2BPMPaS98MGOqUBiV%2B8F2ZnTGgIXBS6uB6TVES47mClrfjdLxVPulp1AdxdoUkaMBeKCkLIuAv7qFqIOMcuhMbMpFFrLUnBUg5O6wG8kBY0nK3t0QtpXVX4DmST6jCT8WKdCG%2F%2BB%2FA%2BxmHE3IUPQsucYinQGeTFFr3DlHJXc5Yo1%2Biu4cvuvCX9ydbiVwFrXobr%2FtMnkxh%2Fp8j2jAexXuVvjxOQZI8bBLp3Njuzi5KP&X-Amz-Signature=d9ac83d7c0d76e5a22e34426e044a3237975119932038c76cbf8c07c689d34bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
