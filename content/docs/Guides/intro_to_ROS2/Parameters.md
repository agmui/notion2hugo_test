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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LGXCHQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCpls4f7DEcj%2B%2FLySybhR2%2FN2n%2BO8i7xV5UT8wN6oKJFAIhAM%2FRsZg2doOxpZZpE3WB8vvUampBX4jTlKuLHbS6oi9OKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0oQqZdx%2FyqsmvsdUq3AMJNFAeulhxdSwPo7Ay6Ar8rVpk6%2BYPyn3LlsTCU%2FPx5bxxCBJ6zr3wsZDzGSX%2B%2FM4ZtvoniJbKlvvv3ppoJz7xVcfB43Y3m71O1jDd0b027y0pldx6vu5tPeCIt7TwEpuc4hoDwz%2FUph0PjzR2g9XZJ4pr6wnfivD0pPVgm%2Fy3ZIODLtmPeuhYWNyGHqTH7tIDP%2F8UbZczale4ieEWm2f240A62FsVH7fOG8MfK6TEU7kSWjRw9VRRiUhVyolZpJzbo2KMhwxIBhAOtH%2FzfbDgI7Jp%2FFMT2yZpuEhlqlmpU6IXNlB7euwKMqY%2B2ogpLh6BYVvlEbn5%2BqEPSsH0G8hdOBKIIOx7EhDiygc4nJ%2FA7RENdqJ3C3h3TrR4XP02UH5PBdTq0ddCrE1iwXOZZOcXVaANTdulICF2Vy%2F%2B9dPT36KXEUJOpp%2FLOQRgPfInnt81U0bRBXdCf45aRUUcfFxquQy3AcqQYonNqjS5zYwDnBSJGuEVpCdcnA3Qy0N3VEqbsoB1xWOs7oJaVJqNA54WlWzkR%2FRs7zIh18ntAkxu5TrQ3f9ATd6ZYmx77bK6g1ZJsOAEIodSj9zkuVOoln8yyMwgxd9LcnMZFRgfiHlpPD2jrIYUlOeta4zHITCzup%2FEBjqkAZJYVJ%2FLhIGVOfr%2Fg4cnMHOhO2Kj%2FwuwPX66A9kRsGc8D6GfNlKdXr3Crz9Ny0Jx0FerCgctjcDepFzBA%2ByQUzlIPDzvyJOqD9B6MSDwF3NONFe4lSAWKwAGfsEgEl85qyZH9j6N8nE1F8y7Z1mJIfnVyROkwurOsyQPxADuac2%2Fir2bQeVIxv0tgDkfgx6wbvBmHGAQdlMyFJ%2Bg%2FXWoO2TMxZ60&X-Amz-Signature=619fa23ffc2d6fa599ace21fe286de073d5d28b4f802d97e3a831af32a9886d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
