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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLFHSNJX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCVy6B0%2BptQCnw1rrcpFc0Aa662%2FrJZX0DzoBvQrqKHxwIgYl%2F7JIRfH0%2Fn%2BoJoeFvCpaqBziKkruSV9periMtTpGcqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdr9JHFIBn8ZFqKYSrcAzVotHG7d8%2FqiN3xVtYVg83ihHfGJBYOEU60g7QVR53x0o8OH0AiGe6MjKl9oUUfV1yzcfLjpMn4QEks9TiljzJO9GZUkEIR%2Bjxezs1qB%2Bnciaq5yp0fWHsHO5XGY6lTwA6LqwUabLBaPBscC4dZFWZpi2wt9igZLzWlnn2%2BmDbPDb0drGBEN4Bzj8VM59uosaFlRj8pWRD4ZE6R8kjnJ84uDIahsd%2BZlgI5jLMLP%2FgNkyc0nqIGbXIoOU205vmujfGJGs%2B0Z3ICRjev839snRagVmv2WUOjPGIy6xNjR9rspVIQNYoWRY%2BWxiTSknzPgdgfeUxh5Y6rxZ3gw7ln0P9X5GDStipN0OcDcIfmjZ404GJOae4q6PNXcCxgG77oU3ac1JhMuGMn32aKe%2Bj9z5SAxAy%2FmHBubZeJJGudCgtTOMNx2LIXCHk2LSqJXC63p811MHmn%2F7rCc2pQpLx05byvGCBiUZZYKybNh4CHLlhX%2BbUvMhZKY0AQKlMQ7XCbJvY%2BIryq%2Bw0rzpY4KZpMZOm4tPjdtYzmrtYvGb%2Bkq34zhGH3DQbLmGhfC%2FxVWvRE%2BtB8ayWN1IFcEZKAKo4R0JrqiQVJlXroaYlENSzF%2FBF%2FTnUvxbY7yXkTe8KiMPnfxr4GOqUBDPLVAJnNnU%2BXb7k3NonDW6tOOivu%2F3%2B3rRxP%2F%2BBHx75iYS1IK6AL5NBscd2zTSqeXQ4ijZlq7PjQm0WpuWcBZcHyAUPa4%2B3fUL788qZQ3DbKfAZ6IGLjxf12hDu7mLIhi9DGwcU6J58%2FJYzc843fG30kR5z9%2FA66sTbRspcv8NnerNy1CVVI2X8F1pjEhdxVfQV6xbk0JgK36gDygCIE2jBpw26Z&X-Amz-Signature=57f0fe197afea886e58cba53b6cde0262b12e9db5e1d4ecb6c44e0464db0c69d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
