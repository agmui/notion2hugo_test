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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVTXJ2IX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsC2qDuYeAbFr07SLjjlp%2FtUDyXGSZ3erfkSWrmnJ56AiEAvxjFbF0s%2FtkHccJM2xc2p%2B%2FJvfc98juw7U6RKtxXn9cqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzSNYsnQAMCGKUCpSrcAzhg7c8RkLPHFnuoQSgY1PgdHb423gRVSODBYLgS5c6EVQkddxeN7tQTBts%2FdatQnyx%2FUz%2BbWgNRIxOwRW5bcjytx3BIidIgmTR99Oc9tnOrZpCphZWkcgG8uvDPNLz%2BbrG5Iw9%2BzYwTqYxdgFLQY5%2Fevw%2F3dEu3H50DMwGyhXXT%2FsW39MEChj4vJOoCwa6zKNBStJjlME1Vxk7n14Eep3GLeOB2coURiq2KAU%2Fz7L5HZ6nHUxeBpVG1rD%2FszXPtVzFRdReGTuBYP9VuQPZVKrehYyBJuE3cOOxr6Z3p%2Bz1vfwXhijkBLzCbQqd1Ma6cnYD0cC8a0abuwqUvjCVw%2BYnLkI%2FbVOWnrtZCyDaDS%2FgJKzHJ7RhcKTZn4VVJcWg8O%2FjMap3VJ93VlC%2FWUyPZcMV23yT0xjoV%2F0Rp9xWCavrl19tGIi7AXITX0%2B03qxlRR75utQY7e4903LLQThXYeXEZt%2BHU0DTfXuWAb%2FmjCdertDqsCqetwLqoGUxX0AjmuCaIXveFG50eZ18gpUbywdRf7r1Q5pWDbOiUYCDHfcKEfygfFX5%2FJuK9pS4r70fUZykSwtB65uPjsLNCOGjNybbvzmNJwXsQyf1giXMz18f9YPeMj17WfyrcmPUqMPPMicMGOqUBVENir12VnR7dhvw9Y2sZblGix2vnCzfHTkfLsPhURuW5KPE0IoBNgeu%2F8E7O7K9nHgC5uJ5kvoXsHV8vddAWVsU5I3To%2BMljNiKQKLs3LfPkuFJ1SKDxNyEqGv0wEvIhI8g9TZxk2eL2QOuMcuFRcaHHPLTFf5xGpMN%2FTOgbjXg9AyJJpZViB0XmLx0W4VWjO8aRGLdIbPCxD15P2bkqdQvYQEIZ&X-Amz-Signature=2482b5c7e2a7f0a204365fa53e817c34c2b2bdaca89581d1e932f39c6b69bf74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
