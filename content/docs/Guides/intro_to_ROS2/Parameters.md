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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCM6T2UC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQC6Ve53AyGfBLuCyd5HoPMWd1ceDWDgkkUcTtRzae3XkAIhAKch0k4I2TGGWR4WIBxL6uTyJY%2F9BzjEj9Fc2oAQVXq%2BKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8B0LqMlu5XtpINzEq3ANFdqoSmnxlSrnEQ%2Fy02XcroyNrNTfVgk0GjuwJUC72%2FfAwU3s70lcWjZurb%2FKkYa6y5lt6Jl6DaWzgvmSUXpJCgOLnmWl%2FzqQduppU8JZKhefG9PiaHQRd3cG8DE6KyHQCHMEb0S1SP4n%2BjQrdtOJLPs4WsVbw%2BOqy5XD3icN6l4Ku0r4GhQ62%2B%2BcxYaHmxdY8yMVKIpawAgNo3eFpTEy1kCbcFbZ7g%2BSW3vku5ph3%2Fg8ElHZiEkdlmfR8fZVAv%2FezYcJdrB3kJ1I15b%2B57kREgk4e11%2BEuHNI%2FCgZYULAjfkdxm58lv3UWOTRBWoinydjdsJBx1ldfCxE8h9UTeSaLJE1OSUmLZbg3kHIZtT5L4f20Hz1QoaMNfNlWBx1he55mmldrEf%2Bvb%2B1%2BnwUePy87DvOefduFjJiXmRMsEnp8WgTEHuTUjlhei6zRzjac4OyM7drZDXwdsyJ4hB%2BnFiVx4GZNZMvNUlgY%2Fk1YzML%2BW%2BGZO%2BhITqUoKS2cHAlmvpf6E%2FZZoVg%2BN%2FljiAl7r97DwQw6XrgAhMoIDq6ZFgBjfqDkRQW9mKl7yRV9b6w%2B5RpM1904LEvmgWz2IOTMSH%2BFHQ7wAhd45gdIP%2F7RUTN4%2Bc%2FhZz6gMiFIXh25DDu29G9BjqkAa0Vjs%2B4KYxISbI89w6LfmbTEyCJSo6OTBo7X1E2WoVCrd5hDqYh2UnzdSHdMSnCOl7G1kuB8FTcbaGH0nDNr97pIALWvxVC8F376P%2BZ6lyUlfD8Cb2gHJ9mbgKVGRv3QSfwBicjsiU%2FrWPm2ZhgUDxLiUHx%2BWz5Li%2FhlY2rUT043gBE1miy4sKxRYXsEr07W5pceuX2kFtIxIiNNyVCNpIHQt7o&X-Amz-Signature=5320dd337724437ed3edb27defd25c53a708fc568c539c17fad89b7af0094a26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
