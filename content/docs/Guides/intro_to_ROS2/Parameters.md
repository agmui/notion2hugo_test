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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGV5UZQ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBE1Z8LsewO4mZitcxORmhNJ4JGLUyKbuUAFCLfS4DuRAiEAhOto4P8gEl1p%2FJWLlgSGkUlp%2F1ln6eYUt0trREjVz%2FQq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGVsl%2FfDMVEPYCLDFircA0nyzhwFKf84H45mLoc4iBhJhpRR2wBcv%2F%2BqSg8qFz%2FjVI0qd%2Fn1jRfctx7HOY%2BTk%2FIybg5qowJmWu4bnM0STXEeBviWCk1GqRLyi%2FAf7Pzih00Hc3uQ%2BjP6FZp0uKVWE22PM0rFoCg214oOS8piU41stfONfKhA9agY3hoj95qXZBqd6WLNFynTNz%2FfW1ndpCXRfETmU6nspjf2gVy1V329p4TIh1nx0byxN52oGVo517S0wDd9Mm5cNOUGxGSoCuoT9slZBNrWQRFWpjltpOSy54Gs8JwKUfTssW8pEP%2FcTLPXfzsHdn7qUh5AxSdVtPkikqz1yviOtpNZ2rbhqqzcZzKBOMPYY%2BrjmoPUlQbArfrKAsV312uNuFIB3Mg%2Fw937RYRZlvPf4G1H1tta6zzvF4aLqExIb9UZPx%2Flzs59ROaOyNI9yzekBQgKIjDABkhugKbyp4qhsVIR024Bsyi7ztIX%2Bf%2BHfsCo3vbctG2CNKhpgPILufMIFJ2KdV%2BYr1sg1JG%2FbIl5wMjowFiS5MPNSDZ2oyOUpttkUAMHU4nmxOsuhPrUcR3U5Fi3hHQhfL1SGVHk1rLustE5mNQr4%2BfwfL%2B2RFIN9ap0ONKiDMyvSkqp7zfdgD9bYtWzMIqYscIGOqUBNXR5c%2BvKrbcru%2FDoAV03npuWwH%2BxdQSjbeG8bqMWUoaxGH5kxA%2FZLizEVdA1YUrQAbNdiwx3Cmw0UiqH3LAlqPMWX5Mu91aP3Krje84godBVfvXsOQQmng554kQnx0A9mTvxSMNl31H4Rdrb2pxxUakTOpRTgWHZHjm2wSx1uQsYHbBGoREeawiqhyxEdjZy836Gh3Xqnlf4VQSJV0a8aFz1vovL&X-Amz-Signature=6ae433e48dde5202914d144719bd1899294af80154815cec62c0e75deef27403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
