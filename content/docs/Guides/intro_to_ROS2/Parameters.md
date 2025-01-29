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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF54BY5N%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBHZnqltPdSldAGHQfDtXwO5zMmNu5RsSSjmTzLPY4WSAiEAy8ASj9fu3mnm%2BtcZuMEXKSoPp0ITxKoeVT04tBTJjNEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQkKnvCbdyhCEJjJircA3q3qR%2FunnV0XHY9N2Ec3%2FpWHbUhoaQNC%2BBlkEXhgv8dKRpixul3E%2F%2F%2F3NNi7YKnA8aA9dSDD2QCXvvxVoqN5jGvV6zWpcAQPt1kzsulUz1JSh02jgfCOHvpOuxw2E9fGInMdqepjSeiB5J5zIqk4IRp8b9ljoyMU5P9fnFxif7Duy8yi%2BRJn2EvXXOPFUbzff2WACIbt5Fms0zkz4eBzLA%2Bbt26CEIjVyCkUPgLq%2FyDCbxvL6mzeAU%2FV7%2B%2B8S4Y7rwYV%2BH0JH3%2Fm1zbSQVct8k5FoqwQTtxIe0sMbRFAJ%2BrEiuUt9%2B818usvVjGJNP5YdebZOBzK0xyiDzmYYRxqfjPenAtwDFYC%2F9H6w729svXpaWZGCyjNTkm%2FGaUj0xYtW2wo8plpUwciK6v%2F7Un48j7T95CBJ8kv0Mgv7iUzndyyQlWRA3CwUj0qVskwK6cdcC2WMUeNI7kSGTrrQtwSTT3RJEdyw2bNhVHtvDnaFZDY9RFFJ81lXSi5BWa9jYAGyKLCLdgKmdqNFtt2ee1Ljfz28CGE%2B6pFpAcB76OnwEGEkK88kKmin8lTS5k8mfKZX3FuPlT72%2FY32FdMjDPFmMYaBAodr1E3HqltryRVvraQxYKJXUwMm8XPEnDMPy75rwGOqUB08SMEFSlwGkSy25KqMDG49ZVEaqQprXLPClQjHEKidKH7j7Ykw1H%2Fc8niHSxm6JlwOhJRCgSaQlQtK7351gaqf4w%2BvsrOCXNtZH%2BDFKILZ7rHRtiVQuB1laWOpefkkYuHpTU9Llt6lovlqCHJmHImwNtEspMqq%2FCNdkn%2BBh98sLIUWUIQbvFchNfVpYu76yUpbBNbRZUC0%2BogRqsj0hZmwGcFGe1&X-Amz-Signature=a13c492366063356a6093703f62090b1d83515b24a89b19a4c3d47165cbc25da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
