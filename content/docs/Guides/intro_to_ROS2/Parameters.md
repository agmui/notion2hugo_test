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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4QWXBT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIFTgj3H70Ocdc2w9t%2BbJ4GNZbiVng2%2BMwzbvJ41d8QJsAiEA%2BUmVyD6Fy1xVRM9ZEy5lHLidIebhB4NGZX7IGzPYzdcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDH6hMJN%2BwBUK7kc4bSrcA%2BCq63nuyJvz%2FNLcnTiKDie8M0Twc9%2FOnEx29oUeoLmb4WrEnAJKtSnT4OD0v8PNb2FR3ZuxDOxYIyxNdvGsFzN9ugZNd8HRBdvsmH7tW7drTZmfSJRrTOAMZw8UVYDq3Drspu3RaNVO%2FiegYa5Q3Xrv%2FqyVLwwNaRzo46VA3eKD9L%2FvycjDLLoNHaCSvnxJs4hTOV4lTfG4f5DSrwwyPYHW63XbOgW%2F0Mj4mVWhxq%2FAlVSzg1E5Dvr01nVRDKTFkozMHuKmHqtU685Ee3xEwIG1feIPy7ckw8YPZrM2A%2BCaCmtj%2FOKFyLf72hamFPpLZsnDxG%2FSJkgmtJ8IAWZsxXnTwSkQ3zzuOw0H7cSwrhX0B5uSrWbT6bDck%2BHl%2FbBrcClQCZ5aN7KWsPcfMT4QjRUOHO08wS9WGwIKnq5%2BnZouaPZm%2BFm5O%2FTKYlS6%2FE%2B5qsl%2FLwCQ5S0uqqw7rHJ3Q15PaLgwW1LfEklx6ib3J%2FCBgse8OG%2F5Cn5l0QHYh6OuvYIkPMtBNDwvqR%2FunnjRwvGki%2FOY7iRof9WnhiYEGqhK65ByGak%2FiZ%2FN6Ee2JvDbhESnGdQmPCG5zatfLAlcthYIWbYW2mWkwf2JUNvvXtjorVG%2BXmtPmgEEgwXUMOaQxL0GOqUBsXqvo2N9peMYr9p61RQmRh16S6MFZ15C0iHxOmL%2BJRZU2Dj%2Fza%2FxqPLEvLH1lgcLp5dDRcAxZDgbnvgCiVOiOYSoBMWLCdYlziw2v1lmt3xYmwUUhAVnK60iJeZ%2BxXSMZOYjap%2BHibsl0UNQZSPK3FVsyMJtQZ%2F9xwquinkcIcJ6nbwx4y%2BsiPlbhkKjtkpOf%2BVUtj8Wp%2BiNhrTfb0XsPLRBzMU3&X-Amz-Signature=7645d6538aab21629dc920b8dfae35dc297a2dec68c75fe9b8b948d74718dea3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
