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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ZCRSSV%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBBf6YvLNxcOACKOvFbs9%2FdRRiZYppb1v51Jp2y%2FD%2BCDAiBlWmpvmrS7prW5khLqgx91%2BpZIUEEJg5nstczkoMN9Lyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMo%2BGinmij2nvekL2RKtwD6%2F%2FQ84Rk2Fk%2FxKPYE3PAN%2BUj%2BkpUIc27mKZNB%2Fi%2B%2Bb5mRrT8WHeNBq2vj7NaffqK40qIfudNKX4qkLVcjUkTjAwIjHq%2B6YtRSbSNMBBsOmA3reC5RSa8PqvmvS3iw1JKH1dP3%2BlVnf47N%2Fn1mmGZO80gjoUkEPaTrTNQP%2Bqpha8TsIpJZuurtAtbD3MWRrv%2Fn8EzCFTHooBUgva2ibvfSu4qFcx4jxxe8AFXltvSEn3w1UTEkMiVbLWqurQrsPCmi5h7mBtnZk%2BtA7DooTyiLZxuIIfH%2BURRvWdO8Pw36bUv19knbTuktzLuku8ndxfPpxC4Foi5tcLFZGXPgqscRuL3oPGC5tOR2c05oAaSl0tXRpPSXq7iniJgLgm4VO6A%2F8Eolnj7dyZwntCBn4AuiEfyEaymFX%2BA9UmwbMwxcqFJAHzBO8pm448FqOu7Mkahu7HIH07fACSMvda91IGsPTHCj7MoFNl4qq1D55m3AeeGdxmk5coTRF2CNyJay7f1xDpyCqNthtIIot5UqLQ4amPUXtexb1%2FrX1siVLlLgnPMO006q4CqyDtuCzSa6plL9hApyZfTpgt35daxJDncPDDyJXuOZ8IaXO%2B9J%2FxMuwOkyP5eBWANOsSKUAgwycnAwgY6pgGl0gSnqw4pBQTQX%2FTeQnRYxFOhRw7ky1q0ZlOdtA3N5ena%2BVOmcXJCWCKQPawF5w1o4ESBfcFnmSKbaDIz4EiN66vgywgFZWNvCPydGopz3FQOEBpRGuxlylTvxfLnLVAgXyX0xiuvlKRnM3zTG7JJao3HtWJ39NFhSmTJ%2BjJ%2BArKMn0%2FsW7Qk%2BY%2BdeloyBvyI%2BDgZ0lfdydagx49cMu%2BJ3Qm7NlKk&X-Amz-Signature=ed42578a8c36a9d0c7e3d5ad7a2d84a3474b72231a70bfe0146611702e0ed292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
