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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2PL7VQK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDb4br8ts080Ol%2FKMasMmu%2BWoKu1G7uP6s41uMqbuIwmgIhAOwFPzAln7sl8F5zo2NFyq8IzNg%2FymwW6QeVM0s3fMqPKv8DCD8QABoMNjM3NDIzMTgzODA1IgydpRYHReP5jR2Hn44q3AMNWqF%2FoP5sECOxoip1cRQ7E2h40CaAyrV8uY6vsIOJODRoaJVWO%2BY3GE1Q4GNlEqsWXjj1zG4g71Gy6DzFf6zVCcVfhli9xtmxJNRF8g5PpSuXXihkSkG0CQwf9EqiUXoxZgaVXRyw9LtBDBhWcFfO1lB9WnCXmgEO9jC4tWd3JlOD0thbTdLC55k4F2yW50xkigRRVqMSsmdEZEDEEqsgt69hQBMpWNPISQd0GwQTmlGOIwaESR9hkhw%2B3kTVIHb9RK2PUJVrksVlwRfgem3oVob9WG8ALHG%2Fxustw4Dt4ajHZV4JGCo6lbdIFzdGRTRS6F%2FAq4v3z5KZUQydLVk6SPmVXgis4wc5rpWUDwJb9TDWth5SVhKh7h2pqvst%2FZR4UCaOER65Nr5QL7mx%2FcpM%2FavGfnh%2BnNYOT%2BbJHALt1cmgkOHs%2FesLxZdYPY0SX4mThpJaZG7ZyIv6lmBKswBnTBfYRfdCbxka8hoPZ1%2BH56lLJYIY0fgund2L0L5d4W06bvXUGWefxxL62Fx3BJKy6vVYWlW8RsMKCglb%2Ffy3RzyFnRSDnBX%2ByGsWDWL8APsO4M%2FkHQFtdhwpAbC45C60gjheafSgsz%2BnRmCcVNZTMnflRMPlv0JkoA24eDChpe7CBjqkAdocnmzKcH252bsCoPAFXgGyGaO%2BnRno8mNGa8hAt87Hxtf3lVhX3D4w5EkreWyTK4r1sFcqsCwf6Z25QuwYphCVM344Z8i%2Bf%2BE0AnaRPCZLj5DEyargFKe2H5m%2Fqf3gXy8%2F2lx6RfVQ%2BUoSgScph67yIh2o3EUAe4BqFWxvFr3M3KR7EZSknN6PGhGGZFUvZHJOiqxlTltsdbrdGPS4K8rvnZb0&X-Amz-Signature=bd5f491cf24785e29b3c9791b4fde385d3892977d7828bed2457839f32b3f240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
