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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EWTNXGT%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGUwRW%2B6lo%2FS240b3Of7mtsJmlrDrd4a4cW3Xi5h8NPDAiEAvJIaW8fCmagtf3NV301avduWTvZiBep%2FrFR8DlZP8TkqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBs%2BMvTdMILAfd2q6SrcA2DCiiDR%2BmN%2FzEciRNg2ChulUJPMK7%2FwMkrxf%2B4iMYNWtaWueIgfZtTg6lcMliixfI2%2FloQ7EMiAJPOw%2BQx4W0DO2XYwD%2BVOfynjTxgFMphpsEOzXTRH2RrBxRdH%2Br%2FN9cfO%2FAMxz8FFYetPXPEMEJ%2BwF%2BDpmaFIjzdJDLsvVvvixIT8svWP69ScwbLm9vM6vR%2Bec0zA1rIEjYHAEJGppFAGJyBCbk%2FzYtuxYBHqpYUNK5Lgb8LzMgTBmM4hdyrHyPs%2Fi8oCLVzgq27frs1WWhcvtxvD0IOXYL6vY%2FT6vTP3TEOkWLjHD0zrKWHAAoPULd3S5VGLB3s2Xu8ImFz9V1mKsfyBTD7uoE%2Bh5Iu2bgtqCvpAQKfzXibHKzy%2Fpz9f%2BWitdtSqtC%2F%2BLNEhk%2FtY4JDyAhG0BNCEiYf%2FFeJYttO7O5aWTNPjh2LtOqTn6wPlxfGX2jRGj9nV8YA6f85Xuo9XaG2%2FteuYpgu5C1Br3Bj%2FV6zRKdfX6RJ3%2FXdFbzKad2hQkJN9NlOtP0D6WaNJBMGzFwLCGjfNGF%2BPvZD74yBjEuuRoKm%2BdBNXul%2Bxo0qJOqzUE50POYKgIW%2BszaFTtR3B0idi7NF85oRz0g3Yl2iHL%2F5oa%2FT5bAm31k7IMPCexr4GOqUBXvsJy0wO3zgmC6KL3CqlfjCS80ySGcWOPv%2F2jqTi5iHuEKzHHQ3hXL5PzNrxliWV8EiM42bzJvqkHSLGz1cL1Q4%2BYUaIDx66BHkN9PrjaQN2QRq0gPqrR54b%2FohAj0ulpgQBOxFtqsUqVsMuqQKUrxMp%2BclkjUaVylr1fz4hzsUQq6gicYpb5SXMHVVyy2mQdYCH2cJMHwZwcx4SFH4E231en9Nx&X-Amz-Signature=442143c584ac43f08935827e37dea7a8c23163d9e9662d18fdf73ca46aa0d491&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
