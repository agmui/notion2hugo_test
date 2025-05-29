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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX37W4AD%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA7LGyf5wwPxaMZGfwLVVRlk%2FZ0kxtYmsOKt0lWNeRcwIgBXZ%2BW5l6IkCZzMMScMtW7qI311Bi1wTh9AOswzmTmWYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXEN3vV12OO3wEQ6CrcA7RgwMSAhx4NpWO%2B4RWC1fsiC7K8IdEfUNSXGvty9O0fvYsND3xPlLmKKUHF0RNAQQXMedn%2Bp9zk7t72CehItPlbOk0Oyba63AAngI7emWCQ4FyY1udMCai0%2FK2mreoydTNKpEqW9hNLJFxXzqEbNaZAE8c5TpFzNUcyts3vIeEl6ZXFfoTm5S0rVPgQLK2au5hwnwqjqagQU0HhdujmpM%2FBsWXh8qFlrimOKRNnhRgUevaXbPoUI1m2XBzDm5frOxr%2BAoljRloFyZwjTo3uw0LY3dj3e0fetGvSFdPPob2HGn5FnL%2BJQmJOOPif0%2F8aD8ndUQCLaNiS77%2BFxj8bk7eMJogCPbcujnPDuh%2Bywnb0mcvYAUg2AfW3JsrSuZooPsXqzky53mUnQ%2FIp6jIPw3UKPhhq0ph4LGevgG9zjTaKu8lyJQGyi6rbmCbOp9%2F6ASBgPBpeLZ14R8wzZ4GFp2RcC1WmrpChRFt13Cdjlu5nR5Hm4%2BAxRiaxVbIIxExiTHTDnKnroqBnpJzPVXwUupKdQgqydqbI7A%2FjkJgKlQNiBpCsBml72yzHqA%2BlRgpDZ1Z8ygI%2BPW8aUL%2Fx0JrOy6xHyqk5eCU2XgLHAh8EqCuRpPCuZynXzk46Zu%2B7MKbb4MEGOqUBblxG9VUpkIvyDlsMKfgUwGMo5IemzwjOFu5kvdcNhDEZNhqCdYFAQN%2B%2B1NqqpppGyM9SCgURFAA25niFhVzVWCxR5rptYnSS76mbm2av4RhXvFOnqp6ZZrcsT07Cg8zL24TcGkg8IISnTgrmCsJ1iEKeRWBfcRFrf8GaGqMcGmkmRuBdfHc8GkxeWZF%2FAxZujBPTJ7yfCDKrSkfpHLefs9MZaQ03&X-Amz-Signature=3cbad471b451d4e2b4570dc1f6f2a92826fcf6909f22cd9600ef7a74c465f962&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
