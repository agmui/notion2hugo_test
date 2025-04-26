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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VBLWMNH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE54egqAAGj17Ko4AkVMFLaU3fcAwGezMIuoIBUYmK3CAiBAl4kwLzCUCm1srcmAQFj3blqfGrunaUjzCAKddsDkzCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM9ccmqal%2BXyh3s6CTKtwDtLfsgXCfaQGrWSO0Ag6ceFyxKA5vJq9jobejkErH%2BPeuwu97xVNbPIdo0jA1P4FtkNR50x1yKCtVxmdb2VwJL4Ck1dUOGwaO2jw5GYWAQjCXSK468fBAOqERa0cksLSiWXr50hYKd%2FrFlUjNDeGn6saZXSOpdBi39FfjS3rXEWu%2BE4ubBQtcuJuP%2FQKI8he%2F1IhpXmySpSd%2B4128mi%2BJB%2B7dj2iEAfd2ZY59oMUkFHK7iWmGgMkoyao5Ftf95AbEjg6MAwlvthG3Y7yDT6feCuASm1GwdCO6WxM%2BBcyBHll79QkUYiVqk05qKNljTWfsRBNg7nL4IlZTYH%2BsIyF9k9QTCNC4ebLlBe28pyFoeBv%2B4BSRLgDoXDjCfMZ%2BioZlnwHYfoSAmYVe60fnCk%2BnGGT%2BpKWMVgaV7e8jWfiYPf9i2yl5c91c57R0QE1LR8030%2FIOxThU%2BZmbENMZUc%2FBesCNF8%2ByLf1Y4FoTPhDzE0uc3rPxx5GYUHuWgZFsgd02uvjOr9k22tiZ2%2BlljC7znLaC7%2FHRYs%2FedjZrdg8otvVdwS31He8vSXP42U%2FHj5mBU5JJzsy%2FzllJu3sAmQz4ORj4B6nGTdS3cWnCuP4c%2FtIRFOxx6wCuPH57x9Uw%2FeOxwAY6pgEac%2FKXidNwiZtul5L8kAJafUzXn6f%2BZ0oUSGpqksNZ1TyyDmI8M9h7MC2sP9x2AjLgtdcyN0VuAKq936COaO53aofcS%2BRUW8Ib8P1vn7DwLg5T9yXK89SvVhIdH8wtRKZ%2FfSVbt5005bhOX%2FrOADaEsdQqAWxLZqt5DawiIrMfol5JKxgi08TMTDayElf8uz%2FyemuyR8pjnT4d1xDoRzcV%2FiZ%2BgNI3&X-Amz-Signature=5505fbd0c66ac0ac042d645057741ec140a2d05a3aaad24ab25376fecce3f15e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
