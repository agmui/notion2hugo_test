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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AOSUETC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIAmQv23q2ooGTh4pR5WkQYeGvY%2Fa8Z2wBxFMSLcu63HMAiAMClZvJ%2Bd6iSfcFvgNwg8PsLph%2FIbk97ySxR7ZVKHIhSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsYqtg%2F0hbxniRYnpKtwDCHVi%2FkFUFBp%2FK3SQOKXUMacG63yJ%2BBYBy709LvNGU%2BSqDQYjHUcny%2FZ%2FOuiXD3NI78aWXEjuDNPQkAYim1O%2FRoJrC5GHh6twrt99c3Wvb2r%2BRP%2FZt3gxeQqfYK16hkhtGQpk%2B7PJQ0hf7%2BwNxQmesQQpowVwJxVrKI%2FLVy7Xd9bPYmMpGSV8BSmOpsbF3JNVyFyr%2Fyp%2FTHM5Huwr6f3Jz4f0ry7257IiFgeTvihP%2BVfCDMZMP1a4CHr6M287NW5O%2FjKrcF%2F1AY0PciKjDAF5bflOAl9cm2J9V%2FheO3mDh%2F3dvbh2FauG4n2bD3dM5%2Fu9bQ7jOm9c%2B7T2y2UJxPoKoR7vlxUtvYHwFGoc1qGPg81jsIWcodLBJburbrJeMgNhBe36Sp0q0Hb1aGeHuXOx%2BFfhTwOExWV7CO65vZq1olbd4QV8LlZx3q%2BUyyHozIpvM8ofxfjwmSQsHNrhmV5ep1OwOYmGCE5sCWfnrfq2o6W3W%2BGjI3ayFfzzPQfxeWRAy7ziWtOekKPlUHcRK4X63h7KlKpeK0xMFfXxPy32KLttepJfm9LcUNCUIb1%2BFxjUFEW8Y%2F%2Fr6r%2FQwO9PJKQ6OjH3HlIyFwm3%2FPTmnoPHyNiNtOo%2B%2FD1Bb92XXbswzIeYwwY6pgEkrpC%2BvqH3Gp976WIweF8HQWfUEzQNh1GKfh343wqRJFnQVM3EwEeF9ZHeuc0%2Br17rSBFZUL4u%2F1xuI8xm%2B%2BZsLU17VLpeIYOCkHDnhVTpor%2Fvk%2Fbssuf9NOJjSsYh9XIhqEbU5OZ50mKG0TpgZSg9M%2BlyRumrOEYCGUGfZHFuYbr2cQy57LrkbUeNcFbpZ101wTb63QDye0frgBe1CEwklRNXG5n5&X-Amz-Signature=b58a087ccc8aa5fe253282c29efef0e773b5fa493d0fb91c609a9583ac13747e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
