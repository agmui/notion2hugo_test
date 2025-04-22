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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2P3GG2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCT1I1pNikzoCni62rHdZl%2BDBUxhNvNM3kS%2BxrDMly2OwIhAIUvz0auyPCzC5CHWetvsr3l%2FYxvpgx9awJIdYh5tr3ZKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwg17%2FrKLwSKOd6nq0q3APn02fhudik4qDhjW3w3M%2BE2JgO0%2FApb2VDtvZOMhdKFJS6iYAboNdsUb3AAgVplxIoE86tG%2F0ybXY2ulLYe73TABGY5uFGOWEXQxPFK1lNv6wxs0DMl1qbjBzhh%2BHbwzJcTk%2BkECDh9NES8vSGYuGLhqCqDnG78Raj6Snje249DXx8NkTQ6CBEKk4vo%2FDmvRknuX5V1Vn%2B%2F6ytqReH0O99B%2F3jmYWvbsXmJn4z9w0OfiPl%2Fd8stOan0yNUDvQ4NzyfcFxlmVWFI5tC6w4%2FcS6G0RJMCNLV8gbFKP9H748xONLV%2BY%2Bzd7K%2F091bntuSOwZgd4kOnAost9%2BIrBYex1Vw8sZ8zg%2F0NZif3G3b%2FVDJ%2B9gdpZGk2raqKpJzMWq6EstE%2F1IkU6U0V9dAyQyXByfZEgsSlrXrvWBIgqau6z91opyBVoRto6iDehiwCyAGlRjVya%2BygrC%2FGLjRFtNcmYSUbX6ti1DRiy9zR2%2FzeEfcAzREDrNoEp%2FqQ7pWt0TW3XYICMdOusNcWBC65IxfbQluGI2cfYHWPYEtwe%2F7x0VQN%2F8omqX0sjqXZ9Z5%2F3eubGa4L6U9yR9G9BjULmHFg02u99LP3Cr1ETOhMOuWklBBjJG7GL1zK%2Fi3yzFgtjC1u5zABjqkAXkr3%2BAwmC%2FB4uWSUk1NyoEhKLup28266pTYNfs2wtdbpfZa5gz0OqDF2%2BNx8XiqS5LPkHjX6I4qNZl4gVGDVCRthePN0MqNVW4SqZLi3Y3vR3PTnRfVNCVStjU6EXqQDu8T7ivAGa%2FdjTlkl6r9h1tVLdZNkQ3wis6EpjgPzTXKFrlyvCX0iWzUc58BoDKdgmfRDvJQHkkUZpac5tbE2SsR0zfW&X-Amz-Signature=870708db7542b2700c4b0497f536612131bdfb58990326bd83bd4694ea4da9d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
