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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNY2J3T%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvPC9mFGOIRkwMDYTILezaV%2BvrFUowvVQZD9Sb1k2a1AiEA0iLz1J0DVnN7edHS%2B92KilCjOEVBdkzFpJPQw0kRAXYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg7iS%2FHeaFZIolIryrcA3qZ4DZWIIkyuqhWp1vFa0L02VNg67yUEEblVoBjOIX1Z5FX3GbPfiuHGfxlghx34Le6rvPRuwzATvuShwLa8Q0eD3KAv%2FuIIZ54iw7Xa6wz7uA3clrEl%2FoOePvbpHLiISHvVP5lYxtSw9yYym%2Bjioa8t0JRL0kfAqyxDZjfOPBEGLhCTdIeHHeG97sbR2cdIYRKTVbwmbEu2UuDzN%2Fehjl3AiginUAb2WE15jVMGPK08nQj%2BQALSNA4%2Bya1RO3IBElymAuq1eqMAx%2FhPmb3u3h8zTqJqTwOtdRgRnZr%2BVMwWBSEa%2FttzVeulOb1mqs%2BuMOYfDY%2BGAHQPu3Lalz8yznAbWIeJeZhJMUBpai7xqsravzi3HUkzspgwUZ7gblBbKPVXi8BpdO1qEhnhGDKeu0tkIzCuGa94YNUUv09A0UK0N7%2FhqljXtTjEHD%2BJZRaRJv2HWAkx1isvPcdfwNE3qS1VvPchn8CWcBPUJbw9uiHBzstkP019wSBN3eKRdRh1g%2BB4vFLaiOPMB7JvuFvU88wA6Kj%2BVpk9JOROAV%2BoDYmHYeiXMQXXO5rAYa5QzzKSw155QehY777lBoj705fgpqTfxUPixAiWcgRXrNnLtT4MrE6A%2FWyco78cRaRMLCglL4GOqUBK%2F58MkXR6hkr9o1tFQJJfPZJvuB9kYFme0zNOc2WCkuRsMqQgb1U03ZnNR9GcCAAeuaQoiPcv8pz7PQS7%2BUSb7MYTmkh%2Bnyi76nXhx%2BkcjpEoCHx07VQXLlPxnwn5vV4ISoNzFZJJoVwxntzNuSYXR5qARFK3qCggXmErATUu6kpRF0NYmhG04Oxuvonb%2FwxECRtq4sxb9wYz1t%2BoZUT4YqEgANM&X-Amz-Signature=3f0c6de5982aabab51b18e365b9ccea0dbb321edf388021c2729dfc22b2fe537&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
