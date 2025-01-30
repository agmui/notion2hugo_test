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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLVHRFQD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFkWPOMEd9%2B102QPgZ7F0pLQ0mvWQxZWtUdGKbxC8JrAiBo0UsFo9actIMIsXB9%2B9ILpFtiHZcCxPeA88zAut0e4iqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhsmRgjiU4h0A4EyKtwDQ1tCAQoJaN%2Bb3zLh2mI9HmttTgIZZ2EvOy0u9nI%2BhNZqAsRmaKHLpFpwXr2hwinjcb3I%2BrbL31GW65i082y5r5HmNm7kgcejaGhX1TGpwI9%2B1yN03ZXrkddB%2BS0SUpWKaOJkxeVp4N7NT%2ByTmPmE5M2fUjrVyrjZ%2BYlx6nu41FluyY8K%2BmctZdUQoG3Uu5CQ9ODqPuQStVZUSU6LsM8%2F5vMO1vS013kfr70vVg4CYvuB5USoGFi5LNlMkcGvuKpOUDuF%2FLfXl010JERd%2FqR3HnOS%2FDOntoLR%2F%2FtpaZ475WeAb5oy%2B%2F8X%2Blvm3OQAjL0MlsjijbT5XILcrDro9740dxIbPbXzfvrLmbGmoW%2FdKNpgcJGjajyYgIltNaM%2FNIyIVCU3GKOSA7gZ%2BOccKxy3KQxQoOMDvrnQ1BFPNGNLhrsuYGpMWKZUAXHUxJH15VkjU5qWtEFWnC12OZ%2B9YjFjEBbTllWPvyTI9Pw5Vf330yxtND%2FGv3W6aGY%2BRw5LHAUgVTvDjwjDoUenGuOGxP0ebfNnufdUZJo6XvAonsK59cnNXCfVdltskp7zGcoLNSPq4l7BhpOUsmVZyt6F85eaENtq5Hnes2%2BcQGSbqpZBS8VBSzC4IdQtcg00ykQwyvztvAY6pgE%2Fm0iRUx5XjvqR35NTVtohEJPWff1CN%2F1PtqJGy5OV2Sbmg9G6avmslsCqQk3bdStFYxiO9dBaSgCMJqTL7x7y%2FSB5b%2F9Funa24mPdK4ypD70TNWj7tANshImAAvS%2FqBEsQJFdtxZK4nl6tnxJWv95Y8221uZiKFqZ3QOWlH2Q2LuDx2LqC4XjzLRIcZPT%2ByfHHWTl2e1ncUoQ2Z8U6XwCcDK%2FwdoW&X-Amz-Signature=e36cbcd63504350dfe6eed5c1c5cf91c51eceb366923eb9b6b55502bbc305e13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
