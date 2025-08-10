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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZZOEX25%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPi3FX1W4iuR%2BoGQVvGiCpCrF2k3ZPNzedV%2B%2FrDC4hbwIhAMyjUYORabgPg6GvJz2IoCe7KAWH3UiRyeS1s83oAy2eKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrqXs0Cze7B8SvFh0q3APfzdBieWlLtJ%2BMDKeXi%2FmVYPRjRpPCypG8Gna7bOZRSDy6%2BL%2BRaUUI5u3Dsi8smOgG%2B7lXSy43reayXSTVJxcUo8vUeDFZN1rF%2F011S5%2FXzxI1PfOZ%2FtwV4LA1o5gGyowQt7FldS52N9v77H14GVs8whb%2BYWbOWDdvBStq%2BGagBSYoH%2BU6SlnoXwE4A4CsnNwgf1zhPMXgtMKFJQxNcPaeYJQC7lQlwczsWElQ4jRJkKYXGTxFhkaWbP2e2uuTJgPPn%2BM5PadAv3PSSrsVgVOFYXtm21Hwu3f32R4eaOMq64gSl3hmof7Vehgbe%2B0vol7HEeJPJpfsJpfbI9Q5TbcZQ3vytzE1bx%2FIb%2FEt2lnnlv%2FGzs3Np2PrOXDPqonL7qWL0uB5BG0CsBLTOCuIidG%2F7CPABQp2YeL%2FQFpzaJAI1xuxE9poeqwcgaJJQdHWUV%2Ffb0xLsj4%2B6QOGxQ0VSEflKpi%2F0mMEefzKiqbrYT3xgh5DnuwYadBBgh4CeA6Glc1xZDyUi%2BP%2FVO9etMGxV%2BMb0%2BfuWfaOCmXk%2BGtbHk51PGnQo4BOwacNvR6CObySGyaosTCeeVKK87EQ78SQcGOjw5Um391Ol4t83JXCWBxVwre5WjcQETWiRCf54jCY9eDEBjqkARCd1aG5edXwFrj1F6%2B1sCjVDB5WriE9XxHEUC4bF60YcxrE6DON1y2vNMplpbgQca1%2B%2BWlrfW0uoSUwD6nfrxxdn5WHDZQU9whp1ri16pJfKUIDJRHJwLdaoV6N%2F45VJuA4v92JEObPPVqgmYCc01W8RTzXJmx2AchuUQVht04rEra84ucI4YNv7PPsNudly4yJz5CQLAt2X%2ByDUERgioIprMUA&X-Amz-Signature=c94bd39ef2705d806a319d2af923d01782a03402303c2c30b471ef0a232c3346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
