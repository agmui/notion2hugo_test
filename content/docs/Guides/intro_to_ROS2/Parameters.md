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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TCZ4EV2%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkxtdfA1jl0Oeh%2Bb9I5NLe49lYhEQoYvTR7WMdVl9XoQIhAMeQnQmfzkFG9Q7Bp%2BsYddW9tXCFeDiSmzoeErB5v%2Be9KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3M15Zf2jFWyqvicQq3AM9a3WxXt1AYqHBbsVKlQw6vyakygKeXfa4%2BpLX8TLK40CsRT6c7PmyxsNkIGquwhN6bD1wOZVSD2Z%2B12T1RkPO%2BhbTSHauQk8m5MVh80g3JyMb%2BcCBiFVptUv8JYXUDcXog4blLCcA6e3x25BlMcfhBZBHeqJN%2FWMKU6NZltP%2BgY6Yc%2Fzlo0a8AN3Cvc9XK%2F21IEPr2cUxRHFQwAr44KdkviCoLLTLNmG%2BVY82GxLPyjnNk4WLy9L%2B1J6bYV1hqrms4Cbf62ZJ5cFOrp63dhm0onuCZXfOePq6jbpZG5fwaU%2BEqTJxTMpE%2FMoUWpP%2BZe%2By5nPNMfnGd7614z48xEMMeoSPCeAs%2BmEWO%2Ba3mH8J%2FkwH8kbT21RDqN%2Bn2P8ZAtHxuB5Hh9BnLmZwu9S0PzbPp9PSfTtGYM3JSNQH3K7DnSNSpwUgeUO0rtz0B6fzOpV7n%2BKrV3F6WstvPPaIILe62gg6hPDz7xDyolRQJD6PvkLBhLGYcrCxztFg8tmA4bDhg%2FfP2yc%2Fo9RrA822Q9TbtrZ%2BiMVKNL8OMaHcjGnA7dEsxiEo8mo%2FsF5pGuUW8680K8kYQjFBTwAVVwp2qNpJ7fAbx%2BriB1iBz%2B6gmyGPXReCt9oLHBZ2t5PD4zDnzIbDBjqkAZmryNlXY%2Fg8sF2jrEDIGmJGntPHDTlxHwr2S%2F8Pqaeqnyhee3wQzh3dfRUC7KTJy7OC5pUykDbA0EUPiYeIbNx%2Fh9zM2n%2BatGXBU%2BOQs9gox3%2BRGwdGS6Y2lLw%2FDYCwabgSQQJo0u%2FJ6RUXU%2Bm1T%2FSqf7z2Q5zDxKWz6QmUI%2B8kGC5nKNlAaEaQrkNmtgeH0u8m%2BfaToUDfgzmJKhdPaNKDI%2Bfp&X-Amz-Signature=fd94029c4eadce2a7b17c740eb14b9ba74cd31010db09ce2866a075f139f200f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
