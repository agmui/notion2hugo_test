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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDMDMBFX%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGr%2FZG9ISKEwV7Lv9YbVfsvrdVUD79XFSypaBMgjmR2%2FAiEA3coZt0Y0b8bnjb3AFbz8GiyoB4Bk4dAXqj43j7Uh3tcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2B%2BeKeDe5B92ZtZ2yrcA%2F0DCh6GJJZesTWcqcukZb48uFv5Qv0nn2DfPfkMFCPoiMMKTK7cgWg0ClunXv9d%2FeKNXYHo%2Bams8hrMv3CFHbUF7KlyQDGJbMrizY9%2BOOWpiqOH%2FucNU5o6w8kO6trIn91IkVoJ80ISlzqP%2FmHLKRjGxQclTdcWxMx7Vp4wbWzDng3S95%2BIPvnkAZ6PNXzp5BOpOWuxqm50Md9y%2BnNAt7PK82jl0BXzNa9PhopBnp63wTCTflWO51q2lnJyYsuX%2FGdOvNdP3u%2F4eH0SKSssmV9bZ4FueBK66gNWkvfMSdBCWg7ITV4JCS7c3UixuNQykMmXLzgkOAfDeQV2RsPenx7iAfQ%2Fd%2BGTHzhRWQ5Zu6RwAWS192BQ5aJaGMTIMwoDlZYLQO0ZTtCXohNW2VaKcJrUlea3H87v7TQJz95J8yvBNM%2BtMVG%2BCOPRxb11mbypJ%2BEQzTwZ6RH%2BPer9ysozb9SwcswV5s31MPidwDB4wRpjaA1eJlNnFeB2bkiUyB%2FZrKQKGEjHxG%2BuUmiuSUl65FFMT46Ojax9%2F3rFyWhnrh8iP553MqfbGw7wqw9ct9VwPP416i%2FsxIk3v9IpsjSoXOsrZQAZxTkUS%2Fsu7dO2hOEyx2nM8RdWwTiTFNsJMM2r%2Bb4GOqUBK4pgYXQwJBfaksy3ZhpTUpr8%2Fr%2BG%2Ba3UxpHhbXCalLWjLsYmdMIoU3zHETGYTdDxky3DSh8Q2dtrUFKwhaDRmABy%2BEpwKb3eaj%2FcGp%2BsDDor3pzlFPE8LsrugdGpFoAnshc%2FZcTvQ8nhdt029f2K3H7X9VHahR47%2FKiBE7xAWosseHMZbPZ0Chhpey31%2FSJZU09R7SGi40F94K07i9sZzz2KrvZ2&X-Amz-Signature=100b4cb15ca68c77ca297d2ec981a8d45e8599a7718091bbeeaf9aaf14fd6fd6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
