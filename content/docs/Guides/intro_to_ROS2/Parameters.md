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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS2JYBVR%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQUZ2gVkpI%2FX9ihJPjl4J0FzE7HB%2BxfjYHua%2F4QJBOeAiEA6eYdPk1sA%2BvYDJ8szGNEKyehx0ssc5E98C1O0aALGA4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDF5uy5iirYDgv1d1KircAzK96E%2BHF1Ky3tzq2s4IUVT6Vn1qiJ8qZcUbyPEtfl27e4Gm%2FYcDtre8Jjr0kpqenQlVYDRQdWJt3zaczSDum3Kfffe1vCLEj5M0r%2Bif1R4i6eYHcaiRBZ38vqSLGa8p69KEQtwafWLzTFsFchrhK0xGwpZKuQsw522oSBDUzx7xmkt6ebCvhWF%2FUT2SQngcoZJ4Oj4JKd%2BXUwnZZ1YQ1%2FilyVLAFoAHbxtmYQgPaGqFmvmXoczfrWbB1GsRN21P9PSrYmfSftm9uIy63Tzc6HbtcTtJvi4k7FprXtdh56pgK5ciSF%2FCAVPJ8Wy9PTNvKGzd5%2B7fAKte2XAornS7kP7iyRo9xlb%2FqONfCu5rg3WKDO7scg6qwkyZ8XRmw9DK%2BACYch7dn6TSboN9uAjyjuOwH%2FM1HvDH%2B643HFqEsTDd0oYt3VEZBSJsAZzuTZq2KmiJs9l4C5UZjNk6bJOCYDmn8DnACDKATtNQ6Aur99Foxb3wzFDTFiakQoZOszKAqQLtNrwZZCWQNPcxZQWCCCeW8usEFlHsP2EqtGBC4ixjLKUlzJdnoZJTHd8EROvHPFurzNeRi1WbRT27sbQJ%2BMLl7%2FDU%2FfRGBhyguoj7gG1EZaSmbXc4oKuMlMdlMPCAkcIGOqUBuxJ%2FPr4hKGEiMv%2FDUrUsHSSXhJRWWW5h0C3qDOaUoyqwoADe%2FrQ%2Bzp7rFDfAVHNva%2B9qTZPohAV9mO8qVDPWBPv0vrzLHFM0AOmIJwEqa5ayxJV%2FiGA15udb8O28eeVFXRMdd6NC8PD4N1%2B0slNv%2FGdU54HD8mVqC%2BcwzMn78Icd1LLl9GXsA85i0pahdYWr9cSji5KELWESkndNeTmaFu4%2BBa%2Bi&X-Amz-Signature=44304a5c8180f2303ff694af07bda11b19fec5d8918f9227ab140e09d10d1e66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
