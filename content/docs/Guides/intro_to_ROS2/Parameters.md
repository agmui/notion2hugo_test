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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYGCQD2Y%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0CFwletEyaJz5jV5jow8Ejhv8Ef%2FLUePLoK3bts6g7AiEA8jlVBxWASp51lvagg37DXSXkyGg25Okov8hwxsLvFZYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYHzHFpal%2F2NStkjSrcA8ooOL9Sa3fwomVJ6rfkOHzcBmKvNmqa9jEGONGg%2F79aYVKjkXzPllvZV8IPPnJOTQYNm6KMyXqSao%2BbYkPfgQ54FQ6idkozNY9ZPyiJwZfGiwOr8mNjkh7EA1IDT9UI%2F4hF%2BCa%2FStHoHQI2WtwupMqKQAi%2BwnyBNOvrPJsfyACi6z%2Bj%2BIgC1AdG%2FY7cu4YdUXwWB5b5X43XkKbdJyExBBOjOoHACjvKbsPwXLpCMNFDkKm2%2FrGsznE6h6AbrqWJTGIXEGno7bkGCxNOdw%2BT4ROksTjRtr8bnKuBFqVoG4eCa2qwJSEprggqVc2ETgNWAl6lwWavB9yuf7X25JQ8%2Fc0TocNeetQiAjzV82ryH6w4zvRAaqmJ0RJupYWfCb0w58Yet9ld9pCGQPAwDb%2FsluSmCJQOTLwIhMiGegBsZrdrwOogPI0IJbEl7TJVs1ZffdsbKd4yVYiWgF04M6F%2BXjovL733xFdmaaIDn%2FrCrqtBi5%2BxvX%2B0CIQ6wVxZE21XG8sk5ekwIu%2FvJEcgMdBIki3e60gKEVB%2B4m3V9bCgHKnUHXsxUz6D2ht4j5m9AHX2XrJ92ctzS2%2FOBaIfqRSInoZmeObr4PdtIpp4ziiRZB0yB8TuRzx1KNns6tUWMKrhtL0GOqUB6e89MxrQI%2ByHXltLEpOpZolBs5kpo1cC%2BD5Dx0yPzK4A3Kxon1js0bj1BT4bapfhlhLEfxbZlp%2FlDUjMaIXIMAqOVRkJD2Rw%2Fe3yKbq5StrtW56%2BByX2MxMazLGldNDrE%2BhQnWtyFiY8TDLkxF5YybXUsxs2EvdtwHpRyURzY%2BzCDYH4vSZ4seT6odlzpQzhxLQ8%2FL4tApCNgoCckkzxEj%2Bv4S2t&X-Amz-Signature=5c33450da6808150e58b7825bef483d11ac0a54c09df61437d7ae6f126358591&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
