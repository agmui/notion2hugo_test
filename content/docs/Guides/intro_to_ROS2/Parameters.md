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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBONATWM%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEQRcREFP%2FUZaG%2ByKtVlxq7I%2B29DdvpSJmyVzLu96F30AiEA5Ug6WiLoQ0%2F8ea%2FAR7MB6t9w%2FcequulLKmDCumgyvdwq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDP6tXjvuKFyw7o7lfircA7tTJAEj1h4hAlkIxS9HR0HiI1RX%2FCyUIKhPeAHTCR4oXPqFmYjF5BRxu4ha71gaapKNMPTiNoVcON2dLxDY5dP%2Fv1qvIQTYBT40MdMgbXqy44fshSLM7b5HBs6CYydFQjzoRutuertB1QXi916HDWFZOoNi%2FEm9LspGA2g9rwb%2BIbI8%2FLpeP%2FJhhZOS%2BxNiwlKJuX8XAtJIqRctd74JSNVL6Fg%2FAixkbdyAeuq1iB7PX7n4PRf68LYcD%2BNI%2FvnkcLFUSm954q%2BzyUcOWyoy6rs74%2BuJsdEHTV5FGc65PW4h%2FR3ikH9MHq5QHOnNZW8WHVxje%2FwYVSbx93GT2rqyzWkHWMq3P6RNQHe6uMJRIWaoG%2BdSrjWbgktFpSdl%2BG3noUUjVcgRL4z%2F6cqvjl2%2Ba5Rh5sMFUAuawzxFCMJNE3Epj26tCsfNQtiTH0Vzn%2BLBDdP6f7y6r%2BueHiXvMRz%2FQ1ZgZCXz7PzUswTp3FScezF%2BTMUdn7VlmxMYn8yEJcx6bry9GG3EJvlOTqAem1vM%2BuzIcUzinxrOlUlKFnVG22tba9b2Urs7eMDZ5%2BvPrLKvMHRgFEy%2Fd56T9A9FLaf3Q0EeZmtcrhYx4xc8c%2Bs3MTGn%2FqFDEcxvAr2xbQYNMODSk70GOqUBZFskF0ZdNmenuohQosS8FZY6xcqV9hh4Jaj3ef09BqyaUIynmoyFAaPUgtXkzeQBpCNGiaKeGyYAEsJf%2FS0BS7pnIvnQ98cw4PouIJSf3RiCXH5N8QyhztBKdyu7UHJzTY3AkRquted1e%2BWxkD1L28JlbM8G8OFO9a8RdqQtbwrX85DZH4IBFTRHkMHoBSkRloJQyxv3BfLASKV%2BHtN1SiK1oBLP&X-Amz-Signature=b8b71ef6d37b32599b1a162c810ea99da2e19669764579431561629324583538&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
