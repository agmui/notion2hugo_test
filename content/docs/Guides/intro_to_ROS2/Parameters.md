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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGVY6FX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAk2O%2BzV8Gcb%2B9ESYcgo%2Fne1KlDxveNQsTWijBEL9wE0AiEA1I%2BDgEMVrXBDPottiC8LgVXhn7aGMLa%2B2B%2BalsF3gLQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDG26wnJiT%2BBg%2BnTUYSrcAx%2FcfceP6gLkw4r7IsbcfHovpLeVSsvfX%2FUYE8x0Du%2BnruTwqde88X0ra0B2mFR4y5UhqJYCeESWntV%2FpYyKZ1KmDHeey4SAOG4sfxLrDYzvYX64m%2BKr0%2BM4F0BZfircV%2BeA9zEO5mgr7f3hiJbUEeGCDEWSOBL2sADXyfbjxs5Z85tB9r2HNlWthdsO0grtdensYCZntyshaTg7gvwRle2%2BSpwdmaj8GkiBa9rKDA3CAkqT6Jc%2FDfmNbXGxtPVbcMqcRVhQgz5goQzJlY3qouxOLekVlBKrgbZIFhDbu6VRt8UerMoZ1Y92%2B76e2AGhDaVlnTgJFrCH532rTNlLabNZ5Pv6Yx%2FjnFL88nmp%2FtEK7ac7GvIBD1WGNHTxvMLTNzzltgRtvwFymasq20QvMtscnUIFk%2BFq4FmuSMc8m804U2uulYHeH1xcYk%2Fzdf4zfYrBUr8lESQXRhK9HMgNgPxFsskq%2F13wB9tiZi69nvNHfPGS4608jt2vXLtcCTiUYfttJeKbuSuk1xqXGLWBsAIbgFMHFLnx8%2Bjs8%2FrsxM4tjt1wYsQEywlW9ZfAS9s1wPP%2FEq9Xf0Ua7yJYR3ugJ6qnI5edliWg27FuZIgWTLewPmd7ZyK4otm0y04hMKqEssAGOqUBZ7NYMqRM6wB8LhQZQ0wLL84%2BofR7a1E6Hy9P%2BbractKk6etONdQjuswdQPJaatjAjHFWYel6GEL%2F6Nv81DNER1MrpemGJh8P4vckcbVUi9jnEKNZmZq8iXYTdx0P7uIj62sugriMbIkT4igzZHxMZVc0MnW4sFoGmVccAAZrR7rkvVU56z4KMTT0Yk43dwulcqKLIkEfGEZOCFqHaZrjL2mU8z3q&X-Amz-Signature=12895a7a1f7942e8f1e3ca260ac4108b633dd278b5a3ce17eca26bc4cccd7631&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
