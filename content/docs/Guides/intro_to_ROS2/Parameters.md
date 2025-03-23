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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBAE44RU%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC%2BEkVmHV4FeDOUHE2DZxAjYRCFVuMFGtRgB4s28gva8AIgWWQDsgHMG45HWjAgpFtD9Go%2Fdw7sZIKIc4vNqVSCDIIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbfwPWqi8BvDLNw2yrcA1Rp8bLXayikPR7U%2FUBtKLCo0RbG0Y7YClvN54iJVq%2BHpPYczpcTgH1FxtCAyRRmOgZ5xNWXzFtdzjH8h5pyXZ1fCOqeVVGTgifkw29DOfiD7WLhRHisL2T%2FKAZuGHaF2WuwsckqbuvGlVKcq%2FLIid7hubpjxr5t8Dp773yjWs0R2lLLau5rGalNAz1pqfSqlumoLTVlhAI6nqbisSmOQdqXfx5vnvZVyWRpPNLNBUZX8EcucO23Ok1BQWivKrqte6wS6EGZOZcg3TjdYFPllqozuT3bjpc43F7DUcM4ayF3teFWlj%2Btqw%2Bo0QpY%2FT44InA3zwWXoPSbhyztqkwkXxUFrdrDKrGTnANbO4hDPaY1MiNXIdCXa1i5ZdQfntfSMaIxm9m8g01D6bIfwg93IH5vtxYla%2Bado8mmyw%2B8lXT9QJGhOcOQfUtgnsmHt3FqUk379aiTk0C%2Fm4nO9B2B70gjHdSXIupnaD%2Bw2mAcZre4WxfXnK3tAI6TzT%2B0vd%2FDCHWLP%2BMZN19gFaq%2BJQR5Sx92JkkVymMvynmSJSAn1XDnPaF1nrDeO9rthZr%2Bo1rw64oy7tjuJBCTygjg29qvFGCIL2mjC12Z7F52FP1yRQy6GfYVLgW1fa3Y%2F3J6MLzj%2Fb4GOqUBjemdi%2FJa4yOsG%2BpBwTu9nGXggprcfpGFxhB8KrNJm3ULnm8ozsIbE4LKUbtvYZzZFgZvqgehV%2Blhkl%2BjSXLEoxx8cqM2sDfc30bv%2FB48U%2FRS4IcgPEPhsxjhNRbPPQzdaMubmsMZtoTRkZG2TRvnUzT8vVkiwfYU8ITH2PaQph6XYXxVTWkmpZndDncUsmGqQLkQ7Ww9gCnKFPDhv1z%2BJvPklhNr&X-Amz-Signature=93dcebf2118a3e6764297074de40e92c80c530939f45bd8ff9cd9173055a19a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
