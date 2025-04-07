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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUXMHJMF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICV4rrC%2B1IAoorLRgu5qfWWHx0xUJ1NnQrqzQL3pVGwZAiEAiLsCCK%2BFeUUWMxaXsLw6QkNDoBnfTCMDy7gkd58BgEwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDE1oe09aomOXnoqi5CrcA4ANnZ%2FzI4F0LtqDdO2MINE8QiJKYAJB7qxRrC7%2BdZdaLcCWZHw1Is%2BAPF1nh8iMvpz5ldfSURm6tolPS6nQmYoP2Z6bN9yxwWF7%2BR5dp17Hf69kpPo5JyucQJvV886ro9dpS%2Bd9WYtxikA3766Bgdf41aWnVxZRK0vnz14gEEVyBBngNd6KLiBIPh9sYHV0cZq8Ly9IxKjBwj8s6ajUOGsEUm8YYzDcDUtyGQkuqUGjiSK14I2kq3D3nOBLb4bzhn1KdrsWH9mMVLA9okjEZ7XdBgGL1aHkwYsW2SCnItNTymNqjKEIP9uylfxEUGDvnAiyGcuaZpdUzmp67UC3z2Fdlt%2FRFGbFSai7N10c7f1YB%2Buw1qIEOzjcUfzkFlHfxBqZZDiKbYJP%2BIvN2kouekiEgTlNolWJQ3wP0UO8obqn%2F1%2BzfvFlr4g0NWwrB632Zp0oU2dPf3cr5vyLFtcGNf6l85EeeF70mLassY7yJOdW4NGqZ3eneJUeo6DQGE%2B3pJaIdXBZrYn61PGs%2F15z5XySDgj%2FnNgz2KKvuzyOupzLvlni1PJwRLAvAM7tnSWSyMuH%2BIHWHNqxhFnLH%2BPwENnhq3Fdnbc%2B0xZ8981h%2FHCzkEbxfspczbwFAnKqMICF0b8GOqUB%2BgwTPvcpv3HHXf84fJtCX4dOEHeqpBCTshc%2BB4TKT726uamPmo95k74hUM9ROXdKRFzS8S9uguMYuKwX5Zu1kgpQLQJqxdTSbaA4TePiYbnEBxw2WNo5%2BywEN%2F4NRekhpkH4navVJA15%2FUrKVIJ%2BDCxf1c5lm%2Fjfz2QUIC5uLlBgzL2vto1RmwqaDjDOIWvzSGEdY%2BXdlJW4lmhfUeYHuB0mR3B4&X-Amz-Signature=7fa5289ac79827f862ab54b61a36f89cba73fd6686dbdb346312974b904659c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
