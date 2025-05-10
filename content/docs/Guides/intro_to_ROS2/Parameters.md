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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6YC7CLO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDv4ZgAtHf8xytePYB42krWtRfAiXJTaa4hiXtJcVopkwIhAPu4VhurHVK3MbzYfiGz2%2BdJBR3GY8pEZCaKOBbv8indKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FICBLN7rp%2FJ2Q8Ccq3AMtalsHXImhIqfAuXLKvcKVm5voU20KuCW%2Bj7EfT%2BQKMQznINpvR2SL1iD9eZQRVjK2gij%2BBWsRSSyO%2FoBXpi2faxp20%2B3JnfZ%2FXW59Tyf8KpZxP0mgw4YsUZ12nHDJGH8jalvvgUK8zYKjjb%2F%2FO69VQCiKFlpyzCZ%2BjzJtkiz59jCNSdu%2B1r4KHQdpOcptqiW69fkvMIslwkzW6e6OG7cJE7L0hr2AMLkkha%2FVuc3SWBrw9jlLAAtC6BVxudRrCdYneM6c%2BHSjv5azxewgVTsPDG6Uuddfkd13CROIE3j4ctq9IYYBpdd%2FMQ%2BbBqXRBtmC3%2BRYDzHai9DJzHCqjTnr24fzlf0r6VOufVPsKv%2FlY4nif0llqXdHyHjoawFKNW0ZpPwFrnycFFEOJOg4dmkWqZFsP1YSexTf2GwpQtSIh6s051Pg5FOHeVRpVebd%2BHE8crXtSgNoLloLYS1LBoygV4YeSdLgfVb0vZnORm50qa1vr6IuCHKMBeXek682eFNXcpy937hGFdYM9C19JHLegSOohYeX1xOYiGsKAiwnj6GBoJ%2BScbW5V3vNevLWQ6wuh5Cc6iKmTAo4ofmQlNN4%2FuM32B9tLq2qjG1MP5Ktvav7IQ%2BItWPSzBN5VjDDiv%2FABjqkATyAlBmYkgSCy%2BEyFAhGsAeoeNp2UoLG5SaGRn6Q6f2Jd%2FTeJFZJXR%2B0TktIE1RToRi0EymY3LfMTK5bwTfjRlM2qsskXkqAavJ5eVF9LsE%2BaijUVP3C3dd15JadSGuK6XpEKHIRnbVV6ey6Q3%2FE6jR%2FdoCnIOcmp65QZA5WJhZxLTHH44xdk7vSNc2FcJIbkdyEcjL7riVrTFaOcmxwx5Lw86nF&X-Amz-Signature=a4d1d4220ddeec60b12be9ef72423e028b0c0f9ddde714f55cbd36d9aab0e683&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
