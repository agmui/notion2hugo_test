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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIS5HRMR%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDWAKz3n23FM3HaRe57r7D553HpvssvzbzvF1J9GRbMyAIgOXienyfZip2c6ZbEX1vJ5gO2p3DlV6PZQwKKxfKESyoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDU7e03dLmbu0LLnyircAwOB4WT3MPF8tcA6TTjJUMhbNCG0%2FMIyBJlmmHxQ%2FcAsYsCH981yxoYhmUBMhxGz0SlXqjqxd3EIy5KTnt%2BNoIz9wCBuImGIod8zUWDby9SOsillYyUDYwdNqAv6fKUr%2Bp6PuBALZYntfVvViqOa26fPGfHMDF1PSskiRzJYQw4xIRsRHjJIWxUATtBbYcBBpk%2B4Hac99lBPUs7ea9gl2rdZhTap%2FWjCf7bIYuABpAqoCZs4dz08VY%2FW4Z5IarPhwV485qnuuyY68Ubl0jvb6QfPRNTs2dkXpgltRTL3%2BPQrEI%2FcQsi80LvanqhpFXsrHNZQ6Xk2Q3LxKz9mQEWP4cr8m2wuIPVxgSmRy7lL%2BZd9lm2rnNXZrKRTaI9nsIi6i%2F03zerzv1vYeK4hQFmx3Zu4a3P9YUR6X0O%2BMB8gBHtQwwTV%2BBAn4fDUUcffCUMuJeySYfHksYZCVpT9LvSjPUsWRxkTXZNhv2DdwbcLAD9ek6YpYCRk6EcRzMiIs6ysmvIDh3LYBhtCC2nIrXWlzQ9Q4CxWQb0Ur%2BzNM2b%2BIQKXZwqc0ZJ6xmg1zpwEvw5diZBMZnPEvfZtH0B0BFDFY0fpjv9EiQdyOcEad2T3uO0e9j1v%2FOS4qOw%2FSogWMJP2zb0GOqUBCVQ884kYIAPLUxD3kelDtpSR6vcwAhaRuJwT64qvjIYqdzoem2JR4WojXfOc84cCdV33NhDGD86pLrrh8%2FLJGhjShocUKBJ1SwYo%2FJ0%2FFDDtKKgC%2FO2J8eeQ26nX%2B8yM%2BBy8s5J3NCQDCCQnGYEm0EMo7%2FTp8T98oYjiap49XGtPMKEZ9CKgeAOBG8WZeo3OSXY6ms1UKTJHuq0tsJZt90bAA%2B%2Bq&X-Amz-Signature=bfb7edb9f53bb8e75bfcb03bb58d80ffe645636085f9773de6d33ec6baa14528&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
