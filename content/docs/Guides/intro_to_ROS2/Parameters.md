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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3HUEECH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDzc2ek%2BGN1%2F6YnouJo4xhNAwubiV223LtZLpjg5A8WdAiEA2H8H2YmtfnJHMKDqxtyo8e8hkQMI1EF8WDAt8%2FpyOcMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKFtBQyHUhjWGwqnTSrcAzNpDSE9ezrhGy9sIaFGL3Ts7Vb4cg8XwtRDO%2F%2FNXJU3waI%2BvZFaMj6s1scT9IZWgghZ2j16apdzA29tmq6AdtrpQLC0Sgdx6lJS4Oqs%2BgYldr4aIttI4cYE9XXYNxAtmwz5m1hWq17r1Z%2FQ9k4LjUsLICe12Q%2BZdic42WNjBM6Tiu4T%2B3CR1Fo3lAYouIkQG5%2FiuI49%2FzxM09ehmUVFAejCQ8z4vlwngaSxvLNcSCkgE54NI%2F2XBIx9z0L%2FA3cyLNF0GbWIYszBU243X4sBtzYU%2F%2BSc%2FrnldWqO231rQeL6LDw8p8cUsEb3wjx2clp5ecmz8DJgNBSfWpidLyMbihGwlJAh8bj5tvSbNRl%2F8afX9Ye9lolasFU2%2Bcj3HljdW5LLQNF41u898qgPicwddgD2cTOtx1e%2BLmTB4mPgtwU1kwtqRJNZEI6fTHNe3aAX873DQGjkHsygRv3YqVkJRI56BnjMKeCF8WioOb5BZEFvVFYBpQf0w61Jz870WUtDuWWu3uBLDcWgX%2B%2BEYIUmlt%2FggjILQiJ3L4BBnWCSD%2BcW12eI6i82oUCMO5XMlW4hWmJal0CwcbhGBEhTYa2OG9mhoInkUvmpHp24dDup9uZp0kNs5%2BOocGRAGkEbMNvHmL0GOqUBPgrcHgZCAQ6SdI7MrgP8U8Ijiu0z8wseXAtFTY5mu4Kb3aBPTk3vkORwFtce5s%2BP9rS9oj%2FuULPA251iTu%2BlyJ8xPKVOufj3bibPgMJ69baQpUf3XVednXh3BlGdrXL5xQ0ExWK9iijXx2VedKv%2B%2FA7rf9DUDmRo%2F5tz1Az2k3KzSoBZ185Mp54ndR8%2B6y4aV53w27wUrVUcjvpqzIRgaurXHlDN&X-Amz-Signature=d89b1cdf70af9a368f1a8031673fafdc0d9194892fef95445ac1bd0b53b38528&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
