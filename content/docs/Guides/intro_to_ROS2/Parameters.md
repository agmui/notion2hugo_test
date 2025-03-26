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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JOMN7Z2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BwGDj6HqEfcFB%2B3h7wjP4dSMkx4FfMK%2FjuzBL5%2BZ64wIhAOu1jVU2gau1HF%2FB8dohz%2B8AOeeDfz8LQxBrlGMFkLE5Kv8DCDQQABoMNjM3NDIzMTgzODA1IgzMqBpviKaRf0WQzXQq3AMN0IhVnUNL2h6%2FunzoMMWEdMP8Z2cjno6EtnTM4mn1ZaN64JZNt23VecGGw6UAMYr%2BekKPH9ikMb52hzJlv%2B%2FWP%2BWue4pyerSwJEmCmdnaT%2Bc3lkY6NioXTD4zvGgQ2e%2Br%2FbrW0VAS0oMsioAA8S%2FEEwxfQ98tyXfB4gVPKYDUmmsqjIV6rayvI8lvAkTsZX6uEWVUxr7NyPxedsfMrStXD5kDiDnxr4mRgPvqjCBSOkigjAlpM%2FrQ7aiDzV%2FnOoDgwh5GAC7EJue47NDbRFHtvkTkLHGt4h17O4q0UO7tfTSgjW7KVUyVEazYOucXfR8ckzI3%2BKIfZyPqTIB0HE6wpIHm9ZF%2BpJz9JfMEe0IrJYvvLoTXgWbxJWYuJnr17Tt7f7Jjv1cFqJ9iPA2f1rurt9OaixFX9sSo37IQg5%2F7d7k93hZbWhjrU4S115jrFZbjEvJ%2Bi3brgJMBlAwdGMQcZ8jdNlAQPdexMaOa05zbRiKLREa3S5PqJ7QfX7lfo6FxaIrRxgTVwVYf98%2BxiAC7hyd%2BpDe6sT4uotTJOZIfpuQrAvznNBPVd0riReq09RZInXson%2BpjIXizlzchZP5lfhwjs08pAmy3UNX7mInnG3hrD113rdLJb4MqFjD5lZG%2FBjqkActHZmPWP3dvwNNsrujNl5GiF%2B4YmZmxXcJI0SXY7j4RQ5D%2Btt64muktUBoxgfkBO1uHc4mbFDM1C%2F5mx8wmn2G3cbNLtY97p1rl4Jc%2Fw9MZNl%2Fn4IC3Wsk8YJG2F9WhxniKV8Cfn1TtvZu6efsKjA55ydM2cTqg2BhWzUUBK%2BVU37mw5xJS08aIg1P0pUV3uC8aNmKRAKruMWAs5HeAvl85t5Nu&X-Amz-Signature=a7c07c6e73e40fea82aef918b4469059c09f043bd089ca6f39c866453dd4231a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
