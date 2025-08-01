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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVNITEPQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9HBh0V85gGuY7R42xmxHtX6dC6wxKtXeswX1qPkhomAiEA31wT4umMhtGIYkNt5RdymX1adV1WlkGwGIECSLLnMtcqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO96W%2BHleQfqeJ3FxCrcA2gtleM39wUifiFIg38Ha%2FcJtdZvKf%2B%2BmTqgPKmc1B5TdnwmP5Hi0DtY4cFRsAFs7%2BCwZ4WfVdpXBqOVDcq3sAtqzGKQok3bkzqdwSQ2bnslZuE6G7dWnMmN4PFF9AHRffNZItm38q6DLU2ul5%2FtMU%2BhsS4i2nl4Cl8X03MLBU3JDKaMtVjKgCj8Rum9RgizRgF4bz8KDA281NFzzO5OgKntz9OZo6x766WySO45iFJLXRk3zGeVvJ10R2GA%2B1kJZ%2BX5jHPXMH2sHFKTSJGrnBHyfvWEFsAHvvW8KB%2FuvjB5MMrPnVtFpxCb9duUesWLDJtrhA6HzSeyJN1U8XsuKso1AiCv%2FHiDrSXljM%2F0dEj0MpqqkSUvovUlGYYFxQf5%2BNFjSMEzO5dLEMVWglXIBE3jbWQVat8vgrqhJvVQGRPRCqa9ZudIPUOI1xMd71tcNE3lKLyULrP0KClkZBMOaX1UD5ubTB69pP0cMEXhwPdh3yLv%2FQ7gEtZ7H4bEkFqQ86L8dPE9jSTFfqNwp%2BFwj%2FoR7DhNO6jxptJhqZXou4i%2Fh%2Frev%2BFxXYm0vC1VHUXyNNTkomLORDiksKdt8veKnGPdSxO%2F6b9iShk7yQEqkIFZ8tyUWqkCcz6K7O4FMKD1sMQGOqUBBYhp8W6EURAeba5GwPXFsrYdTWad6vfS2nSPPzXrrFcMww7Y5h88VWACL0l8HqY76t43DtoH3fIsXwr4XPZqXm%2FGNvQNs2DRlgZ1ex0ltjAS6oVM3WRFIhpJQzehzrCw6PDEogijSx32A3C4CmHBkJK5Hylb4OIL2H3c%2BLj5SFpte2iOvKshyiFFQnkAOAJNtnYT5DGWkXHN0UWa2NcMJWZ9kQ30&X-Amz-Signature=575338fbcacc2897da09fa6fae65570c56eca49e250bdb2806c20f1bc2ef16b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
