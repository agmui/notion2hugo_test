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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3TV4DMN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3jJvixi4upaIrukkUtbg%2Fx4kHkHws%2FbevbieVxMX9KAiEA8M1vLOOVwN6FpvZb1CmQ3DOrr3DyYt%2FeZ87OfFNEcqgq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPQ9VrCCWRrEyZlDXircAzyb8437t2QBQCu0yMglgzqv6UqCBfr5x3x%2FR0FDyDOhK3Za3IUWSp2MM%2BKuqg9ILbROFxnBe1YA%2BT9G9yLcjdVk0G3K5XFCPeDTb9KzhoHsun2QJDrEuUBJJHl72%2BRHots8w0s%2BoZAjys%2F4l0Nfgs3BGHhgVkL4GiTqGMwdnPTVW5Va%2BgV0aWhHFtaMfzoMGn%2BuHpoFPfcXmJLMAl5EyVOVxFDT%2FaMzjMX1dWKxhVxELffd6cCUqBo5jqImkLop1StH0XJbuhKa3pOEZcTYN8ntbyu%2BmawR0rHqdFLHTAj1WQ5%2FVk4VGTBNAE7Zh1Wgv%2BMqtb6hbunvJlglVlcErvk2KvmCNm59OchQCt%2Fc9R5OsSUSOfw6fUiBF2Jzae%2Bd8w%2FwVlN31wIlM0dDPGegjW2DkfJajhx4aH9iCGpZQ%2BYZsB0uQI1vvlaqM7rTcsFlQMGKNHGrw4r%2FogqYNsTopFDAeyyO%2B8qXH5kzKwuoIsoLD3GMmA7%2FvaEGL5YP8nhsD%2BSd2QTrY8fDGwB3onugKcTzLfkFQeHAmC4Lc%2BnygthtANikGs%2FdR%2BiHI3JxgdKNlxiAhsL%2FmpmlIdbqysysdT%2F42vhl2q52l03Kjbhzi7istPAUkrO%2F%2FtqV%2FORdMKWHqr4GOqUBZ62gQePl0zfjHYkQqI6XWMlQtgzD1BThtcv4FJxdDYTuEKHcYJy5tj0jKts6ktPA6u5%2FcLMjwZrYJyJGrjxzT6E9zCjQu%2Bc6LbMIJSbhZP4jZDV1JDBKaiprlSl7V0feBIUJD4Hjg9VoydS0ucoF50G5zCgnTZBMJl1Q0ejpekaoiMMmdwnu4QOJ1h8KqYsmmms2D6smuyIkcgklTRPJYMOfH7gx&X-Amz-Signature=9bdb87fcc6dd4f5aa875a07c5ff55d5ca488b64a3b863b503564ba72bfdca46a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
