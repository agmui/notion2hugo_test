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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5RN36L%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCcMZpfnPAxEGp3VcHMdqcyJ2DFXKvK%2FLf7RwmchBACqwIhAPUFOIvjFXNO3lFOTOqLSvx%2FP2SqEUAA8SWLfbZGrsEKKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5jXYDewhk5uepIfQq3ANle5t8YKzx81WrCXgZS6pRvjeAYEzV3TL8vx7877QIm%2FG%2BMNzm1Aqzl%2FdbVjAK5tT63FSUv0DWQDlNn0d76mX2LbojsTp0cU9hFSo%2BncAcbRLdphemvxcvbLCEi%2B%2Fnh3GFwuZX3VKJ1wbSJtarzKYOPcbOW6YTvym%2BblX7L%2FUEnanJRMePWNPJC%2FhRGYubed8graZW2JuefQkPE9%2BkKdO8cSvtHYdgr9JA5CtwOVp7HvYteW540S3SYWlP4ude1BnHlkCPd662UNmLpSOKpIx8Pn1F1zYn7lY7oMXkFT7EPXHTP5LDpZVKy%2F4hZiUSAw6rBehZUqvUWTFOdbUY8rc67wrL7oT9lBULmLyL4w5IUK55P6hZNmnePUGzXMqh7eY96LAcbF9RYQjlTdKPCiqvfq1j4xp2N%2F29YQ9CddOzHSKGohZ0e5zuy5gcYm0%2FiCs%2FgX33ImBdGAVkwFgkqWlWbZqat3yYi8kh7OvwNwpaptUMI7bFtqO6uxMZMFpyQxJJOhsUxjxrWVjOlkDRQoBt2A6ozBNPRbC%2FDyaOuMCzcwsu0QYCLU4f%2FclluVIdGs0NgYTrFOLEI2fN6APG71Toaj8YohqBdk%2FFku7No15wXVhs4RmEI3VkuXK69DDf%2B53EBjqkAcjtO4IIegYBl5X5M5oNXWLJCih6%2B7FGLu40Gmi7OlYdqAGOoDtCOZq4giseNWc0YeSd16Q1eRXv3HMRFWBKvtzlEAbYbVFI5wcLqKit8bXcU5UpqGA9%2BCNt4x2VoUUj6R%2Fb5RZEFn5L3ypx9ba6bMH69Hmzec1QyoRV%2FK5rLxxrgpIznilOQKpNODqdsNKJnpDj4z3OQzdJv2D%2F%2BeXqCL5jlrga&X-Amz-Signature=bdc0ceddb2041d5ff259fa0fb5f0197e40f295a13fde97f416a4ab6eda02e41a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
