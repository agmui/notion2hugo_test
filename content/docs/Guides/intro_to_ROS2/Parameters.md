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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUFN62KZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDdtlgufGojsz2mUEBWYCEFnEANi73GHO2Z2OJ0ItGbcAIgF%2FiODGiGVxdYJvjOM9UM6nJjebcBaIULN%2FsEvpjvGIcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf29X6tMLBmnhYvtSrcA7jP2rdmM1hcUeJlfIH%2ByAjHLa1KF1CCBErPW3r5JR6yiBIxUpOKkVU3d2OPYlVC6B4AVmtiu3o5AJdKij%2Fwtyf3UM2CeMIevLqoaw16vBhnLc8e3Z3Ds7Wm%2BBiECpktLIe0Dg%2FKDebY6j9YN8jmMfvhGTNDxQPhCiSsscIAY1UPVj%2Ffvf%2Fc%2BePoLluePTJYEM09bM45acB9oeFWT1kJFqi8p8HlzhPXhh4f0tHC8O6q7nMDBeBOabY%2FSPKXlkYVBpZ3WrR6zf24piVcrMdMEKt%2Fnh4s2CpPCrExM9qbJgxsTmiBqdxNsBpqB0V6FWo2GeYhgedCJ%2BE%2FwcGrpeCr5izmsxptdWeD1xKd3GrjhothPqD9bRyR%2FuVEwOiHuZbWL%2BYX6Dj68JSvJeyjmzI1Kv%2F1KaY34i49ElrxMrpq50mYbEjIYme9BDB4%2Bex1I56akuRHcVsiSpykaTJ3B86JKRC%2FWM5AH9fNJZRh1umKqOHLn%2BC4f%2Bytko%2Ffr2%2BELBDM9aLVb5HGAYrC9ZrHKeupu87GY2S7iN7tkHjxXsk76GJrIwBFASDBaPtJaNVRm%2FhiLzSu6TQYkU%2FW4OJ4NJkso2QcOZq0Tn%2BkDttHONAmgpxCak5cSzE%2F%2FQBZr%2BVQMJmwv74GOqUB29IBo4hUn0dkGSC%2BiiIitcxGrA6bH5FsmryE5pyBSijMkKQEs6O4AS2EYDOHnLDtrsFCJOGzUSBmKgPnQPmaeMfTcah26RYjitFSAVvDDbImaS11E6%2FtGGmGhvjcH7xuYBandn144r%2F9wP%2FbfyFCfWKd4C4rTzo0Xr8b4shpDyuxZNvCjK0g%2FDjmbvj6lV30VDzyDgvkqCPbkMHW0878tDMgLs%2Br&X-Amz-Signature=d1140c33f0638ec4119708d0e0e715adb0e86560c076850704e898135f29cab7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
