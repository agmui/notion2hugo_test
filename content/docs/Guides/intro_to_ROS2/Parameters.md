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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666THWGCIH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ4Erag9C1Vo78vVKDT3oNDOqMZ0%2FHpi34aKxxiNqzjQIgZShPuinTJkWIuPkFSmnuRn%2FCfgPu0qBjzhl0v%2BOfDtsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHppp8womup2erefwyrcAxTG%2Baztc3DQ91p0jjFYOMpN%2B9jvFU0V256mNhC3PLIYklTDg0jzeFr2JlPibWoLncJlaE77XDKYuBoaPgEUDlzNXeZ3gZ5pmI23Rx7uoZZXiiVHDxk33a1KLqSrNvmO6uhmgcSWs6IM%2F8lwQOIOOrWrD9SKOkUWrimQP9o9nLCL5nZZPNNKCqCmSMt7PN2Se3KN%2FSdF9Gnighkb8Z3uo8gc7CgGa1CS%2F8iiFy%2F2Cz8R4Vt0KQGxRXLUiOiR4DRzMz%2Fkuv5SjgeRXK4k1F6CT4gpNBygOWfU6vTB8HTqDlOwQt2QvfWR13Kg%2FMrWckDNn%2FUxH9dBAdhPGR7%2FHbAL1rJfEygTuMfSL8uUBrQpKq%2FqZs0fICyorNUC%2BSV5lcZexjjFGzc7693mNWDtfV9%2FmzrzkXfBQoJPYMHRVrUjtcrQncKhz2vzX2rBAd%2FUKcmPlG3QVso%2Bpg2blLtt7CC3X21ynjK%2BX1n%2FtsTelhJwPDoUc5qr4gJhBHdenZKgo8rYvtR5mh2OkGbOEL0dME4yqIqEtKEiMzzlIegdoqlPyrW5za%2B%2FjHQaNZLoSwQ9OlQC0AIXGtTX7o5u0CX1Zx0oh8RTUmkqIH6Tk4fj6Zt56X45e336Iemgar4WP5VjMJ%2BP28IGOqUBHwA9TrIicUA5JPijM6z1h02Zd2jfFzs9TrBdueJ%2B7wigyVAlzg6ZS3yyWVHPhlEeYjm5Ol8pv6imG4%2FJdR7HS08aX8AhHPps%2BXR2eg6NDkTyHc8kfs%2FpaoSZpZdA3gCg89Lx6H%2B8pGqdPUHMIoASjeA9ciGoIx8GG%2FHMQQdmio6PGEqqVxOk2afoBU2cCnzkF%2BQ5ixUoD1PPMHWC4p%2BCA1CFYz4b&X-Amz-Signature=0b39a7d1926613d08805198ce5dcef67d1a098ce9f135a3c710dd469833f1fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
