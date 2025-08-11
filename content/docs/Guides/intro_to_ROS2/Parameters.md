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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKA4MSG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQIKlS0T6YE99NrrvQmDhwLZ%2Ft%2Bq9wtK9U3mxD2T4w9AiEAzdj1csEB9rWTgmwv%2FBKBkzZtAyQROrik1rGp%2FLwZcVAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BNj%2B2iJ0dFNXgUjCrcA5%2Fp477UOH%2FQha6mmNszrk1gWXq5y3bOeOYxTcKnI4gWfrDkle%2FXYKUn28%2B6iDcHmyQWXfadEGD9DD%2ByJHHw77K9amKGl1Cgn24x%2FiNbDu8eU1Fm8dHYD4oQV1R%2Bz%2BAqEvrknESZu5U%2Bp8dbI7h%2F5SvI2p%2FfyEhGxV%2BEMxildmvEYrtaQhKIcCaKjtf1PUkAtxzDkuO0B8M5bUOfcuecVYjCmepwvFAKb0DLz7z5jUWTnr6l%2B6hmn8GHlNerQePocXF8RAmPz3Ze8OuvVru5NgaprwbitH3nHgCJSMHge9yem0dlPah2naJRUvTNaOUOQ8eBsPgdlxYXs8vQcPkuzTn7GyLr0cgAX8YxlvLTUl1dQkfbfGvAl9%2B8I5e3TiFzP1ZtvTHwkXhq3iagDuoP%2BgteQYLwvrD9JzOJ72krGvp6MRomJGdoo%2F%2FKTsCRAaXd%2BvK7NPlcAnidALbMIZtXXHfJQcxC3Xt9ss318LQbWRefmNyfiwQon1uSSOg7H4HjXVudNeaxWeWrvovcawlEm8miUzzClGxuluHmbo2dmyKEpxkJd7o6wal8TseYFF7qB4Wiq1MgDRBSFy75r6H2kmqOYe9meNNTsQsKjnSyRvm1epyvHHGoUO8ZHQZRMP%2Bd5cQGOqUBdYacKMaBtKcopckrZya1G5ATBIaG%2BxKDk3kZiY1F3iqdkYboh4ITW%2Bxr2bvHLFoVzX%2FesljCUEV2LCbmTdLMlwKSFbD%2FkZgigpdprzVQtkmxdd8TS%2B2r87TqzMnxWTwM%2FJLVYPuJkQZcSJQZLDFM7MPMp14zaJnXK0piTsj62lAYiIFO9sb5mgJ5NkFqXxhWyfHfBjs5svwV3w0SObQfUUga%2BFBM&X-Amz-Signature=250ff7a41d16239fdaa3e48004d37a4e8425068890a27e80d0d28abfa598822f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
