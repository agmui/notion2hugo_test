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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFE2IYYN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxBOUPdC%2FDMEvbU%2BL8XqV8e8xzWwzj8eaOeylT9BHQNAiEAuj8zciinjfA4%2Fenk%2FUQsLP6Oy2xvYBe9YBbfWg0nZsoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFv58iUSW1swJ8ozvircA8MQQb%2BTD5uia6SLqXzuDHHhXIJgH9%2B%2BWbgzxuHg7YdTxKYBTqW7SG%2Foae06qDDGGnoW1D53G%2BdekyxLLQR%2B%2F%2F4Mno4%2F2%2FrczqAcdX3QtxQOo5Q3VZ44u%2BWXKy62r569RwEAwgpIrAIR55%2BcAAhDDIn87C1bqGiixaVtEvLAjCqjLNwYQsWCoubUX%2FD5%2BuCbXZJ%2F%2BoCvxAYG2hfVexw4fgxkHbjKoN55eoXsFBE%2FSEoSkPVw951uy0cid%2F9XIZ5pcCRnmuC3h3fL0AUD2sck63VVpov9q8I9uTsX0XN%2B61j1YT%2FHjQFYoUAYf2YjxKpVU0raDtqqDyB2kCezd3y%2BTTlr5n6mWWzPkysMtrXgqNyHJ0lmLq3%2BTkphgW9cMvx3Sf09CBGuiNJcIGbkp8XN4ij3QeYSS0%2B31oHDYRBa5z6WEjRtjFEI8DrdPWA%2FmkDn4Zu7354oimRtcYAoNmR0gFx%2FkAJZf7mSVqrD7VI1%2Bqnt6RbRgHAaLTiHHhsBAmVHaT5K963sVXg0FK0GIcJ6U1HHUEzBXx2wCEHNqE4FLyJSt%2BEDjqj1y12ZIIMwlrCrU4%2FN9XSIljWVd1UZYOAXmzp4YNikLTkDDJnzM1y2OhPlop0UV14YQ2OmUCytMMr%2F9MMGOqUBTvcOzm938j015CejEBWBNJDPWOEsaP1AsusgbVFh39YzAqeOnffP%2BbWQEKrPvxAAV9UARVL7ntUJAiVyRE7Lq4MxDixoRvo9m5peUHwh310ZHzyCRfDy7mly1%2FuddgANwcRb%2FO5dhQKv2JrJ%2BjxU%2Bzqez4P4%2Fg3Ubk9YnYS8CLKgxk8rQqNTc7obPaWVImmVZYZP8GkHixO4%2BYT0dKCy32j%2FCSxN&X-Amz-Signature=0a2ede40f2fc9aefcddf3c9dc9fa86b640cbdcf751c7559fbddd6fc4a84fa790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
