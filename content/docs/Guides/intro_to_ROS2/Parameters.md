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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNVOZQE6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGOWSjuHIAhGBmC9ylNEyJlPQmRCt6FuDhMsV79M563QIgPPf6%2BOgtWZPT%2FTm%2B6%2FtsoxyfVtLWCiUNcO68aSIhnSQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYjmpNjiijJt4eBrircA0aQWP%2FZOXceie0Bv5nn14aIPCH8EqLMxTnIob6AA71K%2FT2j95YYJIZr2zGERYjqRYpy4%2BZkkJ6Dzug13eEvmOSyx9BuCLGXcOrj0Q4gaIPBm%2BFR9uAbKsojZEvY2l9i6pliaW19KkJ7Qy1ne2wFkxofUswuIsVwvMvkXEtgilYFlXiezpHtyQpXZmqszzXYagLjCGLJ8Z4pFUoYvbPc0mD6ImS0qeBhpMs1gJ5Hwn%2Fr3LyTlW69UlwmJK5sRbuqGcff2vOnlDEKQ1ARKvBWZiV0eTnOfo%2BI8VzFt%2FClYwzeHHokuYRnAS6q5HN%2Bz5JUhCzrRiAkQZYT%2BwKbwUKEssgY9zbMGQgeKWlAOhP4HOS%2FAVhT4pDWXOJKMFNdtm8Xge3j0DbIp8Ejk19Yf2DFWZfZua8qpJpIMlHIHWDS%2FrpNtCrTm1xMXVJeDe9RZ02r0q4%2FfGMOyUBXK4CSRgu100%2F8Mm%2FwruW8djEEtqBcrTRAHh6qHLMKht0EejanatAE9%2Bl3HGqfCt9PNt91jDgbbIk7cR4P1rSxsVlDe7wmag239jrQ4F24vqM2htxcibU2SQDDZ5%2FCfLZaNI%2FCKqktEeHB0dGGgzUy80uPtbudEcuzLFwJFrpBnkURsKB1MJv%2B38EGOqUBsxS%2BTlf4yW2kLD0TnpUn4F0dVnsInsQS2TaGiuzXVjTp3Du1G%2Foxzce%2BsAHoX0l4823%2FeGJW7%2BwU1EzlJhYIn00efrLUfmshKEF4VuBy2PjdPtgfOERpqUbJVL%2FmMPgUe%2FFH0mr7QwqJgMGo2ECh6yQNBb6k6MyZcB3Hjc9y5Gpl6aF9Fk7A1EhKzfTfVYr0FKRSqwy2FhzC%2FLXmDFWMou0yH5Ed&X-Amz-Signature=aa1a5e61fac0acb058dbfca70c7dc7f1d6e6656aa5499d34dd94a7c29373a32b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
