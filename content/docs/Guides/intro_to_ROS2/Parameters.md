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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D6PHPAD%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdIxilOM0MjMfheGM%2FnMYjCDAmIkT8cLy9qt9EVrPMcwIgfLlxncLlRnrwyUOdlOUJuCzvyTv%2F3AvHZth5iwyqm1wqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2Xij29g%2FtKumFF%2BSrcA1c4HxfEVsushZkcdNbiIKxfFGGfeQsqecPa50k7AHjm2XnCQTnPEy%2B9M0XOA%2FYxvgu6%2BauB9Th7X95VGSuGy0y%2FEdo9rVzOE8nggV%2BwsvpYnUBqRt%2Fu%2BgAHAzo3pgdc9K6M%2F1I1CW9vXuMwYodyUBE7LXNb05jRqiJYC7rm0VjFqdlilbitAMurBjCHwGZZVlNOLPdjJz93DFO6u1xK2KRZf6%2Fo8POB%2FU2ZUGNfGwiy5Egm4MEaSPJ3KrEzPoeCRPr7UbFnn94PdUNC7H8Zo4%2BRRYed7aOZvQOKJUJ4OCF5r9u5IN%2BUm%2Bn3EUCPv27qvXysjFda5QVNboQrq1oNw58jgTRRAmXzAjDhtfYZgTvYJaM3H5dnpiIvIBF3v%2FMRS50kCAbjk16bKXt8axxec9u4mVMBNUt8e2xJae5%2BgjEZ%2BGQWuP1gYXLkitcqOsdUjQdA7dulbyRDO3gLu1W6M6D0HJ0Jt34OoMCSMCpWSmA8QnCnEC0EOwnSH13j9Xd3x4mP4KBepcvxVW6jxnDLdxyktJZ4uKuj%2BhPgkv220ZCgNaiEjZ%2BFY8P9rmAS0ZMGm0TbHwgirpQJYhEIfe%2FH089QgTsan9Mkr%2Bv0wuQCZnEc4iF2WK5zA3myHxlTMJLZ8rwGOqUBuHa7D%2FNrT965pPdgzF9UCqcFMZC7SPIByS0fzvsmTCbm%2F8EscjM7Z8SijiGGuL9KGyOgTC%2FEElzX7TN7uaJFRmez4esRK5kPP3fGRBo%2FCCBe%2BW%2Fr9vEHQ6LOII7EeRolmXoMhg6HDsdwPG1EFPOtA5MmhdlNg4X5bYIkuDXPYjILizNhd0SmsC6tV8kP3g2dB215cCsfMQV70%2Fo3ATUjHsffsGM4&X-Amz-Signature=78e6a69cd88a47bf676221c74a56b755dbf189e898872ec72da61ad7b8d76c34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
