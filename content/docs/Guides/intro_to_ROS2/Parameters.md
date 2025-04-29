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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RM6HPFZ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXlbu86R2AS0FbvVQyMuc5XL3h%2F9rTWS5e4yw%2F1K4OPwIgIbQcWZJgFwhhs6YVz6SVigha3umrzPuEX4e9WDG%2BsugqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbcigKkKPFd%2FULB%2FircA%2FbiFLqjHoAjZdk2%2FZpxyv6HXKtgCs79ECxUGZQj71R6e1yJg2IDFTxbbhqhE6X9jw7t%2F5AOCJLYCVVFIiQ3TPXakvUsTzJ240wAbp5JUIAbjiERZHdEnpOhlBAURqTVhXJ9K%2B%2FuM4rSvPNJj9adygvv2TNnDH34TVrdsSAAvRFZIcZr0s9UwvNGYCIGmwAshQ8necYeDP1DNErWXZddC8bAC3DJQZaOH7PcgeuHkv7Cjp%2FdV76Gg4nnaivkP%2BNXopOnmRUtrsE26onKADm2NFBbEIP6L2OsmrlX5suisHeGoc%2B4AkyCpJ1ihkk3LA7dmi%2BZcWgXCGmwxx%2FXtIjnsTo%2BQ5Dlw8jFKvCvCEycPN6yFS4HMykbMJ2I3rTOBVNPrfqfwZi9bk5USnUqjEmnl1UDEnxekhUgFqkwuPFXG0s9KrG6b8wUUgIWXJWMmHwgEwDtmKpKzUtQCzZ4Irmffw3IOfATVTJvBwuv%2F6OzeOBgG0qbbzRrq8P5LqzhhYZc6OfBxMx97RY0AryTuSxwDFT1%2F0%2FB4fRFkgyOdX1n0owk%2B5S0O9gTbOyTq6uaWfDTZzDs2ckT06PGI5MuQ4h%2F2Vfb6swWnDDqI1pcqXwBBLQErs5QJmUzuzxIvKBwMKS%2FwMAGOqUBWUQ0r9%2BCv%2Ffhp%2BONTyOF6HoMZemkXEtfdS1IHtMSFd6ZUWAKQrkyzqg8YawPadmfA32N4vzPrlbx9cjDO8mLFU7ycUS1BJ87phmWlS1YsKD912XV2OXJA%2FDlK%2BclTX5OAKj0xlwUd5yjRyJ6LaKm3EVh0jKTz1YP0D0Rn8isBC3D39TZUXGBgFBZ7iNDHQUJZmQTFVs6B9%2FQT%2BjN60aBazWETF%2BK&X-Amz-Signature=3903089b689005afdba7ab6bc186f21e16d859d8b75fd6e167c62576480cfec5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
