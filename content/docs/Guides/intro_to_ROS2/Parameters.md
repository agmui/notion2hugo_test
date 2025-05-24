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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFXEIYQ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T004004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDvtJkve%2BwxG1Z7F17e8tR9otdlHc1VqC%2BuhiaUqZOpQgIgGcd8wc8%2BZQT9cUbqErqwoGr1EEEFoqqopoWrOJq7f3YqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbZx%2BhADXf39%2FGyACrcA%2BPu8x3aD%2FHRl02ZtlNYe5YuBpWhara8NtkFfWaaBd8tOdXaqa5qFdzSx%2FYdsYBt2ONJX0eUO3JuYO13zfuDerhMV9BVYHCnDwysaS8a%2Be7YnkiK5sq9a20wToEpBVlcC5avB05Y5wVxRj%2FJVNJxCShNfov75t7LrM6RJHDI4hWf93YKQlRhZ3eFtc543urK7qOGi2eLX2lL84rN1CehbZ9Z8erfq%2Fmpwl2WX9Tmv01nujh9uFVZQcfb7ew9V%2FLCCaigSSmeUx%2B82Viz6rDnKoFcEE6cJmyfV8hs03pnvGtxe1IFL8BWdTd9DtGzw1ZGQlZJCuCe7dFS3VogyGTjZ5Jm2sXIs1ao5JEM3BuwpMxs4NmAyCN9alF9RUhXBKUEnS5nj7bQnC5Qknow6R7K8KzPhg%2BM9LNR5ZeLuxguPC1Sbsk0dg9NW4d2W6%2Ffet4Dnj7Ucv0hD5u8xjPhbKbk%2B9HtbZEGAteFtYqLe52h%2BFEdtLR3Q23Gta4tT%2BzVR57boU5plfP6WLdl5%2FfRQswqn9xeX5gruyPaQFBYzB%2FVBIa5gf0BzbZK4rLaoOUbHnxeXXXOvh098wkAlrEJRyMBpZqNsB%2BeXaAQwpKNcRMsBmmyC8WT6vmQzjBAtdeOMIiQxMEGOqUBI9jHpPaRGrZ0Byhg%2Fj%2BkfrXZ5AmEim84ddOn6ylJklA0HXa%2FX6TClw8wpFK5gSMsl%2BWgStw3AJNxveGYwii7ze8vbM7bpQUQJlAcPM7B8s2xkXHLP31vLGQ4wHSxaIoyjwcFODJ1%2F5kUNfR%2BWSxx2gMc%2FJS0Vpz%2F9xGeqTpZCx2W0Omc%2Fwm4EfuiA%2FHnQqr3oVF2dpMtbzr3FGfMlpIU5cA0dejO&X-Amz-Signature=f6a2b2e7e9f38274866a0520b2091ee0c46460af94ee5ef068471de9dcfdbd97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
