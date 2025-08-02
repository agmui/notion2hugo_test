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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667EGOKAD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFzrOtftSKNRxflR8ZM6FLeHLXTx4QqxcX6TLf1TAGYAiALspxMPkhRgJzI8ZbCK4MQRTMl0fnM6acKmjqN8FOmeSqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkDNeg5KP0da4CvXaKtwDh7H8oRzGi%2BTj02uvPwNsV7rE8lRv3PzvUGntKW6zPRkN%2F5%2Fp7LCAYVADH8ex0b1IuyHu9Pq%2B4E1CKeiruA15IrXJ7U5TNQXEyZoClCiRnr8A57WybMlkVLLjbgTOrlA51VjvjrAEinq4SapkGFkX9nj5QcQ2Ujd7FwprXmoq%2BAcH2bGT8VQA29fAg%2BwkMNSRGiZkn6RHVvWExrEh352D6ugE0HkqiUOpGfuIP66ysJ%2Fpwud1XHhm5PictRvdWK%2FFLU%2BNurMimhUYJGqe5UOp69ifkDIF0Yi0WB8wFCrw0TNRcmybJ8caBpLetj7RgrYx6TO8kz9HJcgxoLToGYBDI1bEcQYrPaKFUF%2BTU%2FqKYr%2Bhbll8vg6mMwLaljJz4vd7U%2FQqJYgdjb%2BWEf4jYqrnP50nTfsvNpJdV%2FbdQJvT87gyUqiHf0cooUG3L3H1%2BXsJmQzYLbyMm6anArR7193yyfuUUdQbcw1JGVw3DHVOlaM%2F4QPDOUz6VDTEcw%2FW0wZ8sjX33Oq3%2Bb%2Bjt%2FcKafptJ0%2Bfa8eEiTLwqHgD4pKMl3p38HmiOmRTUY9oBcoL4FG6zehRUgmr6q2bmClRdDdrUmZlOkbWV0%2Bzi8CAzQC2kkyonGtSVjvuBVZqGeQw7Pa1xAY6pgGvkp%2FMV5SYPKP%2FyHFeWtq9f%2FNH0j81YV8In6GAP%2FBrYwK5KXsqLS8EanzopdZvy5LmdWtoKjTWh3HpxFrdMvuCpvgGiWg6C6dZh9BVGpLn%2FYNMJ9pOF4p2TlbZ8rDphZybzvaxs2MJ%2B7kpzSBFJxYJOIda2ugt4fSunVxGcd9u5cNBirYPrjpZAftmxvpkUezYZfoI7KjWIOqazDZX3HN6D92gxcl8&X-Amz-Signature=0586499373594ead28b90d6dee276492b3c3a2d2c1dd5cc7141f0a8e0875a09f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
