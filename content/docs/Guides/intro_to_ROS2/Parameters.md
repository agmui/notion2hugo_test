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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFE3M27J%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCoQdu0daSJUPH1vWjE31ixhxfz4WUU3BtcghCZaX36awIhAJeWWv69KzIrkRkzjWImA5ROWhuO9HZzkQ3AHGQL9IHCKv8DCFgQABoMNjM3NDIzMTgzODA1Igx4p6xmHDCVBFslgG8q3ANkhrmYirpEqh47KWU8XGDCAuaZ%2BJEhmuMRJYsFPtc9tNm0SaZ3MC%2Fye%2BrcratQEDvLcX6Kh5BHXw912typRgwaw2yEWJp52uN9yl9F43R%2FvIvHa6NgWAuP%2BkGOS3DOdBCWlxYK49QVSPBPdysGrke4XH%2B94YK5l%2Bh0iZicZFwBWWP%2BMXalQpm1YaHmF0r7QZ59Oz5Q1xWi0syaqtXG3fD%2FKSzCidHw7CC8aHL5asHZAx881VjO8kedudXp0oz9QixMCS22jyl4MWfhBv5RJ4ynri1lXB23%2FuVU1tM8i72JIf43d8q4Qv32eNpyHqDWcX%2ByxOSVR97SojVDrdhVbJjZUWDIisW65wzWm9OakcoEUS2rAANcoqd5bIvDtR32oBbXXyuPQp3LB1kD8OZJNrG4%2F5syO%2BsBW3EMajFklz%2FdIk7f%2BauRIgpM%2FhXHMJ1Uod%2BeFMMrU710%2FqFTz8KTHkAe%2FIH3NeG8qAqBlpz%2FHaMnR00GhuruvPn7T8CydahmZNG1Cg9t53PlWO1sqfa%2Fsm7F99KrZgUlx70I%2FhecEXcvQ%2BOhtJiAZ8NxNtBP9ynQPILIqh1BB8YUzn32mpGxLwUZCG%2FtTazJ9P4deZVOn8%2BGPA7F5c69qaKyTtmqFTD%2B2sbEBjqkAT3YBicCf9rWTWf0ns3q3Fmypd2CPklWwTs2yp3MPa6LfjEj2ki8%2BjWucaKwnmYdNTmi7JpI4Oae70LlqjrzxfyouiGA2s9gzKy5Z33o2PWXjBE%2F5Vvgwp%2FKiPpWmDPIKDWyl0GVoPVD8XmvL%2B9%2BEe3Ze%2FYWSsD891IdtdhISEPdnwD9Me0R2bgk811B0SNaqtBiMQPzdwCj0g37FwzFWi7brI%2Bg&X-Amz-Signature=f705f31f702c8e9a3424a866ab4975fcf4969568cc5529d20d97aa71d31ddeaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
