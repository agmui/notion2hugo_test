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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQQ5E2IM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCwrfMxd1qOvIod3hlRrAsnNPEiZhArPDfQvZvAE5CR0QIhAIL5E9rBTxF9yTzIxLZzhhZhm3II6npt%2Bmm9tijgzHGNKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK2Fh78IwR67oBzGMq3ANyBdk6BbJid9lEWpOzNOEAKkBlctbjbpzOVoXUl5LhmKdfqBwOMe2aTpvqbb2KmHg%2F9ZKeNJTrzZCiTcZQMyK3FR%2FGKEJL2LJJuN209dFvtU6qeQvQkCNiHI2twtuhCD1PteL9x7MMVCNRVnfoTwDQ%2FNnU361TciEUF3K7Phbdizk4ETO%2FdMUy3SY5bu5mNEtj3DWXLmZDoO7iVmQN3%2BN%2F5JpmU6N8kORxv5bhtnKvgQEKCmaCpqiCYzBCf9L0UbWgGO6GVoAz7vgLfQI6N33iPQNXgYgKWYsCH1aLK9GeXnxOKVDt0I9dhmrHK7JsfenaGV%2FRnws%2FJVoa9klVamnXi0cV2BLLpIwEvgycH4Z5ILlzBPIgCXyYH%2Fb1YWSPN5Ww6WcaCXzR%2FX31u%2F1wgii2GMlBdMS2UPhvoCfU7fiT3oTb3W%2BfBJUcvqK1HzzQQe3cRCG9sfKlwf%2FyFkOB7FUR2bJDvxM3U73LaOZAl%2Bob34Xj95%2FJz4M60DIdJeWWKtLAXKWWcvtvW7TdYWLJqr5y4jpcdDCnRY4fRr41IjJeLOqcnv1HAIYf%2Bo6a5Ouny%2FdwXDI3Z8lzzAX4nRCNp%2FYtB44707xHKYpizB8JfGKrIelpNLbFmbFZbmB4wzDz16DABjqkAQrEAo4dA1oYjZrW3n8S%2BLtOTsn8uUUXGif%2FenO%2BmZZ3e9j9Td14vYQlejHQNk47MhNKL8JYQeMyUuXyD4fmH4s39IT4w9ndRsEQaBp99jokGjnVWNiuW%2BgbabqsNSCtPsQBD84mycf24vNhsxCwh%2FhkXtZBDJj27gUswh%2ByLcz5wYd9m4lYX6xDocCG8bvzjII6gxLbbW6Nlmnw4Ghgn8Jp64KP&X-Amz-Signature=7804a93eaf5f5351dcff203c1f227ccad5f1279b26ccd188ab77c0797c30d32a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
