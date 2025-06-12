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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OCLCXUA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDtpcs6WfzO9FEf7Hu5t5CDERBcPCnT0gUeC4Hjtx%2BmkAIgOFG8ct8lIp09yxjY932tW50J03Ut4wgIfYNqx9s37CYqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAyFuCzAtqkgX9hwircA5r%2BjngfK19nii1d8LmmLP23YI9qlJrqpJkL1J0%2BV9j97OLK8E2pGOCOj28dlMxjOG9nwNAJHzvIqoXuaO8gEf3jVLl1%2B5SbT%2FHkShhW2e2LsBfN0QR79j3uJPiTuMFOZ%2B6Xx8L9WW7xhIUmYkh%2BTA6sH7Te8fxp1%2BPsUiv9K%2FeTOey35WkpZtL0NrMODvDP3ZeB3N3TdNKWkwbQXau%2B83gkY3GvWRsBfCQaBwl7zGLo9ynVKRnVqMWrd8qYR%2F5l%2FswXrsqaS1LD6Ep5x4vV1bpdzb6%2F8ISkTO37Tj%2B%2BMVGFEP9GwI4JvgdBKS0ftI90mXSr6TIoe5LYJ7eWYYazdzmLmny%2BeK3cB9nweLSuroorYUhjtOhb5mXs2btTxAglXCR4RsHEHb%2BQDn%2BOH8eFRqwVYY1P9It7jja%2BkCPprbR%2BbbghaycLH8ZgP6i7BkOrkUfvJ8wn95XHmW74UsGda5UXsT8hkpzHhBy8SJHQzsJ%2FGWwTKtuvjqR6eIAhG9sXCjYBEkZVe6snb8P3Kd9pBz4NJPw%2B9STkSLk14RdqYO5rwSSDsYmiLi82O977AiSQDcdNK8UxG2uE6UoylJZDffhBu2ef7VOQtqhj486D1ZYEi%2BRsM%2FqxPoMd0SD4MJmIqsIGOqUB%2BWCCIPRIn2OJPLX8JxbyjPdJ1GLWLtFCi01BY%2BvWFU1a6xnMFpE38oLtZZ%2FRFO1ZdNt%2BaJ5nAymLpTBi9yOYlLKcUNB4a50dYtfenRr7LatvpC1qUkvOGz5NNoAZMnikdZCFdV4DjQJvMgYDG74dOMMiDjsWZP44wx4YGMvJcLJ0rT6tVySyP9BrkeJ5CZ1RJAU1UPS49rBmGwySyPa0kllQO7F6&X-Amz-Signature=2c8e549c2a034b43a83bc42b76a1c6533094b1dd9d4e10053d44c864040b9edb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
