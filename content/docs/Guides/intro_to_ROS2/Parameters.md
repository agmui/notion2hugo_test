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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7V7OUOJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCDbNCGud13Arbzed75ETTOUiPW5fOKRcua7Zf2Rg8MCgIgFBrTs4CVsgTA%2FnnKvV%2FrMAvUVLqgW17Nw%2BOxI6m%2F%2BZ0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGvcJHHb4cM6JccwmyrcA4UslkOShwpsUZ6mV9BkQirnQle3fRxtxrG6LdO8MKoG%2BCtdzJ4HJc4MzKYQxlfqAJfWH8e5KSJ%2B86Knaam0%2Byp0FtLj9u7W7giP30Ct%2BuTjDf08fBa8k1i%2FLt3fZYTxH3d2%2B4LJLZLlKsOgQurGundTF5WjoeThipDumGMBj3UkL1djvxCKcTDMpSDHeItt4fnmm7OBqyTfJt3PocCLdj%2BO1Q%2F4wK1%2BT1A2qrGTcB9Mx2Emaz8GSE%2BCSjme%2FsfnPN%2F%2FF6CF9Maogyimsq09Vp0ES8vfrZW5d28TCCzdqwjORDq8OKrxG9pXPFNb0UR7NDDg%2FrNb9u1etgXjp7Cx5%2Fuh7SgZ2p2byLqq1yU47pm4O5omxDHR04qPBU0BH%2BARB8pvRlMQvACbY3aLVOCKCKba93mxUI2jwOUwzGa%2F77D5WrtUDX6IB4ObftNEQ7ssAzvJG9I%2FG5tkTfEwg7TuA9u5YX41y4PzjBT6Z75h6RlCgctrUDTNSrKv0ttKcqv%2BDiNTtLynAcyG1G6aXaqZluAK4j%2F6%2FjZgmqAy1jhE4pumQjolvgw%2Bnlp4pSq041t8%2B2dpMm3bD0FdLl9uewSpvDfrTpKuvFRSveNr4o6lghMnScWIFWbg6PXaXFkEMNjhycQGOqUB8DbF%2BXwBskMYpSHpSVeOYEwfhKlH0IF7bhBKPcHNZIsCiyguKjRzLMhavWMV0vBPbyPPXDeBQMQyRtRcn%2Bur7Kc2Fup6ci7RTDnxRKVgdpvZ4T%2BMTGLAnKoDT7CJh0i9thIsyMTE367sXn8xufkmEe79vGpUccwTj5ZOP72zK0EuyXsUQTgP80GQEWgYjD0bQeSzxPmQf%2Bam2CEzOVzGX%2FRYSRL8&X-Amz-Signature=e6d8c6f98778a51f9ff2aebf967706f8cdecfffa91e3ebb44e5036ac6f9737f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
