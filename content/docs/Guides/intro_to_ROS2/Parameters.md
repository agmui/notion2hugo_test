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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZTFMMMC%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK7YQ7GTeRqNfhOivm4VdUh5EYcMj56FTzCUtH3Ej98AIhAOR63oR9VLjEk2XysLnw5O3CBNH8ODeQgF644EqbU7b%2FKv8DCFYQABoMNjM3NDIzMTgzODA1IgwWX0V0WutIG%2FMXgTsq3ANY8hN6xONa9h2Dz6eBgOiD9T0Im4iWwqdvu114d27Dp5r%2F5gdA%2Bhtkb%2B2G9JT2A73wLoi3Ms8Vk0cAUb08z4Mo6Oyddr4CE%2Bz2cKAhjU4V3pOIt6mvHLQDAiBEmHm1RLDmhj1kcB%2FR7KKhweJS30Gj1Rq3Fct2od1p4B7fxM3ceLPlTI0Hq4oZh4v6CkN7ITCv08rmHVWoOkgM126AfSUVvP8QFfT24saeiRPnfVMoZ90Kgc0zULyyMjYu%2FIQv%2F%2BAybMsxOEtlrSHUQ6xGyLtBDP0Quxu%2BgpLhG2mRvgFX79N0swHC9b%2FJ6kw1xKkI1TH09MBtuZM4Egl4B3BgPks5aEpbdZK%2FcxS%2B903Z2035Ud4i55H0SGJGBZNAQfaJVJxM7CSnGARJ%2BagtF2Ue75fpjx0jrAVOnlHVHkHCM96Ycy0M7UIydJ65mfUFA0PtNWJO4guv%2FswSV8YQdVNlVGGr3R7LlOs%2Bamdam3cuKTvpcjIAtGPnPbeQw%2FW3lapwJrSsayUeyfBu%2BWptPzIuMgiP76Zx555I6qww6JVV%2BMV7GhCyzRJv%2Fb1VUwqYBJJM%2FmlIuUS%2F5eLu%2FbHxFX5kqTqO7FL9FFQfzUes81J71%2FsFLixzrAXny8LyQFNe2TCtq6DBBjqkAQr01ggs0UEZfMbhv6MtIZuoX7HPosETXCknVHgLQJIciPr%2BXb7L1NjdONJHbe6RixaU4rLJFVN8LxKV1zdwEi04MUcymncyps8zKzWaOSyYEiGvgefZPZP%2BhXizAfcETQOXQ9gnAYplJD%2Bcds0TFgIW01Nf2EMGEIGlc%2B22iYupPEzoKF8KW%2FE9iHCss3HLngYFPQ7CuI%2FALts7x3Ch6ftaI1vb&X-Amz-Signature=919f1becd690cc92d237c6d159bcd92154305209f27b88f8f6d1fa214c3d04e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
