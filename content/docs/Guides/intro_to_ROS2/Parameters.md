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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGXLDRMJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDYFdvyNG9Xst9gF2JjySh0L4PTNK1%2FIYaRQ6pmGgDY5AiEA9J3ydlkFm70JD1M%2FvDSoyq56aKcy2HpQ0dMaKixTEgAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIpqJoMw94fKbf7QxCrcA7cPmy%2BjFVxRM8b192WEvkGIUJM88VCGeUZerHdHBYaI9kAaJAsXRs48x89NUrKhDhRfyfE40EaIrcUguPTwwH67BWPvAOhTmxet21LD9ToN8IJeLdzVIjAfqjm6iB%2BhAf672a93kIl7X5uk8QgGW4rJVy4FHB6sH5mFD8i1WJS1NX2UvAgY5Ivde%2FEPVCz62gYnAwXspiBDqmNAN2%2FQ1o8Zwkrk5g%2FWXXmAZ7oaEPeCZe3IJruN8yByJz3tcif0w1mwpNOkGg%2FrDSJUJlXgTQHfuDZ5V8ql0E5DCBra3XcrnCBMlY1AXTQIGRDM39kDJdbnfHZW2972OMldOGM5B1ettyQLyQ8l%2Ff9NrGPtGre3qrfjX3kyOXACAJ8F6YcdEREoSPFBIqI5kaR2kcgAEyaACt8ESAvHifIbo0JNm%2Bo0sKSAbQsQDFt2cDqacPXTvJwxf8bqUibO0klq4qiGnP%2BZlPgmcZB1XRdWjdK0P9oNnTSjCohzyKCK%2FDr72IGBCOKAMs1pvstmbM%2B%2FulwzGvqIhK04a4jD0VO87%2F3FHsE9OoB2CkXfMA3MwqzzoP0pIt8Oquys19%2BP3m1bnkzx4qD6b%2FtpwMDN2J2uyiivBs7zjbPJNKmAV8c4WD8TMO3Jyr0GOqUB4Bi4G%2FSxEyEMPAOxCzP1%2Bkd%2BvWSr8NFji%2Fmn2HEMQCIx0TcyL7N7p32YWLoYKnZPhmeo%2B%2FTJuFY8C9bmzz0O%2BajYcq2D5W263qhmCTv2QuLYC3qtXo8LseaYSC8RwI%2FX3G4jVqoy7MitqJ8EvlQ1Y8fxHjau3DiDfPGS0LrSjfXK7OKeuqDHvlF8ctBBr4WHyU7uXqUHynP8%2F6NI2CCKnHehuG2q&X-Amz-Signature=c5e7e059ea07f0ac5899f5a910793b9c35f32740d853677ba1b5e086697a82b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
