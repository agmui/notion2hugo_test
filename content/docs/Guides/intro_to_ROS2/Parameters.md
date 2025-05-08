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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK6ZTPPG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHQ%2FQvxiTztGO9QuDjg2oJWkgZiU0cA%2BetW0SdgafGuwIhAJtchs%2F%2F%2FrB3okS%2BtGCkqNhK015QUvSpHTJmuPipz608KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkaY1EIkYOlDw7jqcq3AM3CYKt%2FGQGoG97Um4aKYQRda76fB6lCe3htObRH4jjYj%2Fwq2D6zGh2syrSnK9uuogmPoZVua25Tt4bJZkgiycvgqIWkeUeLKbnyGo9Edz2W%2F4DvvnG8Gwfc1bwxNhPathM48%2FrXiRMD1PSyJ36f3Uyv5URjODjGv1%2Bd7jCAccnuN46umSVPwivV0b5W6S2ASnOZpYrmCUy%2FJ%2BGJ3t10NlQyXPUNQizvAQjJHOFcKUgaA4Zqvb6wbODJUs4k6zTwsOmI8L2%2FimrwiwwzDZLO3JU13phgnBZOzCt42VEAx%2Fek5PtaOwgIKP0JJQ5NHWL5nSFhwMl1o5GUbbSbV%2FPsr%2Ftn%2Bn9zhLUUSY%2FWlkOuccUC9wbFZbrIHJ5UUd3PJ9h8pucITVUSpYN1f%2B5LqhhQZl51JBlrsM3pEqRSabs6bbuhhfVJuJ8Xg1awa1VQjmBa1rAAiy5%2FH0F044QeoqezFnqhYyeUn%2B9FF%2B73FI5f5%2B6N5InGywHqnk2C0D9XAI2VMmf724QlYXAPPUTnNE9DX3x7210gKG6ujdfHs%2FtelRqWte%2FDNdQ0wC1C4dbvS%2BFfs2Xi9RX5H%2BX%2B3zO9f8jHBVeAQZIOZM9MJMCLGTcuAbnWWJX8BXEQhQBf09GDTDH4%2FTABjqkAWc%2FUfC9oLwJDbfLfmw5t4CQtFrKxggvmH9zIGs67yjiUn42an5FFSZOwRqYhmrA13wpn%2BkgEoUbn9d9qe80olfzm2oMlLwQu8SbgSMgoLf58HPxEAR7FkeiATmSnilH05peJptdt1tQyiM6SyvVwwVMxgPIJwdYB1Pm5ZxZaPotkIeq4TofQsdYM4vOPfjFYDv5Pc3nGzaVd5XXlyQXVdSxUOEw&X-Amz-Signature=7dcc9cb5a7aa07cac0105c5060b099b71b2eb926ed726c71adfaf8d88db73f3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
