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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAGG3IJO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNSy5%2FsrYWhxOyLaVCse%2BSLRq3Lwux0DFLwTsx%2F5ahzAiEAxEDDSPtWJd1aXpURjnR5ax7fE4O6MyD%2FKaVqeXHH%2F2oq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJURypoTgaj4egjLOircAzSzYO1XiPo6bnn2kgK7ZovWqeRwhmWts59Um%2F3I0S%2Fc2sTelnRiMAkBQCF6loMFTpCLqagOXCHHeR8YPW7%2F%2FmaSArsiWmSqjicaUejnDINJ5V7bGbMS9raz88jJ8rh1lY%2F1iw25h7r5Q%2FrXTWPtDsdtQizYAOM03DWKWHIL4MvtmxgAGQ5HdHVpTxa3eTIeGuHVln%2FmaixSABxTvjqq30t3sPR%2BpyQ8HMaBk5IWkfl3sXc18FlSbdoVKzZcBTtoS3R3e%2BPyLFVkrXDDwdauHdHVkXff2nQkdNe0XpbOa%2Fxo8Giz865EXSaWc7MsBD%2Fm%2F%2F5NuaiKFEB7jfQt%2BV6HcTu25o3pY9bATB2yHYgpCtSpTK0CMPjW%2FGfl6kur%2F8cCHQS5tiTyWMHlCGdErOZSZwROFgHTK9ZgbB2O1lBsh6KWwtZKQ10IxSiBPbvFk0OSK%2FfgJSMn99Bw8RVEy1j6MpzW53KHOR0WrmtBcbmNPIQ7gX%2Bt8W0Bua4FWMPYa93wILcEHpQuGitjKLuF2Ler3Qr3%2FLh9O6II1FVjvrzoa4hcIbUpw%2BoyR8I1rnf%2FnD7oXMlis2m0%2BcE6wFwesUKl%2B9YKdkYMxeLtyVbruf3uSU4%2F2JoAkZ2q38ZZ0fbnMKm01cEGOqUBo%2BfT%2BFuYlmnPoKbzq%2FSj%2BEfveC9yVFGxk5eCh5sj8hE4THYbURymHKZr26xmKANil6BAX%2Fut8cA%2FCE%2BBHZBZSwq6ynmJsOXuqg50asaVFB%2Btc846JzAauWdp5%2FZe5BJXXrP6ePeMmGI6CDrIXDTlHLrGUqbj9HmGtIg%2F1%2BNyq4fsnjMjX8A7ZABJCM1U54Qyaf8%2B0KcR1ulu6gI6sb%2FkwnrfupIi&X-Amz-Signature=819717d752b108362c410568bef87428e9733e58bb989a63e9ae822015f73576&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
