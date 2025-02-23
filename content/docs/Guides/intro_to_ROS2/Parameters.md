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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQGTY4R%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7h1G12G9uwfRCWrQqVly6zKaSHBwH0jgpMuBoQAxQtAIhALQMa%2BG7FtzSIchGnWNlmM%2FBrVeMZLQSH5nqcbKZnXj0Kv8DCBMQABoMNjM3NDIzMTgzODA1IgyGlVK1%2FSdUKuPGrK0q3ANDp5X8o%2FAddkVD1qhvERtJQK5znfmHxHwnbIirPglpm34CcL2xWAyEPEl68uSxfYY56nBR5%2FuI5nesI4tfuTD04clNBatm4wHHgFrKgOPwuDvJTy2lUpHnjcV3cl0mPAjl4wyaZ54FMXHrIqm5HqrPW7Xr6ocpzm8CFLOcEWHmOPMDxiEbdrag2ciFs3lfMLGP8s6rLAqYAtO6AMlV9PEqLBL4Fg0m4j78a9wkVrnnkOVNY6H2M11%2FoS6es2Tpm9VmCb3ja3qs3P85iCZShIKcZgfxvbqNz1xVqRaiIludaFQ37P6rkYI0%2FssSEle6fsTGye1pnUDGg4By60P1iovv8d87rEo%2FpIOngeh8rtOOS8%2BHuwmeT1Tbrxcc5AhQsuxhAsG0ei3GSOMaSR8Dbn73coPHq%2FeIEn7U6n6RpIw3u5ve4njCGSn%2Bwt13os9ClQNQ5ZBqNSwbVaPUnesGxKBwqq%2FKqTPFp8MJ5t8etq3Q3dQBvvdC8PbES8edDZWJ8jS5OElC91JtHudmSLWFK5pwKSmwERzk0HgRKY7Xlg4%2Bej6LrA6aaT%2BWkTl3DtOmo3DuUwZtLuDHBjZbtsCOUoTGzSq92KXuNXgTeIKZufuFwxt3Sbywiu%2BADld6%2FzDK1eu9BjqkAeIEQSpa4NK7GV3eLpGFTvUs57nXrlam63bUPiPz9L3nTwx%2BFXB8gGoB7mDRvNNLfdkZhgtVZRJTWv3N%2BXzE09y1CSnaGTK27qTtASGLmPLpbCvsJNAk%2BdLWbqEAuTp%2BgfjSEvCtVFV9wJ46sX3sa%2BNKnRhBpu9fawW%2BTNlkFE3xAsX4y9MT%2B0WW1spwUAeWeKZhpgWrzDjNBIg2YDEW8iQ7jSSR&X-Amz-Signature=e6397b5fa5f96a362c8a260531e6b7306549e5486c107ae1cb7c92bd6ea1e613&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
