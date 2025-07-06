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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X42YRAL%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCDeSDI8yBPE4AEdc8z3eaNGgBp6V5RfmpR7i4lJRWKvwIgWiBsrLmjmL%2BYU5ehYGBscjY%2BhtC%2BeZIA2HFVRPKHaC0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHyhIUM9HokSQHrZGCrcA59UHr08zvaiBKZm52u9M9FvtLLnht5iF%2Fw60MZfHIx3Ef1rRfpwGVeZTDyFjekAwd%2BIv4%2F2mn8RIUVb95PBGoZMpHP5UzmjxfVWAw9jpnz0kXvigvwGp1Fu4e1PzXeUd9WXQyg0wQWtyQ8k1Q5HBnY4b4f9mvI%2Bgj%2BSCvZrB6PnNOFbNUR2nvWgaGlOOS5EumcJfCDA7Ux9dOVAsdRLDeC90h8R1o30qlr4npN7EMdxAYV5hFuYmiO1RFL30fPmqJF%2B%2FwOPVxu4WYdFNztTUBcwLyvV23w9I2SbKWbGamAzX7prm8F7kuyR4s%2Bu15CkbEYd8cHm0JwkAr0uhHUqdDpPra1HJ4n%2F0vAKM%2BTKrMy9KJxOrGrRsvQRs%2BB4t9ecO42v6%2BqKi2vCElkLoprUfdxr45MLJd64Lw5TuNkWHo4FdDbtqsVGvfGklFJJkOravfOf3ZTfAwBGX7FxyDOHnVR0AZU3h%2FnTyThBbxWTlcXaeiKd20OwBIoL59CqY5xQ3siiblJbBAiMLd0dVUFcNffPiPvChOcv1%2F4dw073VjziYgNLJV2qNQ0eQr3srYbz2DmDIf9xkjguyRLTpbT1G1MX9DSd4f2vFoXo87yfsa0B1xT%2Fpl%2BLHO9V56ZUMJ72qsMGOqUBzN%2BRWGz4tKmc4uKRfarE3xXt37OtWip67AL%2BsNidlQKU%2BqyRlNYG4m2KNCGPfZFnlbWuAWQZSBEbgxgQrsxoB%2BoZl7zk7nbvRfXi2gwIrj2yolFJGKooPhHIF%2B0%2BDd1Qxs4O2or%2FJPIqfqMdGGDzqWrCparIqrGps5cOx7bh8bUZlSLa0Ubm9Q5%2Fxd6uBqVvP20vK%2BdjtRHHksWUeWhDCBBa3Ydz&X-Amz-Signature=487a5580bf011ce06ace98304c203b75286aa4ceba96e42321c326a3bdb3fd9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
