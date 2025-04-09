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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG7EOWUV%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHkUO7B39UcohVqP3lissMPkVXArXr5Z5cDVnrPWgeluAiEA3U55Fl35e5p36Tq8i1%2BQIp49mNFIXymvJmXExTbZ9VMqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyROv7BnnSDIXpAjircAxdBAXHAlLJa%2BirWDE7kIr0wuMchzHva%2BOTQZqcb4GDiSUdPrnOAdF3u0pjPo6jkqF8ewvMkZtWyvTQInMLmzPWfzovuZWUYLbfCU6CYViMdsHbLima8SGlh%2FiKhqNwnOwyPKDGS7nnecIgogyEMCh0OeJ1sQUK2YSj7YXRqhiOo4g0XQc%2F7QoBHNkH%2FIgFSSanduirH9sLKIkakuHLHNv%2FxwacQWVt6x%2B3NA905PHi5gyd2ijzoOKZJdTOv%2B9ZxXuGVS81%2FrEmtcnSEdctmG6s2tRbbOrhSUO7iaSGpUCuT3EQ0yfxH7NKhSKtPYT4HHAvzgZGZJNN3127eG6%2BbNrExvqF9LtXlho4SMUVxdxOJXuKPrhxBI%2FrfOY9UEYniWn4FJi8e9wVqn0%2B%2BvrSQq1P8pTZlyGkKbReSt2gXwNSMFvgmOsvDAhkOdq9NmjfbV2Whd9LlYQDC4Hx6sivj7g4jW%2F2ogin5XccCh%2BZumHVhQATMU4RyRG43Tg8nVx8F3fudg0xJTJLRVJNF%2FiUQagY63AXgAuj%2FOhtt13DgM0bk7WPaVOK8a1HwwmeLklRlO64BP45TRCUk%2BpuAF41vLahCdK%2B0BG7cZ5AJlmzwjTjpO%2BXvN4jgNIf0aX7YMLqy2L8GOqUBwmYSQYm8%2Fr9wuHzVch%2Bi1v%2FrH1OlZ84zdTVRtp2Gnj9thi7PCI50N%2BE78mFYkyj2kxrKjUbYu8ek%2FQ%2B2e6KK5%2BGnUsouTlZrF2LmkDI%2ByR%2F92dLNkGB88O%2BG3JMl82M71cvtR8znAaycHXYyjSWMIlm3gYHW76kNMlXkWzuMJy7O%2FR7110qjt%2F%2FoIIujEY1q4VkJW068Mj4XKX0eG53Ly1gWIjue&X-Amz-Signature=9a2a97a072f72bdf324356683b1439ec06f25a793a69949d461353d389330b7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
