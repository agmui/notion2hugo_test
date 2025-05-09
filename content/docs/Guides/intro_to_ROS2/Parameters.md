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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGP3YMA5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIQ1h2kk0Ih90LEo0w%2BmGlzsQiYjjsZ10Tov0jp9MkNAiBd5uiKoqVY3hio7iev6wnACmf%2F3JY6pgWgSo5G83sFESqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU5MTtjkExTIMNOR8KtwDlUYLfy8F2gx%2BZuud1vfHCP00g6CsQ6pIKcIuvb71W1kiKE1uhI7TfoKEdbwXdV7p1rbBX7PN%2FKil%2FkOsG4mxEwqxEEzRqPwYpNH4QVPT%2FswxFIG56BNf3WLA%2Ba0qM4YKjeDjUcMQ%2Fcc%2BclgZPYj%2FNE4RuxzEhmHWOE9HpKwOuCEkn1KcMH9pj%2Fpum3djg7%2BPV09JLG2bKNBtUSi6HdlKNaXhWBfsSvXMYJpY2lZ09vhCMcCi3Uhgu8qTuAJ7suioj02%2FPEygTFYusylhBOcQLon%2FgIAt1s75xxOmjd8IRph7Z%2FpcjKmalyGMoNpHPSbnN%2FMLDVGFnuSFd4E8oyxEbjmCciN8K25RvpM%2B65Nwi%2F4iqevfweR09cASF4I0C%2B0ybiwyrBsuqcrq4aCw6F5%2Bx1T9RvEEayHXRXrka6ClgZLZEv4Ka7j5ir7xw5rySku7cffULZjVMeMhyj2Ytgiq70IxO3nwuaNIDUDNSmcj4lvaZs4QFyYxwY3%2BF6bWY5A047QJwOFtcJwmKpABjNUjTFcg23qx6jQ0EK8t34wAPJqX7SX394B3F%2BPVC7m1BREyDEQNtLxrsOU%2BeaLaIf4q5X2u5AHiOvvN43ZI3s8gmy6dFs9l3kgzZG86j1Yw2L34wAY6pgEESNGC663TPNScTxRhAsbk1pI%2B1WIG1CNtUZod8sTurFYX8TRNEx03m1Nz%2BqZoMniottPxbqykQ7M9%2BZ%2BkazQzhoRP4nF9%2FKY4%2BScnVIkybUzrXh9GJci5FeeYaj5tJEYSBwV3QZcPhiDEW1WpS%2BzWlyQ90eC8ZA4kcjM4BeOgRpKTZUvnuz7zZVMuxCZN%2FQ553H7jt7ng71LqSlsDPpP3J%2FAUOtUt&X-Amz-Signature=90ba1db74052fcd3213a516b7a0e6f5e3a29680037c4f1c1929cce5d80fd3ed4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
