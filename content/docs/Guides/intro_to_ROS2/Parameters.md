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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWXI7AZO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSChWb95wJo173EAxOUdVq9oP2UI2QiraFjeCqoxWD2gIhAJYaqGWZNAvtrwAqIgLG7UjO8OcgzP0UGL05%2BRs2th8sKv8DCEIQABoMNjM3NDIzMTgzODA1IgyvCERIye7r2xzqgMkq3ANmTUU%2FPCFyxuL682CSriFxn1aXkDxUVRVp%2Biha98duBmDFxrqohvcStRxVdJ3srJh034rFaAecTB%2Ftwx996aYMVeWXDf6vE9DLbgmx1Dj34Ka5orjrUO6iTow8W91Kt4kVzISLmttYLX2N3zWCvYv%2FcTsFcMd6xVvoc8IEi7v5Y6YDTjF%2FhQZtMvhb70sEgesyIIHmU9j4xvqllXx6FG9zPB%2FI4O6%2FJVlsfeC6XTJetNTHNPP%2FxtSLKqeRnepGI7eqPeRI3vpGjL%2BHA6zfHSbAZ56SHRO15LHtl%2BlWj96LmDO8lTRqyoasBLuB1fE6%2BVj2vgDyNbB4OgrrK1obRbpzah4lGNQlvX6qLj54XCczYT1W4GmWdsaYTsSIfJ61pPUal3iPlEPlObdzEkvi6KsTg3HVBnhnxdrY3TW7UOHLd4t4MAJMlyBu5%2FS%2BCzEZ0IQiGeRIzh6HaFbCg8WhWVyZDm7jVxgPEosFzGD6S2fPv5apPWfp6VHM3ug4%2BxaR%2FMsUVyBLOAc%2F93jhCf3cneakM40WI4qacmEap6ILd%2F6dnTuUeUtNu01ZTfSMpBQv3YCGZwS9JtEpCMWfGsxisbczyZKbJBa%2BqiQurfsUhw0MtTgCUOXNGN6lUbI2NjCyzt%2B%2BBjqkAQn%2FflKi7pKdQykYL%2BWL%2Fo1T5okPG1twLybdzO%2Bl4wP0W8RPUaGTylf6yS7REksxG%2BPRC0rv6D462K%2BkhglUZBtgckOwpZ3ARzRC2Jcn8lJ4geOAJ4tM7qjNkYw7Jb5%2B%2BdtR%2Beh02QcewAR0%2F71K2Q74Pzr8iztep40LfZZlq4MEenOQufXsQe%2FikeGIsq2yHf3N5WSlujLeHS6KR9EY1GTUKnng&X-Amz-Signature=bec611d1a0aa11e59bfc2c425b50498cb10310f1f2e8fe746fb22fb1e57d4245&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
