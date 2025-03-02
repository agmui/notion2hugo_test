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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGLOVE6R%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEcAJwWlCnoU9vCU6DeU7DsIdQuJCm0y%2Bx7H1yR4LqYcAiEA5nUb8L4RjsFphRtwEaKrMbsGw0Gnho1faWSciTudfzAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpaGsUXLEwUd4O0QyrcAygBHmDzvS8ntDYLEt22WtWsRgNTWuP8%2FfEx0Hkl4IqCgNAOvETMQTSAkU5jX9xytSGkufOz1vMM5xo1ap7Uw%2F%2BNxxvbBf767xmCm3WxlixYQ7M%2BWm10lN1qP%2B%2BUeGjzxe%2BNtyhrMvLC%2Bf4ok9VqLJaidkncuf2O7cY9oD7pPTvxZhHHEL%2FFWJn%2FMzX4ble61LuEZNllP%2Bc6Fc6ollcfsl809aZ78q6ydGRqzZrdXQop1O%2Bq%2BWqP8UjW8%2BsDtw09WLApT1Jhe4I4R99ayix2gvF6PUq6GrK%2BGVt8SC3PVoVhaCbJOmFxI5yj3JgCZJO9orPsSlClZH1%2BiU5N4ztfMePIiCWBrLxKUTJhyMSeWmsR3xWbpZQ2uCPCcTv7XKOICBB%2B31KuReN2tKxbEz%2BSTPgNq5PMvlaRP9EJuJw1xhjd7w4eoC%2Fb4Zk%2BjY4lTZRY8beO%2B%2FKDN2lGj4B6NIiKhDYmX2xLrrcHmb0xo69C0pZ9f1cDoBIz%2Btso3KeIAWn6m1W3CxhwjOEkfZ4qzsWjOITVdH5QwRViX97nKj%2FTAilYJrsEh%2BYTLbmyt2ef1XB%2B847113nIa2Uvf6UQ%2BE6MnxaiZ2w1jHqZyhvJCGp7k8bNR6VNi9bgxIXXPEakMJzYj74GOqUBqd2wecYlzeXNBytt%2BLN%2BfOuNadEm3IodV%2FRo3EJUzDIwuRALvLxX3XviQYMp34PHk8ZE9zJVlk68VMvdWOLSAekwspiCVv0i6yj1FBLcjcM3iH1fSOO%2B%2B%2F3hXMS5dAEt3hmohj7oxbOvuDlkKpfOkpK1cusWEVf1c%2Fl%2BCvMFKHMyZtQCIvmwN82GWBpGpcBb8%2Fxiy%2FG7w6glKopNDpDhrFNlnSXf&X-Amz-Signature=99acdb0935e371b815b417d96645716b445ebbbdbab22de046ee2d55ca04e1ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
