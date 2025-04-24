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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INRRTN4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEw1ztd07v3IEYzlx4MbRYpnBWrR%2FnV1m2Asj17yB6bsAiA9lmL%2FhYPhlIuTvJRVe4pRk9NmzE%2FaM7etFVLXZHB%2BSSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMXxmW5%2B%2BYpH56OImwKtwDiaBVM5sQNhaSslWbYRj%2F8hmJ6%2B17Y6pb5MrRzAEzwG3Gb%2BJ%2BOUr8oDJzN3vAoAPAV4q7pJHIqaYE61%2Bcv8qpLQ6eWffueaUjtVB%2B3H72uOAQbHd%2BHVb81Pk8qteh55TXzjuMWQrC5PPu8pS4db8aQ3wbfyAl4X6jc56eQLRfOPTUIrj1wBoIoBlS3SXI3nwIC6HMgjo3xboESndSyZgP6yDKly5UI7Ta%2BzItEeJmhH75hgfcnhs%2Bp5hEUD8yK8bUcmD2H1hLx2l1LOUiTQUfFpaMBHu9lsn%2BLRRvOIlp8%2B9eGFsaziCo7qwxKobEXUh0GO%2FPal7%2BTaPzk0HwZXFXh4KM9z%2BPMfGrDCKZdm8mQ00BzZ9U0SJqNatvpNPrOFZf10miHt5hBSdLZbRm23QF1lX%2FrbGXX151WU%2FN%2F0ovoC2bFXFsWcsDupNz0YCTDrAPcBGNODA%2FFZy5Fn11%2FBMAZXtks3JYcVq6eeJvURxGVWDTHiETTWROYKY99qIojIlng6%2Bp2tblkL3Fumz7mCq1ytUdpgjAhfG7lsHyga9CfjLNMDI4RWhuPyY6Q0%2FY3HbhFfp7FwixgAQLiyWyTFSMvtXiJUi7pUHcBc6mpG3BNMFKFzM18JukD1bTLpUw%2BeeowAY6pgHUP62lkSEPFZupKqwRNgJxxK9f6jKIwMZfAiDtURHVBqRg3BP199%2BXQhf%2BWpmz37ZUyfIRAYUoY3YPk7J%2FGLL5eHlgLT7DJUoGD8BNRwpD9kayjkO6ntZP0pTJlWs%2FnJtQSSKOqH3qFnP28UHz6Yf7MmYxnwLomtINwPQXlUuaGLafzv8PLO0o6Gdb5SEmQB0a7uIaJ9WrLbY%2FNLArxOW7WR39g3Ao&X-Amz-Signature=2147da3fa1c809b3cb0184adfbe646c268ad5955af720b806f5ba6ca4b10ca55&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
