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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FVWYVM6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDDLwvLMnDcm7wA1%2BkzMCtY4RHZyg9vPxfe7Bc4inRwWQIhAI%2F7wIwBjFNoSz5t%2BIsbKJewqkLcsGd8tmfbP%2BJdlx0QKv8DCCIQABoMNjM3NDIzMTgzODA1IgwB0jO6NS70%2FoSAAV0q3APmTB0k1s1xFGe0jpUg8ysrEUsvC93aVwC%2FGHCCdWoAarmslPqfBInI1XBz9sipemNoQWVKo5wOc5Jbw%2F1T1WyKyj5rUMiTZ9sHqFY43cK7klu5dxBlx0OAVPpZJBsDdieUaNkJm4M5GIe8VA3jEbVz%2FCHf5X8fhZtzEwGybwF02n4H2LtGH4e%2BXGSOt9mmK2FRk6eGA%2F6tfYIH8lVM5m7oDDG56ZAu%2BNkx8K0OWruZPuFOY0FnoWPJoGbuH%2Fye2btskWuoVWCPU8GYcwVWKtcXibFDeJt%2BHfHIcstH4IH%2BDvdJWpTZvAmi7dYIwweckCGAA3sTHQHR9EyJGR1bP7qOStroSNYvV4BKTOuDCoxGi0YTHwy4ukGnnF4X9X1o6nMXBbQd8L7qgrhiwZSeBZJ%2Bb5%2Ba2Rm4SOevUwJN3nTmGU1%2FOAQ0lzGYeSBAkhf5pF4of1fJjkGi2TtGJcycW235wgP25w%2FA68JftQMx0E3G9qqlITa8XFsADxx%2FngdqvpI12TPbsZqNRUcWrgunqTYq60QKswRq%2BaEK%2Buh%2Fc%2FuF47ihaHtkAYLlzD9tisDo0O3%2BWAJ1G809Rgzxe%2BDLRQ6xDdZBzB4lR3d9igpgU46DIKXNbVAZzAwbJLP%2BqzCilr7JBjqkAXtHxIsUSCKunXCuZkE2VPefLApfrv6bYYtSICc5kKJ6rxUOq6TJjTS5JqZ94HI3m%2Fci2DG0Ay%2BQa19uLv7AlLpUNx0QmNzQ2tO14O9jJYDeRvEpFEeIkwtP5FbqQkf2c%2BaN%2BC29fU1gJCaL7PSdaYcCRb6nlKgXPUG6S0V781hC7N9I4oa3%2BErrcN50fcOHelx7RrnTgOOgq8r7Nz%2F%2FkpcBEHIa&X-Amz-Signature=9884edbed27a822ff2ff7eab93bd81335cd37b8d66d3e45994d1978d624c9e0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
