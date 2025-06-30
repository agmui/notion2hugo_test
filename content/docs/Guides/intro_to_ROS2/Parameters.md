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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBVIRGVH%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8gbAmQPVdw%2Fo46IoNL%2Bs%2FTa%2Fr8Z9rLdsIMw4r%2FgYv8AiEAgAauEoPWnMANqrcTg9FCYBknkuMuhnrmg8tn10Ib2tMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwlwmWfnEg5C4D0eyrcA9iMf0%2BM8dXlOuBAYXZoIBZOm%2F78%2FNKPTga1IjaomoVbTtDHpX96Nv9I5TlWj1lV%2Fe7KpyJJSVW0NlmqQQnIs5CC6GH9IU0FIqHhdFE8J8lhhZ6RSmuMB3h%2FJ%2BHClrSDzNPW13y6ujmjEAPDGQI25I%2BFyoR2mBAo8q%2F7pt5o66P5PlV0ogvr0VoERbQ0m6EL2mJiabK1j9qpjQZ4aji5EuZ1PNHF%2BE%2BIK%2BiCP37FSxvW2Hz9DHfXg9%2FXapzH8iBAx0RAL7scJy3w7%2F0HCNRezRjutOkPY%2BM%2BMIpFbsNM%2FL2xw23CHsACsJ64XXYEgghnZdpDBzWprKrdFITL3BDfMiO4GAmWg8kCSJMXVbuDCWRRR1ObplKfwAY5Jmi7vWQ4auENiOi51OpIJNT2a4oJt4cP1C30KRZgkdvNHABZpXBdBTR6j5QMuCuPwUbu%2FWhOlQEyvsGXqazo86Is%2BL6X7xXMffbdPCOKSr0ULehiLtT0DlitXe9I754IA2LwfeGoK4kP5JYmnyygJ2Nl%2Fj3sVZhkO2ZiRy477yfZYejU8R%2B903ZYqbyJDOfcbL4O86yraHufmL2uYaD7q3A3%2FI7jkMY5P8iee%2B4xCOvEsq6jgoyScjwaOHxiUfpnvDfVMIHOi8MGOqUBjD7k6gfjS21R8%2F9OCflHnj9eoizhL1dMB5yKnbszFBgtOHBcgU%2FOYvISF8YNCtNZIR%2FXBAXKsaB0urOgEj9Aw8K8XEpK%2BE1a%2BFPu7ZwE42wwjqfTc74%2FO1ndNbKxGny%2BIUsgcGuLO%2FEpFCXzmZmNiPPlTy8pTTTFNAnIf0q3%2FOGX%2B%2Bz0N4SbRMzkgtkv5tyvt9J2JpcWQPDifi%2F9jPVK0vIsfLr%2B&X-Amz-Signature=ed5ca35d6ad1b902dadef910824ceb3c5292f9fa14c42a6b623f3faac5d4fec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
