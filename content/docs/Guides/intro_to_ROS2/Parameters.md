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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMBOBWYH%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcvLTrGe5ycVrfE7xWvmpWew8M%2B%2Fssctwl8XMLqnPApgIgTMXmitlNfXGEVsSKs4IiyGX%2F6x85k19Zd7BFd%2BhSeaUqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9x6jmFN47uItFjLircA8KP%2ByCLxJ07RqKtnwVuaF4d1%2B0zCNK%2FgXTPKMSX1TTbDWVDnMhwko%2BiRwnVShktr3P%2BqwmdlCSDdv%2BCNk8ceI2XsP%2BMIVcQARoCTUfGxLhIC1bqTBm0eeOMbXLIJs7Y3lkMazGn50K717pVfQWdF1XPYOAvaNTF0T48NTtAIwkZ3OWinsTxX%2BXnT5OPB%2Bg7L6qIWTnc4JEUcNPVbpdPMTiSwZyAD%2FUXvf7QXIakl40Q1B0AyzDu%2BWe2iGsNLT1sJie89xnksS0H8MBZeEjs3eCee5K66pDc8Onp1nPZgGmnYiSicXE%2FWzZKXyKxwMDSkbHjF3YJejf168i7XdC8HHhH27K9vle0iC74VpapuRqP6KXecxaDdsp9IWnRSGN9Gt3pMD9ek5If7sf%2FbBdOR2tWatDyq8D0wyp3Aj%2B%2FVnZJxQeaULRU4LG3X82fmnTYwMN0VMHQnT75P1WfNH6i9n0ufmjGc1V2COhiMG1nX%2BMFhnbF07piXuzyYc4I%2Bo0n6zp29r9UvLdM7gOPXd%2FvFcxl%2Fb%2Bb4zhPULNOqmLRm6nptiGWu314osxI2%2BrVdX1xVI3JNeLATjD1EFsa5VFw2WEPShHpA4Glz6IQWZvswQF0HIUO2ycHoG9Tf%2Bm%2FMNqP%2FMAGOqUBeBfCcLs3tIqCtcQr8TXNqStlz5DSFtoN%2Ff9fIumZ8TI10NvyNKuoQBR9wfdONf7FRTMfKy33HlPQTU0NCyiknw3PaPXpQ3Ejh%2BmHzN8Cmiz%2FXAR%2FuvPGVJ9MltEgLoWPDvzas4ku8rWIOLEu8zYLUHJvwAaHYdtgVkELDxLYqly%2Fk0G%2BG%2B5cdlzfyoFbXTYuAV8233Dfeo7PYsV3h%2F9BHDVKUZoH&X-Amz-Signature=4fbfd431944df6355761cb549a7d41cf3825f05cb9690e06fac21359034b9186&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
