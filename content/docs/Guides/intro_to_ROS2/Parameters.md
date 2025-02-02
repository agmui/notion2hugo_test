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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIBS6TYM%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB8Zkf2evzi0VhjC%2BbPkyV8j%2BLAXfZAJQzBjO%2BNwE1gwIhALaPU28hIxkNpJGgCGF3NlCd7BIe9oKwhlcAhsovhgyPKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeF5fCf1ZlxAxpuwkq3ANrQGp9tUod6aXmGqMAFkzT3OsAxgGMbUI5LCdxB4y6fJFCiePw1A7VL6aY%2Fm7h9RYeNeXpzR2eKOMOauCPSPpKBq%2FY9i1fkHm6Ctt%2BrJz%2BEyhl8tkpjubuatheMv8bqr%2FPMb7%2BLGRpB%2Fcmmrt3mYYhW%2F1wC6WotRpnwBbl7hAF923R4yyS84a%2Bch1WOPMEAAfoCuv%2BDWAyxaDhEj4TNfuXEfV2OfwTmPNzfH1%2BvCpx3MURJGKbsEy57hqXz5dzDQ9gFm5Fhs2AdLdqf1RmjvWiHG2oyC5kaenup6Zhoo3IMetupa845i2hiaB06Wsoub1L%2BDZf1QYY3wbwPyzm%2Bl22hPOLO6F2F7pjnnksqRaTp7gIzYhh95cszn262cVw2ogm7AoBgziwnSZTUKXIfuVJc%2BH6bmF5r%2BIlGIGEljZDUmP5kaOqiC9U2AO6YcCRYAFz0qcJZyYCE%2BjQ5gQaBXFabF5fnnJ51KsrFTOpt3ZOPIu8dHjJuJvWBbKcsY6Pk1B%2FPwtLtlNteyoYh04bs6iSwaSeRD9J9yeTAJpTETz1VN38mBBkrkd8iUx4obJsYQ9SNH6O5X8oZNzTk8fvj9%2FNuI7z%2F2NwRzAAVRT2gpsaZ85cCGTs4Wqjn3%2FFVzDdwf28BjqkAZy9Gi1m9l5%2B2eciF79roLd82qDkiaDsgMk0%2FHQQB8B6Ib51AFcEjwBr9v4dxge40Gk0oY%2B5rCQYhW4y610catNvuAv%2BRz%2B4RpxWOQxHZBvJG5SzDjCUBtFysJlBK%2B8PDS%2FhvkVC8Cyzy2tq4dYqdLEwKvXuk0SLC4cEjePXfuLx2eY4f1Z0iC2vt7LHn0N6VutR25iGpyp4xfR26n2N%2FMohKaPS&X-Amz-Signature=f90faf6ccb53c5854b07a0fb40284c370d51d4425db4c361892bd30be98141c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
