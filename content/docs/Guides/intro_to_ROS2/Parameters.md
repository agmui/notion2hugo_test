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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654FP57EG%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqpgZ8L8S%2FqPlt7ODqYixGLGT18N9%2FwSAuVK%2BbAY1HdAIhAO0pYRTT1XexOuqAIio5ispndZJLo%2BULhqG%2BneFwTNFiKv8DCGwQABoMNjM3NDIzMTgzODA1Igzx6yhfEg3Pq95S%2B1wq3AOWXUSLlXDZUqO8ibzxRfxpJg59uU2hq9zBG8%2BaWEyan3rAAVcl%2BqsJUoBJ2p5RM%2F6xR6LEtmdzTcf6pfGFK8O1Btu%2FMO72Z98n2NhPLjeUTS%2FjPYP6OszhSqWzsjUXurvXlOg9kAeBK9FyN8uXPNlnT3x%2F2XF9gBD1j%2BXCco40tKfpmnWNduLadH%2BBUUur2mjYKo%2BdPakq7R92x3Zw5E3CG38Bk7YZDxAMDqQ3rmpY%2Br%2FMX4H0HaIX1Bxkuof72dE%2FBSXK1Wp%2BJYBqSp8I4dkeOpRsnA90wiLehkTVEa2U5YT3TztsWASSojXInEE2TT70payN9UtzcLqPfhlVx8BTCZE%2Bxl5qw5KGXRKuxhBwcxB3Xuppq6s7mblN7mYxryhc8hVKl2QeZD8SDsusiHesJ9qECyuv%2BSx3078pC0YpolX4vaCouDRgwlRBlK6Wvt3kPkEO9N733ycN5pIb2L1PO5fNZaf%2BCQC1TsS3FnYKag%2B%2FnVYdubyAtjZwIrZ49eiv0SPfafjBoTSPa5vHPDVvkLD00qvGDK%2F7TvXHuS1ibnw0dTwcaTBYhsYyVUgCs0xuglwJlZTy8mUkhB6FOIM32aHvduK6Xa4RIEwu6ykA%2BeS0BgEedfWKnC88yTCSn9K%2FBjqkAU%2BssJ34bPQmeVsTknZsODcd3dT6fYRcpxAKKahxIDtdUhbWs3ja9DZeoYv0SqHKXvQKs%2B3ybAYwuU%2BA1mnk3BBduxSA67ODe3Rr9yqHx%2Ftuwmi0y8SD1br5pkqHmbQEHCrcsKDO6GiSi9KUkR8p9sxnBZYaAMUTTMZMEY%2FHnujmhZwzj3V9GC7vrvSpulOdfO9JwSduWF4NENZj5CSfPPoJis9I&X-Amz-Signature=6abdef81d189a35749b0786705f8aa21cd118404b3eeb182b2fadbd524e7f5ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
