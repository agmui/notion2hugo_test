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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJTYJVL%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDz7sOHCUp4rEw5aiF7PpArKM5GI0YdayUaxT6zKBtCoQIhAICjw11HLCaeUuIDTp%2BmTvvzEFGGZOOnI9xmEJnDkwP1KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygRTGUUFf%2FvMxAuL4q3APOhuJo6QXbdt9jQuIjKyI0i0zLL2RTqqqJHkUDHIROzviA86RK%2F8wVv7SwtV%2B8WKTCWxz0FcjyDjveuSBqv0c6kOGJH%2B0tXrqpxSAQuqKU2HHsOOP9a7VmnBCnIYtCvQsEeUX7QUHOBWLwq%2BEqFCNXxng1EVpTtUETQSVF7%2FLjtg2hoGDshTVG9RIUJqwPn4mva9bmFT3OdD5U5QESIRHoTCQLMuJ8J%2BvudkIx2ms%2FD72PGvGkcoZK3y%2Fvdw%2FNhdNsaKgBG5F4KZVWHUIddhUPP2LmhBwiKzxJu%2BXouF4NOJxi9tYCR14uJ0EJf5detnkN5MXse%2FKs6w3Fgm9SRn%2Fz5cQjbHra%2BxEtEWZSKFxmHNEXklrJUVG3Xj6%2F5R4P3uQxEoerNsqwK4V3qTVkzXLfEpMzXY821R9Y4B71teZvWHksw5fge5%2BTCA6IbxZPSmUEx8b%2FH2IawB%2FNYyatbmY%2Bs38QCzvCsS%2BOyPXGJrC3VlH1AylkIeEGM6XL3RsqOUUevFNs1f3wujBcWTxRLohSVTiNzz%2FHOEFXKAmSACyhiuk0MxwIVTUKbOBijFlmhDzkpYs2BFwPaeqPcIxRs%2BNaM56DpUksOhDfx%2FUuQfLzeCqOBLCCjWUYj4JT%2FzDoqtnABjqkAd5Npew%2FgoqdfZHrIHMt8yW2pMoW8lWlg%2Be0q96Pwsf1lC7lNRach0wFhSA1Oz%2FaKfMki6IW3dTr3dR5tzb2Dul3zUd9hSMympsO%2Btj%2Brix3h6WkbKXBxOGoC%2FU%2BbO5%2B8bTTB5SRAFSeee7A2pfuv%2BpyuWJNxMLP1JfQLptirNYGkyKLMr6kBqiFuDXgIY30ddEMdcQxi7EMsR5AQu8qlQte7Kfo&X-Amz-Signature=23f9d7a0f11716816288cd8dacc00b8d2d78e6c87ea4bf4a44193180bbc8cafe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
