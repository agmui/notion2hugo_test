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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47KDDA6%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIEpo%2FSWu1PDfg4h9O%2B8ddyqx5J0J0S8vud7C%2Ffts1N1uAiEAu5Ro1rTQAn%2B6r%2B6bupSHBHfuvbnJTRjF99AGy0%2F2WZ8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMYyhI1ZrUWtpoSgCrcA6qOse7UkM3dOg4ZiL9yLL5ZstyHk9xRcLXPxEzJCYWjpBjtCOjZg%2BZAHa1TyYB2NHmOovyP3VMhMfhOTJECuFwglEb3E3vidVhfzrLdwEAJGXQLF4CSueD%2FdtUxsCzX7qS7G3lLEgWiL9OtQ2Nk%2BaoO3IcYVZYxhYBU%2BZhBhBgSM5ARJlBX3Y0dv7iMkksi1CKe030BKZZ5huwMmfFZJ%2B6wo%2Fz%2BCUWEuGTsJh8qAWf%2BDxburatFMgg%2FlJCled%2BVW0rzRPghWIQW2l1XQ34N%2BRBZHSp9qGgaxKk9b%2FWWT6H%2F5JtqbT%2BnT9tkm7dE1NXnitsZ3KktgRXGuWCQcl1n4tnqg%2FWC2sQIJRIIn2MdoKlfykGS7Z4DpNC0d92OJsiJ71bLznUNgTlHX8lHsgv2htHVLeNsw87aUNah8lDnZz7z2HCbK0TkRHnJ2GQFUd%2FLka0BryRAvU%2FZIrEsky%2FtAon8PD5SJjJ3wVdwmLQOw1ZSY6nOllZF%2Fyf1L5xUpU%2B2RkPF31x1EtYa4P1DurKvogT8s%2BsqWk2IbNdGMbqeaKE%2BO2C5M4prW7yegxn5gT6D7OOY067oI9jPmM5DiuclWY20HssSdb4JbGECRMaS9EsPIGcpN8FqTK2OZ3yMMLK0%2Bs8GOqUBx4Yhpo7iGlEpntk%2FnqOfDBLnNg7ZEAAIjt%2FsbJA9tDb5%2BzVJUzvS%2FxDh2Npp1ov9hMWYoUL1jQNXmkbnW6pC6zBTQbzIyYEW7MJH%2FNrUaFXPjtvtsPnSfD10UfkEmOtXLP3bfbWOhCIgt0k2UNpoXjHQ9ySR55Wj3KD5C%2FNtkfgV1SXwA6sCXCGKKpai8DxS4fXu96qpT4tLv8GLmitIxV3ddS0C&X-Amz-Signature=bb50edfc0248a2962a058c558a0ab8a9b698f2f4fb357ec9ea5953a8862439d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
