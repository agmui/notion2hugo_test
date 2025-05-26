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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEWRZ5UK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FRJidk30a8n9i1uv%2FPvcmMeE0weOo%2BJA%2Fiy2l3P%2BGmAiATmbpCt%2FiGbb9a14Z8FLBqeucqcvwRMHDeZfI70kr8pyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMKCcad39F0L8xGcvMKtwDf9n08iftYaIr1aEcAIMksCzhJM2wlYX%2BRhlLaNRXnXD1Ht53Ih13ELrUlAUVo3aQ8PM3pK%2Fb1tSlL4LZGBwghWgs5%2FLG3M8Xcu4J5ydtWAJhi2CEwRk%2B5Sn1cjt%2BUo9Zo%2B4ZUDCQQmu1geeoNnuqCWzlh27V0N%2Bw%2FTsESb8I0TsCxR1WdSddJg3nbrkDwNMmJR15JQvdIlek4OpNx6sUXlSJTU9z2MPuxDtKSGL1AH4jG%2FZNenDOoWX24wjR%2BEQC2FJhQNl2a%2BWuUEsvRle8aI6F6j0e%2FlBeEfIvwUrHBixlJUr1i00NtIyqpeMTpN%2BKIvMg4ipFXn6mlMiJ%2FkUOyz1ajz%2BSmVcRI1G0Rho1EyRY%2FyhSiqBOntRnNkuo1LLLpAXCcuPs8QrIxtu1FdL9%2BaKyPwr4jWxPB8j5fJTFypactMkVStBUNHpGGqwMmJmAFq%2BJS%2BWkQIPsNyV1FOj6ojB3Xo98EGcuaQ3bS61uSU08Eza9B%2Bjxl76kxpHtxe725hdsaLuxNHjxontarjcvYDZu6glL%2F1CLosmaffqJuQnmqPsOyDqBjwjjAddGWF0KwhULFJb3iHWT%2F%2Fo53Tj2k0DK8V8XYVdwgk6WZm4MkZdIwy9myHfE3iQtXs0w%2FNLTwQY6pgErU%2FKmb7aGlwhi9aAk%2F%2BZDfgXOhhjYPk0In30y7IVb1ApUsYjtuxRXLmE25pGQ1n4sQohzEJQ8ru1bE0WUZTxTMOgH56KjzIEwLmzQoOIgom30tLvGgJPiKvE4r9ka%2ByssMrUJBttF02owCSZgFhfU7mByD5z4o2e%2Bv%2FK6UOyicY9P0JtTXyWGspevazANTAgiZS528PRmMl%2FEMmK6q%2BCHLQsnQv0W&X-Amz-Signature=1aa7f5c7b1234858e6791dd9de3e634c673cce286da8c1eeaed5fae28c7a75fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
