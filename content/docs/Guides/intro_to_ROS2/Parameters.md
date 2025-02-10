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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNA7DJFF%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSb57tJPxe4DR7m3jpErGwlrK%2Fewv%2BRlZQhWYK2MH5yAiBPeKfymQQPGxuUtM3FBS83jXaZwiIN14xNBY5AlTXilSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK0%2BgyI3wk%2B5q7v%2BZKtwDH8hTLyMXjYVkHFG95EbAbzOhnBZolCJkErUNZ2WaBAJrJ5pfJD58LPfL8af%2FlvOfXwdUv9T4oVeQsV8ZRgrwfhTXWvAgNhYtRoMvCs8rcQRaKUZMPlW9NWuCedXoU8yYg189koMLZ68YLrGar7yv447tWqeuR5LYObq0sNJqe2E1k6eAhgntjzD842DWTluvJAfEFenBaEBGeZFTcbg%2FVG0WNblRYDBR3C%2BeYdmRXgESN90Yjqri7Jj2DhSz8oUSOLKGV%2F%2Fh36AnvlG60G2YFys%2FO5atnkpHyCJKRwB68vgN7TMg%2B0TaWVoMmq%2F%2F8oPGkpx4P1lWqjK9TSBRRvoqfmIoIZJZcLUwAzGahEGS%2FPuLWWM8jkJRgtZ2bOH73u6MYgt2rvKPNMUQ2BBo5WOHApanAnSBtIr9109OAhqaFhtdvb497IibgwpUALmWNagMKA3qdJe8Z7Khy2fqYKq39dcFcL8%2FZ8q7M9VaihxRzAUOjWMkLgP%2FlnqajU%2FFffVuLmVQz92EOMu5EBXTQ9lHhy5avNWq4VXe6uITXio9XCqA8FRqb6K%2FBV%2F4zEzJooOvHb3gMCQmJ9B%2Fr9bZFutOr%2BK%2FXhbMgNM39eY0IDcAZq8hk9lm3L7QfkswPqQww5ulvQY6pgHdmCVHj4fWnnCq2xTCuFIm3XR7oRyMzAdVj4MXFUjO%2FUHPb9bxxCb2yyXUVgUljK8t0NOKXe1nvAtlQyJgp9KJY7yVxbAeHb0burY5LGttd3E8fI2SJLKvxQF%2BXlRzHjIeVrfQM9bIbziLTlBVlwz291EgVMRtE3FJt5CANkE8%2FXCn%2FcdMqjoRM84jvGnOvsZz83eYFtSEnChyD14cTA8FDancf4%2Bj&X-Amz-Signature=d539854d361f7363306d8b4fd0afd935b40a9fc7b89d4de500857812b2974470&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
