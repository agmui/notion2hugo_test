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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJFVXREK%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCOBkfSHNS%2BwUsICd2unN9IQT4EUfNkmkvlrv0KjOPlcwIhALrKIQDvAVfWAIK%2B26q3DyYMsUe1aXj7hI7dsmJiDZ9RKv8DCHkQABoMNjM3NDIzMTgzODA1IgxyE9iREajJyY4s0wIq3AMii%2F0LWHycPdwXnkyoZ5XU89si%2BicCH5tQg4FQLmmfI73135AbBCwpQBjln1mGNfD6aabbiRBk6WNcIqpew2c6s5URIQ%2B%2BJPgs01y1GGnOiCgvpW8ohCyqWprRBOO%2FJrNAMB2JnZu8hoOqAzasVHCWGSjJ4ea%2FlbRWrcu%2Bccy5IlKuEHXL5I7eKNMhGjTqay6TbLFb4Xb7Grk7oeYcAmUyhXJCO%2FwS1DtiSNzYTXKj2Txk0AU99gylO9GNiAYJDFFcorzsELknJwTA%2FPZHUcRxwG9R7iz3PZM4%2F%2FkoWtAozMuXsPXOpNR8mJUeVBvINDgtt38Fa127jOYurJ4OvKzIZGXd%2BnfAv1A4aiHHQGP%2BoZuWO71KSTyHP1xJOOAWSsJGXazGZx2wySRYYH7Ujf%2FbPxZ9VBWjrChHczHOCbDrOzuMje2KOiVXxniAYsOwXTIayWuIGUUbsypr9BAMhRi6eahhmn1WDPC4IN%2FjLYe%2FZKjmZpm5Y9O%2BJFAqP%2FSCl%2FnloyJrYHGFP7GQV6yvQHXw3M9RD5SpM3G5TPuR4RSOAuVPtadVtPRubtWMCV53Ag1vRMEVl22Lv1F45nMKaJo%2FO3W%2BjIDIZQHP2mf%2BWO0KK99O62AoSPbKdVhvwDDE4Zi9BjqkAXW4BMuBuAcR4faBxqivWUVWApFkfZyLwJnV45SBOuM2sAnN9PFjx4Yie0cH%2BuTAV%2FX2UxLJpshuc6%2FCdsm9Cmt1qppkTRXT1PbK%2Fp2dNmcLT08xHPhJupk2P566Ne4puaoFtlI2IyU1oETRC%2B26ieqpBn2WHJh%2Fx%2BRO3BCilKIp7bDvjPSauH9MbZk41k9y5yA0rdU8X%2F9Q3lv8nfgiNscwOynU&X-Amz-Signature=44280c0ca247b3368da9df9e0d064feb4b4e55ede822914be84e1ea036fe86aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
