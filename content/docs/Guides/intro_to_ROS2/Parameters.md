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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PEPB25Z%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGJ5%2BUfKPz1jz6gdDyf7B%2FBdxj3NtmJAhDPfXD0qW9pqAiEA6MXjQoq%2B9SPkVBuYRz1flx9W%2BAH8QLcyUs5MHF2mGYkqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6uuiLETR7V4AmAlCrcA9SwAJigHFvNTbcCIjwUXLj5Jx6bkLTvJEGOCsxUy4hh68iU7Clull7f9BD%2FoH8usvpvkz948MJgbXtvsqycUcQxDRq1AoCHY3HugUn7nJ1qd%2BvtvvYTOS6pYjusc4KZr8Vm%2BelyyTgbM7xLSMQ5SlAGt%2FAiakahaZyRsP4YSeT%2BByHHYWm%2FPrRTyTaXtKqglI1zC6JgigVZ8kK%2FY4CvyswjOPeqFcs68y7Yp9zwdOkTNO57WJ8gKszCSMVhCI7TjYCimUAebWyiqtEswpu%2FcmZDjaUVFVxl%2BhX8%2B%2B7rc7%2F5T5AwcvutLtWUheapaAGKmjE%2BCDNCcM8AN65rhym%2FHLOrV6J%2BBxxwwmrexJUY%2BM%2F4wFWlIJcbI2zgqTn5fPQkFCaALsGkuNDPVFCkLfZu6k7u4iGOREs0%2FPrRiqAnpKikVamvL2w8CIC6eZrmI1iVV0PVufKFZnwtzRKSyLvjssNmxBQ122RN7Mvhe9fXAQNK5%2FeEFBWQyz%2BIoP%2BSvhJr17OhqVHpaitqjhV24xH1dSvgwEXprtEg4AoF%2FmUrwvjUAZAUhkoAW%2FhJoP5eWqGPAgugS%2FhUv7v4nJfh72rqY5sLEmYTXOWLtT56F6ollq4Z5QxITHLfflMT81pAMK%2F1vMEGOqUB%2F6QF%2F8oGqsvlfj3WDooQmlexYnPcq6NhBUo13%2BR03DxTZcbjxyjlyFDmH1buqWybQ8LUo%2ByZu22ZsmbNQEkcMnOGkWOmQXxWtj6s5pcNhYRz9UPiUpqf%2B%2BsfdFDzR2Wf%2Fx8eIJ83vioQsEMdNMvkZzW3HRNMVmN2EN8T8wYaxvmsS7zq4FgujL3X9sSHOuv%2BbO1HGZYF2nFBWJdCNiC4Dxge6tnK&X-Amz-Signature=8305f5b00de0325fc381b1a1587d30694aca33ef583f3577352a445a5f93cc4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
