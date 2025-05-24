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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZALIJVHN%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIAUOTPEA5QhqY2Pc9S7SA5%2FkXZc1mpaO6hI0losedNb0AiBbll00XEauEKGO9jGYIXNM9XkEXACQhkdXE8xXlsHVRyr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMW485e4puQ3OKD01yKtwDvpMRM%2BueR6hKAQcubugeQOZIXmS14w4Rn8wMoejR8W6sPTxp%2BFvQJiq%2Fv8nEyRY0aVXPUHninv5FiWxc1DwBZ6rzzhGvjFu8lGg0Q7BWm2OiivUCwFgrsDldnbbgqBijET%2B1cL2nleEgcXTA8AyzVsXNS3xRe%2FzRjXdPVAZ7SnsdJHIssAzeb9lCZvmKUzmpooX5%2FX%2BNJHCQuAWFqOKF9xcJOvjm%2B2zh%2BEU7zmgUUR%2BiVFi%2BjXvkV%2BQl2cUdRvktqDBf4Qtnmmdw%2F1POZHNeQm%2FIcktQss309XZhfwY7Axd6wn41rizA0d3WRNBjICXpTOaTykOWReg4QXZWYhpi3tFUaSzFbuY3iqqgFa3JNUH9s086EibeCxUDhw5g7HF%2BeLx1ay%2FiVgHN6jA57Il36QUXQ9GjRVC9vATFKy4DprEbnmKALsXqbnLe3nXTHl3faakzHSc9lnjgTC%2Bu0x5mRHpO1EKAnWANVjUoNk8PR5P2TgnDTN0tXcjxJrjdFTJCYHCoTmYKvld%2FY3%2Fv%2B16TYVrgAeCxTk0lQXi%2BAFSFTU%2BnB3RWBRxlWEBqt1%2BZ8FM0qV8kn7ejekH0INb2Qs2f5xadyVH0qj3SMzzteTb1bU7q6Tizpa%2FCO%2Bk1V1swkrHGwQY6pgFXolde%2BGaCWb8F5f4R5lqymYcWkz%2FBA42ELBCtyvH90LZdX%2F38KvgXPEfXHtWDW4m5eIjiiJa%2FIAZjpKAZRlSNpNIqJsFTCcAw8tJknVq%2BAsgYBA8fnLjbTgd6SoLQjISaXAeqt%2BmQOVuGsj1TkXa1JqdXAirxwf0a4NAi2ZPRN88zzk5TcIkrtleBe%2Bo8TZxVr0rNrz1z3OjkE2attr0fbAbqiaD7&X-Amz-Signature=6accf4c54c720b9519d7ec62d115504efbb30f7ef136ae02bf5f8c370b324938&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
