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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUZNBIB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFaWx0xHJzO%2B890oT%2FcdDF62RJwHkL4It5TYuuqW78r3AiBws179TXTClBi3kcAxWjA7yloyRVRJl%2FDS7RL7p8hHHCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMmsezcJ%2F9FfGzdc0UKtwDa2y77nTDkvGKzFBt1CtnSVGL8mkQlMWxHXeBQ3fWX2%2F7N%2BE0JB1V3VRNZVKoQfzPi0bkXkgnvlZD%2FcFQRg%2FGXxoSL%2FLpfbOUeRQFVI6UuhYm8KZ4b%2FFxLGk0lOw%2BrOB5OYR%2FTNzyfqPsgbY2wgAJ5pwT0k49O3i7Hwgydt%2BxDYNMylm4HU9%2FH82LYFJ0AyVsP3K6c4Ooe0xPl1G%2BuLDvSoVAT3XjDY5tCyL93F7q8zjRSqCxRxZYNB%2BQrPxRdIqAtE9oi%2BPb5HHNoQFsSfcdboY9VaH1dj1zoH0cqZyuyjEX6EohyYhQZws88n6JJbZXGtPCcboRNgkKKr7mkxn4dRtDjB22fxqUKAiC4wYUTKc35QxNprkjMt2foXuYBLxkl7pkJKFKSSWTewGTAZDWbI3yndWt2GYSS12hP%2BqmbE66Os08Ez2Pm3ZiIZkX1x%2FymjvhacVh%2BLftCNmGqExgSZpW9UTlA2Qk%2BP5BOW36iKCBP8%2FS%2FMG5gfdsZGGG62aXSjtvniwFTvLCYDLuUDW6SF1vxbUy46dJIALoSrot1SCMudqvKtLsdE4VwWZE%2BgTa0qXbeHivhMMF7o2YXcA06nT1oXjUP2iTQ9ASf5pldObdOf4gM4t83dyeSGYwoerLvQY6pgEzBZiOtqALWqKVfGUjTyhfqiPSyNMbg4uTo%2BC6BK%2B%2F0e5v4NyI7dPwzmGdiMleinr2g7v%2Bh3IMJ%2BPTFN8gq%2FP1hQv2zmpxG2OEjsLQXXpRVEhKrb5jqD0ERxOcZiCnv%2FEYG0BEnbW%2Bt7CXy1KF6pxudubrfEsakaoRv5URARB85MSl6xVXFBXGYmm3zuUPRb4u%2Fjy1ICWONchytyDbUZ7nfZrefOZZ&X-Amz-Signature=e0d5bd474f2ec06d650932d6e8d5aae67868347386f37e84682ce25eb261bbc8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
