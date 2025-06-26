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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQ2SL47%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDbZd5h0Zw4aLR1B%2F5pyA8u2MYFRtvEOWNi4PsRArXBVQIhAMcOiVEaOkO%2BCk0erMA2wCLNd4FPLIAcwK5IQ8Q%2BHIo7Kv8DCFMQABoMNjM3NDIzMTgzODA1IgwbAiGroqwsM6Z%2Fq6wq3AOY9W4K5tTVv18EW%2FkGq19Q8Cf%2B4UHss8fqMLKn0vKpviCtfaHJ4If4AU1itzcir9DxE4fRLSUxsuHVXRj7KO5rClcge3I1MaxhpyYolMYpdi1u2bZLGFCD7yMwfX2ylmuWoEZSMw4BLyYjmrMm6aSLWCXkWB7yrN2OcFIc8RM6qyUp83XQ3LraNjV4BhKRyjwm6cSB6tWxnS10S%2BJo6RB5qIIjvEFybQq9WVQMxisS4%2Fnexvd1i7z%2F%2B%2BYBlVSfpAiz8wEXnYtqR93of63hWCLK9fAKYVkofbf07Bqd%2FXe9CnPGqccun1rZtdIbicf1n7P%2Fxy3bhY59VnT4rMIyXPZYDVhvAEqmMHWQQwnxqsMa2fgzgeOxMOodAZVuJUjwaGWbMseYVYg%2BwsXfhEqWTyy9hVra%2FOLA1H9zhmRui8Ow72Ub5uc1EzTmkCNlxhwBT0nDffooAzXJRFH7hDrdYX7gVTjC8nEpP%2BTb7VLM%2FvhIUlZxGQwB9vaojzGG9uEDFORtk9gNqWvEwLHEzF4CH2O0XUfQ8cxtMg3NM0mpVhnLzKgk%2BotnrI5ihTAEs9MAnp%2B9%2Bn7%2Bmf3g0LzW7bH2cXAhc0EG2ZCQRBxzd%2FawvPmPPTCUFD%2FhsyZ6E6lZ8zCy3vLCBjqkAfakEy2hacqjcmJnP1s7II1wN6avQ%2BcibMyKRAesFT6itnSA8UHhQ9Z7%2F4Qfrq9d6cJ6BFSdMe8NaBim3UUmP9ryr%2FFV5hOTgTBapujZukTdMv5wUhJmtrmFPr1r1ibRj3LsqQFjr%2FfC1K7OSclfjouM%2FpLbJ4dqQXEg3mnC6Yhl48LtfArVUJEo%2BSdqdCao%2F34P5WfVdZkPsgWcsYNB5e%2FgNJbt&X-Amz-Signature=66176e67997fed88f188322dbc1575ee4b048fcf994ed19cc180cdf5611593e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
