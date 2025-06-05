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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV5JZ4SM%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCV%2BM7BeQmFVLwpHTJE%2Fws%2FMOdFX9HM5whI8rVyDz5SGAIgcY9l0dsb%2FnaoreTerpxhXfhaLEveQ0FLeEnqBA%2Fn1xIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBafmC9eCW0RfOemnircA1dIgRq4adtxbmSPCM%2F7M%2Bn5P2Pxup%2FG3QJ1vvSG9xDUAAKvZ7Ik0eC0fWimJD4sj6BBK%2Fq8oS5H2JLDs5EzYMGNJNIafxfGkZWKZT%2FpoyPzY3p0SGnxwlCSJVSOx%2FptACPFNiRbcAP%2BgTgmgafSEH2lZWSjY8M411VN%2Fzz3ApI65AX8BZoSeYqvC3fM3y%2BdQFjJ%2FElX%2BWYbrFF1ucqlamAvaMa%2BlorcokoFn86BP1i%2FfGpc77KQ0x%2FJU%2FOGvsz9iP7zIImZANPSK6rfOB60xbIiTlDtf%2B8WDqbeBbgyovmtULf5tXSnzaFt5uynKgq0341QTR1vEia3PApeH7uRnyzdqLq3txdsSQjI22LPdp4Ps%2FeDfOehlwlicsaO0Ng1IbGvEr5ObJkIJDxUhnDYPFTscvNZoNp8ZQ6RQ%2BOHjD4ZxuGrG7vEmslONyzbp7KOHrE0XWpUbjg03NJs2B2jg0Kb8HI%2FhvGguxWdfla9pAW9V%2Bd5jFDKnEtImQbCM32yI0e5Ny45JqeGlwazK2tGJ4TY1byPrIvdICS8wHqR6SdufpIM73QTzg1vtsYSJh%2BlBN2%2F%2Fk9SejkKUjHvpdOOwAcmWZDlaZOogqcnYNoSVe5YxoDz1eKrSueg7jLXMPughMIGOqUBUI2jONxlWuje4qYtUamg2%2FUjzGlDL5s1x1hDgwdmjuzNYqwbrA4G9%2BuR%2BqLgPI8nAAaO1nmX%2FtyBrEnHHevicaDUtKIHvNpxavvooAmZpbU%2FZ4E7mObgLLFS9syhzujKhMxFnBRtUFXiDXoigCG%2BHKP4PsNh9y4XpxkFit4IuAmboGb5yKFFv3jXVdrDTyY0EEakMjyf5sxylOkg4LFaYjtScjmL&X-Amz-Signature=e7cee13c36ed660bcecee877992ba3a97a0bb7d63ba33580ab7e88a3525b268a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
