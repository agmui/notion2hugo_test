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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653LE5T4S%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGkcZidG81n98yQVmFXxjtfrRTggLs0oaF7jWzKriBSOAiA7cJkasRwAwyh9JI9H7krSUc1kzhZ5dXZ8MPjhZ94R5SqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJD%2Fqf%2FyH1rQzr4LMKtwDgeLhMQs9vK8HMvjG6GriB5Bgg31rYYxyO%2BjB%2B2%2BDdeSP%2FN84v5awYN9Y%2Flk4yN7GFXqVSxFpPKdMcqORgkQRpzRfscTulQEnp%2BxBkKUy0dZkYckBBXTrnpJgr9vqyDuiTeGpj%2F8jhP6Im%2B7iZPel8Zz%2F%2BuQ7zqSQrPZVahvNnylkF2aUQUq3UlYlglBEJhn2T7%2BsrR7cyQ1jtPTgsLlzX0MdCB3INDWqJzQD2BaMMzxXPFNGSdo93rtT5kmIgd5CuZNTWEOTdPk67l%2BPhFTNFZGRjZ5VoQl7LqwE%2BQ3BrLLIRH59Rd55oDNJB%2BHAnYTAh5tyqO40DRxs%2FXNETh%2B7S%2Bkx8JGhDRuZGBPn5pJu7DtVzxXO7VG7OT%2FkSqc4Lfh8YsdVcAYepd1%2Fca9SpO92dmGL12gzYjKJMykZDPGvFJtwIQl7SVXlNFx%2Bo7bUIOzUOJvwwTZAI1FkfRiU1Xb9e1PArb794nJVjE%2BoebntxB%2BrKi5q%2Fn0G1maLb7K2Pms3NS76ovSUGeuFSQFCjhFbYEBRrhWSAzIk9fVowrHzGm%2BuZGgvn4BbXFt5GLpmrJx3dCBdorBim0k86QWwXZsafR0EvzfPDia9hW7CCLlrCdjvf6uZRmRJBW8hgvUwu%2FaOvgY6pgH3gSTUlMZ9biPo%2BSUSoHAc2qIhOFi2nK6mywKwirR%2BfiRQ7u0s5qOVy%2FaTwejkNnDIIJTfWZotDlRRdOyrMrn4yv83FPu%2FWUVkimLTv1UrbyYKT6SrhW%2FTtc4%2B4kDNhS8PrXElL8POK%2FhXxWGii9cL%2FjGtyI2cuZV6MT1411L4gGzkXS95TwW6kWPKLj9gjihzG%2Bv9936IXTUqTTCmqTeITpBtmxpS&X-Amz-Signature=eef075b38228ecf2134a656fd1ebd834049bb729c3ec8d933d507cc23606b151&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
