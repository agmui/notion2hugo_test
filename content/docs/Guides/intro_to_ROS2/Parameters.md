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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHAEQJMB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1SHYW7JFzZhBvd5mN5xxiEmO3VjCt44rEZ%2BCqioRo8AiEA8g4%2B%2BuRFje9mesgjXNh2Cd8WMBxbdVztbXFTF6f5hzcq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDDTcDaQ39NaJ1kGBXSrcAwnoXjFaxpnGlyL5SzVtcsBh8zsfX9nriYzwnie6Hl17yow2Bi9XianFkCmi8pEGQE4X%2FgELqNSlxmaQlco%2F7zQ8rUMC54t5JYNrNj%2BjyI4vBnpV90%2FecxC8jX1WaAwZAF8kuSs9%2B4zMkuEd2%2BIfRREKE9bUTd35aJMiZLIzQEKEEaV1MldLBazJxmBLhJvgIlNzWMrlcilE7UJAePR%2B5ukT2ooZgx8BYUq6RspM9FYO%2FaHeMIzdiOvcrPe0ati0ikvzZXOzAzoh%2Fz6RC0%2BIg%2FIxDWI85ZBhhm5unBK3Lj7F5a5%2BrT3gkEmH%2BVBlUO2GJTBrHl%2FQiV%2BXrmQApoxeveNTYz98sO8UgXL6%2FGw1p83e8zfCA%2FG4i5xhU6ZhuEw4u%2FDhT%2By1p9ICc7e4%2FdgIoxunLCeGxf5goSxIqnw%2BCBuy2%2BMVQXxIIYlO6bdUw90sJn90SzF6foByZXh8RXyRt6%2FZX7zsLk16%2BcpaFREfaLzXlppiolmGM5It3Tvh9GspDuyHrmRwzFIr9CdMPHjAVuxjPBfIYUpQKKGw9z62oZXvHpOqJR0bqMV79gqAv6uIzuXZBXBG02n9AsS7K68IAsippVvx7DPykIhUX91ZcgMfipnYbHFuqOKNG6KuMP%2BLoL4GOqUB1AYn0Q48EF66%2BcJ25HVGn21eGLLbKDrjbGwfprjj2h6SCH%2FFJIOA2cF2kdVkEbnD9Wp%2FDDY6MtOEo1pdl9ElDho0CV6jvhqq9U1%2FUORXs1t2ocM9tkjA0vGy7Y8pqjuKmZ%2BsJ%2BiRKLgmPxj%2FTp7I8ioNRoOHvDDDSaxRucmVsTras79O1N8lq%2B24coP8GOHHj9HUhEWoSUh50QxDQo7%2Bu3J%2FPOc2&X-Amz-Signature=7084f22d0a2bd39af98c50bee737670307c8b8c886f3c9d20cd2f6fdf7d18da3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
