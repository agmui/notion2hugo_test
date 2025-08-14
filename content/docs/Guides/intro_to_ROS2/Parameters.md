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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MBZPXPT%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIDlsc9w%2BEO5XRwwFoxd%2F24mTjevg1vxfvCqrvyFdVs2NAiEAhWkRdPA8tT%2FLyInvdVbQG08Hwu7uF%2Bbkp3Kf9TMJa3Aq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDC2WQXKAX4cV7%2BygvSrcA97tka%2B5%2BB1RBhc%2F1bZDqdJdgnA3jVRwN0%2BYe7JC5ecKr52OdoLYbfLG%2BosOa%2BPh0L46YUXFQGXZTA8JEk8%2FLaNo1FXntIVL0lw0lQ9rfhL9ZQGyUD2LG2hd1%2FEt6vIIUdcLndOl%2FBjC4UZWgDm2LwHrmUPJBqyMXyvIoYsr81LL7L7RGXQjuJTQELuHUktYQOOTvZho5XhUgoTRJ0AK5EvwTyy0Owv3TQ0%2FMOteCddqPMa9g7WpZITffgzS0hIXzYi1nxy2Xp2Pf4GaLstTpjgI3Ouo9oIlV3ZeDoopHDzF5ew86GgpHNfU3VwH7Jlgvd%2FeFuNCzHf9iAwQLHNM8n7HItqv5RSvNoihc956vETeQYsn%2Bd7iEbBVlnP9t4kWAWPrYOWxPjRjVuCZVCj%2BGe5E%2BndiK81Ba4g%2Fe6gWk%2FZEpXTW58TgrEkMMP1patD31Gr7hEEUW4rZGUcyLAqqdi4rAI5DWTRU5%2Ba4rSqoKqQIB85qrzZSQDaPhhbenixpgmWaZ%2FVwTIkQIZUw5jfNKUyEFoBjJjlOfpilpPLlN3fF1rWrcDTltk%2B3dJLvq00uMahNClr8fE3AFdoOy6FigNBa5J2JNM7A%2BLAns%2BOFBOrDNvAVaT%2BAGEZLv2CjMLLo%2BMQGOqUBMVvnrHnKUCqRLPZQiiP1VZ3QNyyKO6v2xG3y21e7bqwvfhchCMjKO4lSMbrT7QBqfSGX5b%2FnhnWChKpOGHRC%2FdDqqWKwpZ%2Blypw2a8zbfc%2F5ePHMOfDEoSn%2FW1YvgMBL%2BPd9YLVh3b3smJpsh7YcAJutfWvjpzUFm%2BBbQ%2FuyDOiT1bgNc5ehlnkP2UpkrCZPPDUlf8WKzfCZ0elTRl5c4UdIgbjG&X-Amz-Signature=cadcc0de09df1e15902a83164b5f963194f7145b80cc64df231781ec8fd51677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
