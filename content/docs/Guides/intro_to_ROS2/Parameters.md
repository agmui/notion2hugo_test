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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGS442R4%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIB%2Bku51dwuozU4HCTuhri204onxFh%2FpYdWvNVPAMbsiMAiEA2tQcH8GQwjFfvDbf%2F99V48Ccq92fvqMEqFbSzKD23eQqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQ%2F4jjkRSds%2F8T7lircA4xNY3ux5MsETeKMEI4EWTP1Ise9ooDxwIhNxEMZjbzVj%2FzdtE4b%2FmonyjBzTOylXcNtOzsH3qEwsfWYFzYwHdxh6xG8kI5k4bhrwNu9FrFctSqhGXU%2FaquDVU%2Biew%2BKR4NDYkZW4k%2BICxGclHmzR0NMk9MMMzGtGBFa7Unw33V2Rsmc52ncEfcHbJMwsyAUCo5E8IHL86JPNSTIDHxqTUCqUUwGZHP8erxYUhL3I5LFpIMx0weXygorWWBA0rYTsfAUPRTUbPEWtr9DQq%2Fs8rzaBFNvhS9ibhuwjnmtOZoshXRbEEO3bDCp0aaDEZyLh7xVapkiZZC1%2BOR%2F4w2WOkYoCYAGCDR0bVjcEe99OgRdgJi7Y0HR3GiuBUX8f6s%2BAOz%2FFlqtBOFOZ3NnC8S7IQCDhFFzqsD3vwrfTAYbPt9d7cyzQjBkTiH%2FPMN3LM0kgreDiByp0NjwP6vXSi2ZwSZVK5nPL7F6xk4X5SOcjb%2FjnVJgY4eIrL3zRZyOrH36lngHA5GDXQEc5XsWjZLgxaNjVpfrTeYYQwNu5a%2FnONsG%2F7ToQm9MnrwynRlaxuTSX02ruZ2jJDr2Oa%2FlvOIAV6RSG0rDiJ62mZ6jzfmq4UEbVqTlt3%2FN7M%2BTVk3YMMicxb4GOqUBZ%2F6nUfffj07OhRJDDX6p9cNAdFQHpI2W8YrQ1sg8HttmQr9SJyX%2F%2FXnfEIgAi8DwrHXPZbHwMyiX9mTrX%2BrIszJY7vY049XhelEyroda%2BJFHaJj2B0ZJJEMXgoozPx8vbybfs8p72B5bt75ZRDktzsStXJ8GPrQVeukO%2BPn1hB5%2BL7P7fT9W10xP0cU7gY0aunNSn9YaW1PhR8QPUQwlCLoIaq16&X-Amz-Signature=144425e51e1ada6163150840a3722eae9b046f63eb8880755badbf49565ce1e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
