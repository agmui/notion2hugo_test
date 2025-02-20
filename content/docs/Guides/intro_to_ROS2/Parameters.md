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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BBK7EPL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZbPWM%2Fj9DE0f8eV3tevMC1jD%2Fpkep2RSY921ctQyiegIhAOjnyHCwHc37KPXwlF%2FnKyBKKShZLqwwzCJrc5yLEcarKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM8og5nDdhM4WcSd0q3AMNzldSG8WvA%2FZkoisd6HXxyaf30jWPf0pAM91vAhLJ5LjMR09QOk%2FQOC0XPO4eiApQlPy1ZswUQHFfYCcDIPZBWtvwi6RrgOZMfL9wRbpDG2czUKrNaYwTFxSYZ8X45XP2zgSa3mIiSHvd3QV81L4LENZgtPiFzFhyX0RM9rTSbaRQG%2FeEUawUHqUO3bzsRThbyeSg7lsE45j9D4dCiixzPNA1qFPeeR3no%2BiMb4RB0wemePhFpJQg73hCY15Yp9Cv1zswDmczZ1ineEH9XSZZrcruQITSzaGDQ3Ipwy8x5QB8AEBr9CzB3Q%2BsxYkqOmIrDDyrQ7hO%2FAchthe8aBqgEsJsPWcT2Zu3eGgaAcKMYFECh9JnSiNInr39vHoABf99GqKHvvlUibokjmumY%2FnfB1a8VVfY%2Bym4cQslmN8znp4CznI70v15nv6zPtq6P%2B2mNuy5aCFsymoTzqhkf0Yi4DE9gmDkeaZIJZI3mbiieP%2BXd6jxMJENkAhSVGoYtRlf6A6ha5X4tY4HuVmrUJLCo6pjPgq4WIG%2FXAnDOMdOAf%2BFDumJfLx%2B1Yl3ZQch8q0%2BXInduL9%2BCu8wAkG%2FVVhHCsdT608bM2YAAH8nt%2F99UmX0UmJGeHWa1ruH%2BjDAptq9BjqkAcR48P6vrUi6rNg9ycSz3NnIu1w2k60dCmLWVAJqyV1Mq%2FPRv%2B1WzaZiYsM6r9K%2FlxgK%2F%2B%2FJDxD4rdXRc4I%2BUOn5pMg2zh%2B9RTK08I0bs4b1wF6wcTrRd4DSoXjyb%2FzcTO7JXOr3XLqPyDDAlmYD83ueR2FMr88yiqH7o7K4jN4MfdrpOH8SY0w2ef6ufYo3QpYsxo53yQjdbzzXp7RvPA8FlAoK&X-Amz-Signature=7db49f4dcdb328171c7cd7a1160553bb0bb9a03f890b64d9776ce2dcc9843b8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
