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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4TNZV5B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWAM9kTDhwI%2F1CcwiuRC0ALoHdJ3jx2VgBnMcewOE2SAiB0BPuTNb%2BQcseT%2Bj%2FuSpC8yFyYup3X63utV%2BNifBdkBSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMVYWBSFXNZwCyoYgHKtwDt9W8Kp9HEbIW%2Bn9AR5YRcR0aGieQJBIMwd9zY6C%2BJ74AUCFVCDMq2%2FbsnLY%2FtcKjaSXV1tmGC1vMnOeaVlabCaQ4QMZL4auI9ajHF35mAmPcyzHQGG0%2FqzUaALw9rlgSOy2e4g%2FE6eVzr2gR1Zeld9xi0fcHqy7bhCZUJUKeP9Ff7hQvAcNlXsKgjjYTjzvOx0aBsBdBz1QrOAedMH8X5SrIQEwACKq%2B%2FUSApFTGtFXZRt%2FVKjTFvFEvw7b33HxA5L7o6putqaKH4LwBeM3ypXGjIf%2FTKYyJp3jwSJAfe0IaROwST31tPi%2Ff6VOtgbKCxI%2BaDZpHqwOCShnaG1J2Vs5gXo8Rnt2kGteqU1vC%2Bo%2Bim%2BrE%2BUxvXqdwPnnDMM9XFseLq5s%2BectNjLZ68IdKjrGvaIRE%2FZqkMnGhEE8zgAAOWNizFgFXI9mAlXoakvnaJ9TfrZUmPQ67CwCc30BpusO4iErsCFO87POcAJS81FoLwxrXcbbZj5am9dquC0V6FH3%2FKvwlY32LH0S7ozBdmFZ%2FEpVwyobahqOoGMnPm9L4ntoJI4KHmUEYIap717D138xqfmnK%2FjLORGnb4LhqN4kpcqkLhPIR7cz38mGFUwvnskyc3%2BNOfmPF%2BHowjcv7wgY6pgFSbxUti%2F9UGKfZDkEVyW9j5ZV2t91oYl1zi4PSvPRd0OSuU0SfBU8eg1CtDdxgagbJ7AaNOMSyirGdvuqiw4627nNcHtjCh93dgP1%2FgU1I5BqgqTlIDWSzNlueA%2FW29K%2Fypvog2sO9MtXL9MLNf734kj733%2Fv%2FEuB9MHAM77Y3oegMzB1qC2eugoPbMD0b65XSq6mzgUYXM7H%2BR3Z7gSc0C4wfYJAq&X-Amz-Signature=ef02937dc9864dcd318a4ec55d57108261e1c1c7442b278aff875b2617bbdcfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
