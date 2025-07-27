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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SFQWTL7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDDhCKfuIBGwrhQjMhFv4CMifX0E%2Faq4JXxcno3W8L%2FAgIhAP5r7DYNZeUpOfmGzluFpVlqFsVb%2FN5WRLrJKBJqQIDyKv8DCHMQABoMNjM3NDIzMTgzODA1IgwkdImaHmMxQEe%2BJj0q3AM6gUU5oEi0VDtCUiuJSz2uqaTo%2FVPKCMm0g2XHmiM1%2FryCYqAZ1BsKPiQXv3tfZw0zq%2FuwgEVdC5Jn4E8J2ZBYItdjvV9r0Ueh%2FEW1FsBYwq75FNoTDHxZbV31y96dFzXoJWmMJbF8aGlUCj55wQmC00QFHjg2sa9iynlaX9VJ61JakWXiFsVR1CYHflPFgMVLyao5q8%2Fcg25IucmlqIEczKi5vbKJpUaRJVXfjedKwRxlWMDF04FgjgnIrqgc3Il0vBfD0OPWpqmlCX4oCASuLdUm%2FfA8ef84vFPABcynQWOQbAUpvuAgrQIUzn8cpADma3bJ4BeO%2BL3vX%2F5BLccQpE1PrObDLTMz98v0cdJuJByVVmpKtk2l2Xk2r4tSYwnmGt%2F2GhuK35OF2NtJD%2FlxybQU%2BqUl2LMoOOIRrYPvCA1Gk7grDLau9doW7Pjw3%2FaS3lMXrgxPmk0I2TAO34yNlLhI09rKlyYXtQ%2FVslEd%2BdPdPE%2FZCL87lqyS29obbvcmdr0MMNMGS4F9f9Ug1WbND4FaTueUgzY6%2BNQUFwQr0UMC3OyG%2Bc3GEgfEOHZOX9%2BvPaVuWu1qlXPn%2F3%2BOT0gczNH9ma8IriLoSS7KUjtABcMP711th1IvjugKpDDo35fEBjqkAc2sa4cHO3z%2B4F6rFriqbiOLDEqkgzNWye1Tpz20i5AOmwAjXwEO0rW0cRwW%2BYlqrcTOQr92kbCwppDPbWKv5bm713q9F5vpBV5rHjCwhy3E41qVsmM2ePsImNGTYk0JLOHndlz34ZR39U3LQc2YMfEWFn6anJ3fLyfrELdG0IZc6qrAeQ0Rt0%2BDD8H5wDQP63Nit2ncudS%2B93H0j5GnR4L2BYTk&X-Amz-Signature=60e8d23a12d532d9454804e59a7c4fa2bf58621bb8df51954c19b675cc19377b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
