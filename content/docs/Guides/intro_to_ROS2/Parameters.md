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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SRBJBJ3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFWfGD0%2BKDwyuR9aoYRneZdcDEAO7BhE6SEhFvR6RolJAiEAgJfWA6C4TXfutFwQqT29pzWSsnSeovdGouFRhYMLZWAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDkQVPUdnp8swI03kCrcA4n3VaEaHNFKNthQ19Yz%2FO792C0McJi02xaz623dfEE4Pfpl%2FQXMR3U8NwVcvPiZ1VWAohTJ7PN01rHf3B0h8gyMmVL8gPRnrSgMqZsauhPZ5vZ0VJRIpBiDpG%2BquxKv3gKaik4APzvjE0P0UnL%2FPS5UVhK6AMmgE6iYdhZazIzW27XRu9cLn2iS7%2BUltF%2FPPZ7mtxZ%2Bg0VHprjbUeCX01e%2BczSgF%2FSmfHQ%2FyXKQGipkpYOR8JPfoxvNLeC5mN0pWJhP96LlGUtQjf8O0H1oMQIMEJ4kdxZpa29UiG7uqctBDrNjr0zeedIP3%2FU6SuSKEv7QBmce2c8z9wpVCpTsdzRioXSFNGsOmXkTO5SFjvWeyGNLEidLcnULr8EZ80hSBaGft9grql24FMAzbuzu2i4b67hsYupa7wCc55OeD8jAdxOhYGVJGzOSTllolyrYDyv%2B%2BW0d0u9jIEJxK7EWF5nrEx5T00oOlyL4VxB19rDXMXi%2BgZ73mtqkzuxo6Pg68CA%2FYURhJOItpFVb5PSaq12sZmGO6wXt0cKtDj1LhRzzeEk9HNZVmBDGPlcrjirVoF9gvxKidcj4GeSoGyFshLgkPOQGEs%2B6tdqs08O8ewsCNScecsgeIFh16dycMMn7rr4GOqUBtRBBW%2FwGQzsFo7r%2B8pKtbaLpDvZ84wKg5D6%2BT5gq9PeZ4DbQHpRB1Vbik8ANckQmV%2Frdi44bwYKTVChsbX%2FA2aYqQ4P6kG5tIBxgUuzF9Z%2Fq6iafSleDC2sdBmjJ2LCrU%2B%2BE9sI5663RBXTVSyjPmwHD7zS28oFpkx524rIzMyaS9DkgkF9R6lR5ZsEXsh7TQWwXVw%2FKo9f29UeVSBa8tH9J9xz1&X-Amz-Signature=45c1fcac26718037143713ad8f9922c2579330f0ce8a2adea8255b6850f50cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
