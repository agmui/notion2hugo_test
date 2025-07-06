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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLUE4VCX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHzTQKAubhVinE0qPDU%2Fg0NunkrKJfVr98aT%2Bj7lLqZ6AiA8Lr4OdBRRjgcahjb7HoXcQmwdHhaVG5LfdQFvO27BcSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMCQtKnmHmgRMVo0oxKtwDaxUH92gznNPEgwC1SwoA4pZAE9Y%2BwybHz7uSGnyeStkzK2neFbXB8Btc38w9DsddhN%2FJunROkSBCP9faT9Gk%2BSqc%2ByUFgunaSZ%2FxmwYmPAp42%2FqNThvvokJuPojUCW5delz5st1Ck4qoXXtNBOuHaaZ7adVjqMoIpgmWYSBc5qBZVaYsbi5NJ%2F5Xp89e5p5c3xUFLP31KSj8kB7YUXnEqttjIlHQeOtURU4mcLKoQcrGci5%2BhbwkH3ug8AX8quxNDub8HYjLNpbiEMEpH%2BNpCbGhb%2BBF411v%2FcQj55eHuTCKJ5CG7UNwPWK3cRX3J2XD%2Bv91oYPmdEuTjxFkujMPjJLzTMtpyvIPo3iGV%2BE7%2Fhiwk7Pa0yPNlJLF%2Fgk4joikgVIu62BUChCboI%2BjEhIbHss05eai3yz7lXLkkdL7SnQ1oo1iRcsafBh8tcPKhnp6quTHa1f98U0%2BfAMji1UpkONtkzvxUMWgZhucvKI2cG%2BaZEf5CjKAWIga8iaBpKe6hgipoxxjWZi5N4vdlnhn8RO4JPufekpd3jA9TVJRV5Q7Be4Z3KAQB4cxxo7s1QuDHtr%2F9x6nXknN3KS7EEcYp3Pg5BxRLw70870ki7v5IIqGBmCWJWAmMY7ORJEwqq%2BowwY6pgH%2BuKvDIErUf2ZLFpbMo9BAf2tBy%2F%2BILZdHF0%2FyPM%2Bq2oIpBZRmaabJTNdVjzhL5E7ZY9prX7gqN3Cg5VwAEAGSfXD9NrIOP5TiIov5mfTIGWeH4OqIomnGUABV3888ZDhhKDV7UVNumR27GYo2gvsW3LKPI0D0KWm9Tnw27We7ZKtm7sfIoxSG6KuLvWzth1YACf6NlNdE9EOWfJsKckr4Mj7CX4iX&X-Amz-Signature=8f72e120494bbb858f27809d2397d733455a5b24c4c2b3236a6270cea31bf4d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
