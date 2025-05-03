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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y6DDR4N%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDyUUYnmX4GYkFTYWN7V7dLrjhqFyJtI0aTEsmfkzeNqwIgVtI10io9Rveh1t07jf7EYkbwivvKMw1bpU4YDGu7BRAqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsCVPSqSYTwpeE3VCrcAzsleG2NcKw46Hvt8sbHUq0xrve%2Be5wxcsBHxsT5qtf3cHk6e3osZ5QNgt4h5SyMpZ45WwMcpeqOQKB%2B79pnuI7eHRMUsucFD56OmzKxkVzerssBSwaXHswQQeCdwOtSChRribGh1aDEBY5EmD02AnXX32dfsToIKoTLd5Hck%2FnykTEh%2B0CHdSFrauAde5sY7070Rfyd7x6BlpH3B4B%2F5eHRQBe%2Fjx4eY8uOgq6xaO%2Fhsc98wpdCWQoXSNoOYc36wk%2BBcsE%2FmNIkh9%2BxZBFfYdVxE34hqnoVIt1RWC6%2F5kNeje8IqepPG%2FqoC5YLvZtK%2BnGkq8US9HKDDnwpONFbWiFRpAksnboDlewElqeOj9hm%2FZ0KS4yADpMK9BCaICjvZKAclE5dwjvIwe9C6cJJL1QbLUnJG9L9i2nw%2BFG0hlvQKP93%2B95YoCzqvA6BxFi5HaFH06BLU2dMc%2Bdsoat%2FhZ%2BfHJGFhyjYqE3f6DE6zAP5%2FNn9saV9mpaVF%2FXuoDFtG9PxNDoxwUQFoIkQiYCNpLcDIIi2fI3ShYPFZDM2I%2BUmiQLPWbs%2BM93QGXAhDM%2B1UaTBv%2BjCNko7%2FHc8Ku%2F1JxB9Jzhw5GZ55vgHNKMEkP9hJyL9XizjYASd79M%2FMIu02sAGOqUBVcNhsbjDEU9gJcE%2FWWOKBEW5qopuujBkrXs2x3mvZLXWJf6NdvFZpQmw1y2AARw6b%2BqW%2BA5faIhVdwTJu1c2nfLZ9VDoxsEKTR%2B%2BdkV0oC2k7Soq2mb%2BjC4mrFSciFtbNtB5%2Bjb3wASl%2Bx14nISxlYH8t7h7oDZJrC2ADS57rpeI7C%2BIGDhbQnKhpFlLyOYAPuJdncNea2YPdyvRx5iUcKUCJnPk&X-Amz-Signature=c9310a0e72449cb8105a3b885b7679f17170dc20e316c5c021cf2cfd6b375a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
