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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFZWC5RX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVq%2Bj5ZABEFiuAirmWbPgOnkNz2nk%2F6o%2FQsOhqg2udhAIhAI4cviDtuFm3JfC4FVQfkvngWB46noNBINOs7ObovlvCKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF9uTpGOZMc88XQf8q3AOloOPkfhQ6MZ2IsqOEJCcRHi21VlNK7uhC04Bm%2B6fw%2FFAwfFW3kWV3vlYdNKr2L848iTXT%2BHA0m1Xk7nYdmqxYP3lN%2FGgjSJu3PVtl8L58oiFzhrRxeG4zYWzvF%2FPnnAXdb8kQRB38Lb0K%2BAo%2B6iUjdYi%2FvvOuwlXoGwWiOfzlQFBfGHGwy5oYsznjKpfeZyK%2FVAtq1XwOv6j%2FIj2AQZR4PuZktQ%2FqQqA2iLWrrGvyqxD34H6sw0%2FanH9tkw9MMTTp%2BRVVskSoCOwG5hsanuI4ELe1ETjQj65M6wouesjHXVBDp05W4YyoRfVuuSVgTLn66wppeqPyLTMuCp6iFN0CvAPWAunj1rSKMLBFS9KTm7rMIDPt3506kb9K46UKGZ%2B1R0U8o%2F%2BiRQfVQLc1fR5kEXU%2Fy%2Fa30ITbQpsOnY%2Fs9iiFJNLpdBJWPxGHAWARnuUh1yF4Lerm73wLEnLpnFPSNbupTiE3ruUxGO36qfy2J14zAwqO%2BLZkjSynu%2FmVljCmtKkfWOKNZoDVk%2FPccOSFbb%2FNIBAEqtuVgSLZwPU7OxzxIEIZhfK7jKSbEWqcEA%2B3V%2BwfoTiejDgMkEw3klrzDp%2FNDeTfQRktw19oXHacpgRRuOkQnMAgH4UAwDDQpdS%2BBjqkAeGqXUEUPd6Hk6jZcvTY0z3kiskJCo75Q4yq5L0xfvH4zTiJdmLZ6c0mkNBsAjrPUI0Up16t9XE8IC5g8NdB7SSLGkAWpBOxxrwxszRQNkfsN7yBTsCPvVBHX8ZHj4CPqDb22otUY4bdtxy%2FfZBBHzSKDvsR0rLE9I1bQN%2BxCJDXdA%2B8jezp4KP9qT6Fir%2FziwUS4Xd9oH%2Bp4h7WurOKR53ME1xY&X-Amz-Signature=42746ed7ab83838814cc2e16ea09696d315601ef0787a512d45e7a146429b257&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
