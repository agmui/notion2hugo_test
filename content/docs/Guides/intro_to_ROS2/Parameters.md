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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OBWCA7W%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3aihERisXdHEdwhPWnegXL5hCcgEDDcuBaOoSdx4jjAiEArC%2F%2BttzNcLmBXldlzlJzD8ifUHNtJWOb4h%2F%2FPRzUnBUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDM1RJuuEpbufiJCnjCrcA%2BqI0xO7MqEQVQuffcLlUu7CjcwCoqftyQdmjEpxc8K9jXgSFeS4N0sltaz%2BvV7s551PFhy%2BS1Gsyj2GIyk5eOTu5xnF7omBM5eWwOo33RjxOne0Oad0dsqj0tsF2adSOR2DOmpAnHJ90v%2F011JkBsfEsCZdiOCqCH4AGu6YQc%2FXI%2B0VQRvcTwLy9Fin9yFpTOouYiiFDMwMZtlGb3L4DoYeP1Zp0DCTzya8BovIheZ6QYnGh1fpPXl2tE4arrE%2BdVBdnRrV%2B%2F9SDlEjuUr6k5M1A0s1vDmAFoOx%2BPTMBQMd5%2FSr%2Fpfuch0iQiVr8v5VL7RmHrGus9AK%2BlQVgZYLhLgdHf%2B%2FTwXdEwaHzHk3vZxtuBsEnH9yztozgbdq97KXQZ8VnZbm6j1CPdNlyMx4PUHvSIf76rOImAdMAT4fHA3bAJMliLWShxoVL3dkQ30VOImgRNLz3SwbhOX3RmeRS9ElPcE6RwKHhRC6uO533awY3961aIxkCiit4eObwTeCBxOBubOeugPMuBx8bVT%2Fg81EuBuf%2FnQ1%2BwTgU5cYrq541nzq%2FSTuGmsLG45Ux0b9ebOjOnDSZnWq9g7mkVW7riMbCbL%2BgqY2NNcoqyacYzgCMwgaqS9QuGJgT5FtMOXu1b4GOqUBfZRySQPiOfYeO6mYlehcmnVJ4LxgQ6cuMxyzuLkEapXpnwxAGub%2FCCP2WXftdD1DDWx7rZRhgDnooXYHKQ6Pw3m2AcomEGM8AU67a6aOjl9LE89SlbmheNZ7Nmgzc%2FcxmB2esdnP0DLf7%2BBO2PuXNxkkL2X1cbYpv1C9xiPXhQVQ6e%2BBv48ktBVndkH6BDc6wFRUq4vclUHVrczhTJjd5z%2FWMNLV&X-Amz-Signature=049b382e75bcaea64e0613b949aa783f6761417caabd44df16989f4c44d977a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
