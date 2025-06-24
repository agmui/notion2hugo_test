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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLAKNQPY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDwKpLYPQZxmE%2BA6BO%2FkZIHc4%2BWW59SFvC%2B6PaIp6oLNAIgWtlwxLibXhGtZP1BfxtrVqON1oIBL5y1o0prK22IsRQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEKbLD%2FRPn9JIS1OoCrcA%2BS92uhRNMyfCXPWvaZyS0hKVC%2FK7KUV4zD9rfqnIw2O%2BsKWA9Kyl359HUMkUk8slf09UKuouvdEkWG4PBWjLVVTPmIuHFkuiWP1jaXU2H9lNT7RxQG2ztq6gc90ojRVA5XrAp6kZutd%2FyWEd3hkH%2FmhDV5jK65i6p%2F25ydx48Xzpa09V3CpiFbN5lAA0zj950g5nqQlR8l4260tcZ1yJ6BRiV9YHu2Lu0BTO4Sts8enV5fgtcnl2k1dH2UrRygrnsYp99%2BZKhnIS4IFeYWNXM8ox8nOcNYVE6UFJ9xoFtK6RV6XoHiiiYiQf9ImPfp4m4JBIdv%2FifL9%2FjaoqhzB8bAp7QRPihqnoMPTKnnJFoPm3pV2gZYvqpE5bK0ke04ENbh5evdkzk%2FG%2BIwGGuWtSTUR8H3PK%2FYH4PIG6RSu7QoYYcp%2BzHnqwwyha9VzbN3saVu1Ft%2BesRT%2Bt0Br6fJHOEG0RQG%2BI%2By%2FJcjYGEvWu%2Fn2rhCTB%2FcKdmutZP8qmc8HXVzm0U9RB1BwYlc5%2BbY3xZcsW1LPl1fM856DTqKaKFC8P5UjXN%2BzPtz0p2Jx6CwqNyyyFzQwDz876Jp4JTLM28lAMiis135iGhEUJBruEIsCKKoi6hlxZdms3MWqMIKq68IGOqUB1%2FiGRKtIRCIhRdFqBZ3k%2BKLT8vSfCUnQponncop7QpzrIk52%2FzEWOVPGxmU6GnZLCnjyYZMMvAOS%2F8%2BZCmI6BofpjooK4NKfKlBa5J%2FLEGxwvr8ZezGbKiaw36FC9tSour2z6elCDlsKqS4OpkTHxqvgGLblS284Qhy4f419e9u6r%2FnljawH8JVuX2%2B7R7VcqlskGIeTTrAURb2cUt4%2FQDh5cNZl&X-Amz-Signature=a6b9a1925715131cfd49cc640e4692d7408b2724edd0277e2607f419f2d42cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
