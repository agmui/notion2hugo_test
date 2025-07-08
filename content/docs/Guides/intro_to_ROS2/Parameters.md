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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2I76HLW%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F3dymFGdGhPor4LqRxWi2fCjAp3r5%2FjRwrkUyORr1VgIhALoLKFcIPTvkhTuTNUAlIl%2BmcizHkAeGJr0dxpUJeOtnKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4WXt1y4gVE6pt71wq3ANprOZ0s1%2BCxFrEvKzfo4FjUtCdGPDWIa%2F3e2Dju7WhGYDglh%2F70QgKICeSDyvx4SHPrabo29erXgQsrZpIs8uDUNISisXqlGXN2rEpeT6HCiF6SwGjEsk2%2FD5BuRbTfBXxvlXniG5NL6HaxMp%2BUrhmo47Kt1fNA8r%2FF3VMDJV5pDLRdxLdwFaYAmXTJtdgFzbFJ3oXy0IpmbnMLiUj4%2BWsH%2Bzh9MrOfmHbYZeMdYWxvqAKgKx%2B9vT3n6wjASjXfmWDIh12paksSUyDlvHI%2BN6pGEIypoNuzIUAq7ElnY2etWnkWCGmoKqv8cLXtPaOuhlbXOK230tCdDCDENt%2FDzIn%2BE%2BPaBi%2FROqE6t8KDMZqSTmAcguh2w1mKZBabDyeZkSykic93mCQu0jr9gb40GXoqjFxFMDXt6ebrtl3chmGti%2BIKo1SflhOozW5nxusfHKpYJ4cG0SFmyoHHWsKXwTeYZ9ffmb9ALUidwskc9DF3N7PH2nVyQXn2qqJmDkfcskyw3QNcW3eeTtTtHj4MeUC%2FsnuGwgLUTREkapLon8fB6JlVyaZQMJOfF0yoM3VHSHc9CCRiJm0cZvWzOOQhB7FR3g%2FdCyDS5eG1VnbhTF4B9wVxH%2BiFO%2BwuFLZ%2BDDYrbXDBjqkASR7pfwHNtPih3dkx6A7GAVDquryiTXyhMFhC84fwLmRaoIL8gvGy2Z4dMm8z07%2FKEe%2B79JU0vSyVvcrZPNxIqpWrRNHjAqJARhy1h1UCehCnYsb8DAE9b7Xt%2FrMrndmPouwmwJgMsZSI%2Bo89ufFPieZhqvvhXAcvDv59ON%2Bpr1IltzVIOiAoBAZ%2B1sopiUs0RhhVDIaDzy7TaqynM8T2ON%2F6WId&X-Amz-Signature=d8f46a3fa344d79e44052a5a17dc0d32da596f3bc0897306d3d25fb6a9bb80d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
