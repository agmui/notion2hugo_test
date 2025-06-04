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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLBZ6P2Y%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC%2BJsFTo%2FrfOWFIezSZ0kEsQTDzWMl4N5Qee5aKvLDW8gIhAJLWYMfOnFoqDPbJkHvwMoI%2Fs%2BtmXL8Uh0hdGw9dv7kvKv8DCDEQABoMNjM3NDIzMTgzODA1Igwj7gfdMpbCHxXrwwUq3AOnr77K6dMhGTQPqEKEnkEXc8IhMXETlCdWR2tI6d7dXN3pTqgU%2BixbcGQVd8Y2FhtPzSFXR%2BfmQCeIPGA1HpGBTUNM%2FCQBzx95ka0rFaQZyA3EWRx5l5NotBqWLRzpmT9vxaqxfPSnhatbbXYAWur3FBvh5MKC%2BFK2SMy0i2ckneHCc%2BeqB9yL6MfswBHv9x59i5Jg9eEXlsGlzpyk4zgHv7mOLnR7RH8mq4zKE0%2BhOvBPNAA9N8yuyaVKyk4%2BJhAsDoFTb02BRU43Ydz3%2B6%2F0lkMWRwu%2FNrDiIODrDDjUmgzdg5wXDLN5jjcmnnKsgZkMzB3rhKQZjG0dO7v4davB58B0a4wH7BNsmb7NBF%2FJtO4mEzEz1PdzED0rWFtTrursQcAOHeJAd6otxg%2BhU05w0krpdOVC6xCGlGYfIhlKgOl8kmChf61rAOFu1NA4RDdqNIZV%2BybAMzqQv6NkSGs5b8CFR%2BxIwP6%2Fg54FRpXp3uZiNNfF%2FDPejEfOEs07ZDSqYw0GWinolFuxnOB7wlZtaZL2q4UG7D7%2BhhYgFa%2BDwfiKf0wfyDZgVnodobghU36prNpQb8Q97LMJs89s1ATfOAUhHabK0KxOYHfAjKHm3ZuVc4wY668tu%2F9ynTDj3oHCBjqkAV0cHggBXpZpunfyaz2%2F3%2B8kU9CPF%2BH4e9KP7h4LmdrfGZ25yDJ%2FTHHV79R9wOteKUt%2B100gVzS5Kz1CIAuAqF9MEy%2BvHJwKVzo9d3BQZGyhyhFSB%2Bz5i6HWgmoG%2FQCdIJbjT40yzRq7xa4vxVXR%2FoX64BfuomSIpPazJxTgV4eEsmlAOWM3%2FyDS4Hnq4LjxvVkf7y3dHds2VQ1uEg3%2FoWbkkXCv&X-Amz-Signature=42728e325b810bba9d8f920d0ea79cfb17ef083d0b69b967ba3911bd17405ec1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
