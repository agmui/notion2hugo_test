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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM5RRLXH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2BekBqQSFJf8slAby8E7LXU44BzMr0dZXY4AEfpfseMAIgPOKp6ButgsSYFEFu8tlrBLkJ2fY2q9i%2BGE46jh6vXfQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDK1ccL7WsZmXEoXiJircA370MYwuMkRc73v3w7bxcXt1FE99d3FnvnxaLDrd5QVAoLkIIs2WeUbauP8wHxIaV3t%2FH1k60nNUauuxpDMOPjLDzXcwCY2HLXqdPA1qqrKQbdKEQKG1CTQQqZ7IRMBbERJAV%2Fdp6YeJB3p7r5RkODtsIGheqxLgmzL1D69e7Yzj9nE4w2Ie60jPyX1dgN5cJ%2FUr8p38FXez0%2BbPNh5%2F5gLvU440ll1ilR49mvxkC%2FvCzeH8Id5HVB5DIuc9SMlIWfhfNH8caDaqXgqjKrPr6RXQCrX%2FXBs%2FKeR3leg3R1vn8R4oLgQdbYb3vZ0SkXyYeX9b85WJfibcyEI6ZVmUmfZ7JAW0Uov3Ht5NHUfzcZzusJst%2FSGD%2BXaoAOZ7geUqh8Y%2B2wxlApWt3hxI9VcunVbAu6VgRWSfRlsEwoBRhdfmqxCOA7FCpUHTszRu2CKv%2FraaDdN4ZOjFbj9VjFFl89YlluWnk25KmSLEMNdxUmozCtxyqtUqEttOozDx8f7qtVsYlZ7ETK2f%2Fzk8oQTOGzeloyl1wbKYxQQkRcuWPcO3yedyuUkTdhFHo95O24%2FsQdqywsHAkR8qIMx9mwe13v4CQ02IgiL6mWuUIhQgr27BokrU0t6DXoBINvlrMO2i%2BsQGOqUBMqb76xOZBzCAWt%2FUyxcp6vhGZZ8i8rKrfs27ki%2FdZLh9YhJ9WcXI%2B%2FQ0PxSDeww8uXm4ir9KnHdsCf4Hxmlzp%2Bpm466%2FjovWSYHOlFnPQvPMxQoGrXzcRKNUz8%2FgHzy1S5lg%2Bj6iOrCddbjaM5t3aTJu5h4cArM64OaMGWd60lIbj0CrNpNUyUdN4nXoyahEhPGDf%2BLDjxnbtixIrU%2FMBpbtPq%2Fs&X-Amz-Signature=d20e73c38c44cada5d82653b3d495a550e5c09c728d8839e4a8fbfe1b9ea6773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
