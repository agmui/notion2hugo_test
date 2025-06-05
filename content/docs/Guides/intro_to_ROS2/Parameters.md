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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ZSB5YH%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCWmfmmR6NqQbgzd%2BEpsQAjAHy1bSlLR%2FXQ5Z0VnlxCzgIhAO6hIhZRhqbFyuLk14LLludfhqxiCLlW194%2FNbOM%2Bfk6Kv8DCEwQABoMNjM3NDIzMTgzODA1IgyQBYx9B0vgfO3kW84q3AMNESCRwWva0GPfxkCJY%2FbdEgJ43%2B4iJppo0Xu2M%2Bp7WE3VgxoNO0ua3OCzlSPfb2en8gaW4d1ouPPpdKIA1veeTn76G7RckrI%2BgakfX3vTv6dlBOJLETnT7wLYpI%2BT4IoNXfAykTK7ZQD%2B8I0mHKgWQPxgpkGBa0J3oGCWmzKm6OvwkeDv5TdDabZCB9YNebiu4yWa96y91QeAbmvn%2Bm2E8lmfCn97HZJTPWO92b6KUrwxybRXyntJhaN%2BP%2F8J7%2FEux8TQGxS9V4b8ph3iULtphtN3KkmHmNA22GHcxwE5lKsnuHYB%2BxweUacoLo4OCUtLrZ3vVuk7DwMV4rEt072MftxHGwTfljeBX4vst9WSdIwA1Pd%2BhNl7xgXPSaumHVYBF7HOtpfFbah9eoMPRPAzoAuY6Vz34SKux7SBEOONK2EljwPX2aFx%2FEGSlYJ%2FcFFM56kYhsFF87R9ubDVEKOVOKDxOQmlq7ZsS9NwFr0kIXbdSjMwG9jnMowDYaTiFVMy5mgb5dYmJSq%2FFsDCyaVfiBF9IyXfAghUvBM1wwekpjJbK1m%2FpCa823BnSxyDFkjQ0gGMq1IaycEZZ3g9Je4wpDwqo4eo3LEp1dhDsdvQdncjNxd2rK%2FPB%2BybNzCi2IfCBjqkAbulLHe2WXxvAoJ6V9DqEGugX7YosC6Qh%2BYFdsUOyW88KgqOVXtouAkLTu6ZWun62PkC%2BhsRPr%2FOlGLdZb2lFMoG3vcrdV9sFza2UUUdhxrU9RacbdEQeOkkV4Oyx27CRgcF32%2BmAQ2S9%2BdpEmjb%2F0YbFuE6DTbEvBpEqlSbDOwO6edZup2EPZLcuEeSe4koRzHeeskiG8Elrh9DegwXGsD9PSQb&X-Amz-Signature=c9240e062ff57d612e0d3b9a474152a5eaa8b9f90fd368fc33230477b8771ffb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
