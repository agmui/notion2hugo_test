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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZRF4VCY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDKbo3xENw3BBJQC2ttBcqZf6Brz083OTUnFIST48PKAIgW3q3LU1I3%2FBaBgeMLad5tRc3UDJor5uX9Ogx7zx8BF8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKqSI%2B3cd%2F8%2FHPjVSrcA3wivrYNprZ83eYVeeWu6UtKBtgN%2FqebzAnhqbokf8UCyYBim%2F0uiFbyL30UjZ%2BxN%2FBVI5kxk8gX2kKbgebznCdOGq5h5porw40MqDrTbURPeI2JY5PDDF6sUAFFfosKCGi%2BaLw18B%2F2OakDBoaF3b2DvEOXr9Pzd6X33bupLO6ulBBy7W%2F8wlB%2F%2F0Lo4FYyMewq9up9UXVsuxOzvcXqprax1LjB2RrK0A2QmLmP7x0m6ocp2gtCcAOBxhFDaQ4yCGjdRCf%2FvHNzb6%2BQ6dR%2FhCtHzPYIqvfDKx%2FIFBNfq%2F7ygCsW668sb0tENj2Jx8fREawnNLJceJAx5S6xUm1JLR1CXnB6UxjG74z6%2BbHNpT8SfiW0jlefOl%2Bo%2BnNP0l9FV%2Fy09DiKz2MvuRQ5HZpej0enmHzIpOHVRt1t01bihCooN8ZlatOVsJBE0XFozxf6dNvNDHZE5c9NGG8GKskT1HpRBoVncLRdobX6%2FA2KFxl2bMCHC3UT5pV26nwrqNfsnvvXCcNadj60GPBUv6FJxI2d%2BBb6Bon30%2B0vfIPwUTMXqWmOdMVr8TDCKydPWXoiEyiPI44dDgY5v%2Fdg3wqEAACX%2BzrtNI9nSOjeJeyZYlTaJr%2Fwws2Rarlf2%2B6LMO7f7bwGOqUBSSxnh1BniA%2FFNtzRRSDVtiL7PwsSNUc9PPJCUE%2Bd%2FX4s04VQ4Z88bMvqxIPuNryKNR4iaD8yNTmojBdzWeP5nOFqKrV7zoQuVMHw9%2F1KqAKR14B%2FvBDHiWz%2F58ruzgH1dKfaLe%2Fyf8E9WNa2RQJjxZvCIJ%2FQ%2FF57PJprEIp8JQyuiQAkj9rrtzj0JB2M9l93xblfuY5NKQaegavnNROAKOrEYSp7&X-Amz-Signature=935b52a7a565b229273ad044498b1c378ada78100cc492eb8cfec1218e2c67c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
