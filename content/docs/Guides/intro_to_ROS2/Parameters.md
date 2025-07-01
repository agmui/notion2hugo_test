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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AMOEW7K%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb4AGlmzH735jkAHuTKocbKARA%2FZfNLWqxb3M83pcLpAIhALp3kkmCocevsEHdaxTe%2BfYVfyebsW9Z1koNDEyWuDsbKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FDxH4hU%2FIYXdz%2Bjsq3AOBxjmBKnwsSDeYs1rIlfpbSHRHbkbeZHUAou5n81YXnYCcMfdi7OIfgs46ulfZL7lNAdM0WdK%2FYf%2FeMqyVwP8cAl9s%2BbyfiSl1maeb8vsaTObC8Wtlb%2B%2BLlhq1E5Bw7fIge%2BAVsboGMCzxQm341zP7wIUx77P5dnR9kRU1SO7YuvNcXP5AaRnxIRU4eSJNf12SLJNhzbwV15ItWLkmlxBm2giDgTi1WCMO762F7CQUFJ7DywkutmfTHaOqJfUgVtWGTGGU5FSaA0qtsaZOLYBGIV41h%2B7Kx%2FNCjd41XAzTByLNLrbDFj%2FACvqUy7IT6Ee%2FXBKda9dI4Ji1xrmR3uRujmnVXOJdvjBqfJapmbJFqU83gixmdMv6QYm1uBfWqyC7WfFebcmljIrzH%2BdIAQkW8p%2FcrWfRuGKa2O3hVGaxLtkd0pRpFg8gKcCcQSQy19BAiAJOvD7jKw0nv7ekTKfwrUs%2FyWpG8xGpKvw19odocXSTf5V7PJio9XHOOfFcEoDnRbu2FDLPrkzzyqQ4PvAflBTHT5rQ8V9qN%2BNowlQ6qj5s%2BApsfOtm0As8Izw%2FThR%2BxDW7BJdlDEnmkqQCZgOvAY37cQfdppPay06lj7w5TOS9WPUdBQ6MrD0mgzC9h5DDBjqkAdOfpEVkITNtE9fPwlBMz8k0LJhCd5ItHAFHgcOgwhFfkF5uxg9Qtsash6bCS9yFiQTSRwppYtDMZUy8U1BkPD9CF8wQxfdqBQqMxP0aTFdP%2Bc98TlYUy4OhhF12TUV%2BFDKAxJqCrEBftnVccZWfTbM2xr6eC1ZtMkZdSKG4jF6i3UHVxIiraerhpK9d1O9QskvSP%2F6r1fBGNxMWauYC9ru1aRnP&X-Amz-Signature=ce58443a05301232ce66df23f5ad413291b527dee32d0e88f103d07d74938e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
