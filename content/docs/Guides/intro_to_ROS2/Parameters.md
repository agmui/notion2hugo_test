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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ47OS6L%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAYtGzKyq4s2Oazo1ihIGW%2Bnf%2FOmV%2BtLU200blJJRFf2AiBl6m0LcbxzW2ZwBNBJWYRPujtqRB1tOWXzqOMEWt1svSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMySZIcU7ugKmiHPXuKtwD9tJXdDd7ie%2FMWc41OZ8xaqPCpMd3WyD%2F5ZTdSDFpPNozQK6aClIOEG9ZCuS1IJG2raWylmdZZCDJ57MvtjpmxlV8mAmlPcRrNbH5AEZINH4CqFGQMPUvJmdysa%2Bcn63nZxTlGeYqYqw9j4r67Dt9X%2Fe147WAyAx831UubsKV0IWQHOka%2B80gG2D7xvAK%2Fs1sBuCf6knE9p1f0YxCwNjOSDnH8xAiRnaXShuYp5wprowbfK9r66%2FLa8BMVXYEo%2B6Qjp25Fc4Gogz9oT4So7%2FXSHeFvZhTyyP0GiHLtdzkpWchaXWaUwD6TH6UPaJ0K8bKQskSoHCkGM6PjtrlX9BsLV8mG28%2BndV%2BHrId7Yfc72HibR4PKpnizC80tRfgv7hQvB5UdVgNcESA2IRai9dU4f79QXJEYC2vI%2BZ7XZ5I3idN%2BCv8GeUvRznl1Ws53%2Bic6PPZj0x1vUWU01RkpcJON5c1S7SAaAC7c6aRxhaBNRL8%2FHbM9ku9GtAgaNUCDMsWrX8L6fgY9OzVpbAXBbZIK2qddae38QrmOOyAn35n2KSVCekNelSlo0FHKgqcquZ3AcIGi%2FsoHuLSeOt2%2Fx%2BoRiPs9QO0hkRO7CMSz4Hv2TknjWHL8Y04IVscLksw%2Bo7QwQY6pgFSnZ9AQBib9Fgv347qoeDsd8H3n1N%2FOKSBLPXnsqnW3ozRtVT7%2FtegkfvxQikObFVARyE23%2B%2B8QAZ3UfUKdB0MUgxbQ951zP53zJJ%2F3%2BBJLHpw3k%2FGpONMhy0ZYNURFJlANmyvO%2BLOnn7kntz29kNtfr%2BXBF1LTVb8eAeD8sYKhsuJBAyQla0CZc%2BPJ%2Fg9UtMvIgPF5cCWo%2F61R0YSjt7D%2BnKIRt8O&X-Amz-Signature=4ee52aae264ca6503ff0e4842fa278df5045dea8def109f7cf23896b31577e96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
