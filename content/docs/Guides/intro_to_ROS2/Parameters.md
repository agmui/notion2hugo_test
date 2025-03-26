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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5M5W66D%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNX9Cd86vtxd9gIGwCbr6krGWKsWuM%2FfriHV6X75ImKAiBffx2KkT%2FI%2BW8RaofhES5SXkIueWEdAYvuF%2FMwA%2FCagCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM5xvXz4aiKplsyFIHKtwD00tVFTQvac6vHsUqb5JnBBQsYxpLrndGW%2FAeAfG%2Fxvn3SXsE9ZeUGSI7jA3h0tBJ54qmE7NvcslJaOg23LMWBdu3SfF46YjsWTDSY8wJVEW%2FWpm9X16Y8%2BdZ3auWEysPPCbMcYu3hFi82uyHcRTmG8CNI3gSUzxXbhbUMojJRX5BZledSqOJTAqS1vb1kJxRJEhpAOOHumHijGq%2Fq53AyHPA4iSs4T3MFaqDCCWB%2BVdHm1BOmVLHmzoFL3MTR62qoPqiGsfc9q8gczExzhsm4DNcwvgPt1p4xSmaoi%2BeAD6FO5cRoudoPBtWvFXAlWe7qBHeRnl3AOdWkz4Omcfe81rVAX5LVltlW8nbBeCcuWJ7g3bubfAw2ggIecJadQ4UfM89OUsBIAwENxS%2Fnu8w5zw1gYZ%2Bwd61fZ3bUWFK0VUF5DXHSlT8SBvd18b0FqfXx6NL%2FdE%2FMhKHod3gisP5XgdPHpShGAJu7XthQijWG55Fdk9yHq2pRsfAcloZFN2ZxaygrhVl%2Bov4BAfmyC6HWwWrcZCiOtG8kOvHfOWHmHqJVis%2FIMMLHrXb0mAadSbGdKxMZpNUHHn%2BrDbr1Zs5OlJorZ8W23sSwZpunXCXDQV2EdL1Sn4aulYKtmIw6a2OvwY6pgHDNWMYlpenBX97G5pbp3KaMEtrSm2Lf%2Be8d5AN5NVsLvwenJsT65yMAlohvMiVSkQiO%2BzedYmC497ER1q6qRxSs88qwmPjuq5IjaTvcut7s7XlULfZ3xlUaTpIBX55YqzdfqRrONbsxEFrlnGCbFfKetWblHGTWed50H46YF%2BPFKvNHV%2B%2Fm0rh8TOwnpsrDruPOYhEvxTdC7dTee87%2FdSR9x8jONVL&X-Amz-Signature=cb44ecb7aa27d387ebf2634bb327038e063d7536cd420280b2e369b4dec757ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
