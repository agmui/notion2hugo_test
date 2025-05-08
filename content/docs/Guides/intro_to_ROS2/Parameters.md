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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KEGZDR%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGj0jxbVWn2B8mMDt9Q6T2pkfQADAF0a7f%2Flg1clc8iAiEA5Nc%2FnHwv0aDuhSUtq4ieEMNziAsN3ZTY4wXS3yR8hGYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCGHIDbYxfHl4SJyNCrcA0caUETSQlOHXXL2mzOm6vx8OQXoYptBJD71hzq2Ag5IRu1UC2n4BFc4tXpKwUd%2B7zHuiKbBfsxV6W%2BV0yvn5dJyviZGncppbIGmNVSDOTFqFDExuobVW4LAJwjxcHzx7P7ibG9AjllChhADgp0uJNzfaESrX%2FVdUzIwNc3YD7IHymA%2BoxH66TFob%2FxbUlUPwxjy0vEMs9O12Y05tmbN%2BONOmXqB0Fc2MTLCQf3j2xVAQc99lYnSE3ZB0RFs49uTb5S%2BMk%2BtL8ObN4obCSHRMKb4NQ7z7MmQBGabfLZJW03tRHez4QMnZtyb15PZLYtpQD%2B%2B2B%2FuCznV%2F3BV7Y3Ue39ukWdyDzCY3vgHt5dvkl3adhEBRi2hddLApr8p8s1y03Jdvbilgqkk2dGxvQkS%2BXVnrM0XulaamuF9fcojkmHxRQbqBYFtwbrgHRqjhLRPpoGSCSP%2Fxi827%2FdjIXMySk8nIR12Wx3YQETuj06UAqQKUHLXhVGl%2BeQ%2BOrfKCfOscUpALXi3CH%2FVud3vUUXWBRQDOZpFyJR4eygXp55Uzhrmwq6YGeDFMFVDSfljLklhXuFYSjqdPOC8%2F5r5lz%2B%2BPxyWcciSzhjqki%2FoX9JKOfjU7IlZ1lsniTQwyIw3MPqw8sAGOqUBrYtg9xEpxzC%2F8CRdtj0jaQpopU30yoU%2FoNM3yYrr3jnwA5W0GCaQgjlxeuoCmHgGLgvItCPHvjKh3c%2BdezoU28OMAmX8UFX1os6xO1vFs5lE3bs4JfsvVA5BJAwd8Xc4zXU3y85gF0opGnRqxgD1MikByQhKUtuEbbLngczhigkiBrJ63O%2BCPeMQVJctqy9ZVNrhVk%2BNsecIKPDf%2FNnG73W1yXwO&X-Amz-Signature=2b9205b326f0ff5f9ebb59b30b704cdcf64c6a11e51c5d5b032e40c5e7aa45fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
