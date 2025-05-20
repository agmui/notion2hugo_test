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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TCLNNWG%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALpWg9nh5L8T8S1B%2BesnJzV7oj9GcTWU%2Bju%2FtVUQo6yAiAb3vq359LsTAtpL8yaLiDBuQdOljPjGB8mR2xtJUEX9iqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEyRKlvyJTou9%2Bt3pKtwDAjPb7JkcTLxqjgPOKYYLfg1tQGvRUZC9h7nfKvuRXj%2Ftgnkxy412fbt%2FVMUpRWrqxQaBUlmC8xiHqbZ0wUf8gqHvcAbXOiNrs%2BWeva%2Bg3Kjsn8dZPAxQkyymO%2B2BWcDBHWqMbMkqMfxKHalIS6zyGWTQBDPth8GrSnr44x2d38UzVlItOvj3anclGtOta9Cm%2BLg4csZL9jhmFS1CjoPiJ6YjBGfpvjDXvWWVMFTIU5vvdvimHOG0IzprL4Y%2BvZccEVfOHSBjGc5jRJfHCIswpoGNtwkiXQCJOmJH%2FaYuqphqkAD6zIgYXS56I45dUZ9Wul0E2Rd439XY6psq9v4HjLCnQZQwKgCqLfk4UDYEdGrgboFRR3wt7NL9t5T%2Bisc114PEAnRr%2B3DiX%2BFLg%2Bnc0orXme9tG4m5Zfu2DolRuvf6yuH6vCJR6Xq2y4Hyk7eRqQghxGwaZdetUTai5%2BSlWx9fwtadx%2BUPuGAuAh1uhf0Ihv8vvxbTM1X11uNwz8X8FSSDyRXCsAG%2F%2Fxnz9wxUgu4V6eMgTjb%2FMo9JtnKDLIxhCodEZ1XnNTLaSydDQVICZhtBmOoqM1Rk%2F%2FICGhSSaEf1o%2BJzBl7we03a97TVN0XQ3cR5DSSDuJwOUjEwuZOxwQY6pgHU6IZbibv0NouzofCla9V%2FaM7q%2BGI%2F%2BbAwQtAIc4v3j7sLvUjNMn%2FPD1v0AiuXsYbLk1Rhj6EzzAemCP9%2BeatHO7PnHKdKjLwTqufkQRbQ0rPYuT4A8uINSonUEzlRoABjtJCbND5QMcFYqum0e8%2FHXYa34Fc17TfSEInrSVhFv8b0Ju7La7fvubWj9Ph6wAAXKo5FZVVxdZ4BtIwcl8mRE49CMX33&X-Amz-Signature=d256576b31d5319a8e1faafc7ff5bdc8e8e5149866b62a7d0706de4e1d2b08c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
