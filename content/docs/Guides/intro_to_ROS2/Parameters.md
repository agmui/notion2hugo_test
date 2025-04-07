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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JWAIPDL%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyHAGcL0ug6aovTvP5cvaSv9hoSHWiGAzEjxuSvPuffwIgBypRt9c1Ehy7dON6wqmzC8NnkVwgVh7NIDdLsn8BG6Aq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDNCK5VkxplMIhSJ%2BTSrcA10L5ARH73c%2FUrXucg5hYto7uxfYuyaumrdUPOUGohFBTbLAttlTpwTJp48VjlN%2B0AqmkcjITJPSsiCnxTxvTFCSKINKqumrfSQqaS1%2B%2FD0IgC6ERIta890K31NbqV%2F8lvltuyy8BuT%2Fs9LTP9sDId1V%2FXvBw0KElukf2DDRDxF3K%2BxveH%2FZI84q9Mf2yOAAZj9Vc9OxLDaVJ5GRnGURJOS498wrK%2Fw%2BVrhCXWw0g1B30otk8fF%2FrJu5Dd3ogbC8BfVOdkHQszmKRIF%2FlEBWb18inTFltq7FjIgJ8S9A4Ay4hyLzJ89cQVf9GYHkJXo921M9AaG9jusVadm%2B8aPM7R0ylDaw3BYt4e9bTt%2BZbRiMG0PEGRQAhHiofPiAnSYjPHcReLZUyJmXTY62m1HQLMxqve%2F1r%2FCV1%2F0ah2BLTcCpjOvC5tHlhB1NGBX%2FUFmKc87yVnFDXUR9ZV9%2BhvpsDfLtd6UUbMhlO6EsiOfWuGbxk8rBQxvBHo%2FJa86kC9dfA7ALynqOJeLTzb0HN6PyfgjSYV0KVU1tqluCEjHxfcuttw3oC2wpGI568mz27CivWekToybwzrFjzciEy6tFop%2Bb9OJZ4XXlYPLpX%2F0JRmhm9TbjAgQBAlQQPz8VML24zb8GOqUBtfTPp2W6%2Bkd3sqfG8KH7itvHmSaR%2BT7Vk7A492tJkzfk0rS0pHc2sVhOtKFoNr%2B8XcexOIjRJSOGLiFIEBSgdivk62OYpgt66c%2BwKCyhjO3wiB%2Bugapg%2BH0fryT7e7VIrDUj2rJXHifNGFwfs9NUUD5FnWQwb8kWM5x%2BIJcnkDdkIMPz2XEweqD7JZnKKvP%2BezQWwze23TRGWuyuJyxX8Nt8LYCo&X-Amz-Signature=c11f1565e02465aa8f2095853e5f60cf4f8d85a3588e4add04be08715aaceea1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
