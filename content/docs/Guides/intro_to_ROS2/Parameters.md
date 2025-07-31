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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDGO6MXT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHxf4hsHbFVnIq%2FnHuO3%2FL9Yf62iActC1ybAyWpvAs4gIhAM%2Bolq9Bon7OJGQGNV8PZbmHC9z74RFyWNPdRDZbNP5LKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzcf7PE3crGbmP13UUq3AP62KmO5ulSdi5qItlkzsTuQPAIQVKvgo1BEk9tkp58NQkaiZVKlgQ84gpKpjmFV%2B49FCEnwY02TyWr8SvFcVbMLbJgPknvWL%2FZ5FxiiPDbzZKV8Brk8BXYRjaFLlf%2F3DuFbc8Bu3OYj%2FkHG3%2FuzeMOwSVTO%2FdqKbxmWg%2BAE1ta6f1mouIHVa3XQI%2BVqe7B4YhAkH0%2FTth5dc5Qd4altJkpGc1zdIJJMaw7CJ%2FpieJ607dGsje30h1OnIyc%2B2BCdKqsKXnTEffyzVnE7ys7ZpOxkokpfaY%2BFKwR8A1bJCUXKDwOrj5JbrW9sy5IJMNIKMibkXs3FOQ6HbEuL%2FmhytfbSH%2FSJkUSEmqdJU4tDEDBmor%2BuRCPYARX59YRdclpa%2FKlIIOj6ZEZnDYHLtFoiGLSJZ7Tlvqp7hqV9t9aBTRHrCeXrW%2FKwhQcGTrH7sWA24C7mm625zT8QXehtTnAh0tw2T0rBhxUOhsbnWFQwanQuY6Yp944hnNzDZ3%2BSQWqW74AH%2BHioPnJljkiu40L5kNVns0ec5JpE99CSlzY34fRF46ZcxHKMzSysJYao8ZuPmIZrZzh28jzYDnwUG7eH%2BAdZCaruxduHb7JYemN09nEZ2ZZ1YGI%2FzpWtBjyMDDVpq%2FEBjqkActaEp8RL5GJ%2FweldQi%2FCq2Nv73Tm9imyQW%2FBUAcF4EVahQ8DuiE%2FQxsyj9kgg2pU0%2BUMx0LwPXoxa8dtBEtTV2XQpQqA3Mu4XccO3DErtL4XeNhgNuFHNIQUOZrAdDCg4EByghefIakUxgkKfw%2B1rFnNecexqJ7j1OqyRpBh8DAZLv8ebevmt7MNVs7mAH%2FC%2BrUBhQU%2FyCiuXb9NwMKKhzKLxYd&X-Amz-Signature=2a1905650a8ee4e59e4846c4117d9b705f8eb72d9871372165a8a191604bd49d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
