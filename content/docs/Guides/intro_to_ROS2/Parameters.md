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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLCZMIME%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGb%2Fr47%2Fv6xSty0abOT%2BTStcCL4nv%2Fomju%2FRRf61qZ3%2FAiAqjkZc8lZ9dLRkbcTQPfqqYh9%2BVlRtCGj2uvDjTXT4RiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoAjXlsx0QgHe6o6aKtwDdK0VcfNHlYBbNu91yWi2YC73BWyjoo7wbPINcD%2BQsxA2ceoZ%2Bdh95kT%2FzLrrpIgw4F7J%2FLm5%2BtoxUUhgZGs3UTlp1Gawfjv7onUpplqamt%2F8RvdMjVj3ubLftGh9uuczw9nDetELAn4szR2aiRTagOd9OdGdUxLYbUbvfS40qbLfvgf7rW9OB8clJviTOAMJZtFizrJBbDjkjl8GvJX%2FgVAMCPPMtmRRbb1Owfu5gAqzmTtnS04NAS0a9uXzT%2BOkxMD2POP1xk%2FNSb6cnfZL6BWXhEZoOMSJwGxN1aVXWmR3R5iEziIte6khgJa1gwX2VkpzF2rs6HN6QX9xvH6jbKVtwYUXAwF%2BCjQxZitZg1kQ5R0d12dmWiMFD5uugu5incECfOPHI%2BmLOZj%2FGAZw%2FiIAc7rC2mNfNmE4SQLS5xmxOn1dFsmsDZCWU3WJSbWtNSgIKd0mWITrS33TrhUgB2wcgf92M9W84Wst1YIi5lt72XG2%2FVqgQxmn7Ra0yFMuCc35widA4cZttlqE7N8Xm9aeUx03l5PATdS4b2qjXCk3fZmXE1CTmGJkRRrkhIAMzJhBWd2PPjdgpCRqC%2BjMrC5OevOipBQFZIrp3md%2BwiRnxvVnp5Qhm9q3gfkwluXpwQY6pgG65MvAchd39Dqd9W2OFKr4ATbfNh2M8k7Auge90XbCT5ORVkWR0nmAHHIH6Z7z5h%2Ftb3D%2FdkHKzOde8IXidjJV99a2fkaK%2ByzJ8WDDTSB8ZCtAEnCThlKT9tHqA8agGiwDR36IlZAgyWjjlJOP73Zw51KOueUVd2i9q1FjIdYP7%2F%2BGmVYeI9fE7iNE6hbBwmbFFjQxEP3ohL2gzS29yuIUSja6Teii&X-Amz-Signature=32b4ede6678ad75e59a766948ce421863de932046ab7350264bd78d2ae59e3bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
