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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDBNADQT%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzaYw1UUrH04VBy81xDNLrh7ZQ1B2cmGgzs5tb4TctpQIgKIlc5FiRJB55%2BAQGNbAwLYxsDIYCFdC3RoLH33Z%2Bwj0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJoJH3UFbKqSJQ%2BcCircAxFKHlG1wXVxuh%2BCoSeIakTbEJu0NVDDk0kuGk%2FUlFgD51yBikBthuCaW6f4Q6uNbHXsZLchlVMvKFWleqBoERFiwri9xr%2FmV%2FRVV4%2BhxaCUW1yJm9sSAU1qVUq3xIz47dQo1LgqXi%2FwxK7PO6zh14ameyjm2ij6IQekRBr6rhN3NqZVK6uJIju4JebUkEHw4yrC%2BJCtyru6AbOIgV8PGg1JJQng%2B6SWVTn6i5cNJhBBK2OfZtLEhADCM%2BXvtbhDsoIpC5dEZNj7WjSeBkQ2lva5HbSAlqImO90kKeWwXVBU%2FtMvOWOLWwpyFAS0vD0G5UojC7A%2BaRLr1Rz5s3sYKFpjoOBqjMaDaU7oAE8f5T0RgS6CgGKUZjibNy5dwfGF8FBlgcLb7WpACldqjhhtT3RfF9lDOex8V3QVEKPE207ttjyOc2D8VwzC4YefpYmmmAKpMKhTApXUjAJoWDjjJqiHTsxKtSxuoJRJGvKsFAQROtQpyM3Ftm1CTH3%2BTnRCH2NzatpyxUB5LA%2B7olAY3YJ8tjxx75FNrB5YwWZoFIH0MZB8myrTDzR2PJ4ylnlamMGIiT1xGcIrZDnQSSqjXhLCP1abWvYeYE4s8ZZFYW2nfV6nhTYSZKGizYmuMKKHsMAGOqUBebipHoEv%2B%2BkYtR7kDd1%2Fflv5EBsGjvim2pedMCqYZ9BMJ4tRbzpZCFkbgSedbePdEKOX4kZNhpZ2o52iwVcWXlU%2Bj%2BdEuk1OM2Q4nhJbk9%2BEEqZPfLfGWbrKSyF8Gehs%2FyxRp4tRL2QS6xI%2F%2BHEPsjM3cHeQhs3jivYRD9%2BbHU7PxK4JbY1Aw4dBP5GYeDJs6JFYdb3nG%2BNF9ND2RSRY6vCuvoF7&X-Amz-Signature=4d5e47f7ec390d75351517a45a66a605d6b834fcc63d700c78c7b032815b2c1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
