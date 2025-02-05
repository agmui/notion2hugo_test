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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OURBNH3%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIH2s%2Fp6d%2FRS4s8%2FobkNkgXqhmpOxk5%2FyVpsvEtzkuoTBAiAt5QPo%2BP1NBUFLZ%2F%2BR8aTSjsocyZCFwa%2BsJCBaF8HJzCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMXuaDE%2BnICZob%2BZOXKtwDX9aRCOpMDbpjIq%2BYsgw7k2c8Qx5AUZeJI6pjbjz%2FopcDTz7pnHfR4CmvAH3%2Fn9XRXmhuoNzCA4ZV3j3BDKx3qUJnt9YN38S85jAX8ohqivUNO2CK4ZSQ6NbMRArWPqJhYrq63fKMwL48FeWPD2pabbQdJBaWl3xg5YyrbGl8VoOa5Svz6WLuNG2Kf2scgEUTiC4pPnr0DB%2Bu4BZhyD499Rfqu90yiRyCl5J7dAV4enR7WfqbCncVRtMz5ctM21aNRby7ZVUrVkSbH0V6K3zRR4ez7bqoBqplCJQuBgsd1gx7BqZZxqxYeUDl8lRO1GmVAux%2BbRON3yeHiff4Horiq11Js7lysUyz%2FJY7mWub3LL08c5aHrvA6Iu0uNLIkGnnB9tiMGAPR%2FFFkFqiVJQSoK0i9DhAuCe%2BOOmhZ0UUxlje3%2F8bIoG8DQCz1mZr0xNhC4VPBxKHq%2BZgeGsr%2FnhHHN2ZnWpfyKfELZyVanB5VbpsqdNvVgQzicU9aieLEY3fOiYB3XISsN83RwR7MPjevaOGwxM97T0peQ%2Bb9SjEdR4r37Uz%2FCQWIvZgtV65cTT26Gcr2KsiL19cRqN1e6KrWQLxRBw3x8UaADcqLgmAXltkNW6dAaj9Eb4y4O4w0NCMvQY6pgFmqAuP6GH5QyEKwXOXHIYKNhSANx%2BBr8Ty9co%2BSZovqx8zsptoBZltxuLx6R8dPAdl6zevqMsRQuzvdzC8XsDIcn8arPzsgtxEVY3GQ0r1MoELmfNB4ZTmXtGcD1tj4C%2FuSp2B7EvqITHFHpZhJIz9hjptJMzmuqzSsgO%2BqPbbAtqHViecmHPaOHdz3%2BTn3gXhCW3cyRJvetqIj4yER9mAxN7q55zN&X-Amz-Signature=ac6fe59dd3c96378f34379da60525a255f05c9dbe8c65b6fc5cd28cbc359fd50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
