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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFSCS4KG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNTdKz5hlUFuQb06UJ3xE72ML3eLTZCYjjYq5W0LwvogIge8dA0nJS3kKIUGj3x7ICIjf4JVa9UH%2FyyfL%2F06H8DUcqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEc7rlhE8jtQj2eTVCrcAxWnBsudnI9aSYTBOBETx2fsGGvQ6dvFqEbPgdb1%2BiQIr3rwdytSki%2FBDvO4kojLb1shzh06E3E4FfaFOJ9ZBvHNSdJhzC8kVIhXv8C5SbO27sc4V32bE%2BgJGDePFVw0VPyiZRoinWNPp1rw9vYjxIgO8R4lCS5l6oFjuEjPl9Np2vEe3nzWVXnwlozq7KnySnlVw0U6oDWWIeBuvlA2zRiAj5GtnBVEcvSU8JtUYZJNw%2B4sQly9EJpldwjkkRMeJxvscG5bwgAjg3mhAmqX7TZeEbjCZMq3rPe8ZNDojGA%2FqMDqmLrb63pAoTQAUNPEkobrPQrAyfOmOLYLq7ywq2PMzkCiqQDyZGRhU3wpuHASR41Y%2FtBjpNFXsswzwXlrlFr6tdQUUz3INxzm%2Blok812N5oCjc2SQq90q7WaYMnxHSEljalkaEfVuju9Hblcf7xySK6J19L5slxSRap8FDge4BdDGVd0%2B1vU6hCfO0%2B3q4IjFRFGQto%2FQzUcy7eEU%2BwkeUeCS9OQfknh9LL1kpUOvknvQ4Usg4NTjxTVJzw48hYJhgY23OCJ%2FcZS65cMjQW1wza8HhoJxnPuF%2FTygrD8g6F4XoeMdSNUAZrbDf6o0XcoJk7VTNPLAcl8iMI3Zpr0GOqUB0EQgaT6iP%2BVqESSVnYjMpIcdy223%2FdPlVDZnPf570p%2BaGrt9gAnrcI0L%2BUndgtlfMYT0ZNO5eRzPDvHTfV8UFa2ThFhq1TkCj0yFNdeNBe%2FLGHXxOq%2Ffpf2J1cGwBZAJBellMOiXYw9vic%2F2M37YLhX1fViTtGwf5IT4tZrQ1XzC3sWoW702AKsw65PZ1%2BBJlxZ%2BwY18OYjMgSLXlHuuAjXtpVvP&X-Amz-Signature=67586cd5931feea521e7ad71aef9c7bf0ce0946fdbb6984452edaa1e906c0386&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
