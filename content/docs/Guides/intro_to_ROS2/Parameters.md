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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWBMOYH%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BPN2r%2FKc05DsWwjBN30epXLvHVjN%2F4DxNFVGhc0t%2FfAIgSLL2yOaAjeoxeOyivj%2FB5zUpKNWsbllX5Hg5kH9foukqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BCmPwAfF9pB%2BL0uyrcA4qOTLlNmLBxHs%2BE2jHXp3jQXvHrEc9a0jXz%2Fz14G09InP7S12VWIp8UxD6BhNCBlejLL%2BMSZc3ukgw5fmyvgCwGDRCKMmt5abNqFcyACp0Bct%2FWUNTEf3xHSydrqsxhRjusHMguikowr3CNKL9TJWSaXfSIvoEagKSFjt7yga9S6FeEQ8HWWlL%2FhiVYFBn4Rlx53HINKpUkGtB%2Bj6yd8tCYYvw8f3CFIQuG6u8oK3nzaNAzPmwlkdeuR3m41F%2BrGN8TTAgVPoUe4gOtZTP%2FvCCVvp9S6LrON0Lxdxu4xwYYT5ByMNal3uiczA52KO4OZMTITlPTFxDRbr0DXhmdAEYWPlx8EhXd49P0fXWB994qxZvyv6S0U85KeKerpqV5C7KZDvmn7RbtW7X0L8yvoVLzsR8fVIJWmGM94uJ0qQIDdidG4X%2BuOsA2tdrur7cv6W5xyFDTLa4vhX2EBrQ5ikUHzX%2Bv3DCkLXUxWmsuGKt7d5LUS9uCPLgTo7%2BzdmqsAw7FBe2gpZMAngfmINTB9%2F4hqkuLe2JPXB%2F1yXHsNQ%2B7zi3mJiqWWFyxEcv8gIjQ87impgy4xA7prTp%2FQbJtutYCZppgHJcVUiqJG5s7Ejwq1PqOhD3fmhJs3k5eMMuS98AGOqUBuVd2cdeEZeF7MEiUYXcGlfpu4zrRiTUYYAy90ts1ev3%2F6gt8HKmqcvFzOsfEozT823%2BfGCH2k9NG6E13Ttg%2BwEJb6tFCqdHYY6h99GYR1qEDb4xA7zAKmj24j2DO8bLG10QlNxCHJbVsJBmEC%2FdA5xh%2B3yVEFV6WtCajwog%2FNr7FMqinHKgNJvxp4ZjGsOejSxc%2FXkBROf%2F0EAuYtjOr2GGWKSLJ&X-Amz-Signature=e5e0c134856b1f460815c7fcc39a16cd7172cdcee997c8991e92b72185416799&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
