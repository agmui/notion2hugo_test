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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3GKFIS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBSOd2WwF6L9lKi8bTufkPWgTdCXLol%2B4sF448QQaz00AiBwBxsa5ks1%2FtTZE%2FRBwC1JBtN3LbXkBqSX%2BCTL089leCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIML0yDY4FoeQ4yOgNLKtwDNc6VVY3CzzIoBFc%2BRlmoEUpDbxVUDb32ZdEoa66NekkRD8WeI6pQwtCK6ooxiYPfsopzj6MB%2B8sg81WEr%2F1DgSNUxK3AM19S04mVFF15VIZfvDLrCz0i5UZlvFyapp91uSClnADgAypJnXR%2FEXpRLk0wCAZh%2FVydEkulUBlG%2FmLqfJNkqNufqmtmWgIR0ePg67MIwjxEfaSi2SYyXdf4XS%2BB7UOkWpy%2FDOuob3mfGijV3O3%2F%2BaWtIcon%2Bzd4tFDzyoksuXZOKk5%2FX68ilUH8m9U6PtX0QBFwRY4QyB6Q8tAD85YDcdkSTBKVeBVAGLsFwi%2FEkdxx%2BAe081Vuwc2esmu3qXNzmKtlGwyRdce1EYdFXQykyd9u73pCawjQB4HBmgXIKA7WuCQEOx3GRD6hwAfVUOc9IksUNgXOVmpt13axb0KDl2EUwrZ04vMtroaWEQglITyn6mpYWAPvONSAMaUfyL%2F%2BNVC60RicVaHyuMdnrjGI51THRQR19nI8HYj0gu9%2BRI5BwnPvgAIRLussFC2eHqUb6YS%2B3lImZQ7FlanCAq5wWvb15vAnGGsX2lagCM2RN8MLvZQfd%2BJ6B%2FK%2BYv%2FilP%2FhBpy%2BXpsC%2FXyS8abIEdBK7%2Fx5i5Spfvcw%2BeD%2BwQY6pgEqhwDoyRi8DVAjPVgDTPKLSruWjpNNWwP0uxvsS%2BVlj8MzCapHjlLVtzqwlfuLW4JuIJfyvLzdOfebkjzWRdCm%2FfEfE%2F419KGWO40T8bG08D6U1vSRhoSFgQtT2cfjaw7n1vmeUGAqazbWo12844Zvl7dLSydrs6X%2BlB6F6IiFOV3V9%2FLcd69LmqT6A%2BhKL7PcvpT9WWtIcikpjLu6NwOSachCRxXJ&X-Amz-Signature=89df34a5c4ce38dadde955de9c028588bd1b4fa0ad7b3e9dba030a33e4804aae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
