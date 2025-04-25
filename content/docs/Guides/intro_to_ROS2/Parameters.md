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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466464TGPSY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9rQseuEYJFa8FHkcwrPvocqyJKsx%2F2gbyMQshJCNjQIhAON3w7k%2FZxRgEVEN9MmwlmvFR0%2BtCy3TccOfy%2BaDgEYRKv8DCDgQABoMNjM3NDIzMTgzODA1IgwzLaDvbqNThwtC9Ycq3ANI5TJ06CbQpN%2FRmoS3i86sOBibraJEchTWS0HvUskoxuT2pzApVHQUXDhde1YMjQoRt9bJfC94rjwBtS7FOb1N%2FIgL20nKeNjMP8NQMzZKdPtAF44hjaUggYe%2FOtoS45NIgGJZiVEmGP1cC%2FsnLYcxUsCWG%2FoMgdupoWUx7FwlKTcPEbAQ%2BNJcx1H%2B7tF2HWK4r5%2BHpDK%2BT7xJjrh4KyRit1%2FdEHU56nOHC%2Fl3be%2Bkix5nulnWU0zshbwT1fcj8RDinPrB0Qf5GyCJEfcfi2dCnD3dgsr077oxtJzBQACykXMrPeX9vwLPyqiuVkSa4rPnbVLvrOhu85gOWky2STeyZrMuL%2FpugfwW1wMWsFU1V3RN3EHQ5gYsgORLA%2BaCV9SBVcVSSxzMfH2nhy%2FM%2BPuK74HvJbHalSEMp2JgIe75PJQ15SVr04KPnteVUqusxF9tAaUKCTrdvNkO%2FqUcK9bdgeS%2FnLh9rekGe%2FJxO6VCAIoxWtESeHmZBAIOcsjvtK1%2Fot37SXQQDPCINYGIgEOtKHS17oxhHCe09BEX0vlCW3YJ%2BLBDl3ExjxEoSI1ZCSgL3Dw%2BMLG6l4BVglgB2U0MqyzTP2XFId1cZ%2FJYhyzNpbHZ0Yy9CBo15%2BDl4TDYorDABjqkAaBJqrEQBpbZ0Ta9SIk%2F1apo%2BUWBx7o1Qx3%2FC39IkHBBY3p%2BxWR0PPtoy%2F6Mu9TNYPvop2NZkUbx9n9EV4l79QfL6FC4uzbhHBK7JUHLL2CmbBmI%2FqI3oKuYBxsSlG%2FSlS3XdaqtZOvwE78D6t5qTbDvlqJ8jgMFrToPbtlUmo7A%2FGk4CV9KIs%2FZ4Bss%2BYw8NbTea0PcQnuYi3v6c5NN3TtZTbeZ&X-Amz-Signature=1ee6f5a2c014d65422d5c87402934cd742842924017aeb830c96c093de13346f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
