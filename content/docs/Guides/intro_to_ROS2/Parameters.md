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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGIHBVV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQC7DdZv7e5Pu58VWXvAMEoeJmJxbVPS83%2B2oHCj36W1igIgboXrEbKwS7X55OfoUlhUKoXgI7CLSVg1nnMA2R5ZSpoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpwjdLxN4qQDbqPCCrcA8qLky7HQOKPQDOok5zSnxzB0b62iFL5T5DEqDHoJ6qE%2FVjXL7Q%2FWnQyP8lkpQLmGnWnHKBvfmI2axav7G21kyffz%2FDKrT0XiejPcKhDhk3EpeFlCq4hSAJooWcb8FDJgMhiBMI%2BF8PkeyRbifXMpTNMJJ82hvYbuWRk5pUlK3%2F2CCl5aJ0XqYykGrcAEzxyvWmAjmHZSXRKIKJ1w6ntTbRyyYjMbIzOONR%2B9sigww43PcONSzE8ZSk5nKlSwX3ZNMWyxqMVsTraD11ZeCLxpvs5E9REhv42sf7Bwjb%2BuPVOTjWbtFDjcF0pUlsQbERdwN2uA7Qnv8RVjoUZMPS83dMu2%2FAye1m%2FsPbRWmzbeBdpXvrBibnF5DcI9gxK7O41gRCssN6JpnD98LnKSIiXVX2z8UdnVBfbO8U%2BFx0NpaaDFDQgy%2FB%2Blkiao1aBJw4zGFT2TNPA8SPupWJ3WhsW%2FIDT5hjQOf%2F6Tw9Urv2q2EGsviXAj2A9CTPW04x8FGqpbSlqlVCbqayKIMVLDWjbpwzVHros5HE9o5Wxdih4nw4Brym%2FQAgd9cDKnQdP8whxXqmkityViN6HR3Uw5z%2B4J0HHXkE88bN7DuXjF2Mvx%2FdkDS8gpFCg4QFKEEgTMNHX9MEGOqUBIkWlELK%2FmDEK97gnYN4PeLvQXvnIuZerPErJkxmmfhRlkqP306o6KwVlKdi5uGE8C%2BeO8p5MJlO%2By53Q0XU91Lcz98mnzcpReccZQNO8t9ntaS3MDa%2FeEkCiwqprJfd%2FMXgaQi1kRNPb5%2FA5tgvxYkH75zTHmOl714Qondp1nfPeAjIMf8KTrmvTrtTnHBqaxKUh1O1RlaRA7IChYP36uhiS6mAj&X-Amz-Signature=04925de86e327ce8f03922bee721887d028e69e9ac407ee97013d9fedd7b2240&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
