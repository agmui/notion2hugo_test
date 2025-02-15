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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDY4IDSJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIA4gyKAjgPq28VmvSBI6pcMoycoYsuH1X4xKAW14N4LJAiAaM60XpYQhU%2FDJdb7h8vvqYHqsNMBoGibgDJJBl9EuAir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMv9pgorIoAxgQ3VViKtwDSk2ZadTECQRUVAOe67epon3wMjzqDj24Rpl14YKO2hSBDuqFJDKtqdHzFgw4VCWffDL1mM%2Bo3%2BF8DcUBH%2FElrjkwZPbHmUiP6afG4r%2BKHOX8TC%2Bn5BgMiUZbf%2FKB8wrBQmmO11qLGgppBYKaCCB%2BpQkM%2F5G%2B8WsluK2daqUIIPu2fEiKjHv%2B4isSdy1IGru4HYj9HMxXOpGyYzRTK9QYzMjZ7rGZWY2KrgxBiQgTH1MvdfruPIhX0IgYaCZ06X9ENotZ7UV%2B0%2FcsRkAKf8elTvmRuXWyfdGuhvUFR3lzTdyVdleq0vKzEmgdXGfXKbDOeqwYN0HncC%2BGQWeMMHL%2FendjySb%2BeHiAdRH9cPsGv5T74xVXbaWVQi%2FplWmyeltjTSiSJQwOdknGwQqW2dfoe618z3bstwHVwt79YrKjjJPU7lyEHu0XUQiMLYph1uCmAlwT6VsI2uTgb79KJQEoDQcOi0BkeftB60oqW%2FLreB6qsEYlvm1KnxJ3zXKUeZ9C1psUZov5%2BGl7ljUl6jByn%2Bvo5%2B4K%2FcsVoAEUNRWeQD38kuwOVAptuwA86YKGSo8OsZVTS9Q7p0ItEHNX2uD%2BGOhvf8u%2BJ%2FXkZW%2BZt0hNYpc54RGIpaZuGde%2Bxfsw%2FoTBvQY6pgF57%2FnifAp5%2B8gu4DUtR6lgGKsmK7rv7YPhDqHZU1bJAplQjKAlZWcyz0PaJ2npF5CPzUis8GNocHtMg9MJVpR2pDxMDsNq5PYKUmmAJ6poirRl03LkOMBZ%2FURFmNMk%2FotPaF11Rff5HWJUJFojMX8r%2B3BAm6X55oR8IMn%2Bdi8AOnRe10nmXQR3JZdWzFE1Bg%2BCzxxck3d58XYkVXCJy%2FFdb2nzWzkY&X-Amz-Signature=a2e2d47b0362ccb935b510dea6e73216021c342083b0e491159a82968b62322f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
