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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEXJKLBW%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPbWSBJ2jTQSS6Gm%2BqaBuyP11J4U8tyOIuORunzvZTaQIhAJv7MOFj2Pb%2FzrK6ZgYWYgNpSQcTwT6HwV4WClZDJV3FKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysoBsiXypwtx%2FEU%2F0q3AMlykKTfZNMX35yyGjWdnz%2FELY5ZwmNFIU8frno2Qtz%2Fgd2Z8Oes6XxTjipvxhzLhLTTM4meZ45t1O97n%2FdGk56QCCI4WRdizB9ppqyLvtjHofcZb2%2F006cmLr%2Ft08t5qLzhyTwetwUtJQHJ3pTBS%2BcdCR%2BrlrN2DPnlwfgEwxpSwHCG3Zq92xw88FmO7kHJY6Nt5FYsnsuy9u5kUYCAMy6aPEFkpGnif8oyVoRsAeNhAaTteVN4EjvrwwgI%2Fv7D8Dc%2BfWxILO%2FW5SnGKIB0jXRS6kc25eOIx1i0VAaeR54SGEYwbencsDvqTlQi2mRoA0T2OPFFKcQ6ch7ubsXCHtamLawK3zK6gAx%2BQJLhZKis1cUB%2FMDXcurn%2BJ%2FY%2BIAHlURZHR8pEUKxkR0DqQW4DLBH1JcfhEPEgbKxCk0ohV0lgh3FD9IBG6bchbmro6fQRXnAD%2FOTYuUs0%2B4rG031XIuHcyskPp0ODhcuGXicTFGrpDSTR%2BFoCF7EurTb159%2Bps%2FZ%2FfZ1nzS5zosS9oZYF7ssO6SB0fLG%2Blbkvjgvm4QXXZoBQES7Fy79kY778xgofS75sNIoYvl8MIwMEH9Bib%2Bin27oL5TS8fcHxOFhXYsmRwtK4DvGTq51EBxGDC44%2B3DBjqkAVjlKrMW%2B2xVyXPKYmgFFuWyWS76OYPD3byqhl7PAHtCQ6ZXkxU222eXIu0LG%2FaFy3lkEcvNNUmj2rujyoUSkKrIV7kMrEVppZlCEXEZZjBPlCcXbutskrimeo6PeihIOOV00jPBPjy%2Fr5yIMhBONQZ3cQvGtLB7mcEnA7BQz24QymPEnAwoVAAhrYgQ5VCSjWFvELjN2qcjh1TuJGCIUGfwPnhf&X-Amz-Signature=9e18aaad6c09eff8904c443b4e884586ecf45e3ab8ce3f869cbe7e0f5a2df594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
