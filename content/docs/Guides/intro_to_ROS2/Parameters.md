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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YLZANX4%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC04HV%2BvFwk%2BwJTxvCas2B%2FEA664rt5sAYhjP4or2301QIhAKhjSDhv8guvRPrxer7RPRY3y8x8CTKQ5sqTS8sNIPQDKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlmUWcDftlzY67Pl8q3APHdEANEkAFCJFUFEoODMvpnwFI7PLSw24SYVjbj%2FWlBGfxyhqm6q02Ge2mSYZm%2BqqnIFr62niiSvhleT%2BKTr4fYw70XdIOf0eItmxV%2BEAIeW0dWXp%2F9bKNKq1YA7T07RfEWfiHHxZH%2FiCUowD8fwyE8lg2agd3kkYm%2FbsUfkg7HwJPVYnUc7MUx4LB75VUvCQnIeH%2Bsje0GgXFBvWgmZw67PspQo36IBsIlfLEYy17lBx77RpTm4IPT5fRXvZhayIo9va5eBjEw74%2Bs7TbzD%2BNaKb2FxirV7yv7kgoxJVLDaFuh9gkfU6IB0aoHjEmgDur1g85vo3OJC2eE65%2BxZPnV6BoFUQN%2BUIoemMGTpZZV4boMcEZuUXakZlQivwDu9ays4URjgb5a4X4xrBMNDiIoxQcm9xG8N%2F1FhXwvIX47sZcLU6VQ%2BH2fYCSelNb8SRnFyXkx6ho5pY0ZxFs2%2Fns8WOrjvBmm2q6bmtDOrjytDjnnTGVY4hzqHTkikquTm16swiUCAWkja3NWFAY3In4v9up95Uy7O%2BJcdfId1YRzG3JJzM2gHOXgpRPrp0QpxLaQR6s%2Fn11%2Bo9uaHzwWPlBHCTv38irD3U3qyhPkN4WPhC%2BfG1N7FAsqmFguDDQhv7ABjqkAeFXYtRSbE9W0%2FOhQVaABpypR74t7fJDKM1Q8fk31UMKn7aW6B9BwsdUCCoTwfOmMclZ90JdvSSEicvElfbXz%2BFIUeF6hadyWwXTYRBxojtRoYZBU%2BTsmsITpYDrfM76PzatOn5RGOkY5t8smCoLH5ztEPbTTHUMALsjSW4Poj7a5uZ2BCwIlkDCqwpJbDF9RcU6WhKNlQYESZ0%2FmOXhaHPxsGMv&X-Amz-Signature=eb02b279a1aa9751377966152d421f981eaed2d06fffcc2775329ab460c9fa32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
