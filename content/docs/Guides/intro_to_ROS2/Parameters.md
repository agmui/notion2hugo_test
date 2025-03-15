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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JV6EVQI%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeI2AU0xPqzd5lJAbgPoJADzQQ2jSQLoSat6gq5PJybAiEAkNqLw6q3QLmp1zoCEwEbGWTjPqB5xRmICF0z%2BBcHUmgq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGY%2FThEuSftRABA1LircA0Mktt%2F8vBn4w%2FTHkvpuXNFt9L2N4zezaJXcLEBumXGlv55Ud89lQHZFcttz9XZ080JoBnOfkK0LCUqxVlVq3k5mjg2EAmRmXdT38Pfd0olxnSZq9GwB1l79VoG4EFFiUSF5pznU1TKldlOgJqM8SPWaH58HZbNY6XuLqBwpmdP8Yn4qCM9ctNI0bAlWMhqZLshqIkG1ajRWGrpjzSP%2F6Czv4hWs9VA5UXGlBpGy8LuVsU1Yf67saVL0b3BHm75nuuvE6N4YXcpQwK62IIMLH8l8r4h4qY1R0%2BBoqGruZfGTrYD3NGf53dPhlcl8hIkLIuiEvD%2Fj%2BO5U9%2BYUWIVf6ftDrgn9zQwtCYH5VQzlU6H2cnzcCy4S8LkOiMSSs3TZF5PJhB6f1hhbzP%2BIj%2FDXCb8NjfcGJdzr%2FaDV%2FUPPNrGUrGEMQSlKJKFDfWaP0eHbHQOLszOKe1NdvzapCetlX4BbG3onGhEXTBZ%2FkmuN71zY6WiDwuLHh8nBUEykRlOdgHiOYU9bYJHpijFxLr2%2B3Cu4PVspjgAd4jl%2BkiQuv6lPL5Eue%2BZtWxLH8Vq3kuJXgR3EcjEcXAbScuuFM4mdQ3QRQKICvxnppeqPlwkWb%2Bo5Wb%2F2hUTnbKL59CFBMMHE1L4GOqUBm4HORisChpBt4dWpmSbGOtURMCavT7Npsojujb7DgyR%2F4kdRMD5SuLSDNvS4tAwCtLQIT85RShSNW%2BUZmXqZd5MHKSxwN9bePFXVDJ799gmvncypAfVUx0VoZ%2FJeDaO0%2FF2R3vB7TFs3NdOKbyqHNsRd5Axq%2B7PPnVnczW9EU5xiXlLePyowaUGvvb7MfecOnFXtXFlSatUb45Sahp85boQLJYII&X-Amz-Signature=e0cdaaeba2d2be4868f8c29cf5a26b970a6f8203c8fd6c259b03c33f741645c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
