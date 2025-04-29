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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BRX5BRQ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoTRH712YGx7rLwk2L3ZHhku4wm2qTd21PtvS8wNR02gIgcTRf81h9UoOyXt8lldopaM43xAwgSfFVeiopV40CoLEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7yb6IbqP9TEye%2FvCrcA0LWfUJPyLQy%2BbT%2Bh7lcfuEDP79nNbahj4PNcLkECjsCDolPi3Wp7c3AompwNw7vfaXe%2Bl1bzsTEM4s6INO2zUYFdN0HJ6Hkln1nBL4ZeUnX39wlVL6Ws64MR%2BfA4E8D25%2BpQlCbqLjsL06a%2FoTJT7dWgvSo%2B4rLFFjPCcWT9fOClJhXvVv2bpNQGzcr%2FK5pYCxkvYLcf2cxV5nJIlPLYm%2BI7gz%2FEf8cZK3qhvjmNi3AZHH6Qg6vZ6icXSlU6tya30fWKZYxvZvTeZZMCgFncu6FMLuBSt9StHZj18TlwbdgXWJfkl5vuzZiNkUGhJZbLDvAcR5MUubC1aA5svU6XQc8fttq63EGbJXCyNqQxpX5%2BpBo2RvY3s%2FOjTxM%2F%2Bdv9FF%2B6eEfPQNj2ZzOO1hJRb%2FK8EijJJtT141EoEcTi00Kp%2FzAhzFflm5vcx%2F1cipxsIXGTSUzjtueetyztLCYSH2G2%2BD4nTY5MtIl9TlJL9Mi7Qq8%2Fa2vTwZXlVX6Nu3otmzxSXJ7g18q7OK6G2VdLmd43dUzj6OOtF%2BhVA03YxzdaRio9S0N3CPTae9%2BGCDKFeRs0tuJ57ls0TYTltx0U24fjr8XBcf0LmHurGC7lU8a3Bhy%2B1a7jKoi9h3tMNatxMAGOqUBc7eI8E7Y285Bq9VcWaS%2FJQ7YtctDVrechkdah4wuuyHfw5ETkw%2BOptXuMxmUpOv0QXE5qqo7fskWRLFaIzS2xlms3Jx3zwVRtG8AQYkayThUAV22lfol1chfSf4FS1yVT9jb1ot2GjPzAHEpD3VrH7G0KA9rvSn7qUqwwldG2umDu4i30K46NZumLp4gaSTa73Haz4ir4B6TlwW3cEjVAg%2FnXaAy&X-Amz-Signature=c553dfdc65a5e7bee092f25b144f2c2d9cb493480d5be3447d6451d0c9d1dc3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
