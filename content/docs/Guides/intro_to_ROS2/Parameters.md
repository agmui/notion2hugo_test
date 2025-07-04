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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGMGEHGI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGEVKAZ6BLQrmWz7UvYvN9RjKS1UU24QryJbaPeFuzdoAiEA9%2FJMiNXvO%2FIzSMP5KQtAu90SOmHFp3P%2BDCqgzmYRMhkq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDIGLI%2Bj42NsFjUZ%2FWSrcA81AQCj%2FefCQ2B9amzZFg7AzXYmHIB04Az1AkZnY3SER7a%2F19mWKfGq4fjMsMZVuiHl1a9YnozowtH1irLtVg%2F2sCdOOqKyThjfjzLFOCGbCToxV2ay0pDoMUwtu7HjsC1i6B5lBxn51unFnEy9fK93tDoFicydWpUb6em%2B%2FhD6HS9Nr8H76skjw8SmYXLAg3DNjYampauhFZAW0QMFYHJv4kE%2FtG9YBELJeyAScsC7LfxMr6CqekHf4ZvCmqC2%2F8OcdMiEXVeLMktCoDoTA1obwOZZCR3WPl%2BvACi4XuQUI28ArsG2cI98K1LL8d0zUEnAMjyHIYA%2BiRW4co5psECx4Di%2BD1a%2BJTw7Kvn1O5K7p58T%2FkqUB9UyTM5iP9Lm%2FPu5einJ1ZubRJjBZduBAP0GXBlOjQ%2BYLD7UHGPJqTT4Sp9MVuL%2FrpILnN98X4%2Fbi0ypGxaF%2B8pcbnHcTKi12llg8IgtFJSUlOsVWsCkoYYYJNpyCHDJyYkYRO96ppfmBRjdEpDmFVOY%2BociRbm6sVOj0%2FNrUhajqsjD%2F4beG9vwRrfBRqcx2tECrpK4BiN1GlfkHEKHSRyFmR56krAnzUWOJXCOFp4XjSHFaUoE0Fcyn%2BhC%2BTlehPegYeb0UMN7lnMMGOqUBE5bo4TA%2Fgm98yUgePukDAMth%2FuzyJ5ebfNvKlBnbB8zpoCRa5FrZWQe%2BwKwdKYgEKNgHR%2FqIqPOCALVwB%2BIDvxMDCS6LUzie0IaC9z12iuCPsP%2FcSVwjy2O1hdSxtcDOTNGT2lb2pYU41qYKLVcWmyh2AOgR6NreknNsOjcqvIJwNtwPLRtlOS5hHpFeyc046NdjCikHqfXlJHqCrrgsjqoBMH7c&X-Amz-Signature=4fb5d260d8522f2aaeb0d4ed1a7fd898d16d0591508873e743c1d7bbbe6e41b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
