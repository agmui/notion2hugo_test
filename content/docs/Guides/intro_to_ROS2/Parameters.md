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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BJTUYJH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCEkr3ojZU3%2FPSzOWrVK2pI5kmnGShXG8SXWWMMGG09gwIgNAODpIjO0bAgh63HzR%2FHs5vPt%2BlCwUooyvxbvktxVwcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeWIZ58LvcVvE%2BLwSrcA6RvwvbwT35fD6GgSCPnGOG3ot3ViEqans0m1HmKuEJIrQle9uOnshJAqyFNX1d3x5RkodwWDFJ4ez0y4P7jo9NoCtuYf7Ie63%2Flnmaw3oOJDicDr3%2BAONEoh7V4rhqXVc%2BhzSbWfmwBXmhjLUy85i2m8EPS8%2BEh2q4mB9FSLDBseXlf6PivSpZyqYea7tEoQAF2BgEUFokqJ%2FovWVHbofqhXaJJZk8yv%2BnddkdvMF8fcE47Jai5OYPvQgotbTKn1hrDCSTutwm%2Bt%2BNzDjZGzx9ynjER6TWbfHucG1xnw%2Bnj4sitsf8GBCAPrHsJMRe5HmR87LBJRXaMs5K%2FOIeU9OiTWzk3gnMhElpmrRcuC8D2vO8rKdXGw45vOWNU%2B6wGlH6M2043hmj6XYjWZRPRqMxpUO5mN38ceX2888fyGtNFI5xJIeTz6I9g%2FFqsmb4xHnpLgmftEChZcHjJ16r5rV6EUuGiB7LssA7Ypsb8SHW2MBnIMWJg8zc4Q3%2FM2GJkXt6Hu9MWAKgKKuTx77RXzb2kVKhaFjP6i%2FMAz4JXwZxj6FC5bQ2u7S94xL59clepmz8SjaMenkFsJlxHVnVcKu7Wl7AA7fsqzDRnwXVsANotKgaUBt1R8MctRzOPMPSx4L8GOqUBmR%2BvsPtupeTI8YWwQ6QSna%2FpypdSNcU487x3cGTCuCSeFRI1lWn9po8XPTqxqHxjO40YiS%2FnW9okblDsu8yZ589tKtVwc0FDgQ7dd3DpdDHYmgjcOW8jckE2B11CqweL8Ngp%2FzQT4F8Hyc4ZTTRhS1%2F2YsZlFYP3SrfiOBbXKJCGIh00AIA97l0RjFIWlrjjnB0skYH7K9%2Fy5SprF06heMT9B%2FY9&X-Amz-Signature=9437f92cd44a7abf073b377e25d97735850030eb12fdfff397d5a9b4983e6a94&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
