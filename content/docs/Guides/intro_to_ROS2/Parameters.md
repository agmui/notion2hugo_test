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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WBDDNVF%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD8%2BedhtIqf14cNHvCWUpbogqP6MGJpLjkdoBF9XV0YgIhAM0p1%2BvCsoeGkEF74OZUQX0ZvqBqoWqjinX3BZCas2KyKv8DCE4QABoMNjM3NDIzMTgzODA1IgyA%2FRGQKOfv7MU5eDEq3AP%2B%2FfmbPCX%2B%2Bv4YJEtYeIOTFbbKZby%2Fitb92gFzOntmDf%2Bu4GeKI1lbCSyJ0fegvfYAhtHna%2FzoFSiJIjxmoeds01a8HWBLdJC5z30iGajKKnPsXCbwktOxXinpDBkGj2sTS4WIVkRgKasdoXbbIzDlCtRHWH0dxT2KU6rguul4vOE0HJSwVjLYts90mbU%2FqM8tkmhI%2Fu9Bt6vi9aq33DukhSAePzRbNQX%2By1qsie0B%2FIWDVQEZb7CUo5W6J1C4oqlqctL0bAIc3IiVNiw818pI6hmWbFNM5udUHuRfm9p97vniZqZ%2FsGulnVBcsfhfmwV5KHdJtfeumRUCA5iqQ8z5FqHa2wag3T0jJFEvgJ77zVlqE5MAU8JKsOd1VAcDhDjbkT1B%2BhlqHSEeKsShNyEXYRkRkuT1vectpFWepH7Czmnet3Do0JE%2BoCpjrxICmRGwQ3GTpc9xo7h7QIqMtFE2%2BTfqTqeqNRqlYzIeEURMa4qzuqTzivFMN9KQ18lMm0dVkMGcAaEDLHL65wzi%2FsaICQz8D8XRaoci2xVbeCyZdxSmSdYalkxsA1RIOawQ5ZoI9ZaG0j%2BdsF6%2Ftn8vrIAEp5CC%2FsrjQX2U%2Bs56TP2WeMdTTxSIsZ67fpvlCjCqorXABjqkAbrvQ16I1pmSGPHmAB4%2FIBNzWTM2VH%2F62GvtzTMHiu4Lm97bbO8Gk9BAv0gGpbjZlmGk9WU%2BWccphxjNPUDI6jfagfo6yPLkOf3ipQVKcd9KqXFY2OVLeHSqbzb4jttte1xQpGUsaSW4n2vJBpBvHkls45b7SXwSVdexUA%2B2ZMC8zyvSCA7eaFs%2BPCUzQUHilgSV7QZAyHe%2FEI9jSA0r2aJxSCmp&X-Amz-Signature=c10ef2aa22a1d22411ba8c1facbeccf556bd3358202f47b61b37693f8bcc64ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
