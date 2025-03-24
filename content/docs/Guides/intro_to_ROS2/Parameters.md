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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CLFKUNS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzQnKzvPn8QMLWlEgBR7BvuANm1UgABJMHbNLImu1OtgIhAIQziqRxTAbpPDlchvMD3b23jNSWpVyw8AoS%2Fpf%2Fd3iAKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn9kxegIEKrjngue0q3AOHdWkki4dttEbUowIVxxkL%2FNB5HSja7rGqkvJTqyeZsBOMQTN0ezTxK20WiByqrTl0tEkr6MHye8KaCU%2B94WJiTHoS6xWBWwLJAqOl71NUhnUfCGviuczUcE%2F9GqdfdIpM%2B1Ksz5prunbEl8kDk3Esn5uAa9NpiqpQJcOHYOnN4IryNz05DaVl0JJN6Hm7bbj8Mb4qW2rjuGQUTctZs63ZxgpvtWB%2FYFVAJsTo9rUdG6bPQruBuE9%2BZGi5QeUdp8%2FdUl4n%2F2JLfUvF%2BL0dNJNSCG3zb0FcPQ8xpvHdjavn33AfwAaLuEbkmQrRaWMbI7IVCiJAMsg56He%2BH4ZRSo%2B77y1Slu1pXgxMr%2FgHeX0S2JsnARc8E6nzbvh78EgmKFjIqMcamSqynHgy%2FRDaHW69wgfq9sOLhMwX2qMI64DmylkDZOwxndr53sF1WbJ4pnSQDd4ZK%2FwyyUXOQoCaGuB7%2Fsmbir6pK6moSxnIcUy2oQEgVsjW9q9IAUrllzN7efCpT82aYM1NiUpDCaC6HJh7T1dIUJOa0ge6KF3dx1zxs3Ldgs8prcaSaPjfTqWHfaiWrsWrkvmSMMy39bwKY6ryaHrHqLKd%2FcOJNjwlhL0nB22QT1VLb%2B6uhgzxFjD7%2FoW%2FBjqkAZXlW22U0gshSLvERbEsLLUk5eArHb5ONwyA9HBTOxKq7uwEMKY4pZjUTOJhlKVmYVFqWqQceJodrxGVs3E%2BnlW7wFBOiVhiLmkIEpuN9jy0ZpdX8y14Pmo5oMwAnxGgP2zIYSC4pBU701L3tZj6vxDiSsFDY1%2FUYsL0FaePLZN3fduYMMgMZnKlOoiHQfLb8wjKupnsgK%2B1eciN8wRkhzLiB0nh&X-Amz-Signature=e41ac74aae7a1e8249ecd2b4de445f6380b73e4cd7ffd15c9cc6bd58b8a0ff74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
